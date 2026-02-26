import { html as d, property as g, state as o, customElement as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { t as P, b as c } from "./backoffice-entrypoint-DehN4sz4.js";
import { C as D } from "./CdElement-BKlwGNs_.js";
var w = Object.defineProperty, C = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, s = (e, t, a, r) => {
  for (var l = r > 1 ? void 0 : r ? C(t, a) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (l = (r ? p(t, a, l) : p(l)) || l);
  return r && l && w(t, a, l), l;
}, f = (e, t, a) => t.has(e) || y("Cannot " + a), b = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), v = (e, t, a) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), S = (e, t, a, r) => (f(e, t, "write to private field"), t.set(e, a), a), A = (e, t, a) => (f(e, t, "access private method"), a), n, h, m;
const E = `${P}-dropdown`;
let i = class extends D {
  constructor() {
    super(...arguments), v(this, h), this.availableValues = [], this.viewModelSelectOptions = [], v(this, n, "");
  }
  set config(e) {
    this.assignValuesFromConfig(e);
  }
  get selectedValue() {
    return b(this, n);
  }
  set selectedValue(e) {
    if (!e)
      throw new Error("value not set");
    S(this, n, e);
    const t = this.availableValues.find((a) => a.key === e);
    t && (this.selectedItem = t), this.value = e, this.dispatchEvent(new _());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    this.availableValues.length !== 0 && (this.value ? this.selectedValue = this.value : this.selectedValue = this.configDefaultValue && this.isValidSelection(this.configDefaultValue) ? this.configDefaultValue : (console.warn("configuration is missing a valid default value"), this.availableValues[0].key));
  }
  runDisplayLogic() {
    this.viewModelSelectOptions = this.availableValues.map((t) => ({
      name: t.value,
      value: t.key,
      selected: t.key === this.selectedValue
    }));
    const e = this.getActiveItem();
    e && this.displayProps(e.show, e.hide);
  }
  assignValuesFromConfig(e) {
    this.configItems = e.getValueByAlias(c.items.alias), this.configDefaultValue = e.getValueByAlias(c.default.alias), this.configParentPropertyAlias = e.getValueByAlias(c.parentPropertyAlias.alias), this.availableValues = this.configItems;
  }
  getActiveItem() {
    if (this.configParentPropertyAlias) {
      const e = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (e != null) {
        const t = String(e);
        return this.availableValues.find((a) => a.key === t || a.value === t);
      }
    }
    return this.selectedItem;
  }
  isValidSelection(e) {
    return !!this.availableValues.find((t) => t.key === e);
  }
  render() {
    return this.availableValues.length === 0 ? d`<p>No conditional items configured</p>` : d`
        <uui-select label="Display Selection" @change=${A(this, h, m)} required .options=${this.viewModelSelectOptions} placeholder="Pick One"></uui-select>
        `;
  }
};
n = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
m = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  this.selectedValue = t, this.runDisplayLogic();
};
s([
  g({ type: String, attribute: !1 })
], i.prototype, "value", 2);
s([
  g({ attribute: !1 })
], i.prototype, "config", 1);
s([
  o()
], i.prototype, "configDefaultValue", 2);
s([
  o()
], i.prototype, "configItems", 2);
s([
  o()
], i.prototype, "configParentPropertyAlias", 2);
s([
  o()
], i.prototype, "viewModelSelectOptions", 2);
s([
  o()
], i.prototype, "selectedValue", 1);
i = s([
  V(E)
], i);
const F = i;
export {
  i as CdDropDownFlexibleElement,
  F as default,
  E as elementName
};
//# sourceMappingURL=index-BmQOrIsP.js.map
