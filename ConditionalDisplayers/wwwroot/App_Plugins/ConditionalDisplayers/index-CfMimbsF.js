import { html as p, property as h, state as c, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { t as m, d as u } from "./backoffice-entrypoint-DehN4sz4.js";
import { C as f } from "./CdElement-BKlwGNs_.js";
var d = Object.defineProperty, P = Object.getOwnPropertyDescriptor, n = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? P(t, a) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = (i ? l(t, a, r) : l(r)) || r);
  return i && r && d(t, a, r), r;
};
const v = `${m}-value-displayer`;
let s = class extends f {
  constructor() {
    super(...arguments), this.onDocumentChange = () => this.runDisplayLogic(), this.runToken = 0, this.availableValues = [], this.resolvedSourceValueText = "";
  }
  set config(e) {
    this.assignValuesFromConfig(e);
  }
  bootstrap() {
    document.addEventListener("change", this.onDocumentChange, !0), document.addEventListener("input", this.onDocumentChange, !0), this.runDisplayLogic();
  }
  initDefaults() {
  }
  runDisplayLogic() {
    this.runDisplayLogicAsync();
  }
  async runDisplayLogicAsync() {
    const e = ++this.runToken, t = await this.getSourceValue();
    if (e !== this.runToken || (this.resolvedSourceValueText = t == null ? "(not found)" : String(t), t == null))
      return;
    const a = String(t).trim();
    this.value = a, this.dispatchEvent(new g());
    const i = this.availableValues.find((r) => r.key === a || r.value === a);
    i && this.displayProps(i.show, i.hide);
  }
  async getSourceValue() {
    if (this.configParentPropertyAlias) {
      const e = this.getParentPropertyValue(this.configParentPropertyAlias);
      return e ?? await this.getParentNodePropertyValue(this.configParentPropertyAlias);
    }
    return this.configSourcePropertyAlias ? this.getCurrentPropertyValue(this.configSourcePropertyAlias) : this.value;
  }
  assignValuesFromConfig(e) {
    this.configSourcePropertyAlias = e.getValueByAlias(u.sourcePropertyAlias.alias), this.configParentPropertyAlias = e.getValueByAlias(u.parentPropertyAlias.alias);
    const t = e.getValueByAlias(u.items.alias);
    this.availableValues = t ?? [];
  }
  disconnectedCallback() {
    document.removeEventListener("change", this.onDocumentChange, !0), document.removeEventListener("input", this.onDocumentChange, !0), super.disconnectedCallback();
  }
  render() {
    return this.configParentPropertyAlias ? p`<small>Parent value (${this.configParentPropertyAlias}): ${this.resolvedSourceValueText}</small>` : p``;
  }
};
n([
  h({ type: String, attribute: !1 })
], s.prototype, "value", 2);
n([
  h({ attribute: !1 })
], s.prototype, "config", 1);
n([
  c()
], s.prototype, "configSourcePropertyAlias", 2);
n([
  c()
], s.prototype, "configParentPropertyAlias", 2);
n([
  c()
], s.prototype, "resolvedSourceValueText", 2);
s = n([
  y(v)
], s);
const S = s;
export {
  s as CdValueDisplayerElement,
  S as default,
  v as elementName
};
//# sourceMappingURL=index-CfMimbsF.js.map
