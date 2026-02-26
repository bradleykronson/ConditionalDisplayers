import { customElement, html, property, state } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorConfigCollection } from "@umbraco-cms/backoffice/property-editor";
import { UmbChangeEvent } from "@umbraco-cms/backoffice/event";
import { tagPrefix } from "../../constants";
import { CdElement } from "../../abstractions/CdElement";
import { CdMultiValueModelDto } from "../../components/cdMultivalues";
import { cdValueDisplayerPropertyInfo } from "../manifest";

export const elementName = `${tagPrefix}-value-displayer`;

@customElement(elementName)
export class CdValueDisplayerElement extends CdElement {
    private readonly onDocumentChange = () => this.runDisplayLogic();
    @property({ type: String, attribute: false })
    public value?: string;

    @property({ attribute: false })
    public set config(config: UmbPropertyEditorConfigCollection) {
        this.assignValuesFromConfig(config);
    }

    private availableValues: Array<CdMultiValueModelDto> = [];

    @state()
    private configSourcePropertyAlias?: string;

    @state()
    private configParentPropertyAlias?: string;

    protected override bootstrap() {
        document.addEventListener("change", this.onDocumentChange, true);
        document.addEventListener("input", this.onDocumentChange, true);
        this.runDisplayLogic();
    }

    protected override initDefaults() {
        // no-op, value is read from source properties
    }

    protected override runDisplayLogic() {
        const sourceValue = this.getSourceValue();

        if (sourceValue === undefined || sourceValue === null) {
            return;
        }

        const normalizedValue = String(sourceValue).trim();
        this.value = normalizedValue;
        this.dispatchEvent(new UmbChangeEvent());

        const selectedItem = this.availableValues.find((x) => x.key === normalizedValue || x.value === normalizedValue);

        if (selectedItem) {
            this.displayProps(selectedItem.show, selectedItem.hide);
        }
    }

    private getSourceValue(): unknown {
        if (this.configParentPropertyAlias) {
            return this.getParentPropertyValue(this.configParentPropertyAlias);
        }

        if (!this.configSourcePropertyAlias) {
            return this.value;
        }

        return this.getCurrentPropertyValue(this.configSourcePropertyAlias);
    }

    private assignValuesFromConfig(config: UmbPropertyEditorConfigCollection) {
        this.configSourcePropertyAlias = config.getValueByAlias(cdValueDisplayerPropertyInfo.sourcePropertyAlias.alias);
        this.configParentPropertyAlias = config.getValueByAlias(cdValueDisplayerPropertyInfo.parentPropertyAlias.alias);

        const items = config.getValueByAlias(cdValueDisplayerPropertyInfo.items.alias);
        this.availableValues = (items as Array<CdMultiValueModelDto>) ?? [];
    }

    override disconnectedCallback(): void {
        document.removeEventListener("change", this.onDocumentChange, true);
        document.removeEventListener("input", this.onDocumentChange, true);
        super.disconnectedCallback();
    }

    render() {
        return html``;
    }
}

export default CdValueDisplayerElement;

declare global {
    interface HTMLElementTagNameMap {
        [elementName]: CdValueDisplayerElement;
    }
}
