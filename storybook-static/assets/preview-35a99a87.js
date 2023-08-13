import { r as h, R } from "./index-61bf1805.js";
import { s as Vr } from "./index-d475d2ea.js";
import { g as qr } from "./_commonjsHelpers-de833af9.js";
import { _ as Jr, u as He, t as Ge } from "./chunk-6P7RB4HF-150ba47c.js";
var Sr = { exports: {} },
  fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = h,
  Xr = Symbol.for("react.element"),
  Zr = Symbol.for("react.fragment"),
  Br = Object.prototype.hasOwnProperty,
  Qr = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  et = { key: !0, ref: !0, __self: !0, __source: !0 };
function vr(e, r, t) {
  var n,
    o = {},
    a = null,
    i = null;
  t !== void 0 && (a = "" + t),
    r.key !== void 0 && (a = "" + r.key),
    r.ref !== void 0 && (i = r.ref);
  for (n in r) Br.call(r, n) && !et.hasOwnProperty(n) && (o[n] = r[n]);
  if (e && e.defaultProps)
    for (n in ((r = e.defaultProps), r)) o[n] === void 0 && (o[n] = r[n]);
  return {
    $$typeof: Xr,
    type: e,
    key: a,
    ref: i,
    props: o,
    _owner: Qr.current,
  };
}
fe.Fragment = Zr;
fe.jsx = vr;
fe.jsxs = vr;
Sr.exports = fe;
var rt = Sr.exports;
const Ee = rt.jsx,
  tt = {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  };
function nt(e) {
  return () => ({ fontFamily: e.fontFamily || "sans-serif" });
}
var ot = Object.defineProperty,
  Ke = Object.getOwnPropertySymbols,
  at = Object.prototype.hasOwnProperty,
  it = Object.prototype.propertyIsEnumerable,
  Ue = (e, r, t) =>
    r in e
      ? ot(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Ve = (e, r) => {
    for (var t in r || (r = {})) at.call(r, t) && Ue(e, t, r[t]);
    if (Ke) for (var t of Ke(r)) it.call(r, t) && Ue(e, t, r[t]);
    return e;
  };
function st(e) {
  return (r) => ({
    WebkitTapHighlightColor: "transparent",
    [r || "&:focus"]: Ve(
      {},
      e.focusRing === "always" || e.focusRing === "auto"
        ? e.focusRingStyles.styles(e)
        : e.focusRingStyles.resetStyles(e)
    ),
    [r
      ? r.replace(":focus", ":focus:not(:focus-visible)")
      : "&:focus:not(:focus-visible)"]: Ve(
      {},
      e.focusRing === "auto" || e.focusRing === "never"
        ? e.focusRingStyles.resetStyles(e)
        : null
    ),
  });
}
function Z(e) {
  return (r) =>
    typeof e.primaryShade == "number"
      ? e.primaryShade
      : e.primaryShade[r || e.colorScheme];
}
function Me(e) {
  const r = Z(e);
  return (t, n, o = !0, a = !0) => {
    if (typeof t == "string" && t.includes(".")) {
      const [s, c] = t.split("."),
        u = parseInt(c, 10);
      if (s in e.colors && u >= 0 && u < 10)
        return e.colors[s][typeof n == "number" && !a ? n : u];
    }
    const i = typeof n == "number" ? n : r();
    return t in e.colors ? e.colors[t][i] : o ? e.colors[e.primaryColor][i] : t;
  };
}
function wr(e) {
  let r = "";
  for (let t = 1; t < e.length - 1; t += 1)
    r += `${e[t]} ${(t / (e.length - 1)) * 100}%, `;
  return `${e[0]} 0%, ${r}${e[e.length - 1]} 100%`;
}
function ct(e, ...r) {
  return `linear-gradient(${e}deg, ${wr(r)})`;
}
function ft(...e) {
  return `radial-gradient(circle, ${wr(e)})`;
}
function _r(e) {
  const r = Me(e),
    t = Z(e);
  return (n) => {
    const o = {
      from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
      to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
      deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg,
    };
    return `linear-gradient(${o.deg}deg, ${r(o.from, t(), !1)} 0%, ${r(
      o.to,
      t(),
      !1
    )} 100%)`;
  };
}
function $r(e) {
  return (r) => {
    if (typeof r == "number") return `${r / 16}${e}`;
    if (typeof r == "string") {
      const t = r.replace("px", "");
      if (!Number.isNaN(Number(t))) return `${Number(t) / 16}${e}`;
    }
    return r;
  };
}
const D = $r("rem"),
  ue = $r("em");
function kr({ size: e, sizes: r, units: t }) {
  return e in r
    ? r[e]
    : typeof e == "number"
    ? t === "em"
      ? ue(e)
      : D(e)
    : e || r.md;
}
function ie(e) {
  return typeof e == "number"
    ? e
    : typeof e == "string" && e.includes("rem")
    ? Number(e.replace("rem", "")) * 16
    : typeof e == "string" && e.includes("em")
    ? Number(e.replace("em", "")) * 16
    : Number(e);
}
function ut(e) {
  return (r) =>
    `@media (min-width: ${ue(ie(kr({ size: r, sizes: e.breakpoints })))})`;
}
function lt(e) {
  return (r) =>
    `@media (max-width: ${ue(ie(kr({ size: r, sizes: e.breakpoints })) - 1)})`;
}
function dt(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function pt(e) {
  let r = e.replace("#", "");
  if (r.length === 3) {
    const i = r.split("");
    r = [i[0], i[0], i[1], i[1], i[2], i[2]].join("");
  }
  const t = parseInt(r, 16),
    n = (t >> 16) & 255,
    o = (t >> 8) & 255,
    a = t & 255;
  return { r: n, g: o, b: a, a: 1 };
}
function mt(e) {
  const [r, t, n, o] = e
    .replace(/[^0-9,.]/g, "")
    .split(",")
    .map(Number);
  return { r, g: t, b: n, a: o || 1 };
}
function Ie(e) {
  return dt(e)
    ? pt(e)
    : e.startsWith("rgb")
    ? mt(e)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function W(e, r) {
  if (typeof e != "string" || r > 1 || r < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(--")) return e;
  const { r: t, g: n, b: o } = Ie(e);
  return `rgba(${t}, ${n}, ${o}, ${r})`;
}
function yt(e = 0) {
  return {
    position: "absolute",
    top: D(e),
    right: D(e),
    left: D(e),
    bottom: D(e),
  };
}
function gt(e, r) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r: t, g: n, b: o, a } = Ie(e),
    i = 1 - r,
    s = (c) => Math.round(c * i);
  return `rgba(${s(t)}, ${s(n)}, ${s(o)}, ${a})`;
}
function bt(e, r) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r: t, g: n, b: o, a } = Ie(e),
    i = (s) => Math.round(s + (255 - s) * r);
  return `rgba(${i(t)}, ${i(n)}, ${i(o)}, ${a})`;
}
function ht(e) {
  return (r) => {
    if (typeof r == "number") return D(r);
    const t =
      typeof e.defaultRadius == "number"
        ? e.defaultRadius
        : e.radius[e.defaultRadius] || e.defaultRadius;
    return e.radius[r] || r || t;
  };
}
function St(e, r) {
  if (typeof e == "string" && e.includes(".")) {
    const [t, n] = e.split("."),
      o = parseInt(n, 10);
    if (t in r.colors && o >= 0 && o < 10)
      return { isSplittedColor: !0, key: t, shade: o };
  }
  return { isSplittedColor: !1 };
}
function vt(e) {
  const r = Me(e),
    t = Z(e),
    n = _r(e);
  return ({ variant: o, color: a, gradient: i, primaryFallback: s }) => {
    const c = St(a, e);
    switch (o) {
      case "light":
        return {
          border: "transparent",
          background: W(
            r(a, e.colorScheme === "dark" ? 8 : 0, s, !1),
            e.colorScheme === "dark" ? 0.2 : 1
          ),
          color:
            a === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : r(a, e.colorScheme === "dark" ? 2 : t("light")),
          hover: W(
            r(a, e.colorScheme === "dark" ? 7 : 1, s, !1),
            e.colorScheme === "dark" ? 0.25 : 0.65
          ),
        };
      case "subtle":
        return {
          border: "transparent",
          background: "transparent",
          color:
            a === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : r(a, e.colorScheme === "dark" ? 2 : t("light")),
          hover: W(
            r(a, e.colorScheme === "dark" ? 8 : 0, s, !1),
            e.colorScheme === "dark" ? 0.2 : 1
          ),
        };
      case "outline":
        return {
          border: r(a, e.colorScheme === "dark" ? 5 : t("light")),
          background: "transparent",
          color: r(a, e.colorScheme === "dark" ? 5 : t("light")),
          hover:
            e.colorScheme === "dark"
              ? W(r(a, 5, s, !1), 0.05)
              : W(r(a, 0, s, !1), 0.35),
        };
      case "default":
        return {
          border:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
          background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          color: e.colorScheme === "dark" ? e.white : e.black,
          hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0],
        };
      case "white":
        return {
          border: "transparent",
          background: e.white,
          color: r(a, t()),
          hover: null,
        };
      case "transparent":
        return {
          border: "transparent",
          color:
            a === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : r(a, e.colorScheme === "dark" ? 2 : t("light")),
          background: "transparent",
          hover: null,
        };
      case "gradient":
        return {
          background: n(i),
          color: e.white,
          border: "transparent",
          hover: null,
        };
      default: {
        const u = t(),
          f = c.isSplittedColor ? c.shade : u,
          m = c.isSplittedColor ? c.key : a;
        return {
          border: "transparent",
          background: r(m, f, s),
          color: e.white,
          hover: r(m, f === 9 ? 8 : f + 1),
        };
      }
    }
  };
}
function wt(e) {
  return (r) => {
    const t = Z(e)(r);
    return e.colors[e.primaryColor][t];
  };
}
function _t(e) {
  return {
    "@media (hover: hover)": { "&:hover": e },
    "@media (hover: none)": { "&:active": e },
  };
}
function $t(e) {
  return () => ({
    userSelect: "none",
    color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
  });
}
function kt(e) {
  return () => (e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6]);
}
const w = {
  fontStyles: nt,
  themeColor: Me,
  focusStyles: st,
  linearGradient: ct,
  radialGradient: ft,
  smallerThan: lt,
  largerThan: ut,
  rgba: W,
  cover: yt,
  darken: gt,
  lighten: bt,
  radius: ht,
  variant: vt,
  primaryShade: Z,
  hover: _t,
  gradient: _r,
  primaryColor: wt,
  placeholderStyles: $t,
  dimmed: kt,
};
var Ct = Object.defineProperty,
  xt = Object.defineProperties,
  Ot = Object.getOwnPropertyDescriptors,
  qe = Object.getOwnPropertySymbols,
  Et = Object.prototype.hasOwnProperty,
  Pt = Object.prototype.propertyIsEnumerable,
  Je = (e, r, t) =>
    r in e
      ? Ct(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  At = (e, r) => {
    for (var t in r || (r = {})) Et.call(r, t) && Je(e, t, r[t]);
    if (qe) for (var t of qe(r)) Pt.call(r, t) && Je(e, t, r[t]);
    return e;
  },
  Rt = (e, r) => xt(e, Ot(r));
function Cr(e) {
  return Rt(At({}, e), {
    fn: {
      fontStyles: w.fontStyles(e),
      themeColor: w.themeColor(e),
      focusStyles: w.focusStyles(e),
      largerThan: w.largerThan(e),
      smallerThan: w.smallerThan(e),
      radialGradient: w.radialGradient,
      linearGradient: w.linearGradient,
      gradient: w.gradient(e),
      rgba: w.rgba,
      cover: w.cover,
      lighten: w.lighten,
      darken: w.darken,
      primaryShade: w.primaryShade(e),
      radius: w.radius(e),
      variant: w.variant(e),
      hover: w.hover,
      primaryColor: w.primaryColor(e),
      placeholderStyles: w.placeholderStyles(e),
      dimmed: w.dimmed(e),
    },
  });
}
const Tt = {
    dir: "ltr",
    primaryShade: { light: 6, dark: 8 },
    focusRing: "auto",
    loader: "oval",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: tt,
    lineHeight: 1.55,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: { from: "indigo", to: "cyan", deg: 45 },
    shadows: {
      xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
      sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
      md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
      lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
      xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    radius: {
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "2rem",
    },
    spacing: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    headings: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: 700,
      sizes: {
        h1: { fontSize: "2.125rem", lineHeight: 1.3, fontWeight: void 0 },
        h2: { fontSize: "1.625rem", lineHeight: 1.35, fontWeight: void 0 },
        h3: { fontSize: "1.375rem", lineHeight: 1.4, fontWeight: void 0 },
        h4: { fontSize: "1.125rem", lineHeight: 1.45, fontWeight: void 0 },
        h5: { fontSize: "1rem", lineHeight: 1.5, fontWeight: void 0 },
        h6: { fontSize: "0.875rem", lineHeight: 1.5, fontWeight: void 0 },
      },
    },
    other: {},
    components: {},
    activeStyles: { transform: "translateY(0.0625rem)" },
    datesLocale: "en",
    globalStyles: void 0,
    focusRingStyles: {
      styles: (e) => ({
        outlineOffset: "0.125rem",
        outline: `0.125rem solid ${
          e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]
        }`,
      }),
      resetStyles: () => ({ outline: "none" }),
      inputStyles: (e) => ({
        outline: "none",
        borderColor:
          e.colors[e.primaryColor][
            typeof e.primaryShade == "object"
              ? e.primaryShade[e.colorScheme]
              : e.primaryShade
          ],
      }),
    },
  },
  xr = Cr(Tt);
function jt(e) {
  if (e.sheet) return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e) return document.styleSheets[r];
}
function Mt(e) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && r.setAttribute("nonce", e.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var It = (function () {
    function e(t) {
      var n = this;
      (this._insertTag = function (o) {
        var a;
        n.tags.length === 0
          ? n.insertionPoint
            ? (a = n.insertionPoint.nextSibling)
            : n.prepend
            ? (a = n.container.firstChild)
            : (a = n.before)
          : (a = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, a),
          n.tags.push(o);
      }),
        (this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = t.nonce),
        (this.key = t.key),
        (this.container = t.container),
        (this.prepend = t.prepend),
        (this.insertionPoint = t.insertionPoint),
        (this.before = null);
    }
    var r = e.prototype;
    return (
      (r.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (r.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Mt(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = jt(o);
          try {
            a.insertRule(n, a.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  x = "-ms-",
  se = "-moz-",
  d = "-webkit-",
  Or = "comm",
  Ne = "rule",
  ze = "decl",
  Nt = "@import",
  Er = "@keyframes",
  zt = "@layer",
  Ft = Math.abs,
  le = String.fromCharCode,
  Dt = Object.assign;
function Lt(e, r) {
  return k(e, 0) ^ 45
    ? (((((((r << 2) ^ k(e, 0)) << 2) ^ k(e, 1)) << 2) ^ k(e, 2)) << 2) ^
        k(e, 3)
    : 0;
}
function Pr(e) {
  return e.trim();
}
function Wt(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function p(e, r, t) {
  return e.replace(r, t);
}
function Pe(e, r) {
  return e.indexOf(r);
}
function k(e, r) {
  return e.charCodeAt(r) | 0;
}
function q(e, r, t) {
  return e.slice(r, t);
}
function N(e) {
  return e.length;
}
function Fe(e) {
  return e.length;
}
function ee(e, r) {
  return r.push(e), e;
}
function Ht(e, r) {
  return e.map(r).join("");
}
var de = 1,
  G = 1,
  Ar = 0,
  E = 0,
  v = 0,
  K = "";
function pe(e, r, t, n, o, a, i) {
  return {
    value: e,
    root: r,
    parent: t,
    type: n,
    props: o,
    children: a,
    line: de,
    column: G,
    length: i,
    return: "",
  };
}
function U(e, r) {
  return Dt(pe("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Gt() {
  return v;
}
function Kt() {
  return (v = E > 0 ? k(K, --E) : 0), G--, v === 10 && ((G = 1), de--), v;
}
function P() {
  return (v = E < Ar ? k(K, E++) : 0), G++, v === 10 && ((G = 1), de++), v;
}
function F() {
  return k(K, E);
}
function ne() {
  return E;
}
function B(e, r) {
  return q(K, e, r);
}
function J(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rr(e) {
  return (de = G = 1), (Ar = N((K = e))), (E = 0), [];
}
function Tr(e) {
  return (K = ""), e;
}
function oe(e) {
  return Pr(B(E - 1, Ae(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ut(e) {
  for (; (v = F()) && v < 33; ) P();
  return J(e) > 2 || J(v) > 3 ? "" : " ";
}
function Vt(e, r) {
  for (
    ;
    --r &&
    P() &&
    !(v < 48 || v > 102 || (v > 57 && v < 65) || (v > 70 && v < 97));

  );
  return B(e, ne() + (r < 6 && F() == 32 && P() == 32));
}
function Ae(e) {
  for (; P(); )
    switch (v) {
      case e:
        return E;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ae(v);
        break;
      case 40:
        e === 41 && Ae(e);
        break;
      case 92:
        P();
        break;
    }
  return E;
}
function qt(e, r) {
  for (; P() && e + v !== 47 + 10; ) if (e + v === 42 + 42 && F() === 47) break;
  return "/*" + B(r, E - 1) + "*" + le(e === 47 ? e : P());
}
function Jt(e) {
  for (; !J(F()); ) P();
  return B(e, E);
}
function Yt(e) {
  return Tr(ae("", null, null, null, [""], (e = Rr(e)), 0, [0], e));
}
function ae(e, r, t, n, o, a, i, s, c) {
  for (
    var u = 0,
      f = 0,
      m = i,
      O = 0,
      T = 0,
      y = 0,
      l = 1,
      $ = 1,
      S = 1,
      C = 0,
      j = "",
      Q = o,
      L = a,
      M = n,
      b = j;
    $;

  )
    switch (((y = C), (C = P()))) {
      case 40:
        if (y != 108 && k(b, m - 1) == 58) {
          Pe((b += p(oe(C), "&", "&\f")), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += oe(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Ut(y);
        break;
      case 92:
        b += Vt(ne() - 1, 7);
        continue;
      case 47:
        switch (F()) {
          case 42:
          case 47:
            ee(Xt(qt(P(), ne()), r, t), c);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * l:
        s[u++] = N(b) * S;
      case 125 * l:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            $ = 0;
          case 59 + f:
            S == -1 && (b = p(b, /\f/g, "")),
              T > 0 &&
                N(b) - m &&
                ee(
                  T > 32
                    ? Xe(b + ";", n, t, m - 1)
                    : Xe(p(b, " ", "") + ";", n, t, m - 2),
                  c
                );
            break;
          case 59:
            b += ";";
          default:
            if (
              (ee((M = Ye(b, r, t, u, f, o, s, j, (Q = []), (L = []), m)), a),
              C === 123)
            )
              if (f === 0) ae(b, r, M, M, Q, a, m, s, L);
              else
                switch (O === 99 && k(b, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ae(
                      e,
                      M,
                      M,
                      n && ee(Ye(e, M, M, 0, 0, o, s, j, o, (Q = []), m), L),
                      o,
                      L,
                      m,
                      s,
                      n ? Q : L
                    );
                    break;
                  default:
                    ae(b, M, M, M, [""], L, 0, s, L);
                }
        }
        (u = f = T = 0), (l = S = 1), (j = b = ""), (m = i);
        break;
      case 58:
        (m = 1 + N(b)), (T = y);
      default:
        if (l < 1) {
          if (C == 123) --l;
          else if (C == 125 && l++ == 0 && Kt() == 125) continue;
        }
        switch (((b += le(C)), C * l)) {
          case 38:
            S = f > 0 ? 1 : ((b += "\f"), -1);
            break;
          case 44:
            (s[u++] = (N(b) - 1) * S), (S = 1);
            break;
          case 64:
            F() === 45 && (b += oe(P())),
              (O = F()),
              (f = m = N((j = b += Jt(ne())))),
              C++;
            break;
          case 45:
            y === 45 && N(b) == 2 && (l = 0);
        }
    }
  return a;
}
function Ye(e, r, t, n, o, a, i, s, c, u, f) {
  for (
    var m = o - 1, O = o === 0 ? a : [""], T = Fe(O), y = 0, l = 0, $ = 0;
    y < n;
    ++y
  )
    for (var S = 0, C = q(e, m + 1, (m = Ft((l = i[y])))), j = e; S < T; ++S)
      (j = Pr(l > 0 ? O[S] + " " + C : p(C, /&\f/g, O[S]))) && (c[$++] = j);
  return pe(e, r, t, o === 0 ? Ne : s, c, u, f);
}
function Xt(e, r, t) {
  return pe(e, r, t, Or, le(Gt()), q(e, 2, -2), 0);
}
function Xe(e, r, t, n) {
  return pe(e, r, t, ze, q(e, 0, n), q(e, n + 1, -1), n);
}
function H(e, r) {
  for (var t = "", n = Fe(e), o = 0; o < n; o++) t += r(e[o], o, e, r) || "";
  return t;
}
function Zt(e, r, t, n) {
  switch (e.type) {
    case zt:
      if (e.children.length) break;
    case Nt:
    case ze:
      return (e.return = e.return || e.value);
    case Or:
      return "";
    case Er:
      return (e.return = e.value + "{" + H(e.children, n) + "}");
    case Ne:
      e.value = e.props.join(",");
  }
  return N((t = H(e.children, n))) ? (e.return = e.value + "{" + t + "}") : "";
}
function Bt(e) {
  var r = Fe(e);
  return function (t, n, o, a) {
    for (var i = "", s = 0; s < r; s++) i += e[s](t, n, o, a) || "";
    return i;
  };
}
function Qt(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
var Ze = function (r) {
  var t = new WeakMap();
  return function (n) {
    if (t.has(n)) return t.get(n);
    var o = r(n);
    return t.set(n, o), o;
  };
};
function en(e) {
  var r = Object.create(null);
  return function (t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var rn = function (r, t, n) {
    for (
      var o = 0, a = 0;
      (o = a), (a = F()), o === 38 && a === 12 && (t[n] = 1), !J(a);

    )
      P();
    return B(r, E);
  },
  tn = function (r, t) {
    var n = -1,
      o = 44;
    do
      switch (J(o)) {
        case 0:
          o === 38 && F() === 12 && (t[n] = 1), (r[n] += rn(E - 1, t, n));
          break;
        case 2:
          r[n] += oe(o);
          break;
        case 4:
          if (o === 44) {
            (r[++n] = F() === 58 ? "&\f" : ""), (t[n] = r[n].length);
            break;
          }
        default:
          r[n] += le(o);
      }
    while ((o = P()));
    return r;
  },
  nn = function (r, t) {
    return Tr(tn(Rr(r), t));
  },
  Be = new WeakMap(),
  on = function (r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (
        var t = r.value,
          n = r.parent,
          o = r.column === n.column && r.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Be.get(n)) &&
        !o
      ) {
        Be.set(r, !0);
        for (
          var a = [], i = nn(t, a), s = n.props, c = 0, u = 0;
          c < i.length;
          c++
        )
          for (var f = 0; f < s.length; f++, u++)
            r.props[u] = a[c] ? i[c].replace(/&\f/g, s[f]) : s[f] + " " + i[c];
      }
    }
  },
  an = function (r) {
    if (r.type === "decl") {
      var t = r.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  };
function jr(e, r) {
  switch (Lt(e, r)) {
    case 5103:
      return d + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return d + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return d + e + se + e + x + e + e;
    case 6828:
    case 4268:
      return d + e + x + e + e;
    case 6165:
      return d + e + x + "flex-" + e + e;
    case 5187:
      return (
        d + e + p(e, /(\w+).+(:[^]+)/, d + "box-$1$2" + x + "flex-$1$2") + e
      );
    case 5443:
      return d + e + x + "flex-item-" + p(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        d + e + x + "flex-line-pack" + p(e, /align-content|flex-|-self/, "") + e
      );
    case 5548:
      return d + e + x + p(e, "shrink", "negative") + e;
    case 5292:
      return d + e + x + p(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        d +
        "box-" +
        p(e, "-grow", "") +
        d +
        e +
        x +
        p(e, "grow", "positive") +
        e
      );
    case 4554:
      return d + p(e, /([^-])(transform)/g, "$1" + d + "$2") + e;
    case 6187:
      return (
        p(p(p(e, /(zoom-|grab)/, d + "$1"), /(image-set)/, d + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return p(e, /(image-set\([^]*)/, d + "$1$`$1");
    case 4968:
      return (
        p(
          p(e, /(.+:)(flex-)?(.*)/, d + "box-pack:$3" + x + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        d +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return p(e, /(.+)-inline(.+)/, d + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (N(e) - 1 - r > 6)
        switch (k(e, r + 1)) {
          case 109:
            if (k(e, r + 4) !== 45) break;
          case 102:
            return (
              p(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  d +
                  "$2-$3$1" +
                  se +
                  (k(e, r + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Pe(e, "stretch")
              ? jr(p(e, "stretch", "fill-available"), r) + e
              : e;
        }
      break;
    case 4949:
      if (k(e, r + 1) !== 115) break;
    case 6444:
      switch (k(e, N(e) - 3 - (~Pe(e, "!important") && 10))) {
        case 107:
          return p(e, ":", ":" + d) + e;
        case 101:
          return (
            p(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                d +
                (k(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                d +
                "$2$3$1" +
                x +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (k(e, r + 11)) {
        case 114:
          return d + e + x + p(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return d + e + x + p(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return d + e + x + p(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return d + e + x + e + e;
  }
  return e;
}
var sn = function (r, t, n, o) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case ze:
          r.return = jr(r.value, r.length);
          break;
        case Er:
          return H([U(r, { value: p(r.value, "@", "@" + d) })], o);
        case Ne:
          if (r.length)
            return Ht(r.props, function (a) {
              switch (Wt(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return H(
                    [U(r, { props: [p(a, /:(read-\w+)/, ":" + se + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return H(
                    [
                      U(r, {
                        props: [p(a, /:(plac\w+)/, ":" + d + "input-$1")],
                      }),
                      U(r, { props: [p(a, /:(plac\w+)/, ":" + se + "$1")] }),
                      U(r, { props: [p(a, /:(plac\w+)/, x + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  cn = [sn],
  fn = function (r) {
    var t = r.key;
    if (t === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (l) {
        var $ = l.getAttribute("data-emotion");
        $.indexOf(" ") !== -1 &&
          (document.head.appendChild(l), l.setAttribute("data-s", ""));
      });
    }
    var o = r.stylisPlugins || cn,
      a = {},
      i,
      s = [];
    (i = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (l) {
          for (
            var $ = l.getAttribute("data-emotion").split(" "), S = 1;
            S < $.length;
            S++
          )
            a[$[S]] = !0;
          s.push(l);
        }
      );
    var c,
      u = [on, an];
    {
      var f,
        m = [
          Zt,
          Qt(function (l) {
            f.insert(l);
          }),
        ],
        O = Bt(u.concat(o, m)),
        T = function ($) {
          return H(Yt($), O);
        };
      c = function ($, S, C, j) {
        (f = C),
          T($ ? $ + "{" + S.styles + "}" : S.styles),
          j && (y.inserted[S.name] = !0);
      };
    }
    var y = {
      key: t,
      sheet: new It({
        key: t,
        container: i,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: a,
      registered: {},
      insert: c,
    };
    return y.sheet.hydrate(s), y;
  },
  Mr = { exports: {} },
  g = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _ = typeof Symbol == "function" && Symbol.for,
  De = _ ? Symbol.for("react.element") : 60103,
  Le = _ ? Symbol.for("react.portal") : 60106,
  me = _ ? Symbol.for("react.fragment") : 60107,
  ye = _ ? Symbol.for("react.strict_mode") : 60108,
  ge = _ ? Symbol.for("react.profiler") : 60114,
  be = _ ? Symbol.for("react.provider") : 60109,
  he = _ ? Symbol.for("react.context") : 60110,
  We = _ ? Symbol.for("react.async_mode") : 60111,
  Se = _ ? Symbol.for("react.concurrent_mode") : 60111,
  ve = _ ? Symbol.for("react.forward_ref") : 60112,
  we = _ ? Symbol.for("react.suspense") : 60113,
  un = _ ? Symbol.for("react.suspense_list") : 60120,
  _e = _ ? Symbol.for("react.memo") : 60115,
  $e = _ ? Symbol.for("react.lazy") : 60116,
  ln = _ ? Symbol.for("react.block") : 60121,
  dn = _ ? Symbol.for("react.fundamental") : 60117,
  pn = _ ? Symbol.for("react.responder") : 60118,
  mn = _ ? Symbol.for("react.scope") : 60119;
function A(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case De:
        switch (((e = e.type), e)) {
          case We:
          case Se:
          case me:
          case ge:
          case ye:
          case we:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case he:
              case ve:
              case $e:
              case _e:
              case be:
                return e;
              default:
                return r;
            }
        }
      case Le:
        return r;
    }
  }
}
function Ir(e) {
  return A(e) === Se;
}
g.AsyncMode = We;
g.ConcurrentMode = Se;
g.ContextConsumer = he;
g.ContextProvider = be;
g.Element = De;
g.ForwardRef = ve;
g.Fragment = me;
g.Lazy = $e;
g.Memo = _e;
g.Portal = Le;
g.Profiler = ge;
g.StrictMode = ye;
g.Suspense = we;
g.isAsyncMode = function (e) {
  return Ir(e) || A(e) === We;
};
g.isConcurrentMode = Ir;
g.isContextConsumer = function (e) {
  return A(e) === he;
};
g.isContextProvider = function (e) {
  return A(e) === be;
};
g.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === De;
};
g.isForwardRef = function (e) {
  return A(e) === ve;
};
g.isFragment = function (e) {
  return A(e) === me;
};
g.isLazy = function (e) {
  return A(e) === $e;
};
g.isMemo = function (e) {
  return A(e) === _e;
};
g.isPortal = function (e) {
  return A(e) === Le;
};
g.isProfiler = function (e) {
  return A(e) === ge;
};
g.isStrictMode = function (e) {
  return A(e) === ye;
};
g.isSuspense = function (e) {
  return A(e) === we;
};
g.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === me ||
    e === Se ||
    e === ge ||
    e === ye ||
    e === we ||
    e === un ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === $e ||
        e.$$typeof === _e ||
        e.$$typeof === be ||
        e.$$typeof === he ||
        e.$$typeof === ve ||
        e.$$typeof === dn ||
        e.$$typeof === pn ||
        e.$$typeof === mn ||
        e.$$typeof === ln))
  );
};
g.typeOf = A;
Mr.exports = g;
var yn = Mr.exports,
  Nr = yn,
  gn = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  bn = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  zr = {};
zr[Nr.ForwardRef] = gn;
zr[Nr.Memo] = bn;
var hn = !0,
  Sn = function (r, t, n) {
    var o = r.key + "-" + t.name;
    (n === !1 || hn === !1) &&
      r.registered[o] === void 0 &&
      (r.registered[o] = t.styles);
  },
  vn = function (r, t, n) {
    Sn(r, t, n);
    var o = r.key + "-" + t.name;
    if (r.inserted[t.name] === void 0) {
      var a = t;
      do r.insert(t === a ? "." + o : "", a, r.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function wn(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (t =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      (t ^= t >>> 24),
      (r =
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (r ^= e.charCodeAt(n) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var _n = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  $n = /[A-Z]|^ms/g,
  kn = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Fr = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Qe = function (r) {
    return r != null && typeof r != "boolean";
  },
  Ce = en(function (e) {
    return Fr(e) ? e : e.replace($n, "-$&").toLowerCase();
  }),
  er = function (r, t) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(kn, function (n, o, a) {
            return (z = { name: o, styles: a, next: z }), o;
          });
    }
    return _n[r] !== 1 && !Fr(r) && typeof t == "number" && t !== 0
      ? t + "px"
      : t;
  };
function Y(e, r, t) {
  if (t == null) return "";
  if (t.__emotion_styles !== void 0) return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return (z = { name: t.name, styles: t.styles, next: z }), t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (z = { name: n.name, styles: n.styles, next: z }), (n = n.next);
        var o = t.styles + ";";
        return o;
      }
      return Cn(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var a = z,
          i = t(e);
        return (z = a), Y(e, r, i);
      }
      break;
    }
  }
  if (r == null) return t;
  var s = r[t];
  return s !== void 0 ? s : t;
}
function Cn(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++) n += Y(e, r, t[o]) + ";";
  else
    for (var a in t) {
      var i = t[a];
      if (typeof i != "object")
        r != null && r[i] !== void 0
          ? (n += a + "{" + r[i] + "}")
          : Qe(i) && (n += Ce(a) + ":" + er(a, i) + ";");
      else if (
        Array.isArray(i) &&
        typeof i[0] == "string" &&
        (r == null || r[i[0]] === void 0)
      )
        for (var s = 0; s < i.length; s++)
          Qe(i[s]) && (n += Ce(a) + ":" + er(a, i[s]) + ";");
      else {
        var c = Y(e, r, i);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Ce(a) + ":" + c + ";";
            break;
          }
          default:
            n += a + "{" + c + "}";
        }
      }
    }
  return n;
}
var rr = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  z,
  xn = function (r, t, n) {
    if (
      r.length === 1 &&
      typeof r[0] == "object" &&
      r[0] !== null &&
      r[0].styles !== void 0
    )
      return r[0];
    var o = !0,
      a = "";
    z = void 0;
    var i = r[0];
    i == null || i.raw === void 0 ? ((o = !1), (a += Y(n, t, i))) : (a += i[0]);
    for (var s = 1; s < r.length; s++) (a += Y(n, t, r[s])), o && (a += i[s]);
    rr.lastIndex = 0;
    for (var c = "", u; (u = rr.exec(a)) !== null; ) c += "-" + u[1];
    var f = wn(a) + c;
    return { name: f, styles: a, next: z };
  },
  Dr = h.createContext(typeof HTMLElement < "u" ? fn({ key: "css" }) : null);
Dr.Provider;
var On = function (r) {
    return h.forwardRef(function (t, n) {
      var o = h.useContext(Dr);
      return r(t, o, n);
    });
  },
  Re = h.createContext({}),
  En = function (r, t) {
    if (typeof t == "function") {
      var n = t(r);
      return n;
    }
    return Jr({}, r, t);
  },
  Pn = Ze(function (e) {
    return Ze(function (r) {
      return En(e, r);
    });
  }),
  An = function (r) {
    var t = h.useContext(Re);
    return (
      r.theme !== t && (t = Pn(t)(r.theme)),
      h.createElement(Re.Provider, { value: t }, r.children)
    );
  },
  ke = On(function (e, r) {
    var t = e.styles,
      n = xn([t], void 0, h.useContext(Re)),
      o = h.useRef();
    return (
      He(
        function () {
          var a = r.key + "-global",
            i = new r.sheet.constructor({
              key: a,
              nonce: r.sheet.nonce,
              container: r.sheet.container,
              speedy: r.sheet.isSpeedy,
            }),
            s = !1,
            c = document.querySelector(
              'style[data-emotion="' + a + " " + n.name + '"]'
            );
          return (
            r.sheet.tags.length && (i.before = r.sheet.tags[0]),
            c !== null &&
              ((s = !0), c.setAttribute("data-emotion", a), i.hydrate([c])),
            (o.current = [i, s]),
            function () {
              i.flush();
            }
          );
        },
        [r]
      ),
      He(
        function () {
          var a = o.current,
            i = a[0],
            s = a[1];
          if (s) {
            a[1] = !1;
            return;
          }
          if ((n.next !== void 0 && vn(r, n.next, !0), i.tags.length)) {
            var c = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = c), i.flush();
          }
          r.insert("", n, i, !1);
        },
        [r, n.name]
      ),
      null
    );
  }),
  Rn = Object.defineProperty,
  Tn = Object.defineProperties,
  jn = Object.getOwnPropertyDescriptors,
  tr = Object.getOwnPropertySymbols,
  Mn = Object.prototype.hasOwnProperty,
  In = Object.prototype.propertyIsEnumerable,
  nr = (e, r, t) =>
    r in e
      ? Rn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Nn = (e, r) => {
    for (var t in r || (r = {})) Mn.call(r, t) && nr(e, t, r[t]);
    if (tr) for (var t of tr(r)) In.call(r, t) && nr(e, t, r[t]);
    return e;
  },
  zn = (e, r) => Tn(e, jn(r));
function Fn({ theme: e }) {
  return R.createElement(ke, {
    styles: {
      "*, *::before, *::after": { boxSizing: "border-box" },
      "html": { colorScheme: e.colorScheme === "dark" ? "dark" : "light" },
      "body": zn(Nn({}, e.fn.fontStyles()), {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        lineHeight: e.lineHeight,
        fontSize: e.fontSizes.md,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }),
    },
  });
}
function V(e, r, t, n = D) {
  Object.keys(r).forEach((o) => {
    e[`--mantine-${t}-${o}`] = n(r[o]);
  });
}
function Dn({ theme: e }) {
  const r = {
    "--mantine-color-white": e.white,
    "--mantine-color-black": e.black,
    "--mantine-transition-timing-function": e.transitionTimingFunction,
    "--mantine-line-height": `${e.lineHeight}`,
    "--mantine-font-family": e.fontFamily,
    "--mantine-font-family-monospace": e.fontFamilyMonospace,
    "--mantine-font-family-headings": e.headings.fontFamily,
    "--mantine-heading-font-weight": `${e.headings.fontWeight}`,
  };
  V(r, e.shadows, "shadow"),
    V(r, e.fontSizes, "font-size"),
    V(r, e.radius, "radius"),
    V(r, e.spacing, "spacing"),
    V(r, e.breakpoints, "breakpoints", ue),
    Object.keys(e.colors).forEach((n) => {
      e.colors[n].forEach((o, a) => {
        r[`--mantine-color-${n}-${a}`] = o;
      });
    });
  const t = e.headings.sizes;
  return (
    Object.keys(t).forEach((n) => {
      (r[`--mantine-${n}-font-size`] = t[n].fontSize),
        (r[`--mantine-${n}-line-height`] = `${t[n].lineHeight}`);
    }),
    R.createElement(ke, { styles: { ":root": r } })
  );
}
var Ln = Object.defineProperty,
  Wn = Object.defineProperties,
  Hn = Object.getOwnPropertyDescriptors,
  or = Object.getOwnPropertySymbols,
  Gn = Object.prototype.hasOwnProperty,
  Kn = Object.prototype.propertyIsEnumerable,
  ar = (e, r, t) =>
    r in e
      ? Ln(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  I = (e, r) => {
    for (var t in r || (r = {})) Gn.call(r, t) && ar(e, t, r[t]);
    if (or) for (var t of or(r)) Kn.call(r, t) && ar(e, t, r[t]);
    return e;
  },
  xe = (e, r) => Wn(e, Hn(r));
function Un(e, r) {
  var t;
  if (!r) return e;
  const n = Object.keys(e).reduce((o, a) => {
    if (a === "headings" && r.headings) {
      const i = r.headings.sizes
        ? Object.keys(e.headings.sizes).reduce(
            (s, c) => (
              (s[c] = I(I({}, e.headings.sizes[c]), r.headings.sizes[c])), s
            ),
            {}
          )
        : e.headings.sizes;
      return xe(I({}, o), {
        headings: xe(I(I({}, e.headings), r.headings), { sizes: i }),
      });
    }
    if (a === "breakpoints" && r.breakpoints) {
      const i = I(I({}, e.breakpoints), r.breakpoints);
      return xe(I({}, o), {
        breakpoints: Object.fromEntries(
          Object.entries(i).sort((s, c) => ie(s[1]) - ie(c[1]))
        ),
      });
    }
    return (
      (o[a] =
        typeof r[a] == "object"
          ? I(I({}, e[a]), r[a])
          : typeof r[a] == "number" ||
            typeof r[a] == "boolean" ||
            typeof r[a] == "function"
          ? r[a]
          : r[a] || e[a]),
      o
    );
  }, {});
  if (
    (r != null &&
      r.fontFamily &&
      !((t = r == null ? void 0 : r.headings) != null && t.fontFamily) &&
      (n.headings.fontFamily = r.fontFamily),
    !(n.primaryColor in n.colors))
  )
    throw new Error(
      "MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color"
    );
  return n;
}
function Vn(e, r) {
  return Cr(Un(e, r));
}
const qn = {
  "html": {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },
  "body": { margin: 0 },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block",
  },
  "h1": { fontSize: "2em" },
  "hr": { boxSizing: "content-box", height: 0, overflow: "visible" },
  "pre": { fontFamily: "monospace, monospace", fontSize: "1em" },
  "a": { background: "transparent", textDecorationSkip: "objects" },
  "a:active, a:hover": { outlineWidth: 0 },
  "abbr[title]": { borderBottom: "none", textDecoration: "underline" },
  "b, strong": { fontWeight: "bolder" },
  "code, kbp, samp": { fontFamily: "monospace, monospace", fontSize: "1em" },
  "dfn": { fontStyle: "italic" },
  "mark": { backgroundColor: "#ff0", color: "#000" },
  "small": { fontSize: "80%" },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  "sup": { top: "-0.5em" },
  "sub": { bottom: "-0.25em" },
  "audio, video": { display: "inline-block" },
  "audio:not([controls])": { display: "none", height: 0 },
  "img": { borderStyle: "none", verticalAlign: "middle" },
  "svg:not(:root)": { overflow: "hidden" },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0,
  },
  "button, input": { overflow: "visible" },
  "button, select": { textTransform: "none" },
  "button, [type=reset], [type=submit]": { WebkitAppearance: "button" },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":
    { borderStyle: "none", padding: 0 },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":
    { outline: `${D(1)} dotted ButtonText` },
  "legend": {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },
  "progress": { display: "inline-block", verticalAlign: "baseline" },
  "textarea": { overflow: "auto" },
  "[type=checkbox], [type=radio]": { boxSizing: "border-box", padding: 0 },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":
    { height: "auto" },
  "[type=search]": { appearance: "none" },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":
    { appearance: "none" },
  "::-webkit-file-upload-button": { appearance: "button", font: "inherit" },
  "details, menu": { display: "block" },
  "summary": { display: "list-item" },
  "canvas": { display: "inline-block" },
  "template": { display: "none" },
};
function Jn() {
  return R.createElement(ke, { styles: qn });
}
var Yn = Object.defineProperty,
  ir = Object.getOwnPropertySymbols,
  Xn = Object.prototype.hasOwnProperty,
  Zn = Object.prototype.propertyIsEnumerable,
  sr = (e, r, t) =>
    r in e
      ? Yn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  cr = (e, r) => {
    for (var t in r || (r = {})) Xn.call(r, t) && sr(e, t, r[t]);
    if (ir) for (var t of ir(r)) Zn.call(r, t) && sr(e, t, r[t]);
    return e;
  };
const fr = h.createContext({ theme: xr });
function Lr({
  theme: e,
  emotionCache: r,
  withNormalizeCSS: t = !1,
  withGlobalStyles: n = !1,
  withCSSVariables: o = !1,
  inherit: a = !1,
  children: i,
}) {
  const s = h.useContext(fr),
    c = Vn(xr, a ? cr(cr({}, s.theme), e) : e);
  return R.createElement(
    An,
    { theme: c },
    R.createElement(
      fr.Provider,
      { value: { theme: c, emotionCache: r } },
      t && R.createElement(Jn, null),
      n && R.createElement(Fn, { theme: c }),
      o && R.createElement(Dn, { theme: c }),
      typeof c.globalStyles == "function" &&
        R.createElement(ke, { styles: c.globalStyles(c) }),
      i
    )
  );
}
Lr.displayName = "@mantine/core/MantineProvider";
const Wr = h.createContext(null);
function Wo() {
  const e = h.useContext(Wr);
  if (!e)
    throw new Error(
      "useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component"
    );
  return e;
}
function Hr({ colorScheme: e, toggleColorScheme: r, children: t }) {
  return R.createElement(
    Wr.Provider,
    { value: { colorScheme: e, toggleColorScheme: r } },
    t
  );
}
Hr.displayName = "@mantine/core/ColorSchemeProvider";
function ur(e, r, t) {
  h.useEffect(
    () => (
      window.addEventListener(e, r, t),
      () => window.removeEventListener(e, r, t)
    ),
    [e, r]
  );
}
function Bn(e, r) {
  try {
    return JSON.stringify(e);
  } catch {
    throw new Error(`@mantine/hooks ${r}: Failed to serialize the value`);
  }
}
function Qn(e) {
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function eo(e, r) {
  const t =
    e === "localStorage" ? "mantine-local-storage" : "mantine-session-storage";
  return function ({
    key: o,
    defaultValue: a = void 0,
    getInitialValueInEffect: i = !0,
    deserialize: s = Qn,
    serialize: c = (u) => Bn(u, r),
  }) {
    const u = h.useCallback(
        (y) => {
          if (typeof window > "u" || !(e in window) || window[e] === null || y)
            return a;
          const l = window[e].getItem(o);
          return l !== null ? s(l) : a;
        },
        [o, a]
      ),
      [f, m] = h.useState(u(i)),
      O = h.useCallback(
        (y) => {
          y instanceof Function
            ? m((l) => {
                const $ = y(l);
                return (
                  window[e].setItem(o, c($)),
                  window.dispatchEvent(
                    new CustomEvent(t, { detail: { key: o, value: y(l) } })
                  ),
                  $
                );
              })
            : (window[e].setItem(o, c(y)),
              window.dispatchEvent(
                new CustomEvent(t, { detail: { key: o, value: y } })
              ),
              m(y));
        },
        [o]
      ),
      T = h.useCallback(() => {
        window[e].removeItem(o),
          window.dispatchEvent(
            new CustomEvent(t, { detail: { key: o, value: a } })
          );
      }, []);
    return (
      ur("storage", (y) => {
        var l;
        y.storageArea === window[e] &&
          y.key === o &&
          m(s((l = y.newValue) != null ? l : void 0));
      }),
      ur(t, (y) => {
        y.detail.key === o && m(y.detail.value);
      }),
      h.useEffect(() => {
        a !== void 0 && f === void 0 && O(a);
      }, [a, f, O]),
      h.useEffect(() => {
        i && m(u());
      }, [o]),
      [f === void 0 ? a : f, O, T]
    );
  };
}
function ro(e) {
  return eo("localStorage", "use-local-storage")(e);
}
var to = Object.defineProperty,
  no = Object.defineProperties,
  oo = Object.getOwnPropertyDescriptors,
  lr = Object.getOwnPropertySymbols,
  ao = Object.prototype.hasOwnProperty,
  io = Object.prototype.propertyIsEnumerable,
  dr = (e, r, t) =>
    r in e
      ? to(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  so = (e, r) => {
    for (var t in r || (r = {})) ao.call(r, t) && dr(e, t, r[t]);
    if (lr) for (var t of lr(r)) io.call(r, t) && dr(e, t, r[t]);
    return e;
  },
  co = (e, r) => no(e, oo(r));
function fo(e) {
  const r = e
      .toLowerCase()
      .split("+")
      .map((a) => a.trim()),
    t = {
      alt: r.includes("alt"),
      ctrl: r.includes("ctrl"),
      meta: r.includes("meta"),
      mod: r.includes("mod"),
      shift: r.includes("shift"),
    },
    n = ["alt", "ctrl", "meta", "shift", "mod"],
    o = r.find((a) => !n.includes(a));
  return co(so({}, t), { key: o });
}
function uo(e, r) {
  const { alt: t, ctrl: n, meta: o, mod: a, shift: i, key: s } = e,
    { altKey: c, ctrlKey: u, metaKey: f, shiftKey: m, key: O } = r;
  if (t !== c) return !1;
  if (a) {
    if (!u && !f) return !1;
  } else if (n !== u || o !== f) return !1;
  return i !== m
    ? !1
    : !!(
        s &&
        (O.toLowerCase() === s.toLowerCase() ||
          r.code.replace("Key", "").toLowerCase() === s.toLowerCase())
      );
}
function lo(e) {
  return (r) => uo(fo(e), r);
}
function po(e, r, t = !1) {
  return e.target instanceof HTMLElement
    ? (t || !e.target.isContentEditable) && !r.includes(e.target.tagName)
    : !0;
}
function mo(e, r = ["INPUT", "TEXTAREA", "SELECT"], t = !1) {
  h.useEffect(() => {
    const n = (o) => {
      e.forEach(([a, i, s = { preventDefault: !0 }]) => {
        lo(a)(o) &&
          po(o, r, t) &&
          (s.preventDefault && o.preventDefault(), i(o));
      });
    };
    return (
      document.documentElement.addEventListener("keydown", n),
      () => document.documentElement.removeEventListener("keydown", n)
    );
  }, [e]);
}
var pr = "DARK_MODE",
  yo = function e(r, t) {
    if (r === t) return !0;
    if (r && t && typeof r == "object" && typeof t == "object") {
      if (r.constructor !== t.constructor) return !1;
      var n, o, a;
      if (Array.isArray(r)) {
        if (((n = r.length), n != t.length)) return !1;
        for (o = n; o-- !== 0; ) if (!e(r[o], t[o])) return !1;
        return !0;
      }
      if (r.constructor === RegExp)
        return r.source === t.source && r.flags === t.flags;
      if (r.valueOf !== Object.prototype.valueOf)
        return r.valueOf() === t.valueOf();
      if (r.toString !== Object.prototype.toString)
        return r.toString() === t.toString();
      if (((a = Object.keys(r)), (n = a.length), n !== Object.keys(t).length))
        return !1;
      for (o = n; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, a[o])) return !1;
      for (o = n; o-- !== 0; ) {
        var i = a[o];
        if (!e(r[i], t[i])) return !1;
      }
      return !0;
    }
    return r !== r && t !== t;
  };
const mr = qr(yo);
function X(e) {
  "@babel/helpers - typeof";
  return (
    (X =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    X(e)
  );
}
var Oe;
function yr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function gr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? yr(Object(t), !0).forEach(function (n) {
          go(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : yr(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function go(e, r, t) {
  return (
    (r = bo(r)),
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function bo(e) {
  var r = ho(e, "string");
  return X(r) === "symbol" ? r : String(r);
}
function ho(e, r) {
  if (X(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (X(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function re(e) {
  return _o(e) || wo(e) || vo(e) || So();
}
function So() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vo(e, r) {
  if (e) {
    if (typeof e == "string") return Te(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === "Object" && e.constructor && (t = e.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Te(e, r);
  }
}
function wo(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _o(e) {
  if (Array.isArray(e)) return Te(e);
}
function Te(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
__STORYBOOK_MODULE_CORE_EVENTS__;
var Gr = Vr,
  $o = Gr.document,
  ce = Gr.window,
  Kr = "sb-addon-themes-3";
(Oe = ce.matchMedia) === null ||
  Oe === void 0 ||
  Oe.call(ce, "(prefers-color-scheme: dark)");
var je = {
    classTarget: "body",
    dark: Ge.dark,
    darkClass: ["dark"],
    light: Ge.light,
    lightClass: ["light"],
    stylePreview: !1,
    userHasExplicitlySetTheTheme: !1,
  },
  br = function (r) {
    ce.localStorage.setItem(Kr, JSON.stringify(r));
  },
  ko = function (r, t) {
    var n = t.current,
      o = t.darkClass,
      a = o === void 0 ? je.darkClass : o,
      i = t.lightClass,
      s = i === void 0 ? je.lightClass : i;
    if (n === "dark") {
      var c, u;
      (c = r.classList).remove.apply(c, re(te(s))),
        (u = r.classList).add.apply(u, re(te(a)));
    } else {
      var f, m;
      (f = r.classList).remove.apply(f, re(te(a))),
        (m = r.classList).add.apply(m, re(te(s)));
    }
  },
  te = function (r) {
    var t = [];
    return t.concat(r).map(function (n) {
      return n;
    });
  },
  Co = function (r) {
    var t = $o.querySelector(r.classTarget);
    t && ko(t, r);
  },
  Ur = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = ce.localStorage.getItem(Kr);
    if (typeof t == "string") {
      var n = JSON.parse(t);
      return (
        r &&
          (r.dark && !mr(n.dark, r.dark) && ((n.dark = r.dark), br(n)),
          r.light && !mr(n.light, r.light) && ((n.light = r.light), br(n))),
        n
      );
    }
    return gr(gr({}, je), r);
  };
Co(Ur());
function xo(e, r) {
  return Ao(e) || Po(e, r) || Eo(e, r) || Oo();
}
function Oo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eo(e, r) {
  if (e) {
    if (typeof e == "string") return hr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === "Object" && e.constructor && (t = e.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return hr(e, r);
  }
}
function hr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Po(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (t != null) {
    var n,
      o,
      a,
      i,
      s = [],
      c = !0,
      u = !1;
    try {
      if (((a = (t = t.call(e)).next), r === 0)) {
        if (Object(t) !== t) return;
        c = !1;
      } else
        for (
          ;
          !(c = (n = a.call(t)).done) && (s.push(n.value), s.length !== r);
          c = !0
        );
    } catch (f) {
      (u = !0), (o = f);
    } finally {
      try {
        if (!c && t.return != null && ((i = t.return()), Object(i) !== i))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function Ao(e) {
  if (Array.isArray(e)) return e;
}
const { addons: Ro } = __STORYBOOK_MODULE_ADDONS__;
function To() {
  var e = R.useState(Ur().current === "dark"),
    r = xo(e, 2),
    t = r[0],
    n = r[1];
  return (
    R.useEffect(function () {
      var o = Ro.getChannel();
      return (
        o.on(pr, n),
        function () {
          return o.off(pr, n);
        }
      );
    }, []),
    t
  );
}
const jo = { primaryColor: "orange", defaultRadius: 0 };
function Mo(e) {
  const r = To() ? "dark" : "light",
    [t, n] = ro({ key: "storybook-color-scheme", defaultValue: r }),
    o = () => {
      const a = t === "dark" ? "light" : "dark";
      console.log(`Changing color scheme from ${t} -> ${a}`), n(a);
    };
  return (
    mo([["mod+J", () => o()]]),
    Ee(Hr, {
      colorScheme: t,
      toggleColorScheme: o,
      children: Ee(Lr, {
        theme: { ...jo, colorScheme: t },
        withGlobalStyles: !0,
        withNormalizeCSS: !0,
        children: e.children,
      }),
    })
  );
}
const Io = [(e) => Ee(Mo, { children: e() })],
  No = {
    parameters: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
      msw: { handlers: [] },
    },
  },
  Ho = Object.freeze(
    Object.defineProperty(
      { __proto__: null, decorators: Io, default: No },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { Io as d, Ee as j, Ho as p, Wo as u };
//# sourceMappingURL=preview-35a99a87.js.map
