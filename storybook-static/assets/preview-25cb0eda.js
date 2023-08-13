import { s as d } from "./index-d475d2ea.js";
var K = "measureEnabled",
  V = !0,
  S = "Invariant failed";
function A(o, t) {
  if (!o) {
    if (V) throw new Error(S);
    var e = typeof t == "function" ? t() : t,
      l = e ? "".concat(S, ": ").concat(e) : S;
    throw new Error(l);
  }
}
const { useEffect: R } = __STORYBOOK_MODULE_PREVIEW_API__;
function X() {
  let o = d.document.documentElement,
    t = Math.max(o.scrollHeight, o.offsetHeight);
  return { width: Math.max(o.scrollWidth, o.offsetWidth), height: t };
}
function Z() {
  let o = d.document.createElement("canvas");
  o.id = "storybook-addon-measure";
  let t = o.getContext("2d");
  A(t != null);
  let { width: e, height: l } = X();
  return (
    L(o, t, { width: e, height: l }),
    (o.style.position = "absolute"),
    (o.style.left = "0"),
    (o.style.top = "0"),
    (o.style.zIndex = "2147483647"),
    (o.style.pointerEvents = "none"),
    d.document.body.appendChild(o),
    { canvas: o, context: t, width: e, height: l }
  );
}
function L(o, t, { width: e, height: l }) {
  (o.style.width = `${e}px`), (o.style.height = `${l}px`);
  let i = d.window.devicePixelRatio;
  (o.width = Math.floor(e * i)), (o.height = Math.floor(l * i)), t.scale(i, i);
}
var h = {};
function U() {
  h.canvas || (h = Z());
}
function _() {
  h.context && h.context.clearRect(0, 0, h.width ?? 0, h.height ?? 0);
}
function G(o) {
  _(), o(h.context);
}
function J() {
  A(h.canvas, "Canvas should exist in the state."),
    A(h.context, "Context should exist in the state."),
    L(h.canvas, h.context, { width: 0, height: 0 });
  let { width: o, height: t } = X();
  L(h.canvas, h.context, { width: o, height: t }),
    (h.width = o),
    (h.height = t);
}
function Q() {
  var o;
  h.canvas &&
    (_(),
    (o = h.canvas.parentNode) == null || o.removeChild(h.canvas),
    (h = {}));
}
var w = {
    margin: "#f6b26b",
    border: "#ffe599",
    padding: "#93c47d",
    content: "#6fa8dc",
    text: "#232020",
  },
  g = 6;
function B(o, { x: t, y: e, w: l, h: i, r: n }) {
  (t = t - l / 2),
    (e = e - i / 2),
    l < 2 * n && (n = l / 2),
    i < 2 * n && (n = i / 2),
    o.beginPath(),
    o.moveTo(t + n, e),
    o.arcTo(t + l, e, t + l, e + i, n),
    o.arcTo(t + l, e + i, t, e + i, n),
    o.arcTo(t, e + i, t, e, n),
    o.arcTo(t, e, t + l, e, n),
    o.closePath();
}
function x(o, { padding: t, border: e, width: l, height: i, top: n, left: f }) {
  let r = l - e.left - e.right - t.left - t.right,
    a = i - t.top - t.bottom - e.top - e.bottom,
    s = f + e.left + t.left,
    u = n + e.top + t.top;
  return (
    o === "top"
      ? (s += r / 2)
      : o === "right"
      ? ((s += r), (u += a / 2))
      : o === "bottom"
      ? ((s += r / 2), (u += a))
      : o === "left"
      ? (u += a / 2)
      : o === "center" && ((s += r / 2), (u += a / 2)),
    { x: s, y: u }
  );
}
function tt(o, t, { margin: e, border: l, padding: i }, n, f) {
  let r = (m) => 0,
    a = 0,
    s = 0,
    u = f ? 1 : 0.5,
    p = f ? n * 2 : 0;
  return (
    o === "padding"
      ? (r = (m) => i[m] * u + p)
      : o === "border"
      ? (r = (m) => i[m] + l[m] * u + p)
      : o === "margin" && (r = (m) => i[m] + l[m] + e[m] * u + p),
    t === "top"
      ? (s = -r("top"))
      : t === "right"
      ? (a = r("right"))
      : t === "bottom"
      ? (s = r("bottom"))
      : t === "left" && (a = -r("left")),
    { offsetX: a, offsetY: s }
  );
}
function ot(o, t) {
  return (
    Math.abs(o.x - t.x) < Math.abs(o.w + t.w) / 2 &&
    Math.abs(o.y - t.y) < Math.abs(o.h + t.h) / 2
  );
}
function et(o, t, e) {
  return (
    o === "top"
      ? (t.y = e.y - e.h - g)
      : o === "right"
      ? (t.x = e.x + e.w / 2 + g + t.w / 2)
      : o === "bottom"
      ? (t.y = e.y + e.h + g)
      : o === "left" && (t.x = e.x - e.w / 2 - g - t.w / 2),
    { x: t.x, y: t.y }
  );
}
function O(o, t, { x: e, y: l, w: i, h: n }, f) {
  return (
    B(o, { x: e, y: l, w: i, h: n, r: 3 }),
    (o.fillStyle = `${w[t]}dd`),
    o.fill(),
    (o.strokeStyle = w[t]),
    o.stroke(),
    (o.fillStyle = w.text),
    o.fillText(f, e, l),
    B(o, { x: e, y: l, w: i, h: n, r: 3 }),
    (o.fillStyle = `${w[t]}dd`),
    o.fill(),
    (o.strokeStyle = w[t]),
    o.stroke(),
    (o.fillStyle = w.text),
    o.fillText(f, e, l),
    { x: e, y: l, w: i, h: n }
  );
}
function k(o, t) {
  (o.font = "600 12px monospace"),
    (o.textBaseline = "middle"),
    (o.textAlign = "center");
  let e = o.measureText(t),
    l = e.actualBoundingBoxAscent + e.actualBoundingBoxDescent,
    i = e.width + g * 2,
    n = l + g * 2;
  return { w: i, h: n };
}
function it(o, t, { type: e, position: l = "center", text: i }, n, f = !1) {
  let { x: r, y: a } = x(l, t),
    { offsetX: s, offsetY: u } = tt(e, l, t, g + 1, f);
  (r += s), (a += u);
  let { w: p, h: m } = k(o, i);
  if (n && ot({ x: r, y: a, w: p, h: m }, n)) {
    let E = et(l, { x: r, y: a, w: p, h: m }, n);
    (r = E.x), (a = E.y);
  }
  return O(o, e, { x: r, y: a, w: p, h: m }, i);
}
function lt(o, { w: t, h: e }) {
  let l = t * 0.5 + g,
    i = e * 0.5 + g;
  return {
    offsetX: (o.x === "left" ? -1 : 1) * l,
    offsetY: (o.y === "top" ? -1 : 1) * i,
  };
}
function nt(o, t, { type: e, text: l }) {
  let { floatingAlignment: i, extremities: n } = t,
    f = n[i.x],
    r = n[i.y],
    { w: a, h: s } = k(o, l),
    { offsetX: u, offsetY: p } = lt(i, { w: a, h: s });
  return (f += u), (r += p), O(o, e, { x: f, y: r, w: a, h: s }, l);
}
function v(o, t, e, l) {
  let i = [];
  e.forEach((n, f) => {
    let r =
      l && n.position === "center" ? nt(o, t, n) : it(o, t, n, i[f - 1], l);
    i[f] = r;
  });
}
function rt(o, t, e, l) {
  let i = e.reduce((n, f) => {
    var r;
    return (
      Object.prototype.hasOwnProperty.call(n, f.position) ||
        (n[f.position] = []),
      (r = n[f.position]) == null || r.push(f),
      n
    );
  }, {});
  i.top && v(o, t, i.top, l),
    i.right && v(o, t, i.right, l),
    i.bottom && v(o, t, i.bottom, l),
    i.left && v(o, t, i.left, l),
    i.center && v(o, t, i.center, l);
}
var P = {
    margin: "#f6b26ba8",
    border: "#ffe599a8",
    padding: "#93c47d8c",
    content: "#6fa8dca8",
  },
  H = 30;
function c(o) {
  return parseInt(o.replace("px", ""), 10);
}
function b(o) {
  return Number.isInteger(o) ? o : o.toFixed(2);
}
function W(o) {
  return o.filter((t) => t.text !== 0 && t.text !== "0");
}
function ft(o) {
  let t = {
      top: d.window.scrollY,
      bottom: d.window.scrollY + d.window.innerHeight,
      left: d.window.scrollX,
      right: d.window.scrollX + d.window.innerWidth,
    },
    e = {
      top: Math.abs(t.top - o.top),
      bottom: Math.abs(t.bottom - o.bottom),
      left: Math.abs(t.left - o.left),
      right: Math.abs(t.right - o.right),
    };
  return {
    x: e.left > e.right ? "left" : "right",
    y: e.top > e.bottom ? "top" : "bottom",
  };
}
function at(o) {
  let t = d.getComputedStyle(o),
    {
      top: e,
      left: l,
      right: i,
      bottom: n,
      width: f,
      height: r,
    } = o.getBoundingClientRect(),
    {
      marginTop: a,
      marginBottom: s,
      marginLeft: u,
      marginRight: p,
      paddingTop: m,
      paddingBottom: E,
      paddingLeft: F,
      paddingRight: I,
      borderBottomWidth: $,
      borderTopWidth: D,
      borderLeftWidth: N,
      borderRightWidth: q,
    } = t;
  (e = e + d.window.scrollY),
    (l = l + d.window.scrollX),
    (n = n + d.window.scrollY),
    (i = i + d.window.scrollX);
  let y = { top: c(a), bottom: c(s), left: c(u), right: c(p) },
    z = { top: c(m), bottom: c(E), left: c(F), right: c(I) },
    j = { top: c(D), bottom: c($), left: c(N), right: c(q) },
    T = {
      top: e - y.top,
      bottom: n + y.bottom,
      left: l - y.left,
      right: i + y.right,
    };
  return {
    margin: y,
    padding: z,
    border: j,
    top: e,
    left: l,
    bottom: n,
    right: i,
    width: f,
    height: r,
    extremities: T,
    floatingAlignment: ft(T),
  };
}
function st(
  o,
  { margin: t, width: e, height: l, top: i, left: n, bottom: f, right: r }
) {
  let a = l + t.bottom + t.top;
  (o.fillStyle = P.margin),
    o.fillRect(n, i - t.top, e, t.top),
    o.fillRect(r, i - t.top, t.right, a),
    o.fillRect(n, f, e, t.bottom),
    o.fillRect(n - t.left, i - t.top, t.left, a);
  let s = [
    { type: "margin", text: b(t.top), position: "top" },
    { type: "margin", text: b(t.right), position: "right" },
    { type: "margin", text: b(t.bottom), position: "bottom" },
    { type: "margin", text: b(t.left), position: "left" },
  ];
  return W(s);
}
function ht(
  o,
  {
    padding: t,
    border: e,
    width: l,
    height: i,
    top: n,
    left: f,
    bottom: r,
    right: a,
  }
) {
  let s = l - e.left - e.right,
    u = i - t.top - t.bottom - e.top - e.bottom;
  (o.fillStyle = P.padding),
    o.fillRect(f + e.left, n + e.top, s, t.top),
    o.fillRect(a - t.right - e.right, n + t.top + e.top, t.right, u),
    o.fillRect(f + e.left, r - t.bottom - e.bottom, s, t.bottom),
    o.fillRect(f + e.left, n + t.top + e.top, t.left, u);
  let p = [
    { type: "padding", text: t.top, position: "top" },
    { type: "padding", text: t.right, position: "right" },
    { type: "padding", text: t.bottom, position: "bottom" },
    { type: "padding", text: t.left, position: "left" },
  ];
  return W(p);
}
function ut(
  o,
  { border: t, width: e, height: l, top: i, left: n, bottom: f, right: r }
) {
  let a = l - t.top - t.bottom;
  (o.fillStyle = P.border),
    o.fillRect(n, i, e, t.top),
    o.fillRect(n, f - t.bottom, e, t.bottom),
    o.fillRect(n, i + t.top, t.left, a),
    o.fillRect(r - t.right, i + t.top, t.right, a);
  let s = [
    { type: "border", text: t.top, position: "top" },
    { type: "border", text: t.right, position: "right" },
    { type: "border", text: t.bottom, position: "bottom" },
    { type: "border", text: t.left, position: "left" },
  ];
  return W(s);
}
function dt(
  o,
  { padding: t, border: e, width: l, height: i, top: n, left: f }
) {
  let r = l - e.left - e.right - t.left - t.right,
    a = i - t.top - t.bottom - e.top - e.bottom;
  return (
    (o.fillStyle = P.content),
    o.fillRect(f + e.left + t.left, n + e.top + t.top, r, a),
    [{ type: "content", position: "center", text: `${b(r)} x ${b(a)}` }]
  );
}
function mt(o) {
  return (t) => {
    if (o && t) {
      let e = at(o),
        l = st(t, e),
        i = ht(t, e),
        n = ut(t, e),
        f = dt(t, e),
        r = e.width <= H * 3 || e.height <= H;
      rt(t, e, [...f, ...i, ...n, ...l], r);
    }
  };
}
function pt(o) {
  G(mt(o));
}
var ct = (o, t) => {
    let e = d.document.elementFromPoint(o, t),
      l = (i) => {
        if (i && i.shadowRoot) {
          let n = i.shadowRoot.elementFromPoint(o, t);
          return i.isEqualNode(n) ? i : n.shadowRoot ? l(n) : n;
        }
        return i;
      };
    return l(e) || e;
  },
  Y,
  M = { x: 0, y: 0 };
function C(o, t) {
  (Y = ct(o, t)), pt(Y);
}
var gt = (o, t) => {
    let { measureEnabled: e } = t.globals;
    return (
      R(() => {
        let l = (i) => {
          window.requestAnimationFrame(() => {
            i.stopPropagation(), (M.x = i.clientX), (M.y = i.clientY);
          });
        };
        return (
          document.addEventListener("pointermove", l),
          () => {
            document.removeEventListener("pointermove", l);
          }
        );
      }, []),
      R(() => {
        let l = (n) => {
            window.requestAnimationFrame(() => {
              n.stopPropagation(), C(n.clientX, n.clientY);
            });
          },
          i = () => {
            window.requestAnimationFrame(() => {
              J();
            });
          };
        return (
          t.viewMode === "story" &&
            e &&
            (document.addEventListener("pointerover", l),
            U(),
            window.addEventListener("resize", i),
            C(M.x, M.y)),
          () => {
            window.removeEventListener("resize", i), Q();
          }
        );
      }, [e, t.viewMode]),
      o()
    );
  },
  bt = [gt],
  yt = { [K]: !1 };
export { bt as decorators, yt as globals };
//# sourceMappingURL=preview-25cb0eda.js.map
