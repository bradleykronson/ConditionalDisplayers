import { nothing as w, repeat as I, html as m, property as f, state as h, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { t as E } from "./backoffice-entrypoint-C3a3bwA3.js";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
var k = Object.defineProperty, O = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, r = (e, t, i, l) => {
  for (var u = l > 1 ? void 0 : l ? O(t, i) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (u = (l ? c(t, i, u) : c(u)) || u);
  return l && u && k(t, i, u), u;
}, V = (e, t, i) => t.has(e) || d("Cannot " + i), x = (e, t, i) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), o = (e, t, i) => (V(e, t, "access private method"), i), a, p, b, v, y;
const C = `${E}-multivalues`;
let s = class extends $ {
  constructor() {
    super(...arguments), x(this, a), this._items = [];
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this._items = e;
    const t = this._items.map((i) => ({ value: i.value, key: i.key, show: i.show, hide: i.hide }));
    this.value = t, this.dispatchEvent(new _());
  }
  connectedCallback() {
    super.connectedCallback(), setTimeout(() => {
      this.initValue();
    }, 0);
  }
  initValue() {
    let e = [];
    if (this.value) {
      for (let t = 0; t < this.value.length; t++) {
        const i = this.value[t], l = { id: t, sortOrder: t, ...i };
        e.push(l);
      }
      this.augmentItemValues(e), e = e.sort((t, i) => t.sortOrder > i.sortOrder ? 1 : i.sortOrder > t.sortOrder ? -1 : 0), this.items = e;
    }
    this.liveItem = this.getEmptyItem();
  }
  augmentItemValues(e) {
    e = e || this.items;
    for (let t = 0; t < e.length; t++)
      e[t].id = t, e[t].sortOrder = t;
    return e;
  }
  getEmptyItem() {
    return {
      value: "",
      key: "",
      show: "",
      hide: ""
    };
  }
  getItemValueFromRow(e) {
    const t = {};
    return e.querySelectorAll("uui-input").forEach((l) => {
      const u = l.name;
      t[u] = l.value;
    }), t.id = parseInt(e.dataset.id), t.sortOrder = parseInt(e.dataset.sort), t;
  }
  render() {
    return this.liveItem ? m`
        <uui-box style="--uui-box-default-padding: 0;">
            <uui-table>                
                <uui-table-column></uui-table-column>
                <uui-table-column></uui-table-column>
                <uui-table-column></uui-table-column>
                <uui-table-column></uui-table-column>
                <uui-table-column style="width: 10%;"></uui-table-column>

                <uui-table-head>
                    <uui-table-head-cell>Text</uui-table-head-cell>
                    <uui-table-head-cell>Key</uui-table-head-cell>
                    <uui-table-head-cell>Show when selected</uui-table-head-cell>
                    <uui-table-head-cell>Hide when selected</uui-table-head-cell>
                    <uui-table-head-cell></uui-table-head-cell>
                </uui-table-head>
                <uui-table-row id="liveItemRow" @input=${o(this, a, b)}>
                    <uui-table-cell>
                        <uui-input name="value" type="text" style="width: 100%;" .value=${this.liveItem.value}></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-input name="key" type="text" style="width: 100%;" .value=${this.liveItem.key}></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-input name="show" type="text"  style="width: 100%;" placeholder="Targets (alias or parent:alias / tab-... / parent:tab-...)" .value=${this.liveItem.show}></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-input name="hide" type="text"  style="width: 100%;" placeholder="Targets (alias or parent:alias / tab-... / parent:tab-...)" .value=${this.liveItem.hide}></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-button label="Add" @click=${o(this, a, v)} compact="compact" look="secondary" title="Add new item"><uui-icon name="icon-badge-add"></uui-icon> Add</uui-button>
                    </uui-table-cell>
                </uui-table-row>
                ${I(this.items, (e) => e.id, (e) => m`
                <uui-table-row data-id=${e.id} data-sort=${e.sortOrder} @input=${o(this, a, p)} style="background: #f3f3f5;">
                    <uui-table-cell>
                        <uui-input name="value" type="text" style="width: 100%;" .value=${e.value} ></uui-input>
                    </uui-table-cell>
                      <uui-table-cell>
                        <uui-input name="key" type="text" style="width: 100%;" .value=${e.key} ></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-input name="show" type="text" style="width: 100%;" placeholder="Targets (alias or parent:alias / tab-... / parent:tab-...)" .value=${e.show}></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-input name="hide" type="text" style="width: 100%;" placeholder="Targets (alias or parent:alias / tab-... / parent:tab-...)" .value=${e.hide}></uui-input>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-button label="Remove" @click=${o(this, a, y)} compact="compact" look="secondary" color="danger" title="Remove item"><uui-icon name="icon-trash"></uui-icon> Remove</uui-button>
                    </uui-table-cell>
                </uui-table-row>
                `)}
            </uui-table>
        </uui-box>
        ` : w;
  }
};
a = /* @__PURE__ */ new WeakSet();
p = function(e) {
  const t = e.target.closest("[data-id]"), i = parseInt(t.dataset.id), l = this.getItemValueFromRow(t), u = this.items.findIndex((n) => n.id === i);
  this.items[u] = { ...this.items[u], ...l }, this.items = this.items;
};
b = function(e) {
  const t = e.target.closest("#liveItemRow"), i = this.getItemValueFromRow(t);
  this.liveItem = { value: i.value, key: i.key, show: i.show, hide: i.hide };
};
v = function() {
  this.items.push({ id: 0, sortOrder: 0, ...this.liveItem }), this.augmentItemValues(), this.items = this.items, this.liveItem = this.getEmptyItem();
};
y = function(e) {
  const t = e.target.closest("[data-id]"), i = this.getItemValueFromRow(t), l = this.items.findIndex((u) => u.id === i.id);
  this.items.splice(l, 1), this.items = this.items;
};
r([
  f({ type: Array, attribute: !1 })
], s.prototype, "value", 2);
r([
  h()
], s.prototype, "items", 1);
r([
  h()
], s.prototype, "liveItem", 2);
s = r([
  g(C)
], s);
const F = s;
export {
  s as CdMultivaluesElement,
  F as default,
  C as elementName
};
//# sourceMappingURL=cdMultivalues-DOIDUpuW.js.map
