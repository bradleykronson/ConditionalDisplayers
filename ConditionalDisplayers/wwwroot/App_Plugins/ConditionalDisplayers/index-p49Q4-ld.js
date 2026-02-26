import { html as h, property as c, state as p, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { t as y, d as u } from "./backoffice-entrypoint-B-mc7huv.js";
import { C as f } from "./CdElement-DHoHPUU2.js";
var d = Object.defineProperty, P = Object.getOwnPropertyDescriptor, n = (e, t, r, a) => {
  for (var s = a > 1 ? void 0 : a ? P(t, r) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (s = (a ? l(t, r, s) : l(s)) || s);
  return a && s && d(t, r, s), s;
};
const v = `${y}-value-displayer`;
let i = class extends f {
  constructor() {
    super(...arguments), this.onDocumentChange = () => this.runDisplayLogic(), this.availableValues = [];
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
    const e = this.getSourceValue();
    if (e == null)
      return;
    const t = String(e).trim();
    this.value = t, this.dispatchEvent(new g());
    const r = this.availableValues.find((a) => a.key === t || a.value === t);
    r && this.displayProps(r.show, r.hide);
  }
  getSourceValue() {
    return this.configParentPropertyAlias ? this.getParentPropertyValue(this.configParentPropertyAlias) : this.configSourcePropertyAlias ? this.getCurrentPropertyValue(this.configSourcePropertyAlias) : this.value;
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
    return h``;
  }
};
n([
  c({ type: String, attribute: !1 })
], i.prototype, "value", 2);
n([
  c({ attribute: !1 })
], i.prototype, "config", 1);
n([
  p()
], i.prototype, "configSourcePropertyAlias", 2);
n([
  p()
], i.prototype, "configParentPropertyAlias", 2);
i = n([
  m(v)
], i);
const b = i;
export {
  i as CdValueDisplayerElement,
  b as default,
  v as elementName
};
//# sourceMappingURL=index-p49Q4-ld.js.map
