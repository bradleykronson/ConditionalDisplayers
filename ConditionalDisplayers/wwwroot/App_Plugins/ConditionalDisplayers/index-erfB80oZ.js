import { nothing as u, html as _, property as y, state as r, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
import { t as P, c as n } from "./backoffice-entrypoint-B-mc7huv.js";
import { C as V } from "./CdElement-DHoHPUU2.js";
var w = Object.defineProperty, k = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, i = (e, t, o, s) => {
  for (var l = s > 1 ? void 0 : s ? k(t, o) : t, f = e.length - 1, c; f >= 0; f--)
    (c = e[f]) && (l = (s ? c(t, o, l) : c(l)) || l);
  return s && l && w(t, o, l), l;
}, g = (e, t, o) => t.has(e) || v("Cannot " + o), L = (e, t, o) => (g(e, t, "read from private field"), o ? o.call(e) : t.get(e)), d = (e, t, o) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), S = (e, t, o, s) => (g(e, t, "write to private field"), t.set(e, o), o), I = (e, t, o) => (g(e, t, "access private method"), o), h, p, C;
const A = `${P}-checkbox`;
let a = class extends V {
  constructor() {
    super(...arguments), d(this, p), d(this, h, !1);
  }
  set config(e) {
    this.configDefaultValue = e.getValueByAlias(n.default.alias), this.configShowIfChecked = e.getValueByAlias(n.showIfChecked.alias), this.configShowIfUnchecked = e.getValueByAlias(n.showIfUnchecked.alias), this.configParentPropertyAlias = e.getValueByAlias(n.parentPropertyAlias.alias), this.configIsShowLabels = e.getValueByAlias(n.showLabels.alias), this.configLabelOn = e.getValueByAlias(n.labelOn.alias), this.configLabelOff = e.getValueByAlias(n.labelOff.alias);
  }
  get toggleValue() {
    return L(this, h);
  }
  set toggleValue(e) {
    e = e || !1, S(this, h, e), this.value = e, this.dispatchEvent(new m());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    const e = this.value !== void 0 && this.value !== null, t = (o) => {
      if (typeof o == "boolean") return o;
      if (typeof o == "number") return o === 1;
      if (typeof o == "string") {
        const s = o.trim().toLowerCase();
        return s === "1" || s === "true";
      }
      return !1;
    };
    e ? this.toggleValue = t(this.value) : this.configDefaultValue !== void 0 && this.configDefaultValue !== null && (this.toggleValue = t(this.configDefaultValue));
  }
  runDisplayLogic() {
    const e = this.configParentPropertyAlias ? this.getParentPropertyValue(this.configParentPropertyAlias) : this.toggleValue;
    this.toBool(e) ? this.displayProps(this.configShowIfChecked, this.configShowIfUnchecked) : this.displayProps(this.configShowIfUnchecked, this.configShowIfChecked);
  }
  toBool(e) {
    if (typeof e == "boolean") return e;
    if (typeof e == "number") return e === 1;
    if (typeof e == "string") {
      const t = e.trim().toLowerCase();
      return t === "1" || t === "true" || t === "yes" || t === "on";
    }
    return !1;
  }
  render() {
    return _`
        <div class="umb-property-editor umb-boolean">
            <uui-toggle .checked=${this.toggleValue} @change=${I(this, p, C)}
                    label="${(this.configIsShowLabels ? this.toggleValue ? this.configLabelOn : this.configLabelOff : u) ?? u}"
                    labelPosition="right"></uui-toggle>
        </div>
        `;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
C = function(e) {
  e.stopPropagation(), this.toggleValue = e.target.checked, this.runDisplayLogic();
};
i([
  y({ type: Boolean, attribute: !0 })
], a.prototype, "value", 2);
i([
  y({ attribute: !1 })
], a.prototype, "config", 1);
i([
  r()
], a.prototype, "configDefaultValue", 2);
i([
  r()
], a.prototype, "configShowIfChecked", 2);
i([
  r()
], a.prototype, "configShowIfUnchecked", 2);
i([
  r()
], a.prototype, "configParentPropertyAlias", 2);
i([
  r()
], a.prototype, "configIsShowLabels", 2);
i([
  r()
], a.prototype, "configLabelOn", 2);
i([
  r()
], a.prototype, "configLabelOff", 2);
i([
  r()
], a.prototype, "toggleValue", 1);
a = i([
  b(A)
], a);
const U = a;
export {
  a as CdCheckboxElement,
  U as default,
  A as elementName
};
//# sourceMappingURL=index-erfB80oZ.js.map
