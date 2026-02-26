import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, PropertyValues } from "lit";
import { deepQuerySelectAll, toggleElements } from "../sharedLogic";
import style from '../cd.css';
import { UMB_PROPERTY_DATASET_CONTEXT } from "@umbraco-cms/backoffice/property";

export abstract class CdElement extends UmbElementMixin(LitElement) {
    protected datasetHostElement?: HTMLElement;

    constructor() {
        super();

        this.consumeContext(UMB_PROPERTY_DATASET_CONTEXT, (instance) => {
            // @ts-ignore - 'getHostElement' not in TS definition yet
            this.datasetHostElement = instance.getHostElement() as HTMLElement;
        });
    }

    static override styles = style;

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        setTimeout(() => {
            this.#bootstrap();
        }, 50);     // TODO: create better solution. This should run after other properties have been  (from 50)(fails at '0')
    }

    #bootstrap() {
        this.initDefaults();
        this.bootstrap();
    }

    protected abstract bootstrap(): void;
    protected abstract runDisplayLogic(): void;
    protected abstract initDefaults(): void;

    protected displayProps(showAliases: string, hideAliases: string) {
        if (!this.datasetHostElement) {
            return;
        }

        toggleElements(showAliases, true, this.datasetHostElement);
        toggleElements(hideAliases, false, this.datasetHostElement);
    }

    protected getParentPropertyValue(parentPropertyAlias?: string): unknown {
        if (!parentPropertyAlias) {
            return undefined;
        }

        const parentProperty = this.findNearestParentProperty(parentPropertyAlias);
        if (!parentProperty) {
            return undefined;
        }

        return this.readParentPropertyValue(parentProperty);
    }

    protected getCurrentPropertyValue(propertyAlias?: string): unknown {
        if (!propertyAlias) {
            return undefined;
        }

        const selector = `umb-property[data-mark="property:${propertyAlias}"]`;
        const matching = deepQuerySelectAll(selector, document.body, false);

        if (!matching.length) {
            return undefined;
        }

        const currentRect = this.getBoundingClientRect();
        let bestMatch: HTMLElement | undefined;
        let bestDistance = Number.MAX_SAFE_INTEGER;

        for (const candidate of matching) {
            const candidateRect = candidate.getBoundingClientRect();
            const distance = Math.abs(currentRect.top - candidateRect.top);

            if (distance < bestDistance) {
                bestDistance = distance;
                bestMatch = candidate;
            }
        }

        if (!bestMatch) {
            return undefined;
        }

        return this.readParentPropertyValue(bestMatch);
    }

    private findNearestParentProperty(parentPropertyAlias: string): HTMLElement | undefined {
        const selector = `umb-property[data-mark="property:${parentPropertyAlias}"]`;
        const allMatching = deepQuerySelectAll(selector, document.body, false);

        if (!allMatching.length) {
            return undefined;
        }

        const currentRect = this.getBoundingClientRect();
        let bestMatch: HTMLElement | undefined;
        let bestDistance = Number.MAX_SAFE_INTEGER;

        for (const candidate of allMatching) {
            const candidateRect = candidate.getBoundingClientRect();
            const distance = Math.abs(currentRect.top - candidateRect.top);

            if (distance < bestDistance) {
                bestDistance = distance;
                bestMatch = candidate;
            }
        }

        return bestMatch;
    }

    private readParentPropertyValue(parentPropertyElement: HTMLElement): unknown {
        const input = deepQuerySelectAll('input,select,textarea,uui-select,uui-toggle,uui-checkbox', parentPropertyElement, true)[0] as
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLTextAreaElement
            | HTMLElement
            | undefined;

        if (!input) {
            return undefined;
        }

        if ('checked' in input) {
            return (input as HTMLInputElement & { checked?: boolean }).checked;
        }

        if ('value' in input) {
            return (input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
        }

        return undefined;
    }

}
