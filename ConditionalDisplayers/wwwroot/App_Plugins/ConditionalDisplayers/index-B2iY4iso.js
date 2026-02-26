import { html as n, repeat as v, property as _, state as r, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
import { t as k, a as u } from "./backoffice-entrypoint-ClCGYiLI.js";
import { C as D } from "./CdElement-DKD-IAYP.js";
var S = Object.defineProperty, B = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, o = (e, t, i, l) => {
  for (var a = l > 1 ? void 0 : l ? B(t, i) : t, f = e.length - 1, g; f >= 0; f--)
    (g = e[f]) && (a = (l ? g(t, i, a) : g(a)) || a);
  return l && a && S(t, i, a), a;
}, m = (e, t, i) => t.has(e) || $("Cannot " + i), P = (e, t, i) => (m(e, t, "read from private field"), i ? i.call(e) : t.get(e)), y = (e, t, i) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), A = (e, t, i, l) => (m(e, t, "write to private field"), t.set(e, i), i), V = (e, t, i) => (m(e, t, "access private method"), i), h, p, c, d;
const w = `${k}-radio`;
let s = class extends D {
  constructor() {
    super(...arguments), y(this, c), this.availableValues = [], this.configSelectionType = "Radio", y(this, h, ""), y(this, p, []);
  }
  set config(e) {
    this.assignValuesFromConfig(e);
  }
  get selectedValue() {
    return P(this, h);
  }
  set selectedValue(e) {
    if (!e)
      throw new Error("value not set");
    A(this, h, e), this.selectedItem = this.availableValues.find((t) => t.value === e || t.key === e), this.value = e, this.dispatchEvent(new b());
  }
  get selectedValues() {
    return P(this, p);
  }
  set selectedValues(e) {
    A(this, p, e), this.value = e.join(","), this.dispatchEvent(new b());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    if (this.configSelectionType === "Checkbox") {
      this.value && this.value.trim().length > 0 ? this.selectedValues = this.parseMultiValue(this.value) : this.configDefaultValue && this.configDefaultValue.trim().length > 0 && (this.selectedValues = this.parseMultiValue(this.configDefaultValue));
      return;
    }
    this.value ? this.selectedValue = this.value : this.selectedValue = this.configDefaultValue && this.isValidSelection(this.configDefaultValue) ? this.configDefaultValue : (console.warn("configuration is missing a valid default value"), this.availableValues[0].value);
  }
  runDisplayLogic() {
    if (this.configSelectionType === "Checkbox") {
      this.runCheckboxGroupDisplayLogic();
      return;
    }
    const e = this.getActiveItem();
    e && this.displayProps(e.show, e.hide);
  }
  getActiveItem() {
    if (this.configParentPropertyAlias) {
      const e = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (e != null) {
        const t = String(e);
        return this.availableValues.find((i) => i.value === t || i.key === t);
      }
    }
    return this.selectedItem;
  }
  assignValuesFromConfig(e) {
    this.configItems = e.getValueByAlias(u.items.alias), this.configDefaultValue = e.getValueByAlias(u.default.alias), this.configParentPropertyAlias = e.getValueByAlias(u.parentPropertyAlias.alias), this.configSelectionType = e.getValueByAlias(u.selectionType.alias) ?? "Radio", this.configAlignHorizontal = e.getValueByAlias(u.alignHrz.alias), this.configLabelPosition = e.getValueByAlias(u.labelsPos.alias), this.configAsButton = e.getValueByAlias(u.asBtn.alias), this.availableValues = this.configItems;
  }
  isValidSelection(e) {
    return !!this.availableValues.find((t) => t.value === e || t.key === e);
  }
  parseMultiValue(e) {
    return e.split(",").map((t) => t.trim()).filter((t) => !!t);
  }
  runCheckboxGroupDisplayLogic() {
    const e = this.configParentPropertyAlias ? this.parseMultiValue(String(this.getParentPropertyValue(this.configParentPropertyAlias) ?? "")) : this.selectedValues, t = this.availableValues.filter((a) => e.includes(a.value) || e.includes(a.key));
    if (!t.length)
      return;
    const i = t.map((a) => a.show).filter((a) => !!a).join(","), l = t.map((a) => a.hide).filter((a) => !!a).join(",");
    this.displayProps(i, l);
  }
  render() {
    return this.availableValues.length === 0 ? n`<p>No conditional items configured</p>` : this.configSelectionType === "Checkbox" ? this.renderCheckboxGroup() : n`
        ${this.configAsButton ? this.renderButtonGroup() : this.renderRadioGroup()}
        `;
  }
  renderRadioGroup() {
    return n`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""} labelpos-${this.configLabelPosition}" @change=${V(this, c, d)}>
            ${v(this.availableValues, (e) => n`
                <label><input type="radio" name="radioGroup" value="${e.value}" .checked=${this.selectedValue === e.value || this.selectedValue === e.key} /><span class="label">${e.value}</span></label>
            `)}
        </div>
        `;
  }
  renderCheckboxGroup() {
    return n`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""} labelpos-${this.configLabelPosition}" @change=${V(this, c, d)}>
            ${v(this.availableValues, (e) => n`
                <label><input type="checkbox" value="${e.value}" .checked=${this.selectedValues.includes(e.value) || this.selectedValues.includes(e.key)} /><span class="label">${e.value}</span></label>
            `)}
        </div>
        `;
  }
  renderButtonGroup() {
    return n`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""}" @click=${V(this, c, d)}>
            ${v(this.availableValues, (e) => n`
            <uui-button label="${e.value}" value="${e.value}" look="${this.selectedValue === e.value ? "primary" : "secondary"}"></uui-button>
            `)}
        </div>
        `;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
d = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  if (this.configSelectionType === "Checkbox") {
    const i = e.target, l = [...this.selectedValues];
    if (i.checked)
      l.includes(t) || l.push(t);
    else {
      this.selectedValues = l.filter((a) => a !== t), this.runDisplayLogic();
      return;
    }
    this.selectedValues = l, this.runDisplayLogic();
    return;
  }
  this.selectedValue = t, this.runDisplayLogic();
};
o([
  _({ type: String, attribute: !1 })
], s.prototype, "value", 2);
o([
  _({ attribute: !1 })
], s.prototype, "config", 1);
o([
  r()
], s.prototype, "configDefaultValue", 2);
o([
  r()
], s.prototype, "configItems", 2);
o([
  r()
], s.prototype, "configParentPropertyAlias", 2);
o([
  r()
], s.prototype, "configSelectionType", 2);
o([
  r()
], s.prototype, "configAlignHorizontal", 2);
o([
  r()
], s.prototype, "configLabelPosition", 2);
o([
  r()
], s.prototype, "configAsButton", 2);
o([
  r()
], s.prototype, "selectedValue", 1);
o([
  r()
], s.prototype, "selectedValues", 1);
s = o([
  C(w)
], s);
const I = s;
export {
  s as CdRadioElement,
  I as default,
  w as elementName
};
//# sourceMappingURL=index-B2iY4iso.js.map
