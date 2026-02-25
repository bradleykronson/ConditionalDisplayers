import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, PropertyValues } from "lit";
import { toggleElements } from "../sharedLogic";
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

        // local node targets
        toggleElements(showAliases, true, this.datasetHostElement, 'self');
        toggleElements(hideAliases, false, this.datasetHostElement, 'self');

        // parent node targets
        const parentHostElement = this.findParentHostElement(this.datasetHostElement);
        if (parentHostElement) {
            toggleElements(showAliases, true, parentHostElement, 'parent');
            toggleElements(hideAliases, false, parentHostElement, 'parent');
        }
    }

    private findParentHostElement(currentHostElement: HTMLElement): HTMLElement | undefined {
        const parentDataset = this.findAncestorAcrossShadow(currentHostElement, (el) => {
            return el.tagName.toLowerCase() === 'umb-property-dataset';
        });

        if (parentDataset) {
            const parentHost = this.findAncestorAcrossShadow(parentDataset, (el) => {
                return el.tagName.toLowerCase() === 'umb-property-dataset';
            });

            if (parentHost) {
                return parentHost;
            }
        }

        // Fallback to document body so parent-scoped selectors still work if dataset ancestry is not available.
        return document.body;
    }

    private findAncestorAcrossShadow(start: HTMLElement, predicate: (el: HTMLElement) => boolean): HTMLElement | undefined {
        let current: Node | null = start;

        while (current) {
            const parentEl: HTMLElement | null = (current as HTMLElement).parentElement as HTMLElement | null;
            if (parentEl) {
                if (predicate(parentEl)) {
                    return parentEl;
                }

                current = parentEl;
                continue;
            }

            const root = (current as HTMLElement).getRootNode?.();
            if (root instanceof ShadowRoot) {
                const host = root.host as HTMLElement;
                if (predicate(host)) {
                    return host;
                }

                current = host;
                continue;
            }

            return undefined;
        }

        return undefined;
    }
}
