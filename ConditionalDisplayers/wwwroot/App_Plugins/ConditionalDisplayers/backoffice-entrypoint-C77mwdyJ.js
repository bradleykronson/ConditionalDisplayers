var Ae = (i) => {
  throw TypeError(i);
};
var tt = (i, e, t) => e.has(i) || Ae("Cannot " + t);
var Ee = (i, e, t) => e.has(i) ? Ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t);
var Pe = (i, e, t) => (tt(i, e, "access private method"), t);
import { nothing as we, html as b, property as T, state as p, customElement as he, repeat as Se } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as ce } from "@umbraco-cms/backoffice/event";
import { UmbElementMixin as it } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as st } from "@umbraco-cms/backoffice/property";
const pe = "our-conditionaldisplayers";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis, de = G.ShadowRoot && (G.ShadyCSS === void 0 || G.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ue = Symbol(), Ce = /* @__PURE__ */ new WeakMap();
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
      s && (e = Ce.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Ce.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ot = (i) => new We(typeof i == "string" ? i : i + "", void 0, ue), rt = (i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce((s, o, a) => s + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[a + 1], i[0]);
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
const { is: nt, defineProperty: lt, getOwnPropertyDescriptor: ht, getOwnPropertyNames: ct, getOwnPropertySymbols: pt, getPrototypeOf: dt } = Object, w = globalThis, xe = w.trustedTypes, ut = xe ? xe.emptyScript : "", ee = w.reactiveElementPolyfillSupport, B = (i, e) => i, oe = { toAttribute(i, e) {
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
} }, je = (i, e) => !nt(i, e), Oe = { attribute: !0, type: String, converter: oe, reflect: !1, useDefault: !1, hasChanged: je };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), w.litPropertyMetadata ?? (w.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class V extends HTMLElement {
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
    const { get: o, set: a } = ht(this.prototype, e) ?? { get() {
      return this[t];
    }, set(r) {
      this[t] = r;
    } };
    return { get: o, set(r) {
      const l = o == null ? void 0 : o.call(this);
      a == null || a.call(this, r), this.requestUpdate(e, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Oe;
  }
  static _$Ei() {
    if (this.hasOwnProperty(B("elementProperties"))) return;
    const e = dt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(B("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(B("properties"))) {
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
    var a;
    const s = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, s);
    if (o !== void 0 && s.reflect === !0) {
      const r = (((a = s.converter) == null ? void 0 : a.toAttribute) !== void 0 ? s.converter : oe).toAttribute(t, s.type);
      this._$Em = e, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var a, r;
    const s = this.constructor, o = s._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const l = s.getPropertyOptions(o), n = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((a = l.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? l.converter : oe;
      this._$Em = o;
      const h = n.fromAttribute(t, l.type);
      this[o] = h ?? ((r = this._$Ej) == null ? void 0 : r.get(o)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    var o;
    if (e !== void 0) {
      const a = this.constructor, r = this[e];
      if (s ?? (s = a.getPropertyOptions(e)), !((s.hasChanged ?? je)(r, t) || s.useDefault && s.reflect && r === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(a._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: o, wrapped: a }, r) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, r ?? t ?? this[e]), a !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
        for (const [a, r] of this._$Ep) this[a] = r;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [a, r] of o) {
        const { wrapped: l } = r, n = this[a];
        l !== !0 || this._$AL.has(a) || n === void 0 || this.C(a, void 0, r, n);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (s = this._$EO) == null || s.forEach((o) => {
        var a;
        return (a = o.hostUpdate) == null ? void 0 : a.call(o);
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
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[B("elementProperties")] = /* @__PURE__ */ new Map(), V[B("finalized")] = /* @__PURE__ */ new Map(), ee == null || ee({ ReactiveElement: V }), (w.reactiveElementVersions ?? (w.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, Z = R.trustedTypes, Ve = Z ? Z.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Fe = "$lit$", P = `lit$${Math.random().toFixed(9).slice(2)}$`, Ge = "?" + P, ft = `<${Ge}>`, O = document, L = () => O.createComment(""), N = (i) => i === null || typeof i != "object" && typeof i != "function", fe = Array.isArray, gt = (i) => fe(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", te = `[ 	
\f\r]`, M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, De = /-->/g, ke = />/g, C = RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Te = /'/g, Me = /"/g, qe = /^(?:script|style|textarea|title)$/i, D = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), Be = /* @__PURE__ */ new WeakMap(), U = O.createTreeWalker(O, 129);
function Je(i, e) {
  if (!fe(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ve !== void 0 ? Ve.createHTML(e) : e;
}
const yt = (i, e) => {
  const t = i.length - 1, s = [];
  let o, a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = M;
  for (let l = 0; l < t; l++) {
    const n = i[l];
    let h, d, c = -1, _ = 0;
    for (; _ < n.length && (r.lastIndex = _, d = r.exec(n), d !== null); ) _ = r.lastIndex, r === M ? d[1] === "!--" ? r = De : d[1] !== void 0 ? r = ke : d[2] !== void 0 ? (qe.test(d[2]) && (o = RegExp("</" + d[2], "g")), r = C) : d[3] !== void 0 && (r = C) : r === C ? d[0] === ">" ? (r = o ?? M, c = -1) : d[1] === void 0 ? c = -2 : (c = r.lastIndex - d[2].length, h = d[1], r = d[3] === void 0 ? C : d[3] === '"' ? Me : Te) : r === Me || r === Te ? r = C : r === De || r === ke ? r = M : (r = C, o = void 0);
    const E = r === C && i[l + 1].startsWith("/>") ? " " : "";
    a += r === M ? n + ft : c >= 0 ? (s.push(h), n.slice(0, c) + Fe + n.slice(c) + P + E) : n + P + (c === -2 ? l : E);
  }
  return [Je(i, a + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class z {
  constructor({ strings: e, _$litType$: t }, s) {
    let o;
    this.parts = [];
    let a = 0, r = 0;
    const l = e.length - 1, n = this.parts, [h, d] = yt(e, t);
    if (this.el = z.createElement(h, s), U.currentNode = this.el.content, t === 2 || t === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (o = U.nextNode()) !== null && n.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const c of o.getAttributeNames()) if (c.endsWith(Fe)) {
          const _ = d[r++], E = o.getAttribute(c).split(P), F = /([.?@])?(.*)/.exec(_);
          n.push({ type: 1, index: a, name: F[2], strings: E, ctor: F[1] === "." ? vt : F[1] === "?" ? _t : F[1] === "@" ? $t : Y }), o.removeAttribute(c);
        } else c.startsWith(P) && (n.push({ type: 6, index: a }), o.removeAttribute(c));
        if (qe.test(o.tagName)) {
          const c = o.textContent.split(P), _ = c.length - 1;
          if (_ > 0) {
            o.textContent = Z ? Z.emptyScript : "";
            for (let E = 0; E < _; E++) o.append(c[E], L()), U.nextNode(), n.push({ type: 2, index: ++a });
            o.append(c[_], L());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ge) n.push({ type: 2, index: a });
      else {
        let c = -1;
        for (; (c = o.data.indexOf(P, c + 1)) !== -1; ) n.push({ type: 7, index: a }), c += P.length - 1;
      }
      a++;
    }
  }
  static createElement(e, t) {
    const s = O.createElement("template");
    return s.innerHTML = e, s;
  }
}
function k(i, e, t = i, s) {
  var r, l;
  if (e === D) return e;
  let o = s !== void 0 ? (r = t._$Co) == null ? void 0 : r[s] : t._$Cl;
  const a = N(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== a && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), a === void 0 ? o = void 0 : (o = new a(i), o._$AT(i, t, s)), s !== void 0 ? (t._$Co ?? (t._$Co = []))[s] = o : t._$Cl = o), o !== void 0 && (e = k(i, o._$AS(i, e.values), o, s)), e;
}
class mt {
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
    const { el: { content: t }, parts: s } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? O).importNode(t, !0);
    U.currentNode = o;
    let a = U.nextNode(), r = 0, l = 0, n = s[0];
    for (; n !== void 0; ) {
      if (r === n.index) {
        let h;
        n.type === 2 ? h = new j(a, a.nextSibling, this, e) : n.type === 1 ? h = new n.ctor(a, n.name, n.strings, this, e) : n.type === 6 && (h = new bt(a, this, e)), this._$AV.push(h), n = s[++l];
      }
      r !== (n == null ? void 0 : n.index) && (a = U.nextNode(), r++);
    }
    return U.currentNode = O, o;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class j {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, s, o) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = k(this, e, t), N(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== D && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : gt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && N(this._$AH) ? this._$AA.nextSibling.data = e : this.T(O.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var a;
    const { values: t, _$litType$: s } = e, o = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = z.createElement(Je(s.h, s.h[0]), this.options)), s);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === o) this._$AH.p(t);
    else {
      const r = new mt(o, this), l = r.u(this.options);
      r.p(t), this.T(l), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = Be.get(e.strings);
    return t === void 0 && Be.set(e.strings, t = new z(e)), t;
  }
  k(e) {
    fe(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, o = 0;
    for (const a of e) o === t.length ? t.push(s = new j(this.O(L()), this.O(L()), this, this.options)) : s = t[o], s._$AI(a), o++;
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
class Y {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, o, a) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = a, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  _$AI(e, t = this, s, o) {
    const a = this.strings;
    let r = !1;
    if (a === void 0) e = k(this, e, t, 0), r = !N(e) || e !== this._$AH && e !== D, r && (this._$AH = e);
    else {
      const l = e;
      let n, h;
      for (e = a[0], n = 0; n < a.length - 1; n++) h = k(this, l[s + n], t, n), h === D && (h = this._$AH[n]), r || (r = !N(h) || h !== this._$AH[n]), h === u ? e = u : e !== u && (e += (h ?? "") + a[n + 1]), this._$AH[n] = h;
    }
    r && !o && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class vt extends Y {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
}
class _t extends Y {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
}
class $t extends Y {
  constructor(e, t, s, o, a) {
    super(e, t, s, o, a), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = k(this, e, t, 0) ?? u) === D) return;
    const s = this._$AH, o = e === u && s !== u || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, a = e !== u && (s === u || o);
    o && this.element.removeEventListener(this.name, this, s), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
    k(this, e);
  }
}
const ie = R.litHtmlPolyfillSupport;
ie == null || ie(z, j), (R.litHtmlVersions ?? (R.litHtmlVersions = [])).push("3.3.1");
const At = (i, e, t) => {
  const s = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = s._$litPart$;
  if (o === void 0) {
    const a = (t == null ? void 0 : t.renderBefore) ?? null;
    s._$litPart$ = o = new j(e.insertBefore(L(), a), a, void 0, t ?? {});
  }
  return o._$AI(i), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = globalThis;
class I extends V {
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
    return D;
  }
}
var ze;
I._$litElement$ = !0, I.finalized = !0, (ze = x.litElementHydrateSupport) == null || ze.call(x, { LitElement: I });
const se = x.litElementPolyfillSupport;
se == null || se({ LitElement: I });
(x.litElementVersions ?? (x.litElementVersions = [])).push("4.2.1");
const Et = (i) => i ? i.split(",").map((e) => e.trim()).filter((e) => !!e).map((e) => ({
  type: Pt(e) ? "section" : "property",
  value: e
})).filter((e) => !!e.value) : [], Pt = (i) => i.startsWith("tab-") || i.startsWith("tab-content-") || i.startsWith("group-"), wt = (i) => i.type === "section" ? `[data-element="${i.value}"]` : `umb-property[data-mark="property:${i.value}"]`, Re = (i, e, t) => {
  const s = Et(i);
  if (s.length === 0)
    return;
  const o = s.map((r) => wt(r)).join(",");
  re(o, t, !1).forEach((r) => {
    e ? r.style.removeProperty("display") : r.style.display = "none";
  });
}, re = (i, e = document.body, t = !1) => {
  const s = [], o = (a) => {
    if (a.nodeType !== Node.ELEMENT_NODE || a.matches(i) && (s.push(a), t))
      return;
    const r = a.children;
    if (r.length)
      for (const n of r)
        o(n);
    const l = a.shadowRoot;
    if (l) {
      const n = l.children;
      for (const h of n)
        o(h);
    }
  };
  return o(e), t ? s.slice(0, 1) : s;
}, St = rt`
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
var Q, Ke;
const be = class be extends it(I) {
  constructor() {
    super();
    Ee(this, Q);
    this.consumeContext(st, (t) => {
      this.datasetHostElement = t.getHostElement();
    });
  }
  firstUpdated(t) {
    setTimeout(() => {
      Pe(this, Q, Ke).call(this);
    }, 50);
  }
  displayProps(t, s) {
    this.datasetHostElement && (Re(t, !0, this.datasetHostElement), Re(s, !1, this.datasetHostElement));
  }
  getParentPropertyValue(t) {
    if (!t)
      return;
    const s = this.findNearestParentProperty(t);
    if (s)
      return this.readParentPropertyValue(s);
  }
  findNearestParentProperty(t) {
    const s = `umb-property[data-mark="property:${t}"]`, o = re(s, document.body, !1);
    if (!o.length)
      return;
    const a = this.getBoundingClientRect();
    let r, l = Number.MAX_SAFE_INTEGER;
    for (const n of o) {
      const h = n.getBoundingClientRect(), d = Math.abs(a.top - h.top);
      d < l && (l = d, r = n);
    }
    return r;
  }
  readParentPropertyValue(t) {
    const s = re("input,select,textarea,uui-toggle,uui-checkbox", t, !0)[0];
    if (s) {
      if ("checked" in s)
        return s.checked;
      if ("value" in s)
        return s.value;
    }
  }
};
Q = new WeakSet(), Ke = function() {
  this.initDefaults(), this.bootstrap();
}, be.styles = St;
let W = be;
var Ct = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, Xe = (i) => {
  throw TypeError(i);
}, m = (i, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Ut(e, t) : e, a = i.length - 1, r; a >= 0; a--)
    (r = i[a]) && (o = (s ? r(e, t, o) : r(o)) || o);
  return s && o && Ct(e, t, o), o;
}, ge = (i, e, t) => e.has(i) || Xe("Cannot " + t), xt = (i, e, t) => (ge(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Ie = (i, e, t) => e.has(i) ? Xe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Ot = (i, e, t, s) => (ge(i, e, "write to private field"), e.set(i, t), t), Vt = (i, e, t) => (ge(i, e, "access private method"), t), q, ae, Ze;
const ye = `${pe}-checkbox`;
let f = class extends W {
  constructor() {
    super(...arguments), Ie(this, ae), Ie(this, q, !1);
  }
  set config(i) {
    this.configDefaultValue = i.getValueByAlias($.default.alias), this.configShowIfChecked = i.getValueByAlias($.showIfChecked.alias), this.configShowIfUnchecked = i.getValueByAlias($.showIfUnchecked.alias), this.configParentPropertyAlias = i.getValueByAlias($.parentPropertyAlias.alias), this.configIsShowLabels = i.getValueByAlias($.showLabels.alias), this.configLabelOn = i.getValueByAlias($.labelOn.alias), this.configLabelOff = i.getValueByAlias($.labelOff.alias);
  }
  get toggleValue() {
    return xt(this, q);
  }
  set toggleValue(i) {
    i = i || !1, Ot(this, q, i), this.value = i, this.dispatchEvent(new ce());
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
    const i = this.configParentPropertyAlias ? this.getParentPropertyValue(this.configParentPropertyAlias) : this.toggleValue;
    this.toBool(i) ? this.displayProps(this.configShowIfChecked, this.configShowIfUnchecked) : this.displayProps(this.configShowIfUnchecked, this.configShowIfChecked);
  }
  toBool(i) {
    if (typeof i == "boolean") return i;
    if (typeof i == "number") return i === 1;
    if (typeof i == "string") {
      const e = i.trim().toLowerCase();
      return e === "1" || e === "true" || e === "yes" || e === "on";
    }
    return !1;
  }
  render() {
    return b`
        <div class="umb-property-editor umb-boolean">
            <uui-toggle .checked=${this.toggleValue} @change=${Vt(this, ae, Ze)}
                    label="${(this.configIsShowLabels ? this.toggleValue ? this.configLabelOn : this.configLabelOff : we) ?? we}"
                    labelPosition="right"></uui-toggle>
        </div>
        `;
  }
};
q = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
Ze = function(i) {
  i.stopPropagation(), this.toggleValue = i.target.checked, this.runDisplayLogic();
};
m([
  T({ type: Boolean, attribute: !0 })
], f.prototype, "value", 2);
m([
  T({ attribute: !1 })
], f.prototype, "config", 1);
m([
  p()
], f.prototype, "configDefaultValue", 2);
m([
  p()
], f.prototype, "configShowIfChecked", 2);
m([
  p()
], f.prototype, "configShowIfUnchecked", 2);
m([
  p()
], f.prototype, "configParentPropertyAlias", 2);
m([
  p()
], f.prototype, "configIsShowLabels", 2);
m([
  p()
], f.prototype, "configLabelOn", 2);
m([
  p()
], f.prototype, "configLabelOff", 2);
m([
  p()
], f.prototype, "toggleValue", 1);
f = m([
  he(ye)
], f);
const Dt = f, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdCheckboxElement() {
    return f;
  },
  default: Dt,
  elementName: ye
}, Symbol.toStringTag, { value: "Module" }));
var Tt = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, Qe = (i) => {
  throw TypeError(i);
}, v = (i, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Mt(e, t) : e, a = i.length - 1, r; a >= 0; a--)
    (r = i[a]) && (o = (s ? r(e, t, o) : r(o)) || o);
  return s && o && Tt(e, t, o), o;
}, me = (i, e, t) => e.has(i) || Qe("Cannot " + t), Bt = (i, e, t) => (me(i, e, "read from private field"), t ? t.call(i) : e.get(i)), He = (i, e, t) => e.has(i) ? Qe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Rt = (i, e, t, s) => (me(i, e, "write to private field"), e.set(i, t), t), Le = (i, e, t) => (me(i, e, "access private method"), t), J, K, ne;
const ve = `${pe}-radio`;
let g = class extends W {
  constructor() {
    super(...arguments), He(this, K), this.availableValues = [], He(this, J, "");
  }
  set config(i) {
    this.assignValuesFromConfig(i);
  }
  get selectedValue() {
    return Bt(this, J);
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
    const i = this.getActiveItem();
    i && this.displayProps(i.show, i.hide);
  }
  getActiveItem() {
    if (this.configParentPropertyAlias) {
      const i = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (i != null) {
        const e = String(i);
        return this.availableValues.find((t) => t.value === e || t.key === e);
      }
    }
    return this.selectedItem;
  }
  assignValuesFromConfig(i) {
    this.configItems = i.getValueByAlias(A.items.alias), this.configDefaultValue = i.getValueByAlias(A.default.alias), this.configParentPropertyAlias = i.getValueByAlias(A.parentPropertyAlias.alias), this.configAlignHorizontal = i.getValueByAlias(A.alignHrz.alias), this.configLabelPosition = i.getValueByAlias(A.labelsPos.alias), this.configAsButton = i.getValueByAlias(A.asBtn.alias), this.availableValues = this.configItems;
  }
  isValidSelection(i) {
    return !!this.availableValues.find((e) => e.value === i);
  }
  render() {
    return this.availableValues.length === 0 ? b`<p>No conditional items configured</p>` : b`
        ${this.configAsButton ? this.renderButtonGroup() : this.renderRadioGroup()}
        `;
  }
  renderRadioGroup() {
    return b`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""} labelpos-${this.configLabelPosition}" @change=${Le(this, K, ne)}>
            ${Se(this.availableValues, (i) => b`
                <label><input type="radio" name="radioGroup" value="${i.value}" .checked=${this.selectedValue === i.value} /><span class="label">${i.value}</span></label>
            `)}

            </div>
        `;
  }
  renderButtonGroup() {
    return b`
        <div class="cd-conditional-group ${this.configAlignHorizontal ? "horizontal" : ""}" @click=${Le(this, K, ne)}>
            ${Se(this.availableValues, (i) => b`
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
  T({ type: String, attribute: !1 })
], g.prototype, "value", 2);
v([
  T({ attribute: !1 })
], g.prototype, "config", 1);
v([
  p()
], g.prototype, "configDefaultValue", 2);
v([
  p()
], g.prototype, "configItems", 2);
v([
  p()
], g.prototype, "configParentPropertyAlias", 2);
v([
  p()
], g.prototype, "configAlignHorizontal", 2);
v([
  p()
], g.prototype, "configLabelPosition", 2);
v([
  p()
], g.prototype, "configAsButton", 2);
v([
  p()
], g.prototype, "selectedValue", 1);
g = v([
  he(ve)
], g);
const It = g, Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdRadioElement() {
    return g;
  },
  default: It,
  elementName: ve
}, Symbol.toStringTag, { value: "Module" }));
var Lt = Object.defineProperty, Nt = Object.getOwnPropertyDescriptor, Ye = (i) => {
  throw TypeError(i);
}, S = (i, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? Nt(e, t) : e, a = i.length - 1, r; a >= 0; a--)
    (r = i[a]) && (o = (s ? r(e, t, o) : r(o)) || o);
  return s && o && Lt(e, t, o), o;
}, _e = (i, e, t) => e.has(i) || Ye("Cannot " + t), zt = (i, e, t) => (_e(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Ne = (i, e, t) => e.has(i) ? Ye("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Wt = (i, e, t, s) => (_e(i, e, "write to private field"), e.set(i, t), t), jt = (i, e, t) => (_e(i, e, "access private method"), t), X, le, et;
const $e = `${pe}-dropdown`;
let y = class extends W {
  constructor() {
    super(...arguments), Ne(this, le), this.availableValues = [], this.viewModelSelectOptions = [], Ne(this, X, "");
  }
  set config(i) {
    this.assignValuesFromConfig(i);
  }
  get selectedValue() {
    return zt(this, X);
  }
  set selectedValue(i) {
    if (!i)
      throw new Error("value not set");
    Wt(this, X, i);
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
    this.viewModelSelectOptions = this.availableValues.map((e) => ({
      name: e.value,
      value: e.key,
      selected: e.key === this.selectedValue
    }));
    const i = this.getActiveItem();
    i && this.displayProps(i.show, i.hide);
  }
  assignValuesFromConfig(i) {
    this.configItems = i.getValueByAlias(H.items.alias), this.configDefaultValue = i.getValueByAlias(H.default.alias), this.configParentPropertyAlias = i.getValueByAlias(H.parentPropertyAlias.alias), this.availableValues = this.configItems;
  }
  getActiveItem() {
    if (this.configParentPropertyAlias) {
      const i = this.getParentPropertyValue(this.configParentPropertyAlias);
      if (i != null) {
        const e = String(i);
        return this.availableValues.find((t) => t.key === e || t.value === e);
      }
    }
    return this.selectedItem;
  }
  isValidSelection(i) {
    return !!this.availableValues.find((e) => e.key === i);
  }
  render() {
    return this.availableValues.length === 0 ? b`<p>No conditional items configured</p>` : b`
        <uui-select label="Display Selection" @change=${jt(this, le, et)} required .options=${this.viewModelSelectOptions} placeholder="Pick One"></uui-select>
        `;
  }
};
X = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakSet();
et = function(i) {
  i.stopPropagation();
  const e = i.target.value;
  this.selectedValue = e, this.runDisplayLogic();
};
S([
  T({ type: String, attribute: !1 })
], y.prototype, "value", 2);
S([
  T({ attribute: !1 })
], y.prototype, "config", 1);
S([
  p()
], y.prototype, "configDefaultValue", 2);
S([
  p()
], y.prototype, "configItems", 2);
S([
  p()
], y.prototype, "configParentPropertyAlias", 2);
S([
  p()
], y.prototype, "viewModelSelectOptions", 2);
S([
  p()
], y.prototype, "selectedValue", 1);
y = S([
  he($e)
], y);
const Ft = y, Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CdDropDownFlexibleElement() {
    return y;
  },
  default: Ft,
  elementName: $e
}, Symbol.toStringTag, { value: "Module" })), $ = {
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
}, A = {
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
}, H = {
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
}, qt = Object.keys($).map((i) => $[i]), Jt = Object.keys(A).map((i) => A[i]), Kt = Object.keys(H).map((i) => H[i]), Xt = [
  // custom view for prevalues (will not be displayed in backoffice)
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdMultivalues",
    name: "[Conditional] Multivalues Displayer",
    element: () => import("./cdMultivalues-Bx50K_Nz.js"),
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
    elementName: ye,
    meta: {
      label: "[Conditional] Checkbox Displayer",
      icon: "icon-checkbox-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.TrueFalse",
      settings: {
        properties: qt
      }
    }
  },
  // Conditional Radio
  {
    type: "propertyEditorUi",
    alias: "Our.Umbraco.CdRadio",
    name: "[Conditional] Radio Displayer",
    element: () => Promise.resolve().then(() => Ht),
    elementName: ve,
    meta: {
      label: "[Conditional] Radio Displayer",
      icon: "icon-circle-dotted-active",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: Jt,
        defaultData: [
          {
            alias: A.labelsPos.alias,
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
    element: () => Promise.resolve().then(() => Gt),
    elementName: $e,
    meta: {
      label: "[Conditional] Dropdown Displayer",
      icon: "icon-filter-arrows",
      group: "Conditional Displayers",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      settings: {
        properties: Kt
      }
    }
  }
], Zt = (i, e) => {
  const t = [...Xt];
  e.registerMany(t);
}, Qt = (i, e) => {
}, ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onInit: Zt,
  onUnload: Qt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ri as b,
  pe as t
};
//# sourceMappingURL=backoffice-entrypoint-C77mwdyJ.js.map
