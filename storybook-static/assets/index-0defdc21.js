import { R as ke } from "./index-61bf1805.js";
import { P as O } from "./index-8d47fad6.js";
import {
  a as X,
  p as J,
  r as st,
  s as he,
  c as Ct,
  b as le,
  d as nt,
  e as Vn,
  m as M,
  f as H,
  g as Un,
  h as an,
  i as Qn,
  j as rt,
  k as A,
  l as Y,
  n as be,
  o as Ne,
  q as Wn,
  t as Gn,
  u as Xn,
  v as ct,
  w as Yn,
  x as Jn,
  y as Kn,
  z as Zn,
  A as er,
  B as tr,
} from "./Markdown.stories-d8affc88.js";
import { g as _e } from "./_commonjsHelpers-de833af9.js";
import "./preview-35a99a87.js";
import "./index-d475d2ea.js";
import "./chunk-6P7RB4HF-150ba47c.js";
import "./iframe-5ac5d544.js";
import "../sb-preview/runtime.js";
import "./_commonjs-dynamic-modules-302442b1.js";
const It = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink",
};
function we(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let u = "";
    if (l === 37 && X(e.charCodeAt(n + 1)) && X(e.charCodeAt(n + 2))) i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
        (u = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(n + 1);
      l < 56320 && a > 56319 && a < 57344
        ? ((u = String.fromCharCode(l, a)), (i = 1))
        : (u = "�");
    } else u = String.fromCharCode(l);
    u &&
      (t.push(e.slice(r, n), encodeURIComponent(u)), (r = n + i + 1), (u = "")),
      i && ((n += i), (i = 0));
  }
  return t.join("") + e.slice(r);
}
const it = { name: "attention", tokenize: rr, resolveAll: nr };
function nr(e, t) {
  let n = -1,
    r,
    i,
    l,
    u,
    a,
    s,
    o,
    c;
  for (; ++n < e.length; )
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const m = Object.assign({}, e[r][1].end),
            g = Object.assign({}, e[n][1].start);
          Tt(m, -s),
            Tt(g, s),
            (u = {
              type: s > 1 ? "strongSequence" : "emphasisSequence",
              start: m,
              end: Object.assign({}, e[r][1].end),
            }),
            (a = {
              type: s > 1 ? "strongSequence" : "emphasisSequence",
              start: Object.assign({}, e[n][1].start),
              end: g,
            }),
            (l = {
              type: s > 1 ? "strongText" : "emphasisText",
              start: Object.assign({}, e[r][1].end),
              end: Object.assign({}, e[n][1].start),
            }),
            (i = {
              type: s > 1 ? "strong" : "emphasis",
              start: Object.assign({}, u.start),
              end: Object.assign({}, a.end),
            }),
            (e[r][1].end = Object.assign({}, u.start)),
            (e[n][1].start = Object.assign({}, a.end)),
            (o = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (o = J(o, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (o = J(o, [
              ["enter", i, t],
              ["enter", u, t],
              ["exit", u, t],
              ["enter", l, t],
            ])),
            (o = J(
              o,
              st(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)
            )),
            (o = J(o, [
              ["exit", l, t],
              ["enter", a, t],
              ["exit", a, t],
              ["exit", i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((c = 2),
                (o = J(o, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (c = 0),
            he(e, r - 1, n - r + 3, o),
            (n = r + o.length - c - 2);
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function rr(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Ct(r);
  let l;
  return u;
  function u(s) {
    return (l = s), e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === l) return e.consume(s), a;
    const o = e.exit("attentionSequence"),
      c = Ct(s),
      m = !c || (c === 2 && i) || n.includes(s),
      g = !i || (i === 2 && c) || n.includes(r);
    return (
      (o._open = !!(l === 42 ? m : m && (i || !g))),
      (o._close = !!(l === 42 ? g : g && (c || !m))),
      t(s)
    );
  }
}
function Tt(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const ir = { name: "autolink", tokenize: lr };
function lr(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(h),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      l
    );
  }
  function l(h) {
    return le(h) ? (e.consume(h), u) : o(h);
  }
  function u(h) {
    return h === 43 || h === 45 || h === 46 || X(h) ? ((r = 1), a(h)) : o(h);
  }
  function a(h) {
    return h === 58
      ? (e.consume(h), (r = 0), s)
      : (h === 43 || h === 45 || h === 46 || X(h)) && r++ < 32
      ? (e.consume(h), a)
      : ((r = 0), o(h));
  }
  function s(h) {
    return h === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : h === null || h === 32 || h === 60 || nt(h)
      ? n(h)
      : (e.consume(h), s);
  }
  function o(h) {
    return h === 64 ? (e.consume(h), c) : Vn(h) ? (e.consume(h), o) : n(h);
  }
  function c(h) {
    return X(h) ? m(h) : n(h);
  }
  function m(h) {
    return h === 46
      ? (e.consume(h), (r = 0), c)
      : h === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : g(h);
  }
  function g(h) {
    if ((h === 45 || X(h)) && r++ < 63) {
      const w = h === 45 ? g : m;
      return e.consume(h), w;
    }
    return n(h);
  }
}
const on = {
  name: "blockQuote",
  tokenize: ur,
  continuation: { tokenize: ar },
  exit: or,
};
function ur(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    if (u === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(u),
        e.exit("blockQuoteMarker"),
        l
      );
    }
    return n(u);
  }
  function l(u) {
    return M(u)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(u),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(u));
  }
}
function ar(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return M(u)
      ? H(
          e,
          l,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(u)
      : l(u);
  }
  function l(u) {
    return e.attempt(on, t, n)(u);
  }
}
function or(e) {
  e.exit("blockQuote");
}
const sn = { name: "characterEscape", tokenize: sr };
function sr(e, t, n) {
  return r;
  function r(l) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(l),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(l) {
    return Un(l)
      ? (e.enter("characterEscapeValue"),
        e.consume(l),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(l);
  }
}
const cn = { name: "characterReference", tokenize: cr };
function cr(e, t, n) {
  const r = this;
  let i = 0,
    l,
    u;
  return a;
  function a(m) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(m),
      e.exit("characterReferenceMarker"),
      s
    );
  }
  function s(m) {
    return m === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(m),
        e.exit("characterReferenceMarkerNumeric"),
        o)
      : (e.enter("characterReferenceValue"), (l = 31), (u = X), c(m));
  }
  function o(m) {
    return m === 88 || m === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(m),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (l = 6),
        (u = Qn),
        c)
      : (e.enter("characterReferenceValue"), (l = 7), (u = rt), c(m));
  }
  function c(m) {
    if (m === 59 && i) {
      const g = e.exit("characterReferenceValue");
      return u === X && !an(r.sliceSerialize(g))
        ? n(m)
        : (e.enter("characterReferenceMarker"),
          e.consume(m),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return u(m) && i++ < l ? (e.consume(m), c) : n(m);
  }
}
const zt = { tokenize: pr, partial: !0 },
  At = { name: "codeFenced", tokenize: fr, concrete: !0 };
function fr(e, t, n) {
  const r = this,
    i = { tokenize: N, partial: !0 };
  let l = 0,
    u = 0,
    a;
  return s;
  function s(d) {
    return o(d);
  }
  function o(d) {
    const T = r.events[r.events.length - 1];
    return (
      (l =
        T && T[1].type === "linePrefix"
          ? T[2].sliceSerialize(T[1], !0).length
          : 0),
      (a = d),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      c(d)
    );
  }
  function c(d) {
    return d === a
      ? (u++, e.consume(d), c)
      : u < 3
      ? n(d)
      : (e.exit("codeFencedFenceSequence"),
        M(d) ? H(e, m, "whitespace")(d) : m(d));
  }
  function m(d) {
    return d === null || A(d)
      ? (e.exit("codeFencedFence"), r.interrupt ? t(d) : e.check(zt, x, F)(d))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        g(d));
  }
  function g(d) {
    return d === null || A(d)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), m(d))
      : M(d)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        H(e, h, "whitespace")(d))
      : d === 96 && d === a
      ? n(d)
      : (e.consume(d), g);
  }
  function h(d) {
    return d === null || A(d)
      ? m(d)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        w(d));
  }
  function w(d) {
    return d === null || A(d)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(d))
      : d === 96 && d === a
      ? n(d)
      : (e.consume(d), w);
  }
  function x(d) {
    return e.attempt(i, F, S)(d);
  }
  function S(d) {
    return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), k;
  }
  function k(d) {
    return l > 0 && M(d) ? H(e, P, "linePrefix", l + 1)(d) : P(d);
  }
  function P(d) {
    return d === null || A(d)
      ? e.check(zt, x, F)(d)
      : (e.enter("codeFlowValue"), E(d));
  }
  function E(d) {
    return d === null || A(d)
      ? (e.exit("codeFlowValue"), P(d))
      : (e.consume(d), E);
  }
  function F(d) {
    return e.exit("codeFenced"), t(d);
  }
  function N(d, T, L) {
    let B = 0;
    return V;
    function V(_) {
      return d.enter("lineEnding"), d.consume(_), d.exit("lineEnding"), C;
    }
    function C(_) {
      return (
        d.enter("codeFencedFence"),
        M(_)
          ? H(
              d,
              I,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(_)
          : I(_)
      );
    }
    function I(_) {
      return _ === a ? (d.enter("codeFencedFenceSequence"), $(_)) : L(_);
    }
    function $(_) {
      return _ === a
        ? (B++, d.consume(_), $)
        : B >= u
        ? (d.exit("codeFencedFenceSequence"),
          M(_) ? H(d, q, "whitespace")(_) : q(_))
        : L(_);
    }
    function q(_) {
      return _ === null || A(_) ? (d.exit("codeFencedFence"), T(_)) : L(_);
    }
  }
}
function pr(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return u === null
      ? n(u)
      : (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), l);
  }
  function l(u) {
    return r.parser.lazy[r.now().line] ? n(u) : t(u);
  }
}
const We = { name: "codeIndented", tokenize: mr },
  hr = { tokenize: gr, partial: !0 };
function mr(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("codeIndented"), H(e, l, "linePrefix", 4 + 1)(o);
  }
  function l(o) {
    const c = r.events[r.events.length - 1];
    return c &&
      c[1].type === "linePrefix" &&
      c[2].sliceSerialize(c[1], !0).length >= 4
      ? u(o)
      : n(o);
  }
  function u(o) {
    return o === null
      ? s(o)
      : A(o)
      ? e.attempt(hr, u, s)(o)
      : (e.enter("codeFlowValue"), a(o));
  }
  function a(o) {
    return o === null || A(o)
      ? (e.exit("codeFlowValue"), u(o))
      : (e.consume(o), a);
  }
  function s(o) {
    return e.exit("codeIndented"), t(o);
  }
}
function gr(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return r.parser.lazy[r.now().line]
      ? n(u)
      : A(u)
      ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), i)
      : H(e, l, "linePrefix", 4 + 1)(u);
  }
  function l(u) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(u)
      : A(u)
      ? i(u)
      : n(u);
  }
}
const dr = { name: "codeText", tokenize: kr, resolve: yr, previous: xr };
function yr(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        (e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2);
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function xr(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function kr(e, t, n) {
  let r = 0,
    i,
    l;
  return u;
  function u(m) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(m);
  }
  function a(m) {
    return m === 96
      ? (e.consume(m), r++, a)
      : (e.exit("codeTextSequence"), s(m));
  }
  function s(m) {
    return m === null
      ? n(m)
      : m === 32
      ? (e.enter("space"), e.consume(m), e.exit("space"), s)
      : m === 96
      ? ((l = e.enter("codeTextSequence")), (i = 0), c(m))
      : A(m)
      ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), s)
      : (e.enter("codeTextData"), o(m));
  }
  function o(m) {
    return m === null || m === 32 || m === 96 || A(m)
      ? (e.exit("codeTextData"), s(m))
      : (e.consume(m), o);
  }
  function c(m) {
    return m === 96
      ? (e.consume(m), i++, c)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), t(m))
      : ((l.type = "codeTextData"), o(m));
  }
}
function fn(e) {
  const t = {};
  let n = -1,
    r,
    i,
    l,
    u,
    a,
    s,
    o;
  for (; ++n < e.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = e[n]),
      n &&
        r[1].type === "chunkFlow" &&
        e[n - 1][1].type === "listItemPrefix" &&
        ((s = r[1]._tokenizer.events),
        (l = 0),
        l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2),
        l < s.length && s[l][1].type === "content"))
    )
      for (; ++l < s.length && s[l][1].type !== "content"; )
        s[l][1].type === "chunkText" &&
          ((s[l][1]._isInFirstContentOfListItem = !0), l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, br(e, n)), (n = t[n]), (o = !0));
    else if (r[1]._container) {
      for (
        l = n, i = void 0;
        l-- &&
        ((u = e[l]),
        u[1].type === "lineEnding" || u[1].type === "lineEndingBlank");

      )
        u[0] === "enter" &&
          (i && (e[i][1].type = "lineEndingBlank"),
          (u[1].type = "lineEnding"),
          (i = l));
      i &&
        ((r[1].end = Object.assign({}, e[i][1].start)),
        (a = e.slice(i, n)),
        a.unshift(r),
        he(e, i, n - i + 1, a));
    }
  }
  return !o;
}
function br(e, t) {
  const n = e[t][1],
    r = e[t][2];
  let i = t - 1;
  const l = [],
    u = n._tokenizer || r.parser[n.contentType](n.start),
    a = u.events,
    s = [],
    o = {};
  let c,
    m,
    g = -1,
    h = n,
    w = 0,
    x = 0;
  const S = [x];
  for (; h; ) {
    for (; e[++i][1] !== h; );
    l.push(i),
      h._tokenizer ||
        ((c = r.sliceStream(h)),
        h.next || c.push(null),
        m && u.defineSkip(h.start),
        h._isInFirstContentOfListItem &&
          (u._gfmTasklistFirstContentOfListItem = !0),
        u.write(c),
        h._isInFirstContentOfListItem &&
          (u._gfmTasklistFirstContentOfListItem = void 0)),
      (m = h),
      (h = h.next);
  }
  for (h = n; ++g < a.length; )
    a[g][0] === "exit" &&
      a[g - 1][0] === "enter" &&
      a[g][1].type === a[g - 1][1].type &&
      a[g][1].start.line !== a[g][1].end.line &&
      ((x = g + 1),
      S.push(x),
      (h._tokenizer = void 0),
      (h.previous = void 0),
      (h = h.next));
  for (
    u.events = [],
      h ? ((h._tokenizer = void 0), (h.previous = void 0)) : S.pop(),
      g = S.length;
    g--;

  ) {
    const k = a.slice(S[g], S[g + 1]),
      P = l.pop();
    s.unshift([P, P + k.length - 1]), he(e, P, 2, k);
  }
  for (g = -1; ++g < s.length; )
    (o[w + s[g][0]] = w + s[g][1]), (w += s[g][1] - s[g][0] - 1);
  return o;
}
const wr = { tokenize: Cr, resolve: Er },
  Sr = { tokenize: Ir, partial: !0 };
function Er(e) {
  return fn(e), e;
}
function Cr(e, t) {
  let n;
  return r;
  function r(a) {
    return (
      e.enter("content"),
      (n = e.enter("chunkContent", { contentType: "content" })),
      i(a)
    );
  }
  function i(a) {
    return a === null ? l(a) : A(a) ? e.check(Sr, u, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function u(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function Ir(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(u),
      e.exit("lineEnding"),
      H(e, l, "linePrefix")
    );
  }
  function l(u) {
    if (u === null || A(u)) return n(u);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(u)
      : e.interrupt(r.parser.constructs.flow, n, t)(u);
  }
}
function pn(e, t, n, r, i, l, u, a, s) {
  const o = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return m;
  function m(k) {
    return k === 60
      ? (e.enter(r), e.enter(i), e.enter(l), e.consume(k), e.exit(l), g)
      : k === null || k === 32 || k === 41 || nt(k)
      ? n(k)
      : (e.enter(r),
        e.enter(u),
        e.enter(a),
        e.enter("chunkString", { contentType: "string" }),
        x(k));
  }
  function g(k) {
    return k === 62
      ? (e.enter(l), e.consume(k), e.exit(l), e.exit(i), e.exit(r), t)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), h(k));
  }
  function h(k) {
    return k === 62
      ? (e.exit("chunkString"), e.exit(a), g(k))
      : k === null || k === 60 || A(k)
      ? n(k)
      : (e.consume(k), k === 92 ? w : h);
  }
  function w(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), h) : h(k);
  }
  function x(k) {
    return !c && (k === null || k === 41 || Y(k))
      ? (e.exit("chunkString"), e.exit(a), e.exit(u), e.exit(r), t(k))
      : c < o && k === 40
      ? (e.consume(k), c++, x)
      : k === 41
      ? (e.consume(k), c--, x)
      : k === null || k === 32 || k === 40 || nt(k)
      ? n(k)
      : (e.consume(k), k === 92 ? S : x);
  }
  function S(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), x) : x(k);
  }
}
function hn(e, t, n, r, i, l) {
  const u = this;
  let a = 0,
    s;
  return o;
  function o(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(l), c;
  }
  function c(h) {
    return a > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !s) ||
      (h === 94 && !a && "_hiddenFootnoteSupport" in u.parser.constructs)
      ? n(h)
      : h === 93
      ? (e.exit(l), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t)
      : A(h)
      ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c)
      : (e.enter("chunkString", { contentType: "string" }), m(h));
  }
  function m(h) {
    return h === null || h === 91 || h === 93 || A(h) || a++ > 999
      ? (e.exit("chunkString"), c(h))
      : (e.consume(h), s || (s = !M(h)), h === 92 ? g : m);
  }
  function g(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, m) : m(h);
  }
}
function mn(e, t, n, r, i, l) {
  let u;
  return a;
  function a(g) {
    return g === 34 || g === 39 || g === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(g),
        e.exit(i),
        (u = g === 40 ? 41 : g),
        s)
      : n(g);
  }
  function s(g) {
    return g === u
      ? (e.enter(i), e.consume(g), e.exit(i), e.exit(r), t)
      : (e.enter(l), o(g));
  }
  function o(g) {
    return g === u
      ? (e.exit(l), s(u))
      : g === null
      ? n(g)
      : A(g)
      ? (e.enter("lineEnding"),
        e.consume(g),
        e.exit("lineEnding"),
        H(e, o, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), c(g));
  }
  function c(g) {
    return g === u || g === null || A(g)
      ? (e.exit("chunkString"), o(g))
      : (e.consume(g), g === 92 ? m : c);
  }
  function m(g) {
    return g === u || g === 92 ? (e.consume(g), c) : c(g);
  }
}
function Ie(e, t) {
  let n;
  return r;
  function r(i) {
    return A(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
      : M(i)
      ? H(e, r, n ? "linePrefix" : "lineSuffix")(i)
      : t(i);
  }
}
const Tr = { name: "definition", tokenize: Ar },
  zr = { tokenize: Or, partial: !0 };
function Ar(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(h) {
    return e.enter("definition"), u(h);
  }
  function u(h) {
    return hn.call(
      r,
      e,
      a,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function a(h) {
    return (
      (i = be(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      h === 58
        ? (e.enter("definitionMarker"),
          e.consume(h),
          e.exit("definitionMarker"),
          s)
        : n(h)
    );
  }
  function s(h) {
    return Y(h) ? Ie(e, o)(h) : o(h);
  }
  function o(h) {
    return pn(
      e,
      c,
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function c(h) {
    return e.attempt(zr, m, m)(h);
  }
  function m(h) {
    return M(h) ? H(e, g, "whitespace")(h) : g(h);
  }
  function g(h) {
    return h === null || A(h)
      ? (e.exit("definition"), r.parser.defined.push(i), t(h))
      : n(h);
  }
}
function Or(e, t, n) {
  return r;
  function r(a) {
    return Y(a) ? Ie(e, i)(a) : n(a);
  }
  function i(a) {
    return mn(
      e,
      l,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function l(a) {
    return M(a) ? H(e, u, "whitespace")(a) : u(a);
  }
  function u(a) {
    return a === null || A(a) ? t(a) : n(a);
  }
}
const Pr = { name: "hardBreakEscape", tokenize: Lr };
function Lr(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return A(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Fr = { name: "headingAtx", tokenize: _r, resolve: Nr };
function Nr(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    l;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
      (l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text",
      }),
      he(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", l, t],
        ["exit", l, t],
        ["exit", i, t],
      ])),
    e
  );
}
function _r(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), l(c);
  }
  function l(c) {
    return e.enter("atxHeadingSequence"), u(c);
  }
  function u(c) {
    return c === 35 && r++ < 6
      ? (e.consume(c), u)
      : c === null || Y(c)
      ? (e.exit("atxHeadingSequence"), a(c))
      : n(c);
  }
  function a(c) {
    return c === 35
      ? (e.enter("atxHeadingSequence"), s(c))
      : c === null || A(c)
      ? (e.exit("atxHeading"), t(c))
      : M(c)
      ? H(e, a, "whitespace")(c)
      : (e.enter("atxHeadingText"), o(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function o(c) {
    return c === null || c === 35 || Y(c)
      ? (e.exit("atxHeadingText"), a(c))
      : (e.consume(c), o);
  }
}
const Br = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Ot = ["pre", "script", "style", "textarea"],
  Dr = { name: "htmlFlow", tokenize: Hr, resolveTo: jr, concrete: !0 },
  Rr = { tokenize: qr, partial: !0 },
  Mr = { tokenize: $r, partial: !0 };
function jr(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function Hr(e, t, n) {
  const r = this;
  let i, l, u, a, s;
  return o;
  function o(p) {
    return c(p);
  }
  function c(p) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(p), m;
  }
  function m(p) {
    return p === 33
      ? (e.consume(p), g)
      : p === 47
      ? (e.consume(p), (l = !0), x)
      : p === 63
      ? (e.consume(p), (i = 3), r.interrupt ? t : f)
      : le(p)
      ? (e.consume(p), (u = String.fromCharCode(p)), S)
      : n(p);
  }
  function g(p) {
    return p === 45
      ? (e.consume(p), (i = 2), h)
      : p === 91
      ? (e.consume(p), (i = 5), (a = 0), w)
      : le(p)
      ? (e.consume(p), (i = 4), r.interrupt ? t : f)
      : n(p);
  }
  function h(p) {
    return p === 45 ? (e.consume(p), r.interrupt ? t : f) : n(p);
  }
  function w(p) {
    const ne = "CDATA[";
    return p === ne.charCodeAt(a++)
      ? (e.consume(p), a === ne.length ? (r.interrupt ? t : I) : w)
      : n(p);
  }
  function x(p) {
    return le(p) ? (e.consume(p), (u = String.fromCharCode(p)), S) : n(p);
  }
  function S(p) {
    if (p === null || p === 47 || p === 62 || Y(p)) {
      const ne = p === 47,
        ge = u.toLowerCase();
      return !ne && !l && Ot.includes(ge)
        ? ((i = 1), r.interrupt ? t(p) : I(p))
        : Br.includes(u.toLowerCase())
        ? ((i = 6), ne ? (e.consume(p), k) : r.interrupt ? t(p) : I(p))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? n(p) : l ? P(p) : E(p));
    }
    return p === 45 || X(p)
      ? (e.consume(p), (u += String.fromCharCode(p)), S)
      : n(p);
  }
  function k(p) {
    return p === 62 ? (e.consume(p), r.interrupt ? t : I) : n(p);
  }
  function P(p) {
    return M(p) ? (e.consume(p), P) : V(p);
  }
  function E(p) {
    return p === 47
      ? (e.consume(p), V)
      : p === 58 || p === 95 || le(p)
      ? (e.consume(p), F)
      : M(p)
      ? (e.consume(p), E)
      : V(p);
  }
  function F(p) {
    return p === 45 || p === 46 || p === 58 || p === 95 || X(p)
      ? (e.consume(p), F)
      : N(p);
  }
  function N(p) {
    return p === 61 ? (e.consume(p), d) : M(p) ? (e.consume(p), N) : E(p);
  }
  function d(p) {
    return p === null || p === 60 || p === 61 || p === 62 || p === 96
      ? n(p)
      : p === 34 || p === 39
      ? (e.consume(p), (s = p), T)
      : M(p)
      ? (e.consume(p), d)
      : L(p);
  }
  function T(p) {
    return p === s
      ? (e.consume(p), (s = null), B)
      : p === null || A(p)
      ? n(p)
      : (e.consume(p), T);
  }
  function L(p) {
    return p === null ||
      p === 34 ||
      p === 39 ||
      p === 47 ||
      p === 60 ||
      p === 61 ||
      p === 62 ||
      p === 96 ||
      Y(p)
      ? N(p)
      : (e.consume(p), L);
  }
  function B(p) {
    return p === 47 || p === 62 || M(p) ? E(p) : n(p);
  }
  function V(p) {
    return p === 62 ? (e.consume(p), C) : n(p);
  }
  function C(p) {
    return p === null || A(p) ? I(p) : M(p) ? (e.consume(p), C) : n(p);
  }
  function I(p) {
    return p === 45 && i === 2
      ? (e.consume(p), W)
      : p === 60 && i === 1
      ? (e.consume(p), U)
      : p === 62 && i === 4
      ? (e.consume(p), te)
      : p === 63 && i === 3
      ? (e.consume(p), f)
      : p === 93 && i === 5
      ? (e.consume(p), ue)
      : A(p) && (i === 6 || i === 7)
      ? (e.exit("htmlFlowData"), e.check(Rr, ae, $)(p))
      : p === null || A(p)
      ? (e.exit("htmlFlowData"), $(p))
      : (e.consume(p), I);
  }
  function $(p) {
    return e.check(Mr, q, ae)(p);
  }
  function q(p) {
    return e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), _;
  }
  function _(p) {
    return p === null || A(p) ? $(p) : (e.enter("htmlFlowData"), I(p));
  }
  function W(p) {
    return p === 45 ? (e.consume(p), f) : I(p);
  }
  function U(p) {
    return p === 47 ? (e.consume(p), (u = ""), ee) : I(p);
  }
  function ee(p) {
    if (p === 62) {
      const ne = u.toLowerCase();
      return Ot.includes(ne) ? (e.consume(p), te) : I(p);
    }
    return le(p) && u.length < 8
      ? (e.consume(p), (u += String.fromCharCode(p)), ee)
      : I(p);
  }
  function ue(p) {
    return p === 93 ? (e.consume(p), f) : I(p);
  }
  function f(p) {
    return p === 62
      ? (e.consume(p), te)
      : p === 45 && i === 2
      ? (e.consume(p), f)
      : I(p);
  }
  function te(p) {
    return p === null || A(p)
      ? (e.exit("htmlFlowData"), ae(p))
      : (e.consume(p), te);
  }
  function ae(p) {
    return e.exit("htmlFlow"), t(p);
  }
}
function $r(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return A(u)
      ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), l)
      : n(u);
  }
  function l(u) {
    return r.parser.lazy[r.now().line] ? n(u) : t(u);
  }
}
function qr(e, t, n) {
  return r;
  function r(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      e.attempt(Ne, t, n)
    );
  }
}
const vr = { name: "htmlText", tokenize: Vr };
function Vr(e, t, n) {
  const r = this;
  let i, l, u;
  return a;
  function a(f) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(f), s;
  }
  function s(f) {
    return f === 33
      ? (e.consume(f), o)
      : f === 47
      ? (e.consume(f), N)
      : f === 63
      ? (e.consume(f), E)
      : le(f)
      ? (e.consume(f), L)
      : n(f);
  }
  function o(f) {
    return f === 45
      ? (e.consume(f), c)
      : f === 91
      ? (e.consume(f), (l = 0), w)
      : le(f)
      ? (e.consume(f), P)
      : n(f);
  }
  function c(f) {
    return f === 45 ? (e.consume(f), h) : n(f);
  }
  function m(f) {
    return f === null
      ? n(f)
      : f === 45
      ? (e.consume(f), g)
      : A(f)
      ? ((u = m), U(f))
      : (e.consume(f), m);
  }
  function g(f) {
    return f === 45 ? (e.consume(f), h) : m(f);
  }
  function h(f) {
    return f === 62 ? W(f) : f === 45 ? g(f) : m(f);
  }
  function w(f) {
    const te = "CDATA[";
    return f === te.charCodeAt(l++)
      ? (e.consume(f), l === te.length ? x : w)
      : n(f);
  }
  function x(f) {
    return f === null
      ? n(f)
      : f === 93
      ? (e.consume(f), S)
      : A(f)
      ? ((u = x), U(f))
      : (e.consume(f), x);
  }
  function S(f) {
    return f === 93 ? (e.consume(f), k) : x(f);
  }
  function k(f) {
    return f === 62 ? W(f) : f === 93 ? (e.consume(f), k) : x(f);
  }
  function P(f) {
    return f === null || f === 62
      ? W(f)
      : A(f)
      ? ((u = P), U(f))
      : (e.consume(f), P);
  }
  function E(f) {
    return f === null
      ? n(f)
      : f === 63
      ? (e.consume(f), F)
      : A(f)
      ? ((u = E), U(f))
      : (e.consume(f), E);
  }
  function F(f) {
    return f === 62 ? W(f) : E(f);
  }
  function N(f) {
    return le(f) ? (e.consume(f), d) : n(f);
  }
  function d(f) {
    return f === 45 || X(f) ? (e.consume(f), d) : T(f);
  }
  function T(f) {
    return A(f) ? ((u = T), U(f)) : M(f) ? (e.consume(f), T) : W(f);
  }
  function L(f) {
    return f === 45 || X(f)
      ? (e.consume(f), L)
      : f === 47 || f === 62 || Y(f)
      ? B(f)
      : n(f);
  }
  function B(f) {
    return f === 47
      ? (e.consume(f), W)
      : f === 58 || f === 95 || le(f)
      ? (e.consume(f), V)
      : A(f)
      ? ((u = B), U(f))
      : M(f)
      ? (e.consume(f), B)
      : W(f);
  }
  function V(f) {
    return f === 45 || f === 46 || f === 58 || f === 95 || X(f)
      ? (e.consume(f), V)
      : C(f);
  }
  function C(f) {
    return f === 61
      ? (e.consume(f), I)
      : A(f)
      ? ((u = C), U(f))
      : M(f)
      ? (e.consume(f), C)
      : B(f);
  }
  function I(f) {
    return f === null || f === 60 || f === 61 || f === 62 || f === 96
      ? n(f)
      : f === 34 || f === 39
      ? (e.consume(f), (i = f), $)
      : A(f)
      ? ((u = I), U(f))
      : M(f)
      ? (e.consume(f), I)
      : (e.consume(f), q);
  }
  function $(f) {
    return f === i
      ? (e.consume(f), (i = void 0), _)
      : f === null
      ? n(f)
      : A(f)
      ? ((u = $), U(f))
      : (e.consume(f), $);
  }
  function q(f) {
    return f === null ||
      f === 34 ||
      f === 39 ||
      f === 60 ||
      f === 61 ||
      f === 96
      ? n(f)
      : f === 47 || f === 62 || Y(f)
      ? B(f)
      : (e.consume(f), q);
  }
  function _(f) {
    return f === 47 || f === 62 || Y(f) ? B(f) : n(f);
  }
  function W(f) {
    return f === 62
      ? (e.consume(f), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : n(f);
  }
  function U(f) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(f),
      e.exit("lineEnding"),
      ee
    );
  }
  function ee(f) {
    return M(f)
      ? H(
          e,
          ue,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(f)
      : ue(f);
  }
  function ue(f) {
    return e.enter("htmlTextData"), u(f);
  }
}
const ft = { name: "labelEnd", tokenize: Yr, resolveTo: Xr, resolveAll: Gr },
  Ur = { tokenize: Jr },
  Qr = { tokenize: Kr },
  Wr = { tokenize: Zr };
function Gr(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" ||
      n.type === "labelLink" ||
      n.type === "labelEnd") &&
      (e.splice(t + 1, n.type === "labelImage" ? 4 : 2),
      (n.type = "data"),
      t++);
  }
  return e;
}
function Xr(e, t) {
  let n = e.length,
    r = 0,
    i,
    l,
    u,
    a;
  for (; n--; )
    if (((i = e[n][1]), l)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (u) {
      if (
        e[n][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((l = n), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (u = n);
  const s = {
      type: e[l][1].type === "labelLink" ? "link" : "image",
      start: Object.assign({}, e[l][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    o = {
      type: "label",
      start: Object.assign({}, e[l][1].start),
      end: Object.assign({}, e[u][1].end),
    },
    c = {
      type: "labelText",
      start: Object.assign({}, e[l + r + 2][1].end),
      end: Object.assign({}, e[u - 2][1].start),
    };
  return (
    (a = [
      ["enter", s, t],
      ["enter", o, t],
    ]),
    (a = J(a, e.slice(l + 1, l + r + 3))),
    (a = J(a, [["enter", c, t]])),
    (a = J(
      a,
      st(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, u - 3), t)
    )),
    (a = J(a, [["exit", c, t], e[u - 2], e[u - 1], ["exit", o, t]])),
    (a = J(a, e.slice(u + 1))),
    (a = J(a, [["exit", s, t]])),
    he(e, l, e.length, a),
    e
  );
}
function Yr(e, t, n) {
  const r = this;
  let i = r.events.length,
    l,
    u;
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(g) {
    return l
      ? l._inactive
        ? m(g)
        : ((u = r.parser.defined.includes(
            be(r.sliceSerialize({ start: l.end, end: r.now() }))
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(g),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          s)
      : n(g);
  }
  function s(g) {
    return g === 40
      ? e.attempt(Ur, c, u ? c : m)(g)
      : g === 91
      ? e.attempt(Qr, c, u ? o : m)(g)
      : u
      ? c(g)
      : m(g);
  }
  function o(g) {
    return e.attempt(Wr, c, m)(g);
  }
  function c(g) {
    return t(g);
  }
  function m(g) {
    return (l._balanced = !0), n(g);
  }
}
function Jr(e, t, n) {
  return r;
  function r(m) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(m),
      e.exit("resourceMarker"),
      i
    );
  }
  function i(m) {
    return Y(m) ? Ie(e, l)(m) : l(m);
  }
  function l(m) {
    return m === 41
      ? c(m)
      : pn(
          e,
          u,
          a,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(m);
  }
  function u(m) {
    return Y(m) ? Ie(e, s)(m) : c(m);
  }
  function a(m) {
    return n(m);
  }
  function s(m) {
    return m === 34 || m === 39 || m === 40
      ? mn(
          e,
          o,
          n,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(m)
      : c(m);
  }
  function o(m) {
    return Y(m) ? Ie(e, c)(m) : c(m);
  }
  function c(m) {
    return m === 41
      ? (e.enter("resourceMarker"),
        e.consume(m),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : n(m);
  }
}
function Kr(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return hn.call(
      r,
      e,
      l,
      u,
      "reference",
      "referenceMarker",
      "referenceString"
    )(a);
  }
  function l(a) {
    return r.parser.defined.includes(
      be(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(a)
      : n(a);
  }
  function u(a) {
    return n(a);
  }
}
function Zr(e, t, n) {
  return r;
  function r(l) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(l),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(l) {
    return l === 93
      ? (e.enter("referenceMarker"),
        e.consume(l),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(l);
  }
}
const ei = { name: "labelStartImage", tokenize: ti, resolveAll: ft.resolveAll };
function ti(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      l
    );
  }
  function l(a) {
    return a === 91
      ? (e.enter("labelMarker"),
        e.consume(a),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        u)
      : n(a);
  }
  function u(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(a)
      : t(a);
  }
}
const ni = { name: "labelStartLink", tokenize: ri, resolveAll: ft.resolveAll };
function ri(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(u),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      l
    );
  }
  function l(u) {
    return u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(u)
      : t(u);
  }
}
const Ge = { name: "lineEnding", tokenize: ii };
function ii(e, t) {
  return n;
  function n(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      H(e, t, "linePrefix")
    );
  }
}
const Pe = { name: "thematicBreak", tokenize: li };
function li(e, t, n) {
  let r = 0,
    i;
  return l;
  function l(o) {
    return e.enter("thematicBreak"), u(o);
  }
  function u(o) {
    return (i = o), a(o);
  }
  function a(o) {
    return o === i
      ? (e.enter("thematicBreakSequence"), s(o))
      : r >= 3 && (o === null || A(o))
      ? (e.exit("thematicBreak"), t(o))
      : n(o);
  }
  function s(o) {
    return o === i
      ? (e.consume(o), r++, s)
      : (e.exit("thematicBreakSequence"),
        M(o) ? H(e, a, "whitespace")(o) : a(o));
  }
}
const G = {
    name: "list",
    tokenize: oi,
    continuation: { tokenize: si },
    exit: fi,
  },
  ui = { tokenize: pi, partial: !0 },
  ai = { tokenize: ci, partial: !0 };
function oi(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let l =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    u = 0;
  return a;
  function a(h) {
    const w =
      r.containerState.type ||
      (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (
      w === "listUnordered"
        ? !r.containerState.marker || h === r.containerState.marker
        : rt(h)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = w), e.enter(w, { _container: !0 })),
        w === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          h === 42 || h === 45 ? e.check(Pe, n, o)(h) : o(h)
        );
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(h);
    }
    return n(h);
  }
  function s(h) {
    return rt(h) && ++u < 10
      ? (e.consume(h), s)
      : (!r.interrupt || u < 2) &&
        (r.containerState.marker
          ? h === r.containerState.marker
          : h === 41 || h === 46)
      ? (e.exit("listItemValue"), o(h))
      : n(h);
  }
  function o(h) {
    return (
      e.enter("listItemMarker"),
      e.consume(h),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || h),
      e.check(Ne, r.interrupt ? n : c, e.attempt(ui, g, m))
    );
  }
  function c(h) {
    return (r.containerState.initialBlankLine = !0), l++, g(h);
  }
  function m(h) {
    return M(h)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(h),
        e.exit("listItemPrefixWhitespace"),
        g)
      : n(h);
  }
  function g(h) {
    return (
      (r.containerState.size =
        l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(h)
    );
  }
}
function si(e, t, n) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(Ne, i, l);
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      H(e, t, "listItemIndent", r.containerState.size + 1)(a)
    );
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !M(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        u(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(ai, t, u)(a));
  }
  function u(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      H(
        e,
        e.attempt(G, t, n),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(a)
    );
  }
}
function ci(e, t, n) {
  const r = this;
  return H(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const u = r.events[r.events.length - 1];
    return u &&
      u[1].type === "listItemIndent" &&
      u[2].sliceSerialize(u[1], !0).length === r.containerState.size
      ? t(l)
      : n(l);
  }
}
function fi(e) {
  e.exit(this.containerState.type);
}
function pi(e, t, n) {
  const r = this;
  return H(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function i(l) {
    const u = r.events[r.events.length - 1];
    return !M(l) && u && u[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const Pt = { name: "setextUnderline", tokenize: mi, resolveTo: hi };
function hi(e, t) {
  let n = e.length,
    r,
    i,
    l;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1),
        !l && e[n][1].type === "definition" && (l = n);
  const u = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end),
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    l
      ? (e.splice(i, 0, ["enter", u, t]),
        e.splice(l + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = Object.assign({}, e[l][1].end)))
      : (e[r][1] = u),
    e.push(["exit", u, t]),
    e
  );
}
function mi(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(o) {
    let c = r.events.length,
      m;
    for (; c--; )
      if (
        r.events[c][1].type !== "lineEnding" &&
        r.events[c][1].type !== "linePrefix" &&
        r.events[c][1].type !== "content"
      ) {
        m = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || m)
      ? (e.enter("setextHeadingLine"), (i = o), u(o))
      : n(o);
  }
  function u(o) {
    return e.enter("setextHeadingLineSequence"), a(o);
  }
  function a(o) {
    return o === i
      ? (e.consume(o), a)
      : (e.exit("setextHeadingLineSequence"),
        M(o) ? H(e, s, "lineSuffix")(o) : s(o));
  }
  function s(o) {
    return o === null || A(o) ? (e.exit("setextHeadingLine"), t(o)) : n(o);
  }
}
const Lt = ["http", "https", "mailto", "tel"];
function gi(e) {
  const t = (e || "").trim(),
    n = t.charAt(0);
  if (n === "#" || n === "/") return t;
  const r = t.indexOf(":");
  if (r === -1) return t;
  let i = -1;
  for (; ++i < Lt.length; ) {
    const l = Lt[i];
    if (r === l.length && t.slice(0, l.length).toLowerCase() === l) return t;
  }
  return (
    (i = t.indexOf("?")),
    (i !== -1 && r > i) || ((i = t.indexOf("#")), i !== -1 && r > i)
      ? t
      : "javascript:void(0)"
  );
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var di = function (t) {
  return (
    t != null &&
    t.constructor != null &&
    typeof t.constructor.isBuffer == "function" &&
    t.constructor.isBuffer(t)
  );
};
const gn = _e(di);
function Te(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? Ft(e.position)
    : "start" in e || "end" in e
    ? Ft(e)
    : "line" in e || "column" in e
    ? lt(e)
    : "";
}
function lt(e) {
  return Nt(e && e.line) + ":" + Nt(e && e.column);
}
function Ft(e) {
  return lt(e && e.start) + "-" + lt(e && e.end);
}
function Nt(e) {
  return e && typeof e == "number" ? e : 1;
}
class K extends Error {
  constructor(t, n, r) {
    const i = [null, null];
    let l = {
      start: { line: null, column: null },
      end: { line: null, column: null },
    };
    if (
      (super(),
      typeof n == "string" && ((r = n), (n = void 0)),
      typeof r == "string")
    ) {
      const u = r.indexOf(":");
      u === -1 ? (i[1] = r) : ((i[0] = r.slice(0, u)), (i[1] = r.slice(u + 1)));
    }
    n &&
      ("type" in n || "position" in n
        ? n.position && (l = n.position)
        : "start" in n || "end" in n
        ? (l = n)
        : ("line" in n || "column" in n) && (l.start = n)),
      (this.name = Te(n) || "1:1"),
      (this.message = typeof t == "object" ? t.message : t),
      (this.stack = ""),
      typeof t == "object" && t.stack && (this.stack = t.stack),
      (this.reason = this.message),
      this.fatal,
      (this.line = l.start.line),
      (this.column = l.start.column),
      (this.position = l),
      (this.source = i[0]),
      (this.ruleId = i[1]),
      this.file,
      this.actual,
      this.expected,
      this.url,
      this.note;
  }
}
K.prototype.file = "";
K.prototype.name = "";
K.prototype.reason = "";
K.prototype.message = "";
K.prototype.stack = "";
K.prototype.fatal = null;
K.prototype.column = null;
K.prototype.line = null;
K.prototype.source = null;
K.prototype.ruleId = null;
K.prototype.position = null;
const ie = { basename: yi, dirname: xi, extname: ki, join: bi, sep: "/" };
function yi(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ze(e);
  let n = 0,
    r = -1,
    i = e.length,
    l;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.charCodeAt(i) === 47) {
        if (l) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((l = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let u = -1,
    a = t.length - 1;
  for (; i--; )
    if (e.charCodeAt(i) === 47) {
      if (l) {
        n = i + 1;
        break;
      }
    } else
      u < 0 && ((l = !0), (u = i + 1)),
        a > -1 &&
          (e.charCodeAt(i) === t.charCodeAt(a--)
            ? a < 0 && (r = i)
            : ((a = -1), (r = u)));
  return n === r ? (r = u) : r < 0 && (r = e.length), e.slice(n, r);
}
function xi(e) {
  if ((ze(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.charCodeAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.charCodeAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.charCodeAt(0) === 47
    ? "//"
    : e.slice(0, t);
}
function ki(e) {
  ze(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    l = 0,
    u;
  for (; t--; ) {
    const a = e.charCodeAt(t);
    if (a === 47) {
      if (u) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((u = !0), (n = t + 1)),
      a === 46 ? (i < 0 ? (i = t) : l !== 1 && (l = 1)) : i > -1 && (l = -1);
  }
  return i < 0 || n < 0 || l === 0 || (l === 1 && i === n - 1 && i === r + 1)
    ? ""
    : e.slice(i, n);
}
function bi(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    ze(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : wi(n);
}
function wi(e) {
  ze(e);
  const t = e.charCodeAt(0) === 47;
  let n = Si(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function Si(e, t) {
  let n = "",
    r = 0,
    i = -1,
    l = 0,
    u = -1,
    a,
    s;
  for (; ++u <= e.length; ) {
    if (u < e.length) a = e.charCodeAt(u);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === u - 1 || l === 1))
        if (i !== u - 1 && l === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.charCodeAt(n.length - 1) !== 46 ||
            n.charCodeAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((s = n.lastIndexOf("/")), s !== n.length - 1)) {
                s < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, s)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = u),
                  (l = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ""), (r = 0), (i = u), (l = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + e.slice(i + 1, u))
            : (n = e.slice(i + 1, u)),
            (r = u - i - 1);
      (i = u), (l = 0);
    } else a === 46 && l > -1 ? l++ : (l = -1);
  }
  return n;
}
function ze(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Ei = { cwd: Ci };
function Ci() {
  return "/";
}
function ut(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function Ii(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!ut(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return Ti(e);
}
function Ti(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
      const r = t.charCodeAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const Xe = ["history", "path", "basename", "stem", "extname", "dirname"];
class dn {
  constructor(t) {
    let n;
    t
      ? typeof t == "string" || zi(t)
        ? (n = { value: t })
        : ut(t)
        ? (n = { path: t })
        : (n = t)
      : (n = {}),
      (this.data = {}),
      (this.messages = []),
      (this.history = []),
      (this.cwd = Ei.cwd()),
      this.value,
      this.stored,
      this.result,
      this.map;
    let r = -1;
    for (; ++r < Xe.length; ) {
      const l = Xe[r];
      l in n &&
        n[l] !== void 0 &&
        n[l] !== null &&
        (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n) Xe.includes(i) || (this[i] = n[i]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    ut(t) && (t = Ii(t)),
      Je(t, "path"),
      this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? ie.dirname(this.path) : void 0;
  }
  set dirname(t) {
    _t(this.basename, "dirname"), (this.path = ie.join(t || "", this.basename));
  }
  get basename() {
    return typeof this.path == "string" ? ie.basename(this.path) : void 0;
  }
  set basename(t) {
    Je(t, "basename"),
      Ye(t, "basename"),
      (this.path = ie.join(this.dirname || "", t));
  }
  get extname() {
    return typeof this.path == "string" ? ie.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((Ye(t, "extname"), _t(this.dirname, "extname"), t)) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ie.join(this.dirname, this.stem + (t || ""));
  }
  get stem() {
    return typeof this.path == "string"
      ? ie.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    Je(t, "stem"),
      Ye(t, "stem"),
      (this.path = ie.join(this.dirname || "", t + (this.extname || "")));
  }
  toString(t) {
    return (this.value || "").toString(t || void 0);
  }
  message(t, n, r) {
    const i = new K(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = null), i;
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
}
function Ye(e, t) {
  if (e && e.includes(ie.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + ie.sep + "`"
    );
}
function Je(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function _t(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function zi(e) {
  return gn(e);
}
function Bt(e) {
  if (e) throw e;
}
var Le = Object.prototype.hasOwnProperty,
  yn = Object.prototype.toString,
  Dt = Object.defineProperty,
  Rt = Object.getOwnPropertyDescriptor,
  Mt = function (t) {
    return typeof Array.isArray == "function"
      ? Array.isArray(t)
      : yn.call(t) === "[object Array]";
  },
  jt = function (t) {
    if (!t || yn.call(t) !== "[object Object]") return !1;
    var n = Le.call(t, "constructor"),
      r =
        t.constructor &&
        t.constructor.prototype &&
        Le.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !n && !r) return !1;
    var i;
    for (i in t);
    return typeof i > "u" || Le.call(t, i);
  },
  Ht = function (t, n) {
    Dt && n.name === "__proto__"
      ? Dt(t, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (t[n.name] = n.newValue);
  },
  $t = function (t, n) {
    if (n === "__proto__")
      if (Le.call(t, n)) {
        if (Rt) return Rt(t, n).value;
      } else return;
    return t[n];
  },
  Ai = function e() {
    var t,
      n,
      r,
      i,
      l,
      u,
      a = arguments[0],
      s = 1,
      o = arguments.length,
      c = !1;
    for (
      typeof a == "boolean" && ((c = a), (a = arguments[1] || {}), (s = 2)),
        (a == null || (typeof a != "object" && typeof a != "function")) &&
          (a = {});
      s < o;
      ++s
    )
      if (((t = arguments[s]), t != null))
        for (n in t)
          (r = $t(a, n)),
            (i = $t(t, n)),
            a !== i &&
              (c && i && (jt(i) || (l = Mt(i)))
                ? (l
                    ? ((l = !1), (u = r && Mt(r) ? r : []))
                    : (u = r && jt(r) ? r : {}),
                  Ht(a, { name: n, newValue: e(c, u, i) }))
                : typeof i < "u" && Ht(a, { name: n, newValue: i }));
    return a;
  };
const qt = _e(Ai);
function at(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Oi() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const u = i.pop();
    if (typeof u != "function")
      throw new TypeError("Expected function as last argument, not " + u);
    a(null, ...i);
    function a(s, ...o) {
      const c = e[++l];
      let m = -1;
      if (s) {
        u(s);
        return;
      }
      for (; ++m < i.length; )
        (o[m] === null || o[m] === void 0) && (o[m] = i[m]);
      (i = o), c ? Pi(c, a)(...o) : u(null, ...o);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e.push(i), t;
  }
}
function Pi(e, t) {
  let n;
  return r;
  function r(...u) {
    const a = e.length > u.length;
    let s;
    a && u.push(i);
    try {
      s = e.apply(this, u);
    } catch (o) {
      const c = o;
      if (a && n) throw c;
      return i(c);
    }
    a ||
      (s instanceof Promise ? s.then(l, i) : s instanceof Error ? i(s) : l(s));
  }
  function i(u, ...a) {
    n || ((n = !0), t(u, ...a));
  }
  function l(u) {
    i(null, u);
  }
}
const Li = kn().freeze(),
  xn = {}.hasOwnProperty;
function kn() {
  const e = Oi(),
    t = [];
  let n = {},
    r,
    i = -1;
  return (
    (l.data = u),
    (l.Parser = void 0),
    (l.Compiler = void 0),
    (l.freeze = a),
    (l.attachers = t),
    (l.use = s),
    (l.parse = o),
    (l.stringify = c),
    (l.run = m),
    (l.runSync = g),
    (l.process = h),
    (l.processSync = w),
    l
  );
  function l() {
    const x = kn();
    let S = -1;
    for (; ++S < t.length; ) x.use(...t[S]);
    return x.data(qt(!0, {}, n)), x;
  }
  function u(x, S) {
    return typeof x == "string"
      ? arguments.length === 2
        ? (et("data", r), (n[x] = S), l)
        : (xn.call(n, x) && n[x]) || null
      : x
      ? (et("data", r), (n = x), l)
      : n;
  }
  function a() {
    if (r) return l;
    for (; ++i < t.length; ) {
      const [x, ...S] = t[i];
      if (S[0] === !1) continue;
      S[0] === !0 && (S[0] = void 0);
      const k = x.call(l, ...S);
      typeof k == "function" && e.use(k);
    }
    return (r = !0), (i = Number.POSITIVE_INFINITY), l;
  }
  function s(x, ...S) {
    let k;
    if ((et("use", r), x != null))
      if (typeof x == "function") N(x, ...S);
      else if (typeof x == "object") Array.isArray(x) ? F(x) : E(x);
      else throw new TypeError("Expected usable value, not `" + x + "`");
    return k && (n.settings = Object.assign(n.settings || {}, k)), l;
    function P(d) {
      if (typeof d == "function") N(d);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [T, ...L] = d;
          N(T, ...L);
        } else E(d);
      else throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function E(d) {
      F(d.plugins), d.settings && (k = Object.assign(k || {}, d.settings));
    }
    function F(d) {
      let T = -1;
      if (d != null)
        if (Array.isArray(d))
          for (; ++T < d.length; ) {
            const L = d[T];
            P(L);
          }
        else throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function N(d, T) {
      let L = -1,
        B;
      for (; ++L < t.length; )
        if (t[L][0] === d) {
          B = t[L];
          break;
        }
      B
        ? (at(B[1]) && at(T) && (T = qt(!0, B[1], T)), (B[1] = T))
        : t.push([...arguments]);
    }
  }
  function o(x) {
    l.freeze();
    const S = Ce(x),
      k = l.Parser;
    return (
      Ke("parse", k),
      vt(k, "parse") ? new k(String(S), S).parse() : k(String(S), S)
    );
  }
  function c(x, S) {
    l.freeze();
    const k = Ce(S),
      P = l.Compiler;
    return (
      Ze("stringify", P),
      Vt(x),
      vt(P, "compile") ? new P(x, k).compile() : P(x, k)
    );
  }
  function m(x, S, k) {
    if (
      (Vt(x),
      l.freeze(),
      !k && typeof S == "function" && ((k = S), (S = void 0)),
      !k)
    )
      return new Promise(P);
    P(null, k);
    function P(E, F) {
      e.run(x, Ce(S), N);
      function N(d, T, L) {
        (T = T || x), d ? F(d) : E ? E(T) : k(null, T, L);
      }
    }
  }
  function g(x, S) {
    let k, P;
    return l.run(x, S, E), Ut("runSync", "run", P), k;
    function E(F, N) {
      Bt(F), (k = N), (P = !0);
    }
  }
  function h(x, S) {
    if ((l.freeze(), Ke("process", l.Parser), Ze("process", l.Compiler), !S))
      return new Promise(k);
    k(null, S);
    function k(P, E) {
      const F = Ce(x);
      l.run(l.parse(F), F, (d, T, L) => {
        if (d || !T || !L) N(d);
        else {
          const B = l.stringify(T, L);
          B == null || (_i(B) ? (L.value = B) : (L.result = B)), N(d, L);
        }
      });
      function N(d, T) {
        d || !T ? E(d) : P ? P(T) : S(null, T);
      }
    }
  }
  function w(x) {
    let S;
    l.freeze(), Ke("processSync", l.Parser), Ze("processSync", l.Compiler);
    const k = Ce(x);
    return l.process(k, P), Ut("processSync", "process", S), k;
    function P(E) {
      (S = !0), Bt(E);
    }
  }
}
function vt(e, t) {
  return (
    typeof e == "function" &&
    e.prototype &&
    (Fi(e.prototype) || t in e.prototype)
  );
}
function Fi(e) {
  let t;
  for (t in e) if (xn.call(e, t)) return !0;
  return !1;
}
function Ke(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function Ze(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function et(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Vt(e) {
  if (!at(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ut(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Ce(e) {
  return Ni(e) ? e : new dn(e);
}
function Ni(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function _i(e) {
  return typeof e == "string" || gn(e);
}
const Bi = {};
function Di(e, t) {
  const n = t || Bi,
    r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return bn(e, r, i);
}
function bn(e, t, n) {
  if (Ri(e)) {
    if ("value" in e) return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return Qt(e.children, t, n);
  }
  return Array.isArray(e) ? Qt(e, t, n) : "";
}
function Qt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = bn(e[i], t, n);
  return r.join("");
}
function Ri(e) {
  return !!(e && typeof e == "object");
}
const Mi = { tokenize: ji };
function ji(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      H(e, t, "linePrefix")
    );
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const s = e.enter("chunkText", { contentType: "text", previous: n });
    return n && (n.next = s), (n = s), u(a);
  }
  function u(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return A(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), u);
  }
}
const Hi = { tokenize: $i },
  Wt = { tokenize: qi };
function $i(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    l,
    u;
  return a;
  function a(E) {
    if (r < n.length) {
      const F = n[r];
      return (t.containerState = F[1]), e.attempt(F[0].continuation, s, o)(E);
    }
    return o(E);
  }
  function s(E) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), i && P();
      const F = t.events.length;
      let N = F,
        d;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          d = t.events[N][1].end;
          break;
        }
      k(r);
      let T = F;
      for (; T < t.events.length; )
        (t.events[T][1].end = Object.assign({}, d)), T++;
      return (
        he(t.events, N + 1, 0, t.events.slice(F)), (t.events.length = T), o(E)
      );
    }
    return a(E);
  }
  function o(E) {
    if (r === n.length) {
      if (!i) return g(E);
      if (i.currentConstruct && i.currentConstruct.concrete) return w(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return (t.containerState = {}), e.check(Wt, c, m)(E);
  }
  function c(E) {
    return i && P(), k(r), g(E);
  }
  function m(E) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (u = t.now().offset), w(E)
    );
  }
  function g(E) {
    return (t.containerState = {}), e.attempt(Wt, h, w)(E);
  }
  function h(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), g(E);
  }
  function w(E) {
    if (E === null) {
      i && P(), k(0), e.consume(E);
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter("chunkFlow", { contentType: "flow", previous: l, _tokenizer: i }),
      x(E)
    );
  }
  function x(E) {
    if (E === null) {
      S(e.exit("chunkFlow"), !0), k(0), e.consume(E);
      return;
    }
    return A(E)
      ? (e.consume(E),
        S(e.exit("chunkFlow")),
        (r = 0),
        (t.interrupt = void 0),
        a)
      : (e.consume(E), x);
  }
  function S(E, F) {
    const N = t.sliceStream(E);
    if (
      (F && N.push(null),
      (E.previous = l),
      l && (l.next = E),
      (l = E),
      i.defineSkip(E.start),
      i.write(N),
      t.parser.lazy[E.start.line])
    ) {
      let d = i.events.length;
      for (; d--; )
        if (
          i.events[d][1].start.offset < u &&
          (!i.events[d][1].end || i.events[d][1].end.offset > u)
        )
          return;
      const T = t.events.length;
      let L = T,
        B,
        V;
      for (; L--; )
        if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
          if (B) {
            V = t.events[L][1].end;
            break;
          }
          B = !0;
        }
      for (k(r), d = T; d < t.events.length; )
        (t.events[d][1].end = Object.assign({}, V)), d++;
      he(t.events, L + 1, 0, t.events.slice(T)), (t.events.length = d);
    }
  }
  function k(E) {
    let F = n.length;
    for (; F-- > E; ) {
      const N = n[F];
      (t.containerState = N[1]), N[0].exit.call(t, e);
    }
    n.length = E;
  }
  function P() {
    i.write([null]),
      (l = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function qi(e, t, n) {
  return H(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
const vi = { tokenize: Vi };
function Vi(e) {
  const t = this,
    n = e.attempt(
      Ne,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        H(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(wr, i)),
          "linePrefix"
        )
      )
    );
  return n;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(l),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const Ui = { resolveAll: Sn() },
  Qi = wn("string"),
  Wi = wn("text");
function wn(e) {
  return { tokenize: t, resolveAll: Sn(e === "text" ? Gi : void 0) };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      l = n.attempt(i, u, a);
    return u;
    function u(c) {
      return o(c) ? l(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), s;
    }
    function s(c) {
      return o(c) ? (n.exit("data"), l(c)) : (n.consume(c), s);
    }
    function o(c) {
      if (c === null) return !0;
      const m = i[c];
      let g = -1;
      if (m)
        for (; ++g < m.length; ) {
          const h = m[g];
          if (!h.previous || h.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function Sn(e) {
  return t;
  function t(n, r) {
    let i = -1,
      l;
    for (; ++i <= n.length; )
      l === void 0
        ? n[i] && n[i][1].type === "data" && ((l = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== l + 2 &&
            ((n[l][1].end = n[i - 1][1].end),
            n.splice(l + 2, i - l - 2),
            (i = l + 2)),
          (l = void 0));
    return e ? e(n, r) : n;
  }
}
function Gi(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let l = i.length,
        u = -1,
        a = 0,
        s;
      for (; l--; ) {
        const o = i[l];
        if (typeof o == "string") {
          for (u = o.length; o.charCodeAt(u - 1) === 32; ) a++, u--;
          if (u) break;
          u = -1;
        } else if (o === -2) (s = !0), a++;
        else if (o !== -1) {
          l++;
          break;
        }
      }
      if (a) {
        const o = {
          type:
            n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + l,
            _bufferIndex: l ? u : r.start._bufferIndex + u,
          },
          end: Object.assign({}, r.end),
        };
        (r.end = Object.assign({}, o.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, o)
            : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), (n += 2));
      }
      n++;
    }
  return e;
}
function Xi(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
    { _index: 0, _bufferIndex: -1 }
  );
  const i = {},
    l = [];
  let u = [],
    a = [];
  const s = {
      consume: P,
      enter: E,
      exit: F,
      attempt: T(N),
      check: T(d),
      interrupt: T(d, { interrupt: !0 }),
    },
    o = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: h,
      sliceSerialize: g,
      now: w,
      defineSkip: x,
      write: m,
    };
  let c = t.tokenize.call(o, s);
  return t.resolveAll && l.push(t), o;
  function m(C) {
    return (
      (u = J(u, C)),
      S(),
      u[u.length - 1] !== null
        ? []
        : (L(t, 0), (o.events = st(l, o.events, o)), o.events)
    );
  }
  function g(C, I) {
    return Ji(h(C), I);
  }
  function h(C) {
    return Yi(u, C);
  }
  function w() {
    const { line: C, column: I, offset: $, _index: q, _bufferIndex: _ } = r;
    return { line: C, column: I, offset: $, _index: q, _bufferIndex: _ };
  }
  function x(C) {
    (i[C.line] = C.column), V();
  }
  function S() {
    let C;
    for (; r._index < u.length; ) {
      const I = u[r._index];
      if (typeof I == "string")
        for (
          C = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === C && r._bufferIndex < I.length;

        )
          k(I.charCodeAt(r._bufferIndex));
      else k(I);
    }
  }
  function k(C) {
    c = c(C);
  }
  function P(C) {
    A(C)
      ? (r.line++, (r.column = 1), (r.offset += C === -3 ? 2 : 1), V())
      : C !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === u[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (o.previous = C);
  }
  function E(C, I) {
    const $ = I || {};
    return (
      ($.type = C),
      ($.start = w()),
      o.events.push(["enter", $, o]),
      a.push($),
      $
    );
  }
  function F(C) {
    const I = a.pop();
    return (I.end = w()), o.events.push(["exit", I, o]), I;
  }
  function N(C, I) {
    L(C, I.from);
  }
  function d(C, I) {
    I.restore();
  }
  function T(C, I) {
    return $;
    function $(q, _, W) {
      let U, ee, ue, f;
      return Array.isArray(q) ? ae(q) : "tokenize" in q ? ae([q]) : te(q);
      function te(Q) {
        return de;
        function de(ce) {
          const ye = ce !== null && Q[ce],
            xe = ce !== null && Q.null,
            Ue = [
              ...(Array.isArray(ye) ? ye : ye ? [ye] : []),
              ...(Array.isArray(xe) ? xe : xe ? [xe] : []),
            ];
          return ae(Ue)(ce);
        }
      }
      function ae(Q) {
        return (U = Q), (ee = 0), Q.length === 0 ? W : p(Q[ee]);
      }
      function p(Q) {
        return de;
        function de(ce) {
          return (
            (f = B()),
            (ue = Q),
            Q.partial || (o.currentConstruct = Q),
            Q.name && o.parser.constructs.disable.null.includes(Q.name)
              ? ge()
              : Q.tokenize.call(
                  I ? Object.assign(Object.create(o), I) : o,
                  s,
                  ne,
                  ge
                )(ce)
          );
        }
      }
      function ne(Q) {
        return C(ue, f), _;
      }
      function ge(Q) {
        return f.restore(), ++ee < U.length ? p(U[ee]) : W;
      }
    }
  }
  function L(C, I) {
    C.resolveAll && !l.includes(C) && l.push(C),
      C.resolve &&
        he(o.events, I, o.events.length - I, C.resolve(o.events.slice(I), o)),
      C.resolveTo && (o.events = C.resolveTo(o.events, o));
  }
  function B() {
    const C = w(),
      I = o.previous,
      $ = o.currentConstruct,
      q = o.events.length,
      _ = Array.from(a);
    return { restore: W, from: q };
    function W() {
      (r = C),
        (o.previous = I),
        (o.currentConstruct = $),
        (o.events.length = q),
        (a = _),
        V();
    }
  }
  function V() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function Yi(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    l = t.end._bufferIndex;
  let u;
  if (n === i) u = [e[n].slice(r, l)];
  else {
    if (((u = e.slice(n, i)), r > -1)) {
      const a = u[0];
      typeof a == "string" ? (u[0] = a.slice(r)) : u.shift();
    }
    l > 0 && u.push(e[i].slice(0, l));
  }
  return u;
}
function Ji(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const l = e[n];
    let u;
    if (typeof l == "string") u = l;
    else
      switch (l) {
        case -5: {
          u = "\r";
          break;
        }
        case -4: {
          u = `
`;
          break;
        }
        case -3: {
          u = `\r
`;
          break;
        }
        case -2: {
          u = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          u = " ";
          break;
        }
        default:
          u = String.fromCharCode(l);
      }
    (i = l === -2), r.push(u);
  }
  return r.join("");
}
const Ki = {
    42: G,
    43: G,
    45: G,
    48: G,
    49: G,
    50: G,
    51: G,
    52: G,
    53: G,
    54: G,
    55: G,
    56: G,
    57: G,
    62: on,
  },
  Zi = { 91: Tr },
  el = { [-2]: We, [-1]: We, 32: We },
  tl = {
    35: Fr,
    42: Pe,
    45: [Pt, Pe],
    60: Dr,
    61: Pt,
    95: Pe,
    96: At,
    126: At,
  },
  nl = { 38: cn, 92: sn },
  rl = {
    [-5]: Ge,
    [-4]: Ge,
    [-3]: Ge,
    33: ei,
    38: cn,
    42: it,
    60: [ir, vr],
    91: ni,
    92: [Pr, sn],
    93: ft,
    95: it,
    96: dr,
  },
  il = { null: [it, Ui] },
  ll = { null: [42, 95] },
  ul = { null: [] },
  al = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: ll,
        contentInitial: Zi,
        disable: ul,
        document: Ki,
        flow: tl,
        flowInitial: el,
        insideSpan: il,
        string: nl,
        text: rl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function ol(e) {
  const n = Wn([al, ...((e || {}).extensions || [])]),
    r = {
      defined: [],
      lazy: {},
      constructs: n,
      content: i(Mi),
      document: i(Hi),
      flow: i(vi),
      string: i(Qi),
      text: i(Wi),
    };
  return r;
  function i(l) {
    return u;
    function u(a) {
      return Xi(r, l, a);
    }
  }
}
const Gt = /[\0\t\n\r]/g;
function sl() {
  let e = 1,
    t = "",
    n = !0,
    r;
  return i;
  function i(l, u, a) {
    const s = [];
    let o, c, m, g, h;
    for (
      l = t + l.toString(u),
        m = 0,
        t = "",
        n && (l.charCodeAt(0) === 65279 && m++, (n = void 0));
      m < l.length;

    ) {
      if (
        ((Gt.lastIndex = m),
        (o = Gt.exec(l)),
        (g = o && o.index !== void 0 ? o.index : l.length),
        (h = l.charCodeAt(g)),
        !o)
      ) {
        t = l.slice(m);
        break;
      }
      if (h === 10 && m === g && r) s.push(-3), (r = void 0);
      else
        switch (
          (r && (s.push(-5), (r = void 0)),
          m < g && (s.push(l.slice(m, g)), (e += g - m)),
          h)
        ) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      m = g + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
function cl(e) {
  for (; !fn(e); );
  return e;
}
const En = {}.hasOwnProperty,
  fl = function (e, t, n) {
    return (
      typeof t != "string" && ((n = t), (t = void 0)),
      pl(n)(cl(ol(n).document().write(sl()(e, t, !0))))
    );
  };
function pl(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(St),
      autolinkProtocol: C,
      autolinkEmail: C,
      atxHeading: a(kt),
      blockQuote: a(Ue),
      characterEscape: C,
      characterReference: C,
      codeFenced: a(xt),
      codeFencedFenceInfo: s,
      codeFencedFenceMeta: s,
      codeIndented: a(xt, s),
      codeText: a(Bn, s),
      codeTextData: C,
      data: C,
      codeFlowValue: C,
      definition: a(Dn),
      definitionDestinationString: s,
      definitionLabelString: s,
      definitionTitleString: s,
      emphasis: a(Rn),
      hardBreakEscape: a(bt),
      hardBreakTrailing: a(bt),
      htmlFlow: a(wt, s),
      htmlFlowData: C,
      htmlText: a(wt, s),
      htmlTextData: C,
      image: a(Mn),
      label: s,
      link: a(St),
      listItem: a(jn),
      listItemValue: w,
      listOrdered: a(Et, h),
      listUnordered: a(Et),
      paragraph: a(Hn),
      reference: ge,
      referenceString: s,
      resourceDestinationString: s,
      resourceTitleString: s,
      setextHeading: a(kt),
      strong: a($n),
      thematicBreak: a(vn),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: T,
      autolink: c(),
      autolinkEmail: xe,
      autolinkProtocol: ye,
      blockQuote: c(),
      characterEscapeValue: I,
      characterReferenceMarkerHexadecimal: de,
      characterReferenceMarkerNumeric: de,
      characterReferenceValue: ce,
      codeFenced: c(P),
      codeFencedFence: k,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: S,
      codeFlowValue: I,
      codeIndented: c(E),
      codeText: c(U),
      codeTextData: I,
      data: I,
      definition: c(),
      definitionDestinationString: d,
      definitionLabelString: F,
      definitionTitleString: N,
      emphasis: c(),
      hardBreakEscape: c(q),
      hardBreakTrailing: c(q),
      htmlFlow: c(_),
      htmlFlowData: I,
      htmlText: c(W),
      htmlTextData: I,
      image: c(ue),
      label: te,
      labelText: f,
      lineEnding: $,
      link: c(ee),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: Q,
      resourceDestinationString: ae,
      resourceTitleString: p,
      resource: ne,
      setextHeading: c(V),
      setextHeadingLineSequence: B,
      setextHeadingText: L,
      strong: c(),
      thematicBreak: c(),
    },
  };
  Cn(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(y) {
    let b = { type: "root", children: [] };
    const z = {
        stack: [b],
        tokenStack: [],
        config: t,
        enter: o,
        exit: m,
        buffer: s,
        resume: g,
        setData: l,
        getData: u,
      },
      R = [];
    let j = -1;
    for (; ++j < y.length; )
      if (y[j][1].type === "listOrdered" || y[j][1].type === "listUnordered")
        if (y[j][0] === "enter") R.push(j);
        else {
          const re = R.pop();
          j = i(y, re, j);
        }
    for (j = -1; ++j < y.length; ) {
      const re = t[y[j][0]];
      En.call(re, y[j][1].type) &&
        re[y[j][1].type].call(
          Object.assign({ sliceSerialize: y[j][2].sliceSerialize }, z),
          y[j][1]
        );
    }
    if (z.tokenStack.length > 0) {
      const re = z.tokenStack[z.tokenStack.length - 1];
      (re[1] || Xt).call(z, void 0, re[0]);
    }
    for (
      b.position = {
        start: pe(
          y.length > 0 ? y[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: pe(
          y.length > 0
            ? y[y.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        j = -1;
      ++j < t.transforms.length;

    )
      b = t.transforms[j](b) || b;
    return b;
  }
  function i(y, b, z) {
    let R = b - 1,
      j = -1,
      re = !1,
      fe,
      oe,
      Se,
      Ee;
    for (; ++R <= z; ) {
      const v = y[R];
      if (
        (v[1].type === "listUnordered" ||
        v[1].type === "listOrdered" ||
        v[1].type === "blockQuote"
          ? (v[0] === "enter" ? j++ : j--, (Ee = void 0))
          : v[1].type === "lineEndingBlank"
          ? v[0] === "enter" &&
            (fe && !Ee && !j && !Se && (Se = R), (Ee = void 0))
          : v[1].type === "linePrefix" ||
            v[1].type === "listItemValue" ||
            v[1].type === "listItemMarker" ||
            v[1].type === "listItemPrefix" ||
            v[1].type === "listItemPrefixWhitespace" ||
            (Ee = void 0),
        (!j && v[0] === "enter" && v[1].type === "listItemPrefix") ||
          (j === -1 &&
            v[0] === "exit" &&
            (v[1].type === "listUnordered" || v[1].type === "listOrdered")))
      ) {
        if (fe) {
          let Qe = R;
          for (oe = void 0; Qe--; ) {
            const se = y[Qe];
            if (
              se[1].type === "lineEnding" ||
              se[1].type === "lineEndingBlank"
            ) {
              if (se[0] === "exit") continue;
              oe && ((y[oe][1].type = "lineEndingBlank"), (re = !0)),
                (se[1].type = "lineEnding"),
                (oe = Qe);
            } else if (
              !(
                se[1].type === "linePrefix" ||
                se[1].type === "blockQuotePrefix" ||
                se[1].type === "blockQuotePrefixWhitespace" ||
                se[1].type === "blockQuoteMarker" ||
                se[1].type === "listItemIndent"
              )
            )
              break;
          }
          Se && (!oe || Se < oe) && (fe._spread = !0),
            (fe.end = Object.assign({}, oe ? y[oe][1].start : v[1].end)),
            y.splice(oe || R, 0, ["exit", fe, v[2]]),
            R++,
            z++;
        }
        v[1].type === "listItemPrefix" &&
          ((fe = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, v[1].start),
            end: void 0,
          }),
          y.splice(R, 0, ["enter", fe, v[2]]),
          R++,
          z++,
          (Se = void 0),
          (Ee = !0));
      }
    }
    return (y[b][1]._spread = re), z;
  }
  function l(y, b) {
    n[y] = b;
  }
  function u(y) {
    return n[y];
  }
  function a(y, b) {
    return z;
    function z(R) {
      o.call(this, y(R), R), b && b.call(this, R);
    }
  }
  function s() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function o(y, b, z) {
    return (
      this.stack[this.stack.length - 1].children.push(y),
      this.stack.push(y),
      this.tokenStack.push([b, z]),
      (y.position = { start: pe(b.start) }),
      y
    );
  }
  function c(y) {
    return b;
    function b(z) {
      y && y.call(this, z), m.call(this, z);
    }
  }
  function m(y, b) {
    const z = this.stack.pop(),
      R = this.tokenStack.pop();
    if (R)
      R[0].type !== y.type &&
        (b ? b.call(this, y, R[0]) : (R[1] || Xt).call(this, y, R[0]));
    else
      throw new Error(
        "Cannot close `" +
          y.type +
          "` (" +
          Te({ start: y.start, end: y.end }) +
          "): it’s not open"
      );
    return (z.position.end = pe(y.end)), z;
  }
  function g() {
    return Di(this.stack.pop());
  }
  function h() {
    l("expectingFirstListItemValue", !0);
  }
  function w(y) {
    if (u("expectingFirstListItemValue")) {
      const b = this.stack[this.stack.length - 2];
      (b.start = Number.parseInt(this.sliceSerialize(y), 10)),
        l("expectingFirstListItemValue");
    }
  }
  function x() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.lang = y;
  }
  function S() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.meta = y;
  }
  function k() {
    u("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0));
  }
  function P() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    (b.value = y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), l("flowCodeInside");
  }
  function E() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.value = y.replace(/(\r?\n|\r)$/g, "");
  }
  function F(y) {
    const b = this.resume(),
      z = this.stack[this.stack.length - 1];
    (z.label = b), (z.identifier = be(this.sliceSerialize(y)).toLowerCase());
  }
  function N() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.title = y;
  }
  function d() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.url = y;
  }
  function T(y) {
    const b = this.stack[this.stack.length - 1];
    if (!b.depth) {
      const z = this.sliceSerialize(y).length;
      b.depth = z;
    }
  }
  function L() {
    l("setextHeadingSlurpLineEnding", !0);
  }
  function B(y) {
    const b = this.stack[this.stack.length - 1];
    b.depth = this.sliceSerialize(y).charCodeAt(0) === 61 ? 1 : 2;
  }
  function V() {
    l("setextHeadingSlurpLineEnding");
  }
  function C(y) {
    const b = this.stack[this.stack.length - 1];
    let z = b.children[b.children.length - 1];
    (!z || z.type !== "text") &&
      ((z = qn()), (z.position = { start: pe(y.start) }), b.children.push(z)),
      this.stack.push(z);
  }
  function I(y) {
    const b = this.stack.pop();
    (b.value += this.sliceSerialize(y)), (b.position.end = pe(y.end));
  }
  function $(y) {
    const b = this.stack[this.stack.length - 1];
    if (u("atHardBreak")) {
      const z = b.children[b.children.length - 1];
      (z.position.end = pe(y.end)), l("atHardBreak");
      return;
    }
    !u("setextHeadingSlurpLineEnding") &&
      t.canContainEols.includes(b.type) &&
      (C.call(this, y), I.call(this, y));
  }
  function q() {
    l("atHardBreak", !0);
  }
  function _() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.value = y;
  }
  function W() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.value = y;
  }
  function U() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.value = y;
  }
  function ee() {
    const y = this.stack[this.stack.length - 1];
    if (u("inReference")) {
      const b = u("referenceType") || "shortcut";
      (y.type += "Reference"),
        (y.referenceType = b),
        delete y.url,
        delete y.title;
    } else delete y.identifier, delete y.label;
    l("referenceType");
  }
  function ue() {
    const y = this.stack[this.stack.length - 1];
    if (u("inReference")) {
      const b = u("referenceType") || "shortcut";
      (y.type += "Reference"),
        (y.referenceType = b),
        delete y.url,
        delete y.title;
    } else delete y.identifier, delete y.label;
    l("referenceType");
  }
  function f(y) {
    const b = this.sliceSerialize(y),
      z = this.stack[this.stack.length - 2];
    (z.label = Gn(b)), (z.identifier = be(b).toLowerCase());
  }
  function te() {
    const y = this.stack[this.stack.length - 1],
      b = this.resume(),
      z = this.stack[this.stack.length - 1];
    if ((l("inReference", !0), z.type === "link")) {
      const R = y.children;
      z.children = R;
    } else z.alt = b;
  }
  function ae() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.url = y;
  }
  function p() {
    const y = this.resume(),
      b = this.stack[this.stack.length - 1];
    b.title = y;
  }
  function ne() {
    l("inReference");
  }
  function ge() {
    l("referenceType", "collapsed");
  }
  function Q(y) {
    const b = this.resume(),
      z = this.stack[this.stack.length - 1];
    (z.label = b),
      (z.identifier = be(this.sliceSerialize(y)).toLowerCase()),
      l("referenceType", "full");
  }
  function de(y) {
    l("characterReferenceType", y.type);
  }
  function ce(y) {
    const b = this.sliceSerialize(y),
      z = u("characterReferenceType");
    let R;
    z
      ? ((R = Xn(b, z === "characterReferenceMarkerNumeric" ? 10 : 16)),
        l("characterReferenceType"))
      : (R = an(b));
    const j = this.stack.pop();
    (j.value += R), (j.position.end = pe(y.end));
  }
  function ye(y) {
    I.call(this, y);
    const b = this.stack[this.stack.length - 1];
    b.url = this.sliceSerialize(y);
  }
  function xe(y) {
    I.call(this, y);
    const b = this.stack[this.stack.length - 1];
    b.url = "mailto:" + this.sliceSerialize(y);
  }
  function Ue() {
    return { type: "blockquote", children: [] };
  }
  function xt() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function Bn() {
    return { type: "inlineCode", value: "" };
  }
  function Dn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function Rn() {
    return { type: "emphasis", children: [] };
  }
  function kt() {
    return { type: "heading", depth: void 0, children: [] };
  }
  function bt() {
    return { type: "break" };
  }
  function wt() {
    return { type: "html", value: "" };
  }
  function Mn() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function St() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function Et(y) {
    return {
      type: "list",
      ordered: y.type === "listOrdered",
      start: null,
      spread: y._spread,
      children: [],
    };
  }
  function jn(y) {
    return { type: "listItem", spread: y._spread, checked: null, children: [] };
  }
  function Hn() {
    return { type: "paragraph", children: [] };
  }
  function $n() {
    return { type: "strong", children: [] };
  }
  function qn() {
    return { type: "text", value: "" };
  }
  function vn() {
    return { type: "thematicBreak" };
  }
}
function pe(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function Cn(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Cn(e, r) : hl(e, r);
  }
}
function hl(e, t) {
  let n;
  for (n in t)
    if (En.call(t, n)) {
      if (n === "canContainEols") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "transforms") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "enter" || n === "exit") {
        const r = t[n];
        r && Object.assign(e[n], r);
      }
    }
}
function Xt(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          Te({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          Te({ start: t.start, end: t.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          Te({ start: t.start, end: t.end }) +
          ") is still open"
      );
}
function ml(e) {
  Object.assign(this, {
    Parser: (n) => {
      const r = this.data("settings");
      return fl(
        n,
        Object.assign({}, r, e, {
          extensions: this.data("micromarkExtensions") || [],
          mdastExtensions: this.data("fromMarkdownExtensions") || [],
        })
      );
    },
  });
}
function gl(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function dl(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function yl(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
    i = {};
  r && (i.className = ["language-" + r]);
  let l = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (l.data = { meta: t.meta }),
    e.patch(t, l),
    (l = e.applyData(t, l)),
    (l = { type: "element", tagName: "pre", properties: {}, children: [l] }),
    e.patch(t, l),
    l
  );
}
function xl(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function kl(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function In(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = we(n.toLowerCase()),
    i = e.footnoteOrder.indexOf(n);
  let l;
  i === -1
    ? (e.footnoteOrder.push(n),
      (e.footnoteCounts[n] = 1),
      (l = e.footnoteOrder.length))
    : (e.footnoteCounts[n]++, (l = i + 1));
  const u = e.footnoteCounts[n],
    a = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + e.clobberPrefix + "fn-" + r,
        id: e.clobberPrefix + "fnref-" + r + (u > 1 ? "-" + u : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: ["footnote-label"],
      },
      children: [{ type: "text", value: String(l) }],
    };
  e.patch(t, a);
  const s = { type: "element", tagName: "sup", properties: {}, children: [a] };
  return e.patch(t, s), e.applyData(t, s);
}
function bl(e, t) {
  const n = e.footnoteById;
  let r = 1;
  for (; r in n; ) r++;
  const i = String(r);
  return (
    (n[i] = {
      type: "footnoteDefinition",
      identifier: i,
      children: [{ type: "paragraph", children: t.children }],
      position: t.position,
    }),
    In(e, { type: "footnoteReference", identifier: i, position: t.position })
  );
}
function wl(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Sl(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function Tn(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed"
      ? (r += "[]")
      : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return { type: "text", value: "![" + t.alt + r };
  const i = e.all(t),
    l = i[0];
  l && l.type === "text"
    ? (l.value = "[" + l.value)
    : i.unshift({ type: "text", value: "[" });
  const u = i[i.length - 1];
  return (
    u && u.type === "text"
      ? (u.value += r)
      : i.push({ type: "text", value: r }),
    i
  );
}
function El(e, t) {
  const n = e.definition(t.identifier);
  if (!n) return Tn(e, t);
  const r = { src: we(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function Cl(e, t) {
  const n = { src: we(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Il(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = { type: "element", tagName: "code", properties: {}, children: [n] };
  return e.patch(t, r), e.applyData(t, r);
}
function Tl(e, t) {
  const n = e.definition(t.identifier);
  if (!n) return Tn(e, t);
  const r = { href: we(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t),
  };
  return e.patch(t, i), e.applyData(t, i);
}
function zl(e, t) {
  const n = { href: we(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Al(e, t, n) {
  const r = e.all(t),
    i = n ? Ol(n) : zn(t),
    l = {},
    u = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let m;
    c && c.type === "element" && c.tagName === "p"
      ? (m = c)
      : ((m = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(m)),
      m.children.length > 0 && m.children.unshift({ type: "text", value: " " }),
      m.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (l.className = ["task-list-item"]);
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") &&
      u.push({
        type: "text",
        value: `
`,
      }),
      c.type === "element" && c.tagName === "p" && !i
        ? u.push(...c.children)
        : u.push(c);
  }
  const s = r[r.length - 1];
  s &&
    (i || s.type !== "element" || s.tagName !== "p") &&
    u.push({
      type: "text",
      value: `
`,
    });
  const o = { type: "element", tagName: "li", properties: l, children: u };
  return e.patch(t, o), e.applyData(t, o);
}
function Ol(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = zn(n[r]);
  }
  return t;
}
function zn(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Pl(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++i < r.length;

  ) {
    const u = r[i];
    if (
      u.type === "element" &&
      u.tagName === "li" &&
      u.properties &&
      Array.isArray(u.properties.className) &&
      u.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0),
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Ll(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fl(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Nl(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const pt = An("start"),
  ht = An("end");
function _l(e) {
  return { start: pt(e), end: ht(e) };
}
function An(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    return {
      line: r.line || null,
      column: r.column || null,
      offset: r.offset > -1 ? r.offset : null,
    };
  }
}
function Bl(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const u = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], u), i.push(u);
  }
  if (n.length > 0) {
    const u = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, !0),
      },
      a = pt(t.children[1]),
      s = ht(t.children[t.children.length - 1]);
    a.line && s.line && (u.position = { start: a, end: s }), i.push(u);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Dl(e, t, n) {
  const r = n ? n.children : void 0,
    l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    u = n && n.type === "table" ? n.align : void 0,
    a = u ? u.length : t.children.length;
  let s = -1;
  const o = [];
  for (; ++s < a; ) {
    const m = t.children[s],
      g = {},
      h = u ? u[s] : void 0;
    h && (g.align = h);
    let w = { type: "element", tagName: l, properties: g, children: [] };
    m && ((w.children = e.all(m)), e.patch(m, w), (w = e.applyData(t, w))),
      o.push(w);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(o, !0),
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Rl(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Yt = 9,
  Jt = 32;
function Ml(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const l = [];
  for (; r; )
    l.push(Kt(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return l.push(Kt(t.slice(i), i > 0, !1)), l.join("");
}
function Kt(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Yt || l === Jt; ) r++, (l = e.codePointAt(r));
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Yt || l === Jt; ) i--, (l = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function jl(e, t) {
  const n = { type: "text", value: Ml(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Hl(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
const $l = {
  blockquote: gl,
  break: dl,
  code: yl,
  delete: xl,
  emphasis: kl,
  footnoteReference: In,
  footnote: bl,
  heading: wl,
  html: Sl,
  imageReference: El,
  image: Cl,
  inlineCode: Il,
  linkReference: Tl,
  link: zl,
  listItem: Al,
  list: Pl,
  paragraph: Ll,
  root: Fl,
  strong: Nl,
  table: Bl,
  tableCell: Rl,
  tableRow: Dl,
  text: jl,
  thematicBreak: Hl,
  toml: Ae,
  yaml: Ae,
  definition: Ae,
  footnoteDefinition: Ae,
};
function Ae() {
  return null;
}
function ql(e) {
  return (
    !e ||
    !e.position ||
    !e.position.start ||
    !e.position.start.line ||
    !e.position.start.column ||
    !e.position.end ||
    !e.position.end.line ||
    !e.position.end.column
  );
}
const Zt = {}.hasOwnProperty;
function vl(e) {
  const t = Object.create(null);
  if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
  return (
    ct(e, "definition", (r) => {
      const i = en(r.identifier);
      i && !Zt.call(t, i) && (t[i] = r);
    }),
    n
  );
  function n(r) {
    const i = en(r);
    return i && Zt.call(t, i) ? t[i] : null;
  }
}
function en(e) {
  return String(e || "").toUpperCase();
}
const Fe = {}.hasOwnProperty;
function Vl(e, t) {
  const n = t || {},
    r = n.allowDangerousHtml || !1,
    i = {};
  return (
    (u.dangerous = r),
    (u.clobberPrefix =
      n.clobberPrefix === void 0 || n.clobberPrefix === null
        ? "user-content-"
        : n.clobberPrefix),
    (u.footnoteLabel = n.footnoteLabel || "Footnotes"),
    (u.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
    (u.footnoteLabelProperties = n.footnoteLabelProperties || {
      className: ["sr-only"],
    }),
    (u.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
    (u.unknownHandler = n.unknownHandler),
    (u.passThrough = n.passThrough),
    (u.handlers = { ...$l, ...n.handlers }),
    (u.definition = vl(e)),
    (u.footnoteById = i),
    (u.footnoteOrder = []),
    (u.footnoteCounts = {}),
    (u.patch = Ul),
    (u.applyData = Ql),
    (u.one = a),
    (u.all = s),
    (u.wrap = Gl),
    (u.augment = l),
    ct(e, "footnoteDefinition", (o) => {
      const c = String(o.identifier).toUpperCase();
      Fe.call(i, c) || (i[c] = o);
    }),
    u
  );
  function l(o, c) {
    if (o && "data" in o && o.data) {
      const m = o.data;
      m.hName &&
        (c.type !== "element" &&
          (c = { type: "element", tagName: "", properties: {}, children: [] }),
        (c.tagName = m.hName)),
        c.type === "element" &&
          m.hProperties &&
          (c.properties = { ...c.properties, ...m.hProperties }),
        "children" in c &&
          c.children &&
          m.hChildren &&
          (c.children = m.hChildren);
    }
    if (o) {
      const m = "type" in o ? o : { position: o };
      ql(m) || (c.position = { start: pt(m), end: ht(m) });
    }
    return c;
  }
  function u(o, c, m, g) {
    return (
      Array.isArray(m) && ((g = m), (m = {})),
      l(o, {
        type: "element",
        tagName: c,
        properties: m || {},
        children: g || [],
      })
    );
  }
  function a(o, c) {
    return On(u, o, c);
  }
  function s(o) {
    return mt(u, o);
  }
}
function Ul(e, t) {
  e.position && (t.position = _l(e));
}
function Ql(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      l = e.data.hProperties;
    typeof r == "string" &&
      (n.type === "element"
        ? (n.tagName = r)
        : (n = { type: "element", tagName: r, properties: {}, children: [] })),
      n.type === "element" && l && (n.properties = { ...n.properties, ...l }),
      "children" in n &&
        n.children &&
        i !== null &&
        i !== void 0 &&
        (n.children = i);
  }
  return n;
}
function On(e, t, n) {
  const r = t && t.type;
  if (!r) throw new Error("Expected node, got `" + t + "`");
  return Fe.call(e.handlers, r)
    ? e.handlers[r](e, t, n)
    : e.passThrough && e.passThrough.includes(r)
    ? "children" in t
      ? { ...t, children: mt(e, t) }
      : t
    : e.unknownHandler
    ? e.unknownHandler(e, t, n)
    : Wl(e, t);
}
function mt(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const l = On(e, r[i], t);
      if (l) {
        if (
          i &&
          r[i - 1].type === "break" &&
          (!Array.isArray(l) &&
            l.type === "text" &&
            (l.value = l.value.replace(/^\s+/, "")),
          !Array.isArray(l) && l.type === "element")
        ) {
          const u = l.children[0];
          u && u.type === "text" && (u.value = u.value.replace(/^\s+/, ""));
        }
        Array.isArray(l) ? n.push(...l) : n.push(l);
      }
    }
  }
  return n;
}
function Wl(e, t) {
  const n = t.data || {},
    r =
      "value" in t && !(Fe.call(n, "hProperties") || Fe.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: mt(e, t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function Gl(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function Xl(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r) continue;
    const i = e.all(r),
      l = String(r.identifier).toUpperCase(),
      u = we(l.toLowerCase());
    let a = 0;
    const s = [];
    for (; ++a <= e.footnoteCounts[l]; ) {
      const m = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + u + (a > 1 ? "-" + a : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel,
        },
        children: [{ type: "text", value: "↩" }],
      };
      a > 1 &&
        m.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(a) }],
        }),
        s.length > 0 && s.push({ type: "text", value: " " }),
        s.push(m);
    }
    const o = i[i.length - 1];
    if (o && o.type === "element" && o.tagName === "p") {
      const m = o.children[o.children.length - 1];
      m && m.type === "text"
        ? (m.value += " ")
        : o.children.push({ type: "text", value: " " }),
        o.children.push(...s);
    } else i.push(...s);
    const c = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + u },
      children: e.wrap(i, !0),
    };
    e.patch(r, c), t.push(c);
  }
  if (t.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: e.footnoteLabelTagName,
          properties: {
            ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
            id: "footnote-label",
          },
          children: [{ type: "text", value: e.footnoteLabel }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(t, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
function Pn(e, t) {
  const n = Vl(e, t),
    r = n.one(e, null),
    i = Xl(n);
  return (
    i &&
      r.children.push(
        {
          type: "text",
          value: `
`,
        },
        i
      ),
    Array.isArray(r) ? { type: "root", children: r } : r
  );
}
const Yl = function (e, t) {
    return e && "run" in e ? Kl(e, t) : Zl(e || t);
  },
  Jl = Yl;
function Kl(e, t) {
  return (n, r, i) => {
    e.run(Pn(n, t), r, (l) => {
      i(l);
    });
  };
}
function Zl(e) {
  return (t) => Pn(t, e);
}
function eu(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      ct(t, "element", (n, r, i) => {
        const l = i;
        let u;
        if (
          (e.allowedElements
            ? (u = !e.allowedElements.includes(n.tagName))
            : e.disallowedElements &&
              (u = e.disallowedElements.includes(n.tagName)),
          !u &&
            e.allowElement &&
            typeof r == "number" &&
            (u = !e.allowElement(n, r, l)),
          u && typeof r == "number")
        )
          return (
            e.unwrapDisallowed && n.children
              ? l.children.splice(r, 1, ...n.children)
              : l.children.splice(r, 1),
            r
          );
      });
    };
}
var Ln = { exports: {} },
  D = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gt = Symbol.for("react.element"),
  dt = Symbol.for("react.portal"),
  Be = Symbol.for("react.fragment"),
  De = Symbol.for("react.strict_mode"),
  Re = Symbol.for("react.profiler"),
  Me = Symbol.for("react.provider"),
  je = Symbol.for("react.context"),
  tu = Symbol.for("react.server_context"),
  He = Symbol.for("react.forward_ref"),
  $e = Symbol.for("react.suspense"),
  qe = Symbol.for("react.suspense_list"),
  ve = Symbol.for("react.memo"),
  Ve = Symbol.for("react.lazy"),
  nu = Symbol.for("react.offscreen"),
  Fn;
Fn = Symbol.for("react.module.reference");
function Z(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gt:
        switch (((e = e.type), e)) {
          case Be:
          case Re:
          case De:
          case $e:
          case qe:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case tu:
              case je:
              case He:
              case Ve:
              case ve:
              case Me:
                return e;
              default:
                return t;
            }
        }
      case dt:
        return t;
    }
  }
}
D.ContextConsumer = je;
D.ContextProvider = Me;
D.Element = gt;
D.ForwardRef = He;
D.Fragment = Be;
D.Lazy = Ve;
D.Memo = ve;
D.Portal = dt;
D.Profiler = Re;
D.StrictMode = De;
D.Suspense = $e;
D.SuspenseList = qe;
D.isAsyncMode = function () {
  return !1;
};
D.isConcurrentMode = function () {
  return !1;
};
D.isContextConsumer = function (e) {
  return Z(e) === je;
};
D.isContextProvider = function (e) {
  return Z(e) === Me;
};
D.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === gt;
};
D.isForwardRef = function (e) {
  return Z(e) === He;
};
D.isFragment = function (e) {
  return Z(e) === Be;
};
D.isLazy = function (e) {
  return Z(e) === Ve;
};
D.isMemo = function (e) {
  return Z(e) === ve;
};
D.isPortal = function (e) {
  return Z(e) === dt;
};
D.isProfiler = function (e) {
  return Z(e) === Re;
};
D.isStrictMode = function (e) {
  return Z(e) === De;
};
D.isSuspense = function (e) {
  return Z(e) === $e;
};
D.isSuspenseList = function (e) {
  return Z(e) === qe;
};
D.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Be ||
    e === Re ||
    e === De ||
    e === $e ||
    e === qe ||
    e === nu ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ve ||
        e.$$typeof === ve ||
        e.$$typeof === Me ||
        e.$$typeof === je ||
        e.$$typeof === He ||
        e.$$typeof === Fn ||
        e.getModuleId !== void 0))
  );
};
D.typeOf = Z;
Ln.exports = D;
var ru = Ln.exports;
const iu = _e(ru);
var yt = { exports: {} },
  tn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  lu = /\n/g,
  uu = /^\s*/,
  au = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  ou = /^:\s*/,
  su = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  cu = /^[;\s]*/,
  fu = /^\s+|\s+$/g,
  pu = `
`,
  nn = "/",
  rn = "*",
  me = "",
  hu = "comment",
  mu = "declaration",
  gu = function (e, t) {
    if (typeof e != "string")
      throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
      r = 1;
    function i(w) {
      var x = w.match(lu);
      x && (n += x.length);
      var S = w.lastIndexOf(pu);
      r = ~S ? w.length - S : r + w.length;
    }
    function l() {
      var w = { line: n, column: r };
      return function (x) {
        return (x.position = new u(w)), o(), x;
      };
    }
    function u(w) {
      (this.start = w),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    }
    u.prototype.content = e;
    function a(w) {
      var x = new Error(t.source + ":" + n + ":" + r + ": " + w);
      if (
        ((x.reason = w),
        (x.filename = t.source),
        (x.line = n),
        (x.column = r),
        (x.source = e),
        !t.silent)
      )
        throw x;
    }
    function s(w) {
      var x = w.exec(e);
      if (x) {
        var S = x[0];
        return i(S), (e = e.slice(S.length)), x;
      }
    }
    function o() {
      s(uu);
    }
    function c(w) {
      var x;
      for (w = w || []; (x = m()); ) x !== !1 && w.push(x);
      return w;
    }
    function m() {
      var w = l();
      if (!(nn != e.charAt(0) || rn != e.charAt(1))) {
        for (
          var x = 2;
          me != e.charAt(x) && (rn != e.charAt(x) || nn != e.charAt(x + 1));

        )
          ++x;
        if (((x += 2), me === e.charAt(x - 1)))
          return a("End of comment missing");
        var S = e.slice(2, x - 2);
        return (
          (r += 2),
          i(S),
          (e = e.slice(x)),
          (r += 2),
          w({ type: hu, comment: S })
        );
      }
    }
    function g() {
      var w = l(),
        x = s(au);
      if (x) {
        if ((m(), !s(ou))) return a("property missing ':'");
        var S = s(su),
          k = w({
            type: mu,
            property: ln(x[0].replace(tn, me)),
            value: S ? ln(S[0].replace(tn, me)) : me,
          });
        return s(cu), k;
      }
    }
    function h() {
      var w = [];
      c(w);
      for (var x; (x = g()); ) x !== !1 && (w.push(x), c(w));
      return w;
    }
    return o(), h();
  };
function ln(e) {
  return e ? e.replace(fu, me) : me;
}
var du = gu;
function Nn(e, t) {
  var n = null;
  if (!e || typeof e != "string") return n;
  for (
    var r, i = du(e), l = typeof t == "function", u, a, s = 0, o = i.length;
    s < o;
    s++
  )
    (r = i[s]),
      (u = r.property),
      (a = r.value),
      l ? t(u, a, r) : a && (n || (n = {}), (n[u] = a));
  return n;
}
yt.exports = Nn;
yt.exports.default = Nn;
var yu = yt.exports;
const xu = _e(yu),
  ot = {}.hasOwnProperty,
  ku = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function _n(e, t) {
  const n = [];
  let r = -1,
    i;
  for (; ++r < t.children.length; )
    (i = t.children[r]),
      i.type === "element"
        ? n.push(bu(e, i, r, t))
        : i.type === "text"
        ? (t.type !== "element" || !ku.has(t.tagName) || !Yn(i)) &&
          n.push(i.value)
        : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
  return n;
}
function bu(e, t, n, r) {
  const i = e.options,
    l = i.transformLinkUri === void 0 ? gi : i.transformLinkUri,
    u = e.schema,
    a = t.tagName,
    s = {};
  let o = u,
    c;
  if (
    (u.space === "html" && a === "svg" && ((o = er), (e.schema = o)),
    t.properties)
  )
    for (c in t.properties)
      ot.call(t.properties, c) && Su(s, c, t.properties[c], e);
  (a === "ol" || a === "ul") && e.listDepth++;
  const m = _n(e, t);
  (a === "ol" || a === "ul") && e.listDepth--, (e.schema = u);
  const g = t.position || {
      start: { line: null, column: null, offset: null },
      end: { line: null, column: null, offset: null },
    },
    h = i.components && ot.call(i.components, a) ? i.components[a] : a,
    w = typeof h == "string" || h === ke.Fragment;
  if (!iu.isValidElementType(h))
    throw new TypeError(
      `Component for name \`${a}\` not defined or is not renderable`
    );
  if (
    ((s.key = n),
    a === "a" &&
      i.linkTarget &&
      (s.target =
        typeof i.linkTarget == "function"
          ? i.linkTarget(
              String(s.href || ""),
              t.children,
              typeof s.title == "string" ? s.title : null
            )
          : i.linkTarget),
    a === "a" &&
      l &&
      (s.href = l(
        String(s.href || ""),
        t.children,
        typeof s.title == "string" ? s.title : null
      )),
    !w &&
      a === "code" &&
      r.type === "element" &&
      r.tagName !== "pre" &&
      (s.inline = !0),
    !w &&
      (a === "h1" ||
        a === "h2" ||
        a === "h3" ||
        a === "h4" ||
        a === "h5" ||
        a === "h6") &&
      (s.level = Number.parseInt(a.charAt(1), 10)),
    a === "img" &&
      i.transformImageUri &&
      (s.src = i.transformImageUri(
        String(s.src || ""),
        String(s.alt || ""),
        typeof s.title == "string" ? s.title : null
      )),
    !w && a === "li" && r.type === "element")
  ) {
    const x = wu(t);
    (s.checked = x && x.properties ? !!x.properties.checked : null),
      (s.index = tt(r, t)),
      (s.ordered = r.tagName === "ol");
  }
  return (
    !w &&
      (a === "ol" || a === "ul") &&
      ((s.ordered = a === "ol"), (s.depth = e.listDepth)),
    (a === "td" || a === "th") &&
      (s.align &&
        (s.style || (s.style = {}),
        (s.style.textAlign = s.align),
        delete s.align),
      w || (s.isHeader = a === "th")),
    !w &&
      a === "tr" &&
      r.type === "element" &&
      (s.isHeader = r.tagName === "thead"),
    i.sourcePos && (s["data-sourcepos"] = Iu(g)),
    !w && i.rawSourcePos && (s.sourcePosition = t.position),
    !w &&
      i.includeElementIndex &&
      ((s.index = tt(r, t)), (s.siblingCount = tt(r))),
    w || (s.node = t),
    m.length > 0 ? ke.createElement(h, s, m) : ke.createElement(h, s)
  );
}
function wu(e) {
  let t = -1;
  for (; ++t < e.children.length; ) {
    const n = e.children[t];
    if (n.type === "element" && n.tagName === "input") return n;
  }
  return null;
}
function tt(e, t) {
  let n = -1,
    r = 0;
  for (; ++n < e.children.length && e.children[n] !== t; )
    e.children[n].type === "element" && r++;
  return r;
}
function Su(e, t, n, r) {
  const i = Jn(r.schema, t);
  let l = n;
  l == null ||
    l !== l ||
    (Array.isArray(l) && (l = i.commaSeparated ? Kn(l) : Zn(l)),
    i.property === "style" && typeof l == "string" && (l = Eu(l)),
    i.space && i.property
      ? (e[ot.call(It, i.property) ? It[i.property] : i.property] = l)
      : i.attribute && (e[i.attribute] = l));
}
function Eu(e) {
  const t = {};
  try {
    xu(e, n);
  } catch {}
  return t;
  function n(r, i) {
    const l = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    t[l.replace(/-([a-z])/g, Cu)] = i;
  }
}
function Cu(e, t) {
  return t.toUpperCase();
}
function Iu(e) {
  return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column]
    .map(String)
    .join("");
}
const un = {}.hasOwnProperty,
  Tu = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  Oe = {
    plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
    renderers: { to: "components", id: "change-renderers-to-components" },
    astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
    allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
    escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
    source: { to: "children", id: "change-source-to-children" },
    allowNode: {
      to: "allowElement",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    allowedTypes: {
      to: "allowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    disallowedTypes: {
      to: "disallowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    includeNodeIndex: {
      to: "includeElementIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
  };
function zu(e) {
  for (const l in Oe)
    if (un.call(Oe, l) && un.call(e, l)) {
      const u = Oe[l];
      console.warn(
        `[react-markdown] Warning: please ${
          u.to ? `use \`${u.to}\` instead of` : "remove"
        } \`${l}\` (see <${Tu}#${u.id}> for more info)`
      ),
        delete Oe[l];
    }
  const t = Li()
      .use(ml)
      .use(e.remarkPlugins || [])
      .use(Jl, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
      .use(e.rehypePlugins || [])
      .use(eu, e),
    n = new dn();
  typeof e.children == "string"
    ? (n.value = e.children)
    : e.children !== void 0 &&
      e.children !== null &&
      console.warn(
        `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
      );
  const r = t.runSync(t.parse(n), n);
  if (r.type !== "root") throw new TypeError("Expected a `root` node");
  let i = ke.createElement(
    ke.Fragment,
    {},
    _n({ options: e, schema: tr, listDepth: 0 }, r)
  );
  return (
    e.className && (i = ke.createElement("div", { className: e.className }, i)),
    i
  );
}
zu.propTypes = {
  children: O.string,
  className: O.string,
  allowElement: O.func,
  allowedElements: O.arrayOf(O.string),
  disallowedElements: O.arrayOf(O.string),
  unwrapDisallowed: O.bool,
  remarkPlugins: O.arrayOf(
    O.oneOfType([
      O.object,
      O.func,
      O.arrayOf(
        O.oneOfType([O.bool, O.string, O.object, O.func, O.arrayOf(O.any)])
      ),
    ])
  ),
  rehypePlugins: O.arrayOf(
    O.oneOfType([
      O.object,
      O.func,
      O.arrayOf(
        O.oneOfType([O.bool, O.string, O.object, O.func, O.arrayOf(O.any)])
      ),
    ])
  ),
  sourcePos: O.bool,
  rawSourcePos: O.bool,
  skipHtml: O.bool,
  includeElementIndex: O.bool,
  transformLinkUri: O.oneOfType([O.func, O.bool]),
  linkTarget: O.oneOfType([O.func, O.string]),
  transformImageUri: O.func,
  components: O.object,
};
export { zu as default, gi as uriTransformer };
//# sourceMappingURL=index-0defdc21.js.map
