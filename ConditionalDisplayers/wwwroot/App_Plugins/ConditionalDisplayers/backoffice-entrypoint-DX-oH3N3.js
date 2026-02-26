var we = (t) => {
  throw TypeError(t);
};
var ot = (t, e, i) => e.has(t) || we("Cannot " + i);
var Ce = (t, e, i) => e.has(t) ? we("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i);
var Ve = (t, e, i) => (ot(t, e, "access private method"), i);
import { nothing as Ue, html as m, property as T, state as p, customElement as fe, repeat as se } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as Y } from "@umbraco-cms/backoffice/event";
import { UmbElementMixin as rt } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as at } from "@umbraco-cms/backoffice/property";
const ge = "our-conditionaldisplayers";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis, ye = q.ShadowRoot && (q.ShadyCSS === void 0 || q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, me = Symbol(), xe = /* @__PURE__ */ new WeakMap();
let Ge = class {
  constructor(e, i, s) {
    if (this._$cssResult$ = !0, s !== me) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (ye && e === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (e = xe.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && xe.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const lt = (t) => new Ge(typeof t == "string" ? t : t + "", void 0, me), nt = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((s, o, r) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[r + 1], t[0]);
  return new Ge(i, t, me);
}, ht = (t, e) => {
  if (ye) t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of e) {
    const s = document.createElement("style"), o = q.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = i.cssText, t.appendChild(s);
  }
}, ke = ye ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const s of e.cssRules) i += s.cssText;
  return lt(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ct, defineProperty: pt, getOwnPropertyDescriptor: dt, getOwnPropertyNames: ut, getOwnPropertySymbols: ft, getPrototypeOf: gt } = Object, S = globalThis, Oe = S.trustedTypes, yt = Oe ? Oe.emptyScript : "", oe = S.reactiveElementPolyfillSupport, B = (t, e) => t, ce = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? yt : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let i = t;
  switch (e) {
    case Boolean:
      i = t !== null;
      break;
    case Number:
      i = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(t);
      } catch {
        i = null;
      }
  }
  return i;
} }, qe = (t, e) => !ct(t, e), De = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: qe };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), S.litPropertyMetadata ?? (S.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class k extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, i = De) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(e, i), !i.noAccessor) {
      const s = Symbol(), o = this.getPropertyDescriptor(e, s, i);
      o !== void 0 && pt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, i, s) {
    const { get: o, set: r } = dt(this.prototype, e) ?? { get() {
      return this[i];
    }, set(a) {
      this[i] = a;
    } };
    return { get: o, set(a) {
      const n = o == null ? void 0 : o.call(this);
      r == null || r.call(this, a), this.requestUpdate(e, n, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? De;
  }
  static _$Ei() {
    if (this.hasOwnProperty(B("elementProperties"))) return;
    const e = gt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(B("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(B("properties"))) {
      const i = this.properties, s = [...ut(i), ...ft(i)];
      for (const o of s) this.createProperty(o, i[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const i = litPropertyMetadata.get(e);
      if (i !== void 0) for (const [s, o] of i) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, s] of this.elementProperties) {
      const o = this._$Eu(i, s);
      o !== void 0 && this._$Eh.set(o, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const o of s) i.unshift(ke(o));
    } else e !== void 0 && i.push(ke(e));
    return i;
  }
  static _$Eu(e, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((i) => i(this));
  }
  addController(e) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((i = e.hostConnected) == null || i.call(e));
  }
  removeController(e) {
    var i;
    (i = this._$EO) == null || i.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const s of i.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ht(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var s;
      return (s = i.hostDisconnected) == null ? void 0 : s.call(i);
    });
  }
  attributeChangedCallback(e, i, s) {
    this._$AK(e, s);
  }
  _$ET(e, i) {
    var r;
    const s = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, s);
    if (o !== void 0 && s.reflect === !0) {
      const a = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : ce).toAttribute(i, s.type);
      this._$Em = e, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$Em = null;
    }
  }
  _$AK(e, i) {
    var r, a;
    const s = this.constructor, o = s._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const n = s.getPropertyOptions(o), l = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((r = n.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? n.converter : ce;
      this._$Em = o;
      const h = l.fromAttribute(i, n.type);
      this[o] = h ?? ((a = this._$Ej) == null ? void 0 : a.get(o)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(e, i, s) {
    var o;
    if (e !== void 0) {
      const r = this.constructor, a = this[e];
      if (s ?? (s = r.getPropertyOptions(e)), !((s.hasChanged ?? qe)(a, i) || s.useDefault && s.reflect && a === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(r._$Eu(e, s)))) return;
      this.C(e, i, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, i, { useDefault: s, reflect: o, wrapped: r }, a) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? i ?? this[e]), r !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (i = void 0), this._$AL.set(e, i)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
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
        const { wrapped: n } = a, l = this[r];
        n !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, a, l);
      }
    }
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (s = this._$EO) == null || s.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(i)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(i);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var i;
    (i = this._$EO) == null || i.forEach((s) => {
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
k.elementStyles = [], k.shadowRootOptions = { mode: "open" }, k[B("elementProperties")] = /* @__PURE__ */ new Map(), k[B("finalized")] = /* @__PURE__ */ new Map(), oe == null || oe({ ReactiveElement: k }), (S.reactiveElementVersions ?? (S.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis, ee = L.trustedTypes, Te = ee ? ee.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Je = "$lit$", E = `lit$${Math.random().toFixed(9).slice(2)}$`, Ke = "?" + E, mt = `<${Ke}>`, x = document, N = () => x.createComment(""), z = (t) => t === null || typeof t != "object" && typeof t != "function", ve = Array.isArray, vt = (t) => ve(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", re = `[ 	
\f\r]`, M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Me = /-->/g, Re = />/g, C = RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Be = /'/g, Le = /"/g, Xe = /^(?:script|style|textarea|title)$/i, O = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), He = /* @__PURE__ */ new WeakMap(), V = x.createTreeWalker(x, 129);
function Ze(t, e) {
  if (!ve(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Te !== void 0 ? Te.createHTML(e) : e;
}
const bt = (t, e) => {
  const i = t.length - 1, s = [];
  let o, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = M;
  for (let n = 0; n < i; n++) {
    const l = t[n];
    let h, d, c = -1, _ = 0;
    for (; _ < l.length && (a.lastIndex = _, d = a.exec(l), d !== null); ) _ = a.lastIndex, a === M ? d[1] === "!--" ? a = Me : d[1] !== void 0 ? a = Re : d[2] !== void 0 ? (Xe.test(d[2]) && (o = RegExp("</" + d[2], "g")), a = C) : d[3] !== void 0 && (a = C) : a === C ? d[0] === ">" ? (a = o ?? M, c = -1) : d[1] === void 0 ? c = -2 : (c = a.lastIndex - d[2].length, h = d[1], a = d[3] === void 0 ? C : d[3] === '"' ? Le : Be) : a === Le || a === Be ? a = C : a === Me || a === Re ? a = M : (a = C, o = void 0);
    const P = a === C && t[n + 1].startsWith("/>") ? " " : "";
    r += a === M ? l + mt : c >= 0 ? (s.push(h), l.slice(0, c) + Je + l.slice(c) + E + P) : l + E + (c === -2 ? n : P);
  }
  return [Ze(t, r + (t[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class W {
  constructor({ strings: e, _$litType$: i }, s) {
    let o;
    this.parts = [];
    let r = 0, a = 0;
    const n = e.length - 1, l = this.parts, [h, d] = bt(e, i);
    if (this.el = W.createElement(h, s), V.currentNode = this.el.content, i === 2 || i === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (o = V.nextNode()) !== null && l.length < n; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const c of o.getAttributeNames()) if (c.endsWith(Je)) {
          const _ = d[a++], P = o.getAttribute(c).split(E), G = /([.?@])?(.*)/.exec(_);
          l.push({ type: 1, index: r, name: G[2], strings: P, ctor: G[1] === "." ? _t : G[1] === "?" ? At : G[1] === "@" ? Pt : ie }), o.removeAttribute(c);
        } else c.startsWith(E) && (l.push({ type: 6, index: r }), o.removeAttribute(c));
        if (Xe.test(o.tagName)) {
          const c = o.textContent.split(E), _ = c.length - 1;
          if (_ > 0) {
            o.textContent = ee ? ee.emptyScript : "";
            for (let P = 0; P < _; P++) o.append(c[P], N()), V.nextNode(), l.push({ type: 2, index: ++r });
            o.append(c[_], N());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ke) l.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = o.data.indexOf(E, c + 1)) !== -1; ) l.push({ type: 7, index: r }), c += E.length - 1;
      }
      r++;
    }
  }
  static createElement(e, i) {
    const s = x.createElement("template");
    return s.innerHTML = e, s;
  }
}
function D(t, e, i = t, s) {
  var a, n;
  if (e === O) return e;
  let o = s !== void 0 ? (a = i._$Co) == null ? void 0 : a[s] : i._$Cl;
  const r = z(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((n = o == null ? void 0 : o._$AO) == null || n.call(o, !1), r === void 0 ? o = void 0 : (o = new r(t), o._$AT(t, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = o : i._$Cl = o), o !== void 0 && (e = D(t, o._$AS(t, e.values), o, s)), e;
}
class $t {
  constructor(e, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: i }, parts: s } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? x).importNode(i, !0);
    V.currentNode = o;
    let r = V.nextNode(), a = 0, n = 0, l = s[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let h;
        l.type === 2 ? h = new F(r, r.nextSibling, this, e) : l.type === 1 ? h = new l.ctor(r, l.name, l.strings, this, e) : l.type === 6 && (h = new Et(r, this, e)), this._$AV.push(h), l = s[++n];
      }
      a !== (l == null ? void 0 : l.index) && (r = V.nextNode(), a++);
    }
    return V.currentNode = x, o;
  }
  p(e) {
    let i = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, i), i += s.strings.length - 2) : s._$AI(e[i])), i++;
  }
}
class F {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, i, s, o) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = i.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, i = this) {
    e = D(this, e, i), z(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== O && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : vt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && z(this._$AH) ? this._$AA.nextSibling.data = e : this.T(x.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var r;
    const { values: i, _$litType$: s } = e, o = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = W.createElement(Ze(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(i);
    else {
      const a = new $t(o, this), n = a.u(this.options);
      a.p(i), this.T(n), this._$AH = a;
    }
  }
  _$AC(e) {
    let i = He.get(e.strings);
    return i === void 0 && He.set(e.strings, i = new W(e)), i;
  }
  k(e) {
    ve(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, o = 0;
    for (const r of e) o === i.length ? i.push(s = new F(this.O(N()), this.O(N()), this, this.options)) : s = i[o], s._$AI(r), o++;
    o < i.length && (this._$AR(s && s._$AB.nextSibling, o), i.length = o);
  }
  _$AR(e = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, i); e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var i;
    this._$AM === void 0 && (this._$Cv = e, (i = this._$AP) == null || i.call(this, e));
  }
}
class ie {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, i, s, o, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = i, this._$AM = o, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  _$AI(e, i = this, s, o) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = D(this, e, i, 0), a = !z(e) || e !== this._$AH && e !== O, a && (this._$AH = e);
    else {
      const n = e;
      let l, h;
      for (e = r[0], l = 0; l < r.length - 1; l++) h = D(this, n[s + l], i, l), h === O && (h = this._$AH[l]), a || (a = !z(h) || h !== this._$AH[l]), h === u ? e = u : e !== u && (e += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    a && !o && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class _t extends ie {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class At extends ie {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class Pt extends ie {
  constructor(e, i, s, o, r) {
    super(e, i, s, o, r), this.type = 5;
  }
  _$AI(e, i = this) {
    if ((e = D(this, e, i, 0) ?? u) === O) return;
    const s = this._$AH, o = e === u && s !== u || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, r = e !== u && (s === u || o);
    o && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Et {
  constructor(e, i, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    D(this, e);
  }
}
const ae = L.litHtmlPolyfillSupport;
ae == null || ae(W, F), (L.litHtmlVersions ?? (L.litHtmlVersions = [])).push("3.3.1");
const St = (t, e, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? e;
  let o = s._$litPart$;
  if (o === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = o = new F(e.insertBefore(N(), r), r, void 0, i ?? {});
  }
  return o._$AI(t), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis;
class H extends k {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const e = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = e.firstChild), e;
  }
  update(e) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = St(i, this.renderRoot, this.renderOptions);
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
    return O;
  }
}
var Fe;
H._$litElement$ = !0, H.finalized = !0, (Fe = U.litElementHydrateSupport) == null || Fe.call(U, { LitElement: H });
const le = U.litElementPolyfillSupport;
le == null || le({ LitElement: H });
(U.litElementVersions ?? (U.litElementVersions = [])).push("4.2.1");
const wt = (t) => t ? t.split(",").map((e) => e.trim()).filter((e) => !!e).map((e) => ({
  type: Ct(e) ? "section" : "property",
  value: e
})).filter((e) => !!e.value) : [], Ct = (t) => t.startsWith("tab-") || t.startsWith("tab-content-") || t.startsWith("group-"), Vt = (t) => t.type === "section" ? `[data-element="${t.value}"]` : `umb-property[data-mark="property:${t.value}"]`, Ie = (t, e, i) => {
  const s = wt(t);
  if (s.length === 0)
    return;
  const o = s.map((a) => Vt(a)).join(",");
  pe(o, i, !1).forEach((a) => {
    e ? a.style.removeProperty("display") : a.style.display = "none";
  });
}, pe = (t, e = document.body, i = !1) => {
  const s = [], o = (r) => {
    if (r.nodeType !== Node.ELEMENT_NODE || r.matches(t) && (s.push(r), i))
      return;
    const a = r.children;
    if (a.length)
      for (const l of a)
        o(l);
    const n = r.shadowRoot;
    if (n) {
      const l = n.children;
      for (const h of l)
        o(h);
    }
  };
  return o(e), i ? s.slice(0, 1) : s;
}, Ut = nt`
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
var te, Qe;
const Se = class Se extends rt(H) {
  constructor() {
    super();
    Ce(this, te);
    this.consumeContext(at, (i) => {
      this.datasetHostElement = i.getHostElement();
    });
  }
  firstUpdated(i) {
    setTimeout(() => {
      Ve(this, te, Qe).call(this);
    }, 50);
  }
  displayProps(i, s) {
    this.datasetHostElement && (Ie(i, !0, this.datasetHostElement), Ie(s, !1, this.datasetHostElement));
  }
  getParentPropertyValue(i) {
    if (!i)
      return;
    const s = this.findNearestParentProperty(i);
    if (s)
      return this.readParentPropertyValue(s);
  }
  findNearestParentProperty(i) {
    const s = `umb-property[data-mark="property:${i}"]`, o = pe(s, document.body, !1);
    if (!o.length)
      return;
    const r = this.getBoundingClientRect();
    let a, n = Number.MAX_SAFE_INTEGER;
    for (const l of o) {
      const h = l.getBoundingClientRect(), d = Math.abs(r.top - h.top);
      d < n && (n = d, a = l);
    }
    return a;
  }
  readParentPropertyValue(i) {
    const s = pe("input,select,textarea,uui-toggle,uui-checkbox", i, !0)[0];
    if (s) {
      if ("checked" in s)
        return s.checked;
      if ("value" in s)
        return s.value;
    }
  }
};
te = new WeakSet(), Qe = function() {
  this.initDefaults(), this.bootstrap();
}, Se.styles = Ut;
let j = Se;
var xt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Ye = (t) => {
  throw TypeError(t);
}, $ = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? kt(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (o = (s ? a(e, i, o) : a(o)) || o);
  return s && o && xt(e, i, o), o;
}, be = (t, e, i) => e.has(t) || Ye("Cannot " + i), Ot = (t, e, i) => (be(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ne = (t, e, i) => e.has(t) ? Ye("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Dt = (t, e, i, s) => (be(t, e, "write to private field"), e.set(t, i), i), Tt = (t, e, i) => (be(t, e, "access private method"), i), J, de, et;
const $e = `${ge}-checkbox`;
let g = class extends j {
  constructor() {
    super(...arguments), Ne(this, de), Ne(this, J, !1);
  }
  set config(t) {
    this.configDefaultValue = t.getValueByAlias(A.default.alias), this.configShowIfChecked = t.getValueByAlias(A.showIfChecked.alias), this.configShowIfUnchecked = t.getValueByAlias(A.showIfUnchecked.alias), this.configParentPropertyAlias = t.getValueByAlias(A.parentPropertyAlias.alias), this.configIsShowLabels = t.getValueByAlias(A.showLabels.alias), this.configLabelOn = t.getValueByAlias(A.labelOn.alias), this.configLabelOff = t.getValueByAlias(A.labelOff.alias);
  }
  get toggleValue() {
    return Ot(this, J);
  }
  set toggleValue(t) {
    t = t || !1, Dt(this, J, t), this.value = t, this.dispatchEvent(new Y());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    const t = this.value !== void 0 && this.value !== null, e = (i) => {
      if (typeof i == "boolean") return i;
      if (typeof i == "number") return i === 1;
      if (typeof i == "string") {
        const s = i.trim().toLowerCase();
        return s === "1" || s === "true";
      }
      return !1;
    };
    t ? this.toggleValue = e(this.value) : this.configDefaultValue !== void 0 && this.configDefaultValue !== null && (this.toggleValue = e(this.configDefaultValue));
  }
  runDisplayLogic() {
    const t = this.configParentPropertyAlias ? this.getParentPropertyValue(this.configParentPropertyAlias) : this.toggleValue;
    this.toBool(t) ? this.displayProps(this.configShowIfChecked, this.configShowIfUnchecked) : this.displayProps(this.configShowIfUnchecked, this.configShowIfChecked);
  }
  toBool(t) {
    if (typeof t == "boolean") return t;
    if (typeof t == "number") return t === 1;
    if (typeof t == "string") {
      const e = t.trim().toLowerCase();
      return e === "1" || e === "true" || e === "yes" || e === "on";
    }
    return !1;
  }
  render() {
    return m`
        <div class="umb-property-editor umb-boolean">
            <uui-toggle .checked=${this.toggleValue} @change=${Tt(this, de, et)}
                    label="${(this.configIsShowLabels ? this.toggleValue ? this.configLabelOn : this.configLabelOff : Ue) ?? Ue}"
                    labelPosition="right"></uui-toggle>
        </div>
        `;
  }
};
J = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakSet();
et = function(t) {
  t.stopPropagation(), this.toggleValue = t.target.checked, this.runDisplayLogic();
};
$([
  T({ type: Boolean, attribute: !0 })
], g.prototype, "value", 2);
$([
  T({ attribute: !1 })
], g.prototype, "config", 1);
$([
  p()
], g.prototype, "configDefaultValue", 2);
$([
  p()
], g.prototype, "configShowIfChecked", 2);
$([
  p()
], g.prototype, "configShowIfUnchecked", 2);
$([
  p()
], g.prototype, "configParentPropertyAlias", 2);
$([
  p()
], g.prototype, "configIsShowLabels", 2);
$([
  p()
], g.prototype, "configLabelOn", 2);
$([
  p()
], g.prototype, "configLabelOff", 2);
$([
  p()
], g.prototype, "toggleValue", 1);
g = $([
  fe($e)
], g);
const Mt = g, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdCheckboxElement() {
    return g;
  },
  default: Mt,
  elementName: $e
}, Symbol.toStringTag, { value: "Module" }));
var Bt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, tt = (t) => {
  throw TypeError(t);
}, y = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Lt(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (o = (s ? a(e, i, o) : a(o)) || o);
  return s && o && Bt(e, i, o), o;
}, _e = (t, e, i) => e.has(t) || tt("Cannot " + i), ze = (t, e, i) => (_e(t, e, "read from private field"), i ? i.call(t) : e.get(t)), ne = (t, e, i) => e.has(t) ? tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), We = (t, e, i, s) => (_e(t, e, "write to private field"), e.set(t, i), i), he = (t, e, i) => (_e(t, e, "access private method"), i), K, X, R, Z;
const Ae = `${ge}-radio`;
let f = class extends j {
  constructor() {
    super(...arguments), ne(this, R), this.availableValues = [], this.configSelectionType = "Radio", ne(this, K, ""), ne(this, X, []);
  }
  set config(t) {
    this.assignValuesFromConfig(t);
  }
  get selectedValue() {
    return ze(this, K);
  }
  set selectedValue(t) {
    if (!t)
      throw new Error("value not set");
    We(this, K, t), this.value = t, this.dispatchEvent(new Y());
  }
  get selectedValues() {
    return ze(this, X);
  }
  set selectedValues(t) {
    We(this, X, t), this.value = t.join(","), this.dispatchEvent(new Y());
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
    const t = this.getActiveRadioItem();
    t && this.displayProps(t.show, t.hide);
  }
  runCheckboxGroupDisplayLogic() {
    const t = this.getActiveCheckboxItems();
    if (t.length === 0)
      return;
    const e = this.availableValues.map((r) => r.show).filter((r) => !!r).join(","), i = this.availableValues.map((r) => r.hide).filter((r) => !!r).join(",");
    this.displayProps(`${e},${i}`, "");
    const s = t.map((r) => r.show).filter((r) => !!r).join(","), o = t.map((r) => r.hide).filter((r) => !!r).join(",");
    this.displayProps(s, o);
  }
  getActiveRadioItem() {
    if (this.configParentPropertyAlias) {
      const t = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (t != null) {
        const e = String(t);
        return this.availableValues.find((i) => i.value === e || i.key === e);
      }
    }
    return this.availableValues.find((t) => t.value === this.selectedValue || t.key === this.selectedValue);
  }
  getActiveCheckboxItems() {
    const t = this.getActiveCheckboxValues();
    return this.availableValues.filter((e) => t.includes(e.value) || t.includes(e.key));
  }
  getActiveCheckboxValues() {
    if (this.configParentPropertyAlias) {
      const t = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (t != null)
        return this.parseMultiValue(String(t));
    }
    return this.selectedValues;
  }
  parseMultiValue(t) {
    return t.split(",").map((e) => e.trim()).filter((e) => !!e);
  }
  assignValuesFromConfig(t) {
    this.configItems = t.getValueByAlias(v.items.alias), this.configDefaultValue = t.getValueByAlias(v.default.alias), this.configParentPropertyAlias = t.getValueByAlias(v.parentPropertyAlias.alias), this.configSelectionType = t.getValueByAlias(v.selectionType.alias) ?? "Radio", this.configAlignHorizontal = t.getValueByAlias(v.alignHrz.alias), this.configLabelPosition = t.getValueByAlias(v.labelsPos.alias), this.configAsButton = t.getValueByAlias(v.asBtn.alias), this.availableValues = this.configItems;
  }
  isValidSelection(t) {
    return !!this.availableValues.find((e) => e.value === t || e.key === t);
  }
  render() {
    return this.availableValues.length === 0 ? m`<p>No conditional items configured</p>` : this.configSelectionType === "Checkbox" ? this.renderCheckboxGroup() : m`
        ${this.configAsButton ? this.renderButtonGroup() : this.renderRadioGroup()}
        `;
  }
  renderRadioGroup() {
    return m`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""} labelpos-${this.configLabelPosition}" @change=${he(this, R, Z)}>
            ${se(this.availableValues, (t) => m`
                <label><input type="radio" name="radioGroup" value="${t.value}" .checked=${this.selectedValue === t.value || this.selectedValue === t.key} /><span class="label">${t.value}</span></label>
            `)}
        </div>
        `;
  }
  renderCheckboxGroup() {
    return m`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""} labelpos-${this.configLabelPosition}" @change=${he(this, R, Z)}>
            ${se(this.availableValues, (t) => m`
                <label><input type="checkbox" value="${t.value}" .checked=${this.selectedValues.includes(t.value) || this.selectedValues.includes(t.key)} /><span class="label">${t.value}</span></label>
            `)}
        </div>
        `;
  }
  renderButtonGroup() {
    return m`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""}" @click=${he(this, R, Z)}>
            ${se(this.availableValues, (t) => m`
            <uui-button label="${t.value}" value="${t.value}" look="${this.selectedValue === t.value ? "primary" : "secondary"}"></uui-button>
            `)}
        </div>
        `;
  }
};
K = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakSet();
Z = function(t) {
  t.stopPropagation();
  const e = t.target.value;
  if (this.configSelectionType === "Checkbox") {
    const i = t.target, s = [...this.selectedValues];
    if (i.checked)
      s.includes(e) || s.push(e);
    else {
      this.selectedValues = s.filter((o) => o !== e), this.runDisplayLogic();
      return;
    }
    this.selectedValues = s, this.runDisplayLogic();
    return;
  }
  this.selectedValue = e, this.runDisplayLogic();
};
y([
  T({ type: String, attribute: !1 })
], f.prototype, "value", 2);
y([
  T({ attribute: !1 })
], f.prototype, "config", 1);
y([
  p()
], f.prototype, "configDefaultValue", 2);
y([
  p()
], f.prototype, "configItems", 2);
y([
  p()
], f.prototype, "configParentPropertyAlias", 2);
y([
  p()
], f.prototype, "configSelectionType", 2);
y([
  p()
], f.prototype, "configAlignHorizontal", 2);
y([
  p()
], f.prototype, "configLabelPosition", 2);
y([
  p()
], f.prototype, "configAsButton", 2);
y([
  p()
], f.prototype, "selectedValue", 1);
y([
  p()
], f.prototype, "selectedValues", 1);
f = y([
  fe(Ae)
], f);
const Ht = f, It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdRadioElement() {
    return f;
  },
  default: Ht,
  elementName: Ae
}, Symbol.toStringTag, { value: "Module" }));
var Nt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, it = (t) => {
  throw TypeError(t);
}, w = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? zt(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (o = (s ? a(e, i, o) : a(o)) || o);
  return s && o && Nt(e, i, o), o;
}, Pe = (t, e, i) => e.has(t) || it("Cannot " + i), Wt = (t, e, i) => (Pe(t, e, "read from private field"), i ? i.call(t) : e.get(t)), je = (t, e, i) => e.has(t) ? it("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), jt = (t, e, i, s) => (Pe(t, e, "write to private field"), e.set(t, i), i), Ft = (t, e, i) => (Pe(t, e, "access private method"), i), Q, ue, st;
const Ee = `${ge}-dropdown`;
let b = class extends j {
  constructor() {
    super(...arguments), je(this, ue), this.availableValues = [], this.viewModelSelectOptions = [], je(this, Q, "");
  }
  set config(t) {
    this.assignValuesFromConfig(t);
  }
  get selectedValue() {
    return Wt(this, Q);
  }
  set selectedValue(t) {
    if (!t)
      throw new Error("value not set");
    jt(this, Q, t);
    const e = this.availableValues.find((i) => i.key === t);
    e && (this.selectedItem = e), this.value = t, this.dispatchEvent(new Y());
  }
  bootstrap() {
    this.runDisplayLogic();
  }
  initDefaults() {
    this.availableValues.length !== 0 && (this.value ? this.selectedValue = this.value : this.selectedValue = this.configDefaultValue && this.isValidSelection(this.configDefaultValue) ? this.configDefaultValue : (console.warn("configuration is missing a valid default value"), this.availableValues[0].key));
  }
  runDisplayLogic() {
    this.viewModelSelectOptions = this.availableValues.map((e) => ({
      name: e.value,
      value: e.key,
      selected: e.key === this.selectedValue
    }));
    const t = this.getActiveItem();
    t && this.displayProps(t.show, t.hide);
  }
  assignValuesFromConfig(t) {
    this.configItems = t.getValueByAlias(I.items.alias), this.configDefaultValue = t.getValueByAlias(I.default.alias), this.configParentPropertyAlias = t.getValueByAlias(I.parentPropertyAlias.alias), this.availableValues = this.configItems;
  }
  getActiveItem() {
    if (this.configParentPropertyAlias) {
      const t = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (t != null) {
        const e = String(t);
        return this.availableValues.find((i) => i.key === e || i.value === e);
      }
    }
    return this.selectedItem;
  }
  isValidSelection(t) {
    return !!this.availableValues.find((e) => e.key === t);
  }
  render() {
    return this.availableValues.length === 0 ? m`<p>No conditional items configured</p>` : m`
        <uui-select label="Display Selection" @change=${Ft(this, ue, st)} required .options=${this.viewModelSelectOptions} placeholder="Pick One"></uui-select>
        `;
  }
};
Q = /* @__PURE__ */ new WeakMap();
ue = /* @__PURE__ */ new WeakSet();
st = function(t) {
  t.stopPropagation();
  const e = t.target.value;
  this.selectedValue = e, this.runDisplayLogic();
};
w([
  T({ type: String, attribute: !1 })
], b.prototype, "value", 2);
w([
  T({ attribute: !1 })
], b.prototype, "config", 1);
w([
  p()
], b.prototype, "configDefaultValue", 2);
w([
  p()
], b.prototype, "configItems", 2);
w([
  p()
], b.prototype, "configParentPropertyAlias", 2);
w([
  p()
], b.prototype, "viewModelSelectOptions", 2);
w([
  p()
], b.prototype, "selectedValue", 1);
b = w([
  fe(Ee)
], b);
const Gt = b, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdDropDownFlexibleElement() {
    return b;
  },
  default: Gt,
  elementName: Ee
}, Symbol.toStringTag, { value: "Module" })), A = {
  default: {
    label: "Initial state",
    description: "The initial state for the checkbox for new items and before the editor changes it.",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
  },
  showIfChecked: {
    label: "Show if checked",
    description: "Targets to show when checked. Supports property aliases and section keys (tab-..., tab-content-..., group-...).<br />*Multiple targets must be comma separated.*",
    alias: "showIfChecked",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  showIfUnchecked: {
    label: "Show if unchecked",
    description: "Targets to show when unchecked. Supports property aliases and section keys (tab-..., tab-content-..., group-...).<br />*Multiple targets must be comma separated.*",
    alias: "showIfUnchecked",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Use a parent property value to drive this displayer on the child node.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  selectionType: {
    label: "Selection type",
    description: "Choose whether this editor behaves as a radio list (single selection) or checkbox list (multiple selections).",
    alias: "selectionType",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    config: [
      {
        alias: "items",
        value: ["Radio", "Checkbox"]
      }
    ]
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
}, v = {
  items: {
    label: "Add prevalue",
    description: "Add, remove or sort values for the conditional list.<br />Use aliases/sections in Show/Hide.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  default: {
    label: "Default value",
    description: "Type the key from the list created above to be the initial default selection.<br/>*(Optional)*",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Use a parent property value to drive this displayer on the child node.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  selectionType: {
    label: "Selection type",
    description: "Choose whether this editor behaves as a radio list (single selection) or checkbox list (multiple selections).",
    alias: "selectionType",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
    config: [
      {
        alias: "items",
        value: ["Radio", "Checkbox"]
      }
    ]
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
}, I = {
  items: {
    label: "Add prevalue",
    description: "Add, remove or sort values for the conditional list.<br />Use aliases/sections in Show/Hide.<br />*Multiple targets must be comma separated.*",
    alias: "items",
    propertyEditorUiAlias: "Our.Umbraco.CdMultivalues"
  },
  default: {
    label: "Default value",
    description: "Type the value name from the list created above to be the initial default selection.<br/>*(Optional)*",
    alias: "default",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  },
  parentPropertyAlias: {
    label: "Parent property alias",
    description: "Optional. Use a parent property value to drive this displayer on the child node.",
    alias: "parentPropertyAlias",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
  }
}, Jt = Object.keys(A).map((t) => A[t]), Kt = Object.keys(v).map((t) => v[t]), Xt = Object.keys(I).map((t) => I[t]), Zt = [
  // custom view for prevalues (will not be displayed in backoffice)
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdMultivalues",
    name: "[Conditional] Multivalues Displayer",
    element: () => import("./cdMultivalues-ZVrLMAMO.js"),
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
    element: () => Promise.resolve().then(() => Rt),
    elementName: $e,
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
    element: () => Promise.resolve().then(() => It),
    elementName: Ae,
    meta: {
      label: "[Conditional] Radio Displayer",
      icon: "icon-circle-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: Kt,
        defaultData: [
          {
            alias: v.labelsPos.alias,
            value: "Right"
          },
          {
            alias: v.selectionType.alias,
            value: "Radio"
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
    elementName: Ee,
    meta: {
      label: "[Conditional] Dropdown Displayer",
      icon: "icon-filter-arrows",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: Xt
      }
    }
  }
], Qt = (t, e) => {
  const i = [...Zt];
  e.registerMany(i);
}, Yt = (t, e) => {
}, ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onInit: Qt,
  onUnload: Yt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ai as b,
  ge as t
};
//# sourceMappingURL=backoffice-entrypoint-DX-oH3N3.js.map
