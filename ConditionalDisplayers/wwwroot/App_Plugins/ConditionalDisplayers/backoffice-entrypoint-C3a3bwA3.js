var Ae = (i) => {
  throw TypeError(i);
};
var tt = (i, e, t) => e.has(i) || Ae("Cannot " + t);
var Ee = (i, e, t) => e.has(i) ? Ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t);
var we = (i, e, t) => (tt(i, e, "access private method"), t);
import { nothing as Se, html as $, property as k, state as d, customElement as he, repeat as Ce } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as ce } from "@umbraco-cms/backoffice/event";
import { UmbElementMixin as it } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as st } from "@umbraco-cms/backoffice/property";
const pe = "our-conditionaldisplayers";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis, de = G.ShadowRoot && (G.ShadyCSS === void 0 || G.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ue = Symbol(), Pe = /* @__PURE__ */ new WeakMap();
let We = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== ue) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (de && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = Pe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Pe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ot = (i) => new We(typeof i == "string" ? i : i + "", void 0, ue), rt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((s, o, r) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[r + 1], i[0]);
  return new We(t, i, ue);
}, at = (i, e) => {
  if (de) i.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), o = G.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = t.cssText, i.appendChild(s);
  }
}, Ue = de ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return ot(t);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: nt, defineProperty: lt, getOwnPropertyDescriptor: ht, getOwnPropertyNames: ct, getOwnPropertySymbols: pt, getPrototypeOf: dt } = Object, S = globalThis, xe = S.trustedTypes, ut = xe ? xe.emptyScript : "", te = S.reactiveElementPolyfillSupport, H = (i, e) => i, re = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? ut : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, je = (i, e) => !nt(i, e), Oe = { attribute: !0, type: String, converter: re, reflect: !1, useDefault: !1, hasChanged: je };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), S.litPropertyMetadata ?? (S.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class D extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Oe) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), o = this.getPropertyDescriptor(e, s, t);
      o !== void 0 && lt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: o, set: r } = ht(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: o, set(a) {
      const l = o == null ? void 0 : o.call(this);
      r == null || r.call(this, a), this.requestUpdate(e, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Oe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(H("elementProperties"))) return;
    const e = dt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(H("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(H("properties"))) {
      const t = this.properties, s = [...ct(t), ...pt(t)];
      for (const o of s) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, o] of t) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const o = this._$Eu(t, s);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const o of s) t.unshift(Ue(o));
    } else e !== void 0 && t.push(Ue(e));
    return t;
  }
  static _$Eu(e, t) {
    const s = t.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const s of t.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return at(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var s;
      return (s = t.hostConnected) == null ? void 0 : s.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var s;
      return (s = t.hostDisconnected) == null ? void 0 : s.call(t);
    });
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$ET(e, t) {
    var r;
    const s = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, s);
    if (o !== void 0 && s.reflect === !0) {
      const a = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : re).toAttribute(t, s.type);
      this._$Em = e, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var r, a;
    const s = this.constructor, o = s._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = s.getPropertyOptions(o), n = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : re;
      this._$Em = o;
      const c = n.fromAttribute(t, l.type);
      this[o] = c ?? ((a = this._$Ej) == null ? void 0 : a.get(o)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    var o;
    if (e !== void 0) {
      const r = this.constructor, a = this[e];
      if (s ?? (s = r.getPropertyOptions(e)), !((s.hasChanged ?? je)(a, t) || s.useDefault && s.reflect && a === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(r._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: o, wrapped: r }, a) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), r !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, a] of this._$Ep) this[r] = a;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, a] of o) {
        const { wrapped: l } = a, n = this[r];
        l !== !0 || this._$AL.has(r) || n === void 0 || this.C(r, void 0, a, n);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (s = this._$EO) == null || s.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((s) => {
      var o;
      return (o = s.hostUpdated) == null ? void 0 : o.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
D.elementStyles = [], D.shadowRootOptions = { mode: "open" }, D[H("elementProperties")] = /* @__PURE__ */ new Map(), D[H("finalized")] = /* @__PURE__ */ new Map(), te == null || te({ ReactiveElement: D }), (S.reactiveElementVersions ?? (S.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis, Q = L.trustedTypes, De = Q ? Q.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Fe = "$lit$", E = `lit$${Math.random().toFixed(9).slice(2)}$`, Ge = "?" + E, ft = `<${Ge}>`, x = document, I = () => x.createComment(""), N = (i) => i === null || typeof i != "object" && typeof i != "function", fe = Array.isArray, gt = (i) => fe(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", ie = `[ 	
\f\r]`, M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ve = /-->/g, Te = />/g, C = RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ke = /'/g, Me = /"/g, qe = /^(?:script|style|textarea|title)$/i, V = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), He = /* @__PURE__ */ new WeakMap(), P = x.createTreeWalker(x, 129);
function Je(i, e) {
  if (!fe(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return De !== void 0 ? De.createHTML(e) : e;
}
const mt = (i, e) => {
  const t = i.length - 1, s = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = M;
  for (let l = 0; l < t; l++) {
    const n = i[l];
    let c, u, h = -1, _ = 0;
    for (; _ < n.length && (a.lastIndex = _, u = a.exec(n), u !== null); ) _ = a.lastIndex, a === M ? u[1] === "!--" ? a = Ve : u[1] !== void 0 ? a = Te : u[2] !== void 0 ? (qe.test(u[2]) && (o = RegExp("</" + u[2], "g")), a = C) : u[3] !== void 0 && (a = C) : a === C ? u[0] === ">" ? (a = o ?? M, h = -1) : u[1] === void 0 ? h = -2 : (h = a.lastIndex - u[2].length, c = u[1], a = u[3] === void 0 ? C : u[3] === '"' ? Me : ke) : a === Me || a === ke ? a = C : a === Ve || a === Te ? a = M : (a = C, o = void 0);
    const b = a === C && i[l + 1].startsWith("/>") ? " " : "";
    r += a === M ? n + ft : h >= 0 ? (s.push(c), n.slice(0, h) + Fe + n.slice(h) + E + b) : n + E + (h === -2 ? l : b);
  }
  return [Je(i, r + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class B {
  constructor({ strings: e, _$litType$: t }, s) {
    let o;
    this.parts = [];
    let r = 0, a = 0;
    const l = e.length - 1, n = this.parts, [c, u] = mt(e, t);
    if (this.el = B.createElement(c, s), P.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (o = P.nextNode()) !== null && n.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const h of o.getAttributeNames()) if (h.endsWith(Fe)) {
          const _ = u[a++], b = o.getAttribute(h).split(E), j = /([.?@])?(.*)/.exec(_);
          n.push({ type: 1, index: r, name: j[2], strings: b, ctor: j[1] === "." ? _t : j[1] === "?" ? $t : j[1] === "@" ? vt : ee }), o.removeAttribute(h);
        } else h.startsWith(E) && (n.push({ type: 6, index: r }), o.removeAttribute(h));
        if (qe.test(o.tagName)) {
          const h = o.textContent.split(E), _ = h.length - 1;
          if (_ > 0) {
            o.textContent = Q ? Q.emptyScript : "";
            for (let b = 0; b < _; b++) o.append(h[b], I()), P.nextNode(), n.push({ type: 2, index: ++r });
            o.append(h[_], I());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ge) n.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = o.data.indexOf(E, h + 1)) !== -1; ) n.push({ type: 7, index: r }), h += E.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = x.createElement("template");
    return s.innerHTML = e, s;
  }
}
function T(i, e, t = i, s) {
  var a, l;
  if (e === V) return e;
  let o = s !== void 0 ? (a = t._$Co) == null ? void 0 : a[s] : t._$Cl;
  const r = N(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), r === void 0 ? o = void 0 : (o = new r(i), o._$AT(i, t, s)), s !== void 0 ? (t._$Co ?? (t._$Co = []))[s] = o : t._$Cl = o), o !== void 0 && (e = T(i, o._$AS(i, e.values), o, s)), e;
}
class yt {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: s } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? x).importNode(t, !0);
    P.currentNode = o;
    let r = P.nextNode(), a = 0, l = 0, n = s[0];
    for (; n !== void 0; ) {
      if (a === n.index) {
        let c;
        n.type === 2 ? c = new W(r, r.nextSibling, this, e) : n.type === 1 ? c = new n.ctor(r, n.name, n.strings, this, e) : n.type === 6 && (c = new bt(r, this, e)), this._$AV.push(c), n = s[++l];
      }
      a !== (n == null ? void 0 : n.index) && (r = P.nextNode(), a++);
    }
    return P.currentNode = x, o;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class W {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, s, o) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = T(this, e, t), N(e) ? e === p || e == null || e === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : e !== this._$AH && e !== V && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : gt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== p && N(this._$AH) ? this._$AA.nextSibling.data = e : this.T(x.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: t, _$litType$: s } = e, o = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = B.createElement(Je(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(t);
    else {
      const a = new yt(o, this), l = a.u(this.options);
      a.p(t), this.T(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = He.get(e.strings);
    return t === void 0 && He.set(e.strings, t = new B(e)), t;
  }
  k(e) {
    fe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, o = 0;
    for (const r of e) o === t.length ? t.push(s = new W(this.O(I()), this.O(I()), this, this.options)) : s = t[o], s._$AI(r), o++;
    o < t.length && (this._$AR(s && s._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ee {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, o, r) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(e, t = this, s, o) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = T(this, e, t, 0), a = !N(e) || e !== this._$AH && e !== V, a && (this._$AH = e);
    else {
      const l = e;
      let n, c;
      for (e = r[0], n = 0; n < r.length - 1; n++) c = T(this, l[s + n], t, n), c === V && (c = this._$AH[n]), a || (a = !N(c) || c !== this._$AH[n]), c === p ? e = p : e !== p && (e += (c ?? "") + r[n + 1]), this._$AH[n] = c;
    }
    a && !o && this.j(e);
  }
  j(e) {
    e === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class _t extends ee {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === p ? void 0 : e;
  }
}
class $t extends ee {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== p);
  }
}
class vt extends ee {
  constructor(e, t, s, o, r) {
    super(e, t, s, o, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = T(this, e, t, 0) ?? p) === V) return;
    const s = this._$AH, o = e === p && s !== p || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, r = e !== p && (s === p || o);
    o && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class bt {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    T(this, e);
  }
}
const se = L.litHtmlPolyfillSupport;
se == null || se(B, W), (L.litHtmlVersions ?? (L.litHtmlVersions = [])).push("3.3.1");
const At = (i, e, t) => {
  const s = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = s._$litPart$;
  if (o === void 0) {
    const r = (t == null ? void 0 : t.renderBefore) ?? null;
    s._$litPart$ = o = new W(e.insertBefore(I(), r), r, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis;
class R extends D {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = At(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return V;
  }
}
var ze;
R._$litElement$ = !0, R.finalized = !0, (ze = U.litElementHydrateSupport) == null || ze.call(U, { LitElement: R });
const oe = U.litElementPolyfillSupport;
oe == null || oe({ LitElement: R });
(U.litElementVersions ?? (U.litElementVersions = [])).push("4.2.1");
const Le = "parent:", Et = (i) => i ? i.split(",").map((e) => e.trim()).filter((e) => !!e).map((e) => {
  const t = e.toLowerCase().startsWith(Le), s = t ? e.substring(Le.length).trim() : e;
  return {
    scope: t ? "parent" : "self",
    type: wt(s) ? "section" : "property",
    value: s
  };
}).filter((e) => !!e.value) : [], wt = (i) => i.startsWith("tab-") || i.startsWith("tab-content-") || i.startsWith("group-"), St = (i) => i.type === "section" ? `[data-element="${i.value}"]` : `umb-property[data-mark="property:${i.value}"]`, F = (i, e, t, s = "self") => {
  const o = Et(i).filter((l) => l.scope === s);
  if (o.length === 0)
    return;
  const r = o.map((l) => St(l)).join(",");
  Ct(r, t, !1).forEach((l) => {
    e ? l.style.removeProperty("display") : l.style.display = "none";
  });
}, Ct = (i, e = document.body, t = !1) => {
  const s = [], o = (r) => {
    if (r.nodeType !== Node.ELEMENT_NODE || r.matches(i) && (s.push(r), t))
      return;
    const a = r.children;
    if (a.length)
      for (const n of a)
        o(n);
    const l = r.shadowRoot;
    if (l) {
      const n = l.children;
      for (const c of n)
        o(c);
    }
  };
  return o(e), t ? s.slice(0, 1) : s;
}, Pt = rt`
.cd-conditional-group {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    label {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        align-content: flex-start;
        gap: 5px;

        > input[type="radio"] {
            margin: 0.3em 0;
        }
    }

    .horizontal {
        flex-direction: row;
    }

    /* radio position changes */
    &.labelpos-Top label, &.labelpos-Bottom label {
        > input[type="radio"] {
            margin: 0;
        }
    }
    &.labelpos-Top label {
        flex-direction: column-reverse;
    }
    &.labelpos-Right label {
        flex-direction: row;
    }
    &.labelpos-Bottom label {
        flex-direction: column;
    }
    &.labelpos-Left label {
        flex-direction: row-reverse;
    }
}
`;
var Y, Ke;
const be = class be extends it(R) {
  constructor() {
    super();
    Ee(this, Y);
    this.consumeContext(st, (t) => {
      this.datasetHostElement = t.getHostElement();
    });
  }
  firstUpdated(t) {
    setTimeout(() => {
      we(this, Y, Ke).call(this);
    }, 50);
  }
  displayProps(t, s) {
    if (!this.datasetHostElement)
      return;
    F(t, !0, this.datasetHostElement, "self"), F(s, !1, this.datasetHostElement, "self");
    const o = this.findParentHostElement(this.datasetHostElement);
    o && (F(t, !0, o, "parent"), F(s, !1, o, "parent"));
  }
  findParentHostElement(t) {
    const s = this.findAncestorAcrossShadow(t, (o) => o.tagName.toLowerCase() === "umb-property-dataset");
    if (s) {
      const o = this.findAncestorAcrossShadow(s, (r) => r.tagName.toLowerCase() === "umb-property-dataset");
      if (o)
        return o;
    }
    return document.body;
  }
  findAncestorAcrossShadow(t, s) {
    var r;
    let o = t;
    for (; o; ) {
      const a = o.parentElement;
      if (a) {
        if (s(a))
          return a;
        o = a;
        continue;
      }
      const l = (r = o.getRootNode) == null ? void 0 : r.call(o);
      if (l instanceof ShadowRoot) {
        const n = l.host;
        if (s(n))
          return n;
        o = n;
        continue;
      }
      return;
    }
  }
};
Y = new WeakSet(), Ke = function() {
  this.initDefaults(), this.bootstrap();
}, be.styles = Pt;
let z = be;
var Ut = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, Ze = (i) => {
  throw TypeError(i);
}, y = (i, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? xt(e, t) : e, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (o = (s ? a(e, t, o) : a(o)) || o);
  return s && o && Ut(e, t, o), o;
}, ge = (i, e, t) => e.has(i) || Ze("Cannot " + t), Ot = (i, e, t) => (ge(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Re = (i, e, t) => e.has(i) ? Ze("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Dt = (i, e, t, s) => (ge(i, e, "write to private field"), e.set(i, t), t), Vt = (i, e, t) => (ge(i, e, "access private method"), t), q, ae, Qe;
const me = `${pe}-checkbox`;
let f = class extends z {
  constructor() {
    super(...arguments), Re(this, ae), Re(this, q, !1);
  }
  set config(i) {
    this.configDefaultValue = i.getValueByAlias(A.default.alias), this.configShowIfChecked = i.getValueByAlias(A.showIfChecked.alias), this.configShowIfUnchecked = i.getValueByAlias(A.showIfUnchecked.alias), this.configIsShowLabels = i.getValueByAlias(A.showLabels.alias), this.configLabelOn = i.getValueByAlias(A.labelOn.alias), this.configLabelOff = i.getValueByAlias(A.labelOff.alias);
  }
  get toggleValue() {
    return Ot(this, q);
  }
  set toggleValue(i) {
    i = i || !1, Dt(this, q, i), this.value = i, this.dispatchEvent(new ce());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    const i = this.value !== void 0 && this.value !== null, e = (t) => {
      if (typeof t == "boolean") return t;
      if (typeof t == "number") return t === 1;
      if (typeof t == "string") {
        const s = t.trim().toLowerCase();
        return s === "1" || s === "true";
      }
      return !1;
    };
    i ? this.toggleValue = e(this.value) : this.configDefaultValue !== void 0 && this.configDefaultValue !== null && (this.toggleValue = e(this.configDefaultValue));
  }
  runDisplayLogic() {
    this.toggleValue ? this.displayProps(this.configShowIfChecked, this.configShowIfUnchecked) : this.displayProps(this.configShowIfUnchecked, this.configShowIfChecked);
  }
  render() {
    return $`
        <div class="umb-property-editor umb-boolean">
            <uui-toggle .checked=${this.toggleValue} @change=${Vt(this, ae, Qe)}
                    label="${(this.configIsShowLabels ? this.toggleValue ? this.configLabelOn : this.configLabelOff : Se) ?? Se}"
                    labelPosition="right"></uui-toggle>
        </div>
        `;
  }
};
q = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
Qe = function(i) {
  i.stopPropagation(), this.toggleValue = i.target.checked, this.runDisplayLogic();
};
y([
  k({ type: Boolean, attribute: !0 })
], f.prototype, "value", 2);
y([
  k({ attribute: !1 })
], f.prototype, "config", 1);
y([
  d()
], f.prototype, "configDefaultValue", 2);
y([
  d()
], f.prototype, "configShowIfChecked", 2);
y([
  d()
], f.prototype, "configShowIfUnchecked", 2);
y([
  d()
], f.prototype, "configIsShowLabels", 2);
y([
  d()
], f.prototype, "configLabelOn", 2);
y([
  d()
], f.prototype, "configLabelOff", 2);
y([
  d()
], f.prototype, "toggleValue", 1);
f = y([
  he(me)
], f);
const Tt = f, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdCheckboxElement() {
    return f;
  },
  default: Tt,
  elementName: me
}, Symbol.toStringTag, { value: "Module" }));
var Mt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Xe = (i) => {
  throw TypeError(i);
}, v = (i, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Ht(e, t) : e, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (o = (s ? a(e, t, o) : a(o)) || o);
  return s && o && Mt(e, t, o), o;
}, ye = (i, e, t) => e.has(i) || Xe("Cannot " + t), Lt = (i, e, t) => (ye(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Ie = (i, e, t) => e.has(i) ? Xe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Rt = (i, e, t, s) => (ye(i, e, "write to private field"), e.set(i, t), t), Ne = (i, e, t) => (ye(i, e, "access private method"), t), J, K, ne;
const _e = `${pe}-radio`;
let g = class extends z {
  constructor() {
    super(...arguments), Ie(this, K), this.availableValues = [], Ie(this, J, "");
  }
  set config(i) {
    this.assignValuesFromConfig(i);
  }
  get selectedValue() {
    return Lt(this, J);
  }
  set selectedValue(i) {
    if (!i)
      throw new Error("value not set");
    Rt(this, J, i), this.selectedItem = this.availableValues.find((e) => e.value === i), this.value = i, this.dispatchEvent(new ce());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    this.value ? this.selectedValue = this.value : this.selectedValue = this.configDefaultValue && this.isValidSelection(this.configDefaultValue) ? this.configDefaultValue : (console.warn("configuration is missing a valid default value"), this.availableValues[0].value);
  }
  runDisplayLogic() {
    this.selectedItem && this.displayProps(this.selectedItem.show, this.selectedItem.hide);
  }
  assignValuesFromConfig(i) {
    this.configItems = i.getValueByAlias(w.items.alias), this.configDefaultValue = i.getValueByAlias(w.default.alias), this.configAlignHorizontal = i.getValueByAlias(w.alignHrz.alias), this.configLabelPosition = i.getValueByAlias(w.labelsPos.alias), this.configAsButton = i.getValueByAlias(w.asBtn.alias), this.availableValues = this.configItems;
  }
  isValidSelection(i) {
    return !!this.availableValues.find((e) => e.value === i);
  }
  render() {
    return this.availableValues.length === 0 ? $`<p>No conditional items configured</p>` : $`
        ${this.configAsButton ? this.renderButtonGroup() : this.renderRadioGroup()}
        `;
  }
  renderRadioGroup() {
    return $`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""} labelpos-${this.configLabelPosition}" @change=${Ne(this, K, ne)}>
            ${Ce(this.availableValues, (i) => $`
                <label><input type="radio" name="radioGroup" value="${i.value}" .checked=${this.selectedValue === i.value} /><span class="label">${i.value}</span></label>
            `)}

            </div>
        `;
  }
  renderButtonGroup() {
    return $`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""}" @click=${Ne(this, K, ne)}>
            ${Ce(this.availableValues, (i) => $`
            <uui-button label="${i.value}" value="${i.value}" look="${this.selectedValue === i.value ? "primary" : "secondary"}"></uui-button>
            `)}
        </div>
        `;
  }
};
J = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakSet();
ne = function(i) {
  i.stopPropagation();
  const e = i.target.value;
  this.selectedValue = e, this.runDisplayLogic();
};
v([
  k({ type: String, attribute: !1 })
], g.prototype, "value", 2);
v([
  k({ attribute: !1 })
], g.prototype, "config", 1);
v([
  d()
], g.prototype, "configDefaultValue", 2);
v([
  d()
], g.prototype, "configItems", 2);
v([
  d()
], g.prototype, "configAlignHorizontal", 2);
v([
  d()
], g.prototype, "configLabelPosition", 2);
v([
  d()
], g.prototype, "configAsButton", 2);
v([
  d()
], g.prototype, "selectedValue", 1);
g = v([
  he(_e)
], g);
const It = g, Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdRadioElement() {
    return g;
  },
  default: It,
  elementName: _e
}, Symbol.toStringTag, { value: "Module" }));
var Bt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, Ye = (i) => {
  throw TypeError(i);
}, O = (i, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? zt(e, t) : e, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (o = (s ? a(e, t, o) : a(o)) || o);
  return s && o && Bt(e, t, o), o;
}, $e = (i, e, t) => e.has(i) || Ye("Cannot " + t), Wt = (i, e, t) => ($e(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Be = (i, e, t) => e.has(i) ? Ye("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), jt = (i, e, t, s) => ($e(i, e, "write to private field"), e.set(i, t), t), Ft = (i, e, t) => ($e(i, e, "access private method"), t), Z, le, et;
const ve = `${pe}-dropdown`;
let m = class extends z {
  constructor() {
    super(...arguments), Be(this, le), this.availableValues = [], this.viewModelSelectOptions = [], Be(this, Z, "");
  }
  set config(i) {
    this.assignValuesFromConfig(i);
  }
  get selectedValue() {
    return Wt(this, Z);
  }
  set selectedValue(i) {
    if (!i)
      throw new Error("value not set");
    jt(this, Z, i);
    const e = this.availableValues.find((t) => t.key === i);
    e && (this.selectedItem = e), this.value = i, this.dispatchEvent(new ce());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    this.availableValues.length !== 0 && (this.value ? this.selectedValue = this.value : this.selectedValue = this.configDefaultValue && this.isValidSelection(this.configDefaultValue) ? this.configDefaultValue : (console.warn("configuration is missing a valid default value"), this.availableValues[0].key));
  }
  runDisplayLogic() {
    this.viewModelSelectOptions = this.availableValues.map((i) => ({
      name: i.value,
      value: i.key,
      selected: i.key === this.selectedValue
    })), this.selectedItem && this.displayProps(this.selectedItem.show, this.selectedItem.hide);
  }
  assignValuesFromConfig(i) {
    this.configItems = i.getValueByAlias(X.items.alias), this.configDefaultValue = i.getValueByAlias(X.default.alias), this.availableValues = this.configItems;
  }
  isValidSelection(i) {
    return !!this.availableValues.find((e) => e.key === i);
  }
  render() {
    return this.availableValues.length === 0 ? $`<p>No conditional items configured</p>` : $`
        <uui-select label="Display Selection" @change=${Ft(this, le, et)} required .options=${this.viewModelSelectOptions} placeholder="Pick One"></uui-select>
        `;
  }
};
Z = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakSet();
et = function(i) {
  i.stopPropagation();
  const e = i.target.value;
  this.selectedValue = e, this.runDisplayLogic();
};
O([
  k({ type: String, attribute: !1 })
], m.prototype, "value", 2);
O([
  k({ attribute: !1 })
], m.prototype, "config", 1);
O([
  d()
], m.prototype, "configDefaultValue", 2);
O([
  d()
], m.prototype, "configItems", 2);
O([
  d()
], m.prototype, "viewModelSelectOptions", 2);
O([
  d()
], m.prototype, "selectedValue", 1);
m = O([
  he(ve)
], m);
const Gt = m, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdDropDownFlexibleElement() {
    return m;
  },
  default: Gt,
  elementName: ve
}, Symbol.toStringTag, { value: "Module" })), A = {
  default: {
    label: "Initial state",
    description: "The initial state for the checkbox for new items and before the editor changes it.",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  showIfChecked: {
    label: "Show if checked",
    description: "Targets to show when checked. Supports property aliases, section keys (tab-..., tab-content-..., group-...) and parent scope with parent:.<br />*Multiple targets must be comma separated.*",
    alias: "showIfChecked",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  showIfUnchecked: {
    label: "Show if unchecked",
    description: "Targets to show when unchecked. Supports property aliases, section keys (tab-..., tab-content-..., group-...) and parent scope with parent:.<br />*Multiple targets must be comma separated.*",
    alias: "showIfUnchecked",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  showLabels: {
    label: "Show toggle labels",
    description: "Show labels next to toggle button.",
    alias: "showLabels",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  labelOn: {
    label: "Label On",
    description: "Label text when enabled.",
    alias: "labelOn",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  labelOff: {
    label: "Label Off",
    description: "Label text when disabled.",
    alias: "labelOff",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  }
}, w = {
  items: {
    label: "Add prevalue",
    description: "Add, remove or sort values for the conditional list.<br />Use aliases/sections in Show/Hide, prefix with parent: to target parent node sections/properties.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  default: {
    label: "Default value",
    description: "Type the key from the list created above to be the initial default selection.<br/>*(Optional)*",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  alignHrz: {
    label: "Align Horizontally",
    description: "Radio button are stacked vertically by default. Toggle this to align them horizontally",
    alias: "alignHrz",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  labelsPos: {
    label: "Labels Position",
    description: "Works with horizontally aligned list only and not with standard buttons. Default is 'Right'",
    alias: "labelsPos",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    config: [
      {
        alias: "items",
        value: ["Top", "Bottom", "Left", "Right"]
      }
    ]
  },
  asBtn: {
    label: "As Standard Buttons",
    description: "To display as standard buttons instead of radio buttons. Horizontally aligned by default.",
    alias: "asBtn",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  }
}, X = {
  items: {
    label: "Add prevalue",
    description: "Add, remove or sort values for the conditional list.<br />Use aliases/sections in Show/Hide, prefix with parent: to target parent node sections/properties.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  default: {
    label: "Default value",
    description: "Type the value name from the list created above to be the initial default selection.<br/>*(Optional)*",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  }
}, Jt = Object.keys(A).map((i) => A[i]), Kt = Object.keys(w).map((i) => w[i]), Zt = Object.keys(X).map((i) => X[i]), Qt = [
  // custom view for prevalues (will not be displayed in backoffice)
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdMultivalues",
    name: "[Conditional] Multivalues Displayer",
    element: () => import("./cdMultivalues-DOIDUpuW.js"),
    meta: {
      label: "[Conditional] Multivalues Displayer",
      icon: "icon-autofill",
      group: "common"
    }
  },
  // Conditional Checkbox
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdCheckbox",
    name: "[Conditional] Checkbox Displayer",
    element: () => Promise.resolve().then(() => kt),
    elementName: me,
    meta: {
      label: "[Conditional] Checkbox Displayer",
      icon: "icon-checkbox-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.TrueFalse",
      settings: {
        properties: Jt
      }
    }
  },
  // Conditional Radio
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdRadio",
    name: "[Conditional] Radio Displayer",
    element: () => Promise.resolve().then(() => Nt),
    elementName: _e,
    meta: {
      label: "[Conditional] Radio Displayer",
      icon: "icon-circle-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: Kt,
        defaultData: [
          {
            alias: w.labelsPos.alias,
            value: "Right"
          }
        ]
      }
    }
  },
  // Conditional Dropdown
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdDropdownFlexible",
    name: "[Conditional] Dropdown Displayer",
    element: () => Promise.resolve().then(() => qt),
    elementName: ve,
    meta: {
      label: "[Conditional] Dropdown Displayer",
      icon: "icon-filter-arrows",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: Zt
      }
    }
  }
], Xt = (i, e) => {
  const t = [...Qt];
  e.registerMany(t);
}, Yt = (i, e) => {
}, ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onInit: Xt,
  onUnload: Yt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ai as b,
  pe as t
};
//# sourceMappingURL=backoffice-entrypoint-C3a3bwA3.js.map
