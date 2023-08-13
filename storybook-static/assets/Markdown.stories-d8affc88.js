import { u as nl, j as pa, d as al } from "./preview-35a99a87.js";
import { _ as il } from "./iframe-5ac5d544.js";
import { g as ll } from "./_commonjsHelpers-de833af9.js";
import { r as O0 } from "./index-61bf1805.js";
import { c as sl } from "./_commonjs-dynamic-modules-302442b1.js";
var rr = { exports: {} },
  L0 = {};
L0._ = L0._interop_require_default = ol;
function ol(r) {
  return r && r.__esModule ? r : { default: r };
}
var Nt = {},
  Et = {},
  Jr;
function ul() {
  return (
    Jr ||
      ((Jr = 1),
      (function (r) {
        "use client";
        Object.defineProperty(r, "__esModule", { value: !0 }),
          Object.defineProperty(r, "LoadableContext", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        const n = L0._(O0).default.createContext(null);
      })(Et)),
    Et
  );
}
var Qr;
function cl() {
  return (
    Qr ||
      ((Qr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          Object.defineProperty(r, "default", {
            enumerable: !0,
            get: function () {
              return y;
            },
          });
        const t = L0._(O0),
          n = ul();
        function a(v) {
          return v && v.default ? v.default : v;
        }
        const i = [],
          l = [];
        let o = !1;
        function u(v) {
          let w = v(),
            A = { loading: !0, loaded: null, error: null };
          return (
            (A.promise = w
              .then((z) => ((A.loading = !1), (A.loaded = z), z))
              .catch((z) => {
                throw ((A.loading = !1), (A.error = z), z);
              })),
            A
          );
        }
        function m(v, w) {
          let A = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              w
            ),
            z = null;
          function M() {
            if (!z) {
              const O = new d(v, A);
              z = {
                getCurrentValue: O.getCurrentValue.bind(O),
                subscribe: O.subscribe.bind(O),
                retry: O.retry.bind(O),
                promise: O.promise.bind(O),
              };
            }
            return z.promise();
          }
          if ((typeof window > "u" && i.push(M), !o && typeof window < "u")) {
            const O =
              A.webpack && typeof sl.resolveWeak == "function"
                ? A.webpack()
                : A.modules;
            O &&
              l.push((U) => {
                for (const q of O) if (U.includes(q)) return M();
              });
          }
          function L() {
            M();
            const O = t.default.useContext(n.LoadableContext);
            O &&
              Array.isArray(A.modules) &&
              A.modules.forEach((U) => {
                O(U);
              });
          }
          function I(O, U) {
            L();
            const q = t.default.useSyncExternalStore(
              z.subscribe,
              z.getCurrentValue,
              z.getCurrentValue
            );
            return (
              t.default.useImperativeHandle(U, () => ({ retry: z.retry }), []),
              t.default.useMemo(
                () =>
                  q.loading || q.error
                    ? t.default.createElement(A.loading, {
                        isLoading: q.loading,
                        pastDelay: q.pastDelay,
                        timedOut: q.timedOut,
                        error: q.error,
                        retry: z.retry,
                      })
                    : q.loaded
                    ? t.default.createElement(a(q.loaded), O)
                    : null,
                [O, q]
              )
            );
          }
          return (
            (I.preload = () => M()),
            (I.displayName = "LoadableComponent"),
            t.default.forwardRef(I)
          );
        }
        class d {
          promise() {
            return this._res.promise;
          }
          retry() {
            this._clearTimeouts(),
              (this._res = this._loadFn(this._opts.loader)),
              (this._state = { pastDelay: !1, timedOut: !1 });
            const { _res: w, _opts: A } = this;
            w.loading &&
              (typeof A.delay == "number" &&
                (A.delay === 0
                  ? (this._state.pastDelay = !0)
                  : (this._delay = setTimeout(() => {
                      this._update({ pastDelay: !0 });
                    }, A.delay))),
              typeof A.timeout == "number" &&
                (this._timeout = setTimeout(() => {
                  this._update({ timedOut: !0 });
                }, A.timeout))),
              this._res.promise
                .then(() => {
                  this._update({}), this._clearTimeouts();
                })
                .catch((z) => {
                  this._update({}), this._clearTimeouts();
                }),
              this._update({});
          }
          _update(w) {
            (this._state = {
              ...this._state,
              error: this._res.error,
              loaded: this._res.loaded,
              loading: this._res.loading,
              ...w,
            }),
              this._callbacks.forEach((A) => A());
          }
          _clearTimeouts() {
            clearTimeout(this._delay), clearTimeout(this._timeout);
          }
          getCurrentValue() {
            return this._state;
          }
          subscribe(w) {
            return (
              this._callbacks.add(w),
              () => {
                this._callbacks.delete(w);
              }
            );
          }
          constructor(w, A) {
            (this._loadFn = w),
              (this._opts = A),
              (this._callbacks = new Set()),
              (this._delay = null),
              (this._timeout = null),
              this.retry();
          }
        }
        function p(v) {
          return m(u, v);
        }
        function x(v, w) {
          let A = [];
          for (; v.length; ) {
            let z = v.pop();
            A.push(z(w));
          }
          return Promise.all(A).then(() => {
            if (v.length) return x(v, w);
          });
        }
        (p.preloadAll = () =>
          new Promise((v, w) => {
            x(i).then(v, w);
          })),
          (p.preloadReady = (v) => (
            v === void 0 && (v = []),
            new Promise((w) => {
              const A = () => ((o = !0), w());
              x(l, v).then(A, A);
            })
          )),
          typeof window < "u" && (window.__NEXT_PRELOADREADY = p.preloadReady);
        const y = p;
      })(Nt)),
    Nt
  );
}
(function (r, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(d, p) {
    for (var x in p) Object.defineProperty(d, x, { enumerable: !0, get: p[x] });
  }
  t(e, {
    noSSR: function () {
      return u;
    },
    default: function () {
      return m;
    },
  });
  const n = L0,
    a = n._(O0),
    i = n._(cl()),
    l = typeof window > "u";
  function o(d) {
    return { default: (d == null ? void 0 : d.default) || d };
  }
  function u(d, p) {
    if ((delete p.webpack, delete p.modules, !l)) return d(p);
    const x = p.loading;
    return () =>
      a.default.createElement(x, {
        error: null,
        isLoading: !0,
        pastDelay: !1,
        timedOut: !1,
      });
  }
  function m(d, p) {
    let x = i.default,
      y = {
        loading: (A) => {
          let { error: z, isLoading: M, pastDelay: L } = A;
          return null;
        },
      };
    d instanceof Promise
      ? (y.loader = () => d)
      : typeof d == "function"
      ? (y.loader = d)
      : typeof d == "object" && (y = { ...y, ...d }),
      (y = { ...y, ...p });
    const v = y.loader,
      w = () => (v != null ? v().then(o) : Promise.resolve(o(() => null)));
    return (
      y.loadableGenerated &&
        ((y = { ...y, ...y.loadableGenerated }), delete y.loadableGenerated),
      typeof y.ssr == "boolean" && !y.ssr
        ? (delete y.webpack, delete y.modules, u(x, y))
        : x({ ...y, loader: w })
    );
  }
  (typeof e.default == "function" ||
    (typeof e.default == "object" && e.default !== null)) &&
    typeof e.default.__esModule > "u" &&
    (Object.defineProperty(e.default, "__esModule", { value: !0 }),
    Object.assign(e.default, e),
    (r.exports = e.default));
})(rr, rr.exports);
var hl = rr.exports,
  ml = hl;
const dl = ll(ml),
  e0 = function (r, e, t, n, a) {
    const i = De(e);
    if (
      t != null &&
      (typeof t != "number" || t < 0 || t === Number.POSITIVE_INFINITY)
    )
      throw new Error("Expected positive finite index for child node");
    if (n != null && (!n.type || !n.children))
      throw new Error("Expected parent node");
    if (!r || !r.type || typeof r.type != "string") return !1;
    if ((n == null) != (t == null))
      throw new Error("Expected both parent and index");
    return i.call(a, r, t, n);
  },
  De = function (r) {
    if (r == null) return br;
    if (typeof r == "string") return pl(r);
    if (typeof r == "object") return fl(r);
    if (typeof r == "function") return ga(r);
    throw new Error("Expected function, string, or array as test");
  };
function fl(r) {
  const e = [];
  let t = -1;
  for (; ++t < r.length; ) e[t] = De(r[t]);
  return ga(n);
  function n(...a) {
    let i = -1;
    for (; ++i < e.length; ) if (e[i].call(this, ...a)) return !0;
    return !1;
  }
}
function pl(r) {
  return e;
  function e(t) {
    return br(t) && t.tagName === r;
  }
}
function ga(r) {
  return e;
  function e(t, ...n) {
    return br(t) && !!r.call(this, t, ...n);
  }
}
function br(r) {
  return !!(
    r &&
    typeof r == "object" &&
    r.type === "element" &&
    typeof r.tagName == "string"
  );
}
const yr = De([
    "audio",
    "canvas",
    "embed",
    "iframe",
    "img",
    "math",
    "object",
    "picture",
    "svg",
    "video",
  ]),
  $0 = function (r) {
    if (r == null) return yl;
    if (typeof r == "string") return bl(r);
    if (typeof r == "object") return Array.isArray(r) ? gl(r) : vl(r);
    if (typeof r == "function") return yt(r);
    throw new Error("Expected function, string, or object as test");
  };
function gl(r) {
  const e = [];
  let t = -1;
  for (; ++t < r.length; ) e[t] = $0(r[t]);
  return yt(n);
  function n(...a) {
    let i = -1;
    for (; ++i < e.length; ) if (e[i].call(this, ...a)) return !0;
    return !1;
  }
}
function vl(r) {
  return yt(e);
  function e(t) {
    let n;
    for (n in r) if (t[n] !== r[n]) return !1;
    return !0;
  }
}
function bl(r) {
  return yt(e);
  function e(t) {
    return t && t.type === r;
  }
}
function yt(r) {
  return e;
  function e(t, ...n) {
    return !!(
      t &&
      typeof t == "object" &&
      "type" in t &&
      r.call(this, t, ...n)
    );
  }
}
function yl() {
  return !0;
}
function u0(r) {
  const e = r && typeof r == "object" && r.type === "text" ? r.value || "" : r;
  return typeof e == "string" && e.replace(/[ \t\n\f\r]/g, "") === "";
}
const xl = [
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "br",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "li",
    "li",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "optgroup",
    "option",
    "p",
    "plaintext",
    "pre",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "td",
    "tfoot",
    "th",
    "th",
    "thead",
    "tr",
    "ul",
    "wbr",
    "xmp",
  ],
  wl = ["button", "input", "select", "textarea"],
  kl = [
    "area",
    "base",
    "basefont",
    "dialog",
    "datalist",
    "head",
    "link",
    "meta",
    "noembed",
    "noframes",
    "param",
    "rp",
    "script",
    "source",
    "style",
    "template",
    "track",
    "title",
  ],
  xr = $0(["doctype", "comment"]);
function Sl(r = {}) {
  const e = Fl(r.newlines ? Cl : Dl);
  return (t) => {
    va(t, { collapse: e, whitespace: "normal" });
  };
}
function va(r, e) {
  if ("children" in r) {
    const t = Object.assign({}, e);
    return (
      (r.type === "root" || xa(r)) && ((t.before = !0), (t.after = !0)),
      (t.whitespace = Nl(r, e)),
      Ml(r, t)
    );
  }
  if (r.type === "text") {
    if (e.whitespace === "normal") return Al(r, e);
    e.whitespace === "nowrap" && (r.value = e.collapse(r.value));
  }
  return { remove: !1, ignore: xr(r), stripAtStart: !1 };
}
function Al(r, e) {
  const t = e.collapse(r.value),
    n = { remove: !1, ignore: !1, stripAtStart: !1 };
  let a = 0,
    i = t.length;
  return (
    e.before && en(t.charAt(0)) && a++,
    a !== i && en(t.charAt(i - 1)) && (e.after ? i-- : (n.stripAtStart = !0)),
    a === i ? (n.remove = !0) : (r.value = t.slice(a, i)),
    n
  );
}
function Ml(r, e) {
  let t = e.before;
  const n = e.after,
    a = r.children;
  let i = a.length,
    l = -1;
  for (; ++l < i; ) {
    const o = va(a[l], Object.assign({}, e, { before: t, after: ba(a, l, n) }));
    o.remove ? (a.splice(l, 1), l--, i--) : o.ignore || (t = o.stripAtStart),
      ya(a[l]) && (t = !1);
  }
  return { remove: !1, ignore: !1, stripAtStart: !!(t || n) };
}
function ba(r, e, t) {
  for (; ++e < r.length; ) {
    const n = r[e];
    let a = zl(n);
    if (
      (a === void 0 && "children" in n && !Tl(n) && (a = ba(n.children, -1)),
      typeof a == "boolean")
    )
      return a;
  }
  return t;
}
function zl(r) {
  if (r.type === "element") {
    if (ya(r)) return !1;
    if (xa(r)) return !0;
  } else if (r.type === "text") {
    if (!u0(r)) return !1;
  } else if (!xr(r)) return !1;
}
function ya(r) {
  return yr(r) || e0(r, wl);
}
function xa(r) {
  return e0(r, xl);
}
function Tl(r) {
  return (
    !!("properties" in r && r.properties && r.properties.hidden) ||
    xr(r) ||
    e0(r, kl)
  );
}
function en(r) {
  return (
    r === " " ||
    r ===
      `
`
  );
}
function Cl(r) {
  const e = /\r?\n|\r/.exec(r);
  return e ? e[0] : " ";
}
function Dl() {
  return " ";
}
function Fl(r) {
  return e;
  function e(t) {
    return String(t).replace(/[\t\n\v\f\r ]+/g, r);
  }
}
function Nl(r, e) {
  if ("tagName" in r && r.properties)
    switch (r.tagName) {
      case "listing":
      case "plaintext":
      case "script":
      case "style":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return r.properties.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return r.properties.noWrap ? "nowrap" : e.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  return e.whitespace;
}
const El = !0,
  tn = !1,
  wa = "skip",
  wr = function (r, e, t, n) {
    typeof e == "function" &&
      typeof t != "function" &&
      ((n = t), (t = e), (e = null));
    const a = $0(e),
      i = n ? -1 : 1;
    l(r, void 0, [])();
    function l(o, u, m) {
      const d = o && typeof o == "object" ? o : {};
      if (typeof d.type == "string") {
        const x =
          typeof d.tagName == "string"
            ? d.tagName
            : typeof d.name == "string"
            ? d.name
            : void 0;
        Object.defineProperty(p, "name", {
          value: "node (" + (o.type + (x ? "<" + x + ">" : "")) + ")",
        });
      }
      return p;
      function p() {
        let x = [],
          y,
          v,
          w;
        if (
          (!e || a(o, u, m[m.length - 1] || null)) &&
          ((x = Bl(t(o, m))), x[0] === tn)
        )
          return x;
        if (o.children && x[0] !== wa)
          for (
            v = (n ? o.children.length : -1) + i, w = m.concat(o);
            v > -1 && v < o.children.length;

          ) {
            if (((y = l(o.children[v], v, w)()), y[0] === tn)) return y;
            v = typeof y[1] == "number" ? y[1] : v + i;
          }
        return x;
      }
    }
  };
function Bl(r) {
  return Array.isArray(r) ? r : typeof r == "number" ? [El, r] : [r];
}
const Ol = {}.hasOwnProperty;
function ka(r, e) {
  const t =
    typeof e == "string" &&
    Ll(r) &&
    r.type === "element" &&
    r.properties &&
    Ol.call(r.properties, e) &&
    r.properties[e];
  return t != null && t !== !1;
}
function Ll(r) {
  return !!(r && typeof r == "object" && "type" in r);
}
const Rl = new Set(["pingback", "prefetch", "stylesheet"]);
function ql(r) {
  if (!e0(r, "link")) return !1;
  if (ka(r, "itemProp")) return !0;
  const t = (r.properties || {}).rel || [];
  let n = -1;
  if (!Array.isArray(t) || t.length === 0) return !1;
  for (; ++n < t.length; ) if (!Rl.has(String(t[n]))) return !1;
  return !0;
}
const Il = De([
    "a",
    "abbr",
    "area",
    "b",
    "bdi",
    "bdo",
    "br",
    "button",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "i",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "output",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "template",
    "textarea",
    "time",
    "u",
    "var",
    "wbr",
  ]),
  Pl = De("meta");
function Hl(r) {
  return !!(
    $l(r) &&
    (r.type === "text" ||
      Il(r) ||
      yr(r) ||
      ql(r) ||
      (Pl(r) && ka(r, "itemProp")))
  );
}
function $l(r) {
  return r && typeof r == "object" && "type" in r;
}
const Vl = ["pre", "script", "style", "textarea"],
  Ul = Sl({ newlines: !0 });
function jl(r = {}) {
  let e = r.indent || 2,
    t = r.indentInitial;
  return (
    typeof e == "number" && (e = " ".repeat(e)),
    t == null && (t = !0),
    (i) => {
      let l;
      Ul(i),
        wr(i, (o, u) => {
          let m = -1;
          if (!("children" in o)) return;
          if (
            (e0(o, "head") && (l = !0),
            l && e0(o, "body") && (l = void 0),
            e0(o, Vl))
          )
            return wa;
          const d = o.children;
          let p = u.length;
          if (d.length === 0 || !Bt(o, l)) return;
          t || p--;
          let x;
          for (; ++m < d.length; ) {
            const w = d[m];
            (w.type === "text" || w.type === "comment") &&
              (w.value.includes(`
`) && (x = !0),
              (w.value = w.value.replace(/ *\n/g, "$&" + String(e).repeat(p))));
          }
          const y = [];
          let v;
          for (m = -1; ++m < d.length; ) {
            const w = d[m];
            (Bt(w, l) || (x && !m)) && (n(y, p, w), (x = !0)),
              (v = w),
              y.push(w);
          }
          v &&
            (x || Bt(v, l)) &&
            (u0(v) && (y.pop(), (v = y[y.length - 1])), n(y, p - 1)),
            (o.children = y);
        });
    }
  );
  function n(i, l, o) {
    const u = i[i.length - 1],
      m = u0(u) ? i[i.length - 2] : u,
      d =
        (a(m) && a(o)
          ? `

`
          : `
`) + String(e).repeat(Math.max(l, 0));
    u && u.type === "text"
      ? (u.value = u0(u) ? d : u.value + d)
      : i.push({ type: "text", value: d });
  }
  function a(i) {
    return !!(
      i &&
      i.type === "element" &&
      r.blanks &&
      r.blanks.length > 0 &&
      r.blanks.includes(i.tagName)
    );
  }
}
function Bt(r, e) {
  return (
    r.type === "root" ||
    (r.type === "element" ? e || e0(r, "script") || yr(r) || !Hl(r) : !1)
  );
}
class ve {
  constructor(e, t, n) {
    (this.lexer = void 0),
      (this.start = void 0),
      (this.end = void 0),
      (this.lexer = e),
      (this.start = t),
      (this.end = n);
  }
  static range(e, t) {
    return t
      ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer
        ? null
        : new ve(e.loc.lexer, e.loc.start, t.loc.end)
      : e && e.loc;
  }
}
class Be {
  constructor(e, t) {
    (this.text = void 0),
      (this.loc = void 0),
      (this.noexpand = void 0),
      (this.treatAsRelax = void 0),
      (this.text = e),
      (this.loc = t);
  }
  range(e, t) {
    return new Be(t, ve.range(this, e));
  }
}
class F {
  constructor(e, t) {
    (this.name = void 0),
      (this.position = void 0),
      (this.length = void 0),
      (this.rawMessage = void 0);
    var n = "KaTeX parse error: " + e,
      a,
      i,
      l = t && t.loc;
    if (l && l.start <= l.end) {
      var o = l.lexer.input;
      (a = l.start),
        (i = l.end),
        a === o.length
          ? (n += " at end of input: ")
          : (n += " at position " + (a + 1) + ": ");
      var u = o.slice(a, i).replace(/[^]/g, "$&̲"),
        m;
      a > 15 ? (m = "…" + o.slice(a - 15, a)) : (m = o.slice(0, a));
      var d;
      i + 15 < o.length ? (d = o.slice(i, i + 15) + "…") : (d = o.slice(i)),
        (n += m + u + d);
    }
    var p = new Error(n);
    return (
      (p.name = "ParseError"),
      (p.__proto__ = F.prototype),
      (p.position = a),
      a != null && i != null && (p.length = i - a),
      (p.rawMessage = e),
      p
    );
  }
}
F.prototype.__proto__ = Error.prototype;
var Gl = function (e, t) {
    return e.indexOf(t) !== -1;
  },
  Wl = function (e, t) {
    return e === void 0 ? t : e;
  },
  _l = /([A-Z])/g,
  Yl = function (e) {
    return e.replace(_l, "-$1").toLowerCase();
  },
  Xl = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
  Zl = /[&><"']/g;
function Kl(r) {
  return String(r).replace(Zl, (e) => Xl[e]);
}
var Sa = function r(e) {
    return e.type === "ordgroup" || e.type === "color"
      ? e.body.length === 1
        ? r(e.body[0])
        : e
      : e.type === "font"
      ? r(e.body)
      : e;
  },
  Jl = function (e) {
    var t = Sa(e);
    return t.type === "mathord" || t.type === "textord" || t.type === "atom";
  },
  Ql = function (e) {
    if (!e) throw new Error("Expected non-null, but got " + String(e));
    return e;
  },
  es = function (e) {
    var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
    return t != null ? t[1] : "_relative";
  },
  $ = {
    contains: Gl,
    deflt: Wl,
    escape: Kl,
    hyphenate: Yl,
    getBaseElem: Sa,
    isCharacterBox: Jl,
    protocolFromUrl: es,
  },
  ct = {
    displayMode: {
      type: "boolean",
      description:
        "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
      cli: "-d, --display-mode",
    },
    output: {
      type: { enum: ["htmlAndMathml", "html", "mathml"] },
      description: "Determines the markup language of the output.",
      cli: "-F, --format <type>",
    },
    leqno: {
      type: "boolean",
      description: "Render display math in leqno style (left-justified tags).",
    },
    fleqn: { type: "boolean", description: "Render display math flush left." },
    throwOnError: {
      type: "boolean",
      default: !0,
      cli: "-t, --no-throw-on-error",
      cliDescription:
        "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.",
    },
    errorColor: {
      type: "string",
      default: "#cc0000",
      cli: "-c, --error-color <color>",
      cliDescription:
        "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
      cliProcessor: (r) => "#" + r,
    },
    macros: {
      type: "object",
      cli: "-m, --macro <def>",
      cliDescription:
        "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
      cliDefault: [],
      cliProcessor: (r, e) => (e.push(r), e),
    },
    minRuleThickness: {
      type: "number",
      description:
        "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
      processor: (r) => Math.max(0, r),
      cli: "--min-rule-thickness <size>",
      cliProcessor: parseFloat,
    },
    colorIsTextColor: {
      type: "boolean",
      description:
        "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
      cli: "-b, --color-is-text-color",
    },
    strict: {
      type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"],
      description:
        "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
      cli: "-S, --strict",
      cliDefault: !1,
    },
    trust: {
      type: ["boolean", "function"],
      description: "Trust the input, enabling all HTML features such as \\url.",
      cli: "-T, --trust",
    },
    maxSize: {
      type: "number",
      default: 1 / 0,
      description:
        "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
      processor: (r) => Math.max(0, r),
      cli: "-s, --max-size <n>",
      cliProcessor: parseInt,
    },
    maxExpand: {
      type: "number",
      default: 1e3,
      description:
        "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
      processor: (r) => Math.max(0, r),
      cli: "-e, --max-expand <n>",
      cliProcessor: (r) => (r === "Infinity" ? 1 / 0 : parseInt(r)),
    },
    globalGroup: { type: "boolean", cli: !1 },
  };
function ts(r) {
  if (r.default) return r.default;
  var e = r.type,
    t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string") return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class kr {
  constructor(e) {
    (this.displayMode = void 0),
      (this.output = void 0),
      (this.leqno = void 0),
      (this.fleqn = void 0),
      (this.throwOnError = void 0),
      (this.errorColor = void 0),
      (this.macros = void 0),
      (this.minRuleThickness = void 0),
      (this.colorIsTextColor = void 0),
      (this.strict = void 0),
      (this.trust = void 0),
      (this.maxSize = void 0),
      (this.maxExpand = void 0),
      (this.globalGroup = void 0),
      (e = e || {});
    for (var t in ct)
      if (ct.hasOwnProperty(t)) {
        var n = ct[t];
        this[t] =
          e[t] !== void 0 ? (n.processor ? n.processor(e[t]) : e[t]) : ts(n);
      }
  }
  reportNonstrict(e, t, n) {
    var a = this.strict;
    if ((typeof a == "function" && (a = a(e, t, n)), !(!a || a === "ignore"))) {
      if (a === !0 || a === "error")
        throw new F(
          "LaTeX-incompatible input and strict mode is set to 'error': " +
            (t + " [" + e + "]"),
          n
        );
      a === "warn"
        ? typeof console < "u" &&
          console.warn(
            "LaTeX-incompatible input and strict mode is set to 'warn': " +
              (t + " [" + e + "]")
          )
        : typeof console < "u" &&
          console.warn(
            "LaTeX-incompatible input and strict mode is set to " +
              ("unrecognized '" + a + "': " + t + " [" + e + "]")
          );
    }
  }
  useStrictBehavior(e, t, n) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, n);
      } catch {
        a = "error";
      }
    return !a || a === "ignore"
      ? !1
      : a === !0 || a === "error"
      ? !0
      : a === "warn"
      ? (typeof console < "u" &&
          console.warn(
            "LaTeX-incompatible input and strict mode is set to 'warn': " +
              (t + " [" + e + "]")
          ),
        !1)
      : (typeof console < "u" &&
          console.warn(
            "LaTeX-incompatible input and strict mode is set to " +
              ("unrecognized '" + a + "': " + t + " [" + e + "]")
          ),
        !1);
  }
  isTrusted(e) {
    e.url && !e.protocol && (e.protocol = $.protocolFromUrl(e.url));
    var t = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!t;
  }
}
class Ke {
  constructor(e, t, n) {
    (this.id = void 0),
      (this.size = void 0),
      (this.cramped = void 0),
      (this.id = e),
      (this.size = t),
      (this.cramped = n);
  }
  sup() {
    return Ne[rs[this.id]];
  }
  sub() {
    return Ne[ns[this.id]];
  }
  fracNum() {
    return Ne[as[this.id]];
  }
  fracDen() {
    return Ne[is[this.id]];
  }
  cramp() {
    return Ne[ls[this.id]];
  }
  text() {
    return Ne[ss[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}
var Sr = 0,
  mt = 1,
  x0 = 2,
  $e = 3,
  R0 = 4,
  Se = 5,
  S0 = 6,
  ce = 7,
  Ne = [
    new Ke(Sr, 0, !1),
    new Ke(mt, 0, !0),
    new Ke(x0, 1, !1),
    new Ke($e, 1, !0),
    new Ke(R0, 2, !1),
    new Ke(Se, 2, !0),
    new Ke(S0, 3, !1),
    new Ke(ce, 3, !0),
  ],
  rs = [R0, Se, R0, Se, S0, ce, S0, ce],
  ns = [Se, Se, Se, Se, ce, ce, ce, ce],
  as = [x0, $e, R0, Se, S0, ce, S0, ce],
  is = [$e, $e, Se, Se, ce, ce, ce, ce],
  ls = [mt, mt, $e, $e, Se, Se, ce, ce],
  ss = [Sr, mt, x0, $e, x0, $e, x0, $e],
  P = { DISPLAY: Ne[Sr], TEXT: Ne[x0], SCRIPT: Ne[R0], SCRIPTSCRIPT: Ne[S0] },
  nr = [
    {
      name: "latin",
      blocks: [
        [256, 591],
        [768, 879],
      ],
    },
    { name: "cyrillic", blocks: [[1024, 1279]] },
    { name: "armenian", blocks: [[1328, 1423]] },
    { name: "brahmic", blocks: [[2304, 4255]] },
    { name: "georgian", blocks: [[4256, 4351]] },
    {
      name: "cjk",
      blocks: [
        [12288, 12543],
        [19968, 40879],
        [65280, 65376],
      ],
    },
    { name: "hangul", blocks: [[44032, 55215]] },
  ];
function os(r) {
  for (var e = 0; e < nr.length; e++)
    for (var t = nr[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1]) return t.name;
    }
  return null;
}
var ht = [];
nr.forEach((r) => r.blocks.forEach((e) => ht.push(...e)));
function Aa(r) {
  for (var e = 0; e < ht.length; e += 2)
    if (r >= ht[e] && r <= ht[e + 1]) return !0;
  return !1;
}
var b0 = 80,
  us = function (e, t) {
    return (
      "M95," +
      (622 + e + t) +
      `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` +
      e / 2.075 +
      " -" +
      e +
      `
c5.3,-9.3,12,-14,20,-14
H400000v` +
      (40 + e) +
      `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` +
      (834 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "h-400000z"
    );
  },
  cs = function (e, t) {
    return (
      "M263," +
      (601 + e + t) +
      `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` +
      e / 2.084 +
      " -" +
      e +
      `
c4.7,-7.3,11,-11,19,-11
H40000v` +
      (40 + e) +
      `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` +
      (1001 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "h-400000z"
    );
  },
  hs = function (e, t) {
    return (
      "M983 " +
      (10 + e + t) +
      `
l` +
      e / 3.13 +
      " -" +
      e +
      `
c4,-6.7,10,-10,18,-10 H400000v` +
      (40 + e) +
      `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` +
      (1001 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "h-400000z"
    );
  },
  ms = function (e, t) {
    return (
      "M424," +
      (2398 + e + t) +
      `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` +
      e / 4.223 +
      " -" +
      e +
      `c4,-6.7,10,-10,18,-10 H400000
v` +
      (40 + e) +
      `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` +
      (1001 + e) +
      " " +
      t +
      `
h400000v` +
      (40 + e) +
      "h-400000z"
    );
  },
  ds = function (e, t) {
    return (
      "M473," +
      (2713 + e + t) +
      `
c339.3,-1799.3,509.3,-2700,510,-2702 l` +
      e / 5.298 +
      " -" +
      e +
      `
c3.3,-7.3,9.3,-11,18,-11 H400000v` +
      (40 + e) +
      `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` +
      (1001 + e) +
      " " +
      t +
      "h400000v" +
      (40 + e) +
      "H1017.7z"
    );
  },
  fs = function (e) {
    var t = e / 2;
    return (
      "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z"
    );
  },
  ps = function (e, t, n) {
    var a = n - 54 - t - e;
    return (
      "M702 " +
      (e + t) +
      "H400000" +
      (40 + e) +
      `
H742v` +
      a +
      `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` +
      t +
      "H400000v" +
      (40 + e) +
      "H742z"
    );
  },
  gs = function (e, t, n) {
    t = 1e3 * t;
    var a = "";
    switch (e) {
      case "sqrtMain":
        a = us(t, b0);
        break;
      case "sqrtSize1":
        a = cs(t, b0);
        break;
      case "sqrtSize2":
        a = hs(t, b0);
        break;
      case "sqrtSize3":
        a = ms(t, b0);
        break;
      case "sqrtSize4":
        a = ds(t, b0);
        break;
      case "sqrtTall":
        a = ps(t, b0, n);
    }
    return a;
  },
  vs = function (e, t) {
    switch (e) {
      case "⎜":
        return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
      case "∣":
        return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
      case "∥":
        return (
          "M145 0 H188 V" +
          t +
          " H145z M145 0 H188 V" +
          t +
          " H145z" +
          ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z")
        );
      case "⎟":
        return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
      case "⎢":
        return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
      case "⎥":
        return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
      case "⎪":
        return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
      case "⏐":
        return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
      case "‖":
        return (
          "M257 0 H300 V" +
          t +
          " H257z M257 0 H300 V" +
          t +
          " H257z" +
          ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z")
        );
      default:
        return "";
    }
  },
  rn = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
    leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`,
  },
  bs = function (e, t) {
    switch (e) {
      case "lbrack":
        return (
          "M403 1759 V84 H666 V0 H319 V1759 v" +
          t +
          ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` +
          t +
          " v1759 h84z"
        );
      case "rbrack":
        return (
          "M347 1759 V0 H0 V84 H263 V1759 v" +
          t +
          ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` +
          t +
          " v1759 h84z"
        );
      case "vert":
        return (
          "M145 15 v585 v" +
          t +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -t +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
          t +
          " v585 h43z"
        );
      case "doublevert":
        return (
          "M145 15 v585 v" +
          t +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -t +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
          t +
          ` v585 h43z
M367 15 v585 v` +
          t +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -t +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` +
          t +
          " v585 h43z"
        );
      case "lfloor":
        return (
          "M319 602 V0 H403 V602 v" +
          t +
          ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` +
          t +
          " v1715 H319z"
        );
      case "rfloor":
        return (
          "M319 602 V0 H403 V602 v" +
          t +
          ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` +
          t +
          " v1715 H319z"
        );
      case "lceil":
        return (
          "M403 1759 V84 H666 V0 H319 V1759 v" +
          t +
          ` v602 h84z
M403 1759 V0 H319 V1759 v` +
          t +
          " v602 h84z"
        );
      case "rceil":
        return (
          "M347 1759 V0 H0 V84 H263 V1759 v" +
          t +
          ` v602 h84z
M347 1759 V0 h-84 V1759 v` +
          t +
          " v602 h84z"
        );
      case "lparen":
        return (
          `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` +
          (t + 84) +
          `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` +
          (t + 92) +
          `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`
        );
      case "rparen":
        return (
          `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` +
          (t + 9) +
          `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` +
          (t + 144) +
          `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`
        );
      default:
        throw new Error("Unknown stretchy delimiter.");
    }
  };
class V0 {
  constructor(e) {
    (this.children = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      (this.children = e),
      (this.classes = []),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = {});
  }
  hasClass(e) {
    return $.contains(this.classes, e);
  }
  toNode() {
    for (
      var e = document.createDocumentFragment(), t = 0;
      t < this.children.length;
      t++
    )
      e.appendChild(this.children[t].toNode());
    return e;
  }
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var Ee = {
    "AMS-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68889, 0, 0, 0.72222],
      66: [0, 0.68889, 0, 0, 0.66667],
      67: [0, 0.68889, 0, 0, 0.72222],
      68: [0, 0.68889, 0, 0, 0.72222],
      69: [0, 0.68889, 0, 0, 0.66667],
      70: [0, 0.68889, 0, 0, 0.61111],
      71: [0, 0.68889, 0, 0, 0.77778],
      72: [0, 0.68889, 0, 0, 0.77778],
      73: [0, 0.68889, 0, 0, 0.38889],
      74: [0.16667, 0.68889, 0, 0, 0.5],
      75: [0, 0.68889, 0, 0, 0.77778],
      76: [0, 0.68889, 0, 0, 0.66667],
      77: [0, 0.68889, 0, 0, 0.94445],
      78: [0, 0.68889, 0, 0, 0.72222],
      79: [0.16667, 0.68889, 0, 0, 0.77778],
      80: [0, 0.68889, 0, 0, 0.61111],
      81: [0.16667, 0.68889, 0, 0, 0.77778],
      82: [0, 0.68889, 0, 0, 0.72222],
      83: [0, 0.68889, 0, 0, 0.55556],
      84: [0, 0.68889, 0, 0, 0.66667],
      85: [0, 0.68889, 0, 0, 0.72222],
      86: [0, 0.68889, 0, 0, 0.72222],
      87: [0, 0.68889, 0, 0, 1],
      88: [0, 0.68889, 0, 0, 0.72222],
      89: [0, 0.68889, 0, 0, 0.72222],
      90: [0, 0.68889, 0, 0, 0.66667],
      107: [0, 0.68889, 0, 0, 0.55556],
      160: [0, 0, 0, 0, 0.25],
      165: [0, 0.675, 0.025, 0, 0.75],
      174: [0.15559, 0.69224, 0, 0, 0.94666],
      240: [0, 0.68889, 0, 0, 0.55556],
      295: [0, 0.68889, 0, 0, 0.54028],
      710: [0, 0.825, 0, 0, 2.33334],
      732: [0, 0.9, 0, 0, 2.33334],
      770: [0, 0.825, 0, 0, 2.33334],
      771: [0, 0.9, 0, 0, 2.33334],
      989: [0.08167, 0.58167, 0, 0, 0.77778],
      1008: [0, 0.43056, 0.04028, 0, 0.66667],
      8245: [0, 0.54986, 0, 0, 0.275],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8487: [0, 0.68889, 0, 0, 0.72222],
      8498: [0, 0.68889, 0, 0, 0.55556],
      8502: [0, 0.68889, 0, 0, 0.66667],
      8503: [0, 0.68889, 0, 0, 0.44445],
      8504: [0, 0.68889, 0, 0, 0.66667],
      8513: [0, 0.68889, 0, 0, 0.63889],
      8592: [-0.03598, 0.46402, 0, 0, 0.5],
      8594: [-0.03598, 0.46402, 0, 0, 0.5],
      8602: [-0.13313, 0.36687, 0, 0, 1],
      8603: [-0.13313, 0.36687, 0, 0, 1],
      8606: [0.01354, 0.52239, 0, 0, 1],
      8608: [0.01354, 0.52239, 0, 0, 1],
      8610: [0.01354, 0.52239, 0, 0, 1.11111],
      8611: [0.01354, 0.52239, 0, 0, 1.11111],
      8619: [0, 0.54986, 0, 0, 1],
      8620: [0, 0.54986, 0, 0, 1],
      8621: [-0.13313, 0.37788, 0, 0, 1.38889],
      8622: [-0.13313, 0.36687, 0, 0, 1],
      8624: [0, 0.69224, 0, 0, 0.5],
      8625: [0, 0.69224, 0, 0, 0.5],
      8630: [0, 0.43056, 0, 0, 1],
      8631: [0, 0.43056, 0, 0, 1],
      8634: [0.08198, 0.58198, 0, 0, 0.77778],
      8635: [0.08198, 0.58198, 0, 0, 0.77778],
      8638: [0.19444, 0.69224, 0, 0, 0.41667],
      8639: [0.19444, 0.69224, 0, 0, 0.41667],
      8642: [0.19444, 0.69224, 0, 0, 0.41667],
      8643: [0.19444, 0.69224, 0, 0, 0.41667],
      8644: [0.1808, 0.675, 0, 0, 1],
      8646: [0.1808, 0.675, 0, 0, 1],
      8647: [0.1808, 0.675, 0, 0, 1],
      8648: [0.19444, 0.69224, 0, 0, 0.83334],
      8649: [0.1808, 0.675, 0, 0, 1],
      8650: [0.19444, 0.69224, 0, 0, 0.83334],
      8651: [0.01354, 0.52239, 0, 0, 1],
      8652: [0.01354, 0.52239, 0, 0, 1],
      8653: [-0.13313, 0.36687, 0, 0, 1],
      8654: [-0.13313, 0.36687, 0, 0, 1],
      8655: [-0.13313, 0.36687, 0, 0, 1],
      8666: [0.13667, 0.63667, 0, 0, 1],
      8667: [0.13667, 0.63667, 0, 0, 1],
      8669: [-0.13313, 0.37788, 0, 0, 1],
      8672: [-0.064, 0.437, 0, 0, 1.334],
      8674: [-0.064, 0.437, 0, 0, 1.334],
      8705: [0, 0.825, 0, 0, 0.5],
      8708: [0, 0.68889, 0, 0, 0.55556],
      8709: [0.08167, 0.58167, 0, 0, 0.77778],
      8717: [0, 0.43056, 0, 0, 0.42917],
      8722: [-0.03598, 0.46402, 0, 0, 0.5],
      8724: [0.08198, 0.69224, 0, 0, 0.77778],
      8726: [0.08167, 0.58167, 0, 0, 0.77778],
      8733: [0, 0.69224, 0, 0, 0.77778],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8737: [0, 0.69224, 0, 0, 0.72222],
      8738: [0.03517, 0.52239, 0, 0, 0.72222],
      8739: [0.08167, 0.58167, 0, 0, 0.22222],
      8740: [0.25142, 0.74111, 0, 0, 0.27778],
      8741: [0.08167, 0.58167, 0, 0, 0.38889],
      8742: [0.25142, 0.74111, 0, 0, 0.5],
      8756: [0, 0.69224, 0, 0, 0.66667],
      8757: [0, 0.69224, 0, 0, 0.66667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8765: [-0.13313, 0.37788, 0, 0, 0.77778],
      8769: [-0.13313, 0.36687, 0, 0, 0.77778],
      8770: [-0.03625, 0.46375, 0, 0, 0.77778],
      8774: [0.30274, 0.79383, 0, 0, 0.77778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8778: [0.08167, 0.58167, 0, 0, 0.77778],
      8782: [0.06062, 0.54986, 0, 0, 0.77778],
      8783: [0.06062, 0.54986, 0, 0, 0.77778],
      8785: [0.08198, 0.58198, 0, 0, 0.77778],
      8786: [0.08198, 0.58198, 0, 0, 0.77778],
      8787: [0.08198, 0.58198, 0, 0, 0.77778],
      8790: [0, 0.69224, 0, 0, 0.77778],
      8791: [0.22958, 0.72958, 0, 0, 0.77778],
      8796: [0.08198, 0.91667, 0, 0, 0.77778],
      8806: [0.25583, 0.75583, 0, 0, 0.77778],
      8807: [0.25583, 0.75583, 0, 0, 0.77778],
      8808: [0.25142, 0.75726, 0, 0, 0.77778],
      8809: [0.25142, 0.75726, 0, 0, 0.77778],
      8812: [0.25583, 0.75583, 0, 0, 0.5],
      8814: [0.20576, 0.70576, 0, 0, 0.77778],
      8815: [0.20576, 0.70576, 0, 0, 0.77778],
      8816: [0.30274, 0.79383, 0, 0, 0.77778],
      8817: [0.30274, 0.79383, 0, 0, 0.77778],
      8818: [0.22958, 0.72958, 0, 0, 0.77778],
      8819: [0.22958, 0.72958, 0, 0, 0.77778],
      8822: [0.1808, 0.675, 0, 0, 0.77778],
      8823: [0.1808, 0.675, 0, 0, 0.77778],
      8828: [0.13667, 0.63667, 0, 0, 0.77778],
      8829: [0.13667, 0.63667, 0, 0, 0.77778],
      8830: [0.22958, 0.72958, 0, 0, 0.77778],
      8831: [0.22958, 0.72958, 0, 0, 0.77778],
      8832: [0.20576, 0.70576, 0, 0, 0.77778],
      8833: [0.20576, 0.70576, 0, 0, 0.77778],
      8840: [0.30274, 0.79383, 0, 0, 0.77778],
      8841: [0.30274, 0.79383, 0, 0, 0.77778],
      8842: [0.13597, 0.63597, 0, 0, 0.77778],
      8843: [0.13597, 0.63597, 0, 0, 0.77778],
      8847: [0.03517, 0.54986, 0, 0, 0.77778],
      8848: [0.03517, 0.54986, 0, 0, 0.77778],
      8858: [0.08198, 0.58198, 0, 0, 0.77778],
      8859: [0.08198, 0.58198, 0, 0, 0.77778],
      8861: [0.08198, 0.58198, 0, 0, 0.77778],
      8862: [0, 0.675, 0, 0, 0.77778],
      8863: [0, 0.675, 0, 0, 0.77778],
      8864: [0, 0.675, 0, 0, 0.77778],
      8865: [0, 0.675, 0, 0, 0.77778],
      8872: [0, 0.69224, 0, 0, 0.61111],
      8873: [0, 0.69224, 0, 0, 0.72222],
      8874: [0, 0.69224, 0, 0, 0.88889],
      8876: [0, 0.68889, 0, 0, 0.61111],
      8877: [0, 0.68889, 0, 0, 0.61111],
      8878: [0, 0.68889, 0, 0, 0.72222],
      8879: [0, 0.68889, 0, 0, 0.72222],
      8882: [0.03517, 0.54986, 0, 0, 0.77778],
      8883: [0.03517, 0.54986, 0, 0, 0.77778],
      8884: [0.13667, 0.63667, 0, 0, 0.77778],
      8885: [0.13667, 0.63667, 0, 0, 0.77778],
      8888: [0, 0.54986, 0, 0, 1.11111],
      8890: [0.19444, 0.43056, 0, 0, 0.55556],
      8891: [0.19444, 0.69224, 0, 0, 0.61111],
      8892: [0.19444, 0.69224, 0, 0, 0.61111],
      8901: [0, 0.54986, 0, 0, 0.27778],
      8903: [0.08167, 0.58167, 0, 0, 0.77778],
      8905: [0.08167, 0.58167, 0, 0, 0.77778],
      8906: [0.08167, 0.58167, 0, 0, 0.77778],
      8907: [0, 0.69224, 0, 0, 0.77778],
      8908: [0, 0.69224, 0, 0, 0.77778],
      8909: [-0.03598, 0.46402, 0, 0, 0.77778],
      8910: [0, 0.54986, 0, 0, 0.76042],
      8911: [0, 0.54986, 0, 0, 0.76042],
      8912: [0.03517, 0.54986, 0, 0, 0.77778],
      8913: [0.03517, 0.54986, 0, 0, 0.77778],
      8914: [0, 0.54986, 0, 0, 0.66667],
      8915: [0, 0.54986, 0, 0, 0.66667],
      8916: [0, 0.69224, 0, 0, 0.66667],
      8918: [0.0391, 0.5391, 0, 0, 0.77778],
      8919: [0.0391, 0.5391, 0, 0, 0.77778],
      8920: [0.03517, 0.54986, 0, 0, 1.33334],
      8921: [0.03517, 0.54986, 0, 0, 1.33334],
      8922: [0.38569, 0.88569, 0, 0, 0.77778],
      8923: [0.38569, 0.88569, 0, 0, 0.77778],
      8926: [0.13667, 0.63667, 0, 0, 0.77778],
      8927: [0.13667, 0.63667, 0, 0, 0.77778],
      8928: [0.30274, 0.79383, 0, 0, 0.77778],
      8929: [0.30274, 0.79383, 0, 0, 0.77778],
      8934: [0.23222, 0.74111, 0, 0, 0.77778],
      8935: [0.23222, 0.74111, 0, 0, 0.77778],
      8936: [0.23222, 0.74111, 0, 0, 0.77778],
      8937: [0.23222, 0.74111, 0, 0, 0.77778],
      8938: [0.20576, 0.70576, 0, 0, 0.77778],
      8939: [0.20576, 0.70576, 0, 0, 0.77778],
      8940: [0.30274, 0.79383, 0, 0, 0.77778],
      8941: [0.30274, 0.79383, 0, 0, 0.77778],
      8994: [0.19444, 0.69224, 0, 0, 0.77778],
      8995: [0.19444, 0.69224, 0, 0, 0.77778],
      9416: [0.15559, 0.69224, 0, 0, 0.90222],
      9484: [0, 0.69224, 0, 0, 0.5],
      9488: [0, 0.69224, 0, 0, 0.5],
      9492: [0, 0.37788, 0, 0, 0.5],
      9496: [0, 0.37788, 0, 0, 0.5],
      9585: [0.19444, 0.68889, 0, 0, 0.88889],
      9586: [0.19444, 0.74111, 0, 0, 0.88889],
      9632: [0, 0.675, 0, 0, 0.77778],
      9633: [0, 0.675, 0, 0, 0.77778],
      9650: [0, 0.54986, 0, 0, 0.72222],
      9651: [0, 0.54986, 0, 0, 0.72222],
      9654: [0.03517, 0.54986, 0, 0, 0.77778],
      9660: [0, 0.54986, 0, 0, 0.72222],
      9661: [0, 0.54986, 0, 0, 0.72222],
      9664: [0.03517, 0.54986, 0, 0, 0.77778],
      9674: [0.11111, 0.69224, 0, 0, 0.66667],
      9733: [0.19444, 0.69224, 0, 0, 0.94445],
      10003: [0, 0.69224, 0, 0, 0.83334],
      10016: [0, 0.69224, 0, 0, 0.83334],
      10731: [0.11111, 0.69224, 0, 0, 0.66667],
      10846: [0.19444, 0.75583, 0, 0, 0.61111],
      10877: [0.13667, 0.63667, 0, 0, 0.77778],
      10878: [0.13667, 0.63667, 0, 0, 0.77778],
      10885: [0.25583, 0.75583, 0, 0, 0.77778],
      10886: [0.25583, 0.75583, 0, 0, 0.77778],
      10887: [0.13597, 0.63597, 0, 0, 0.77778],
      10888: [0.13597, 0.63597, 0, 0, 0.77778],
      10889: [0.26167, 0.75726, 0, 0, 0.77778],
      10890: [0.26167, 0.75726, 0, 0, 0.77778],
      10891: [0.48256, 0.98256, 0, 0, 0.77778],
      10892: [0.48256, 0.98256, 0, 0, 0.77778],
      10901: [0.13667, 0.63667, 0, 0, 0.77778],
      10902: [0.13667, 0.63667, 0, 0, 0.77778],
      10933: [0.25142, 0.75726, 0, 0, 0.77778],
      10934: [0.25142, 0.75726, 0, 0, 0.77778],
      10935: [0.26167, 0.75726, 0, 0, 0.77778],
      10936: [0.26167, 0.75726, 0, 0, 0.77778],
      10937: [0.26167, 0.75726, 0, 0, 0.77778],
      10938: [0.26167, 0.75726, 0, 0, 0.77778],
      10949: [0.25583, 0.75583, 0, 0, 0.77778],
      10950: [0.25583, 0.75583, 0, 0, 0.77778],
      10955: [0.28481, 0.79383, 0, 0, 0.77778],
      10956: [0.28481, 0.79383, 0, 0, 0.77778],
      57350: [0.08167, 0.58167, 0, 0, 0.22222],
      57351: [0.08167, 0.58167, 0, 0, 0.38889],
      57352: [0.08167, 0.58167, 0, 0, 0.77778],
      57353: [0, 0.43056, 0.04028, 0, 0.66667],
      57356: [0.25142, 0.75726, 0, 0, 0.77778],
      57357: [0.25142, 0.75726, 0, 0, 0.77778],
      57358: [0.41951, 0.91951, 0, 0, 0.77778],
      57359: [0.30274, 0.79383, 0, 0, 0.77778],
      57360: [0.30274, 0.79383, 0, 0, 0.77778],
      57361: [0.41951, 0.91951, 0, 0, 0.77778],
      57366: [0.25142, 0.75726, 0, 0, 0.77778],
      57367: [0.25142, 0.75726, 0, 0, 0.77778],
      57368: [0.25142, 0.75726, 0, 0, 0.77778],
      57369: [0.25142, 0.75726, 0, 0, 0.77778],
      57370: [0.13597, 0.63597, 0, 0, 0.77778],
      57371: [0.13597, 0.63597, 0, 0, 0.77778],
    },
    "Caligraphic-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68333, 0, 0.19445, 0.79847],
      66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
      67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
      68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
      69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
      70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
      71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
      72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
      73: [0, 0.68333, 0.07382, 0, 0.54452],
      74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
      75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
      76: [0, 0.68333, 0, 0.13889, 0.68972],
      77: [0, 0.68333, 0, 0.13889, 1.2009],
      78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
      79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
      80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
      81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
      82: [0, 0.68333, 0, 0.08334, 0.8475],
      83: [0, 0.68333, 0.075, 0.13889, 0.60556],
      84: [0, 0.68333, 0.25417, 0, 0.54464],
      85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
      86: [0, 0.68333, 0.08222, 0, 0.61278],
      87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
      88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
      89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
      90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
      160: [0, 0, 0, 0, 0.25],
    },
    "Fraktur-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69141, 0, 0, 0.29574],
      34: [0, 0.69141, 0, 0, 0.21471],
      38: [0, 0.69141, 0, 0, 0.73786],
      39: [0, 0.69141, 0, 0, 0.21201],
      40: [0.24982, 0.74947, 0, 0, 0.38865],
      41: [0.24982, 0.74947, 0, 0, 0.38865],
      42: [0, 0.62119, 0, 0, 0.27764],
      43: [0.08319, 0.58283, 0, 0, 0.75623],
      44: [0, 0.10803, 0, 0, 0.27764],
      45: [0.08319, 0.58283, 0, 0, 0.75623],
      46: [0, 0.10803, 0, 0, 0.27764],
      47: [0.24982, 0.74947, 0, 0, 0.50181],
      48: [0, 0.47534, 0, 0, 0.50181],
      49: [0, 0.47534, 0, 0, 0.50181],
      50: [0, 0.47534, 0, 0, 0.50181],
      51: [0.18906, 0.47534, 0, 0, 0.50181],
      52: [0.18906, 0.47534, 0, 0, 0.50181],
      53: [0.18906, 0.47534, 0, 0, 0.50181],
      54: [0, 0.69141, 0, 0, 0.50181],
      55: [0.18906, 0.47534, 0, 0, 0.50181],
      56: [0, 0.69141, 0, 0, 0.50181],
      57: [0.18906, 0.47534, 0, 0, 0.50181],
      58: [0, 0.47534, 0, 0, 0.21606],
      59: [0.12604, 0.47534, 0, 0, 0.21606],
      61: [-0.13099, 0.36866, 0, 0, 0.75623],
      63: [0, 0.69141, 0, 0, 0.36245],
      65: [0, 0.69141, 0, 0, 0.7176],
      66: [0, 0.69141, 0, 0, 0.88397],
      67: [0, 0.69141, 0, 0, 0.61254],
      68: [0, 0.69141, 0, 0, 0.83158],
      69: [0, 0.69141, 0, 0, 0.66278],
      70: [0.12604, 0.69141, 0, 0, 0.61119],
      71: [0, 0.69141, 0, 0, 0.78539],
      72: [0.06302, 0.69141, 0, 0, 0.7203],
      73: [0, 0.69141, 0, 0, 0.55448],
      74: [0.12604, 0.69141, 0, 0, 0.55231],
      75: [0, 0.69141, 0, 0, 0.66845],
      76: [0, 0.69141, 0, 0, 0.66602],
      77: [0, 0.69141, 0, 0, 1.04953],
      78: [0, 0.69141, 0, 0, 0.83212],
      79: [0, 0.69141, 0, 0, 0.82699],
      80: [0.18906, 0.69141, 0, 0, 0.82753],
      81: [0.03781, 0.69141, 0, 0, 0.82699],
      82: [0, 0.69141, 0, 0, 0.82807],
      83: [0, 0.69141, 0, 0, 0.82861],
      84: [0, 0.69141, 0, 0, 0.66899],
      85: [0, 0.69141, 0, 0, 0.64576],
      86: [0, 0.69141, 0, 0, 0.83131],
      87: [0, 0.69141, 0, 0, 1.04602],
      88: [0, 0.69141, 0, 0, 0.71922],
      89: [0.18906, 0.69141, 0, 0, 0.83293],
      90: [0.12604, 0.69141, 0, 0, 0.60201],
      91: [0.24982, 0.74947, 0, 0, 0.27764],
      93: [0.24982, 0.74947, 0, 0, 0.27764],
      94: [0, 0.69141, 0, 0, 0.49965],
      97: [0, 0.47534, 0, 0, 0.50046],
      98: [0, 0.69141, 0, 0, 0.51315],
      99: [0, 0.47534, 0, 0, 0.38946],
      100: [0, 0.62119, 0, 0, 0.49857],
      101: [0, 0.47534, 0, 0, 0.40053],
      102: [0.18906, 0.69141, 0, 0, 0.32626],
      103: [0.18906, 0.47534, 0, 0, 0.5037],
      104: [0.18906, 0.69141, 0, 0, 0.52126],
      105: [0, 0.69141, 0, 0, 0.27899],
      106: [0, 0.69141, 0, 0, 0.28088],
      107: [0, 0.69141, 0, 0, 0.38946],
      108: [0, 0.69141, 0, 0, 0.27953],
      109: [0, 0.47534, 0, 0, 0.76676],
      110: [0, 0.47534, 0, 0, 0.52666],
      111: [0, 0.47534, 0, 0, 0.48885],
      112: [0.18906, 0.52396, 0, 0, 0.50046],
      113: [0.18906, 0.47534, 0, 0, 0.48912],
      114: [0, 0.47534, 0, 0, 0.38919],
      115: [0, 0.47534, 0, 0, 0.44266],
      116: [0, 0.62119, 0, 0, 0.33301],
      117: [0, 0.47534, 0, 0, 0.5172],
      118: [0, 0.52396, 0, 0, 0.5118],
      119: [0, 0.52396, 0, 0, 0.77351],
      120: [0.18906, 0.47534, 0, 0, 0.38865],
      121: [0.18906, 0.47534, 0, 0, 0.49884],
      122: [0.18906, 0.47534, 0, 0, 0.39054],
      160: [0, 0, 0, 0, 0.25],
      8216: [0, 0.69141, 0, 0, 0.21471],
      8217: [0, 0.69141, 0, 0, 0.21471],
      58112: [0, 0.62119, 0, 0, 0.49749],
      58113: [0, 0.62119, 0, 0, 0.4983],
      58114: [0.18906, 0.69141, 0, 0, 0.33328],
      58115: [0.18906, 0.69141, 0, 0, 0.32923],
      58116: [0.18906, 0.47534, 0, 0, 0.50343],
      58117: [0, 0.69141, 0, 0, 0.33301],
      58118: [0, 0.62119, 0, 0, 0.33409],
      58119: [0, 0.47534, 0, 0, 0.50073],
    },
    "Main-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.35],
      34: [0, 0.69444, 0, 0, 0.60278],
      35: [0.19444, 0.69444, 0, 0, 0.95833],
      36: [0.05556, 0.75, 0, 0, 0.575],
      37: [0.05556, 0.75, 0, 0, 0.95833],
      38: [0, 0.69444, 0, 0, 0.89444],
      39: [0, 0.69444, 0, 0, 0.31944],
      40: [0.25, 0.75, 0, 0, 0.44722],
      41: [0.25, 0.75, 0, 0, 0.44722],
      42: [0, 0.75, 0, 0, 0.575],
      43: [0.13333, 0.63333, 0, 0, 0.89444],
      44: [0.19444, 0.15556, 0, 0, 0.31944],
      45: [0, 0.44444, 0, 0, 0.38333],
      46: [0, 0.15556, 0, 0, 0.31944],
      47: [0.25, 0.75, 0, 0, 0.575],
      48: [0, 0.64444, 0, 0, 0.575],
      49: [0, 0.64444, 0, 0, 0.575],
      50: [0, 0.64444, 0, 0, 0.575],
      51: [0, 0.64444, 0, 0, 0.575],
      52: [0, 0.64444, 0, 0, 0.575],
      53: [0, 0.64444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0, 0.64444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0, 0.64444, 0, 0, 0.575],
      58: [0, 0.44444, 0, 0, 0.31944],
      59: [0.19444, 0.44444, 0, 0, 0.31944],
      60: [0.08556, 0.58556, 0, 0, 0.89444],
      61: [-0.10889, 0.39111, 0, 0, 0.89444],
      62: [0.08556, 0.58556, 0, 0, 0.89444],
      63: [0, 0.69444, 0, 0, 0.54305],
      64: [0, 0.69444, 0, 0, 0.89444],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0, 0, 0.81805],
      67: [0, 0.68611, 0, 0, 0.83055],
      68: [0, 0.68611, 0, 0, 0.88194],
      69: [0, 0.68611, 0, 0, 0.75555],
      70: [0, 0.68611, 0, 0, 0.72361],
      71: [0, 0.68611, 0, 0, 0.90416],
      72: [0, 0.68611, 0, 0, 0.9],
      73: [0, 0.68611, 0, 0, 0.43611],
      74: [0, 0.68611, 0, 0, 0.59444],
      75: [0, 0.68611, 0, 0, 0.90138],
      76: [0, 0.68611, 0, 0, 0.69166],
      77: [0, 0.68611, 0, 0, 1.09166],
      78: [0, 0.68611, 0, 0, 0.9],
      79: [0, 0.68611, 0, 0, 0.86388],
      80: [0, 0.68611, 0, 0, 0.78611],
      81: [0.19444, 0.68611, 0, 0, 0.86388],
      82: [0, 0.68611, 0, 0, 0.8625],
      83: [0, 0.68611, 0, 0, 0.63889],
      84: [0, 0.68611, 0, 0, 0.8],
      85: [0, 0.68611, 0, 0, 0.88472],
      86: [0, 0.68611, 0.01597, 0, 0.86944],
      87: [0, 0.68611, 0.01597, 0, 1.18888],
      88: [0, 0.68611, 0, 0, 0.86944],
      89: [0, 0.68611, 0.02875, 0, 0.86944],
      90: [0, 0.68611, 0, 0, 0.70277],
      91: [0.25, 0.75, 0, 0, 0.31944],
      92: [0.25, 0.75, 0, 0, 0.575],
      93: [0.25, 0.75, 0, 0, 0.31944],
      94: [0, 0.69444, 0, 0, 0.575],
      95: [0.31, 0.13444, 0.03194, 0, 0.575],
      97: [0, 0.44444, 0, 0, 0.55902],
      98: [0, 0.69444, 0, 0, 0.63889],
      99: [0, 0.44444, 0, 0, 0.51111],
      100: [0, 0.69444, 0, 0, 0.63889],
      101: [0, 0.44444, 0, 0, 0.52708],
      102: [0, 0.69444, 0.10903, 0, 0.35139],
      103: [0.19444, 0.44444, 0.01597, 0, 0.575],
      104: [0, 0.69444, 0, 0, 0.63889],
      105: [0, 0.69444, 0, 0, 0.31944],
      106: [0.19444, 0.69444, 0, 0, 0.35139],
      107: [0, 0.69444, 0, 0, 0.60694],
      108: [0, 0.69444, 0, 0, 0.31944],
      109: [0, 0.44444, 0, 0, 0.95833],
      110: [0, 0.44444, 0, 0, 0.63889],
      111: [0, 0.44444, 0, 0, 0.575],
      112: [0.19444, 0.44444, 0, 0, 0.63889],
      113: [0.19444, 0.44444, 0, 0, 0.60694],
      114: [0, 0.44444, 0, 0, 0.47361],
      115: [0, 0.44444, 0, 0, 0.45361],
      116: [0, 0.63492, 0, 0, 0.44722],
      117: [0, 0.44444, 0, 0, 0.63889],
      118: [0, 0.44444, 0.01597, 0, 0.60694],
      119: [0, 0.44444, 0.01597, 0, 0.83055],
      120: [0, 0.44444, 0, 0, 0.60694],
      121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
      122: [0, 0.44444, 0, 0, 0.51111],
      123: [0.25, 0.75, 0, 0, 0.575],
      124: [0.25, 0.75, 0, 0, 0.31944],
      125: [0.25, 0.75, 0, 0, 0.575],
      126: [0.35, 0.34444, 0, 0, 0.575],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.86853],
      168: [0, 0.69444, 0, 0, 0.575],
      172: [0, 0.44444, 0, 0, 0.76666],
      176: [0, 0.69444, 0, 0, 0.86944],
      177: [0.13333, 0.63333, 0, 0, 0.89444],
      184: [0.17014, 0, 0, 0, 0.51111],
      198: [0, 0.68611, 0, 0, 1.04166],
      215: [0.13333, 0.63333, 0, 0, 0.89444],
      216: [0.04861, 0.73472, 0, 0, 0.89444],
      223: [0, 0.69444, 0, 0, 0.59722],
      230: [0, 0.44444, 0, 0, 0.83055],
      247: [0.13333, 0.63333, 0, 0, 0.89444],
      248: [0.09722, 0.54167, 0, 0, 0.575],
      305: [0, 0.44444, 0, 0, 0.31944],
      338: [0, 0.68611, 0, 0, 1.16944],
      339: [0, 0.44444, 0, 0, 0.89444],
      567: [0.19444, 0.44444, 0, 0, 0.35139],
      710: [0, 0.69444, 0, 0, 0.575],
      711: [0, 0.63194, 0, 0, 0.575],
      713: [0, 0.59611, 0, 0, 0.575],
      714: [0, 0.69444, 0, 0, 0.575],
      715: [0, 0.69444, 0, 0, 0.575],
      728: [0, 0.69444, 0, 0, 0.575],
      729: [0, 0.69444, 0, 0, 0.31944],
      730: [0, 0.69444, 0, 0, 0.86944],
      732: [0, 0.69444, 0, 0, 0.575],
      733: [0, 0.69444, 0, 0, 0.575],
      915: [0, 0.68611, 0, 0, 0.69166],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0, 0, 0.89444],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0, 0, 0.76666],
      928: [0, 0.68611, 0, 0, 0.9],
      931: [0, 0.68611, 0, 0, 0.83055],
      933: [0, 0.68611, 0, 0, 0.89444],
      934: [0, 0.68611, 0, 0, 0.83055],
      936: [0, 0.68611, 0, 0, 0.89444],
      937: [0, 0.68611, 0, 0, 0.83055],
      8211: [0, 0.44444, 0.03194, 0, 0.575],
      8212: [0, 0.44444, 0.03194, 0, 1.14999],
      8216: [0, 0.69444, 0, 0, 0.31944],
      8217: [0, 0.69444, 0, 0, 0.31944],
      8220: [0, 0.69444, 0, 0, 0.60278],
      8221: [0, 0.69444, 0, 0, 0.60278],
      8224: [0.19444, 0.69444, 0, 0, 0.51111],
      8225: [0.19444, 0.69444, 0, 0, 0.51111],
      8242: [0, 0.55556, 0, 0, 0.34444],
      8407: [0, 0.72444, 0.15486, 0, 0.575],
      8463: [0, 0.69444, 0, 0, 0.66759],
      8465: [0, 0.69444, 0, 0, 0.83055],
      8467: [0, 0.69444, 0, 0, 0.47361],
      8472: [0.19444, 0.44444, 0, 0, 0.74027],
      8476: [0, 0.69444, 0, 0, 0.83055],
      8501: [0, 0.69444, 0, 0, 0.70277],
      8592: [-0.10889, 0.39111, 0, 0, 1.14999],
      8593: [0.19444, 0.69444, 0, 0, 0.575],
      8594: [-0.10889, 0.39111, 0, 0, 1.14999],
      8595: [0.19444, 0.69444, 0, 0, 0.575],
      8596: [-0.10889, 0.39111, 0, 0, 1.14999],
      8597: [0.25, 0.75, 0, 0, 0.575],
      8598: [0.19444, 0.69444, 0, 0, 1.14999],
      8599: [0.19444, 0.69444, 0, 0, 1.14999],
      8600: [0.19444, 0.69444, 0, 0, 1.14999],
      8601: [0.19444, 0.69444, 0, 0, 1.14999],
      8636: [-0.10889, 0.39111, 0, 0, 1.14999],
      8637: [-0.10889, 0.39111, 0, 0, 1.14999],
      8640: [-0.10889, 0.39111, 0, 0, 1.14999],
      8641: [-0.10889, 0.39111, 0, 0, 1.14999],
      8656: [-0.10889, 0.39111, 0, 0, 1.14999],
      8657: [0.19444, 0.69444, 0, 0, 0.70277],
      8658: [-0.10889, 0.39111, 0, 0, 1.14999],
      8659: [0.19444, 0.69444, 0, 0, 0.70277],
      8660: [-0.10889, 0.39111, 0, 0, 1.14999],
      8661: [0.25, 0.75, 0, 0, 0.70277],
      8704: [0, 0.69444, 0, 0, 0.63889],
      8706: [0, 0.69444, 0.06389, 0, 0.62847],
      8707: [0, 0.69444, 0, 0, 0.63889],
      8709: [0.05556, 0.75, 0, 0, 0.575],
      8711: [0, 0.68611, 0, 0, 0.95833],
      8712: [0.08556, 0.58556, 0, 0, 0.76666],
      8715: [0.08556, 0.58556, 0, 0, 0.76666],
      8722: [0.13333, 0.63333, 0, 0, 0.89444],
      8723: [0.13333, 0.63333, 0, 0, 0.89444],
      8725: [0.25, 0.75, 0, 0, 0.575],
      8726: [0.25, 0.75, 0, 0, 0.575],
      8727: [-0.02778, 0.47222, 0, 0, 0.575],
      8728: [-0.02639, 0.47361, 0, 0, 0.575],
      8729: [-0.02639, 0.47361, 0, 0, 0.575],
      8730: [0.18, 0.82, 0, 0, 0.95833],
      8733: [0, 0.44444, 0, 0, 0.89444],
      8734: [0, 0.44444, 0, 0, 1.14999],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.31944],
      8741: [0.25, 0.75, 0, 0, 0.575],
      8743: [0, 0.55556, 0, 0, 0.76666],
      8744: [0, 0.55556, 0, 0, 0.76666],
      8745: [0, 0.55556, 0, 0, 0.76666],
      8746: [0, 0.55556, 0, 0, 0.76666],
      8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
      8764: [-0.10889, 0.39111, 0, 0, 0.89444],
      8768: [0.19444, 0.69444, 0, 0, 0.31944],
      8771: [0.00222, 0.50222, 0, 0, 0.89444],
      8773: [0.027, 0.638, 0, 0, 0.894],
      8776: [0.02444, 0.52444, 0, 0, 0.89444],
      8781: [0.00222, 0.50222, 0, 0, 0.89444],
      8801: [0.00222, 0.50222, 0, 0, 0.89444],
      8804: [0.19667, 0.69667, 0, 0, 0.89444],
      8805: [0.19667, 0.69667, 0, 0, 0.89444],
      8810: [0.08556, 0.58556, 0, 0, 1.14999],
      8811: [0.08556, 0.58556, 0, 0, 1.14999],
      8826: [0.08556, 0.58556, 0, 0, 0.89444],
      8827: [0.08556, 0.58556, 0, 0, 0.89444],
      8834: [0.08556, 0.58556, 0, 0, 0.89444],
      8835: [0.08556, 0.58556, 0, 0, 0.89444],
      8838: [0.19667, 0.69667, 0, 0, 0.89444],
      8839: [0.19667, 0.69667, 0, 0, 0.89444],
      8846: [0, 0.55556, 0, 0, 0.76666],
      8849: [0.19667, 0.69667, 0, 0, 0.89444],
      8850: [0.19667, 0.69667, 0, 0, 0.89444],
      8851: [0, 0.55556, 0, 0, 0.76666],
      8852: [0, 0.55556, 0, 0, 0.76666],
      8853: [0.13333, 0.63333, 0, 0, 0.89444],
      8854: [0.13333, 0.63333, 0, 0, 0.89444],
      8855: [0.13333, 0.63333, 0, 0, 0.89444],
      8856: [0.13333, 0.63333, 0, 0, 0.89444],
      8857: [0.13333, 0.63333, 0, 0, 0.89444],
      8866: [0, 0.69444, 0, 0, 0.70277],
      8867: [0, 0.69444, 0, 0, 0.70277],
      8868: [0, 0.69444, 0, 0, 0.89444],
      8869: [0, 0.69444, 0, 0, 0.89444],
      8900: [-0.02639, 0.47361, 0, 0, 0.575],
      8901: [-0.02639, 0.47361, 0, 0, 0.31944],
      8902: [-0.02778, 0.47222, 0, 0, 0.575],
      8968: [0.25, 0.75, 0, 0, 0.51111],
      8969: [0.25, 0.75, 0, 0, 0.51111],
      8970: [0.25, 0.75, 0, 0, 0.51111],
      8971: [0.25, 0.75, 0, 0, 0.51111],
      8994: [-0.13889, 0.36111, 0, 0, 1.14999],
      8995: [-0.13889, 0.36111, 0, 0, 1.14999],
      9651: [0.19444, 0.69444, 0, 0, 1.02222],
      9657: [-0.02778, 0.47222, 0, 0, 0.575],
      9661: [0.19444, 0.69444, 0, 0, 1.02222],
      9667: [-0.02778, 0.47222, 0, 0, 0.575],
      9711: [0.19444, 0.69444, 0, 0, 1.14999],
      9824: [0.12963, 0.69444, 0, 0, 0.89444],
      9825: [0.12963, 0.69444, 0, 0, 0.89444],
      9826: [0.12963, 0.69444, 0, 0, 0.89444],
      9827: [0.12963, 0.69444, 0, 0, 0.89444],
      9837: [0, 0.75, 0, 0, 0.44722],
      9838: [0.19444, 0.69444, 0, 0, 0.44722],
      9839: [0.19444, 0.69444, 0, 0, 0.44722],
      10216: [0.25, 0.75, 0, 0, 0.44722],
      10217: [0.25, 0.75, 0, 0, 0.44722],
      10815: [0, 0.68611, 0, 0, 0.9],
      10927: [0.19667, 0.69667, 0, 0, 0.89444],
      10928: [0.19667, 0.69667, 0, 0, 0.89444],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Main-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.11417, 0, 0.38611],
      34: [0, 0.69444, 0.07939, 0, 0.62055],
      35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
      37: [0.05556, 0.75, 0.12861, 0, 0.94444],
      38: [0, 0.69444, 0.08528, 0, 0.88555],
      39: [0, 0.69444, 0.12945, 0, 0.35555],
      40: [0.25, 0.75, 0.15806, 0, 0.47333],
      41: [0.25, 0.75, 0.03306, 0, 0.47333],
      42: [0, 0.75, 0.14333, 0, 0.59111],
      43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
      44: [0.19444, 0.14722, 0, 0, 0.35555],
      45: [0, 0.44444, 0.02611, 0, 0.41444],
      46: [0, 0.14722, 0, 0, 0.35555],
      47: [0.25, 0.75, 0.15806, 0, 0.59111],
      48: [0, 0.64444, 0.13167, 0, 0.59111],
      49: [0, 0.64444, 0.13167, 0, 0.59111],
      50: [0, 0.64444, 0.13167, 0, 0.59111],
      51: [0, 0.64444, 0.13167, 0, 0.59111],
      52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      53: [0, 0.64444, 0.13167, 0, 0.59111],
      54: [0, 0.64444, 0.13167, 0, 0.59111],
      55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      56: [0, 0.64444, 0.13167, 0, 0.59111],
      57: [0, 0.64444, 0.13167, 0, 0.59111],
      58: [0, 0.44444, 0.06695, 0, 0.35555],
      59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
      61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
      63: [0, 0.69444, 0.11472, 0, 0.59111],
      64: [0, 0.69444, 0.09208, 0, 0.88555],
      65: [0, 0.68611, 0, 0, 0.86555],
      66: [0, 0.68611, 0.0992, 0, 0.81666],
      67: [0, 0.68611, 0.14208, 0, 0.82666],
      68: [0, 0.68611, 0.09062, 0, 0.87555],
      69: [0, 0.68611, 0.11431, 0, 0.75666],
      70: [0, 0.68611, 0.12903, 0, 0.72722],
      71: [0, 0.68611, 0.07347, 0, 0.89527],
      72: [0, 0.68611, 0.17208, 0, 0.8961],
      73: [0, 0.68611, 0.15681, 0, 0.47166],
      74: [0, 0.68611, 0.145, 0, 0.61055],
      75: [0, 0.68611, 0.14208, 0, 0.89499],
      76: [0, 0.68611, 0, 0, 0.69777],
      77: [0, 0.68611, 0.17208, 0, 1.07277],
      78: [0, 0.68611, 0.17208, 0, 0.8961],
      79: [0, 0.68611, 0.09062, 0, 0.85499],
      80: [0, 0.68611, 0.0992, 0, 0.78721],
      81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
      82: [0, 0.68611, 0.02559, 0, 0.85944],
      83: [0, 0.68611, 0.11264, 0, 0.64999],
      84: [0, 0.68611, 0.12903, 0, 0.7961],
      85: [0, 0.68611, 0.17208, 0, 0.88083],
      86: [0, 0.68611, 0.18625, 0, 0.86555],
      87: [0, 0.68611, 0.18625, 0, 1.15999],
      88: [0, 0.68611, 0.15681, 0, 0.86555],
      89: [0, 0.68611, 0.19803, 0, 0.86555],
      90: [0, 0.68611, 0.14208, 0, 0.70888],
      91: [0.25, 0.75, 0.1875, 0, 0.35611],
      93: [0.25, 0.75, 0.09972, 0, 0.35611],
      94: [0, 0.69444, 0.06709, 0, 0.59111],
      95: [0.31, 0.13444, 0.09811, 0, 0.59111],
      97: [0, 0.44444, 0.09426, 0, 0.59111],
      98: [0, 0.69444, 0.07861, 0, 0.53222],
      99: [0, 0.44444, 0.05222, 0, 0.53222],
      100: [0, 0.69444, 0.10861, 0, 0.59111],
      101: [0, 0.44444, 0.085, 0, 0.53222],
      102: [0.19444, 0.69444, 0.21778, 0, 0.4],
      103: [0.19444, 0.44444, 0.105, 0, 0.53222],
      104: [0, 0.69444, 0.09426, 0, 0.59111],
      105: [0, 0.69326, 0.11387, 0, 0.35555],
      106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
      107: [0, 0.69444, 0.11111, 0, 0.53222],
      108: [0, 0.69444, 0.10861, 0, 0.29666],
      109: [0, 0.44444, 0.09426, 0, 0.94444],
      110: [0, 0.44444, 0.09426, 0, 0.64999],
      111: [0, 0.44444, 0.07861, 0, 0.59111],
      112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
      113: [0.19444, 0.44444, 0.105, 0, 0.53222],
      114: [0, 0.44444, 0.11111, 0, 0.50167],
      115: [0, 0.44444, 0.08167, 0, 0.48694],
      116: [0, 0.63492, 0.09639, 0, 0.385],
      117: [0, 0.44444, 0.09426, 0, 0.62055],
      118: [0, 0.44444, 0.11111, 0, 0.53222],
      119: [0, 0.44444, 0.11111, 0, 0.76777],
      120: [0, 0.44444, 0.12583, 0, 0.56055],
      121: [0.19444, 0.44444, 0.105, 0, 0.56166],
      122: [0, 0.44444, 0.13889, 0, 0.49055],
      126: [0.35, 0.34444, 0.11472, 0, 0.59111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0.11473, 0, 0.59111],
      176: [0, 0.69444, 0, 0, 0.94888],
      184: [0.17014, 0, 0, 0, 0.53222],
      198: [0, 0.68611, 0.11431, 0, 1.02277],
      216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
      223: [0.19444, 0.69444, 0.09736, 0, 0.665],
      230: [0, 0.44444, 0.085, 0, 0.82666],
      248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
      305: [0, 0.44444, 0.09426, 0, 0.35555],
      338: [0, 0.68611, 0.11431, 0, 1.14054],
      339: [0, 0.44444, 0.085, 0, 0.82666],
      567: [0.19444, 0.44444, 0.04611, 0, 0.385],
      710: [0, 0.69444, 0.06709, 0, 0.59111],
      711: [0, 0.63194, 0.08271, 0, 0.59111],
      713: [0, 0.59444, 0.10444, 0, 0.59111],
      714: [0, 0.69444, 0.08528, 0, 0.59111],
      715: [0, 0.69444, 0, 0, 0.59111],
      728: [0, 0.69444, 0.10333, 0, 0.59111],
      729: [0, 0.69444, 0.12945, 0, 0.35555],
      730: [0, 0.69444, 0, 0, 0.94888],
      732: [0, 0.69444, 0.11472, 0, 0.59111],
      733: [0, 0.69444, 0.11472, 0, 0.59111],
      915: [0, 0.68611, 0.12903, 0, 0.69777],
      916: [0, 0.68611, 0, 0, 0.94444],
      920: [0, 0.68611, 0.09062, 0, 0.88555],
      923: [0, 0.68611, 0, 0, 0.80666],
      926: [0, 0.68611, 0.15092, 0, 0.76777],
      928: [0, 0.68611, 0.17208, 0, 0.8961],
      931: [0, 0.68611, 0.11431, 0, 0.82666],
      933: [0, 0.68611, 0.10778, 0, 0.88555],
      934: [0, 0.68611, 0.05632, 0, 0.82666],
      936: [0, 0.68611, 0.10778, 0, 0.88555],
      937: [0, 0.68611, 0.0992, 0, 0.82666],
      8211: [0, 0.44444, 0.09811, 0, 0.59111],
      8212: [0, 0.44444, 0.09811, 0, 1.18221],
      8216: [0, 0.69444, 0.12945, 0, 0.35555],
      8217: [0, 0.69444, 0.12945, 0, 0.35555],
      8220: [0, 0.69444, 0.16772, 0, 0.62055],
      8221: [0, 0.69444, 0.07939, 0, 0.62055],
    },
    "Main-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.12417, 0, 0.30667],
      34: [0, 0.69444, 0.06961, 0, 0.51444],
      35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
      37: [0.05556, 0.75, 0.13639, 0, 0.81777],
      38: [0, 0.69444, 0.09694, 0, 0.76666],
      39: [0, 0.69444, 0.12417, 0, 0.30667],
      40: [0.25, 0.75, 0.16194, 0, 0.40889],
      41: [0.25, 0.75, 0.03694, 0, 0.40889],
      42: [0, 0.75, 0.14917, 0, 0.51111],
      43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
      44: [0.19444, 0.10556, 0, 0, 0.30667],
      45: [0, 0.43056, 0.02826, 0, 0.35778],
      46: [0, 0.10556, 0, 0, 0.30667],
      47: [0.25, 0.75, 0.16194, 0, 0.51111],
      48: [0, 0.64444, 0.13556, 0, 0.51111],
      49: [0, 0.64444, 0.13556, 0, 0.51111],
      50: [0, 0.64444, 0.13556, 0, 0.51111],
      51: [0, 0.64444, 0.13556, 0, 0.51111],
      52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      53: [0, 0.64444, 0.13556, 0, 0.51111],
      54: [0, 0.64444, 0.13556, 0, 0.51111],
      55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      56: [0, 0.64444, 0.13556, 0, 0.51111],
      57: [0, 0.64444, 0.13556, 0, 0.51111],
      58: [0, 0.43056, 0.0582, 0, 0.30667],
      59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
      61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
      63: [0, 0.69444, 0.1225, 0, 0.51111],
      64: [0, 0.69444, 0.09597, 0, 0.76666],
      65: [0, 0.68333, 0, 0, 0.74333],
      66: [0, 0.68333, 0.10257, 0, 0.70389],
      67: [0, 0.68333, 0.14528, 0, 0.71555],
      68: [0, 0.68333, 0.09403, 0, 0.755],
      69: [0, 0.68333, 0.12028, 0, 0.67833],
      70: [0, 0.68333, 0.13305, 0, 0.65277],
      71: [0, 0.68333, 0.08722, 0, 0.77361],
      72: [0, 0.68333, 0.16389, 0, 0.74333],
      73: [0, 0.68333, 0.15806, 0, 0.38555],
      74: [0, 0.68333, 0.14028, 0, 0.525],
      75: [0, 0.68333, 0.14528, 0, 0.76888],
      76: [0, 0.68333, 0, 0, 0.62722],
      77: [0, 0.68333, 0.16389, 0, 0.89666],
      78: [0, 0.68333, 0.16389, 0, 0.74333],
      79: [0, 0.68333, 0.09403, 0, 0.76666],
      80: [0, 0.68333, 0.10257, 0, 0.67833],
      81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
      82: [0, 0.68333, 0.03868, 0, 0.72944],
      83: [0, 0.68333, 0.11972, 0, 0.56222],
      84: [0, 0.68333, 0.13305, 0, 0.71555],
      85: [0, 0.68333, 0.16389, 0, 0.74333],
      86: [0, 0.68333, 0.18361, 0, 0.74333],
      87: [0, 0.68333, 0.18361, 0, 0.99888],
      88: [0, 0.68333, 0.15806, 0, 0.74333],
      89: [0, 0.68333, 0.19383, 0, 0.74333],
      90: [0, 0.68333, 0.14528, 0, 0.61333],
      91: [0.25, 0.75, 0.1875, 0, 0.30667],
      93: [0.25, 0.75, 0.10528, 0, 0.30667],
      94: [0, 0.69444, 0.06646, 0, 0.51111],
      95: [0.31, 0.12056, 0.09208, 0, 0.51111],
      97: [0, 0.43056, 0.07671, 0, 0.51111],
      98: [0, 0.69444, 0.06312, 0, 0.46],
      99: [0, 0.43056, 0.05653, 0, 0.46],
      100: [0, 0.69444, 0.10333, 0, 0.51111],
      101: [0, 0.43056, 0.07514, 0, 0.46],
      102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
      103: [0.19444, 0.43056, 0.08847, 0, 0.46],
      104: [0, 0.69444, 0.07671, 0, 0.51111],
      105: [0, 0.65536, 0.1019, 0, 0.30667],
      106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
      107: [0, 0.69444, 0.10764, 0, 0.46],
      108: [0, 0.69444, 0.10333, 0, 0.25555],
      109: [0, 0.43056, 0.07671, 0, 0.81777],
      110: [0, 0.43056, 0.07671, 0, 0.56222],
      111: [0, 0.43056, 0.06312, 0, 0.51111],
      112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
      113: [0.19444, 0.43056, 0.08847, 0, 0.46],
      114: [0, 0.43056, 0.10764, 0, 0.42166],
      115: [0, 0.43056, 0.08208, 0, 0.40889],
      116: [0, 0.61508, 0.09486, 0, 0.33222],
      117: [0, 0.43056, 0.07671, 0, 0.53666],
      118: [0, 0.43056, 0.10764, 0, 0.46],
      119: [0, 0.43056, 0.10764, 0, 0.66444],
      120: [0, 0.43056, 0.12042, 0, 0.46389],
      121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
      122: [0, 0.43056, 0.12292, 0, 0.40889],
      126: [0.35, 0.31786, 0.11585, 0, 0.51111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.66786, 0.10474, 0, 0.51111],
      176: [0, 0.69444, 0, 0, 0.83129],
      184: [0.17014, 0, 0, 0, 0.46],
      198: [0, 0.68333, 0.12028, 0, 0.88277],
      216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
      223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
      230: [0, 0.43056, 0.07514, 0, 0.71555],
      248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
      338: [0, 0.68333, 0.12028, 0, 0.98499],
      339: [0, 0.43056, 0.07514, 0, 0.71555],
      710: [0, 0.69444, 0.06646, 0, 0.51111],
      711: [0, 0.62847, 0.08295, 0, 0.51111],
      713: [0, 0.56167, 0.10333, 0, 0.51111],
      714: [0, 0.69444, 0.09694, 0, 0.51111],
      715: [0, 0.69444, 0, 0, 0.51111],
      728: [0, 0.69444, 0.10806, 0, 0.51111],
      729: [0, 0.66786, 0.11752, 0, 0.30667],
      730: [0, 0.69444, 0, 0, 0.83129],
      732: [0, 0.66786, 0.11585, 0, 0.51111],
      733: [0, 0.69444, 0.1225, 0, 0.51111],
      915: [0, 0.68333, 0.13305, 0, 0.62722],
      916: [0, 0.68333, 0, 0, 0.81777],
      920: [0, 0.68333, 0.09403, 0, 0.76666],
      923: [0, 0.68333, 0, 0, 0.69222],
      926: [0, 0.68333, 0.15294, 0, 0.66444],
      928: [0, 0.68333, 0.16389, 0, 0.74333],
      931: [0, 0.68333, 0.12028, 0, 0.71555],
      933: [0, 0.68333, 0.11111, 0, 0.76666],
      934: [0, 0.68333, 0.05986, 0, 0.71555],
      936: [0, 0.68333, 0.11111, 0, 0.76666],
      937: [0, 0.68333, 0.10257, 0, 0.71555],
      8211: [0, 0.43056, 0.09208, 0, 0.51111],
      8212: [0, 0.43056, 0.09208, 0, 1.02222],
      8216: [0, 0.69444, 0.12417, 0, 0.30667],
      8217: [0, 0.69444, 0.12417, 0, 0.30667],
      8220: [0, 0.69444, 0.1685, 0, 0.51444],
      8221: [0, 0.69444, 0.06961, 0, 0.51444],
      8463: [0, 0.68889, 0, 0, 0.54028],
    },
    "Main-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.27778],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.77778],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.19444, 0.10556, 0, 0, 0.27778],
      45: [0, 0.43056, 0, 0, 0.33333],
      46: [0, 0.10556, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.64444, 0, 0, 0.5],
      49: [0, 0.64444, 0, 0, 0.5],
      50: [0, 0.64444, 0, 0, 0.5],
      51: [0, 0.64444, 0, 0, 0.5],
      52: [0, 0.64444, 0, 0, 0.5],
      53: [0, 0.64444, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0, 0.64444, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0, 0.64444, 0, 0, 0.5],
      58: [0, 0.43056, 0, 0, 0.27778],
      59: [0.19444, 0.43056, 0, 0, 0.27778],
      60: [0.0391, 0.5391, 0, 0, 0.77778],
      61: [-0.13313, 0.36687, 0, 0, 0.77778],
      62: [0.0391, 0.5391, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.77778],
      65: [0, 0.68333, 0, 0, 0.75],
      66: [0, 0.68333, 0, 0, 0.70834],
      67: [0, 0.68333, 0, 0, 0.72222],
      68: [0, 0.68333, 0, 0, 0.76389],
      69: [0, 0.68333, 0, 0, 0.68056],
      70: [0, 0.68333, 0, 0, 0.65278],
      71: [0, 0.68333, 0, 0, 0.78472],
      72: [0, 0.68333, 0, 0, 0.75],
      73: [0, 0.68333, 0, 0, 0.36111],
      74: [0, 0.68333, 0, 0, 0.51389],
      75: [0, 0.68333, 0, 0, 0.77778],
      76: [0, 0.68333, 0, 0, 0.625],
      77: [0, 0.68333, 0, 0, 0.91667],
      78: [0, 0.68333, 0, 0, 0.75],
      79: [0, 0.68333, 0, 0, 0.77778],
      80: [0, 0.68333, 0, 0, 0.68056],
      81: [0.19444, 0.68333, 0, 0, 0.77778],
      82: [0, 0.68333, 0, 0, 0.73611],
      83: [0, 0.68333, 0, 0, 0.55556],
      84: [0, 0.68333, 0, 0, 0.72222],
      85: [0, 0.68333, 0, 0, 0.75],
      86: [0, 0.68333, 0.01389, 0, 0.75],
      87: [0, 0.68333, 0.01389, 0, 1.02778],
      88: [0, 0.68333, 0, 0, 0.75],
      89: [0, 0.68333, 0.025, 0, 0.75],
      90: [0, 0.68333, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.27778],
      92: [0.25, 0.75, 0, 0, 0.5],
      93: [0.25, 0.75, 0, 0, 0.27778],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.31, 0.12056, 0.02778, 0, 0.5],
      97: [0, 0.43056, 0, 0, 0.5],
      98: [0, 0.69444, 0, 0, 0.55556],
      99: [0, 0.43056, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.55556],
      101: [0, 0.43056, 0, 0, 0.44445],
      102: [0, 0.69444, 0.07778, 0, 0.30556],
      103: [0.19444, 0.43056, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.55556],
      105: [0, 0.66786, 0, 0, 0.27778],
      106: [0.19444, 0.66786, 0, 0, 0.30556],
      107: [0, 0.69444, 0, 0, 0.52778],
      108: [0, 0.69444, 0, 0, 0.27778],
      109: [0, 0.43056, 0, 0, 0.83334],
      110: [0, 0.43056, 0, 0, 0.55556],
      111: [0, 0.43056, 0, 0, 0.5],
      112: [0.19444, 0.43056, 0, 0, 0.55556],
      113: [0.19444, 0.43056, 0, 0, 0.52778],
      114: [0, 0.43056, 0, 0, 0.39167],
      115: [0, 0.43056, 0, 0, 0.39445],
      116: [0, 0.61508, 0, 0, 0.38889],
      117: [0, 0.43056, 0, 0, 0.55556],
      118: [0, 0.43056, 0.01389, 0, 0.52778],
      119: [0, 0.43056, 0.01389, 0, 0.72222],
      120: [0, 0.43056, 0, 0, 0.52778],
      121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
      122: [0, 0.43056, 0, 0, 0.44445],
      123: [0.25, 0.75, 0, 0, 0.5],
      124: [0.25, 0.75, 0, 0, 0.27778],
      125: [0.25, 0.75, 0, 0, 0.5],
      126: [0.35, 0.31786, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.76909],
      167: [0.19444, 0.69444, 0, 0, 0.44445],
      168: [0, 0.66786, 0, 0, 0.5],
      172: [0, 0.43056, 0, 0, 0.66667],
      176: [0, 0.69444, 0, 0, 0.75],
      177: [0.08333, 0.58333, 0, 0, 0.77778],
      182: [0.19444, 0.69444, 0, 0, 0.61111],
      184: [0.17014, 0, 0, 0, 0.44445],
      198: [0, 0.68333, 0, 0, 0.90278],
      215: [0.08333, 0.58333, 0, 0, 0.77778],
      216: [0.04861, 0.73194, 0, 0, 0.77778],
      223: [0, 0.69444, 0, 0, 0.5],
      230: [0, 0.43056, 0, 0, 0.72222],
      247: [0.08333, 0.58333, 0, 0, 0.77778],
      248: [0.09722, 0.52778, 0, 0, 0.5],
      305: [0, 0.43056, 0, 0, 0.27778],
      338: [0, 0.68333, 0, 0, 1.01389],
      339: [0, 0.43056, 0, 0, 0.77778],
      567: [0.19444, 0.43056, 0, 0, 0.30556],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.62847, 0, 0, 0.5],
      713: [0, 0.56778, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.66786, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.75],
      732: [0, 0.66786, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.68333, 0, 0, 0.625],
      916: [0, 0.68333, 0, 0, 0.83334],
      920: [0, 0.68333, 0, 0, 0.77778],
      923: [0, 0.68333, 0, 0, 0.69445],
      926: [0, 0.68333, 0, 0, 0.66667],
      928: [0, 0.68333, 0, 0, 0.75],
      931: [0, 0.68333, 0, 0, 0.72222],
      933: [0, 0.68333, 0, 0, 0.77778],
      934: [0, 0.68333, 0, 0, 0.72222],
      936: [0, 0.68333, 0, 0, 0.77778],
      937: [0, 0.68333, 0, 0, 0.72222],
      8211: [0, 0.43056, 0.02778, 0, 0.5],
      8212: [0, 0.43056, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
      8224: [0.19444, 0.69444, 0, 0, 0.44445],
      8225: [0.19444, 0.69444, 0, 0, 0.44445],
      8230: [0, 0.123, 0, 0, 1.172],
      8242: [0, 0.55556, 0, 0, 0.275],
      8407: [0, 0.71444, 0.15382, 0, 0.5],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8465: [0, 0.69444, 0, 0, 0.72222],
      8467: [0, 0.69444, 0, 0.11111, 0.41667],
      8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
      8476: [0, 0.69444, 0, 0, 0.72222],
      8501: [0, 0.69444, 0, 0, 0.61111],
      8592: [-0.13313, 0.36687, 0, 0, 1],
      8593: [0.19444, 0.69444, 0, 0, 0.5],
      8594: [-0.13313, 0.36687, 0, 0, 1],
      8595: [0.19444, 0.69444, 0, 0, 0.5],
      8596: [-0.13313, 0.36687, 0, 0, 1],
      8597: [0.25, 0.75, 0, 0, 0.5],
      8598: [0.19444, 0.69444, 0, 0, 1],
      8599: [0.19444, 0.69444, 0, 0, 1],
      8600: [0.19444, 0.69444, 0, 0, 1],
      8601: [0.19444, 0.69444, 0, 0, 1],
      8614: [0.011, 0.511, 0, 0, 1],
      8617: [0.011, 0.511, 0, 0, 1.126],
      8618: [0.011, 0.511, 0, 0, 1.126],
      8636: [-0.13313, 0.36687, 0, 0, 1],
      8637: [-0.13313, 0.36687, 0, 0, 1],
      8640: [-0.13313, 0.36687, 0, 0, 1],
      8641: [-0.13313, 0.36687, 0, 0, 1],
      8652: [0.011, 0.671, 0, 0, 1],
      8656: [-0.13313, 0.36687, 0, 0, 1],
      8657: [0.19444, 0.69444, 0, 0, 0.61111],
      8658: [-0.13313, 0.36687, 0, 0, 1],
      8659: [0.19444, 0.69444, 0, 0, 0.61111],
      8660: [-0.13313, 0.36687, 0, 0, 1],
      8661: [0.25, 0.75, 0, 0, 0.61111],
      8704: [0, 0.69444, 0, 0, 0.55556],
      8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
      8707: [0, 0.69444, 0, 0, 0.55556],
      8709: [0.05556, 0.75, 0, 0, 0.5],
      8711: [0, 0.68333, 0, 0, 0.83334],
      8712: [0.0391, 0.5391, 0, 0, 0.66667],
      8715: [0.0391, 0.5391, 0, 0, 0.66667],
      8722: [0.08333, 0.58333, 0, 0, 0.77778],
      8723: [0.08333, 0.58333, 0, 0, 0.77778],
      8725: [0.25, 0.75, 0, 0, 0.5],
      8726: [0.25, 0.75, 0, 0, 0.5],
      8727: [-0.03472, 0.46528, 0, 0, 0.5],
      8728: [-0.05555, 0.44445, 0, 0, 0.5],
      8729: [-0.05555, 0.44445, 0, 0, 0.5],
      8730: [0.2, 0.8, 0, 0, 0.83334],
      8733: [0, 0.43056, 0, 0, 0.77778],
      8734: [0, 0.43056, 0, 0, 1],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.27778],
      8741: [0.25, 0.75, 0, 0, 0.5],
      8743: [0, 0.55556, 0, 0, 0.66667],
      8744: [0, 0.55556, 0, 0, 0.66667],
      8745: [0, 0.55556, 0, 0, 0.66667],
      8746: [0, 0.55556, 0, 0, 0.66667],
      8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8768: [0.19444, 0.69444, 0, 0, 0.27778],
      8771: [-0.03625, 0.46375, 0, 0, 0.77778],
      8773: [-0.022, 0.589, 0, 0, 0.778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8781: [-0.03625, 0.46375, 0, 0, 0.77778],
      8784: [-0.133, 0.673, 0, 0, 0.778],
      8801: [-0.03625, 0.46375, 0, 0, 0.77778],
      8804: [0.13597, 0.63597, 0, 0, 0.77778],
      8805: [0.13597, 0.63597, 0, 0, 0.77778],
      8810: [0.0391, 0.5391, 0, 0, 1],
      8811: [0.0391, 0.5391, 0, 0, 1],
      8826: [0.0391, 0.5391, 0, 0, 0.77778],
      8827: [0.0391, 0.5391, 0, 0, 0.77778],
      8834: [0.0391, 0.5391, 0, 0, 0.77778],
      8835: [0.0391, 0.5391, 0, 0, 0.77778],
      8838: [0.13597, 0.63597, 0, 0, 0.77778],
      8839: [0.13597, 0.63597, 0, 0, 0.77778],
      8846: [0, 0.55556, 0, 0, 0.66667],
      8849: [0.13597, 0.63597, 0, 0, 0.77778],
      8850: [0.13597, 0.63597, 0, 0, 0.77778],
      8851: [0, 0.55556, 0, 0, 0.66667],
      8852: [0, 0.55556, 0, 0, 0.66667],
      8853: [0.08333, 0.58333, 0, 0, 0.77778],
      8854: [0.08333, 0.58333, 0, 0, 0.77778],
      8855: [0.08333, 0.58333, 0, 0, 0.77778],
      8856: [0.08333, 0.58333, 0, 0, 0.77778],
      8857: [0.08333, 0.58333, 0, 0, 0.77778],
      8866: [0, 0.69444, 0, 0, 0.61111],
      8867: [0, 0.69444, 0, 0, 0.61111],
      8868: [0, 0.69444, 0, 0, 0.77778],
      8869: [0, 0.69444, 0, 0, 0.77778],
      8872: [0.249, 0.75, 0, 0, 0.867],
      8900: [-0.05555, 0.44445, 0, 0, 0.5],
      8901: [-0.05555, 0.44445, 0, 0, 0.27778],
      8902: [-0.03472, 0.46528, 0, 0, 0.5],
      8904: [0.005, 0.505, 0, 0, 0.9],
      8942: [0.03, 0.903, 0, 0, 0.278],
      8943: [-0.19, 0.313, 0, 0, 1.172],
      8945: [-0.1, 0.823, 0, 0, 1.282],
      8968: [0.25, 0.75, 0, 0, 0.44445],
      8969: [0.25, 0.75, 0, 0, 0.44445],
      8970: [0.25, 0.75, 0, 0, 0.44445],
      8971: [0.25, 0.75, 0, 0, 0.44445],
      8994: [-0.14236, 0.35764, 0, 0, 1],
      8995: [-0.14236, 0.35764, 0, 0, 1],
      9136: [0.244, 0.744, 0, 0, 0.412],
      9137: [0.244, 0.745, 0, 0, 0.412],
      9651: [0.19444, 0.69444, 0, 0, 0.88889],
      9657: [-0.03472, 0.46528, 0, 0, 0.5],
      9661: [0.19444, 0.69444, 0, 0, 0.88889],
      9667: [-0.03472, 0.46528, 0, 0, 0.5],
      9711: [0.19444, 0.69444, 0, 0, 1],
      9824: [0.12963, 0.69444, 0, 0, 0.77778],
      9825: [0.12963, 0.69444, 0, 0, 0.77778],
      9826: [0.12963, 0.69444, 0, 0, 0.77778],
      9827: [0.12963, 0.69444, 0, 0, 0.77778],
      9837: [0, 0.75, 0, 0, 0.38889],
      9838: [0.19444, 0.69444, 0, 0, 0.38889],
      9839: [0.19444, 0.69444, 0, 0, 0.38889],
      10216: [0.25, 0.75, 0, 0, 0.38889],
      10217: [0.25, 0.75, 0, 0, 0.38889],
      10222: [0.244, 0.744, 0, 0, 0.412],
      10223: [0.244, 0.745, 0, 0, 0.412],
      10229: [0.011, 0.511, 0, 0, 1.609],
      10230: [0.011, 0.511, 0, 0, 1.638],
      10231: [0.011, 0.511, 0, 0, 1.859],
      10232: [0.024, 0.525, 0, 0, 1.609],
      10233: [0.024, 0.525, 0, 0, 1.638],
      10234: [0.024, 0.525, 0, 0, 1.858],
      10236: [0.011, 0.511, 0, 0, 1.638],
      10815: [0, 0.68333, 0, 0, 0.75],
      10927: [0.13597, 0.63597, 0, 0, 0.77778],
      10928: [0.13597, 0.63597, 0, 0, 0.77778],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Math-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.44444, 0, 0, 0.575],
      49: [0, 0.44444, 0, 0, 0.575],
      50: [0, 0.44444, 0, 0, 0.575],
      51: [0.19444, 0.44444, 0, 0, 0.575],
      52: [0.19444, 0.44444, 0, 0, 0.575],
      53: [0.19444, 0.44444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0.19444, 0.44444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0.19444, 0.44444, 0, 0, 0.575],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0.04835, 0, 0.8664],
      67: [0, 0.68611, 0.06979, 0, 0.81694],
      68: [0, 0.68611, 0.03194, 0, 0.93812],
      69: [0, 0.68611, 0.05451, 0, 0.81007],
      70: [0, 0.68611, 0.15972, 0, 0.68889],
      71: [0, 0.68611, 0, 0, 0.88673],
      72: [0, 0.68611, 0.08229, 0, 0.98229],
      73: [0, 0.68611, 0.07778, 0, 0.51111],
      74: [0, 0.68611, 0.10069, 0, 0.63125],
      75: [0, 0.68611, 0.06979, 0, 0.97118],
      76: [0, 0.68611, 0, 0, 0.75555],
      77: [0, 0.68611, 0.11424, 0, 1.14201],
      78: [0, 0.68611, 0.11424, 0, 0.95034],
      79: [0, 0.68611, 0.03194, 0, 0.83666],
      80: [0, 0.68611, 0.15972, 0, 0.72309],
      81: [0.19444, 0.68611, 0, 0, 0.86861],
      82: [0, 0.68611, 0.00421, 0, 0.87235],
      83: [0, 0.68611, 0.05382, 0, 0.69271],
      84: [0, 0.68611, 0.15972, 0, 0.63663],
      85: [0, 0.68611, 0.11424, 0, 0.80027],
      86: [0, 0.68611, 0.25555, 0, 0.67778],
      87: [0, 0.68611, 0.15972, 0, 1.09305],
      88: [0, 0.68611, 0.07778, 0, 0.94722],
      89: [0, 0.68611, 0.25555, 0, 0.67458],
      90: [0, 0.68611, 0.06979, 0, 0.77257],
      97: [0, 0.44444, 0, 0, 0.63287],
      98: [0, 0.69444, 0, 0, 0.52083],
      99: [0, 0.44444, 0, 0, 0.51342],
      100: [0, 0.69444, 0, 0, 0.60972],
      101: [0, 0.44444, 0, 0, 0.55361],
      102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
      103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
      104: [0, 0.69444, 0, 0, 0.66759],
      105: [0, 0.69326, 0, 0, 0.4048],
      106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
      107: [0, 0.69444, 0.01852, 0, 0.6037],
      108: [0, 0.69444, 0.0088, 0, 0.34815],
      109: [0, 0.44444, 0, 0, 1.0324],
      110: [0, 0.44444, 0, 0, 0.71296],
      111: [0, 0.44444, 0, 0, 0.58472],
      112: [0.19444, 0.44444, 0, 0, 0.60092],
      113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
      114: [0, 0.44444, 0.03194, 0, 0.5287],
      115: [0, 0.44444, 0, 0, 0.53125],
      116: [0, 0.63492, 0, 0, 0.41528],
      117: [0, 0.44444, 0, 0, 0.68102],
      118: [0, 0.44444, 0.03704, 0, 0.56666],
      119: [0, 0.44444, 0.02778, 0, 0.83148],
      120: [0, 0.44444, 0, 0, 0.65903],
      121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
      122: [0, 0.44444, 0.04213, 0, 0.55509],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68611, 0.15972, 0, 0.65694],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0.03194, 0, 0.86722],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0.07458, 0, 0.84125],
      928: [0, 0.68611, 0.08229, 0, 0.98229],
      931: [0, 0.68611, 0.05451, 0, 0.88507],
      933: [0, 0.68611, 0.15972, 0, 0.67083],
      934: [0, 0.68611, 0, 0, 0.76666],
      936: [0, 0.68611, 0.11653, 0, 0.71402],
      937: [0, 0.68611, 0.04835, 0, 0.8789],
      945: [0, 0.44444, 0, 0, 0.76064],
      946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
      947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
      948: [0, 0.69444, 0.03819, 0, 0.52222],
      949: [0, 0.44444, 0, 0, 0.52882],
      950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
      951: [0.19444, 0.44444, 0.03704, 0, 0.6],
      952: [0, 0.69444, 0.03194, 0, 0.5618],
      953: [0, 0.44444, 0, 0, 0.41204],
      954: [0, 0.44444, 0, 0, 0.66759],
      955: [0, 0.69444, 0, 0, 0.67083],
      956: [0.19444, 0.44444, 0, 0, 0.70787],
      957: [0, 0.44444, 0.06898, 0, 0.57685],
      958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
      959: [0, 0.44444, 0, 0, 0.58472],
      960: [0, 0.44444, 0.03704, 0, 0.68241],
      961: [0.19444, 0.44444, 0, 0, 0.6118],
      962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
      963: [0, 0.44444, 0.03704, 0, 0.68588],
      964: [0, 0.44444, 0.13472, 0, 0.52083],
      965: [0, 0.44444, 0.03704, 0, 0.63055],
      966: [0.19444, 0.44444, 0, 0, 0.74722],
      967: [0.19444, 0.44444, 0, 0, 0.71805],
      968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
      969: [0, 0.44444, 0.03704, 0, 0.71782],
      977: [0, 0.69444, 0, 0, 0.69155],
      981: [0.19444, 0.69444, 0, 0, 0.7125],
      982: [0, 0.44444, 0.03194, 0, 0.975],
      1009: [0.19444, 0.44444, 0, 0, 0.6118],
      1013: [0, 0.44444, 0, 0, 0.48333],
      57649: [0, 0.44444, 0, 0, 0.39352],
      57911: [0.19444, 0.44444, 0, 0, 0.43889],
    },
    "Math-Italic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.43056, 0, 0, 0.5],
      49: [0, 0.43056, 0, 0, 0.5],
      50: [0, 0.43056, 0, 0, 0.5],
      51: [0.19444, 0.43056, 0, 0, 0.5],
      52: [0.19444, 0.43056, 0, 0, 0.5],
      53: [0.19444, 0.43056, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0.19444, 0.43056, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0.19444, 0.43056, 0, 0, 0.5],
      65: [0, 0.68333, 0, 0.13889, 0.75],
      66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
      67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
      68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
      69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
      70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
      71: [0, 0.68333, 0, 0.08334, 0.78625],
      72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
      74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
      75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
      76: [0, 0.68333, 0, 0.02778, 0.68056],
      77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
      78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
      79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
      81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
      82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
      83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
      84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
      85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
      86: [0, 0.68333, 0.22222, 0, 0.58333],
      87: [0, 0.68333, 0.13889, 0, 0.94445],
      88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
      89: [0, 0.68333, 0.22222, 0, 0.58056],
      90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
      97: [0, 0.43056, 0, 0, 0.52859],
      98: [0, 0.69444, 0, 0, 0.42917],
      99: [0, 0.43056, 0, 0.05556, 0.43276],
      100: [0, 0.69444, 0, 0.16667, 0.52049],
      101: [0, 0.43056, 0, 0.05556, 0.46563],
      102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
      103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
      104: [0, 0.69444, 0, 0, 0.57616],
      105: [0, 0.65952, 0, 0, 0.34451],
      106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
      107: [0, 0.69444, 0.03148, 0, 0.5206],
      108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
      109: [0, 0.43056, 0, 0, 0.87801],
      110: [0, 0.43056, 0, 0, 0.60023],
      111: [0, 0.43056, 0, 0.05556, 0.48472],
      112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
      113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
      114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
      115: [0, 0.43056, 0, 0.05556, 0.46875],
      116: [0, 0.61508, 0, 0.08334, 0.36111],
      117: [0, 0.43056, 0, 0.02778, 0.57246],
      118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
      119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
      120: [0, 0.43056, 0, 0.02778, 0.57153],
      121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
      122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
      916: [0, 0.68333, 0, 0.16667, 0.83334],
      920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      923: [0, 0.68333, 0, 0.16667, 0.69445],
      926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
      928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
      933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
      934: [0, 0.68333, 0, 0.08334, 0.66667],
      936: [0, 0.68333, 0.11, 0.05556, 0.61222],
      937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
      945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
      946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
      947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
      948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
      949: [0, 0.43056, 0, 0.08334, 0.46632],
      950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
      951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
      952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
      953: [0, 0.43056, 0, 0.05556, 0.35394],
      954: [0, 0.43056, 0, 0, 0.57616],
      955: [0, 0.69444, 0, 0, 0.58334],
      956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
      957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
      958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
      959: [0, 0.43056, 0, 0.05556, 0.48472],
      960: [0, 0.43056, 0.03588, 0, 0.57003],
      961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
      963: [0, 0.43056, 0.03588, 0, 0.57141],
      964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
      965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
      966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
      967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
      968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
      969: [0, 0.43056, 0.03588, 0, 0.62245],
      977: [0, 0.69444, 0, 0.08334, 0.59144],
      981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
      982: [0, 0.43056, 0.02778, 0, 0.82813],
      1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      1013: [0, 0.43056, 0, 0.05556, 0.4059],
      57649: [0, 0.43056, 0, 0.02778, 0.32246],
      57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
    },
    "SansSerif-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.36667],
      34: [0, 0.69444, 0, 0, 0.55834],
      35: [0.19444, 0.69444, 0, 0, 0.91667],
      36: [0.05556, 0.75, 0, 0, 0.55],
      37: [0.05556, 0.75, 0, 0, 1.02912],
      38: [0, 0.69444, 0, 0, 0.83056],
      39: [0, 0.69444, 0, 0, 0.30556],
      40: [0.25, 0.75, 0, 0, 0.42778],
      41: [0.25, 0.75, 0, 0, 0.42778],
      42: [0, 0.75, 0, 0, 0.55],
      43: [0.11667, 0.61667, 0, 0, 0.85556],
      44: [0.10556, 0.13056, 0, 0, 0.30556],
      45: [0, 0.45833, 0, 0, 0.36667],
      46: [0, 0.13056, 0, 0, 0.30556],
      47: [0.25, 0.75, 0, 0, 0.55],
      48: [0, 0.69444, 0, 0, 0.55],
      49: [0, 0.69444, 0, 0, 0.55],
      50: [0, 0.69444, 0, 0, 0.55],
      51: [0, 0.69444, 0, 0, 0.55],
      52: [0, 0.69444, 0, 0, 0.55],
      53: [0, 0.69444, 0, 0, 0.55],
      54: [0, 0.69444, 0, 0, 0.55],
      55: [0, 0.69444, 0, 0, 0.55],
      56: [0, 0.69444, 0, 0, 0.55],
      57: [0, 0.69444, 0, 0, 0.55],
      58: [0, 0.45833, 0, 0, 0.30556],
      59: [0.10556, 0.45833, 0, 0, 0.30556],
      61: [-0.09375, 0.40625, 0, 0, 0.85556],
      63: [0, 0.69444, 0, 0, 0.51945],
      64: [0, 0.69444, 0, 0, 0.73334],
      65: [0, 0.69444, 0, 0, 0.73334],
      66: [0, 0.69444, 0, 0, 0.73334],
      67: [0, 0.69444, 0, 0, 0.70278],
      68: [0, 0.69444, 0, 0, 0.79445],
      69: [0, 0.69444, 0, 0, 0.64167],
      70: [0, 0.69444, 0, 0, 0.61111],
      71: [0, 0.69444, 0, 0, 0.73334],
      72: [0, 0.69444, 0, 0, 0.79445],
      73: [0, 0.69444, 0, 0, 0.33056],
      74: [0, 0.69444, 0, 0, 0.51945],
      75: [0, 0.69444, 0, 0, 0.76389],
      76: [0, 0.69444, 0, 0, 0.58056],
      77: [0, 0.69444, 0, 0, 0.97778],
      78: [0, 0.69444, 0, 0, 0.79445],
      79: [0, 0.69444, 0, 0, 0.79445],
      80: [0, 0.69444, 0, 0, 0.70278],
      81: [0.10556, 0.69444, 0, 0, 0.79445],
      82: [0, 0.69444, 0, 0, 0.70278],
      83: [0, 0.69444, 0, 0, 0.61111],
      84: [0, 0.69444, 0, 0, 0.73334],
      85: [0, 0.69444, 0, 0, 0.76389],
      86: [0, 0.69444, 0.01528, 0, 0.73334],
      87: [0, 0.69444, 0.01528, 0, 1.03889],
      88: [0, 0.69444, 0, 0, 0.73334],
      89: [0, 0.69444, 0.0275, 0, 0.73334],
      90: [0, 0.69444, 0, 0, 0.67223],
      91: [0.25, 0.75, 0, 0, 0.34306],
      93: [0.25, 0.75, 0, 0, 0.34306],
      94: [0, 0.69444, 0, 0, 0.55],
      95: [0.35, 0.10833, 0.03056, 0, 0.55],
      97: [0, 0.45833, 0, 0, 0.525],
      98: [0, 0.69444, 0, 0, 0.56111],
      99: [0, 0.45833, 0, 0, 0.48889],
      100: [0, 0.69444, 0, 0, 0.56111],
      101: [0, 0.45833, 0, 0, 0.51111],
      102: [0, 0.69444, 0.07639, 0, 0.33611],
      103: [0.19444, 0.45833, 0.01528, 0, 0.55],
      104: [0, 0.69444, 0, 0, 0.56111],
      105: [0, 0.69444, 0, 0, 0.25556],
      106: [0.19444, 0.69444, 0, 0, 0.28611],
      107: [0, 0.69444, 0, 0, 0.53056],
      108: [0, 0.69444, 0, 0, 0.25556],
      109: [0, 0.45833, 0, 0, 0.86667],
      110: [0, 0.45833, 0, 0, 0.56111],
      111: [0, 0.45833, 0, 0, 0.55],
      112: [0.19444, 0.45833, 0, 0, 0.56111],
      113: [0.19444, 0.45833, 0, 0, 0.56111],
      114: [0, 0.45833, 0.01528, 0, 0.37222],
      115: [0, 0.45833, 0, 0, 0.42167],
      116: [0, 0.58929, 0, 0, 0.40417],
      117: [0, 0.45833, 0, 0, 0.56111],
      118: [0, 0.45833, 0.01528, 0, 0.5],
      119: [0, 0.45833, 0.01528, 0, 0.74445],
      120: [0, 0.45833, 0, 0, 0.5],
      121: [0.19444, 0.45833, 0.01528, 0, 0.5],
      122: [0, 0.45833, 0, 0, 0.47639],
      126: [0.35, 0.34444, 0, 0, 0.55],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0, 0, 0.55],
      176: [0, 0.69444, 0, 0, 0.73334],
      180: [0, 0.69444, 0, 0, 0.55],
      184: [0.17014, 0, 0, 0, 0.48889],
      305: [0, 0.45833, 0, 0, 0.25556],
      567: [0.19444, 0.45833, 0, 0, 0.28611],
      710: [0, 0.69444, 0, 0, 0.55],
      711: [0, 0.63542, 0, 0, 0.55],
      713: [0, 0.63778, 0, 0, 0.55],
      728: [0, 0.69444, 0, 0, 0.55],
      729: [0, 0.69444, 0, 0, 0.30556],
      730: [0, 0.69444, 0, 0, 0.73334],
      732: [0, 0.69444, 0, 0, 0.55],
      733: [0, 0.69444, 0, 0, 0.55],
      915: [0, 0.69444, 0, 0, 0.58056],
      916: [0, 0.69444, 0, 0, 0.91667],
      920: [0, 0.69444, 0, 0, 0.85556],
      923: [0, 0.69444, 0, 0, 0.67223],
      926: [0, 0.69444, 0, 0, 0.73334],
      928: [0, 0.69444, 0, 0, 0.79445],
      931: [0, 0.69444, 0, 0, 0.79445],
      933: [0, 0.69444, 0, 0, 0.85556],
      934: [0, 0.69444, 0, 0, 0.79445],
      936: [0, 0.69444, 0, 0, 0.85556],
      937: [0, 0.69444, 0, 0, 0.79445],
      8211: [0, 0.45833, 0.03056, 0, 0.55],
      8212: [0, 0.45833, 0.03056, 0, 1.10001],
      8216: [0, 0.69444, 0, 0, 0.30556],
      8217: [0, 0.69444, 0, 0, 0.30556],
      8220: [0, 0.69444, 0, 0, 0.55834],
      8221: [0, 0.69444, 0, 0, 0.55834],
    },
    "SansSerif-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.05733, 0, 0.31945],
      34: [0, 0.69444, 0.00316, 0, 0.5],
      35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
      36: [0.05556, 0.75, 0.11156, 0, 0.5],
      37: [0.05556, 0.75, 0.03126, 0, 0.83334],
      38: [0, 0.69444, 0.03058, 0, 0.75834],
      39: [0, 0.69444, 0.07816, 0, 0.27778],
      40: [0.25, 0.75, 0.13164, 0, 0.38889],
      41: [0.25, 0.75, 0.02536, 0, 0.38889],
      42: [0, 0.75, 0.11775, 0, 0.5],
      43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0.01946, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0.13164, 0, 0.5],
      48: [0, 0.65556, 0.11156, 0, 0.5],
      49: [0, 0.65556, 0.11156, 0, 0.5],
      50: [0, 0.65556, 0.11156, 0, 0.5],
      51: [0, 0.65556, 0.11156, 0, 0.5],
      52: [0, 0.65556, 0.11156, 0, 0.5],
      53: [0, 0.65556, 0.11156, 0, 0.5],
      54: [0, 0.65556, 0.11156, 0, 0.5],
      55: [0, 0.65556, 0.11156, 0, 0.5],
      56: [0, 0.65556, 0.11156, 0, 0.5],
      57: [0, 0.65556, 0.11156, 0, 0.5],
      58: [0, 0.44444, 0.02502, 0, 0.27778],
      59: [0.125, 0.44444, 0.02502, 0, 0.27778],
      61: [-0.13, 0.37, 0.05087, 0, 0.77778],
      63: [0, 0.69444, 0.11809, 0, 0.47222],
      64: [0, 0.69444, 0.07555, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0.08293, 0, 0.66667],
      67: [0, 0.69444, 0.11983, 0, 0.63889],
      68: [0, 0.69444, 0.07555, 0, 0.72223],
      69: [0, 0.69444, 0.11983, 0, 0.59722],
      70: [0, 0.69444, 0.13372, 0, 0.56945],
      71: [0, 0.69444, 0.11983, 0, 0.66667],
      72: [0, 0.69444, 0.08094, 0, 0.70834],
      73: [0, 0.69444, 0.13372, 0, 0.27778],
      74: [0, 0.69444, 0.08094, 0, 0.47222],
      75: [0, 0.69444, 0.11983, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0.08094, 0, 0.875],
      78: [0, 0.69444, 0.08094, 0, 0.70834],
      79: [0, 0.69444, 0.07555, 0, 0.73611],
      80: [0, 0.69444, 0.08293, 0, 0.63889],
      81: [0.125, 0.69444, 0.07555, 0, 0.73611],
      82: [0, 0.69444, 0.08293, 0, 0.64584],
      83: [0, 0.69444, 0.09205, 0, 0.55556],
      84: [0, 0.69444, 0.13372, 0, 0.68056],
      85: [0, 0.69444, 0.08094, 0, 0.6875],
      86: [0, 0.69444, 0.1615, 0, 0.66667],
      87: [0, 0.69444, 0.1615, 0, 0.94445],
      88: [0, 0.69444, 0.13372, 0, 0.66667],
      89: [0, 0.69444, 0.17261, 0, 0.66667],
      90: [0, 0.69444, 0.11983, 0, 0.61111],
      91: [0.25, 0.75, 0.15942, 0, 0.28889],
      93: [0.25, 0.75, 0.08719, 0, 0.28889],
      94: [0, 0.69444, 0.0799, 0, 0.5],
      95: [0.35, 0.09444, 0.08616, 0, 0.5],
      97: [0, 0.44444, 0.00981, 0, 0.48056],
      98: [0, 0.69444, 0.03057, 0, 0.51667],
      99: [0, 0.44444, 0.08336, 0, 0.44445],
      100: [0, 0.69444, 0.09483, 0, 0.51667],
      101: [0, 0.44444, 0.06778, 0, 0.44445],
      102: [0, 0.69444, 0.21705, 0, 0.30556],
      103: [0.19444, 0.44444, 0.10836, 0, 0.5],
      104: [0, 0.69444, 0.01778, 0, 0.51667],
      105: [0, 0.67937, 0.09718, 0, 0.23889],
      106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
      107: [0, 0.69444, 0.08336, 0, 0.48889],
      108: [0, 0.69444, 0.09483, 0, 0.23889],
      109: [0, 0.44444, 0.01778, 0, 0.79445],
      110: [0, 0.44444, 0.01778, 0, 0.51667],
      111: [0, 0.44444, 0.06613, 0, 0.5],
      112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
      113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
      114: [0, 0.44444, 0.10836, 0, 0.34167],
      115: [0, 0.44444, 0.0778, 0, 0.38333],
      116: [0, 0.57143, 0.07225, 0, 0.36111],
      117: [0, 0.44444, 0.04169, 0, 0.51667],
      118: [0, 0.44444, 0.10836, 0, 0.46111],
      119: [0, 0.44444, 0.10836, 0, 0.68334],
      120: [0, 0.44444, 0.09169, 0, 0.46111],
      121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
      122: [0, 0.44444, 0.08752, 0, 0.43472],
      126: [0.35, 0.32659, 0.08826, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0.06385, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.73752],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0.04169, 0, 0.23889],
      567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
      710: [0, 0.69444, 0.0799, 0, 0.5],
      711: [0, 0.63194, 0.08432, 0, 0.5],
      713: [0, 0.60889, 0.08776, 0, 0.5],
      714: [0, 0.69444, 0.09205, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0.09483, 0, 0.5],
      729: [0, 0.67937, 0.07774, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.73752],
      732: [0, 0.67659, 0.08826, 0, 0.5],
      733: [0, 0.69444, 0.09205, 0, 0.5],
      915: [0, 0.69444, 0.13372, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0.07555, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0.12816, 0, 0.66667],
      928: [0, 0.69444, 0.08094, 0, 0.70834],
      931: [0, 0.69444, 0.11983, 0, 0.72222],
      933: [0, 0.69444, 0.09031, 0, 0.77778],
      934: [0, 0.69444, 0.04603, 0, 0.72222],
      936: [0, 0.69444, 0.09031, 0, 0.77778],
      937: [0, 0.69444, 0.08293, 0, 0.72222],
      8211: [0, 0.44444, 0.08616, 0, 0.5],
      8212: [0, 0.44444, 0.08616, 0, 1],
      8216: [0, 0.69444, 0.07816, 0, 0.27778],
      8217: [0, 0.69444, 0.07816, 0, 0.27778],
      8220: [0, 0.69444, 0.14205, 0, 0.5],
      8221: [0, 0.69444, 0.00316, 0, 0.5],
    },
    "SansSerif-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.31945],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.75834],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.65556, 0, 0, 0.5],
      49: [0, 0.65556, 0, 0, 0.5],
      50: [0, 0.65556, 0, 0, 0.5],
      51: [0, 0.65556, 0, 0, 0.5],
      52: [0, 0.65556, 0, 0, 0.5],
      53: [0, 0.65556, 0, 0, 0.5],
      54: [0, 0.65556, 0, 0, 0.5],
      55: [0, 0.65556, 0, 0, 0.5],
      56: [0, 0.65556, 0, 0, 0.5],
      57: [0, 0.65556, 0, 0, 0.5],
      58: [0, 0.44444, 0, 0, 0.27778],
      59: [0.125, 0.44444, 0, 0, 0.27778],
      61: [-0.13, 0.37, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0, 0, 0.66667],
      67: [0, 0.69444, 0, 0, 0.63889],
      68: [0, 0.69444, 0, 0, 0.72223],
      69: [0, 0.69444, 0, 0, 0.59722],
      70: [0, 0.69444, 0, 0, 0.56945],
      71: [0, 0.69444, 0, 0, 0.66667],
      72: [0, 0.69444, 0, 0, 0.70834],
      73: [0, 0.69444, 0, 0, 0.27778],
      74: [0, 0.69444, 0, 0, 0.47222],
      75: [0, 0.69444, 0, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0, 0, 0.875],
      78: [0, 0.69444, 0, 0, 0.70834],
      79: [0, 0.69444, 0, 0, 0.73611],
      80: [0, 0.69444, 0, 0, 0.63889],
      81: [0.125, 0.69444, 0, 0, 0.73611],
      82: [0, 0.69444, 0, 0, 0.64584],
      83: [0, 0.69444, 0, 0, 0.55556],
      84: [0, 0.69444, 0, 0, 0.68056],
      85: [0, 0.69444, 0, 0, 0.6875],
      86: [0, 0.69444, 0.01389, 0, 0.66667],
      87: [0, 0.69444, 0.01389, 0, 0.94445],
      88: [0, 0.69444, 0, 0, 0.66667],
      89: [0, 0.69444, 0.025, 0, 0.66667],
      90: [0, 0.69444, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.28889],
      93: [0.25, 0.75, 0, 0, 0.28889],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.35, 0.09444, 0.02778, 0, 0.5],
      97: [0, 0.44444, 0, 0, 0.48056],
      98: [0, 0.69444, 0, 0, 0.51667],
      99: [0, 0.44444, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.51667],
      101: [0, 0.44444, 0, 0, 0.44445],
      102: [0, 0.69444, 0.06944, 0, 0.30556],
      103: [0.19444, 0.44444, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.51667],
      105: [0, 0.67937, 0, 0, 0.23889],
      106: [0.19444, 0.67937, 0, 0, 0.26667],
      107: [0, 0.69444, 0, 0, 0.48889],
      108: [0, 0.69444, 0, 0, 0.23889],
      109: [0, 0.44444, 0, 0, 0.79445],
      110: [0, 0.44444, 0, 0, 0.51667],
      111: [0, 0.44444, 0, 0, 0.5],
      112: [0.19444, 0.44444, 0, 0, 0.51667],
      113: [0.19444, 0.44444, 0, 0, 0.51667],
      114: [0, 0.44444, 0.01389, 0, 0.34167],
      115: [0, 0.44444, 0, 0, 0.38333],
      116: [0, 0.57143, 0, 0, 0.36111],
      117: [0, 0.44444, 0, 0, 0.51667],
      118: [0, 0.44444, 0.01389, 0, 0.46111],
      119: [0, 0.44444, 0.01389, 0, 0.68334],
      120: [0, 0.44444, 0, 0, 0.46111],
      121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
      122: [0, 0.44444, 0, 0, 0.43472],
      126: [0.35, 0.32659, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.66667],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0, 0, 0.23889],
      567: [0.19444, 0.44444, 0, 0, 0.26667],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.63194, 0, 0, 0.5],
      713: [0, 0.60889, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.67937, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.66667],
      732: [0, 0.67659, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.69444, 0, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0, 0, 0.66667],
      928: [0, 0.69444, 0, 0, 0.70834],
      931: [0, 0.69444, 0, 0, 0.72222],
      933: [0, 0.69444, 0, 0, 0.77778],
      934: [0, 0.69444, 0, 0, 0.72222],
      936: [0, 0.69444, 0, 0, 0.77778],
      937: [0, 0.69444, 0, 0, 0.72222],
      8211: [0, 0.44444, 0.02778, 0, 0.5],
      8212: [0, 0.44444, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
    },
    "Script-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.7, 0.22925, 0, 0.80253],
      66: [0, 0.7, 0.04087, 0, 0.90757],
      67: [0, 0.7, 0.1689, 0, 0.66619],
      68: [0, 0.7, 0.09371, 0, 0.77443],
      69: [0, 0.7, 0.18583, 0, 0.56162],
      70: [0, 0.7, 0.13634, 0, 0.89544],
      71: [0, 0.7, 0.17322, 0, 0.60961],
      72: [0, 0.7, 0.29694, 0, 0.96919],
      73: [0, 0.7, 0.19189, 0, 0.80907],
      74: [0.27778, 0.7, 0.19189, 0, 1.05159],
      75: [0, 0.7, 0.31259, 0, 0.91364],
      76: [0, 0.7, 0.19189, 0, 0.87373],
      77: [0, 0.7, 0.15981, 0, 1.08031],
      78: [0, 0.7, 0.3525, 0, 0.9015],
      79: [0, 0.7, 0.08078, 0, 0.73787],
      80: [0, 0.7, 0.08078, 0, 1.01262],
      81: [0, 0.7, 0.03305, 0, 0.88282],
      82: [0, 0.7, 0.06259, 0, 0.85],
      83: [0, 0.7, 0.19189, 0, 0.86767],
      84: [0, 0.7, 0.29087, 0, 0.74697],
      85: [0, 0.7, 0.25815, 0, 0.79996],
      86: [0, 0.7, 0.27523, 0, 0.62204],
      87: [0, 0.7, 0.27523, 0, 0.80532],
      88: [0, 0.7, 0.26006, 0, 0.94445],
      89: [0, 0.7, 0.2939, 0, 0.70961],
      90: [0, 0.7, 0.24037, 0, 0.8212],
      160: [0, 0, 0, 0, 0.25],
    },
    "Size1-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.35001, 0.85, 0, 0, 0.45834],
      41: [0.35001, 0.85, 0, 0, 0.45834],
      47: [0.35001, 0.85, 0, 0, 0.57778],
      91: [0.35001, 0.85, 0, 0, 0.41667],
      92: [0.35001, 0.85, 0, 0, 0.57778],
      93: [0.35001, 0.85, 0, 0, 0.41667],
      123: [0.35001, 0.85, 0, 0, 0.58334],
      125: [0.35001, 0.85, 0, 0, 0.58334],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.72222, 0, 0, 0.55556],
      732: [0, 0.72222, 0, 0, 0.55556],
      770: [0, 0.72222, 0, 0, 0.55556],
      771: [0, 0.72222, 0, 0, 0.55556],
      8214: [-99e-5, 0.601, 0, 0, 0.77778],
      8593: [1e-5, 0.6, 0, 0, 0.66667],
      8595: [1e-5, 0.6, 0, 0, 0.66667],
      8657: [1e-5, 0.6, 0, 0, 0.77778],
      8659: [1e-5, 0.6, 0, 0, 0.77778],
      8719: [0.25001, 0.75, 0, 0, 0.94445],
      8720: [0.25001, 0.75, 0, 0, 0.94445],
      8721: [0.25001, 0.75, 0, 0, 1.05556],
      8730: [0.35001, 0.85, 0, 0, 1],
      8739: [-0.00599, 0.606, 0, 0, 0.33333],
      8741: [-0.00599, 0.606, 0, 0, 0.55556],
      8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8748: [0.306, 0.805, 0.19445, 0, 0.47222],
      8749: [0.306, 0.805, 0.19445, 0, 0.47222],
      8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8896: [0.25001, 0.75, 0, 0, 0.83334],
      8897: [0.25001, 0.75, 0, 0, 0.83334],
      8898: [0.25001, 0.75, 0, 0, 0.83334],
      8899: [0.25001, 0.75, 0, 0, 0.83334],
      8968: [0.35001, 0.85, 0, 0, 0.47222],
      8969: [0.35001, 0.85, 0, 0, 0.47222],
      8970: [0.35001, 0.85, 0, 0, 0.47222],
      8971: [0.35001, 0.85, 0, 0, 0.47222],
      9168: [-99e-5, 0.601, 0, 0, 0.66667],
      10216: [0.35001, 0.85, 0, 0, 0.47222],
      10217: [0.35001, 0.85, 0, 0, 0.47222],
      10752: [0.25001, 0.75, 0, 0, 1.11111],
      10753: [0.25001, 0.75, 0, 0, 1.11111],
      10754: [0.25001, 0.75, 0, 0, 1.11111],
      10756: [0.25001, 0.75, 0, 0, 0.83334],
      10758: [0.25001, 0.75, 0, 0, 0.83334],
    },
    "Size2-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.65002, 1.15, 0, 0, 0.59722],
      41: [0.65002, 1.15, 0, 0, 0.59722],
      47: [0.65002, 1.15, 0, 0, 0.81111],
      91: [0.65002, 1.15, 0, 0, 0.47222],
      92: [0.65002, 1.15, 0, 0, 0.81111],
      93: [0.65002, 1.15, 0, 0, 0.47222],
      123: [0.65002, 1.15, 0, 0, 0.66667],
      125: [0.65002, 1.15, 0, 0, 0.66667],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1],
      732: [0, 0.75, 0, 0, 1],
      770: [0, 0.75, 0, 0, 1],
      771: [0, 0.75, 0, 0, 1],
      8719: [0.55001, 1.05, 0, 0, 1.27778],
      8720: [0.55001, 1.05, 0, 0, 1.27778],
      8721: [0.55001, 1.05, 0, 0, 1.44445],
      8730: [0.65002, 1.15, 0, 0, 1],
      8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8748: [0.862, 1.36, 0.44445, 0, 0.55556],
      8749: [0.862, 1.36, 0.44445, 0, 0.55556],
      8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8896: [0.55001, 1.05, 0, 0, 1.11111],
      8897: [0.55001, 1.05, 0, 0, 1.11111],
      8898: [0.55001, 1.05, 0, 0, 1.11111],
      8899: [0.55001, 1.05, 0, 0, 1.11111],
      8968: [0.65002, 1.15, 0, 0, 0.52778],
      8969: [0.65002, 1.15, 0, 0, 0.52778],
      8970: [0.65002, 1.15, 0, 0, 0.52778],
      8971: [0.65002, 1.15, 0, 0, 0.52778],
      10216: [0.65002, 1.15, 0, 0, 0.61111],
      10217: [0.65002, 1.15, 0, 0, 0.61111],
      10752: [0.55001, 1.05, 0, 0, 1.51112],
      10753: [0.55001, 1.05, 0, 0, 1.51112],
      10754: [0.55001, 1.05, 0, 0, 1.51112],
      10756: [0.55001, 1.05, 0, 0, 1.11111],
      10758: [0.55001, 1.05, 0, 0, 1.11111],
    },
    "Size3-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.95003, 1.45, 0, 0, 0.73611],
      41: [0.95003, 1.45, 0, 0, 0.73611],
      47: [0.95003, 1.45, 0, 0, 1.04445],
      91: [0.95003, 1.45, 0, 0, 0.52778],
      92: [0.95003, 1.45, 0, 0, 1.04445],
      93: [0.95003, 1.45, 0, 0, 0.52778],
      123: [0.95003, 1.45, 0, 0, 0.75],
      125: [0.95003, 1.45, 0, 0, 0.75],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1.44445],
      732: [0, 0.75, 0, 0, 1.44445],
      770: [0, 0.75, 0, 0, 1.44445],
      771: [0, 0.75, 0, 0, 1.44445],
      8730: [0.95003, 1.45, 0, 0, 1],
      8968: [0.95003, 1.45, 0, 0, 0.58334],
      8969: [0.95003, 1.45, 0, 0, 0.58334],
      8970: [0.95003, 1.45, 0, 0, 0.58334],
      8971: [0.95003, 1.45, 0, 0, 0.58334],
      10216: [0.95003, 1.45, 0, 0, 0.75],
      10217: [0.95003, 1.45, 0, 0, 0.75],
    },
    "Size4-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [1.25003, 1.75, 0, 0, 0.79167],
      41: [1.25003, 1.75, 0, 0, 0.79167],
      47: [1.25003, 1.75, 0, 0, 1.27778],
      91: [1.25003, 1.75, 0, 0, 0.58334],
      92: [1.25003, 1.75, 0, 0, 1.27778],
      93: [1.25003, 1.75, 0, 0, 0.58334],
      123: [1.25003, 1.75, 0, 0, 0.80556],
      125: [1.25003, 1.75, 0, 0, 0.80556],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.825, 0, 0, 1.8889],
      732: [0, 0.825, 0, 0, 1.8889],
      770: [0, 0.825, 0, 0, 1.8889],
      771: [0, 0.825, 0, 0, 1.8889],
      8730: [1.25003, 1.75, 0, 0, 1],
      8968: [1.25003, 1.75, 0, 0, 0.63889],
      8969: [1.25003, 1.75, 0, 0, 0.63889],
      8970: [1.25003, 1.75, 0, 0, 0.63889],
      8971: [1.25003, 1.75, 0, 0, 0.63889],
      9115: [0.64502, 1.155, 0, 0, 0.875],
      9116: [1e-5, 0.6, 0, 0, 0.875],
      9117: [0.64502, 1.155, 0, 0, 0.875],
      9118: [0.64502, 1.155, 0, 0, 0.875],
      9119: [1e-5, 0.6, 0, 0, 0.875],
      9120: [0.64502, 1.155, 0, 0, 0.875],
      9121: [0.64502, 1.155, 0, 0, 0.66667],
      9122: [-99e-5, 0.601, 0, 0, 0.66667],
      9123: [0.64502, 1.155, 0, 0, 0.66667],
      9124: [0.64502, 1.155, 0, 0, 0.66667],
      9125: [-99e-5, 0.601, 0, 0, 0.66667],
      9126: [0.64502, 1.155, 0, 0, 0.66667],
      9127: [1e-5, 0.9, 0, 0, 0.88889],
      9128: [0.65002, 1.15, 0, 0, 0.88889],
      9129: [0.90001, 0, 0, 0, 0.88889],
      9130: [0, 0.3, 0, 0, 0.88889],
      9131: [1e-5, 0.9, 0, 0, 0.88889],
      9132: [0.65002, 1.15, 0, 0, 0.88889],
      9133: [0.90001, 0, 0, 0, 0.88889],
      9143: [0.88502, 0.915, 0, 0, 1.05556],
      10216: [1.25003, 1.75, 0, 0, 0.80556],
      10217: [1.25003, 1.75, 0, 0, 0.80556],
      57344: [-0.00499, 0.605, 0, 0, 1.05556],
      57345: [-0.00499, 0.605, 0, 0, 1.05556],
      57680: [0, 0.12, 0, 0, 0.45],
      57681: [0, 0.12, 0, 0, 0.45],
      57682: [0, 0.12, 0, 0, 0.45],
      57683: [0, 0.12, 0, 0, 0.45],
    },
    "Typewriter-Regular": {
      32: [0, 0, 0, 0, 0.525],
      33: [0, 0.61111, 0, 0, 0.525],
      34: [0, 0.61111, 0, 0, 0.525],
      35: [0, 0.61111, 0, 0, 0.525],
      36: [0.08333, 0.69444, 0, 0, 0.525],
      37: [0.08333, 0.69444, 0, 0, 0.525],
      38: [0, 0.61111, 0, 0, 0.525],
      39: [0, 0.61111, 0, 0, 0.525],
      40: [0.08333, 0.69444, 0, 0, 0.525],
      41: [0.08333, 0.69444, 0, 0, 0.525],
      42: [0, 0.52083, 0, 0, 0.525],
      43: [-0.08056, 0.53055, 0, 0, 0.525],
      44: [0.13889, 0.125, 0, 0, 0.525],
      45: [-0.08056, 0.53055, 0, 0, 0.525],
      46: [0, 0.125, 0, 0, 0.525],
      47: [0.08333, 0.69444, 0, 0, 0.525],
      48: [0, 0.61111, 0, 0, 0.525],
      49: [0, 0.61111, 0, 0, 0.525],
      50: [0, 0.61111, 0, 0, 0.525],
      51: [0, 0.61111, 0, 0, 0.525],
      52: [0, 0.61111, 0, 0, 0.525],
      53: [0, 0.61111, 0, 0, 0.525],
      54: [0, 0.61111, 0, 0, 0.525],
      55: [0, 0.61111, 0, 0, 0.525],
      56: [0, 0.61111, 0, 0, 0.525],
      57: [0, 0.61111, 0, 0, 0.525],
      58: [0, 0.43056, 0, 0, 0.525],
      59: [0.13889, 0.43056, 0, 0, 0.525],
      60: [-0.05556, 0.55556, 0, 0, 0.525],
      61: [-0.19549, 0.41562, 0, 0, 0.525],
      62: [-0.05556, 0.55556, 0, 0, 0.525],
      63: [0, 0.61111, 0, 0, 0.525],
      64: [0, 0.61111, 0, 0, 0.525],
      65: [0, 0.61111, 0, 0, 0.525],
      66: [0, 0.61111, 0, 0, 0.525],
      67: [0, 0.61111, 0, 0, 0.525],
      68: [0, 0.61111, 0, 0, 0.525],
      69: [0, 0.61111, 0, 0, 0.525],
      70: [0, 0.61111, 0, 0, 0.525],
      71: [0, 0.61111, 0, 0, 0.525],
      72: [0, 0.61111, 0, 0, 0.525],
      73: [0, 0.61111, 0, 0, 0.525],
      74: [0, 0.61111, 0, 0, 0.525],
      75: [0, 0.61111, 0, 0, 0.525],
      76: [0, 0.61111, 0, 0, 0.525],
      77: [0, 0.61111, 0, 0, 0.525],
      78: [0, 0.61111, 0, 0, 0.525],
      79: [0, 0.61111, 0, 0, 0.525],
      80: [0, 0.61111, 0, 0, 0.525],
      81: [0.13889, 0.61111, 0, 0, 0.525],
      82: [0, 0.61111, 0, 0, 0.525],
      83: [0, 0.61111, 0, 0, 0.525],
      84: [0, 0.61111, 0, 0, 0.525],
      85: [0, 0.61111, 0, 0, 0.525],
      86: [0, 0.61111, 0, 0, 0.525],
      87: [0, 0.61111, 0, 0, 0.525],
      88: [0, 0.61111, 0, 0, 0.525],
      89: [0, 0.61111, 0, 0, 0.525],
      90: [0, 0.61111, 0, 0, 0.525],
      91: [0.08333, 0.69444, 0, 0, 0.525],
      92: [0.08333, 0.69444, 0, 0, 0.525],
      93: [0.08333, 0.69444, 0, 0, 0.525],
      94: [0, 0.61111, 0, 0, 0.525],
      95: [0.09514, 0, 0, 0, 0.525],
      96: [0, 0.61111, 0, 0, 0.525],
      97: [0, 0.43056, 0, 0, 0.525],
      98: [0, 0.61111, 0, 0, 0.525],
      99: [0, 0.43056, 0, 0, 0.525],
      100: [0, 0.61111, 0, 0, 0.525],
      101: [0, 0.43056, 0, 0, 0.525],
      102: [0, 0.61111, 0, 0, 0.525],
      103: [0.22222, 0.43056, 0, 0, 0.525],
      104: [0, 0.61111, 0, 0, 0.525],
      105: [0, 0.61111, 0, 0, 0.525],
      106: [0.22222, 0.61111, 0, 0, 0.525],
      107: [0, 0.61111, 0, 0, 0.525],
      108: [0, 0.61111, 0, 0, 0.525],
      109: [0, 0.43056, 0, 0, 0.525],
      110: [0, 0.43056, 0, 0, 0.525],
      111: [0, 0.43056, 0, 0, 0.525],
      112: [0.22222, 0.43056, 0, 0, 0.525],
      113: [0.22222, 0.43056, 0, 0, 0.525],
      114: [0, 0.43056, 0, 0, 0.525],
      115: [0, 0.43056, 0, 0, 0.525],
      116: [0, 0.55358, 0, 0, 0.525],
      117: [0, 0.43056, 0, 0, 0.525],
      118: [0, 0.43056, 0, 0, 0.525],
      119: [0, 0.43056, 0, 0, 0.525],
      120: [0, 0.43056, 0, 0, 0.525],
      121: [0.22222, 0.43056, 0, 0, 0.525],
      122: [0, 0.43056, 0, 0, 0.525],
      123: [0.08333, 0.69444, 0, 0, 0.525],
      124: [0.08333, 0.69444, 0, 0, 0.525],
      125: [0.08333, 0.69444, 0, 0, 0.525],
      126: [0, 0.61111, 0, 0, 0.525],
      127: [0, 0.61111, 0, 0, 0.525],
      160: [0, 0, 0, 0, 0.525],
      176: [0, 0.61111, 0, 0, 0.525],
      184: [0.19445, 0, 0, 0, 0.525],
      305: [0, 0.43056, 0, 0, 0.525],
      567: [0.22222, 0.43056, 0, 0, 0.525],
      711: [0, 0.56597, 0, 0, 0.525],
      713: [0, 0.56555, 0, 0, 0.525],
      714: [0, 0.61111, 0, 0, 0.525],
      715: [0, 0.61111, 0, 0, 0.525],
      728: [0, 0.61111, 0, 0, 0.525],
      730: [0, 0.61111, 0, 0, 0.525],
      770: [0, 0.61111, 0, 0, 0.525],
      771: [0, 0.61111, 0, 0, 0.525],
      776: [0, 0.61111, 0, 0, 0.525],
      915: [0, 0.61111, 0, 0, 0.525],
      916: [0, 0.61111, 0, 0, 0.525],
      920: [0, 0.61111, 0, 0, 0.525],
      923: [0, 0.61111, 0, 0, 0.525],
      926: [0, 0.61111, 0, 0, 0.525],
      928: [0, 0.61111, 0, 0, 0.525],
      931: [0, 0.61111, 0, 0, 0.525],
      933: [0, 0.61111, 0, 0, 0.525],
      934: [0, 0.61111, 0, 0, 0.525],
      936: [0, 0.61111, 0, 0, 0.525],
      937: [0, 0.61111, 0, 0, 0.525],
      8216: [0, 0.61111, 0, 0, 0.525],
      8217: [0, 0.61111, 0, 0, 0.525],
      8242: [0, 0.61111, 0, 0, 0.525],
      9251: [0.11111, 0.21944, 0, 0, 0.525],
    },
  },
  J0 = {
    slant: [0.25, 0.25, 0.25],
    space: [0, 0, 0],
    stretch: [0, 0, 0],
    shrink: [0, 0, 0],
    xHeight: [0.431, 0.431, 0.431],
    quad: [1, 1.171, 1.472],
    extraSpace: [0, 0, 0],
    num1: [0.677, 0.732, 0.925],
    num2: [0.394, 0.384, 0.387],
    num3: [0.444, 0.471, 0.504],
    denom1: [0.686, 0.752, 1.025],
    denom2: [0.345, 0.344, 0.532],
    sup1: [0.413, 0.503, 0.504],
    sup2: [0.363, 0.431, 0.404],
    sup3: [0.289, 0.286, 0.294],
    sub1: [0.15, 0.143, 0.2],
    sub2: [0.247, 0.286, 0.4],
    supDrop: [0.386, 0.353, 0.494],
    subDrop: [0.05, 0.071, 0.1],
    delim1: [2.39, 1.7, 1.98],
    delim2: [1.01, 1.157, 1.42],
    axisHeight: [0.25, 0.25, 0.25],
    defaultRuleThickness: [0.04, 0.049, 0.049],
    bigOpSpacing1: [0.111, 0.111, 0.111],
    bigOpSpacing2: [0.166, 0.166, 0.166],
    bigOpSpacing3: [0.2, 0.2, 0.2],
    bigOpSpacing4: [0.6, 0.611, 0.611],
    bigOpSpacing5: [0.1, 0.143, 0.143],
    sqrtRuleThickness: [0.04, 0.04, 0.04],
    ptPerEm: [10, 10, 10],
    doubleRuleSep: [0.2, 0.2, 0.2],
    arrayRuleWidth: [0.04, 0.04, 0.04],
    fboxsep: [0.3, 0.3, 0.3],
    fboxrule: [0.04, 0.04, 0.04],
  },
  nn = {
    Å: "A",
    Ð: "D",
    Þ: "o",
    å: "a",
    ð: "d",
    þ: "o",
    А: "A",
    Б: "B",
    В: "B",
    Г: "F",
    Д: "A",
    Е: "E",
    Ж: "K",
    З: "3",
    И: "N",
    Й: "N",
    К: "K",
    Л: "N",
    М: "M",
    Н: "H",
    О: "O",
    П: "N",
    Р: "P",
    С: "C",
    Т: "T",
    У: "y",
    Ф: "O",
    Х: "X",
    Ц: "U",
    Ч: "h",
    Ш: "W",
    Щ: "W",
    Ъ: "B",
    Ы: "X",
    Ь: "B",
    Э: "3",
    Ю: "X",
    Я: "R",
    а: "a",
    б: "b",
    в: "a",
    г: "r",
    д: "y",
    е: "e",
    ж: "m",
    з: "e",
    и: "n",
    й: "n",
    к: "n",
    л: "n",
    м: "m",
    н: "n",
    о: "o",
    п: "n",
    р: "p",
    с: "c",
    т: "o",
    у: "y",
    ф: "b",
    х: "x",
    ц: "n",
    ч: "n",
    ш: "w",
    щ: "w",
    ъ: "a",
    ы: "m",
    ь: "a",
    э: "e",
    ю: "m",
    я: "r",
  };
function ys(r, e) {
  Ee[r] = e;
}
function Ar(r, e, t) {
  if (!Ee[e]) throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0),
    a = Ee[e][n];
  if (
    (!a && r[0] in nn && ((n = nn[r[0]].charCodeAt(0)), (a = Ee[e][n])),
    !a && t === "text" && Aa(n) && (a = Ee[e][77]),
    a)
  )
    return { depth: a[0], height: a[1], italic: a[2], skew: a[3], width: a[4] };
}
var Ot = {};
function xs(r) {
  var e;
  if ((r >= 5 ? (e = 0) : r >= 3 ? (e = 1) : (e = 2), !Ot[e])) {
    var t = (Ot[e] = { cssEmPerMu: J0.quad[e] / 18 });
    for (var n in J0) J0.hasOwnProperty(n) && (t[n] = J0[n][e]);
  }
  return Ot[e];
}
var ws = [
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 2, 1],
    [5, 2, 1],
    [6, 3, 1],
    [7, 4, 2],
    [8, 6, 3],
    [9, 7, 6],
    [10, 8, 7],
    [11, 10, 9],
  ],
  an = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
  ln = function (e, t) {
    return t.size < 2 ? e : ws[e - 1][t.size - 1];
  };
class Pe {
  constructor(e) {
    (this.style = void 0),
      (this.color = void 0),
      (this.size = void 0),
      (this.textSize = void 0),
      (this.phantom = void 0),
      (this.font = void 0),
      (this.fontFamily = void 0),
      (this.fontWeight = void 0),
      (this.fontShape = void 0),
      (this.sizeMultiplier = void 0),
      (this.maxSize = void 0),
      (this.minRuleThickness = void 0),
      (this._fontMetrics = void 0),
      (this.style = e.style),
      (this.color = e.color),
      (this.size = e.size || Pe.BASESIZE),
      (this.textSize = e.textSize || this.size),
      (this.phantom = !!e.phantom),
      (this.font = e.font || ""),
      (this.fontFamily = e.fontFamily || ""),
      (this.fontWeight = e.fontWeight || ""),
      (this.fontShape = e.fontShape || ""),
      (this.sizeMultiplier = an[this.size - 1]),
      (this.maxSize = e.maxSize),
      (this.minRuleThickness = e.minRuleThickness),
      (this._fontMetrics = void 0);
  }
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness,
    };
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return new Pe(t);
  }
  havingStyle(e) {
    return this.style === e
      ? this
      : this.extend({ style: e, size: ln(this.textSize, e) });
  }
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  havingSize(e) {
    return this.size === e && this.textSize === e
      ? this
      : this.extend({
          style: this.style.text(),
          size: e,
          textSize: e,
          sizeMultiplier: an[e - 1],
        });
  }
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = ln(Pe.BASESIZE, e);
    return this.size === t && this.textSize === Pe.BASESIZE && this.style === e
      ? this
      : this.extend({ style: e, size: t });
  }
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({ style: this.style.text(), size: e });
  }
  withColor(e) {
    return this.extend({ color: e });
  }
  withPhantom() {
    return this.extend({ phantom: !0 });
  }
  withFont(e) {
    return this.extend({ font: e });
  }
  withTextFontFamily(e) {
    return this.extend({ fontFamily: e, font: "" });
  }
  withTextFontWeight(e) {
    return this.extend({ fontWeight: e, font: "" });
  }
  withTextFontShape(e) {
    return this.extend({ fontShape: e, font: "" });
  }
  sizingClasses(e) {
    return e.size !== this.size
      ? ["sizing", "reset-size" + e.size, "size" + this.size]
      : [];
  }
  baseSizingClasses() {
    return this.size !== Pe.BASESIZE
      ? ["sizing", "reset-size" + this.size, "size" + Pe.BASESIZE]
      : [];
  }
  fontMetrics() {
    return (
      this._fontMetrics || (this._fontMetrics = xs(this.size)),
      this._fontMetrics
    );
  }
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Pe.BASESIZE = 6;
var ar = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 803 / 800,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 803 / 800,
  },
  ks = { ex: !0, em: !0, mu: !0 },
  Ma = function (e) {
    return (
      typeof e != "string" && (e = e.unit), e in ar || e in ks || e === "ex"
    );
  },
  ee = function (e, t) {
    var n;
    if (e.unit in ar)
      n = ar[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
    else if (e.unit === "mu") n = t.fontMetrics().cssEmPerMu;
    else {
      var a;
      if (
        (t.style.isTight() ? (a = t.havingStyle(t.style.text())) : (a = t),
        e.unit === "ex")
      )
        n = a.fontMetrics().xHeight;
      else if (e.unit === "em") n = a.fontMetrics().quad;
      else throw new F("Invalid unit: '" + e.unit + "'");
      a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
    }
    return Math.min(e.number * n, t.maxSize);
  },
  E = function (e) {
    return +e.toFixed(4) + "em";
  },
  t0 = function (e) {
    return e.filter((t) => t).join(" ");
  },
  za = function (e, t, n) {
    if (
      ((this.classes = e || []),
      (this.attributes = {}),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = n || {}),
      t)
    ) {
      t.style.isTight() && this.classes.push("mtight");
      var a = t.getColor();
      a && (this.style.color = a);
    }
  },
  Ta = function (e) {
    var t = document.createElement(e);
    t.className = t0(this.classes);
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
    for (var a in this.attributes)
      this.attributes.hasOwnProperty(a) &&
        t.setAttribute(a, this.attributes[a]);
    for (var i = 0; i < this.children.length; i++)
      t.appendChild(this.children[i].toNode());
    return t;
  },
  Ca = function (e) {
    var t = "<" + e;
    this.classes.length && (t += ' class="' + $.escape(t0(this.classes)) + '"');
    var n = "";
    for (var a in this.style)
      this.style.hasOwnProperty(a) &&
        (n += $.hyphenate(a) + ":" + this.style[a] + ";");
    n && (t += ' style="' + $.escape(n) + '"');
    for (var i in this.attributes)
      this.attributes.hasOwnProperty(i) &&
        (t += " " + i + '="' + $.escape(this.attributes[i]) + '"');
    t += ">";
    for (var l = 0; l < this.children.length; l++)
      t += this.children[l].toMarkup();
    return (t += "</" + e + ">"), t;
  };
class U0 {
  constructor(e, t, n, a) {
    (this.children = void 0),
      (this.attributes = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.width = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      za.call(this, e, n, a),
      (this.children = t || []);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return $.contains(this.classes, e);
  }
  toNode() {
    return Ta.call(this, "span");
  }
  toMarkup() {
    return Ca.call(this, "span");
  }
}
class Mr {
  constructor(e, t, n, a) {
    (this.children = void 0),
      (this.attributes = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      za.call(this, t, a),
      (this.children = n || []),
      this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return $.contains(this.classes, e);
  }
  toNode() {
    return Ta.call(this, "a");
  }
  toMarkup() {
    return Ca.call(this, "a");
  }
}
class Ss {
  constructor(e, t, n) {
    (this.src = void 0),
      (this.alt = void 0),
      (this.classes = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.maxFontSize = void 0),
      (this.style = void 0),
      (this.alt = t),
      (this.src = e),
      (this.classes = ["mord"]),
      (this.style = n);
  }
  hasClass(e) {
    return $.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    (e.src = this.src), (e.alt = this.alt), (e.className = "mord");
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ",
      t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) &&
        (t += $.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + $.escape(t) + '"'), (e += "'/>"), e;
  }
}
var As = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
class Ae {
  constructor(e, t, n, a, i, l, o, u) {
    (this.text = void 0),
      (this.height = void 0),
      (this.depth = void 0),
      (this.italic = void 0),
      (this.skew = void 0),
      (this.width = void 0),
      (this.maxFontSize = void 0),
      (this.classes = void 0),
      (this.style = void 0),
      (this.text = e),
      (this.height = t || 0),
      (this.depth = n || 0),
      (this.italic = a || 0),
      (this.skew = i || 0),
      (this.width = l || 0),
      (this.classes = o || []),
      (this.style = u || {}),
      (this.maxFontSize = 0);
    var m = os(this.text.charCodeAt(0));
    m && this.classes.push(m + "_fallback"),
      /[îïíì]/.test(this.text) && (this.text = As[this.text]);
  }
  hasClass(e) {
    return $.contains(this.classes, e);
  }
  toNode() {
    var e = document.createTextNode(this.text),
      t = null;
    this.italic > 0 &&
      ((t = document.createElement("span")),
      (t.style.marginRight = E(this.italic))),
      this.classes.length > 0 &&
        ((t = t || document.createElement("span")),
        (t.className = t0(this.classes)));
    for (var n in this.style)
      this.style.hasOwnProperty(n) &&
        ((t = t || document.createElement("span")),
        (t.style[n] = this.style[n]));
    return t ? (t.appendChild(e), t) : e;
  }
  toMarkup() {
    var e = !1,
      t = "<span";
    this.classes.length &&
      ((e = !0),
      (t += ' class="'),
      (t += $.escape(t0(this.classes))),
      (t += '"'));
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) &&
        (n += $.hyphenate(a) + ":" + this.style[a] + ";");
    n && ((e = !0), (t += ' style="' + $.escape(n) + '"'));
    var i = $.escape(this.text);
    return e ? ((t += ">"), (t += i), (t += "</span>"), t) : i;
  }
}
class Ue {
  constructor(e, t) {
    (this.children = void 0),
      (this.attributes = void 0),
      (this.children = e || []),
      (this.attributes = t || {});
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg",
      t = document.createElementNS(e, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) &&
        t.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        (e += " " + t + "='" + this.attributes[t] + "'");
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return (e += "</svg>"), e;
  }
}
class r0 {
  constructor(e, t) {
    (this.pathName = void 0),
      (this.alternate = void 0),
      (this.pathName = e),
      (this.alternate = t);
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg",
      t = document.createElementNS(e, "path");
    return (
      this.alternate
        ? t.setAttribute("d", this.alternate)
        : t.setAttribute("d", rn[this.pathName]),
      t
    );
  }
  toMarkup() {
    return this.alternate
      ? "<path d='" + this.alternate + "'/>"
      : "<path d='" + rn[this.pathName] + "'/>";
  }
}
class ir {
  constructor(e) {
    (this.attributes = void 0), (this.attributes = e || {});
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg",
      t = document.createElementNS(e, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) &&
        t.setAttribute(n, this.attributes[n]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        (e += " " + t + "='" + this.attributes[t] + "'");
    return (e += "/>"), e;
  }
}
function sn(r) {
  if (r instanceof Ae) return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Ms(r) {
  if (r instanceof U0) return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var zs = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
  Ts = {
    "accent-token": 1,
    "mathord": 1,
    "op-token": 1,
    "spacing": 1,
    "textord": 1,
  },
  Z = { math: {}, text: {} };
function s(r, e, t, n, a, i) {
  (Z[r][a] = { font: e, group: t, replace: n }), i && n && (Z[r][n] = Z[r][a]);
}
var c = "math",
  C = "text",
  h = "main",
  g = "ams",
  J = "accent-token",
  R = "bin",
  he = "close",
  A0 = "inner",
  H = "mathord",
  le = "op-token",
  xe = "open",
  xt = "punct",
  b = "rel",
  We = "spacing",
  k = "textord";
s(c, h, b, "≡", "\\equiv", !0);
s(c, h, b, "≺", "\\prec", !0);
s(c, h, b, "≻", "\\succ", !0);
s(c, h, b, "∼", "\\sim", !0);
s(c, h, b, "⊥", "\\perp");
s(c, h, b, "⪯", "\\preceq", !0);
s(c, h, b, "⪰", "\\succeq", !0);
s(c, h, b, "≃", "\\simeq", !0);
s(c, h, b, "∣", "\\mid", !0);
s(c, h, b, "≪", "\\ll", !0);
s(c, h, b, "≫", "\\gg", !0);
s(c, h, b, "≍", "\\asymp", !0);
s(c, h, b, "∥", "\\parallel");
s(c, h, b, "⋈", "\\bowtie", !0);
s(c, h, b, "⌣", "\\smile", !0);
s(c, h, b, "⊑", "\\sqsubseteq", !0);
s(c, h, b, "⊒", "\\sqsupseteq", !0);
s(c, h, b, "≐", "\\doteq", !0);
s(c, h, b, "⌢", "\\frown", !0);
s(c, h, b, "∋", "\\ni", !0);
s(c, h, b, "∝", "\\propto", !0);
s(c, h, b, "⊢", "\\vdash", !0);
s(c, h, b, "⊣", "\\dashv", !0);
s(c, h, b, "∋", "\\owns");
s(c, h, xt, ".", "\\ldotp");
s(c, h, xt, "⋅", "\\cdotp");
s(c, h, k, "#", "\\#");
s(C, h, k, "#", "\\#");
s(c, h, k, "&", "\\&");
s(C, h, k, "&", "\\&");
s(c, h, k, "ℵ", "\\aleph", !0);
s(c, h, k, "∀", "\\forall", !0);
s(c, h, k, "ℏ", "\\hbar", !0);
s(c, h, k, "∃", "\\exists", !0);
s(c, h, k, "∇", "\\nabla", !0);
s(c, h, k, "♭", "\\flat", !0);
s(c, h, k, "ℓ", "\\ell", !0);
s(c, h, k, "♮", "\\natural", !0);
s(c, h, k, "♣", "\\clubsuit", !0);
s(c, h, k, "℘", "\\wp", !0);
s(c, h, k, "♯", "\\sharp", !0);
s(c, h, k, "♢", "\\diamondsuit", !0);
s(c, h, k, "ℜ", "\\Re", !0);
s(c, h, k, "♡", "\\heartsuit", !0);
s(c, h, k, "ℑ", "\\Im", !0);
s(c, h, k, "♠", "\\spadesuit", !0);
s(c, h, k, "§", "\\S", !0);
s(C, h, k, "§", "\\S");
s(c, h, k, "¶", "\\P", !0);
s(C, h, k, "¶", "\\P");
s(c, h, k, "†", "\\dag");
s(C, h, k, "†", "\\dag");
s(C, h, k, "†", "\\textdagger");
s(c, h, k, "‡", "\\ddag");
s(C, h, k, "‡", "\\ddag");
s(C, h, k, "‡", "\\textdaggerdbl");
s(c, h, he, "⎱", "\\rmoustache", !0);
s(c, h, xe, "⎰", "\\lmoustache", !0);
s(c, h, he, "⟯", "\\rgroup", !0);
s(c, h, xe, "⟮", "\\lgroup", !0);
s(c, h, R, "∓", "\\mp", !0);
s(c, h, R, "⊖", "\\ominus", !0);
s(c, h, R, "⊎", "\\uplus", !0);
s(c, h, R, "⊓", "\\sqcap", !0);
s(c, h, R, "∗", "\\ast");
s(c, h, R, "⊔", "\\sqcup", !0);
s(c, h, R, "◯", "\\bigcirc", !0);
s(c, h, R, "∙", "\\bullet", !0);
s(c, h, R, "‡", "\\ddagger");
s(c, h, R, "≀", "\\wr", !0);
s(c, h, R, "⨿", "\\amalg");
s(c, h, R, "&", "\\And");
s(c, h, b, "⟵", "\\longleftarrow", !0);
s(c, h, b, "⇐", "\\Leftarrow", !0);
s(c, h, b, "⟸", "\\Longleftarrow", !0);
s(c, h, b, "⟶", "\\longrightarrow", !0);
s(c, h, b, "⇒", "\\Rightarrow", !0);
s(c, h, b, "⟹", "\\Longrightarrow", !0);
s(c, h, b, "↔", "\\leftrightarrow", !0);
s(c, h, b, "⟷", "\\longleftrightarrow", !0);
s(c, h, b, "⇔", "\\Leftrightarrow", !0);
s(c, h, b, "⟺", "\\Longleftrightarrow", !0);
s(c, h, b, "↦", "\\mapsto", !0);
s(c, h, b, "⟼", "\\longmapsto", !0);
s(c, h, b, "↗", "\\nearrow", !0);
s(c, h, b, "↩", "\\hookleftarrow", !0);
s(c, h, b, "↪", "\\hookrightarrow", !0);
s(c, h, b, "↘", "\\searrow", !0);
s(c, h, b, "↼", "\\leftharpoonup", !0);
s(c, h, b, "⇀", "\\rightharpoonup", !0);
s(c, h, b, "↙", "\\swarrow", !0);
s(c, h, b, "↽", "\\leftharpoondown", !0);
s(c, h, b, "⇁", "\\rightharpoondown", !0);
s(c, h, b, "↖", "\\nwarrow", !0);
s(c, h, b, "⇌", "\\rightleftharpoons", !0);
s(c, g, b, "≮", "\\nless", !0);
s(c, g, b, "", "\\@nleqslant");
s(c, g, b, "", "\\@nleqq");
s(c, g, b, "⪇", "\\lneq", !0);
s(c, g, b, "≨", "\\lneqq", !0);
s(c, g, b, "", "\\@lvertneqq");
s(c, g, b, "⋦", "\\lnsim", !0);
s(c, g, b, "⪉", "\\lnapprox", !0);
s(c, g, b, "⊀", "\\nprec", !0);
s(c, g, b, "⋠", "\\npreceq", !0);
s(c, g, b, "⋨", "\\precnsim", !0);
s(c, g, b, "⪹", "\\precnapprox", !0);
s(c, g, b, "≁", "\\nsim", !0);
s(c, g, b, "", "\\@nshortmid");
s(c, g, b, "∤", "\\nmid", !0);
s(c, g, b, "⊬", "\\nvdash", !0);
s(c, g, b, "⊭", "\\nvDash", !0);
s(c, g, b, "⋪", "\\ntriangleleft");
s(c, g, b, "⋬", "\\ntrianglelefteq", !0);
s(c, g, b, "⊊", "\\subsetneq", !0);
s(c, g, b, "", "\\@varsubsetneq");
s(c, g, b, "⫋", "\\subsetneqq", !0);
s(c, g, b, "", "\\@varsubsetneqq");
s(c, g, b, "≯", "\\ngtr", !0);
s(c, g, b, "", "\\@ngeqslant");
s(c, g, b, "", "\\@ngeqq");
s(c, g, b, "⪈", "\\gneq", !0);
s(c, g, b, "≩", "\\gneqq", !0);
s(c, g, b, "", "\\@gvertneqq");
s(c, g, b, "⋧", "\\gnsim", !0);
s(c, g, b, "⪊", "\\gnapprox", !0);
s(c, g, b, "⊁", "\\nsucc", !0);
s(c, g, b, "⋡", "\\nsucceq", !0);
s(c, g, b, "⋩", "\\succnsim", !0);
s(c, g, b, "⪺", "\\succnapprox", !0);
s(c, g, b, "≆", "\\ncong", !0);
s(c, g, b, "", "\\@nshortparallel");
s(c, g, b, "∦", "\\nparallel", !0);
s(c, g, b, "⊯", "\\nVDash", !0);
s(c, g, b, "⋫", "\\ntriangleright");
s(c, g, b, "⋭", "\\ntrianglerighteq", !0);
s(c, g, b, "", "\\@nsupseteqq");
s(c, g, b, "⊋", "\\supsetneq", !0);
s(c, g, b, "", "\\@varsupsetneq");
s(c, g, b, "⫌", "\\supsetneqq", !0);
s(c, g, b, "", "\\@varsupsetneqq");
s(c, g, b, "⊮", "\\nVdash", !0);
s(c, g, b, "⪵", "\\precneqq", !0);
s(c, g, b, "⪶", "\\succneqq", !0);
s(c, g, b, "", "\\@nsubseteqq");
s(c, g, R, "⊴", "\\unlhd");
s(c, g, R, "⊵", "\\unrhd");
s(c, g, b, "↚", "\\nleftarrow", !0);
s(c, g, b, "↛", "\\nrightarrow", !0);
s(c, g, b, "⇍", "\\nLeftarrow", !0);
s(c, g, b, "⇏", "\\nRightarrow", !0);
s(c, g, b, "↮", "\\nleftrightarrow", !0);
s(c, g, b, "⇎", "\\nLeftrightarrow", !0);
s(c, g, b, "△", "\\vartriangle");
s(c, g, k, "ℏ", "\\hslash");
s(c, g, k, "▽", "\\triangledown");
s(c, g, k, "◊", "\\lozenge");
s(c, g, k, "Ⓢ", "\\circledS");
s(c, g, k, "®", "\\circledR");
s(C, g, k, "®", "\\circledR");
s(c, g, k, "∡", "\\measuredangle", !0);
s(c, g, k, "∄", "\\nexists");
s(c, g, k, "℧", "\\mho");
s(c, g, k, "Ⅎ", "\\Finv", !0);
s(c, g, k, "⅁", "\\Game", !0);
s(c, g, k, "‵", "\\backprime");
s(c, g, k, "▲", "\\blacktriangle");
s(c, g, k, "▼", "\\blacktriangledown");
s(c, g, k, "■", "\\blacksquare");
s(c, g, k, "⧫", "\\blacklozenge");
s(c, g, k, "★", "\\bigstar");
s(c, g, k, "∢", "\\sphericalangle", !0);
s(c, g, k, "∁", "\\complement", !0);
s(c, g, k, "ð", "\\eth", !0);
s(C, h, k, "ð", "ð");
s(c, g, k, "╱", "\\diagup");
s(c, g, k, "╲", "\\diagdown");
s(c, g, k, "□", "\\square");
s(c, g, k, "□", "\\Box");
s(c, g, k, "◊", "\\Diamond");
s(c, g, k, "¥", "\\yen", !0);
s(C, g, k, "¥", "\\yen", !0);
s(c, g, k, "✓", "\\checkmark", !0);
s(C, g, k, "✓", "\\checkmark");
s(c, g, k, "ℶ", "\\beth", !0);
s(c, g, k, "ℸ", "\\daleth", !0);
s(c, g, k, "ℷ", "\\gimel", !0);
s(c, g, k, "ϝ", "\\digamma", !0);
s(c, g, k, "ϰ", "\\varkappa");
s(c, g, xe, "┌", "\\@ulcorner", !0);
s(c, g, he, "┐", "\\@urcorner", !0);
s(c, g, xe, "└", "\\@llcorner", !0);
s(c, g, he, "┘", "\\@lrcorner", !0);
s(c, g, b, "≦", "\\leqq", !0);
s(c, g, b, "⩽", "\\leqslant", !0);
s(c, g, b, "⪕", "\\eqslantless", !0);
s(c, g, b, "≲", "\\lesssim", !0);
s(c, g, b, "⪅", "\\lessapprox", !0);
s(c, g, b, "≊", "\\approxeq", !0);
s(c, g, R, "⋖", "\\lessdot");
s(c, g, b, "⋘", "\\lll", !0);
s(c, g, b, "≶", "\\lessgtr", !0);
s(c, g, b, "⋚", "\\lesseqgtr", !0);
s(c, g, b, "⪋", "\\lesseqqgtr", !0);
s(c, g, b, "≑", "\\doteqdot");
s(c, g, b, "≓", "\\risingdotseq", !0);
s(c, g, b, "≒", "\\fallingdotseq", !0);
s(c, g, b, "∽", "\\backsim", !0);
s(c, g, b, "⋍", "\\backsimeq", !0);
s(c, g, b, "⫅", "\\subseteqq", !0);
s(c, g, b, "⋐", "\\Subset", !0);
s(c, g, b, "⊏", "\\sqsubset", !0);
s(c, g, b, "≼", "\\preccurlyeq", !0);
s(c, g, b, "⋞", "\\curlyeqprec", !0);
s(c, g, b, "≾", "\\precsim", !0);
s(c, g, b, "⪷", "\\precapprox", !0);
s(c, g, b, "⊲", "\\vartriangleleft");
s(c, g, b, "⊴", "\\trianglelefteq");
s(c, g, b, "⊨", "\\vDash", !0);
s(c, g, b, "⊪", "\\Vvdash", !0);
s(c, g, b, "⌣", "\\smallsmile");
s(c, g, b, "⌢", "\\smallfrown");
s(c, g, b, "≏", "\\bumpeq", !0);
s(c, g, b, "≎", "\\Bumpeq", !0);
s(c, g, b, "≧", "\\geqq", !0);
s(c, g, b, "⩾", "\\geqslant", !0);
s(c, g, b, "⪖", "\\eqslantgtr", !0);
s(c, g, b, "≳", "\\gtrsim", !0);
s(c, g, b, "⪆", "\\gtrapprox", !0);
s(c, g, R, "⋗", "\\gtrdot");
s(c, g, b, "⋙", "\\ggg", !0);
s(c, g, b, "≷", "\\gtrless", !0);
s(c, g, b, "⋛", "\\gtreqless", !0);
s(c, g, b, "⪌", "\\gtreqqless", !0);
s(c, g, b, "≖", "\\eqcirc", !0);
s(c, g, b, "≗", "\\circeq", !0);
s(c, g, b, "≜", "\\triangleq", !0);
s(c, g, b, "∼", "\\thicksim");
s(c, g, b, "≈", "\\thickapprox");
s(c, g, b, "⫆", "\\supseteqq", !0);
s(c, g, b, "⋑", "\\Supset", !0);
s(c, g, b, "⊐", "\\sqsupset", !0);
s(c, g, b, "≽", "\\succcurlyeq", !0);
s(c, g, b, "⋟", "\\curlyeqsucc", !0);
s(c, g, b, "≿", "\\succsim", !0);
s(c, g, b, "⪸", "\\succapprox", !0);
s(c, g, b, "⊳", "\\vartriangleright");
s(c, g, b, "⊵", "\\trianglerighteq");
s(c, g, b, "⊩", "\\Vdash", !0);
s(c, g, b, "∣", "\\shortmid");
s(c, g, b, "∥", "\\shortparallel");
s(c, g, b, "≬", "\\between", !0);
s(c, g, b, "⋔", "\\pitchfork", !0);
s(c, g, b, "∝", "\\varpropto");
s(c, g, b, "◀", "\\blacktriangleleft");
s(c, g, b, "∴", "\\therefore", !0);
s(c, g, b, "∍", "\\backepsilon");
s(c, g, b, "▶", "\\blacktriangleright");
s(c, g, b, "∵", "\\because", !0);
s(c, g, b, "⋘", "\\llless");
s(c, g, b, "⋙", "\\gggtr");
s(c, g, R, "⊲", "\\lhd");
s(c, g, R, "⊳", "\\rhd");
s(c, g, b, "≂", "\\eqsim", !0);
s(c, h, b, "⋈", "\\Join");
s(c, g, b, "≑", "\\Doteq", !0);
s(c, g, R, "∔", "\\dotplus", !0);
s(c, g, R, "∖", "\\smallsetminus");
s(c, g, R, "⋒", "\\Cap", !0);
s(c, g, R, "⋓", "\\Cup", !0);
s(c, g, R, "⩞", "\\doublebarwedge", !0);
s(c, g, R, "⊟", "\\boxminus", !0);
s(c, g, R, "⊞", "\\boxplus", !0);
s(c, g, R, "⋇", "\\divideontimes", !0);
s(c, g, R, "⋉", "\\ltimes", !0);
s(c, g, R, "⋊", "\\rtimes", !0);
s(c, g, R, "⋋", "\\leftthreetimes", !0);
s(c, g, R, "⋌", "\\rightthreetimes", !0);
s(c, g, R, "⋏", "\\curlywedge", !0);
s(c, g, R, "⋎", "\\curlyvee", !0);
s(c, g, R, "⊝", "\\circleddash", !0);
s(c, g, R, "⊛", "\\circledast", !0);
s(c, g, R, "⋅", "\\centerdot");
s(c, g, R, "⊺", "\\intercal", !0);
s(c, g, R, "⋒", "\\doublecap");
s(c, g, R, "⋓", "\\doublecup");
s(c, g, R, "⊠", "\\boxtimes", !0);
s(c, g, b, "⇢", "\\dashrightarrow", !0);
s(c, g, b, "⇠", "\\dashleftarrow", !0);
s(c, g, b, "⇇", "\\leftleftarrows", !0);
s(c, g, b, "⇆", "\\leftrightarrows", !0);
s(c, g, b, "⇚", "\\Lleftarrow", !0);
s(c, g, b, "↞", "\\twoheadleftarrow", !0);
s(c, g, b, "↢", "\\leftarrowtail", !0);
s(c, g, b, "↫", "\\looparrowleft", !0);
s(c, g, b, "⇋", "\\leftrightharpoons", !0);
s(c, g, b, "↶", "\\curvearrowleft", !0);
s(c, g, b, "↺", "\\circlearrowleft", !0);
s(c, g, b, "↰", "\\Lsh", !0);
s(c, g, b, "⇈", "\\upuparrows", !0);
s(c, g, b, "↿", "\\upharpoonleft", !0);
s(c, g, b, "⇃", "\\downharpoonleft", !0);
s(c, h, b, "⊶", "\\origof", !0);
s(c, h, b, "⊷", "\\imageof", !0);
s(c, g, b, "⊸", "\\multimap", !0);
s(c, g, b, "↭", "\\leftrightsquigarrow", !0);
s(c, g, b, "⇉", "\\rightrightarrows", !0);
s(c, g, b, "⇄", "\\rightleftarrows", !0);
s(c, g, b, "↠", "\\twoheadrightarrow", !0);
s(c, g, b, "↣", "\\rightarrowtail", !0);
s(c, g, b, "↬", "\\looparrowright", !0);
s(c, g, b, "↷", "\\curvearrowright", !0);
s(c, g, b, "↻", "\\circlearrowright", !0);
s(c, g, b, "↱", "\\Rsh", !0);
s(c, g, b, "⇊", "\\downdownarrows", !0);
s(c, g, b, "↾", "\\upharpoonright", !0);
s(c, g, b, "⇂", "\\downharpoonright", !0);
s(c, g, b, "⇝", "\\rightsquigarrow", !0);
s(c, g, b, "⇝", "\\leadsto");
s(c, g, b, "⇛", "\\Rrightarrow", !0);
s(c, g, b, "↾", "\\restriction");
s(c, h, k, "‘", "`");
s(c, h, k, "$", "\\$");
s(C, h, k, "$", "\\$");
s(C, h, k, "$", "\\textdollar");
s(c, h, k, "%", "\\%");
s(C, h, k, "%", "\\%");
s(c, h, k, "_", "\\_");
s(C, h, k, "_", "\\_");
s(C, h, k, "_", "\\textunderscore");
s(c, h, k, "∠", "\\angle", !0);
s(c, h, k, "∞", "\\infty", !0);
s(c, h, k, "′", "\\prime");
s(c, h, k, "△", "\\triangle");
s(c, h, k, "Γ", "\\Gamma", !0);
s(c, h, k, "Δ", "\\Delta", !0);
s(c, h, k, "Θ", "\\Theta", !0);
s(c, h, k, "Λ", "\\Lambda", !0);
s(c, h, k, "Ξ", "\\Xi", !0);
s(c, h, k, "Π", "\\Pi", !0);
s(c, h, k, "Σ", "\\Sigma", !0);
s(c, h, k, "Υ", "\\Upsilon", !0);
s(c, h, k, "Φ", "\\Phi", !0);
s(c, h, k, "Ψ", "\\Psi", !0);
s(c, h, k, "Ω", "\\Omega", !0);
s(c, h, k, "A", "Α");
s(c, h, k, "B", "Β");
s(c, h, k, "E", "Ε");
s(c, h, k, "Z", "Ζ");
s(c, h, k, "H", "Η");
s(c, h, k, "I", "Ι");
s(c, h, k, "K", "Κ");
s(c, h, k, "M", "Μ");
s(c, h, k, "N", "Ν");
s(c, h, k, "O", "Ο");
s(c, h, k, "P", "Ρ");
s(c, h, k, "T", "Τ");
s(c, h, k, "X", "Χ");
s(c, h, k, "¬", "\\neg", !0);
s(c, h, k, "¬", "\\lnot");
s(c, h, k, "⊤", "\\top");
s(c, h, k, "⊥", "\\bot");
s(c, h, k, "∅", "\\emptyset");
s(c, g, k, "∅", "\\varnothing");
s(c, h, H, "α", "\\alpha", !0);
s(c, h, H, "β", "\\beta", !0);
s(c, h, H, "γ", "\\gamma", !0);
s(c, h, H, "δ", "\\delta", !0);
s(c, h, H, "ϵ", "\\epsilon", !0);
s(c, h, H, "ζ", "\\zeta", !0);
s(c, h, H, "η", "\\eta", !0);
s(c, h, H, "θ", "\\theta", !0);
s(c, h, H, "ι", "\\iota", !0);
s(c, h, H, "κ", "\\kappa", !0);
s(c, h, H, "λ", "\\lambda", !0);
s(c, h, H, "μ", "\\mu", !0);
s(c, h, H, "ν", "\\nu", !0);
s(c, h, H, "ξ", "\\xi", !0);
s(c, h, H, "ο", "\\omicron", !0);
s(c, h, H, "π", "\\pi", !0);
s(c, h, H, "ρ", "\\rho", !0);
s(c, h, H, "σ", "\\sigma", !0);
s(c, h, H, "τ", "\\tau", !0);
s(c, h, H, "υ", "\\upsilon", !0);
s(c, h, H, "ϕ", "\\phi", !0);
s(c, h, H, "χ", "\\chi", !0);
s(c, h, H, "ψ", "\\psi", !0);
s(c, h, H, "ω", "\\omega", !0);
s(c, h, H, "ε", "\\varepsilon", !0);
s(c, h, H, "ϑ", "\\vartheta", !0);
s(c, h, H, "ϖ", "\\varpi", !0);
s(c, h, H, "ϱ", "\\varrho", !0);
s(c, h, H, "ς", "\\varsigma", !0);
s(c, h, H, "φ", "\\varphi", !0);
s(c, h, R, "∗", "*", !0);
s(c, h, R, "+", "+");
s(c, h, R, "−", "-", !0);
s(c, h, R, "⋅", "\\cdot", !0);
s(c, h, R, "∘", "\\circ", !0);
s(c, h, R, "÷", "\\div", !0);
s(c, h, R, "±", "\\pm", !0);
s(c, h, R, "×", "\\times", !0);
s(c, h, R, "∩", "\\cap", !0);
s(c, h, R, "∪", "\\cup", !0);
s(c, h, R, "∖", "\\setminus", !0);
s(c, h, R, "∧", "\\land");
s(c, h, R, "∨", "\\lor");
s(c, h, R, "∧", "\\wedge", !0);
s(c, h, R, "∨", "\\vee", !0);
s(c, h, k, "√", "\\surd");
s(c, h, xe, "⟨", "\\langle", !0);
s(c, h, xe, "∣", "\\lvert");
s(c, h, xe, "∥", "\\lVert");
s(c, h, he, "?", "?");
s(c, h, he, "!", "!");
s(c, h, he, "⟩", "\\rangle", !0);
s(c, h, he, "∣", "\\rvert");
s(c, h, he, "∥", "\\rVert");
s(c, h, b, "=", "=");
s(c, h, b, ":", ":");
s(c, h, b, "≈", "\\approx", !0);
s(c, h, b, "≅", "\\cong", !0);
s(c, h, b, "≥", "\\ge");
s(c, h, b, "≥", "\\geq", !0);
s(c, h, b, "←", "\\gets");
s(c, h, b, ">", "\\gt", !0);
s(c, h, b, "∈", "\\in", !0);
s(c, h, b, "", "\\@not");
s(c, h, b, "⊂", "\\subset", !0);
s(c, h, b, "⊃", "\\supset", !0);
s(c, h, b, "⊆", "\\subseteq", !0);
s(c, h, b, "⊇", "\\supseteq", !0);
s(c, g, b, "⊈", "\\nsubseteq", !0);
s(c, g, b, "⊉", "\\nsupseteq", !0);
s(c, h, b, "⊨", "\\models");
s(c, h, b, "←", "\\leftarrow", !0);
s(c, h, b, "≤", "\\le");
s(c, h, b, "≤", "\\leq", !0);
s(c, h, b, "<", "\\lt", !0);
s(c, h, b, "→", "\\rightarrow", !0);
s(c, h, b, "→", "\\to");
s(c, g, b, "≱", "\\ngeq", !0);
s(c, g, b, "≰", "\\nleq", !0);
s(c, h, We, " ", "\\ ");
s(c, h, We, " ", "\\space");
s(c, h, We, " ", "\\nobreakspace");
s(C, h, We, " ", "\\ ");
s(C, h, We, " ", " ");
s(C, h, We, " ", "\\space");
s(C, h, We, " ", "\\nobreakspace");
s(c, h, We, null, "\\nobreak");
s(c, h, We, null, "\\allowbreak");
s(c, h, xt, ",", ",");
s(c, h, xt, ";", ";");
s(c, g, R, "⊼", "\\barwedge", !0);
s(c, g, R, "⊻", "\\veebar", !0);
s(c, h, R, "⊙", "\\odot", !0);
s(c, h, R, "⊕", "\\oplus", !0);
s(c, h, R, "⊗", "\\otimes", !0);
s(c, h, k, "∂", "\\partial", !0);
s(c, h, R, "⊘", "\\oslash", !0);
s(c, g, R, "⊚", "\\circledcirc", !0);
s(c, g, R, "⊡", "\\boxdot", !0);
s(c, h, R, "△", "\\bigtriangleup");
s(c, h, R, "▽", "\\bigtriangledown");
s(c, h, R, "†", "\\dagger");
s(c, h, R, "⋄", "\\diamond");
s(c, h, R, "⋆", "\\star");
s(c, h, R, "◃", "\\triangleleft");
s(c, h, R, "▹", "\\triangleright");
s(c, h, xe, "{", "\\{");
s(C, h, k, "{", "\\{");
s(C, h, k, "{", "\\textbraceleft");
s(c, h, he, "}", "\\}");
s(C, h, k, "}", "\\}");
s(C, h, k, "}", "\\textbraceright");
s(c, h, xe, "{", "\\lbrace");
s(c, h, he, "}", "\\rbrace");
s(c, h, xe, "[", "\\lbrack", !0);
s(C, h, k, "[", "\\lbrack", !0);
s(c, h, he, "]", "\\rbrack", !0);
s(C, h, k, "]", "\\rbrack", !0);
s(c, h, xe, "(", "\\lparen", !0);
s(c, h, he, ")", "\\rparen", !0);
s(C, h, k, "<", "\\textless", !0);
s(C, h, k, ">", "\\textgreater", !0);
s(c, h, xe, "⌊", "\\lfloor", !0);
s(c, h, he, "⌋", "\\rfloor", !0);
s(c, h, xe, "⌈", "\\lceil", !0);
s(c, h, he, "⌉", "\\rceil", !0);
s(c, h, k, "\\", "\\backslash");
s(c, h, k, "∣", "|");
s(c, h, k, "∣", "\\vert");
s(C, h, k, "|", "\\textbar", !0);
s(c, h, k, "∥", "\\|");
s(c, h, k, "∥", "\\Vert");
s(C, h, k, "∥", "\\textbardbl");
s(C, h, k, "~", "\\textasciitilde");
s(C, h, k, "\\", "\\textbackslash");
s(C, h, k, "^", "\\textasciicircum");
s(c, h, b, "↑", "\\uparrow", !0);
s(c, h, b, "⇑", "\\Uparrow", !0);
s(c, h, b, "↓", "\\downarrow", !0);
s(c, h, b, "⇓", "\\Downarrow", !0);
s(c, h, b, "↕", "\\updownarrow", !0);
s(c, h, b, "⇕", "\\Updownarrow", !0);
s(c, h, le, "∐", "\\coprod");
s(c, h, le, "⋁", "\\bigvee");
s(c, h, le, "⋀", "\\bigwedge");
s(c, h, le, "⨄", "\\biguplus");
s(c, h, le, "⋂", "\\bigcap");
s(c, h, le, "⋃", "\\bigcup");
s(c, h, le, "∫", "\\int");
s(c, h, le, "∫", "\\intop");
s(c, h, le, "∬", "\\iint");
s(c, h, le, "∭", "\\iiint");
s(c, h, le, "∏", "\\prod");
s(c, h, le, "∑", "\\sum");
s(c, h, le, "⨂", "\\bigotimes");
s(c, h, le, "⨁", "\\bigoplus");
s(c, h, le, "⨀", "\\bigodot");
s(c, h, le, "∮", "\\oint");
s(c, h, le, "∯", "\\oiint");
s(c, h, le, "∰", "\\oiiint");
s(c, h, le, "⨆", "\\bigsqcup");
s(c, h, le, "∫", "\\smallint");
s(C, h, A0, "…", "\\textellipsis");
s(c, h, A0, "…", "\\mathellipsis");
s(C, h, A0, "…", "\\ldots", !0);
s(c, h, A0, "…", "\\ldots", !0);
s(c, h, A0, "⋯", "\\@cdots", !0);
s(c, h, A0, "⋱", "\\ddots", !0);
s(c, h, k, "⋮", "\\varvdots");
s(c, h, J, "ˊ", "\\acute");
s(c, h, J, "ˋ", "\\grave");
s(c, h, J, "¨", "\\ddot");
s(c, h, J, "~", "\\tilde");
s(c, h, J, "ˉ", "\\bar");
s(c, h, J, "˘", "\\breve");
s(c, h, J, "ˇ", "\\check");
s(c, h, J, "^", "\\hat");
s(c, h, J, "⃗", "\\vec");
s(c, h, J, "˙", "\\dot");
s(c, h, J, "˚", "\\mathring");
s(c, h, H, "", "\\@imath");
s(c, h, H, "", "\\@jmath");
s(c, h, k, "ı", "ı");
s(c, h, k, "ȷ", "ȷ");
s(C, h, k, "ı", "\\i", !0);
s(C, h, k, "ȷ", "\\j", !0);
s(C, h, k, "ß", "\\ss", !0);
s(C, h, k, "æ", "\\ae", !0);
s(C, h, k, "œ", "\\oe", !0);
s(C, h, k, "ø", "\\o", !0);
s(C, h, k, "Æ", "\\AE", !0);
s(C, h, k, "Œ", "\\OE", !0);
s(C, h, k, "Ø", "\\O", !0);
s(C, h, J, "ˊ", "\\'");
s(C, h, J, "ˋ", "\\`");
s(C, h, J, "ˆ", "\\^");
s(C, h, J, "˜", "\\~");
s(C, h, J, "ˉ", "\\=");
s(C, h, J, "˘", "\\u");
s(C, h, J, "˙", "\\.");
s(C, h, J, "¸", "\\c");
s(C, h, J, "˚", "\\r");
s(C, h, J, "ˇ", "\\v");
s(C, h, J, "¨", '\\"');
s(C, h, J, "˝", "\\H");
s(C, h, J, "◯", "\\textcircled");
var Da = { "--": !0, "---": !0, "``": !0, "''": !0 };
s(C, h, k, "–", "--", !0);
s(C, h, k, "–", "\\textendash");
s(C, h, k, "—", "---", !0);
s(C, h, k, "—", "\\textemdash");
s(C, h, k, "‘", "`", !0);
s(C, h, k, "‘", "\\textquoteleft");
s(C, h, k, "’", "'", !0);
s(C, h, k, "’", "\\textquoteright");
s(C, h, k, "“", "``", !0);
s(C, h, k, "“", "\\textquotedblleft");
s(C, h, k, "”", "''", !0);
s(C, h, k, "”", "\\textquotedblright");
s(c, h, k, "°", "\\degree", !0);
s(C, h, k, "°", "\\degree");
s(C, h, k, "°", "\\textdegree", !0);
s(c, h, k, "£", "\\pounds");
s(c, h, k, "£", "\\mathsterling", !0);
s(C, h, k, "£", "\\pounds");
s(C, h, k, "£", "\\textsterling", !0);
s(c, g, k, "✠", "\\maltese");
s(C, g, k, "✠", "\\maltese");
var on = '0123456789/@."';
for (var Lt = 0; Lt < on.length; Lt++) {
  var un = on.charAt(Lt);
  s(c, h, k, un, un);
}
var cn = '0123456789!@*()-=+";:?/.,';
for (var Rt = 0; Rt < cn.length; Rt++) {
  var hn = cn.charAt(Rt);
  s(C, h, k, hn, hn);
}
var dt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var qt = 0; qt < dt.length; qt++) {
  var Q0 = dt.charAt(qt);
  s(c, h, H, Q0, Q0), s(C, h, k, Q0, Q0);
}
s(c, g, k, "C", "ℂ");
s(C, g, k, "C", "ℂ");
s(c, g, k, "H", "ℍ");
s(C, g, k, "H", "ℍ");
s(c, g, k, "N", "ℕ");
s(C, g, k, "N", "ℕ");
s(c, g, k, "P", "ℙ");
s(C, g, k, "P", "ℙ");
s(c, g, k, "Q", "ℚ");
s(C, g, k, "Q", "ℚ");
s(c, g, k, "R", "ℝ");
s(C, g, k, "R", "ℝ");
s(c, g, k, "Z", "ℤ");
s(C, g, k, "Z", "ℤ");
s(c, h, H, "h", "ℎ");
s(C, h, H, "h", "ℎ");
var V = "";
for (var me = 0; me < dt.length; me++) {
  var ae = dt.charAt(me);
  (V = String.fromCharCode(55349, 56320 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56372 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56424 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56580 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56736 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56788 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56840 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    (V = String.fromCharCode(55349, 56944 + me)),
    s(c, h, H, ae, V),
    s(C, h, k, ae, V),
    me < 26 &&
      ((V = String.fromCharCode(55349, 56632 + me)),
      s(c, h, H, ae, V),
      s(C, h, k, ae, V),
      (V = String.fromCharCode(55349, 56476 + me)),
      s(c, h, H, ae, V),
      s(C, h, k, ae, V));
}
V = String.fromCharCode(55349, 56668);
s(c, h, H, "k", V);
s(C, h, k, "k", V);
for (var l0 = 0; l0 < 10; l0++) {
  var Je = l0.toString();
  (V = String.fromCharCode(55349, 57294 + l0)),
    s(c, h, H, Je, V),
    s(C, h, k, Je, V),
    (V = String.fromCharCode(55349, 57314 + l0)),
    s(c, h, H, Je, V),
    s(C, h, k, Je, V),
    (V = String.fromCharCode(55349, 57324 + l0)),
    s(c, h, H, Je, V),
    s(C, h, k, Je, V),
    (V = String.fromCharCode(55349, 57334 + l0)),
    s(c, h, H, Je, V),
    s(C, h, k, Je, V);
}
var lr = "ÐÞþ";
for (var It = 0; It < lr.length; It++) {
  var et = lr.charAt(It);
  s(c, h, H, et, et), s(C, h, k, et, et);
}
var tt = [
    ["mathbf", "textbf", "Main-Bold"],
    ["mathbf", "textbf", "Main-Bold"],
    ["mathnormal", "textit", "Math-Italic"],
    ["mathnormal", "textit", "Math-Italic"],
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
    ["mathscr", "textscr", "Script-Regular"],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["mathfrak", "textfrak", "Fraktur-Regular"],
    ["mathfrak", "textfrak", "Fraktur-Regular"],
    ["mathbb", "textbb", "AMS-Regular"],
    ["mathbb", "textbb", "AMS-Regular"],
    ["", "", ""],
    ["", "", ""],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathitsf", "textitsf", "SansSerif-Italic"],
    ["mathitsf", "textitsf", "SansSerif-Italic"],
    ["", "", ""],
    ["", "", ""],
    ["mathtt", "texttt", "Typewriter-Regular"],
    ["mathtt", "texttt", "Typewriter-Regular"],
  ],
  mn = [
    ["mathbf", "textbf", "Main-Bold"],
    ["", "", ""],
    ["mathsf", "textsf", "SansSerif-Regular"],
    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
    ["mathtt", "texttt", "Typewriter-Regular"],
  ],
  Cs = function (e, t) {
    var n = e.charCodeAt(0),
      a = e.charCodeAt(1),
      i = (n - 55296) * 1024 + (a - 56320) + 65536,
      l = t === "math" ? 0 : 1;
    if (119808 <= i && i < 120484) {
      var o = Math.floor((i - 119808) / 26);
      return [tt[o][2], tt[o][l]];
    } else if (120782 <= i && i <= 120831) {
      var u = Math.floor((i - 120782) / 10);
      return [mn[u][2], mn[u][l]];
    } else {
      if (i === 120485 || i === 120486) return [tt[0][2], tt[0][l]];
      if (120486 < i && i < 120782) return ["", ""];
      throw new F("Unsupported character: " + e);
    }
  },
  wt = function (e, t, n) {
    return (
      Z[n][e] && Z[n][e].replace && (e = Z[n][e].replace),
      { value: e, metrics: Ar(e, t, n) }
    );
  },
  Ce = function (e, t, n, a, i) {
    var l = wt(e, t, n),
      o = l.metrics;
    e = l.value;
    var u;
    if (o) {
      var m = o.italic;
      (n === "text" || (a && a.font === "mathit")) && (m = 0),
        (u = new Ae(e, o.height, o.depth, m, o.skew, o.width, i));
    } else
      typeof console < "u" &&
        console.warn(
          "No character metrics " +
            ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")
        ),
        (u = new Ae(e, 0, 0, 0, 0, 0, i));
    if (a) {
      (u.maxFontSize = a.sizeMultiplier),
        a.style.isTight() && u.classes.push("mtight");
      var d = a.getColor();
      d && (u.style.color = d);
    }
    return u;
  },
  Ds = function (e, t, n, a) {
    return (
      a === void 0 && (a = []),
      n.font === "boldsymbol" && wt(e, "Main-Bold", t).metrics
        ? Ce(e, "Main-Bold", t, n, a.concat(["mathbf"]))
        : e === "\\" || Z[t][e].font === "main"
        ? Ce(e, "Main-Regular", t, n, a)
        : Ce(e, "AMS-Regular", t, n, a.concat(["amsrm"]))
    );
  },
  Fs = function (e, t, n, a, i) {
    return i !== "textord" && wt(e, "Math-BoldItalic", t).metrics
      ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" }
      : { fontName: "Main-Bold", fontClass: "mathbf" };
  },
  Ns = function (e, t, n) {
    var a = e.mode,
      i = e.text,
      l = ["mord"],
      o = a === "math" || (a === "text" && t.font),
      u = o ? t.font : t.fontFamily;
    if (i.charCodeAt(0) === 55349) {
      var [m, d] = Cs(i, a);
      return Ce(i, m, a, t, l.concat(d));
    } else if (u) {
      var p, x;
      if (u === "boldsymbol") {
        var y = Fs(i, a, t, l, n);
        (p = y.fontName), (x = [y.fontClass]);
      } else
        o
          ? ((p = Ea[u].fontName), (x = [u]))
          : ((p = rt(u, t.fontWeight, t.fontShape)),
            (x = [u, t.fontWeight, t.fontShape]));
      if (wt(i, p, a).metrics) return Ce(i, p, a, t, l.concat(x));
      if (Da.hasOwnProperty(i) && p.slice(0, 10) === "Typewriter") {
        for (var v = [], w = 0; w < i.length; w++)
          v.push(Ce(i[w], p, a, t, l.concat(x)));
        return Na(v);
      }
    }
    if (n === "mathord")
      return Ce(i, "Math-Italic", a, t, l.concat(["mathnormal"]));
    if (n === "textord") {
      var A = Z[a][i] && Z[a][i].font;
      if (A === "ams") {
        var z = rt("amsrm", t.fontWeight, t.fontShape);
        return Ce(i, z, a, t, l.concat("amsrm", t.fontWeight, t.fontShape));
      } else if (A === "main" || !A) {
        var M = rt("textrm", t.fontWeight, t.fontShape);
        return Ce(i, M, a, t, l.concat(t.fontWeight, t.fontShape));
      } else {
        var L = rt(A, t.fontWeight, t.fontShape);
        return Ce(i, L, a, t, l.concat(L, t.fontWeight, t.fontShape));
      }
    } else throw new Error("unexpected type: " + n + " in makeOrd");
  },
  Es = (r, e) => {
    if (
      t0(r.classes) !== t0(e.classes) ||
      r.skew !== e.skew ||
      r.maxFontSize !== e.maxFontSize
    )
      return !1;
    if (r.classes.length === 1) {
      var t = r.classes[0];
      if (t === "mbin" || t === "mord") return !1;
    }
    for (var n in r.style)
      if (r.style.hasOwnProperty(n) && r.style[n] !== e.style[n]) return !1;
    for (var a in e.style)
      if (e.style.hasOwnProperty(a) && r.style[a] !== e.style[a]) return !1;
    return !0;
  },
  Bs = (r) => {
    for (var e = 0; e < r.length - 1; e++) {
      var t = r[e],
        n = r[e + 1];
      t instanceof Ae &&
        n instanceof Ae &&
        Es(t, n) &&
        ((t.text += n.text),
        (t.height = Math.max(t.height, n.height)),
        (t.depth = Math.max(t.depth, n.depth)),
        (t.italic = n.italic),
        r.splice(e + 1, 1),
        e--);
    }
    return r;
  },
  zr = function (e) {
    for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
      var l = e.children[i];
      l.height > t && (t = l.height),
        l.depth > n && (n = l.depth),
        l.maxFontSize > a && (a = l.maxFontSize);
    }
    (e.height = t), (e.depth = n), (e.maxFontSize = a);
  },
  de = function (e, t, n, a) {
    var i = new U0(e, t, n, a);
    return zr(i), i;
  },
  Fa = (r, e, t, n) => new U0(r, e, t, n),
  Os = function (e, t, n) {
    var a = de([e], [], t);
    return (
      (a.height = Math.max(
        n || t.fontMetrics().defaultRuleThickness,
        t.minRuleThickness
      )),
      (a.style.borderBottomWidth = E(a.height)),
      (a.maxFontSize = 1),
      a
    );
  },
  Ls = function (e, t, n, a) {
    var i = new Mr(e, t, n, a);
    return zr(i), i;
  },
  Na = function (e) {
    var t = new V0(e);
    return zr(t), t;
  },
  Rs = function (e, t) {
    return e instanceof V0 ? de([], [e], t) : e;
  },
  qs = function (e) {
    if (e.positionType === "individualShift") {
      for (
        var t = e.children,
          n = [t[0]],
          a = -t[0].shift - t[0].elem.depth,
          i = a,
          l = 1;
        l < t.length;
        l++
      ) {
        var o = -t[l].shift - i - t[l].elem.depth,
          u = o - (t[l - 1].elem.height + t[l - 1].elem.depth);
        (i = i + o), n.push({ type: "kern", size: u }), n.push(t[l]);
      }
      return { children: n, depth: a };
    }
    var m;
    if (e.positionType === "top") {
      for (var d = e.positionData, p = 0; p < e.children.length; p++) {
        var x = e.children[p];
        d -= x.type === "kern" ? x.size : x.elem.height + x.elem.depth;
      }
      m = d;
    } else if (e.positionType === "bottom") m = -e.positionData;
    else {
      var y = e.children[0];
      if (y.type !== "elem")
        throw new Error('First child must have type "elem".');
      if (e.positionType === "shift") m = -y.elem.depth - e.positionData;
      else if (e.positionType === "firstBaseline") m = -y.elem.depth;
      else throw new Error("Invalid positionType " + e.positionType + ".");
    }
    return { children: e.children, depth: m };
  },
  Is = function (e, t) {
    for (
      var { children: n, depth: a } = qs(e), i = 0, l = 0;
      l < n.length;
      l++
    ) {
      var o = n[l];
      if (o.type === "elem") {
        var u = o.elem;
        i = Math.max(i, u.maxFontSize, u.height);
      }
    }
    i += 2;
    var m = de(["pstrut"], []);
    m.style.height = E(i);
    for (var d = [], p = a, x = a, y = a, v = 0; v < n.length; v++) {
      var w = n[v];
      if (w.type === "kern") y += w.size;
      else {
        var A = w.elem,
          z = w.wrapperClasses || [],
          M = w.wrapperStyle || {},
          L = de(z, [m, A], void 0, M);
        (L.style.top = E(-i - y - A.depth)),
          w.marginLeft && (L.style.marginLeft = w.marginLeft),
          w.marginRight && (L.style.marginRight = w.marginRight),
          d.push(L),
          (y += A.height + A.depth);
      }
      (p = Math.min(p, y)), (x = Math.max(x, y));
    }
    var I = de(["vlist"], d);
    I.style.height = E(x);
    var O;
    if (p < 0) {
      var U = de([], []),
        q = de(["vlist"], [U]);
      q.style.height = E(-p);
      var Y = de(["vlist-s"], [new Ae("​")]);
      O = [de(["vlist-r"], [I, Y]), de(["vlist-r"], [q])];
    } else O = [de(["vlist-r"], [I])];
    var j = de(["vlist-t"], O);
    return (
      O.length === 2 && j.classes.push("vlist-t2"),
      (j.height = x),
      (j.depth = -p),
      j
    );
  },
  Ps = (r, e) => {
    var t = de(["mspace"], [], e),
      n = ee(r, e);
    return (t.style.marginRight = E(n)), t;
  },
  rt = function (e, t, n) {
    var a = "";
    switch (e) {
      case "amsrm":
        a = "AMS";
        break;
      case "textrm":
        a = "Main";
        break;
      case "textsf":
        a = "SansSerif";
        break;
      case "texttt":
        a = "Typewriter";
        break;
      default:
        a = e;
    }
    var i;
    return (
      t === "textbf" && n === "textit"
        ? (i = "BoldItalic")
        : t === "textbf"
        ? (i = "Bold")
        : t === "textit"
        ? (i = "Italic")
        : (i = "Regular"),
      a + "-" + i
    );
  },
  Ea = {
    mathbf: { variant: "bold", fontName: "Main-Bold" },
    mathrm: { variant: "normal", fontName: "Main-Regular" },
    textit: { variant: "italic", fontName: "Main-Italic" },
    mathit: { variant: "italic", fontName: "Main-Italic" },
    mathnormal: { variant: "italic", fontName: "Math-Italic" },
    mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
    mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
    mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
    mathscr: { variant: "script", fontName: "Script-Regular" },
    mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
    mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
  },
  Ba = {
    vec: ["vec", 0.471, 0.714],
    oiintSize1: ["oiintSize1", 0.957, 0.499],
    oiintSize2: ["oiintSize2", 1.472, 0.659],
    oiiintSize1: ["oiiintSize1", 1.304, 0.499],
    oiiintSize2: ["oiiintSize2", 1.98, 0.659],
  },
  Hs = function (e, t) {
    var [n, a, i] = Ba[e],
      l = new r0(n),
      o = new Ue([l], {
        width: E(a),
        height: E(i),
        style: "width:" + E(a),
        viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
        preserveAspectRatio: "xMinYMin",
      }),
      u = Fa(["overlay"], [o], t);
    return (u.height = i), (u.style.height = E(i)), (u.style.width = E(a)), u;
  },
  S = {
    fontMap: Ea,
    makeSymbol: Ce,
    mathsym: Ds,
    makeSpan: de,
    makeSvgSpan: Fa,
    makeLineSpan: Os,
    makeAnchor: Ls,
    makeFragment: Na,
    wrapFragment: Rs,
    makeVList: Is,
    makeOrd: Ns,
    makeGlue: Ps,
    staticSvg: Hs,
    svgData: Ba,
    tryCombineChars: Bs,
  },
  Q = { number: 3, unit: "mu" },
  s0 = { number: 4, unit: "mu" },
  Ie = { number: 5, unit: "mu" },
  $s = {
    mord: { mop: Q, mbin: s0, mrel: Ie, minner: Q },
    mop: { mord: Q, mop: Q, mrel: Ie, minner: Q },
    mbin: { mord: s0, mop: s0, mopen: s0, minner: s0 },
    mrel: { mord: Ie, mop: Ie, mopen: Ie, minner: Ie },
    mopen: {},
    mclose: { mop: Q, mbin: s0, mrel: Ie, minner: Q },
    mpunct: {
      mord: Q,
      mop: Q,
      mrel: Ie,
      mopen: Q,
      mclose: Q,
      mpunct: Q,
      minner: Q,
    },
    minner: {
      mord: Q,
      mop: Q,
      mbin: s0,
      mrel: Ie,
      mopen: Q,
      mpunct: Q,
      minner: Q,
    },
  },
  Vs = {
    mord: { mop: Q },
    mop: { mord: Q, mop: Q },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: { mop: Q },
    mpunct: {},
    minner: { mop: Q },
  },
  Oa = {},
  ft = {},
  pt = {};
function B(r) {
  for (
    var {
        type: e,
        names: t,
        props: n,
        handler: a,
        htmlBuilder: i,
        mathmlBuilder: l,
      } = r,
      o = {
        type: e,
        numArgs: n.numArgs,
        argTypes: n.argTypes,
        allowedInArgument: !!n.allowedInArgument,
        allowedInText: !!n.allowedInText,
        allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
        numOptionalArgs: n.numOptionalArgs || 0,
        infix: !!n.infix,
        primitive: !!n.primitive,
        handler: a,
      },
      u = 0;
    u < t.length;
    ++u
  )
    Oa[t[u]] = o;
  e && (i && (ft[e] = i), l && (pt[e] = l));
}
function h0(r) {
  var { type: e, htmlBuilder: t, mathmlBuilder: n } = r;
  B({
    type: e,
    names: [],
    props: { numArgs: 0 },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: n,
  });
}
var gt = function (e) {
    return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
  },
  ne = function (e) {
    return e.type === "ordgroup" ? e.body : [e];
  },
  je = S.makeSpan,
  Us = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
  js = ["rightmost", "mrel", "mclose", "mpunct"],
  Gs = {
    display: P.DISPLAY,
    text: P.TEXT,
    script: P.SCRIPT,
    scriptscript: P.SCRIPTSCRIPT,
  },
  Ws = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner",
  },
  oe = function (e, t, n, a) {
    a === void 0 && (a = [null, null]);
    for (var i = [], l = 0; l < e.length; l++) {
      var o = _(e[l], t);
      if (o instanceof V0) {
        var u = o.children;
        i.push(...u);
      } else i.push(o);
    }
    if ((S.tryCombineChars(i), !n)) return i;
    var m = t;
    if (e.length === 1) {
      var d = e[0];
      d.type === "sizing"
        ? (m = t.havingSize(d.size))
        : d.type === "styling" && (m = t.havingStyle(Gs[d.style]));
    }
    var p = je([a[0] || "leftmost"], [], t),
      x = je([a[1] || "rightmost"], [], t),
      y = n === "root";
    return (
      dn(
        i,
        (v, w) => {
          var A = w.classes[0],
            z = v.classes[0];
          A === "mbin" && $.contains(js, z)
            ? (w.classes[0] = "mord")
            : z === "mbin" && $.contains(Us, A) && (v.classes[0] = "mord");
        },
        { node: p },
        x,
        y
      ),
      dn(
        i,
        (v, w) => {
          var A = sr(w),
            z = sr(v),
            M = A && z ? (v.hasClass("mtight") ? Vs[A][z] : $s[A][z]) : null;
          if (M) return S.makeGlue(M, m);
        },
        { node: p },
        x,
        y
      ),
      i
    );
  },
  dn = function r(e, t, n, a, i) {
    a && e.push(a);
    for (var l = 0; l < e.length; l++) {
      var o = e[l],
        u = La(o);
      if (u) {
        r(u.children, t, n, null, i);
        continue;
      }
      var m = !o.hasClass("mspace");
      if (m) {
        var d = t(o, n.node);
        d && (n.insertAfter ? n.insertAfter(d) : (e.unshift(d), l++));
      }
      m
        ? (n.node = o)
        : i && o.hasClass("newline") && (n.node = je(["leftmost"])),
        (n.insertAfter = ((p) => (x) => {
          e.splice(p + 1, 0, x), l++;
        })(l));
    }
    a && e.pop();
  },
  La = function (e) {
    return e instanceof V0 ||
      e instanceof Mr ||
      (e instanceof U0 && e.hasClass("enclosing"))
      ? e
      : null;
  },
  _s = function r(e, t) {
    var n = La(e);
    if (n) {
      var a = n.children;
      if (a.length) {
        if (t === "right") return r(a[a.length - 1], "right");
        if (t === "left") return r(a[0], "left");
      }
    }
    return e;
  },
  sr = function (e, t) {
    return e ? (t && (e = _s(e, t)), Ws[e.classes[0]] || null) : null;
  },
  q0 = function (e, t) {
    var n = ["nulldelimiter"].concat(e.baseSizingClasses());
    return je(t.concat(n));
  },
  _ = function (e, t, n) {
    if (!e) return je();
    if (ft[e.type]) {
      var a = ft[e.type](e, t);
      if (n && t.size !== n.size) {
        a = je(t.sizingClasses(n), [a], t);
        var i = t.sizeMultiplier / n.sizeMultiplier;
        (a.height *= i), (a.depth *= i);
      }
      return a;
    } else throw new F("Got group of unknown type: '" + e.type + "'");
  };
function nt(r, e) {
  var t = je(["base"], r, e),
    n = je(["strut"]);
  return (
    (n.style.height = E(t.height + t.depth)),
    t.depth && (n.style.verticalAlign = E(-t.depth)),
    t.children.unshift(n),
    t
  );
}
function or(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && ((t = r[0].tag), (r = r[0].body));
  var n = oe(r, e, "root"),
    a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], l = [], o = 0; o < n.length; o++)
    if (
      (l.push(n[o]),
      n[o].hasClass("mbin") ||
        n[o].hasClass("mrel") ||
        n[o].hasClass("allowbreak"))
    ) {
      for (
        var u = !1;
        o < n.length - 1 &&
        n[o + 1].hasClass("mspace") &&
        !n[o + 1].hasClass("newline");

      )
        o++, l.push(n[o]), n[o].hasClass("nobreak") && (u = !0);
      u || (i.push(nt(l, e)), (l = []));
    } else
      n[o].hasClass("newline") &&
        (l.pop(), l.length > 0 && (i.push(nt(l, e)), (l = [])), i.push(n[o]));
  l.length > 0 && i.push(nt(l, e));
  var m;
  t
    ? ((m = nt(oe(t, e, !0))), (m.classes = ["tag"]), i.push(m))
    : a && i.push(a);
  var d = je(["katex-html"], i);
  if ((d.setAttribute("aria-hidden", "true"), m)) {
    var p = m.children[0];
    (p.style.height = E(d.height + d.depth)),
      d.depth && (p.style.verticalAlign = E(-d.depth));
  }
  return d;
}
function Ra(r) {
  return new V0(r);
}
class ke {
  constructor(e, t, n) {
    (this.type = void 0),
      (this.attributes = void 0),
      (this.children = void 0),
      (this.classes = void 0),
      (this.type = e),
      (this.attributes = {}),
      (this.children = t || []),
      (this.classes = n || []);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  toNode() {
    var e = document.createElementNS(
      "http://www.w3.org/1998/Math/MathML",
      this.type
    );
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = t0(this.classes));
    for (var n = 0; n < this.children.length; n++)
      e.appendChild(this.children[n].toNode());
    return e;
  }
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) &&
        ((e += " " + t + '="'),
        (e += $.escape(this.attributes[t])),
        (e += '"'));
    this.classes.length > 0 &&
      (e += ' class ="' + $.escape(t0(this.classes)) + '"'),
      (e += ">");
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return (e += "</" + this.type + ">"), e;
  }
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class N0 {
  constructor(e) {
    (this.text = void 0), (this.text = e);
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return $.escape(this.toText());
  }
  toText() {
    return this.text;
  }
}
class Ys {
  constructor(e) {
    (this.width = void 0),
      (this.character = void 0),
      (this.width = e),
      e >= 0.05555 && e <= 0.05556
        ? (this.character = " ")
        : e >= 0.1666 && e <= 0.1667
        ? (this.character = " ")
        : e >= 0.2222 && e <= 0.2223
        ? (this.character = " ")
        : e >= 0.2777 && e <= 0.2778
        ? (this.character = "  ")
        : e >= -0.05556 && e <= -0.05555
        ? (this.character = " ⁣")
        : e >= -0.1667 && e <= -0.1666
        ? (this.character = " ⁣")
        : e >= -0.2223 && e <= -0.2222
        ? (this.character = " ⁣")
        : e >= -0.2778 && e <= -0.2777
        ? (this.character = " ⁣")
        : (this.character = null);
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e = document.createElementNS(
      "http://www.w3.org/1998/Math/MathML",
      "mspace"
    );
    return e.setAttribute("width", E(this.width)), e;
  }
  toMarkup() {
    return this.character
      ? "<mtext>" + this.character + "</mtext>"
      : '<mspace width="' + E(this.width) + '"/>';
  }
  toText() {
    return this.character ? this.character : " ";
  }
}
var D = { MathNode: ke, TextNode: N0, SpaceNode: Ys, newDocumentFragment: Ra },
  Me = function (e, t, n) {
    return (
      Z[t][e] &&
        Z[t][e].replace &&
        e.charCodeAt(0) !== 55349 &&
        !(
          Da.hasOwnProperty(e) &&
          n &&
          ((n.fontFamily && n.fontFamily.slice(4, 6) === "tt") ||
            (n.font && n.font.slice(4, 6) === "tt"))
        ) &&
        (e = Z[t][e].replace),
      new D.TextNode(e)
    );
  },
  Tr = function (e) {
    return e.length === 1 ? e[0] : new D.MathNode("mrow", e);
  },
  Cr = function (e, t) {
    if (t.fontFamily === "texttt") return "monospace";
    if (t.fontFamily === "textsf")
      return t.fontShape === "textit" && t.fontWeight === "textbf"
        ? "sans-serif-bold-italic"
        : t.fontShape === "textit"
        ? "sans-serif-italic"
        : t.fontWeight === "textbf"
        ? "bold-sans-serif"
        : "sans-serif";
    if (t.fontShape === "textit" && t.fontWeight === "textbf")
      return "bold-italic";
    if (t.fontShape === "textit") return "italic";
    if (t.fontWeight === "textbf") return "bold";
    var n = t.font;
    if (!n || n === "mathnormal") return null;
    var a = e.mode;
    if (n === "mathit") return "italic";
    if (n === "boldsymbol")
      return e.type === "textord" ? "bold" : "bold-italic";
    if (n === "mathbf") return "bold";
    if (n === "mathbb") return "double-struck";
    if (n === "mathfrak") return "fraktur";
    if (n === "mathscr" || n === "mathcal") return "script";
    if (n === "mathsf") return "sans-serif";
    if (n === "mathtt") return "monospace";
    var i = e.text;
    if ($.contains(["\\imath", "\\jmath"], i)) return null;
    Z[a][i] && Z[a][i].replace && (i = Z[a][i].replace);
    var l = S.fontMap[n].fontName;
    return Ar(i, l, a) ? S.fontMap[n].variant : null;
  },
  pe = function (e, t, n) {
    if (e.length === 1) {
      var a = X(e[0], t);
      return (
        n &&
          a instanceof ke &&
          a.type === "mo" &&
          (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")),
        [a]
      );
    }
    for (var i = [], l, o = 0; o < e.length; o++) {
      var u = X(e[o], t);
      if (u instanceof ke && l instanceof ke) {
        if (
          u.type === "mtext" &&
          l.type === "mtext" &&
          u.getAttribute("mathvariant") === l.getAttribute("mathvariant")
        ) {
          l.children.push(...u.children);
          continue;
        } else if (u.type === "mn" && l.type === "mn") {
          l.children.push(...u.children);
          continue;
        } else if (
          u.type === "mi" &&
          u.children.length === 1 &&
          l.type === "mn"
        ) {
          var m = u.children[0];
          if (m instanceof N0 && m.text === ".") {
            l.children.push(...u.children);
            continue;
          }
        } else if (l.type === "mi" && l.children.length === 1) {
          var d = l.children[0];
          if (
            d instanceof N0 &&
            d.text === "̸" &&
            (u.type === "mo" || u.type === "mi" || u.type === "mn")
          ) {
            var p = u.children[0];
            p instanceof N0 &&
              p.text.length > 0 &&
              ((p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1)), i.pop());
          }
        }
      }
      i.push(u), (l = u);
    }
    return i;
  },
  n0 = function (e, t, n) {
    return Tr(pe(e, t, n));
  },
  X = function (e, t) {
    if (!e) return new D.MathNode("mrow");
    if (pt[e.type]) {
      var n = pt[e.type](e, t);
      return n;
    } else throw new F("Got group of unknown type: '" + e.type + "'");
  };
function fn(r, e, t, n, a) {
  var i = pe(r, t),
    l;
  i.length === 1 &&
  i[0] instanceof ke &&
  $.contains(["mrow", "mtable"], i[0].type)
    ? (l = i[0])
    : (l = new D.MathNode("mrow", i));
  var o = new D.MathNode("annotation", [new D.TextNode(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var u = new D.MathNode("semantics", [l, o]),
    m = new D.MathNode("math", [u]);
  m.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
    n && m.setAttribute("display", "block");
  var d = a ? "katex" : "katex-mathml";
  return S.makeSpan([d], [m]);
}
var qa = function (e) {
    return new Pe({
      style: e.displayMode ? P.DISPLAY : P.TEXT,
      maxSize: e.maxSize,
      minRuleThickness: e.minRuleThickness,
    });
  },
  Ia = function (e, t) {
    if (t.displayMode) {
      var n = ["katex-display"];
      t.leqno && n.push("leqno"),
        t.fleqn && n.push("fleqn"),
        (e = S.makeSpan(n, [e]));
    }
    return e;
  },
  Xs = function (e, t, n) {
    var a = qa(n),
      i;
    if (n.output === "mathml") return fn(e, t, a, n.displayMode, !0);
    if (n.output === "html") {
      var l = or(e, a);
      i = S.makeSpan(["katex"], [l]);
    } else {
      var o = fn(e, t, a, n.displayMode, !1),
        u = or(e, a);
      i = S.makeSpan(["katex"], [o, u]);
    }
    return Ia(i, n);
  },
  Zs = function (e, t, n) {
    var a = qa(n),
      i = or(e, a),
      l = S.makeSpan(["katex"], [i]);
    return Ia(l, n);
  },
  Ks = {
    "widehat": "^",
    "widecheck": "ˇ",
    "widetilde": "~",
    "utilde": "~",
    "overleftarrow": "←",
    "underleftarrow": "←",
    "xleftarrow": "←",
    "overrightarrow": "→",
    "underrightarrow": "→",
    "xrightarrow": "→",
    "underbrace": "⏟",
    "overbrace": "⏞",
    "overgroup": "⏠",
    "undergroup": "⏡",
    "overleftrightarrow": "↔",
    "underleftrightarrow": "↔",
    "xleftrightarrow": "↔",
    "Overrightarrow": "⇒",
    "xRightarrow": "⇒",
    "overleftharpoon": "↼",
    "xleftharpoonup": "↼",
    "overrightharpoon": "⇀",
    "xrightharpoonup": "⇀",
    "xLeftarrow": "⇐",
    "xLeftrightarrow": "⇔",
    "xhookleftarrow": "↩",
    "xhookrightarrow": "↪",
    "xmapsto": "↦",
    "xrightharpoondown": "⇁",
    "xleftharpoondown": "↽",
    "xrightleftharpoons": "⇌",
    "xleftrightharpoons": "⇋",
    "xtwoheadleftarrow": "↞",
    "xtwoheadrightarrow": "↠",
    "xlongequal": "=",
    "xtofrom": "⇄",
    "xrightleftarrows": "⇄",
    "xrightequilibrium": "⇌",
    "xleftequilibrium": "⇋",
    "\\cdrightarrow": "→",
    "\\cdleftarrow": "←",
    "\\cdlongequal": "=",
  },
  Js = function (e) {
    var t = new D.MathNode("mo", [new D.TextNode(Ks[e.replace(/^\\/, "")])]);
    return t.setAttribute("stretchy", "true"), t;
  },
  Qs = {
    "overrightarrow": [["rightarrow"], 0.888, 522, "xMaxYMin"],
    "overleftarrow": [["leftarrow"], 0.888, 522, "xMinYMin"],
    "underrightarrow": [["rightarrow"], 0.888, 522, "xMaxYMin"],
    "underleftarrow": [["leftarrow"], 0.888, 522, "xMinYMin"],
    "xrightarrow": [["rightarrow"], 1.469, 522, "xMaxYMin"],
    "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
    "xleftarrow": [["leftarrow"], 1.469, 522, "xMinYMin"],
    "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
    "Overrightarrow": [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
    "xRightarrow": [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
    "xLeftarrow": [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
    "overleftharpoon": [["leftharpoon"], 0.888, 522, "xMinYMin"],
    "xleftharpoonup": [["leftharpoon"], 0.888, 522, "xMinYMin"],
    "xleftharpoondown": [["leftharpoondown"], 0.888, 522, "xMinYMin"],
    "overrightharpoon": [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    "xrightharpoonup": [["rightharpoon"], 0.888, 522, "xMaxYMin"],
    "xrightharpoondown": [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
    "xlongequal": [["longequal"], 0.888, 334, "xMinYMin"],
    "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
    "xtwoheadleftarrow": [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
    "xtwoheadrightarrow": [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
    "overleftrightarrow": [["leftarrow", "rightarrow"], 0.888, 522],
    "overbrace": [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
    "underbrace": [
      ["leftbraceunder", "midbraceunder", "rightbraceunder"],
      1.6,
      548,
    ],
    "underleftrightarrow": [["leftarrow", "rightarrow"], 0.888, 522],
    "xleftrightarrow": [["leftarrow", "rightarrow"], 1.75, 522],
    "xLeftrightarrow": [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
    "xrightleftharpoons": [
      ["leftharpoondownplus", "rightharpoonplus"],
      1.75,
      716,
    ],
    "xleftrightharpoons": [
      ["leftharpoonplus", "rightharpoondownplus"],
      1.75,
      716,
    ],
    "xhookleftarrow": [["leftarrow", "righthook"], 1.08, 522],
    "xhookrightarrow": [["lefthook", "rightarrow"], 1.08, 522],
    "overlinesegment": [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    "underlinesegment": [["leftlinesegment", "rightlinesegment"], 0.888, 522],
    "overgroup": [["leftgroup", "rightgroup"], 0.888, 342],
    "undergroup": [["leftgroupunder", "rightgroupunder"], 0.888, 342],
    "xmapsto": [["leftmapsto", "rightarrow"], 1.5, 522],
    "xtofrom": [["leftToFrom", "rightToFrom"], 1.75, 528],
    "xrightleftarrows": [
      ["baraboveleftarrow", "rightarrowabovebar"],
      1.75,
      901,
    ],
    "xrightequilibrium": [
      ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
      1.75,
      716,
    ],
    "xleftequilibrium": [
      ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
      1.75,
      716,
    ],
  },
  eo = function (e) {
    return e.type === "ordgroup" ? e.body.length : 1;
  },
  to = function (e, t) {
    function n() {
      var o = 4e5,
        u = e.label.slice(1);
      if ($.contains(["widehat", "widecheck", "widetilde", "utilde"], u)) {
        var m = e,
          d = eo(m.base),
          p,
          x,
          y;
        if (d > 5)
          u === "widehat" || u === "widecheck"
            ? ((p = 420), (o = 2364), (y = 0.42), (x = u + "4"))
            : ((p = 312), (o = 2340), (y = 0.34), (x = "tilde4"));
        else {
          var v = [1, 1, 2, 2, 3, 3][d];
          u === "widehat" || u === "widecheck"
            ? ((o = [0, 1062, 2364, 2364, 2364][v]),
              (p = [0, 239, 300, 360, 420][v]),
              (y = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v]),
              (x = u + v))
            : ((o = [0, 600, 1033, 2339, 2340][v]),
              (p = [0, 260, 286, 306, 312][v]),
              (y = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v]),
              (x = "tilde" + v));
        }
        var w = new r0(x),
          A = new Ue([w], {
            width: "100%",
            height: E(y),
            viewBox: "0 0 " + o + " " + p,
            preserveAspectRatio: "none",
          });
        return { span: S.makeSvgSpan([], [A], t), minWidth: 0, height: y };
      } else {
        var z = [],
          M = Qs[u],
          [L, I, O] = M,
          U = O / 1e3,
          q = L.length,
          Y,
          j;
        if (q === 1) {
          var T = M[3];
          (Y = ["hide-tail"]), (j = [T]);
        } else if (q === 2)
          (Y = ["halfarrow-left", "halfarrow-right"]),
            (j = ["xMinYMin", "xMaxYMin"]);
        else if (q === 3)
          (Y = ["brace-left", "brace-center", "brace-right"]),
            (j = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
        else
          throw new Error(
            `Correct katexImagesData or update code here to support
                    ` +
              q +
              " children."
          );
        for (var re = 0; re < q; re++) {
          var te = new r0(L[re]),
            Fe = new Ue([te], {
              width: "400em",
              height: E(U),
              viewBox: "0 0 " + o + " " + O,
              preserveAspectRatio: j[re] + " slice",
            }),
            ue = S.makeSvgSpan([Y[re]], [Fe], t);
          if (q === 1) return { span: ue, minWidth: I, height: U };
          (ue.style.height = E(U)), z.push(ue);
        }
        return { span: S.makeSpan(["stretchy"], z, t), minWidth: I, height: U };
      }
    }
    var { span: a, minWidth: i, height: l } = n();
    return (
      (a.height = l),
      (a.style.height = E(l)),
      i > 0 && (a.style.minWidth = E(i)),
      a
    );
  },
  ro = function (e, t, n, a, i) {
    var l,
      o = e.height + e.depth + n + a;
    if (/fbox|color|angl/.test(t)) {
      if (((l = S.makeSpan(["stretchy", t], [], i)), t === "fbox")) {
        var u = i.color && i.getColor();
        u && (l.style.borderColor = u);
      }
    } else {
      var m = [];
      /^[bx]cancel$/.test(t) &&
        m.push(
          new ir({
            "x1": "0",
            "y1": "0",
            "x2": "100%",
            "y2": "100%",
            "stroke-width": "0.046em",
          })
        ),
        /^x?cancel$/.test(t) &&
          m.push(
            new ir({
              "x1": "0",
              "y1": "100%",
              "x2": "100%",
              "y2": "0",
              "stroke-width": "0.046em",
            })
          );
      var d = new Ue(m, { width: "100%", height: E(o) });
      l = S.makeSvgSpan([], [d], i);
    }
    return (l.height = o), (l.style.height = E(o)), l;
  },
  Ge = { encloseSpan: ro, mathMLnode: Js, svgSpan: to };
function G(r, e) {
  if (!r || r.type !== e)
    throw new Error(
      "Expected node of type " +
        e +
        ", but got " +
        (r ? "node of type " + r.type : String(r))
    );
  return r;
}
function Dr(r) {
  var e = kt(r);
  if (!e)
    throw new Error(
      "Expected node of symbol group type, but got " +
        (r ? "node of type " + r.type : String(r))
    );
  return e;
}
function kt(r) {
  return r && (r.type === "atom" || Ts.hasOwnProperty(r.type)) ? r : null;
}
var Fr = (r, e) => {
    var t, n, a;
    r && r.type === "supsub"
      ? ((n = G(r.base, "accent")),
        (t = n.base),
        (r.base = t),
        (a = Ms(_(r, e))),
        (r.base = n))
      : ((n = G(r, "accent")), (t = n.base));
    var i = _(t, e.havingCrampedStyle()),
      l = n.isShifty && $.isCharacterBox(t),
      o = 0;
    if (l) {
      var u = $.getBaseElem(t),
        m = _(u, e.havingCrampedStyle());
      o = sn(m).skew;
    }
    var d = n.label === "\\c",
      p = d ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight),
      x;
    if (n.isStretchy)
      (x = Ge.svgSpan(n, e)),
        (x = S.makeVList(
          {
            positionType: "firstBaseline",
            children: [
              { type: "elem", elem: i },
              {
                type: "elem",
                elem: x,
                wrapperClasses: ["svg-align"],
                wrapperStyle:
                  o > 0
                    ? {
                        width: "calc(100% - " + E(2 * o) + ")",
                        marginLeft: E(2 * o),
                      }
                    : void 0,
              },
            ],
          },
          e
        ));
    else {
      var y, v;
      n.label === "\\vec"
        ? ((y = S.staticSvg("vec", e)), (v = S.svgData.vec[1]))
        : ((y = S.makeOrd({ mode: n.mode, text: n.label }, e, "textord")),
          (y = sn(y)),
          (y.italic = 0),
          (v = y.width),
          d && (p += y.depth)),
        (x = S.makeSpan(["accent-body"], [y]));
      var w = n.label === "\\textcircled";
      w && (x.classes.push("accent-full"), (p = i.height));
      var A = o;
      w || (A -= v / 2),
        (x.style.left = E(A)),
        n.label === "\\textcircled" && (x.style.top = ".2em"),
        (x = S.makeVList(
          {
            positionType: "firstBaseline",
            children: [
              { type: "elem", elem: i },
              { type: "kern", size: -p },
              { type: "elem", elem: x },
            ],
          },
          e
        ));
    }
    var z = S.makeSpan(["mord", "accent"], [x], e);
    return a
      ? ((a.children[0] = z),
        (a.height = Math.max(z.height, a.height)),
        (a.classes[0] = "mord"),
        a)
      : z;
  },
  Pa = (r, e) => {
    var t = r.isStretchy
        ? Ge.mathMLnode(r.label)
        : new D.MathNode("mo", [Me(r.label, r.mode)]),
      n = new D.MathNode("mover", [X(r.base, e), t]);
    return n.setAttribute("accent", "true"), n;
  },
  no = new RegExp(
    [
      "\\acute",
      "\\grave",
      "\\ddot",
      "\\tilde",
      "\\bar",
      "\\breve",
      "\\check",
      "\\hat",
      "\\vec",
      "\\dot",
      "\\mathring",
    ]
      .map((r) => "\\" + r)
      .join("|")
  );
B({
  type: "accent",
  names: [
    "\\acute",
    "\\grave",
    "\\ddot",
    "\\tilde",
    "\\bar",
    "\\breve",
    "\\check",
    "\\hat",
    "\\vec",
    "\\dot",
    "\\mathring",
    "\\widecheck",
    "\\widehat",
    "\\widetilde",
    "\\overrightarrow",
    "\\overleftarrow",
    "\\Overrightarrow",
    "\\overleftrightarrow",
    "\\overgroup",
    "\\overlinesegment",
    "\\overleftharpoon",
    "\\overrightharpoon",
  ],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var t = gt(e[0]),
      n = !no.test(r.funcName),
      a =
        !n ||
        r.funcName === "\\widehat" ||
        r.funcName === "\\widetilde" ||
        r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t,
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pa,
});
B({
  type: "accent",
  names: [
    "\\'",
    "\\`",
    "\\^",
    "\\~",
    "\\=",
    "\\u",
    "\\.",
    '\\"',
    "\\c",
    "\\r",
    "\\H",
    "\\v",
    "\\textcircled",
  ],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["primitive"],
  },
  handler: (r, e) => {
    var t = e[0],
      n = r.parser.mode;
    return (
      n === "math" &&
        (r.parser.settings.reportNonstrict(
          "mathVsTextAccents",
          "LaTeX's accent " + r.funcName + " works only in text mode"
        ),
        (n = "text")),
      {
        type: "accent",
        mode: n,
        label: r.funcName,
        isStretchy: !1,
        isShifty: !0,
        base: t,
      }
    );
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pa,
});
B({
  type: "accentUnder",
  names: [
    "\\underleftarrow",
    "\\underrightarrow",
    "\\underleftrightarrow",
    "\\undergroup",
    "\\underlinesegment",
    "\\utilde",
  ],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = e[0];
    return { type: "accentUnder", mode: t.mode, label: n, base: a };
  },
  htmlBuilder: (r, e) => {
    var t = _(r.base, e),
      n = Ge.svgSpan(r, e),
      a = r.label === "\\utilde" ? 0.12 : 0,
      i = S.makeVList(
        {
          positionType: "top",
          positionData: t.height,
          children: [
            { type: "elem", elem: n, wrapperClasses: ["svg-align"] },
            { type: "kern", size: a },
            { type: "elem", elem: t },
          ],
        },
        e
      );
    return S.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Ge.mathMLnode(r.label),
      n = new D.MathNode("munder", [X(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  },
});
var at = (r) => {
  var e = new D.MathNode("mpadded", r ? [r] : []);
  return (
    e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e
  );
};
B({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal",
  ],
  props: { numArgs: 1, numOptionalArgs: 1 },
  handler(r, e, t) {
    var { parser: n, funcName: a } = r;
    return { type: "xArrow", mode: n.mode, label: a, body: e[0], below: t[0] };
  },
  htmlBuilder(r, e) {
    var t = e.style,
      n = e.havingStyle(t.sup()),
      a = S.wrapFragment(_(r.body, n, e), e),
      i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var l;
    r.below &&
      ((n = e.havingStyle(t.sub())),
      (l = S.wrapFragment(_(r.below, n, e), e)),
      l.classes.push(i + "-arrow-pad"));
    var o = Ge.svgSpan(r, e),
      u = -e.fontMetrics().axisHeight + 0.5 * o.height,
      m = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (m -= a.depth);
    var d;
    if (l) {
      var p = -e.fontMetrics().axisHeight + l.height + 0.5 * o.height + 0.111;
      d = S.makeVList(
        {
          positionType: "individualShift",
          children: [
            { type: "elem", elem: a, shift: m },
            { type: "elem", elem: o, shift: u },
            { type: "elem", elem: l, shift: p },
          ],
        },
        e
      );
    } else
      d = S.makeVList(
        {
          positionType: "individualShift",
          children: [
            { type: "elem", elem: a, shift: m },
            { type: "elem", elem: o, shift: u },
          ],
        },
        e
      );
    return (
      d.children[0].children[0].children[1].classes.push("svg-align"),
      S.makeSpan(["mrel", "x-arrow"], [d], e)
    );
  },
  mathmlBuilder(r, e) {
    var t = Ge.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = at(X(r.body, e));
      if (r.below) {
        var i = at(X(r.below, e));
        n = new D.MathNode("munderover", [t, i, a]);
      } else n = new D.MathNode("mover", [t, a]);
    } else if (r.below) {
      var l = at(X(r.below, e));
      n = new D.MathNode("munder", [t, l]);
    } else (n = at()), (n = new D.MathNode("mover", [t, n]));
    return n;
  },
});
var ao = S.makeSpan;
function Ha(r, e) {
  var t = oe(r.body, e, !0);
  return ao([r.mclass], t, e);
}
function $a(r, e) {
  var t,
    n = pe(r.body, e);
  return (
    r.mclass === "minner"
      ? (t = new D.MathNode("mpadded", n))
      : r.mclass === "mord"
      ? r.isCharacterBox
        ? ((t = n[0]), (t.type = "mi"))
        : (t = new D.MathNode("mi", n))
      : (r.isCharacterBox
          ? ((t = n[0]), (t.type = "mo"))
          : (t = new D.MathNode("mo", n)),
        r.mclass === "mbin"
          ? ((t.attributes.lspace = "0.22em"), (t.attributes.rspace = "0.22em"))
          : r.mclass === "mpunct"
          ? ((t.attributes.lspace = "0em"), (t.attributes.rspace = "0.17em"))
          : r.mclass === "mopen" || r.mclass === "mclose"
          ? ((t.attributes.lspace = "0em"), (t.attributes.rspace = "0em"))
          : r.mclass === "minner" &&
            ((t.attributes.lspace = "0.0556em"),
            (t.attributes.width = "+0.1111em"))),
    t
  );
}
B({
  type: "mclass",
  names: [
    "\\mathord",
    "\\mathbin",
    "\\mathrel",
    "\\mathopen",
    "\\mathclose",
    "\\mathpunct",
    "\\mathinner",
  ],
  props: { numArgs: 1, primitive: !0 },
  handler(r, e) {
    var { parser: t, funcName: n } = r,
      a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      body: ne(a),
      isCharacterBox: $.isCharacterBox(a),
    };
  },
  htmlBuilder: Ha,
  mathmlBuilder: $a,
});
var St = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel")
    ? "m" + e.family
    : "mord";
};
B({
  type: "mclass",
  names: ["\\@binrel"],
  props: { numArgs: 2 },
  handler(r, e) {
    var { parser: t } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: St(e[0]),
      body: ne(e[1]),
      isCharacterBox: $.isCharacterBox(e[1]),
    };
  },
});
B({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: { numArgs: 2 },
  handler(r, e) {
    var { parser: t, funcName: n } = r,
      a = e[1],
      i = e[0],
      l;
    n !== "\\stackrel" ? (l = St(a)) : (l = "mrel");
    var o = {
        type: "op",
        mode: a.mode,
        limits: !0,
        alwaysHandleSupSub: !0,
        parentIsSupSub: !1,
        symbol: !1,
        suppressBaseShift: n !== "\\stackrel",
        body: ne(a),
      },
      u = {
        type: "supsub",
        mode: i.mode,
        base: o,
        sup: n === "\\underset" ? null : i,
        sub: n === "\\underset" ? i : null,
      };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [u],
      isCharacterBox: $.isCharacterBox(u),
    };
  },
  htmlBuilder: Ha,
  mathmlBuilder: $a,
});
B({
  type: "pmb",
  names: ["\\pmb"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "pmb", mode: t.mode, mclass: St(e[0]), body: ne(e[0]) };
  },
  htmlBuilder(r, e) {
    var t = oe(r.body, e, !0),
      n = S.makeSpan([r.mclass], t, e);
    return (n.style.textShadow = "0.02em 0.01em 0.04px"), n;
  },
  mathmlBuilder(r, e) {
    var t = pe(r.body, e),
      n = new D.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  },
});
var io = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    "A": "\\uparrow",
    "V": "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow",
  },
  pn = () => ({ type: "styling", body: [], mode: "math", style: "display" }),
  gn = (r) => r.type === "textord" && r.text === "@",
  lo = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function so(r, e, t) {
  var n = io[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []),
        i = { type: "atom", text: n, mode: "math", family: "rel" },
        l = t.callFunction("\\Big", [i], []),
        o = t.callFunction("\\\\cdright", [e[1]], []),
        u = { type: "ordgroup", mode: "math", body: [a, l, o] };
      return t.callFunction("\\\\cdparent", [u], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var m = { type: "textord", text: "\\Vert", mode: "math" };
      return t.callFunction("\\Big", [m], []);
    }
    default:
      return { type: "textord", text: " ", mode: "math" };
  }
}
function oo(r) {
  var e = [];
  for (
    r.gullet.beginGroup(),
      r.gullet.macros.set("\\cr", "\\\\\\relax"),
      r.gullet.beginGroup();
    ;

  ) {
    e.push(r.parseExpression(!1, "\\\\")),
      r.gullet.endGroup(),
      r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\") r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else throw new F("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var l = e[i], o = pn(), u = 0; u < l.length; u++)
      if (!gn(l[u])) o.body.push(l[u]);
      else {
        n.push(o), (u += 1);
        var m = Dr(l[u]).text,
          d = new Array(2);
        if (
          ((d[0] = { type: "ordgroup", mode: "math", body: [] }),
          (d[1] = { type: "ordgroup", mode: "math", body: [] }),
          !("=|.".indexOf(m) > -1))
        )
          if ("<>AV".indexOf(m) > -1)
            for (var p = 0; p < 2; p++) {
              for (var x = !0, y = u + 1; y < l.length; y++) {
                if (lo(l[y], m)) {
                  (x = !1), (u = y);
                  break;
                }
                if (gn(l[y]))
                  throw new F(
                    "Missing a " + m + " character to complete a CD arrow.",
                    l[y]
                  );
                d[p].body.push(l[y]);
              }
              if (x)
                throw new F(
                  "Missing a " + m + " character to complete a CD arrow.",
                  l[u]
                );
            }
          else throw new F('Expected one of "<>AV=|." after @', l[u]);
        var v = so(m, d, r),
          w = { type: "styling", body: [v], mode: "math", style: "display" };
        n.push(w), (o = pn());
      }
    i % 2 === 0 ? n.push(o) : n.shift(), (n = []), a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var A = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    postgap: 0.25,
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: A,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([]),
  };
}
B({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t, funcName: n } = r;
    return { type: "cdlabel", mode: t.mode, side: n.slice(4), label: e[0] };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()),
      n = S.wrapFragment(_(r.label, t, e), e);
    return (
      n.classes.push("cd-label-" + r.side),
      (n.style.bottom = E(0.8 - n.depth)),
      (n.height = 0),
      (n.depth = 0),
      n
    );
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mrow", [X(r.label, e)]);
    return (
      (t = new D.MathNode("mpadded", [t])),
      t.setAttribute("width", "0"),
      r.side === "left" && t.setAttribute("lspace", "-1width"),
      t.setAttribute("voffset", "0.7em"),
      (t = new D.MathNode("mstyle", [t])),
      t.setAttribute("displaystyle", "false"),
      t.setAttribute("scriptlevel", "1"),
      t
    );
  },
});
B({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "cdlabelparent", mode: t.mode, fragment: e[0] };
  },
  htmlBuilder(r, e) {
    var t = S.wrapFragment(_(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new D.MathNode("mrow", [X(r.fragment, e)]);
  },
});
B({
  type: "textord",
  names: ["\\@char"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    for (
      var { parser: t } = r, n = G(e[0], "ordgroup"), a = n.body, i = "", l = 0;
      l < a.length;
      l++
    ) {
      var o = G(a[l], "textord");
      i += o.text;
    }
    var u = parseInt(i),
      m;
    if (isNaN(u)) throw new F("\\@char has non-numeric argument " + i);
    if (u < 0 || u >= 1114111)
      throw new F("\\@char with invalid code point " + i);
    return (
      u <= 65535
        ? (m = String.fromCharCode(u))
        : ((u -= 65536),
          (m = String.fromCharCode((u >> 10) + 55296, (u & 1023) + 56320))),
      { type: "textord", mode: t.mode, text: m }
    );
  },
});
var Va = (r, e) => {
    var t = oe(r.body, e.withColor(r.color), !1);
    return S.makeFragment(t);
  },
  Ua = (r, e) => {
    var t = pe(r.body, e.withColor(r.color)),
      n = new D.MathNode("mstyle", t);
    return n.setAttribute("mathcolor", r.color), n;
  };
B({
  type: "color",
  names: ["\\textcolor"],
  props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "original"] },
  handler(r, e) {
    var { parser: t } = r,
      n = G(e[0], "color-token").color,
      a = e[1];
    return { type: "color", mode: t.mode, color: n, body: ne(a) };
  },
  htmlBuilder: Va,
  mathmlBuilder: Ua,
});
B({
  type: "color",
  names: ["\\color"],
  props: { numArgs: 1, allowedInText: !0, argTypes: ["color"] },
  handler(r, e) {
    var { parser: t, breakOnTokenText: n } = r,
      a = G(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return { type: "color", mode: t.mode, color: a, body: i };
  },
  htmlBuilder: Va,
  mathmlBuilder: Ua,
});
B({
  type: "cr",
  names: ["\\\\"],
  props: { numArgs: 0, numOptionalArgs: 0, allowedInText: !0 },
  handler(r, e, t) {
    var { parser: n } = r,
      a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null,
      i =
        !n.settings.displayMode ||
        !n.settings.useStrictBehavior(
          "newLineInDisplayMode",
          "In LaTeX, \\\\ or \\newline does nothing in display mode"
        );
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && G(a, "size").value,
    };
  },
  htmlBuilder(r, e) {
    var t = S.makeSpan(["mspace"], [], e);
    return (
      r.newLine &&
        (t.classes.push("newline"),
        r.size && (t.style.marginTop = E(ee(r.size, e)))),
      t
    );
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mspace");
    return (
      r.newLine &&
        (t.setAttribute("linebreak", "newline"),
        r.size && t.setAttribute("height", E(ee(r.size, e)))),
      t
    );
  },
});
var ur = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture",
  },
  ja = (r) => {
    var e = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
      throw new F("Expected a control sequence", r);
    return e;
  },
  uo = (r) => {
    var e = r.gullet.popToken();
    return (
      e.text === "=" &&
        ((e = r.gullet.popToken()),
        e.text === " " && (e = r.gullet.popToken())),
      e
    );
  },
  Ga = (r, e, t, n) => {
    var a = r.gullet.macros.get(t.text);
    a == null &&
      ((t.noexpand = !0),
      (a = {
        tokens: [t],
        numArgs: 0,
        unexpandable: !r.gullet.isExpandable(t.text),
      })),
      r.gullet.macros.set(e, a, n);
  };
B({
  type: "internal",
  names: ["\\global", "\\long", "\\\\globallong"],
  props: { numArgs: 0, allowedInText: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r;
    e.consumeSpaces();
    var n = e.fetch();
    if (ur[n.text])
      return (
        (t === "\\global" || t === "\\\\globallong") && (n.text = ur[n.text]),
        G(e.parseFunction(), "internal")
      );
    throw new F("Invalid token after macro prefix", n);
  },
});
B({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      n = e.gullet.popToken(),
      a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new F("Expected a control sequence", n);
    for (var i = 0, l, o = [[]]; e.gullet.future().text !== "{"; )
      if (((n = e.gullet.popToken()), n.text === "#")) {
        if (e.gullet.future().text === "{") {
          (l = e.gullet.future()), o[i].push("{");
          break;
        }
        if (((n = e.gullet.popToken()), !/^[1-9]$/.test(n.text)))
          throw new F('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new F('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF") throw new F("Expected a macro definition");
        o[i].push(n.text);
      }
    var { tokens: u } = e.gullet.consumeArg();
    return (
      l && u.unshift(l),
      (t === "\\edef" || t === "\\xdef") &&
        ((u = e.gullet.expandTokens(u)), u.reverse()),
      e.gullet.macros.set(
        a,
        { tokens: u, numArgs: i, delimiters: o },
        t === ur[t]
      ),
      { type: "internal", mode: e.mode }
    );
  },
});
B({
  type: "internal",
  names: ["\\let", "\\\\globallet"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      n = ja(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = uo(e);
    return (
      Ga(e, n, a, t === "\\\\globallet"), { type: "internal", mode: e.mode }
    );
  },
});
B({
  type: "internal",
  names: ["\\futurelet", "\\\\globalfuture"],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      n = ja(e.gullet.popToken()),
      a = e.gullet.popToken(),
      i = e.gullet.popToken();
    return (
      Ga(e, n, i, t === "\\\\globalfuture"),
      e.gullet.pushToken(i),
      e.gullet.pushToken(a),
      { type: "internal", mode: e.mode }
    );
  },
});
var D0 = function (e, t, n) {
    var a = Z.math[e] && Z.math[e].replace,
      i = Ar(a || e, t, n);
    if (!i)
      throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
    return i;
  },
  Nr = function (e, t, n, a) {
    var i = n.havingBaseStyle(t),
      l = S.makeSpan(a.concat(i.sizingClasses(n)), [e], n),
      o = i.sizeMultiplier / n.sizeMultiplier;
    return (
      (l.height *= o), (l.depth *= o), (l.maxFontSize = i.sizeMultiplier), l
    );
  },
  Wa = function (e, t, n) {
    var a = t.havingBaseStyle(n),
      i =
        (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
    e.classes.push("delimcenter"),
      (e.style.top = E(i)),
      (e.height -= i),
      (e.depth += i);
  },
  co = function (e, t, n, a, i, l) {
    var o = S.makeSymbol(e, "Main-Regular", i, a),
      u = Nr(o, t, a, l);
    return n && Wa(u, a, t), u;
  },
  ho = function (e, t, n, a) {
    return S.makeSymbol(e, "Size" + t + "-Regular", n, a);
  },
  _a = function (e, t, n, a, i, l) {
    var o = ho(e, t, i, a),
      u = Nr(S.makeSpan(["delimsizing", "size" + t], [o], a), P.TEXT, a, l);
    return n && Wa(u, a, P.TEXT), u;
  },
  Pt = function (e, t, n) {
    var a;
    t === "Size1-Regular" ? (a = "delim-size1") : (a = "delim-size4");
    var i = S.makeSpan(
      ["delimsizinginner", a],
      [S.makeSpan([], [S.makeSymbol(e, t, n)])]
    );
    return { type: "elem", elem: i };
  },
  Ht = function (e, t, n) {
    var a = Ee["Size4-Regular"][e.charCodeAt(0)]
        ? Ee["Size4-Regular"][e.charCodeAt(0)][4]
        : Ee["Size1-Regular"][e.charCodeAt(0)][4],
      i = new r0("inner", vs(e, Math.round(1e3 * t))),
      l = new Ue([i], {
        width: E(a),
        height: E(t),
        style: "width:" + E(a),
        viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
        preserveAspectRatio: "xMinYMin",
      }),
      o = S.makeSvgSpan([], [l], n);
    return (
      (o.height = t),
      (o.style.height = E(t)),
      (o.style.width = E(a)),
      { type: "elem", elem: o }
    );
  },
  cr = 0.008,
  it = { type: "kern", size: -1 * cr },
  mo = ["|", "\\lvert", "\\rvert", "\\vert"],
  fo = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
  Ya = function (e, t, n, a, i, l) {
    var o,
      u,
      m,
      d,
      p = "",
      x = 0;
    (o = m = d = e), (u = null);
    var y = "Size1-Regular";
    e === "\\uparrow"
      ? (m = d = "⏐")
      : e === "\\Uparrow"
      ? (m = d = "‖")
      : e === "\\downarrow"
      ? (o = m = "⏐")
      : e === "\\Downarrow"
      ? (o = m = "‖")
      : e === "\\updownarrow"
      ? ((o = "\\uparrow"), (m = "⏐"), (d = "\\downarrow"))
      : e === "\\Updownarrow"
      ? ((o = "\\Uparrow"), (m = "‖"), (d = "\\Downarrow"))
      : $.contains(mo, e)
      ? ((m = "∣"), (p = "vert"), (x = 333))
      : $.contains(fo, e)
      ? ((m = "∥"), (p = "doublevert"), (x = 556))
      : e === "[" || e === "\\lbrack"
      ? ((o = "⎡"),
        (m = "⎢"),
        (d = "⎣"),
        (y = "Size4-Regular"),
        (p = "lbrack"),
        (x = 667))
      : e === "]" || e === "\\rbrack"
      ? ((o = "⎤"),
        (m = "⎥"),
        (d = "⎦"),
        (y = "Size4-Regular"),
        (p = "rbrack"),
        (x = 667))
      : e === "\\lfloor" || e === "⌊"
      ? ((m = o = "⎢"),
        (d = "⎣"),
        (y = "Size4-Regular"),
        (p = "lfloor"),
        (x = 667))
      : e === "\\lceil" || e === "⌈"
      ? ((o = "⎡"),
        (m = d = "⎢"),
        (y = "Size4-Regular"),
        (p = "lceil"),
        (x = 667))
      : e === "\\rfloor" || e === "⌋"
      ? ((m = o = "⎥"),
        (d = "⎦"),
        (y = "Size4-Regular"),
        (p = "rfloor"),
        (x = 667))
      : e === "\\rceil" || e === "⌉"
      ? ((o = "⎤"),
        (m = d = "⎥"),
        (y = "Size4-Regular"),
        (p = "rceil"),
        (x = 667))
      : e === "(" || e === "\\lparen"
      ? ((o = "⎛"),
        (m = "⎜"),
        (d = "⎝"),
        (y = "Size4-Regular"),
        (p = "lparen"),
        (x = 875))
      : e === ")" || e === "\\rparen"
      ? ((o = "⎞"),
        (m = "⎟"),
        (d = "⎠"),
        (y = "Size4-Regular"),
        (p = "rparen"),
        (x = 875))
      : e === "\\{" || e === "\\lbrace"
      ? ((o = "⎧"), (u = "⎨"), (d = "⎩"), (m = "⎪"), (y = "Size4-Regular"))
      : e === "\\}" || e === "\\rbrace"
      ? ((o = "⎫"), (u = "⎬"), (d = "⎭"), (m = "⎪"), (y = "Size4-Regular"))
      : e === "\\lgroup" || e === "⟮"
      ? ((o = "⎧"), (d = "⎩"), (m = "⎪"), (y = "Size4-Regular"))
      : e === "\\rgroup" || e === "⟯"
      ? ((o = "⎫"), (d = "⎭"), (m = "⎪"), (y = "Size4-Regular"))
      : e === "\\lmoustache" || e === "⎰"
      ? ((o = "⎧"), (d = "⎭"), (m = "⎪"), (y = "Size4-Regular"))
      : (e === "\\rmoustache" || e === "⎱") &&
        ((o = "⎫"), (d = "⎩"), (m = "⎪"), (y = "Size4-Regular"));
    var v = D0(o, y, i),
      w = v.height + v.depth,
      A = D0(m, y, i),
      z = A.height + A.depth,
      M = D0(d, y, i),
      L = M.height + M.depth,
      I = 0,
      O = 1;
    if (u !== null) {
      var U = D0(u, y, i);
      (I = U.height + U.depth), (O = 2);
    }
    var q = w + L + I,
      Y = Math.max(0, Math.ceil((t - q) / (O * z))),
      j = q + Y * O * z,
      T = a.fontMetrics().axisHeight;
    n && (T *= a.sizeMultiplier);
    var re = j / 2 - T,
      te = [];
    if (p.length > 0) {
      var Fe = j - w - L,
        ue = Math.round(j * 1e3),
        Te = bs(p, Math.round(Fe * 1e3)),
        Ye = new r0(p, Te),
        d0 = (x / 1e3).toFixed(3) + "em",
        f0 = (ue / 1e3).toFixed(3) + "em",
        Tt = new Ue([Ye], {
          width: d0,
          height: f0,
          viewBox: "0 0 " + x + " " + ue,
        }),
        Xe = S.makeSvgSpan([], [Tt], a);
      (Xe.height = ue / 1e3),
        (Xe.style.width = d0),
        (Xe.style.height = f0),
        te.push({ type: "elem", elem: Xe });
    } else {
      if ((te.push(Pt(d, y, i)), te.push(it), u === null)) {
        var Ze = j - w - L + 2 * cr;
        te.push(Ht(m, Ze, a));
      } else {
        var we = (j - w - L - I) / 2 + 2 * cr;
        te.push(Ht(m, we, a)),
          te.push(it),
          te.push(Pt(u, y, i)),
          te.push(it),
          te.push(Ht(m, we, a));
      }
      te.push(it), te.push(Pt(o, y, i));
    }
    var T0 = a.havingBaseStyle(P.TEXT),
      Ct = S.makeVList(
        { positionType: "bottom", positionData: re, children: te },
        T0
      );
    return Nr(S.makeSpan(["delimsizing", "mult"], [Ct], T0), P.TEXT, a, l);
  },
  $t = 80,
  Vt = 0.08,
  Ut = function (e, t, n, a, i) {
    var l = gs(e, a, n),
      o = new r0(e, l),
      u = new Ue([o], {
        width: "400em",
        height: E(t),
        viewBox: "0 0 400000 " + n,
        preserveAspectRatio: "xMinYMin slice",
      });
    return S.makeSvgSpan(["hide-tail"], [u], i);
  },
  po = function (e, t) {
    var n = t.havingBaseSizing(),
      a = Ja("\\surd", e * n.sizeMultiplier, Ka, n),
      i = n.sizeMultiplier,
      l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
      o,
      u = 0,
      m = 0,
      d = 0,
      p;
    return (
      a.type === "small"
        ? ((d = 1e3 + 1e3 * l + $t),
          e < 1 ? (i = 1) : e < 1.4 && (i = 0.7),
          (u = (1 + l + Vt) / i),
          (m = (1 + l) / i),
          (o = Ut("sqrtMain", u, d, l, t)),
          (o.style.minWidth = "0.853em"),
          (p = 0.833 / i))
        : a.type === "large"
        ? ((d = (1e3 + $t) * E0[a.size]),
          (m = (E0[a.size] + l) / i),
          (u = (E0[a.size] + l + Vt) / i),
          (o = Ut("sqrtSize" + a.size, u, d, l, t)),
          (o.style.minWidth = "1.02em"),
          (p = 1 / i))
        : ((u = e + l + Vt),
          (m = e + l),
          (d = Math.floor(1e3 * e + l) + $t),
          (o = Ut("sqrtTall", u, d, l, t)),
          (o.style.minWidth = "0.742em"),
          (p = 1.056)),
      (o.height = m),
      (o.style.height = E(u)),
      {
        span: o,
        advanceWidth: p,
        ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i,
      }
    );
  },
  Xa = [
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "\\surd",
  ],
  go = [
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "|",
    "\\|",
    "\\vert",
    "\\Vert",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
  ],
  Za = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
  E0 = [0, 1.2, 1.8, 2.4, 3],
  vo = function (e, t, n, a, i) {
    if (
      (e === "<" || e === "\\lt" || e === "⟨"
        ? (e = "\\langle")
        : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"),
      $.contains(Xa, e) || $.contains(Za, e))
    )
      return _a(e, t, !1, n, a, i);
    if ($.contains(go, e)) return Ya(e, E0[t], !1, n, a, i);
    throw new F("Illegal delimiter: '" + e + "'");
  },
  bo = [
    { type: "small", style: P.SCRIPTSCRIPT },
    { type: "small", style: P.SCRIPT },
    { type: "small", style: P.TEXT },
    { type: "large", size: 1 },
    { type: "large", size: 2 },
    { type: "large", size: 3 },
    { type: "large", size: 4 },
  ],
  yo = [
    { type: "small", style: P.SCRIPTSCRIPT },
    { type: "small", style: P.SCRIPT },
    { type: "small", style: P.TEXT },
    { type: "stack" },
  ],
  Ka = [
    { type: "small", style: P.SCRIPTSCRIPT },
    { type: "small", style: P.SCRIPT },
    { type: "small", style: P.TEXT },
    { type: "large", size: 1 },
    { type: "large", size: 2 },
    { type: "large", size: 3 },
    { type: "large", size: 4 },
    { type: "stack" },
  ],
  xo = function (e) {
    if (e.type === "small") return "Main-Regular";
    if (e.type === "large") return "Size" + e.size + "-Regular";
    if (e.type === "stack") return "Size4-Regular";
    throw new Error("Add support for delim type '" + e.type + "' here.");
  },
  Ja = function (e, t, n, a) {
    for (
      var i = Math.min(2, 3 - a.style.size), l = i;
      l < n.length && n[l].type !== "stack";
      l++
    ) {
      var o = D0(e, xo(n[l]), "math"),
        u = o.height + o.depth;
      if (n[l].type === "small") {
        var m = a.havingBaseStyle(n[l].style);
        u *= m.sizeMultiplier;
      }
      if (u > t) return n[l];
    }
    return n[n.length - 1];
  },
  Qa = function (e, t, n, a, i, l) {
    e === "<" || e === "\\lt" || e === "⟨"
      ? (e = "\\langle")
      : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
    var o;
    $.contains(Za, e) ? (o = bo) : $.contains(Xa, e) ? (o = Ka) : (o = yo);
    var u = Ja(e, t, o, a);
    return u.type === "small"
      ? co(e, u.style, n, a, i, l)
      : u.type === "large"
      ? _a(e, u.size, n, a, i, l)
      : Ya(e, t, n, a, i, l);
  },
  wo = function (e, t, n, a, i, l) {
    var o = a.fontMetrics().axisHeight * a.sizeMultiplier,
      u = 901,
      m = 5 / a.fontMetrics().ptPerEm,
      d = Math.max(t - o, n + o),
      p = Math.max((d / 500) * u, 2 * d - m);
    return Qa(e, p, !0, a, i, l);
  },
  Ve = {
    sqrtImage: po,
    sizedDelim: vo,
    sizeToMaxHeight: E0,
    customSizedDelim: Qa,
    leftRightDelim: wo,
  },
  vn = {
    "\\bigl": { mclass: "mopen", size: 1 },
    "\\Bigl": { mclass: "mopen", size: 2 },
    "\\biggl": { mclass: "mopen", size: 3 },
    "\\Biggl": { mclass: "mopen", size: 4 },
    "\\bigr": { mclass: "mclose", size: 1 },
    "\\Bigr": { mclass: "mclose", size: 2 },
    "\\biggr": { mclass: "mclose", size: 3 },
    "\\Biggr": { mclass: "mclose", size: 4 },
    "\\bigm": { mclass: "mrel", size: 1 },
    "\\Bigm": { mclass: "mrel", size: 2 },
    "\\biggm": { mclass: "mrel", size: 3 },
    "\\Biggm": { mclass: "mrel", size: 4 },
    "\\big": { mclass: "mord", size: 1 },
    "\\Big": { mclass: "mord", size: 2 },
    "\\bigg": { mclass: "mord", size: 3 },
    "\\Bigg": { mclass: "mord", size: 4 },
  },
  ko = [
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "⌊",
    "⌋",
    "\\lceil",
    "\\rceil",
    "⌈",
    "⌉",
    "<",
    ">",
    "\\langle",
    "⟨",
    "\\rangle",
    "⟩",
    "\\lt",
    "\\gt",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "⟮",
    "⟯",
    "\\lmoustache",
    "\\rmoustache",
    "⎰",
    "⎱",
    "/",
    "\\backslash",
    "|",
    "\\vert",
    "\\|",
    "\\Vert",
    "\\uparrow",
    "\\Uparrow",
    "\\downarrow",
    "\\Downarrow",
    "\\updownarrow",
    "\\Updownarrow",
    ".",
  ];
function At(r, e) {
  var t = kt(r);
  if (t && $.contains(ko, t.text)) return t;
  throw t
    ? new F("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r)
    : new F("Invalid delimiter type '" + r.type + "'", r);
}
B({
  type: "delimsizing",
  names: [
    "\\bigl",
    "\\Bigl",
    "\\biggl",
    "\\Biggl",
    "\\bigr",
    "\\Bigr",
    "\\biggr",
    "\\Biggr",
    "\\bigm",
    "\\Bigm",
    "\\biggm",
    "\\Biggm",
    "\\big",
    "\\Big",
    "\\bigg",
    "\\Bigg",
  ],
  props: { numArgs: 1, argTypes: ["primitive"] },
  handler: (r, e) => {
    var t = At(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: vn[r.funcName].size,
      mclass: vn[r.funcName].mclass,
      delim: t.text,
    };
  },
  htmlBuilder: (r, e) =>
    r.delim === "."
      ? S.makeSpan([r.mclass])
      : Ve.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(Me(r.delim, r.mode));
    var t = new D.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose"
      ? t.setAttribute("fence", "true")
      : t.setAttribute("fence", "false"),
      t.setAttribute("stretchy", "true");
    var n = E(Ve.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  },
});
function bn(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
B({
  type: "leftright-right",
  names: ["\\right"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new F("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: At(e[0], r).text,
      color: t,
    };
  },
});
B({
  type: "leftright",
  names: ["\\left"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var t = At(e[0], r),
      n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = G(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color,
    };
  },
  htmlBuilder: (r, e) => {
    bn(r);
    for (
      var t = oe(r.body, e, !0, ["mopen", "mclose"]),
        n = 0,
        a = 0,
        i = !1,
        l = 0;
      l < t.length;
      l++
    )
      t[l].isMiddle
        ? (i = !0)
        : ((n = Math.max(t[l].height, n)), (a = Math.max(t[l].depth, a)));
    (n *= e.sizeMultiplier), (a *= e.sizeMultiplier);
    var o;
    if (
      (r.left === "."
        ? (o = q0(e, ["mopen"]))
        : (o = Ve.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"])),
      t.unshift(o),
      i)
    )
      for (var u = 1; u < t.length; u++) {
        var m = t[u],
          d = m.isMiddle;
        d && (t[u] = Ve.leftRightDelim(d.delim, n, a, d.options, r.mode, []));
      }
    var p;
    if (r.right === ".") p = q0(e, ["mclose"]);
    else {
      var x = r.rightColor ? e.withColor(r.rightColor) : e;
      p = Ve.leftRightDelim(r.right, n, a, x, r.mode, ["mclose"]);
    }
    return t.push(p), S.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    bn(r);
    var t = pe(r.body, e);
    if (r.left !== ".") {
      var n = new D.MathNode("mo", [Me(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new D.MathNode("mo", [Me(r.right, r.mode)]);
      a.setAttribute("fence", "true"),
        r.rightColor && a.setAttribute("mathcolor", r.rightColor),
        t.push(a);
    }
    return Tr(t);
  },
});
B({
  type: "middle",
  names: ["\\middle"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var t = At(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new F("\\middle without preceding \\left", t);
    return { type: "middle", mode: r.parser.mode, delim: t.text };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".") t = q0(e, []);
    else {
      t = Ve.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = { delim: r.delim, options: e };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t =
        r.delim === "\\vert" || r.delim === "|"
          ? Me("|", "text")
          : Me(r.delim, r.mode),
      n = new D.MathNode("mo", [t]);
    return (
      n.setAttribute("fence", "true"),
      n.setAttribute("lspace", "0.05em"),
      n.setAttribute("rspace", "0.05em"),
      n
    );
  },
});
var Er = (r, e) => {
    var t = S.wrapFragment(_(r.body, e), e),
      n = r.label.slice(1),
      a = e.sizeMultiplier,
      i,
      l = 0,
      o = $.isCharacterBox(r.body);
    if (n === "sout")
      (i = S.makeSpan(["stretchy", "sout"])),
        (i.height = e.fontMetrics().defaultRuleThickness / a),
        (l = -0.5 * e.fontMetrics().xHeight);
    else if (n === "phase") {
      var u = ee({ number: 0.6, unit: "pt" }, e),
        m = ee({ number: 0.35, unit: "ex" }, e),
        d = e.havingBaseSizing();
      a = a / d.sizeMultiplier;
      var p = t.height + t.depth + u + m;
      t.style.paddingLeft = E(p / 2 + u);
      var x = Math.floor(1e3 * p * a),
        y = fs(x),
        v = new Ue([new r0("phase", y)], {
          width: "400em",
          height: E(x / 1e3),
          viewBox: "0 0 400000 " + x,
          preserveAspectRatio: "xMinYMin slice",
        });
      (i = S.makeSvgSpan(["hide-tail"], [v], e)),
        (i.style.height = E(p)),
        (l = t.depth + u + m);
    } else {
      /cancel/.test(n)
        ? o || t.classes.push("cancel-pad")
        : n === "angl"
        ? t.classes.push("anglpad")
        : t.classes.push("boxpad");
      var w = 0,
        A = 0,
        z = 0;
      /box/.test(n)
        ? ((z = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness)),
          (w = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : z)),
          (A = w))
        : n === "angl"
        ? ((z = Math.max(
            e.fontMetrics().defaultRuleThickness,
            e.minRuleThickness
          )),
          (w = 4 * z),
          (A = Math.max(0, 0.25 - t.depth)))
        : ((w = o ? 0.2 : 0), (A = w)),
        (i = Ge.encloseSpan(t, n, w, A, e)),
        /fbox|boxed|fcolorbox/.test(n)
          ? ((i.style.borderStyle = "solid"), (i.style.borderWidth = E(z)))
          : n === "angl" &&
            z !== 0.049 &&
            ((i.style.borderTopWidth = E(z)),
            (i.style.borderRightWidth = E(z))),
        (l = t.depth + A),
        r.backgroundColor &&
          ((i.style.backgroundColor = r.backgroundColor),
          r.borderColor && (i.style.borderColor = r.borderColor));
    }
    var M;
    if (r.backgroundColor)
      M = S.makeVList(
        {
          positionType: "individualShift",
          children: [
            { type: "elem", elem: i, shift: l },
            { type: "elem", elem: t, shift: 0 },
          ],
        },
        e
      );
    else {
      var L = /cancel|phase/.test(n) ? ["svg-align"] : [];
      M = S.makeVList(
        {
          positionType: "individualShift",
          children: [
            { type: "elem", elem: t, shift: 0 },
            { type: "elem", elem: i, shift: l, wrapperClasses: L },
          ],
        },
        e
      );
    }
    return (
      /cancel/.test(n) && ((M.height = t.height), (M.depth = t.depth)),
      /cancel/.test(n) && !o
        ? S.makeSpan(["mord", "cancel-lap"], [M], e)
        : S.makeSpan(["mord"], [M], e)
    );
  },
  Br = (r, e) => {
    var t = 0,
      n = new D.MathNode(
        r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose",
        [X(r.body, e)]
      );
    switch (r.label) {
      case "\\cancel":
        n.setAttribute("notation", "updiagonalstrike");
        break;
      case "\\bcancel":
        n.setAttribute("notation", "downdiagonalstrike");
        break;
      case "\\phase":
        n.setAttribute("notation", "phasorangle");
        break;
      case "\\sout":
        n.setAttribute("notation", "horizontalstrike");
        break;
      case "\\fbox":
        n.setAttribute("notation", "box");
        break;
      case "\\angl":
        n.setAttribute("notation", "actuarial");
        break;
      case "\\fcolorbox":
      case "\\colorbox":
        if (
          ((t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm),
          n.setAttribute("width", "+" + 2 * t + "pt"),
          n.setAttribute("height", "+" + 2 * t + "pt"),
          n.setAttribute("lspace", t + "pt"),
          n.setAttribute("voffset", t + "pt"),
          r.label === "\\fcolorbox")
        ) {
          var a = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
          n.setAttribute(
            "style",
            "border: " + a + "em solid " + String(r.borderColor)
          );
        }
        break;
      case "\\xcancel":
        n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
        break;
    }
    return (
      r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor),
      n
    );
  };
B({
  type: "enclose",
  names: ["\\colorbox"],
  props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "text"] },
  handler(r, e, t) {
    var { parser: n, funcName: a } = r,
      i = G(e[0], "color-token").color,
      l = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: l,
    };
  },
  htmlBuilder: Er,
  mathmlBuilder: Br,
});
B({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"],
  },
  handler(r, e, t) {
    var { parser: n, funcName: a } = r,
      i = G(e[0], "color-token").color,
      l = G(e[1], "color-token").color,
      o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: l,
      borderColor: i,
      body: o,
    };
  },
  htmlBuilder: Er,
  mathmlBuilder: Br,
});
B({
  type: "enclose",
  names: ["\\fbox"],
  props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "enclose", mode: t.mode, label: "\\fbox", body: e[0] };
  },
});
B({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t, funcName: n } = r,
      a = e[0];
    return { type: "enclose", mode: t.mode, label: n, body: a };
  },
  htmlBuilder: Er,
  mathmlBuilder: Br,
});
B({
  type: "enclose",
  names: ["\\angl"],
  props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !1 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "enclose", mode: t.mode, label: "\\angl", body: e[0] };
  },
});
var ei = {};
function Oe(r) {
  for (
    var {
        type: e,
        names: t,
        props: n,
        handler: a,
        htmlBuilder: i,
        mathmlBuilder: l,
      } = r,
      o = {
        type: e,
        numArgs: n.numArgs || 0,
        allowedInText: !1,
        numOptionalArgs: 0,
        handler: a,
      },
      u = 0;
    u < t.length;
    ++u
  )
    ei[t[u]] = o;
  i && (ft[e] = i), l && (pt[e] = l);
}
var ti = {};
function f(r, e) {
  ti[r] = e;
}
function yn(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (
    t === "\\relax" && (r.consume(), r.consumeSpaces(), (t = r.fetch().text));
    t === "\\hline" || t === "\\hdashline";

  )
    r.consume(),
      e.push(t === "\\hdashline"),
      r.consumeSpaces(),
      (t = r.fetch().text);
  return e;
}
var Mt = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new F("{" + r.envName + "} can be used only in display mode.");
};
function Or(r) {
  if (r.indexOf("ed") === -1) return r.indexOf("*") === -1;
}
function a0(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: l,
    colSeparationType: o,
    autoTag: u,
    singleRow: m,
    emptySingleRow: d,
    maxNumCols: p,
    leqno: x,
  } = e;
  if (
    (r.gullet.beginGroup(), m || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l)
  ) {
    var y = r.gullet.expandMacroAsText("\\arraystretch");
    if (y == null) l = 1;
    else if (((l = parseFloat(y)), !l || l < 0))
      throw new F("Invalid \\arraystretch: " + y);
  }
  r.gullet.beginGroup();
  var v = [],
    w = [v],
    A = [],
    z = [],
    M = u != null ? [] : void 0;
  function L() {
    u && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function I() {
    M &&
      (r.gullet.macros.get("\\df@tag")
        ? (M.push(r.subparse([new Be("\\df@tag")])),
          r.gullet.macros.set("\\df@tag", void 0, !0))
        : M.push(!!u && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (L(), z.push(yn(r)); ; ) {
    var O = r.parseExpression(!1, m ? "\\end" : "\\\\");
    r.gullet.endGroup(),
      r.gullet.beginGroup(),
      (O = { type: "ordgroup", mode: r.mode, body: O }),
      t && (O = { type: "styling", mode: r.mode, style: t, body: [O] }),
      v.push(O);
    var U = r.fetch().text;
    if (U === "&") {
      if (p && v.length === p) {
        if (m || o) throw new F("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict(
          "textEnv",
          "Too few columns specified in the {array} column argument."
        );
      }
      r.consume();
    } else if (U === "\\end") {
      I(),
        v.length === 1 &&
          O.type === "styling" &&
          O.body[0].body.length === 0 &&
          (w.length > 1 || !d) &&
          w.pop(),
        z.length < w.length + 1 && z.push([]);
      break;
    } else if (U === "\\\\") {
      r.consume();
      var q = void 0;
      r.gullet.future().text !== " " && (q = r.parseSizeGroup(!0)),
        A.push(q ? q.value : null),
        I(),
        z.push(yn(r)),
        (v = []),
        w.push(v),
        L();
    } else throw new F("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return (
    r.gullet.endGroup(),
    r.gullet.endGroup(),
    {
      type: "array",
      mode: r.mode,
      addJot: a,
      arraystretch: l,
      body: w,
      cols: i,
      rowGaps: A,
      hskipBeforeAndAfter: n,
      hLinesBeforeRow: z,
      colSeparationType: o,
      tags: M,
      leqno: x,
    }
  );
}
function Lr(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var Le = function (e, t) {
    var n,
      a,
      i = e.body.length,
      l = e.hLinesBeforeRow,
      o = 0,
      u = new Array(i),
      m = [],
      d = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
      p = 1 / t.fontMetrics().ptPerEm,
      x = 5 * p;
    if (e.colSeparationType && e.colSeparationType === "small") {
      var y = t.havingStyle(P.SCRIPT).sizeMultiplier;
      x = 0.2778 * (y / t.sizeMultiplier);
    }
    var v =
        e.colSeparationType === "CD"
          ? ee({ number: 3, unit: "ex" }, t)
          : 12 * p,
      w = 3 * p,
      A = e.arraystretch * v,
      z = 0.7 * A,
      M = 0.3 * A,
      L = 0;
    function I(Z0) {
      for (var K0 = 0; K0 < Z0.length; ++K0)
        K0 > 0 && (L += 0.25), m.push({ pos: L, isDashed: Z0[K0] });
    }
    for (I(l[0]), n = 0; n < e.body.length; ++n) {
      var O = e.body[n],
        U = z,
        q = M;
      o < O.length && (o = O.length);
      var Y = new Array(O.length);
      for (a = 0; a < O.length; ++a) {
        var j = _(O[a], t);
        q < j.depth && (q = j.depth),
          U < j.height && (U = j.height),
          (Y[a] = j);
      }
      var T = e.rowGaps[n],
        re = 0;
      T &&
        ((re = ee(T, t)), re > 0 && ((re += M), q < re && (q = re), (re = 0))),
        e.addJot && (q += w),
        (Y.height = U),
        (Y.depth = q),
        (L += U),
        (Y.pos = L),
        (L += q + re),
        (u[n] = Y),
        I(l[n + 1]);
    }
    var te = L / 2 + t.fontMetrics().axisHeight,
      Fe = e.cols || [],
      ue = [],
      Te,
      Ye,
      d0 = [];
    if (e.tags && e.tags.some((Z0) => Z0))
      for (n = 0; n < i; ++n) {
        var f0 = u[n],
          Tt = f0.pos - te,
          Xe = e.tags[n],
          Ze = void 0;
        Xe === !0
          ? (Ze = S.makeSpan(["eqn-num"], [], t))
          : Xe === !1
          ? (Ze = S.makeSpan([], [], t))
          : (Ze = S.makeSpan([], oe(Xe, t, !0), t)),
          (Ze.depth = f0.depth),
          (Ze.height = f0.height),
          d0.push({ type: "elem", elem: Ze, shift: Tt });
      }
    for (a = 0, Ye = 0; a < o || Ye < Fe.length; ++a, ++Ye) {
      for (var we = Fe[Ye] || {}, T0 = !0; we.type === "separator"; ) {
        if (
          (T0 ||
            ((Te = S.makeSpan(["arraycolsep"], [])),
            (Te.style.width = E(t.fontMetrics().doubleRuleSep)),
            ue.push(Te)),
          we.separator === "|" || we.separator === ":")
        ) {
          var Ct = we.separator === "|" ? "solid" : "dashed",
            p0 = S.makeSpan(["vertical-separator"], [], t);
          (p0.style.height = E(L)),
            (p0.style.borderRightWidth = E(d)),
            (p0.style.borderRightStyle = Ct),
            (p0.style.margin = "0 " + E(-d / 2));
          var Xr = L - te;
          Xr && (p0.style.verticalAlign = E(-Xr)), ue.push(p0);
        } else throw new F("Invalid separator type: " + we.separator);
        Ye++, (we = Fe[Ye] || {}), (T0 = !1);
      }
      if (!(a >= o)) {
        var g0 = void 0;
        (a > 0 || e.hskipBeforeAndAfter) &&
          ((g0 = $.deflt(we.pregap, x)),
          g0 !== 0 &&
            ((Te = S.makeSpan(["arraycolsep"], [])),
            (Te.style.width = E(g0)),
            ue.push(Te)));
        var v0 = [];
        for (n = 0; n < i; ++n) {
          var Y0 = u[n],
            X0 = Y0[a];
          if (X0) {
            var el = Y0.pos - te;
            (X0.depth = Y0.depth),
              (X0.height = Y0.height),
              v0.push({ type: "elem", elem: X0, shift: el });
          }
        }
        (v0 = S.makeVList(
          { positionType: "individualShift", children: v0 },
          t
        )),
          (v0 = S.makeSpan(["col-align-" + (we.align || "c")], [v0])),
          ue.push(v0),
          (a < o - 1 || e.hskipBeforeAndAfter) &&
            ((g0 = $.deflt(we.postgap, x)),
            g0 !== 0 &&
              ((Te = S.makeSpan(["arraycolsep"], [])),
              (Te.style.width = E(g0)),
              ue.push(Te)));
      }
    }
    if (((u = S.makeSpan(["mtable"], ue)), m.length > 0)) {
      for (
        var tl = S.makeLineSpan("hline", t, d),
          rl = S.makeLineSpan("hdashline", t, d),
          Dt = [{ type: "elem", elem: u, shift: 0 }];
        m.length > 0;

      ) {
        var Zr = m.pop(),
          Kr = Zr.pos - te;
        Zr.isDashed
          ? Dt.push({ type: "elem", elem: rl, shift: Kr })
          : Dt.push({ type: "elem", elem: tl, shift: Kr });
      }
      u = S.makeVList({ positionType: "individualShift", children: Dt }, t);
    }
    if (d0.length === 0) return S.makeSpan(["mord"], [u], t);
    var Ft = S.makeVList({ positionType: "individualShift", children: d0 }, t);
    return (Ft = S.makeSpan(["tag"], [Ft], t)), S.makeFragment([u, Ft]);
  },
  So = { c: "center ", l: "left ", r: "right " },
  Re = function (e, t) {
    for (
      var n = [],
        a = new D.MathNode("mtd", [], ["mtr-glue"]),
        i = new D.MathNode("mtd", [], ["mml-eqn-num"]),
        l = 0;
      l < e.body.length;
      l++
    ) {
      for (var o = e.body[l], u = [], m = 0; m < o.length; m++)
        u.push(new D.MathNode("mtd", [X(o[m], t)]));
      e.tags &&
        e.tags[l] &&
        (u.unshift(a), u.push(a), e.leqno ? u.unshift(i) : u.push(i)),
        n.push(new D.MathNode("mtr", u));
    }
    var d = new D.MathNode("mtable", n),
      p =
        e.arraystretch === 0.5
          ? 0.1
          : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
    d.setAttribute("rowspacing", E(p));
    var x = "",
      y = "";
    if (e.cols && e.cols.length > 0) {
      var v = e.cols,
        w = "",
        A = !1,
        z = 0,
        M = v.length;
      v[0].type === "separator" && ((x += "top "), (z = 1)),
        v[v.length - 1].type === "separator" && ((x += "bottom "), (M -= 1));
      for (var L = z; L < M; L++)
        v[L].type === "align"
          ? ((y += So[v[L].align]), A && (w += "none "), (A = !0))
          : v[L].type === "separator" &&
            A &&
            ((w += v[L].separator === "|" ? "solid " : "dashed "), (A = !1));
      d.setAttribute("columnalign", y.trim()),
        /[sd]/.test(w) && d.setAttribute("columnlines", w.trim());
    }
    if (e.colSeparationType === "align") {
      for (var I = e.cols || [], O = "", U = 1; U < I.length; U++)
        O += U % 2 ? "0em " : "1em ";
      d.setAttribute("columnspacing", O.trim());
    } else
      e.colSeparationType === "alignat" || e.colSeparationType === "gather"
        ? d.setAttribute("columnspacing", "0em")
        : e.colSeparationType === "small"
        ? d.setAttribute("columnspacing", "0.2778em")
        : e.colSeparationType === "CD"
        ? d.setAttribute("columnspacing", "0.5em")
        : d.setAttribute("columnspacing", "1em");
    var q = "",
      Y = e.hLinesBeforeRow;
    (x += Y[0].length > 0 ? "left " : ""),
      (x += Y[Y.length - 1].length > 0 ? "right " : "");
    for (var j = 1; j < Y.length - 1; j++)
      q += Y[j].length === 0 ? "none " : Y[j][0] ? "dashed " : "solid ";
    return (
      /[sd]/.test(q) && d.setAttribute("rowlines", q.trim()),
      x !== "" &&
        ((d = new D.MathNode("menclose", [d])),
        d.setAttribute("notation", x.trim())),
      e.arraystretch &&
        e.arraystretch < 1 &&
        ((d = new D.MathNode("mstyle", [d])),
        d.setAttribute("scriptlevel", "1")),
      d
    );
  },
  ri = function (e, t) {
    e.envName.indexOf("ed") === -1 && Mt(e);
    var n = [],
      a = e.envName.indexOf("at") > -1 ? "alignat" : "align",
      i = e.envName === "split",
      l = a0(
        e.parser,
        {
          cols: n,
          addJot: !0,
          autoTag: i ? void 0 : Or(e.envName),
          emptySingleRow: !0,
          colSeparationType: a,
          maxNumCols: i ? 2 : void 0,
          leqno: e.parser.settings.leqno,
        },
        "display"
      ),
      o,
      u = 0,
      m = { type: "ordgroup", mode: e.mode, body: [] };
    if (t[0] && t[0].type === "ordgroup") {
      for (var d = "", p = 0; p < t[0].body.length; p++) {
        var x = G(t[0].body[p], "textord");
        d += x.text;
      }
      (o = Number(d)), (u = o * 2);
    }
    var y = !u;
    l.body.forEach(function (z) {
      for (var M = 1; M < z.length; M += 2) {
        var L = G(z[M], "styling"),
          I = G(L.body[0], "ordgroup");
        I.body.unshift(m);
      }
      if (y) u < z.length && (u = z.length);
      else {
        var O = z.length / 2;
        if (o < O)
          throw new F(
            "Too many math in a row: " + ("expected " + o + ", but got " + O),
            z[0]
          );
      }
    });
    for (var v = 0; v < u; ++v) {
      var w = "r",
        A = 0;
      v % 2 === 1 ? (w = "l") : v > 0 && y && (A = 1),
        (n[v] = { type: "align", align: w, pregap: A, postgap: 0 });
    }
    return (l.colSeparationType = y ? "align" : "alignat"), l;
  };
Oe({
  type: "array",
  names: ["array", "darray"],
  props: { numArgs: 1 },
  handler(r, e) {
    var t = kt(e[0]),
      n = t ? [e[0]] : G(e[0], "ordgroup").body,
      a = n.map(function (l) {
        var o = Dr(l),
          u = o.text;
        if ("lcr".indexOf(u) !== -1) return { type: "align", align: u };
        if (u === "|") return { type: "separator", separator: "|" };
        if (u === ":") return { type: "separator", separator: ":" };
        throw new F("Unknown column alignment: " + u, l);
      }),
      i = { cols: a, hskipBeforeAndAfter: !0, maxNumCols: a.length };
    return a0(r.parser, i, Lr(r.envName));
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: [
    "matrix",
    "pmatrix",
    "bmatrix",
    "Bmatrix",
    "vmatrix",
    "Vmatrix",
    "matrix*",
    "pmatrix*",
    "bmatrix*",
    "Bmatrix*",
    "vmatrix*",
    "Vmatrix*",
  ],
  props: { numArgs: 0 },
  handler(r) {
    var e = {
        matrix: null,
        pmatrix: ["(", ")"],
        bmatrix: ["[", "]"],
        Bmatrix: ["\\{", "\\}"],
        vmatrix: ["|", "|"],
        Vmatrix: ["\\Vert", "\\Vert"],
      }[r.envName.replace("*", "")],
      t = "c",
      n = { hskipBeforeAndAfter: !1, cols: [{ type: "align", align: t }] };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var a = r.parser;
      if ((a.consumeSpaces(), a.fetch().text === "[")) {
        if (
          (a.consume(),
          a.consumeSpaces(),
          (t = a.fetch().text),
          "lcr".indexOf(t) === -1)
        )
          throw new F("Expected l or c or r", a.nextToken);
        a.consume(),
          a.consumeSpaces(),
          a.expect("]"),
          a.consume(),
          (n.cols = [{ type: "align", align: t }]);
      }
    }
    var i = a0(r.parser, n, Lr(r.envName)),
      l = Math.max(0, ...i.body.map((o) => o.length));
    return (
      (i.cols = new Array(l).fill({ type: "align", align: t })),
      e
        ? {
            type: "leftright",
            mode: r.mode,
            body: [i],
            left: e[0],
            right: e[1],
            rightColor: void 0,
          }
        : i
    );
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["smallmatrix"],
  props: { numArgs: 0 },
  handler(r) {
    var e = { arraystretch: 0.5 },
      t = a0(r.parser, e, "script");
    return (t.colSeparationType = "small"), t;
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["subarray"],
  props: { numArgs: 1 },
  handler(r, e) {
    var t = kt(e[0]),
      n = t ? [e[0]] : G(e[0], "ordgroup").body,
      a = n.map(function (l) {
        var o = Dr(l),
          u = o.text;
        if ("lc".indexOf(u) !== -1) return { type: "align", align: u };
        throw new F("Unknown column alignment: " + u, l);
      });
    if (a.length > 1) throw new F("{subarray} can contain only one column");
    var i = { cols: a, hskipBeforeAndAfter: !1, arraystretch: 0.5 };
    if (
      ((i = a0(r.parser, i, "script")),
      i.body.length > 0 && i.body[0].length > 1)
    )
      throw new F("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: { numArgs: 0 },
  handler(r) {
    var e = {
        arraystretch: 1.2,
        cols: [
          { type: "align", align: "l", pregap: 0, postgap: 1 },
          { type: "align", align: "l", pregap: 0, postgap: 0 },
        ],
      },
      t = a0(r.parser, e, Lr(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0,
    };
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: { numArgs: 0 },
  handler: ri,
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: { numArgs: 0 },
  handler(r) {
    $.contains(["gather", "gather*"], r.envName) && Mt(r);
    var e = {
      cols: [{ type: "align", align: "c" }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Or(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno,
    };
    return a0(r.parser, e, "display");
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: { numArgs: 1 },
  handler: ri,
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["equation", "equation*"],
  props: { numArgs: 0 },
  handler(r) {
    Mt(r);
    var e = {
      autoTag: Or(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno,
    };
    return a0(r.parser, e, "display");
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
Oe({
  type: "array",
  names: ["CD"],
  props: { numArgs: 0 },
  handler(r) {
    return Mt(r), oo(r.parser);
  },
  htmlBuilder: Le,
  mathmlBuilder: Re,
});
f("\\nonumber", "\\gdef\\@eqnsw{0}");
f("\\notag", "\\nonumber");
B({
  type: "text",
  names: ["\\hline", "\\hdashline"],
  props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
  handler(r, e) {
    throw new F(r.funcName + " valid only within array environment");
  },
});
var xn = ei;
B({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: { numArgs: 1, argTypes: ["text"] },
  handler(r, e) {
    var { parser: t, funcName: n } = r,
      a = e[0];
    if (a.type !== "ordgroup") throw new F("Invalid environment name", a);
    for (var i = "", l = 0; l < a.body.length; ++l)
      i += G(a.body[l], "textord").text;
    if (n === "\\begin") {
      if (!xn.hasOwnProperty(i)) throw new F("No such environment: " + i, a);
      var o = xn[i],
        { args: u, optArgs: m } = t.parseArguments("\\begin{" + i + "}", o),
        d = { mode: t.mode, envName: i, parser: t },
        p = o.handler(d, u, m);
      t.expect("\\end", !1);
      var x = t.nextToken,
        y = G(t.parseFunction(), "environment");
      if (y.name !== i)
        throw new F(
          "Mismatch: \\begin{" + i + "} matched by \\end{" + y.name + "}",
          x
        );
      return p;
    }
    return { type: "environment", mode: t.mode, name: i, nameGroup: a };
  },
});
var ni = (r, e) => {
    var t = r.font,
      n = e.withFont(t);
    return _(r.body, n);
  },
  ai = (r, e) => {
    var t = r.font,
      n = e.withFont(t);
    return X(r.body, n);
  },
  wn = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol",
  };
B({
  type: "font",
  names: [
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    "\\Bbb",
    "\\bold",
    "\\frak",
  ],
  props: { numArgs: 1, allowedInArgument: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = gt(e[0]),
      i = n;
    return (
      i in wn && (i = wn[i]),
      { type: "font", mode: t.mode, font: i.slice(1), body: a }
    );
  },
  htmlBuilder: ni,
  mathmlBuilder: ai,
});
B({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = e[0],
      a = $.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: St(n),
      body: [{ type: "font", mode: t.mode, font: "boldsymbol", body: n }],
      isCharacterBox: a,
    };
  },
});
B({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: { numArgs: 0, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: n, breakOnTokenText: a } = r,
      { mode: i } = t,
      l = t.parseExpression(!0, a),
      o = "math" + n.slice(1);
    return {
      type: "font",
      mode: i,
      font: o,
      body: { type: "ordgroup", mode: t.mode, body: l },
    };
  },
  htmlBuilder: ni,
  mathmlBuilder: ai,
});
var ii = (r, e) => {
    var t = e;
    return (
      r === "display"
        ? (t = t.id >= P.SCRIPT.id ? t.text() : P.DISPLAY)
        : r === "text" && t.size === P.DISPLAY.size
        ? (t = P.TEXT)
        : r === "script"
        ? (t = P.SCRIPT)
        : r === "scriptscript" && (t = P.SCRIPTSCRIPT),
      t
    );
  },
  Rr = (r, e) => {
    var t = ii(r.size, e.style),
      n = t.fracNum(),
      a = t.fracDen(),
      i;
    i = e.havingStyle(n);
    var l = _(r.numer, i, e);
    if (r.continued) {
      var o = 8.5 / e.fontMetrics().ptPerEm,
        u = 3.5 / e.fontMetrics().ptPerEm;
      (l.height = l.height < o ? o : l.height),
        (l.depth = l.depth < u ? u : l.depth);
    }
    i = e.havingStyle(a);
    var m = _(r.denom, i, e),
      d,
      p,
      x;
    r.hasBarLine
      ? (r.barSize
          ? ((p = ee(r.barSize, e)), (d = S.makeLineSpan("frac-line", e, p)))
          : (d = S.makeLineSpan("frac-line", e)),
        (p = d.height),
        (x = d.height))
      : ((d = null), (p = 0), (x = e.fontMetrics().defaultRuleThickness));
    var y, v, w;
    t.size === P.DISPLAY.size || r.size === "display"
      ? ((y = e.fontMetrics().num1),
        p > 0 ? (v = 3 * x) : (v = 7 * x),
        (w = e.fontMetrics().denom1))
      : (p > 0
          ? ((y = e.fontMetrics().num2), (v = x))
          : ((y = e.fontMetrics().num3), (v = 3 * x)),
        (w = e.fontMetrics().denom2));
    var A;
    if (d) {
      var M = e.fontMetrics().axisHeight;
      y - l.depth - (M + 0.5 * p) < v &&
        (y += v - (y - l.depth - (M + 0.5 * p))),
        M - 0.5 * p - (m.height - w) < v &&
          (w += v - (M - 0.5 * p - (m.height - w)));
      var L = -(M - 0.5 * p);
      A = S.makeVList(
        {
          positionType: "individualShift",
          children: [
            { type: "elem", elem: m, shift: w },
            { type: "elem", elem: d, shift: L },
            { type: "elem", elem: l, shift: -y },
          ],
        },
        e
      );
    } else {
      var z = y - l.depth - (m.height - w);
      z < v && ((y += 0.5 * (v - z)), (w += 0.5 * (v - z))),
        (A = S.makeVList(
          {
            positionType: "individualShift",
            children: [
              { type: "elem", elem: m, shift: w },
              { type: "elem", elem: l, shift: -y },
            ],
          },
          e
        ));
    }
    (i = e.havingStyle(t)),
      (A.height *= i.sizeMultiplier / e.sizeMultiplier),
      (A.depth *= i.sizeMultiplier / e.sizeMultiplier);
    var I;
    t.size === P.DISPLAY.size
      ? (I = e.fontMetrics().delim1)
      : t.size === P.SCRIPTSCRIPT.size
      ? (I = e.havingStyle(P.SCRIPT).fontMetrics().delim2)
      : (I = e.fontMetrics().delim2);
    var O, U;
    return (
      r.leftDelim == null
        ? (O = q0(e, ["mopen"]))
        : (O = Ve.customSizedDelim(
            r.leftDelim,
            I,
            !0,
            e.havingStyle(t),
            r.mode,
            ["mopen"]
          )),
      r.continued
        ? (U = S.makeSpan([]))
        : r.rightDelim == null
        ? (U = q0(e, ["mclose"]))
        : (U = Ve.customSizedDelim(
            r.rightDelim,
            I,
            !0,
            e.havingStyle(t),
            r.mode,
            ["mclose"]
          )),
      S.makeSpan(
        ["mord"].concat(i.sizingClasses(e)),
        [O, S.makeSpan(["mfrac"], [A]), U],
        e
      )
    );
  },
  qr = (r, e) => {
    var t = new D.MathNode("mfrac", [X(r.numer, e), X(r.denom, e)]);
    if (!r.hasBarLine) t.setAttribute("linethickness", "0px");
    else if (r.barSize) {
      var n = ee(r.barSize, e);
      t.setAttribute("linethickness", E(n));
    }
    var a = ii(r.size, e.style);
    if (a.size !== e.style.size) {
      t = new D.MathNode("mstyle", [t]);
      var i = a.size === P.DISPLAY.size ? "true" : "false";
      t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
    }
    if (r.leftDelim != null || r.rightDelim != null) {
      var l = [];
      if (r.leftDelim != null) {
        var o = new D.MathNode("mo", [
          new D.TextNode(r.leftDelim.replace("\\", "")),
        ]);
        o.setAttribute("fence", "true"), l.push(o);
      }
      if ((l.push(t), r.rightDelim != null)) {
        var u = new D.MathNode("mo", [
          new D.TextNode(r.rightDelim.replace("\\", "")),
        ]);
        u.setAttribute("fence", "true"), l.push(u);
      }
      return Tr(l);
    }
    return t;
  };
B({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    "\\\\bracefrac",
    "\\\\brackfrac",
  ],
  props: { numArgs: 2, allowedInArgument: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = e[0],
      i = e[1],
      l,
      o = null,
      u = null,
      m = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        (l = !1), (o = "("), (u = ")");
        break;
      case "\\\\bracefrac":
        (l = !1), (o = "\\{"), (u = "\\}");
        break;
      case "\\\\brackfrac":
        (l = !1), (o = "["), (u = "]");
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        m = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        m = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: l,
      leftDelim: o,
      rightDelim: u,
      size: m,
      barSize: null,
    };
  },
  htmlBuilder: Rr,
  mathmlBuilder: qr,
});
B({
  type: "genfrac",
  names: ["\\cfrac"],
  props: { numArgs: 2 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = e[0],
      i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null,
    };
  },
});
B({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: { numArgs: 0, infix: !0 },
  handler(r) {
    var { parser: e, funcName: t, token: n } = r,
      a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return { type: "infix", mode: e.mode, replaceWith: a, token: n };
  },
});
var kn = ["display", "text", "script", "scriptscript"],
  Sn = function (e) {
    var t = null;
    return e.length > 0 && ((t = e), (t = t === "." ? null : t)), t;
  };
B({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"],
  },
  handler(r, e) {
    var { parser: t } = r,
      n = e[4],
      a = e[5],
      i = gt(e[0]),
      l = i.type === "atom" && i.family === "open" ? Sn(i.text) : null,
      o = gt(e[1]),
      u = o.type === "atom" && o.family === "close" ? Sn(o.text) : null,
      m = G(e[2], "size"),
      d,
      p = null;
    m.isBlank ? (d = !0) : ((p = m.value), (d = p.number > 0));
    var x = "auto",
      y = e[3];
    if (y.type === "ordgroup") {
      if (y.body.length > 0) {
        var v = G(y.body[0], "textord");
        x = kn[Number(v.text)];
      }
    } else (y = G(y, "textord")), (x = kn[Number(y.text)]);
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: d,
      barSize: p,
      leftDelim: l,
      rightDelim: u,
      size: x,
    };
  },
  htmlBuilder: Rr,
  mathmlBuilder: qr,
});
B({
  type: "infix",
  names: ["\\above"],
  props: { numArgs: 1, argTypes: ["size"], infix: !0 },
  handler(r, e) {
    var { parser: t, funcName: n, token: a } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: G(e[0], "size").value,
      token: a,
    };
  },
});
B({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: { numArgs: 3, argTypes: ["math", "size", "math"] },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = e[0],
      i = Ql(G(e[1], "infix").size),
      l = e[2],
      o = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: l,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto",
    };
  },
  htmlBuilder: Rr,
  mathmlBuilder: qr,
});
var li = (r, e) => {
    var t = e.style,
      n,
      a;
    r.type === "supsub"
      ? ((n = r.sup
          ? _(r.sup, e.havingStyle(t.sup()), e)
          : _(r.sub, e.havingStyle(t.sub()), e)),
        (a = G(r.base, "horizBrace")))
      : (a = G(r, "horizBrace"));
    var i = _(a.base, e.havingBaseStyle(P.DISPLAY)),
      l = Ge.svgSpan(a, e),
      o;
    if (
      (a.isOver
        ? ((o = S.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: i },
                { type: "kern", size: 0.1 },
                { type: "elem", elem: l },
              ],
            },
            e
          )),
          o.children[0].children[0].children[1].classes.push("svg-align"))
        : ((o = S.makeVList(
            {
              positionType: "bottom",
              positionData: i.depth + 0.1 + l.height,
              children: [
                { type: "elem", elem: l },
                { type: "kern", size: 0.1 },
                { type: "elem", elem: i },
              ],
            },
            e
          )),
          o.children[0].children[0].children[0].classes.push("svg-align")),
      n)
    ) {
      var u = S.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
      a.isOver
        ? (o = S.makeVList(
            {
              positionType: "firstBaseline",
              children: [
                { type: "elem", elem: u },
                { type: "kern", size: 0.2 },
                { type: "elem", elem: n },
              ],
            },
            e
          ))
        : (o = S.makeVList(
            {
              positionType: "bottom",
              positionData: u.depth + 0.2 + n.height + n.depth,
              children: [
                { type: "elem", elem: n },
                { type: "kern", size: 0.2 },
                { type: "elem", elem: u },
              ],
            },
            e
          ));
    }
    return S.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
  },
  Ao = (r, e) => {
    var t = Ge.mathMLnode(r.label);
    return new D.MathNode(r.isOver ? "mover" : "munder", [X(r.base, e), t]);
  };
B({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t, funcName: n } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: e[0],
    };
  },
  htmlBuilder: li,
  mathmlBuilder: Ao,
});
B({
  type: "href",
  names: ["\\href"],
  props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = e[1],
      a = G(e[0], "url").url;
    return t.settings.isTrusted({ command: "\\href", url: a })
      ? { type: "href", mode: t.mode, href: a, body: ne(n) }
      : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = oe(r.body, e, !1);
    return S.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = n0(r.body, e);
    return (
      t instanceof ke || (t = new ke("mrow", [t])),
      t.setAttribute("href", r.href),
      t
    );
  },
});
B({
  type: "href",
  names: ["\\url"],
  props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = G(e[0], "url").url;
    if (!t.settings.isTrusted({ command: "\\url", url: n }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < n.length; i++) {
      var l = n[i];
      l === "~" && (l = "\\textasciitilde"),
        a.push({ type: "textord", mode: "text", text: l });
    }
    var o = { type: "text", mode: t.mode, font: "\\texttt", body: a };
    return { type: "href", mode: t.mode, href: n, body: ne(o) };
  },
});
B({
  type: "hbox",
  names: ["\\hbox"],
  props: { numArgs: 1, argTypes: ["text"], allowedInText: !0, primitive: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "hbox", mode: t.mode, body: ne(e[0]) };
  },
  htmlBuilder(r, e) {
    var t = oe(r.body, e, !1);
    return S.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new D.MathNode("mrow", pe(r.body, e));
  },
});
B({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: n, token: a } = r,
      i = G(e[0], "raw").string,
      l = e[1];
    t.settings.strict &&
      t.settings.reportNonstrict(
        "htmlExtension",
        "HTML extension is disabled on strict mode"
      );
    var o,
      u = {};
    switch (n) {
      case "\\htmlClass":
        (u.class = i), (o = { command: "\\htmlClass", class: i });
        break;
      case "\\htmlId":
        (u.id = i), (o = { command: "\\htmlId", id: i });
        break;
      case "\\htmlStyle":
        (u.style = i), (o = { command: "\\htmlStyle", style: i });
        break;
      case "\\htmlData": {
        for (var m = i.split(","), d = 0; d < m.length; d++) {
          var p = m[d].split("=");
          if (p.length !== 2)
            throw new F("Error parsing key-value for \\htmlData");
          u["data-" + p[0].trim()] = p[1].trim();
        }
        o = { command: "\\htmlData", attributes: u };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(o)
      ? { type: "html", mode: t.mode, attributes: u, body: ne(l) }
      : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = oe(r.body, e, !1),
      n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = S.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" &&
        r.attributes.hasOwnProperty(i) &&
        a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => n0(r.body, e),
});
B({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: { numArgs: 2, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: ne(e[0]),
      mathml: ne(e[1]),
    };
  },
  htmlBuilder: (r, e) => {
    var t = oe(r.html, e, !1);
    return S.makeFragment(t);
  },
  mathmlBuilder: (r, e) => n0(r.mathml, e),
});
var jt = function (e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return { number: +e, unit: "bp" };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t) throw new F("Invalid size: '" + e + "' in \\includegraphics");
  var n = { number: +(t[1] + t[2]), unit: t[3] };
  if (!Ma(n))
    throw new F("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
B({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1,
  },
  handler: (r, e, t) => {
    var { parser: n } = r,
      a = { number: 0, unit: "em" },
      i = { number: 0.9, unit: "em" },
      l = { number: 0, unit: "em" },
      o = "";
    if (t[0])
      for (
        var u = G(t[0], "raw").string, m = u.split(","), d = 0;
        d < m.length;
        d++
      ) {
        var p = m[d].split("=");
        if (p.length === 2) {
          var x = p[1].trim();
          switch (p[0].trim()) {
            case "alt":
              o = x;
              break;
            case "width":
              a = jt(x);
              break;
            case "height":
              i = jt(x);
              break;
            case "totalheight":
              l = jt(x);
              break;
            default:
              throw new F("Invalid key: '" + p[0] + "' in \\includegraphics.");
          }
        }
      }
    var y = G(e[0], "url").url;
    return (
      o === "" &&
        ((o = y),
        (o = o.replace(/^.*[\\/]/, "")),
        (o = o.substring(0, o.lastIndexOf(".")))),
      n.settings.isTrusted({ command: "\\includegraphics", url: y })
        ? {
            type: "includegraphics",
            mode: n.mode,
            alt: o,
            width: a,
            height: i,
            totalheight: l,
            src: y,
          }
        : n.formatUnsupportedCmd("\\includegraphics")
    );
  },
  htmlBuilder: (r, e) => {
    var t = ee(r.height, e),
      n = 0;
    r.totalheight.number > 0 && (n = ee(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = ee(r.width, e));
    var i = { height: E(t + n) };
    a > 0 && (i.width = E(a)), n > 0 && (i.verticalAlign = E(-n));
    var l = new Ss(r.src, r.alt, i);
    return (l.height = t), (l.depth = n), l;
  },
  mathmlBuilder: (r, e) => {
    var t = new D.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = ee(r.height, e),
      a = 0;
    if (
      (r.totalheight.number > 0 &&
        ((a = ee(r.totalheight, e) - n), t.setAttribute("valign", E(-a))),
      t.setAttribute("height", E(n + a)),
      r.width.number > 0)
    ) {
      var i = ee(r.width, e);
      t.setAttribute("width", E(i));
    }
    return t.setAttribute("src", r.src), t;
  },
});
B({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: { numArgs: 1, argTypes: ["size"], primitive: !0, allowedInText: !0 },
  handler(r, e) {
    var { parser: t, funcName: n } = r,
      a = G(e[0], "size");
    if (t.settings.strict) {
      var i = n[1] === "m",
        l = a.value.unit === "mu";
      i
        ? (l ||
            t.settings.reportNonstrict(
              "mathVsTextUnits",
              "LaTeX's " +
                n +
                " supports only mu units, " +
                ("not " + a.value.unit + " units")
            ),
          t.mode !== "math" &&
            t.settings.reportNonstrict(
              "mathVsTextUnits",
              "LaTeX's " + n + " works only in math mode"
            ))
        : l &&
          t.settings.reportNonstrict(
            "mathVsTextUnits",
            "LaTeX's " + n + " doesn't support mu units"
          );
    }
    return { type: "kern", mode: t.mode, dimension: a.value };
  },
  htmlBuilder(r, e) {
    return S.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = ee(r.dimension, e);
    return new D.SpaceNode(t);
  },
});
B({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = e[0];
    return { type: "lap", mode: t.mode, alignment: n.slice(5), body: a };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap"
      ? ((t = S.makeSpan([], [_(r.body, e)])),
        (t = S.makeSpan(["inner"], [t], e)))
      : (t = S.makeSpan(["inner"], [_(r.body, e)]));
    var n = S.makeSpan(["fix"], []),
      a = S.makeSpan([r.alignment], [t, n], e),
      i = S.makeSpan(["strut"]);
    return (
      (i.style.height = E(a.height + a.depth)),
      a.depth && (i.style.verticalAlign = E(-a.depth)),
      a.children.unshift(i),
      (a = S.makeSpan(["thinbox"], [a], e)),
      S.makeSpan(["mord", "vbox"], [a], e)
    );
  },
  mathmlBuilder: (r, e) => {
    var t = new D.MathNode("mpadded", [X(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  },
});
B({
  type: "styling",
  names: ["\\(", "$"],
  props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
  handler(r, e) {
    var { funcName: t, parser: n } = r,
      a = n.mode;
    n.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$",
      l = n.parseExpression(!1, i);
    return (
      n.expect(i),
      n.switchMode(a),
      { type: "styling", mode: n.mode, style: "text", body: l }
    );
  },
});
B({
  type: "text",
  names: ["\\)", "\\]"],
  props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
  handler(r, e) {
    throw new F("Mismatched " + r.funcName);
  },
});
var An = (r, e) => {
  switch (e.style.size) {
    case P.DISPLAY.size:
      return r.display;
    case P.TEXT.size:
      return r.text;
    case P.SCRIPT.size:
      return r.script;
    case P.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
B({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: { numArgs: 4, primitive: !0 },
  handler: (r, e) => {
    var { parser: t } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: ne(e[0]),
      text: ne(e[1]),
      script: ne(e[2]),
      scriptscript: ne(e[3]),
    };
  },
  htmlBuilder: (r, e) => {
    var t = An(r, e),
      n = oe(t, e, !1);
    return S.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = An(r, e);
    return n0(t, e);
  },
});
var si = (r, e, t, n, a, i, l) => {
    r = S.makeSpan([], [r]);
    var o = t && $.isCharacterBox(t),
      u,
      m;
    if (e) {
      var d = _(e, n.havingStyle(a.sup()), n);
      m = {
        elem: d,
        kern: Math.max(
          n.fontMetrics().bigOpSpacing1,
          n.fontMetrics().bigOpSpacing3 - d.depth
        ),
      };
    }
    if (t) {
      var p = _(t, n.havingStyle(a.sub()), n);
      u = {
        elem: p,
        kern: Math.max(
          n.fontMetrics().bigOpSpacing2,
          n.fontMetrics().bigOpSpacing4 - p.height
        ),
      };
    }
    var x;
    if (m && u) {
      var y =
        n.fontMetrics().bigOpSpacing5 +
        u.elem.height +
        u.elem.depth +
        u.kern +
        r.depth +
        l;
      x = S.makeVList(
        {
          positionType: "bottom",
          positionData: y,
          children: [
            { type: "kern", size: n.fontMetrics().bigOpSpacing5 },
            { type: "elem", elem: u.elem, marginLeft: E(-i) },
            { type: "kern", size: u.kern },
            { type: "elem", elem: r },
            { type: "kern", size: m.kern },
            { type: "elem", elem: m.elem, marginLeft: E(i) },
            { type: "kern", size: n.fontMetrics().bigOpSpacing5 },
          ],
        },
        n
      );
    } else if (u) {
      var v = r.height - l;
      x = S.makeVList(
        {
          positionType: "top",
          positionData: v,
          children: [
            { type: "kern", size: n.fontMetrics().bigOpSpacing5 },
            { type: "elem", elem: u.elem, marginLeft: E(-i) },
            { type: "kern", size: u.kern },
            { type: "elem", elem: r },
          ],
        },
        n
      );
    } else if (m) {
      var w = r.depth + l;
      x = S.makeVList(
        {
          positionType: "bottom",
          positionData: w,
          children: [
            { type: "elem", elem: r },
            { type: "kern", size: m.kern },
            { type: "elem", elem: m.elem, marginLeft: E(i) },
            { type: "kern", size: n.fontMetrics().bigOpSpacing5 },
          ],
        },
        n
      );
    } else return r;
    var A = [x];
    if (u && i !== 0 && !o) {
      var z = S.makeSpan(["mspace"], [], n);
      (z.style.marginRight = E(i)), A.unshift(z);
    }
    return S.makeSpan(["mop", "op-limits"], A, n);
  },
  oi = ["\\smallint"],
  M0 = (r, e) => {
    var t,
      n,
      a = !1,
      i;
    r.type === "supsub"
      ? ((t = r.sup), (n = r.sub), (i = G(r.base, "op")), (a = !0))
      : (i = G(r, "op"));
    var l = e.style,
      o = !1;
    l.size === P.DISPLAY.size &&
      i.symbol &&
      !$.contains(oi, i.name) &&
      (o = !0);
    var u;
    if (i.symbol) {
      var m = o ? "Size2-Regular" : "Size1-Regular",
        d = "";
      if (
        ((i.name === "\\oiint" || i.name === "\\oiiint") &&
          ((d = i.name.slice(1)),
          (i.name = d === "oiint" ? "\\iint" : "\\iiint")),
        (u = S.makeSymbol(i.name, m, "math", e, [
          "mop",
          "op-symbol",
          o ? "large-op" : "small-op",
        ])),
        d.length > 0)
      ) {
        var p = u.italic,
          x = S.staticSvg(d + "Size" + (o ? "2" : "1"), e);
        (u = S.makeVList(
          {
            positionType: "individualShift",
            children: [
              { type: "elem", elem: u, shift: 0 },
              { type: "elem", elem: x, shift: o ? 0.08 : 0 },
            ],
          },
          e
        )),
          (i.name = "\\" + d),
          u.classes.unshift("mop"),
          (u.italic = p);
      }
    } else if (i.body) {
      var y = oe(i.body, e, !0);
      y.length === 1 && y[0] instanceof Ae
        ? ((u = y[0]), (u.classes[0] = "mop"))
        : (u = S.makeSpan(["mop"], y, e));
    } else {
      for (var v = [], w = 1; w < i.name.length; w++)
        v.push(S.mathsym(i.name[w], i.mode, e));
      u = S.makeSpan(["mop"], v, e);
    }
    var A = 0,
      z = 0;
    return (
      (u instanceof Ae || i.name === "\\oiint" || i.name === "\\oiiint") &&
        !i.suppressBaseShift &&
        ((A = (u.height - u.depth) / 2 - e.fontMetrics().axisHeight),
        (z = u.italic)),
      a
        ? si(u, t, n, e, l, z, A)
        : (A && ((u.style.position = "relative"), (u.style.top = E(A))), u)
    );
  },
  j0 = (r, e) => {
    var t;
    if (r.symbol)
      (t = new ke("mo", [Me(r.name, r.mode)])),
        $.contains(oi, r.name) && t.setAttribute("largeop", "false");
    else if (r.body) t = new ke("mo", pe(r.body, e));
    else {
      t = new ke("mi", [new N0(r.name.slice(1))]);
      var n = new ke("mo", [Me("⁡", "text")]);
      r.parentIsSupSub ? (t = new ke("mrow", [t, n])) : (t = Ra([t, n]));
    }
    return t;
  },
  Mo = {
    "∏": "\\prod",
    "∐": "\\coprod",
    "∑": "\\sum",
    "⋀": "\\bigwedge",
    "⋁": "\\bigvee",
    "⋂": "\\bigcap",
    "⋃": "\\bigcup",
    "⨀": "\\bigodot",
    "⨁": "\\bigoplus",
    "⨂": "\\bigotimes",
    "⨄": "\\biguplus",
    "⨆": "\\bigsqcup",
  };
B({
  type: "op",
  names: [
    "\\coprod",
    "\\bigvee",
    "\\bigwedge",
    "\\biguplus",
    "\\bigcap",
    "\\bigcup",
    "\\intop",
    "\\prod",
    "\\sum",
    "\\bigotimes",
    "\\bigoplus",
    "\\bigodot",
    "\\bigsqcup",
    "\\smallint",
    "∏",
    "∐",
    "∑",
    "⋀",
    "⋁",
    "⋂",
    "⋃",
    "⨀",
    "⨁",
    "⨂",
    "⨄",
    "⨆",
  ],
  props: { numArgs: 0 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = n;
    return (
      a.length === 1 && (a = Mo[a]),
      {
        type: "op",
        mode: t.mode,
        limits: !0,
        parentIsSupSub: !1,
        symbol: !0,
        name: a,
      }
    );
  },
  htmlBuilder: M0,
  mathmlBuilder: j0,
});
B({
  type: "op",
  names: ["\\mathop"],
  props: { numArgs: 1, primitive: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: ne(n),
    };
  },
  htmlBuilder: M0,
  mathmlBuilder: j0,
});
var zo = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint",
};
B({
  type: "op",
  names: [
    "\\arcsin",
    "\\arccos",
    "\\arctan",
    "\\arctg",
    "\\arcctg",
    "\\arg",
    "\\ch",
    "\\cos",
    "\\cosec",
    "\\cosh",
    "\\cot",
    "\\cotg",
    "\\coth",
    "\\csc",
    "\\ctg",
    "\\cth",
    "\\deg",
    "\\dim",
    "\\exp",
    "\\hom",
    "\\ker",
    "\\lg",
    "\\ln",
    "\\log",
    "\\sec",
    "\\sin",
    "\\sinh",
    "\\sh",
    "\\tan",
    "\\tanh",
    "\\tg",
    "\\th",
  ],
  props: { numArgs: 0 },
  handler(r) {
    var { parser: e, funcName: t } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t,
    };
  },
  htmlBuilder: M0,
  mathmlBuilder: j0,
});
B({
  type: "op",
  names: [
    "\\det",
    "\\gcd",
    "\\inf",
    "\\lim",
    "\\max",
    "\\min",
    "\\Pr",
    "\\sup",
  ],
  props: { numArgs: 0 },
  handler(r) {
    var { parser: e, funcName: t } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t,
    };
  },
  htmlBuilder: M0,
  mathmlBuilder: j0,
});
B({
  type: "op",
  names: [
    "\\int",
    "\\iint",
    "\\iiint",
    "\\oint",
    "\\oiint",
    "\\oiiint",
    "∫",
    "∬",
    "∭",
    "∮",
    "∯",
    "∰",
  ],
  props: { numArgs: 0 },
  handler(r) {
    var { parser: e, funcName: t } = r,
      n = t;
    return (
      n.length === 1 && (n = zo[n]),
      {
        type: "op",
        mode: e.mode,
        limits: !1,
        parentIsSupSub: !1,
        symbol: !0,
        name: n,
      }
    );
  },
  htmlBuilder: M0,
  mathmlBuilder: j0,
});
var ui = (r, e) => {
    var t,
      n,
      a = !1,
      i;
    r.type === "supsub"
      ? ((t = r.sup), (n = r.sub), (i = G(r.base, "operatorname")), (a = !0))
      : (i = G(r, "operatorname"));
    var l;
    if (i.body.length > 0) {
      for (
        var o = i.body.map((p) => {
            var x = p.text;
            return typeof x == "string"
              ? { type: "textord", mode: p.mode, text: x }
              : p;
          }),
          u = oe(o, e.withFont("mathrm"), !0),
          m = 0;
        m < u.length;
        m++
      ) {
        var d = u[m];
        d instanceof Ae &&
          (d.text = d.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
      }
      l = S.makeSpan(["mop"], u, e);
    } else l = S.makeSpan(["mop"], [], e);
    return a ? si(l, t, n, e, e.style, 0, 0) : l;
  },
  To = (r, e) => {
    for (
      var t = pe(r.body, e.withFont("mathrm")), n = !0, a = 0;
      a < t.length;
      a++
    ) {
      var i = t[a];
      if (!(i instanceof D.SpaceNode))
        if (i instanceof D.MathNode)
          switch (i.type) {
            case "mi":
            case "mn":
            case "ms":
            case "mspace":
            case "mtext":
              break;
            case "mo": {
              var l = i.children[0];
              i.children.length === 1 && l instanceof D.TextNode
                ? (l.text = l.text
                    .replace(/\u2212/, "-")
                    .replace(/\u2217/, "*"))
                : (n = !1);
              break;
            }
            default:
              n = !1;
          }
        else n = !1;
    }
    if (n) {
      var o = t.map((d) => d.toText()).join("");
      t = [new D.TextNode(o)];
    }
    var u = new D.MathNode("mi", t);
    u.setAttribute("mathvariant", "normal");
    var m = new D.MathNode("mo", [Me("⁡", "text")]);
    return r.parentIsSupSub
      ? new D.MathNode("mrow", [u, m])
      : D.newDocumentFragment([u, m]);
  };
B({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: { numArgs: 1 },
  handler: (r, e) => {
    var { parser: t, funcName: n } = r,
      a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: ne(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1,
    };
  },
  htmlBuilder: ui,
  mathmlBuilder: To,
});
f("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
h0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple
      ? S.makeFragment(oe(r.body, e, !1))
      : S.makeSpan(["mord"], oe(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return n0(r.body, e, !0);
  },
});
B({
  type: "overline",
  names: ["\\overline"],
  props: { numArgs: 1 },
  handler(r, e) {
    var { parser: t } = r,
      n = e[0];
    return { type: "overline", mode: t.mode, body: n };
  },
  htmlBuilder(r, e) {
    var t = _(r.body, e.havingCrampedStyle()),
      n = S.makeLineSpan("overline-line", e),
      a = e.fontMetrics().defaultRuleThickness,
      i = S.makeVList(
        {
          positionType: "firstBaseline",
          children: [
            { type: "elem", elem: t },
            { type: "kern", size: 3 * a },
            { type: "elem", elem: n },
            { type: "kern", size: a },
          ],
        },
        e
      );
    return S.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mo", [new D.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new D.MathNode("mover", [X(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  },
});
B({
  type: "phantom",
  names: ["\\phantom"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = e[0];
    return { type: "phantom", mode: t.mode, body: ne(n) };
  },
  htmlBuilder: (r, e) => {
    var t = oe(r.body, e.withPhantom(), !1);
    return S.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = pe(r.body, e);
    return new D.MathNode("mphantom", t);
  },
});
B({
  type: "hphantom",
  names: ["\\hphantom"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = e[0];
    return { type: "hphantom", mode: t.mode, body: n };
  },
  htmlBuilder: (r, e) => {
    var t = S.makeSpan([], [_(r.body, e.withPhantom())]);
    if (((t.height = 0), (t.depth = 0), t.children))
      for (var n = 0; n < t.children.length; n++)
        (t.children[n].height = 0), (t.children[n].depth = 0);
    return (
      (t = S.makeVList(
        {
          positionType: "firstBaseline",
          children: [{ type: "elem", elem: t }],
        },
        e
      )),
      S.makeSpan(["mord"], [t], e)
    );
  },
  mathmlBuilder: (r, e) => {
    var t = pe(ne(r.body), e),
      n = new D.MathNode("mphantom", t),
      a = new D.MathNode("mpadded", [n]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  },
});
B({
  type: "vphantom",
  names: ["\\vphantom"],
  props: { numArgs: 1, allowedInText: !0 },
  handler: (r, e) => {
    var { parser: t } = r,
      n = e[0];
    return { type: "vphantom", mode: t.mode, body: n };
  },
  htmlBuilder: (r, e) => {
    var t = S.makeSpan(["inner"], [_(r.body, e.withPhantom())]),
      n = S.makeSpan(["fix"], []);
    return S.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = pe(ne(r.body), e),
      n = new D.MathNode("mphantom", t),
      a = new D.MathNode("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  },
});
B({
  type: "raisebox",
  names: ["\\raisebox"],
  props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r,
      n = G(e[0], "size").value,
      a = e[1];
    return { type: "raisebox", mode: t.mode, dy: n, body: a };
  },
  htmlBuilder(r, e) {
    var t = _(r.body, e),
      n = ee(r.dy, e);
    return S.makeVList(
      {
        positionType: "shift",
        positionData: -n,
        children: [{ type: "elem", elem: t }],
      },
      e
    );
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mpadded", [X(r.body, e)]),
      n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  },
});
B({
  type: "internal",
  names: ["\\relax"],
  props: { numArgs: 0, allowedInText: !0 },
  handler(r) {
    var { parser: e } = r;
    return { type: "internal", mode: e.mode };
  },
});
B({
  type: "rule",
  names: ["\\rule"],
  props: { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] },
  handler(r, e, t) {
    var { parser: n } = r,
      a = t[0],
      i = G(e[0], "size"),
      l = G(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && G(a, "size").value,
      width: i.value,
      height: l.value,
    };
  },
  htmlBuilder(r, e) {
    var t = S.makeSpan(["mord", "rule"], [], e),
      n = ee(r.width, e),
      a = ee(r.height, e),
      i = r.shift ? ee(r.shift, e) : 0;
    return (
      (t.style.borderRightWidth = E(n)),
      (t.style.borderTopWidth = E(a)),
      (t.style.bottom = E(i)),
      (t.width = n),
      (t.height = a + i),
      (t.depth = -i),
      (t.maxFontSize = a * 1.125 * e.sizeMultiplier),
      t
    );
  },
  mathmlBuilder(r, e) {
    var t = ee(r.width, e),
      n = ee(r.height, e),
      a = r.shift ? ee(r.shift, e) : 0,
      i = (e.color && e.getColor()) || "black",
      l = new D.MathNode("mspace");
    l.setAttribute("mathbackground", i),
      l.setAttribute("width", E(t)),
      l.setAttribute("height", E(n));
    var o = new D.MathNode("mpadded", [l]);
    return (
      a >= 0
        ? o.setAttribute("height", E(a))
        : (o.setAttribute("height", E(a)), o.setAttribute("depth", E(-a))),
      o.setAttribute("voffset", E(a)),
      o
    );
  },
});
function ci(r, e, t) {
  for (
    var n = oe(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0;
    i < n.length;
    i++
  ) {
    var l = n[i].classes.indexOf("sizing");
    l < 0
      ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t))
      : n[i].classes[l + 1] === "reset-size" + e.size &&
        (n[i].classes[l + 1] = "reset-size" + t.size),
      (n[i].height *= a),
      (n[i].depth *= a);
  }
  return S.makeFragment(n);
}
var Mn = [
    "\\tiny",
    "\\sixptsize",
    "\\scriptsize",
    "\\footnotesize",
    "\\small",
    "\\normalsize",
    "\\large",
    "\\Large",
    "\\LARGE",
    "\\huge",
    "\\Huge",
  ],
  Co = (r, e) => {
    var t = e.havingSize(r.size);
    return ci(r.body, t, e);
  };
B({
  type: "sizing",
  names: Mn,
  props: { numArgs: 0, allowedInText: !0 },
  handler: (r, e) => {
    var { breakOnTokenText: t, funcName: n, parser: a } = r,
      i = a.parseExpression(!1, t);
    return { type: "sizing", mode: a.mode, size: Mn.indexOf(n) + 1, body: i };
  },
  htmlBuilder: Co,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size),
      n = pe(r.body, t),
      a = new D.MathNode("mstyle", n);
    return a.setAttribute("mathsize", E(t.sizeMultiplier)), a;
  },
});
B({
  type: "smash",
  names: ["\\smash"],
  props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
  handler: (r, e, t) => {
    var { parser: n } = r,
      a = !1,
      i = !1,
      l = t[0] && G(t[0], "ordgroup");
    if (l)
      for (var o = "", u = 0; u < l.body.length; ++u) {
        var m = l.body[u];
        if (((o = m.text), o === "t")) a = !0;
        else if (o === "b") i = !0;
        else {
          (a = !1), (i = !1);
          break;
        }
      }
    else (a = !0), (i = !0);
    var d = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: d,
      smashHeight: a,
      smashDepth: i,
    };
  },
  htmlBuilder: (r, e) => {
    var t = S.makeSpan([], [_(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth) return t;
    if (r.smashHeight && ((t.height = 0), t.children))
      for (var n = 0; n < t.children.length; n++) t.children[n].height = 0;
    if (r.smashDepth && ((t.depth = 0), t.children))
      for (var a = 0; a < t.children.length; a++) t.children[a].depth = 0;
    var i = S.makeVList(
      { positionType: "firstBaseline", children: [{ type: "elem", elem: t }] },
      e
    );
    return S.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new D.MathNode("mpadded", [X(r.body, e)]);
    return (
      r.smashHeight && t.setAttribute("height", "0px"),
      r.smashDepth && t.setAttribute("depth", "0px"),
      t
    );
  },
});
B({
  type: "sqrt",
  names: ["\\sqrt"],
  props: { numArgs: 1, numOptionalArgs: 1 },
  handler(r, e, t) {
    var { parser: n } = r,
      a = t[0],
      i = e[0];
    return { type: "sqrt", mode: n.mode, body: i, index: a };
  },
  htmlBuilder(r, e) {
    var t = _(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight),
      (t = S.wrapFragment(t, e));
    var n = e.fontMetrics(),
      a = n.defaultRuleThickness,
      i = a;
    e.style.id < P.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = a + i / 4,
      o = t.height + t.depth + l + a,
      { span: u, ruleWidth: m, advanceWidth: d } = Ve.sqrtImage(o, e),
      p = u.height - m;
    p > t.height + t.depth + l && (l = (l + p - t.height - t.depth) / 2);
    var x = u.height - t.height - l - m;
    t.style.paddingLeft = E(d);
    var y = S.makeVList(
      {
        positionType: "firstBaseline",
        children: [
          { type: "elem", elem: t, wrapperClasses: ["svg-align"] },
          { type: "kern", size: -(t.height + x) },
          { type: "elem", elem: u },
          { type: "kern", size: m },
        ],
      },
      e
    );
    if (r.index) {
      var v = e.havingStyle(P.SCRIPTSCRIPT),
        w = _(r.index, v, e),
        A = 0.6 * (y.height - y.depth),
        z = S.makeVList(
          {
            positionType: "shift",
            positionData: -A,
            children: [{ type: "elem", elem: w }],
          },
          e
        ),
        M = S.makeSpan(["root"], [z]);
      return S.makeSpan(["mord", "sqrt"], [M, y], e);
    } else return S.makeSpan(["mord", "sqrt"], [y], e);
  },
  mathmlBuilder(r, e) {
    var { body: t, index: n } = r;
    return n
      ? new D.MathNode("mroot", [X(t, e), X(n, e)])
      : new D.MathNode("msqrt", [X(t, e)]);
  },
});
var zn = {
  display: P.DISPLAY,
  text: P.TEXT,
  script: P.SCRIPT,
  scriptscript: P.SCRIPTSCRIPT,
};
B({
  type: "styling",
  names: [
    "\\displaystyle",
    "\\textstyle",
    "\\scriptstyle",
    "\\scriptscriptstyle",
  ],
  props: { numArgs: 0, allowedInText: !0, primitive: !0 },
  handler(r, e) {
    var { breakOnTokenText: t, funcName: n, parser: a } = r,
      i = a.parseExpression(!0, t),
      l = n.slice(1, n.length - 5);
    return { type: "styling", mode: a.mode, style: l, body: i };
  },
  htmlBuilder(r, e) {
    var t = zn[r.style],
      n = e.havingStyle(t).withFont("");
    return ci(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = zn[r.style],
      n = e.havingStyle(t),
      a = pe(r.body, n),
      i = new D.MathNode("mstyle", a),
      l = {
        display: ["0", "true"],
        text: ["0", "false"],
        script: ["1", "false"],
        scriptscript: ["2", "false"],
      },
      o = l[r.style];
    return (
      i.setAttribute("scriptlevel", o[0]),
      i.setAttribute("displaystyle", o[1]),
      i
    );
  },
});
var Do = function (e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a =
        n.limits && (t.style.size === P.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? M0 : null;
    } else if (n.type === "operatorname") {
      var i =
        n.alwaysHandleSupSub && (t.style.size === P.DISPLAY.size || n.limits);
      return i ? ui : null;
    } else {
      if (n.type === "accent") return $.isCharacterBox(n.base) ? Fr : null;
      if (n.type === "horizBrace") {
        var l = !e.sub;
        return l === n.isOver ? li : null;
      } else return null;
    }
  else return null;
};
h0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = Do(r, e);
    if (t) return t(r, e);
    var { base: n, sup: a, sub: i } = r,
      l = _(n, e),
      o,
      u,
      m = e.fontMetrics(),
      d = 0,
      p = 0,
      x = n && $.isCharacterBox(n);
    if (a) {
      var y = e.havingStyle(e.style.sup());
      (o = _(a, y, e)),
        x ||
          (d =
            l.height -
            (y.fontMetrics().supDrop * y.sizeMultiplier) / e.sizeMultiplier);
    }
    if (i) {
      var v = e.havingStyle(e.style.sub());
      (u = _(i, v, e)),
        x ||
          (p =
            l.depth +
            (v.fontMetrics().subDrop * v.sizeMultiplier) / e.sizeMultiplier);
    }
    var w;
    e.style === P.DISPLAY
      ? (w = m.sup1)
      : e.style.cramped
      ? (w = m.sup3)
      : (w = m.sup2);
    var A = e.sizeMultiplier,
      z = E(0.5 / m.ptPerEm / A),
      M = null;
    if (u) {
      var L =
        r.base &&
        r.base.type === "op" &&
        r.base.name &&
        (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof Ae || L) && (M = E(-l.italic));
    }
    var I;
    if (o && u) {
      (d = Math.max(d, w, o.depth + 0.25 * m.xHeight)),
        (p = Math.max(p, m.sub2));
      var O = m.defaultRuleThickness,
        U = 4 * O;
      if (d - o.depth - (u.height - p) < U) {
        p = U - (d - o.depth) + u.height;
        var q = 0.8 * m.xHeight - (d - o.depth);
        q > 0 && ((d += q), (p -= q));
      }
      var Y = [
        { type: "elem", elem: u, shift: p, marginRight: z, marginLeft: M },
        { type: "elem", elem: o, shift: -d, marginRight: z },
      ];
      I = S.makeVList({ positionType: "individualShift", children: Y }, e);
    } else if (u) {
      p = Math.max(p, m.sub1, u.height - 0.8 * m.xHeight);
      var j = [{ type: "elem", elem: u, marginLeft: M, marginRight: z }];
      I = S.makeVList(
        { positionType: "shift", positionData: p, children: j },
        e
      );
    } else if (o)
      (d = Math.max(d, w, o.depth + 0.25 * m.xHeight)),
        (I = S.makeVList(
          {
            positionType: "shift",
            positionData: -d,
            children: [{ type: "elem", elem: o, marginRight: z }],
          },
          e
        ));
    else throw new Error("supsub must have either sup or sub.");
    var T = sr(l, "right") || "mord";
    return S.makeSpan([T], [l, S.makeSpan(["msupsub"], [I])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1,
      n,
      a;
    r.base &&
      r.base.type === "horizBrace" &&
      ((a = !!r.sup), a === r.base.isOver && ((t = !0), (n = r.base.isOver))),
      r.base &&
        (r.base.type === "op" || r.base.type === "operatorname") &&
        (r.base.parentIsSupSub = !0);
    var i = [X(r.base, e)];
    r.sub && i.push(X(r.sub, e)), r.sup && i.push(X(r.sup, e));
    var l;
    if (t) l = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var m = r.base;
        (m && m.type === "op" && m.limits && e.style === P.DISPLAY) ||
        (m &&
          m.type === "operatorname" &&
          m.alwaysHandleSupSub &&
          (e.style === P.DISPLAY || m.limits))
          ? (l = "munderover")
          : (l = "msubsup");
      } else {
        var u = r.base;
        (u &&
          u.type === "op" &&
          u.limits &&
          (e.style === P.DISPLAY || u.alwaysHandleSupSub)) ||
        (u &&
          u.type === "operatorname" &&
          u.alwaysHandleSupSub &&
          (u.limits || e.style === P.DISPLAY))
          ? (l = "munder")
          : (l = "msub");
      }
    else {
      var o = r.base;
      (o &&
        o.type === "op" &&
        o.limits &&
        (e.style === P.DISPLAY || o.alwaysHandleSupSub)) ||
      (o &&
        o.type === "operatorname" &&
        o.alwaysHandleSupSub &&
        (o.limits || e.style === P.DISPLAY))
        ? (l = "mover")
        : (l = "msup");
    }
    return new D.MathNode(l, i);
  },
});
h0({
  type: "atom",
  htmlBuilder(r, e) {
    return S.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mo", [Me(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Cr(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else
      r.family === "punct"
        ? t.setAttribute("separator", "true")
        : (r.family === "open" || r.family === "close") &&
          t.setAttribute("stretchy", "false");
    return t;
  },
});
var hi = { mi: "italic", mn: "normal", mtext: "normal" };
h0({
  type: "mathord",
  htmlBuilder(r, e) {
    return S.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mi", [Me(r.text, r.mode, e)]),
      n = Cr(r, e) || "italic";
    return n !== hi[t.type] && t.setAttribute("mathvariant", n), t;
  },
});
h0({
  type: "textord",
  htmlBuilder(r, e) {
    return S.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = Me(r.text, r.mode, e),
      n = Cr(r, e) || "normal",
      a;
    return (
      r.mode === "text"
        ? (a = new D.MathNode("mtext", [t]))
        : /[0-9]/.test(r.text)
        ? (a = new D.MathNode("mn", [t]))
        : r.text === "\\prime"
        ? (a = new D.MathNode("mo", [t]))
        : (a = new D.MathNode("mi", [t])),
      n !== hi[a.type] && a.setAttribute("mathvariant", n),
      a
    );
  },
});
var Gt = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
  Wt = {
    " ": {},
    "\\ ": {},
    "~": { className: "nobreak" },
    "\\space": {},
    "\\nobreakspace": { className: "nobreak" },
  };
h0({
  type: "spacing",
  htmlBuilder(r, e) {
    if (Wt.hasOwnProperty(r.text)) {
      var t = Wt[r.text].className || "";
      if (r.mode === "text") {
        var n = S.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return S.makeSpan(["mspace", t], [S.mathsym(r.text, r.mode, e)], e);
    } else {
      if (Gt.hasOwnProperty(r.text))
        return S.makeSpan(["mspace", Gt[r.text]], [], e);
      throw new F('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (Wt.hasOwnProperty(r.text))
      t = new D.MathNode("mtext", [new D.TextNode(" ")]);
    else {
      if (Gt.hasOwnProperty(r.text)) return new D.MathNode("mspace");
      throw new F('Unknown type of space "' + r.text + '"');
    }
    return t;
  },
});
var Tn = () => {
  var r = new D.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
h0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mtable", [
      new D.MathNode("mtr", [
        Tn(),
        new D.MathNode("mtd", [n0(r.body, e)]),
        Tn(),
        new D.MathNode("mtd", [n0(r.tag, e)]),
      ]),
    ]);
    return t.setAttribute("width", "100%"), t;
  },
});
var Cn = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm",
  },
  Dn = { "\\textbf": "textbf", "\\textmd": "textmd" },
  Fo = { "\\textit": "textit", "\\textup": "textup" },
  Fn = (r, e) => {
    var t = r.font;
    return t
      ? Cn[t]
        ? e.withTextFontFamily(Cn[t])
        : Dn[t]
        ? e.withTextFontWeight(Dn[t])
        : e.withTextFontShape(Fo[t])
      : e;
  };
B({
  type: "text",
  names: [
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    "\\textbf",
    "\\textmd",
    "\\textit",
    "\\textup",
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0,
  },
  handler(r, e) {
    var { parser: t, funcName: n } = r,
      a = e[0];
    return { type: "text", mode: t.mode, body: ne(a), font: n };
  },
  htmlBuilder(r, e) {
    var t = Fn(r, e),
      n = oe(r.body, t, !0);
    return S.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = Fn(r, e);
    return n0(r.body, t);
  },
});
B({
  type: "underline",
  names: ["\\underline"],
  props: { numArgs: 1, allowedInText: !0 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "underline", mode: t.mode, body: e[0] };
  },
  htmlBuilder(r, e) {
    var t = _(r.body, e),
      n = S.makeLineSpan("underline-line", e),
      a = e.fontMetrics().defaultRuleThickness,
      i = S.makeVList(
        {
          positionType: "top",
          positionData: t.height,
          children: [
            { type: "kern", size: a },
            { type: "elem", elem: n },
            { type: "kern", size: 3 * a },
            { type: "elem", elem: t },
          ],
        },
        e
      );
    return S.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new D.MathNode("mo", [new D.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new D.MathNode("munder", [X(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  },
});
B({
  type: "vcenter",
  names: ["\\vcenter"],
  props: { numArgs: 1, argTypes: ["original"], allowedInText: !1 },
  handler(r, e) {
    var { parser: t } = r;
    return { type: "vcenter", mode: t.mode, body: e[0] };
  },
  htmlBuilder(r, e) {
    var t = _(r.body, e),
      n = e.fontMetrics().axisHeight,
      a = 0.5 * (t.height - n - (t.depth + n));
    return S.makeVList(
      {
        positionType: "shift",
        positionData: a,
        children: [{ type: "elem", elem: t }],
      },
      e
    );
  },
  mathmlBuilder(r, e) {
    return new D.MathNode("mpadded", [X(r.body, e)], ["vcenter"]);
  },
});
B({
  type: "verb",
  names: ["\\verb"],
  props: { numArgs: 0, allowedInText: !0 },
  handler(r, e, t) {
    throw new F("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (
      var t = Nn(r), n = [], a = e.havingStyle(e.style.text()), i = 0;
      i < t.length;
      i++
    ) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"),
        n.push(
          S.makeSymbol(l, "Typewriter-Regular", r.mode, a, ["mord", "texttt"])
        );
    }
    return S.makeSpan(
      ["mord", "text"].concat(a.sizingClasses(e)),
      S.tryCombineChars(n),
      a
    );
  },
  mathmlBuilder(r, e) {
    var t = new D.TextNode(Nn(r)),
      n = new D.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  },
});
var Nn = (r) => r.body.replace(/ /g, r.star ? "␣" : " "),
  Qe = Oa,
  mi = `[ \r
	]`,
  No = "\\\\[a-zA-Z@]+",
  Eo = "\\\\[^\uD800-\uDFFF]",
  Bo = "(" + No + ")" + mi + "*",
  Oo = `\\\\(
|[ \r	]+
?)[ \r	]*`,
  hr = "[̀-ͯ]",
  Lo = new RegExp(hr + "+$"),
  Ro =
    "(" +
    mi +
    "+)|" +
    (Oo + "|") +
    "([!-\\[\\]-‧‪-퟿豈-￿]" +
    (hr + "*") +
    "|[\uD800-\uDBFF][\uDC00-\uDFFF]" +
    (hr + "*") +
    "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" +
    ("|" + Bo) +
    ("|" + Eo + ")");
class En {
  constructor(e, t) {
    (this.input = void 0),
      (this.settings = void 0),
      (this.tokenRegex = void 0),
      (this.catcodes = void 0),
      (this.input = e),
      (this.settings = t),
      (this.tokenRegex = new RegExp(Ro, "g")),
      (this.catcodes = { "%": 14, "~": 13 });
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  lex() {
    var e = this.input,
      t = this.tokenRegex.lastIndex;
    if (t === e.length) return new Be("EOF", new ve(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new F(
        "Unexpected character: '" + e[t] + "'",
        new Be(e[t], new ve(this, t, t + 1))
      );
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(
        `
`,
        this.tokenRegex.lastIndex
      );
      return (
        i === -1
          ? ((this.tokenRegex.lastIndex = e.length),
            this.settings.reportNonstrict(
              "commentAtEnd",
              "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)"
            ))
          : (this.tokenRegex.lastIndex = i + 1),
        this.lex()
      );
    }
    return new Be(a, new ve(this, t, this.tokenRegex.lastIndex));
  }
}
class qo {
  constructor(e, t) {
    e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      (this.current = void 0),
      (this.builtins = void 0),
      (this.undefStack = void 0),
      (this.current = t),
      (this.builtins = e),
      (this.undefStack = []);
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (this.undefStack.length === 0)
      throw new F(
        "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug"
      );
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) &&
        (e[t] == null ? delete this.current[t] : (this.current[t] = e[t]));
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  set(e, t, n) {
    if ((n === void 0 && (n = !1), n)) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 &&
        (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : (this.current[e] = t);
  }
}
var Io = ti;
f("\\noexpand", function (r) {
  var e = r.popToken();
  return (
    r.isExpandable(e.text) && ((e.noexpand = !0), (e.treatAsRelax = !0)),
    { tokens: [e], numArgs: 0 }
  );
});
f("\\expandafter", function (r) {
  var e = r.popToken();
  return r.expandOnce(!0), { tokens: [e], numArgs: 0 };
});
f("\\@firstoftwo", function (r) {
  var e = r.consumeArgs(2);
  return { tokens: e[0], numArgs: 0 };
});
f("\\@secondoftwo", function (r) {
  var e = r.consumeArgs(2);
  return { tokens: e[1], numArgs: 0 };
});
f("\\@ifnextchar", function (r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text
    ? { tokens: e[1], numArgs: 0 }
    : { tokens: e[2], numArgs: 0 };
});
f("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
f("\\TextOrMath", function (r) {
  var e = r.consumeArgs(2);
  return r.mode === "text"
    ? { tokens: e[0], numArgs: 0 }
    : { tokens: e[1], numArgs: 0 };
});
var Bn = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15,
};
f("\\char", function (r) {
  var e = r.popToken(),
    t,
    n = "";
  if (e.text === "'") (t = 8), (e = r.popToken());
  else if (e.text === '"') (t = 16), (e = r.popToken());
  else if (e.text === "`")
    if (((e = r.popToken()), e.text[0] === "\\")) n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF") throw new F("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else t = 10;
  if (t) {
    if (((n = Bn[e.text]), n == null || n >= t))
      throw new F("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Bn[r.future().text]) != null && a < t; )
      (n *= t), (n += a), r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Ir = (r, e, t) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new F("\\newcommand's first argument must be a macro name");
  var a = n[0].text,
    i = r.isDefined(a);
  if (i && !e)
    throw new F(
      "\\newcommand{" +
        a +
        "} attempting to redefine " +
        (a + "; use \\renewcommand")
    );
  if (!i && !t)
    throw new F(
      "\\renewcommand{" +
        a +
        "} when command " +
        a +
        " does not yet exist; use \\newcommand"
    );
  var l = 0;
  if (((n = r.consumeArg().tokens), n.length === 1 && n[0].text === "[")) {
    for (
      var o = "", u = r.expandNextToken();
      u.text !== "]" && u.text !== "EOF";

    )
      (o += u.text), (u = r.expandNextToken());
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new F("Invalid number of arguments: " + o);
    (l = parseInt(o)), (n = r.consumeArg().tokens);
  }
  return r.macros.set(a, { tokens: n, numArgs: l }), "";
};
f("\\newcommand", (r) => Ir(r, !1, !0));
f("\\renewcommand", (r) => Ir(r, !0, !1));
f("\\providecommand", (r) => Ir(r, !0, !0));
f("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return (
    console.log(
      e
        .reverse()
        .map((t) => t.text)
        .join("")
    ),
    ""
  );
});
f("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return (
    console.error(
      e
        .reverse()
        .map((t) => t.text)
        .join("")
    ),
    ""
  );
});
f("\\show", (r) => {
  var e = r.popToken(),
    t = e.text;
  return console.log(e, r.macros.get(t), Qe[t], Z.math[t], Z.text[t]), "";
});
f("\\bgroup", "{");
f("\\egroup", "}");
f("~", "\\nobreakspace");
f("\\lq", "`");
f("\\rq", "'");
f("\\aa", "\\r a");
f("\\AA", "\\r A");
f("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
f("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
f("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
f("ℬ", "\\mathscr{B}");
f("ℰ", "\\mathscr{E}");
f("ℱ", "\\mathscr{F}");
f("ℋ", "\\mathscr{H}");
f("ℐ", "\\mathscr{I}");
f("ℒ", "\\mathscr{L}");
f("ℳ", "\\mathscr{M}");
f("ℛ", "\\mathscr{R}");
f("ℭ", "\\mathfrak{C}");
f("ℌ", "\\mathfrak{H}");
f("ℨ", "\\mathfrak{Z}");
f("\\Bbbk", "\\Bbb{k}");
f("·", "\\cdotp");
f("\\llap", "\\mathllap{\\textrm{#1}}");
f("\\rlap", "\\mathrlap{\\textrm{#1}}");
f("\\clap", "\\mathclap{\\textrm{#1}}");
f("\\mathstrut", "\\vphantom{(}");
f("\\underbar", "\\underline{\\text{#1}}");
f("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
f("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
f("\\ne", "\\neq");
f("≠", "\\neq");
f(
  "\\notin",
  "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"
);
f("∉", "\\notin");
f(
  "≘",
  "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"
);
f("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
f("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
f("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
f(
  "≝",
  "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"
);
f("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
f("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
f("⟂", "\\perp");
f("‼", "\\mathclose{!\\mkern-0.8mu!}");
f("∌", "\\notni");
f("⌜", "\\ulcorner");
f("⌝", "\\urcorner");
f("⌞", "\\llcorner");
f("⌟", "\\lrcorner");
f("©", "\\copyright");
f("®", "\\textregistered");
f("️", "\\textregistered");
f("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
f("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
f("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
f("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
f("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
f("⋮", "\\vdots");
f("\\varGamma", "\\mathit{\\Gamma}");
f("\\varDelta", "\\mathit{\\Delta}");
f("\\varTheta", "\\mathit{\\Theta}");
f("\\varLambda", "\\mathit{\\Lambda}");
f("\\varXi", "\\mathit{\\Xi}");
f("\\varPi", "\\mathit{\\Pi}");
f("\\varSigma", "\\mathit{\\Sigma}");
f("\\varUpsilon", "\\mathit{\\Upsilon}");
f("\\varPhi", "\\mathit{\\Phi}");
f("\\varPsi", "\\mathit{\\Psi}");
f("\\varOmega", "\\mathit{\\Omega}");
f("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
f(
  "\\colon",
  "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"
);
f("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
f("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
f("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
f("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var On = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  "\\mathbin": "\\dotsb",
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  "\\DOTSX": "\\dotsx",
};
f("\\dots", function (r) {
  var e = "\\dotso",
    t = r.expandAfterFuture().text;
  return (
    t in On
      ? (e = On[t])
      : (t.slice(0, 4) === "\\not" ||
          (t in Z.math && $.contains(["bin", "rel"], Z.math[t].group))) &&
        (e = "\\dotsb"),
    e
  );
});
var Pr = {
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  "$": !0,
  ";": !0,
  ".": !0,
  ",": !0,
};
f("\\dotso", function (r) {
  var e = r.future().text;
  return e in Pr ? "\\ldots\\," : "\\ldots";
});
f("\\dotsc", function (r) {
  var e = r.future().text;
  return e in Pr && e !== "," ? "\\ldots\\," : "\\ldots";
});
f("\\cdots", function (r) {
  var e = r.future().text;
  return e in Pr ? "\\@cdots\\," : "\\@cdots";
});
f("\\dotsb", "\\cdots");
f("\\dotsm", "\\cdots");
f("\\dotsi", "\\!\\cdots");
f("\\dotsx", "\\ldots\\,");
f("\\DOTSI", "\\relax");
f("\\DOTSB", "\\relax");
f("\\DOTSX", "\\relax");
f("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
f("\\,", "\\tmspace+{3mu}{.1667em}");
f("\\thinspace", "\\,");
f("\\>", "\\mskip{4mu}");
f("\\:", "\\tmspace+{4mu}{.2222em}");
f("\\medspace", "\\:");
f("\\;", "\\tmspace+{5mu}{.2777em}");
f("\\thickspace", "\\;");
f("\\!", "\\tmspace-{3mu}{.1667em}");
f("\\negthinspace", "\\!");
f("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
f("\\negthickspace", "\\tmspace-{5mu}{.277em}");
f("\\enspace", "\\kern.5em ");
f("\\enskip", "\\hskip.5em\\relax");
f("\\quad", "\\hskip1em\\relax");
f("\\qquad", "\\hskip2em\\relax");
f("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
f("\\tag@paren", "\\tag@literal{({#1})}");
f("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag")) throw new F("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
f(
  "\\bmod",
  "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"
);
f(
  "\\pod",
  "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"
);
f("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
f(
  "\\mod",
  "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"
);
f("\\newline", "\\\\\\relax");
f(
  "\\TeX",
  "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}"
);
var di = E(
  Ee["Main-Regular"]["T".charCodeAt(0)][1] -
    0.7 * Ee["Main-Regular"]["A".charCodeAt(0)][1]
);
f(
  "\\LaTeX",
  "\\textrm{\\html@mathml{" +
    ("L\\kern-.36em\\raisebox{" + di + "}{\\scriptstyle A}") +
    "\\kern-.15em\\TeX}{LaTeX}}"
);
f(
  "\\KaTeX",
  "\\textrm{\\html@mathml{" +
    ("K\\kern-.17em\\raisebox{" + di + "}{\\scriptstyle A}") +
    "\\kern-.15em\\TeX}{KaTeX}}"
);
f("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
f("\\@hspace", "\\hskip #1\\relax");
f("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
f("\\ordinarycolon", ":");
f("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
f(
  "\\dblcolon",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'
);
f(
  "\\coloneqq",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'
);
f(
  "\\Coloneqq",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'
);
f(
  "\\coloneq",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'
);
f(
  "\\Coloneq",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'
);
f(
  "\\eqqcolon",
  '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'
);
f(
  "\\Eqqcolon",
  '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'
);
f(
  "\\eqcolon",
  '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'
);
f(
  "\\Eqcolon",
  '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'
);
f(
  "\\colonapprox",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'
);
f(
  "\\Colonapprox",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'
);
f(
  "\\colonsim",
  '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'
);
f(
  "\\Colonsim",
  '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'
);
f("∷", "\\dblcolon");
f("∹", "\\eqcolon");
f("≔", "\\coloneqq");
f("≕", "\\eqqcolon");
f("⩴", "\\Coloneqq");
f("\\ratio", "\\vcentcolon");
f("\\coloncolon", "\\dblcolon");
f("\\colonequals", "\\coloneqq");
f("\\coloncolonequals", "\\Coloneqq");
f("\\equalscolon", "\\eqqcolon");
f("\\equalscoloncolon", "\\Eqqcolon");
f("\\colonminus", "\\coloneq");
f("\\coloncolonminus", "\\Coloneq");
f("\\minuscolon", "\\eqcolon");
f("\\minuscoloncolon", "\\Eqcolon");
f("\\coloncolonapprox", "\\Colonapprox");
f("\\coloncolonsim", "\\Colonsim");
f("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
f("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
f("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
f(
  "\\approxcoloncolon",
  "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"
);
f("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
f("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
f("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
f("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
f("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
f("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
f("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
f("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
f("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
f("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
f("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
f("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
f("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
f("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
f("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
f("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
f("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
f("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
f("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
f("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
f("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
f("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
f("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
f("\\imath", "\\html@mathml{\\@imath}{ı}");
f("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
f(
  "\\llbracket",
  "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"
);
f(
  "\\rrbracket",
  "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"
);
f("⟦", "\\llbracket");
f("⟧", "\\rrbracket");
f(
  "\\lBrace",
  "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"
);
f(
  "\\rBrace",
  "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"
);
f("⦃", "\\lBrace");
f("⦄", "\\rBrace");
f(
  "\\minuso",
  "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"
);
f("⦵", "\\minuso");
f("\\darr", "\\downarrow");
f("\\dArr", "\\Downarrow");
f("\\Darr", "\\Downarrow");
f("\\lang", "\\langle");
f("\\rang", "\\rangle");
f("\\uarr", "\\uparrow");
f("\\uArr", "\\Uparrow");
f("\\Uarr", "\\Uparrow");
f("\\N", "\\mathbb{N}");
f("\\R", "\\mathbb{R}");
f("\\Z", "\\mathbb{Z}");
f("\\alef", "\\aleph");
f("\\alefsym", "\\aleph");
f("\\Alpha", "\\mathrm{A}");
f("\\Beta", "\\mathrm{B}");
f("\\bull", "\\bullet");
f("\\Chi", "\\mathrm{X}");
f("\\clubs", "\\clubsuit");
f("\\cnums", "\\mathbb{C}");
f("\\Complex", "\\mathbb{C}");
f("\\Dagger", "\\ddagger");
f("\\diamonds", "\\diamondsuit");
f("\\empty", "\\emptyset");
f("\\Epsilon", "\\mathrm{E}");
f("\\Eta", "\\mathrm{H}");
f("\\exist", "\\exists");
f("\\harr", "\\leftrightarrow");
f("\\hArr", "\\Leftrightarrow");
f("\\Harr", "\\Leftrightarrow");
f("\\hearts", "\\heartsuit");
f("\\image", "\\Im");
f("\\infin", "\\infty");
f("\\Iota", "\\mathrm{I}");
f("\\isin", "\\in");
f("\\Kappa", "\\mathrm{K}");
f("\\larr", "\\leftarrow");
f("\\lArr", "\\Leftarrow");
f("\\Larr", "\\Leftarrow");
f("\\lrarr", "\\leftrightarrow");
f("\\lrArr", "\\Leftrightarrow");
f("\\Lrarr", "\\Leftrightarrow");
f("\\Mu", "\\mathrm{M}");
f("\\natnums", "\\mathbb{N}");
f("\\Nu", "\\mathrm{N}");
f("\\Omicron", "\\mathrm{O}");
f("\\plusmn", "\\pm");
f("\\rarr", "\\rightarrow");
f("\\rArr", "\\Rightarrow");
f("\\Rarr", "\\Rightarrow");
f("\\real", "\\Re");
f("\\reals", "\\mathbb{R}");
f("\\Reals", "\\mathbb{R}");
f("\\Rho", "\\mathrm{P}");
f("\\sdot", "\\cdot");
f("\\sect", "\\S");
f("\\spades", "\\spadesuit");
f("\\sub", "\\subset");
f("\\sube", "\\subseteq");
f("\\supe", "\\supseteq");
f("\\Tau", "\\mathrm{T}");
f("\\thetasym", "\\vartheta");
f("\\weierp", "\\wp");
f("\\Zeta", "\\mathrm{Z}");
f("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
f("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
f("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
f("\\bra", "\\mathinner{\\langle{#1}|}");
f("\\ket", "\\mathinner{|{#1}\\rangle}");
f("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
f("\\Bra", "\\left\\langle#1\\right|");
f("\\Ket", "\\left|#1\\right\\rangle");
var fi = (r) => (e) => {
  var t = e.consumeArg().tokens,
    n = e.consumeArg().tokens,
    a = e.consumeArg().tokens,
    i = e.consumeArg().tokens,
    l = e.macros.get("|"),
    o = e.macros.get("\\|");
  e.macros.beginGroup();
  var u = (p) => (x) => {
    r && (x.macros.set("|", l), a.length && x.macros.set("\\|", o));
    var y = p;
    if (!p && a.length) {
      var v = x.future();
      v.text === "|" && (x.popToken(), (y = !0));
    }
    return { tokens: y ? a : n, numArgs: 0 };
  };
  e.macros.set("|", u(!1)), a.length && e.macros.set("\\|", u(!0));
  var m = e.consumeArg().tokens,
    d = e.expandTokens([...i, ...m, ...t]);
  return e.macros.endGroup(), { tokens: d.reverse(), numArgs: 0 };
};
f("\\bra@ket", fi(!1));
f("\\bra@set", fi(!0));
f(
  "\\Braket",
  "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"
);
f(
  "\\Set",
  "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"
);
f("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
f("\\angln", "{\\angl n}");
f("\\blue", "\\textcolor{##6495ed}{#1}");
f("\\orange", "\\textcolor{##ffa500}{#1}");
f("\\pink", "\\textcolor{##ff00af}{#1}");
f("\\red", "\\textcolor{##df0030}{#1}");
f("\\green", "\\textcolor{##28ae7b}{#1}");
f("\\gray", "\\textcolor{gray}{#1}");
f("\\purple", "\\textcolor{##9d38bd}{#1}");
f("\\blueA", "\\textcolor{##ccfaff}{#1}");
f("\\blueB", "\\textcolor{##80f6ff}{#1}");
f("\\blueC", "\\textcolor{##63d9ea}{#1}");
f("\\blueD", "\\textcolor{##11accd}{#1}");
f("\\blueE", "\\textcolor{##0c7f99}{#1}");
f("\\tealA", "\\textcolor{##94fff5}{#1}");
f("\\tealB", "\\textcolor{##26edd5}{#1}");
f("\\tealC", "\\textcolor{##01d1c1}{#1}");
f("\\tealD", "\\textcolor{##01a995}{#1}");
f("\\tealE", "\\textcolor{##208170}{#1}");
f("\\greenA", "\\textcolor{##b6ffb0}{#1}");
f("\\greenB", "\\textcolor{##8af281}{#1}");
f("\\greenC", "\\textcolor{##74cf70}{#1}");
f("\\greenD", "\\textcolor{##1fab54}{#1}");
f("\\greenE", "\\textcolor{##0d923f}{#1}");
f("\\goldA", "\\textcolor{##ffd0a9}{#1}");
f("\\goldB", "\\textcolor{##ffbb71}{#1}");
f("\\goldC", "\\textcolor{##ff9c39}{#1}");
f("\\goldD", "\\textcolor{##e07d10}{#1}");
f("\\goldE", "\\textcolor{##a75a05}{#1}");
f("\\redA", "\\textcolor{##fca9a9}{#1}");
f("\\redB", "\\textcolor{##ff8482}{#1}");
f("\\redC", "\\textcolor{##f9685d}{#1}");
f("\\redD", "\\textcolor{##e84d39}{#1}");
f("\\redE", "\\textcolor{##bc2612}{#1}");
f("\\maroonA", "\\textcolor{##ffbde0}{#1}");
f("\\maroonB", "\\textcolor{##ff92c6}{#1}");
f("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
f("\\maroonD", "\\textcolor{##ca337c}{#1}");
f("\\maroonE", "\\textcolor{##9e034e}{#1}");
f("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
f("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
f("\\purpleC", "\\textcolor{##aa87ff}{#1}");
f("\\purpleD", "\\textcolor{##7854ab}{#1}");
f("\\purpleE", "\\textcolor{##543b78}{#1}");
f("\\mintA", "\\textcolor{##f5f9e8}{#1}");
f("\\mintB", "\\textcolor{##edf2df}{#1}");
f("\\mintC", "\\textcolor{##e0e5cc}{#1}");
f("\\grayA", "\\textcolor{##f6f7f7}{#1}");
f("\\grayB", "\\textcolor{##f0f1f2}{#1}");
f("\\grayC", "\\textcolor{##e3e5e6}{#1}");
f("\\grayD", "\\textcolor{##d6d8da}{#1}");
f("\\grayE", "\\textcolor{##babec2}{#1}");
f("\\grayF", "\\textcolor{##888d93}{#1}");
f("\\grayG", "\\textcolor{##626569}{#1}");
f("\\grayH", "\\textcolor{##3b3e40}{#1}");
f("\\grayI", "\\textcolor{##21242c}{#1}");
f("\\kaBlue", "\\textcolor{##314453}{#1}");
f("\\kaGreen", "\\textcolor{##71B307}{#1}");
var pi = { "^": !0, "_": !0, "\\limits": !0, "\\nolimits": !0 };
class Po {
  constructor(e, t, n) {
    (this.settings = void 0),
      (this.expansionCount = void 0),
      (this.lexer = void 0),
      (this.macros = void 0),
      (this.stack = void 0),
      (this.mode = void 0),
      (this.settings = t),
      (this.expansionCount = 0),
      this.feed(e),
      (this.macros = new qo(Io, t.macros)),
      (this.mode = n),
      (this.stack = []);
  }
  feed(e) {
    this.lexer = new En(e, this.settings);
  }
  switchMode(e) {
    this.mode = e;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return (
      this.stack.length === 0 && this.pushToken(this.lexer.lex()),
      this.stack[this.stack.length - 1]
    );
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(e) {
    this.stack.push(e);
  }
  pushTokens(e) {
    this.stack.push(...e);
  }
  scanArgument(e) {
    var t, n, a;
    if (e) {
      if ((this.consumeSpaces(), this.future().text !== "[")) return null;
      (t = this.popToken()), ({ tokens: a, end: n } = this.consumeArg(["]"]));
    } else ({ tokens: a, start: t, end: n } = this.consumeArg());
    return (
      this.pushToken(new Be("EOF", n.loc)), this.pushTokens(a), t.range(n, "")
    );
  }
  consumeSpaces() {
    for (;;) {
      var e = this.future();
      if (e.text === " ") this.stack.pop();
      else break;
    }
  }
  consumeArg(e) {
    var t = [],
      n = e && e.length > 0;
    n || this.consumeSpaces();
    var a = this.future(),
      i,
      l = 0,
      o = 0;
    do {
      if (((i = this.popToken()), t.push(i), i.text === "{")) ++l;
      else if (i.text === "}") {
        if ((--l, l === -1)) throw new F("Extra }", i);
      } else if (i.text === "EOF")
        throw new F(
          "Unexpected end of input in a macro argument, expected '" +
            (e && n ? e[o] : "}") +
            "'",
          i
        );
      if (e && n)
        if ((l === 0 || (l === 1 && e[o] === "{")) && i.text === e[o]) {
          if ((++o, o === e.length)) {
            t.splice(-o, o);
            break;
          }
        } else o = 0;
    } while (l !== 0 || n);
    return (
      a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()),
      t.reverse(),
      { tokens: t, start: a, end: i }
    );
  }
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new F(
          "The length of delimiters doesn't match the number of args!"
        );
      for (var n = t[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new F("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], o = 0; o < e; o++)
      l.push(this.consumeArg(t && t[o + 1]).tokens);
    return l;
  }
  expandOnce(e) {
    var t = this.popToken(),
      n = t.text,
      a = t.noexpand ? null : this._getExpansion(n);
    if (a == null || (e && a.unexpandable)) {
      if (e && a == null && n[0] === "\\" && !this.isDefined(n))
        throw new F("Undefined control sequence: " + n);
      return this.pushToken(t), !1;
    }
    if ((this.expansionCount++, this.expansionCount > this.settings.maxExpand))
      throw new F(
        "Too many expansions: infinite loop or need to increase maxExpand setting"
      );
    var i = a.tokens,
      l = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o];
        if (u.text === "#") {
          if (o === 0)
            throw new F("Incomplete placeholder at end of macro body", u);
          if (((u = i[--o]), u.text === "#")) i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(u.text)) i.splice(o, 2, ...l[+u.text - 1]);
          else throw new F("Not a valid argument number", u);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  expandNextToken() {
    for (;;)
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new Be(e)]) : void 0;
  }
  expandTokens(e) {
    var t = [],
      n = this.stack.length;
    for (this.pushTokens(e); this.stack.length > n; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && ((a.noexpand = !1), (a.treatAsRelax = !1)), t.push(a);
      }
    return t;
  }
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((n) => n.text).join("");
  }
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null) return t;
    if (e.length === 1) {
      var n = this.lexer.catcodes[e];
      if (n != null && n !== 13) return;
    }
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var l = a.replace(/##/g, ""); l.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (
        var o = new En(a, this.settings), u = [], m = o.lex();
        m.text !== "EOF";

      )
        u.push(m), (m = o.lex());
      u.reverse();
      var d = { tokens: u, numArgs: i };
      return d;
    }
    return a;
  }
  isDefined(e) {
    return (
      this.macros.has(e) ||
      Qe.hasOwnProperty(e) ||
      Z.math.hasOwnProperty(e) ||
      Z.text.hasOwnProperty(e) ||
      pi.hasOwnProperty(e)
    );
  }
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null
      ? typeof t == "string" || typeof t == "function" || !t.unexpandable
      : Qe.hasOwnProperty(e) && !Qe[e].primitive;
  }
}
var Ln = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
  lt = Object.freeze({
    "₊": "+",
    "₋": "-",
    "₌": "=",
    "₍": "(",
    "₎": ")",
    "₀": "0",
    "₁": "1",
    "₂": "2",
    "₃": "3",
    "₄": "4",
    "₅": "5",
    "₆": "6",
    "₇": "7",
    "₈": "8",
    "₉": "9",
    "ₐ": "a",
    "ₑ": "e",
    "ₕ": "h",
    "ᵢ": "i",
    "ⱼ": "j",
    "ₖ": "k",
    "ₗ": "l",
    "ₘ": "m",
    "ₙ": "n",
    "ₒ": "o",
    "ₚ": "p",
    "ᵣ": "r",
    "ₛ": "s",
    "ₜ": "t",
    "ᵤ": "u",
    "ᵥ": "v",
    "ₓ": "x",
    "ᵦ": "β",
    "ᵧ": "γ",
    "ᵨ": "ρ",
    "ᵩ": "ϕ",
    "ᵪ": "χ",
    "⁺": "+",
    "⁻": "-",
    "⁼": "=",
    "⁽": "(",
    "⁾": ")",
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
    "ᴬ": "A",
    "ᴮ": "B",
    "ᴰ": "D",
    "ᴱ": "E",
    "ᴳ": "G",
    "ᴴ": "H",
    "ᴵ": "I",
    "ᴶ": "J",
    "ᴷ": "K",
    "ᴸ": "L",
    "ᴹ": "M",
    "ᴺ": "N",
    "ᴼ": "O",
    "ᴾ": "P",
    "ᴿ": "R",
    "ᵀ": "T",
    "ᵁ": "U",
    "ⱽ": "V",
    "ᵂ": "W",
    "ᵃ": "a",
    "ᵇ": "b",
    "ᶜ": "c",
    "ᵈ": "d",
    "ᵉ": "e",
    "ᶠ": "f",
    "ᵍ": "g",
    "ʰ": "h",
    "ⁱ": "i",
    "ʲ": "j",
    "ᵏ": "k",
    "ˡ": "l",
    "ᵐ": "m",
    "ⁿ": "n",
    "ᵒ": "o",
    "ᵖ": "p",
    "ʳ": "r",
    "ˢ": "s",
    "ᵗ": "t",
    "ᵘ": "u",
    "ᵛ": "v",
    "ʷ": "w",
    "ˣ": "x",
    "ʸ": "y",
    "ᶻ": "z",
    "ᵝ": "β",
    "ᵞ": "γ",
    "ᵟ": "δ",
    "ᵠ": "ϕ",
    "ᵡ": "χ",
    "ᶿ": "θ",
  }),
  _t = {
    "́": { text: "\\'", math: "\\acute" },
    "̀": { text: "\\`", math: "\\grave" },
    "̈": { text: '\\"', math: "\\ddot" },
    "̃": { text: "\\~", math: "\\tilde" },
    "̄": { text: "\\=", math: "\\bar" },
    "̆": { text: "\\u", math: "\\breve" },
    "̌": { text: "\\v", math: "\\check" },
    "̂": { text: "\\^", math: "\\hat" },
    "̇": { text: "\\.", math: "\\dot" },
    "̊": { text: "\\r", math: "\\mathring" },
    "̋": { text: "\\H" },
    "̧": { text: "\\c" },
  },
  Rn = {
    á: "á",
    à: "à",
    ä: "ä",
    ǟ: "ǟ",
    ã: "ã",
    ā: "ā",
    ă: "ă",
    ắ: "ắ",
    ằ: "ằ",
    ẵ: "ẵ",
    ǎ: "ǎ",
    â: "â",
    ấ: "ấ",
    ầ: "ầ",
    ẫ: "ẫ",
    ȧ: "ȧ",
    ǡ: "ǡ",
    å: "å",
    ǻ: "ǻ",
    ḃ: "ḃ",
    ć: "ć",
    ḉ: "ḉ",
    č: "č",
    ĉ: "ĉ",
    ċ: "ċ",
    ç: "ç",
    ď: "ď",
    ḋ: "ḋ",
    ḑ: "ḑ",
    é: "é",
    è: "è",
    ë: "ë",
    ẽ: "ẽ",
    ē: "ē",
    ḗ: "ḗ",
    ḕ: "ḕ",
    ĕ: "ĕ",
    ḝ: "ḝ",
    ě: "ě",
    ê: "ê",
    ế: "ế",
    ề: "ề",
    ễ: "ễ",
    ė: "ė",
    ȩ: "ȩ",
    ḟ: "ḟ",
    ǵ: "ǵ",
    ḡ: "ḡ",
    ğ: "ğ",
    ǧ: "ǧ",
    ĝ: "ĝ",
    ġ: "ġ",
    ģ: "ģ",
    ḧ: "ḧ",
    ȟ: "ȟ",
    ĥ: "ĥ",
    ḣ: "ḣ",
    ḩ: "ḩ",
    í: "í",
    ì: "ì",
    ï: "ï",
    ḯ: "ḯ",
    ĩ: "ĩ",
    ī: "ī",
    ĭ: "ĭ",
    ǐ: "ǐ",
    î: "î",
    ǰ: "ǰ",
    ĵ: "ĵ",
    ḱ: "ḱ",
    ǩ: "ǩ",
    ķ: "ķ",
    ĺ: "ĺ",
    ľ: "ľ",
    ļ: "ļ",
    ḿ: "ḿ",
    ṁ: "ṁ",
    ń: "ń",
    ǹ: "ǹ",
    ñ: "ñ",
    ň: "ň",
    ṅ: "ṅ",
    ņ: "ņ",
    ó: "ó",
    ò: "ò",
    ö: "ö",
    ȫ: "ȫ",
    õ: "õ",
    ṍ: "ṍ",
    ṏ: "ṏ",
    ȭ: "ȭ",
    ō: "ō",
    ṓ: "ṓ",
    ṑ: "ṑ",
    ŏ: "ŏ",
    ǒ: "ǒ",
    ô: "ô",
    ố: "ố",
    ồ: "ồ",
    ỗ: "ỗ",
    ȯ: "ȯ",
    ȱ: "ȱ",
    ő: "ő",
    ṕ: "ṕ",
    ṗ: "ṗ",
    ŕ: "ŕ",
    ř: "ř",
    ṙ: "ṙ",
    ŗ: "ŗ",
    ś: "ś",
    ṥ: "ṥ",
    š: "š",
    ṧ: "ṧ",
    ŝ: "ŝ",
    ṡ: "ṡ",
    ş: "ş",
    ẗ: "ẗ",
    ť: "ť",
    ṫ: "ṫ",
    ţ: "ţ",
    ú: "ú",
    ù: "ù",
    ü: "ü",
    ǘ: "ǘ",
    ǜ: "ǜ",
    ǖ: "ǖ",
    ǚ: "ǚ",
    ũ: "ũ",
    ṹ: "ṹ",
    ū: "ū",
    ṻ: "ṻ",
    ŭ: "ŭ",
    ǔ: "ǔ",
    û: "û",
    ů: "ů",
    ű: "ű",
    ṽ: "ṽ",
    ẃ: "ẃ",
    ẁ: "ẁ",
    ẅ: "ẅ",
    ŵ: "ŵ",
    ẇ: "ẇ",
    ẘ: "ẘ",
    ẍ: "ẍ",
    ẋ: "ẋ",
    ý: "ý",
    ỳ: "ỳ",
    ÿ: "ÿ",
    ỹ: "ỹ",
    ȳ: "ȳ",
    ŷ: "ŷ",
    ẏ: "ẏ",
    ẙ: "ẙ",
    ź: "ź",
    ž: "ž",
    ẑ: "ẑ",
    ż: "ż",
    Á: "Á",
    À: "À",
    Ä: "Ä",
    Ǟ: "Ǟ",
    Ã: "Ã",
    Ā: "Ā",
    Ă: "Ă",
    Ắ: "Ắ",
    Ằ: "Ằ",
    Ẵ: "Ẵ",
    Ǎ: "Ǎ",
    Â: "Â",
    Ấ: "Ấ",
    Ầ: "Ầ",
    Ẫ: "Ẫ",
    Ȧ: "Ȧ",
    Ǡ: "Ǡ",
    Å: "Å",
    Ǻ: "Ǻ",
    Ḃ: "Ḃ",
    Ć: "Ć",
    Ḉ: "Ḉ",
    Č: "Č",
    Ĉ: "Ĉ",
    Ċ: "Ċ",
    Ç: "Ç",
    Ď: "Ď",
    Ḋ: "Ḋ",
    Ḑ: "Ḑ",
    É: "É",
    È: "È",
    Ë: "Ë",
    Ẽ: "Ẽ",
    Ē: "Ē",
    Ḗ: "Ḗ",
    Ḕ: "Ḕ",
    Ĕ: "Ĕ",
    Ḝ: "Ḝ",
    Ě: "Ě",
    Ê: "Ê",
    Ế: "Ế",
    Ề: "Ề",
    Ễ: "Ễ",
    Ė: "Ė",
    Ȩ: "Ȩ",
    Ḟ: "Ḟ",
    Ǵ: "Ǵ",
    Ḡ: "Ḡ",
    Ğ: "Ğ",
    Ǧ: "Ǧ",
    Ĝ: "Ĝ",
    Ġ: "Ġ",
    Ģ: "Ģ",
    Ḧ: "Ḧ",
    Ȟ: "Ȟ",
    Ĥ: "Ĥ",
    Ḣ: "Ḣ",
    Ḩ: "Ḩ",
    Í: "Í",
    Ì: "Ì",
    Ï: "Ï",
    Ḯ: "Ḯ",
    Ĩ: "Ĩ",
    Ī: "Ī",
    Ĭ: "Ĭ",
    Ǐ: "Ǐ",
    Î: "Î",
    İ: "İ",
    Ĵ: "Ĵ",
    Ḱ: "Ḱ",
    Ǩ: "Ǩ",
    Ķ: "Ķ",
    Ĺ: "Ĺ",
    Ľ: "Ľ",
    Ļ: "Ļ",
    Ḿ: "Ḿ",
    Ṁ: "Ṁ",
    Ń: "Ń",
    Ǹ: "Ǹ",
    Ñ: "Ñ",
    Ň: "Ň",
    Ṅ: "Ṅ",
    Ņ: "Ņ",
    Ó: "Ó",
    Ò: "Ò",
    Ö: "Ö",
    Ȫ: "Ȫ",
    Õ: "Õ",
    Ṍ: "Ṍ",
    Ṏ: "Ṏ",
    Ȭ: "Ȭ",
    Ō: "Ō",
    Ṓ: "Ṓ",
    Ṑ: "Ṑ",
    Ŏ: "Ŏ",
    Ǒ: "Ǒ",
    Ô: "Ô",
    Ố: "Ố",
    Ồ: "Ồ",
    Ỗ: "Ỗ",
    Ȯ: "Ȯ",
    Ȱ: "Ȱ",
    Ő: "Ő",
    Ṕ: "Ṕ",
    Ṗ: "Ṗ",
    Ŕ: "Ŕ",
    Ř: "Ř",
    Ṙ: "Ṙ",
    Ŗ: "Ŗ",
    Ś: "Ś",
    Ṥ: "Ṥ",
    Š: "Š",
    Ṧ: "Ṧ",
    Ŝ: "Ŝ",
    Ṡ: "Ṡ",
    Ş: "Ş",
    Ť: "Ť",
    Ṫ: "Ṫ",
    Ţ: "Ţ",
    Ú: "Ú",
    Ù: "Ù",
    Ü: "Ü",
    Ǘ: "Ǘ",
    Ǜ: "Ǜ",
    Ǖ: "Ǖ",
    Ǚ: "Ǚ",
    Ũ: "Ũ",
    Ṹ: "Ṹ",
    Ū: "Ū",
    Ṻ: "Ṻ",
    Ŭ: "Ŭ",
    Ǔ: "Ǔ",
    Û: "Û",
    Ů: "Ů",
    Ű: "Ű",
    Ṽ: "Ṽ",
    Ẃ: "Ẃ",
    Ẁ: "Ẁ",
    Ẅ: "Ẅ",
    Ŵ: "Ŵ",
    Ẇ: "Ẇ",
    Ẍ: "Ẍ",
    Ẋ: "Ẋ",
    Ý: "Ý",
    Ỳ: "Ỳ",
    Ÿ: "Ÿ",
    Ỹ: "Ỹ",
    Ȳ: "Ȳ",
    Ŷ: "Ŷ",
    Ẏ: "Ẏ",
    Ź: "Ź",
    Ž: "Ž",
    Ẑ: "Ẑ",
    Ż: "Ż",
    ά: "ά",
    ὰ: "ὰ",
    ᾱ: "ᾱ",
    ᾰ: "ᾰ",
    έ: "έ",
    ὲ: "ὲ",
    ή: "ή",
    ὴ: "ὴ",
    ί: "ί",
    ὶ: "ὶ",
    ϊ: "ϊ",
    ΐ: "ΐ",
    ῒ: "ῒ",
    ῑ: "ῑ",
    ῐ: "ῐ",
    ό: "ό",
    ὸ: "ὸ",
    ύ: "ύ",
    ὺ: "ὺ",
    ϋ: "ϋ",
    ΰ: "ΰ",
    ῢ: "ῢ",
    ῡ: "ῡ",
    ῠ: "ῠ",
    ώ: "ώ",
    ὼ: "ὼ",
    Ύ: "Ύ",
    Ὺ: "Ὺ",
    Ϋ: "Ϋ",
    Ῡ: "Ῡ",
    Ῠ: "Ῠ",
    Ώ: "Ώ",
    Ὼ: "Ὼ",
  };
class I0 {
  constructor(e, t) {
    (this.mode = void 0),
      (this.gullet = void 0),
      (this.settings = void 0),
      (this.leftrightDepth = void 0),
      (this.nextToken = void 0),
      (this.mode = "math"),
      (this.gullet = new Po(e, t, this.mode)),
      (this.settings = t),
      (this.leftrightDepth = 0);
  }
  expect(e, t) {
    if ((t === void 0 && (t = !0), this.fetch().text !== e))
      throw new F(
        "Expected '" + e + "', got '" + this.fetch().text + "'",
        this.fetch()
      );
    t && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return (
      this.nextToken == null &&
        (this.nextToken = this.gullet.expandNextToken()),
      this.nextToken
    );
  }
  switchMode(e) {
    (this.mode = e), this.gullet.switchMode(e);
  }
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(),
      this.settings.colorIsTextColor &&
        this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return (
        this.expect("EOF"),
        this.settings.globalGroup || this.gullet.endGroup(),
        e
      );
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e) {
    var t = this.nextToken;
    this.consume(),
      this.gullet.pushToken(new Be("}")),
      this.gullet.pushTokens(e);
    var n = this.parseExpression(!1);
    return this.expect("}"), (this.nextToken = t), n;
  }
  parseExpression(e, t) {
    for (var n = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (
        I0.endOfExpression.indexOf(a.text) !== -1 ||
        (t && a.text === t) ||
        (e && Qe[a.text] && Qe[a.text].infix)
      )
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal") continue;
      } else break;
      n.push(i);
    }
    return (
      this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n)
    );
  }
  handleInfixNodes(e) {
    for (var t = -1, n, a = 0; a < e.length; a++)
      if (e[a].type === "infix") {
        if (t !== -1)
          throw new F("only one infix operator per group", e[a].token);
        (t = a), (n = e[a].replaceWith);
      }
    if (t !== -1 && n) {
      var i,
        l,
        o = e.slice(0, t),
        u = e.slice(t + 1);
      o.length === 1 && o[0].type === "ordgroup"
        ? (i = o[0])
        : (i = { type: "ordgroup", mode: this.mode, body: o }),
        u.length === 1 && u[0].type === "ordgroup"
          ? (l = u[0])
          : (l = { type: "ordgroup", mode: this.mode, body: u });
      var m;
      return (
        n === "\\\\abovefrac"
          ? (m = this.callFunction(n, [i, e[t], l], []))
          : (m = this.callFunction(n, [i, l], [])),
        [m]
      );
    } else return e;
  }
  handleSupSubscript(e) {
    var t = this.fetch(),
      n = t.text;
    this.consume(), this.consumeSpaces();
    var a = this.parseGroup(e);
    if (!a) throw new F("Expected group after '" + n + "'", t);
    return a;
  }
  formatUnsupportedCmd(e) {
    for (var t = [], n = 0; n < e.length; n++)
      t.push({ type: "textord", mode: "text", text: e[n] });
    var a = { type: "text", mode: this.mode, body: t },
      i = {
        type: "color",
        mode: this.mode,
        color: this.settings.errorColor,
        body: [a],
      };
    return i;
  }
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text") return t;
    for (var n, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          (t.limits = l), (t.alwaysHandleSupSub = !0);
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else throw new F("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n) throw new F("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a) throw new F("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n) throw new F("Double superscript", i);
        var o = { type: "textord", mode: this.mode, text: "\\prime" },
          u = [o];
        for (this.consume(); this.fetch().text === "'"; )
          u.push(o), this.consume();
        this.fetch().text === "^" &&
          u.push(this.handleSupSubscript("superscript")),
          (n = { type: "ordgroup", mode: this.mode, body: u });
      } else if (lt[i.text]) {
        var m = lt[i.text],
          d = Ln.test(i.text);
        for (this.consume(); ; ) {
          var p = this.fetch().text;
          if (!lt[p] || Ln.test(p) !== d) break;
          this.consume(), (m += lt[p]);
        }
        var x = new I0(m, this.settings).parse();
        d
          ? (a = { type: "ordgroup", mode: "math", body: x })
          : (n = { type: "ordgroup", mode: "math", body: x });
      } else break;
    }
    return n || a
      ? { type: "supsub", mode: this.mode, base: t, sup: n, sub: a }
      : t;
  }
  parseFunction(e, t) {
    var n = this.fetch(),
      a = n.text,
      i = Qe[a];
    if (!i) return null;
    if ((this.consume(), t && t !== "atom" && !i.allowedInArgument))
      throw new F(
        "Got function '" + a + "' with no arguments" + (t ? " as " + t : ""),
        n
      );
    if (this.mode === "text" && !i.allowedInText)
      throw new F("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new F("Can't use function '" + a + "' in math mode", n);
    var { args: l, optArgs: o } = this.parseArguments(a, i);
    return this.callFunction(a, l, o, n, e);
  }
  callFunction(e, t, n, a, i) {
    var l = { funcName: e, parser: this, token: a, breakOnTokenText: i },
      o = Qe[e];
    if (o && o.handler) return o.handler(l, t, n);
    throw new F("No function handler for " + e);
  }
  parseArguments(e, t) {
    var n = t.numArgs + t.numOptionalArgs;
    if (n === 0) return { args: [], optArgs: [] };
    for (var a = [], i = [], l = 0; l < n; l++) {
      var o = t.argTypes && t.argTypes[l],
        u = l < t.numOptionalArgs;
      ((t.primitive && o == null) ||
        (t.type === "sqrt" && l === 1 && i[0] == null)) &&
        (o = "primitive");
      var m = this.parseGroupOfType("argument to '" + e + "'", o, u);
      if (u) i.push(m);
      else if (m != null) a.push(m);
      else throw new F("Null argument, please report this as a bug");
    }
    return { args: a, optArgs: i };
  }
  parseGroupOfType(e, t, n) {
    switch (t) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, t);
      case "hbox": {
        var a = this.parseArgumentGroup(n, "text");
        return a != null
          ? { type: "styling", mode: a.mode, body: [a], style: "text" }
          : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", n);
        return i != null ? { type: "raw", mode: "text", string: i.text } : null;
      }
      case "primitive": {
        if (n) throw new F("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null) throw new F("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new F("Unknown group type as " + e, this.fetch());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === " "; ) this.consume();
  }
  parseStringGroup(e, t) {
    var n = this.gullet.scanArgument(t);
    if (n == null) return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      (a += i.text), this.consume();
    return this.consume(), (n.text = a), n;
  }
  parseRegexGroup(e, t) {
    for (
      var n = this.fetch(), a = n, i = "", l;
      (l = this.fetch()).text !== "EOF" && e.test(i + l.text);

    )
      (a = l), (i += a.text), this.consume();
    if (i === "") throw new F("Invalid " + t + ": '" + n.text + "'", n);
    return n.range(a, i);
  }
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null) return null;
    var n = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!n) throw new F("Invalid color: '" + t.text + "'", t);
    var a = n[0];
    return (
      /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a),
      { type: "color-token", mode: this.mode, color: a }
    );
  }
  parseSizeGroup(e) {
    var t,
      n = !1;
    if (
      (this.gullet.consumeSpaces(),
      !e && this.gullet.future().text !== "{"
        ? (t = this.parseRegexGroup(
            /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
            "size"
          ))
        : (t = this.parseStringGroup("size", e)),
      !t)
    )
      return null;
    !e && t.text.length === 0 && ((t.text = "0pt"), (n = !0));
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a) throw new F("Invalid size: '" + t.text + "'", t);
    var i = { number: +(a[1] + a[2]), unit: a[3] };
    if (!Ma(i)) throw new F("Invalid unit: '" + i.unit + "'", t);
    return { type: "size", mode: this.mode, value: i, isBlank: n };
  }
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13),
      this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (
      (this.gullet.lexer.setCatcode("%", 14),
      this.gullet.lexer.setCatcode("~", 13),
      t == null)
    )
      return null;
    var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return { type: "url", mode: this.mode, url: n };
  }
  parseArgumentGroup(e, t) {
    var n = this.gullet.scanArgument(e);
    if (n == null) return null;
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = { type: "ordgroup", mode: this.mode, loc: n.loc, body: i };
    return t && this.switchMode(a), l;
  }
  parseGroup(e, t) {
    var n = this.fetch(),
      a = n.text,
      i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var l = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, l),
        u = this.fetch();
      this.expect(l),
        this.gullet.endGroup(),
        (i = {
          type: "ordgroup",
          mode: this.mode,
          loc: ve.range(n, u),
          body: o,
          semisimple: a === "\\begingroup" || void 0,
        });
    } else if (
      ((i = this.parseFunction(t, e) || this.parseSymbol()),
      i == null && a[0] === "\\" && !pi.hasOwnProperty(a))
    ) {
      if (this.settings.throwOnError)
        throw new F("Undefined control sequence: " + a, n);
      (i = this.formatUnsupportedCmd(a)), this.consume();
    }
    return i;
  }
  formLigatures(e) {
    for (var t = e.length - 1, n = 0; n < t; ++n) {
      var a = e[n],
        i = a.text;
      i === "-" &&
        e[n + 1].text === "-" &&
        (n + 1 < t && e[n + 2].text === "-"
          ? (e.splice(n, 3, {
              type: "textord",
              mode: "text",
              loc: ve.range(a, e[n + 2]),
              text: "---",
            }),
            (t -= 2))
          : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: ve.range(a, e[n + 1]),
              text: "--",
            }),
            (t -= 1))),
        (i === "'" || i === "`") &&
          e[n + 1].text === i &&
          (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: ve.range(a, e[n + 1]),
            text: i + i,
          }),
          (t -= 1));
    }
  }
  parseSymbol() {
    var e = this.fetch(),
      t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var n = t.slice(5),
        a = n.charAt(0) === "*";
      if ((a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)))
        throw new F(`\\verb assertion failed --
                    please report what input caused this bug`);
      return (
        (n = n.slice(1, -1)), { type: "verb", mode: "text", body: n, star: a }
      );
    }
    Rn.hasOwnProperty(t[0]) &&
      !Z[this.mode][t[0]] &&
      (this.settings.strict &&
        this.mode === "math" &&
        this.settings.reportNonstrict(
          "unicodeTextInMathMode",
          'Accented Unicode text character "' + t[0] + '" used in math mode',
          e
        ),
      (t = Rn[t[0]] + t.slice(1)));
    var i = Lo.exec(t);
    i &&
      ((t = t.substring(0, i.index)),
      t === "i" ? (t = "ı") : t === "j" && (t = "ȷ"));
    var l;
    if (Z[this.mode][t]) {
      this.settings.strict &&
        this.mode === "math" &&
        lr.indexOf(t) >= 0 &&
        this.settings.reportNonstrict(
          "unicodeTextInMathMode",
          'Latin-1/Unicode text character "' + t[0] + '" used in math mode',
          e
        );
      var o = Z[this.mode][t].group,
        u = ve.range(e),
        m;
      if (zs.hasOwnProperty(o)) {
        var d = o;
        m = { type: "atom", mode: this.mode, family: d, loc: u, text: t };
      } else m = { type: o, mode: this.mode, loc: u, text: t };
      l = m;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict &&
        (Aa(t.charCodeAt(0))
          ? this.mode === "math" &&
            this.settings.reportNonstrict(
              "unicodeTextInMathMode",
              'Unicode text character "' + t[0] + '" used in math mode',
              e
            )
          : this.settings.reportNonstrict(
              "unknownSymbol",
              'Unrecognized Unicode character "' +
                t[0] +
                '"' +
                (" (" + t.charCodeAt(0) + ")"),
              e
            )),
        (l = { type: "textord", mode: "text", loc: ve.range(e), text: t });
    else return null;
    if ((this.consume(), i))
      for (var p = 0; p < i[0].length; p++) {
        var x = i[0][p];
        if (!_t[x]) throw new F("Unknown accent ' " + x + "'", e);
        var y = _t[x][this.mode] || _t[x].text;
        if (!y)
          throw new F(
            "Accent " + x + " unsupported in " + this.mode + " mode",
            e
          );
        l = {
          type: "accent",
          mode: this.mode,
          loc: ve.range(e),
          label: y,
          isStretchy: !1,
          isShifty: !0,
          base: l,
        };
      }
    return l;
  }
}
I0.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Hr = function (e, t) {
    if (!(typeof e == "string" || e instanceof String))
      throw new TypeError("KaTeX can only parse string typed expression");
    var n = new I0(e, t);
    delete n.gullet.macros.current["\\df@tag"];
    var a = n.parse();
    if (
      (delete n.gullet.macros.current["\\current@color"],
      delete n.gullet.macros.current["\\color"],
      n.gullet.macros.get("\\df@tag"))
    ) {
      if (!t.displayMode) throw new F("\\tag works only in display equations");
      a = [
        {
          type: "tag",
          mode: "text",
          body: a,
          tag: n.subparse([new Be("\\df@tag")]),
        },
      ];
    }
    return a;
  },
  gi = function (e, t, n) {
    t.textContent = "";
    var a = $r(e, n).toNode();
    t.appendChild(a);
  };
typeof document < "u" &&
  document.compatMode !== "CSS1Compat" &&
  (typeof console < "u" &&
    console.warn(
      "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."
    ),
  (gi = function () {
    throw new F("KaTeX doesn't work in quirks mode.");
  }));
var Ho = function (e, t) {
    var n = $r(e, t).toMarkup();
    return n;
  },
  $o = function (e, t) {
    var n = new kr(t);
    return Hr(e, n);
  },
  vi = function (e, t, n) {
    if (n.throwOnError || !(e instanceof F)) throw e;
    var a = S.makeSpan(["katex-error"], [new Ae(t)]);
    return (
      a.setAttribute("title", e.toString()),
      a.setAttribute("style", "color:" + n.errorColor),
      a
    );
  },
  $r = function (e, t) {
    var n = new kr(t);
    try {
      var a = Hr(e, n);
      return Xs(a, e, n);
    } catch (i) {
      return vi(i, e, n);
    }
  },
  Vo = function (e, t) {
    var n = new kr(t);
    try {
      var a = Hr(e, n);
      return Zs(a, e, n);
    } catch (i) {
      return vi(i, e, n);
    }
  },
  qn = {
    version: "0.16.8",
    render: gi,
    renderToString: Ho,
    ParseError: F,
    SETTINGS_SCHEMA: ct,
    __parse: $o,
    __renderToDomTree: $r,
    __renderToHTMLTree: Vo,
    __setFontMetrics: ys,
    __defineSymbol: s,
    __defineFunction: B,
    __defineMacro: f,
    __domTree: {
      Span: U0,
      Anchor: Mr,
      SymbolNode: Ae,
      SvgNode: Ue,
      PathNode: r0,
      LineNode: ir,
    },
  };
const Uo = function (r, e, t, n) {
    typeof e == "function" &&
      typeof t != "function" &&
      ((n = t), (t = e), (e = null)),
      wr(r, e, a, n);
    function a(i, l) {
      const o = l[l.length - 1];
      return t(i, o ? o.children.indexOf(i) : null, o);
    }
  },
  In = function (r, e, t) {
    const n = $0(t);
    if (!r || !r.type || !r.children) throw new Error("Expected parent node");
    if (typeof e == "number") {
      if (e < 0 || e === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (((e = r.children.indexOf(e)), e < 0))
      throw new Error("Expected child node or index");
    for (; ++e < r.children.length; )
      if (n(r.children[e], e, r)) return r.children[e];
    return null;
  },
  Pn = /\n/g,
  Hn = /[\t ]+/g,
  mr = De("br"),
  jo = De("p"),
  $n = De(["th", "td"]),
  Vn = De("tr"),
  Go = De([
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    "rp",
    "script",
    "style",
    "template",
    "title",
    Zo,
    Ko,
  ]),
  bi = De([
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "caption",
    "center",
    "dd",
    "dialog",
    "dir",
    "dl",
    "dt",
    "div",
    "figure",
    "figcaption",
    "footer",
    "form,",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "plaintext",
    "pre",
    "section",
    "ul",
    "xmp",
  ]);
function Wo(r, e = {}) {
  const t = "children" in r ? r.children : [],
    n = bi(r),
    a = wi(r, {
      whitespace: e.whitespace || "normal",
      breakBefore: !1,
      breakAfter: !1,
    }),
    i = [];
  (r.type === "text" || r.type === "comment") &&
    i.push(...xi(r, { whitespace: a, breakBefore: !0, breakAfter: !0 }));
  let l = -1;
  for (; ++l < t.length; )
    i.push(
      ...yi(t[l], r, {
        whitespace: a,
        breakBefore: l ? void 0 : n,
        breakAfter: l < t.length - 1 ? mr(t[l + 1]) : n,
      })
    );
  const o = [];
  let u;
  for (l = -1; ++l < i.length; ) {
    const m = i[l];
    typeof m == "number"
      ? u !== void 0 && m > u && (u = m)
      : m &&
        (u !== void 0 &&
          u > -1 &&
          o.push(
            `
`.repeat(u) || " "
          ),
        (u = -1),
        o.push(m));
  }
  return o.join("");
}
function yi(r, e, t) {
  return r.type === "element"
    ? _o(r, e, t)
    : r.type === "text"
    ? t.whitespace === "normal"
      ? xi(r, t)
      : Yo(r)
    : [];
}
function _o(r, e, t) {
  const n = wi(r, t),
    a = r.children || [];
  let i = -1,
    l = [];
  if (Go(r)) return l;
  let o, u;
  for (
    mr(r) || (Vn(r) && In(e, r, Vn))
      ? (u = `
`)
      : jo(r)
      ? ((o = 2), (u = 2))
      : bi(r) && ((o = 1), (u = 1));
    ++i < a.length;

  )
    l = l.concat(
      yi(a[i], r, {
        whitespace: n,
        breakBefore: i ? void 0 : o,
        breakAfter: i < a.length - 1 ? mr(a[i + 1]) : u,
      })
    );
  return (
    $n(r) && In(e, r, $n) && l.push("	"), o && l.unshift(o), u && l.push(u), l
  );
}
function xi(r, e) {
  const t = String(r.value),
    n = [],
    a = [];
  let i = 0;
  for (; i <= t.length; ) {
    Pn.lastIndex = i;
    const u = Pn.exec(t),
      m = u && "index" in u ? u.index : t.length;
    n.push(
      Xo(
        t
          .slice(i, m)
          .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        i === 0 ? e.breakBefore : !0,
        m === t.length ? e.breakAfter : !0
      )
    ),
      (i = m + 1);
  }
  let l = -1,
    o;
  for (; ++l < n.length; )
    n[l].charCodeAt(n[l].length - 1) === 8203 ||
    (l < n.length - 1 && n[l + 1].charCodeAt(0) === 8203)
      ? (a.push(n[l]), (o = void 0))
      : n[l]
      ? (typeof o == "number" && a.push(o), a.push(n[l]), (o = 0))
      : (l === 0 || l === n.length - 1) && a.push(0);
  return a;
}
function Yo(r) {
  return [String(r.value)];
}
function Xo(r, e, t) {
  const n = [];
  let a = 0,
    i;
  for (; a < r.length; ) {
    Hn.lastIndex = a;
    const l = Hn.exec(r);
    (i = l ? l.index : r.length),
      !a && !i && l && !e && n.push(""),
      a !== i && n.push(r.slice(a, i)),
      (a = l ? i + l[0].length : i);
  }
  return a !== i && !t && n.push(""), n.join(" ");
}
function wi(r, e) {
  if (r.type === "element") {
    const t = r.properties || {};
    switch (r.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return t.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return t.noWrap ? "nowrap" : e.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return e.whitespace;
}
function Zo(r) {
  return !!(r.properties || {}).hidden;
}
function Ko(r) {
  return r.tagName === "dialog" && !(r.properties || {}).open;
}
const Yt = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
class G0 {
  constructor(e, t, n) {
    (this.property = e), (this.normal = t), n && (this.space = n);
  }
}
G0.prototype.property = {};
G0.prototype.normal = {};
G0.prototype.space = null;
function ki(r, e) {
  const t = {},
    n = {};
  let a = -1;
  for (; ++a < r.length; )
    Object.assign(t, r[a].property), Object.assign(n, r[a].normal);
  return new G0(t, n, e);
}
function P0(r) {
  return r.toLowerCase();
}
class ze {
  constructor(e, t) {
    (this.property = e), (this.attribute = t);
  }
}
ze.prototype.space = null;
ze.prototype.boolean = !1;
ze.prototype.booleanish = !1;
ze.prototype.overloadedBoolean = !1;
ze.prototype.number = !1;
ze.prototype.commaSeparated = !1;
ze.prototype.spaceSeparated = !1;
ze.prototype.commaOrSpaceSeparated = !1;
ze.prototype.mustUseProperty = !1;
ze.prototype.defined = !1;
let Jo = 0;
const W = m0(),
  ie = m0(),
  Si = m0(),
  N = m0(),
  K = m0(),
  w0 = m0(),
  ge = m0();
function m0() {
  return 2 ** ++Jo;
}
const dr = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: W,
        booleanish: ie,
        commaOrSpaceSeparated: ge,
        commaSeparated: w0,
        number: N,
        overloadedBoolean: Si,
        spaceSeparated: K,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xt = Object.keys(dr);
class Vr extends ze {
  constructor(e, t, n, a) {
    let i = -1;
    if ((super(e, t), Un(this, "space", a), typeof n == "number"))
      for (; ++i < Xt.length; ) {
        const l = Xt[i];
        Un(this, Xt[i], (n & dr[l]) === dr[l]);
      }
  }
}
Vr.prototype.defined = !0;
function Un(r, e, t) {
  t && (r[e] = t);
}
const Qo = {}.hasOwnProperty;
function z0(r) {
  const e = {},
    t = {};
  let n;
  for (n in r.properties)
    if (Qo.call(r.properties, n)) {
      const a = r.properties[n],
        i = new Vr(n, r.transform(r.attributes || {}, n), a, r.space);
      r.mustUseProperty &&
        r.mustUseProperty.includes(n) &&
        (i.mustUseProperty = !0),
        (e[n] = i),
        (t[P0(n)] = n),
        (t[P0(i.attribute)] = n);
    }
  return new G0(e, t, r.space);
}
const Ai = z0({
    space: "xlink",
    transform(r, e) {
      return "xlink:" + e.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  Mi = z0({
    space: "xml",
    transform(r, e) {
      return "xml:" + e.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function zi(r, e) {
  return e in r ? r[e] : e;
}
function Ti(r, e) {
  return zi(r, e.toLowerCase());
}
const Ci = z0({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: Ti,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  Di = z0({
    transform(r, e) {
      return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: ie,
      ariaAutoComplete: null,
      ariaBusy: ie,
      ariaChecked: ie,
      ariaColCount: N,
      ariaColIndex: N,
      ariaColSpan: N,
      ariaControls: K,
      ariaCurrent: null,
      ariaDescribedBy: K,
      ariaDetails: null,
      ariaDisabled: ie,
      ariaDropEffect: K,
      ariaErrorMessage: null,
      ariaExpanded: ie,
      ariaFlowTo: K,
      ariaGrabbed: ie,
      ariaHasPopup: null,
      ariaHidden: ie,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: K,
      ariaLevel: N,
      ariaLive: null,
      ariaModal: ie,
      ariaMultiLine: ie,
      ariaMultiSelectable: ie,
      ariaOrientation: null,
      ariaOwns: K,
      ariaPlaceholder: null,
      ariaPosInSet: N,
      ariaPressed: ie,
      ariaReadOnly: ie,
      ariaRelevant: null,
      ariaRequired: ie,
      ariaRoleDescription: K,
      ariaRowCount: N,
      ariaRowIndex: N,
      ariaRowSpan: N,
      ariaSelected: ie,
      ariaSetSize: N,
      ariaSort: null,
      ariaValueMax: N,
      ariaValueMin: N,
      ariaValueNow: N,
      ariaValueText: null,
      role: null,
    },
  }),
  e1 = z0({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: Ti,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: w0,
      acceptCharset: K,
      accessKey: K,
      action: null,
      allow: null,
      allowFullScreen: W,
      allowPaymentRequest: W,
      allowUserMedia: W,
      alt: null,
      as: null,
      async: W,
      autoCapitalize: null,
      autoComplete: K,
      autoFocus: W,
      autoPlay: W,
      capture: W,
      charSet: null,
      checked: W,
      cite: null,
      className: K,
      cols: N,
      colSpan: null,
      content: null,
      contentEditable: ie,
      controls: W,
      controlsList: K,
      coords: N | w0,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: W,
      defer: W,
      dir: null,
      dirName: null,
      disabled: W,
      download: Si,
      draggable: ie,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: W,
      formTarget: null,
      headers: K,
      height: N,
      hidden: W,
      high: N,
      href: null,
      hrefLang: null,
      htmlFor: K,
      httpEquiv: K,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: W,
      itemId: null,
      itemProp: K,
      itemRef: K,
      itemScope: W,
      itemType: K,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: W,
      low: N,
      manifest: null,
      max: null,
      maxLength: N,
      media: null,
      method: null,
      min: null,
      minLength: N,
      multiple: W,
      muted: W,
      name: null,
      nonce: null,
      noModule: W,
      noValidate: W,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: W,
      optimum: N,
      pattern: null,
      ping: K,
      placeholder: null,
      playsInline: W,
      poster: null,
      preload: null,
      readOnly: W,
      referrerPolicy: null,
      rel: K,
      required: W,
      reversed: W,
      rows: N,
      rowSpan: N,
      sandbox: K,
      scope: null,
      scoped: W,
      seamless: W,
      selected: W,
      shape: null,
      size: N,
      sizes: null,
      slot: null,
      span: N,
      spellCheck: ie,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: N,
      step: null,
      style: null,
      tabIndex: N,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: W,
      useMap: null,
      value: ie,
      width: N,
      wrap: null,
      align: null,
      aLink: null,
      archive: K,
      axis: null,
      background: null,
      bgColor: null,
      border: N,
      borderColor: null,
      bottomMargin: N,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: W,
      declare: W,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: N,
      leftMargin: N,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: N,
      marginWidth: N,
      noResize: W,
      noHref: W,
      noShade: W,
      noWrap: W,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: N,
      rules: null,
      scheme: null,
      scrolling: ie,
      standby: null,
      summary: null,
      text: null,
      topMargin: N,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: N,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: W,
      disableRemotePlayback: W,
      prefix: null,
      property: null,
      results: N,
      security: null,
      unselectable: null,
    },
  }),
  t1 = z0({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: zi,
    properties: {
      about: ge,
      accentHeight: N,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: N,
      amplitude: N,
      arabicForm: null,
      ascent: N,
      attributeName: null,
      attributeType: null,
      azimuth: N,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: N,
      by: null,
      calcMode: null,
      capHeight: N,
      className: K,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: N,
      diffuseConstant: N,
      direction: null,
      display: null,
      dur: null,
      divisor: N,
      dominantBaseline: null,
      download: W,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: N,
      enableBackground: null,
      end: null,
      event: null,
      exponent: N,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: N,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: w0,
      g2: w0,
      glyphName: w0,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: N,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: N,
      horizOriginX: N,
      horizOriginY: N,
      id: null,
      ideographic: N,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: N,
      k: N,
      k1: N,
      k2: N,
      k3: N,
      k4: N,
      kernelMatrix: ge,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: N,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: N,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: N,
      overlineThickness: N,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: N,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: K,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: N,
      pointsAtY: N,
      pointsAtZ: N,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: ge,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: ge,
      rev: ge,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: ge,
      requiredFeatures: ge,
      requiredFonts: ge,
      requiredFormats: ge,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: N,
      specularExponent: N,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: N,
      strikethroughThickness: N,
      string: null,
      stroke: null,
      strokeDashArray: ge,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: N,
      strokeOpacity: N,
      strokeWidth: null,
      style: null,
      surfaceScale: N,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: ge,
      tabIndex: N,
      tableValues: null,
      target: null,
      targetX: N,
      targetY: N,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: ge,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: N,
      underlineThickness: N,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: N,
      values: null,
      vAlphabetic: N,
      vMathematical: N,
      vectorEffect: null,
      vHanging: N,
      vIdeographic: N,
      version: null,
      vertAdvY: N,
      vertOriginX: N,
      vertOriginY: N,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: N,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  r1 = /^data[-\w.:]+$/i,
  jn = /-[a-z]/g,
  n1 = /[A-Z]/g;
function Fi(r, e) {
  const t = P0(e);
  let n = e,
    a = ze;
  if (t in r.normal) return r.property[r.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && r1.test(e)) {
    if (e.charAt(4) === "-") {
      const i = e.slice(5).replace(jn, i1);
      n = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = e.slice(4);
      if (!jn.test(i)) {
        let l = i.replace(n1, a1);
        l.charAt(0) !== "-" && (l = "-" + l), (e = "data" + l);
      }
    }
    a = Vr;
  }
  return new a(n, e);
}
function a1(r) {
  return "-" + r.toLowerCase();
}
function i1(r) {
  return r.charAt(1).toUpperCase();
}
const Ni = ki([Mi, Ai, Ci, Di, e1], "html"),
  Ur = ki([Mi, Ai, Ci, Di, t1], "svg"),
  Gn = /[#.]/g;
function l1(r, e) {
  const t = r || "",
    n = {};
  let a = 0,
    i,
    l;
  for (; a < t.length; ) {
    Gn.lastIndex = a;
    const o = Gn.exec(t),
      u = t.slice(a, o ? o.index : t.length);
    u &&
      (i
        ? i === "#"
          ? (n.id = u)
          : Array.isArray(n.className)
          ? n.className.push(u)
          : (n.className = [u])
        : (l = u),
      (a += u.length)),
      o && ((i = o[0]), a++);
  }
  return {
    type: "element",
    tagName: l || e || "div",
    properties: n,
    children: [],
  };
}
function Wn(r) {
  const e = String(r || "").trim();
  return e ? e.split(/[ \t\n\r\f]+/g) : [];
}
function s1(r) {
  return r.join(" ").trim();
}
function _n(r) {
  const e = [],
    t = String(r || "");
  let n = t.indexOf(","),
    a = 0,
    i = !1;
  for (; !i; ) {
    n === -1 && ((n = t.length), (i = !0));
    const l = t.slice(a, n).trim();
    (l || !i) && e.push(l), (a = n + 1), (n = t.indexOf(",", a));
  }
  return e;
}
function o1(r, e) {
  const t = e || {};
  return (r[r.length - 1] === "" ? [...r, ""] : r)
    .join((t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " "))
    .trim();
}
const u1 = new Set(["menu", "submit", "reset", "button"]),
  fr = {}.hasOwnProperty;
function Ei(r, e, t) {
  const n = t && d1(t);
  return function (i, l, ...o) {
    let u = -1,
      m;
    if (i == null) (m = { type: "root", children: [] }), o.unshift(l);
    else if (
      ((m = l1(i, e)),
      (m.tagName = m.tagName.toLowerCase()),
      n && fr.call(n, m.tagName) && (m.tagName = n[m.tagName]),
      c1(l, m.tagName))
    ) {
      let d;
      for (d in l) fr.call(l, d) && h1(r, m.properties, d, l[d]);
    } else o.unshift(l);
    for (; ++u < o.length; ) pr(m.children, o[u]);
    return (
      m.type === "element" &&
        m.tagName === "template" &&
        ((m.content = { type: "root", children: m.children }),
        (m.children = [])),
      m
    );
  };
}
function c1(r, e) {
  return r == null || typeof r != "object" || Array.isArray(r)
    ? !1
    : e === "input" || !r.type || typeof r.type != "string"
    ? !0
    : "children" in r && Array.isArray(r.children)
    ? !1
    : e === "button"
    ? u1.has(r.type.toLowerCase())
    : !("value" in r);
}
function h1(r, e, t, n) {
  const a = Fi(r, t);
  let i = -1,
    l;
  if (n != null) {
    if (typeof n == "number") {
      if (Number.isNaN(n)) return;
      l = n;
    } else
      typeof n == "boolean"
        ? (l = n)
        : typeof n == "string"
        ? a.spaceSeparated
          ? (l = Wn(n))
          : a.commaSeparated
          ? (l = _n(n))
          : a.commaOrSpaceSeparated
          ? (l = Wn(_n(n).join(" ")))
          : (l = Yn(a, a.property, n))
        : Array.isArray(n)
        ? (l = n.concat())
        : (l = a.property === "style" ? m1(n) : String(n));
    if (Array.isArray(l)) {
      const o = [];
      for (; ++i < l.length; ) o[i] = Yn(a, a.property, l[i]);
      l = o;
    }
    a.property === "className" &&
      Array.isArray(e.className) &&
      (l = e.className.concat(l)),
      (e[a.property] = l);
  }
}
function pr(r, e) {
  let t = -1;
  if (e != null)
    if (typeof e == "string" || typeof e == "number")
      r.push({ type: "text", value: String(e) });
    else if (Array.isArray(e)) for (; ++t < e.length; ) pr(r, e[t]);
    else if (typeof e == "object" && "type" in e)
      e.type === "root" ? pr(r, e.children) : r.push(e);
    else throw new Error("Expected node, nodes, or string, got `" + e + "`");
}
function Yn(r, e, t) {
  if (typeof t == "string") {
    if (r.number && t && !Number.isNaN(Number(t))) return Number(t);
    if ((r.boolean || r.overloadedBoolean) && (t === "" || P0(t) === P0(e)))
      return !0;
  }
  return t;
}
function m1(r) {
  const e = [];
  let t;
  for (t in r) fr.call(r, t) && e.push([t, r[t]].join(": "));
  return e.join("; ");
}
function d1(r) {
  const e = {};
  let t = -1;
  for (; ++t < r.length; ) e[r[t].toLowerCase()] = r[t];
  return e;
}
const f1 = Ei(Ni, "div"),
  p1 = [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "solidColor",
    "textArea",
    "textPath",
  ],
  g1 = Ei(Ur, "g", p1);
function v1(r, e) {
  return (r ? Bi(r, e || {}) : void 0) || { type: "root", children: [] };
}
function Bi(r, e) {
  const t = b1(r, e);
  return t && e.afterTransform && e.afterTransform(r, t), t;
}
function b1(r, e) {
  switch (r.nodeType) {
    case 1:
      return k1(r, e);
    case 3:
      return x1(r);
    case 8:
      return w1(r);
    case 9:
      return Xn(r, e);
    case 10:
      return y1();
    case 11:
      return Xn(r, e);
    default:
      return;
  }
}
function Xn(r, e) {
  return { type: "root", children: Oi(r, e) };
}
function y1() {
  return { type: "doctype" };
}
function x1(r) {
  return { type: "text", value: r.nodeValue || "" };
}
function w1(r) {
  return { type: "comment", value: r.nodeValue || "" };
}
function k1(r, e) {
  const t = r.namespaceURI,
    n = t === Yt.svg ? g1 : f1,
    a = t === Yt.html ? r.tagName.toLowerCase() : r.tagName,
    i = t === Yt.html && a === "template" ? r.content : r,
    l = r.getAttributeNames(),
    o = {};
  let u = -1;
  for (; ++u < l.length; ) o[l[u]] = r.getAttribute(l[u]) || "";
  return n(a, o, Oi(i, e));
}
function Oi(r, e) {
  const t = r.childNodes,
    n = [];
  let a = -1;
  for (; ++a < t.length; ) {
    const i = Bi(t[a], e);
    i !== void 0 && n.push(i);
  }
  return n;
}
const S1 = new DOMParser();
function A1(r, e) {
  const t =
    e != null && e.fragment ? M1(r) : S1.parseFromString(r, "text/html");
  return v1(t);
}
function M1(r) {
  const e = document.createElement("template");
  return (e.innerHTML = r), e.content;
}
const Zn = Object.assign,
  z1 = "rehype-katex";
function T1(r) {
  const e = r || {},
    t = e.throwOnError || !1;
  return (n, a) => {
    Uo(n, "element", (i) => {
      const l =
          i.properties && Array.isArray(i.properties.className)
            ? i.properties.className
            : [],
        o = l.includes("math-inline"),
        u = l.includes("math-display");
      if (!o && !u) return;
      const m = Wo(i, { whitespace: "pre" });
      let d;
      try {
        d = qn.renderToString(
          m,
          Zn({}, e, { displayMode: u, throwOnError: !0 })
        );
      } catch (x) {
        const y = x,
          v = t ? "fail" : "message",
          w = [z1, y.name.toLowerCase()].join(":");
        if ((a[v](y.message, i.position, w), y.name !== "ParseError")) {
          i.children = [
            {
              type: "element",
              tagName: "span",
              properties: {
                className: ["katex-error"],
                title: String(y),
                style: "color:" + (e.errorColor || "#cc0000"),
              },
              children: [{ type: "text", value: m }],
            },
          ];
          return;
        }
        d = qn.renderToString(
          m,
          Zn({}, e, { displayMode: u, throwOnError: !1, strict: "ignore" })
        );
      }
      const p = A1(d, { fragment: !0 });
      i.children = p.children;
    });
  };
}
const C1 = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "nextid",
    "param",
    "source",
    "track",
    "wbr",
  ],
  Kn = {}.hasOwnProperty;
function D1(r, e) {
  const t = e || {};
  function n(a, ...i) {
    let l = n.invalid;
    const o = n.handlers;
    if (a && Kn.call(a, r)) {
      const u = String(a[r]);
      l = Kn.call(o, u) ? o[u] : n.unknown;
    }
    if (l) return l.call(this, a, ...i);
  }
  return (
    (n.handlers = t.handlers || {}),
    (n.invalid = t.invalid),
    (n.unknown = t.unknown),
    n
  );
}
function F1(r, e) {
  if (
    ((r = r.replace(e.subset ? N1(e.subset) : /["&'<>`]/g, n)),
    e.subset || e.escapeOnly)
  )
    return r;
  return r
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, t)
    .replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, n);
  function t(a, i, l) {
    return e.format(
      (a.charCodeAt(0) - 55296) * 1024 + a.charCodeAt(1) - 56320 + 65536,
      l.charCodeAt(i + 2),
      e
    );
  }
  function n(a, i, l) {
    return e.format(a.charCodeAt(0), l.charCodeAt(i + 1), e);
  }
}
function N1(r) {
  const e = [];
  let t = -1;
  for (; ++t < r.length; ) e.push(r[t].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + e.join("|") + ")", "g");
}
function E1(r, e, t) {
  const n = "&#x" + r.toString(16).toUpperCase();
  return t && e && !/[\dA-Fa-f]/.test(String.fromCharCode(e)) ? n : n + ";";
}
function B1(r, e, t) {
  const n = "&#" + String(r);
  return t && e && !/\d/.test(String.fromCharCode(e)) ? n : n + ";";
}
const O1 = [
    "AElig",
    "AMP",
    "Aacute",
    "Acirc",
    "Agrave",
    "Aring",
    "Atilde",
    "Auml",
    "COPY",
    "Ccedil",
    "ETH",
    "Eacute",
    "Ecirc",
    "Egrave",
    "Euml",
    "GT",
    "Iacute",
    "Icirc",
    "Igrave",
    "Iuml",
    "LT",
    "Ntilde",
    "Oacute",
    "Ocirc",
    "Ograve",
    "Oslash",
    "Otilde",
    "Ouml",
    "QUOT",
    "REG",
    "THORN",
    "Uacute",
    "Ucirc",
    "Ugrave",
    "Uuml",
    "Yacute",
    "aacute",
    "acirc",
    "acute",
    "aelig",
    "agrave",
    "amp",
    "aring",
    "atilde",
    "auml",
    "brvbar",
    "ccedil",
    "cedil",
    "cent",
    "copy",
    "curren",
    "deg",
    "divide",
    "eacute",
    "ecirc",
    "egrave",
    "eth",
    "euml",
    "frac12",
    "frac14",
    "frac34",
    "gt",
    "iacute",
    "icirc",
    "iexcl",
    "igrave",
    "iquest",
    "iuml",
    "laquo",
    "lt",
    "macr",
    "micro",
    "middot",
    "nbsp",
    "not",
    "ntilde",
    "oacute",
    "ocirc",
    "ograve",
    "ordf",
    "ordm",
    "oslash",
    "otilde",
    "ouml",
    "para",
    "plusmn",
    "pound",
    "quot",
    "raquo",
    "reg",
    "sect",
    "shy",
    "sup1",
    "sup2",
    "sup3",
    "szlig",
    "thorn",
    "times",
    "uacute",
    "ucirc",
    "ugrave",
    "uml",
    "uuml",
    "yacute",
    "yen",
    "yuml",
  ],
  Zt = {
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    fnof: "ƒ",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    bull: "•",
    hellip: "…",
    prime: "′",
    Prime: "″",
    oline: "‾",
    frasl: "⁄",
    weierp: "℘",
    image: "ℑ",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦",
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    circ: "ˆ",
    tilde: "˜",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    permil: "‰",
    lsaquo: "‹",
    rsaquo: "›",
    euro: "€",
  },
  L1 = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
  Li = {}.hasOwnProperty,
  gr = {};
let st;
for (st in Zt) Li.call(Zt, st) && (gr[Zt[st]] = st);
function R1(r, e, t, n) {
  const a = String.fromCharCode(r);
  if (Li.call(gr, a)) {
    const i = gr[a],
      l = "&" + i;
    return t &&
      O1.includes(i) &&
      !L1.includes(i) &&
      (!n || (e && e !== 61 && /[^\da-z]/i.test(String.fromCharCode(e))))
      ? l
      : l + ";";
  }
  return "";
}
function q1(r, e, t) {
  let n = E1(r, e, t.omitOptionalSemicolons),
    a;
  if (
    ((t.useNamedReferences || t.useShortestReferences) &&
      (a = R1(r, e, t.omitOptionalSemicolons, t.attribute)),
    (t.useShortestReferences || !a) && t.useShortestReferences)
  ) {
    const i = B1(r, e, t.omitOptionalSemicolons);
    i.length < n.length && (n = i);
  }
  return a && (!t.useShortestReferences || a.length < n.length) ? a : n;
}
function k0(r, e) {
  return F1(r, Object.assign({ format: q1 }, e));
}
function I1(r, e, t, n) {
  return n.settings.bogusComments
    ? "<?" +
        k0(
          r.value,
          Object.assign({}, n.settings.characterReferences, { subset: [">"] })
        ) +
        ">"
    : "<!--" + r.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, a) + "-->";
  function a(i) {
    return k0(
      i,
      Object.assign({}, n.settings.characterReferences, { subset: ["<", ">"] })
    );
  }
}
function P1(r, e, t, n) {
  return (
    "<!" +
    (n.settings.upperDoctype ? "DOCTYPE" : "doctype") +
    (n.settings.tightDoctype ? "" : " ") +
    "html>"
  );
}
function vt(r, e) {
  const t = String(r);
  if (typeof e != "string") throw new TypeError("Expected character");
  let n = 0,
    a = t.indexOf(e);
  for (; a !== -1; ) n++, (a = t.indexOf(e, a + e.length));
  return n;
}
const se = qi(1),
  Ri = qi(-1);
function qi(r) {
  return e;
  function e(t, n, a) {
    const i = t ? t.children : [];
    let l = (n || 0) + r,
      o = i && i[l];
    if (!a) for (; o && u0(o); ) (l += r), (o = i[l]);
    return o;
  }
}
const H1 = {}.hasOwnProperty;
function Ii(r) {
  return e;
  function e(t, n, a) {
    return H1.call(r, t.tagName) && r[t.tagName](t, n, a);
  }
}
const jr = Ii({
  html: $1,
  head: Kt,
  body: V1,
  p: U1,
  li: j1,
  dt: G1,
  dd: W1,
  rt: Jn,
  rp: Jn,
  optgroup: _1,
  option: Y1,
  menuitem: X1,
  colgroup: Kt,
  caption: Kt,
  thead: Z1,
  tbody: K1,
  tfoot: J1,
  tr: Q1,
  td: Qn,
  th: Qn,
});
function Kt(r, e, t) {
  const n = se(t, e, !0);
  return (
    !n ||
    (n.type !== "comment" && !(n.type === "text" && u0(n.value.charAt(0))))
  );
}
function $1(r, e, t) {
  const n = se(t, e);
  return !n || n.type !== "comment";
}
function V1(r, e, t) {
  const n = se(t, e);
  return !n || n.type !== "comment";
}
function U1(r, e, t) {
  const n = se(t, e);
  return n
    ? n.type === "element" &&
        (n.tagName === "address" ||
          n.tagName === "article" ||
          n.tagName === "aside" ||
          n.tagName === "blockquote" ||
          n.tagName === "details" ||
          n.tagName === "div" ||
          n.tagName === "dl" ||
          n.tagName === "fieldset" ||
          n.tagName === "figcaption" ||
          n.tagName === "figure" ||
          n.tagName === "footer" ||
          n.tagName === "form" ||
          n.tagName === "h1" ||
          n.tagName === "h2" ||
          n.tagName === "h3" ||
          n.tagName === "h4" ||
          n.tagName === "h5" ||
          n.tagName === "h6" ||
          n.tagName === "header" ||
          n.tagName === "hgroup" ||
          n.tagName === "hr" ||
          n.tagName === "main" ||
          n.tagName === "menu" ||
          n.tagName === "nav" ||
          n.tagName === "ol" ||
          n.tagName === "p" ||
          n.tagName === "pre" ||
          n.tagName === "section" ||
          n.tagName === "table" ||
          n.tagName === "ul")
    : !t ||
        !(
          t.type === "element" &&
          (t.tagName === "a" ||
            t.tagName === "audio" ||
            t.tagName === "del" ||
            t.tagName === "ins" ||
            t.tagName === "map" ||
            t.tagName === "noscript" ||
            t.tagName === "video")
        );
}
function j1(r, e, t) {
  const n = se(t, e);
  return !n || (n.type === "element" && n.tagName === "li");
}
function G1(r, e, t) {
  const n = se(t, e);
  return (
    n && n.type === "element" && (n.tagName === "dt" || n.tagName === "dd")
  );
}
function W1(r, e, t) {
  const n = se(t, e);
  return (
    !n || (n.type === "element" && (n.tagName === "dt" || n.tagName === "dd"))
  );
}
function Jn(r, e, t) {
  const n = se(t, e);
  return (
    !n || (n.type === "element" && (n.tagName === "rp" || n.tagName === "rt"))
  );
}
function _1(r, e, t) {
  const n = se(t, e);
  return !n || (n.type === "element" && n.tagName === "optgroup");
}
function Y1(r, e, t) {
  const n = se(t, e);
  return (
    !n ||
    (n.type === "element" &&
      (n.tagName === "option" || n.tagName === "optgroup"))
  );
}
function X1(r, e, t) {
  const n = se(t, e);
  return (
    !n ||
    (n.type === "element" &&
      (n.tagName === "menuitem" || n.tagName === "hr" || n.tagName === "menu"))
  );
}
function Z1(r, e, t) {
  const n = se(t, e);
  return (
    n &&
    n.type === "element" &&
    (n.tagName === "tbody" || n.tagName === "tfoot")
  );
}
function K1(r, e, t) {
  const n = se(t, e);
  return (
    !n ||
    (n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot"))
  );
}
function J1(r, e, t) {
  return !se(t, e);
}
function Q1(r, e, t) {
  const n = se(t, e);
  return !n || (n.type === "element" && n.tagName === "tr");
}
function Qn(r, e, t) {
  const n = se(t, e);
  return (
    !n || (n.type === "element" && (n.tagName === "td" || n.tagName === "th"))
  );
}
const eu = Ii({ html: tu, head: ru, body: nu, colgroup: au, tbody: iu });
function tu(r) {
  const e = se(r, -1);
  return !e || e.type !== "comment";
}
function ru(r) {
  const e = r.children,
    t = [];
  let n = -1;
  for (; ++n < e.length; ) {
    const a = e[n];
    if (
      a.type === "element" &&
      (a.tagName === "title" || a.tagName === "base")
    ) {
      if (t.includes(a.tagName)) return !1;
      t.push(a.tagName);
    }
  }
  return e.length > 0;
}
function nu(r) {
  const e = se(r, -1, !0);
  return (
    !e ||
    (e.type !== "comment" &&
      !(e.type === "text" && u0(e.value.charAt(0))) &&
      !(
        e.type === "element" &&
        (e.tagName === "meta" ||
          e.tagName === "link" ||
          e.tagName === "script" ||
          e.tagName === "style" ||
          e.tagName === "template")
      ))
  );
}
function au(r, e, t) {
  const n = Ri(t, e),
    a = se(r, -1, !0);
  return t &&
    n &&
    n.type === "element" &&
    n.tagName === "colgroup" &&
    jr(n, t.children.indexOf(n), t)
    ? !1
    : a && a.type === "element" && a.tagName === "col";
}
function iu(r, e, t) {
  const n = Ri(t, e),
    a = se(r, -1);
  return t &&
    n &&
    n.type === "element" &&
    (n.tagName === "thead" || n.tagName === "tbody") &&
    jr(n, t.children.indexOf(n), t)
    ? !1
    : a && a.type === "element" && a.tagName === "tr";
}
const ot = {
  name: [
    [
      `	
\f\r &/=>`.split(""),
      `	
\f\r "&'/=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(""),
      `\0	
\f\r "&'/<=>\``.split(""),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
  ],
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")],
  ],
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")],
  ],
};
function lu(r, e, t, n) {
  const a = n.schema,
    i = a.space === "svg" ? !1 : n.settings.omitOptionalTags;
  let l =
    a.space === "svg"
      ? n.settings.closeEmptyElements
      : n.settings.voids.includes(r.tagName.toLowerCase());
  const o = [];
  let u;
  a.space === "html" && r.tagName === "svg" && (n.schema = Ur);
  const m = su(n, r.properties),
    d = n.all(a.space === "html" && r.tagName === "template" ? r.content : r);
  return (
    (n.schema = a),
    d && (l = !1),
    (m || !i || !eu(r, e, t)) &&
      (o.push("<", r.tagName, m ? " " + m : ""),
      l &&
        (a.space === "svg" || n.settings.closeSelfClosing) &&
        ((u = m.charAt(m.length - 1)),
        (!n.settings.tightSelfClosing ||
          u === "/" ||
          (u && u !== '"' && u !== "'")) &&
          o.push(" "),
        o.push("/")),
      o.push(">")),
    o.push(d),
    !l && (!i || !jr(r, e, t)) && o.push("</" + r.tagName + ">"),
    o.join("")
  );
}
function su(r, e) {
  const t = [];
  let n = -1,
    a;
  if (e) {
    for (a in e)
      if (e[a] !== void 0 && e[a] !== null) {
        const i = ou(r, a, e[a]);
        i && t.push(i);
      }
  }
  for (; ++n < t.length; ) {
    const i = r.settings.tightAttributes ? t[n].charAt(t[n].length - 1) : null;
    n !== t.length - 1 && i !== '"' && i !== "'" && (t[n] += " ");
  }
  return t.join("");
}
function ou(r, e, t) {
  const n = Fi(r.schema, e),
    a = r.settings.allowParseErrors && r.schema.space === "html" ? 0 : 1,
    i = r.settings.allowDangerousCharacters ? 0 : 1;
  let l = r.quote,
    o;
  if (
    (n.overloadedBoolean && (t === n.attribute || t === "")
      ? (t = !0)
      : (n.boolean || (n.overloadedBoolean && typeof t != "string")) &&
        (t = !!t),
    t == null || t === !1 || (typeof t == "number" && Number.isNaN(t)))
  )
    return "";
  const u = k0(
    n.attribute,
    Object.assign({}, r.settings.characterReferences, { subset: ot.name[a][i] })
  );
  return t === !0 ||
    ((t = Array.isArray(t)
      ? (n.commaSeparated ? o1 : s1)(t, {
          padLeft: !r.settings.tightCommaSeparatedLists,
        })
      : String(t)),
    r.settings.collapseEmptyAttributes && !t)
    ? u
    : (r.settings.preferUnquoted &&
        (o = k0(
          t,
          Object.assign({}, r.settings.characterReferences, {
            subset: ot.unquoted[a][i],
            attribute: !0,
          })
        )),
      o !== t &&
        (r.settings.quoteSmart &&
          vt(t, l) > vt(t, r.alternative) &&
          (l = r.alternative),
        (o =
          l +
          k0(
            t,
            Object.assign({}, r.settings.characterReferences, {
              subset: (l === "'" ? ot.single : ot.double)[a][i],
              attribute: !0,
            })
          ) +
          l)),
      u + (o && "=" + o));
}
function Pi(r, e, t, n) {
  return t &&
    t.type === "element" &&
    (t.tagName === "script" || t.tagName === "style")
    ? r.value
    : k0(
        r.value,
        Object.assign({}, n.settings.characterReferences, {
          subset: ["<", "&"],
        })
      );
}
function uu(r, e, t, n) {
  return n.settings.allowDangerousHtml ? r.value : Pi(r, e, t, n);
}
function cu(r, e, t, n) {
  return n.all(r);
}
const hu = D1("type", {
  invalid: mu,
  unknown: du,
  handlers: {
    comment: I1,
    doctype: P1,
    element: lu,
    raw: uu,
    root: cu,
    text: Pi,
  },
});
function mu(r) {
  throw new Error("Expected node, not `" + r + "`");
}
function du(r) {
  throw new Error("Cannot compile unknown node `" + r.type + "`");
}
function fu(r, e) {
  const t = e || {},
    n = t.quote || '"',
    a = n === '"' ? "'" : '"';
  if (n !== '"' && n !== "'")
    throw new Error("Invalid quote `" + n + "`, expected `'` or `\"`");
  return {
    one: pu,
    all: gu,
    settings: {
      omitOptionalTags: t.omitOptionalTags || !1,
      allowParseErrors: t.allowParseErrors || !1,
      allowDangerousCharacters: t.allowDangerousCharacters || !1,
      quoteSmart: t.quoteSmart || !1,
      preferUnquoted: t.preferUnquoted || !1,
      tightAttributes: t.tightAttributes || !1,
      upperDoctype: t.upperDoctype || !1,
      tightDoctype: t.tightDoctype || !1,
      bogusComments: t.bogusComments || !1,
      tightCommaSeparatedLists: t.tightCommaSeparatedLists || !1,
      tightSelfClosing: t.tightSelfClosing || !1,
      collapseEmptyAttributes: t.collapseEmptyAttributes || !1,
      allowDangerousHtml: t.allowDangerousHtml || !1,
      voids: t.voids || C1,
      characterReferences: t.characterReferences || t.entities || {},
      closeSelfClosing: t.closeSelfClosing || !1,
      closeEmptyElements: t.closeEmptyElements || !1,
    },
    schema: t.space === "svg" ? Ur : Ni,
    quote: n,
    alternative: a,
  }.one(Array.isArray(r) ? { type: "root", children: r } : r, void 0, void 0);
}
function pu(r, e, t) {
  return hu(r, e, t, this);
}
function gu(r) {
  const e = [],
    t = (r && r.children) || [];
  let n = -1;
  for (; ++n < t.length; ) e[n] = this.one(t[n], n, r);
  return e.join("");
}
function vu(r) {
  const e = this.data("settings"),
    t = Object.assign({}, e, r);
  Object.assign(this, { Compiler: n });
  function n(a) {
    return fu(a, t);
  }
}
function B0(r, e, t, n) {
  const a = r.length;
  let i = 0,
    l;
  if (
    (e < 0 ? (e = -e > a ? 0 : a + e) : (e = e > a ? a : e),
    (t = t > 0 ? t : 0),
    n.length < 1e4)
  )
    (l = Array.from(n)), l.unshift(e, t), r.splice(...l);
  else
    for (t && r.splice(e, t); i < n.length; )
      (l = n.slice(i, i + 1e4)),
        l.unshift(e, 0),
        r.splice(...l),
        (i += 1e4),
        (e += 1e4);
}
function Pc(r, e) {
  return r.length > 0 ? (B0(r, r.length, 0, e), r) : e;
}
const ea = {}.hasOwnProperty;
function bu(r) {
  const e = {};
  let t = -1;
  for (; ++t < r.length; ) yu(e, r[t]);
  return e;
}
function yu(r, e) {
  let t;
  for (t in e) {
    const a = (ea.call(r, t) ? r[t] : void 0) || (r[t] = {}),
      i = e[t];
    let l;
    if (i)
      for (l in i) {
        ea.call(a, l) || (a[l] = []);
        const o = i[l];
        xu(a[l], Array.isArray(o) ? o : o ? [o] : []);
      }
  }
}
function xu(r, e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) (e[t].add === "after" ? r : n).push(e[t]);
  B0(r, 0, 0, n);
}
const wu =
    /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
  H0 = i0(/[A-Za-z]/),
  Gr = i0(/[\dA-Za-z]/),
  Hc = i0(/[#-'*+\--9=?A-Z^-~]/);
function ku(r) {
  return r !== null && (r < 32 || r === 127);
}
const $c = i0(/\d/),
  Vc = i0(/[\dA-Fa-f]/),
  Uc = i0(/[!-/:-@[-`{-~]/);
function be(r) {
  return r !== null && r < -2;
}
function fe(r) {
  return r !== null && (r < 0 || r === 32);
}
function He(r) {
  return r === -2 || r === -1 || r === 32;
}
const zt = i0(wu),
  c0 = i0(/\s/);
function i0(r) {
  return e;
  function e(t) {
    return t !== null && r.test(String.fromCharCode(t));
  }
}
const Su = { tokenize: Du, partial: !0 },
  Hi = { tokenize: Fu, partial: !0 },
  $i = { tokenize: Nu, partial: !0 },
  Vi = { tokenize: Eu, partial: !0 },
  Au = { tokenize: Bu, partial: !0 },
  Ui = { tokenize: Tu, previous: Gi },
  ji = { tokenize: Cu, previous: Wi },
  _e = { tokenize: zu, previous: _i },
  qe = {},
  Mu = { text: qe };
let o0 = 48;
for (; o0 < 123; )
  (qe[o0] = _e), o0++, o0 === 58 ? (o0 = 65) : o0 === 91 && (o0 = 97);
qe[43] = _e;
qe[45] = _e;
qe[46] = _e;
qe[95] = _e;
qe[72] = [_e, ji];
qe[104] = [_e, ji];
qe[87] = [_e, Ui];
qe[119] = [_e, Ui];
function zu(r, e, t) {
  const n = this;
  let a, i;
  return l;
  function l(p) {
    return !vr(p) || !_i.call(n, n.previous) || Wr(n.events)
      ? t(p)
      : (r.enter("literalAutolink"), r.enter("literalAutolinkEmail"), o(p));
  }
  function o(p) {
    return vr(p) ? (r.consume(p), o) : p === 64 ? (r.consume(p), u) : t(p);
  }
  function u(p) {
    return p === 46
      ? r.check(Au, d, m)(p)
      : p === 45 || p === 95 || Gr(p)
      ? ((i = !0), r.consume(p), u)
      : d(p);
  }
  function m(p) {
    return r.consume(p), (a = !0), u;
  }
  function d(p) {
    return i && a && H0(n.previous)
      ? (r.exit("literalAutolinkEmail"), r.exit("literalAutolink"), e(p))
      : t(p);
  }
}
function Tu(r, e, t) {
  const n = this;
  return a;
  function a(l) {
    return (l !== 87 && l !== 119) || !Gi.call(n, n.previous) || Wr(n.events)
      ? t(l)
      : (r.enter("literalAutolink"),
        r.enter("literalAutolinkWww"),
        r.check(Su, r.attempt(Hi, r.attempt($i, i), t), t)(l));
  }
  function i(l) {
    return r.exit("literalAutolinkWww"), r.exit("literalAutolink"), e(l);
  }
}
function Cu(r, e, t) {
  const n = this;
  let a = "",
    i = !1;
  return l;
  function l(p) {
    return (p === 72 || p === 104) && Wi.call(n, n.previous) && !Wr(n.events)
      ? (r.enter("literalAutolink"),
        r.enter("literalAutolinkHttp"),
        (a += String.fromCodePoint(p)),
        r.consume(p),
        o)
      : t(p);
  }
  function o(p) {
    if (H0(p) && a.length < 5)
      return (a += String.fromCodePoint(p)), r.consume(p), o;
    if (p === 58) {
      const x = a.toLowerCase();
      if (x === "http" || x === "https") return r.consume(p), u;
    }
    return t(p);
  }
  function u(p) {
    return p === 47 ? (r.consume(p), i ? m : ((i = !0), u)) : t(p);
  }
  function m(p) {
    return p === null || ku(p) || fe(p) || c0(p) || zt(p)
      ? t(p)
      : r.attempt(Hi, r.attempt($i, d), t)(p);
  }
  function d(p) {
    return r.exit("literalAutolinkHttp"), r.exit("literalAutolink"), e(p);
  }
}
function Du(r, e, t) {
  let n = 0;
  return a;
  function a(l) {
    return (l === 87 || l === 119) && n < 3
      ? (n++, r.consume(l), a)
      : l === 46 && n === 3
      ? (r.consume(l), i)
      : t(l);
  }
  function i(l) {
    return l === null ? t(l) : e(l);
  }
}
function Fu(r, e, t) {
  let n, a, i;
  return l;
  function l(m) {
    return m === 46 || m === 95
      ? r.check(Vi, u, o)(m)
      : m === null || fe(m) || c0(m) || (m !== 45 && zt(m))
      ? u(m)
      : ((i = !0), r.consume(m), l);
  }
  function o(m) {
    return m === 95 ? (n = !0) : ((a = n), (n = void 0)), r.consume(m), l;
  }
  function u(m) {
    return a || n || !i ? t(m) : e(m);
  }
}
function Nu(r, e) {
  let t = 0,
    n = 0;
  return a;
  function a(l) {
    return l === 40
      ? (t++, r.consume(l), a)
      : l === 41 && n < t
      ? i(l)
      : l === 33 ||
        l === 34 ||
        l === 38 ||
        l === 39 ||
        l === 41 ||
        l === 42 ||
        l === 44 ||
        l === 46 ||
        l === 58 ||
        l === 59 ||
        l === 60 ||
        l === 63 ||
        l === 93 ||
        l === 95 ||
        l === 126
      ? r.check(Vi, e, i)(l)
      : l === null || fe(l) || c0(l)
      ? e(l)
      : (r.consume(l), a);
  }
  function i(l) {
    return l === 41 && n++, r.consume(l), a;
  }
}
function Eu(r, e, t) {
  return n;
  function n(o) {
    return o === 33 ||
      o === 34 ||
      o === 39 ||
      o === 41 ||
      o === 42 ||
      o === 44 ||
      o === 46 ||
      o === 58 ||
      o === 59 ||
      o === 63 ||
      o === 95 ||
      o === 126
      ? (r.consume(o), n)
      : o === 38
      ? (r.consume(o), i)
      : o === 93
      ? (r.consume(o), a)
      : o === 60 || o === null || fe(o) || c0(o)
      ? e(o)
      : t(o);
  }
  function a(o) {
    return o === null || o === 40 || o === 91 || fe(o) || c0(o) ? e(o) : n(o);
  }
  function i(o) {
    return H0(o) ? l(o) : t(o);
  }
  function l(o) {
    return o === 59 ? (r.consume(o), n) : H0(o) ? (r.consume(o), l) : t(o);
  }
}
function Bu(r, e, t) {
  return n;
  function n(i) {
    return r.consume(i), a;
  }
  function a(i) {
    return Gr(i) ? t(i) : e(i);
  }
}
function Gi(r) {
  return (
    r === null ||
    r === 40 ||
    r === 42 ||
    r === 95 ||
    r === 91 ||
    r === 93 ||
    r === 126 ||
    fe(r)
  );
}
function Wi(r) {
  return !H0(r);
}
function _i(r) {
  return !(r === 47 || vr(r));
}
function vr(r) {
  return r === 43 || r === 45 || r === 46 || r === 95 || Gr(r);
}
function Wr(r) {
  let e = r.length,
    t = !1;
  for (; e--; ) {
    const n = r[e][1];
    if ((n.type === "labelLink" || n.type === "labelImage") && !n._balanced) {
      t = !0;
      break;
    }
    if (n._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return (
    r.length > 0 &&
      !t &&
      (r[r.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    t
  );
}
function ta(r) {
  if (r === null || fe(r) || c0(r)) return 1;
  if (zt(r)) return 2;
}
function Ou(r, e, t) {
  const n = [];
  let a = -1;
  for (; ++a < r.length; ) {
    const i = r[a].resolveAll;
    i && !n.includes(i) && ((e = i(e, t)), n.push(i));
  }
  return e;
}
function ye(r, e, t, n) {
  const a = n ? n - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return l;
  function l(u) {
    return He(u) ? (r.enter(t), o(u)) : e(u);
  }
  function o(u) {
    return He(u) && i++ < a ? (r.consume(u), o) : (r.exit(t), e(u));
  }
}
const Lu = { tokenize: Ru, partial: !0 };
function Ru(r, e, t) {
  return n;
  function n(i) {
    return He(i) ? ye(r, a, "linePrefix")(i) : a(i);
  }
  function a(i) {
    return i === null || be(i) ? e(i) : t(i);
  }
}
const ra = document.createElement("i");
function qu(r) {
  const e = "&" + r + ";";
  ra.innerHTML = e;
  const t = ra.textContent;
  return (t.charCodeAt(t.length - 1) === 59 && r !== "semi") || t === e
    ? !1
    : t;
}
function W0(r) {
  return r
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const Iu = { tokenize: Wu, partial: !0 };
function Pu() {
  return {
    document: {
      91: { tokenize: Uu, continuation: { tokenize: ju }, exit: Gu },
    },
    text: {
      91: { tokenize: Vu },
      93: { add: "after", tokenize: Hu, resolveTo: $u },
    },
  };
}
function Hu(r, e, t) {
  const n = this;
  let a = n.events.length;
  const i = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
  let l;
  for (; a--; ) {
    const u = n.events[a][1];
    if (u.type === "labelImage") {
      l = u;
      break;
    }
    if (
      u.type === "gfmFootnoteCall" ||
      u.type === "labelLink" ||
      u.type === "label" ||
      u.type === "image" ||
      u.type === "link"
    )
      break;
  }
  return o;
  function o(u) {
    if (!l || !l._balanced) return t(u);
    const m = W0(n.sliceSerialize({ start: l.end, end: n.now() }));
    return m.codePointAt(0) !== 94 || !i.includes(m.slice(1))
      ? t(u)
      : (r.enter("gfmFootnoteCallLabelMarker"),
        r.consume(u),
        r.exit("gfmFootnoteCallLabelMarker"),
        e(u));
  }
}
function $u(r, e) {
  let t = r.length;
  for (; t--; )
    if (r[t][1].type === "labelImage" && r[t][0] === "enter") {
      r[t][1];
      break;
    }
  (r[t + 1][1].type = "data"),
    (r[t + 3][1].type = "gfmFootnoteCallLabelMarker");
  const n = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, r[t + 3][1].start),
      end: Object.assign({}, r[r.length - 1][1].end),
    },
    a = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, r[t + 3][1].end),
      end: Object.assign({}, r[t + 3][1].end),
    };
  a.end.column++, a.end.offset++, a.end._bufferIndex++;
  const i = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, a.end),
      end: Object.assign({}, r[r.length - 1][1].start),
    },
    l = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, i.start),
      end: Object.assign({}, i.end),
    },
    o = [
      r[t + 1],
      r[t + 2],
      ["enter", n, e],
      r[t + 3],
      r[t + 4],
      ["enter", a, e],
      ["exit", a, e],
      ["enter", i, e],
      ["enter", l, e],
      ["exit", l, e],
      ["exit", i, e],
      r[r.length - 2],
      r[r.length - 1],
      ["exit", n, e],
    ];
  return r.splice(t, r.length - t + 1, ...o), r;
}
function Vu(r, e, t) {
  const n = this,
    a = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
  let i = 0,
    l;
  return o;
  function o(p) {
    return (
      r.enter("gfmFootnoteCall"),
      r.enter("gfmFootnoteCallLabelMarker"),
      r.consume(p),
      r.exit("gfmFootnoteCallLabelMarker"),
      u
    );
  }
  function u(p) {
    return p !== 94
      ? t(p)
      : (r.enter("gfmFootnoteCallMarker"),
        r.consume(p),
        r.exit("gfmFootnoteCallMarker"),
        r.enter("gfmFootnoteCallString"),
        (r.enter("chunkString").contentType = "string"),
        m);
  }
  function m(p) {
    if (i > 999 || (p === 93 && !l) || p === null || p === 91 || fe(p))
      return t(p);
    if (p === 93) {
      r.exit("chunkString");
      const x = r.exit("gfmFootnoteCallString");
      return a.includes(W0(n.sliceSerialize(x)))
        ? (r.enter("gfmFootnoteCallLabelMarker"),
          r.consume(p),
          r.exit("gfmFootnoteCallLabelMarker"),
          r.exit("gfmFootnoteCall"),
          e)
        : t(p);
    }
    return fe(p) || (l = !0), i++, r.consume(p), p === 92 ? d : m;
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (r.consume(p), i++, m) : m(p);
  }
}
function Uu(r, e, t) {
  const n = this,
    a = n.parser.gfmFootnotes || (n.parser.gfmFootnotes = []);
  let i,
    l = 0,
    o;
  return u;
  function u(v) {
    return (
      (r.enter("gfmFootnoteDefinition")._container = !0),
      r.enter("gfmFootnoteDefinitionLabel"),
      r.enter("gfmFootnoteDefinitionLabelMarker"),
      r.consume(v),
      r.exit("gfmFootnoteDefinitionLabelMarker"),
      m
    );
  }
  function m(v) {
    return v === 94
      ? (r.enter("gfmFootnoteDefinitionMarker"),
        r.consume(v),
        r.exit("gfmFootnoteDefinitionMarker"),
        r.enter("gfmFootnoteDefinitionLabelString"),
        (r.enter("chunkString").contentType = "string"),
        d)
      : t(v);
  }
  function d(v) {
    if (l > 999 || (v === 93 && !o) || v === null || v === 91 || fe(v))
      return t(v);
    if (v === 93) {
      r.exit("chunkString");
      const w = r.exit("gfmFootnoteDefinitionLabelString");
      return (
        (i = W0(n.sliceSerialize(w))),
        r.enter("gfmFootnoteDefinitionLabelMarker"),
        r.consume(v),
        r.exit("gfmFootnoteDefinitionLabelMarker"),
        r.exit("gfmFootnoteDefinitionLabel"),
        x
      );
    }
    return fe(v) || (o = !0), l++, r.consume(v), v === 92 ? p : d;
  }
  function p(v) {
    return v === 91 || v === 92 || v === 93 ? (r.consume(v), l++, d) : d(v);
  }
  function x(v) {
    return v === 58
      ? (r.enter("definitionMarker"),
        r.consume(v),
        r.exit("definitionMarker"),
        a.includes(i) || a.push(i),
        ye(r, y, "gfmFootnoteDefinitionWhitespace"))
      : t(v);
  }
  function y(v) {
    return e(v);
  }
}
function ju(r, e, t) {
  return r.check(Lu, e, r.attempt(Iu, e, t));
}
function Gu(r) {
  r.exit("gfmFootnoteDefinition");
}
function Wu(r, e, t) {
  const n = this;
  return ye(r, a, "gfmFootnoteDefinitionIndent", 4 + 1);
  function a(i) {
    const l = n.events[n.events.length - 1];
    return l &&
      l[1].type === "gfmFootnoteDefinitionIndent" &&
      l[2].sliceSerialize(l[1], !0).length === 4
      ? e(i)
      : t(i);
  }
}
function _u(r) {
  let t = (r || {}).singleTilde;
  const n = { tokenize: i, resolveAll: a };
  return (
    t == null && (t = !0),
    {
      text: { 126: n },
      insideSpan: { null: [n] },
      attentionMarkers: { null: [126] },
    }
  );
  function a(l, o) {
    let u = -1;
    for (; ++u < l.length; )
      if (
        l[u][0] === "enter" &&
        l[u][1].type === "strikethroughSequenceTemporary" &&
        l[u][1]._close
      ) {
        let m = u;
        for (; m--; )
          if (
            l[m][0] === "exit" &&
            l[m][1].type === "strikethroughSequenceTemporary" &&
            l[m][1]._open &&
            l[u][1].end.offset - l[u][1].start.offset ===
              l[m][1].end.offset - l[m][1].start.offset
          ) {
            (l[u][1].type = "strikethroughSequence"),
              (l[m][1].type = "strikethroughSequence");
            const d = {
                type: "strikethrough",
                start: Object.assign({}, l[m][1].start),
                end: Object.assign({}, l[u][1].end),
              },
              p = {
                type: "strikethroughText",
                start: Object.assign({}, l[m][1].end),
                end: Object.assign({}, l[u][1].start),
              },
              x = [
                ["enter", d, o],
                ["enter", l[m][1], o],
                ["exit", l[m][1], o],
                ["enter", p, o],
              ],
              y = o.parser.constructs.insideSpan.null;
            y && B0(x, x.length, 0, Ou(y, l.slice(m + 1, u), o)),
              B0(x, x.length, 0, [
                ["exit", p, o],
                ["enter", l[u][1], o],
                ["exit", l[u][1], o],
                ["exit", d, o],
              ]),
              B0(l, m - 1, u - m + 3, x),
              (u = m + x.length - 2);
            break;
          }
      }
    for (u = -1; ++u < l.length; )
      l[u][1].type === "strikethroughSequenceTemporary" &&
        (l[u][1].type = "data");
    return l;
  }
  function i(l, o, u) {
    const m = this.previous,
      d = this.events;
    let p = 0;
    return x;
    function x(v) {
      return m === 126 && d[d.length - 1][1].type !== "characterEscape"
        ? u(v)
        : (l.enter("strikethroughSequenceTemporary"), y(v));
    }
    function y(v) {
      const w = ta(m);
      if (v === 126) return p > 1 ? u(v) : (l.consume(v), p++, y);
      if (p < 2 && !t) return u(v);
      const A = l.exit("strikethroughSequenceTemporary"),
        z = ta(v);
      return (
        (A._open = !z || (z === 2 && !!w)),
        (A._close = !w || (w === 2 && !!z)),
        o(v)
      );
    }
  }
}
class Yu {
  constructor() {
    this.map = [];
  }
  add(e, t, n) {
    Xu(this, e, t, n);
  }
  consume(e) {
    if ((this.map.sort((i, l) => i[0] - l[0]), this.map.length === 0)) return;
    let t = this.map.length;
    const n = [];
    for (; t > 0; )
      (t -= 1),
        n.push(e.slice(this.map[t][0] + this.map[t][1])),
        n.push(this.map[t][2]),
        (e.length = this.map[t][0]);
    n.push([...e]), (e.length = 0);
    let a = n.pop();
    for (; a; ) e.push(...a), (a = n.pop());
    this.map.length = 0;
  }
}
function Xu(r, e, t, n) {
  let a = 0;
  if (!(t === 0 && n.length === 0)) {
    for (; a < r.map.length; ) {
      if (r.map[a][0] === e) {
        (r.map[a][1] += t), r.map[a][2].push(...n);
        return;
      }
      a += 1;
    }
    r.map.push([e, t, n]);
  }
}
function Zu(r, e) {
  let t = !1;
  const n = [];
  for (; e < r.length; ) {
    const a = r[e];
    if (t) {
      if (a[0] === "enter")
        a[1].type === "tableContent" &&
          n.push(r[e + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (a[1].type === "tableContent") {
        if (r[e - 1][1].type === "tableDelimiterMarker") {
          const i = n.length - 1;
          n[i] = n[i] === "left" ? "center" : "right";
        }
      } else if (a[1].type === "tableDelimiterRow") break;
    } else a[0] === "enter" && a[1].type === "tableDelimiterRow" && (t = !0);
    e += 1;
  }
  return n;
}
const Ku = { flow: { null: { tokenize: Ju, resolveAll: Qu } } };
function Ju(r, e, t) {
  const n = this;
  let a = 0,
    i = 0,
    l;
  return o;
  function o(T) {
    let re = n.events.length - 1;
    for (; re > -1; ) {
      const ue = n.events[re][1].type;
      if (ue === "lineEnding" || ue === "linePrefix") re--;
      else break;
    }
    const te = re > -1 ? n.events[re][1].type : null,
      Fe = te === "tableHead" || te === "tableRow" ? U : u;
    return Fe === U && n.parser.lazy[n.now().line] ? t(T) : Fe(T);
  }
  function u(T) {
    return r.enter("tableHead"), r.enter("tableRow"), m(T);
  }
  function m(T) {
    return T === 124 || ((l = !0), (i += 1)), d(T);
  }
  function d(T) {
    return T === null
      ? t(T)
      : be(T)
      ? i > 1
        ? ((i = 0),
          (n.interrupt = !0),
          r.exit("tableRow"),
          r.enter("lineEnding"),
          r.consume(T),
          r.exit("lineEnding"),
          y)
        : t(T)
      : He(T)
      ? ye(r, d, "whitespace")(T)
      : ((i += 1),
        l && ((l = !1), (a += 1)),
        T === 124
          ? (r.enter("tableCellDivider"),
            r.consume(T),
            r.exit("tableCellDivider"),
            (l = !0),
            d)
          : (r.enter("data"), p(T)));
  }
  function p(T) {
    return T === null || T === 124 || fe(T)
      ? (r.exit("data"), d(T))
      : (r.consume(T), T === 92 ? x : p);
  }
  function x(T) {
    return T === 92 || T === 124 ? (r.consume(T), p) : p(T);
  }
  function y(T) {
    return (
      (n.interrupt = !1),
      n.parser.lazy[n.now().line]
        ? t(T)
        : (r.enter("tableDelimiterRow"),
          (l = !1),
          He(T)
            ? ye(
                r,
                v,
                "linePrefix",
                n.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(T)
            : v(T))
    );
  }
  function v(T) {
    return T === 45 || T === 58
      ? A(T)
      : T === 124
      ? ((l = !0),
        r.enter("tableCellDivider"),
        r.consume(T),
        r.exit("tableCellDivider"),
        w)
      : O(T);
  }
  function w(T) {
    return He(T) ? ye(r, A, "whitespace")(T) : A(T);
  }
  function A(T) {
    return T === 58
      ? ((i += 1),
        (l = !0),
        r.enter("tableDelimiterMarker"),
        r.consume(T),
        r.exit("tableDelimiterMarker"),
        z)
      : T === 45
      ? ((i += 1), z(T))
      : T === null || be(T)
      ? I(T)
      : O(T);
  }
  function z(T) {
    return T === 45 ? (r.enter("tableDelimiterFiller"), M(T)) : O(T);
  }
  function M(T) {
    return T === 45
      ? (r.consume(T), M)
      : T === 58
      ? ((l = !0),
        r.exit("tableDelimiterFiller"),
        r.enter("tableDelimiterMarker"),
        r.consume(T),
        r.exit("tableDelimiterMarker"),
        L)
      : (r.exit("tableDelimiterFiller"), L(T));
  }
  function L(T) {
    return He(T) ? ye(r, I, "whitespace")(T) : I(T);
  }
  function I(T) {
    return T === 124
      ? v(T)
      : T === null || be(T)
      ? !l || a !== i
        ? O(T)
        : (r.exit("tableDelimiterRow"), r.exit("tableHead"), e(T))
      : O(T);
  }
  function O(T) {
    return t(T);
  }
  function U(T) {
    return r.enter("tableRow"), q(T);
  }
  function q(T) {
    return T === 124
      ? (r.enter("tableCellDivider"),
        r.consume(T),
        r.exit("tableCellDivider"),
        q)
      : T === null || be(T)
      ? (r.exit("tableRow"), e(T))
      : He(T)
      ? ye(r, q, "whitespace")(T)
      : (r.enter("data"), Y(T));
  }
  function Y(T) {
    return T === null || T === 124 || fe(T)
      ? (r.exit("data"), q(T))
      : (r.consume(T), T === 92 ? j : Y);
  }
  function j(T) {
    return T === 92 || T === 124 ? (r.consume(T), Y) : Y(T);
  }
}
function Qu(r, e) {
  let t = -1,
    n = !0,
    a = 0,
    i = [0, 0, 0, 0],
    l = [0, 0, 0, 0],
    o = !1,
    u = 0,
    m,
    d,
    p;
  const x = new Yu();
  for (; ++t < r.length; ) {
    const y = r[t],
      v = y[1];
    y[0] === "enter"
      ? v.type === "tableHead"
        ? ((o = !1),
          u !== 0 && (na(x, e, u, m, d), (d = void 0), (u = 0)),
          (m = {
            type: "table",
            start: Object.assign({}, v.start),
            end: Object.assign({}, v.end),
          }),
          x.add(t, 0, [["enter", m, e]]))
        : v.type === "tableRow" || v.type === "tableDelimiterRow"
        ? ((n = !0),
          (p = void 0),
          (i = [0, 0, 0, 0]),
          (l = [0, t + 1, 0, 0]),
          o &&
            ((o = !1),
            (d = {
              type: "tableBody",
              start: Object.assign({}, v.start),
              end: Object.assign({}, v.end),
            }),
            x.add(t, 0, [["enter", d, e]])),
          (a = v.type === "tableDelimiterRow" ? 2 : d ? 3 : 1))
        : a &&
          (v.type === "data" ||
            v.type === "tableDelimiterMarker" ||
            v.type === "tableDelimiterFiller")
        ? ((n = !1),
          l[2] === 0 &&
            (i[1] !== 0 &&
              ((l[0] = l[1]),
              (p = ut(x, e, i, a, void 0, p)),
              (i = [0, 0, 0, 0])),
            (l[2] = t)))
        : v.type === "tableCellDivider" &&
          (n
            ? (n = !1)
            : (i[1] !== 0 && ((l[0] = l[1]), (p = ut(x, e, i, a, void 0, p))),
              (i = l),
              (l = [i[1], t, 0, 0])))
      : v.type === "tableHead"
      ? ((o = !0), (u = t))
      : v.type === "tableRow" || v.type === "tableDelimiterRow"
      ? ((u = t),
        i[1] !== 0
          ? ((l[0] = l[1]), (p = ut(x, e, i, a, t, p)))
          : l[1] !== 0 && (p = ut(x, e, l, a, t, p)),
        (a = 0))
      : a &&
        (v.type === "data" ||
          v.type === "tableDelimiterMarker" ||
          v.type === "tableDelimiterFiller") &&
        (l[3] = t);
  }
  for (
    u !== 0 && na(x, e, u, m, d), x.consume(e.events), t = -1;
    ++t < e.events.length;

  ) {
    const y = e.events[t];
    y[0] === "enter" &&
      y[1].type === "table" &&
      (y[1]._align = Zu(e.events, t));
  }
  return r;
}
function ut(r, e, t, n, a, i) {
  const l = n === 1 ? "tableHeader" : n === 2 ? "tableDelimiter" : "tableData",
    o = "tableContent";
  t[0] !== 0 &&
    ((i.end = Object.assign({}, y0(e.events, t[0]))),
    r.add(t[0], 0, [["exit", i, e]]));
  const u = y0(e.events, t[1]);
  if (
    ((i = { type: l, start: Object.assign({}, u), end: Object.assign({}, u) }),
    r.add(t[1], 0, [["enter", i, e]]),
    t[2] !== 0)
  ) {
    const m = y0(e.events, t[2]),
      d = y0(e.events, t[3]),
      p = { type: o, start: Object.assign({}, m), end: Object.assign({}, d) };
    if ((r.add(t[2], 0, [["enter", p, e]]), n !== 2)) {
      const x = e.events[t[2]],
        y = e.events[t[3]];
      if (
        ((x[1].end = Object.assign({}, y[1].end)),
        (x[1].type = "chunkText"),
        (x[1].contentType = "text"),
        t[3] > t[2] + 1)
      ) {
        const v = t[2] + 1,
          w = t[3] - t[2] - 1;
        r.add(v, w, []);
      }
    }
    r.add(t[3] + 1, 0, [["exit", p, e]]);
  }
  return (
    a !== void 0 &&
      ((i.end = Object.assign({}, y0(e.events, a))),
      r.add(a, 0, [["exit", i, e]]),
      (i = void 0)),
    i
  );
}
function na(r, e, t, n, a) {
  const i = [],
    l = y0(e.events, t);
  a && ((a.end = Object.assign({}, l)), i.push(["exit", a, e])),
    (n.end = Object.assign({}, l)),
    i.push(["exit", n, e]),
    r.add(t + 1, 0, i);
}
function y0(r, e) {
  const t = r[e],
    n = t[0] === "enter" ? "start" : "end";
  return t[1][n];
}
const e4 = { tokenize: r4 },
  t4 = { text: { 91: e4 } };
function r4(r, e, t) {
  const n = this;
  return a;
  function a(u) {
    return n.previous !== null || !n._gfmTasklistFirstContentOfListItem
      ? t(u)
      : (r.enter("taskListCheck"),
        r.enter("taskListCheckMarker"),
        r.consume(u),
        r.exit("taskListCheckMarker"),
        i);
  }
  function i(u) {
    return fe(u)
      ? (r.enter("taskListCheckValueUnchecked"),
        r.consume(u),
        r.exit("taskListCheckValueUnchecked"),
        l)
      : u === 88 || u === 120
      ? (r.enter("taskListCheckValueChecked"),
        r.consume(u),
        r.exit("taskListCheckValueChecked"),
        l)
      : t(u);
  }
  function l(u) {
    return u === 93
      ? (r.enter("taskListCheckMarker"),
        r.consume(u),
        r.exit("taskListCheckMarker"),
        r.exit("taskListCheck"),
        o)
      : t(u);
  }
  function o(u) {
    return be(u) ? e(u) : He(u) ? r.check({ tokenize: n4 }, e, t)(u) : t(u);
  }
}
function n4(r, e, t) {
  return ye(r, n, "whitespace");
  function n(a) {
    return a === null ? t(a) : e(a);
  }
}
function a4(r) {
  return bu([Mu, Pu(), _u(r), Ku, t4]);
}
function i4(r) {
  if (typeof r != "string") throw new TypeError("Expected a string");
  return r.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const l4 = {}.hasOwnProperty,
  s4 = function (r, e, t, n) {
    let a, i;
    typeof e == "string" || e instanceof RegExp
      ? ((i = [[e, t]]), (a = n))
      : ((i = e), (a = t)),
      a || (a = {});
    const l = $0(a.ignore || []),
      o = o4(i);
    let u = -1;
    for (; ++u < o.length; ) wr(r, "text", m);
    return r;
    function m(p, x) {
      let y = -1,
        v;
      for (; ++y < x.length; ) {
        const w = x[y];
        if (l(w, v ? v.children.indexOf(w) : void 0, v)) return;
        v = w;
      }
      if (v) return d(p, x);
    }
    function d(p, x) {
      const y = x[x.length - 1],
        v = o[u][0],
        w = o[u][1];
      let A = 0;
      const z = y.children.indexOf(p);
      let M = !1,
        L = [];
      v.lastIndex = 0;
      let I = v.exec(p.value);
      for (; I; ) {
        const O = I.index,
          U = { index: I.index, input: I.input, stack: [...x, p] };
        let q = w(...I, U);
        if (
          (typeof q == "string" &&
            (q = q.length > 0 ? { type: "text", value: q } : void 0),
          q !== !1 &&
            (A !== O && L.push({ type: "text", value: p.value.slice(A, O) }),
            Array.isArray(q) ? L.push(...q) : q && L.push(q),
            (A = O + I[0].length),
            (M = !0)),
          !v.global)
        )
          break;
        I = v.exec(p.value);
      }
      return (
        M
          ? (A < p.value.length &&
              L.push({ type: "text", value: p.value.slice(A) }),
            y.children.splice(z, 1, ...L))
          : (L = [p]),
        z + L.length
      );
    }
  };
function o4(r) {
  const e = [];
  if (typeof r != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(r)) {
    let t = -1;
    for (; ++t < r.length; ) e.push([aa(r[t][0]), ia(r[t][1])]);
  } else {
    let t;
    for (t in r) l4.call(r, t) && e.push([aa(t), ia(r[t])]);
  }
  return e;
}
function aa(r) {
  return typeof r == "string" ? new RegExp(i4(r), "g") : r;
}
function ia(r) {
  return typeof r == "function" ? r : () => r;
}
const Jt = "phrasing",
  Qt = ["autolink", "link", "image", "label"],
  u4 = {
    transforms: [g4],
    enter: {
      literalAutolink: h4,
      literalAutolinkEmail: er,
      literalAutolinkHttp: er,
      literalAutolinkWww: er,
    },
    exit: {
      literalAutolink: p4,
      literalAutolinkEmail: f4,
      literalAutolinkHttp: m4,
      literalAutolinkWww: d4,
    },
  },
  c4 = {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Jt,
        notInConstruct: Qt,
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Jt,
        notInConstruct: Qt,
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Jt,
        notInConstruct: Qt,
      },
    ],
  };
function h4(r) {
  this.enter({ type: "link", title: null, url: "", children: [] }, r);
}
function er(r) {
  this.config.enter.autolinkProtocol.call(this, r);
}
function m4(r) {
  this.config.exit.autolinkProtocol.call(this, r);
}
function d4(r) {
  this.config.exit.data.call(this, r);
  const e = this.stack[this.stack.length - 1];
  e.url = "http://" + this.sliceSerialize(r);
}
function f4(r) {
  this.config.exit.autolinkEmail.call(this, r);
}
function p4(r) {
  this.exit(r);
}
function g4(r) {
  s4(
    r,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, v4],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, b4],
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function v4(r, e, t, n, a) {
  let i = "";
  if (
    !Yi(a) ||
    (/^w/i.test(e) && ((t = e + t), (e = ""), (i = "http://")), !y4(t))
  )
    return !1;
  const l = x4(t + n);
  if (!l[0]) return !1;
  const o = {
    type: "link",
    title: null,
    url: i + e + l[0],
    children: [{ type: "text", value: e + l[0] }],
  };
  return l[1] ? [o, { type: "text", value: l[1] }] : o;
}
function b4(r, e, t, n) {
  return !Yi(n, !0) || /[-\d_]$/.test(t)
    ? !1
    : {
        type: "link",
        title: null,
        url: "mailto:" + e + "@" + t,
        children: [{ type: "text", value: e + "@" + t }],
      };
}
function y4(r) {
  const e = r.split(".");
  return !(
    e.length < 2 ||
    (e[e.length - 1] &&
      (/_/.test(e[e.length - 1]) || !/[a-zA-Z\d]/.test(e[e.length - 1]))) ||
    (e[e.length - 2] &&
      (/_/.test(e[e.length - 2]) || !/[a-zA-Z\d]/.test(e[e.length - 2])))
  );
}
function x4(r) {
  const e = /[!"&'),.:;<>?\]}]+$/.exec(r);
  if (!e) return [r, void 0];
  r = r.slice(0, e.index);
  let t = e[0],
    n = t.indexOf(")");
  const a = vt(r, "(");
  let i = vt(r, ")");
  for (; n !== -1 && a > i; )
    (r += t.slice(0, n + 1)), (t = t.slice(n + 1)), (n = t.indexOf(")")), i++;
  return [r, t];
}
function Yi(r, e) {
  const t = r.input.charCodeAt(r.index - 1);
  return (r.index === 0 || c0(t) || zt(t)) && (!e || t !== 47);
}
function w4(r, e) {
  const t = Number.parseInt(r, e);
  return t < 9 ||
    t === 11 ||
    (t > 13 && t < 32) ||
    (t > 126 && t < 160) ||
    (t > 55295 && t < 57344) ||
    (t > 64975 && t < 65008) ||
    (t & 65535) === 65535 ||
    (t & 65535) === 65534 ||
    t > 1114111
    ? "�"
    : String.fromCharCode(t);
}
const k4 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function S4(r) {
  return r.replace(k4, A4);
}
function A4(r, e, t) {
  if (e) return e;
  if (t.charCodeAt(0) === 35) {
    const a = t.charCodeAt(1),
      i = a === 120 || a === 88;
    return w4(t.slice(i ? 2 : 1), i ? 16 : 10);
  }
  return qu(t) || r;
}
function Xi(r) {
  return r.label || !r.identifier ? r.label || "" : S4(r.identifier);
}
function M4(r, e, t) {
  const n = e.indexStack,
    a = r.children || [],
    i = e.createTracker(t),
    l = [];
  let o = -1;
  for (n.push(-1); ++o < a.length; ) {
    const u = a[o];
    (n[n.length - 1] = o),
      l.push(
        i.move(
          e.handle(u, r, e, {
            before: `
`,
            after: `
`,
            ...i.current(),
          })
        )
      ),
      u.type !== "list" && (e.bulletLastUsed = void 0),
      o < a.length - 1 && l.push(i.move(z4(u, a[o + 1], r, e)));
  }
  return n.pop(), l.join("");
}
function z4(r, e, t, n) {
  let a = n.join.length;
  for (; a--; ) {
    const i = n.join[a](r, e, t, n);
    if (i === !0 || i === 1) break;
    if (typeof i == "number")
      return `
`.repeat(1 + i);
    if (i === !1)
      return `

<!---->

`;
  }
  return `

`;
}
const T4 = /\r?\n|\r/g;
function C4(r, e) {
  const t = [];
  let n = 0,
    a = 0,
    i;
  for (; (i = T4.exec(r)); )
    l(r.slice(n, i.index)), t.push(i[0]), (n = i.index + i[0].length), a++;
  return l(r.slice(n)), t.join("");
  function l(o) {
    t.push(e(o, a, !o));
  }
}
function _r(r) {
  if (!r._compiled) {
    const e =
      (r.atBreak ? "[\\r\\n][\\t ]*" : "") +
      (r.before ? "(?:" + r.before + ")" : "");
    r._compiled = new RegExp(
      (e ? "(" + e + ")" : "") +
        (/[|\\{}()[\]^$+*?.-]/.test(r.character) ? "\\" : "") +
        r.character +
        (r.after ? "(?:" + r.after + ")" : ""),
      "g"
    );
  }
  return r._compiled;
}
function D4(r, e) {
  return la(r, e.inConstruct, !0) && !la(r, e.notInConstruct, !1);
}
function la(r, e, t) {
  if ((typeof e == "string" && (e = [e]), !e || e.length === 0)) return t;
  let n = -1;
  for (; ++n < e.length; ) if (r.includes(e[n])) return !0;
  return !1;
}
function Yr(r, e, t) {
  const n = (t.before || "") + (e || "") + (t.after || ""),
    a = [],
    i = [],
    l = {};
  let o = -1;
  for (; ++o < r.unsafe.length; ) {
    const d = r.unsafe[o];
    if (!D4(r.stack, d)) continue;
    const p = _r(d);
    let x;
    for (; (x = p.exec(n)); ) {
      const y = "before" in d || !!d.atBreak,
        v = "after" in d,
        w = x.index + (y ? x[1].length : 0);
      a.includes(w)
        ? (l[w].before && !y && (l[w].before = !1),
          l[w].after && !v && (l[w].after = !1))
        : (a.push(w), (l[w] = { before: y, after: v }));
    }
  }
  a.sort(F4);
  let u = t.before ? t.before.length : 0;
  const m = n.length - (t.after ? t.after.length : 0);
  for (o = -1; ++o < a.length; ) {
    const d = a[o];
    d < u ||
      d >= m ||
      (d + 1 < m &&
        a[o + 1] === d + 1 &&
        l[d].after &&
        !l[d + 1].before &&
        !l[d + 1].after) ||
      (a[o - 1] === d - 1 &&
        l[d].before &&
        !l[d - 1].before &&
        !l[d - 1].after) ||
      (u !== d && i.push(sa(n.slice(u, d), "\\")),
      (u = d),
      /[!-/:-@[-`{-~]/.test(n.charAt(d)) &&
      (!t.encode || !t.encode.includes(n.charAt(d)))
        ? i.push("\\")
        : (i.push("&#x" + n.charCodeAt(d).toString(16).toUpperCase() + ";"),
          u++));
  }
  return i.push(sa(n.slice(u, m), t.after)), i.join("");
}
function F4(r, e) {
  return r - e;
}
function sa(r, e) {
  const t = /\\(?=[!-/:-@[-`{-~])/g,
    n = [],
    a = [],
    i = r + e;
  let l = -1,
    o = 0,
    u;
  for (; (u = t.exec(i)); ) n.push(u.index);
  for (; ++l < n.length; )
    o !== n[l] && a.push(r.slice(o, n[l])), a.push("\\"), (o = n[l]);
  return a.push(r.slice(o)), a.join("");
}
function _0(r) {
  const e = r || {},
    t = e.now || {};
  let n = e.lineShift || 0,
    a = t.line || 1,
    i = t.column || 1;
  return { move: u, current: l, shift: o };
  function l() {
    return { now: { line: a, column: i }, lineShift: n };
  }
  function o(m) {
    n += m;
  }
  function u(m) {
    const d = m || "",
      p = d.split(/\r?\n|\r/g),
      x = p[p.length - 1];
    return (
      (a += p.length - 1),
      (i = p.length === 1 ? i + x.length : 1 + x.length + n),
      d
    );
  }
}
Zi.peek = $4;
function N4() {
  return {
    enter: {
      gfmFootnoteDefinition: B4,
      gfmFootnoteDefinitionLabelString: O4,
      gfmFootnoteCall: q4,
      gfmFootnoteCallString: I4,
    },
    exit: {
      gfmFootnoteDefinition: R4,
      gfmFootnoteDefinitionLabelString: L4,
      gfmFootnoteCall: H4,
      gfmFootnoteCallString: P4,
    },
  };
}
function E4() {
  return {
    unsafe: [
      { character: "[", inConstruct: ["phrasing", "label", "reference"] },
    ],
    handlers: { footnoteDefinition: V4, footnoteReference: Zi },
  };
}
function B4(r) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    r
  );
}
function O4() {
  this.buffer();
}
function L4(r) {
  const e = this.resume(),
    t = this.stack[this.stack.length - 1];
  (t.label = e), (t.identifier = W0(this.sliceSerialize(r)).toLowerCase());
}
function R4(r) {
  this.exit(r);
}
function q4(r) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, r);
}
function I4() {
  this.buffer();
}
function P4(r) {
  const e = this.resume(),
    t = this.stack[this.stack.length - 1];
  (t.label = e), (t.identifier = W0(this.sliceSerialize(r)).toLowerCase());
}
function H4(r) {
  this.exit(r);
}
function Zi(r, e, t, n) {
  const a = _0(n);
  let i = a.move("[^");
  const l = t.enter("footnoteReference"),
    o = t.enter("reference");
  return (
    (i += a.move(Yr(t, Xi(r), { ...a.current(), before: i, after: "]" }))),
    o(),
    l(),
    (i += a.move("]")),
    i
  );
}
function $4() {
  return "[";
}
function V4(r, e, t, n) {
  const a = _0(n);
  let i = a.move("[^");
  const l = t.enter("footnoteDefinition"),
    o = t.enter("label");
  return (
    (i += a.move(Yr(t, Xi(r), { ...a.current(), before: i, after: "]" }))),
    o(),
    (i += a.move("]:" + (r.children && r.children.length > 0 ? " " : ""))),
    a.shift(4),
    (i += a.move(C4(M4(r, t, a.current()), U4))),
    l(),
    i
  );
}
function U4(r, e, t) {
  return e === 0 ? r : (t ? "" : "    ") + r;
}
function Ki(r, e, t) {
  const n = e.indexStack,
    a = r.children || [],
    i = [];
  let l = -1,
    o = t.before;
  n.push(-1);
  let u = e.createTracker(t);
  for (; ++l < a.length; ) {
    const m = a[l];
    let d;
    if (((n[n.length - 1] = l), l + 1 < a.length)) {
      let p = e.handle.handlers[a[l + 1].type];
      p && p.peek && (p = p.peek),
        (d = p
          ? p(a[l + 1], r, e, { before: "", after: "", ...u.current() }).charAt(
              0
            )
          : "");
    } else d = t.after;
    i.length > 0 &&
      (o === "\r" ||
        o ===
          `
`) &&
      m.type === "html" &&
      ((i[i.length - 1] = i[i.length - 1].replace(/(\r?\n|\r)$/, " ")),
      (o = " "),
      (u = e.createTracker(t)),
      u.move(i.join(""))),
      i.push(
        u.move(e.handle(m, r, e, { ...u.current(), before: o, after: d }))
      ),
      (o = i[i.length - 1].slice(-1));
  }
  return n.pop(), i.join("");
}
const j4 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe",
];
Ji.peek = X4;
const G4 = {
    canContainEols: ["delete"],
    enter: { strikethrough: _4 },
    exit: { strikethrough: Y4 },
  },
  W4 = {
    unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: j4 }],
    handlers: { delete: Ji },
  };
function _4(r) {
  this.enter({ type: "delete", children: [] }, r);
}
function Y4(r) {
  this.exit(r);
}
function Ji(r, e, t, n) {
  const a = _0(n),
    i = t.enter("strikethrough");
  let l = a.move("~~");
  return (
    (l += Ki(r, t, { ...a.current(), before: l, after: "~" })),
    (l += a.move("~~")),
    i(),
    l
  );
}
function X4() {
  return "~";
}
Qi.peek = Z4;
function Qi(r, e, t) {
  let n = r.value || "",
    a = "`",
    i = -1;
  for (; new RegExp("(^|[^`])" + a + "([^`]|$)").test(n); ) a += "`";
  for (
    /[^ \r\n]/.test(n) &&
    ((/^[ \r\n]/.test(n) && /[ \r\n]$/.test(n)) || /^`|`$/.test(n)) &&
    (n = " " + n + " ");
    ++i < t.unsafe.length;

  ) {
    const l = t.unsafe[i],
      o = _r(l);
    let u;
    if (l.atBreak)
      for (; (u = o.exec(n)); ) {
        let m = u.index;
        n.charCodeAt(m) === 10 && n.charCodeAt(m - 1) === 13 && m--,
          (n = n.slice(0, m) + " " + n.slice(u.index + 1));
      }
  }
  return a + n + a;
}
function Z4() {
  return "`";
}
function K4(r, e = {}) {
  const t = (e.align || []).concat(),
    n = e.stringLength || Q4,
    a = [],
    i = [],
    l = [],
    o = [];
  let u = 0,
    m = -1;
  for (; ++m < r.length; ) {
    const v = [],
      w = [];
    let A = -1;
    for (r[m].length > u && (u = r[m].length); ++A < r[m].length; ) {
      const z = J4(r[m][A]);
      if (e.alignDelimiters !== !1) {
        const M = n(z);
        (w[A] = M), (o[A] === void 0 || M > o[A]) && (o[A] = M);
      }
      v.push(z);
    }
    (i[m] = v), (l[m] = w);
  }
  let d = -1;
  if (typeof t == "object" && "length" in t) for (; ++d < u; ) a[d] = oa(t[d]);
  else {
    const v = oa(t);
    for (; ++d < u; ) a[d] = v;
  }
  d = -1;
  const p = [],
    x = [];
  for (; ++d < u; ) {
    const v = a[d];
    let w = "",
      A = "";
    v === 99
      ? ((w = ":"), (A = ":"))
      : v === 108
      ? (w = ":")
      : v === 114 && (A = ":");
    let z =
      e.alignDelimiters === !1 ? 1 : Math.max(1, o[d] - w.length - A.length);
    const M = w + "-".repeat(z) + A;
    e.alignDelimiters !== !1 &&
      ((z = w.length + z + A.length), z > o[d] && (o[d] = z), (x[d] = z)),
      (p[d] = M);
  }
  i.splice(1, 0, p), l.splice(1, 0, x), (m = -1);
  const y = [];
  for (; ++m < i.length; ) {
    const v = i[m],
      w = l[m];
    d = -1;
    const A = [];
    for (; ++d < u; ) {
      const z = v[d] || "";
      let M = "",
        L = "";
      if (e.alignDelimiters !== !1) {
        const I = o[d] - (w[d] || 0),
          O = a[d];
        O === 114
          ? (M = " ".repeat(I))
          : O === 99
          ? I % 2
            ? ((M = " ".repeat(I / 2 + 0.5)), (L = " ".repeat(I / 2 - 0.5)))
            : ((M = " ".repeat(I / 2)), (L = M))
          : (L = " ".repeat(I));
      }
      e.delimiterStart !== !1 && !d && A.push("|"),
        e.padding !== !1 &&
          !(e.alignDelimiters === !1 && z === "") &&
          (e.delimiterStart !== !1 || d) &&
          A.push(" "),
        e.alignDelimiters !== !1 && A.push(M),
        A.push(z),
        e.alignDelimiters !== !1 && A.push(L),
        e.padding !== !1 && A.push(" "),
        (e.delimiterEnd !== !1 || d !== u - 1) && A.push("|");
    }
    y.push(e.delimiterEnd === !1 ? A.join("").replace(/ +$/, "") : A.join(""));
  }
  return y.join(`
`);
}
function J4(r) {
  return r == null ? "" : String(r);
}
function Q4(r) {
  return r.length;
}
function oa(r) {
  const e = typeof r == "string" ? r.codePointAt(0) : 0;
  return e === 67 || e === 99
    ? 99
    : e === 76 || e === 108
    ? 108
    : e === 82 || e === 114
    ? 114
    : 0;
}
const ec = {
  enter: { table: tc, tableData: ua, tableHeader: ua, tableRow: nc },
  exit: {
    codeText: ac,
    table: rc,
    tableData: tr,
    tableHeader: tr,
    tableRow: tr,
  },
};
function tc(r) {
  const e = r._align;
  this.enter(
    {
      type: "table",
      align: e.map((t) => (t === "none" ? null : t)),
      children: [],
    },
    r
  ),
    this.setData("inTable", !0);
}
function rc(r) {
  this.exit(r), this.setData("inTable");
}
function nc(r) {
  this.enter({ type: "tableRow", children: [] }, r);
}
function tr(r) {
  this.exit(r);
}
function ua(r) {
  this.enter({ type: "tableCell", children: [] }, r);
}
function ac(r) {
  let e = this.resume();
  this.getData("inTable") && (e = e.replace(/\\([\\|])/g, ic));
  const t = this.stack[this.stack.length - 1];
  (t.value = e), this.exit(r);
}
function ic(r, e) {
  return e === "|" ? e : r;
}
function lc(r) {
  const e = r || {},
    t = e.tableCellPadding,
    n = e.tablePipeAlign,
    a = e.stringLength,
    i = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      {
        character: `
`,
        inConstruct: "tableCell",
      },
      { atBreak: !0, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" },
    ],
    handlers: { table: l, tableRow: o, tableCell: u, inlineCode: x },
  };
  function l(y, v, w, A) {
    return m(d(y, w, A), y.align);
  }
  function o(y, v, w, A) {
    const z = p(y, w, A),
      M = m([z]);
    return M.slice(
      0,
      M.indexOf(`
`)
    );
  }
  function u(y, v, w, A) {
    const z = w.enter("tableCell"),
      M = w.enter("phrasing"),
      L = Ki(y, w, { ...A, before: i, after: i });
    return M(), z(), L;
  }
  function m(y, v) {
    return K4(y, { align: v, alignDelimiters: n, padding: t, stringLength: a });
  }
  function d(y, v, w) {
    const A = y.children;
    let z = -1;
    const M = [],
      L = v.enter("table");
    for (; ++z < A.length; ) M[z] = p(A[z], v, w);
    return L(), M;
  }
  function p(y, v, w) {
    const A = y.children;
    let z = -1;
    const M = [],
      L = v.enter("tableRow");
    for (; ++z < A.length; ) M[z] = u(A[z], y, v, w);
    return L(), M;
  }
  function x(y, v, w) {
    let A = Qi(y, v, w);
    return w.stack.includes("tableCell") && (A = A.replace(/\|/g, "\\$&")), A;
  }
}
function sc(r) {
  const e = r.options.bullet || "*";
  if (e !== "*" && e !== "+" && e !== "-")
    throw new Error(
      "Cannot serialize items with `" +
        e +
        "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return e;
}
function oc(r) {
  const e = r.options.listItemIndent || "tab";
  if (e === 1 || e === "1") return "one";
  if (e !== "tab" && e !== "one" && e !== "mixed")
    throw new Error(
      "Cannot serialize items with `" +
        e +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return e;
}
function uc(r, e, t, n) {
  const a = oc(t);
  let i = t.bulletCurrent || sc(t);
  e &&
    e.type === "list" &&
    e.ordered &&
    (i =
      (typeof e.start == "number" && e.start > -1 ? e.start : 1) +
      (t.options.incrementListMarker === !1 ? 0 : e.children.indexOf(r)) +
      i);
  let l = i.length + 1;
  (a === "tab" ||
    (a === "mixed" && ((e && e.type === "list" && e.spread) || r.spread))) &&
    (l = Math.ceil(l / 4) * 4);
  const o = t.createTracker(n);
  o.move(i + " ".repeat(l - i.length)), o.shift(l);
  const u = t.enter("listItem"),
    m = t.indentLines(t.containerFlow(r, o.current()), d);
  return u(), m;
  function d(p, x, y) {
    return x
      ? (y ? "" : " ".repeat(l)) + p
      : (y ? i : i + " ".repeat(l - i.length)) + p;
  }
}
const cc = {
    exit: {
      taskListCheckValueChecked: ca,
      taskListCheckValueUnchecked: ca,
      paragraph: mc,
    },
  },
  hc = {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: dc },
  };
function ca(r) {
  const e = this.stack[this.stack.length - 2];
  e.checked = r.type === "taskListCheckValueChecked";
}
function mc(r) {
  const e = this.stack[this.stack.length - 2];
  if (e && e.type === "listItem" && typeof e.checked == "boolean") {
    const t = this.stack[this.stack.length - 1],
      n = t.children[0];
    if (n && n.type === "text") {
      const a = e.children;
      let i = -1,
        l;
      for (; ++i < a.length; ) {
        const o = a[i];
        if (o.type === "paragraph") {
          l = o;
          break;
        }
      }
      l === t &&
        ((n.value = n.value.slice(1)),
        n.value.length === 0
          ? t.children.shift()
          : t.position &&
            n.position &&
            typeof n.position.start.offset == "number" &&
            (n.position.start.column++,
            n.position.start.offset++,
            (t.position.start = Object.assign({}, n.position.start))));
    }
  }
  this.exit(r);
}
function dc(r, e, t, n) {
  const a = r.children[0],
    i = typeof r.checked == "boolean" && a && a.type === "paragraph",
    l = "[" + (r.checked ? "x" : " ") + "] ",
    o = _0(n);
  i && o.move(l);
  let u = uc(r, e, t, { ...n, ...o.current() });
  return i && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, m)), u;
  function m(d) {
    return d + l;
  }
}
function fc() {
  return [u4, N4(), G4, ec, cc];
}
function pc(r) {
  return { extensions: [c4, E4(), W4, lc(r), hc] };
}
function gc(r = {}) {
  const e = this.data();
  t("micromarkExtensions", a4(r)),
    t("fromMarkdownExtensions", fc()),
    t("toMarkdownExtensions", pc(r));
  function t(n, a) {
    (e[n] ? e[n] : (e[n] = [])).push(a);
  }
}
const vc = { tokenize: bc, concrete: !0 },
  ha = { tokenize: yc, partial: !0 };
function bc(r, e, t) {
  const n = this,
    a = n.events[n.events.length - 1],
    i =
      a && a[1].type === "linePrefix"
        ? a[2].sliceSerialize(a[1], !0).length
        : 0;
  let l = 0;
  return o;
  function o(M) {
    return (
      r.enter("mathFlow"),
      r.enter("mathFlowFence"),
      r.enter("mathFlowFenceSequence"),
      u(M)
    );
  }
  function u(M) {
    return M === 36
      ? (r.consume(M), l++, u)
      : l < 2
      ? t(M)
      : (r.exit("mathFlowFenceSequence"), ye(r, m, "whitespace")(M));
  }
  function m(M) {
    return M === null || be(M)
      ? p(M)
      : (r.enter("mathFlowFenceMeta"),
        r.enter("chunkString", { contentType: "string" }),
        d(M));
  }
  function d(M) {
    return M === null || be(M)
      ? (r.exit("chunkString"), r.exit("mathFlowFenceMeta"), p(M))
      : M === 36
      ? t(M)
      : (r.consume(M), d);
  }
  function p(M) {
    return r.exit("mathFlowFence"), n.interrupt ? e(M) : r.attempt(ha, x, A)(M);
  }
  function x(M) {
    return r.attempt({ tokenize: z, partial: !0 }, A, y)(M);
  }
  function y(M) {
    return (i ? ye(r, v, "linePrefix", i + 1) : v)(M);
  }
  function v(M) {
    return M === null
      ? A(M)
      : be(M)
      ? r.attempt(ha, x, A)(M)
      : (r.enter("mathFlowValue"), w(M));
  }
  function w(M) {
    return M === null || be(M)
      ? (r.exit("mathFlowValue"), v(M))
      : (r.consume(M), w);
  }
  function A(M) {
    return r.exit("mathFlow"), e(M);
  }
  function z(M, L, I) {
    let O = 0;
    return ye(
      M,
      U,
      "linePrefix",
      n.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function U(j) {
      return M.enter("mathFlowFence"), M.enter("mathFlowFenceSequence"), q(j);
    }
    function q(j) {
      return j === 36
        ? (O++, M.consume(j), q)
        : O < l
        ? I(j)
        : (M.exit("mathFlowFenceSequence"), ye(M, Y, "whitespace")(j));
    }
    function Y(j) {
      return j === null || be(j) ? (M.exit("mathFlowFence"), L(j)) : I(j);
    }
  }
}
function yc(r, e, t) {
  const n = this;
  return a;
  function a(l) {
    return l === null
      ? e(l)
      : (r.enter("lineEnding"), r.consume(l), r.exit("lineEnding"), i);
  }
  function i(l) {
    return n.parser.lazy[n.now().line] ? t(l) : e(l);
  }
}
function xc(r) {
  let t = (r || {}).singleDollarTextMath;
  return t == null && (t = !0), { tokenize: n, resolve: wc, previous: kc };
  function n(a, i, l) {
    let o = 0,
      u,
      m;
    return d;
    function d(w) {
      return a.enter("mathText"), a.enter("mathTextSequence"), p(w);
    }
    function p(w) {
      return w === 36
        ? (a.consume(w), o++, p)
        : o < 2 && !t
        ? l(w)
        : (a.exit("mathTextSequence"), x(w));
    }
    function x(w) {
      return w === null
        ? l(w)
        : w === 36
        ? ((m = a.enter("mathTextSequence")), (u = 0), v(w))
        : w === 32
        ? (a.enter("space"), a.consume(w), a.exit("space"), x)
        : be(w)
        ? (a.enter("lineEnding"), a.consume(w), a.exit("lineEnding"), x)
        : (a.enter("mathTextData"), y(w));
    }
    function y(w) {
      return w === null || w === 32 || w === 36 || be(w)
        ? (a.exit("mathTextData"), x(w))
        : (a.consume(w), y);
    }
    function v(w) {
      return w === 36
        ? (a.consume(w), u++, v)
        : u === o
        ? (a.exit("mathTextSequence"), a.exit("mathText"), i(w))
        : ((m.type = "mathTextData"), y(w));
    }
  }
}
function wc(r) {
  let e = r.length - 4,
    t = 3,
    n,
    a;
  if (
    (r[t][1].type === "lineEnding" || r[t][1].type === "space") &&
    (r[e][1].type === "lineEnding" || r[e][1].type === "space")
  ) {
    for (n = t; ++n < e; )
      if (r[n][1].type === "mathTextData") {
        (r[e][1].type = "mathTextPadding"),
          (r[t][1].type = "mathTextPadding"),
          (t += 2),
          (e -= 2);
        break;
      }
  }
  for (n = t - 1, e++; ++n <= e; )
    a === void 0
      ? n !== e && r[n][1].type !== "lineEnding" && (a = n)
      : (n === e || r[n][1].type === "lineEnding") &&
        ((r[a][1].type = "mathTextData"),
        n !== a + 2 &&
          ((r[a][1].end = r[n - 1][1].end),
          r.splice(a + 2, n - a - 2),
          (e -= n - a - 2),
          (n = a + 2)),
        (a = void 0));
  return r;
}
function kc(r) {
  return (
    r !== 36 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function Sc(r) {
  return { flow: { 36: vc }, text: { 36: xc(r) } };
}
function Ac(r, e) {
  const t = String(r);
  let n = t.indexOf(e),
    a = n,
    i = 0,
    l = 0;
  if (typeof e != "string") throw new TypeError("Expected substring");
  for (; n !== -1; )
    n === a ? ++i > l && (l = i) : (i = 1),
      (a = n + e.length),
      (n = t.indexOf(e, a));
  return l;
}
function Mc() {
  return {
    enter: { mathFlow: r, mathFlowFenceMeta: e, mathText: i },
    exit: {
      mathFlow: a,
      mathFlowFence: n,
      mathFlowFenceMeta: t,
      mathFlowValue: o,
      mathText: l,
      mathTextData: o,
    },
  };
  function r(u) {
    this.enter(
      {
        type: "math",
        meta: null,
        value: "",
        data: {
          hName: "div",
          hProperties: { className: ["math", "math-display"] },
          hChildren: [{ type: "text", value: "" }],
        },
      },
      u
    );
  }
  function e() {
    this.buffer();
  }
  function t() {
    const u = this.resume(),
      m = this.stack[this.stack.length - 1];
    m.meta = u;
  }
  function n() {
    this.getData("mathFlowInside") ||
      (this.buffer(), this.setData("mathFlowInside", !0));
  }
  function a(u) {
    const m = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
      d = this.exit(u);
    (d.value = m),
      (d.data.hChildren[0].value = m),
      this.setData("mathFlowInside");
  }
  function i(u) {
    this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "span",
          hProperties: { className: ["math", "math-inline"] },
          hChildren: [{ type: "text", value: "" }],
        },
      },
      u
    ),
      this.buffer();
  }
  function l(u) {
    const m = this.resume(),
      d = this.exit(u);
    (d.value = m), (d.data.hChildren[0].value = m);
  }
  function o(u) {
    this.config.enter.data.call(this, u), this.config.exit.data.call(this, u);
  }
}
function zc(r) {
  let e = (r || {}).singleDollarTextMath;
  return (
    e == null && (e = !0),
    (n.peek = a),
    {
      unsafe: [
        { character: "\r", inConstruct: "mathFlowMeta" },
        {
          character: `
`,
          inConstruct: "mathFlowMeta",
        },
        { character: "$", after: e ? void 0 : "\\$", inConstruct: "phrasing" },
        { character: "$", inConstruct: "mathFlowMeta" },
        { atBreak: !0, character: "$", after: "\\$" },
      ],
      handlers: { math: t, inlineMath: n },
    }
  );
  function t(i, l, o, u) {
    const m = i.value || "",
      d = _0(u),
      p = "$".repeat(Math.max(Ac(m, "$") + 1, 2)),
      x = o.enter("mathFlow");
    let y = d.move(p);
    if (i.meta) {
      const v = o.enter("mathFlowMeta");
      (y += d.move(
        Yr(o, i.meta, {
          before: y,
          after: `
`,
          encode: ["$"],
          ...d.current(),
        })
      )),
        v();
    }
    return (
      (y += d.move(`
`)),
      m &&
        (y += d.move(
          m +
            `
`
        )),
      (y += d.move(p)),
      x(),
      y
    );
  }
  function n(i, l, o) {
    let u = i.value || "",
      m = 1;
    for (
      e || m++;
      new RegExp("(^|[^$])" + "\\$".repeat(m) + "([^$]|$)").test(u);

    )
      m++;
    const d = "$".repeat(m);
    /[^ \r\n]/.test(u) &&
      ((/^[ \r\n]/.test(u) && /[ \r\n]$/.test(u)) || /^\$|\$$/.test(u)) &&
      (u = " " + u + " ");
    let p = -1;
    for (; ++p < o.unsafe.length; ) {
      const x = o.unsafe[p],
        y = _r(x);
      let v;
      if (x.atBreak)
        for (; (v = y.exec(u)); ) {
          let w = v.index;
          u.codePointAt(w) === 10 && u.codePointAt(w - 1) === 13 && w--,
            (u = u.slice(0, w) + " " + u.slice(v.index + 1));
        }
    }
    return d + u + d;
  }
  function a() {
    return "$";
  }
}
function Tc(r = {}) {
  const e = this.data();
  t("micromarkExtensions", Sc(r)),
    t("fromMarkdownExtensions", Mc()),
    t("toMarkdownExtensions", zc(r));
  function t(n, a) {
    (e[n] ? e[n] : (e[n] = [])).push(a);
  }
}
const Cc = dl(
    () =>
      il(
        () => import("./index-0defdc21.js"),
        [
          "./index-0defdc21.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
          "./index-8d47fad6.js",
          "./preview-35a99a87.js",
          "./index-d475d2ea.js",
          "./chunk-6P7RB4HF-150ba47c.js",
          "./iframe-5ac5d544.js",
          "./_commonjs-dynamic-modules-302442b1.js",
        ],
        import.meta.url
      ),
    { ssr: !1 }
  ),
  Dc = [];
function C0({ children: r, ...e }) {
  var n;
  const t = Number(
    (n = e.node.tagName.match(/h(\d)/)) == null ? void 0 : n.slice(1)
  );
  if (t && r && typeof r[0] == "string") {
    const a = r[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return (
      Dc.push({ level: t, id: a, title: r[0] }),
      O0.createElement(e.node.tagName, { id: a }, r)
    );
  } else return O0.createElement(e.node.tagName, e, r);
}
const Fc = { h2: C0, h3: C0, h4: C0, h5: C0, h6: C0 };
function bt({ source: r }) {
  const { colorScheme: e } = nl();
  return pa(Cc, {
    className: `markdown-body markdown-body-${e}`,
    components: Fc,
    remarkPlugins: [gc, Tc],
    rehypePlugins: [T1, jl, vu],
    children: r,
  });
}
try {
  (bt.displayName = "Markdown"),
    (bt.__docgenInfo = {
      description: "",
      displayName: "Markdown",
      props: {
        source: {
          defaultValue: null,
          description: "",
          name: "source",
          required: !0,
          type: { name: "string" },
        },
      },
    });
} catch {}
const Nc = `## Table of Contents

1. [Introduction](#introduction)

\`\`\`jsx
// This is a code block
import React from "react";

function Component() {
  return <div>Hello, world!</div>;
}
export default Component;
\`\`\`

# H1

## H2

### H3

#### H4

##### H5

###### H6

_italic_ and **bold** text.
[link](https://example.com).
![image](https://raw.githubusercontent.com/HarrisFauntleroy/harrisfauntleroy.com/main/public/favicon-32x32.png)

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- [ ] todo
- [x] done

A table:

| a   | b   |
| --- | --- |

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done

Inline: $ e=mc^2 $

Block:

$$
e=mc^2
$$

$$
A = \\lambda \\cdot N
$$

- $A$ is the activity in Becquerel (Bq)
- $\\lambda$ is the decay constant.
- $N$ is the number of atoms.

The decay constant $\\lambda$ can be determined by:

$$
\\lambda = \\frac{Ln{2}}{T_{half}}
$$

where, $T_{half}$ is the half-life of the radioactive element. The half-life is the time it takes for half of a sample of a radioactive element to decay.

Secondly, the Counts Per Minute(CPM) to Sieverts (Sv) conversion. The Sievert is a unit of absorbed radiation dose.

$$
 X\\, (Sv\\,/ h) = R\\, (CPM) \\times Y\\, ( \\frac{Sv}{CPM})
$$

# Introduction
`,
  Ec = { component: bt, decorators: al },
  F0 = { render: (r) => pa(bt, { ...r, source: Nc }) };
var ma, da, fa;
F0.parameters = {
  ...F0.parameters,
  docs: {
    ...((ma = F0.parameters) == null ? void 0 : ma.docs),
    source: {
      originalSource: `{
  render: args => <Markdown {...args} source={ExampleMarkdown}></Markdown>
}`,
      ...((fa = (da = F0.parameters) == null ? void 0 : da.docs) == null
        ? void 0
        : fa.source),
    },
  },
};
const Bc = ["Default"],
  jc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Default: F0, __namedExportsOrder: Bc, default: Ec },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  Ur as A,
  Ni as B,
  jc as M,
  Gr as a,
  H0 as b,
  ta as c,
  ku as d,
  Hc as e,
  ye as f,
  Uc as g,
  qu as h,
  Vc as i,
  $c as j,
  be as k,
  fe as l,
  He as m,
  W0 as n,
  Lu as o,
  Pc as p,
  bu as q,
  Ou as r,
  B0 as s,
  S4 as t,
  w4 as u,
  Uo as v,
  u0 as w,
  Fi as x,
  o1 as y,
  s1 as z,
};
//# sourceMappingURL=Markdown.stories-d8affc88.js.map
