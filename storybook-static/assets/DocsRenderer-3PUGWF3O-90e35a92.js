import { _ as R } from "./iframe-5ac5d544.js";
import { r as u, R as o, $ as v1 } from "./index-61bf1805.js";
import {
  $ as Sc,
  s as un,
  _ as b1,
  t as E1,
  i as oa,
  c as Rc,
  v as Tc,
  w as Oc,
  x as x1,
  y as w1,
  z as _1,
  A as kc,
  B as A1,
  C as C1,
  D as S1,
  E as R1,
  F as Dc,
  G as T1,
  H as O1,
  I as k1,
  J as D1,
  K as L1,
  L as Lc,
  M as $1,
  N as I1,
  O as $c,
  P as F1,
  Q as ei,
  d as Ic,
  R as Fc,
  U as Pc,
  V as P1,
  W as M1,
  X as B1,
  f as N1,
  S as El,
  Y as Eo,
  l as Ba,
  r as V1,
  u as H1,
} from "./index-46294899.js";
import {
  a as Mc,
  b as ti,
  u as xl,
  c as Bc,
  d as lr,
  e as fr,
  f as j1,
  t as xo,
  g as Z1,
  h as ri,
  i as ie,
  l as wl,
  m as z1,
  j as Ur,
  _ as ae,
} from "./chunk-6P7RB4HF-150ba47c.js";
import { g as dn, c as Na } from "./_commonjsHelpers-de833af9.js";
import { c as En } from "./_commonjs-dynamic-modules-302442b1.js";
import { s as Oe } from "./index-d475d2ea.js";
import { L as Nc, v as q1 } from "./index-d37d4223.js";
import { d as Le } from "./index-356e4a49.js";
var mt = function () {
  return (
    (mt =
      Object.assign ||
      function (t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
          r = arguments[n];
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    mt.apply(this, arguments)
  );
};
function Vc(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
function U1(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var In = "right-scroll-bar-position",
  Fn = "width-before-scroll-bar",
  W1 = "with-scroll-bars-hidden",
  G1 = "--removed-body-scroll-bar-size";
function K1(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Y1(e, t) {
  var r = u.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var a = r.value;
          a !== n && ((r.value = n), r.callback(n, a));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
function X1(e, t) {
  return Y1(t || null, function (r) {
    return e.forEach(function (n) {
      return K1(n, r);
    });
  });
}
function J1(e) {
  return e;
}
function Q1(e, t) {
  t === void 0 && (t = J1);
  var r = [],
    n = !1,
    a = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, n);
        return (
          r.push(l),
          function () {
            r = r.filter(function (s) {
              return s !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (n = !0; r.length; ) {
          var l = r;
          (r = []), l.forEach(i);
        }
        r = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (i) {
        n = !0;
        var l = [];
        if (r.length) {
          var s = r;
          (r = []), s.forEach(i), (l = r);
        }
        var c = function () {
            var p = l;
            (l = []), p.forEach(i);
          },
          d = function () {
            return Promise.resolve().then(c);
          };
        d(),
          (r = {
            push: function (p) {
              l.push(p), d();
            },
            filter: function (p) {
              return (l = l.filter(p)), r;
            },
          });
      },
    };
  return a;
}
function ep(e) {
  e === void 0 && (e = {});
  var t = Q1(null);
  return (t.options = mt({ async: !0, ssr: !1 }, e)), t;
}
var Hc = function (e) {
  var t = e.sideCar,
    r = Vc(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return u.createElement(n, mt({}, r));
};
Hc.isSideCarExport = !0;
function tp(e, t) {
  return e.useMedium(t), Hc;
}
var jc = ep(),
  Va = function () {},
  ia = u.forwardRef(function (e, t) {
    var r = u.useRef(null),
      n = u.useState({
        onScrollCapture: Va,
        onWheelCapture: Va,
        onTouchMoveCapture: Va,
      }),
      a = n[0],
      i = n[1],
      l = e.forwardProps,
      s = e.children,
      c = e.className,
      d = e.removeScrollBar,
      p = e.enabled,
      h = e.shards,
      y = e.sideCar,
      f = e.noIsolation,
      g = e.inert,
      m = e.allowPinchZoom,
      x = e.as,
      v = x === void 0 ? "div" : x,
      E = Vc(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      b = y,
      w = X1([r, t]),
      _ = mt(mt({}, E), a);
    return u.createElement(
      u.Fragment,
      null,
      p &&
        u.createElement(b, {
          sideCar: jc,
          removeScrollBar: d,
          shards: h,
          noIsolation: f,
          inert: g,
          setCallbacks: i,
          allowPinchZoom: !!m,
          lockRef: r,
        }),
      l
        ? u.cloneElement(u.Children.only(s), mt(mt({}, _), { ref: w }))
        : u.createElement(v, mt({}, _, { className: c, ref: w }), s)
    );
  });
ia.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ia.classNames = { fullWidth: Fn, zeroRight: In };
var _l,
  rp = function () {
    if (_l) return _l;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function np() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = rp();
  return t && e.setAttribute("nonce", t), e;
}
function ap(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function op(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ip = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = np()) && (ap(t, r), op(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  lp = function () {
    var e = ip();
    return function (t, r) {
      u.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r]
      );
    };
  },
  Zc = function () {
    var e = lp(),
      t = function (r) {
        var n = r.styles,
          a = r.dynamic;
        return e(n, a), null;
      };
    return t;
  },
  sp = { left: 0, top: 0, right: 0, gap: 0 },
  Ha = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  cp = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      a = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ha(r), Ha(n), Ha(a)];
  },
  up = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return sp;
    var t = cp(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  dp = Zc(),
  pp = function (e, t, r, n) {
    var a = e.left,
      i = e.top,
      l = e.right,
      s = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          W1,
          ` {
   overflow: hidden `
        )
        .concat(
          n,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          n,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  a,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  n,
                  `;
    `
                ),
            r === "padding" &&
              "padding-right: ".concat(s, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          In,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(
          Fn,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(In, " .")
        .concat(
          In,
          ` {
    right: 0 `
        )
        .concat(
          n,
          `;
  }
  
  .`
        )
        .concat(Fn, " .")
        .concat(
          Fn,
          ` {
    margin-right: 0 `
        )
        .concat(
          n,
          `;
  }
  
  body {
    `
        )
        .concat(G1, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  fp = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      a = n === void 0 ? "margin" : n,
      i = u.useMemo(
        function () {
          return up(a);
        },
        [a]
      );
    return u.createElement(dp, { styles: pp(i, !t, a, r ? "" : "!important") });
  },
  wo = !1;
if (typeof window < "u")
  try {
    var xn = Object.defineProperty({}, "passive", {
      get: function () {
        return (wo = !0), !0;
      },
    });
    window.addEventListener("test", xn, xn),
      window.removeEventListener("test", xn, xn);
  } catch {
    wo = !1;
  }
var sr = wo ? { passive: !1 } : !1,
  mp = function (e) {
    return e.tagName === "TEXTAREA";
  },
  zc = function (e, t) {
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !mp(e) && r[t] === "visible")
    );
  },
  gp = function (e) {
    return zc(e, "overflowY");
  },
  hp = function (e) {
    return zc(e, "overflowX");
  },
  Al = function (e, t) {
    var r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var n = qc(e, r);
      if (n) {
        var a = Uc(e, r),
          i = a[1],
          l = a[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== document.body);
    return !1;
  },
  yp = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  vp = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  qc = function (e, t) {
    return e === "v" ? gp(t) : hp(t);
  },
  Uc = function (e, t) {
    return e === "v" ? yp(t) : vp(t);
  },
  bp = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ep = function (e, t, r, n, a) {
    var i = bp(e, window.getComputedStyle(t).direction),
      l = i * n,
      s = r.target,
      c = t.contains(s),
      d = !1,
      p = l > 0,
      h = 0,
      y = 0;
    do {
      var f = Uc(e, s),
        g = f[0],
        m = f[1],
        x = f[2],
        v = m - x - i * g;
      (g || v) && qc(e, s) && ((h += v), (y += g)), (s = s.parentNode);
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((p && ((a && h === 0) || (!a && l > h))) ||
        (!p && ((a && y === 0) || (!a && -l > y)))) &&
        (d = !0),
      d
    );
  },
  wn = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Cl = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Sl = function (e) {
    return e && "current" in e ? e.current : e;
  },
  xp = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  wp = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  _p = 0,
  cr = [];
function Ap(e) {
  var t = u.useRef([]),
    r = u.useRef([0, 0]),
    n = u.useRef(),
    a = u.useState(_p++)[0],
    i = u.useState(function () {
      return Zc();
    })[0],
    l = u.useRef(e);
  u.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    u.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(a));
          var m = U1([e.lockRef.current], (e.shards || []).map(Sl), !0).filter(
            Boolean
          );
          return (
            m.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(a));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(a)),
                m.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(a));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = u.useCallback(function (m, x) {
      if ("touches" in m && m.touches.length === 2)
        return !l.current.allowPinchZoom;
      var v = wn(m),
        E = r.current,
        b = "deltaX" in m ? m.deltaX : E[0] - v[0],
        w = "deltaY" in m ? m.deltaY : E[1] - v[1],
        _,
        A = m.target,
        S = Math.abs(b) > Math.abs(w) ? "h" : "v";
      if ("touches" in m && S === "h" && A.type === "range") return !1;
      var C = Al(S, A);
      if (!C) return !0;
      if ((C ? (_ = S) : ((_ = S === "v" ? "h" : "v"), (C = Al(S, A))), !C))
        return !1;
      if (
        (!n.current && "changedTouches" in m && (b || w) && (n.current = _), !_)
      )
        return !0;
      var k = n.current || _;
      return Ep(k, x, m, k === "h" ? b : w, !0);
    }, []),
    c = u.useCallback(function (m) {
      var x = m;
      if (!(!cr.length || cr[cr.length - 1] !== i)) {
        var v = "deltaY" in x ? Cl(x) : wn(x),
          E = t.current.filter(function (_) {
            return _.name === x.type && _.target === x.target && xp(_.delta, v);
          })[0];
        if (E && E.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!E) {
          var b = (l.current.shards || [])
              .map(Sl)
              .filter(Boolean)
              .filter(function (_) {
                return _.contains(x.target);
              }),
            w = b.length > 0 ? s(x, b[0]) : !l.current.noIsolation;
          w && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    d = u.useCallback(function (m, x, v, E) {
      var b = { name: m, delta: x, target: v, should: E };
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== b;
          });
        }, 1);
    }, []),
    p = u.useCallback(function (m) {
      (r.current = wn(m)), (n.current = void 0);
    }, []),
    h = u.useCallback(function (m) {
      d(m.type, Cl(m), m.target, s(m, e.lockRef.current));
    }, []),
    y = u.useCallback(function (m) {
      d(m.type, wn(m), m.target, s(m, e.lockRef.current));
    }, []);
  u.useEffect(function () {
    return (
      cr.push(i),
      e.setCallbacks({
        onScrollCapture: h,
        onWheelCapture: h,
        onTouchMoveCapture: y,
      }),
      document.addEventListener("wheel", c, sr),
      document.addEventListener("touchmove", c, sr),
      document.addEventListener("touchstart", p, sr),
      function () {
        (cr = cr.filter(function (m) {
          return m !== i;
        })),
          document.removeEventListener("wheel", c, sr),
          document.removeEventListener("touchmove", c, sr),
          document.removeEventListener("touchstart", p, sr);
      }
    );
  }, []);
  var f = e.removeScrollBar,
    g = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    g ? u.createElement(i, { styles: wp(a) }) : null,
    f ? u.createElement(fp, { gapMode: "margin" }) : null
  );
}
const Cp = tp(jc, Ap);
var Wc = u.forwardRef(function (e, t) {
  return u.createElement(ia, mt({}, e, { ref: t, sideCar: Cp }));
});
Wc.classNames = ia.classNames;
const Sp = Wc;
var Rp = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ur = new WeakMap(),
  _n = new WeakMap(),
  An = {},
  ja = 0,
  Gc = function (e) {
    return e && (e.host || Gc(e.parentNode));
  },
  Tp = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var n = Gc(r);
        return n && e.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  Op = function (e, t, r, n) {
    var a = Tp(t, Array.isArray(e) ? e : [e]);
    An[r] || (An[r] = new WeakMap());
    var i = An[r],
      l = [],
      s = new Set(),
      c = new Set(a),
      d = function (h) {
        !h || s.has(h) || (s.add(h), d(h.parentNode));
      };
    a.forEach(d);
    var p = function (h) {
      !h ||
        c.has(h) ||
        Array.prototype.forEach.call(h.children, function (y) {
          if (s.has(y)) p(y);
          else {
            var f = y.getAttribute(n),
              g = f !== null && f !== "false",
              m = (ur.get(y) || 0) + 1,
              x = (i.get(y) || 0) + 1;
            ur.set(y, m),
              i.set(y, x),
              l.push(y),
              m === 1 && g && _n.set(y, !0),
              x === 1 && y.setAttribute(r, "true"),
              g || y.setAttribute(n, "true");
          }
        });
    };
    return (
      p(t),
      s.clear(),
      ja++,
      function () {
        l.forEach(function (h) {
          var y = ur.get(h) - 1,
            f = i.get(h) - 1;
          ur.set(h, y),
            i.set(h, f),
            y || (_n.has(h) || h.removeAttribute(n), _n.delete(h)),
            f || h.removeAttribute(r);
        }),
          ja--,
          ja ||
            ((ur = new WeakMap()),
            (ur = new WeakMap()),
            (_n = new WeakMap()),
            (An = {}));
      }
    );
  },
  kp = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]),
      a = t || Rp(e);
    return a
      ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))),
        Op(n, a, r, "aria-hidden"))
      : function () {
          return null;
        };
  };
const Dp = ["top", "right", "bottom", "left"],
  Mt = Math.min,
  Be = Math.max,
  Gn = Math.round,
  Cn = Math.floor,
  Bt = (e) => ({ x: e, y: e }),
  Lp = { left: "right", right: "left", bottom: "top", top: "bottom" },
  $p = { start: "end", end: "start" };
function _o(e, t, r) {
  return Be(e, Mt(t, r));
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function St(e) {
  return e.split("-")[0];
}
function Tr(e) {
  return e.split("-")[1];
}
function ni(e) {
  return e === "x" ? "y" : "x";
}
function ai(e) {
  return e === "y" ? "height" : "width";
}
function Or(e) {
  return ["top", "bottom"].includes(St(e)) ? "y" : "x";
}
function oi(e) {
  return ni(Or(e));
}
function Ip(e, t, r) {
  r === void 0 && (r = !1);
  const n = Tr(e),
    a = oi(e),
    i = ai(a);
  let l =
    a === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = Kn(l)), [l, Kn(l)];
}
function Fp(e) {
  const t = Kn(e);
  return [Ao(e), t, Ao(t)];
}
function Ao(e) {
  return e.replace(/start|end/g, (t) => $p[t]);
}
function Pp(e, t, r) {
  const n = ["left", "right"],
    a = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? a : n) : t ? n : a;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Mp(e, t, r, n) {
  const a = Tr(e);
  let i = Pp(St(e), r === "start", n);
  return (
    a && ((i = i.map((l) => l + "-" + a)), t && (i = i.concat(i.map(Ao)))), i
  );
}
function Kn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lp[t]);
}
function Bp(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Kc(e) {
  return typeof e != "number"
    ? Bp(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Yn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Rl(e, t, r) {
  let { reference: n, floating: a } = e;
  const i = Or(t),
    l = oi(t),
    s = ai(l),
    c = St(t),
    d = i === "y",
    p = n.x + n.width / 2 - a.width / 2,
    h = n.y + n.height / 2 - a.height / 2,
    y = n[s] / 2 - a[s] / 2;
  let f;
  switch (c) {
    case "top":
      f = { x: p, y: n.y - a.height };
      break;
    case "bottom":
      f = { x: p, y: n.y + n.height };
      break;
    case "right":
      f = { x: n.x + n.width, y: h };
      break;
    case "left":
      f = { x: n.x - a.width, y: h };
      break;
    default:
      f = { x: n.x, y: n.y };
  }
  switch (Tr(t)) {
    case "start":
      f[l] -= y * (r && d ? -1 : 1);
      break;
    case "end":
      f[l] += y * (r && d ? -1 : 1);
      break;
  }
  return f;
}
const Np = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: a = "absolute",
      middleware: i = [],
      platform: l,
    } = r,
    s = i.filter(Boolean),
    c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: a }),
    { x: p, y: h } = Rl(d, n, c),
    y = n,
    f = {},
    g = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: x, fn: v } = s[m],
      {
        x: E,
        y: b,
        data: w,
        reset: _,
      } = await v({
        x: p,
        y: h,
        initialPlacement: n,
        placement: y,
        strategy: a,
        middlewareData: f,
        rects: d,
        platform: l,
        elements: { reference: e, floating: t },
      });
    if (
      ((p = E ?? p),
      (h = b ?? h),
      (f = { ...f, [x]: { ...f[x], ...w } }),
      _ && g <= 50)
    ) {
      g++,
        typeof _ == "object" &&
          (_.placement && (y = _.placement),
          _.rects &&
            (d =
              _.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: a,
                  })
                : _.rects),
          ({ x: p, y: h } = Rl(d, y, c))),
        (m = -1);
      continue;
    }
  }
  return { x: p, y: h, placement: y, strategy: a, middlewareData: f };
};
async function Kr(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: i, rects: l, elements: s, strategy: c } = e,
    {
      boundary: d = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: h = "floating",
      altBoundary: y = !1,
      padding: f = 0,
    } = Ct(t, e),
    g = Kc(f),
    x = s[y ? (h === "floating" ? "reference" : "floating") : h],
    v = Yn(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          r
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: d,
        rootBoundary: p,
        strategy: c,
      })
    ),
    E = h === "floating" ? { ...l.floating, x: n, y: a } : l.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    w = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    _ = Yn(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: E,
            offsetParent: b,
            strategy: c,
          })
        : E
    );
  return {
    top: (v.top - _.top + g.top) / w.y,
    bottom: (_.bottom - v.bottom + g.bottom) / w.y,
    left: (v.left - _.left + g.left) / w.x,
    right: (_.right - v.right + g.right) / w.x,
  };
}
const Tl = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: a,
          rects: i,
          platform: l,
          elements: s,
        } = t,
        { element: c, padding: d = 0 } = Ct(e, t) || {};
      if (c == null) return {};
      const p = Kc(d),
        h = { x: r, y: n },
        y = oi(a),
        f = ai(y),
        g = await l.getDimensions(c),
        m = y === "y",
        x = m ? "top" : "left",
        v = m ? "bottom" : "right",
        E = m ? "clientHeight" : "clientWidth",
        b = i.reference[f] + i.reference[y] - h[y] - i.floating[f],
        w = h[y] - i.reference[y],
        _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
      let A = _ ? _[E] : 0;
      (!A || !(await (l.isElement == null ? void 0 : l.isElement(_)))) &&
        (A = s.floating[E] || i.floating[f]);
      const S = b / 2 - w / 2,
        C = A / 2 - g[f] / 2 - 1,
        k = Mt(p[x], C),
        D = Mt(p[v], C),
        L = k,
        I = A - g[f] - D,
        $ = A / 2 - g[f] / 2 + S,
        M = _o(L, $, I),
        P =
          Tr(a) != null &&
          $ != M &&
          i.reference[f] / 2 - ($ < L ? k : D) - g[f] / 2 < 0
            ? $ < L
              ? L - $
              : I - $
            : 0;
      return { [y]: h[y] - P, data: { [y]: M, centerOffset: $ - M + P } };
    },
  }),
  Vp = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r;
          const {
              placement: n,
              middlewareData: a,
              rects: i,
              initialPlacement: l,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: h,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: f = "none",
              flipAlignment: g = !0,
              ...m
            } = Ct(e, t),
            x = St(n),
            v = St(l) === l,
            E = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = h || (v || !g ? [Kn(l)] : Fp(l));
          !h && f !== "none" && b.push(...Mp(l, g, f, E));
          const w = [l, ...b],
            _ = await Kr(t, m),
            A = [];
          let S = ((r = a.flip) == null ? void 0 : r.overflows) || [];
          if ((d && A.push(_[x]), p)) {
            const L = Ip(n, i, E);
            A.push(_[L[0]], _[L[1]]);
          }
          if (
            ((S = [...S, { placement: n, overflows: A }]),
            !A.every((L) => L <= 0))
          ) {
            var C, k;
            const L = (((C = a.flip) == null ? void 0 : C.index) || 0) + 1,
              I = w[L];
            if (I)
              return {
                data: { index: L, overflows: S },
                reset: { placement: I },
              };
            let $ =
              (k = S.filter((M) => M.overflows[0] <= 0).sort(
                (M, F) => M.overflows[1] - F.overflows[1]
              )[0]) == null
                ? void 0
                : k.placement;
            if (!$)
              switch (y) {
                case "bestFit": {
                  var D;
                  const M =
                    (D = S.map((F) => [
                      F.placement,
                      F.overflows
                        .filter((P) => P > 0)
                        .reduce((P, j) => P + j, 0),
                    ]).sort((F, P) => F[1] - P[1])[0]) == null
                      ? void 0
                      : D[0];
                  M && ($ = M);
                  break;
                }
                case "initialPlacement":
                  $ = l;
                  break;
              }
            if (n !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Ol(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function kl(e) {
  return Dp.some((t) => e[t] >= 0);
}
const Hp = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: r } = t,
          { strategy: n = "referenceHidden", ...a } = Ct(e, t);
        switch (n) {
          case "referenceHidden": {
            const i = await Kr(t, { ...a, elementContext: "reference" }),
              l = Ol(i, r.reference);
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: kl(l) },
            };
          }
          case "escaped": {
            const i = await Kr(t, { ...a, altBoundary: !0 }),
              l = Ol(i, r.floating);
            return { data: { escapedOffsets: l, escaped: kl(l) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function jp(e, t) {
  const { placement: r, platform: n, elements: a } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)),
    l = St(r),
    s = Tr(r),
    c = Or(r) === "y",
    d = ["left", "top"].includes(l) ? -1 : 1,
    p = i && c ? -1 : 1,
    h = Ct(t, e);
  let {
    mainAxis: y,
    crossAxis: f,
    alignmentAxis: g,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
  return (
    s && typeof g == "number" && (f = s === "end" ? g * -1 : g),
    c ? { x: f * p, y: y * d } : { x: y * d, y: f * p }
  );
}
const Zp = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: r, y: n } = t,
            a = await jp(t, e);
          return { x: r + a.x, y: n + a.y, data: a };
        },
      }
    );
  },
  zp = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: a } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: s = {
                fn: (x) => {
                  let { x: v, y: E } = x;
                  return { x: v, y: E };
                },
              },
              ...c
            } = Ct(e, t),
            d = { x: r, y: n },
            p = await Kr(t, c),
            h = Or(St(a)),
            y = ni(h);
          let f = d[y],
            g = d[h];
          if (i) {
            const x = y === "y" ? "top" : "left",
              v = y === "y" ? "bottom" : "right",
              E = f + p[x],
              b = f - p[v];
            f = _o(E, f, b);
          }
          if (l) {
            const x = h === "y" ? "top" : "left",
              v = h === "y" ? "bottom" : "right",
              E = g + p[x],
              b = g - p[v];
            g = _o(E, g, b);
          }
          const m = s.fn({ ...t, [y]: f, [h]: g });
          return { ...m, data: { x: m.x - r, y: m.y - n } };
        },
      }
    );
  },
  qp = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: a, rects: i, middlewareData: l } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: d = !0 } = Ct(e, t),
            p = { x: r, y: n },
            h = Or(a),
            y = ni(h);
          let f = p[y],
            g = p[h];
          const m = Ct(s, t),
            x =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (c) {
            const b = y === "y" ? "height" : "width",
              w = i.reference[y] - i.floating[b] + x.mainAxis,
              _ = i.reference[y] + i.reference[b] - x.mainAxis;
            f < w ? (f = w) : f > _ && (f = _);
          }
          if (d) {
            var v, E;
            const b = y === "y" ? "width" : "height",
              w = ["top", "left"].includes(St(a)),
              _ =
                i.reference[h] -
                i.floating[b] +
                ((w && ((v = l.offset) == null ? void 0 : v[h])) || 0) +
                (w ? 0 : x.crossAxis),
              A =
                i.reference[h] +
                i.reference[b] +
                (w ? 0 : ((E = l.offset) == null ? void 0 : E[h]) || 0) -
                (w ? x.crossAxis : 0);
            g < _ ? (g = _) : g > A && (g = A);
          }
          return { [y]: f, [h]: g };
        },
      }
    );
  },
  Up = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: r, rects: n, platform: a, elements: i } = t,
            { apply: l = () => {}, ...s } = Ct(e, t),
            c = await Kr(t, s),
            d = St(r),
            p = Tr(r),
            h = Or(r) === "y",
            { width: y, height: f } = n.floating;
          let g, m;
          d === "top" || d === "bottom"
            ? ((g = d),
              (m =
                p ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = d), (g = p === "end" ? "top" : "bottom"));
          const x = f - c[g],
            v = y - c[m],
            E = !t.middlewareData.shift;
          let b = x,
            w = v;
          if (h) {
            const A = y - c.left - c.right;
            w = p || E ? Mt(v, A) : A;
          } else {
            const A = f - c.top - c.bottom;
            b = p || E ? Mt(x, A) : A;
          }
          if (E && !p) {
            const A = Be(c.left, 0),
              S = Be(c.right, 0),
              C = Be(c.top, 0),
              k = Be(c.bottom, 0);
            h
              ? (w = y - 2 * (A !== 0 || S !== 0 ? A + S : Be(c.left, c.right)))
              : (b =
                  f - 2 * (C !== 0 || k !== 0 ? C + k : Be(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: w, availableHeight: b });
          const _ = await a.getDimensions(i.floating);
          return y !== _.width || f !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Nt(e) {
  return Yc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ot(e) {
  var t;
  return (t = (Yc(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Yc(e) {
  return e instanceof Node || e instanceof Ne(e).Node;
}
function Rt(e) {
  return e instanceof Element || e instanceof Ne(e).Element;
}
function bt(e) {
  return e instanceof HTMLElement || e instanceof Ne(e).HTMLElement;
}
function Dl(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function pn(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: a } = Ye(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(a)
  );
}
function Wp(e) {
  return ["table", "td", "th"].includes(Nt(e));
}
function ii(e) {
  const t = li(),
    r = Ye(e);
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n)
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n)
    )
  );
}
function Gp(e) {
  let t = vr(e);
  for (; bt(t) && !la(t); ) {
    if (ii(t)) return t;
    t = vr(t);
  }
  return null;
}
function li() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function la(e) {
  return ["html", "body", "#document"].includes(Nt(e));
}
function Ye(e) {
  return Ne(e).getComputedStyle(e);
}
function sa(e) {
  return Rt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function vr(e) {
  if (Nt(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Dl(e) && e.host) || Ot(e);
  return Dl(t) ? t.host : t;
}
function Xc(e) {
  const t = vr(e);
  return la(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : bt(t) && pn(t)
    ? t
    : Xc(t);
}
function Xn(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = Xc(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ne(n);
  return a
    ? t.concat(i, i.visualViewport || [], pn(n) ? n : [])
    : t.concat(n, Xn(n));
}
function Jc(e) {
  const t = Ye(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const a = bt(e),
    i = a ? e.offsetWidth : r,
    l = a ? e.offsetHeight : n,
    s = Gn(r) !== i || Gn(n) !== l;
  return s && ((r = i), (n = l)), { width: r, height: n, $: s };
}
function si(e) {
  return Rt(e) ? e : e.contextElement;
}
function gr(e) {
  const t = si(e);
  if (!bt(t)) return Bt(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: a, $: i } = Jc(t);
  let l = (i ? Gn(r.width) : r.width) / n,
    s = (i ? Gn(r.height) : r.height) / a;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: l, y: s }
  );
}
const Kp = Bt(0);
function Qc(e) {
  const t = Ne(e);
  return !li() || !t.visualViewport
    ? Kp
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Yp(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== Ne(e)) ? !1 : t;
}
function Jt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(),
    i = si(e);
  let l = Bt(1);
  t && (n ? Rt(n) && (l = gr(n)) : (l = gr(e)));
  const s = Yp(i, r, n) ? Qc(i) : Bt(0);
  let c = (a.left + s.x) / l.x,
    d = (a.top + s.y) / l.y,
    p = a.width / l.x,
    h = a.height / l.y;
  if (i) {
    const y = Ne(i),
      f = n && Rt(n) ? Ne(n) : n;
    let g = y.frameElement;
    for (; g && n && f !== y; ) {
      const m = gr(g),
        x = g.getBoundingClientRect(),
        v = Ye(g),
        E = x.left + (g.clientLeft + parseFloat(v.paddingLeft)) * m.x,
        b = x.top + (g.clientTop + parseFloat(v.paddingTop)) * m.y;
      (c *= m.x),
        (d *= m.y),
        (p *= m.x),
        (h *= m.y),
        (c += E),
        (d += b),
        (g = Ne(g).frameElement);
    }
  }
  return Yn({ width: p, height: h, x: c, y: d });
}
function Xp(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const a = bt(r),
    i = Ot(r);
  if (r === i) return t;
  let l = { scrollLeft: 0, scrollTop: 0 },
    s = Bt(1);
  const c = Bt(0);
  if (
    (a || (!a && n !== "fixed")) &&
    ((Nt(r) !== "body" || pn(i)) && (l = sa(r)), bt(r))
  ) {
    const d = Jt(r);
    (s = gr(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop);
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - l.scrollLeft * s.x + c.x,
    y: t.y * s.y - l.scrollTop * s.y + c.y,
  };
}
function Jp(e) {
  return Array.from(e.getClientRects());
}
function eu(e) {
  return Jt(Ot(e)).left + sa(e).scrollLeft;
}
function Qp(e) {
  const t = Ot(e),
    r = sa(e),
    n = e.ownerDocument.body,
    a = Be(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = Be(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -r.scrollLeft + eu(e);
  const s = -r.scrollTop;
  return (
    Ye(n).direction === "rtl" && (l += Be(t.clientWidth, n.clientWidth) - a),
    { width: a, height: i, x: l, y: s }
  );
}
function ef(e, t) {
  const r = Ne(e),
    n = Ot(e),
    a = r.visualViewport;
  let i = n.clientWidth,
    l = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    (i = a.width), (l = a.height);
    const d = li();
    (!d || (d && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: i, height: l, x: s, y: c };
}
function tf(e, t) {
  const r = Jt(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    a = r.left + e.clientLeft,
    i = bt(e) ? gr(e) : Bt(1),
    l = e.clientWidth * i.x,
    s = e.clientHeight * i.y,
    c = a * i.x,
    d = n * i.y;
  return { width: l, height: s, x: c, y: d };
}
function Ll(e, t, r) {
  let n;
  if (t === "viewport") n = ef(e, r);
  else if (t === "document") n = Qp(Ot(e));
  else if (Rt(t)) n = tf(t, r);
  else {
    const a = Qc(e);
    n = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return Yn(n);
}
function tu(e, t) {
  const r = vr(e);
  return r === t || !Rt(r) || la(r)
    ? !1
    : Ye(r).position === "fixed" || tu(r, t);
}
function rf(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Xn(e).filter((s) => Rt(s) && Nt(s) !== "body"),
    a = null;
  const i = Ye(e).position === "fixed";
  let l = i ? vr(e) : e;
  for (; Rt(l) && !la(l); ) {
    const s = Ye(l),
      c = ii(l);
    !c && s.position === "fixed" && (a = null),
      (
        i
          ? !c && !a
          : (!c &&
              s.position === "static" &&
              !!a &&
              ["absolute", "fixed"].includes(a.position)) ||
            (pn(l) && !c && tu(e, l))
      )
        ? (n = n.filter((p) => p !== l))
        : (a = s),
      (l = vr(l));
  }
  return t.set(e, n), n;
}
function nf(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
  const l = [...(r === "clippingAncestors" ? rf(t, this._c) : [].concat(r)), n],
    s = l[0],
    c = l.reduce((d, p) => {
      const h = Ll(t, p, a);
      return (
        (d.top = Be(h.top, d.top)),
        (d.right = Mt(h.right, d.right)),
        (d.bottom = Mt(h.bottom, d.bottom)),
        (d.left = Be(h.left, d.left)),
        d
      );
    }, Ll(t, s, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function af(e) {
  return Jc(e);
}
function of(e, t, r) {
  const n = bt(t),
    a = Ot(t),
    i = r === "fixed",
    l = Jt(e, !0, i, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const c = Bt(0);
  if (n || (!n && !i))
    if (((Nt(t) !== "body" || pn(a)) && (s = sa(t)), n)) {
      const d = Jt(t, !0, i, t);
      (c.x = d.x + t.clientLeft), (c.y = d.y + t.clientTop);
    } else a && (c.x = eu(a));
  return {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height,
  };
}
function $l(e, t) {
  return !bt(e) || Ye(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function ru(e, t) {
  const r = Ne(e);
  if (!bt(e)) return r;
  let n = $l(e, t);
  for (; n && Wp(n) && Ye(n).position === "static"; ) n = $l(n, t);
  return n &&
    (Nt(n) === "html" ||
      (Nt(n) === "body" && Ye(n).position === "static" && !ii(n)))
    ? r
    : n || Gp(e) || r;
}
const lf = async function (e) {
  let { reference: t, floating: r, strategy: n } = e;
  const a = this.getOffsetParent || ru,
    i = this.getDimensions;
  return {
    reference: of(t, await a(r), n),
    floating: { x: 0, y: 0, ...(await i(r)) },
  };
};
function sf(e) {
  return Ye(e).direction === "rtl";
}
const cf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xp,
  getDocumentElement: Ot,
  getClippingRect: nf,
  getOffsetParent: ru,
  getElementRects: lf,
  getClientRects: Jp,
  getDimensions: af,
  getScale: gr,
  isElement: Rt,
  isRTL: sf,
};
function uf(e, t) {
  let r = null,
    n;
  const a = Ot(e);
  function i() {
    clearTimeout(n), r && r.disconnect(), (r = null);
  }
  function l(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const { left: d, top: p, width: h, height: y } = e.getBoundingClientRect();
    if ((s || t(), !h || !y)) return;
    const f = Cn(p),
      g = Cn(a.clientWidth - (d + h)),
      m = Cn(a.clientHeight - (p + y)),
      x = Cn(d),
      E = {
        rootMargin: -f + "px " + -g + "px " + -m + "px " + -x + "px",
        threshold: Be(0, Mt(1, c)) || 1,
      };
    let b = !0;
    function w(_) {
      const A = _[0].intersectionRatio;
      if (A !== c) {
        if (!b) return l();
        A
          ? l(!1, A)
          : (n = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      b = !1;
    }
    try {
      r = new IntersectionObserver(w, { ...E, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(w, E);
    }
    r.observe(e);
  }
  return l(!0), i;
}
function df(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = n,
    d = si(e),
    p = a || i ? [...(d ? Xn(d) : []), ...Xn(t)] : [];
  p.forEach((v) => {
    a && v.addEventListener("scroll", r, { passive: !0 }),
      i && v.addEventListener("resize", r);
  });
  const h = d && s ? uf(d, r) : null;
  let y = -1,
    f = null;
  l &&
    ((f = new ResizeObserver((v) => {
      let [E] = v;
      E &&
        E.target === d &&
        f &&
        (f.unobserve(t),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          f && f.observe(t);
        }))),
        r();
    })),
    d && !c && f.observe(d),
    f.observe(t));
  let g,
    m = c ? Jt(e) : null;
  c && x();
  function x() {
    const v = Jt(e);
    m &&
      (v.x !== m.x ||
        v.y !== m.y ||
        v.width !== m.width ||
        v.height !== m.height) &&
      r(),
      (m = v),
      (g = requestAnimationFrame(x));
  }
  return (
    r(),
    () => {
      p.forEach((v) => {
        a && v.removeEventListener("scroll", r),
          i && v.removeEventListener("resize", r);
      }),
        h && h(),
        f && f.disconnect(),
        (f = null),
        c && cancelAnimationFrame(g);
    }
  );
}
const pf = (e, t, r) => {
  const n = new Map(),
    a = { platform: cf, ...r },
    i = { ...a.platform, _c: n };
  return Np(e, t, { ...a, platform: i });
};
var nu = { exports: {} };
(function (e, t) {
  (function (r) {
    e.exports = r();
  })(function () {
    return (function r(n, a, i) {
      function l(d, p) {
        if (!a[d]) {
          if (!n[d]) {
            var h = typeof En == "function" && En;
            if (!p && h) return h(d, !0);
            if (s) return s(d, !0);
            var y = new Error("Cannot find module '" + d + "'");
            throw ((y.code = "MODULE_NOT_FOUND"), y);
          }
          var f = (a[d] = { exports: {} });
          n[d][0].call(
            f.exports,
            function (g) {
              var m = n[d][1][g];
              return l(m || g);
            },
            f,
            f.exports,
            r,
            n,
            a,
            i
          );
        }
        return a[d].exports;
      }
      for (var s = typeof En == "function" && En, c = 0; c < i.length; c++)
        l(i[c]);
      return l;
    })(
      {
        1: [
          function (r, n, a) {
            n.exports = function (i) {
              if (typeof Map != "function" || i) {
                var l = r("./similar");
                return new l();
              } else return new Map();
            };
          },
          { "./similar": 2 },
        ],
        2: [
          function (r, n, a) {
            function i() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (i.prototype.get = function (l) {
              var s;
              if (this.lastItem && this.isEqual(this.lastItem.key, l))
                return this.lastItem.val;
              if (((s = this.indexOf(l)), s >= 0))
                return (this.lastItem = this.list[s]), this.list[s].val;
            }),
              (i.prototype.set = function (l, s) {
                var c;
                return this.lastItem && this.isEqual(this.lastItem.key, l)
                  ? ((this.lastItem.val = s), this)
                  : ((c = this.indexOf(l)),
                    c >= 0
                      ? ((this.lastItem = this.list[c]),
                        (this.list[c].val = s),
                        this)
                      : ((this.lastItem = { key: l, val: s }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (i.prototype.delete = function (l) {
                var s;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, l) &&
                    (this.lastItem = void 0),
                  (s = this.indexOf(l)),
                  s >= 0)
                )
                  return this.size--, this.list.splice(s, 1)[0];
              }),
              (i.prototype.has = function (l) {
                var s;
                return this.lastItem && this.isEqual(this.lastItem.key, l)
                  ? !0
                  : ((s = this.indexOf(l)),
                    s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
              }),
              (i.prototype.forEach = function (l, s) {
                var c;
                for (c = 0; c < this.size; c++)
                  l.call(s || this, this.list[c].val, this.list[c].key, this);
              }),
              (i.prototype.indexOf = function (l) {
                var s;
                for (s = 0; s < this.size; s++)
                  if (this.isEqual(this.list[s].key, l)) return s;
                return -1;
              }),
              (i.prototype.isEqual = function (l, s) {
                return l === s || (l !== l && s !== s);
              }),
              (n.exports = i);
          },
          {},
        ],
        3: [
          function (r, n, a) {
            var i = r("map-or-similar");
            n.exports = function (d) {
              var p = new i(!1),
                h = [];
              return function (y) {
                var f = function () {
                  var g = p,
                    m,
                    x,
                    v = arguments.length - 1,
                    E = Array(v + 1),
                    b = !0,
                    w;
                  if ((f.numArgs || f.numArgs === 0) && f.numArgs !== v + 1)
                    throw new Error(
                      "Memoizerific functions should always be called with the same number of arguments"
                    );
                  for (w = 0; w < v; w++) {
                    if (
                      ((E[w] = { cacheItem: g, arg: arguments[w] }),
                      g.has(arguments[w]))
                    ) {
                      g = g.get(arguments[w]);
                      continue;
                    }
                    (b = !1), (m = new i(!1)), g.set(arguments[w], m), (g = m);
                  }
                  return (
                    b &&
                      (g.has(arguments[v])
                        ? (x = g.get(arguments[v]))
                        : (b = !1)),
                    b ||
                      ((x = y.apply(null, arguments)), g.set(arguments[v], x)),
                    d > 0 &&
                      ((E[v] = { cacheItem: g, arg: arguments[v] }),
                      b ? l(h, E) : h.push(E),
                      h.length > d && s(h.shift())),
                    (f.wasMemoized = b),
                    (f.numArgs = v + 1),
                    x
                  );
                };
                return (
                  (f.limit = d),
                  (f.wasMemoized = !1),
                  (f.cache = p),
                  (f.lru = h),
                  f
                );
              };
            };
            function l(d, p) {
              var h = d.length,
                y = p.length,
                f,
                g,
                m;
              for (g = 0; g < h; g++) {
                for (f = !0, m = 0; m < y; m++)
                  if (!c(d[g][m].arg, p[m].arg)) {
                    f = !1;
                    break;
                  }
                if (f) break;
              }
              d.push(d.splice(g, 1)[0]);
            }
            function s(d) {
              var p = d.length,
                h = d[p - 1],
                y,
                f;
              for (
                h.cacheItem.delete(h.arg), f = p - 2;
                f >= 0 &&
                ((h = d[f]), (y = h.cacheItem.get(h.arg)), !y || !y.size);
                f--
              )
                h.cacheItem.delete(h.arg);
            }
            function c(d, p) {
              return d === p || (d !== d && p !== p);
            }
          },
          { "map-or-similar": 1 },
        ],
      },
      {},
      [3]
    )(3);
  });
})(nu);
var ff = nu.exports;
const tr = dn(ff),
  { logger: mf } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var gf = ti({
    "../../node_modules/react-is/cjs/react-is.development.js"(e) {
      (function () {
        var t = typeof Symbol == "function" && Symbol.for,
          r = t ? Symbol.for("react.element") : 60103,
          n = t ? Symbol.for("react.portal") : 60106,
          a = t ? Symbol.for("react.fragment") : 60107,
          i = t ? Symbol.for("react.strict_mode") : 60108,
          l = t ? Symbol.for("react.profiler") : 60114,
          s = t ? Symbol.for("react.provider") : 60109,
          c = t ? Symbol.for("react.context") : 60110,
          d = t ? Symbol.for("react.async_mode") : 60111,
          p = t ? Symbol.for("react.concurrent_mode") : 60111,
          h = t ? Symbol.for("react.forward_ref") : 60112,
          y = t ? Symbol.for("react.suspense") : 60113,
          f = t ? Symbol.for("react.suspense_list") : 60120,
          g = t ? Symbol.for("react.memo") : 60115,
          m = t ? Symbol.for("react.lazy") : 60116,
          x = t ? Symbol.for("react.block") : 60121,
          v = t ? Symbol.for("react.fundamental") : 60117,
          E = t ? Symbol.for("react.responder") : 60118,
          b = t ? Symbol.for("react.scope") : 60119;
        function w(N) {
          return (
            typeof N == "string" ||
            typeof N == "function" ||
            N === a ||
            N === p ||
            N === l ||
            N === i ||
            N === y ||
            N === f ||
            (typeof N == "object" &&
              N !== null &&
              (N.$$typeof === m ||
                N.$$typeof === g ||
                N.$$typeof === s ||
                N.$$typeof === c ||
                N.$$typeof === h ||
                N.$$typeof === v ||
                N.$$typeof === E ||
                N.$$typeof === b ||
                N.$$typeof === x))
          );
        }
        function _(N) {
          if (typeof N == "object" && N !== null) {
            var le = N.$$typeof;
            switch (le) {
              case r:
                var we = N.type;
                switch (we) {
                  case d:
                  case p:
                  case a:
                  case l:
                  case i:
                  case y:
                    return we;
                  default:
                    var Me = we && we.$$typeof;
                    switch (Me) {
                      case c:
                      case h:
                      case m:
                      case g:
                      case s:
                        return Me;
                      default:
                        return le;
                    }
                }
              case n:
                return le;
            }
          }
        }
        var A = d,
          S = p,
          C = c,
          k = s,
          D = r,
          L = h,
          I = a,
          $ = m,
          M = g,
          F = n,
          P = l,
          j = i,
          z = y,
          V = !1;
        function Z(N) {
          return (
            V ||
              ((V = !0),
              console.warn(
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
              )),
            ee(N) || _(N) === d
          );
        }
        function ee(N) {
          return _(N) === p;
        }
        function oe(N) {
          return _(N) === c;
        }
        function X(N) {
          return _(N) === s;
        }
        function Y(N) {
          return typeof N == "object" && N !== null && N.$$typeof === r;
        }
        function H(N) {
          return _(N) === h;
        }
        function W(N) {
          return _(N) === a;
        }
        function B(N) {
          return _(N) === m;
        }
        function U(N) {
          return _(N) === g;
        }
        function te(N) {
          return _(N) === n;
        }
        function J(N) {
          return _(N) === l;
        }
        function G(N) {
          return _(N) === i;
        }
        function K(N) {
          return _(N) === y;
        }
        (e.AsyncMode = A),
          (e.ConcurrentMode = S),
          (e.ContextConsumer = C),
          (e.ContextProvider = k),
          (e.Element = D),
          (e.ForwardRef = L),
          (e.Fragment = I),
          (e.Lazy = $),
          (e.Memo = M),
          (e.Portal = F),
          (e.Profiler = P),
          (e.StrictMode = j),
          (e.Suspense = z),
          (e.isAsyncMode = Z),
          (e.isConcurrentMode = ee),
          (e.isContextConsumer = oe),
          (e.isContextProvider = X),
          (e.isElement = Y),
          (e.isForwardRef = H),
          (e.isFragment = W),
          (e.isLazy = B),
          (e.isMemo = U),
          (e.isPortal = te),
          (e.isProfiler = J),
          (e.isStrictMode = G),
          (e.isSuspense = K),
          (e.isValidElementType = w),
          (e.typeOf = _);
      })();
    },
  }),
  hf = ti({
    "../../node_modules/react-is/index.js"(e, t) {
      t.exports = gf();
    },
  }),
  au = ti({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      var r = hf(),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        l = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      (s[r.ForwardRef] = i), (s[r.Memo] = l);
      function c(x) {
        return r.isMemo(x) ? l : s[x.$$typeof] || n;
      }
      var d = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        h = Object.getOwnPropertySymbols,
        y = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        g = Object.prototype;
      function m(x, v, E) {
        if (typeof v != "string") {
          if (g) {
            var b = f(v);
            b && b !== g && m(x, b, E);
          }
          var w = p(v);
          h && (w = w.concat(h(v)));
          for (var _ = c(x), A = c(v), S = 0; S < w.length; ++S) {
            var C = w[S];
            if (!a[C] && !(E && E[C]) && !(A && A[C]) && !(_ && _[C])) {
              var k = y(v, C);
              try {
                d(x, C, k);
              } catch {}
            }
          }
        }
        return x;
      }
      t.exports = m;
    },
  });
function ou(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yf =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ci = ou(function (e) {
    return (
      yf.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function vf(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function bf(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Ef = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (a) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, i),
          n.tags.push(a);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(bf(this));
        var n = this.tags[this.tags.length - 1],
          a = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
        if (
          (a &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !a),
          this.isSpeedy)
        ) {
          var i = vf(n);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch (l) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + r + '"',
                l
              );
          }
        } else n.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  Se = "-ms-",
  Jn = "-moz-",
  re = "-webkit-",
  ui = "comm",
  di = "rule",
  pi = "decl",
  xf = "@import",
  iu = "@keyframes",
  wf = "@layer",
  _f = Math.abs,
  ca = String.fromCharCode,
  Af = Object.assign;
function Cf(e, t) {
  return Ee(e, 0) ^ 45
    ? (((((((t << 2) ^ Ee(e, 0)) << 2) ^ Ee(e, 1)) << 2) ^ Ee(e, 2)) << 2) ^
        Ee(e, 3)
    : 0;
}
function lu(e) {
  return e.trim();
}
function Sf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, r) {
  return e.replace(t, r);
}
function Co(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function Yr(e, t, r) {
  return e.slice(t, r);
}
function dt(e) {
  return e.length;
}
function fi(e) {
  return e.length;
}
function Sn(e, t) {
  return t.push(e), e;
}
function Rf(e, t) {
  return e.map(t).join("");
}
var ua = 1,
  br = 1,
  su = 0,
  Pe = 0,
  me = 0,
  kr = "";
function da(e, t, r, n, a, i, l) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: i,
    line: ua,
    column: br,
    length: l,
    return: "",
  };
}
function Hr(e, t) {
  return Af(da("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Tf() {
  return me;
}
function Of() {
  return (
    (me = Pe > 0 ? Ee(kr, --Pe) : 0), br--, me === 10 && ((br = 1), ua--), me
  );
}
function Ve() {
  return (
    (me = Pe < su ? Ee(kr, Pe++) : 0), br++, me === 10 && ((br = 1), ua++), me
  );
}
function yt() {
  return Ee(kr, Pe);
}
function Pn() {
  return Pe;
}
function fn(e, t) {
  return Yr(kr, e, t);
}
function Xr(e) {
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
function cu(e) {
  return (ua = br = 1), (su = dt((kr = e))), (Pe = 0), [];
}
function uu(e) {
  return (kr = ""), e;
}
function Mn(e) {
  return lu(fn(Pe - 1, So(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kf(e) {
  for (; (me = yt()) && me < 33; ) Ve();
  return Xr(e) > 2 || Xr(me) > 3 ? "" : " ";
}
function Df(e, t) {
  for (
    ;
    --t &&
    Ve() &&
    !(me < 48 || me > 102 || (me > 57 && me < 65) || (me > 70 && me < 97));

  );
  return fn(e, Pn() + (t < 6 && yt() == 32 && Ve() == 32));
}
function So(e) {
  for (; Ve(); )
    switch (me) {
      case e:
        return Pe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && So(me);
        break;
      case 40:
        e === 41 && So(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Pe;
}
function Lf(e, t) {
  for (; Ve() && e + me !== 47 + 10 && !(e + me === 42 + 42 && yt() === 47); );
  return "/*" + fn(t, Pe - 1) + "*" + ca(e === 47 ? e : Ve());
}
function $f(e) {
  for (; !Xr(yt()); ) Ve();
  return fn(e, Pe);
}
function If(e) {
  return uu(Bn("", null, null, null, [""], (e = cu(e)), 0, [0], e));
}
function Bn(e, t, r, n, a, i, l, s, c) {
  for (
    var d = 0,
      p = 0,
      h = l,
      y = 0,
      f = 0,
      g = 0,
      m = 1,
      x = 1,
      v = 1,
      E = 0,
      b = "",
      w = a,
      _ = i,
      A = n,
      S = b;
    x;

  )
    switch (((g = E), (E = Ve()))) {
      case 40:
        if (g != 108 && Ee(S, h - 1) == 58) {
          Co((S += ne(Mn(E), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Mn(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += kf(g);
        break;
      case 92:
        S += Df(Pn() - 1, 7);
        continue;
      case 47:
        switch (yt()) {
          case 42:
          case 47:
            Sn(Ff(Lf(Ve(), Pn()), t, r), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        s[d++] = dt(S) * v;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            x = 0;
          case 59 + p:
            v == -1 && (S = ne(S, /\f/g, "")),
              f > 0 &&
                dt(S) - h &&
                Sn(
                  f > 32
                    ? Fl(S + ";", n, r, h - 1)
                    : Fl(ne(S, " ", "") + ";", n, r, h - 2),
                  c
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (Sn((A = Il(S, t, r, d, p, a, s, b, (w = []), (_ = []), h)), i),
              E === 123)
            )
              if (p === 0) Bn(S, t, A, A, w, i, h, s, _);
              else
                switch (y === 99 && Ee(S, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bn(
                      e,
                      A,
                      A,
                      n && Sn(Il(e, A, A, 0, 0, a, s, b, a, (w = []), h), _),
                      a,
                      _,
                      h,
                      s,
                      n ? w : _
                    );
                    break;
                  default:
                    Bn(S, A, A, A, [""], _, 0, s, _);
                }
        }
        (d = p = f = 0), (m = v = 1), (b = S = ""), (h = l);
        break;
      case 58:
        (h = 1 + dt(S)), (f = g);
      default:
        if (m < 1) {
          if (E == 123) --m;
          else if (E == 125 && m++ == 0 && Of() == 125) continue;
        }
        switch (((S += ca(E)), E * m)) {
          case 38:
            v = p > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (s[d++] = (dt(S) - 1) * v), (v = 1);
            break;
          case 64:
            yt() === 45 && (S += Mn(Ve())),
              (y = yt()),
              (p = h = dt((b = S += $f(Pn())))),
              E++;
            break;
          case 45:
            g === 45 && dt(S) == 2 && (m = 0);
        }
    }
  return i;
}
function Il(e, t, r, n, a, i, l, s, c, d, p) {
  for (
    var h = a - 1, y = a === 0 ? i : [""], f = fi(y), g = 0, m = 0, x = 0;
    g < n;
    ++g
  )
    for (var v = 0, E = Yr(e, h + 1, (h = _f((m = l[g])))), b = e; v < f; ++v)
      (b = lu(m > 0 ? y[v] + " " + E : ne(E, /&\f/g, y[v]))) && (c[x++] = b);
  return da(e, t, r, a === 0 ? di : s, c, d, p);
}
function Ff(e, t, r) {
  return da(e, t, r, ui, ca(Tf()), Yr(e, 2, -2), 0);
}
function Fl(e, t, r, n) {
  return da(e, t, r, pi, Yr(e, 0, n), Yr(e, n + 1, -1), n);
}
function hr(e, t) {
  for (var r = "", n = fi(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
  return r;
}
function Pf(e, t, r, n) {
  switch (e.type) {
    case wf:
      if (e.children.length) break;
    case xf:
    case pi:
      return (e.return = e.return || e.value);
    case ui:
      return "";
    case iu:
      return (e.return = e.value + "{" + hr(e.children, n) + "}");
    case di:
      e.value = e.props.join(",");
  }
  return dt((r = hr(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Mf(e) {
  var t = fi(e);
  return function (r, n, a, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](r, n, a, i) || "";
    return l;
  };
}
var Pl = function (e) {
    var t = new WeakMap();
    return function (r) {
      if (t.has(r)) return t.get(r);
      var n = e(r);
      return t.set(r, n), n;
    };
  },
  Bf = function (e, t, r) {
    for (
      var n = 0, a = 0;
      (n = a), (a = yt()), n === 38 && a === 12 && (t[r] = 1), !Xr(a);

    )
      Ve();
    return fn(e, Pe);
  },
  Nf = function (e, t) {
    var r = -1,
      n = 44;
    do
      switch (Xr(n)) {
        case 0:
          n === 38 && yt() === 12 && (t[r] = 1), (e[r] += Bf(Pe - 1, t, r));
          break;
        case 2:
          e[r] += Mn(n);
          break;
        case 4:
          if (n === 44) {
            (e[++r] = yt() === 58 ? "&\f" : ""), (t[r] = e[r].length);
            break;
          }
        default:
          e[r] += ca(n);
      }
    while ((n = Ve()));
    return e;
  },
  Vf = function (e, t) {
    return uu(Nf(cu(e), t));
  },
  Ml = new WeakMap(),
  Hf = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          r = e.parent,
          n = e.column === r.column && e.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ml.get(r)) &&
        !n
      ) {
        Ml.set(e, !0);
        for (
          var a = [], i = Vf(t, a), l = r.props, s = 0, c = 0;
          s < i.length;
          s++
        )
          for (var d = 0; d < l.length; d++, c++)
            e.props[c] = a[s] ? i[s].replace(/&\f/g, l[d]) : l[d] + " " + i[s];
      }
    }
  },
  jf = function (e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  },
  Zf =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  zf = function (e) {
    return e.type === "comm" && e.children.indexOf(Zf) > -1;
  },
  qf = function (e) {
    return function (t, r, n) {
      if (!(t.type !== "rule" || e.compat)) {
        var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (a) {
          for (
            var i = !!t.parent, l = i ? t.parent.children : n, s = l.length - 1;
            s >= 0;
            s--
          ) {
            var c = l[s];
            if (c.line < t.line) break;
            if (c.column < t.column) {
              if (zf(c)) return;
              break;
            }
          }
          a.forEach(function (d) {
            console.error(
              'The pseudo class "' +
                d +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                d.split("-child")[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  du = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  Uf = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!du(t[r])) return !0;
    return !1;
  },
  Bl = function (e) {
    (e.type = ""),
      (e.value = ""),
      (e.return = ""),
      (e.children = ""),
      (e.props = "");
  },
  Wf = function (e, t, r) {
    du(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          Bl(e))
        : Uf(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          Bl(e)));
  };
function pu(e, t) {
  switch (Cf(e, t)) {
    case 5103:
      return re + "print-" + e + e;
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
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + Jn + e + Se + e + e;
    case 6828:
    case 4268:
      return re + e + Se + e + e;
    case 6165:
      return re + e + Se + "flex-" + e + e;
    case 5187:
      return (
        re + e + ne(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + Se + "flex-$1$2") + e
      );
    case 5443:
      return re + e + Se + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        re +
        e +
        Se +
        "flex-line-pack" +
        ne(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return re + e + Se + ne(e, "shrink", "negative") + e;
    case 5292:
      return re + e + Se + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        re +
        "box-" +
        ne(e, "-grow", "") +
        re +
        e +
        Se +
        ne(e, "grow", "positive") +
        e
      );
    case 4554:
      return re + ne(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return (
        ne(
          ne(ne(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return (
        ne(
          ne(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Se + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        re +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, re + "$1$2") + e;
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
      if (dt(e) - 1 - t > 6)
        switch (Ee(e, t + 1)) {
          case 109:
            if (Ee(e, t + 4) !== 45) break;
          case 102:
            return (
              ne(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  re +
                  "$2-$3$1" +
                  Jn +
                  (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Co(e, "stretch")
              ? pu(ne(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, dt(e) - 3 - (~Co(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + re) + e;
        case 101:
          return (
            ne(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                re +
                (Ee(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                re +
                "$2$3$1" +
                Se +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return re + e + Se + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + Se + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + Se + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + Se + e + e;
  }
  return e;
}
var Gf = function (e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case pi:
          e.return = pu(e.value, e.length);
          break;
        case iu:
          return hr([Hr(e, { value: ne(e.value, "@", "@" + re) })], n);
        case di:
          if (e.length)
            return Rf(e.props, function (a) {
              switch (Sf(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return hr(
                    [Hr(e, { props: [ne(a, /:(read-\w+)/, ":" + Jn + "$1")] })],
                    n
                  );
                case "::placeholder":
                  return hr(
                    [
                      Hr(e, {
                        props: [ne(a, /:(plac\w+)/, ":" + re + "input-$1")],
                      }),
                      Hr(e, { props: [ne(a, /:(plac\w+)/, ":" + Jn + "$1")] }),
                      Hr(e, { props: [ne(a, /:(plac\w+)/, Se + "input-$1")] }),
                    ],
                    n
                  );
              }
              return "";
            });
      }
  },
  Kf = [Gf],
  Yf = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var m = g.getAttribute("data-emotion");
        m.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || Kf;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed'
      );
    var a = {},
      i,
      l = [];
    (i = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (g) {
          for (
            var m = g.getAttribute("data-emotion").split(" "), x = 1;
            x < m.length;
            x++
          )
            a[m[x]] = !0;
          l.push(g);
        }
      );
    var s,
      c = [Hf, jf];
    c.push(
      qf({
        get compat() {
          return f.compat;
        },
      }),
      Wf
    );
    {
      var d,
        p = [
          Pf,
          function (g) {
            g.root ||
              (g.return
                ? d.insert(g.return)
                : g.value && g.type !== ui && d.insert(g.value + "{}"));
          },
        ],
        h = Mf(c.concat(n, p)),
        y = function (g) {
          return hr(If(g), h);
        };
      s = function (g, m, x, v) {
        (d = x),
          m.map !== void 0 &&
            (d = {
              insert: function (E) {
                x.insert(E + m.map);
              },
            }),
          y(g ? g + "{" + m.styles + "}" : m.styles),
          v && (f.inserted[m.name] = !0);
      };
    }
    var f = {
      key: t,
      sheet: new Ef({
        key: t,
        container: i,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: s,
    };
    return f.sheet.hydrate(l), f;
  };
Mc(au());
var Xf = !0;
function mi(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : (n += a + " ");
    }),
    n
  );
}
var pa = function (e, t, r) {
    var n = e.key + "-" + t.name;
    (r === !1 || Xf === !1) &&
      e.registered[n] === void 0 &&
      (e.registered[n] = t.styles);
  },
  fa = function (e, t, r) {
    pa(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var a = t;
      do e.insert(t === a ? "." + n : "", a, e.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function Jf(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Qf = {
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
  Nl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  em =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  tm = /[A-Z]|^ms/g,
  fu = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  gi = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Vl = function (e) {
    return e != null && typeof e != "boolean";
  },
  Za = ou(function (e) {
    return gi(e) ? e : e.replace(tm, "-$&").toLowerCase();
  }),
  Qn = function (e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(fu, function (r, n, a) {
            return (pt = { name: n, styles: a, next: pt }), n;
          });
    }
    return Qf[e] !== 1 && !gi(e) && typeof t == "number" && t !== 0
      ? t + "px"
      : t;
  };
(Hl =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (jl = ["normal", "none", "initial", "inherit", "unset"]),
  (Zl = Qn),
  (zl = /^-ms-/),
  (ql = /-(.)/g),
  (za = {}),
  (Qn = function (e, t) {
    if (
      e === "content" &&
      (typeof t != "string" ||
        (jl.indexOf(t) === -1 &&
          !Hl.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          "\"'`"
      );
    var r = Zl(e, t);
    return (
      r !== "" &&
        !gi(e) &&
        e.indexOf("-") !== -1 &&
        za[e] === void 0 &&
        ((za[e] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            e.replace(zl, "ms-").replace(ql, function (n, a) {
              return a.toUpperCase();
            }) +
            "?"
        )),
      r
    );
  });
var Hl,
  jl,
  Zl,
  zl,
  ql,
  za,
  mu =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Jr(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR") throw new Error(mu);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (pt = { name: r.name, styles: r.styles, next: pt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (pt = { name: n.name, styles: n.styles, next: pt }), (n = n.next);
        var a = r.styles + ";";
        return r.map !== void 0 && (a += r.map), a;
      }
      return rm(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = pt,
          l = r(e);
        return (pt = i), Jr(e, t, l);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case "string":
      var s = [],
        c = r.replace(fu, function (p, h, y) {
          var f = "animation" + s.length;
          return (
            s.push(
              "const " +
                f +
                " = keyframes`" +
                y.replace(/^@keyframes animation-\w+/, "") +
                "`"
            ),
            "${" + f + "}"
          );
        });
      s.length &&
        console.error(
          "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
            [].concat(s, ["`" + c + "`"]).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ("css`" + c + "`")
        );
      break;
  }
  if (t == null) return r;
  var d = t[r];
  return d !== void 0 ? d : r;
}
function rm(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++) n += Jr(e, t, r[a]) + ";";
  else
    for (var i in r) {
      var l = r[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (n += i + "{" + t[l] + "}")
          : Vl(l) && (n += Za(i) + ":" + Qn(i, l) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR") throw new Error(mu);
        if (
          Array.isArray(l) &&
          typeof l[0] == "string" &&
          (t == null || t[l[0]] === void 0)
        )
          for (var s = 0; s < l.length; s++)
            Vl(l[s]) && (n += Za(i) + ":" + Qn(i, l[s]) + ";");
        else {
          var c = Jr(e, t, l);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Za(i) + ":" + c + ";";
              break;
            }
            default:
              i === "undefined" && console.error(em), (n += i + "{" + c + "}");
          }
        }
      }
    }
  return n;
}
var Ul = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  gu;
gu = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var pt,
  Er = function (e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var n = !0,
      a = "";
    pt = void 0;
    var i = e[0];
    i == null || i.raw === void 0
      ? ((n = !1), (a += Jr(r, t, i)))
      : (i[0] === void 0 && console.error(Nl), (a += i[0]));
    for (var l = 1; l < e.length; l++)
      (a += Jr(r, t, e[l])),
        n && (i[l] === void 0 && console.error(Nl), (a += i[l]));
    var s;
    (a = a.replace(gu, function (h) {
      return (s = h), "";
    })),
      (Ul.lastIndex = 0);
    for (var c = "", d; (d = Ul.exec(a)) !== null; ) c += "-" + d[1];
    var p = Jf(a) + c;
    return {
      name: p,
      styles: a,
      map: s,
      next: pt,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  nm = {}.hasOwnProperty,
  hi = u.createContext(typeof HTMLElement < "u" ? Yf({ key: "css" }) : null);
hi.displayName = "EmotionCacheContext";
hi.Provider;
var ma = function (e) {
    return u.forwardRef(function (t, r) {
      var n = u.useContext(hi);
      return e(t, n, r);
    });
  },
  Vt = u.createContext({});
Vt.displayName = "EmotionThemeContext";
var am = function () {
    return u.useContext(Vt);
  },
  om = function (e, t) {
    if (typeof t == "function") {
      var r = t(e);
      if (r == null || typeof r != "object" || Array.isArray(r))
        throw new Error(
          "[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!"
        );
      return r;
    }
    if (t == null || typeof t != "object" || Array.isArray(t))
      throw new Error(
        "[ThemeProvider] Please make your theme prop a plain object"
      );
    return Bc({}, e, t);
  },
  im = Pl(function (e) {
    return Pl(function (t) {
      return om(e, t);
    });
  }),
  hu = function (e) {
    var t = u.useContext(Vt);
    return (
      e.theme !== t && (t = im(t)(e.theme)),
      u.createElement(Vt.Provider, { value: t }, e.children)
    );
  },
  Wl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Gl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  lm = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      pa(t, r, n),
      ri(function () {
        return fa(t, r, n);
      }),
      null
    );
  },
  sm = ma(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[Wl],
      i = [n],
      l = "";
    typeof e.className == "string"
      ? (l = mi(t.registered, i, e.className))
      : e.className != null && (l = e.className + " ");
    var s = Er(i, void 0, u.useContext(Vt));
    if (s.name.indexOf("-") === -1) {
      var c = e[Gl];
      c && (s = Er([s, "label:" + c + ";"]));
    }
    l += t.key + "-" + s.name;
    var d = {};
    for (var p in e)
      nm.call(e, p) && p !== "css" && p !== Wl && p !== Gl && (d[p] = e[p]);
    return (
      (d.ref = r),
      (d.className = l),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(lm, {
          cache: t,
          serialized: s,
          isStringTag: typeof a == "string",
        }),
        u.createElement(a, d)
      )
    );
  });
sm.displayName = "EmotionCssPropInternal";
Mc(au());
var cm = {
    "name": "@emotion/react",
    "version": "11.11.1",
    "main": "dist/emotion-react.cjs.js",
    "module": "dist/emotion-react.esm.js",
    "browser": {
      "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js",
    },
    "exports": {
      ".": {
        module: {
          worker: "./dist/emotion-react.worker.esm.js",
          browser: "./dist/emotion-react.browser.esm.js",
          default: "./dist/emotion-react.esm.js",
        },
        import: "./dist/emotion-react.cjs.mjs",
        default: "./dist/emotion-react.cjs.js",
      },
      "./jsx-runtime": {
        module: {
          worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
          browser:
            "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
          default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
        },
        import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js",
      },
      "./_isolated-hnrs": {
        module: {
          worker:
            "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
          browser:
            "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
          default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
        },
        import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js",
      },
      "./jsx-dev-runtime": {
        module: {
          worker:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
          browser:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
          default:
            "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
        },
        import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js",
      },
      "./package.json": "./package.json",
      "./types/css-prop": "./types/css-prop.d.ts",
      "./macro": {
        types: { import: "./macro.d.mts", default: "./macro.d.ts" },
        default: "./macro.js",
      },
    },
    "types": "types/index.d.ts",
    "files": [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.*",
    ],
    "sideEffects": !1,
    "author": "Emotion Contributors",
    "license": "MIT",
    "scripts": { "test:typescript": "dtslint types" },
    "dependencies": {
      "@babel/runtime": "^7.18.3",
      "@emotion/babel-plugin": "^11.11.0",
      "@emotion/cache": "^11.11.0",
      "@emotion/serialize": "^1.1.2",
      "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
      "@emotion/utils": "^1.2.1",
      "@emotion/weak-memoize": "^0.3.1",
      "hoist-non-react-statics": "^3.3.1",
    },
    "peerDependencies": { react: ">=16.8.0" },
    "peerDependenciesMeta": { "@types/react": { optional: !0 } },
    "devDependencies": {
      "@definitelytyped/dtslint": "0.0.112",
      "@emotion/css": "11.11.0",
      "@emotion/css-prettifier": "1.1.3",
      "@emotion/server": "11.11.0",
      "@emotion/styled": "11.11.0",
      "html-tag-names": "^1.1.2",
      "react": "16.14.0",
      "svg-tag-names": "^1.1.1",
      "typescript": "^4.5.5",
    },
    "repository":
      "https://github.com/emotion-js/emotion/tree/main/packages/react",
    "publishConfig": { access: "public" },
    "umd:main": "dist/emotion-react.umd.min.js",
    "preconstruct": {
      entrypoints: [
        "./index.js",
        "./jsx-runtime.js",
        "./jsx-dev-runtime.js",
        "./_isolated-hnrs.js",
      ],
      umdName: "emotionReact",
      exports: {
        envConditions: ["browser", "worker"],
        extra: {
          "./types/css-prop": "./types/css-prop.d.ts",
          "./macro": {
            types: { import: "./macro.d.mts", default: "./macro.d.ts" },
            default: "./macro.js",
          },
        },
      },
    },
  },
  Kl = !1,
  um = ma(function (e, t) {
    !Kl &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
      ),
      (Kl = !0));
    var r = e.styles,
      n = Er([r], void 0, u.useContext(Vt)),
      a = u.useRef();
    return (
      xl(
        function () {
          var i = t.key + "-global",
            l = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            c = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (l.before = t.sheet.tags[0]),
            c !== null &&
              ((s = !0), c.setAttribute("data-emotion", i), l.hydrate([c])),
            (a.current = [l, s]),
            function () {
              l.flush();
            }
          );
        },
        [t]
      ),
      xl(
        function () {
          var i = a.current,
            l = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && fa(t, n.next, !0), l.tags.length)) {
            var c = l.tags[l.tags.length - 1].nextElementSibling;
            (l.before = c), l.flush();
          }
          t.insert("", n, l, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
um.displayName = "EmotionGlobal";
function yi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Er(t);
}
var Dr = function () {
    var e = yi.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  dm = function e(t) {
    for (var r = t.length, n = 0, a = ""; n < r; n++) {
      var i = t[n];
      if (i != null) {
        var l = void 0;
        switch (typeof i) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(i)) l = e(i);
            else {
              i.styles !== void 0 &&
                i.name !== void 0 &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."
                ),
                (l = "");
              for (var s in i) i[s] && s && (l && (l += " "), (l += s));
            }
            break;
          }
          default:
            l = i;
        }
        l && (a && (a += " "), (a += l));
      }
    }
    return a;
  };
function pm(e, t, r) {
  var n = [],
    a = mi(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var fm = function (e) {
    var t = e.cache,
      r = e.serializedArr;
    return (
      ri(function () {
        for (var n = 0; n < r.length; n++) fa(t, r[n], !1);
      }),
      null
    );
  },
  mm = ma(function (e, t) {
    var r = !1,
      n = [],
      a = function () {
        if (r) throw new Error("css can only be used during render");
        for (var c = arguments.length, d = new Array(c), p = 0; p < c; p++)
          d[p] = arguments[p];
        var h = Er(d, t.registered);
        return n.push(h), pa(t, h, !1), t.key + "-" + h.name;
      },
      i = function () {
        if (r) throw new Error("cx can only be used during render");
        for (var c = arguments.length, d = new Array(c), p = 0; p < c; p++)
          d[p] = arguments[p];
        return pm(t.registered, a, dm(d));
      },
      l = { css: a, cx: i, theme: u.useContext(Vt) },
      s = e.children(l);
    return (
      (r = !0),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(fm, { cache: t, serializedArr: n }),
        s
      )
    );
  });
mm.displayName = "EmotionClassNames";
(qa = !0),
  (Yl = typeof jest < "u" || typeof vi < "u"),
  qa &&
    !Yl &&
    ((Ua = typeof globalThis < "u" ? globalThis : qa ? window : global),
    (Wa = "__EMOTION_REACT_" + cm.version.split(".")[0] + "__"),
    Ua[Wa] &&
      console.warn(
        "You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
      ),
    (Ua[Wa] = !0));
var qa,
  Yl,
  Ua,
  Wa,
  gm = ci,
  hm = function (e) {
    return e !== "theme";
  },
  Xl = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? gm : hm;
  },
  Jl = function (e, t, r) {
    var n;
    if (t) {
      var a = t.shouldForwardProp;
      n =
        e.__emotion_forwardProp && a
          ? function (i) {
              return e.__emotion_forwardProp(i) && a(i);
            }
          : a;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  },
  Ql = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  ym = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      pa(t, r, n),
      ri(function () {
        return fa(t, r, n);
      }),
      null
    );
  },
  vm = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var n = t.__emotion_real === t,
      a = (n && t.__emotion_base) || t,
      i,
      l;
    r !== void 0 && ((i = r.label), (l = r.target));
    var s = Jl(t, r, n),
      c = s || Xl(a),
      d = !c("as");
    return function () {
      var p = arguments,
        h =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && h.push("label:" + i + ";"),
        p[0] == null || p[0].raw === void 0)
      )
        h.push.apply(h, p);
      else {
        p[0][0] === void 0 && console.error(Ql), h.push(p[0][0]);
        for (var y = p.length, f = 1; f < y; f++)
          p[0][f] === void 0 && console.error(Ql), h.push(p[f], p[0][f]);
      }
      var g = ma(function (m, x, v) {
        var E = (d && m.as) || a,
          b = "",
          w = [],
          _ = m;
        if (m.theme == null) {
          _ = {};
          for (var A in m) _[A] = m[A];
          _.theme = u.useContext(Vt);
        }
        typeof m.className == "string"
          ? (b = mi(x.registered, w, m.className))
          : m.className != null && (b = m.className + " ");
        var S = Er(h.concat(w), x.registered, _);
        (b += x.key + "-" + S.name), l !== void 0 && (b += " " + l);
        var C = d && s === void 0 ? Xl(E) : c,
          k = {};
        for (var D in m) (d && D === "as") || (C(D) && (k[D] = m[D]));
        return (
          (k.className = b),
          (k.ref = v),
          u.createElement(
            u.Fragment,
            null,
            u.createElement(ym, {
              cache: x,
              serialized: S,
              isStringTag: typeof E == "string",
            }),
            u.createElement(E, k)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof a == "string"
                ? a
                : a.displayName || a.name || "Component") +
              ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = a),
        (g.__emotion_styles = h),
        (g.__emotion_forwardProp = s),
        Object.defineProperty(g, "toString", {
          value: function () {
            return l === void 0 ? "NO_COMPONENT_SELECTOR" : "." + l;
          },
        }),
        (g.withComponent = function (m, x) {
          return e(m, Bc({}, r, x, { shouldForwardProp: Jl(g, x, !0) })).apply(
            void 0,
            h
          );
        }),
        g
      );
    };
  },
  bm = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
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
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  O = vm.bind();
bm.forEach(function (e) {
  O[e] = O(e);
});
var Em = tr(1)(({ typography: e }) => ({
  "body": {
    fontFamily: e.fonts.base,
    fontSize: e.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  },
  "*": { boxSizing: "border-box" },
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: e.weight.regular,
    margin: 0,
    padding: 0,
  },
  "button, input, textarea, select": {
    fontFamily: "inherit",
    fontSize: "inherit",
    boxSizing: "border-box",
  },
  "sub": { fontSize: "0.8em", bottom: "-0.2em" },
  "sup": { fontSize: "0.8em", top: "-0.2em" },
  "b, strong": { fontWeight: e.weight.bold },
  "hr": {
    border: "none",
    borderTop: "1px solid silver",
    clear: "both",
    marginBottom: "1.25rem",
  },
  "code": {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit",
  },
  "pre": {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: "18px",
    padding: "11px 1rem",
    whiteSpace: "pre-wrap",
    color: "inherit",
    borderRadius: 3,
    margin: "1rem 0",
  },
}));
tr(1)(({ color: e, background: t, typography: r }) => {
  let n = Em({ typography: r });
  return {
    ...n,
    body: {
      ...n.body,
      color: e.defaultText,
      background: t.app,
      overflow: "hidden",
    },
    hr: { ...n.hr, borderTop: `1px solid ${e.border}` },
  };
});
var xm = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" },
  wm = Dr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  yu = Dr`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  _m = Dr`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  Am = Dr`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  Cm = yi`
  animation: ${yu} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  Sm = yi`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  Rm = {
    rotate360: wm,
    glow: yu,
    float: _m,
    jiggle: Am,
    inlineGlow: Cm,
    hoverable: Sm,
  },
  Tm = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
    BASE_COLOR: "rgb(213, 213, 213)",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
    OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
    HTML_TAG_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
    HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "rgb(145, 145, 145)",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
    TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
    TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
    TABLE_SORT_ICON_COLOR: "black",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  Om = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "white",
    BASE_COLOR: "black",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
    OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
    HTML_TAG_COLOR: "rgb(168, 148, 166)",
    HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
    HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "#6e6e6e",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "#aaa",
    TABLE_TH_BACKGROUND_COLOR: "#eee",
    TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
    TABLE_SORT_ICON_COLOR: "#6e6e6e",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  km = (e) =>
    Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: z1(n) }), {}),
  Dm = ({ colors: e, mono: t }) => {
    let r = km(e);
    return {
      "token": {
        "fontFamily": t,
        "WebkitFontSmoothing": "antialiased",
        "&.tag": r.red3,
        "&.comment": { ...r.green1, fontStyle: "italic" },
        "&.prolog": { ...r.green1, fontStyle: "italic" },
        "&.doctype": { ...r.green1, fontStyle: "italic" },
        "&.cdata": { ...r.green1, fontStyle: "italic" },
        "&.string": r.red1,
        "&.url": r.cyan1,
        "&.symbol": r.cyan1,
        "&.number": r.cyan1,
        "&.boolean": r.cyan1,
        "&.variable": r.cyan1,
        "&.constant": r.cyan1,
        "&.inserted": r.cyan1,
        "&.atrule": r.blue1,
        "&.keyword": r.blue1,
        "&.attr-value": r.blue1,
        "&.punctuation": r.gray1,
        "&.operator": r.gray1,
        "&.function": r.gray1,
        "&.deleted": r.red2,
        "&.important": { fontWeight: "bold" },
        "&.bold": { fontWeight: "bold" },
        "&.italic": { fontStyle: "italic" },
        "&.class-name": r.cyan2,
        "&.selector": r.red3,
        "&.attr-name": r.red4,
        "&.property": r.red4,
        "&.regex": r.red4,
        "&.entity": r.red4,
        "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 },
      },
      "language-json .token.boolean": r.blue1,
      "language-json .token.number": r.blue1,
      "language-json .token.property": r.cyan2,
      "namespace": { opacity: 0.7 },
    };
  },
  Lm = {
    green1: "#008000",
    red1: "#A31515",
    red2: "#9a050f",
    red3: "#800000",
    red4: "#ff0000",
    gray1: "#393A34",
    cyan1: "#36acaa",
    cyan2: "#2B91AF",
    blue1: "#0000ff",
    blue2: "#00009f",
  },
  $m = {
    green1: "#7C7C7C",
    red1: "#92C379",
    red2: "#9a050f",
    red3: "#A8FF60",
    red4: "#96CBFE",
    gray1: "#EDEDED",
    cyan1: "#C6C5FE",
    cyan2: "#FFFFB6",
    blue1: "#B474DD",
    blue2: "#00009f",
  },
  Im = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: ie.tertiary,
    ancillary: ie.ancillary,
    orange: ie.orange,
    gold: ie.gold,
    green: ie.green,
    seafoam: ie.seafoam,
    purple: ie.purple,
    ultraviolet: ie.ultraviolet,
    lightest: ie.lightest,
    lighter: ie.lighter,
    light: ie.light,
    mediumlight: ie.mediumlight,
    medium: ie.medium,
    mediumdark: ie.mediumdark,
    dark: ie.dark,
    darker: ie.darker,
    darkest: ie.darkest,
    border: ie.border,
    positive: ie.positive,
    negative: ie.negative,
    warning: ie.warning,
    critical: ie.critical,
    defaultText: e.textColor || ie.darkest,
    inverseText: e.textInverseColor || ie.lightest,
    positiveText: ie.positiveText,
    negativeText: ie.negativeText,
    warningText: ie.warningText,
  }),
  Ro = (e = xo[Z1()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: n,
      appBg: a,
      appContentBg: i,
      appBorderColor: l,
      appBorderRadius: s,
      fontBase: c,
      fontCode: d,
      textColor: p,
      textInverseColor: h,
      barTextColor: y,
      barSelectedColor: f,
      barBg: g,
      buttonBg: m,
      buttonBorder: x,
      booleanBg: v,
      booleanSelectedBg: E,
      inputBg: b,
      inputBorder: w,
      inputTextColor: _,
      inputBorderRadius: A,
      brandTitle: S,
      brandUrl: C,
      brandImage: k,
      brandTarget: D,
      gridCellSize: L,
      ...I
    } = e;
    return {
      ...I,
      base: t,
      color: Im(e),
      background: {
        app: a,
        bar: g,
        content: i,
        gridCellSize: L || lr.gridCellSize,
        hoverable: lr.hoverable,
        positive: lr.positive,
        negative: lr.negative,
        warning: lr.warning,
        critical: lr.critical,
      },
      typography: {
        fonts: { base: c, mono: d },
        weight: fr.weight,
        size: fr.size,
      },
      animation: Rm,
      easing: xm,
      input: { background: b, border: w, borderRadius: A, color: _ },
      button: { background: m || b, border: x || w },
      boolean: { background: v || w, selectedBackground: E || b },
      layoutMargin: 10,
      appBorderColor: l,
      appBorderRadius: s,
      barTextColor: y,
      barSelectedColor: f || n,
      barBg: g,
      brand: { title: S, url: C, image: k || (S ? null : void 0), target: D },
      code: Dm({ colors: t === "light" ? Lm : $m, mono: d }),
      addonActionsTheme: {
        ...(t === "light" ? Om : Tm),
        BASE_FONT_FAMILY: d,
        BASE_FONT_SIZE: fr.size.s2 - 1,
        BASE_LINE_HEIGHT: "18px",
        BASE_BACKGROUND_COLOR: "transparent",
        BASE_COLOR: p,
        ARROW_COLOR: j1(0.2, l),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: d,
        TREENODE_FONT_SIZE: fr.size.s2 - 1,
        TREENODE_LINE_HEIGHT: "18px",
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  Fm = (e) => Object.keys(e).length === 0,
  Ga = (e) => e != null && typeof e == "object",
  Pm = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  Mm = () => Object.create(null),
  vu = (e, t) =>
    e === t || !Ga(e) || !Ga(t)
      ? {}
      : Object.keys(e).reduce((r, n) => {
          if (Pm(t, n)) {
            let a = vu(e[n], t[n]);
            return (Ga(a) && Fm(a)) || (r[n] = a), r;
          }
          return (r[n] = void 0), r;
        }, Mm()),
  Bm = vu;
function Nm(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function (s, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d
      ? s.concat(
          d.map(function (p) {
            var h, y;
            return (y =
              (h = p.match(/[\t ]/g)) === null || h === void 0
                ? void 0
                : h.length) !== null && y !== void 0
              ? y
              : 0;
          })
        )
      : s;
  }, []);
  if (a.length) {
    var i = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        "}",
      "g"
    );
    n = n.map(function (s) {
      return s.replace(
        i,
        `
`
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var l = n[0];
  return (
    t.forEach(function (s, c) {
      var d = l.match(/(?:^|\n)( *)$/),
        p = d ? d[1] : "",
        h = s;
      typeof s == "string" &&
        s.includes(`
`) &&
        (h = String(s)
          .split(
            `
`
          )
          .map(function (y, f) {
            return f === 0 ? y : "" + p + y;
          }).join(`
`)),
        (l += h + n[c + 1]);
    }),
    l
  );
}
var Vm = (e) => {
    if (!e) return Ro(wl);
    let t = Bm(wl, e);
    return (
      Object.keys(t).length &&
        mf.warn(
          Nm`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      Ro(e)
    );
  },
  To =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function bi(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Hm = Object.create,
  bu = Object.defineProperty,
  jm = Object.getOwnPropertyDescriptor,
  Eu = Object.getOwnPropertyNames,
  Zm = Object.getPrototypeOf,
  zm = Object.prototype.hasOwnProperty,
  q = (e, t) =>
    function () {
      return t || (0, e[Eu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  qm = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of Eu(t))
        !zm.call(e, a) &&
          a !== r &&
          bu(e, a, {
            get: () => t[a],
            enumerable: !(n = jm(t, a)) || n.enumerable,
          });
    return e;
  },
  je = (e, t, r) => (
    (r = e != null ? Hm(Zm(e)) : {}),
    qm(
      t || !e || !e.__esModule
        ? bu(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Um = q({
    "../../node_modules/refractor/lang/markdown.js"(e, t) {
      (t.exports = r), (r.displayName = "markdown"), (r.aliases = ["md"]);
      function r(n) {
        (function (a) {
          var i = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function l(g) {
            return (
              (g = g.replace(/<inner>/g, function () {
                return i;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + g + ")")
            );
          }
          var s = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            c = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return s;
              }
            ),
            d =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (a.languages.markdown = a.languages.extend("markup", {})),
            a.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "punctuation": /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: a.languages.yaml,
                  },
                },
              },
              "blockquote": {
                pattern: /^>(?:[\t ]*>)*/m,
                alias: "punctuation",
              },
              "table": {
                pattern: RegExp("^" + c + d + "(?:" + c + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + c + d + ")(?:" + c + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(s),
                        inside: a.languages.markdown,
                      },
                      "punctuation": /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + c + ")" + d + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + c + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(s),
                        alias: "important",
                        inside: a.languages.markdown,
                      },
                      "punctuation": /\|/,
                    },
                  },
                },
              },
              "code": [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    "punctuation": /```/,
                  },
                },
              ],
              "title": [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              "hr": {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "list": {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              "bold": {
                pattern: l(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              "italic": {
                pattern: l(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              "strike": {
                pattern: l(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              "url": {
                pattern: l(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (g) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (m) {
                  g !== m &&
                    (a.languages.markdown[g].inside.content.inside[m] =
                      a.languages.markdown[m]);
                }
              );
            }),
            a.hooks.add("after-tokenize", function (g) {
              if (g.language !== "markdown" && g.language !== "md") return;
              function m(x) {
                if (!(!x || typeof x == "string"))
                  for (var v = 0, E = x.length; v < E; v++) {
                    var b = x[v];
                    if (b.type !== "code") {
                      m(b.content);
                      continue;
                    }
                    var w = b.content[1],
                      _ = b.content[3];
                    if (
                      w &&
                      _ &&
                      w.type === "code-language" &&
                      _.type === "code-block" &&
                      typeof w.content == "string"
                    ) {
                      var A = w.content
                        .replace(/\b#/g, "sharp")
                        .replace(/\b\+\+/g, "pp");
                      A = (/[a-z][\w-]*/i.exec(A) || [""])[0].toLowerCase();
                      var S = "language-" + A;
                      _.alias
                        ? typeof _.alias == "string"
                          ? (_.alias = [_.alias, S])
                          : _.alias.push(S)
                        : (_.alias = [S]);
                    }
                  }
              }
              m(g.tokens);
            }),
            a.hooks.add("wrap", function (g) {
              if (g.type === "code-block") {
                for (var m = "", x = 0, v = g.classes.length; x < v; x++) {
                  var E = g.classes[x],
                    b = /language-(.+)/.exec(E);
                  if (b) {
                    m = b[1];
                    break;
                  }
                }
                var w = a.languages[m];
                if (w) g.content = a.highlight(f(g.content.value), w, m);
                else if (m && m !== "none" && a.plugins.autoloader) {
                  var _ =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(Math.random() * 1e16);
                  (g.attributes.id = _),
                    a.plugins.autoloader.loadLanguages(m, function () {
                      var A = document.getElementById(_);
                      A &&
                        (A.innerHTML = a.highlight(
                          A.textContent,
                          a.languages[m],
                          m
                        ));
                    });
                }
              }
            });
          var p = RegExp(a.languages.markup.tag.pattern.source, "gi"),
            h = { amp: "&", lt: "<", gt: ">", quot: '"' },
            y = String.fromCodePoint || String.fromCharCode;
          function f(g) {
            var m = g.replace(p, "");
            return (
              (m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (x, v) {
                if (((v = v.toLowerCase()), v[0] === "#")) {
                  var E;
                  return (
                    v[1] === "x"
                      ? (E = parseInt(v.slice(2), 16))
                      : (E = Number(v.slice(1))),
                    y(E)
                  );
                } else {
                  var b = h[v];
                  return b || x;
                }
              })),
              m
            );
          }
          a.languages.md = a.languages.markdown;
        })(n);
      }
    },
  }),
  Wm = q({
    "../../node_modules/refractor/lang/yaml.js"(e, t) {
      (t.exports = r), (r.displayName = "yaml"), (r.aliases = ["yml"]);
      function r(n) {
        (function (a) {
          var i = /[*&][^\s[\]{},]+/,
            l =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            s =
              "(?:" +
              l.source +
              "(?:[ 	]+" +
              i.source +
              ")?|" +
              i.source +
              "(?:[ 	]+" +
              l.source +
              ")?)",
            c =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function p(h, y) {
            y = (y || "").replace(/m/g, "") + "m";
            var f =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return s;
                })
                .replace(/<<value>>/g, function () {
                  return h;
                });
            return RegExp(f, y);
          }
          (a.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return s;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return s;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + c + "|" + d + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: p(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: p(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: p(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: p(d), lookbehind: !0, greedy: !0 },
            number: {
              pattern: p(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: l,
            important: i,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (a.languages.yml = a.languages.yaml);
        })(n);
      }
    },
  }),
  xu = q({
    "../../node_modules/refractor/lang/typescript.js"(e, t) {
      (t.exports = r), (r.displayName = "typescript"), (r.aliases = ["ts"]);
      function r(n) {
        (function (a) {
          (a.languages.typescript = a.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            "builtin":
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            a.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete a.languages.typescript.parameter,
            delete a.languages.typescript["literal-property"];
          var i = a.languages.extend("typescript", {});
          delete i["class-name"],
            (a.languages.typescript["class-name"].inside = i),
            a.languages.insertBefore("typescript", "function", {
              "decorator": {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: i,
                  },
                },
              },
            }),
            (a.languages.ts = a.languages.typescript);
        })(n);
      }
    },
  }),
  wu = q({
    "../../node_modules/refractor/lang/jsx.js"(e, t) {
      (t.exports = r), (r.displayName = "jsx"), (r.aliases = []);
      function r(n) {
        (function (a) {
          var i = a.util.clone(a.languages.javascript),
            l = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            s = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            c = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function d(y, f) {
            return (
              (y = y
                .replace(/<S>/g, function () {
                  return l;
                })
                .replace(/<BRACES>/g, function () {
                  return s;
                })
                .replace(/<SPREAD>/g, function () {
                  return c;
                })),
              RegExp(y, f)
            );
          }
          (c = d(c).source),
            (a.languages.jsx = a.languages.extend("markup", i)),
            (a.languages.jsx.tag.pattern = d(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (a.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (a.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (a.languages.jsx.tag.inside.comment = i.comment),
            a.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: d(/<SPREAD>/.source),
                  inside: a.languages.jsx,
                },
              },
              a.languages.jsx.tag
            ),
            a.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: d(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    "rest": a.languages.jsx,
                  },
                },
              },
              a.languages.jsx.tag
            );
          var p = function (y) {
              return y
                ? typeof y == "string"
                  ? y
                  : typeof y.content == "string"
                  ? y.content
                  : y.content.map(p).join("")
                : "";
            },
            h = function (y) {
              for (var f = [], g = 0; g < y.length; g++) {
                var m = y[g],
                  x = !1;
                if (
                  (typeof m != "string" &&
                    (m.type === "tag" &&
                    m.content[0] &&
                    m.content[0].type === "tag"
                      ? m.content[0].content[0].content === "</"
                        ? f.length > 0 &&
                          f[f.length - 1].tagName ===
                            p(m.content[0].content[1]) &&
                          f.pop()
                        : m.content[m.content.length - 1].content === "/>" ||
                          f.push({
                            tagName: p(m.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : f.length > 0 &&
                        m.type === "punctuation" &&
                        m.content === "{"
                      ? f[f.length - 1].openedBraces++
                      : f.length > 0 &&
                        f[f.length - 1].openedBraces > 0 &&
                        m.type === "punctuation" &&
                        m.content === "}"
                      ? f[f.length - 1].openedBraces--
                      : (x = !0)),
                  (x || typeof m == "string") &&
                    f.length > 0 &&
                    f[f.length - 1].openedBraces === 0)
                ) {
                  var v = p(m);
                  g < y.length - 1 &&
                    (typeof y[g + 1] == "string" ||
                      y[g + 1].type === "plain-text") &&
                    ((v += p(y[g + 1])), y.splice(g + 1, 1)),
                    g > 0 &&
                      (typeof y[g - 1] == "string" ||
                        y[g - 1].type === "plain-text") &&
                      ((v = p(y[g - 1]) + v), y.splice(g - 1, 1), g--),
                    (y[g] = new a.Token("plain-text", v, null, v));
                }
                m.content && typeof m.content != "string" && h(m.content);
              }
            };
          a.hooks.add("after-tokenize", function (y) {
            (y.language !== "jsx" && y.language !== "tsx") || h(y.tokens);
          });
        })(n);
      }
    },
  }),
  Gm = q({
    "../../node_modules/refractor/lang/tsx.js"(e, t) {
      var r = wu(),
        n = xu();
      (t.exports = a), (a.displayName = "tsx"), (a.aliases = []);
      function a(i) {
        i.register(r),
          i.register(n),
          (function (l) {
            var s = l.util.clone(l.languages.typescript);
            (l.languages.tsx = l.languages.extend("jsx", s)),
              delete l.languages.tsx.parameter,
              delete l.languages.tsx["literal-property"];
            var c = l.languages.tsx.tag;
            (c.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + c.pattern.source + ")",
              c.pattern.flags
            )),
              (c.lookbehind = !0);
          })(i);
      }
    },
  }),
  _u = q({
    "../../node_modules/refractor/lang/markup.js"(e, t) {
      (t.exports = r),
        (r.displayName = "markup"),
        (r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
      function r(n) {
        (n.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              "string": { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              "punctuation": /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              "name": /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              "tag": {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              "punctuation": /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (n.languages.markup.tag.inside["attr-value"].inside.entity =
            n.languages.markup.entity),
          (n.languages.markup.doctype.inside["internal-subset"].inside =
            n.languages.markup),
          n.hooks.add("wrap", function (a) {
            a.type === "entity" &&
              (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(n.languages.markup.tag, "addInlined", {
            value: function (a, i) {
              var l = {};
              (l["language-" + i] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[i],
              }),
                (l.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var s = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: l,
                },
              };
              s["language-" + i] = {
                pattern: /[\s\S]+/,
                inside: n.languages[i],
              };
              var c = {};
              (c[a] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return a;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: s,
              }),
                n.languages.insertBefore("markup", "cdata", c);
            },
          }),
          Object.defineProperty(n.languages.markup.tag, "addAttribute", {
            value: function (a, i) {
              n.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    a +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [i, "language-" + i],
                        inside: n.languages[i],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend("markup", {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml);
      }
    },
  }),
  Km = q({
    "../../node_modules/refractor/lang/clike.js"(e, t) {
      (t.exports = r), (r.displayName = "clike"), (r.aliases = []);
      function r(n) {
        n.languages.clike = {
          "comment": [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          "string": {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          "keyword":
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          "boolean": /\b(?:false|true)\b/,
          "function": /\b\w+(?=\()/,
          "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          "punctuation": /[{}[\];(),.:]/,
        };
      }
    },
  }),
  Ym = q({
    "../../node_modules/refractor/lang/javascript.js"(e, t) {
      (t.exports = r), (r.displayName = "javascript"), (r.aliases = ["js"]);
      function r(n) {
        (n.languages.javascript = n.languages.extend("clike", {
          "class-name": [
            n.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          "keyword": [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          "function":
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          "number": {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|" +
                  /\d+(?:_\d+)*n/.source +
                  "|" +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          "operator":
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (n.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          n.languages.insertBefore("javascript", "keyword", {
            "regex": {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: n.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            "parameter": [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
            ],
            "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          n.languages.insertBefore("javascript", "string", {
            "hashbang": { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                "interpolation": {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    "rest": n.languages.javascript,
                  },
                },
                "string": /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          n.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          n.languages.markup &&
            (n.languages.markup.tag.addInlined("script", "javascript"),
            n.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (n.languages.js = n.languages.javascript);
      }
    },
  }),
  Au = q({
    "../../node_modules/refractor/lang/css.js"(e, t) {
      (t.exports = r), (r.displayName = "css"), (r.aliases = []);
      function r(n) {
        (function (a) {
          var i =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (a.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                "rule": /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                "keyword": {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  i.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + i.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  i.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: i, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (a.languages.css.atrule.inside.rest = a.languages.css);
          var l = a.languages.markup;
          l &&
            (l.tag.addInlined("style", "css"),
            l.tag.addAttribute("style", "css"));
        })(n);
      }
    },
  }),
  Xm = q({
    "../../node_modules/xtend/immutable.js"(e, t) {
      t.exports = n;
      var r = Object.prototype.hasOwnProperty;
      function n() {
        for (var a = {}, i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          for (var s in l) r.call(l, s) && (a[s] = l[s]);
        }
        return a;
      }
    },
  }),
  Cu = q({
    "../../node_modules/property-information/lib/util/schema.js"(e, t) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null), (r.normal = {}), (r.property = {});
      function n(a, i, l) {
        (this.property = a), (this.normal = i), l && (this.space = l);
      }
    },
  }),
  Jm = q({
    "../../node_modules/property-information/lib/util/merge.js"(e, t) {
      var r = Xm(),
        n = Cu();
      t.exports = a;
      function a(i) {
        for (var l = i.length, s = [], c = [], d = -1, p, h; ++d < l; )
          (p = i[d]), s.push(p.property), c.push(p.normal), (h = p.space);
        return new n(r.apply(null, s), r.apply(null, c), h);
      }
    },
  }),
  Ei = q({
    "../../node_modules/property-information/normalize.js"(e, t) {
      t.exports = r;
      function r(n) {
        return n.toLowerCase();
      }
    },
  }),
  Su = q({
    "../../node_modules/property-information/lib/util/info.js"(e, t) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
      function n(a, i) {
        (this.property = a), (this.attribute = i);
      }
    },
  }),
  xi = q({
    "../../node_modules/property-information/lib/util/types.js"(e) {
      var t = 0;
      (e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r());
      function r() {
        return Math.pow(2, ++t);
      }
    },
  }),
  Ru = q({
    "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
      var r = Su(),
        n = xi();
      (t.exports = l), (l.prototype = new r()), (l.prototype.defined = !0);
      var a = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        i = a.length;
      function l(c, d, p, h) {
        var y = -1,
          f;
        for (s(this, "space", h), r.call(this, c, d); ++y < i; )
          (f = a[y]), s(this, f, (p & n[f]) === n[f]);
      }
      function s(c, d, p) {
        p && (c[d] = p);
      }
    },
  }),
  mn = q({
    "../../node_modules/property-information/lib/util/create.js"(e, t) {
      var r = Ei(),
        n = Cu(),
        a = Ru();
      t.exports = i;
      function i(l) {
        var s = l.space,
          c = l.mustUseProperty || [],
          d = l.attributes || {},
          p = l.properties,
          h = l.transform,
          y = {},
          f = {},
          g,
          m;
        for (g in p)
          (m = new a(g, h(d, g), p[g], s)),
            c.indexOf(g) !== -1 && (m.mustUseProperty = !0),
            (y[g] = m),
            (f[r(g)] = g),
            (f[r(m.attribute)] = g);
        return new n(y, f, s);
      }
    },
  }),
  Qm = q({
    "../../node_modules/property-information/lib/xlink.js"(e, t) {
      var r = mn();
      t.exports = r({
        space: "xlink",
        transform: n,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
      function n(a, i) {
        return "xlink:" + i.slice(5).toLowerCase();
      }
    },
  }),
  e2 = q({
    "../../node_modules/property-information/lib/xml.js"(e, t) {
      var r = mn();
      t.exports = r({
        space: "xml",
        transform: n,
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
      function n(a, i) {
        return "xml:" + i.slice(3).toLowerCase();
      }
    },
  }),
  t2 = q({
    "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(
      e,
      t
    ) {
      t.exports = r;
      function r(n, a) {
        return a in n ? n[a] : a;
      }
    },
  }),
  Tu = q({
    "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(
      e,
      t
    ) {
      var r = t2();
      t.exports = n;
      function n(a, i) {
        return r(a, i.toLowerCase());
      }
    },
  }),
  r2 = q({
    "../../node_modules/property-information/lib/xmlns.js"(e, t) {
      var r = mn(),
        n = Tu();
      t.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: n,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  n2 = q({
    "../../node_modules/property-information/lib/aria.js"(e, t) {
      var r = xi(),
        n = mn(),
        a = r.booleanish,
        i = r.number,
        l = r.spaceSeparated;
      t.exports = n({
        transform: s,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: a,
          ariaAutoComplete: null,
          ariaBusy: a,
          ariaChecked: a,
          ariaColCount: i,
          ariaColIndex: i,
          ariaColSpan: i,
          ariaControls: l,
          ariaCurrent: null,
          ariaDescribedBy: l,
          ariaDetails: null,
          ariaDisabled: a,
          ariaDropEffect: l,
          ariaErrorMessage: null,
          ariaExpanded: a,
          ariaFlowTo: l,
          ariaGrabbed: a,
          ariaHasPopup: null,
          ariaHidden: a,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: l,
          ariaLevel: i,
          ariaLive: null,
          ariaModal: a,
          ariaMultiLine: a,
          ariaMultiSelectable: a,
          ariaOrientation: null,
          ariaOwns: l,
          ariaPlaceholder: null,
          ariaPosInSet: i,
          ariaPressed: a,
          ariaReadOnly: a,
          ariaRelevant: null,
          ariaRequired: a,
          ariaRoleDescription: l,
          ariaRowCount: i,
          ariaRowIndex: i,
          ariaRowSpan: i,
          ariaSelected: a,
          ariaSetSize: i,
          ariaSort: null,
          ariaValueMax: i,
          ariaValueMin: i,
          ariaValueNow: i,
          ariaValueText: null,
          role: null,
        },
      });
      function s(c, d) {
        return d === "role" ? d : "aria-" + d.slice(4).toLowerCase();
      }
    },
  }),
  a2 = q({
    "../../node_modules/property-information/lib/html.js"(e, t) {
      var r = xi(),
        n = mn(),
        a = Tu(),
        i = r.boolean,
        l = r.overloadedBoolean,
        s = r.booleanish,
        c = r.number,
        d = r.spaceSeparated,
        p = r.commaSeparated;
      t.exports = n({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: a,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: p,
          acceptCharset: d,
          accessKey: d,
          action: null,
          allow: null,
          allowFullScreen: i,
          allowPaymentRequest: i,
          allowUserMedia: i,
          alt: null,
          as: null,
          async: i,
          autoCapitalize: null,
          autoComplete: d,
          autoFocus: i,
          autoPlay: i,
          capture: i,
          charSet: null,
          checked: i,
          cite: null,
          className: d,
          cols: c,
          colSpan: null,
          content: null,
          contentEditable: s,
          controls: i,
          controlsList: d,
          coords: c | p,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: i,
          defer: i,
          dir: null,
          dirName: null,
          disabled: i,
          download: l,
          draggable: s,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: i,
          formTarget: null,
          headers: d,
          height: c,
          hidden: i,
          high: c,
          href: null,
          hrefLang: null,
          htmlFor: d,
          httpEquiv: d,
          id: null,
          imageSizes: null,
          imageSrcSet: p,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: i,
          itemId: null,
          itemProp: d,
          itemRef: d,
          itemScope: i,
          itemType: d,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: i,
          low: c,
          manifest: null,
          max: null,
          maxLength: c,
          media: null,
          method: null,
          min: null,
          minLength: c,
          multiple: i,
          muted: i,
          name: null,
          nonce: null,
          noModule: i,
          noValidate: i,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
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
          open: i,
          optimum: c,
          pattern: null,
          ping: d,
          placeholder: null,
          playsInline: i,
          poster: null,
          preload: null,
          readOnly: i,
          referrerPolicy: null,
          rel: d,
          required: i,
          reversed: i,
          rows: c,
          rowSpan: c,
          sandbox: d,
          scope: null,
          scoped: i,
          seamless: i,
          selected: i,
          shape: null,
          size: c,
          sizes: null,
          slot: null,
          span: c,
          spellCheck: s,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: p,
          start: c,
          step: null,
          style: null,
          tabIndex: c,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: i,
          useMap: null,
          value: s,
          width: c,
          wrap: null,
          align: null,
          aLink: null,
          archive: d,
          axis: null,
          background: null,
          bgColor: null,
          border: c,
          borderColor: null,
          bottomMargin: c,
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
          compact: i,
          declare: i,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: c,
          leftMargin: c,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: c,
          marginWidth: c,
          noResize: i,
          noHref: i,
          noShade: i,
          noWrap: i,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: c,
          rules: null,
          scheme: null,
          scrolling: s,
          standby: null,
          summary: null,
          text: null,
          topMargin: c,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: c,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: i,
          disableRemotePlayback: i,
          prefix: null,
          property: null,
          results: c,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  o2 = q({
    "../../node_modules/property-information/html.js"(e, t) {
      var r = Jm(),
        n = Qm(),
        a = e2(),
        i = r2(),
        l = n2(),
        s = a2();
      t.exports = r([a, n, i, l, s]);
    },
  }),
  i2 = q({
    "../../node_modules/property-information/find.js"(e, t) {
      var r = Ei(),
        n = Ru(),
        a = Su(),
        i = "data";
      t.exports = d;
      var l = /^data[-\w.:]+$/i,
        s = /-[a-z]/g,
        c = /[A-Z]/g;
      function d(g, m) {
        var x = r(m),
          v = m,
          E = a;
        return x in g.normal
          ? g.property[g.normal[x]]
          : (x.length > 4 &&
              x.slice(0, 4) === i &&
              l.test(m) &&
              (m.charAt(4) === "-" ? (v = p(m)) : (m = h(m)), (E = n)),
            new E(v, m));
      }
      function p(g) {
        var m = g.slice(5).replace(s, f);
        return i + m.charAt(0).toUpperCase() + m.slice(1);
      }
      function h(g) {
        var m = g.slice(4);
        return s.test(m)
          ? g
          : ((m = m.replace(c, y)),
            m.charAt(0) !== "-" && (m = "-" + m),
            i + m);
      }
      function y(g) {
        return "-" + g.toLowerCase();
      }
      function f(g) {
        return g.charAt(1).toUpperCase();
      }
    },
  }),
  l2 = q({
    "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
      t.exports = n;
      var r = /[#.]/g;
      function n(a, i) {
        for (
          var l = a || "", s = i || "div", c = {}, d = 0, p, h, y;
          d < l.length;

        )
          (r.lastIndex = d),
            (y = r.exec(l)),
            (p = l.slice(d, y ? y.index : l.length)),
            p &&
              (h
                ? h === "#"
                  ? (c.id = p)
                  : c.className
                  ? c.className.push(p)
                  : (c.className = [p])
                : (s = p),
              (d += p.length)),
            y && ((h = y[0]), d++);
        return { type: "element", tagName: s, properties: c, children: [] };
      }
    },
  }),
  s2 = q({
    "../../node_modules/space-separated-tokens/index.js"(e) {
      (e.parse = a), (e.stringify = i);
      var t = "",
        r = " ",
        n = /[ \t\n\r\f]+/g;
      function a(l) {
        var s = String(l || t).trim();
        return s === t ? [] : s.split(n);
      }
      function i(l) {
        return l.join(r).trim();
      }
    },
  }),
  c2 = q({
    "../../node_modules/comma-separated-tokens/index.js"(e) {
      (e.parse = a), (e.stringify = i);
      var t = ",",
        r = " ",
        n = "";
      function a(l) {
        for (
          var s = [], c = String(l || n), d = c.indexOf(t), p = 0, h = !1, y;
          !h;

        )
          d === -1 && ((d = c.length), (h = !0)),
            (y = c.slice(p, d).trim()),
            (y || !h) && s.push(y),
            (p = d + 1),
            (d = c.indexOf(t, p));
        return s;
      }
      function i(l, s) {
        var c = s || {},
          d = c.padLeft === !1 ? n : r,
          p = c.padRight ? r : n;
        return (
          l[l.length - 1] === n && (l = l.concat(n)), l.join(p + t + d).trim()
        );
      }
    },
  }),
  u2 = q({
    "../../node_modules/hastscript/factory.js"(e, t) {
      var r = i2(),
        n = Ei(),
        a = l2(),
        i = s2().parse,
        l = c2().parse;
      t.exports = c;
      var s = {}.hasOwnProperty;
      function c(x, v, E) {
        var b = E ? m(E) : null;
        return w;
        function w(A, S) {
          var C = a(A, v),
            k = Array.prototype.slice.call(arguments, 2),
            D = C.tagName.toLowerCase(),
            L;
          if (
            ((C.tagName = b && s.call(b, D) ? b[D] : D),
            S && d(S, C) && (k.unshift(S), (S = null)),
            S)
          )
            for (L in S) _(C.properties, L, S[L]);
          return (
            h(C.children, k),
            C.tagName === "template" &&
              ((C.content = { type: "root", children: C.children }),
              (C.children = [])),
            C
          );
        }
        function _(A, S, C) {
          var k, D, L;
          C == null ||
            C !== C ||
            ((k = r(x, S)),
            (D = k.property),
            (L = C),
            typeof L == "string" &&
              (k.spaceSeparated
                ? (L = i(L))
                : k.commaSeparated
                ? (L = l(L))
                : k.commaOrSpaceSeparated && (L = i(l(L).join(" ")))),
            D === "style" && typeof C != "string" && (L = g(L)),
            D === "className" && A.className && (L = A.className.concat(L)),
            (A[D] = y(k, D, L)));
        }
      }
      function d(x, v) {
        return typeof x == "string" || "length" in x || p(v.tagName, x);
      }
      function p(x, v) {
        var E = v.type;
        return x === "input" || !E || typeof E != "string"
          ? !1
          : typeof v.children == "object" && "length" in v.children
          ? !0
          : ((E = E.toLowerCase()),
            x === "button"
              ? E !== "menu" &&
                E !== "submit" &&
                E !== "reset" &&
                E !== "button"
              : "value" in v);
      }
      function h(x, v) {
        var E, b;
        if (typeof v == "string" || typeof v == "number") {
          x.push({ type: "text", value: String(v) });
          return;
        }
        if (typeof v == "object" && "length" in v) {
          for (E = -1, b = v.length; ++E < b; ) h(x, v[E]);
          return;
        }
        if (typeof v != "object" || !("type" in v))
          throw new Error("Expected node, nodes, or string, got `" + v + "`");
        x.push(v);
      }
      function y(x, v, E) {
        var b, w, _;
        if (typeof E != "object" || !("length" in E)) return f(x, v, E);
        for (w = E.length, b = -1, _ = []; ++b < w; ) _[b] = f(x, v, E[b]);
        return _;
      }
      function f(x, v, E) {
        var b = E;
        return (
          x.number || x.positiveNumber
            ? !isNaN(b) && b !== "" && (b = Number(b))
            : (x.boolean || x.overloadedBoolean) &&
              typeof b == "string" &&
              (b === "" || n(E) === n(v)) &&
              (b = !0),
          b
        );
      }
      function g(x) {
        var v = [],
          E;
        for (E in x) v.push([E, x[E]].join(": "));
        return v.join("; ");
      }
      function m(x) {
        for (var v = x.length, E = -1, b = {}, w; ++E < v; )
          (w = x[E]), (b[w.toLowerCase()] = w);
        return b;
      }
    },
  }),
  d2 = q({
    "../../node_modules/hastscript/html.js"(e, t) {
      var r = o2(),
        n = u2(),
        a = n(r, "div");
      (a.displayName = "html"), (t.exports = a);
    },
  }),
  p2 = q({
    "../../node_modules/hastscript/index.js"(e, t) {
      t.exports = d2();
    },
  }),
  f2 = q({
    "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(
      e,
      t
    ) {
      t.exports = {
        AElig: "Æ",
        AMP: "&",
        Aacute: "Á",
        Acirc: "Â",
        Agrave: "À",
        Aring: "Å",
        Atilde: "Ã",
        Auml: "Ä",
        COPY: "©",
        Ccedil: "Ç",
        ETH: "Ð",
        Eacute: "É",
        Ecirc: "Ê",
        Egrave: "È",
        Euml: "Ë",
        GT: ">",
        Iacute: "Í",
        Icirc: "Î",
        Igrave: "Ì",
        Iuml: "Ï",
        LT: "<",
        Ntilde: "Ñ",
        Oacute: "Ó",
        Ocirc: "Ô",
        Ograve: "Ò",
        Oslash: "Ø",
        Otilde: "Õ",
        Ouml: "Ö",
        QUOT: '"',
        REG: "®",
        THORN: "Þ",
        Uacute: "Ú",
        Ucirc: "Û",
        Ugrave: "Ù",
        Uuml: "Ü",
        Yacute: "Ý",
        aacute: "á",
        acirc: "â",
        acute: "´",
        aelig: "æ",
        agrave: "à",
        amp: "&",
        aring: "å",
        atilde: "ã",
        auml: "ä",
        brvbar: "¦",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        eacute: "é",
        ecirc: "ê",
        egrave: "è",
        eth: "ð",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        iacute: "í",
        icirc: "î",
        iexcl: "¡",
        igrave: "ì",
        iquest: "¿",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        ntilde: "ñ",
        oacute: "ó",
        ocirc: "ô",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        oslash: "ø",
        otilde: "õ",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        raquo: "»",
        reg: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        thorn: "þ",
        times: "×",
        uacute: "ú",
        ucirc: "û",
        ugrave: "ù",
        uml: "¨",
        uuml: "ü",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ",
      };
    },
  }),
  m2 = q({
    "../../node_modules/character-reference-invalid/index.json"(e, t) {
      t.exports = {
        0: "�",
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ",
      };
    },
  }),
  Ou = q({
    "../../node_modules/is-decimal/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == "string" ? n.charCodeAt(0) : n;
        return a >= 48 && a <= 57;
      }
    },
  }),
  g2 = q({
    "../../node_modules/is-hexadecimal/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == "string" ? n.charCodeAt(0) : n;
        return (
          (a >= 97 && a <= 102) || (a >= 65 && a <= 70) || (a >= 48 && a <= 57)
        );
      }
    },
  }),
  h2 = q({
    "../../node_modules/is-alphabetical/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == "string" ? n.charCodeAt(0) : n;
        return (a >= 97 && a <= 122) || (a >= 65 && a <= 90);
      }
    },
  }),
  y2 = q({
    "../../node_modules/is-alphanumerical/index.js"(e, t) {
      var r = h2(),
        n = Ou();
      t.exports = a;
      function a(i) {
        return r(i) || n(i);
      }
    },
  }),
  v2 = q({
    "../../node_modules/parse-entities/node_modules/character-entities/index.json"(
      e,
      t
    ) {
      t.exports = {
        AEli: "Æ",
        AElig: "Æ",
        AM: "&",
        AMP: "&",
        Aacut: "Á",
        Aacute: "Á",
        Abreve: "Ă",
        Acir: "Â",
        Acirc: "Â",
        Acy: "А",
        Afr: "𝔄",
        Agrav: "À",
        Agrave: "À",
        Alpha: "Α",
        Amacr: "Ā",
        And: "⩓",
        Aogon: "Ą",
        Aopf: "𝔸",
        ApplyFunction: "⁡",
        Arin: "Å",
        Aring: "Å",
        Ascr: "𝒜",
        Assign: "≔",
        Atild: "Ã",
        Atilde: "Ã",
        Aum: "Ä",
        Auml: "Ä",
        Backslash: "∖",
        Barv: "⫧",
        Barwed: "⌆",
        Bcy: "Б",
        Because: "∵",
        Bernoullis: "ℬ",
        Beta: "Β",
        Bfr: "𝔅",
        Bopf: "𝔹",
        Breve: "˘",
        Bscr: "ℬ",
        Bumpeq: "≎",
        CHcy: "Ч",
        COP: "©",
        COPY: "©",
        Cacute: "Ć",
        Cap: "⋒",
        CapitalDifferentialD: "ⅅ",
        Cayleys: "ℭ",
        Ccaron: "Č",
        Ccedi: "Ç",
        Ccedil: "Ç",
        Ccirc: "Ĉ",
        Cconint: "∰",
        Cdot: "Ċ",
        Cedilla: "¸",
        CenterDot: "·",
        Cfr: "ℭ",
        Chi: "Χ",
        CircleDot: "⊙",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        Colon: "∷",
        Colone: "⩴",
        Congruent: "≡",
        Conint: "∯",
        ContourIntegral: "∮",
        Copf: "ℂ",
        Coproduct: "∐",
        CounterClockwiseContourIntegral: "∳",
        Cross: "⨯",
        Cscr: "𝒞",
        Cup: "⋓",
        CupCap: "≍",
        DD: "ⅅ",
        DDotrahd: "⤑",
        DJcy: "Ђ",
        DScy: "Ѕ",
        DZcy: "Џ",
        Dagger: "‡",
        Darr: "↡",
        Dashv: "⫤",
        Dcaron: "Ď",
        Dcy: "Д",
        Del: "∇",
        Delta: "Δ",
        Dfr: "𝔇",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        Diamond: "⋄",
        DifferentialD: "ⅆ",
        Dopf: "𝔻",
        Dot: "¨",
        DotDot: "⃜",
        DotEqual: "≐",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        Downarrow: "⇓",
        Dscr: "𝒟",
        Dstrok: "Đ",
        ENG: "Ŋ",
        ET: "Ð",
        ETH: "Ð",
        Eacut: "É",
        Eacute: "É",
        Ecaron: "Ě",
        Ecir: "Ê",
        Ecirc: "Ê",
        Ecy: "Э",
        Edot: "Ė",
        Efr: "𝔈",
        Egrav: "È",
        Egrave: "È",
        Element: "∈",
        Emacr: "Ē",
        EmptySmallSquare: "◻",
        EmptyVerySmallSquare: "▫",
        Eogon: "Ę",
        Eopf: "𝔼",
        Epsilon: "Ε",
        Equal: "⩵",
        EqualTilde: "≂",
        Equilibrium: "⇌",
        Escr: "ℰ",
        Esim: "⩳",
        Eta: "Η",
        Eum: "Ë",
        Euml: "Ë",
        Exists: "∃",
        ExponentialE: "ⅇ",
        Fcy: "Ф",
        Ffr: "𝔉",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        Fopf: "𝔽",
        ForAll: "∀",
        Fouriertrf: "ℱ",
        Fscr: "ℱ",
        GJcy: "Ѓ",
        G: ">",
        GT: ">",
        Gamma: "Γ",
        Gammad: "Ϝ",
        Gbreve: "Ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        Gcy: "Г",
        Gdot: "Ġ",
        Gfr: "𝔊",
        Gg: "⋙",
        Gopf: "𝔾",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        Gt: "≫",
        HARDcy: "Ъ",
        Hacek: "ˇ",
        Hat: "^",
        Hcirc: "Ĥ",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        Hopf: "ℍ",
        HorizontalLine: "─",
        Hscr: "ℋ",
        Hstrok: "Ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        IEcy: "Е",
        IJlig: "Ĳ",
        IOcy: "Ё",
        Iacut: "Í",
        Iacute: "Í",
        Icir: "Î",
        Icirc: "Î",
        Icy: "И",
        Idot: "İ",
        Ifr: "ℑ",
        Igrav: "Ì",
        Igrave: "Ì",
        Im: "ℑ",
        Imacr: "Ī",
        ImaginaryI: "ⅈ",
        Implies: "⇒",
        Int: "∬",
        Integral: "∫",
        Intersection: "⋂",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        Iogon: "Į",
        Iopf: "𝕀",
        Iota: "Ι",
        Iscr: "ℐ",
        Itilde: "Ĩ",
        Iukcy: "І",
        Ium: "Ï",
        Iuml: "Ï",
        Jcirc: "Ĵ",
        Jcy: "Й",
        Jfr: "𝔍",
        Jopf: "𝕁",
        Jscr: "𝒥",
        Jsercy: "Ј",
        Jukcy: "Є",
        KHcy: "Х",
        KJcy: "Ќ",
        Kappa: "Κ",
        Kcedil: "Ķ",
        Kcy: "К",
        Kfr: "𝔎",
        Kopf: "𝕂",
        Kscr: "𝒦",
        LJcy: "Љ",
        L: "<",
        LT: "<",
        Lacute: "Ĺ",
        Lambda: "Λ",
        Lang: "⟪",
        Laplacetrf: "ℒ",
        Larr: "↞",
        Lcaron: "Ľ",
        Lcedil: "Ļ",
        Lcy: "Л",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        LeftRightArrow: "↔",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        Leftarrow: "⇐",
        Leftrightarrow: "⇔",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        LessLess: "⪡",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        Lfr: "𝔏",
        Ll: "⋘",
        Lleftarrow: "⇚",
        Lmidot: "Ŀ",
        LongLeftArrow: "⟵",
        LongLeftRightArrow: "⟷",
        LongRightArrow: "⟶",
        Longleftarrow: "⟸",
        Longleftrightarrow: "⟺",
        Longrightarrow: "⟹",
        Lopf: "𝕃",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        Lscr: "ℒ",
        Lsh: "↰",
        Lstrok: "Ł",
        Lt: "≪",
        Map: "⤅",
        Mcy: "М",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        MinusPlus: "∓",
        Mopf: "𝕄",
        Mscr: "ℳ",
        Mu: "Μ",
        NJcy: "Њ",
        Nacute: "Ń",
        Ncaron: "Ň",
        Ncedil: "Ņ",
        Ncy: "Н",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: `
`,
        Nfr: "𝔑",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        Not: "⫬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        Nscr: "𝒩",
        Ntild: "Ñ",
        Ntilde: "Ñ",
        Nu: "Ν",
        OElig: "Œ",
        Oacut: "Ó",
        Oacute: "Ó",
        Ocir: "Ô",
        Ocirc: "Ô",
        Ocy: "О",
        Odblac: "Ő",
        Ofr: "𝔒",
        Ograv: "Ò",
        Ograve: "Ò",
        Omacr: "Ō",
        Omega: "Ω",
        Omicron: "Ο",
        Oopf: "𝕆",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        Or: "⩔",
        Oscr: "𝒪",
        Oslas: "Ø",
        Oslash: "Ø",
        Otild: "Õ",
        Otilde: "Õ",
        Otimes: "⨷",
        Oum: "Ö",
        Ouml: "Ö",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        PartialD: "∂",
        Pcy: "П",
        Pfr: "𝔓",
        Phi: "Φ",
        Pi: "Π",
        PlusMinus: "±",
        Poincareplane: "ℌ",
        Popf: "ℙ",
        Pr: "⪻",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        Prime: "″",
        Product: "∏",
        Proportion: "∷",
        Proportional: "∝",
        Pscr: "𝒫",
        Psi: "Ψ",
        QUO: '"',
        QUOT: '"',
        Qfr: "𝔔",
        Qopf: "ℚ",
        Qscr: "𝒬",
        RBarr: "⤐",
        RE: "®",
        REG: "®",
        Racute: "Ŕ",
        Rang: "⟫",
        Rarr: "↠",
        Rarrtl: "⤖",
        Rcaron: "Ř",
        Rcedil: "Ŗ",
        Rcy: "Р",
        Re: "ℜ",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        Rfr: "ℜ",
        Rho: "Ρ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        Rightarrow: "⇒",
        Ropf: "ℝ",
        RoundImplies: "⥰",
        Rrightarrow: "⇛",
        Rscr: "ℛ",
        Rsh: "↱",
        RuleDelayed: "⧴",
        SHCHcy: "Щ",
        SHcy: "Ш",
        SOFTcy: "Ь",
        Sacute: "Ś",
        Sc: "⪼",
        Scaron: "Š",
        Scedil: "Ş",
        Scirc: "Ŝ",
        Scy: "С",
        Sfr: "𝔖",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        Sigma: "Σ",
        SmallCircle: "∘",
        Sopf: "𝕊",
        Sqrt: "√",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        Sscr: "𝒮",
        Star: "⋆",
        Sub: "⋐",
        Subset: "⋐",
        SubsetEqual: "⊆",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        SuchThat: "∋",
        Sum: "∑",
        Sup: "⋑",
        Superset: "⊃",
        SupersetEqual: "⊇",
        Supset: "⋑",
        THOR: "Þ",
        THORN: "Þ",
        TRADE: "™",
        TSHcy: "Ћ",
        TScy: "Ц",
        Tab: "	",
        Tau: "Τ",
        Tcaron: "Ť",
        Tcedil: "Ţ",
        Tcy: "Т",
        Tfr: "𝔗",
        Therefore: "∴",
        Theta: "Θ",
        ThickSpace: "  ",
        ThinSpace: " ",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        Topf: "𝕋",
        TripleDot: "⃛",
        Tscr: "𝒯",
        Tstrok: "Ŧ",
        Uacut: "Ú",
        Uacute: "Ú",
        Uarr: "↟",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        Ubreve: "Ŭ",
        Ucir: "Û",
        Ucirc: "Û",
        Ucy: "У",
        Udblac: "Ű",
        Ufr: "𝔘",
        Ugrav: "Ù",
        Ugrave: "Ù",
        Umacr: "Ū",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        Uopf: "𝕌",
        UpArrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        UpEquilibrium: "⥮",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        Uparrow: "⇑",
        Updownarrow: "⇕",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        Upsilon: "Υ",
        Uring: "Ů",
        Uscr: "𝒰",
        Utilde: "Ũ",
        Uum: "Ü",
        Uuml: "Ü",
        VDash: "⊫",
        Vbar: "⫫",
        Vcy: "В",
        Vdash: "⊩",
        Vdashl: "⫦",
        Vee: "⋁",
        Verbar: "‖",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        Vopf: "𝕍",
        Vscr: "𝒱",
        Vvdash: "⊪",
        Wcirc: "Ŵ",
        Wedge: "⋀",
        Wfr: "𝔚",
        Wopf: "𝕎",
        Wscr: "𝒲",
        Xfr: "𝔛",
        Xi: "Ξ",
        Xopf: "𝕏",
        Xscr: "𝒳",
        YAcy: "Я",
        YIcy: "Ї",
        YUcy: "Ю",
        Yacut: "Ý",
        Yacute: "Ý",
        Ycirc: "Ŷ",
        Ycy: "Ы",
        Yfr: "𝔜",
        Yopf: "𝕐",
        Yscr: "𝒴",
        Yuml: "Ÿ",
        ZHcy: "Ж",
        Zacute: "Ź",
        Zcaron: "Ž",
        Zcy: "З",
        Zdot: "Ż",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        Zfr: "ℨ",
        Zopf: "ℤ",
        Zscr: "𝒵",
        aacut: "á",
        aacute: "á",
        abreve: "ă",
        ac: "∾",
        acE: "∾̳",
        acd: "∿",
        acir: "â",
        acirc: "â",
        acut: "´",
        acute: "´",
        acy: "а",
        aeli: "æ",
        aelig: "æ",
        af: "⁡",
        afr: "𝔞",
        agrav: "à",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        alpha: "α",
        amacr: "ā",
        amalg: "⨿",
        am: "&",
        amp: "&",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        aogon: "ą",
        aopf: "𝕒",
        ap: "≈",
        apE: "⩰",
        apacir: "⩯",
        ape: "≊",
        apid: "≋",
        apos: "'",
        approx: "≈",
        approxeq: "≊",
        arin: "å",
        aring: "å",
        ascr: "𝒶",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        atild: "ã",
        atilde: "ã",
        aum: "ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        bNot: "⫭",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        barvee: "⊽",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bnot: "⌐",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxDL: "╗",
        boxDR: "╔",
        boxDl: "╖",
        boxDr: "╓",
        boxH: "═",
        boxHD: "╦",
        boxHU: "╩",
        boxHd: "╤",
        boxHu: "╧",
        boxUL: "╝",
        boxUR: "╚",
        boxUl: "╜",
        boxUr: "╙",
        boxV: "║",
        boxVH: "╬",
        boxVL: "╣",
        boxVR: "╠",
        boxVh: "╫",
        boxVl: "╢",
        boxVr: "╟",
        boxbox: "⧉",
        boxdL: "╕",
        boxdR: "╒",
        boxdl: "┐",
        boxdr: "┌",
        boxh: "─",
        boxhD: "╥",
        boxhU: "╨",
        boxhd: "┬",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxuL: "╛",
        boxuR: "╘",
        boxul: "┘",
        boxur: "└",
        boxv: "│",
        boxvH: "╪",
        boxvL: "╡",
        boxvR: "╞",
        boxvh: "┼",
        boxvl: "┤",
        boxvr: "├",
        bprime: "‵",
        breve: "˘",
        brvba: "¦",
        brvbar: "¦",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        bumpeq: "≏",
        cacute: "ć",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        ccaps: "⩍",
        ccaron: "č",
        ccedi: "ç",
        ccedil: "ç",
        ccirc: "ĉ",
        ccups: "⩌",
        ccupssm: "⩐",
        cdot: "ċ",
        cedi: "¸",
        cedil: "¸",
        cemptyv: "⦲",
        cen: "¢",
        cent: "¢",
        centerdot: "·",
        cfr: "𝔠",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        chi: "χ",
        cir: "○",
        cirE: "⧃",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledR: "®",
        circledS: "Ⓢ",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        conint: "∮",
        copf: "𝕔",
        coprod: "∐",
        cop: "©",
        copy: "©",
        copysr: "℗",
        crarr: "↵",
        cross: "✗",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cup: "∪",
        cupbrcap: "⩈",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curre: "¤",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dArr: "⇓",
        dHar: "⥥",
        dagger: "†",
        daleth: "ℸ",
        darr: "↓",
        dash: "‐",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        dcaron: "ď",
        dcy: "д",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        ddotseq: "⩷",
        de: "°",
        deg: "°",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        dfr: "𝔡",
        dharl: "⇃",
        dharr: "⇂",
        diam: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divid: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        dopf: "𝕕",
        dot: "˙",
        doteq: "≐",
        doteqdot: "≑",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        downarrow: "↓",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        dscr: "𝒹",
        dscy: "ѕ",
        dsol: "⧶",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        dzcy: "џ",
        dzigrarr: "⟿",
        eDDot: "⩷",
        eDot: "≑",
        eacut: "é",
        eacute: "é",
        easter: "⩮",
        ecaron: "ě",
        ecir: "ê",
        ecirc: "ê",
        ecolon: "≕",
        ecy: "э",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        efr: "𝔢",
        eg: "⪚",
        egrav: "è",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        emptyv: "∅",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        eng: "ŋ",
        ensp: " ",
        eogon: "ę",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        equals: "=",
        equest: "≟",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erDot: "≓",
        erarr: "⥱",
        escr: "ℯ",
        esdot: "≐",
        esim: "≂",
        eta: "η",
        et: "ð",
        eth: "ð",
        eum: "ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        ffr: "𝔣",
        filig: "ﬁ",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        fopf: "𝕗",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        fpartint: "⨍",
        frac1: "¼",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac3: "¾",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        gE: "≧",
        gEl: "⪌",
        gacute: "ǵ",
        gamma: "γ",
        gammad: "ϝ",
        gap: "⪆",
        gbreve: "ğ",
        gcirc: "ĝ",
        gcy: "г",
        gdot: "ġ",
        ge: "≥",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        gfr: "𝔤",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        gjcy: "ѓ",
        gl: "≷",
        glE: "⪒",
        gla: "⪥",
        glj: "⪤",
        gnE: "≩",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        gopf: "𝕘",
        grave: "`",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        g: ">",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        hArr: "⇔",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        hardcy: "ъ",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        hbar: "ℏ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        horbar: "―",
        hscr: "𝒽",
        hslash: "ℏ",
        hstrok: "ħ",
        hybull: "⁃",
        hyphen: "‐",
        iacut: "í",
        iacute: "í",
        ic: "⁣",
        icir: "î",
        icirc: "î",
        icy: "и",
        iecy: "е",
        iexc: "¡",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        igrav: "ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        ijlig: "ĳ",
        imacr: "ī",
        image: "ℑ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        int: "∫",
        intcal: "⊺",
        integers: "ℤ",
        intercal: "⊺",
        intlarhk: "⨗",
        intprod: "⨼",
        iocy: "ё",
        iogon: "į",
        iopf: "𝕚",
        iota: "ι",
        iprod: "⨼",
        iques: "¿",
        iquest: "¿",
        iscr: "𝒾",
        isin: "∈",
        isinE: "⋹",
        isindot: "⋵",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        itilde: "ĩ",
        iukcy: "і",
        ium: "ï",
        iuml: "ï",
        jcirc: "ĵ",
        jcy: "й",
        jfr: "𝔧",
        jmath: "ȷ",
        jopf: "𝕛",
        jscr: "𝒿",
        jsercy: "ј",
        jukcy: "є",
        kappa: "κ",
        kappav: "ϰ",
        kcedil: "ķ",
        kcy: "к",
        kfr: "𝔨",
        kgreen: "ĸ",
        khcy: "х",
        kjcy: "ќ",
        kopf: "𝕜",
        kscr: "𝓀",
        lAarr: "⇚",
        lArr: "⇐",
        lAtail: "⤛",
        lBarr: "⤎",
        lE: "≦",
        lEg: "⪋",
        lHar: "⥢",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        lambda: "λ",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        laqu: "«",
        laquo: "«",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        lcaron: "ľ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        leftarrow: "←",
        leftarrowtail: "↢",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        leftthreetimes: "⋋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        lessgtr: "≶",
        lesssim: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        ljcy: "љ",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        llhard: "⥫",
        lltri: "◺",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnE: "≨",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        lstrok: "ł",
        l: "<",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltrPar: "⦖",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        mDDot: "∺",
        mac: "¯",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        mcy: "м",
        mdash: "—",
        measuredangle: "∡",
        mfr: "𝔪",
        mho: "℧",
        micr: "µ",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middo: "·",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        mstpos: "∾",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nGg: "⋙̸",
        nGt: "≫⃒",
        nGtv: "≫̸",
        nLeftarrow: "⇍",
        nLeftrightarrow: "⇎",
        nLl: "⋘̸",
        nLt: "≪⃒",
        nLtv: "≪̸",
        nRightarrow: "⇏",
        nVDash: "⊯",
        nVdash: "⊮",
        nabla: "∇",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbs: " ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        ncaron: "ň",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        neArr: "⇗",
        nearhk: "⤤",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        nexist: "∄",
        nexists: "∄",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        ngsim: "≵",
        ngt: "≯",
        ngtr: "≯",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        njcy: "њ",
        nlArr: "⇍",
        nlE: "≦̸",
        nlarr: "↚",
        nldr: "‥",
        nle: "≰",
        nleftarrow: "↚",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nlsim: "≴",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nmid: "∤",
        nopf: "𝕟",
        no: "¬",
        not: "¬",
        notin: "∉",
        notinE: "⋹̸",
        notindot: "⋵̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        ntild: "ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvDash: "⊭",
        nvHarr: "⤄",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwArr: "⇖",
        nwarhk: "⤣",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        oS: "Ⓢ",
        oacut: "ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "ô",
        ocirc: "ô",
        ocy: "о",
        odash: "⊝",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        oelig: "œ",
        ofcir: "⦿",
        ofr: "𝔬",
        ogon: "˛",
        ograv: "ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        omacr: "ō",
        omega: "ω",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        oopf: "𝕠",
        opar: "⦷",
        operp: "⦹",
        oplus: "⊕",
        or: "∨",
        orarr: "↻",
        ord: "º",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oscr: "ℴ",
        oslas: "ø",
        oslash: "ø",
        osol: "⊘",
        otild: "õ",
        otilde: "õ",
        otimes: "⊗",
        otimesas: "⨶",
        oum: "ö",
        ouml: "ö",
        ovbar: "⌽",
        par: "¶",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        pfr: "𝔭",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        plusm: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        pointint: "⨕",
        popf: "𝕡",
        poun: "£",
        pound: "£",
        pr: "≺",
        prE: "⪳",
        prap: "⪷",
        prcue: "≼",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        prime: "′",
        primes: "ℙ",
        prnE: "⪵",
        prnap: "⪹",
        prnsim: "⋨",
        prod: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        pscr: "𝓅",
        psi: "ψ",
        puncsp: " ",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        qprime: "⁗",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quo: '"',
        quot: '"',
        rAarr: "⇛",
        rArr: "⇒",
        rAtail: "⤜",
        rBarr: "⤏",
        rHar: "⥤",
        race: "∽̱",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raqu: "»",
        raquo: "»",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        rcaron: "ř",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        re: "®",
        reg: "®",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        rho: "ρ",
        rhov: "ϱ",
        rightarrow: "→",
        rightarrowtail: "↣",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        rightthreetimes: "⋌",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        rsaquo: "›",
        rscr: "𝓇",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        ruluhar: "⥨",
        rx: "℞",
        sacute: "ś",
        sbquo: "‚",
        sc: "≻",
        scE: "⪴",
        scap: "⪸",
        scaron: "š",
        sccue: "≽",
        sce: "⪰",
        scedil: "ş",
        scirc: "ŝ",
        scnE: "⪶",
        scnap: "⪺",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        seArr: "⇘",
        searhk: "⤥",
        searr: "↘",
        searrow: "↘",
        sec: "§",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        shchcy: "щ",
        shcy: "ш",
        shortmid: "∣",
        shortparallel: "∥",
        sh: "­",
        shy: "­",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        square: "□",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        subE: "⫅",
        subdot: "⪽",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        sum: "∑",
        sung: "♪",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supE: "⫆",
        supdot: "⪾",
        supdsub: "⫘",
        supe: "⊇",
        supedot: "⫄",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swArr: "⇙",
        swarhk: "⤦",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szli: "ß",
        szlig: "ß",
        target: "⌖",
        tau: "τ",
        tbrk: "⎴",
        tcaron: "ť",
        tcedil: "ţ",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        thor: "þ",
        thorn: "þ",
        tilde: "˜",
        time: "×",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        tscr: "𝓉",
        tscy: "ц",
        tshcy: "ћ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        uArr: "⇑",
        uHar: "⥣",
        uacut: "ú",
        uacute: "ú",
        uarr: "↑",
        ubrcy: "ў",
        ubreve: "ŭ",
        ucir: "û",
        ucirc: "û",
        ucy: "у",
        udarr: "⇅",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        ufr: "𝔲",
        ugrav: "ù",
        ugrave: "ù",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        umacr: "ū",
        um: "¨",
        uml: "¨",
        uogon: "ų",
        uopf: "𝕦",
        uparrow: "↑",
        updownarrow: "↕",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        upsi: "υ",
        upsih: "ϒ",
        upsilon: "υ",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        uring: "ů",
        urtri: "◹",
        uscr: "𝓊",
        utdot: "⋰",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        uum: "ü",
        uuml: "ü",
        uwangle: "⦧",
        vArr: "⇕",
        vBar: "⫨",
        vBarv: "⫩",
        vDash: "⊨",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vcy: "в",
        vdash: "⊢",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        vert: "|",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        vzigzag: "⦚",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        wfr: "𝔴",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        yacut: "ý",
        yacute: "ý",
        yacy: "я",
        ycirc: "ŷ",
        ycy: "ы",
        ye: "¥",
        yen: "¥",
        yfr: "𝔶",
        yicy: "ї",
        yopf: "𝕪",
        yscr: "𝓎",
        yucy: "ю",
        yum: "ÿ",
        yuml: "ÿ",
        zacute: "ź",
        zcaron: "ž",
        zcy: "з",
        zdot: "ż",
        zeetrf: "ℨ",
        zeta: "ζ",
        zfr: "𝔷",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌",
      };
    },
  }),
  b2 = q({
    "../../node_modules/parse-entities/decode-entity.js"(e, t) {
      var r = v2();
      t.exports = a;
      var n = {}.hasOwnProperty;
      function a(i) {
        return n.call(r, i) ? r[i] : !1;
      }
    },
  }),
  E2 = q({
    "../../node_modules/parse-entities/index.js"(e, t) {
      var r = f2(),
        n = m2(),
        a = Ou(),
        i = g2(),
        l = y2(),
        s = b2();
      t.exports = ee;
      var c = {}.hasOwnProperty,
        d = String.fromCharCode,
        p = Function.prototype,
        h = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        y = 9,
        f = 10,
        g = 12,
        m = 32,
        x = 38,
        v = 59,
        E = 60,
        b = 61,
        w = 35,
        _ = 88,
        A = 120,
        S = 65533,
        C = "named",
        k = "hexadecimal",
        D = "decimal",
        L = {};
      (L[k] = 16), (L[D] = 10);
      var I = {};
      (I[C] = l), (I[D] = a), (I[k] = i);
      var $ = 1,
        M = 2,
        F = 3,
        P = 4,
        j = 5,
        z = 6,
        V = 7,
        Z = {};
      (Z[$] = "Named character references must be terminated by a semicolon"),
        (Z[M] =
          "Numeric character references must be terminated by a semicolon"),
        (Z[F] = "Named character references cannot be empty"),
        (Z[P] = "Numeric character references cannot be empty"),
        (Z[j] = "Named character references must be known"),
        (Z[z] = "Numeric character references cannot be disallowed"),
        (Z[V] =
          "Numeric character references cannot be outside the permissible Unicode range");
      function ee(H, W) {
        var B = {},
          U,
          te;
        W || (W = {});
        for (te in h) (U = W[te]), (B[te] = U ?? h[te]);
        return (
          (B.position.indent || B.position.start) &&
            ((B.indent = B.position.indent || []),
            (B.position = B.position.start)),
          oe(H, B)
        );
      }
      function oe(H, W) {
        var B = W.additional,
          U = W.nonTerminated,
          te = W.text,
          J = W.reference,
          G = W.warning,
          K = W.textContext,
          N = W.referenceContext,
          le = W.warningContext,
          we = W.position,
          Me = W.indent || [],
          qe = H.length,
          Ue = 0,
          ar = -1,
          pe = we.column || 1,
          jt = we.line || 1,
          at = "",
          or = [],
          ot,
          ir,
          it,
          _e,
          et,
          ye,
          fe,
          lt,
          vn,
          Pa,
          Zt,
          Br,
          zt,
          xt,
          hl,
          Nr,
          bn,
          st,
          ve;
        for (
          typeof B == "string" && (B = B.charCodeAt(0)),
            Nr = Vr(),
            lt = G ? y1 : p,
            Ue--,
            qe++;
          ++Ue < qe;

        )
          if (
            (et === f && (pe = Me[ar] || 1), (et = H.charCodeAt(Ue)), et === x)
          ) {
            if (
              ((fe = H.charCodeAt(Ue + 1)),
              fe === y ||
                fe === f ||
                fe === g ||
                fe === m ||
                fe === x ||
                fe === E ||
                fe !== fe ||
                (B && fe === B))
            ) {
              (at += d(et)), pe++;
              continue;
            }
            for (
              zt = Ue + 1,
                Br = zt,
                ve = zt,
                fe === w
                  ? ((ve = ++Br),
                    (fe = H.charCodeAt(ve)),
                    fe === _ || fe === A ? ((xt = k), (ve = ++Br)) : (xt = D))
                  : (xt = C),
                ot = "",
                Zt = "",
                _e = "",
                hl = I[xt],
                ve--;
              ++ve < qe && ((fe = H.charCodeAt(ve)), !!hl(fe));

            )
              (_e += d(fe)),
                xt === C && c.call(r, _e) && ((ot = _e), (Zt = r[_e]));
            (it = H.charCodeAt(ve) === v),
              it &&
                (ve++,
                (ir = xt === C ? s(_e) : !1),
                ir && ((ot = _e), (Zt = ir))),
              (st = 1 + ve - zt),
              (!it && !U) ||
                (_e
                  ? xt === C
                    ? (it && !Zt
                        ? lt(j, 1)
                        : (ot !== _e &&
                            ((ve = Br + ot.length),
                            (st = 1 + ve - Br),
                            (it = !1)),
                          it ||
                            ((vn = ot ? $ : F),
                            W.attribute
                              ? ((fe = H.charCodeAt(ve)),
                                fe === b
                                  ? (lt(vn, st), (Zt = null))
                                  : l(fe)
                                  ? (Zt = null)
                                  : lt(vn, st))
                              : lt(vn, st))),
                      (ye = Zt))
                    : (it || lt(M, st),
                      (ye = parseInt(_e, L[xt])),
                      X(ye)
                        ? (lt(V, st), (ye = d(S)))
                        : ye in n
                        ? (lt(z, st), (ye = n[ye]))
                        : ((Pa = ""),
                          Y(ye) && lt(z, st),
                          ye > 65535 &&
                            ((ye -= 65536),
                            (Pa += d((ye >>> 10) | 55296)),
                            (ye = 56320 | (ye & 1023))),
                          (ye = Pa + d(ye))))
                  : xt !== C && lt(P, st)),
              ye
                ? (yl(),
                  (Nr = Vr()),
                  (Ue = ve - 1),
                  (pe += ve - zt + 1),
                  or.push(ye),
                  (bn = Vr()),
                  bn.offset++,
                  J &&
                    J.call(N, ye, { start: Nr, end: bn }, H.slice(zt - 1, ve)),
                  (Nr = bn))
                : ((_e = H.slice(zt - 1, ve)),
                  (at += _e),
                  (pe += _e.length),
                  (Ue = ve - 1));
          } else
            et === 10 && (jt++, ar++, (pe = 0)),
              et === et ? ((at += d(et)), pe++) : yl();
        return or.join("");
        function Vr() {
          return { line: jt, column: pe, offset: Ue + (we.offset || 0) };
        }
        function y1(vl, bl) {
          var Ma = Vr();
          (Ma.column += bl), (Ma.offset += bl), G.call(le, Z[vl], Ma, vl);
        }
        function yl() {
          at &&
            (or.push(at),
            te && te.call(K, at, { start: Nr, end: Vr() }),
            (at = ""));
        }
      }
      function X(H) {
        return (H >= 55296 && H <= 57343) || H > 1114111;
      }
      function Y(H) {
        return (
          (H >= 1 && H <= 8) ||
          H === 11 ||
          (H >= 13 && H <= 31) ||
          (H >= 127 && H <= 159) ||
          (H >= 64976 && H <= 65007) ||
          (H & 65535) === 65535 ||
          (H & 65535) === 65534
        );
      }
    },
  }),
  x2 = q({
    "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(
      e,
      t
    ) {
      var r =
          typeof window < "u"
            ? window
            : typeof WorkerGlobalScope < "u" &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
        n = (function (a) {
          var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            l = 0,
            s = {},
            c = {
              manual: a.Prism && a.Prism.manual,
              disableWorkerMessageHandler:
                a.Prism && a.Prism.disableWorkerMessageHandler,
              util: {
                encode: function b(w) {
                  return w instanceof d
                    ? new d(w.type, b(w.content), w.alias)
                    : Array.isArray(w)
                    ? w.map(b)
                    : w
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (b) {
                  return Object.prototype.toString.call(b).slice(8, -1);
                },
                objId: function (b) {
                  return (
                    b.__id || Object.defineProperty(b, "__id", { value: ++l }),
                    b.__id
                  );
                },
                clone: function b(w, _) {
                  _ = _ || {};
                  var A, S;
                  switch (c.util.type(w)) {
                    case "Object":
                      if (((S = c.util.objId(w)), _[S])) return _[S];
                      (A = {}), (_[S] = A);
                      for (var C in w)
                        w.hasOwnProperty(C) && (A[C] = b(w[C], _));
                      return A;
                    case "Array":
                      return (
                        (S = c.util.objId(w)),
                        _[S]
                          ? _[S]
                          : ((A = []),
                            (_[S] = A),
                            w.forEach(function (k, D) {
                              A[D] = b(k, _);
                            }),
                            A)
                      );
                    default:
                      return w;
                  }
                },
                getLanguage: function (b) {
                  for (; b; ) {
                    var w = i.exec(b.className);
                    if (w) return w[1].toLowerCase();
                    b = b.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (b, w) {
                  (b.className = b.className.replace(RegExp(i, "gi"), "")),
                    b.classList.add("language-" + w);
                },
                currentScript: function () {
                  if (typeof document > "u") return null;
                  if ("currentScript" in document && 1 < 2)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (A) {
                    var b = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      A.stack
                    ) || [])[1];
                    if (b) {
                      var w = document.getElementsByTagName("script");
                      for (var _ in w) if (w[_].src == b) return w[_];
                    }
                    return null;
                  }
                },
                isActive: function (b, w, _) {
                  for (var A = "no-" + w; b; ) {
                    var S = b.classList;
                    if (S.contains(w)) return !0;
                    if (S.contains(A)) return !1;
                    b = b.parentElement;
                  }
                  return !!_;
                },
              },
              languages: {
                plain: s,
                plaintext: s,
                text: s,
                txt: s,
                extend: function (b, w) {
                  var _ = c.util.clone(c.languages[b]);
                  for (var A in w) _[A] = w[A];
                  return _;
                },
                insertBefore: function (b, w, _, A) {
                  A = A || c.languages;
                  var S = A[b],
                    C = {};
                  for (var k in S)
                    if (S.hasOwnProperty(k)) {
                      if (k == w)
                        for (var D in _) _.hasOwnProperty(D) && (C[D] = _[D]);
                      _.hasOwnProperty(k) || (C[k] = S[k]);
                    }
                  var L = A[b];
                  return (
                    (A[b] = C),
                    c.languages.DFS(c.languages, function (I, $) {
                      $ === L && I != b && (this[I] = C);
                    }),
                    C
                  );
                },
                DFS: function b(w, _, A, S) {
                  S = S || {};
                  var C = c.util.objId;
                  for (var k in w)
                    if (w.hasOwnProperty(k)) {
                      _.call(w, k, w[k], A || k);
                      var D = w[k],
                        L = c.util.type(D);
                      L === "Object" && !S[C(D)]
                        ? ((S[C(D)] = !0), b(D, _, null, S))
                        : L === "Array" &&
                          !S[C(D)] &&
                          ((S[C(D)] = !0), b(D, _, k, S));
                    }
                },
              },
              plugins: {},
              highlightAll: function (b, w) {
                c.highlightAllUnder(document, b, w);
              },
              highlightAllUnder: function (b, w, _) {
                var A = {
                  callback: _,
                  container: b,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                c.hooks.run("before-highlightall", A),
                  (A.elements = Array.prototype.slice.apply(
                    A.container.querySelectorAll(A.selector)
                  )),
                  c.hooks.run("before-all-elements-highlight", A);
                for (var S = 0, C; (C = A.elements[S++]); )
                  c.highlightElement(C, w === !0, A.callback);
              },
              highlightElement: function (b, w, _) {
                var A = c.util.getLanguage(b),
                  S = c.languages[A];
                c.util.setLanguage(b, A);
                var C = b.parentElement;
                C &&
                  C.nodeName.toLowerCase() === "pre" &&
                  c.util.setLanguage(C, A);
                var k = b.textContent,
                  D = { element: b, language: A, grammar: S, code: k };
                function L($) {
                  (D.highlightedCode = $),
                    c.hooks.run("before-insert", D),
                    (D.element.innerHTML = D.highlightedCode),
                    c.hooks.run("after-highlight", D),
                    c.hooks.run("complete", D),
                    _ && _.call(D.element);
                }
                if (
                  (c.hooks.run("before-sanity-check", D),
                  (C = D.element.parentElement),
                  C &&
                    C.nodeName.toLowerCase() === "pre" &&
                    !C.hasAttribute("tabindex") &&
                    C.setAttribute("tabindex", "0"),
                  !D.code)
                ) {
                  c.hooks.run("complete", D), _ && _.call(D.element);
                  return;
                }
                if ((c.hooks.run("before-highlight", D), !D.grammar)) {
                  L(c.util.encode(D.code));
                  return;
                }
                if (w && a.Worker) {
                  var I = new Worker(c.filename);
                  (I.onmessage = function ($) {
                    L($.data);
                  }),
                    I.postMessage(
                      JSON.stringify({
                        language: D.language,
                        code: D.code,
                        immediateClose: !0,
                      })
                    );
                } else L(c.highlight(D.code, D.grammar, D.language));
              },
              highlight: function (b, w, _) {
                var A = { code: b, grammar: w, language: _ };
                if ((c.hooks.run("before-tokenize", A), !A.grammar))
                  throw new Error(
                    'The language "' + A.language + '" has no grammar.'
                  );
                return (
                  (A.tokens = c.tokenize(A.code, A.grammar)),
                  c.hooks.run("after-tokenize", A),
                  d.stringify(c.util.encode(A.tokens), A.language)
                );
              },
              tokenize: function (b, w) {
                var _ = w.rest;
                if (_) {
                  for (var A in _) w[A] = _[A];
                  delete w.rest;
                }
                var S = new y();
                return f(S, S.head, b), h(b, S, w, S.head, 0), m(S);
              },
              hooks: {
                all: {},
                add: function (b, w) {
                  var _ = c.hooks.all;
                  (_[b] = _[b] || []), _[b].push(w);
                },
                run: function (b, w) {
                  var _ = c.hooks.all[b];
                  if (!(!_ || !_.length))
                    for (var A = 0, S; (S = _[A++]); ) S(w);
                },
              },
              Token: d,
            };
          a.Prism = c;
          function d(b, w, _, A) {
            (this.type = b),
              (this.content = w),
              (this.alias = _),
              (this.length = (A || "").length | 0);
          }
          d.stringify = function b(w, _) {
            if (typeof w == "string") return w;
            if (Array.isArray(w)) {
              var A = "";
              return (
                w.forEach(function (L) {
                  A += b(L, _);
                }),
                A
              );
            }
            var S = {
                type: w.type,
                content: b(w.content, _),
                tag: "span",
                classes: ["token", w.type],
                attributes: {},
                language: _,
              },
              C = w.alias;
            C &&
              (Array.isArray(C)
                ? Array.prototype.push.apply(S.classes, C)
                : S.classes.push(C)),
              c.hooks.run("wrap", S);
            var k = "";
            for (var D in S.attributes)
              k +=
                " " +
                D +
                '="' +
                (S.attributes[D] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              S.tag +
              ' class="' +
              S.classes.join(" ") +
              '"' +
              k +
              ">" +
              S.content +
              "</" +
              S.tag +
              ">"
            );
          };
          function p(b, w, _, A) {
            b.lastIndex = w;
            var S = b.exec(_);
            if (S && A && S[1]) {
              var C = S[1].length;
              (S.index += C), (S[0] = S[0].slice(C));
            }
            return S;
          }
          function h(b, w, _, A, S, C) {
            for (var k in _)
              if (!(!_.hasOwnProperty(k) || !_[k])) {
                var D = _[k];
                D = Array.isArray(D) ? D : [D];
                for (var L = 0; L < D.length; ++L) {
                  if (C && C.cause == k + "," + L) return;
                  var I = D[L],
                    $ = I.inside,
                    M = !!I.lookbehind,
                    F = !!I.greedy,
                    P = I.alias;
                  if (F && !I.pattern.global) {
                    var j = I.pattern.toString().match(/[imsuy]*$/)[0];
                    I.pattern = RegExp(I.pattern.source, j + "g");
                  }
                  for (
                    var z = I.pattern || I, V = A.next, Z = S;
                    V !== w.tail && !(C && Z >= C.reach);
                    Z += V.value.length, V = V.next
                  ) {
                    var ee = V.value;
                    if (w.length > b.length) return;
                    if (!(ee instanceof d)) {
                      var oe = 1,
                        X;
                      if (F) {
                        if (((X = p(z, Z, b, M)), !X || X.index >= b.length))
                          break;
                        var B = X.index,
                          Y = X.index + X[0].length,
                          H = Z;
                        for (H += V.value.length; B >= H; )
                          (V = V.next), (H += V.value.length);
                        if (
                          ((H -= V.value.length), (Z = H), V.value instanceof d)
                        )
                          continue;
                        for (
                          var W = V;
                          W !== w.tail && (H < Y || typeof W.value == "string");
                          W = W.next
                        )
                          oe++, (H += W.value.length);
                        oe--, (ee = b.slice(Z, H)), (X.index -= Z);
                      } else if (((X = p(z, 0, ee, M)), !X)) continue;
                      var B = X.index,
                        U = X[0],
                        te = ee.slice(0, B),
                        J = ee.slice(B + U.length),
                        G = Z + ee.length;
                      C && G > C.reach && (C.reach = G);
                      var K = V.prev;
                      te && ((K = f(w, K, te)), (Z += te.length)), g(w, K, oe);
                      var N = new d(k, $ ? c.tokenize(U, $) : U, P, U);
                      if (((V = f(w, K, N)), J && f(w, V, J), oe > 1)) {
                        var le = { cause: k + "," + L, reach: G };
                        h(b, w, _, V.prev, Z, le),
                          C && le.reach > C.reach && (C.reach = le.reach);
                      }
                    }
                  }
                }
              }
          }
          function y() {
            var b = { value: null, prev: null, next: null },
              w = { value: null, prev: b, next: null };
            (b.next = w), (this.head = b), (this.tail = w), (this.length = 0);
          }
          function f(b, w, _) {
            var A = w.next,
              S = { value: _, prev: w, next: A };
            return (w.next = S), (A.prev = S), b.length++, S;
          }
          function g(b, w, _) {
            for (var A = w.next, S = 0; S < _ && A !== b.tail; S++) A = A.next;
            (w.next = A), (A.prev = w), (b.length -= S);
          }
          function m(b) {
            for (var w = [], _ = b.head.next; _ !== b.tail; )
              w.push(_.value), (_ = _.next);
            return w;
          }
          if (!a.document)
            return (
              a.addEventListener &&
                (c.disableWorkerMessageHandler ||
                  a.addEventListener(
                    "message",
                    function (b) {
                      var w = JSON.parse(b.data),
                        _ = w.language,
                        A = w.code,
                        S = w.immediateClose;
                      a.postMessage(c.highlight(A, c.languages[_], _)),
                        S && a.close();
                    },
                    !1
                  )),
              c
            );
          var x = c.util.currentScript();
          x &&
            ((c.filename = x.src),
            x.hasAttribute("data-manual") && (c.manual = !0));
          function v() {
            c.manual || c.highlightAll();
          }
          if (!c.manual) {
            var E = document.readyState;
            E === "loading" || (E === "interactive" && x && x.defer)
              ? document.addEventListener("DOMContentLoaded", v)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(v)
              : window.setTimeout(v, 16);
          }
          return c;
        })(r);
      typeof t < "u" && t.exports && (t.exports = n),
        typeof global < "u" && (global.Prism = n);
    },
  }),
  w2 = q({
    "../../node_modules/refractor/core.js"(e, t) {
      var r =
          typeof globalThis == "object"
            ? globalThis
            : typeof self == "object"
            ? self
            : typeof window == "object"
            ? window
            : typeof global == "object"
            ? global
            : {},
        n = S();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var a = p2(),
        i = E2(),
        l = x2(),
        s = _u(),
        c = Au(),
        d = Km(),
        p = Ym();
      n();
      var h = {}.hasOwnProperty;
      function y() {}
      y.prototype = l;
      var f = new y();
      (t.exports = f),
        (f.highlight = x),
        (f.register = g),
        (f.alias = m),
        (f.registered = v),
        (f.listLanguages = E),
        g(s),
        g(c),
        g(d),
        g(p),
        (f.util.encode = _),
        (f.Token.stringify = b);
      function g(C) {
        if (typeof C != "function" || !C.displayName)
          throw new Error("Expected `function` for `grammar`, got `" + C + "`");
        f.languages[C.displayName] === void 0 && C(f);
      }
      function m(C, k) {
        var D = f.languages,
          L = C,
          I,
          $,
          M,
          F;
        k && ((L = {}), (L[C] = k));
        for (I in L)
          for (
            $ = L[I], $ = typeof $ == "string" ? [$] : $, M = $.length, F = -1;
            ++F < M;

          )
            D[$[F]] = D[I];
      }
      function x(C, k) {
        var D = l.highlight,
          L;
        if (typeof C != "string")
          throw new Error("Expected `string` for `value`, got `" + C + "`");
        if (f.util.type(k) === "Object") (L = k), (k = null);
        else {
          if (typeof k != "string")
            throw new Error("Expected `string` for `name`, got `" + k + "`");
          if (h.call(f.languages, k)) L = f.languages[k];
          else
            throw new Error("Unknown language: `" + k + "` is not registered");
        }
        return D.call(this, C, L, k);
      }
      function v(C) {
        if (typeof C != "string")
          throw new Error("Expected `string` for `language`, got `" + C + "`");
        return h.call(f.languages, C);
      }
      function E() {
        var C = f.languages,
          k = [],
          D;
        for (D in C) h.call(C, D) && typeof C[D] == "object" && k.push(D);
        return k;
      }
      function b(C, k, D) {
        var L;
        return typeof C == "string"
          ? { type: "text", value: C }
          : f.util.type(C) === "Array"
          ? w(C, k)
          : ((L = {
              type: C.type,
              content: f.Token.stringify(C.content, k, D),
              tag: "span",
              classes: ["token", C.type],
              attributes: {},
              language: k,
              parent: D,
            }),
            C.alias && (L.classes = L.classes.concat(C.alias)),
            f.hooks.run("wrap", L),
            a(L.tag + "." + L.classes.join("."), A(L.attributes), L.content));
      }
      function w(C, k) {
        for (var D = [], L = C.length, I = -1, $; ++I < L; )
          ($ = C[I]), $ !== "" && $ !== null && $ !== void 0 && D.push($);
        for (I = -1, L = D.length; ++I < L; )
          ($ = D[I]), (D[I] = f.Token.stringify($, k, D));
        return D;
      }
      function _(C) {
        return C;
      }
      function A(C) {
        var k;
        for (k in C) C[k] = i(C[k]);
        return C;
      }
      function S() {
        var C = "Prism" in r,
          k = C ? r.Prism : void 0;
        return D;
        function D() {
          C ? (r.Prism = k) : delete r.Prism, (C = void 0), (k = void 0);
        }
      }
    },
  });
function De() {
  return (
    (De = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    De.apply(this, arguments)
  );
}
var _2 = q({
    "../../node_modules/refractor/lang/bash.js"(e, t) {
      (t.exports = r), (r.displayName = "bash"), (r.aliases = ["shell"]);
      function r(n) {
        (function (a) {
          var i =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            l = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            s = {
              bash: l,
              environment: { pattern: RegExp("\\$" + i), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + i),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (a.languages.bash = {
            "shebang": { pattern: /^#!\s*\/.*/, alias: "important" },
            "comment": { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + i),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            "string": [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: s,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: l },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: s,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: s.entity },
              },
            ],
            "environment": { pattern: RegExp("\\$?" + i), alias: "constant" },
            "variable": s.variable,
            "function": {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "keyword": {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "builtin": {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            "boolean": {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            "operator": {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            "number": {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (l.inside = a.languages.bash);
          for (
            var c = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              d = s.variable[1].inside,
              p = 0;
            p < c.length;
            p++
          )
            d[c[p]] = a.languages.bash[c[p]];
          a.languages.shell = a.languages.bash;
        })(n);
      }
    },
  }),
  A2 = q({
    "../../node_modules/refractor/lang/js-extras.js"(e, t) {
      (t.exports = r), (r.displayName = "jsExtras"), (r.aliases = []);
      function r(n) {
        (function (a) {
          a.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  a.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            a.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + a.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            a.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            });
          function i(h, y) {
            return RegExp(
              h.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              y
            );
          }
          a.languages.insertBefore("javascript", "keyword", {
            imports: {
              pattern: i(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            exports: {
              pattern: i(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source
              ),
              lookbehind: !0,
              inside: a.languages.javascript,
            },
          }),
            a.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            a.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            a.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: i(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              "dom": {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              "console": { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var l = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              s = 0;
            s < l.length;
            s++
          ) {
            var c = l[s],
              d = a.languages.javascript[c];
            a.util.type(d) === "RegExp" &&
              (d = a.languages.javascript[c] = { pattern: d });
            var p = d.inside || {};
            (d.inside = p), (p["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(n);
      }
    },
  }),
  C2 = q({
    "../../node_modules/refractor/lang/json.js"(e, t) {
      (t.exports = r), (r.displayName = "json"), (r.aliases = ["webmanifest"]);
      function r(n) {
        (n.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (n.languages.webmanifest = n.languages.json);
      }
    },
  }),
  S2 = q({
    "../../node_modules/refractor/lang/graphql.js"(e, t) {
      (t.exports = r), (r.displayName = "graphql"), (r.aliases = []);
      function r(n) {
        (n.languages.graphql = {
          "comment": /#.*/,
          "description": {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: n.languages.markdown,
              },
            },
          },
          "string": {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          "number": /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          "boolean": /\b(?:false|true)\b/,
          "variable": /\$[a-z_]\w*/i,
          "directive": { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          "scalar": /\b(?:Boolean|Float|ID|Int|String)\b/,
          "constant": /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          "fragment": {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "keyword":
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          "operator": /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          "object": /\w+(?=\s*\{)/,
          "punctuation": /[!(){}\[\]:=,]/,
          "property": /\w+/,
        }),
          n.hooks.add("after-tokenize", function (a) {
            if (a.language !== "graphql") return;
            var i = a.tokens.filter(function (E) {
                return (
                  typeof E != "string" &&
                  E.type !== "comment" &&
                  E.type !== "scalar"
                );
              }),
              l = 0;
            function s(E) {
              return i[l + E];
            }
            function c(E, b) {
              b = b || 0;
              for (var w = 0; w < E.length; w++) {
                var _ = s(w + b);
                if (!_ || _.type !== E[w]) return !1;
              }
              return !0;
            }
            function d(E, b) {
              for (var w = 1, _ = l; _ < i.length; _++) {
                var A = i[_],
                  S = A.content;
                if (A.type === "punctuation" && typeof S == "string") {
                  if (E.test(S)) w++;
                  else if (b.test(S) && (w--, w === 0)) return _;
                }
              }
              return -1;
            }
            function p(E, b) {
              var w = E.alias;
              w ? Array.isArray(w) || (E.alias = w = [w]) : (E.alias = w = []),
                w.push(b);
            }
            for (; l < i.length; ) {
              var h = i[l++];
              if (h.type === "keyword" && h.content === "mutation") {
                var y = [];
                if (
                  c(["definition-mutation", "punctuation"]) &&
                  s(1).content === "("
                ) {
                  l += 2;
                  var f = d(/^\($/, /^\)$/);
                  if (f === -1) continue;
                  for (; l < f; l++) {
                    var g = s(0);
                    g.type === "variable" &&
                      (p(g, "variable-input"), y.push(g.content));
                  }
                  l = f + 1;
                }
                if (
                  c(["punctuation", "property-query"]) &&
                  s(0).content === "{" &&
                  (l++, p(s(0), "property-mutation"), y.length > 0)
                ) {
                  var m = d(/^\{$/, /^\}$/);
                  if (m === -1) continue;
                  for (var x = l; x < m; x++) {
                    var v = i[x];
                    v.type === "variable" &&
                      y.indexOf(v.content) >= 0 &&
                      p(v, "variable-input");
                  }
                }
              }
            }
          });
      }
    },
  });
const { logger: R2 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var T2 = je(wu()),
  O2 = T2.default,
  k2 = je(_2()),
  D2 = k2.default,
  L2 = je(Au()),
  $2 = L2.default,
  I2 = je(A2()),
  F2 = I2.default,
  P2 = je(C2()),
  M2 = P2.default,
  B2 = je(S2()),
  N2 = B2.default,
  V2 = je(_u()),
  H2 = V2.default,
  j2 = je(Um()),
  Z2 = j2.default,
  z2 = je(Wm()),
  q2 = z2.default,
  U2 = je(Gm()),
  W2 = U2.default,
  G2 = je(xu()),
  K2 = G2.default;
function Y2(e, t) {
  if (e == null) return {};
  var r = bi(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Oo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function X2(e) {
  if (Array.isArray(e)) return Oo(e);
}
function J2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Q2(e, t) {
  if (e) {
    if (typeof e == "string") return Oo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Oo(e, t);
  }
}
function e5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function t5(e) {
  return X2(e) || J2(e) || Q2(e) || e5();
}
function Qr(e) {
  "@babel/helpers - typeof";
  return (
    (Qr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qr(e)
  );
}
function r5(e, t) {
  if (Qr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n5(e) {
  var t = r5(e, "string");
  return Qr(t) === "symbol" ? t : String(t);
}
function ku(e, t, r) {
  return (
    (t = n5(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function es(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? es(Object(r), !0).forEach(function (n) {
          ku(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : es(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function a5(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2)
    return [
      e[0],
      e[1],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0]),
    ];
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3]),
      "".concat(e[3], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
}
var Ka = {};
function o5(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join(".");
  return Ka[t] || (Ka[t] = a5(e)), Ka[t];
}
function i5(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = e.filter(function (i) {
      return i !== "token";
    }),
    a = o5(n);
  return a.reduce(function (i, l) {
    return mr(mr({}, i), r[l]);
  }, t);
}
function ts(e) {
  return e.join(" ");
}
function l5(e, t) {
  var r = 0;
  return function (n) {
    return (
      (r += 1),
      n.map(function (a, i) {
        return wi({
          node: a,
          stylesheet: e,
          useInlineStyles: t,
          key: "code-segment-".concat(r, "-").concat(i),
        });
      })
    );
  };
}
function wi(e) {
  var t = e.node,
    r = e.stylesheet,
    n = e.style,
    a = n === void 0 ? {} : n,
    i = e.useInlineStyles,
    l = e.key,
    s = t.properties,
    c = t.type,
    d = t.tagName,
    p = t.value;
  if (c === "text") return p;
  if (d) {
    var h = l5(r, i),
      y;
    if (!i) y = mr(mr({}, s), {}, { className: ts(s.className) });
    else {
      var f = Object.keys(r).reduce(function (v, E) {
          return (
            E.split(".").forEach(function (b) {
              v.includes(b) || v.push(b);
            }),
            v
          );
        }, []),
        g = s.className && s.className.includes("token") ? ["token"] : [],
        m =
          s.className &&
          g.concat(
            s.className.filter(function (v) {
              return !f.includes(v);
            })
          );
      y = mr(
        mr({}, s),
        {},
        {
          className: ts(m) || void 0,
          style: i5(s.className, Object.assign({}, s.style, a), r),
        }
      );
    }
    var x = h(t.children);
    return o.createElement(d, De({ key: l }, y), x);
  }
}
var s5 = function (e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  },
  c5 = [
    "language",
    "children",
    "style",
    "customStyle",
    "codeTagProps",
    "useInlineStyles",
    "showLineNumbers",
    "showInlineLineNumbers",
    "startingLineNumber",
    "lineNumberContainerStyle",
    "lineNumberStyle",
    "wrapLines",
    "wrapLongLines",
    "lineProps",
    "renderer",
    "PreTag",
    "CodeTag",
    "code",
    "astGenerator",
  ];
function rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rs(Object(r), !0).forEach(function (n) {
          ku(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : rs(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
var u5 = /\n/g;
function d5(e) {
  return e.match(u5);
}
function p5(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    n = e.style;
  return t.map(function (a, i) {
    var l = i + r;
    return o.createElement(
      "span",
      {
        key: "line-".concat(i),
        className: "react-syntax-highlighter-line-number",
        style: typeof n == "function" ? n(l) : n,
      },
      "".concat(
        l,
        `
`
      )
    );
  });
}
function f5(e) {
  var t = e.codeString,
    r = e.codeStyle,
    n = e.containerStyle,
    a = n === void 0 ? { float: "left", paddingRight: "10px" } : n,
    i = e.numberStyle,
    l = i === void 0 ? {} : i,
    s = e.startingLineNumber;
  return o.createElement(
    "code",
    { style: Object.assign({}, r, a) },
    p5({
      lines: t.replace(/\n$/, "").split(`
`),
      style: l,
      startingLineNumber: s,
    })
  );
}
function m5(e) {
  return "".concat(e.toString().length, ".25em");
}
function Du(e, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: [
        "comment",
        "linenumber",
        "react-syntax-highlighter-line-number",
      ],
      style: t,
    },
    children: [{ type: "text", value: e }],
  };
}
function Lu(e, t, r) {
  var n = {
      display: "inline-block",
      minWidth: m5(r),
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
    },
    a = typeof e == "function" ? e(t) : e,
    i = ft(ft({}, n), a);
  return i;
}
function Nn(e) {
  var t = e.children,
    r = e.lineNumber,
    n = e.lineNumberStyle,
    a = e.largestLineNumber,
    i = e.showInlineLineNumbers,
    l = e.lineProps,
    s = l === void 0 ? {} : l,
    c = e.className,
    d = c === void 0 ? [] : c,
    p = e.showLineNumbers,
    h = e.wrapLongLines,
    y = typeof s == "function" ? s(r) : s;
  if (((y.className = d), r && i)) {
    var f = Lu(n, r, a);
    t.unshift(Du(r, f));
  }
  return (
    h & p && (y.style = ft(ft({}, y.style), {}, { display: "flex" })),
    { type: "element", tagName: "span", properties: y, children: t }
  );
}
function $u(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      n = 0;
    n < e.length;
    n++
  ) {
    var a = e[n];
    if (a.type === "text")
      r.push(Nn({ children: [a], className: t5(new Set(t)) }));
    else if (a.children) {
      var i = t.concat(a.properties.className);
      $u(a.children, i).forEach(function (l) {
        return r.push(l);
      });
    }
  }
  return r;
}
function g5(e, t, r, n, a, i, l, s, c) {
  var d,
    p = $u(e.value),
    h = [],
    y = -1,
    f = 0;
  function g(_, A) {
    var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Nn({
      children: _,
      lineNumber: A,
      lineNumberStyle: s,
      largestLineNumber: l,
      showInlineLineNumbers: a,
      lineProps: r,
      className: S,
      showLineNumbers: n,
      wrapLongLines: c,
    });
  }
  function m(_, A) {
    if (n && A && a) {
      var S = Lu(s, A, l);
      _.unshift(Du(A, S));
    }
    return _;
  }
  function x(_, A) {
    var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || S.length > 0 ? g(_, A, S) : m(_, A);
  }
  for (
    var v = function () {
      var _ = p[f],
        A = _.children[0].value,
        S = d5(A);
      if (S) {
        var C = A.split(`
`);
        C.forEach(function (k, D) {
          var L = n && h.length + i,
            I = {
              type: "text",
              value: "".concat(
                k,
                `
`
              ),
            };
          if (D === 0) {
            var $ = p
                .slice(y + 1, f)
                .concat(
                  Nn({ children: [I], className: _.properties.className })
                ),
              M = x($, L);
            h.push(M);
          } else if (D === C.length - 1) {
            var F = p[f + 1] && p[f + 1].children && p[f + 1].children[0],
              P = { type: "text", value: "".concat(k) };
            if (F) {
              var j = Nn({ children: [P], className: _.properties.className });
              p.splice(f + 1, 0, j);
            } else {
              var z = [P],
                V = x(z, L, _.properties.className);
              h.push(V);
            }
          } else {
            var Z = [I],
              ee = x(Z, L, _.properties.className);
            h.push(ee);
          }
        }),
          (y = f);
      }
      f++;
    };
    f < p.length;

  )
    v();
  if (y !== p.length - 1) {
    var E = p.slice(y + 1, p.length);
    if (E && E.length) {
      var b = n && h.length + i,
        w = x(E, b);
      h.push(w);
    }
  }
  return t ? h : (d = []).concat.apply(d, h);
}
function h5(e) {
  var t = e.rows,
    r = e.stylesheet,
    n = e.useInlineStyles;
  return t.map(function (a, i) {
    return wi({
      node: a,
      stylesheet: r,
      useInlineStyles: n,
      key: "code-segement".concat(i),
    });
  });
}
function Iu(e) {
  return e && typeof e.highlightAuto < "u";
}
function y5(e) {
  var t = e.astGenerator,
    r = e.language,
    n = e.code,
    a = e.defaultCodeValue;
  if (Iu(t)) {
    var i = s5(t, r);
    return r === "text"
      ? { value: a, language: "text" }
      : i
      ? t.highlight(r, n)
      : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: a };
  } catch {
    return { value: a };
  }
}
function v5(e, t) {
  return function (r) {
    var n = r.language,
      a = r.children,
      i = r.style,
      l = i === void 0 ? t : i,
      s = r.customStyle,
      c = s === void 0 ? {} : s,
      d = r.codeTagProps,
      p =
        d === void 0
          ? {
              className: n ? "language-".concat(n) : void 0,
              style: ft(
                ft({}, l['code[class*="language-"]']),
                l['code[class*="language-'.concat(n, '"]')]
              ),
            }
          : d,
      h = r.useInlineStyles,
      y = h === void 0 ? !0 : h,
      f = r.showLineNumbers,
      g = f === void 0 ? !1 : f,
      m = r.showInlineLineNumbers,
      x = m === void 0 ? !0 : m,
      v = r.startingLineNumber,
      E = v === void 0 ? 1 : v,
      b = r.lineNumberContainerStyle,
      w = r.lineNumberStyle,
      _ = w === void 0 ? {} : w,
      A = r.wrapLines,
      S = r.wrapLongLines,
      C = S === void 0 ? !1 : S,
      k = r.lineProps,
      D = k === void 0 ? {} : k,
      L = r.renderer,
      I = r.PreTag,
      $ = I === void 0 ? "pre" : I,
      M = r.CodeTag,
      F = M === void 0 ? "code" : M,
      P = r.code,
      j = P === void 0 ? (Array.isArray(a) ? a[0] : a) || "" : P,
      z = r.astGenerator,
      V = Y2(r, c5);
    z = z || e;
    var Z = g
        ? o.createElement(f5, {
            containerStyle: b,
            codeStyle: p.style || {},
            numberStyle: _,
            startingLineNumber: E,
            codeString: j,
          })
        : null,
      ee = l.hljs ||
        l['pre[class*="language-"]'] || { backgroundColor: "#fff" },
      oe = Iu(z) ? "hljs" : "prismjs",
      X = y
        ? Object.assign({}, V, { style: Object.assign({}, ee, c) })
        : Object.assign({}, V, {
            className: V.className
              ? "".concat(oe, " ").concat(V.className)
              : oe,
            style: Object.assign({}, c),
          });
    if (
      (C
        ? (p.style = ft(ft({}, p.style), {}, { whiteSpace: "pre-wrap" }))
        : (p.style = ft(ft({}, p.style), {}, { whiteSpace: "pre" })),
      !z)
    )
      return o.createElement($, X, Z, o.createElement(F, p, j));
    ((A === void 0 && L) || C) && (A = !0), (L = L || h5);
    var Y = [{ type: "text", value: j }],
      H = y5({ astGenerator: z, language: n, code: j, defaultCodeValue: Y });
    H.language === null && (H.value = Y);
    var W = H.value.length + E,
      B = g5(H, A, D, g, x, E, W, _, C);
    return o.createElement(
      $,
      X,
      o.createElement(
        F,
        p,
        !x && Z,
        L({ rows: B, stylesheet: l, useInlineStyles: y })
      )
    );
  };
}
var _i = je(w2()),
  Ai = v5(_i.default, {});
Ai.registerLanguage = function (e, t) {
  return _i.default.register(t);
};
Ai.alias = function (e, t) {
  return _i.default.alias(e, t);
};
var Ze = Ai,
  b5 = O.div(({ theme: e }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e.background.content,
    zIndex: 1,
  })),
  Fu = O.button(
    ({ theme: e }) => ({
      "margin": 0,
      "border": "0 none",
      "padding": "4px 10px",
      "cursor": "pointer",
      "display": "flex",
      "alignItems": "center",
      "color": e.color.defaultText,
      "background": e.background.content,
      "fontSize": 12,
      "lineHeight": "16px",
      "fontFamily": e.typography.fonts.base,
      "fontWeight": e.typography.weight.bold,
      "borderTop": `1px solid ${e.appBorderColor}`,
      "borderLeft": `1px solid ${e.appBorderColor}`,
      "marginLeft": -1,
      "borderRadius": "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` },
      "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      "&:focus": {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none",
      },
    }),
    ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 }
  );
Fu.displayName = "ActionButton";
var Ci = ({ actionItems: e, ...t }) =>
    o.createElement(
      b5,
      { ...t },
      e.map(({ title: r, className: n, onClick: a, disabled: i }, l) =>
        o.createElement(
          Fu,
          { key: l, className: n, onClick: a, disabled: i },
          r
        )
      )
    ),
  E5 = u.lazy(() =>
    R(
      () => import("./GlobalScrollAreaStyles-4LLX2B3H-0bcdfdce.js"),
      [
        "./GlobalScrollAreaStyles-4LLX2B3H-0bcdfdce.js",
        "./index-61bf1805.js",
        "./_commonjsHelpers-de833af9.js",
        "./iframe-5ac5d544.js",
        "./index-46294899.js",
        "./chunk-6P7RB4HF-150ba47c.js",
        "./index-d475d2ea.js",
        "./_commonjs-dynamic-modules-302442b1.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  x5 = u.lazy(() =>
    R(
      () => import("./OverlayScrollbars-OL4C4TVX-03af70e8.js"),
      [
        "./OverlayScrollbars-OL4C4TVX-03af70e8.js",
        "./index-61bf1805.js",
        "./_commonjsHelpers-de833af9.js",
      ],
      import.meta.url
    )
  ),
  w5 = ({ horizontal: e, vertical: t, ...r }) =>
    o.createElement(
      u.Suspense,
      { fallback: o.createElement("div", { ...r }) },
      o.createElement(E5, null),
      o.createElement(x5, {
        defer: !0,
        options: { scrollbars: { autoHide: "leave", visibility: "auto" } },
        ...r,
      })
    ),
  ga = O(w5)(
    ({ vertical: e }) =>
      e ? { overflowY: "auto", height: "100%" } : { overflowY: "hidden" },
    ({ horizontal: e }) =>
      e ? { overflowX: "auto", width: "100%" } : { overflowX: "hidden" }
  );
ga.defaultProps = { horizontal: !1, vertical: !1 };
var { navigator: Rn, document: jr, window: _5 } = Oe;
Ze.registerLanguage("jsextra", F2);
Ze.registerLanguage("jsx", O2);
Ze.registerLanguage("json", M2);
Ze.registerLanguage("yml", q2);
Ze.registerLanguage("md", Z2);
Ze.registerLanguage("bash", D2);
Ze.registerLanguage("css", $2);
Ze.registerLanguage("html", H2);
Ze.registerLanguage("tsx", W2);
Ze.registerLanguage("typescript", K2);
Ze.registerLanguage("graphql", N2);
var A5 = tr(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [r, n]) => ({ ...t, [`* .${r}`]: n }),
      {}
    )
  ),
  C5 = Pu();
function Pu() {
  return Rn != null && Rn.clipboard
    ? (e) => Rn.clipboard.writeText(e)
    : async (e) => {
        let t = jr.createElement("TEXTAREA"),
          r = jr.activeElement;
        (t.value = e),
          jr.body.appendChild(t),
          t.select(),
          jr.execCommand("copy"),
          jr.body.removeChild(t),
          r.focus();
      };
}
var S5 = O.div(
    ({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      color: e.color.defaultText,
    }),
    ({ theme: e, bordered: t }) =>
      t
        ? {
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.borderRadius,
            background: e.background.content,
          }
        : {},
    ({ showLineNumbers: e }) =>
      e
        ? {
            ".react-syntax-highlighter-line-number::before": {
              content: "attr(data-line-number)",
            },
          }
        : {}
  ),
  R5 = ({ children: e, className: t }) =>
    o.createElement(ga, { horizontal: !0, vertical: !0, className: t }, e),
  T5 = O(R5)({ position: "relative" }, ({ theme: e }) => A5(e)),
  O5 = O.pre(({ theme: e, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  k5 = O.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1,
  })),
  Mu = (e) => {
    let t = [...e.children],
      r = t[0],
      n = r.children[0].value,
      a = {
        ...r,
        children: [],
        properties: {
          ...r.properties,
          "data-line-number": n,
          "style": { ...r.properties.style, userSelect: "auto" },
        },
      };
    return (t[0] = a), { ...e, children: t };
  },
  D5 = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((n, a) =>
      wi({
        node: Mu(n),
        stylesheet: t,
        useInlineStyles: r,
        key: `code-segement${a}`,
      })
    ),
  L5 = (e, t) =>
    t
      ? e
        ? ({ rows: r, ...n }) => e({ rows: r.map((a) => Mu(a)), ...n })
        : D5
      : e,
  Si = ({
    children: e,
    language: t = "jsx",
    copyable: r = !1,
    bordered: n = !1,
    padded: a = !1,
    format: i = !0,
    formatter: l = null,
    className: s = null,
    showLineNumbers: c = !1,
    ...d
  }) => {
    if (typeof e != "string" || !e.trim()) return null;
    let p = l ? l(i, e) : e.trim(),
      [h, y] = u.useState(!1),
      f = u.useCallback(
        (m) => {
          m.preventDefault(),
            C5(p)
              .then(() => {
                y(!0), _5.setTimeout(() => y(!1), 1500);
              })
              .catch(R2.error);
        },
        [p]
      ),
      g = L5(d.renderer, c);
    return o.createElement(
      S5,
      { bordered: n, padded: a, showLineNumbers: c, className: s },
      o.createElement(
        T5,
        null,
        o.createElement(
          Ze,
          {
            padded: a || n,
            language: t,
            showLineNumbers: c,
            showInlineLineNumbers: c,
            useInlineStyles: !1,
            PreTag: O5,
            CodeTag: k5,
            lineNumberContainerStyle: {},
            ...d,
            renderer: g,
          },
          p
        )
      ),
      r
        ? o.createElement(Ci, {
            actionItems: [{ title: h ? "Copied" : "Copy", onClick: f }],
          })
        : null
    );
  };
Si.registerLanguage = (...e) => Ze.registerLanguage(...e);
var KC = Si,
  $5 = q({
    "../../node_modules/react-fast-compare/index.js"(e, t) {
      var r = typeof Element < "u",
        n = typeof Map == "function",
        a = typeof Set == "function",
        i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
      function l(s, c) {
        if (s === c) return !0;
        if (s && c && typeof s == "object" && typeof c == "object") {
          if (s.constructor !== c.constructor) return !1;
          var d, p, h;
          if (Array.isArray(s)) {
            if (((d = s.length), d != c.length)) return !1;
            for (p = d; p-- !== 0; ) if (!l(s[p], c[p])) return !1;
            return !0;
          }
          var y;
          if (n && s instanceof Map && c instanceof Map) {
            if (s.size !== c.size) return !1;
            for (y = s.entries(); !(p = y.next()).done; )
              if (!c.has(p.value[0])) return !1;
            for (y = s.entries(); !(p = y.next()).done; )
              if (!l(p.value[1], c.get(p.value[0]))) return !1;
            return !0;
          }
          if (a && s instanceof Set && c instanceof Set) {
            if (s.size !== c.size) return !1;
            for (y = s.entries(); !(p = y.next()).done; )
              if (!c.has(p.value[0])) return !1;
            return !0;
          }
          if (i && ArrayBuffer.isView(s) && ArrayBuffer.isView(c)) {
            if (((d = s.length), d != c.length)) return !1;
            for (p = d; p-- !== 0; ) if (s[p] !== c[p]) return !1;
            return !0;
          }
          if (s.constructor === RegExp)
            return s.source === c.source && s.flags === c.flags;
          if (
            s.valueOf !== Object.prototype.valueOf &&
            typeof s.valueOf == "function" &&
            typeof c.valueOf == "function"
          )
            return s.valueOf() === c.valueOf();
          if (
            s.toString !== Object.prototype.toString &&
            typeof s.toString == "function" &&
            typeof c.toString == "function"
          )
            return s.toString() === c.toString();
          if (
            ((h = Object.keys(s)), (d = h.length), d !== Object.keys(c).length)
          )
            return !1;
          for (p = d; p-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(c, h[p])) return !1;
          if (r && s instanceof Element) return !1;
          for (p = d; p-- !== 0; )
            if (
              !(
                (h[p] === "_owner" || h[p] === "__v" || h[p] === "__o") &&
                s.$$typeof
              ) &&
              !l(s[h[p]], c[h[p]])
            )
              return !1;
          return !0;
        }
        return s !== s && c !== c;
      }
      t.exports = function (s, c) {
        try {
          return l(s, c);
        } catch (d) {
          if ((d.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw d;
        }
      };
    },
  }),
  ns = function (e) {
    return e.reduce(function (t, r) {
      var n = r[0],
        a = r[1];
      return (t[n] = a), t;
    }, {});
  },
  as =
    typeof window < "u" && window.document && window.document.createElement
      ? u.useLayoutEffect
      : u.useEffect,
  $e = "top",
  Xe = "bottom",
  Je = "right",
  Ie = "left",
  ha = "auto",
  gn = [$e, Xe, Je, Ie],
  xr = "start",
  en = "end",
  I5 = "clippingParents",
  Bu = "viewport",
  Zr = "popper",
  F5 = "reference",
  os = gn.reduce(function (e, t) {
    return e.concat([t + "-" + xr, t + "-" + en]);
  }, []),
  Nu = [].concat(gn, [ha]).reduce(function (e, t) {
    return e.concat([t, t + "-" + xr, t + "-" + en]);
  }, []),
  P5 = "beforeRead",
  M5 = "read",
  B5 = "afterRead",
  N5 = "beforeMain",
  V5 = "main",
  H5 = "afterMain",
  j5 = "beforeWrite",
  Z5 = "write",
  z5 = "afterWrite",
  q5 = [P5, M5, B5, N5, V5, H5, j5, Z5, z5];
function Et(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function He(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Qt(e) {
  var t = He(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ke(e) {
  var t = He(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ri(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = He(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function U5(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !Ke(i) ||
      !Et(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (l) {
        var s = a[l];
        s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s);
      }));
  });
}
function W5(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          i = t.attributes[n] || {},
          l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          s = l.reduce(function (c, d) {
            return (c[d] = ""), c;
          }, {});
        !Ke(a) ||
          !Et(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (c) {
            a.removeAttribute(c);
          }));
      });
    }
  );
}
var G5 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: U5,
  effect: W5,
  requires: ["computeStyles"],
};
function vt(e) {
  return e.split("-")[0];
}
var Kt = Math.max,
  ea = Math.min,
  wr = Math.round;
function ko() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Vu() {
  return !/^((?!chrome|android).)*safari/i.test(ko());
}
function _r(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    Ke(e) &&
    ((a = (e.offsetWidth > 0 && wr(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && wr(n.height) / e.offsetHeight) || 1));
  var l = Qt(e) ? He(e) : window,
    s = l.visualViewport,
    c = !Vu() && r,
    d = (n.left + (c && s ? s.offsetLeft : 0)) / a,
    p = (n.top + (c && s ? s.offsetTop : 0)) / i,
    h = n.width / a,
    y = n.height / i;
  return {
    width: h,
    height: y,
    top: p,
    right: d + h,
    bottom: p + y,
    left: d,
    x: d,
    y: p,
  };
}
function Ti(e) {
  var t = _r(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Hu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Ri(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Tt(e) {
  return He(e).getComputedStyle(e);
}
function K5(e) {
  return ["table", "td", "th"].indexOf(Et(e)) >= 0;
}
function Ht(e) {
  return ((Qt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ya(e) {
  return Et(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Ri(e) ? e.host : null) || Ht(e);
}
function is(e) {
  return !Ke(e) || Tt(e).position === "fixed" ? null : e.offsetParent;
}
function Y5(e) {
  var t = /firefox/i.test(ko()),
    r = /Trident/i.test(ko());
  if (r && Ke(e)) {
    var n = Tt(e);
    if (n.position === "fixed") return null;
  }
  var a = ya(e);
  for (Ri(a) && (a = a.host); Ke(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
    var i = Tt(a);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function hn(e) {
  for (var t = He(e), r = is(e); r && K5(r) && Tt(r).position === "static"; )
    r = is(r);
  return r &&
    (Et(r) === "html" || (Et(r) === "body" && Tt(r).position === "static"))
    ? t
    : r || Y5(e) || t;
}
function Oi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wr(e, t, r) {
  return Kt(e, ea(t, r));
}
function X5(e, t, r) {
  var n = Wr(e, t, r);
  return n > r ? r : n;
}
function ju() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Zu(e) {
  return Object.assign({}, ju(), e);
}
function zu(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var J5 = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Zu(typeof e != "number" ? e : zu(e, gn))
  );
};
function Q5(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    l = r.modifiersData.popperOffsets,
    s = vt(r.placement),
    c = Oi(s),
    d = [Ie, Je].indexOf(s) >= 0,
    p = d ? "height" : "width";
  if (!(!i || !l)) {
    var h = J5(a.padding, r),
      y = Ti(i),
      f = c === "y" ? $e : Ie,
      g = c === "y" ? Xe : Je,
      m =
        r.rects.reference[p] + r.rects.reference[c] - l[c] - r.rects.popper[p],
      x = l[c] - r.rects.reference[c],
      v = hn(i),
      E = v ? (c === "y" ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
      b = m / 2 - x / 2,
      w = h[f],
      _ = E - y[p] - h[g],
      A = E / 2 - y[p] / 2 + b,
      S = Wr(w, A, _),
      C = c;
    r.modifiersData[n] = ((t = {}), (t[C] = S), (t.centerOffset = S - A), t);
  }
}
function eg(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null &&
    ((typeof a == "string" && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Hu(t.elements.popper, a) && (t.elements.arrow = a)));
}
var tg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Q5,
  effect: eg,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ar(e) {
  return e.split("-")[1];
}
var rg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ng(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: wr(r * a) / a || 0, y: wr(n * a) / a || 0 };
}
function ls(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    l = e.offsets,
    s = e.position,
    c = e.gpuAcceleration,
    d = e.adaptive,
    p = e.roundOffsets,
    h = e.isFixed,
    y = l.x,
    f = y === void 0 ? 0 : y,
    g = l.y,
    m = g === void 0 ? 0 : g,
    x = typeof p == "function" ? p({ x: f, y: m }) : { x: f, y: m };
  (f = x.x), (m = x.y);
  var v = l.hasOwnProperty("x"),
    E = l.hasOwnProperty("y"),
    b = Ie,
    w = $e,
    _ = window;
  if (d) {
    var A = hn(r),
      S = "clientHeight",
      C = "clientWidth";
    if (
      (A === He(r) &&
        ((A = Ht(r)),
        Tt(A).position !== "static" &&
          s === "absolute" &&
          ((S = "scrollHeight"), (C = "scrollWidth"))),
      (A = A),
      a === $e || ((a === Ie || a === Je) && i === en))
    ) {
      w = Xe;
      var k = h && A === _ && _.visualViewport ? _.visualViewport.height : A[S];
      (m -= k - n.height), (m *= c ? 1 : -1);
    }
    if (a === Ie || ((a === $e || a === Xe) && i === en)) {
      b = Je;
      var D = h && A === _ && _.visualViewport ? _.visualViewport.width : A[C];
      (f -= D - n.width), (f *= c ? 1 : -1);
    }
  }
  var L = Object.assign({ position: s }, d && rg),
    I = p === !0 ? ng({ x: f, y: m }, He(r)) : { x: f, y: m };
  if (((f = I.x), (m = I.y), c)) {
    var $;
    return Object.assign(
      {},
      L,
      (($ = {}),
      ($[w] = E ? "0" : ""),
      ($[b] = v ? "0" : ""),
      ($.transform =
        (_.devicePixelRatio || 1) <= 1
          ? "translate(" + f + "px, " + m + "px)"
          : "translate3d(" + f + "px, " + m + "px, 0)"),
      $)
    );
  }
  return Object.assign(
    {},
    L,
    ((t = {}),
    (t[w] = E ? m + "px" : ""),
    (t[b] = v ? f + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function ag(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    l = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    c = s === void 0 ? !0 : s,
    d = {
      placement: vt(t.placement),
      variation: Ar(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ls(
        Object.assign({}, d, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: c,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ls(
          Object.assign({}, d, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
var og = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: ag,
    data: {},
  },
  Tn = { passive: !0 };
function ig(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    l = n.resize,
    s = l === void 0 ? !0 : l,
    c = He(t.elements.popper),
    d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      d.forEach(function (p) {
        p.addEventListener("scroll", r.update, Tn);
      }),
    s && c.addEventListener("resize", r.update, Tn),
    function () {
      i &&
        d.forEach(function (p) {
          p.removeEventListener("scroll", r.update, Tn);
        }),
        s && c.removeEventListener("resize", r.update, Tn);
    }
  );
}
var lg = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: ig,
    data: {},
  },
  sg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vn(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return sg[t];
  });
}
var cg = { start: "end", end: "start" };
function ss(e) {
  return e.replace(/start|end/g, function (t) {
    return cg[t];
  });
}
function ki(e) {
  var t = He(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Di(e) {
  return _r(Ht(e)).left + ki(e).scrollLeft;
}
function ug(e, t) {
  var r = He(e),
    n = Ht(e),
    a = r.visualViewport,
    i = n.clientWidth,
    l = n.clientHeight,
    s = 0,
    c = 0;
  if (a) {
    (i = a.width), (l = a.height);
    var d = Vu();
    (d || (!d && t === "fixed")) && ((s = a.offsetLeft), (c = a.offsetTop));
  }
  return { width: i, height: l, x: s + Di(e), y: c };
}
function dg(e) {
  var t,
    r = Ht(e),
    n = ki(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Kt(
      r.scrollWidth,
      r.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0
    ),
    l = Kt(
      r.scrollHeight,
      r.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0
    ),
    s = -n.scrollLeft + Di(e),
    c = -n.scrollTop;
  return (
    Tt(a || r).direction === "rtl" &&
      (s += Kt(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: l, x: s, y: c }
  );
}
function Li(e) {
  var t = Tt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function qu(e) {
  return ["html", "body", "#document"].indexOf(Et(e)) >= 0
    ? e.ownerDocument.body
    : Ke(e) && Li(e)
    ? e
    : qu(ya(e));
}
function Gr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = qu(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = He(n),
    l = a ? [i].concat(i.visualViewport || [], Li(n) ? n : []) : n,
    s = t.concat(l);
  return a ? s : s.concat(Gr(ya(l)));
}
function Do(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function pg(e, t) {
  var r = _r(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function cs(e, t, r) {
  return t === Bu ? Do(ug(e, r)) : Qt(t) ? pg(t, r) : Do(dg(Ht(e)));
}
function fg(e) {
  var t = Gr(ya(e)),
    r = ["absolute", "fixed"].indexOf(Tt(e).position) >= 0,
    n = r && Ke(e) ? hn(e) : e;
  return Qt(n)
    ? t.filter(function (a) {
        return Qt(a) && Hu(a, n) && Et(a) !== "body";
      })
    : [];
}
function mg(e, t, r, n) {
  var a = t === "clippingParents" ? fg(e) : [].concat(t),
    i = [].concat(a, [r]),
    l = i[0],
    s = i.reduce(function (c, d) {
      var p = cs(e, d, n);
      return (
        (c.top = Kt(p.top, c.top)),
        (c.right = ea(p.right, c.right)),
        (c.bottom = ea(p.bottom, c.bottom)),
        (c.left = Kt(p.left, c.left)),
        c
      );
    }, cs(e, l, n));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Uu(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? vt(n) : null,
    i = n ? Ar(n) : null,
    l = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    c;
  switch (a) {
    case $e:
      c = { x: l, y: t.y - r.height };
      break;
    case Xe:
      c = { x: l, y: t.y + t.height };
      break;
    case Je:
      c = { x: t.x + t.width, y: s };
      break;
    case Ie:
      c = { x: t.x - r.width, y: s };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var d = a ? Oi(a) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (i) {
      case xr:
        c[d] = c[d] - (t[p] / 2 - r[p] / 2);
        break;
      case en:
        c[d] = c[d] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return c;
}
function tn(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    l = i === void 0 ? e.strategy : i,
    s = r.boundary,
    c = s === void 0 ? I5 : s,
    d = r.rootBoundary,
    p = d === void 0 ? Bu : d,
    h = r.elementContext,
    y = h === void 0 ? Zr : h,
    f = r.altBoundary,
    g = f === void 0 ? !1 : f,
    m = r.padding,
    x = m === void 0 ? 0 : m,
    v = Zu(typeof x != "number" ? x : zu(x, gn)),
    E = y === Zr ? F5 : Zr,
    b = e.rects.popper,
    w = e.elements[g ? E : y],
    _ = mg(Qt(w) ? w : w.contextElement || Ht(e.elements.popper), c, p, l),
    A = _r(e.elements.reference),
    S = Uu({ reference: A, element: b, strategy: "absolute", placement: a }),
    C = Do(Object.assign({}, b, S)),
    k = y === Zr ? C : A,
    D = {
      top: _.top - k.top + v.top,
      bottom: k.bottom - _.bottom + v.bottom,
      left: _.left - k.left + v.left,
      right: k.right - _.right + v.right,
    },
    L = e.modifiersData.offset;
  if (y === Zr && L) {
    var I = L[a];
    Object.keys(D).forEach(function ($) {
      var M = [Je, Xe].indexOf($) >= 0 ? 1 : -1,
        F = [$e, Xe].indexOf($) >= 0 ? "y" : "x";
      D[$] += I[F] * M;
    });
  }
  return D;
}
function gg(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    l = r.padding,
    s = r.flipVariations,
    c = r.allowedAutoPlacements,
    d = c === void 0 ? Nu : c,
    p = Ar(n),
    h = p
      ? s
        ? os
        : os.filter(function (g) {
            return Ar(g) === p;
          })
      : gn,
    y = h.filter(function (g) {
      return d.indexOf(g) >= 0;
    });
  y.length === 0 && (y = h);
  var f = y.reduce(function (g, m) {
    return (
      (g[m] = tn(e, { placement: m, boundary: a, rootBoundary: i, padding: l })[
        vt(m)
      ]),
      g
    );
  }, {});
  return Object.keys(f).sort(function (g, m) {
    return f[g] - f[m];
  });
}
function hg(e) {
  if (vt(e) === ha) return [];
  var t = Vn(e);
  return [ss(e), t, ss(t)];
}
function yg(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        l = r.altAxis,
        s = l === void 0 ? !0 : l,
        c = r.fallbackPlacements,
        d = r.padding,
        p = r.boundary,
        h = r.rootBoundary,
        y = r.altBoundary,
        f = r.flipVariations,
        g = f === void 0 ? !0 : f,
        m = r.allowedAutoPlacements,
        x = t.options.placement,
        v = vt(x),
        E = v === x,
        b = c || (E || !g ? [Vn(x)] : hg(x)),
        w = [x].concat(b).reduce(function (Y, H) {
          return Y.concat(
            vt(H) === ha
              ? gg(t, {
                  placement: H,
                  boundary: p,
                  rootBoundary: h,
                  padding: d,
                  flipVariations: g,
                  allowedAutoPlacements: m,
                })
              : H
          );
        }, []),
        _ = t.rects.reference,
        A = t.rects.popper,
        S = new Map(),
        C = !0,
        k = w[0],
        D = 0;
      D < w.length;
      D++
    ) {
      var L = w[D],
        I = vt(L),
        $ = Ar(L) === xr,
        M = [$e, Xe].indexOf(I) >= 0,
        F = M ? "width" : "height",
        P = tn(t, {
          placement: L,
          boundary: p,
          rootBoundary: h,
          altBoundary: y,
          padding: d,
        }),
        j = M ? ($ ? Je : Ie) : $ ? Xe : $e;
      _[F] > A[F] && (j = Vn(j));
      var z = Vn(j),
        V = [];
      if (
        (i && V.push(P[I] <= 0),
        s && V.push(P[j] <= 0, P[z] <= 0),
        V.every(function (Y) {
          return Y;
        }))
      ) {
        (k = L), (C = !1);
        break;
      }
      S.set(L, V);
    }
    if (C)
      for (
        var Z = g ? 3 : 1,
          ee = function (Y) {
            var H = w.find(function (W) {
              var B = S.get(W);
              if (B)
                return B.slice(0, Y).every(function (U) {
                  return U;
                });
            });
            if (H) return (k = H), "break";
          },
          oe = Z;
        oe > 0;
        oe--
      ) {
        var X = ee(oe);
        if (X === "break") break;
      }
    t.placement !== k &&
      ((t.modifiersData[n]._skip = !0), (t.placement = k), (t.reset = !0));
  }
}
var vg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yg,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function us(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function ds(e) {
  return [$e, Je, Xe, Ie].some(function (t) {
    return e[t] >= 0;
  });
}
function bg(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    l = tn(t, { elementContext: "reference" }),
    s = tn(t, { altBoundary: !0 }),
    c = us(l, n),
    d = us(s, a, i),
    p = ds(c),
    h = ds(d);
  (t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: h,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": h,
    }));
}
var Eg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bg,
};
function xg(e, t, r) {
  var n = vt(e),
    a = [Ie, $e].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    l = i[0],
    s = i[1];
  return (
    (l = l || 0),
    (s = (s || 0) * a),
    [Ie, Je].indexOf(n) >= 0 ? { x: s, y: l } : { x: l, y: s }
  );
}
function wg(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    l = Nu.reduce(function (p, h) {
      return (p[h] = xg(h, t.rects, i)), p;
    }, {}),
    s = l[t.placement],
    c = s.x,
    d = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c),
    (t.modifiersData.popperOffsets.y += d)),
    (t.modifiersData[n] = l);
}
var _g = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: wg,
};
function Ag(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Uu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var Cg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ag,
  data: {},
};
function Sg(e) {
  return e === "x" ? "y" : "x";
}
function Rg(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    l = r.altAxis,
    s = l === void 0 ? !1 : l,
    c = r.boundary,
    d = r.rootBoundary,
    p = r.altBoundary,
    h = r.padding,
    y = r.tether,
    f = y === void 0 ? !0 : y,
    g = r.tetherOffset,
    m = g === void 0 ? 0 : g,
    x = tn(t, { boundary: c, rootBoundary: d, padding: h, altBoundary: p }),
    v = vt(t.placement),
    E = Ar(t.placement),
    b = !E,
    w = Oi(v),
    _ = Sg(w),
    A = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    C = t.rects.popper,
    k =
      typeof m == "function"
        ? m(Object.assign({}, t.rects, { placement: t.placement }))
        : m,
    D =
      typeof k == "number"
        ? { mainAxis: k, altAxis: k }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
    L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    I = { x: 0, y: 0 };
  if (A) {
    if (i) {
      var $,
        M = w === "y" ? $e : Ie,
        F = w === "y" ? Xe : Je,
        P = w === "y" ? "height" : "width",
        j = A[w],
        z = j + x[M],
        V = j - x[F],
        Z = f ? -C[P] / 2 : 0,
        ee = E === xr ? S[P] : C[P],
        oe = E === xr ? -C[P] : -S[P],
        X = t.elements.arrow,
        Y = f && X ? Ti(X) : { width: 0, height: 0 },
        H = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ju(),
        W = H[M],
        B = H[F],
        U = Wr(0, S[P], Y[P]),
        te = b ? S[P] / 2 - Z - U - W - D.mainAxis : ee - U - W - D.mainAxis,
        J = b ? -S[P] / 2 + Z + U + B + D.mainAxis : oe + U + B + D.mainAxis,
        G = t.elements.arrow && hn(t.elements.arrow),
        K = G ? (w === "y" ? G.clientTop || 0 : G.clientLeft || 0) : 0,
        N = ($ = L == null ? void 0 : L[w]) != null ? $ : 0,
        le = j + te - N - K,
        we = j + J - N,
        Me = Wr(f ? ea(z, le) : z, j, f ? Kt(V, we) : V);
      (A[w] = Me), (I[w] = Me - j);
    }
    if (s) {
      var qe,
        Ue = w === "x" ? $e : Ie,
        ar = w === "x" ? Xe : Je,
        pe = A[_],
        jt = _ === "y" ? "height" : "width",
        at = pe + x[Ue],
        or = pe - x[ar],
        ot = [$e, Ie].indexOf(v) !== -1,
        ir = (qe = L == null ? void 0 : L[_]) != null ? qe : 0,
        it = ot ? at : pe - S[jt] - C[jt] - ir + D.altAxis,
        _e = ot ? pe + S[jt] + C[jt] - ir - D.altAxis : or,
        et = f && ot ? X5(it, pe, _e) : Wr(f ? it : at, pe, f ? _e : or);
      (A[_] = et), (I[_] = et - pe);
    }
    t.modifiersData[n] = I;
  }
}
var Tg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Rg,
  requiresIfExists: ["offset"],
};
function Og(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function kg(e) {
  return e === He(e) || !Ke(e) ? ki(e) : Og(e);
}
function Dg(e) {
  var t = e.getBoundingClientRect(),
    r = wr(t.width) / e.offsetWidth || 1,
    n = wr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Lg(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ke(t),
    a = Ke(t) && Dg(t),
    i = Ht(t),
    l = _r(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Et(t) !== "body" || Li(i)) && (s = kg(t)),
      Ke(t)
        ? ((c = _r(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop))
        : i && (c.x = Di(i))),
    {
      x: l.left + s.scrollLeft - c.x,
      y: l.top + s.scrollTop - c.y,
      width: l.width,
      height: l.height,
    }
  );
}
function $g(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function (s) {
      if (!r.has(s)) {
        var c = t.get(s);
        c && a(c);
      }
    }),
      n.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || a(i);
    }),
    n
  );
}
function Ig(e) {
  var t = $g(e);
  return q5.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      })
    );
  }, []);
}
function Fg(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function Pg(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var ps = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Mg(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? ps : a;
  return function (l, s, c) {
    c === void 0 && (c = i);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ps, i),
        modifiersData: {},
        elements: { reference: l, popper: s },
        attributes: {},
        styles: {},
      },
      p = [],
      h = !1,
      y = {
        state: d,
        setOptions: function (m) {
          var x = typeof m == "function" ? m(d.options) : m;
          g(),
            (d.options = Object.assign({}, i, d.options, x)),
            (d.scrollParents = {
              reference: Qt(l)
                ? Gr(l)
                : l.contextElement
                ? Gr(l.contextElement)
                : [],
              popper: Gr(s),
            });
          var v = Ig(Pg([].concat(n, d.options.modifiers)));
          return (
            (d.orderedModifiers = v.filter(function (E) {
              return E.enabled;
            })),
            f(),
            y.update()
          );
        },
        forceUpdate: function () {
          if (!h) {
            var m = d.elements,
              x = m.reference,
              v = m.popper;
            if (fs(x, v)) {
              (d.rects = {
                reference: Lg(x, hn(v), d.options.strategy === "fixed"),
                popper: Ti(v),
              }),
                (d.reset = !1),
                (d.placement = d.options.placement),
                d.orderedModifiers.forEach(function (C) {
                  return (d.modifiersData[C.name] = Object.assign({}, C.data));
                });
              for (var E = 0; E < d.orderedModifiers.length; E++) {
                if (d.reset === !0) {
                  (d.reset = !1), (E = -1);
                  continue;
                }
                var b = d.orderedModifiers[E],
                  w = b.fn,
                  _ = b.options,
                  A = _ === void 0 ? {} : _,
                  S = b.name;
                typeof w == "function" &&
                  (d = w({ state: d, options: A, name: S, instance: y }) || d);
              }
            }
          }
        },
        update: Fg(function () {
          return new Promise(function (m) {
            y.forceUpdate(), m(d);
          });
        }),
        destroy: function () {
          g(), (h = !0);
        },
      };
    if (!fs(l, s)) return y;
    y.setOptions(c).then(function (m) {
      !h && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function f() {
      d.orderedModifiers.forEach(function (m) {
        var x = m.name,
          v = m.options,
          E = v === void 0 ? {} : v,
          b = m.effect;
        if (typeof b == "function") {
          var w = b({ state: d, name: x, instance: y, options: E }),
            _ = function () {};
          p.push(w || _);
        }
      });
    }
    function g() {
      p.forEach(function (m) {
        return m();
      }),
        (p = []);
    }
    return y;
  };
}
var Bg = [lg, Cg, og, G5, _g, vg, Tg, tg, Eg],
  Ng = Mg({ defaultModifiers: Bg }),
  Vg = je($5()),
  Hg = [],
  jg = function (e, t, r) {
    r === void 0 && (r = {});
    var n = u.useRef(null),
      a = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || Hg,
      },
      i = u.useState({
        styles: {
          popper: { position: a.strategy, left: "0", top: "0" },
          arrow: { position: "absolute" },
        },
        attributes: {},
      }),
      l = i[0],
      s = i[1],
      c = u.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (h) {
            var y = h.state,
              f = Object.keys(y.elements);
            un.flushSync(function () {
              s({
                styles: ns(
                  f.map(function (g) {
                    return [g, y.styles[g] || {}];
                  })
                ),
                attributes: ns(
                  f.map(function (g) {
                    return [g, y.attributes[g]];
                  })
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      d = u.useMemo(
        function () {
          var h = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [
              c,
              { name: "applyStyles", enabled: !1 },
            ]),
          };
          return (0, Vg.default)(n.current, h)
            ? n.current || h
            : ((n.current = h), h);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]
      ),
      p = u.useRef();
    return (
      as(
        function () {
          p.current && p.current.setOptions(d);
        },
        [d]
      ),
      as(
        function () {
          if (!(e == null || t == null)) {
            var h = r.createPopper || Ng,
              y = h(e, t, d);
            return (
              (p.current = y),
              function () {
                y.destroy(), (p.current = null);
              }
            );
          }
        },
        [e, t, r.createPopper]
      ),
      {
        state: p.current ? p.current.state : null,
        styles: l.styles,
        attributes: l.attributes,
        update: p.current ? p.current.update : null,
        forceUpdate: p.current ? p.current.forceUpdate : null,
      }
    );
  };
function Wu(e) {
  var t = u.useRef(e);
  return (
    (t.current = e),
    u.useCallback(function () {
      return t.current;
    }, [])
  );
}
var Zg = function () {};
function zg(e) {
  var t = e.initial,
    r = e.value,
    n = e.onChange,
    a = n === void 0 ? Zg : n;
  if (t === void 0 && r === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    );
  var i = u.useState(t),
    l = i[0],
    s = i[1],
    c = Wu(l),
    d = u.useCallback(
      function (h) {
        var y = c(),
          f = typeof h == "function" ? h(y) : h;
        typeof f.persist == "function" && f.persist(),
          s(f),
          typeof a == "function" && a(f);
      },
      [c, a]
    ),
    p = r !== void 0;
  return [p ? r : l, p ? a : d];
}
function Gu(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        },
      };
    }
  );
}
var qg = ["styles", "attributes"],
  ms = { getBoundingClientRect: Gu() },
  gs = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: "hover",
  };
function Ug(e, t) {
  var r, n, a;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var i = Object.keys(gs).reduce(function (F, P) {
      var j;
      return De({}, F, ((j = {}), (j[P] = F[P] !== void 0 ? F[P] : gs[P]), j));
    }, e),
    l = u.useMemo(
      function () {
        return [{ name: "offset", options: { offset: i.offset } }];
      },
      Array.isArray(i.offset) ? i.offset : []
    ),
    s = De({}, t, {
      placement: t.placement || i.placement,
      modifiers: t.modifiers || l,
    }),
    c = u.useState(null),
    d = c[0],
    p = c[1],
    h = u.useState(null),
    y = h[0],
    f = h[1],
    g = zg({
      initial: i.defaultVisible,
      value: i.visible,
      onChange: i.onVisibleChange,
    }),
    m = g[0],
    x = g[1],
    v = u.useRef();
  u.useEffect(function () {
    return function () {
      return clearTimeout(v.current);
    };
  }, []);
  var E = jg(i.followCursor ? ms : d, y, s),
    b = E.styles,
    w = E.attributes,
    _ = bi(E, qg),
    A = _.update,
    S = Wu({ visible: m, triggerRef: d, tooltipRef: y, finalConfig: i }),
    C = u.useCallback(
      function (F) {
        return Array.isArray(i.trigger)
          ? i.trigger.includes(F)
          : i.trigger === F;
      },
      Array.isArray(i.trigger) ? i.trigger : [i.trigger]
    ),
    k = u.useCallback(
      function () {
        clearTimeout(v.current),
          (v.current = window.setTimeout(function () {
            return x(!1);
          }, i.delayHide));
      },
      [i.delayHide, x]
    ),
    D = u.useCallback(
      function () {
        clearTimeout(v.current),
          (v.current = window.setTimeout(function () {
            return x(!0);
          }, i.delayShow));
      },
      [i.delayShow, x]
    ),
    L = u.useCallback(
      function () {
        S().visible ? k() : D();
      },
      [S, k, D]
    );
  u.useEffect(
    function () {
      if (S().finalConfig.closeOnOutsideClick) {
        var F = function (P) {
          var j,
            z = S(),
            V = z.tooltipRef,
            Z = z.triggerRef,
            ee =
              (P.composedPath == null || (j = P.composedPath()) == null
                ? void 0
                : j[0]) || P.target;
          ee instanceof Node &&
            V != null &&
            Z != null &&
            !V.contains(ee) &&
            !Z.contains(ee) &&
            k();
        };
        return (
          document.addEventListener("mousedown", F),
          function () {
            return document.removeEventListener("mousedown", F);
          }
        );
      }
    },
    [S, k]
  ),
    u.useEffect(
      function () {
        if (!(d == null || !C("click")))
          return (
            d.addEventListener("click", L),
            function () {
              return d.removeEventListener("click", L);
            }
          );
      },
      [d, C, L]
    ),
    u.useEffect(
      function () {
        if (!(d == null || !C("double-click")))
          return (
            d.addEventListener("dblclick", L),
            function () {
              return d.removeEventListener("dblclick", L);
            }
          );
      },
      [d, C, L]
    ),
    u.useEffect(
      function () {
        if (!(d == null || !C("right-click"))) {
          var F = function (P) {
            P.preventDefault(), L();
          };
          return (
            d.addEventListener("contextmenu", F),
            function () {
              return d.removeEventListener("contextmenu", F);
            }
          );
        }
      },
      [d, C, L]
    ),
    u.useEffect(
      function () {
        if (!(d == null || !C("focus")))
          return (
            d.addEventListener("focus", D),
            d.addEventListener("blur", k),
            function () {
              d.removeEventListener("focus", D),
                d.removeEventListener("blur", k);
            }
          );
      },
      [d, C, D, k]
    ),
    u.useEffect(
      function () {
        if (!(d == null || !C("hover")))
          return (
            d.addEventListener("mouseenter", D),
            d.addEventListener("mouseleave", k),
            function () {
              d.removeEventListener("mouseenter", D),
                d.removeEventListener("mouseleave", k);
            }
          );
      },
      [d, C, D, k]
    ),
    u.useEffect(
      function () {
        if (!(y == null || !C("hover") || !S().finalConfig.interactive))
          return (
            y.addEventListener("mouseenter", D),
            y.addEventListener("mouseleave", k),
            function () {
              y.removeEventListener("mouseenter", D),
                y.removeEventListener("mouseleave", k);
            }
          );
      },
      [y, C, D, k, S]
    );
  var I =
    _ == null ||
    (r = _.state) == null ||
    (n = r.modifiersData) == null ||
    (a = n.hide) == null
      ? void 0
      : a.isReferenceHidden;
  u.useEffect(
    function () {
      i.closeOnTriggerHidden && I && k();
    },
    [i.closeOnTriggerHidden, k, I]
  ),
    u.useEffect(
      function () {
        if (!i.followCursor || d == null) return;
        function F(P) {
          var j = P.clientX,
            z = P.clientY;
          (ms.getBoundingClientRect = Gu(j, z)), A == null || A();
        }
        return (
          d.addEventListener("mousemove", F),
          function () {
            return d.removeEventListener("mousemove", F);
          }
        );
      },
      [i.followCursor, d, A]
    ),
    u.useEffect(
      function () {
        if (!(y == null || A == null || i.mutationObserverOptions == null)) {
          var F = new MutationObserver(A);
          return (
            F.observe(y, i.mutationObserverOptions),
            function () {
              return F.disconnect();
            }
          );
        }
      },
      [i.mutationObserverOptions, y, A]
    );
  var $ = function (F) {
      return (
        F === void 0 && (F = {}),
        De({}, F, { style: De({}, F.style, b.popper) }, w.popper, {
          "data-popper-interactive": i.interactive,
        })
      );
    },
    M = function (F) {
      return (
        F === void 0 && (F = {}),
        De({}, F, w.arrow, {
          "style": De({}, F.style, b.arrow),
          "data-popper-arrow": !0,
        })
      );
    };
  return De(
    {
      getArrowProps: M,
      getTooltipProps: $,
      setTooltipRef: f,
      setTriggerRef: p,
      tooltipRef: y,
      triggerRef: d,
      visible: m,
    },
    _
  );
}
var We = tr(1e3)((e, t, r, n = 0) => (t.split("-")[0] === e ? r : n)),
  Dt = 8,
  Wg = O.div(
    { position: "absolute", borderStyle: "solid" },
    ({ placement: e }) => {
      let t = 0,
        r = 0;
      switch (!0) {
        case e.startsWith("left") || e.startsWith("right"): {
          r = 8;
          break;
        }
        case e.startsWith("top") || e.startsWith("bottom"): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${We("top", r, `${Dt * -1}px`, "auto")}`,
      top: `${We("bottom", r, `${Dt * -1}px`, "auto")}`,
      right: `${We("left", r, `${Dt * -1}px`, "auto")}`,
      left: `${We("right", r, `${Dt * -1}px`, "auto")}`,
      borderBottomWidth: `${We("top", r, "0", Dt)}px`,
      borderTopWidth: `${We("bottom", r, "0", Dt)}px`,
      borderRightWidth: `${We("left", r, "0", Dt)}px`,
      borderLeftWidth: `${We("right", r, "0", Dt)}px`,
      borderTopColor: We(
        "top",
        r,
        e.color[t] || t || e.base === "light"
          ? Ur(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderBottomColor: We(
        "bottom",
        r,
        e.color[t] || t || e.base === "light"
          ? Ur(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderLeftColor: We(
        "left",
        r,
        e.color[t] || t || e.base === "light"
          ? Ur(e.background.app)
          : e.background.app,
        "transparent"
      ),
      borderRightColor: We(
        "right",
        r,
        e.color[t] || t || e.base === "light"
          ? Ur(e.background.app)
          : e.background.app,
        "transparent"
      ),
    })
  ),
  Gg = O.div(
    ({ hidden: e }) => ({
      display: e ? "none" : "inline-block",
      zIndex: 2147483647,
    }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background:
              e.color[t] || t || e.base === "light"
                ? Ur(e.background.app)
                : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1,
          }
        : {}
  ),
  $i = o.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: r,
        arrowProps: n,
        tooltipRef: a,
        color: i,
        withArrows: l,
        ...s
      },
      c
    ) =>
      o.createElement(
        Gg,
        {
          "data-testid": "tooltip",
          "hasChrome": t,
          "ref": c,
          ...s,
          "color": i,
        },
        t && l && o.createElement(Wg, { placement: e, ...n, color: i }),
        r
      )
  );
$i.displayName = "Tooltip";
$i.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: "top",
  arrowProps: {},
};
var { document: Hn } = Oe,
  Kg = O.div`
  display: inline-block;
  cursor: ${(e) =>
    e.trigger === "hover" || e.trigger.includes("hover")
      ? "default"
      : "pointer"};
`,
  Yg = O.g`
  cursor: ${(e) =>
    e.trigger === "hover" || e.trigger.includes("hover")
      ? "default"
      : "pointer"};
`,
  Ku = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: n,
    hasChrome: a,
    withArrows: i,
    offset: l,
    tooltip: s,
    children: c,
    closeOnTriggerHidden: d,
    mutationObserverOptions: p,
    closeOnClick: h,
    tooltipShown: y,
    onVisibilityChange: f,
    defaultVisible: g,
    delayHide: m,
    visible: x,
    interactive: v,
    delayShow: E,
    modifiers: b,
    strategy: w,
    followCursor: _,
    onVisibleChange: A,
    ...S
  }) => {
    let C = e ? Yg : Kg,
      {
        getArrowProps: k,
        getTooltipProps: D,
        setTooltipRef: L,
        setTriggerRef: I,
        visible: $,
        state: M,
      } = Ug(
        {
          trigger: t,
          placement: n,
          defaultVisible: g ?? y,
          delayHide: m,
          interactive: v,
          closeOnOutsideClick: r ?? h,
          closeOnTriggerHidden: d,
          onVisibleChange: (P) => {
            f == null || f(P), A == null || A(P);
          },
          delayShow: E,
          followCursor: _,
          mutationObserverOptions: p,
          visible: x,
          offset: l,
        },
        { modifiers: b, strategy: w }
      ),
      F = o.createElement(
        $i,
        {
          placement: M == null ? void 0 : M.placement,
          ref: L,
          hasChrome: a,
          arrowProps: k(),
          withArrows: i,
          ...D(),
        },
        typeof s == "function" ? s({ onHide: () => A(!1) }) : s
      );
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(C, { trigger: t, ref: I, ...S }, c),
      $ && Sc.createPortal(F, Hn.body)
    );
  };
Ku.defaultProps = {
  svg: !1,
  trigger: "click",
  closeOnOutsideClick: !1,
  placement: "top",
  modifiers: [
    { name: "preventOverflow", options: { padding: 8 } },
    { name: "offset", options: { offset: [8, 8] } },
    { name: "arrow", options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
var Xg = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, a] = u.useState(e),
    i = u.useCallback(
      (l) => {
        (t && t(l) === !1) || a(l);
      },
      [t]
    );
  return (
    u.useEffect(() => {
      let l = () => i(!1);
      Hn.addEventListener("keydown", l, !1);
      let s = Array.from(Hn.getElementsByTagName("iframe")),
        c = [];
      return (
        s.forEach((d) => {
          let p = () => {
            try {
              d.contentWindow.document &&
                (d.contentWindow.document.addEventListener("click", l),
                c.push(() => {
                  try {
                    d.contentWindow.document.removeEventListener("click", l);
                  } catch {}
                }));
            } catch {}
          };
          p(),
            d.addEventListener("load", p),
            c.push(() => {
              d.removeEventListener("load", p);
            });
        }),
        () => {
          Hn.removeEventListener("keydown", l),
            c.forEach((d) => {
              d();
            });
        }
      );
    }),
    o.createElement(Ku, { ...r, visible: n, onVisibleChange: i })
  );
};
function Jg(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function rn(e, t) {
  return (
    (rn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    rn(e, t)
  );
}
function Qg(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    rn(e, t);
}
function Lo(e) {
  return (
    (Lo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Lo(e)
  );
}
function eh(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function th() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function jn(e, t, r) {
  return (
    th()
      ? (jn = Reflect.construct.bind())
      : (jn = function (n, a, i) {
          var l = [null];
          l.push.apply(l, a);
          var s = Function.bind.apply(n, l),
            c = new s();
          return i && rn(c, i.prototype), c;
        }),
    jn.apply(null, arguments)
  );
}
function $o(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    ($o = function (r) {
      if (r === null || !eh(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, n);
      }
      function n() {
        return jn(r, arguments, Lo(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        rn(n, r)
      );
    }),
    $o(e)
  );
}
var gt = (function (e) {
  Qg(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            r +
            " for more information."
        ) || this),
      Jg(n)
    );
  }
  return t;
})($o(Error));
function Ya(e) {
  return Math.round(e * 255);
}
function rh(e, t, r) {
  return Ya(e) + "," + Ya(t) + "," + Ya(r);
}
function nn(e, t, r, n) {
  if ((n === void 0 && (n = rh), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    i = (1 - Math.abs(2 * r - 1)) * t,
    l = i * (1 - Math.abs((a % 2) - 1)),
    s = 0,
    c = 0,
    d = 0;
  a >= 0 && a < 1
    ? ((s = i), (c = l))
    : a >= 1 && a < 2
    ? ((s = l), (c = i))
    : a >= 2 && a < 3
    ? ((c = i), (d = l))
    : a >= 3 && a < 4
    ? ((c = l), (d = i))
    : a >= 4 && a < 5
    ? ((s = l), (d = i))
    : a >= 5 && a < 6 && ((s = i), (d = l));
  var p = r - i / 2,
    h = s + p,
    y = c + p,
    f = d + p;
  return n(h, y, f);
}
var hs = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function nh(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return hs[t] ? "#" + hs[t] : e;
}
var ah = /^#[a-fA-F0-9]{6}$/,
  oh = /^#[a-fA-F0-9]{8}$/,
  ih = /^#[a-fA-F0-9]{3}$/,
  lh = /^#[a-fA-F0-9]{4}$/,
  Xa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  sh =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  ch =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  uh =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ii(e) {
  if (typeof e != "string") throw new gt(3);
  var t = nh(e);
  if (t.match(ah))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(oh)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(ih))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(lh)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = Xa.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10),
    };
  var i = sh.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha:
        parseFloat("" + i[4]) > 1
          ? parseFloat("" + i[4]) / 100
          : parseFloat("" + i[4]),
    };
  var l = ch.exec(t);
  if (l) {
    var s = parseInt("" + l[1], 10),
      c = parseInt("" + l[2], 10) / 100,
      d = parseInt("" + l[3], 10) / 100,
      p = "rgb(" + nn(s, c, d) + ")",
      h = Xa.exec(p);
    if (!h) throw new gt(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10),
    };
  }
  var y = uh.exec(t.substring(0, 50));
  if (y) {
    var f = parseInt("" + y[1], 10),
      g = parseInt("" + y[2], 10) / 100,
      m = parseInt("" + y[3], 10) / 100,
      x = "rgb(" + nn(f, g, m) + ")",
      v = Xa.exec(x);
    if (!v) throw new gt(4, t, x);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10),
      alpha:
        parseFloat("" + y[4]) > 1
          ? parseFloat("" + y[4]) / 100
          : parseFloat("" + y[4]),
    };
  }
  throw new gt(5);
}
function dh(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    i = Math.min(t, r, n),
    l = (a + i) / 2;
  if (a === i)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: l, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: l };
  var s,
    c = a - i,
    d = l > 0.5 ? c / (2 - a - i) : c / (a + i);
  switch (a) {
    case t:
      s = (r - n) / c + (r < n ? 6 : 0);
      break;
    case r:
      s = (n - t) / c + 2;
      break;
    default:
      s = (t - r) / c + 4;
      break;
  }
  return (
    (s *= 60),
    e.alpha !== void 0
      ? { hue: s, saturation: d, lightness: l, alpha: e.alpha }
      : { hue: s, saturation: d, lightness: l }
  );
}
function Yu(e) {
  return dh(Ii(e));
}
var ph = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? "#" + e[1] + e[3] + e[5]
      : e;
  },
  Io = ph;
function qt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Ja(e) {
  return qt(Math.round(e * 255));
}
function fh(e, t, r) {
  return Io("#" + Ja(e) + Ja(t) + Ja(r));
}
function ta(e, t, r) {
  return nn(e, t, r, fh);
}
function mh(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ta(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ta(e.hue, e.saturation, e.lightness);
  throw new gt(1);
}
function gh(e, t, r, n) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof n == "number"
  )
    return n >= 1 ? ta(e, t, r) : "rgba(" + nn(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? ta(e.hue, e.saturation, e.lightness)
      : "rgba(" + nn(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new gt(2);
}
function Fo(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Io("#" + qt(e) + qt(t) + qt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Io("#" + qt(e.red) + qt(e.green) + qt(e.blue));
  throw new gt(6);
}
function ut(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = Ii(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1
        ? Fo(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Fo(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new gt(7);
}
var hh = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  yh = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      typeof e.alpha == "number"
    );
  },
  vh = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  bh = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function Xu(e) {
  if (typeof e != "object") throw new gt(8);
  if (yh(e)) return ut(e);
  if (hh(e)) return Fo(e);
  if (bh(e)) return gh(e);
  if (vh(e)) return mh(e);
  throw new gt(8);
}
function Ju(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Ju(e, t, n);
  };
}
function Fi(e) {
  return Ju(e, e.length, []);
}
function Pi(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Eh(e, t) {
  if (t === "transparent") return t;
  var r = Yu(t);
  return Xu(De({}, r, { lightness: Pi(0, 1, r.lightness - parseFloat(e)) }));
}
var xh = Fi(Eh),
  Ge = xh;
function wh(e, t) {
  if (t === "transparent") return t;
  var r = Yu(t);
  return Xu(De({}, r, { lightness: Pi(0, 1, r.lightness + parseFloat(e)) }));
}
var _h = Fi(wh),
  Po = _h;
function Ah(e, t) {
  if (t === "transparent") return t;
  var r = Ii(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = De({}, r, {
      alpha: Pi(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return ut(a);
}
var Ch = Fi(Ah),
  Te = Ch;
function Sh(e, t) {
  var r = u.useRef(null),
    n = u.useRef(null);
  n.current = t;
  var a = u.useRef(null);
  u.useEffect(function () {
    i();
  });
  var i = u.useCallback(
    function () {
      var l = a.current,
        s = n.current,
        c = l || (s ? (s instanceof Element ? s : s.current) : null);
      (r.current && r.current.element === c && r.current.subscriber === e) ||
        (r.current && r.current.cleanup && r.current.cleanup(),
        (r.current = {
          element: c,
          subscriber: e,
          cleanup: c ? e(c) : void 0,
        }));
    },
    [e]
  );
  return (
    u.useEffect(function () {
      return function () {
        r.current &&
          r.current.cleanup &&
          (r.current.cleanup(), (r.current = null));
      };
    }, []),
    u.useCallback(
      function (l) {
        (a.current = l), i();
      },
      [i]
    )
  );
}
function ys(e, t, r) {
  return e[t]
    ? e[t][0]
      ? e[t][0][r]
      : e[t][r]
    : t === "contentBoxSize"
    ? e.contentRect[r === "inlineSize" ? "width" : "height"]
    : void 0;
}
function Qu(e) {
  e === void 0 && (e = {});
  var t = e.onResize,
    r = u.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round,
    a = u.useRef(),
    i = u.useState({ width: void 0, height: void 0 }),
    l = i[0],
    s = i[1],
    c = u.useRef(!1);
  u.useEffect(function () {
    return (
      (c.current = !1),
      function () {
        c.current = !0;
      }
    );
  }, []);
  var d = u.useRef({ width: void 0, height: void 0 }),
    p = Sh(
      u.useCallback(
        function (h) {
          return (
            (!a.current || a.current.box !== e.box || a.current.round !== n) &&
              (a.current = {
                box: e.box,
                round: n,
                instance: new ResizeObserver(function (y) {
                  var f = y[0],
                    g =
                      e.box === "border-box"
                        ? "borderBoxSize"
                        : e.box === "device-pixel-content-box"
                        ? "devicePixelContentBoxSize"
                        : "contentBoxSize",
                    m = ys(f, g, "inlineSize"),
                    x = ys(f, g, "blockSize"),
                    v = m ? n(m) : void 0,
                    E = x ? n(x) : void 0;
                  if (d.current.width !== v || d.current.height !== E) {
                    var b = { width: v, height: E };
                    (d.current.width = v),
                      (d.current.height = E),
                      r.current ? r.current(b) : c.current || s(b);
                  }
                }),
              }),
            a.current.instance.observe(h, { box: e.box }),
            function () {
              a.current && a.current.instance.unobserve(h);
            }
          );
        },
        [e.box, n]
      ),
      e.ref
    );
  return u.useMemo(
    function () {
      return { ref: p, width: l.width, height: l.height };
    },
    [p, l.width, l.height]
  );
}
var ce = ({ ...e }, t) => {
    let r = [e.class, e.className];
    return (
      delete e.class,
      (e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" ")),
      e
    );
  },
  Lr = ({ theme: e }) => ({
    "margin": "20px 0 8px",
    "padding": 0,
    "cursor": "text",
    "position": "relative",
    "color": e.color.defaultText,
    "&:first-of-type": { marginTop: 0, paddingTop: 0 },
    "&:hover a.anchor": { textDecoration: "none" },
    "& tt, & code": { fontSize: "inherit" },
  }),
  kt = ({ theme: e }) => ({
    lineHeight: 1,
    margin: "0 2px",
    padding: "3px 5px",
    whiteSpace: "nowrap",
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border:
      e.base === "light"
        ? `1px solid ${e.color.mediumlight}`
        : `1px solid ${e.color.darker}`,
    color:
      e.base === "light"
        ? Te(0.1, e.color.defaultText)
        : Te(0.3, e.color.defaultText),
    backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
  }),
  de = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  }),
  rr = { margin: "16px 0" },
  Rh = ({ href: e, children: t, ...r }) => {
    let n = /^\//.test(e),
      a = /^#.*/.test(e),
      i = n ? `./?path=${e}` : e;
    return o.createElement(
      "a",
      { href: i, target: a ? "_self" : "_top", ...r },
      t
    );
  },
  e0 = O(Rh)(de, ({ theme: e }) => ({
    "fontSize": "inherit",
    "lineHeight": "24px",
    "color": e.color.secondary,
    "textDecoration": "none",
    "&.absent": { color: "#cc0000" },
    "&.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
  })),
  t0 = O.blockquote(de, rr, ({ theme: e }) => ({
    "borderLeft": `4px solid ${e.color.medium}`,
    "padding": "0 15px",
    "color": e.color.dark,
    "& > :first-of-type": { marginTop: 0 },
    "& > :last-child": { marginBottom: 0 },
  })),
  Th = (e) => typeof e == "string",
  Oh = /[\n\r]/g,
  kh = O.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit",
    }),
    kt
  ),
  Dh = O(Si)(({ theme: e }) => ({
    "fontFamily": e.typography.fonts.mono,
    "fontSize": `${e.typography.size.s2 - 1}px`,
    "lineHeight": "19px",
    "margin": "25px 0 40px",
    "borderRadius": e.appBorderRadius,
    "boxShadow":
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  Mi = ({ className: e, children: t, ...r }) => {
    let n = (e || "").match(/lang-(\S+)/),
      a = u.Children.toArray(t);
    return a.filter(Th).some((i) => i.match(Oh))
      ? o.createElement(
          Dh,
          {
            bordered: !0,
            copyable: !0,
            language: (n == null ? void 0 : n[1]) ?? "plaintext",
            format: !1,
            ...r,
          },
          t
        )
      : o.createElement(kh, { ...r, className: e }, a);
  },
  r0 = O.div(de),
  n0 = O.dl(de, {
    ...rr,
    "padding": 0,
    "& dt": {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      padding: 0,
      margin: "16px 0 4px",
    },
    "& dt:first-of-type": { padding: 0 },
    "& dt > :first-of-type": { marginTop: 0 },
    "& dt > :last-child": { marginBottom: 0 },
    "& dd": { margin: "0 0 16px", padding: "0 15px" },
    "& dd > :first-of-type": { marginTop: 0 },
    "& dd > :last-child": { marginBottom: 0 },
  }),
  a0 = O.h1(de, Lr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  Bi = O.h2(de, Lr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  Ni = O.h3(de, Lr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m1}px`,
  })),
  o0 = O.h4(de, Lr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s3}px`,
  })),
  i0 = O.h5(de, Lr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
  })),
  l0 = O.h6(de, Lr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark,
  })),
  s0 = O.hr(({ theme: e }) => ({
    border: "0 none",
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  c0 = O.img({ maxWidth: "100%" }),
  u0 = O.li(de, ({ theme: e }) => ({
    "fontSize": e.typography.size.s2,
    "color": e.color.defaultText,
    "lineHeight": "24px",
    "& + li": { marginTop: ".25em" },
    "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
    "& code": kt({ theme: e }),
  })),
  Lh = {
    "paddingLeft": 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  d0 = O.ol(de, rr, { ...Lh, listStyle: "decimal" }),
  p0 = O.p(de, rr, ({ theme: e }) => ({
    "fontSize": e.typography.size.s2,
    "lineHeight": "24px",
    "color": e.color.defaultText,
    "& code": kt({ theme: e }),
  })),
  f0 = O.pre(de, rr, ({ theme: e }) => ({
    "fontFamily": e.typography.fonts.mono,
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "lineHeight": "18px",
    "padding": "11px 1rem",
    "whiteSpace": "pre-wrap",
    "color": "inherit",
    "borderRadius": 3,
    "margin": "1rem 0",
    "&:not(.prismjs)": {
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    "& pre, &.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
      code: { color: "inherit", fontSize: "inherit" },
    },
    "& code": { whiteSpace: "pre" },
    "& code, & tt": { border: "none" },
  })),
  m0 = O.span(de, ({ theme: e }) => ({
    "&.frame": {
      "display": "block",
      "overflow": "hidden",
      "& > span": {
        border: `1px solid ${e.color.medium}`,
        display: "block",
        float: "left",
        overflow: "hidden",
        margin: "13px 0 0",
        padding: 7,
        width: "auto",
      },
      "& span img": { display: "block", float: "left" },
      "& span span": {
        clear: "both",
        color: e.color.darkest,
        display: "block",
        padding: "5px 0 0",
      },
    },
    "&.align-center": {
      "display": "block",
      "overflow": "hidden",
      "clear": "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "center",
      },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "&.align-right": {
      "display": "block",
      "overflow": "hidden",
      "clear": "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px 0 0",
        textAlign: "right",
      },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "&.float-left": {
      "display": "block",
      "marginRight": 13,
      "overflow": "hidden",
      "float": "left",
      "& span": { margin: "13px 0 0" },
    },
    "&.float-right": {
      "display": "block",
      "marginLeft": 13,
      "overflow": "hidden",
      "float": "right",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "right",
      },
    },
  })),
  g0 = O.table(de, rr, ({ theme: e }) => ({
    "fontSize": e.typography.size.s2,
    "lineHeight": "24px",
    "padding": 0,
    "borderCollapse": "collapse",
    "& tr": {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: e.appContentBg,
      margin: 0,
      padding: 0,
    },
    "& tr:nth-of-type(2n)": {
      backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter,
    },
    "& tr th": {
      fontWeight: "bold",
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr td": {
      border: `1px solid ${e.appBorderColor}`,
      color: e.color.defaultText,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
    "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
  })),
  h0 = O.title(kt),
  $h = {
    "paddingLeft": 30,
    "& :first-of-type": { marginTop: 0 },
    "& :last-child": { marginBottom: 0 },
  },
  y0 = O.ul(de, rr, { ...$h, listStyle: "disc" }),
  Vi = O.div(de),
  v0 = {
    h1: (e) => o.createElement(a0, { ...ce(e, "h1") }),
    h2: (e) => o.createElement(Bi, { ...ce(e, "h2") }),
    h3: (e) => o.createElement(Ni, { ...ce(e, "h3") }),
    h4: (e) => o.createElement(o0, { ...ce(e, "h4") }),
    h5: (e) => o.createElement(i0, { ...ce(e, "h5") }),
    h6: (e) => o.createElement(l0, { ...ce(e, "h6") }),
    pre: (e) => o.createElement(f0, { ...ce(e, "pre") }),
    a: (e) => o.createElement(e0, { ...ce(e, "a") }),
    hr: (e) => o.createElement(s0, { ...ce(e, "hr") }),
    dl: (e) => o.createElement(n0, { ...ce(e, "dl") }),
    blockquote: (e) => o.createElement(t0, { ...ce(e, "blockquote") }),
    table: (e) => o.createElement(g0, { ...ce(e, "table") }),
    img: (e) => o.createElement(c0, { ...ce(e, "img") }),
    div: (e) => o.createElement(r0, { ...ce(e, "div") }),
    span: (e) => o.createElement(m0, { ...ce(e, "span") }),
    li: (e) => o.createElement(u0, { ...ce(e, "li") }),
    ul: (e) => o.createElement(y0, { ...ce(e, "ul") }),
    ol: (e) => o.createElement(d0, { ...ce(e, "ol") }),
    p: (e) => o.createElement(p0, { ...ce(e, "p") }),
    code: (e) => o.createElement(Mi, { ...ce(e, "code") }),
    tt: (e) => o.createElement(h0, { ...ce(e, "tt") }),
    resetwrapper: (e) => o.createElement(Vi, { ...ce(e, "resetwrapper") }),
  },
  Ih = O.div(
    ({ theme: e }) => ({
      display: "inline-block",
      fontSize: 11,
      lineHeight: "12px",
      alignSelf: "center",
      padding: "4px 12px",
      borderRadius: "3em",
      fontWeight: e.typography.weight.bold,
    }),
    {
      svg: {
        height: 12,
        width: 12,
        marginRight: 4,
        marginTop: -2,
        path: { fill: "currentColor" },
      },
    },
    ({ theme: e, status: t }) => {
      switch (t) {
        case "critical":
          return { color: e.color.critical, background: e.background.critical };
        case "negative":
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Te(0.9, e.color.negativeText)}`
                : "none",
          };
        case "warning":
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Te(0.9, e.color.warningText)}`
                : "none",
          };
        case "neutral":
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Te(0.9, e.color.dark)}`
                : "none",
          };
        case "positive":
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === "light"
                ? `inset 0 0 0 1px ${Te(0.9, e.color.positiveText)}`
                : "none",
          };
        default:
          return {};
      }
    }
  ),
  Fh = ({ ...e }) => o.createElement(Ih, { ...e }),
  an = {
    user: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z",
      })
    ),
    useralt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z",
      })
    ),
    useradd: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z",
      })
    ),
    users: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z",
      }),
      o.createElement("path", {
        d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z",
      })
    ),
    profile: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z",
      })
    ),
    facehappy: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    faceneutral: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    facesad: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    accessibility: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
      }),
      o.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    accessibilityalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
      })
    ),
    arrowup: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z",
      })
    ),
    arrowdown: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z",
      })
    ),
    arrowleft: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z",
      })
    ),
    arrowright: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z",
      })
    ),
    arrowupalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z",
      })
    ),
    arrowdownalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z",
      })
    ),
    arrowleftalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z",
      })
    ),
    arrowrightalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    expandalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z",
      })
    ),
    collapse: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z",
      })
    ),
    expand: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z",
      })
    ),
    unfold: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z",
      }),
      o.createElement("path", {
        d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z",
      }),
      o.createElement("path", {
        d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
      })
    ),
    transfer: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z",
      })
    ),
    redirect: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z",
      })
    ),
    undo: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z",
      })
    ),
    reply: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z",
      })
    ),
    sync: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z",
      })
    ),
    upload: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    download: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z",
      })
    ),
    back: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z",
      })
    ),
    proceed: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z",
      })
    ),
    refresh: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z",
      })
    ),
    globe: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z",
      })
    ),
    compass: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    location: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z",
      })
    ),
    pin: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z",
      })
    ),
    time: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    dashboard: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z",
      })
    ),
    timer: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z",
      })
    ),
    home: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z",
      })
    ),
    admin: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z",
      }),
      o.createElement("path", {
        d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z",
      })
    ),
    info: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    question: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    support: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      })
    ),
    alert: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z",
      })
    ),
    email: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z",
      })
    ),
    phone: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z",
      })
    ),
    link: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z",
      }),
      o.createElement("path", {
        d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z",
      })
    ),
    unlink: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    bell: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z",
      })
    ),
    rss: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      })
    ),
    sharealt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z",
      }),
      o.createElement("path", {
        d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z",
      })
    ),
    share: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z",
      }),
      o.createElement("path", {
        d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z",
      })
    ),
    circlehollow: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z",
      })
    ),
    circle: o.createElement("path", {
      d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z",
    }),
    bookmarkhollow: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z",
      })
    ),
    bookmark: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z",
      })
    ),
    hearthollow: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2",
      })
    ),
    heart: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z",
      })
    ),
    starhollow: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z",
      })
    ),
    star: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z",
      })
    ),
    certificate: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z",
      })
    ),
    verified: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
      })
    ),
    thumbsup: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    shield: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z",
      })
    ),
    basket: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z",
      }),
      o.createElement("path", {
        d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z",
      }),
      o.createElement("path", {
        d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z",
      })
    ),
    beaker: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z",
      })
    ),
    hourglass: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z",
      })
    ),
    flag: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    cloudhollow: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z",
      })
    ),
    cloud: o.createElement("path", {
      d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z",
    }),
    edit: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z",
      })
    ),
    cog: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z",
        fill: "#333",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z",
      })
    ),
    nut: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z",
      })
    ),
    wrench: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    ellipsis: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
      })
    ),
    check: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z",
      })
    ),
    form: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z",
      }),
      o.createElement("path", {
        d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z",
      })
    ),
    batchdeny: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
      })
    ),
    batchaccept: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
      })
    ),
    controls: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z",
      })
    ),
    plus: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z",
      })
    ),
    closeAlt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z",
      })
    ),
    cross: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z",
      })
    ),
    trash: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z",
      })
    ),
    pinalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z",
      })
    ),
    unpin: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    add: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    subtract: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    close: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    delete: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z",
      })
    ),
    passed: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
      })
    ),
    changed: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
      })
    ),
    failed: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
      })
    ),
    clear: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    comment: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z",
      })
    ),
    commentadd: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
      })
    ),
    requestchange: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
      })
    ),
    comments: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z",
      })
    ),
    lock: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z",
      })
    ),
    unlock: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z",
      })
    ),
    key: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z",
      })
    ),
    outbox: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z",
      }),
      o.createElement("path", {
        d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z",
      })
    ),
    credit: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z",
      })
    ),
    button: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z",
      }),
      o.createElement("path", {
        d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z",
      })
    ),
    type: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z",
      })
    ),
    pointerdefault: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z",
      })
    ),
    pointerhand: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z",
      })
    ),
    browser: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    tablet: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z",
      })
    ),
    mobile: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z",
      })
    ),
    watch: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        key: "watch",
        fillRule: "evenodd",
        d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      })
    ),
    sidebar: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z",
      })
    ),
    sidebaralt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z",
      })
    ),
    sidebaralttoggle: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z",
      })
    ),
    sidebartoggle: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z",
      })
    ),
    bottombar: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z",
      })
    ),
    bottombartoggle: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z",
      })
    ),
    cpu: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z",
      })
    ),
    database: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z",
      })
    ),
    memory: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z",
      })
    ),
    structure: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z",
      })
    ),
    box: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z",
      })
    ),
    power: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z",
      }),
      o.createElement("path", {
        d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z",
      })
    ),
    photo: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z",
      })
    ),
    component: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z",
      })
    ),
    grid: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z",
      })
    ),
    outline: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      })
    ),
    photodrag: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z",
      }),
      o.createElement("path", {
        d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z",
      })
    ),
    search: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
      })
    ),
    zoom: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
      })
    ),
    zoomout: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
      })
    ),
    zoomreset: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z",
      })
    ),
    eye: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z",
      })
    ),
    eyeclose: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z",
      }),
      o.createElement("path", {
        d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z",
      })
    ),
    lightning: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z",
      })
    ),
    lightningoff: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    contrast: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z",
      })
    ),
    switchalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z",
      })
    ),
    mirror: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z",
      })
    ),
    grow: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z",
      }),
      o.createElement("path", {
        d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z",
      })
    ),
    paintbrush: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z",
      })
    ),
    ruler: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z",
      })
    ),
    stop: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    camera: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z",
      })
    ),
    video: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z",
      })
    ),
    speaker: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z",
      }),
      o.createElement("path", {
        d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z",
      }),
      o.createElement("path", {
        d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z",
      })
    ),
    play: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z",
      })
    ),
    playback: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z",
      })
    ),
    playnext: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z",
      })
    ),
    rewind: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z",
      })
    ),
    fastforward: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z",
      })
    ),
    stopalt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z",
      })
    ),
    sidebyside: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z",
      })
    ),
    stacked: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z",
      })
    ),
    sun: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
      o.createElement("path", {
        d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z",
      })
    ),
    moon: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z",
      })
    ),
    book: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z",
      })
    ),
    document: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z",
      })
    ),
    copy: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z",
      })
    ),
    category: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z",
      })
    ),
    folder: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z",
      })
    ),
    print: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z",
      })
    ),
    graphline: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z",
      })
    ),
    calendar: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z",
      })
    ),
    graphbar: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z",
      })
    ),
    menu: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z",
      })
    ),
    menualt: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z",
      })
    ),
    filter: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      })
    ),
    docchart: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z",
      })
    ),
    doclist: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z",
      })
    ),
    markup: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z",
      })
    ),
    bold: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z",
      })
    ),
    italic: o.createElement("path", {
      d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z",
    }),
    paperclip: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z",
      })
    ),
    listordered: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z",
      })
    ),
    listunordered: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      })
    ),
    paragraph: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z",
      })
    ),
    markdown: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z",
      })
    ),
    repository: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z",
      }),
      o.createElement("path", {
        d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z",
      }),
      o.createElement("path", {
        d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z",
      }),
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z",
      })
    ),
    commit: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      })
    ),
    branch: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    pullrequest: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    merge: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    apple: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z",
      })
    ),
    linux: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z",
      })
    ),
    ubuntu: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z",
      })
    ),
    windows: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z",
      })
    ),
    storybook: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z",
      })
    ),
    azuredevops: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z",
      })
    ),
    bitbucket: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z",
      })
    ),
    chrome: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z",
      })
    ),
    chromatic: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z",
      })
    ),
    componentdriven: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z",
      })
    ),
    discord: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z",
      })
    ),
    facebook: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z",
      })
    ),
    figma: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        fillRule: "evenodd",
        d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z",
      })
    ),
    gdrive: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z",
      })
    ),
    github: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z",
      })
    ),
    gitlab: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z",
      })
    ),
    google: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z",
      })
    ),
    graphql: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z",
      })
    ),
    medium: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z",
      })
    ),
    redux: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z",
      })
    ),
    twitter: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z",
      })
    ),
    youtube: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z",
      })
    ),
    vscode: o.createElement(
      o.Fragment,
      null,
      o.createElement("path", {
        d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z",
      })
    ),
  },
  b0 = O.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  Fe = ({ icon: e, useSymbol: t, ...r }) =>
    o.createElement(
      b0,
      { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r },
      t ? o.createElement("use", { xlinkHref: `#icon--${e}` }) : an[e]
    ),
  Ph = u.memo(function ({ icons: e = Object.keys(an) }) {
    return o.createElement(
      b0,
      {
        "viewBox": "0 0 14 14",
        "style": { position: "absolute", width: 0, height: 0 },
        "data-chromatic": "ignore",
      },
      e.map((t) =>
        o.createElement("symbol", { id: `icon--${t}`, key: t }, an[t])
      )
    );
  }),
  Mh = 0,
  Bh = (e) =>
    e.button === Mh && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  Nh = (e, t) => {
    Bh(e) && (e.preventDefault(), t(e));
  },
  Vh = O.span(
    ({ withArrow: e }) =>
      e
        ? {
            "> svg:last-of-type": {
              height: "0.7em",
              width: "0.7em",
              marginRight: 0,
              marginLeft: "0.25em",
              bottom: "auto",
              verticalAlign: "inherit",
            },
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: "1em",
              width: "1em",
              verticalAlign: "middle",
              position: "relative",
              bottom: 0,
              marginRight: 0,
            },
          }
        : {}
  ),
  Hh = O.a(
    ({ theme: e }) => ({
      "display": "inline-block",
      "transition": "all 150ms ease-out",
      "textDecoration": "none",
      "color": e.color.secondary,
      "&:hover, &:focus": {
        "cursor": "pointer",
        "color": Ge(0.07, e.color.secondary),
        "svg path": { fill: Ge(0.07, e.color.secondary) },
      },
      "&:active": {
        "color": Ge(0.1, e.color.secondary),
        "svg path": { fill: Ge(0.1, e.color.secondary) },
      },
      "svg": {
        "display": "inline-block",
        "height": "1em",
        "width": "1em",
        "verticalAlign": "text-top",
        "position": "relative",
        "bottom": "-0.125em",
        "marginRight": "0.4em",
        "& path": { fill: e.color.secondary },
      },
    }),
    ({ theme: e, secondary: t, tertiary: r }) => {
      let n;
      return (
        t && (n = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]),
        n
          ? {
              "color": n[0],
              "svg path": { fill: n[0] },
              "&:hover": { "color": n[1], "svg path": { fill: n[1] } },
              "&:active": { "color": n[2], "svg path": { fill: n[2] } },
            }
          : {}
      );
    },
    ({ nochrome: e }) =>
      e
        ? {
            "color": "inherit",
            "&:hover, &:active": {
              color: "inherit",
              textDecoration: "underline",
            },
          }
        : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            "color": e.color.lightest,
            "svg path": { fill: e.color.lightest },
            "&:hover": {
              "color": e.color.lighter,
              "svg path": { fill: e.color.lighter },
            },
            "&:active": {
              "color": e.color.light,
              "svg path": { fill: e.color.light },
            },
          }
        : {},
    ({ isButton: e }) =>
      e
        ? {
            border: 0,
            borderRadius: 0,
            background: "none",
            padding: 0,
            fontSize: "inherit",
          }
        : {}
  ),
  Hi = ({
    cancel: e,
    children: t,
    onClick: r,
    withArrow: n,
    containsIcon: a,
    className: i,
    ...l
  }) =>
    o.createElement(
      Hh,
      { ...l, onClick: r && e ? (s) => Nh(s, r) : r, className: i },
      o.createElement(
        Vh,
        { withArrow: n, containsIcon: a },
        t,
        n && o.createElement(Fe, { icon: "arrowright" })
      )
    );
Hi.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1,
};
var jh = O.div(({ theme: e }) => ({
    "fontSize": `${e.typography.size.s2}px`,
    "lineHeight": "1.6",
    "h1": {
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold,
    },
    "h2": {
      fontSize: `${e.typography.size.m2}px`,
      borderBottom: `1px solid ${e.appBorderColor}`,
    },
    "h3": { fontSize: `${e.typography.size.m1}px` },
    "h4": { fontSize: `${e.typography.size.s3}px` },
    "h5": { fontSize: `${e.typography.size.s2}px` },
    "h6": { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    "pre:not(.prismjs)": {
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    "pre pre, pre.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
    },
    "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" },
    "pre code": {
      margin: 0,
      padding: 0,
      whiteSpace: "pre",
      border: "none",
      background: "transparent",
    },
    "pre code, pre tt": { backgroundColor: "transparent", border: "none" },
    "body > *:first-of-type": { marginTop: "0 !important" },
    "body > *:last-child": { marginBottom: "0 !important" },
    "a": { color: e.color.secondary, textDecoration: "none" },
    "a.absent": { color: "#cc0000" },
    "a.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
    "h1, h2, h3, h4, h5, h6": {
      "margin": "20px 0 10px",
      "padding": 0,
      "cursor": "text",
      "position": "relative",
      "&:first-of-type": { marginTop: 0, paddingTop: 0 },
      "&:hover a.anchor": { textDecoration: "none" },
      "& tt, & code": { fontSize: "inherit" },
    },
    "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" },
    "hr": {
      border: "0 none",
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0,
    },
    "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type":
      { marginTop: 0, paddingTop: 0 },
    "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6":
      { marginTop: 0, paddingTop: 0 },
    "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 },
    "li p.first": { display: "inline-block" },
    "ul, ol": {
      "paddingLeft": 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 },
    },
    "dl": { padding: 0 },
    "dl dt": {
      "fontSize": "14px",
      "fontWeight": "bold",
      "fontStyle": "italic",
      "margin": "0 0 15px",
      "padding": "0 15px",
      "&:first-of-type": { padding: 0 },
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    "blockquote": {
      "borderLeft": `4px solid ${e.color.medium}`,
      "padding": "0 15px",
      "color": e.color.dark,
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    "table": {
      "padding": 0,
      "borderCollapse": "collapse",
      "& tr": {
        "borderTop": `1px solid ${e.appBorderColor}`,
        "backgroundColor": "white",
        "margin": 0,
        "padding": 0,
        "& th": {
          fontWeight: "bold",
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "& td": {
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "&:nth-of-type(2n)": { backgroundColor: e.color.lighter },
        "& th :first-of-type, & td :first-of-type": { marginTop: 0 },
        "& th :last-child, & td :last-child": { marginBottom: 0 },
      },
    },
    "img": { maxWidth: "100%" },
    "span.frame": {
      "display": "block",
      "overflow": "hidden",
      "& > span": {
        border: `1px solid ${e.color.medium}`,
        display: "block",
        float: "left",
        overflow: "hidden",
        margin: "13px 0 0",
        padding: 7,
        width: "auto",
      },
      "& span img": { display: "block", float: "left" },
      "& span span": {
        clear: "both",
        color: e.color.darkest,
        display: "block",
        padding: "5px 0 0",
      },
    },
    "span.align-center": {
      "display": "block",
      "overflow": "hidden",
      "clear": "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "center",
      },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "span.align-right": {
      "display": "block",
      "overflow": "hidden",
      "clear": "both",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px 0 0",
        textAlign: "right",
      },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "span.float-left": {
      "display": "block",
      "marginRight": 13,
      "overflow": "hidden",
      "float": "left",
      "& span": { margin: "13px 0 0" },
    },
    "span.float-right": {
      "display": "block",
      "marginLeft": 13,
      "overflow": "hidden",
      "float": "right",
      "& > span": {
        display: "block",
        overflow: "hidden",
        margin: "13px auto 0",
        textAlign: "right",
      },
    },
    "code, tt": {
      margin: "0 2px",
      padding: "0 5px",
      whiteSpace: "nowrap",
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === "dark" && e.color.darkest,
    },
  })),
  Yt = [],
  Cr = null,
  Zh = u.lazy(async () => {
    let { SyntaxHighlighter: e } = await R(
      () => import("./syntaxhighlighter-4OVWVELQ-a1903233.js"),
      [
        "./syntaxhighlighter-4OVWVELQ-a1903233.js",
        "./iframe-5ac5d544.js",
        "./index-61bf1805.js",
        "./_commonjsHelpers-de833af9.js",
        "./index-46294899.js",
        "./chunk-6P7RB4HF-150ba47c.js",
        "./index-d475d2ea.js",
        "./_commonjs-dynamic-modules-302442b1.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    );
    return (
      Yt.length > 0 &&
        (Yt.forEach((t) => {
          e.registerLanguage(...t);
        }),
        (Yt = [])),
      Cr === null && (Cr = e),
      { default: (t) => o.createElement(e, { ...t }) }
    );
  }),
  zh = u.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      R(
        () => import("./syntaxhighlighter-4OVWVELQ-a1903233.js"),
        [
          "./syntaxhighlighter-4OVWVELQ-a1903233.js",
          "./iframe-5ac5d544.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
          "./index-46294899.js",
          "./chunk-6P7RB4HF-150ba47c.js",
          "./index-d475d2ea.js",
          "./_commonjs-dynamic-modules-302442b1.js",
          "./index-d37d4223.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
      R(
        () => import("./formatter-6736J7QO-6a96fa4b.js"),
        [
          "./formatter-6736J7QO-6a96fa4b.js",
          "./iframe-5ac5d544.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
          "./index-46294899.js",
          "./chunk-6P7RB4HF-150ba47c.js",
          "./index-d475d2ea.js",
          "./_commonjs-dynamic-modules-302442b1.js",
          "./index-d37d4223.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
    ]);
    return (
      Yt.length > 0 &&
        (Yt.forEach((r) => {
          e.registerLanguage(...r);
        }),
        (Yt = [])),
      Cr === null && (Cr = e),
      { default: (r) => o.createElement(e, { ...r, formatter: t }) }
    );
  }),
  va = (e) =>
    o.createElement(
      u.Suspense,
      { fallback: o.createElement("div", null) },
      e.format !== !1
        ? o.createElement(zh, { ...e })
        : o.createElement(Zh, { ...e })
    );
va.registerLanguage = (...e) => {
  if (Cr !== null) {
    Cr.registerLanguage(...e);
    return;
  }
  Yt.push(e);
};
var qh = (e) => (typeof e == "number" ? e : Number(e)),
  Uh = O.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            "display": "inline-block",
            "verticalAlign": "inherit",
            "& > *": {
              marginLeft: t * e.layoutMargin,
              verticalAlign: "inherit",
            },
            [`& > *:first-child${To}`]: { marginLeft: 0 },
          }
        : {
            "& > *": { marginTop: r * e.layoutMargin },
            [`& > *:first-child${To}`]: { marginTop: 0 },
          },
    ({ theme: e, outer: t, col: r, row: n }) => {
      switch (!0) {
        case !!(t && r):
          return {
            marginLeft: t * e.layoutMargin,
            marginRight: t * e.layoutMargin,
          };
        case !!(t && n):
          return {
            marginTop: t * e.layoutMargin,
            marginBottom: t * e.layoutMargin,
          };
        default:
          return {};
      }
    }
  ),
  Wh = ({ col: e, row: t, outer: r, children: n, ...a }) => {
    let i = qh(typeof r == "number" || !r ? r : e || t);
    return o.createElement(Uh, { col: e, row: t, outer: i, ...a }, n);
  },
  Gh = O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Kh = O.div(),
  Yh = O.div(({ theme: e }) => ({
    padding: 30,
    textAlign: "center",
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  E0 = ({ children: e, ...t }) => {
    let [r, n] = u.Children.toArray(e);
    return o.createElement(
      Yh,
      { ...t },
      o.createElement(Gh, null, r),
      n && o.createElement(Kh, null, n)
    );
  },
  Xh = O.div(({ scale: e = 1, elementHeight: t }) => ({
    height: t || "auto",
    transformOrigin: "top left",
    transform: `scale(${1 / e})`,
  }));
function Jh({ scale: e, children: t }) {
  let r = u.useRef(null),
    [n, a] = u.useState(0),
    i = u.useCallback(
      ({ height: l }) => {
        l && a(l / e);
      },
      [e]
    );
  return (
    u.useEffect(() => {
      r.current && a(r.current.getBoundingClientRect().height);
    }, [e]),
    Qu({ ref: r, onResize: i }),
    o.createElement(
      Xh,
      { scale: e, elementHeight: n },
      o.createElement(
        "div",
        { ref: r, className: "innerZoomElementWrapper" },
        t
      )
    )
  );
}
var Qh = class extends u.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props;
      this.iframe = e.current;
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: r } = this.props;
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active &&
          this.iframe.setAttribute(
            "data-is-storybook",
            e.active ? "true" : "false"
          ),
        e.children.props.src !== this.props.children.props.src
      );
    }
    setIframeInnerZoom(e) {
      try {
        Object.assign(this.iframe.contentDocument.body.style, {
          width: `${e * 100}%`,
          height: `${e * 100}%`,
          transform: `scale(${1 / e})`,
          transformOrigin: "top left",
        });
      } catch {
        this.setIframeZoom(e);
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: "top left",
      });
    }
    render() {
      let { children: e } = this.props;
      return e;
    }
  },
  x0 = { Element: Jh, IFrame: Qh },
  { document: ey } = Oe,
  ty = O.strong(({ theme: e }) => ({ color: e.color.orange })),
  ry = O.strong(({ theme: e }) => ({
    color: e.color.ancillary,
    textDecoration: "underline",
  })),
  vs = O.em(({ theme: e }) => ({ color: e.textMutedColor })),
  ny = /(Error): (.*)\n/,
  ay = /at (?:(.*) )?\(?(.+)\)?/,
  oy = /([^@]+)?(?:\/<)?@(.+)?/,
  iy = /([^@]+)?@(.+)?/,
  w0 = ({ error: e }) => {
    if (!e)
      return o.createElement(
        u.Fragment,
        null,
        "This error has no stack or message"
      );
    if (!e.stack)
      return o.createElement(
        u.Fragment,
        null,
        e.message || "This error has no stack or message"
      );
    let t = e.stack.toString();
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`);
    let r = t.match(ny);
    if (!r) return o.createElement(u.Fragment, null, t);
    let [, n, a] = r,
      i = t.split(/\n/).slice(1),
      [, ...l] = i
        .map((s) => {
          let c = s.match(ay) || s.match(oy) || s.match(iy);
          return c
            ? {
                name: (c[1] || "").replace("/<", ""),
                location: c[2].replace(ey.location.origin, ""),
              }
            : null;
        })
        .filter(Boolean);
    return o.createElement(
      u.Fragment,
      null,
      o.createElement("span", null, n),
      ": ",
      o.createElement(ty, null, a),
      o.createElement("br", null),
      l.map((s, c) =>
        s.name
          ? o.createElement(
              u.Fragment,
              { key: c },
              "  ",
              "at ",
              o.createElement(ry, null, s.name),
              " (",
              o.createElement(vs, null, s.location),
              ")",
              o.createElement("br", null)
            )
          : o.createElement(
              u.Fragment,
              { key: c },
              "  ",
              "at ",
              o.createElement(vs, null, s.location),
              o.createElement("br", null)
            )
      )
    );
  },
  _0 = O.button(
    ({ small: e, theme: t }) => ({
      border: 0,
      borderRadius: "3em",
      cursor: "pointer",
      display: "inline-block",
      overflow: "hidden",
      padding: e ? "8px 16px" : "13px 20px",
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      transitionProperty: "background, box-shadow",
      transitionDuration: "150ms",
      transitionTimingFunction: "ease-out",
      verticalAlign: "top",
      whiteSpace: "nowrap",
      userSelect: "none",
      opacity: 1,
      margin: 0,
      background: "transparent",
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: "1",
      svg: {
        display: "inline-block",
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: "top",
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: "none",
        path: { fill: "currentColor" },
      },
    }),
    ({ disabled: e }) =>
      e
        ? {
            "cursor": "not-allowed !important",
            "opacity": 0.5,
            "&:hover": { transform: "none" },
          }
        : {},
    ({ containsIcon: e, small: t }) =>
      e
        ? {
            svg: { display: "block", margin: 0 },
            ...(t ? { padding: 10 } : { padding: 13 }),
          }
        : {},
    ({ theme: e, primary: t, secondary: r, gray: n }) => {
      let a;
      return (
        n
          ? (a = e.color.mediumlight)
          : r
          ? (a = e.color.secondary)
          : t && (a = e.color.primary),
        a
          ? {
              "background": a,
              "color": n ? e.color.darkest : e.color.lightest,
              "&:hover": { background: Ge(0.05, a) },
              "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" },
              "&:focus": {
                boxShadow: `${ut(a, 1)} 0 1px 9px 2px`,
                outline: "none",
              },
              "&:focus:hover": { boxShadow: `${ut(a, 0.2)} 0 8px 18px 0px` },
            }
          : {}
      );
    },
    ({ theme: e, tertiary: t, inForm: r, small: n }) =>
      t
        ? {
            "background": e.button.background,
            "color": e.input.color,
            "boxShadow": `${e.button.border} 0 0 0 1px inset`,
            "borderRadius": e.input.borderRadius,
            ...(r && n ? { padding: "10px 16px" } : {}),
            "&:hover": {
              background:
                e.base === "light"
                  ? Ge(0.02, e.button.background)
                  : Po(0.03, e.button.background),
              ...(r
                ? {}
                : {
                    boxShadow:
                      "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset",
                  }),
            },
            "&:active": { background: e.button.background },
            "&:focus": {
              boxShadow: `${ut(e.color.secondary, 1)} 0 0 0 1px inset`,
              outline: "none",
            },
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            "boxShadow": `${Te(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            "color": Te(0.3, e.color.defaultText),
            "background": "transparent",
            "&:hover, &:focus": {
              boxShadow: `${Te(0.5, e.color.defaultText)} 0 0 0 1px inset`,
              outline: "none",
            },
            "&:active": {
              boxShadow: `${Te(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: Te(0, e.color.defaultText),
            },
          }
        : {},
    ({ theme: e, outline: t, primary: r }) => {
      let n = e.color.primary;
      return t && r
        ? {
            "boxShadow": `${n} 0 0 0 1px inset`,
            "color": n,
            "svg path": { fill: n },
            "&:hover": {
              boxShadow: `${n} 0 0 0 1px inset`,
              background: "transparent",
            },
            "&:active": {
              background: n,
              boxShadow: `${n} 0 0 0 1px inset`,
              color: e.color.tertiary,
            },
            "&:focus": {
              boxShadow: `${n} 0 0 0 1px inset, ${ut(n, 0.4)} 0 1px 9px 2px`,
              outline: "none",
            },
            "&:focus:hover": {
              boxShadow: `${n} 0 0 0 1px inset, ${ut(n, 0.2)} 0 8px 18px 0px`,
            },
          }
        : {};
    },
    ({ theme: e, outline: t, primary: r, secondary: n }) => {
      let a;
      return (
        n ? (a = e.color.secondary) : r && (a = e.color.primary),
        t && a
          ? {
              "boxShadow": `${a} 0 0 0 1px inset`,
              "color": a,
              "svg path": { fill: a },
              "&:hover": {
                boxShadow: `${a} 0 0 0 1px inset`,
                background: "transparent",
              },
              "&:active": {
                background: a,
                boxShadow: `${a} 0 0 0 1px inset`,
                color: e.color.tertiary,
              },
              "&:focus": {
                boxShadow: `${a} 0 0 0 1px inset, ${ut(a, 0.4)} 0 1px 9px 2px`,
                outline: "none",
              },
              "&:focus:hover": {
                boxShadow: `${a} 0 0 0 1px inset, ${ut(a, 0.2)} 0 8px 18px 0px`,
              },
            }
          : {}
      );
    }
  ),
  ly = _0.withComponent("a"),
  A0 = Object.assign(
    u.forwardRef(function ({ isLink: e, children: t, ...r }, n) {
      return e
        ? o.createElement(ly, { ...r, ref: n }, t)
        : o.createElement(_0, { ...r, ref: n }, t);
    }),
    { defaultProps: { isLink: !1 } }
  ),
  sy = O.label(({ theme: e }) => ({
    "display": "flex",
    "borderBottom": `1px solid ${e.appBorderColor}`,
    "margin": "0 15px",
    "padding": "8px 0",
    "&:last-child": { marginBottom: "3rem" },
  })),
  cy = O.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    lineHeight: "16px",
  })),
  C0 = ({ label: e, children: t, ...r }) =>
    o.createElement(
      sy,
      { ...r },
      e ? o.createElement(cy, null, o.createElement("span", null, e)) : null,
      t
    );
C0.defaultProps = { label: void 0 };
var bs = function (e, t) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    e.current = t;
  },
  uy = function (e, t) {
    var r = u.useRef();
    return u.useCallback(
      function (n) {
        (e.current = n),
          r.current && bs(r.current, null),
          (r.current = t),
          t && bs(t, n);
      },
      [t]
    );
  },
  dy = uy,
  py = function () {},
  fy = [
    "cacheMeasurements",
    "maxRows",
    "minRows",
    "onChange",
    "onHeightChange",
  ],
  my = function (e, t) {
    e.cacheMeasurements, e.maxRows, e.minRows;
    var r = e.onChange,
      n = r === void 0 ? py : r;
    e.onHeightChange;
    var a = bi(e, fy);
    a.value;
    var i = u.useRef(null),
      l = dy(i, t);
    return (
      u.useRef(0),
      u.useRef(),
      u.createElement("textarea", De({}, a, { onChange: n, ref: l }))
    );
  },
  gy = u.forwardRef(my),
  hy = {
    appearance: "none",
    border: "0 none",
    boxSizing: "inherit",
    display: " block",
    margin: " 0",
    background: "transparent",
    padding: 0,
    fontSize: "inherit",
    position: "relative",
  },
  ji = ({ theme: e }) => ({
    ...hy,
    "transition": "box-shadow 200ms ease-out, opacity 200ms ease-out",
    "color": e.input.color || "inherit",
    "background": e.input.background,
    "boxShadow": `${e.input.border} 0 0 0 1px inset`,
    "borderRadius": e.input.borderRadius,
    "fontSize": e.typography.size.s2 - 1,
    "lineHeight": "20px",
    "padding": "6px 10px",
    "boxSizing": "border-box",
    "height": 32,
    '&[type="file"]': { height: "auto" },
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
    "&::placeholder": { color: e.textMutedColor, opacity: 1 },
  }),
  ba = ({ size: e }) => {
    switch (e) {
      case "100%":
        return { width: "100%" };
      case "flex":
        return { flex: 1 };
      case "auto":
      default:
        return { display: "inline" };
    }
  },
  S0 = ({ align: e }) => {
    switch (e) {
      case "end":
        return { textAlign: "right" };
      case "center":
        return { textAlign: "center" };
      case "start":
      default:
        return { textAlign: "left" };
    }
  },
  Ea = ({ valid: e, theme: t }) => {
    switch (e) {
      case "valid":
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
      case "error":
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
      case "warn":
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  yy = Object.assign(
    O(
      u.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return o.createElement("input", { ...n, ref: a });
      })
    )(ji, ba, S0, Ea, { minHeight: 32 }),
    { displayName: "Input" }
  ),
  vy = Object.assign(
    O(
      u.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return o.createElement("select", { ...n, ref: a });
      })
    )(ji, ba, Ea, {
      height: 32,
      userSelect: "none",
      paddingRight: 20,
      appearance: "menulist",
    }),
    { displayName: "Select" }
  ),
  by = Object.assign(
    O(
      u.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return o.createElement(gy, { ...n, ref: a });
      })
    )(ji, ba, S0, Ea, ({ height: e = 400 }) => ({
      overflow: "visible",
      maxHeight: e,
    })),
    { displayName: "Textarea" }
  ),
  Ey = O(
    u.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
      return o.createElement(A0, { ...n, ref: a });
    })
  )(ba, Ea, {
    "userSelect": "none",
    "overflow": "visible",
    "zIndex": 2,
    "&:hover": { transform: "none" },
  }),
  xy = Object.assign(
    u.forwardRef(function (e, t) {
      return o.createElement(Ey, {
        ...e,
        tertiary: !0,
        small: !0,
        inForm: !0,
        ref: t,
      });
    }),
    { displayName: "Button" }
  ),
  tt = Object.assign(O.form({ boxSizing: "border-box", width: "100%" }), {
    Field: C0,
    Input: yy,
    Select: vy,
    Textarea: by,
    Button: xy,
  }),
  wy = u.lazy(() =>
    R(
      () => import("./WithTooltip-YBG737T3-38b2299d.js"),
      [
        "./WithTooltip-YBG737T3-38b2299d.js",
        "./iframe-5ac5d544.js",
        "./index-61bf1805.js",
        "./_commonjsHelpers-de833af9.js",
        "./index-46294899.js",
        "./chunk-6P7RB4HF-150ba47c.js",
        "./index-d475d2ea.js",
        "./_commonjs-dynamic-modules-302442b1.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltip }))
  ),
  _y = (e) =>
    o.createElement(
      u.Suspense,
      { fallback: o.createElement("div", null) },
      o.createElement(wy, { ...e })
    ),
  Ay = u.lazy(() =>
    R(
      () => import("./WithTooltip-YBG737T3-38b2299d.js"),
      [
        "./WithTooltip-YBG737T3-38b2299d.js",
        "./iframe-5ac5d544.js",
        "./index-61bf1805.js",
        "./_commonjsHelpers-de833af9.js",
        "./index-46294899.js",
        "./chunk-6P7RB4HF-150ba47c.js",
        "./index-d475d2ea.js",
        "./_commonjs-dynamic-modules-302442b1.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltipPure }))
  ),
  R0 = (e) =>
    o.createElement(
      u.Suspense,
      { fallback: o.createElement("div", null) },
      o.createElement(Ay, { ...e })
    ),
  Cy = O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Sy = O.span(),
  Ry = O.div(({ theme: e }) => ({
    "marginTop": 8,
    "textAlign": "center",
    "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold },
  })),
  Ty = O.div(({ theme: e }) => ({
    color: e.color.defaultText,
    lineHeight: "18px",
  })),
  Oy = O.div({ padding: 15, width: 280, boxSizing: "border-box" }),
  T0 = ({ title: e, desc: t, links: r }) =>
    o.createElement(
      Oy,
      null,
      o.createElement(
        Ty,
        null,
        e && o.createElement(Cy, null, e),
        t && o.createElement(Sy, null, t)
      ),
      r &&
        o.createElement(
          Ry,
          null,
          r.map(({ title: n, ...a }) =>
            o.createElement(Hi, { ...a, key: n }, n)
          )
        )
    );
T0.defaultProps = { title: null, desc: null, links: null };
var ky = O.div(({ theme: e }) => ({
    padding: "2px 6px",
    lineHeight: "16px",
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: -1,
    background:
      e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
    margin: 6,
  })),
  Dy = ({ note: e, ...t }) => o.createElement(ky, { ...t }, e),
  Ly = O(({ active: e, loading: t, disabled: r, ...n }) =>
    o.createElement("span", { ...n })
  )(
    ({ theme: e }) => ({
      color: e.color.defaultText,
      fontWeight: e.typography.weight.regular,
    }),
    ({ active: e, theme: t }) =>
      e
        ? { color: t.color.secondary, fontWeight: t.typography.weight.bold }
        : {},
    ({ loading: e, theme: t }) =>
      e
        ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow }
        : {},
    ({ disabled: e, theme: t }) =>
      e ? { color: Te(0.7, t.color.defaultText) } : {}
  ),
  $y = O.span({
    "display": "flex",
    "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" },
    "& path": { fill: "inherit" },
  }),
  Iy = O.span(
    { flex: 1, textAlign: "left", display: "flex", flexDirection: "column" },
    ({ isIndented: e }) => (e ? { marginLeft: 24 } : {})
  ),
  Fy = O.span(
    ({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  Es = O.span(
    ({ active: e, theme: t }) =>
      e
        ? { "& svg": { opacity: 1 }, "& svg path": { fill: t.color.secondary } }
        : {},
    () => ({ display: "flex", maxWidth: 14 })
  ),
  Py = O.a(
    ({ theme: e }) => ({
      "fontSize": e.typography.size.s1,
      "transition": "all 150ms ease-out",
      "color": e.color.dark,
      "textDecoration": "none",
      "cursor": "pointer",
      "justifyContent": "space-between",
      "lineHeight": "18px",
      "padding": "7px 10px",
      "display": "flex",
      "alignItems": "center",
      "& > * + *": { paddingLeft: 10 },
      "&:hover": { background: e.background.hoverable },
      "&:hover svg": { opacity: 1 },
    }),
    ({ disabled: e }) => (e ? { cursor: "not-allowed" } : {})
  ),
  My = tr(100)((e, t, r) => {
    let n = {};
    return (
      e && Object.assign(n, { onClick: e }),
      t && Object.assign(n, { href: t }),
      r && t && Object.assign(n, { to: t, as: r }),
      n
    );
  }),
  O0 = ({
    loading: e,
    left: t,
    title: r,
    center: n,
    right: a,
    icon: i,
    active: l,
    disabled: s,
    isIndented: c,
    href: d,
    onClick: p,
    LinkWrapper: h,
    ...y
  }) => {
    let f = My(p, d, h),
      g = { active: l, disabled: s },
      m = typeof i == "string" && an[i];
    return o.createElement(
      Py,
      { ...g, ...y, ...f },
      i
        ? o.createElement(
            Es,
            { ...g },
            m ? o.createElement(Fe, { icon: i }) : i
          )
        : t && o.createElement(Es, { ...g }, t),
      r || n
        ? o.createElement(
            Iy,
            { isIndented: !t && !i && c },
            r && o.createElement(Ly, { ...g, loading: e }, r),
            n && o.createElement(Fy, { ...g }, n)
          )
        : null,
      a && o.createElement($y, { ...g }, a)
    );
  };
O0.defaultProps = {
  loading: !1,
  left: null,
  title: o.createElement("span", null, "Loading state"),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
var Zi = O0,
  By = O.div(
    {
      minWidth: 180,
      overflow: "hidden",
      overflowY: "auto",
      maxHeight: 15.5 * 32,
    },
    ({ theme: e }) => ({ borderRadius: e.appBorderRadius })
  ),
  Ny = (e) => {
    let { LinkWrapper: t, onClick: r, id: n, isIndented: a, ...i } = e,
      { title: l, href: s, active: c } = i,
      d = u.useCallback(
        (h) => {
          r(h, i);
        },
        [r]
      ),
      p = !!r;
    return o.createElement(Zi, {
      title: l,
      active: c,
      href: s,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: a,
      ...i,
      ...(p ? { onClick: d } : {}),
    });
  },
  zi = ({ links: e, LinkWrapper: t }) => {
    let r = e.some((n) => n.left || n.icon);
    return o.createElement(
      By,
      null,
      e.map(({ isGatsby: n, ...a }) =>
        o.createElement(Ny, {
          key: a.id,
          LinkWrapper: n ? t : null,
          isIndented: r,
          ...a,
        })
      )
    );
  };
zi.defaultProps = { LinkWrapper: Zi.defaultProps.LinkWrapper };
var qi = o.forwardRef(({ children: e, ...t }, r) =>
  t.href != null
    ? o.createElement("a", { ref: r, ...t }, e)
    : o.createElement("button", { ref: r, type: "button", ...t }, e)
);
qi.displayName = "ButtonOrLink";
var yn = O(qi, { shouldForwardProp: ci })(
  {
    "whiteSpace": "normal",
    "display": "inline-flex",
    "overflow": "hidden",
    "verticalAlign": "top",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "textDecoration": "none",
    "&:empty": { display: "none" },
  },
  ({ theme: e }) => ({
    "padding": "0 15px",
    "transition": "color 0.2s linear, border-bottom-color 0.2s linear",
    "height": 40,
    "lineHeight": "12px",
    "cursor": "pointer",
    "background": "transparent",
    "border": "0 solid transparent",
    "borderTop": "3px solid transparent",
    "borderBottom": "3px solid transparent",
    "fontWeight": "bold",
    "fontSize": 13,
    "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary },
  }),
  ({ active: e, textColor: t, theme: r }) =>
    e
      ? {
          color: t || r.barSelectedColor,
          borderBottomColor: r.barSelectedColor,
        }
      : { color: t || r.barTextColor, borderBottomColor: "transparent" }
);
yn.displayName = "TabButton";
var Xt = O(qi, { shouldForwardProp: ci })(
  () => ({
    "alignItems": "center",
    "background": "transparent",
    "border": "none",
    "borderRadius": 4,
    "color": "inherit",
    "cursor": "pointer",
    "display": "inline-flex",
    "fontSize": 13,
    "fontWeight": "bold",
    "height": 28,
    "justifyContent": "center",
    "marginTop": 6,
    "padding": "8px 7px",
    "& > svg": { width: 14 },
  }),
  ({ active: e, theme: t }) =>
    e
      ? { backgroundColor: t.background.hoverable, color: t.color.secondary }
      : {},
  ({ disabled: e, theme: t }) =>
    e
      ? { opacity: 0.5, cursor: "not-allowed" }
      : {
          "&:hover, &:focus-visible": {
            background: Te(0.88, t.color.secondary),
            color: t.color.secondary,
          },
          "&:focus-visible": { outline: ha },
          "&:focus:not(:focus-visible)": { outline: "none" },
        }
);
Xt.displayName = "IconButton";
var Vy = O.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  Hy = O.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  k0 = () => o.createElement(Hy, null, o.createElement(Vy, null)),
  Mo = O.div(
    {
      display: "flex",
      whiteSpace: "nowrap",
      flexBasis: "auto",
      marginLeft: 3,
      marginRight: 3,
    },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { "& > *": { marginLeft: 4 } } : {}),
    ({ right: e }) =>
      e ? { "marginLeft": 30, "& > *": { marginRight: 4 } } : {}
  );
Mo.displayName = "Side";
var jy = ({ children: e, className: t, scrollable: r }) =>
    r
      ? o.createElement(ga, { vertical: !1, className: t }, e)
      : o.createElement("div", { className: t }, e),
  Ui = O(jy)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: "100%",
      height: 40,
      flexShrink: 0,
      overflow: t ? "auto" : "hidden",
      overflowY: "hidden",
    }),
    ({ theme: e, border: t = !1 }) =>
      t
        ? {
            boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
            background: e.barBg,
          }
        : {}
  );
Ui.displayName = "Bar";
var Zy = O.div(({ bgColor: e }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    flexWrap: "nowrap",
    flexShrink: 0,
    height: 40,
    backgroundColor: e || "",
  })),
  xa = ({ children: e, backgroundColor: t, ...r }) => {
    let [n, a] = u.Children.toArray(e);
    return o.createElement(
      Ui,
      { ...r },
      o.createElement(
        Zy,
        { bgColor: t },
        o.createElement(Mo, { scrollable: r.scrollable, left: !0 }, n),
        a ? o.createElement(Mo, { right: !0 }, a) : null
      )
    );
  };
xa.displayName = "FlexBar";
var D0 = O.div(({ active: e }) =>
    e ? { display: "block" } : { display: "none" }
  ),
  xs = (e) =>
    u.Children.toArray(e).map(
      ({ props: { title: t, id: r, color: n, children: a } }) => {
        let i = Array.isArray(a) ? a[0] : a;
        return {
          title: t,
          id: r,
          ...(n ? { color: n } : {}),
          render:
            typeof i == "function"
              ? i
              : ({ active: l, key: s }) =>
                  o.createElement(
                    D0,
                    { key: s, active: l, role: "tabpanel" },
                    i
                  ),
        };
      }
    ),
  zy = O.span(({ theme: e, isActive: t }) => ({
    display: "inline-block",
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: "3px solid transparent",
    borderLeft: "3px solid transparent",
    borderTop: "3px solid",
    transition: "transform .1s ease-out",
  })),
  qy = O(yn)(
    ({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  );
function Uy(e) {
  let t = u.useRef(),
    r = u.useRef(),
    n = u.useRef(new Map()),
    { width: a = 1 } = Qu({ ref: t }),
    [i, l] = u.useState(e),
    [s, c] = u.useState([]),
    d = u.useRef(e),
    p = u.useCallback(
      ({ menuName: y, actions: f }) => {
        let g = s.some(({ active: v }) => v),
          [m, x] = u.useState(!1);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Xg,
            {
              interactive: !0,
              visible: m,
              onVisibleChange: x,
              placement: "bottom",
              delayHide: 100,
              tooltip: o.createElement(zi, {
                links: s.map(({ title: v, id: E, color: b, active: w }) => ({
                  id: E,
                  title: v,
                  color: b,
                  active: w,
                  onClick: (_) => {
                    _.preventDefault(), f.onSelect(E);
                  },
                })),
              }),
            },
            o.createElement(
              qy,
              {
                "ref": r,
                "active": g,
                "preActive": m,
                "style": { visibility: s.length ? "visible" : "hidden" },
                "aria-hidden": !s.length,
                "className": "tabbutton",
                "type": "button",
                "role": "tab",
              },
              y,
              o.createElement(zy, {
                className: "addon-collapsible-icon",
                isActive: g || m,
              })
            )
          ),
          s.map(({ title: v, id: E, color: b }, w) => {
            let _ = `index-${w}`;
            return o.createElement(
              yn,
              {
                "id": `tabbutton-${Nc(E) ?? _}`,
                "style": { visibility: "hidden" },
                "aria-hidden": !0,
                "tabIndex": -1,
                "ref": (A) => {
                  n.current.set(E, A);
                },
                "className": "tabbutton",
                "type": "button",
                "key": E,
                "textColor": b,
                "role": "tab",
              },
              v
            );
          })
        );
      },
      [s]
    ),
    h = u.useCallback(() => {
      if (!t.current || !r.current) return;
      let { x: y, width: f } = t.current.getBoundingClientRect(),
        { width: g } = r.current.getBoundingClientRect(),
        m = s.length ? y + f - g : y + f,
        x = [],
        v = 0,
        E = e.filter((b) => {
          let { id: w } = b,
            _ = n.current.get(w),
            { width: A = 0 } =
              (_ == null ? void 0 : _.getBoundingClientRect()) || {},
            S = y + v + A > m;
          return (!S || !_) && x.push(b), (v += A), S;
        });
      (x.length !== i.length || d.current !== e) &&
        (l(x), c(E), (d.current = e));
    }, [s.length, e, i]);
  return (
    u.useLayoutEffect(h, [h, a]),
    {
      tabRefs: n,
      addonsRef: r,
      tabBarRef: t,
      visibleList: i,
      invisibleList: s,
      AddonTab: p,
    }
  );
}
var Wy =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  Gy = O.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: "padding-box",
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: "hidden",
            boxSizing: "border-box",
          }
        : {},
    ({ absolute: e }) =>
      e
        ? {
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }
        : { display: "block" }
  ),
  Wi = O.div({
    "overflow": "hidden",
    "&:first-of-type": { marginLeft: -3 },
    "whiteSpace": "nowrap",
    "flexGrow": 1,
  });
Wi.displayName = "TabBar";
var Ky = O.div(
    { display: "block", position: "relative" },
    ({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content,
    }),
    ({ bordered: e, theme: t }) =>
      e
        ? {
            borderRadius: `0 0 ${t.appBorderRadius - 1}px ${
              t.appBorderRadius - 1
            }px`,
          }
        : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: "absolute",
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: "auto",
            [`& > *:first-child${Wy}`]: {
              position: "absolute",
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: "auto",
            },
          }
        : {}
  ),
  Yy = ({ active: e, render: t, children: r }) =>
    o.createElement(D0, { active: e }, t ? t() : r),
  wa = u.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: n,
      bordered: a,
      tools: i,
      backgroundColor: l,
      id: s,
      menuName: c,
    }) => {
      let d = xs(e).map((m) => m.id),
        p = u.useMemo(
          () =>
            xs(e).map((m, x) => ({ ...m, active: t ? m.id === t : x === 0 })),
          [t, ...d]
        ),
        { visibleList: h, tabBarRef: y, tabRefs: f, AddonTab: g } = Uy(p);
      return p.length
        ? o.createElement(
            Gy,
            { absolute: n, bordered: a, id: s },
            o.createElement(
              xa,
              { scrollable: !1, border: !0, backgroundColor: l },
              o.createElement(
                Wi,
                { style: { whiteSpace: "normal" }, ref: y, role: "tablist" },
                h.map(({ title: m, id: x, active: v, color: E }, b) => {
                  let w = `index-${b}`;
                  return o.createElement(
                    yn,
                    {
                      id: `tabbutton-${Nc(x) ?? w}`,
                      ref: (_) => {
                        f.current.set(x, _);
                      },
                      className: `tabbutton ${v ? "tabbutton-active" : ""}`,
                      type: "button",
                      key: x,
                      active: v,
                      textColor: E,
                      onClick: (_) => {
                        _.preventDefault(), r.onSelect(x);
                      },
                      role: "tab",
                    },
                    typeof m == "function" ? o.createElement("title", null) : m
                  );
                }),
                o.createElement(g, { menuName: c, actions: r })
              ),
              i
            ),
            o.createElement(
              Ky,
              { id: "panel-tab-content", bordered: a, absolute: n },
              p.map(({ id: m, active: x, render: v }) =>
                o.createElement(v, { key: m, active: x }, null)
              )
            )
          )
        : o.createElement(
            E0,
            null,
            o.createElement(u.Fragment, { key: "title" }, "Nothing found")
          );
    }
  );
wa.displayName = "Tabs";
wa.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: "Tabs",
};
var L0 = class extends u.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: (t) => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial });
  }
  render() {
    let {
        bordered: e = !1,
        absolute: t = !1,
        children: r,
        backgroundColor: n,
        menuName: a,
      } = this.props,
      { selected: i } = this.state;
    return o.createElement(
      wa,
      {
        bordered: e,
        absolute: t,
        selected: i,
        backgroundColor: n,
        menuName: a,
        actions: this.handlers,
      },
      r
    );
  }
};
L0.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: "",
  menuName: void 0,
};
var Gi = O.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2,
  }),
  ({ force: e }) => (e ? {} : { "& + &": { display: "none" } })
);
Gi.displayName = "Separator";
var Xy = (e) =>
    e.reduce(
      (t, r, n) =>
        r
          ? o.createElement(
              u.Fragment,
              { key: r.id || r.key || `f-${n}` },
              t,
              n > 0 ? o.createElement(Gi, { key: `s-${n}` }) : null,
              r.render() || r
            )
          : t,
      null
    ),
  Jy = (e) => {
    let t = u.useRef();
    return (
      u.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  Qy = (e, t) => {
    let r = Jy(t);
    return e ? t : r;
  },
  ev = ({ active: e, children: t }) =>
    o.createElement("div", { hidden: !e }, Qy(e, t)),
  tv = ({ alt: e, ...t }) =>
    o.createElement(
      "svg",
      {
        width: "200px",
        height: "40px",
        viewBox: "0 0 200 40",
        ...t,
        role: "img",
      },
      e ? o.createElement("title", null, e) : null,
      o.createElement(
        "defs",
        null,
        o.createElement("path", {
          d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
          id: "a",
        })
      ),
      o.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        o.createElement("path", {
          d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
          fill: "currentColor",
        }),
        o.createElement(
          "mask",
          { id: "b", fill: "#fff" },
          o.createElement("use", { xlinkHref: "#a" })
        ),
        o.createElement("use", {
          fill: "#FF4785",
          fillRule: "nonzero",
          xlinkHref: "#a",
        }),
        o.createElement("path", {
          d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
          fill: "#FFF",
          fillRule: "nonzero",
          mask: "url(#b)",
        })
      )
    ),
  rv = ({ ...e }) =>
    o.createElement(
      "svg",
      { viewBox: "0 0 64 64", ...e },
      o.createElement("title", null, "Storybook icon"),
      o.createElement(
        "g",
        {
          id: "Artboard",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
        },
        o.createElement("path", {
          d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
          id: "path-1",
          fill: "#FF4785",
          fillRule: "nonzero",
        }),
        o.createElement("path", {
          d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
          id: "path9_fill-path",
          fill: "#FFFFFF",
          fillRule: "nonzero",
        }),
        o.createElement("path", {
          d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
          id: "Path",
          fill: "#FFFFFF",
        })
      )
    ),
  nv = Dr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  av = O.div(({ size: e = 32 }) => ({
    borderRadius: "50%",
    cursor: "progress",
    display: "inline-block",
    overflow: "hidden",
    position: "absolute",
    transition: "all 200ms ease-out",
    verticalAlign: "top",
    top: "50%",
    left: "50%",
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(97, 97, 97, 0.29)",
    borderTopColor: "rgb(100,100,100)",
    animation: `${nv} 0.7s linear infinite`,
    mixBlendMode: "difference",
  })),
  ws = O.div({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }),
  ov = O.div(({ theme: e }) => ({
    position: "relative",
    width: "80%",
    marginBottom: "0.75rem",
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: Te(0.8, e.color.secondary),
    overflow: "hidden",
    cursor: "progress",
  })),
  iv = O.div(({ theme: e }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: e.color.secondary,
  })),
  _s = O.div(({ theme: e }) => ({
    minHeight: "2em",
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor,
  })),
  lv = O(Fe)(({ theme: e }) => ({
    width: 20,
    height: 20,
    marginBottom: "0.5rem",
    color: e.textMutedColor,
  })),
  sv = Dr`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  cv = O.span({
    "&::after": {
      content: "'...'",
      animation: `${sv} 1s linear infinite`,
      animationDelay: "1s",
      display: "inline-block",
      width: "1em",
      height: "auto",
    },
  }),
  $0 = ({ progress: e, error: t, size: r, ...n }) => {
    if (t)
      return o.createElement(
        ws,
        {
          "aria-label": t.toString(),
          "aria-live": "polite",
          "role": "status",
          ...n,
        },
        o.createElement(lv, { icon: "lightningoff" }),
        o.createElement(_s, null, t.message)
      );
    if (e) {
      let { value: a, modules: i } = e,
        { message: l } = e;
      return (
        i && (l += ` ${i.complete} / ${i.total} modules`),
        o.createElement(
          ws,
          {
            "aria-label": "Content is loading...",
            "aria-live": "polite",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": a * 100,
            "aria-valuetext": l,
            "role": "progressbar",
            ...n,
          },
          o.createElement(
            ov,
            null,
            o.createElement(iv, { style: { width: `${a * 100}%` } })
          ),
          o.createElement(_s, null, l, a < 1 && o.createElement(cv, { key: l }))
        )
      );
    }
    return o.createElement(av, {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      "role": "status",
      "size": r,
      ...n,
    });
  };
function uv(e) {
  let t = {},
    r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "");
  }
  return t;
}
var I0 = (e, t, r = {}) => {
    let [n, a] = e.split("?"),
      i = a ? { ...uv(a), ...r, id: t } : { ...r, id: t };
    return `${n}?${Object.entries(i)
      .map((l) => `${l[0]}=${l[1]}`)
      .join("&")}`;
  },
  dv = O.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${ie.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${fr.fonts.mono};
  font-size: ${fr.size.s2 - 1}px;
`,
  pv = ({ code: e, ...t }) =>
    o.createElement(dv, { id: "clipboard-code", ...t }, e),
  F0 = v0,
  P0 = {};
Object.keys(v0).forEach((e) => {
  P0[e] = u.forwardRef((t, r) => u.createElement(e, { ...t, ref: r }));
});
const fv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: e0,
      ActionBar: Ci,
      AddonPanel: ev,
      Badge: Fh,
      Bar: Ui,
      Blockquote: t0,
      Button: A0,
      ClipboardCode: pv,
      Code: Mi,
      DL: n0,
      Div: r0,
      DocumentWrapper: jh,
      ErrorFormatter: w0,
      FlexBar: xa,
      Form: tt,
      H1: a0,
      H2: Bi,
      H3: Ni,
      H4: o0,
      H5: i0,
      H6: l0,
      HR: s0,
      IconButton: Xt,
      IconButtonSkeleton: k0,
      Icons: Fe,
      Img: c0,
      LI: u0,
      Link: Hi,
      ListItem: Zi,
      Loader: $0,
      OL: d0,
      P: p0,
      Placeholder: E0,
      Pre: f0,
      ResetWrapper: Vi,
      ScrollArea: ga,
      Separator: Gi,
      Spaced: Wh,
      Span: m0,
      StorybookIcon: rv,
      StorybookLogo: tv,
      Symbols: Ph,
      SyntaxHighlighter: va,
      TT: h0,
      TabBar: Wi,
      TabButton: yn,
      TabWrapper: Yy,
      Table: g0,
      Tabs: wa,
      TabsState: L0,
      TooltipLinkList: zi,
      TooltipMessage: T0,
      TooltipNote: Dy,
      UL: y0,
      WithTooltip: _y,
      WithTooltipPure: R0,
      Zoom: x0,
      codeCommon: kt,
      components: F0,
      createCopyToClipboardFunction: Pu,
      getStoryHref: I0,
      icons: an,
      interleaveSeparators: Xy,
      nameSpaceClassNames: ce,
      resetComponents: P0,
      withReset: de,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var ra = { exports: {} };
ra.exports;
(function (e, t) {
  var r = b1,
    n = t && !t.nodeType && t,
    a = n && !0 && e && !e.nodeType && e,
    i = a && a.exports === n,
    l = i ? r.Buffer : void 0,
    s = l ? l.allocUnsafe : void 0;
  function c(d, p) {
    if (p) return d.slice();
    var h = d.length,
      y = s ? s(h) : new d.constructor(h);
    return d.copy(y), y;
  }
  e.exports = c;
})(ra, ra.exports);
var mv = ra.exports,
  As = E1;
function gv(e) {
  var t = new e.constructor(e.byteLength);
  return new As(t).set(new As(e)), t;
}
var Ki = gv,
  hv = Ki;
function yv(e, t) {
  var r = t ? hv(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var vv = yv;
function bv(e, t) {
  var r = -1,
    n = e.length;
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
  return t;
}
var Ev = bv,
  xv = oa,
  Cs = Object.create,
  wv = (function () {
    function e() {}
    return function (t) {
      if (!xv(t)) return {};
      if (Cs) return Cs(t);
      e.prototype = t;
      var r = new e();
      return (e.prototype = void 0), r;
    };
  })(),
  _v = wv,
  Av = _v,
  Cv = Rc,
  Sv = Tc;
function Rv(e) {
  return typeof e.constructor == "function" && !Sv(e) ? Av(Cv(e)) : {};
}
var Tv = Rv,
  Ov = Oc,
  kv = x1,
  Dv = Object.prototype,
  Lv = Dv.hasOwnProperty;
function $v(e, t, r) {
  var n = e[t];
  (!(Lv.call(e, t) && kv(n, r)) || (r === void 0 && !(t in e))) && Ov(e, t, r);
}
var Yi = $v,
  Iv = Yi,
  Fv = Oc;
function Pv(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var s = t[i],
      c = n ? n(r[s], e[s], s, r, e) : void 0;
    c === void 0 && (c = e[s]), a ? Fv(r, s, c) : Iv(r, s, c);
  }
  return r;
}
var _a = Pv;
function Mv(e) {
  var t = [];
  if (e != null) for (var r in Object(e)) t.push(r);
  return t;
}
var Bv = Mv,
  Nv = oa,
  Vv = Tc,
  Hv = Bv,
  jv = Object.prototype,
  Zv = jv.hasOwnProperty;
function zv(e) {
  if (!Nv(e)) return Hv(e);
  var t = Vv(e),
    r = [];
  for (var n in e) (n == "constructor" && (t || !Zv.call(e, n))) || r.push(n);
  return r;
}
var qv = zv,
  Uv = w1,
  Wv = qv,
  Gv = _1;
function Kv(e) {
  return Gv(e) ? Uv(e, !0) : Wv(e);
}
var Xi = Kv,
  Yv = Object.create,
  M0 = Object.defineProperty,
  Xv = Object.getOwnPropertyDescriptor,
  B0 = Object.getOwnPropertyNames,
  Jv = Object.getPrototypeOf,
  Qv = Object.prototype.hasOwnProperty,
  Qe = (e, t) =>
    function () {
      return t || (0, e[B0(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  eb = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of B0(t))
        !Qv.call(e, a) &&
          a !== r &&
          M0(e, a, {
            get: () => t[a],
            enumerable: !(n = Xv(t, a)) || n.enumerable,
          });
    return e;
  },
  Ji = (e, t, r) => (
    (r = e != null ? Yv(Jv(e)) : {}),
    eb(
      t || !e || !e.__esModule
        ? M0(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  tb = [
    "bubbles",
    "cancelBubble",
    "cancelable",
    "composed",
    "currentTarget",
    "defaultPrevented",
    "eventPhase",
    "isTrusted",
    "returnValue",
    "srcElement",
    "target",
    "timeStamp",
    "type",
  ],
  rb = ["detail"];
function nb(e) {
  const t = tb
    .filter((r) => e[r] !== void 0)
    .reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return (
    e instanceof CustomEvent &&
      rb
        .filter((r) => e[r] !== void 0)
        .forEach((r) => {
          t[r] = e[r];
        }),
    t
  );
}
var N0 = Qe({
    "node_modules/has-symbols/shams.js"(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var n = {},
          a = Symbol("test"),
          i = Object(a);
        if (
          typeof a == "string" ||
          Object.prototype.toString.call(a) !== "[object Symbol]" ||
          Object.prototype.toString.call(i) !== "[object Symbol]"
        )
          return !1;
        var l = 42;
        n[a] = l;
        for (a in n) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1;
        var s = Object.getOwnPropertySymbols(n);
        if (
          s.length !== 1 ||
          s[0] !== a ||
          !Object.prototype.propertyIsEnumerable.call(n, a)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var c = Object.getOwnPropertyDescriptor(n, a);
          if (c.value !== l || c.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  V0 = Qe({
    "node_modules/has-symbols/index.js"(e, t) {
      var r = typeof Symbol < "u" && Symbol,
        n = N0();
      t.exports = function () {
        return typeof r != "function" ||
          typeof Symbol != "function" ||
          typeof r("foo") != "symbol" ||
          typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    },
  }),
  ab = Qe({
    "node_modules/function-bind/implementation.js"(e, t) {
      var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        a = Object.prototype.toString,
        i = "[object Function]";
      t.exports = function (s) {
        var c = this;
        if (typeof c != "function" || a.call(c) !== i)
          throw new TypeError(r + c);
        for (
          var d = n.call(arguments, 1),
            p,
            h = function () {
              if (this instanceof p) {
                var x = c.apply(this, d.concat(n.call(arguments)));
                return Object(x) === x ? x : this;
              } else return c.apply(s, d.concat(n.call(arguments)));
            },
            y = Math.max(0, c.length - d.length),
            f = [],
            g = 0;
          g < y;
          g++
        )
          f.push("$" + g);
        if (
          ((p = Function(
            "binder",
            "return function (" +
              f.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(h)),
          c.prototype)
        ) {
          var m = function () {};
          (m.prototype = c.prototype),
            (p.prototype = new m()),
            (m.prototype = null);
        }
        return p;
      };
    },
  }),
  Qi = Qe({
    "node_modules/function-bind/index.js"(e, t) {
      var r = ab();
      t.exports = Function.prototype.bind || r;
    },
  }),
  ob = Qe({
    "node_modules/has/src/index.js"(e, t) {
      var r = Qi();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  }),
  H0 = Qe({
    "node_modules/get-intrinsic/index.js"(e, t) {
      var r,
        n = SyntaxError,
        a = Function,
        i = TypeError,
        l = function (I) {
          try {
            return a('"use strict"; return (' + I + ").constructor;")();
          } catch {}
        },
        s = Object.getOwnPropertyDescriptor;
      if (s)
        try {
          s({}, "");
        } catch {
          s = null;
        }
      var c = function () {
          throw new i();
        },
        d = s
          ? (function () {
              try {
                return arguments.callee, c;
              } catch {
                try {
                  return s(arguments, "callee").get;
                } catch {
                  return c;
                }
              }
            })()
          : c,
        p = V0()(),
        h =
          Object.getPrototypeOf ||
          function (I) {
            return I.__proto__;
          },
        y = {},
        f = typeof Uint8Array > "u" ? r : h(Uint8Array),
        g = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": p ? h([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": y,
          "%AsyncGenerator%": y,
          "%AsyncGeneratorFunction%": y,
          "%AsyncIteratorPrototype%": y,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
          "%Function%": a,
          "%GeneratorFunction%": y,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": p ? h(h([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !p ? r : h(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !p ? r : h(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": p ? h(""[Symbol.iterator]()) : r,
          "%Symbol%": p ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": d,
          "%TypedArray%": f,
          "%TypeError%": i,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        m = function I($) {
          var M;
          if ($ === "%AsyncFunction%") M = l("async function () {}");
          else if ($ === "%GeneratorFunction%") M = l("function* () {}");
          else if ($ === "%AsyncGeneratorFunction%")
            M = l("async function* () {}");
          else if ($ === "%AsyncGenerator%") {
            var F = I("%AsyncGeneratorFunction%");
            F && (M = F.prototype);
          } else if ($ === "%AsyncIteratorPrototype%") {
            var P = I("%AsyncGenerator%");
            P && (M = h(P.prototype));
          }
          return (g[$] = M), M;
        },
        x = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        v = Qi(),
        E = ob(),
        b = v.call(Function.call, Array.prototype.concat),
        w = v.call(Function.apply, Array.prototype.splice),
        _ = v.call(Function.call, String.prototype.replace),
        A = v.call(Function.call, String.prototype.slice),
        S = v.call(Function.call, RegExp.prototype.exec),
        C =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        k = /\\(\\)?/g,
        D = function ($) {
          var M = A($, 0, 1),
            F = A($, -1);
          if (M === "%" && F !== "%")
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if (F === "%" && M !== "%")
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var P = [];
          return (
            _($, C, function (j, z, V, Z) {
              P[P.length] = V ? _(Z, k, "$1") : z || j;
            }),
            P
          );
        },
        L = function ($, M) {
          var F = $,
            P;
          if ((E(x, F) && ((P = x[F]), (F = "%" + P[0] + "%")), E(g, F))) {
            var j = g[F];
            if ((j === y && (j = m(F)), typeof j > "u" && !M))
              throw new i(
                "intrinsic " +
                  $ +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: P, name: F, value: j };
          }
          throw new n("intrinsic " + $ + " does not exist!");
        };
      t.exports = function ($, M) {
        if (typeof $ != "string" || $.length === 0)
          throw new i("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof M != "boolean")
          throw new i('"allowMissing" argument must be a boolean');
        if (S(/^%?[^%]*%?$/, $) === null)
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var F = D($),
          P = F.length > 0 ? F[0] : "",
          j = L("%" + P + "%", M),
          z = j.name,
          V = j.value,
          Z = !1,
          ee = j.alias;
        ee && ((P = ee[0]), w(F, b([0, 1], ee)));
        for (var oe = 1, X = !0; oe < F.length; oe += 1) {
          var Y = F[oe],
            H = A(Y, 0, 1),
            W = A(Y, -1);
          if (
            (H === '"' ||
              H === "'" ||
              H === "`" ||
              W === '"' ||
              W === "'" ||
              W === "`") &&
            H !== W
          )
            throw new n("property names with quotes must have matching quotes");
          if (
            ((Y === "constructor" || !X) && (Z = !0),
            (P += "." + Y),
            (z = "%" + P + "%"),
            E(g, z))
          )
            V = g[z];
          else if (V != null) {
            if (!(Y in V)) {
              if (!M)
                throw new i(
                  "base intrinsic for " +
                    $ +
                    " exists, but the property is not available."
                );
              return;
            }
            if (s && oe + 1 >= F.length) {
              var B = s(V, Y);
              (X = !!B),
                X && "get" in B && !("originalValue" in B.get)
                  ? (V = B.get)
                  : (V = V[Y]);
            } else (X = E(V, Y)), (V = V[Y]);
            X && !Z && (g[z] = V);
          }
        }
        return V;
      };
    },
  }),
  ib = Qe({
    "node_modules/call-bind/index.js"(e, t) {
      var r = Qi(),
        n = H0(),
        a = n("%Function.prototype.apply%"),
        i = n("%Function.prototype.call%"),
        l = n("%Reflect.apply%", !0) || r.call(i, a),
        s = n("%Object.getOwnPropertyDescriptor%", !0),
        c = n("%Object.defineProperty%", !0),
        d = n("%Math.max%");
      if (c)
        try {
          c({}, "a", { value: 1 });
        } catch {
          c = null;
        }
      t.exports = function (y) {
        var f = l(r, i, arguments);
        if (s && c) {
          var g = s(f, "length");
          g.configurable &&
            c(f, "length", {
              value: 1 + d(0, y.length - (arguments.length - 1)),
            });
        }
        return f;
      };
      var p = function () {
        return l(r, a, arguments);
      };
      c ? c(t.exports, "apply", { value: p }) : (t.exports.apply = p);
    },
  }),
  lb = Qe({
    "node_modules/call-bind/callBound.js"(e, t) {
      var r = H0(),
        n = ib(),
        a = n(r("String.prototype.indexOf"));
      t.exports = function (l, s) {
        var c = r(l, !!s);
        return typeof c == "function" && a(l, ".prototype.") > -1 ? n(c) : c;
      };
    },
  }),
  sb = Qe({
    "node_modules/has-tostringtag/shams.js"(e, t) {
      var r = N0();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  cb = Qe({
    "node_modules/is-regex/index.js"(e, t) {
      var r = lb(),
        n = sb()(),
        a,
        i,
        l,
        s;
      n &&
        ((a = r("Object.prototype.hasOwnProperty")),
        (i = r("RegExp.prototype.exec")),
        (l = {}),
        (c = function () {
          throw l;
        }),
        (s = { toString: c, valueOf: c }),
        typeof Symbol.toPrimitive == "symbol" && (s[Symbol.toPrimitive] = c));
      var c,
        d = r("Object.prototype.toString"),
        p = Object.getOwnPropertyDescriptor,
        h = "[object RegExp]";
      t.exports = n
        ? function (f) {
            if (!f || typeof f != "object") return !1;
            var g = p(f, "lastIndex"),
              m = g && a(g, "value");
            if (!m) return !1;
            try {
              i(f, s);
            } catch (x) {
              return x === l;
            }
          }
        : function (f) {
            return !f || (typeof f != "object" && typeof f != "function")
              ? !1
              : d(f) === h;
          };
    },
  }),
  ub = Qe({
    "node_modules/is-function/index.js"(e, t) {
      t.exports = n;
      var r = Object.prototype.toString;
      function n(a) {
        if (!a) return !1;
        var i = r.call(a);
        return (
          i === "[object Function]" ||
          (typeof a == "function" && i !== "[object RegExp]") ||
          (typeof window < "u" &&
            (a === window.setTimeout ||
              a === window.alert ||
              a === window.confirm ||
              a === window.prompt))
        );
      }
    },
  }),
  db = Qe({
    "node_modules/is-symbol/index.js"(e, t) {
      var r = Object.prototype.toString,
        n = V0()();
      n
        ? ((a = Symbol.prototype.toString),
          (i = /^Symbol\(.*\)$/),
          (l = function (c) {
            return typeof c.valueOf() != "symbol" ? !1 : i.test(a.call(c));
          }),
          (t.exports = function (c) {
            if (typeof c == "symbol") return !0;
            if (r.call(c) !== "[object Symbol]") return !1;
            try {
              return l(c);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (c) {
            return !1;
          });
      var a, i, l;
    },
  }),
  pb = Ji(cb()),
  fb = Ji(ub()),
  mb = Ji(db());
function gb(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var hb =
    typeof global == "object" && global && global.Object === Object && global,
  yb = hb,
  vb = typeof self == "object" && self && self.Object === Object && self,
  bb = yb || vb || Function("return this")(),
  el = bb,
  Eb = el.Symbol,
  Sr = Eb,
  j0 = Object.prototype,
  xb = j0.hasOwnProperty,
  wb = j0.toString,
  zr = Sr ? Sr.toStringTag : void 0;
function _b(e) {
  var t = xb.call(e, zr),
    r = e[zr];
  try {
    e[zr] = void 0;
    var n = !0;
  } catch {}
  var a = wb.call(e);
  return n && (t ? (e[zr] = r) : delete e[zr]), a;
}
var Ab = _b,
  Cb = Object.prototype,
  Sb = Cb.toString;
function Rb(e) {
  return Sb.call(e);
}
var Tb = Rb,
  Ob = "[object Null]",
  kb = "[object Undefined]",
  Ss = Sr ? Sr.toStringTag : void 0;
function Db(e) {
  return e == null
    ? e === void 0
      ? kb
      : Ob
    : Ss && Ss in Object(e)
    ? Ab(e)
    : Tb(e);
}
var Lb = Db,
  Rs = Sr ? Sr.prototype : void 0;
Rs && Rs.toString;
function $b(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Z0 = $b,
  Ib = "[object AsyncFunction]",
  Fb = "[object Function]",
  Pb = "[object GeneratorFunction]",
  Mb = "[object Proxy]";
function Bb(e) {
  if (!Z0(e)) return !1;
  var t = Lb(e);
  return t == Fb || t == Pb || t == Ib || t == Mb;
}
var Nb = Bb,
  Vb = el["__core-js_shared__"],
  Qa = Vb,
  Ts = (function () {
    var e = /[^.]+$/.exec((Qa && Qa.keys && Qa.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function Hb(e) {
  return !!Ts && Ts in e;
}
var jb = Hb,
  Zb = Function.prototype,
  zb = Zb.toString;
function qb(e) {
  if (e != null) {
    try {
      return zb.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Ub = qb,
  Wb = /[\\^$.*+?()[\]{}|]/g,
  Gb = /^\[object .+?Constructor\]$/,
  Kb = Function.prototype,
  Yb = Object.prototype,
  Xb = Kb.toString,
  Jb = Yb.hasOwnProperty,
  Qb = RegExp(
    "^" +
      Xb.call(Jb)
        .replace(Wb, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function e3(e) {
  if (!Z0(e) || jb(e)) return !1;
  var t = Nb(e) ? Qb : Gb;
  return t.test(Ub(e));
}
var t3 = e3;
function r3(e, t) {
  return e == null ? void 0 : e[t];
}
var n3 = r3;
function a3(e, t) {
  var r = n3(e, t);
  return t3(r) ? r : void 0;
}
var z0 = a3;
function o3(e, t) {
  return e === t || (e !== e && t !== t);
}
var i3 = o3,
  l3 = z0(Object, "create"),
  on = l3;
function s3() {
  (this.__data__ = on ? on(null) : {}), (this.size = 0);
}
var c3 = s3;
function u3(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var d3 = u3,
  p3 = "__lodash_hash_undefined__",
  f3 = Object.prototype,
  m3 = f3.hasOwnProperty;
function g3(e) {
  var t = this.__data__;
  if (on) {
    var r = t[e];
    return r === p3 ? void 0 : r;
  }
  return m3.call(t, e) ? t[e] : void 0;
}
var h3 = g3,
  y3 = Object.prototype,
  v3 = y3.hasOwnProperty;
function b3(e) {
  var t = this.__data__;
  return on ? t[e] !== void 0 : v3.call(t, e);
}
var E3 = b3,
  x3 = "__lodash_hash_undefined__";
function w3(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = on && t === void 0 ? x3 : t),
    this
  );
}
var _3 = w3;
function $r(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
$r.prototype.clear = c3;
$r.prototype.delete = d3;
$r.prototype.get = h3;
$r.prototype.has = E3;
$r.prototype.set = _3;
var Os = $r;
function A3() {
  (this.__data__ = []), (this.size = 0);
}
var C3 = A3;
function S3(e, t) {
  for (var r = e.length; r--; ) if (i3(e[r][0], t)) return r;
  return -1;
}
var Aa = S3,
  R3 = Array.prototype,
  T3 = R3.splice;
function O3(e) {
  var t = this.__data__,
    r = Aa(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : T3.call(t, r, 1), --this.size, !0;
}
var k3 = O3;
function D3(e) {
  var t = this.__data__,
    r = Aa(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var L3 = D3;
function $3(e) {
  return Aa(this.__data__, e) > -1;
}
var I3 = $3;
function F3(e, t) {
  var r = this.__data__,
    n = Aa(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var P3 = F3;
function Ir(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ir.prototype.clear = C3;
Ir.prototype.delete = k3;
Ir.prototype.get = L3;
Ir.prototype.has = I3;
Ir.prototype.set = P3;
var M3 = Ir,
  B3 = z0(el, "Map"),
  N3 = B3;
function V3() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Os(),
      map: new (N3 || M3)(),
      string: new Os(),
    });
}
var H3 = V3;
function j3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var Z3 = j3;
function z3(e, t) {
  var r = e.__data__;
  return Z3(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ca = z3;
function q3(e) {
  var t = Ca(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var U3 = q3;
function W3(e) {
  return Ca(this, e).get(e);
}
var G3 = W3;
function K3(e) {
  return Ca(this, e).has(e);
}
var Y3 = K3;
function X3(e, t) {
  var r = Ca(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var J3 = X3;
function Fr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fr.prototype.clear = H3;
Fr.prototype.delete = U3;
Fr.prototype.get = G3;
Fr.prototype.has = Y3;
Fr.prototype.set = J3;
var q0 = Fr,
  Q3 = "Expected a function";
function tl(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(Q3);
  var r = function () {
    var n = arguments,
      a = t ? t.apply(this, n) : n[0],
      i = r.cache;
    if (i.has(a)) return i.get(a);
    var l = e.apply(this, n);
    return (r.cache = i.set(a, l) || i), l;
  };
  return (r.cache = new (tl.Cache || q0)()), r;
}
tl.Cache = q0;
var e7 = tl,
  t7 = 500;
function r7(e) {
  var t = e7(e, function (n) {
      return r.size === t7 && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var n7 = r7,
  a7 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  o7 = /\\(\\)?/g;
n7(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(""),
    e.replace(a7, function (r, n, a, i) {
      t.push(a ? i.replace(o7, "$1") : n || r);
    }),
    t
  );
});
var i7 = gb,
  l7 = (e) => {
    let t = null,
      r = !1,
      n = !1,
      a = !1,
      i = "";
    if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
      for (let l = 0; l < e.length; l += 1)
        !t && !r && !n && !a
          ? e[l] === '"' || e[l] === "'" || e[l] === "`"
            ? (t = e[l])
            : e[l] === "/" && e[l + 1] === "*"
            ? (r = !0)
            : e[l] === "/" && e[l + 1] === "/"
            ? (n = !0)
            : e[l] === "/" && e[l + 1] !== "/" && (a = !0)
          : (t &&
              ((e[l] === t && e[l - 1] !== "\\") ||
                (e[l] ===
                  `
` &&
                  t !== "`")) &&
              (t = null),
            a &&
              ((e[l] === "/" && e[l - 1] !== "\\") ||
                e[l] ===
                  `
`) &&
              (a = !1),
            r && e[l - 1] === "/" && e[l - 2] === "*" && (r = !1),
            n &&
              e[l] ===
                `
` &&
              (n = !1)),
          !r && !n && (i += e[l]);
    else i = e;
    return i;
  },
  s7 = tr(1e4)((e) => l7(e).replace(/\n\s*/g, "").trim()),
  c7 = function (t, r) {
    const n = r.slice(0, r.indexOf("{")),
      a = r.slice(r.indexOf("{"));
    if (n.includes("=>") || n.includes("function")) return r;
    let i = n;
    return (i = i.replace(t, "function")), i + a;
  },
  u7 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function U0(e) {
  if (!i7(e)) return e;
  let t = e,
    r = !1;
  return (
    typeof Event < "u" && e instanceof Event && ((t = nb(t)), (r = !0)),
    (t = Object.keys(t).reduce((n, a) => {
      try {
        t[a] && t[a].toJSON, (n[a] = t[a]);
      } catch {
        r = !0;
      }
      return n;
    }, {})),
    r ? t : e
  );
}
var d7 = function (t) {
    let r, n, a, i;
    return function (s, c) {
      try {
        if (s === "")
          return (
            (i = []), (r = new Map([[c, "[]"]])), (n = new Map()), (a = []), c
          );
        const d = n.get(this) || this;
        for (; a.length && d !== a[0]; ) a.shift(), i.pop();
        if (typeof c == "boolean") return c;
        if (c === void 0) return t.allowUndefined ? "_undefined_" : void 0;
        if (c === null) return null;
        if (typeof c == "number")
          return c === -1 / 0
            ? "_-Infinity_"
            : c === 1 / 0
            ? "_Infinity_"
            : Number.isNaN(c)
            ? "_NaN_"
            : c;
        if (typeof c == "bigint") return `_bigint_${c.toString()}`;
        if (typeof c == "string")
          return u7.test(c) ? (t.allowDate ? `_date_${c}` : void 0) : c;
        if ((0, pb.default)(c))
          return t.allowRegExp ? `_regexp_${c.flags}|${c.source}` : void 0;
        if ((0, fb.default)(c)) {
          if (!t.allowFunction) return;
          const { name: h } = c,
            y = c.toString();
          return y.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${h}|${(() => {}).toString()}`
            : `_function_${h}|${s7(c7(s, y))}`;
        }
        if ((0, mb.default)(c)) {
          if (!t.allowSymbol) return;
          const h = Symbol.keyFor(c);
          return h !== void 0
            ? `_gsymbol_${h}`
            : `_symbol_${c.toString().slice(7, -1)}`;
        }
        if (a.length >= t.maxDepth)
          return Array.isArray(c) ? `[Array(${c.length})]` : "[Object]";
        if (c === this) return `_duplicate_${JSON.stringify(i)}`;
        if (
          c.constructor &&
          c.constructor.name &&
          c.constructor.name !== "Object" &&
          !Array.isArray(c) &&
          !t.allowClass
        )
          return;
        const p = r.get(c);
        if (!p) {
          const h = Array.isArray(c) ? c : U0(c);
          if (
            c.constructor &&
            c.constructor.name &&
            c.constructor.name !== "Object" &&
            !Array.isArray(c) &&
            t.allowClass
          )
            try {
              Object.assign(h, { "_constructor-name_": c.constructor.name });
            } catch {}
          return (
            i.push(s),
            a.unshift(h),
            r.set(c, JSON.stringify(i)),
            c !== h && n.set(c, h),
            h
          );
        }
        return `_duplicate_${p}`;
      } catch {
        return;
      }
    };
  },
  p7 = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  },
  f7 = (e, t = {}) => {
    const r = { ...p7, ...t };
    return JSON.stringify(U0(e), d7(r), t.space);
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ /**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var m7 = Yi,
  g7 = kc,
  h7 = A1,
  ks = oa,
  y7 = C1;
function v7(e, t, r, n) {
  if (!ks(e)) return e;
  t = g7(t, e);
  for (var a = -1, i = t.length, l = i - 1, s = e; s != null && ++a < i; ) {
    var c = y7(t[a]),
      d = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
    if (a != l) {
      var p = s[c];
      (d = n ? n(p, c, s) : void 0),
        d === void 0 && (d = ks(p) ? p : h7(t[a + 1]) ? [] : {});
    }
    m7(s, c, d), (s = s[c]);
  }
  return e;
}
var b7 = v7,
  E7 = S1,
  x7 = b7,
  w7 = kc;
function _7(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var l = t[n],
      s = E7(e, l);
    r(s, l) && x7(i, w7(l, e), s);
  }
  return i;
}
var A7 = _7,
  nt = (e) => `control-${e.replace(/\s+/g, "-")}`,
  Sa = (e) => `set-${e.replace(/\s+/g, "-")}`;
function C7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ln(e, t) {
  return (
    (ln = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    ln(e, t)
  );
}
function S7(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ln(e, t);
}
function Bo(e) {
  return (
    (Bo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bo(e)
  );
}
function R7(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function T7() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Zn(e, t, r) {
  return (
    T7()
      ? (Zn = Reflect.construct.bind())
      : (Zn = function (a, i, l) {
          var s = [null];
          s.push.apply(s, i);
          var c = Function.bind.apply(a, s),
            d = new c();
          return l && ln(d, l.prototype), d;
        }),
    Zn.apply(null, arguments)
  );
}
function No(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (No = function (n) {
      if (n === null || !R7(n)) return n;
      if (typeof n != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return Zn(n, arguments, Bo(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        ln(a, n)
      );
    }),
    No(e)
  );
}
var ht = (function (e) {
  S7(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            r +
            " for more information."
        ) || this),
      C7(n)
    );
  }
  return t;
})(No(Error));
function eo(e) {
  return Math.round(e * 255);
}
function O7(e, t, r) {
  return eo(e) + "," + eo(t) + "," + eo(r);
}
function sn(e, t, r, n) {
  if ((n === void 0 && (n = O7), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    i = (1 - Math.abs(2 * r - 1)) * t,
    l = i * (1 - Math.abs((a % 2) - 1)),
    s = 0,
    c = 0,
    d = 0;
  a >= 0 && a < 1
    ? ((s = i), (c = l))
    : a >= 1 && a < 2
    ? ((s = l), (c = i))
    : a >= 2 && a < 3
    ? ((c = i), (d = l))
    : a >= 3 && a < 4
    ? ((c = l), (d = i))
    : a >= 4 && a < 5
    ? ((s = l), (d = i))
    : a >= 5 && a < 6 && ((s = i), (d = l));
  var p = r - i / 2,
    h = s + p,
    y = c + p,
    f = d + p;
  return n(h, y, f);
}
var Ds = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function k7(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Ds[t] ? "#" + Ds[t] : e;
}
var D7 = /^#[a-fA-F0-9]{6}$/,
  L7 = /^#[a-fA-F0-9]{8}$/,
  $7 = /^#[a-fA-F0-9]{3}$/,
  I7 = /^#[a-fA-F0-9]{4}$/,
  to = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  F7 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  P7 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  M7 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ra(e) {
  if (typeof e != "string") throw new ht(3);
  var t = k7(e);
  if (t.match(D7))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(L7)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match($7))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(I7)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = to.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10),
    };
  var i = F7.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha:
        parseFloat("" + i[4]) > 1
          ? parseFloat("" + i[4]) / 100
          : parseFloat("" + i[4]),
    };
  var l = P7.exec(t);
  if (l) {
    var s = parseInt("" + l[1], 10),
      c = parseInt("" + l[2], 10) / 100,
      d = parseInt("" + l[3], 10) / 100,
      p = "rgb(" + sn(s, c, d) + ")",
      h = to.exec(p);
    if (!h) throw new ht(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10),
    };
  }
  var y = M7.exec(t.substring(0, 50));
  if (y) {
    var f = parseInt("" + y[1], 10),
      g = parseInt("" + y[2], 10) / 100,
      m = parseInt("" + y[3], 10) / 100,
      x = "rgb(" + sn(f, g, m) + ")",
      v = to.exec(x);
    if (!v) throw new ht(4, t, x);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10),
      alpha:
        parseFloat("" + y[4]) > 1
          ? parseFloat("" + y[4]) / 100
          : parseFloat("" + y[4]),
    };
  }
  throw new ht(5);
}
function B7(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    i = Math.min(t, r, n),
    l = (a + i) / 2;
  if (a === i)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: l, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: l };
  var s,
    c = a - i,
    d = l > 0.5 ? c / (2 - a - i) : c / (a + i);
  switch (a) {
    case t:
      s = (r - n) / c + (r < n ? 6 : 0);
      break;
    case r:
      s = (n - t) / c + 2;
      break;
    default:
      s = (t - r) / c + 4;
      break;
  }
  return (
    (s *= 60),
    e.alpha !== void 0
      ? { hue: s, saturation: d, lightness: l, alpha: e.alpha }
      : { hue: s, saturation: d, lightness: l }
  );
}
function W0(e) {
  return B7(Ra(e));
}
var N7 = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? "#" + t[1] + t[3] + t[5]
      : t;
  },
  Vo = N7;
function Ut(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ro(e) {
  return Ut(Math.round(e * 255));
}
function V7(e, t, r) {
  return Vo("#" + ro(e) + ro(t) + ro(r));
}
function na(e, t, r) {
  return sn(e, t, r, V7);
}
function H7(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return na(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return na(e.hue, e.saturation, e.lightness);
  throw new ht(1);
}
function j7(e, t, r, n) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof r == "number" &&
    typeof n == "number"
  )
    return n >= 1 ? na(e, t, r) : "rgba(" + sn(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? na(e.hue, e.saturation, e.lightness)
      : "rgba(" + sn(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new ht(2);
}
function Ho(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Vo("#" + Ut(e) + Ut(t) + Ut(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Vo("#" + Ut(e.red) + Ut(e.green) + Ut(e.blue));
  throw new ht(6);
}
function At(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = Ra(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof r == "number" &&
      typeof n == "number"
    )
      return n >= 1
        ? Ho(e, t, r)
        : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Ho(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new ht(7);
}
var Z7 = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  z7 = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      typeof t.alpha == "number"
    );
  },
  q7 = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  U7 = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      typeof t.alpha == "number"
    );
  };
function G0(e) {
  if (typeof e != "object") throw new ht(8);
  if (z7(e)) return At(e);
  if (Z7(e)) return Ho(e);
  if (U7(e)) return j7(e);
  if (q7(e)) return H7(e);
  throw new ht(8);
}
function K0(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : K0(e, t, a);
  };
}
function Ta(e) {
  return K0(e, e.length, []);
}
function Oa(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function W7(e, t) {
  if (t === "transparent") return t;
  var r = W0(t);
  return G0(ae({}, r, { lightness: Oa(0, 1, r.lightness - parseFloat(e)) }));
}
var G7 = Ta(W7),
  ct = G7;
function K7(e, t) {
  if (t === "transparent") return t;
  var r = W0(t);
  return G0(ae({}, r, { lightness: Oa(0, 1, r.lightness + parseFloat(e)) }));
}
var Y7 = Ta(K7),
  Wt = Y7;
function X7(e, t) {
  if (t === "transparent") return t;
  var r = Ra(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = ae({}, r, { alpha: Oa(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return At(a);
}
var J7 = Ta(X7),
  On = J7;
function Q7(e, t) {
  if (t === "transparent") return t;
  var r = Ra(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    a = ae({}, r, {
      alpha: Oa(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return At(a);
}
var eE = Ta(Q7),
  ue = eE,
  tE = R1,
  rE = Rc,
  nE = Dc,
  aE = T1,
  oE = Object.getOwnPropertySymbols,
  iE = oE
    ? function (e) {
        for (var t = []; e; ) tE(t, nE(e)), (e = rE(e));
        return t;
      }
    : aE,
  Y0 = iE,
  lE = O1,
  sE = Y0,
  cE = Xi;
function uE(e) {
  return lE(e, cE, sE);
}
var X0 = uE,
  dE = k1,
  pE = D1,
  fE = A7,
  mE = X0;
function gE(e, t) {
  if (e == null) return {};
  var r = dE(mE(e), function (n) {
    return [n];
  });
  return (
    (t = pE(t)),
    fE(e, r, function (n, a) {
      return t(n, a[0]);
    })
  );
}
var hE = gE;
const yE = dn(hE);
function Ls(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function be(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (a) {
    if ((e == null || e(a), r === !1 || !a.defaultPrevented))
      return t == null ? void 0 : t(a);
  };
}
function rl(e, t = []) {
  let r = [];
  function n(i, l) {
    const s = u.createContext(l),
      c = r.length;
    r = [...r, l];
    function d(h) {
      const { scope: y, children: f, ...g } = h,
        m = (y == null ? void 0 : y[e][c]) || s,
        x = u.useMemo(() => g, Object.values(g));
      return u.createElement(m.Provider, { value: x }, f);
    }
    function p(h, y) {
      const f = (y == null ? void 0 : y[e][c]) || s,
        g = u.useContext(f);
      if (g) return g;
      if (l !== void 0) return l;
      throw new Error(`\`${h}\` must be used within \`${i}\``);
    }
    return (d.displayName = i + "Provider"), [d, p];
  }
  const a = () => {
    const i = r.map((l) => u.createContext(l));
    return function (s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: c } }), [s, c]);
    };
  };
  return (a.scopeName = e), [n, vE(a, ...t)];
}
function vE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (i) {
      const l = n.reduce((s, { useScope: c, scopeName: d }) => {
        const h = c(i)[`__scope${d}`];
        return { ...s, ...h };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function bE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function J0(...e) {
  return (t) => e.forEach((r) => bE(r, t));
}
function ke(...e) {
  return u.useCallback(J0(...e), e);
}
const cn = u.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    a = u.Children.toArray(r),
    i = a.find(xE);
  if (i) {
    const l = i.props.children,
      s = a.map((c) =>
        c === i
          ? u.Children.count(l) > 1
            ? u.Children.only(null)
            : u.isValidElement(l)
            ? l.props.children
            : null
          : c
      );
    return u.createElement(
      jo,
      ae({}, n, { ref: t }),
      u.isValidElement(l) ? u.cloneElement(l, void 0, s) : null
    );
  }
  return u.createElement(jo, ae({}, n, { ref: t }), r);
});
cn.displayName = "Slot";
const jo = u.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return u.isValidElement(r)
    ? u.cloneElement(r, { ...wE(n, r.props), ref: t ? J0(t, r.ref) : r.ref })
    : u.Children.count(r) > 1
    ? u.Children.only(null)
    : null;
});
jo.displayName = "SlotClone";
const EE = ({ children: e }) => u.createElement(u.Fragment, null, e);
function xE(e) {
  return u.isValidElement(e) && e.type === EE;
}
function wE(e, t) {
  const r = { ...t };
  for (const n in t) {
    const a = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? a && i
        ? (r[n] = (...s) => {
            i(...s), a(...s);
          })
        : a && (r[n] = a)
      : n === "style"
      ? (r[n] = { ...a, ...i })
      : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function _E(e) {
  const t = e + "CollectionProvider",
    [r, n] = rl(t),
    [a, i] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (f) => {
      const { scope: g, children: m } = f,
        x = o.useRef(null),
        v = o.useRef(new Map()).current;
      return o.createElement(a, { scope: g, itemMap: v, collectionRef: x }, m);
    },
    s = e + "CollectionSlot",
    c = o.forwardRef((f, g) => {
      const { scope: m, children: x } = f,
        v = i(s, m),
        E = ke(g, v.collectionRef);
      return o.createElement(cn, { ref: E }, x);
    }),
    d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    h = o.forwardRef((f, g) => {
      const { scope: m, children: x, ...v } = f,
        E = o.useRef(null),
        b = ke(g, E),
        w = i(d, m);
      return (
        o.useEffect(
          () => (
            w.itemMap.set(E, { ref: E, ...v }), () => void w.itemMap.delete(E)
          )
        ),
        o.createElement(cn, { [p]: "", ref: b }, x)
      );
    });
  function y(f) {
    const g = i(e + "CollectionConsumer", f);
    return o.useCallback(() => {
      const x = g.collectionRef.current;
      if (!x) return [];
      const v = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(g.itemMap.values()).sort(
        (w, _) => v.indexOf(w.ref.current) - v.indexOf(_.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: l, Slot: c, ItemSlot: h }, y, n];
}
const AE = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Re = AE.reduce((e, t) => {
    const r = u.forwardRef((n, a) => {
      const { asChild: i, ...l } = n,
        s = i ? cn : t;
      return (
        u.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        u.createElement(s, ae({}, l, { ref: a }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function CE(e, t) {
  e && un.flushSync(() => e.dispatchEvent(t));
}
function er(e) {
  const t = u.useRef(e);
  return (
    u.useEffect(() => {
      t.current = e;
    }),
    u.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...r);
        },
      []
    )
  );
}
function SE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = er(e);
  u.useEffect(() => {
    const n = (a) => {
      a.key === "Escape" && r(a);
    };
    return (
      t.addEventListener("keydown", n),
      () => t.removeEventListener("keydown", n)
    );
  }, [r, t]);
}
const Zo = "dismissableLayer.update",
  RE = "dismissableLayer.pointerDownOutside",
  TE = "dismissableLayer.focusOutside";
let $s;
const OE = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  kE = u.forwardRef((e, t) => {
    var r;
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: c,
        ...d
      } = e,
      p = u.useContext(OE),
      [h, y] = u.useState(null),
      f =
        (r = h == null ? void 0 : h.ownerDocument) !== null && r !== void 0
          ? r
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, g] = u.useState({}),
      m = ke(t, (C) => y(C)),
      x = Array.from(p.layers),
      [v] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      E = x.indexOf(v),
      b = h ? x.indexOf(h) : -1,
      w = p.layersWithOutsidePointerEventsDisabled.size > 0,
      _ = b >= E,
      A = DE((C) => {
        const k = C.target,
          D = [...p.branches].some((L) => L.contains(k));
        !_ ||
          D ||
          (i == null || i(C),
          s == null || s(C),
          C.defaultPrevented || c == null || c());
      }, f),
      S = LE((C) => {
        const k = C.target;
        [...p.branches].some((L) => L.contains(k)) ||
          (l == null || l(C),
          s == null || s(C),
          C.defaultPrevented || c == null || c());
      }, f);
    return (
      SE((C) => {
        b === p.layers.size - 1 &&
          (a == null || a(C),
          !C.defaultPrevented && c && (C.preventDefault(), c()));
      }, f),
      u.useEffect(() => {
        if (h)
          return (
            n &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                (($s = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(h)),
            p.layers.add(h),
            Is(),
            () => {
              n &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = $s);
            }
          );
      }, [h, f, n, p]),
      u.useEffect(
        () => () => {
          h &&
            (p.layers.delete(h),
            p.layersWithOutsidePointerEventsDisabled.delete(h),
            Is());
        },
        [h, p]
      ),
      u.useEffect(() => {
        const C = () => g({});
        return (
          document.addEventListener(Zo, C),
          () => document.removeEventListener(Zo, C)
        );
      }, []),
      u.createElement(
        Re.div,
        ae({}, d, {
          ref: m,
          style: {
            pointerEvents: w ? (_ ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: be(e.onFocusCapture, S.onFocusCapture),
          onBlurCapture: be(e.onBlurCapture, S.onBlurCapture),
          onPointerDownCapture: be(
            e.onPointerDownCapture,
            A.onPointerDownCapture
          ),
        })
      )
    );
  });
function DE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = er(e),
    n = u.useRef(!1),
    a = u.useRef(() => {});
  return (
    u.useEffect(() => {
      const i = (s) => {
          if (s.target && !n.current) {
            let d = function () {
              Q0(RE, r, c, { discrete: !0 });
            };
            const c = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", a.current),
                (a.current = d),
                t.addEventListener("click", a.current, { once: !0 }))
              : d();
          }
          n.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", a.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function LE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = er(e),
    n = u.useRef(!1);
  return (
    u.useEffect(() => {
      const a = (i) => {
        i.target &&
          !n.current &&
          Q0(TE, r, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", a),
        () => t.removeEventListener("focusin", a)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function Is() {
  const e = new CustomEvent(Zo);
  document.dispatchEvent(e);
}
function Q0(e, t, r, { discrete: n }) {
  const a = r.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && a.addEventListener(e, t, { once: !0 }),
    n ? CE(a, i) : a.dispatchEvent(i);
}
let no = 0;
function $E() {
  u.useEffect(() => {
    var e, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = r[0]) !== null && e !== void 0 ? e : Fs()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = r[1]) !== null && t !== void 0 ? t : Fs()
      ),
      no++,
      () => {
        no === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((n) => n.remove()),
          no--;
      }
    );
  }, []);
}
function Fs() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const ao = "focusScope.autoFocusOnMount",
  oo = "focusScope.autoFocusOnUnmount",
  Ps = { bubbles: !1, cancelable: !0 },
  IE = u.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: n = !1,
        onMountAutoFocus: a,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, c] = u.useState(null),
      d = er(a),
      p = er(i),
      h = u.useRef(null),
      y = ke(t, (m) => c(m)),
      f = u.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    u.useEffect(() => {
      if (n) {
        let m = function (b) {
            if (f.paused || !s) return;
            const w = b.target;
            s.contains(w) ? (h.current = w) : It(h.current, { select: !0 });
          },
          x = function (b) {
            if (f.paused || !s) return;
            const w = b.relatedTarget;
            w !== null && (s.contains(w) || It(h.current, { select: !0 }));
          },
          v = function (b) {
            const w = document.activeElement;
            for (const _ of b)
              _.removedNodes.length > 0 &&
                ((s != null && s.contains(w)) || It(s));
          };
        document.addEventListener("focusin", m),
          document.addEventListener("focusout", x);
        const E = new MutationObserver(v);
        return (
          s && E.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", x),
              E.disconnect();
          }
        );
      }
    }, [n, s, f.paused]),
      u.useEffect(() => {
        if (s) {
          Bs.add(f);
          const m = document.activeElement;
          if (!s.contains(m)) {
            const v = new CustomEvent(ao, Ps);
            s.addEventListener(ao, d),
              s.dispatchEvent(v),
              v.defaultPrevented ||
                (FE(VE(ed(s)), { select: !0 }),
                document.activeElement === m && It(s));
          }
          return () => {
            s.removeEventListener(ao, d),
              setTimeout(() => {
                const v = new CustomEvent(oo, Ps);
                s.addEventListener(oo, p),
                  s.dispatchEvent(v),
                  v.defaultPrevented || It(m ?? document.body, { select: !0 }),
                  s.removeEventListener(oo, p),
                  Bs.remove(f);
              }, 0);
          };
        }
      }, [s, d, p, f]);
    const g = u.useCallback(
      (m) => {
        if ((!r && !n) || f.paused) return;
        const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          v = document.activeElement;
        if (x && v) {
          const E = m.currentTarget,
            [b, w] = PE(E);
          b && w
            ? !m.shiftKey && v === w
              ? (m.preventDefault(), r && It(b, { select: !0 }))
              : m.shiftKey &&
                v === b &&
                (m.preventDefault(), r && It(w, { select: !0 }))
            : v === E && m.preventDefault();
        }
      },
      [r, n, f.paused]
    );
    return u.createElement(
      Re.div,
      ae({ tabIndex: -1 }, l, { ref: y, onKeyDown: g })
    );
  });
function FE(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if ((It(n, { select: t }), document.activeElement !== r)) return;
}
function PE(e) {
  const t = ed(e),
    r = Ms(t, e),
    n = Ms(t.reverse(), e);
  return [r, n];
}
function ed(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const a = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || a
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Ms(e, t) {
  for (const r of e) if (!ME(r, { upTo: t })) return r;
}
function ME(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function BE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function It(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && BE(e) && t && e.select();
  }
}
const Bs = NE();
function NE() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), (e = Ns(e, t)), e.unshift(t);
    },
    remove(t) {
      var r;
      (e = Ns(e, t)), (r = e[0]) === null || r === void 0 || r.resume();
    },
  };
}
function Ns(e, t) {
  const r = [...e],
    n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function VE(e) {
  return e.filter((t) => t.tagName !== "A");
}
const rt =
    globalThis != null && globalThis.document ? u.useLayoutEffect : () => {},
  HE = v1["useId".toString()] || (() => {});
let jE = 0;
function ZE(e) {
  const [t, r] = u.useState(HE());
  return (
    rt(() => {
      e || r((n) => n ?? String(jE++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const zE = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const { element: n, padding: a } = typeof e == "function" ? e(r) : e;
      return n && t(n)
        ? n.current != null
          ? Tl({ element: n.current, padding: a }).fn(r)
          : {}
        : n
        ? Tl({ element: n, padding: a }).fn(r)
        : {};
    },
  };
};
var zn = typeof document < "u" ? u.useLayoutEffect : u.useEffect;
function aa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!aa(e[n], t[n])) return !1;
      return !0;
    }
    if (((a = Object.keys(e)), (r = a.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, a[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = a[n];
      if (!(i === "_owner" && e.$$typeof) && !aa(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function td(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vs(e, t) {
  const r = td(e);
  return Math.round(t * r) / r;
}
function Hs(e) {
  const t = u.useRef(e);
  return (
    zn(() => {
      t.current = e;
    }),
    t
  );
}
function qE(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: a,
      elements: { reference: i, floating: l } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: d,
    } = e,
    [p, h] = u.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [y, f] = u.useState(n);
  aa(y, n) || f(n);
  const [g, m] = u.useState(null),
    [x, v] = u.useState(null),
    E = u.useCallback(
      (P) => {
        P != A.current && ((A.current = P), m(P));
      },
      [m]
    ),
    b = u.useCallback(
      (P) => {
        P !== S.current && ((S.current = P), v(P));
      },
      [v]
    ),
    w = i || g,
    _ = l || x,
    A = u.useRef(null),
    S = u.useRef(null),
    C = u.useRef(p),
    k = Hs(c),
    D = Hs(a),
    L = u.useCallback(() => {
      if (!A.current || !S.current) return;
      const P = { placement: t, strategy: r, middleware: y };
      D.current && (P.platform = D.current),
        pf(A.current, S.current, P).then((j) => {
          const z = { ...j, isPositioned: !0 };
          I.current &&
            !aa(C.current, z) &&
            ((C.current = z),
            un.flushSync(() => {
              h(z);
            }));
        });
    }, [y, t, r, D]);
  zn(() => {
    d === !1 &&
      C.current.isPositioned &&
      ((C.current.isPositioned = !1), h((P) => ({ ...P, isPositioned: !1 })));
  }, [d]);
  const I = u.useRef(!1);
  zn(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    zn(() => {
      if ((w && (A.current = w), _ && (S.current = _), w && _)) {
        if (k.current) return k.current(w, _, L);
        L();
      }
    }, [w, _, L, k]);
  const $ = u.useMemo(
      () => ({ reference: A, floating: S, setReference: E, setFloating: b }),
      [E, b]
    ),
    M = u.useMemo(() => ({ reference: w, floating: _ }), [w, _]),
    F = u.useMemo(() => {
      const P = { position: r, left: 0, top: 0 };
      if (!M.floating) return P;
      const j = Vs(M.floating, p.x),
        z = Vs(M.floating, p.y);
      return s
        ? {
            ...P,
            transform: "translate(" + j + "px, " + z + "px)",
            ...(td(M.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: j, top: z };
    }, [r, s, M.floating, p.x, p.y]);
  return u.useMemo(
    () => ({ ...p, update: L, refs: $, elements: M, floatingStyles: F }),
    [p, L, $, M, F]
  );
}
function UE(e) {
  const [t, r] = u.useState(void 0);
  return (
    rt(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const i = a[0];
          let l, s;
          if ("borderBoxSize" in i) {
            const c = i.borderBoxSize,
              d = Array.isArray(c) ? c[0] : c;
            (l = d.inlineSize), (s = d.blockSize);
          } else (l = e.offsetWidth), (s = e.offsetHeight);
          r({ width: l, height: s });
        });
        return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
      } else r(void 0);
    }, [e]),
    t
  );
}
const rd = "Popper",
  [nd, ad] = rl(rd),
  [YC, od] = nd(rd),
  WE = "PopperAnchor",
  GE = u.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...a } = e,
      i = od(WE, r),
      l = u.useRef(null),
      s = ke(t, l);
    return (
      u.useEffect(() => {
        i.onAnchorChange((n == null ? void 0 : n.current) || l.current);
      }),
      n ? null : u.createElement(Re.div, ae({}, a, { ref: s }))
    );
  }),
  id = "PopperContent",
  [KE, XC] = nd(id),
  YE = u.forwardRef((e, t) => {
    var r, n, a, i, l, s, c, d;
    const {
        __scopePopper: p,
        side: h = "bottom",
        sideOffset: y = 0,
        align: f = "center",
        alignOffset: g = 0,
        arrowPadding: m = 0,
        collisionBoundary: x = [],
        collisionPadding: v = 0,
        sticky: E = "partial",
        hideWhenDetached: b = !1,
        avoidCollisions: w = !0,
        onPlaced: _,
        ...A
      } = e,
      S = od(id, p),
      [C, k] = u.useState(null),
      D = ke(t, (le) => k(le)),
      [L, I] = u.useState(null),
      $ = UE(L),
      M = (r = $ == null ? void 0 : $.width) !== null && r !== void 0 ? r : 0,
      F = (n = $ == null ? void 0 : $.height) !== null && n !== void 0 ? n : 0,
      P = h + (f !== "center" ? "-" + f : ""),
      j =
        typeof v == "number"
          ? v
          : { top: 0, right: 0, bottom: 0, left: 0, ...v },
      z = Array.isArray(x) ? x : [x],
      V = z.length > 0,
      Z = { padding: j, boundary: z.filter(XE), altBoundary: V },
      {
        refs: ee,
        floatingStyles: oe,
        placement: X,
        isPositioned: Y,
        middlewareData: H,
      } = qE({
        strategy: "fixed",
        placement: P,
        whileElementsMounted: df,
        elements: { reference: S.anchor },
        middleware: [
          Zp({ mainAxis: y + F, alignmentAxis: g }),
          w &&
            zp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: E === "partial" ? qp() : void 0,
              ...Z,
            }),
          w && Vp({ ...Z }),
          Up({
            ...Z,
            apply: ({
              elements: le,
              rects: we,
              availableWidth: Me,
              availableHeight: qe,
            }) => {
              const { width: Ue, height: ar } = we.reference,
                pe = le.floating.style;
              pe.setProperty("--radix-popper-available-width", `${Me}px`),
                pe.setProperty("--radix-popper-available-height", `${qe}px`),
                pe.setProperty("--radix-popper-anchor-width", `${Ue}px`),
                pe.setProperty("--radix-popper-anchor-height", `${ar}px`);
            },
          }),
          L && zE({ element: L, padding: m }),
          JE({ arrowWidth: M, arrowHeight: F }),
          b && Hp({ strategy: "referenceHidden" }),
        ],
      }),
      [W, B] = ld(X),
      U = er(_);
    rt(() => {
      Y && (U == null || U());
    }, [Y, U]);
    const te = (a = H.arrow) === null || a === void 0 ? void 0 : a.x,
      J = (i = H.arrow) === null || i === void 0 ? void 0 : i.y,
      G =
        ((l = H.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !==
        0,
      [K, N] = u.useState();
    return (
      rt(() => {
        C && N(window.getComputedStyle(C).zIndex);
      }, [C]),
      u.createElement(
        "div",
        {
          "ref": ee.setFloating,
          "data-radix-popper-content-wrapper": "",
          "style": {
            ...oe,
            "transform": Y ? oe.transform : "translate(0, -200%)",
            "minWidth": "max-content",
            "zIndex": K,
            "--radix-popper-transform-origin": [
              (s = H.transformOrigin) === null || s === void 0 ? void 0 : s.x,
              (c = H.transformOrigin) === null || c === void 0 ? void 0 : c.y,
            ].join(" "),
          },
          "dir": e.dir,
        },
        u.createElement(
          KE,
          {
            scope: p,
            placedSide: W,
            onArrowChange: I,
            arrowX: te,
            arrowY: J,
            shouldHideArrow: G,
          },
          u.createElement(
            Re.div,
            ae({ "data-side": W, "data-align": B }, A, {
              ref: D,
              style: {
                ...A.style,
                animation: Y ? void 0 : "none",
                opacity:
                  (d = H.hide) !== null && d !== void 0 && d.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function XE(e) {
  return e !== null;
}
const JE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var r, n, a, i, l;
    const { placement: s, rects: c, middlewareData: d } = t,
      h =
        ((r = d.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !==
        0,
      y = h ? 0 : e.arrowWidth,
      f = h ? 0 : e.arrowHeight,
      [g, m] = ld(s),
      x = { start: "0%", center: "50%", end: "100%" }[m],
      v =
        ((n = (a = d.arrow) === null || a === void 0 ? void 0 : a.x) !== null &&
        n !== void 0
          ? n
          : 0) +
        y / 2,
      E =
        ((i = (l = d.arrow) === null || l === void 0 ? void 0 : l.y) !== null &&
        i !== void 0
          ? i
          : 0) +
        f / 2;
    let b = "",
      w = "";
    return (
      g === "bottom"
        ? ((b = h ? x : `${v}px`), (w = `${-f}px`))
        : g === "top"
        ? ((b = h ? x : `${v}px`), (w = `${c.floating.height + f}px`))
        : g === "right"
        ? ((b = `${-f}px`), (w = h ? x : `${E}px`))
        : g === "left" &&
          ((b = `${c.floating.width + f}px`), (w = h ? x : `${E}px`)),
      { data: { x: b, y: w } }
    );
  },
});
function ld(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
const QE = GE,
  e4 = YE,
  t4 = u.forwardRef((e, t) => {
    var r;
    const {
      container: n = globalThis == null ||
      (r = globalThis.document) === null ||
      r === void 0
        ? void 0
        : r.body,
      ...a
    } = e;
    return n
      ? Sc.createPortal(u.createElement(Re.div, ae({}, a, { ref: t })), n)
      : null;
  });
function r4(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const n4 = u.forwardRef((e, t) =>
    u.createElement(
      Re.span,
      ae({}, e, {
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    )
  ),
  a4 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  o4 = [" ", "Enter"],
  ka = "Select",
  [nl, Da, i4] = _E(ka),
  [Pr, JC] = rl(ka, [i4, ad]),
  sd = ad(),
  [QC, Mr] = Pr(ka),
  [eS, l4] = Pr(ka),
  s4 = "SelectTrigger",
  c4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...a } = e,
      i = sd(r),
      l = Mr(s4, r),
      s = l.disabled || n,
      c = ke(t, l.onTriggerChange),
      d = Da(r),
      [p, h, y] = pd((g) => {
        const m = d().filter((E) => !E.disabled),
          x = m.find((E) => E.value === l.value),
          v = fd(m, g, x);
        v !== void 0 && l.onValueChange(v.value);
      }),
      f = () => {
        s || (l.onOpenChange(!0), y());
      };
    return u.createElement(
      QE,
      ae({ asChild: !0 }, i),
      u.createElement(
        Re.button,
        ae(
          {
            "type": "button",
            "role": "combobox",
            "aria-controls": l.contentId,
            "aria-expanded": l.open,
            "aria-required": l.required,
            "aria-autocomplete": "none",
            "dir": l.dir,
            "data-state": l.open ? "open" : "closed",
            "disabled": s,
            "data-disabled": s ? "" : void 0,
            "data-placeholder": l.value === void 0 ? "" : void 0,
          },
          a,
          {
            ref: c,
            onClick: be(a.onClick, (g) => {
              g.currentTarget.focus();
            }),
            onPointerDown: be(a.onPointerDown, (g) => {
              const m = g.target;
              m.hasPointerCapture(g.pointerId) &&
                m.releasePointerCapture(g.pointerId),
                g.button === 0 &&
                  g.ctrlKey === !1 &&
                  (f(),
                  (l.triggerPointerDownPosRef.current = {
                    x: Math.round(g.pageX),
                    y: Math.round(g.pageY),
                  }),
                  g.preventDefault());
            }),
            onKeyDown: be(a.onKeyDown, (g) => {
              const m = p.current !== "";
              !(g.ctrlKey || g.altKey || g.metaKey) &&
                g.key.length === 1 &&
                h(g.key),
                !(m && g.key === " ") &&
                  a4.includes(g.key) &&
                  (f(), g.preventDefault());
            }),
          }
        )
      )
    );
  }),
  u4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, children: n, ...a } = e;
    return u.createElement(
      Re.span,
      ae({ "aria-hidden": !0 }, a, { ref: t }),
      n || "▼"
    );
  }),
  d4 = (e) => u.createElement(t4, ae({ asChild: !0 }, e)),
  Rr = "SelectContent",
  p4 = u.forwardRef((e, t) => {
    const r = Mr(Rr, e.__scopeSelect),
      [n, a] = u.useState();
    if (
      (rt(() => {
        a(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const i = n;
      return i
        ? un.createPortal(
            u.createElement(
              cd,
              { scope: e.__scopeSelect },
              u.createElement(
                nl.Slot,
                { scope: e.__scopeSelect },
                u.createElement("div", null, e.children)
              )
            ),
            i
          )
        : null;
    }
    return u.createElement(f4, ae({}, e, { ref: t }));
  }),
  _t = 10,
  [cd, nr] = Pr(Rr),
  f4 = u.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        position: n = "item-aligned",
        onCloseAutoFocus: a,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        side: s,
        sideOffset: c,
        align: d,
        alignOffset: p,
        arrowPadding: h,
        collisionBoundary: y,
        collisionPadding: f,
        sticky: g,
        hideWhenDetached: m,
        avoidCollisions: x,
        ...v
      } = e,
      E = Mr(Rr, r),
      [b, w] = u.useState(null),
      [_, A] = u.useState(null),
      S = ke(t, (B) => w(B)),
      [C, k] = u.useState(null),
      [D, L] = u.useState(null),
      I = Da(r),
      [$, M] = u.useState(!1),
      F = u.useRef(!1);
    u.useEffect(() => {
      if (b) return kp(b);
    }, [b]),
      $E();
    const P = u.useCallback(
        (B) => {
          const [U, ...te] = I().map((K) => K.ref.current),
            [J] = te.slice(-1),
            G = document.activeElement;
          for (const K of B)
            if (
              K === G ||
              (K == null || K.scrollIntoView({ block: "nearest" }),
              K === U && _ && (_.scrollTop = 0),
              K === J && _ && (_.scrollTop = _.scrollHeight),
              K == null || K.focus(),
              document.activeElement !== G)
            )
              return;
        },
        [I, _]
      ),
      j = u.useCallback(() => P([C, b]), [P, C, b]);
    u.useEffect(() => {
      $ && j();
    }, [$, j]);
    const { onOpenChange: z, triggerPointerDownPosRef: V } = E;
    u.useEffect(() => {
      if (b) {
        let B = { x: 0, y: 0 };
        const U = (J) => {
            var G, K, N, le;
            B = {
              x: Math.abs(
                Math.round(J.pageX) -
                  ((G =
                    (K = V.current) === null || K === void 0 ? void 0 : K.x) !==
                    null && G !== void 0
                    ? G
                    : 0)
              ),
              y: Math.abs(
                Math.round(J.pageY) -
                  ((N =
                    (le = V.current) === null || le === void 0
                      ? void 0
                      : le.y) !== null && N !== void 0
                    ? N
                    : 0)
              ),
            };
          },
          te = (J) => {
            B.x <= 10 && B.y <= 10
              ? J.preventDefault()
              : b.contains(J.target) || z(!1),
              document.removeEventListener("pointermove", U),
              (V.current = null);
          };
        return (
          V.current !== null &&
            (document.addEventListener("pointermove", U),
            document.addEventListener("pointerup", te, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", U),
              document.removeEventListener("pointerup", te, { capture: !0 });
          }
        );
      }
    }, [b, z, V]),
      u.useEffect(() => {
        const B = () => z(!1);
        return (
          window.addEventListener("blur", B),
          window.addEventListener("resize", B),
          () => {
            window.removeEventListener("blur", B),
              window.removeEventListener("resize", B);
          }
        );
      }, [z]);
    const [Z, ee] = pd((B) => {
        const U = I().filter((G) => !G.disabled),
          te = U.find((G) => G.ref.current === document.activeElement),
          J = fd(U, B, te);
        J && setTimeout(() => J.ref.current.focus());
      }),
      oe = u.useCallback(
        (B, U, te) => {
          const J = !F.current && !te;
          ((E.value !== void 0 && E.value === U) || J) &&
            (k(B), J && (F.current = !0));
        },
        [E.value]
      ),
      X = u.useCallback(() => (b == null ? void 0 : b.focus()), [b]),
      Y = u.useCallback(
        (B, U, te) => {
          const J = !F.current && !te;
          ((E.value !== void 0 && E.value === U) || J) && L(B);
        },
        [E.value]
      ),
      H = n === "popper" ? js : m4,
      W =
        H === js
          ? {
              side: s,
              sideOffset: c,
              align: d,
              alignOffset: p,
              arrowPadding: h,
              collisionBoundary: y,
              collisionPadding: f,
              sticky: g,
              hideWhenDetached: m,
              avoidCollisions: x,
            }
          : {};
    return u.createElement(
      cd,
      {
        scope: r,
        content: b,
        viewport: _,
        onViewportChange: A,
        itemRefCallback: oe,
        selectedItem: C,
        onItemLeave: X,
        itemTextRefCallback: Y,
        focusSelectedItem: j,
        selectedItemText: D,
        position: n,
        isPositioned: $,
        searchRef: Z,
      },
      u.createElement(
        Sp,
        { as: cn, allowPinchZoom: !0 },
        u.createElement(
          IE,
          {
            asChild: !0,
            trapped: E.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: be(a, (B) => {
              var U;
              (U = E.trigger) === null ||
                U === void 0 ||
                U.focus({ preventScroll: !0 }),
                B.preventDefault();
            }),
          },
          u.createElement(
            kE,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: i,
              onPointerDownOutside: l,
              onFocusOutside: (B) => B.preventDefault(),
              onDismiss: () => E.onOpenChange(!1),
            },
            u.createElement(
              H,
              ae(
                {
                  "role": "listbox",
                  "id": E.contentId,
                  "data-state": E.open ? "open" : "closed",
                  "dir": E.dir,
                  "onContextMenu": (B) => B.preventDefault(),
                },
                v,
                W,
                {
                  onPlaced: () => M(!0),
                  ref: S,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...v.style,
                  },
                  onKeyDown: be(v.onKeyDown, (B) => {
                    const U = B.ctrlKey || B.altKey || B.metaKey;
                    if (
                      (B.key === "Tab" && B.preventDefault(),
                      !U && B.key.length === 1 && ee(B.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key))
                    ) {
                      let J = I()
                        .filter((G) => !G.disabled)
                        .map((G) => G.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(B.key) &&
                          (J = J.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(B.key))
                      ) {
                        const G = B.target,
                          K = J.indexOf(G);
                        J = J.slice(K + 1);
                      }
                      setTimeout(() => P(J)), B.preventDefault();
                    }
                  }),
                }
              )
            )
          )
        )
      )
    );
  }),
  m4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, onPlaced: n, ...a } = e,
      i = Mr(Rr, r),
      l = nr(Rr, r),
      [s, c] = u.useState(null),
      [d, p] = u.useState(null),
      h = ke(t, (S) => p(S)),
      y = Da(r),
      f = u.useRef(!1),
      g = u.useRef(!0),
      {
        viewport: m,
        selectedItem: x,
        selectedItemText: v,
        focusSelectedItem: E,
      } = l,
      b = u.useCallback(() => {
        if (i.trigger && i.valueNode && s && d && m && x && v) {
          const S = i.trigger.getBoundingClientRect(),
            C = d.getBoundingClientRect(),
            k = i.valueNode.getBoundingClientRect(),
            D = v.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const G = D.left - C.left,
              K = k.left - G,
              N = S.left - K,
              le = S.width + N,
              we = Math.max(le, C.width),
              Me = window.innerWidth - _t,
              qe = Ls(K, [_t, Me - we]);
            (s.style.minWidth = le + "px"), (s.style.left = qe + "px");
          } else {
            const G = C.right - D.right,
              K = window.innerWidth - k.right - G,
              N = window.innerWidth - S.right - K,
              le = S.width + N,
              we = Math.max(le, C.width),
              Me = window.innerWidth - _t,
              qe = Ls(K, [_t, Me - we]);
            (s.style.minWidth = le + "px"), (s.style.right = qe + "px");
          }
          const L = y(),
            I = window.innerHeight - _t * 2,
            $ = m.scrollHeight,
            M = window.getComputedStyle(d),
            F = parseInt(M.borderTopWidth, 10),
            P = parseInt(M.paddingTop, 10),
            j = parseInt(M.borderBottomWidth, 10),
            z = parseInt(M.paddingBottom, 10),
            V = F + P + $ + z + j,
            Z = Math.min(x.offsetHeight * 5, V),
            ee = window.getComputedStyle(m),
            oe = parseInt(ee.paddingTop, 10),
            X = parseInt(ee.paddingBottom, 10),
            Y = S.top + S.height / 2 - _t,
            H = I - Y,
            W = x.offsetHeight / 2,
            B = x.offsetTop + W,
            U = F + P + B,
            te = V - U;
          if (U <= Y) {
            const G = x === L[L.length - 1].ref.current;
            s.style.bottom = "0px";
            const K = d.clientHeight - m.offsetTop - m.offsetHeight,
              N = Math.max(H, W + (G ? X : 0) + K + j),
              le = U + N;
            s.style.height = le + "px";
          } else {
            const G = x === L[0].ref.current;
            s.style.top = "0px";
            const N = Math.max(Y, F + m.offsetTop + (G ? oe : 0) + W) + te;
            (s.style.height = N + "px"), (m.scrollTop = U - Y + m.offsetTop);
          }
          (s.style.margin = `${_t}px 0`),
            (s.style.minHeight = Z + "px"),
            (s.style.maxHeight = I + "px"),
            n == null || n(),
            requestAnimationFrame(() => (f.current = !0));
        }
      }, [y, i.trigger, i.valueNode, s, d, m, x, v, i.dir, n]);
    rt(() => b(), [b]);
    const [w, _] = u.useState();
    rt(() => {
      d && _(window.getComputedStyle(d).zIndex);
    }, [d]);
    const A = u.useCallback(
      (S) => {
        S && g.current === !0 && (b(), E == null || E(), (g.current = !1));
      },
      [b, E]
    );
    return u.createElement(
      g4,
      {
        scope: r,
        contentWrapper: s,
        shouldExpandOnScrollRef: f,
        onScrollButtonChange: A,
      },
      u.createElement(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w,
          },
        },
        u.createElement(
          Re.div,
          ae({}, a, {
            ref: h,
            style: { boxSizing: "border-box", maxHeight: "100%", ...a.style },
          })
        )
      )
    );
  }),
  js = u.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        align: n = "start",
        collisionPadding: a = _t,
        ...i
      } = e,
      l = sd(r);
    return u.createElement(
      e4,
      ae({}, l, i, {
        ref: t,
        align: n,
        collisionPadding: a,
        style: {
          "boxSizing": "border-box",
          ...i.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  [g4, al] = Pr(Rr, {}),
  Zs = "SelectViewport",
  h4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      a = nr(Zs, r),
      i = al(Zs, r),
      l = ke(t, a.onViewportChange),
      s = u.useRef(0);
    return u.createElement(
      u.Fragment,
      null,
      u.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      u.createElement(
        nl.Slot,
        { scope: r },
        u.createElement(
          Re.div,
          ae({ "data-radix-select-viewport": "", "role": "presentation" }, n, {
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...n.style,
            },
            onScroll: be(n.onScroll, (c) => {
              const d = c.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: h } = i;
              if (h != null && h.current && p) {
                const y = Math.abs(s.current - d.scrollTop);
                if (y > 0) {
                  const f = window.innerHeight - _t * 2,
                    g = parseFloat(p.style.minHeight),
                    m = parseFloat(p.style.height),
                    x = Math.max(g, m);
                  if (x < f) {
                    const v = x + y,
                      E = Math.min(f, v),
                      b = v - E;
                    (p.style.height = E + "px"),
                      p.style.bottom === "0px" &&
                        ((d.scrollTop = b > 0 ? b : 0),
                        (p.style.justifyContent = "flex-end"));
                  }
                }
              }
              s.current = d.scrollTop;
            }),
          })
        )
      )
    );
  }),
  y4 = "SelectGroup",
  [tS, v4] = Pr(y4),
  b4 = "SelectLabel",
  E4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      a = v4(b4, r);
    return u.createElement(Re.div, ae({ id: a.id }, n, { ref: t }));
  }),
  zo = "SelectItem",
  [x4, ud] = Pr(zo),
  w4 = u.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        value: n,
        disabled: a = !1,
        textValue: i,
        ...l
      } = e,
      s = Mr(zo, r),
      c = nr(zo, r),
      d = s.value === n,
      [p, h] = u.useState(i ?? ""),
      [y, f] = u.useState(!1),
      g = ke(t, (v) => {
        var E;
        return (E = c.itemRefCallback) === null || E === void 0
          ? void 0
          : E.call(c, v, n, a);
      }),
      m = ZE(),
      x = () => {
        a || (s.onValueChange(n), s.onOpenChange(!1));
      };
    return u.createElement(
      x4,
      {
        scope: r,
        value: n,
        disabled: a,
        textId: m,
        isSelected: d,
        onItemTextChange: u.useCallback((v) => {
          h((E) => {
            var b;
            return (
              E ||
              ((b = v == null ? void 0 : v.textContent) !== null && b !== void 0
                ? b
                : ""
              ).trim()
            );
          });
        }, []),
      },
      u.createElement(
        nl.ItemSlot,
        { scope: r, value: n, disabled: a, textValue: p },
        u.createElement(
          Re.div,
          ae(
            {
              "role": "option",
              "aria-labelledby": m,
              "data-highlighted": y ? "" : void 0,
              "aria-selected": d && y,
              "data-state": d ? "checked" : "unchecked",
              "aria-disabled": a || void 0,
              "data-disabled": a ? "" : void 0,
              "tabIndex": a ? void 0 : -1,
            },
            l,
            {
              ref: g,
              onFocus: be(l.onFocus, () => f(!0)),
              onBlur: be(l.onBlur, () => f(!1)),
              onPointerUp: be(l.onPointerUp, x),
              onPointerMove: be(l.onPointerMove, (v) => {
                if (a) {
                  var E;
                  (E = c.onItemLeave) === null || E === void 0 || E.call(c);
                } else v.currentTarget.focus({ preventScroll: !0 });
              }),
              onPointerLeave: be(l.onPointerLeave, (v) => {
                if (v.currentTarget === document.activeElement) {
                  var E;
                  (E = c.onItemLeave) === null || E === void 0 || E.call(c);
                }
              }),
              onKeyDown: be(l.onKeyDown, (v) => {
                var E;
                (((E = c.searchRef) === null || E === void 0
                  ? void 0
                  : E.current) !== "" &&
                  v.key === " ") ||
                  (o4.includes(v.key) && x(),
                  v.key === " " && v.preventDefault());
              }),
            }
          )
        )
      )
    );
  }),
  kn = "SelectItemText",
  _4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, className: n, style: a, ...i } = e,
      l = Mr(kn, r),
      s = nr(kn, r),
      c = ud(kn, r),
      d = l4(kn, r),
      [p, h] = u.useState(null),
      y = ke(
        t,
        (v) => h(v),
        c.onItemTextChange,
        (v) => {
          var E;
          return (E = s.itemTextRefCallback) === null || E === void 0
            ? void 0
            : E.call(s, v, c.value, c.disabled);
        }
      ),
      f = p == null ? void 0 : p.textContent,
      g = u.useMemo(
        () =>
          u.createElement(
            "option",
            { key: c.value, value: c.value, disabled: c.disabled },
            f
          ),
        [c.disabled, c.value, f]
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: x } = d;
    return (
      rt(() => (m(g), () => x(g)), [m, x, g]),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(Re.span, ae({ id: c.textId }, i, { ref: y })),
        c.isSelected && l.valueNode && !l.valueNodeHasChildren
          ? un.createPortal(i.children, l.valueNode)
          : null
      )
    );
  }),
  A4 = "SelectItemIndicator",
  C4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return ud(A4, r).isSelected
      ? u.createElement(Re.span, ae({ "aria-hidden": !0 }, n, { ref: t }))
      : null;
  }),
  zs = "SelectScrollUpButton",
  S4 = u.forwardRef((e, t) => {
    const r = nr(zs, e.__scopeSelect),
      n = al(zs, e.__scopeSelect),
      [a, i] = u.useState(!1),
      l = ke(t, n.onScrollButtonChange);
    return (
      rt(() => {
        if (r.viewport && r.isPositioned) {
          let c = function () {
            const d = s.scrollTop > 0;
            i(d);
          };
          const s = r.viewport;
          return (
            c(),
            s.addEventListener("scroll", c),
            () => s.removeEventListener("scroll", c)
          );
        }
      }, [r.viewport, r.isPositioned]),
      a
        ? u.createElement(
            dd,
            ae({}, e, {
              ref: l,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: c } = r;
                s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  qs = "SelectScrollDownButton",
  R4 = u.forwardRef((e, t) => {
    const r = nr(qs, e.__scopeSelect),
      n = al(qs, e.__scopeSelect),
      [a, i] = u.useState(!1),
      l = ke(t, n.onScrollButtonChange);
    return (
      rt(() => {
        if (r.viewport && r.isPositioned) {
          let c = function () {
            const d = s.scrollHeight - s.clientHeight,
              p = Math.ceil(s.scrollTop) < d;
            i(p);
          };
          const s = r.viewport;
          return (
            c(),
            s.addEventListener("scroll", c),
            () => s.removeEventListener("scroll", c)
          );
        }
      }, [r.viewport, r.isPositioned]),
      a
        ? u.createElement(
            dd,
            ae({}, e, {
              ref: l,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: c } = r;
                s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  dd = u.forwardRef((e, t) => {
    const { __scopeSelect: r, onAutoScroll: n, ...a } = e,
      i = nr("SelectScrollButton", r),
      l = u.useRef(null),
      s = Da(r),
      c = u.useCallback(() => {
        l.current !== null &&
          (window.clearInterval(l.current), (l.current = null));
      }, []);
    return (
      u.useEffect(() => () => c(), [c]),
      rt(() => {
        var d;
        const p = s().find((h) => h.ref.current === document.activeElement);
        p == null ||
          (d = p.ref.current) === null ||
          d === void 0 ||
          d.scrollIntoView({ block: "nearest" });
      }, [s]),
      u.createElement(
        Re.div,
        ae({ "aria-hidden": !0 }, a, {
          ref: t,
          style: { flexShrink: 0, ...a.style },
          onPointerDown: be(a.onPointerDown, () => {
            l.current === null && (l.current = window.setInterval(n, 50));
          }),
          onPointerMove: be(a.onPointerMove, () => {
            var d;
            (d = i.onItemLeave) === null || d === void 0 || d.call(i),
              l.current === null && (l.current = window.setInterval(n, 50));
          }),
          onPointerLeave: be(a.onPointerLeave, () => {
            c();
          }),
        })
      )
    );
  }),
  T4 = u.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return u.createElement(Re.div, ae({ "aria-hidden": !0 }, n, { ref: t }));
  }),
  O4 = u.forwardRef((e, t) => {
    const { value: r, ...n } = e,
      a = u.useRef(null),
      i = ke(t, a),
      l = r4(r);
    return (
      u.useEffect(() => {
        const s = a.current,
          c = window.HTMLSelectElement.prototype,
          p = Object.getOwnPropertyDescriptor(c, "value").set;
        if (l !== r && p) {
          const h = new Event("change", { bubbles: !0 });
          p.call(s, r), s.dispatchEvent(h);
        }
      }, [l, r]),
      u.createElement(
        n4,
        { asChild: !0 },
        u.createElement("select", ae({}, n, { ref: i, defaultValue: r }))
      )
    );
  });
O4.displayName = "BubbleSelect";
function pd(e) {
  const t = er(e),
    r = u.useRef(""),
    n = u.useRef(0),
    a = u.useCallback(
      (l) => {
        const s = r.current + l;
        t(s),
          (function c(d) {
            (r.current = d),
              window.clearTimeout(n.current),
              d !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
          })(s);
      },
      [t]
    ),
    i = u.useCallback(() => {
      (r.current = ""), window.clearTimeout(n.current);
    }, []);
  return u.useEffect(() => () => window.clearTimeout(n.current), []), [r, a, i];
}
function fd(e, t, r) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
    i = r ? e.indexOf(r) : -1;
  let l = k4(e, Math.max(i, 0));
  a.length === 1 && (l = l.filter((d) => d !== r));
  const c = l.find((d) =>
    d.textValue.toLowerCase().startsWith(a.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function k4(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
const md = c4,
  D4 = u4,
  L4 = d4,
  gd = p4,
  $4 = h4,
  hd = E4,
  yd = w4,
  I4 = _4,
  F4 = C4,
  P4 = S4,
  M4 = R4,
  vd = T4;
var B4 = ({ size: e }) =>
  o.createElement("div", { style: { width: e, height: e } });
function T(e) {
  function t(r) {
    return o.createElement(
      u.Suspense,
      { fallback: o.createElement(B4, { ...r }) },
      o.createElement(e, { ...r })
    );
  }
  return t;
}
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Photo,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Component,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Grid,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Outline,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PhotoDrag,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).GridAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Search,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Zoom,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ZoomOut,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ZoomReset,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Eye,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).EyeClose,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Lightning,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).LightningOff,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Contrast,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).SwitchAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Mirror,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Grow,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PaintBrush,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Ruler,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Stop,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Camera,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Video,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Speaker,
  }))
);
var N4 = T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Play,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PlayBack,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PlayNext,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Rewind,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).FastForward,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).StopAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).SideBySide,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Stacked,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Sun,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Images-S2WTXNGG-1424b253.js"),
        [
          "./Images-S2WTXNGG-1424b253.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Moon,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Book,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Document,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Copy,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Category,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Folder,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Print,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).GraphLine,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Calendar,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).GraphBar,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Menu,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).MenuReverse,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Filter,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).DocChart,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).DocList,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Documents-SGWAY3KW-a46f097b.js"),
        [
          "./Documents-SGWAY3KW-a46f097b.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Drag,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Markup,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Bold,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Italic,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PaperClip,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ListOrdered,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ListUnordered,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Paragraph,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Editing-7QFB6ZMG-a75b9a4e.js"),
        [
          "./Editing-7QFB6ZMG-a75b9a4e.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Markdown,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Git-DZ2D5ZUL-6ca74cd2.js"),
        [
          "./Git-DZ2D5ZUL-6ca74cd2.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Repo,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Git-DZ2D5ZUL-6ca74cd2.js"),
        [
          "./Git-DZ2D5ZUL-6ca74cd2.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Commit,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Git-DZ2D5ZUL-6ca74cd2.js"),
        [
          "./Git-DZ2D5ZUL-6ca74cd2.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Branch,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Git-DZ2D5ZUL-6ca74cd2.js"),
        [
          "./Git-DZ2D5ZUL-6ca74cd2.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PullRequest,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Git-DZ2D5ZUL-6ca74cd2.js"),
        [
          "./Git-DZ2D5ZUL-6ca74cd2.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Merge,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./OS-YZ2Y4VYS-57059e39.js"),
        [
          "./OS-YZ2Y4VYS-57059e39.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Apple,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./OS-YZ2Y4VYS-57059e39.js"),
        [
          "./OS-YZ2Y4VYS-57059e39.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Linux,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./OS-YZ2Y4VYS-57059e39.js"),
        [
          "./OS-YZ2Y4VYS-57059e39.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Ubuntu,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./OS-YZ2Y4VYS-57059e39.js"),
        [
          "./OS-YZ2Y4VYS-57059e39.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Windows,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./OS-YZ2Y4VYS-57059e39.js"),
        [
          "./OS-YZ2Y4VYS-57059e39.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Chrome,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Storybook,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).AzureDevOps,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Bitbucket,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Chromatic,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ComponentDriven,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Discord,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Facebook,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Figma,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).GDrive,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Github,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Gitlab,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Google,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Graphql,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Medium,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Redux,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Twitter,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Youtube,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).VSCode,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Logos-SJTNNI74-dfca754f.js"),
        [
          "./Logos-SJTNNI74-dfca754f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Linkedin,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Browser,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Tablet,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Mobile,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Watch,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Sidebar,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).SidebarAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).SidebarAltToggle,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).SidebarToggle,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).BottomBar,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).BottomBarToggle,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).CPU,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Database,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Memory,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Structure,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Box,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Devices-SUYACUPO-5f5f7f3c.js"),
        [
          "./Devices-SUYACUPO-5f5f7f3c.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Power,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Edit,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Cog,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Nut,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Wrench,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Ellipsis,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Wand,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Check,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Form,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).BatchDeny,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).BatchAccept,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Controls,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Plus,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).CloseAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Cross,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Trash,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PinAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Unpin,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Add,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Subtract,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Close,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Delete,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Passed,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Changed,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Failed,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Clear,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Comment,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).CommentAdd,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).RequestChange,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Comments,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Chat,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Lock,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Unlock,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Key,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Outbox,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Credit,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Button,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Type,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PointerDefault,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).PointerHand,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./CRUD-I5EZL2FS-97d62e3d.js"),
        [
          "./CRUD-I5EZL2FS-97d62e3d.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Command,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Info,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Question,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Support,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Alert,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).AlertAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Email,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Phone,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Link,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).LinkBroken,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Bell,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).RSS,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ShareAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Share,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).JumpTo,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).CircleHollow,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Circle,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).BookmarkHollow,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Bookmark,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Diamond,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).HeartHollow,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Heart,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).StarHollow,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Star,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Certificate,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Verified,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ThumbsUp,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Shield,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Basket,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Beaker,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Hourglass,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Flag,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).CloudHollow,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Cloud,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Communicate-7JXCND2Z-d3f800fa.js"),
        [
          "./Communicate-7JXCND2Z-d3f800fa.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Sticker,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ChevronUp,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ChevronDown,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ChevronLeft,
  }))
);
var V4 = T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ChevronRight,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowUp,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowDown,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowLeft,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowRight,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowSolidUp,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowSolidDown,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowSolidLeft,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ArrowSolidRight,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).ExpandAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Collapse,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Expand,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Unfold,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Transfer,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Redirect,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Undo,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Reply,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Sync,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Upload,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Download,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Back,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Proceed,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Refresh,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Globe,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Compass,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Location,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Pin,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Time,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Dashboard,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Timer,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Home,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Admin,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./Wayfinding-BB4H7CHP-0d20a672.js"),
        [
          "./Wayfinding-BB4H7CHP-0d20a672.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Direction,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).User,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).UserAlt,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).UserAdd,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Users,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Profile,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).FaceHappy,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).FaceNeutral,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).FaceSad,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).Accessibility,
  }))
);
T(
  u.lazy(async () => ({
    default: (
      await R(
        () => import("./People-OD4EV7WZ-e23c0f1f.js"),
        [
          "./People-OD4EV7WZ-e23c0f1f.js",
          "./chunk-MSDTXLE7-e8876087.js",
          "./index-61bf1805.js",
          "./_commonjsHelpers-de833af9.js",
        ],
        import.meta.url
      )
    ).AccessibilityAlt,
  }))
);
var H4 = u.forwardRef(({ as: e, children: t, icon: r, ...n }, a) =>
  o.createElement(j4, { as: e, ref: a, ...n }, r, !n.iconOnly && t)
);
H4.displayName = "Button";
var j4 = O.button(
    ({
      theme: e,
      variant: t = "primary",
      size: r = "medium",
      disabled: n = !1,
      active: a = !1,
      iconOnly: i = !1,
    }) => ({
      "border": 0,
      "cursor": n ? "not-allowed" : "pointer",
      "display": "inline-flex",
      "gap": "6px",
      "alignItems": "center",
      "justifyContent": "center",
      "overflow": "hidden",
      "padding": `${(() =>
        !i && r === "small"
          ? "0 10px"
          : !i && r === "medium"
          ? "0 12px"
          : 0)()}`,
      "width": `${(() =>
        i && r === "small"
          ? "28px"
          : i && r === "medium"
          ? "32px"
          : "auto")()}`,
      "height": r === "small" ? "28px" : "32px",
      "position": "relative",
      "textAlign": "center",
      "textDecoration": "none",
      "transitionProperty": "background, box-shadow",
      "transitionDuration": "150ms",
      "transitionTimingFunction": "ease-out",
      "verticalAlign": "top",
      "whiteSpace": "nowrap",
      "userSelect": "none",
      "opacity": n ? 0.5 : 1,
      "margin": 0,
      "fontSize": `${e.typography.size.s1}px`,
      "fontWeight": e.typography.weight.bold,
      "lineHeight": "1",
      "background": `${(() =>
        t === "primary"
          ? e.color.secondary
          : t === "secondary"
          ? e.button.background
          : t === "tertiary" && a
          ? e.background.hoverable
          : "transparent")()}`,
      "color": `${(() =>
        t === "primary"
          ? e.color.lightest
          : t === "secondary"
          ? e.input.color
          : t === "tertiary" && a
          ? e.color.secondary
          : t === "tertiary"
          ? e.color.mediumdark
          : e.input.color)()}`,
      "boxShadow":
        t === "secondary" ? `${e.button.border} 0 0 0 1px inset` : "none",
      "borderRadius": e.input.borderRadius,
      "&:hover": {
        color: t === "tertiary" ? e.color.secondary : null,
        background: `${(() => {
          let l = e.color.secondary;
          return (
            t === "primary" && (l = e.color.secondary),
            t === "secondary" && (l = e.button.background),
            t === "tertiary"
              ? Te(0.86, e.color.secondary)
              : e.base === "light"
              ? Ge(0.02, l)
              : Po(0.03, l)
          );
        })()}`,
      },
      "&:active": {
        color: t === "tertiary" ? e.color.secondary : null,
        background: `${(() => {
          let l = e.color.secondary;
          return (
            t === "primary" && (l = e.color.secondary),
            t === "secondary" && (l = e.button.background),
            t === "tertiary"
              ? e.background.hoverable
              : e.base === "light"
              ? Ge(0.02, l)
              : Po(0.03, l)
          );
        })()}`,
      },
      "&:focus": {
        boxShadow: `${ut(e.color.secondary, 1)} 0 0 0 1px inset`,
        outline: "none",
      },
    })
  ),
  Z4 = u.forwardRef(({ ...e }, t) => o.createElement(z4, { ref: t, ...e }));
Z4.displayName = "Input";
var z4 = O.input(({ theme: e }) => ({
    "appearance": "none",
    "border": "0 none",
    "display": "block",
    "margin": " 0",
    "position": "relative",
    "width": "100%",
    "height": "32px",
    "transition": "box-shadow 200ms ease-out, opacity 200ms ease-out",
    "color": e.input.color,
    "background": e.input.background,
    "boxShadow": `${e.input.border} 0 0 0 1px inset`,
    "borderRadius": e.input.borderRadius,
    "fontSize": e.typography.size.s2 - 1,
    "padding": "6px 10px",
    "boxSizing": "border-box",
    "lineHeight": "20px",
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
    "&::placeholder": { color: e.textMutedColor, opacity: 1 },
  })),
  La = ({ icon: e, color: t, size: r, ...n }) => {
    let a = t || "currentColor",
      i = r || "14px";
    return u.createElement(
      "span",
      {
        "role": "img",
        "aria-hidden": "true",
        "style": {
          color: a,
          width: i,
          height: i,
          display: "inline-flex",
          fontSize: "inherit",
        },
        ...n,
      },
      e
    );
  },
  q4 = (e) => {
    let { svgProps: t, ...r } = e;
    return u.createElement(La, {
      icon: u.createElement(
        "svg",
        {
          width: "inherit",
          height: "inherit",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
        },
        u.createElement("path", {
          d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
          fill: "currentColor",
        })
      ),
      ...r,
    });
  },
  U4 = (e) => {
    let { svgProps: t, ...r } = e;
    return u.createElement(La, {
      icon: u.createElement(
        "svg",
        {
          width: "inherit",
          height: "inherit",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
        },
        u.createElement("path", {
          d: "M7.354 2.896l5.5 5.5a.5.5 0 01-.708.708L7 3.957 1.854 9.104a.5.5 0 11-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
          fill: "currentColor",
        })
      ),
      ...r,
    });
  },
  W4 = (e) => {
    let { svgProps: t, ...r } = e;
    return u.createElement(La, {
      icon: u.createElement(
        "svg",
        {
          width: "inherit",
          height: "inherit",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
        },
        u.createElement("path", {
          d: "M1.146 5.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 10.043 1.854 4.896a.5.5 0 10-.708.708z",
          fill: "currentColor",
        })
      ),
      ...r,
    });
  },
  G4 = (e) => {
    let { svgProps: t, ...r } = e;
    return u.createElement(La, {
      icon: u.createElement(
        "svg",
        {
          width: "inherit",
          height: "inherit",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
        },
        u.createElement("path", {
          d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
          fill: "currentColor",
        })
      ),
      ...r,
    });
  },
  K4 = u.forwardRef(({ className: e, children: t, ...r }, n) =>
    u.createElement(
      e6,
      { ref: n, ...r },
      t,
      u.createElement(D4, { asChild: !0 }, u.createElement(q4, { size: 12 }))
    )
  );
K4.displayName = md.displayName;
var Y4 = u.forwardRef(({ className: e, children: t, ...r }, n) =>
  u.createElement(
    L4,
    null,
    u.createElement(
      t6,
      { ref: n, ...r },
      u.createElement(n6, null, u.createElement(U4, { size: 12 })),
      u.createElement(r6, null, t),
      u.createElement(a6, null, u.createElement(W4, { size: 12 }))
    )
  )
);
Y4.displayName = gd.displayName;
var X4 = u.forwardRef(({ className: e, ...t }, r) =>
  u.createElement(hd, { ref: r, ...t })
);
X4.displayName = hd.displayName;
var J4 = u.forwardRef(({ className: e, children: t, ...r }, n) =>
  u.createElement(
    o6,
    { ref: n, ...r },
    u.createElement(i6, null, u.createElement(G4, { size: 12 })),
    u.createElement(I4, null, t)
  )
);
J4.displayName = yd.displayName;
var Q4 = u.forwardRef(({ className: e, ...t }, r) =>
  u.createElement(vd, { ref: r, ...t })
);
Q4.displayName = vd.displayName;
var e6 = O(md)(({ theme: e }) => ({
    "all": "unset",
    "display": "flex",
    "width": "100%",
    "height": "32px",
    "alignItems": "center",
    "justifyContent": "space-between",
    "transition": "box-shadow 200ms ease-out, opacity 200ms ease-out",
    "color": e.input.color,
    "background": e.input.background,
    "boxShadow": `${e.input.border} 0 0 0 1px inset`,
    "borderRadius": e.input.borderRadius,
    "fontSize": e.typography.size.s2 - 1,
    "padding": "6px 10px",
    "boxSizing": "border-box",
    "lineHeight": "20px",
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&[data-placeholder]": { color: e.textMutedColor },
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
  })),
  t6 = O(gd)(({ theme: e }) => ({
    boxSizing: "border-box",
    overflow: "hidden",
    backgroundColor: e.input.background,
    borderRadius: "6px",
    border:
      e.base === "dark"
        ? `1px solid ${e.input.border}`
        : "1px solid transparent",
    width: "100%",
    boxShadow:
      "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  })),
  r6 = O($4)(() => ({
    boxSizing: "border-box",
    width: "100%",
    padding: "5px",
  })),
  n6 = O(P4)(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25px",
    backgroundColor: e.input.background,
    color: e.input.color,
    cursor: "default",
  })),
  a6 = O(M4)(({ theme: e }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25px",
    backgroundColor: e.input.background,
    color: e.input.color,
    cursor: "default",
  })),
  o6 = O(yd)(({ theme: e }) => ({
    "fontSize": "13px",
    "lineHeight": 1,
    "color": e.input.color,
    "borderRadius": "3px",
    "display": "flex",
    "alignItems": "center",
    "height": "25px",
    "padding": "0 35px 0 25px",
    "position": "relative",
    "userSelect": "none",
    "&[data-disabled]": { color: "red", pointerEvents: "none" },
    "&[data-highlighted]": {
      outline: "none",
      backgroundColor: e.barSelectedColor,
      color: e.barBg,
    },
  })),
  i6 = O(F4)(() => ({
    position: "absolute",
    left: 0,
    width: "25px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  })),
  yr = u.forwardRef(({ as: e, children: t, icon: r, withArrow: n, ...a }, i) =>
    o.createElement(
      l6,
      { as: e, ref: i, ...a },
      o.createElement(s6, null, r, t),
      n && o.createElement(V4, { size: 8 })
    )
  );
yr.displayName = "Link";
var l6 = O.a(({ theme: e, variant: t = "primary" }) => ({
    "display": "inline-flex",
    "gap": 4,
    "alignItems": "center",
    "transition": "all 150ms ease-out",
    "textDecoration": "none",
    "lineHeight": 1,
    "color": `${(() =>
      t === "primary"
        ? e.color.secondary
        : t === "secondary"
        ? e.textMutedColor
        : t === "tertiary"
        ? e.color.dark
        : e.color.secondary)()}`,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: `${(() =>
        t === "primary"
          ? Ge(0.07, e.color.secondary)
          : t === "secondary"
          ? e.color.dark
          : t === "tertiary"
          ? e.color.darkest
          : Ge(0.07, e.color.secondary))()}`,
    },
    "&:active": {
      color: `${(() =>
        t === "primary"
          ? Ge(0.1, e.color.secondary)
          : t === "secondary"
          ? e.color.darker
          : t === "tertiary"
          ? e.textMutedColor
          : Ge(0.1, e.color.secondary))()}`,
    },
  })),
  s6 = O.span(({ theme: e }) => ({
    display: "inline-flex",
    gap: 6,
    alignItems: "center",
    fontSize: e.typography.size.s2 - 1,
  }));
function Gt() {
  return (
    (Gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gt.apply(this, arguments)
  );
}
const c6 = ["children", "options"],
  Us = [
    "allowFullScreen",
    "allowTransparency",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "charSet",
    "className",
    "classId",
    "colSpan",
    "contentEditable",
    "contextMenu",
    "crossOrigin",
    "encType",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "hrefLang",
    "inputMode",
    "keyParams",
    "keyType",
    "marginHeight",
    "marginWidth",
    "maxLength",
    "mediaGroup",
    "minLength",
    "noValidate",
    "radioGroup",
    "readOnly",
    "rowSpan",
    "spellCheck",
    "srcDoc",
    "srcLang",
    "srcSet",
    "tabIndex",
    "useMap",
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
  Ws = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
  u6 = ["style", "script"],
  d6 =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  p6 = /mailto:/i,
  f6 = /\n{2,}$/,
  bd = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  m6 = /^ *> ?/gm,
  g6 = /^ {2,}\n/,
  h6 = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  Ed = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  xd = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  y6 = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  v6 = /^(?:\n *)*\n/,
  b6 = /\r\n?/g,
  E6 = /^\[\^([^\]]+)](:.*)\n/,
  x6 = /^\[\^([^\]]+)]/,
  w6 = /\f/g,
  _6 = /^\s*?\[(x|\s)\]/,
  wd = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  _d = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Ad = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  qo =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  A6 = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  Cd = /^<!--[\s\S]*?(?:-->)/,
  C6 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  Uo = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  S6 = /^\{.*\}$/,
  R6 = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  T6 = /^<([^ >]+@[^ >]+)>/,
  O6 = /^<([^ >]+:\/[^ >]+)>/,
  k6 = /-([a-z])?/gi,
  Sd = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  D6 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  L6 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  $6 = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  I6 = /(\[|\])/g,
  F6 = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  P6 = /\t/g,
  M6 = /^ *\| */,
  B6 = /(^ *\||\| *$)/g,
  N6 = / *$/,
  V6 = /^ *:-+: *$/,
  H6 = /^ *:-+ *$/,
  j6 = /^ *-+: *$/,
  Z6 =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  z6 =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  q6 = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  U6 = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  W6 = /^\\([^0-9A-Za-z\s])/,
  G6 =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  K6 = /^\n+/,
  Y6 = /^([ \t]*)/,
  X6 = /\\([^\\])/g,
  Gs = / *\n+$/,
  J6 = /(?:^|\n)( *)$/,
  ol = "(?:\\d+\\.)",
  il = "(?:[*+-])";
function Rd(e) {
  return "( *)(" + (e === 1 ? ol : il) + ") +";
}
const Td = Rd(1),
  Od = Rd(2);
function kd(e) {
  return new RegExp("^" + (e === 1 ? Td : Od));
}
const Q6 = kd(1),
  ex = kd(2);
function Dd(e) {
  return new RegExp(
    "^" +
      (e === 1 ? Td : Od) +
      "[^\\n]*(?:\\n(?!\\1" +
      (e === 1 ? ol : il) +
      " )[^\\n]*)*(\\n|$)",
    "gm"
  );
}
const Ld = Dd(1),
  $d = Dd(2);
function Id(e) {
  const t = e === 1 ? ol : il;
  return new RegExp(
    "^( *)(" +
      t +
      ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
      t +
      " (?!" +
      t +
      " ))\\n*|\\s*\\n*$)"
  );
}
const Fd = Id(1),
  Pd = Id(2);
function Ks(e, t) {
  const r = t === 1,
    n = r ? Fd : Pd,
    a = r ? Ld : $d,
    i = r ? Q6 : ex;
  return {
    t(l, s, c) {
      const d = J6.exec(c);
      return d && (s.o || (!s._ && !s.u)) ? n.exec((l = d[1] + l)) : null;
    },
    i: Q.HIGH,
    l(l, s, c) {
      const d = r ? +l[2] : void 0,
        p = l[0]
          .replace(
            f6,
            `
`
          )
          .match(a);
      let h = !1;
      return {
        p: p.map(function (y, f) {
          const g = i.exec(y)[0].length,
            m = new RegExp("^ {1," + g + "}", "gm"),
            x = y.replace(m, "").replace(i, ""),
            v = f === p.length - 1,
            E =
              x.indexOf(`

`) !== -1 ||
              (v && h);
          h = E;
          const b = c._,
            w = c.o;
          let _;
          (c.o = !0),
            E
              ? ((c._ = !1),
                (_ = x.replace(
                  Gs,
                  `

`
                )))
              : ((c._ = !0), (_ = x.replace(Gs, "")));
          const A = s(_, c);
          return (c._ = b), (c.o = w), A;
        }),
        m: r,
        g: d,
      };
    },
    h: (l, s, c) =>
      e(
        l.m ? "ol" : "ul",
        { key: c.k, start: l.g },
        l.p.map(function (d, p) {
          return e("li", { key: p }, s(d, c));
        })
      ),
  };
}
const tx = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  rx = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Md = [bd, Ed, xd, wd, Ad, _d, Cd, Sd, Ld, Fd, $d, Pd],
  nx = [...Md, /^[^\n]+(?:  \n|\n{2,})/, qo, Uo];
function ax(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase();
}
function ox(e) {
  return j6.test(e)
    ? "right"
    : V6.test(e)
    ? "center"
    : H6.test(e)
    ? "left"
    : null;
}
function Ys(e, t, r) {
  const n = r.$;
  r.$ = !0;
  const a = t(e.trim(), r);
  r.$ = n;
  let i = [[]];
  return (
    a.forEach(function (l, s) {
      l.type === "tableSeparator"
        ? s !== 0 && s !== a.length - 1 && i.push([])
        : (l.type !== "text" ||
            (a[s + 1] != null && a[s + 1].type !== "tableSeparator") ||
            (l.v = l.v.replace(N6, "")),
          i[i.length - 1].push(l));
    }),
    i
  );
}
function ix(e, t, r) {
  r._ = !0;
  const n = Ys(e[1], t, r),
    a = e[2].replace(B6, "").split("|").map(ox),
    i = (function (l, s, c) {
      return l
        .trim()
        .split(
          `
`
        )
        .map(function (d) {
          return Ys(d, s, c);
        });
    })(e[3], t, r);
  return (r._ = !1), { S: a, A: i, L: n, type: "table" };
}
function Xs(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function Lt(e) {
  return function (t, r) {
    return r._ ? e.exec(t) : null;
  };
}
function $t(e) {
  return function (t, r) {
    return r._ || r.u ? e.exec(t) : null;
  };
}
function wt(e) {
  return function (t, r) {
    return r._ || r.u ? null : e.exec(t);
  };
}
function qr(e) {
  return function (t) {
    return e.exec(t);
  };
}
function lx(e, t, r) {
  if (
    t._ ||
    t.u ||
    (r &&
      !r.endsWith(`
`))
  )
    return null;
  let n = "";
  e.split(
    `
`
  ).every(
    (i) =>
      !Md.some((l) => l.test(i)) &&
      ((n +=
        i +
        `
`),
      i.trim())
  );
  const a = n.trimEnd();
  return a == "" ? null : [n, a];
}
function dr(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, "")
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return;
  } catch {
    return null;
  }
  return e;
}
function Js(e) {
  return e.replace(X6, "$1");
}
function qn(e, t, r) {
  const n = r._ || !1,
    a = r.u || !1;
  (r._ = !0), (r.u = !0);
  const i = e(t, r);
  return (r._ = n), (r.u = a), i;
}
function sx(e, t, r) {
  const n = r._ || !1,
    a = r.u || !1;
  (r._ = !1), (r.u = !0);
  const i = e(t, r);
  return (r._ = n), (r.u = a), i;
}
function cx(e, t, r) {
  return (r._ = !1), e(t, r);
}
const io = (e, t, r) => ({ v: qn(t, e[1], r) });
function lo() {
  return {};
}
function so() {
  return null;
}
function ux(...e) {
  return e.filter(Boolean).join(" ");
}
function co(e, t, r) {
  let n = e;
  const a = t.split(".");
  for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
  return n || r;
}
var Q;
function dx(e, t = {}) {
  (t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || ax),
    (t.namedCodesToUnicode = t.namedCodesToUnicode
      ? Gt({}, Ws, t.namedCodesToUnicode)
      : Ws);
  const r = t.createElement || u.createElement;
  function n(f, g, ...m) {
    const x = co(t.overrides, `${f}.props`, {});
    return r(
      (function (v, E) {
        const b = co(E, v);
        return b
          ? typeof b == "function" || (typeof b == "object" && "render" in b)
            ? b
            : co(E, `${v}.component`, v)
          : v;
      })(f, t.overrides),
      Gt({}, g, x, {
        className: ux(g == null ? void 0 : g.className, x.className) || void 0,
      }),
      ...m
    );
  }
  function a(f) {
    let g = !1;
    t.forceInline ? (g = !0) : t.forceBlock || (g = F6.test(f) === !1);
    const m = p(
      d(
        g
          ? f
          : `${f.trimEnd().replace(K6, "")}

`,
        { _: g }
      )
    );
    for (; typeof m[m.length - 1] == "string" && !m[m.length - 1].trim(); )
      m.pop();
    if (t.wrapper === null) return m;
    const x = t.wrapper || (g ? "span" : "div");
    let v;
    if (m.length > 1 || t.forceWrapper) v = m;
    else {
      if (m.length === 1)
        return (
          (v = m[0]), typeof v == "string" ? n("span", { key: "outer" }, v) : v
        );
      v = null;
    }
    return u.createElement(x, { key: "outer" }, v);
  }
  function i(f) {
    const g = f.match(d6);
    return g
      ? g.reduce(function (m, x, v) {
          const E = x.indexOf("=");
          if (E !== -1) {
            const b = (function (S) {
                return (
                  S.indexOf("-") !== -1 &&
                    S.match(C6) === null &&
                    (S = S.replace(k6, function (C, k) {
                      return k.toUpperCase();
                    })),
                  S
                );
              })(x.slice(0, E)).trim(),
              w = (function (S) {
                const C = S[0];
                return (C === '"' || C === "'") &&
                  S.length >= 2 &&
                  S[S.length - 1] === C
                  ? S.slice(1, -1)
                  : S;
              })(x.slice(E + 1).trim()),
              _ = Us[b] || b,
              A = (m[_] = (function (S, C) {
                return S === "style"
                  ? C.split(/;\s?/).reduce(function (k, D) {
                      const L = D.slice(0, D.indexOf(":"));
                      return (
                        (k[L.replace(/(-[a-z])/g, (I) => I[1].toUpperCase())] =
                          D.slice(L.length + 1).trim()),
                        k
                      );
                    }, {})
                  : S === "href"
                  ? dr(C)
                  : (C.match(S6) && (C = C.slice(1, C.length - 1)),
                    C === "true" || (C !== "false" && C));
              })(b, w));
            typeof A == "string" &&
              (qo.test(A) || Uo.test(A)) &&
              (m[_] = u.cloneElement(a(A.trim()), { key: v }));
          } else x !== "style" && (m[Us[x] || x] = !0);
          return m;
        }, {})
      : null;
  }
  const l = [],
    s = {},
    c = {
      blockQuote: {
        t: wt(bd),
        i: Q.HIGH,
        l: (f, g, m) => ({ v: g(f[0].replace(m6, ""), m) }),
        h: (f, g, m) => n("blockquote", { key: m.k }, g(f.v, m)),
      },
      breakLine: {
        t: qr(g6),
        i: Q.HIGH,
        l: lo,
        h: (f, g, m) => n("br", { key: m.k }),
      },
      breakThematic: {
        t: wt(h6),
        i: Q.HIGH,
        l: lo,
        h: (f, g, m) => n("hr", { key: m.k }),
      },
      codeBlock: {
        t: wt(xd),
        i: Q.MAX,
        l: (f) => ({
          v: f[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
          M: void 0,
        }),
        h: (f, g, m) =>
          n(
            "pre",
            { key: m.k },
            n("code", Gt({}, f.O, { className: f.M ? `lang-${f.M}` : "" }), f.v)
          ),
      },
      codeFenced: {
        t: wt(Ed),
        i: Q.MAX,
        l: (f) => ({
          O: i(f[3] || ""),
          v: f[4],
          M: f[2] || void 0,
          type: "codeBlock",
        }),
      },
      codeInline: {
        t: $t(y6),
        i: Q.LOW,
        l: (f) => ({ v: f[2] }),
        h: (f, g, m) => n("code", { key: m.k }, f.v),
      },
      footnote: {
        t: wt(E6),
        i: Q.MAX,
        l: (f) => (l.push({ I: f[2], j: f[1] }), {}),
        h: so,
      },
      footnoteReference: {
        t: Lt(x6),
        i: Q.HIGH,
        l: (f) => ({ v: f[1], B: `#${t.slugify(f[1])}` }),
        h: (f, g, m) =>
          n("a", { key: m.k, href: dr(f.B) }, n("sup", { key: m.k }, f.v)),
      },
      gfmTask: {
        t: Lt(_6),
        i: Q.HIGH,
        l: (f) => ({ R: f[1].toLowerCase() === "x" }),
        h: (f, g, m) =>
          n("input", {
            checked: f.R,
            key: m.k,
            readOnly: !0,
            type: "checkbox",
          }),
      },
      heading: {
        t: wt(t.enforceAtxHeadings ? _d : wd),
        i: Q.HIGH,
        l: (f, g, m) => ({
          v: qn(g, f[2], m),
          T: t.slugify(f[2]),
          C: f[1].length,
        }),
        h: (f, g, m) => n(`h${f.C}`, { id: f.T, key: m.k }, g(f.v, m)),
      },
      headingSetext: {
        t: wt(Ad),
        i: Q.MAX,
        l: (f, g, m) => ({
          v: qn(g, f[1], m),
          C: f[2] === "=" ? 1 : 2,
          type: "heading",
        }),
      },
      htmlComment: { t: qr(Cd), i: Q.HIGH, l: () => ({}), h: so },
      image: {
        t: $t(rx),
        i: Q.HIGH,
        l: (f) => ({ D: f[1], B: Js(f[2]), F: f[3] }),
        h: (f, g, m) =>
          n("img", {
            key: m.k,
            alt: f.D || void 0,
            title: f.F || void 0,
            src: dr(f.B),
          }),
      },
      link: {
        t: Lt(tx),
        i: Q.LOW,
        l: (f, g, m) => ({ v: sx(g, f[1], m), B: Js(f[2]), F: f[3] }),
        h: (f, g, m) =>
          n("a", { key: m.k, href: dr(f.B), title: f.F }, g(f.v, m)),
      },
      linkAngleBraceStyleDetector: {
        t: Lt(O6),
        i: Q.MAX,
        l: (f) => ({ v: [{ v: f[1], type: "text" }], B: f[1], type: "link" }),
      },
      linkBareUrlDetector: {
        t: (f, g) => (g.N ? null : Lt(R6)(f, g)),
        i: Q.MAX,
        l: (f) => ({
          v: [{ v: f[1], type: "text" }],
          B: f[1],
          F: void 0,
          type: "link",
        }),
      },
      linkMailtoDetector: {
        t: Lt(T6),
        i: Q.MAX,
        l(f) {
          let g = f[1],
            m = f[1];
          return (
            p6.test(m) || (m = "mailto:" + m),
            {
              v: [{ v: g.replace("mailto:", ""), type: "text" }],
              B: m,
              type: "link",
            }
          );
        },
      },
      orderedList: Ks(n, 1),
      unorderedList: Ks(n, 2),
      newlineCoalescer: {
        t: wt(v6),
        i: Q.LOW,
        l: lo,
        h: () => `
`,
      },
      paragraph: {
        t: lx,
        i: Q.LOW,
        l: io,
        h: (f, g, m) => n("p", { key: m.k }, g(f.v, m)),
      },
      ref: {
        t: Lt(D6),
        i: Q.MAX,
        l: (f) => ((s[f[1]] = { B: f[2], F: f[4] }), {}),
        h: so,
      },
      refImage: {
        t: $t(L6),
        i: Q.MAX,
        l: (f) => ({ D: f[1] || void 0, P: f[2] }),
        h: (f, g, m) =>
          n("img", { key: m.k, alt: f.D, src: dr(s[f.P].B), title: s[f.P].F }),
      },
      refLink: {
        t: Lt($6),
        i: Q.MAX,
        l: (f, g, m) => ({
          v: g(f[1], m),
          Z: g(f[0].replace(I6, "\\$1"), m),
          P: f[2],
        }),
        h: (f, g, m) =>
          s[f.P]
            ? n(
                "a",
                { key: m.k, href: dr(s[f.P].B), title: s[f.P].F },
                g(f.v, m)
              )
            : n("span", { key: m.k }, g(f.Z, m)),
      },
      table: {
        t: wt(Sd),
        i: Q.HIGH,
        l: ix,
        h: (f, g, m) =>
          n(
            "table",
            { key: m.k },
            n(
              "thead",
              null,
              n(
                "tr",
                null,
                f.L.map(function (x, v) {
                  return n("th", { key: v, style: Xs(f, v) }, g(x, m));
                })
              )
            ),
            n(
              "tbody",
              null,
              f.A.map(function (x, v) {
                return n(
                  "tr",
                  { key: v },
                  x.map(function (E, b) {
                    return n("td", { key: b, style: Xs(f, b) }, g(E, m));
                  })
                );
              })
            )
          ),
      },
      tableSeparator: {
        t: function (f, g) {
          return g.$ ? ((g._ = !0), M6.exec(f)) : null;
        },
        i: Q.HIGH,
        l: function () {
          return { type: "tableSeparator" };
        },
        h: () => " | ",
      },
      text: {
        t: qr(G6),
        i: Q.MIN,
        l: (f) => ({
          v: f[0].replace(A6, (g, m) =>
            t.namedCodesToUnicode[m] ? t.namedCodesToUnicode[m] : g
          ),
        }),
        h: (f) => f.v,
      },
      textBolded: {
        t: $t(Z6),
        i: Q.MED,
        l: (f, g, m) => ({ v: g(f[2], m) }),
        h: (f, g, m) => n("strong", { key: m.k }, g(f.v, m)),
      },
      textEmphasized: {
        t: $t(z6),
        i: Q.LOW,
        l: (f, g, m) => ({ v: g(f[2], m) }),
        h: (f, g, m) => n("em", { key: m.k }, g(f.v, m)),
      },
      textEscaped: {
        t: $t(W6),
        i: Q.HIGH,
        l: (f) => ({ v: f[1], type: "text" }),
      },
      textMarked: {
        t: $t(q6),
        i: Q.LOW,
        l: io,
        h: (f, g, m) => n("mark", { key: m.k }, g(f.v, m)),
      },
      textStrikethroughed: {
        t: $t(U6),
        i: Q.LOW,
        l: io,
        h: (f, g, m) => n("del", { key: m.k }, g(f.v, m)),
      },
    };
  t.disableParsingRawHTML !== !0 &&
    ((c.htmlBlock = {
      t: qr(qo),
      i: Q.HIGH,
      l(f, g, m) {
        const [, x] = f[3].match(Y6),
          v = new RegExp(`^${x}`, "gm"),
          E = f[3].replace(v, ""),
          b = ((w = E), nx.some((C) => C.test(w)) ? cx : qn);
        var w;
        const _ = f[1].toLowerCase(),
          A = u6.indexOf(_) !== -1;
        m.N = m.N || _ === "a";
        const S = A ? f[3] : b(g, E, m);
        return (m.N = !1), { O: i(f[2]), v: S, G: A, H: A ? _ : f[1] };
      },
      h: (f, g, m) => n(f.H, Gt({ key: m.k }, f.O), f.G ? f.v : g(f.v, m)),
    }),
    (c.htmlSelfClosing = {
      t: qr(Uo),
      i: Q.HIGH,
      l: (f) => ({ O: i(f[2] || ""), H: f[1] }),
      h: (f, g, m) => n(f.H, Gt({}, f.O, { key: m.k })),
    }));
  const d = (function (f) {
      let g = Object.keys(f);
      function m(x, v) {
        let E = [],
          b = "";
        for (; x; ) {
          let w = 0;
          for (; w < g.length; ) {
            const _ = g[w],
              A = f[_],
              S = A.t(x, v, b);
            if (S) {
              const C = S[0];
              x = x.substring(C.length);
              const k = A.l(S, m, v);
              k.type == null && (k.type = _), E.push(k), (b = C);
              break;
            }
            w++;
          }
        }
        return E;
      }
      return (
        g.sort(function (x, v) {
          let E = f[x].i,
            b = f[v].i;
          return E !== b ? E - b : x < v ? -1 : 1;
        }),
        function (x, v) {
          return m(
            (function (E) {
              return E.replace(
                b6,
                `
`
              )
                .replace(w6, "")
                .replace(P6, "    ");
            })(x),
            v
          );
        }
      );
    })(c),
    p =
      ((h = (function (f) {
        return function (g, m, x) {
          return f[g.type].h(g, m, x);
        };
      })(c)),
      function f(g, m = {}) {
        if (Array.isArray(g)) {
          const x = m.k,
            v = [];
          let E = !1;
          for (let b = 0; b < g.length; b++) {
            m.k = b;
            const w = f(g[b], m),
              _ = typeof w == "string";
            _ && E ? (v[v.length - 1] += w) : w !== null && v.push(w), (E = _);
          }
          return (m.k = x), v;
        }
        return h(g, f, m);
      });
  var h;
  const y = a(e);
  return l.length
    ? n(
        "div",
        null,
        y,
        n(
          "footer",
          { key: "footer" },
          l.map(function (f) {
            return n(
              "div",
              { id: t.slugify(f.j), key: f.j },
              f.j,
              p(d(f.I, { _: !0 }))
            );
          })
        )
      )
    : y;
}
(function (e) {
  (e[(e.MAX = 0)] = "MAX"),
    (e[(e.HIGH = 1)] = "HIGH"),
    (e[(e.MED = 2)] = "MED"),
    (e[(e.LOW = 3)] = "LOW"),
    (e[(e.MIN = 4)] = "MIN");
})(Q || (Q = {}));
const Bd = (e) => {
  let { children: t, options: r } = e,
    n = (function (a, i) {
      if (a == null) return {};
      var l,
        s,
        c = {},
        d = Object.keys(a);
      for (s = 0; s < d.length; s++)
        i.indexOf((l = d[s])) >= 0 || (c[l] = a[l]);
      return c;
    })(e, c6);
  return u.cloneElement(dx(t, r), n);
};
function px(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e)) return i;
  return -1;
}
var fx = px;
function mx(e) {
  return e !== e;
}
var gx = mx;
function hx(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
  return -1;
}
var yx = hx,
  vx = fx,
  bx = gx,
  Ex = yx;
function xx(e, t, r) {
  return t === t ? Ex(e, t, r) : vx(e, bx, r);
}
var wx = xx,
  _x = wx;
function Ax(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && _x(e, t, 0) > -1;
}
var Cx = Ax;
function Sx(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n])) return !0;
  return !1;
}
var Rx = Sx;
function Tx() {}
var Ox = Tx,
  uo = L1,
  kx = Ox,
  Dx = Lc,
  Lx = 1 / 0,
  $x =
    uo && 1 / Dx(new uo([, -0]))[1] == Lx
      ? function (e) {
          return new uo(e);
        }
      : kx,
  Ix = $x,
  Fx = $1,
  Px = Cx,
  Mx = Rx,
  Bx = I1,
  Nx = Ix,
  Vx = Lc,
  Hx = 200;
function jx(e, t, r) {
  var n = -1,
    a = Px,
    i = e.length,
    l = !0,
    s = [],
    c = s;
  if (r) (l = !1), (a = Mx);
  else if (i >= Hx) {
    var d = t ? null : Nx(e);
    if (d) return Vx(d);
    (l = !1), (a = Bx), (c = new Fx());
  } else c = t ? [] : s;
  e: for (; ++n < i; ) {
    var p = e[n],
      h = t ? t(p) : p;
    if (((p = r || p !== 0 ? p : 0), l && h === h)) {
      for (var y = c.length; y--; ) if (c[y] === h) continue e;
      t && c.push(h), s.push(p);
    } else a(c, h, r) || (c !== s && c.push(h), s.push(p));
  }
  return s;
}
var Zx = jx,
  zx = Zx;
function qx(e) {
  return e && e.length ? zx(e) : [];
}
var Ux = qx;
const Wx = dn(Ux);
function Gx(e, t) {
  for (
    var r = -1, n = e == null ? 0 : e.length;
    ++r < n && t(e[r], r, e) !== !1;

  );
  return e;
}
var Kx = Gx,
  Yx = _a,
  Xx = $c;
function Jx(e, t) {
  return e && Yx(t, Xx(t), e);
}
var Qx = Jx,
  e8 = _a,
  t8 = Xi;
function r8(e, t) {
  return e && e8(t, t8(t), e);
}
var n8 = r8,
  a8 = _a,
  o8 = Dc;
function i8(e, t) {
  return a8(e, o8(e), t);
}
var l8 = i8,
  s8 = _a,
  c8 = Y0;
function u8(e, t) {
  return s8(e, c8(e), t);
}
var d8 = u8,
  p8 = Object.prototype,
  f8 = p8.hasOwnProperty;
function m8(e) {
  var t = e.length,
    r = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      f8.call(e, "index") &&
      ((r.index = e.index), (r.input = e.input)),
    r
  );
}
var g8 = m8,
  h8 = Ki;
function y8(e, t) {
  var r = t ? h8(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var v8 = y8,
  b8 = /\w*$/;
function E8(e) {
  var t = new e.constructor(e.source, b8.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var x8 = E8,
  Qs = F1,
  ec = Qs ? Qs.prototype : void 0,
  tc = ec ? ec.valueOf : void 0;
function w8(e) {
  return tc ? Object(tc.call(e)) : {};
}
var _8 = w8,
  A8 = Ki,
  C8 = v8,
  S8 = x8,
  R8 = _8,
  T8 = vv,
  O8 = "[object Boolean]",
  k8 = "[object Date]",
  D8 = "[object Map]",
  L8 = "[object Number]",
  $8 = "[object RegExp]",
  I8 = "[object Set]",
  F8 = "[object String]",
  P8 = "[object Symbol]",
  M8 = "[object ArrayBuffer]",
  B8 = "[object DataView]",
  N8 = "[object Float32Array]",
  V8 = "[object Float64Array]",
  H8 = "[object Int8Array]",
  j8 = "[object Int16Array]",
  Z8 = "[object Int32Array]",
  z8 = "[object Uint8Array]",
  q8 = "[object Uint8ClampedArray]",
  U8 = "[object Uint16Array]",
  W8 = "[object Uint32Array]";
function G8(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case M8:
      return A8(e);
    case O8:
    case k8:
      return new n(+e);
    case B8:
      return C8(e, r);
    case N8:
    case V8:
    case H8:
    case j8:
    case Z8:
    case z8:
    case q8:
    case U8:
    case W8:
      return T8(e, r);
    case D8:
      return new n();
    case L8:
    case F8:
      return new n(e);
    case $8:
      return S8(e);
    case I8:
      return new n();
    case P8:
      return R8(e);
  }
}
var K8 = G8,
  Y8 = ei,
  X8 = Ic,
  J8 = "[object Map]";
function Q8(e) {
  return X8(e) && Y8(e) == J8;
}
var ew = Q8,
  tw = ew,
  rw = Pc,
  rc = Fc,
  nc = rc && rc.isMap,
  nw = nc ? rw(nc) : tw,
  aw = nw,
  ow = ei,
  iw = Ic,
  lw = "[object Set]";
function sw(e) {
  return iw(e) && ow(e) == lw;
}
var cw = sw,
  uw = cw,
  dw = Pc,
  ac = Fc,
  oc = ac && ac.isSet,
  pw = oc ? dw(oc) : uw,
  fw = pw,
  mw = P1,
  gw = Kx,
  hw = Yi,
  yw = Qx,
  vw = n8,
  bw = mv,
  Ew = Ev,
  xw = l8,
  ww = d8,
  _w = B1,
  Aw = X0,
  Cw = ei,
  Sw = g8,
  Rw = K8,
  Tw = Tv,
  Ow = N1,
  kw = M1,
  Dw = aw,
  Lw = oa,
  $w = fw,
  Iw = $c,
  Fw = Xi,
  Pw = 1,
  Mw = 2,
  Bw = 4,
  Nd = "[object Arguments]",
  Nw = "[object Array]",
  Vw = "[object Boolean]",
  Hw = "[object Date]",
  jw = "[object Error]",
  Vd = "[object Function]",
  Zw = "[object GeneratorFunction]",
  zw = "[object Map]",
  qw = "[object Number]",
  Hd = "[object Object]",
  Uw = "[object RegExp]",
  Ww = "[object Set]",
  Gw = "[object String]",
  Kw = "[object Symbol]",
  Yw = "[object WeakMap]",
  Xw = "[object ArrayBuffer]",
  Jw = "[object DataView]",
  Qw = "[object Float32Array]",
  e_ = "[object Float64Array]",
  t_ = "[object Int8Array]",
  r_ = "[object Int16Array]",
  n_ = "[object Int32Array]",
  a_ = "[object Uint8Array]",
  o_ = "[object Uint8ClampedArray]",
  i_ = "[object Uint16Array]",
  l_ = "[object Uint32Array]",
  se = {};
se[Nd] =
  se[Nw] =
  se[Xw] =
  se[Jw] =
  se[Vw] =
  se[Hw] =
  se[Qw] =
  se[e_] =
  se[t_] =
  se[r_] =
  se[n_] =
  se[zw] =
  se[qw] =
  se[Hd] =
  se[Uw] =
  se[Ww] =
  se[Gw] =
  se[Kw] =
  se[a_] =
  se[o_] =
  se[i_] =
  se[l_] =
    !0;
se[jw] = se[Vd] = se[Yw] = !1;
function Un(e, t, r, n, a, i) {
  var l,
    s = t & Pw,
    c = t & Mw,
    d = t & Bw;
  if ((r && (l = a ? r(e, n, a, i) : r(e)), l !== void 0)) return l;
  if (!Lw(e)) return e;
  var p = Ow(e);
  if (p) {
    if (((l = Sw(e)), !s)) return Ew(e, l);
  } else {
    var h = Cw(e),
      y = h == Vd || h == Zw;
    if (kw(e)) return bw(e, s);
    if (h == Hd || h == Nd || (y && !a)) {
      if (((l = c || y ? {} : Tw(e)), !s))
        return c ? ww(e, vw(l, e)) : xw(e, yw(l, e));
    } else {
      if (!se[h]) return a ? e : {};
      l = Rw(e, h, s);
    }
  }
  i || (i = new mw());
  var f = i.get(e);
  if (f) return f;
  i.set(e, l),
    $w(e)
      ? e.forEach(function (x) {
          l.add(Un(x, t, r, x, e, i));
        })
      : Dw(e) &&
        e.forEach(function (x, v) {
          l.set(v, Un(x, t, r, v, e, i));
        });
  var g = d ? (c ? Aw : _w) : c ? Fw : Iw,
    m = p ? void 0 : g(e);
  return (
    gw(m || e, function (x, v) {
      m && ((v = x), (x = e[v])), hw(l, v, Un(x, t, r, v, e, i));
    }),
    l
  );
}
var s_ = Un,
  c_ = s_,
  u_ = 1,
  d_ = 4;
function p_(e) {
  return c_(e, u_ | d_);
}
var f_ = p_;
const m_ = dn(f_);
var jd = { exports: {} },
  po,
  ic;
function g_() {
  return (
    ic ||
      ((ic = 1),
      (po = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        hasInnerContainers: !1,
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: "",
        disableTocScrollSync: !1,
        tocScrollOffset: 0,
      })),
    po
  );
}
var fo, lc;
function h_() {
  return (
    lc ||
      ((lc = 1),
      (fo = function (e) {
        var t = [].forEach,
          r = [].some,
          n = document.body,
          a,
          i = !0,
          l = " ";
        function s(v, E) {
          var b = E.appendChild(d(v));
          if (v.children.length) {
            var w = p(v.isCollapsed);
            v.children.forEach(function (_) {
              s(_, w);
            }),
              b.appendChild(w);
          }
        }
        function c(v, E) {
          var b = !1,
            w = p(b);
          if (
            (E.forEach(function (_) {
              s(_, w);
            }),
            (a = v || a),
            a !== null)
          )
            return (
              a.firstChild && a.removeChild(a.firstChild),
              E.length === 0 ? a : a.appendChild(w)
            );
        }
        function d(v) {
          var E = document.createElement("li"),
            b = document.createElement("a");
          return (
            e.listItemClass && E.setAttribute("class", e.listItemClass),
            e.onClick && (b.onclick = e.onClick),
            e.includeTitleTags && b.setAttribute("title", v.textContent),
            e.includeHtml && v.childNodes.length
              ? t.call(v.childNodes, function (w) {
                  b.appendChild(w.cloneNode(!0));
                })
              : (b.textContent = v.textContent),
            b.setAttribute("href", e.basePath + "#" + v.id),
            b.setAttribute(
              "class",
              e.linkClass +
                l +
                "node-name--" +
                v.nodeName +
                l +
                e.extraLinkClasses
            ),
            E.appendChild(b),
            E
          );
        }
        function p(v) {
          var E = e.orderedList ? "ol" : "ul",
            b = document.createElement(E),
            w = e.listClass + l + e.extraListClasses;
          return (
            v &&
              ((w = w + l + e.collapsibleClass),
              (w = w + l + e.isCollapsedClass)),
            b.setAttribute("class", w),
            b
          );
        }
        function h() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var v;
            v = document.querySelector(e.scrollContainer).scrollTop;
          } else v = document.documentElement.scrollTop || n.scrollTop;
          var E = document.querySelector(e.positionFixedSelector);
          e.fixedSidebarOffset === "auto" &&
            (e.fixedSidebarOffset = a.offsetTop),
            v > e.fixedSidebarOffset
              ? E.className.indexOf(e.positionFixedClass) === -1 &&
                (E.className += l + e.positionFixedClass)
              : (E.className = E.className
                  .split(l + e.positionFixedClass)
                  .join(""));
        }
        function y(v) {
          var E = 0;
          return (
            v !== null &&
              ((E = v.offsetTop),
              e.hasInnerContainers && (E += y(v.offsetParent))),
            E
          );
        }
        function f(v) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var E;
            E = document.querySelector(e.scrollContainer).scrollTop;
          } else E = document.documentElement.scrollTop || n.scrollTop;
          e.positionFixedSelector && h();
          var b = v,
            w;
          if (i && a !== null && b.length > 0) {
            r.call(b, function (L, I) {
              if (y(L) > E + e.headingsOffset + 10) {
                var $ = I === 0 ? I : I - 1;
                return (w = b[$]), !0;
              } else if (I === b.length - 1) return (w = b[b.length - 1]), !0;
            });
            var _ = a.querySelector("." + e.activeLinkClass),
              A = a.querySelector(
                "." +
                  e.linkClass +
                  ".node-name--" +
                  w.nodeName +
                  '[href="' +
                  e.basePath +
                  "#" +
                  w.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") +
                  '"]'
              );
            if (_ === A) return;
            var S = a.querySelectorAll("." + e.linkClass);
            t.call(S, function (L) {
              L.className = L.className.split(l + e.activeLinkClass).join("");
            });
            var C = a.querySelectorAll("." + e.listItemClass);
            t.call(C, function (L) {
              L.className = L.className
                .split(l + e.activeListItemClass)
                .join("");
            }),
              A &&
                A.className.indexOf(e.activeLinkClass) === -1 &&
                (A.className += l + e.activeLinkClass);
            var k = A && A.parentNode;
            k &&
              k.className.indexOf(e.activeListItemClass) === -1 &&
              (k.className += l + e.activeListItemClass);
            var D = a.querySelectorAll(
              "." + e.listClass + "." + e.collapsibleClass
            );
            t.call(D, function (L) {
              L.className.indexOf(e.isCollapsedClass) === -1 &&
                (L.className += l + e.isCollapsedClass);
            }),
              A &&
                A.nextSibling &&
                A.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                (A.nextSibling.className = A.nextSibling.className
                  .split(l + e.isCollapsedClass)
                  .join("")),
              g(A && A.parentNode.parentNode);
          }
        }
        function g(v) {
          return v &&
            v.className.indexOf(e.collapsibleClass) !== -1 &&
            v.className.indexOf(e.isCollapsedClass) !== -1
            ? ((v.className = v.className
                .split(l + e.isCollapsedClass)
                .join("")),
              g(v.parentNode.parentNode))
            : v;
        }
        function m(v) {
          var E = v.target || v.srcElement;
          typeof E.className != "string" ||
            E.className.indexOf(e.linkClass) === -1 ||
            (i = !1);
        }
        function x() {
          i = !0;
        }
        return {
          enableTocAnimation: x,
          disableTocAnimation: m,
          render: c,
          updateToc: f,
        };
      })),
    fo
  );
}
var mo, sc;
function y_() {
  return (
    sc ||
      ((sc = 1),
      (mo = function (t) {
        var r = [].reduce;
        function n(p) {
          return p[p.length - 1];
        }
        function a(p) {
          return +p.nodeName.toUpperCase().replace("H", "");
        }
        function i(p) {
          try {
            return (
              p instanceof window.HTMLElement ||
              p instanceof window.parent.HTMLElement
            );
          } catch {
            return p instanceof window.HTMLElement;
          }
        }
        function l(p) {
          if (!i(p)) return p;
          if (t.ignoreHiddenElements && (!p.offsetHeight || !p.offsetParent))
            return null;
          const h =
            p.getAttribute("data-heading-label") ||
            (t.headingLabelCallback
              ? String(t.headingLabelCallback(p.textContent))
              : p.textContent.trim());
          var y = {
            id: p.id,
            children: [],
            nodeName: p.nodeName,
            headingLevel: a(p),
            textContent: h,
          };
          return (
            t.includeHtml && (y.childNodes = p.childNodes),
            t.headingObjectCallback ? t.headingObjectCallback(y, p) : y
          );
        }
        function s(p, h) {
          for (
            var y = l(p),
              f = y.headingLevel,
              g = h,
              m = n(g),
              x = m ? m.headingLevel : 0,
              v = f - x;
            v > 0 && ((m = n(g)), !(m && f === m.headingLevel));

          )
            m && m.children !== void 0 && (g = m.children), v--;
          return f >= t.collapseDepth && (y.isCollapsed = !0), g.push(y), g;
        }
        function c(p, h) {
          var y = h;
          t.ignoreSelector &&
            (y = h.split(",").map(function (g) {
              return g.trim() + ":not(" + t.ignoreSelector + ")";
            }));
          try {
            return p.querySelectorAll(y);
          } catch {
            return console.warn("Headers not found with selector: " + y), null;
          }
        }
        function d(p) {
          return r.call(
            p,
            function (y, f) {
              var g = l(f);
              return g && s(g, y.nest), y;
            },
            { nest: [] }
          );
        }
        return { nestHeadingsArray: d, selectHeadings: c };
      })),
    mo
  );
}
var go, cc;
function v_() {
  return (
    cc ||
      ((cc = 1),
      (go = function (t) {
        var r = t.tocElement || document.querySelector(t.tocSelector);
        if (r && r.scrollHeight > r.clientHeight) {
          var n = r.querySelector("." + t.activeListItemClass);
          n && (r.scrollTop = n.offsetTop - t.tocScrollOffset);
        }
      })),
    go
  );
}
var ho = {},
  uc;
function b_() {
  if (uc) return ho;
  (uc = 1), (ho.initSmoothScrolling = e);
  function e(r) {
    var n = r.duration,
      a = r.offset,
      i = location.hash ? c(location.href) : location.href;
    l();
    function l() {
      document.body.addEventListener("click", p, !1);
      function p(h) {
        !s(h.target) ||
          h.target.className.indexOf("no-smooth-scroll") > -1 ||
          (h.target.href.charAt(h.target.href.length - 2) === "#" &&
            h.target.href.charAt(h.target.href.length - 1) === "!") ||
          h.target.className.indexOf(r.linkClass) === -1 ||
          t(h.target.hash, {
            duration: n,
            offset: a,
            callback: function () {
              d(h.target.hash);
            },
          });
      }
    }
    function s(p) {
      return (
        p.tagName.toLowerCase() === "a" &&
        (p.hash.length > 0 || p.href.charAt(p.href.length - 1) === "#") &&
        (c(p.href) === i || c(p.href) + "#" === i)
      );
    }
    function c(p) {
      return p.slice(0, p.lastIndexOf("#"));
    }
    function d(p) {
      var h = document.getElementById(p.substring(1));
      h &&
        (/^(?:a|select|input|button|textarea)$/i.test(h.tagName) ||
          (h.tabIndex = -1),
        h.focus());
    }
  }
  function t(r, n) {
    var a = window.pageYOffset,
      i = {
        duration: n.duration,
        offset: n.offset || 0,
        callback: n.callback,
        easing: n.easing || f,
      },
      l =
        document.querySelector(
          '[id="' + decodeURI(r).split("#").join("") + '"]'
        ) || document.querySelector('[id="' + r.split("#").join("") + '"]'),
      s =
        typeof r == "string"
          ? i.offset +
            (r
              ? (l && l.getBoundingClientRect().top) || 0
              : -(
                  document.documentElement.scrollTop || document.body.scrollTop
                ))
          : r,
      c = typeof i.duration == "function" ? i.duration(s) : i.duration,
      d,
      p;
    requestAnimationFrame(function (g) {
      (d = g), h(g);
    });
    function h(g) {
      (p = g - d),
        window.scrollTo(0, i.easing(p, a, s, c)),
        p < c ? requestAnimationFrame(h) : y();
    }
    function y() {
      window.scrollTo(0, a + s),
        typeof i.callback == "function" && i.callback();
    }
    function f(g, m, x, v) {
      return (
        (g /= v / 2),
        g < 1 ? (x / 2) * g * g + m : (g--, (-x / 2) * (g * (g - 2) - 1) + m)
      );
    }
  }
  return ho;
}
(function (e, t) {
  (function (r, n) {
    e.exports = n(r);
  })(typeof Na < "u" ? Na : window || Na, function (r) {
    var n = g_(),
      a = {},
      i = {},
      l = h_(),
      s = y_(),
      c = v_(),
      d,
      p,
      h =
        !!r &&
        !!r.document &&
        !!r.document.querySelector &&
        !!r.addEventListener;
    if (typeof window > "u" && !h) return;
    var y,
      f = Object.prototype.hasOwnProperty;
    function g() {
      for (var E = {}, b = 0; b < arguments.length; b++) {
        var w = arguments[b];
        for (var _ in w) f.call(w, _) && (E[_] = w[_]);
      }
      return E;
    }
    function m(E, b, w) {
      b || (b = 250);
      var _, A;
      return function () {
        var S = w || this,
          C = +new Date(),
          k = arguments;
        _ && C < _ + b
          ? (clearTimeout(A),
            (A = setTimeout(function () {
              (_ = C), E.apply(S, k);
            }, b)))
          : ((_ = C), E.apply(S, k));
      };
    }
    function x(E) {
      try {
        return E.contentElement || document.querySelector(E.contentSelector);
      } catch {
        return (
          console.warn("Contents element not found: " + E.contentSelector), null
        );
      }
    }
    function v(E) {
      try {
        return E.tocElement || document.querySelector(E.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + E.tocSelector), null;
      }
    }
    return (
      (i.destroy = function () {
        var E = v(a);
        E !== null &&
          (a.skipRendering || (E && (E.innerHTML = "")),
          a.scrollContainer && document.querySelector(a.scrollContainer)
            ? (document
                .querySelector(a.scrollContainer)
                .removeEventListener("scroll", this._scrollListener, !1),
              document
                .querySelector(a.scrollContainer)
                .removeEventListener("resize", this._scrollListener, !1),
              d &&
                document
                  .querySelector(a.scrollContainer)
                  .removeEventListener("click", this._clickListener, !1))
            : (document.removeEventListener("scroll", this._scrollListener, !1),
              document.removeEventListener("resize", this._scrollListener, !1),
              d &&
                document.removeEventListener(
                  "click",
                  this._clickListener,
                  !1
                )));
      }),
      (i.init = function (E) {
        if (h) {
          (a = g(n, E || {})),
            (this.options = a),
            (this.state = {}),
            a.scrollSmooth &&
              ((a.duration = a.scrollSmoothDuration),
              (a.offset = a.scrollSmoothOffset),
              (i.scrollSmooth = b_().initSmoothScrolling(a))),
            (d = l(a)),
            (p = s(a)),
            (this._buildHtml = d),
            (this._parseContent = p),
            (this._headingsArray = y),
            i.destroy();
          var b = x(a);
          if (b !== null) {
            var w = v(a);
            if (
              w !== null &&
              ((y = p.selectHeadings(b, a.headingSelector)), y !== null)
            ) {
              var _ = p.nestHeadingsArray(y),
                A = _.nest;
              a.skipRendering || d.render(w, A),
                (this._scrollListener = m(function (C) {
                  d.updateToc(y), !a.disableTocScrollSync && c(a);
                  var k =
                    C &&
                    C.target &&
                    C.target.scrollingElement &&
                    C.target.scrollingElement.scrollTop === 0;
                  ((C && (C.eventPhase === 0 || C.currentTarget === null)) ||
                    k) &&
                    (d.updateToc(y),
                    a.scrollEndCallback && a.scrollEndCallback(C));
                }, a.throttleTimeout)),
                this._scrollListener(),
                a.scrollContainer && document.querySelector(a.scrollContainer)
                  ? (document
                      .querySelector(a.scrollContainer)
                      .addEventListener("scroll", this._scrollListener, !1),
                    document
                      .querySelector(a.scrollContainer)
                      .addEventListener("resize", this._scrollListener, !1))
                  : (document.addEventListener(
                      "scroll",
                      this._scrollListener,
                      !1
                    ),
                    document.addEventListener(
                      "resize",
                      this._scrollListener,
                      !1
                    ));
              var S = null;
              return (
                (this._clickListener = m(function (C) {
                  a.scrollSmooth && d.disableTocAnimation(C),
                    d.updateToc(y),
                    S && clearTimeout(S),
                    (S = setTimeout(function () {
                      d.enableTocAnimation();
                    }, a.scrollSmoothDuration));
                }, a.throttleTimeout)),
                a.scrollContainer && document.querySelector(a.scrollContainer)
                  ? document
                      .querySelector(a.scrollContainer)
                      .addEventListener("click", this._clickListener, !1)
                  : document.addEventListener("click", this._clickListener, !1),
                this
              );
            }
          }
        }
      }),
      (i.refresh = function (E) {
        i.destroy(), i.init(E || this.options);
      }),
      (r.tocbot = i),
      i
    );
  });
})(jd);
var E_ = jd.exports;
const dc = dn(E_),
  { deprecate: xe, once: x_, logger: ll } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    filterArgTypes: w_,
    composeConfigs: rS,
    Preview: nS,
    DocsContext: aS,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: pc,
    UPDATE_STORY_ARGS: __,
    RESET_STORY_ARGS: A_,
    GLOBALS_UPDATED: fc,
    NAVIGATE_URL: C_,
  } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var S_ = O.div(de, ({ theme: e }) => ({
    backgroundColor:
      e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: "25px 0 40px",
    color: ue(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  })),
  Zd = (e) =>
    o.createElement(S_, { ...e, className: "docblock-emptyblock sb-unstyled" }),
  R_ = O(va)(({ theme: e }) => ({
    "fontSize": `${e.typography.size.s2 - 1}px`,
    "lineHeight": "19px",
    "margin": "25px 0 40px",
    "borderRadius": e.appBorderRadius,
    "boxShadow":
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  T_ = O.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    margin: "25px 0 40px",
    padding: "20px 20px 20px 22px",
  })),
  Dn = O.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: "60%",
    [`&:first-child${To}`]: { margin: 0 },
  })),
  O_ = () =>
    o.createElement(
      T_,
      null,
      o.createElement(Dn, null),
      o.createElement(Dn, { style: { width: "80%" } }),
      o.createElement(Dn, { style: { width: "30%" } }),
      o.createElement(Dn, { style: { width: "80%" } })
    ),
  sl = ({
    isLoading: e,
    error: t,
    language: r,
    code: n,
    dark: a,
    format: i,
    ...l
  }) => {
    if (e) return o.createElement(O_, null);
    if (t) return o.createElement(Zd, null, t);
    let s = o.createElement(
      R_,
      {
        bordered: !0,
        copyable: !0,
        format: i,
        language: r,
        className: "docblock-source sb-unstyled",
        ...l,
      },
      n
    );
    if (typeof a > "u") return s;
    let c = a ? xo.dark : xo.light;
    return o.createElement(hu, { theme: Ro(c) }, s);
  };
sl.defaultProps = { format: !1 };
var ge = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  cl = 600,
  k_ = O.h1(de, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: "32px",
    [`@media (min-width: ${cl}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: "36px",
      marginBottom: "16px",
    },
  })),
  D_ = O.h2(de, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: "20px",
    borderBottom: "none",
    marginBottom: 15,
    [`@media (min-width: ${cl}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: "28px",
      marginBottom: 24,
    },
    color: ue(0.25, e.color.defaultText),
  })),
  L_ = O.div(({ theme: e }) => {
    let t = {
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s3,
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        WebkitOverflowScrolling: "touch",
      },
      r = {
        "margin": "20px 0 8px",
        "padding": 0,
        "cursor": "text",
        "position": "relative",
        "color": e.color.defaultText,
        "&:first-of-type": { marginTop: 0, paddingTop: 0 },
        "&:hover a.anchor": { textDecoration: "none" },
        "& code": { fontSize: "inherit" },
      },
      n = {
        lineHeight: 1,
        margin: "0 2px",
        padding: "3px 5px",
        whiteSpace: "nowrap",
        borderRadius: 3,
        fontSize: e.typography.size.s2 - 1,
        border:
          e.base === "light"
            ? `1px solid ${e.color.mediumlight}`
            : `1px solid ${e.color.darker}`,
        color:
          e.base === "light"
            ? ue(0.1, e.color.defaultText)
            : ue(0.3, e.color.defaultText),
        backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
      };
    return {
      maxWidth: 1e3,
      width: "100%",
      [ge("a")]: {
        ...t,
        "fontSize": "inherit",
        "lineHeight": "24px",
        "color": e.color.secondary,
        "textDecoration": "none",
        "&.absent": { color: "#cc0000" },
        "&.anchor": {
          display: "block",
          paddingLeft: 30,
          marginLeft: -30,
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      [ge("blockquote")]: {
        ...t,
        "margin": "16px 0",
        "borderLeft": `4px solid ${e.color.medium}`,
        "padding": "0 15px",
        "color": e.color.dark,
        "& > :first-of-type": { marginTop: 0 },
        "& > :last-child": { marginBottom: 0 },
      },
      [ge("div")]: t,
      [ge("dl")]: {
        ...t,
        "margin": "16px 0",
        "padding": 0,
        "& dt": {
          fontSize: "14px",
          fontWeight: "bold",
          fontStyle: "italic",
          padding: 0,
          margin: "16px 0 4px",
        },
        "& dt:first-of-type": { padding: 0 },
        "& dt > :first-of-type": { marginTop: 0 },
        "& dt > :last-child": { marginBottom: 0 },
        "& dd": { margin: "0 0 16px", padding: "0 15px" },
        "& dd > :first-of-type": { marginTop: 0 },
        "& dd > :last-child": { marginBottom: 0 },
      },
      [ge("h1")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.l1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [ge("h2")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`,
      },
      [ge("h3")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [ge("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
      [ge("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
      [ge("h6")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.s2}px`,
        color: e.color.dark,
      },
      [ge("hr")]: {
        border: "0 none",
        borderTop: `1px solid ${e.appBorderColor}`,
        height: 4,
        padding: 0,
      },
      [ge("img")]: { maxWidth: "100%" },
      [ge("li")]: {
        ...t,
        "fontSize": e.typography.size.s2,
        "color": e.color.defaultText,
        "lineHeight": "24px",
        "& + li": { marginTop: ".25em" },
        "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
        "& code": n,
      },
      [ge("ol")]: {
        ...t,
        "margin": "16px 0",
        "paddingLeft": 30,
        "& :first-of-type": { marginTop: 0 },
        "& :last-child": { marginBottom: 0 },
      },
      [ge("p")]: {
        ...t,
        "margin": "16px 0",
        "fontSize": e.typography.size.s2,
        "lineHeight": "24px",
        "color": e.color.defaultText,
        "& code": n,
      },
      [ge("pre")]: {
        ...t,
        "fontFamily": e.typography.fonts.mono,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "lineHeight": "18px",
        "padding": "11px 1rem",
        "whiteSpace": "pre-wrap",
        "color": "inherit",
        "borderRadius": 3,
        "margin": "1rem 0",
        "&:not(.prismjs)": {
          background: "transparent",
          border: "none",
          borderRadius: 0,
          padding: 0,
          margin: 0,
        },
        "& pre, &.prismjs": {
          padding: 15,
          margin: 0,
          whiteSpace: "pre-wrap",
          color: "inherit",
          fontSize: "13px",
          lineHeight: "19px",
          code: { color: "inherit", fontSize: "inherit" },
        },
        "& code": { whiteSpace: "pre" },
        "& code, & tt": { border: "none" },
      },
      [ge("span")]: {
        ...t,
        "&.frame": {
          "display": "block",
          "overflow": "hidden",
          "& > span": {
            border: `1px solid ${e.color.medium}`,
            display: "block",
            float: "left",
            overflow: "hidden",
            margin: "13px 0 0",
            padding: 7,
            width: "auto",
          },
          "& span img": { display: "block", float: "left" },
          "& span span": {
            clear: "both",
            color: e.color.darkest,
            display: "block",
            padding: "5px 0 0",
          },
        },
        "&.align-center": {
          "display": "block",
          "overflow": "hidden",
          "clear": "both",
          "& > span": {
            display: "block",
            overflow: "hidden",
            margin: "13px auto 0",
            textAlign: "center",
          },
          "& span img": { margin: "0 auto", textAlign: "center" },
        },
        "&.align-right": {
          "display": "block",
          "overflow": "hidden",
          "clear": "both",
          "& > span": {
            display: "block",
            overflow: "hidden",
            margin: "13px 0 0",
            textAlign: "right",
          },
          "& span img": { margin: 0, textAlign: "right" },
        },
        "&.float-left": {
          "display": "block",
          "marginRight": 13,
          "overflow": "hidden",
          "float": "left",
          "& span": { margin: "13px 0 0" },
        },
        "&.float-right": {
          "display": "block",
          "marginLeft": 13,
          "overflow": "hidden",
          "float": "right",
          "& > span": {
            display: "block",
            overflow: "hidden",
            margin: "13px auto 0",
            textAlign: "right",
          },
        },
      },
      [ge("table")]: {
        ...t,
        "margin": "16px 0",
        "fontSize": e.typography.size.s2,
        "lineHeight": "24px",
        "padding": 0,
        "borderCollapse": "collapse",
        "& tr": {
          borderTop: `1px solid ${e.appBorderColor}`,
          backgroundColor: e.appContentBg,
          margin: 0,
          padding: 0,
        },
        "& tr:nth-of-type(2n)": {
          backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter,
        },
        "& tr th": {
          fontWeight: "bold",
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: "6px 13px",
        },
        "& tr td": {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: "6px 13px",
        },
        "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
        "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
      },
      [ge("ul")]: {
        ...t,
        "margin": "16px 0",
        "paddingLeft": 30,
        "& :first-of-type": { marginTop: 0 },
        "& :last-child": { marginBottom: 0 },
        "listStyle": "disc",
      },
    };
  }),
  $_ = O.div(({ theme: e }) => ({
    background: e.background.content,
    display: "flex",
    justifyContent: "center",
    padding: "4rem 20px",
    minHeight: "100vh",
    boxSizing: "border-box",
    gap: "3rem",
    [`@media (min-width: ${cl}px)`]: {},
  })),
  I_ = ({ children: e, toc: t }) =>
    o.createElement(
      $_,
      { className: "sbdocs sbdocs-wrapper" },
      o.createElement(L_, { className: "sbdocs sbdocs-content" }, e),
      t
    ),
  $a = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
        : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    border: `1px solid ${e.appBorderColor}`,
  }),
  F_ = ({ zoom: e, resetZoom: t }) =>
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        Xt,
        {
          key: "zoomin",
          onClick: (r) => {
            r.preventDefault(), e(0.8);
          },
          title: "Zoom in",
        },
        o.createElement(Fe, { icon: "zoom" })
      ),
      o.createElement(
        Xt,
        {
          key: "zoomout",
          onClick: (r) => {
            r.preventDefault(), e(1.25);
          },
          title: "Zoom out",
        },
        o.createElement(Fe, { icon: "zoomout" })
      ),
      o.createElement(
        Xt,
        {
          key: "zoomreset",
          onClick: (r) => {
            r.preventDefault(), t();
          },
          title: "Reset zoom",
        },
        o.createElement(Fe, { icon: "zoomreset" })
      )
    ),
  P_ = O(xa)({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    transition: "transform .2s linear",
  }),
  M_ = ({
    isLoading: e,
    storyId: t,
    baseUrl: r,
    zoom: n,
    resetZoom: a,
    ...i
  }) =>
    o.createElement(
      P_,
      { ...i },
      o.createElement(
        u.Fragment,
        { key: "left" },
        e
          ? [1, 2, 3].map((l) => o.createElement(k0, { key: l }))
          : o.createElement(F_, { zoom: n, resetZoom: a })
      )
    ),
  zd = u.createContext({ scale: 1 }),
  { window: B_ } = Oe,
  N_ = class extends u.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = B_.document.getElementById(e);
    }
    shouldComponentUpdate(e) {
      let { scale: t } = e;
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: "top left",
          }),
        !1
      );
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e);
    }
    render() {
      let {
        id: e,
        title: t,
        src: r,
        allowFullScreen: n,
        scale: a,
        ...i
      } = this.props;
      return o.createElement("iframe", {
        id: e,
        title: t,
        src: r,
        ...(n ? { allow: "fullscreen" } : {}),
        loading: "lazy",
        ...i,
      });
    }
  },
  { PREVIEW_URL: V_ } = Oe,
  H_ = V_ || "iframe.html",
  Wo = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
  j_ = (e) => {
    let t = u.useRef(),
      [r, n] = u.useState(!0),
      [a, i] = u.useState(),
      {
        story: l,
        height: s,
        autoplay: c,
        forceInitialArgs: d,
        renderStoryToElement: p,
      } = e;
    u.useEffect(() => {
      if (!(l && t.current)) return () => {};
      let y = t.current,
        f = p(
          l,
          y,
          {
            showMain: () => {},
            showError: ({ title: g, description: m }) =>
              i(new Error(`${g} - ${m}`)),
            showException: (g) => i(g),
          },
          { autoplay: c, forceInitialArgs: d }
        );
      return (
        n(!1),
        () => {
          Promise.resolve().then(() => f());
        }
      );
    }, [c, p, l]);
    let h = "<span></span>";
    return a
      ? o.createElement("pre", null, o.createElement(w0, { error: a }))
      : o.createElement(
          o.Fragment,
          null,
          s
            ? o.createElement(
                "style",
                null,
                `#${Wo(
                  e
                )} { min-height: ${s}; transform: translateZ(0); overflow: auto }`
              )
            : null,
          r && o.createElement(ul, null),
          o.createElement("div", {
            "ref": t,
            "id": `${Wo(e)}-inner`,
            "data-name": l.name,
            "dangerouslySetInnerHTML": { __html: h },
          })
        );
  },
  Z_ = ({ story: e, height: t = "500px" }) =>
    o.createElement(
      "div",
      { style: { width: "100%", height: t } },
      o.createElement(zd.Consumer, null, ({ scale: r }) =>
        o.createElement(N_, {
          key: "iframe",
          id: `iframe--${e.id}`,
          title: e.name,
          src: I0(H_, e.id, { viewMode: "story" }),
          allowFullScreen: !0,
          scale: r,
          style: { width: "100%", height: "100%", border: "0 none" },
        })
      )
    ),
  z_ = (e) => {
    let { inline: t } = e;
    return o.createElement(
      "div",
      {
        "id": Wo(e),
        "className": "sb-story sb-unstyled",
        "data-story-block": "true",
      },
      t ? o.createElement(j_, { ...e }) : o.createElement(Z_, { ...e })
    );
  },
  ul = () => o.createElement($0, null),
  q_ = O.div(
    ({ isColumn: e, columns: t, layout: r }) => ({
      "display": e || !t ? "block" : "flex",
      "position": "relative",
      "flexWrap": "wrap",
      "overflow": "auto",
      "flexDirection": e ? "column" : "row",
      "& .innerZoomElementWrapper > *": e
        ? {
            width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
            display: "block",
          }
        : {
            maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%",
            display: "inline-block",
          },
    }),
    ({ layout: e = "padded" }) =>
      e === "centered" || e === "padded"
        ? {
            "padding": "30px 20px",
            "margin": -10,
            "& .innerZoomElementWrapper > *": {
              width: "auto",
              border: "10px solid transparent!important",
            },
          }
        : {},
    ({ layout: e = "padded" }) =>
      e === "centered"
        ? {
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
          }
        : {},
    ({ columns: e }) =>
      e && e > 1
        ? {
            ".innerZoomElementWrapper > *": {
              minWidth: `calc(100% / ${e} - 20px)`,
            },
          }
        : {}
  ),
  mc = O(sl)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: "none",
    background:
      e.base === "light"
        ? "rgba(0, 0, 0, 0.85)"
        : ct(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === "light"
          ? "rgba(0, 0, 0, 0.85)"
          : ct(0.05, e.background.content),
    },
  })),
  U_ = O.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      "position": "relative",
      "overflow": "hidden",
      "margin": "25px 0 40px",
      ...$a(e),
      "borderBottomLeftRadius": t && r && 0,
      "borderBottomRightRadius": t && r && 0,
      "borderBottomWidth": r && 0,
      "h3 + &": { marginTop: "16px" },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  W_ = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: "No code available",
            className: "docblock-code-toggle docblock-code-toggle--disabled",
            disabled: !0,
            onClick: () => r(!1),
          },
        };
      case t:
        return {
          source: o.createElement(mc, { ...e, dark: !0 }),
          actionItem: {
            title: "Hide code",
            className: "docblock-code-toggle docblock-code-toggle--expanded",
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: o.createElement(mc, { ...e, dark: !0 }),
          actionItem: {
            title: "Show code",
            className: "docblock-code-toggle",
            onClick: () => r(!0),
          },
        };
    }
  };
function G_(e) {
  if (u.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var K_ = O(M_)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }),
  Y_ = O.div({ overflow: "hidden", position: "relative" }),
  Go = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: a,
    withToolbar: i = !1,
    isExpanded: l = !1,
    additionalActions: s,
    className: c,
    layout: d = "padded",
    ...p
  }) => {
    let [h, y] = u.useState(l),
      { source: f, actionItem: g } = W_(a, h, y),
      [m, x] = u.useState(1),
      v = [c].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
      E = a ? [g] : [],
      [b, w] = u.useState(s ? [...s] : []),
      _ = [...E, ...b],
      { window: A } = Oe,
      S = u.useCallback(async (k) => {
        let { createCopyToClipboardFunction: D } = await R(
          () => Promise.resolve().then(() => fv),
          void 0,
          import.meta.url
        );
        D();
      }, []),
      C = (k) => {
        let D = A.getSelection();
        (D && D.type === "Range") ||
          (k.preventDefault(),
          b.filter((L) => L.title === "Copied").length === 0 &&
            S(f.props.code).then(() => {
              w([...b, { title: "Copied", onClick: () => {} }]),
                A.setTimeout(
                  () => w(b.filter((L) => L.title !== "Copied")),
                  1500
                );
            }));
      };
    return o.createElement(
      U_,
      { withSource: a, withToolbar: i, ...p, className: v.join(" ") },
      i &&
        o.createElement(K_, {
          isLoading: e,
          border: !0,
          zoom: (k) => x(m * k),
          resetZoom: () => x(1),
          storyId: G_(n),
          baseUrl: "./iframe.html",
        }),
      o.createElement(
        zd.Provider,
        { value: { scale: m } },
        o.createElement(
          Y_,
          { className: "docs-story", onCopyCapture: a && C },
          o.createElement(
            q_,
            { isColumn: t || !Array.isArray(n), columns: r, layout: d },
            o.createElement(
              x0.Element,
              { scale: m },
              Array.isArray(n)
                ? n.map((k, D) => o.createElement("div", { key: D }, k))
                : o.createElement("div", null, n)
            )
          ),
          o.createElement(Ci, { actionItems: _ })
        )
      ),
      a && h && f
    );
  },
  X_ = O(Go)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })),
  J_ = () =>
    o.createElement(
      X_,
      { isLoading: !0, withToolbar: !0 },
      o.createElement(ul, null)
    ),
  Q_ = O.table(({ theme: e }) => ({
    "&&": {
      "borderCollapse": "collapse",
      "borderSpacing": 0,
      "border": "none",
      "tr": { border: "none !important", background: "none" },
      "td, th": { padding: 0, border: "none", width: "auto!important" },
      "marginTop": 0,
      "marginBottom": 0,
      "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
      "th:last-of-type, td:last-of-type": { paddingRight: 0 },
      "td": {
        "paddingTop": 0,
        "paddingBottom": 4,
        "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 },
      },
      "tbody": { boxShadow: "none", border: "none" },
      "code": kt({ theme: e }),
      "div": { span: { fontWeight: "bold" } },
      "& code": {
        margin: 0,
        display: "inline-block",
        fontSize: e.typography.size.s1,
      },
    },
  })),
  eA = ({ tags: e }) => {
    let t = (e.params || []).filter((i) => i.description),
      r = t.length !== 0,
      n = e.deprecated != null,
      a = e.returns != null && e.returns.description != null;
    return !r && !a && !n
      ? null
      : o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Q_,
            null,
            o.createElement(
              "tbody",
              null,
              n &&
                o.createElement(
                  "tr",
                  { key: "deprecated" },
                  o.createElement(
                    "td",
                    { colSpan: 2 },
                    o.createElement("strong", null, "Deprecated"),
                    ": ",
                    e.deprecated
                  )
                ),
              r &&
                t.map((i) =>
                  o.createElement(
                    "tr",
                    { key: i.name },
                    o.createElement(
                      "td",
                      null,
                      o.createElement("code", null, i.name)
                    ),
                    o.createElement("td", null, i.description)
                  )
                ),
              a &&
                o.createElement(
                  "tr",
                  { key: "returns" },
                  o.createElement(
                    "td",
                    null,
                    o.createElement("code", null, "Returns")
                  ),
                  o.createElement("td", null, e.returns.description)
                )
            )
          )
        );
  },
  Ko = 8,
  gc = O.div(({ isExpanded: e }) => ({
    display: "flex",
    flexDirection: e ? "column" : "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: "-4px",
    minWidth: 100,
  })),
  tA = O.span(kt, ({ theme: e, simple: t = !1 }) => ({
    flex: "0 0 auto",
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: "break-word",
    whiteSpace: "normal",
    maxWidth: "100%",
    margin: 0,
    marginRight: "4px",
    marginBottom: "4px",
    paddingTop: "2px",
    paddingBottom: "2px",
    lineHeight: "13px",
    ...(t && { background: "transparent", border: "0 none", paddingLeft: 0 }),
  })),
  rA = O.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: "4px",
    background: "none",
    border: "none",
  })),
  nA = O.div(kt, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
  })),
  aA = O.div(({ theme: e, width: t }) => ({
    "width": t,
    "minWidth": 200,
    "maxWidth": 800,
    "padding": 15,
    "fontFamily": e.typography.fonts.mono,
    "fontSize": e.typography.size.s1,
    "boxSizing": "content-box",
    "& code": { padding: "0 !important" },
  })),
  oA = O(Fe)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  iA = () => o.createElement("span", null, "-"),
  qd = ({ text: e, simple: t }) => o.createElement(tA, { simple: t }, e),
  lA = tr(1e3)((e) => {
    let t = e.split(/\r?\n/);
    return `${Math.max(...t.map((r) => r.length))}ch`;
  }),
  sA = (e) => {
    if (!e) return [e];
    let t = e.split("|").map((r) => r.trim());
    return Wx(t);
  },
  hc = (e, t = !0) => {
    let r = e;
    return (
      t || (r = e.slice(0, Ko)),
      r.map((n) => o.createElement(qd, { key: n, text: n === "" ? '""' : n }))
    );
  },
  cA = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: r, detail: n } = e,
      [a, i] = u.useState(!1),
      [l, s] = u.useState(t || !1);
    if (r == null) return null;
    let c = typeof r.toString == "function" ? r.toString() : r;
    if (n == null) {
      if (/[(){}[\]<>]/.test(c)) return o.createElement(qd, { text: c });
      let d = sA(c),
        p = d.length;
      return p > Ko
        ? o.createElement(
            gc,
            { isExpanded: l },
            hc(d, l),
            o.createElement(
              rA,
              { onClick: () => s(!l) },
              l ? "Show less..." : `Show ${p - Ko} more...`
            )
          )
        : o.createElement(gc, null, hc(d));
    }
    return o.createElement(
      R0,
      {
        closeOnOutsideClick: !0,
        placement: "bottom",
        visible: a,
        onVisibleChange: (d) => {
          i(d);
        },
        tooltip: o.createElement(
          aA,
          { width: lA(n) },
          o.createElement(va, { language: "jsx", format: !1 }, n)
        ),
      },
      o.createElement(
        nA,
        { className: "sbdocs-expandable" },
        o.createElement("span", null, c),
        o.createElement(oA, { icon: a ? "arrowup" : "arrowdown" })
      )
    );
  },
  yo = ({ value: e, initialExpandedArgs: t }) =>
    e == null
      ? o.createElement(iA, null)
      : o.createElement(cA, { value: e, initialExpandedArgs: t }),
  uA = O.label(({ theme: e }) => ({
    "lineHeight": "18px",
    "alignItems": "center",
    "marginBottom": 8,
    "display": "inline-block",
    "position": "relative",
    "whiteSpace": "nowrap",
    "background": e.boolean.background,
    "borderRadius": "3em",
    "padding": 1,
    "input": {
      "appearance": "none",
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "left": 0,
      "top": 0,
      "margin": 0,
      "padding": 0,
      "border": "none",
      "background": "transparent",
      "cursor": "pointer",
      "borderRadius": "3em",
      "&:focus": {
        outline: "none",
        boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
      },
    },
    "span": {
      "textAlign": "center",
      "fontSize": e.typography.size.s1,
      "fontWeight": e.typography.weight.bold,
      "lineHeight": "1",
      "cursor": "pointer",
      "display": "inline-block",
      "padding": "7px 15px",
      "transition": "all 100ms ease-out",
      "userSelect": "none",
      "borderRadius": "3em",
      "color": ue(0.5, e.color.defaultText),
      "background": "transparent",
      "&:hover": { boxShadow: `${On(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      "&:active": {
        boxShadow: `${On(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: On(1, e.appBorderColor),
      },
      "&:first-of-type": { paddingRight: 8 },
      "&:last-of-type": { paddingLeft: 8 },
    },
    "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === "light"
            ? `${On(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: "7px 15px",
      },
  })),
  dA = (e) => e === "true",
  pA = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
    let i = u.useCallback(() => r(!1), [r]);
    if (t === void 0)
      return o.createElement(
        tt.Button,
        { id: Sa(e), onClick: i },
        "Set boolean"
      );
    let l = nt(e),
      s = typeof t == "string" ? dA(t) : t;
    return o.createElement(
      uA,
      { htmlFor: l, title: s ? "Change to false" : "Change to true" },
      o.createElement("input", {
        id: l,
        type: "checkbox",
        onChange: (c) => r(c.target.checked),
        checked: s,
        name: e,
        onBlur: n,
        onFocus: a,
      }),
      o.createElement("span", null, "False"),
      o.createElement("span", null, "True")
    );
  },
  fA = (e) => {
    let [t, r, n] = e.split("-"),
      a = new Date();
    return (
      a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
    );
  },
  mA = (e) => {
    let [t, r] = e.split(":"),
      n = new Date();
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
  },
  gA = (e) => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      n = `0${t.getMonth() + 1}`.slice(-2),
      a = `0${t.getDate()}`.slice(-2);
    return `${r}-${n}-${a}`;
  },
  hA = (e) => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      n = `0${t.getMinutes()}`.slice(-2);
    return `${r}:${n}`;
  },
  yA = O.div(({ theme: e }) => ({
    "flex": 1,
    "display": "flex",
    "input": {
      "marginLeft": 10,
      "flex": 1,
      "height": 32,
      "&::-webkit-calendar-picker-indicator": {
        opacity: 0.5,
        height: 12,
        filter: e.base === "light" ? void 0 : "invert(1)",
      },
    },
    "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
    "input:last-of-type": { flexGrow: 3 },
  })),
  vA = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
    let [i, l] = u.useState(!0),
      s = u.useRef(),
      c = u.useRef();
    u.useEffect(() => {
      i !== !1 &&
        (s && s.current && (s.current.value = gA(t)),
        c && c.current && (c.current.value = hA(t)));
    }, [t]);
    let d = (y) => {
        let f = fA(y.target.value),
          g = new Date(t);
        g.setFullYear(f.getFullYear(), f.getMonth(), f.getDate());
        let m = g.getTime();
        m && r(m), l(!!m);
      },
      p = (y) => {
        let f = mA(y.target.value),
          g = new Date(t);
        g.setHours(f.getHours()), g.setMinutes(f.getMinutes());
        let m = g.getTime();
        m && r(m), l(!!m);
      },
      h = nt(e);
    return o.createElement(
      yA,
      null,
      o.createElement(tt.Input, {
        type: "date",
        max: "9999-12-31",
        ref: s,
        id: `${h}-date`,
        name: `${h}-date`,
        onChange: d,
        onFocus: n,
        onBlur: a,
      }),
      o.createElement(tt.Input, {
        type: "time",
        id: `${h}-time`,
        name: `${h}-time`,
        ref: c,
        onChange: p,
        onFocus: n,
        onBlur: a,
      }),
      i ? null : o.createElement("div", null, "invalid")
    );
  },
  bA = O.label({ display: "flex" }),
  EA = (e) => {
    let t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  },
  xA = ({
    name: e,
    value: t,
    onChange: r,
    min: n,
    max: a,
    step: i,
    onBlur: l,
    onFocus: s,
  }) => {
    let [c, d] = u.useState(typeof t == "number" ? t : ""),
      [p, h] = u.useState(!1),
      [y, f] = u.useState(null),
      g = u.useCallback(
        (v) => {
          d(v.target.value);
          let E = parseFloat(v.target.value);
          Number.isNaN(E)
            ? f(new Error(`'${v.target.value}' is not a number`))
            : (r(E), f(null));
        },
        [r, f]
      ),
      m = u.useCallback(() => {
        d("0"), r(0), h(!0);
      }, [h]),
      x = u.useRef(null);
    return (
      u.useEffect(() => {
        p && x.current && x.current.select();
      }, [p]),
      u.useEffect(() => {
        c !== (typeof t == "number" ? t : "") && d(t);
      }, [t]),
      !p && t === void 0
        ? o.createElement(tt.Button, { id: Sa(e), onClick: m }, "Set number")
        : o.createElement(
            bA,
            null,
            o.createElement(tt.Input, {
              ref: x,
              id: nt(e),
              type: "number",
              onChange: g,
              size: "flex",
              placeholder: "Edit number...",
              value: c,
              valid: y ? "error" : null,
              autoFocus: p,
              name: e,
              min: n,
              max: a,
              step: i,
              onFocus: s,
              onBlur: l,
            })
          )
    );
  },
  Ud = (e, t) => {
    let r = t && Object.entries(t).find(([n, a]) => a === e);
    return r ? r[0] : void 0;
  },
  Yo = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [],
  Wd = (e, t) => e && t && e.map((r) => t[r]),
  wA = O.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } }
  ),
  _A = O.span({}),
  AA = O.label({
    "lineHeight": "20px",
    "alignItems": "center",
    "marginBottom": 8,
    "&:last-child": { marginBottom: 0 },
    "input": { margin: 0, marginRight: 6 },
  }),
  yc = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        ll.warn(`Checkbox with no options: ${e}`),
        o.createElement(o.Fragment, null, "-")
      );
    let i = Yo(r, t),
      [l, s] = u.useState(i),
      c = (p) => {
        let h = p.target.value,
          y = [...l];
        y.includes(h) ? y.splice(y.indexOf(h), 1) : y.push(h),
          n(Wd(y, t)),
          s(y);
      };
    u.useEffect(() => {
      s(Yo(r, t));
    }, [r]);
    let d = nt(e);
    return o.createElement(
      wA,
      { isInline: a },
      Object.keys(t).map((p, h) => {
        let y = `${d}-${h}`;
        return o.createElement(
          AA,
          { key: y, htmlFor: y },
          o.createElement("input", {
            type: "checkbox",
            id: y,
            name: y,
            value: p,
            onChange: c,
            checked: l == null ? void 0 : l.includes(p),
          }),
          o.createElement(_A, null, p)
        );
      })
    );
  },
  CA = O.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } }
  ),
  SA = O.span({}),
  RA = O.label({
    "lineHeight": "20px",
    "alignItems": "center",
    "marginBottom": 8,
    "&:last-child": { marginBottom: 0 },
    "input": { margin: 0, marginRight: 6 },
  }),
  vc = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        ll.warn(`Radio with no options: ${e}`),
        o.createElement(o.Fragment, null, "-")
      );
    let i = Ud(r, t),
      l = nt(e);
    return o.createElement(
      CA,
      { isInline: a },
      Object.keys(t).map((s, c) => {
        let d = `${l}-${c}`;
        return o.createElement(
          RA,
          { key: d, htmlFor: d },
          o.createElement("input", {
            type: "radio",
            id: d,
            name: d,
            value: s,
            onChange: (p) => n(t[p.currentTarget.value]),
            checked: s === i,
          }),
          o.createElement(SA, null, s)
        );
      })
    );
  },
  TA = {
    appearance: "none",
    border: "0 none",
    boxSizing: "inherit",
    display: " block",
    margin: " 0",
    background: "transparent",
    padding: 0,
    fontSize: "inherit",
    position: "relative",
  },
  Gd = O.select(({ theme: e }) => ({
    ...TA,
    "boxSizing": "border-box",
    "position": "relative",
    "padding": "6px 10px",
    "width": "100%",
    "color": e.input.color || "inherit",
    "background": e.input.background,
    "borderRadius": e.input.borderRadius,
    "boxShadow": `${e.input.border} 0 0 0 1px inset`,
    "fontSize": e.typography.size.s2 - 1,
    "lineHeight": "20px",
    "&:focus": {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: "none",
    },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "::placeholder": { color: e.textMutedColor },
    "&[multiple]": {
      overflow: "auto",
      padding: 0,
      option: {
        display: "block",
        padding: "6px 10px",
        marginLeft: 1,
        marginRight: 1,
      },
    },
  })),
  Kd = O.span(({ theme: e }) => ({
    display: "inline-block",
    lineHeight: "normal",
    overflow: "hidden",
    position: "relative",
    verticalAlign: "top",
    width: "100%",
    svg: {
      position: "absolute",
      zIndex: 1,
      pointerEvents: "none",
      height: "12px",
      marginTop: "-6px",
      right: "12px",
      top: "50%",
      fill: e.textMutedColor,
      path: { fill: e.textMutedColor },
    },
  })),
  bc = "Choose option...",
  OA = ({ name: e, value: t, options: r, onChange: n }) => {
    let a = (s) => {
        n(r[s.currentTarget.value]);
      },
      i = Ud(t, r) || bc,
      l = nt(e);
    return o.createElement(
      Kd,
      null,
      o.createElement(Fe, { icon: "arrowdown" }),
      o.createElement(
        Gd,
        { id: l, value: i, onChange: a },
        o.createElement("option", { key: "no-selection", disabled: !0 }, bc),
        Object.keys(r).map((s) => o.createElement("option", { key: s }, s))
      )
    );
  },
  kA = ({ name: e, value: t, options: r, onChange: n }) => {
    let a = (s) => {
        let c = Array.from(s.currentTarget.options)
          .filter((d) => d.selected)
          .map((d) => d.value);
        n(Wd(c, r));
      },
      i = Yo(t, r),
      l = nt(e);
    return o.createElement(
      Kd,
      null,
      o.createElement(
        Gd,
        { id: l, multiple: !0, value: i, onChange: a },
        Object.keys(r).map((s) => o.createElement("option", { key: s }, s))
      )
    );
  },
  Ec = (e) => {
    let { name: t, options: r } = e;
    return r
      ? e.isMulti
        ? o.createElement(kA, { ...e })
        : o.createElement(OA, { ...e })
      : (ll.warn(`Select with no options: ${t}`),
        o.createElement(o.Fragment, null, "-"));
  },
  DA = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, n) => ((r[(t == null ? void 0 : t[n]) || String(n)] = n), r),
          {}
        )
      : e,
  LA = {
    "check": yc,
    "inline-check": yc,
    "radio": vc,
    "inline-radio": vc,
    "select": Ec,
    "multi-select": Ec,
  },
  pr = (e) => {
    let { type: t = "select", labels: r, argType: n } = e,
      a = {
        ...e,
        options: n ? DA(n.options, r) : {},
        isInline: t.includes("inline"),
        isMulti: t.includes("multi"),
      },
      i = LA[t];
    if (i) return o.createElement(i, { ...a });
    throw new Error(`Unknown options type: ${t}`);
  },
  dl = "value",
  $A = "key",
  IA = "Error",
  FA = "Object",
  PA = "Array",
  MA = "String",
  BA = "Number",
  NA = "Boolean",
  VA = "Date",
  HA = "Null",
  jA = "Undefined",
  ZA = "Function",
  zA = "Symbol",
  Yd = "ADD_DELTA_TYPE",
  Xd = "REMOVE_DELTA_TYPE",
  Jd = "UPDATE_DELTA_TYPE";
function Pt(e) {
  return e !== null &&
    typeof e == "object" &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == "function"
    ? "Iterable"
    : Object.prototype.toString.call(e).slice(8, -1);
}
function Qd(e, t) {
  let r = Pt(e),
    n = Pt(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var pl = class extends u.Component {
  constructor(e) {
    super(e),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this));
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state,
      { onlyValue: r } = this.props;
    e && typeof e.focus == "function" && e.focus(),
      r && t && typeof t.focus == "function" && t.focus(),
      document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.onSubmit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: r,
        keyPath: n,
        deep: a,
      } = this.props,
      { inputRefKey: i, inputRefValue: l } = this.state,
      s = {};
    if (!t) {
      if (!i.value) return;
      s.key = i.value;
    }
    (s.newValue = r(!1, n, a, s.key, l.value)), e(s);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: n,
        inputElementGenerator: a,
        keyPath: i,
        deep: l,
      } = this.props,
      s = u.cloneElement(r, { onClick: this.onSubmit }),
      c = u.cloneElement(n, { onClick: e }),
      d = a(dl, i, l),
      p = u.cloneElement(d, { placeholder: "Value", ref: this.refInputValue }),
      h = null;
    if (!t) {
      let y = a($A, i, l);
      h = u.cloneElement(y, { placeholder: "Key", ref: this.refInputKey });
    }
    return o.createElement(
      "span",
      { className: "rejt-add-value-node" },
      h,
      p,
      c,
      s
    );
  }
};
pl.defaultProps = {
  onlyValue: !1,
  addButtonElement: o.createElement("button", null, "+"),
  cancelButtonElement: o.createElement("button", null, "c"),
};
var e1 = class extends u.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: a } = this.props,
      i = n.length;
    a(n[i - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: a, nextDeep: i } = this.state,
        l = n[e];
      t(e, a, i, l)
        .then(() => {
          let s = { keyPath: a, deep: i, key: e, oldValue: l, type: Xd };
          n.splice(e, 1), this.setState({ data: n });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(a[a.length - 1], n), d(s);
        })
        .catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state,
      { beforeAddAction: a, logger: i } = this.props;
    a(t.length, r, n, e)
      .then(() => {
        let l = [...t, e];
        this.setState({ data: l }), this.handleAddValueCancel();
        let { onUpdate: s, onDeltaUpdate: c } = this.props;
        s(r[r.length - 1], l),
          c({ type: Yd, keyPath: r, deep: n, key: l.length - 1, newValue: e });
      })
      .catch(i.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props,
        { data: i, keyPath: l, nextDeep: s } = this.state,
        c = i[e];
      a(e, l, s, c, t)
        .then(() => {
          (i[e] = t), this.setState({ data: i });
          let { onUpdate: d, onDeltaUpdate: p } = this.props;
          d(l[l.length - 1], i),
            p({
              type: Jd,
              keyPath: l,
              deep: s,
              key: e,
              newValue: t,
              oldValue: c,
            }),
            r(void 0);
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state,
      {
        handleRemove: a,
        readOnly: i,
        getStyle: l,
        dataType: s,
        minusMenuElement: c,
      } = this.props,
      { minus: d, collapsed: p } = l(e, t, r, n, s),
      h = i(e, t, r, n, s),
      y = u.cloneElement(c, {
        onClick: a,
        className: "rejt-minus-menu",
        style: d,
      });
    return o.createElement(
      "span",
      { className: "rejt-collapsed" },
      o.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: p,
          onClick: this.handleCollapseMode,
        },
        "[...] ",
        t.length,
        " ",
        t.length === 1 ? "item" : "items"
      ),
      !h && y
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        addFormVisible: a,
        nextDeep: i,
      } = this.state,
      {
        isCollapsed: l,
        handleRemove: s,
        onDeltaUpdate: c,
        readOnly: d,
        getStyle: p,
        dataType: h,
        addButtonElement: y,
        cancelButtonElement: f,
        editButtonElement: g,
        inputElementGenerator: m,
        textareaElementGenerator: x,
        minusMenuElement: v,
        plusMenuElement: E,
        beforeRemoveAction: b,
        beforeAddAction: w,
        beforeUpdateAction: _,
        logger: A,
        onSubmitValueParser: S,
      } = this.props,
      { minus: C, plus: k, delimiter: D, ul: L, addForm: I } = p(e, t, r, n, h),
      $ = d(e, t, r, n, h),
      M = u.cloneElement(E, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: k,
      }),
      F = u.cloneElement(v, {
        onClick: s,
        className: "rejt-minus-menu",
        style: C,
      }),
      P = !0,
      j = "[",
      z = "]";
    return o.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      o.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: D },
        j
      ),
      !a && M,
      o.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: L },
        t.map((V, Z) =>
          o.createElement(Ia, {
            key: Z,
            name: Z.toString(),
            data: V,
            keyPath: r,
            deep: i,
            isCollapsed: l,
            handleRemove: this.handleRemoveItem(Z),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: c,
            readOnly: d,
            getStyle: p,
            addButtonElement: y,
            cancelButtonElement: f,
            editButtonElement: g,
            inputElementGenerator: m,
            textareaElementGenerator: x,
            minusMenuElement: v,
            plusMenuElement: E,
            beforeRemoveAction: b,
            beforeAddAction: w,
            beforeUpdateAction: _,
            logger: A,
            onSubmitValueParser: S,
          })
        )
      ),
      !$ &&
        a &&
        o.createElement(
          "div",
          { className: "rejt-add-form", style: I },
          o.createElement(pl, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: P,
            addButtonElement: y,
            cancelButtonElement: f,
            inputElementGenerator: m,
            keyPath: r,
            deep: n,
            onSubmitValueParser: S,
          })
        ),
      o.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: D },
        z
      ),
      !$ && F
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
      { dataType: i, getStyle: l } = this.props,
      s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      c = l(e, r, n, a, i);
    return o.createElement(
      "div",
      { className: "rejt-array-node" },
      o.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        o.createElement(
          "span",
          { className: "rejt-name", style: c.name },
          e,
          " :",
          " "
        )
      ),
      s
    );
  }
};
e1.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: o.createElement("span", null, " - "),
  plusMenuElement: o.createElement("span", null, " + "),
};
var t1 = class extends u.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: i,
      } = this.state,
      { readOnly: l, dataType: s } = this.props,
      c = l(r, n, a, i, s);
    e && !c && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props,
      { inputRef: i, name: l, deep: s } = this.state;
    if (!i) return;
    let c = n(!0, a, s, l, i.value);
    e({ value: c, key: l })
      .then(() => {
        Qd(t, c) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
      {
        handleRemove: i,
        originalValue: l,
        readOnly: s,
        dataType: c,
        getStyle: d,
        editButtonElement: p,
        cancelButtonElement: h,
        textareaElementGenerator: y,
        minusMenuElement: f,
        keyPath: g,
      } = this.props,
      m = d(e, l, n, a, c),
      x = null,
      v = null,
      E = s(e, l, n, a, c);
    if (r && !E) {
      let b = y(dl, g, a, e, l, c),
        w = u.cloneElement(p, { onClick: this.handleEdit }),
        _ = u.cloneElement(h, { onClick: this.handleCancelEdit }),
        A = u.cloneElement(b, { ref: this.refInput, defaultValue: l });
      (x = o.createElement(
        "span",
        { className: "rejt-edit-form", style: m.editForm },
        A,
        " ",
        _,
        w
      )),
        (v = null);
    } else {
      x = o.createElement(
        "span",
        {
          className: "rejt-value",
          style: m.value,
          onClick: E ? null : this.handleEditMode,
        },
        t
      );
      let b = u.cloneElement(f, {
        onClick: i,
        className: "rejt-minus-menu",
        style: m.minus,
      });
      v = E ? null : b;
    }
    return o.createElement(
      "li",
      { className: "rejt-function-value-node", style: m.li },
      o.createElement(
        "span",
        { className: "rejt-name", style: m.name },
        e,
        " :",
        " "
      ),
      x,
      v
    );
  }
};
t1.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: o.createElement("button", null, "e"),
  cancelButtonElement: o.createElement("button", null, "c"),
  minusMenuElement: o.createElement("span", null, " - "),
};
var Ia = class extends u.Component {
  constructor(e) {
    super(e),
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: e.keyPath,
        deep: e.deep,
      });
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state,
      {
        isCollapsed: a,
        handleRemove: i,
        handleUpdateValue: l,
        onUpdate: s,
        onDeltaUpdate: c,
        readOnly: d,
        getStyle: p,
        addButtonElement: h,
        cancelButtonElement: y,
        editButtonElement: f,
        inputElementGenerator: g,
        textareaElementGenerator: m,
        minusMenuElement: x,
        plusMenuElement: v,
        beforeRemoveAction: E,
        beforeAddAction: b,
        beforeUpdateAction: w,
        logger: _,
        onSubmitValueParser: A,
      } = this.props,
      S = () => !0,
      C = Pt(e);
    switch (C) {
      case IA:
        return o.createElement(Xo, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: i,
          onUpdate: s,
          onDeltaUpdate: c,
          readOnly: S,
          dataType: C,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          textareaElementGenerator: m,
          minusMenuElement: x,
          plusMenuElement: v,
          beforeRemoveAction: E,
          beforeAddAction: b,
          beforeUpdateAction: w,
          logger: _,
          onSubmitValueParser: A,
        });
      case FA:
        return o.createElement(Xo, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: i,
          onUpdate: s,
          onDeltaUpdate: c,
          readOnly: d,
          dataType: C,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          textareaElementGenerator: m,
          minusMenuElement: x,
          plusMenuElement: v,
          beforeRemoveAction: E,
          beforeAddAction: b,
          beforeUpdateAction: w,
          logger: _,
          onSubmitValueParser: A,
        });
      case PA:
        return o.createElement(e1, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: i,
          onUpdate: s,
          onDeltaUpdate: c,
          readOnly: d,
          dataType: C,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          textareaElementGenerator: m,
          minusMenuElement: x,
          plusMenuElement: v,
          beforeRemoveAction: E,
          beforeAddAction: b,
          beforeUpdateAction: w,
          logger: _,
          onSubmitValueParser: A,
        });
      case MA:
        return o.createElement(Ft, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: d,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case BA:
        return o.createElement(Ft, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: d,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case NA:
        return o.createElement(Ft, {
          name: t,
          value: e ? "true" : "false",
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: d,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case VA:
        return o.createElement(Ft, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: S,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case HA:
        return o.createElement(Ft, {
          name: t,
          value: "null",
          originalValue: "null",
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: d,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case jA:
        return o.createElement(Ft, {
          name: t,
          value: "undefined",
          originalValue: "undefined",
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: d,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case ZA:
        return o.createElement(t1, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: d,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          textareaElementGenerator: m,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      case zA:
        return o.createElement(Ft, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: i,
          handleUpdateValue: l,
          readOnly: S,
          dataType: C,
          getStyle: p,
          cancelButtonElement: y,
          editButtonElement: f,
          inputElementGenerator: g,
          minusMenuElement: x,
          logger: _,
          onSubmitValueParser: A,
        });
      default:
        return null;
    }
  }
};
Ia.defaultProps = { keyPath: [], deep: 0 };
var Xo = class extends u.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    (this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: a } = this.props,
      i = n.length;
    a(n[i - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: a } = this.state,
      { beforeAddAction: i, logger: l } = this.props;
    i(e, n, a, t)
      .then(() => {
        (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
        let { onUpdate: s, onDeltaUpdate: c } = this.props;
        s(n[n.length - 1], r),
          c({ type: Yd, keyPath: n, deep: a, key: e, newValue: t });
      })
      .catch(l.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: a, nextDeep: i } = this.state,
        l = n[e];
      t(e, a, i, l)
        .then(() => {
          let s = { keyPath: a, deep: i, key: e, oldValue: l, type: Xd };
          delete n[e], this.setState({ data: n });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(a[a.length - 1], n), d(s);
        })
        .catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props,
        { data: i, keyPath: l, nextDeep: s } = this.state,
        c = i[e];
      a(e, l, s, c, t)
        .then(() => {
          (i[e] = t), this.setState({ data: i });
          let { onUpdate: d, onDeltaUpdate: p } = this.props;
          d(l[l.length - 1], i),
            p({
              type: Jd,
              keyPath: l,
              deep: s,
              key: e,
              newValue: t,
              oldValue: c,
            }),
            r();
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state,
      {
        handleRemove: a,
        readOnly: i,
        dataType: l,
        getStyle: s,
        minusMenuElement: c,
      } = this.props,
      { minus: d, collapsed: p } = s(e, n, t, r, l),
      h = Object.getOwnPropertyNames(n),
      y = i(e, n, t, r, l),
      f = u.cloneElement(c, {
        onClick: a,
        className: "rejt-minus-menu",
        style: d,
      });
    return o.createElement(
      "span",
      { className: "rejt-collapsed" },
      o.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: p,
          onClick: this.handleCollapseMode,
        },
        "{...}",
        " ",
        h.length,
        " ",
        h.length === 1 ? "key" : "keys"
      ),
      !y && f
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        nextDeep: a,
        addFormVisible: i,
      } = this.state,
      {
        isCollapsed: l,
        handleRemove: s,
        onDeltaUpdate: c,
        readOnly: d,
        getStyle: p,
        dataType: h,
        addButtonElement: y,
        cancelButtonElement: f,
        editButtonElement: g,
        inputElementGenerator: m,
        textareaElementGenerator: x,
        minusMenuElement: v,
        plusMenuElement: E,
        beforeRemoveAction: b,
        beforeAddAction: w,
        beforeUpdateAction: _,
        logger: A,
        onSubmitValueParser: S,
      } = this.props,
      { minus: C, plus: k, addForm: D, ul: L, delimiter: I } = p(e, t, r, n, h),
      $ = Object.getOwnPropertyNames(t),
      M = d(e, t, r, n, h),
      F = u.cloneElement(E, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: k,
      }),
      P = u.cloneElement(v, {
        onClick: s,
        className: "rejt-minus-menu",
        style: C,
      }),
      j = $.map((Z) =>
        o.createElement(Ia, {
          key: Z,
          name: Z,
          data: t[Z],
          keyPath: r,
          deep: a,
          isCollapsed: l,
          handleRemove: this.handleRemoveValue(Z),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: c,
          readOnly: d,
          getStyle: p,
          addButtonElement: y,
          cancelButtonElement: f,
          editButtonElement: g,
          inputElementGenerator: m,
          textareaElementGenerator: x,
          minusMenuElement: v,
          plusMenuElement: E,
          beforeRemoveAction: b,
          beforeAddAction: w,
          beforeUpdateAction: _,
          logger: A,
          onSubmitValueParser: S,
        })
      ),
      z = "{",
      V = "}";
    return o.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      o.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: I },
        z
      ),
      !M && F,
      o.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: L },
        j
      ),
      !M &&
        i &&
        o.createElement(
          "div",
          { className: "rejt-add-form", style: D },
          o.createElement(pl, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: y,
            cancelButtonElement: f,
            inputElementGenerator: m,
            keyPath: r,
            deep: n,
            onSubmitValueParser: S,
          })
        ),
      o.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: I },
        V
      ),
      !M && P
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
      { getStyle: i, dataType: l } = this.props,
      s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      c = i(e, r, n, a, l);
    return o.createElement(
      "div",
      { className: "rejt-object-node" },
      o.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        o.createElement(
          "span",
          { className: "rejt-name", style: c.name },
          e,
          " :",
          " "
        )
      ),
      s
    );
  }
};
Xo.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: o.createElement("span", null, " - "),
  plusMenuElement: o.createElement("span", null, " + "),
};
var Ft = class extends u.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: i,
      } = this.state,
      { readOnly: l, dataType: s } = this.props,
      c = l(r, n, a, i, s);
    e && !c && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === "Enter" || e.key === "Enter") &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === "Escape" || e.key === "Escape") &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props,
      { inputRef: i, name: l, deep: s } = this.state;
    if (!i) return;
    let c = n(!0, a, s, l, i.value);
    e({ value: c, key: l })
      .then(() => {
        Qd(t, c) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
      {
        handleRemove: i,
        originalValue: l,
        readOnly: s,
        dataType: c,
        getStyle: d,
        editButtonElement: p,
        cancelButtonElement: h,
        inputElementGenerator: y,
        minusMenuElement: f,
        keyPath: g,
      } = this.props,
      m = d(e, l, n, a, c),
      x = s(e, l, n, a, c),
      v = r && !x,
      E = y(dl, g, a, e, l, c),
      b = u.cloneElement(p, { onClick: this.handleEdit }),
      w = u.cloneElement(h, { onClick: this.handleCancelEdit }),
      _ = u.cloneElement(E, {
        ref: this.refInput,
        defaultValue: JSON.stringify(l),
      }),
      A = u.cloneElement(f, {
        onClick: i,
        className: "rejt-minus-menu",
        style: m.minus,
      });
    return o.createElement(
      "li",
      { className: "rejt-value-node", style: m.li },
      o.createElement(
        "span",
        { className: "rejt-name", style: m.name },
        e,
        " : "
      ),
      v
        ? o.createElement(
            "span",
            { className: "rejt-edit-form", style: m.editForm },
            _,
            " ",
            w,
            b
          )
        : o.createElement(
            "span",
            {
              className: "rejt-value",
              style: m.value,
              onClick: x ? null : this.handleEditMode,
            },
            String(t)
          ),
      !x && !v && A
    );
  }
};
Ft.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: o.createElement("button", null, "e"),
  cancelButtonElement: o.createElement("button", null, "c"),
  minusMenuElement: o.createElement("span", null, " - "),
};
var qA = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  UA = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  WA = {
    minus: { color: "red" },
    editForm: {},
    value: { color: "#7bba3d" },
    li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
    name: { color: "#2287CD" },
  };
function GA(e) {
  let t = e;
  if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var r1 = class extends u.Component {
  constructor(e) {
    super(e),
      (this.state = { data: e.data, rootName: e.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName
      ? { data: e.data, rootName: e.rootName }
      : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state,
      {
        isCollapsed: r,
        onDeltaUpdate: n,
        readOnly: a,
        getStyle: i,
        addButtonElement: l,
        cancelButtonElement: s,
        editButtonElement: c,
        inputElement: d,
        textareaElement: p,
        minusMenuElement: h,
        plusMenuElement: y,
        beforeRemoveAction: f,
        beforeAddAction: g,
        beforeUpdateAction: m,
        logger: x,
        onSubmitValueParser: v,
        fallback: E = null,
      } = this.props,
      b = Pt(e),
      w = a;
    Pt(a) === "Boolean" && (w = () => a);
    let _ = d;
    d && Pt(d) !== "Function" && (_ = () => d);
    let A = p;
    return (
      p && Pt(p) !== "Function" && (A = () => p),
      b === "Object" || b === "Array"
        ? o.createElement(
            "div",
            { className: "rejt-tree" },
            o.createElement(Ia, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: n,
              readOnly: w,
              getStyle: i,
              addButtonElement: l,
              cancelButtonElement: s,
              editButtonElement: c,
              inputElementGenerator: _,
              textareaElementGenerator: A,
              minusMenuElement: h,
              plusMenuElement: y,
              handleRemove: this.removeRoot,
              beforeRemoveAction: f,
              beforeAddAction: g,
              beforeUpdateAction: m,
              logger: x,
              onSubmitValueParser: v,
            })
          )
        : E
    );
  }
};
r1.defaultProps = {
  rootName: "root",
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, n, a) => {
    switch (a) {
      case "Object":
      case "Error":
        return qA;
      case "Array":
        return UA;
      default:
        return WA;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, n, a) => GA(a),
  inputElement: () => o.createElement("input", null),
  textareaElement: () => o.createElement("textarea", null),
  fallback: null,
};
var { window: KA } = Oe,
  YA = O.div(({ theme: e }) => ({
    "position": "relative",
    "display": "flex",
    ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
    ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
      { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
    ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
      { "& > svg": { opacity: 1 } },
    ".rejt-edit-form button": { display: "none" },
    ".rejt-add-form": { marginLeft: 10 },
    ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
    ".rejt-name": { lineHeight: "22px" },
    ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
    ".rejt-plus-menu": { marginLeft: 5 },
    ".rejt-object-node > span > *, .rejt-array-node > span > *": {
      position: "relative",
      zIndex: 2,
    },
    ".rejt-object-node, .rejt-array-node": { position: "relative" },
    ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
      {
        content: '""',
        position: "absolute",
        top: 0,
        display: "block",
        width: "100%",
        marginLeft: "-1rem",
        padding: "0 4px 0 1rem",
        height: 22,
      },
    ".rejt-collapsed::before, .rejt-not-collapsed::before": {
      zIndex: 1,
      background: "transparent",
      borderRadius: 4,
      transition: "background 0.2s",
      pointerEvents: "none",
      opacity: 0.1,
    },
    ".rejt-object-node:hover, .rejt-array-node:hover": {
      "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
        background: e.color.secondary,
      },
    },
    ".rejt-collapsed::after, .rejt-not-collapsed::after": {
      content: '""',
      position: "absolute",
      display: "inline-block",
      pointerEvents: "none",
      width: 0,
      height: 0,
    },
    ".rejt-collapsed::after": {
      left: -8,
      top: 8,
      borderTop: "3px solid transparent",
      borderBottom: "3px solid transparent",
      borderLeft: "3px solid rgba(153,153,153,0.6)",
    },
    ".rejt-not-collapsed::after": {
      left: -10,
      top: 10,
      borderTop: "3px solid rgba(153,153,153,0.6)",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
    },
    ".rejt-value": {
      display: "inline-block",
      border: "1px solid transparent",
      borderRadius: 4,
      margin: "1px 0",
      padding: "0 4px",
      cursor: "text",
      color: e.color.defaultText,
    },
    ".rejt-value-node:hover > .rejt-value": {
      background: e.color.lighter,
      borderColor: e.appBorderColor,
    },
  })),
  vo = O.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : "transparent",
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? "bold" : "normal",
    cursor: "pointer",
    order: t ? "initial" : 9,
  })),
  xc = O(Fe)(({ theme: e, icon: t, disabled: r }) => ({
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": 15,
    "height": 15,
    "padding": 3,
    "marginLeft": 5,
    "cursor": r ? "not-allowed" : "pointer",
    "color": e.textMutedColor,
    "&:hover": r
      ? {}
      : { color: t === "subtract" ? e.color.negative : e.color.ancillary },
    "svg + &": { marginLeft: 0 },
  })),
  wc = O.input(({ theme: e, placeholder: t }) => ({
    "outline": 0,
    "margin": t ? 1 : "1px 0",
    "padding": "3px 4px",
    "color": e.color.defaultText,
    "background": e.background.app,
    "border": `1px solid ${e.appBorderColor}`,
    "borderRadius": 4,
    "lineHeight": "14px",
    "width": t === "Key" ? 80 : 120,
    "&:focus": { border: `1px solid ${e.color.secondary}` },
  })),
  XA = O(Xt)(({ theme: e }) => ({
    position: "absolute",
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: "0 3px",
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: "9px",
    fontWeight: "bold",
    textDecoration: "none",
    span: { marginLeft: 3, marginTop: 1 },
  })),
  JA = O(tt.Textarea)(({ theme: e }) => ({
    "flex": 1,
    "padding": "7px 6px",
    "fontFamily": e.typography.fonts.mono,
    "fontSize": "12px",
    "lineHeight": "18px",
    "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" },
    "&:placeholder-shown": { padding: "7px 10px" },
  })),
  QA = {
    bubbles: !0,
    cancelable: !0,
    key: "Enter",
    code: "Enter",
    keyCode: 13,
  },
  e9 = (e) => {
    e.currentTarget.dispatchEvent(new KA.KeyboardEvent("keydown", QA));
  },
  t9 = (e) => {
    e.currentTarget.select();
  },
  r9 = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
    li: { outline: 0 },
  }),
  _c = ({ name: e, value: t, onChange: r }) => {
    let n = am(),
      a = u.useMemo(() => t && m_(t), [t]),
      i = a != null,
      [l, s] = u.useState(!i),
      [c, d] = u.useState(null),
      p = u.useCallback(
        (x) => {
          try {
            x && r(JSON.parse(x)), d(void 0);
          } catch (v) {
            d(v);
          }
        },
        [r]
      ),
      [h, y] = u.useState(!1),
      f = u.useCallback(() => {
        r({}), y(!0);
      }, [y]),
      g = u.useRef(null);
    if (
      (u.useEffect(() => {
        h && g.current && g.current.select();
      }, [h]),
      !i)
    )
      return o.createElement(
        tt.Button,
        { id: Sa(e), onClick: f },
        "Set object"
      );
    let m = o.createElement(JA, {
      ref: g,
      id: nt(e),
      name: e,
      defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
      onBlur: (x) => p(x.target.value),
      placeholder: "Edit JSON string...",
      autoFocus: h,
      valid: c ? "error" : null,
    });
    return o.createElement(
      YA,
      null,
      ["Object", "Array"].includes(Pt(a)) &&
        o.createElement(
          XA,
          {
            href: "#",
            onClick: (x) => {
              x.preventDefault(), s((v) => !v);
            },
          },
          o.createElement(Fe, { icon: l ? "eyeclose" : "eye" }),
          o.createElement("span", null, "RAW")
        ),
      l
        ? m
        : o.createElement(r1, {
            data: a,
            rootName: e,
            onFullyUpdate: r,
            getStyle: r9(n),
            cancelButtonElement: o.createElement(
              vo,
              { type: "button" },
              "Cancel"
            ),
            editButtonElement: o.createElement(vo, { type: "submit" }, "Save"),
            addButtonElement: o.createElement(
              vo,
              { type: "submit", primary: !0 },
              "Save"
            ),
            plusMenuElement: o.createElement(xc, { icon: "add" }),
            minusMenuElement: o.createElement(xc, { icon: "subtract" }),
            inputElement: (x, v, E, b) =>
              b
                ? o.createElement(wc, { onFocus: t9, onBlur: e9 })
                : o.createElement(wc, null),
            fallback: m,
          })
    );
  },
  n9 = O.input(({ theme: e, min: t, max: r, value: n }) => ({
    "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
    "&::-webkit-slider-runnable-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ct(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ct(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Wt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Wt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: "100%",
      height: 6,
      cursor: "pointer",
    },
    "&::-webkit-slider-thumb": {
      "marginTop": "-6px",
      "width": 16,
      "height": 16,
      "border": `1px solid ${At(e.appBorderColor, 0.2)}`,
      "borderRadius": "50px",
      "boxShadow": `0 1px 3px 0px ${At(e.appBorderColor, 0.2)}`,
      "cursor": "grab",
      "appearance": "none",
      "background": `${e.input.background}`,
      "transition": "all 150ms ease-out",
      "&:hover": {
        background: `${ct(0.05, e.input.background)}`,
        transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
        transition: "all 50ms ease-out",
      },
      "&:active": {
        background: `${e.input.background}`,
        transform: "scale3d(1, 1, 1) translateY(0px)",
        cursor: "grabbing",
      },
    },
    "&:focus": {
      "outline": "none",
      "&::-webkit-slider-runnable-track": {
        borderColor: At(e.color.secondary, 0.4),
      },
      "&::-webkit-slider-thumb": {
        borderColor: e.color.secondary,
        boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
      },
    },
    "&::-moz-range-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ct(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ct(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Wt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Wt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: "100%",
      height: 6,
      cursor: "pointer",
      outline: "none",
    },
    "&::-moz-range-thumb": {
      "width": 16,
      "height": 16,
      "border": `1px solid ${At(e.appBorderColor, 0.2)}`,
      "borderRadius": "50px",
      "boxShadow": `0 1px 3px 0px ${At(e.appBorderColor, 0.2)}`,
      "cursor": "grab",
      "background": `${e.input.background}`,
      "transition": "all 150ms ease-out",
      "&:hover": {
        background: `${ct(0.05, e.input.background)}`,
        transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
        transition: "all 50ms ease-out",
      },
      "&:active": {
        background: `${e.input.background}`,
        transform: "scale3d(1, 1, 1) translateY(0px)",
        cursor: "grabbing",
      },
    },
    "&::-ms-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ct(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ct(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${Wt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Wt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: "transparent",
      width: "100%",
      height: "6px",
      cursor: "pointer",
    },
    "&::-ms-fill-lower": { borderRadius: 6 },
    "&::-ms-fill-upper": { borderRadius: 6 },
    "&::-ms-thumb": {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${At(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: "grab",
      marginTop: 0,
    },
    "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } },
  })),
  n1 = O.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: "nowrap",
    fontFeatureSettings: "tnum",
    fontVariantNumeric: "tabular-nums",
  }),
  a9 = O(n1)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: "right",
    flexShrink: 0,
  })),
  o9 = O.div({ display: "flex", alignItems: "center", width: "100%" });
function i9(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var l9 = ({
    name: e,
    value: t,
    onChange: r,
    min: n = 0,
    max: a = 100,
    step: i = 1,
    onBlur: l,
    onFocus: s,
  }) => {
    let c = (h) => {
        r(EA(h.target.value));
      },
      d = t !== void 0,
      p = u.useMemo(() => i9(i), [i]);
    return o.createElement(
      o9,
      null,
      o.createElement(n1, null, n),
      o.createElement(n9, {
        id: nt(e),
        type: "range",
        onChange: c,
        name: e,
        value: t,
        min: n,
        max: a,
        step: i,
        onFocus: s,
        onBlur: l,
      }),
      o.createElement(
        a9,
        { numberOFDecimalsPlaces: p, max: a },
        d ? t.toFixed(p) : "--",
        " / ",
        a
      )
    );
  },
  s9 = O.label({ display: "flex" }),
  c9 = O.div(({ isMaxed: e }) => ({
    marginLeft: "0.75rem",
    paddingTop: "0.35rem",
    color: e ? "red" : void 0,
  })),
  u9 = ({
    name: e,
    value: t,
    onChange: r,
    onFocus: n,
    onBlur: a,
    maxLength: i,
  }) => {
    let l = (h) => {
        r(h.target.value);
      },
      [s, c] = u.useState(!1),
      d = u.useCallback(() => {
        r(""), c(!0);
      }, [c]);
    if (t === void 0)
      return o.createElement(
        tt.Button,
        { id: Sa(e), onClick: d },
        "Set string"
      );
    let p = typeof t == "string";
    return o.createElement(
      s9,
      null,
      o.createElement(tt.Textarea, {
        id: nt(e),
        maxLength: i,
        onChange: l,
        size: "flex",
        placeholder: "Edit string...",
        autoFocus: s,
        valid: p ? null : "error",
        name: e,
        value: p ? t : "",
        onFocus: n,
        onBlur: a,
      }),
      i &&
        o.createElement(
          c9,
          { isMaxed: (t == null ? void 0 : t.length) === i },
          (t == null ? void 0 : t.length) ?? 0,
          " / ",
          i
        )
    );
  },
  d9 = O(tt.Input)({ padding: 10 });
function p9(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var f9 = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
    let a = u.useRef(null);
    function i(l) {
      if (!l.target.files) return;
      let s = Array.from(l.target.files).map((c) => URL.createObjectURL(c));
      e(s), p9(n);
    }
    return (
      u.useEffect(() => {
        n == null && a.current && (a.current.value = null);
      }, [n, t]),
      o.createElement(d9, {
        ref: a,
        id: nt(t),
        type: "file",
        name: t,
        multiple: !0,
        onChange: i,
        accept: r,
        size: "flex",
      })
    );
  },
  m9 = u.lazy(() =>
    R(
      () => import("./Color-6VNJS4EI-38affeec.js"),
      [
        "./Color-6VNJS4EI-38affeec.js",
        "./index-61bf1805.js",
        "./_commonjsHelpers-de833af9.js",
        "./index-46294899.js",
        "./iframe-5ac5d544.js",
        "./chunk-6P7RB4HF-150ba47c.js",
        "./index-d475d2ea.js",
        "./_commonjs-dynamic-modules-302442b1.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  g9 = (e) =>
    o.createElement(
      u.Suspense,
      { fallback: o.createElement("div", null) },
      o.createElement(m9, { ...e })
    ),
  h9 = {
    "array": _c,
    "object": _c,
    "boolean": pA,
    "color": g9,
    "date": vA,
    "number": xA,
    "check": pr,
    "inline-check": pr,
    "radio": pr,
    "inline-radio": pr,
    "select": pr,
    "multi-select": pr,
    "range": l9,
    "text": u9,
    "file": f9,
  },
  Ac = () => o.createElement(o.Fragment, null, "-"),
  y9 = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
    let { key: a, control: i } = e,
      [l, s] = u.useState(!1),
      [c, d] = u.useState({ value: t });
    u.useEffect(() => {
      l || d({ value: t });
    }, [l, t]);
    let p = u.useCallback((m) => (d({ value: m }), r({ [a]: m }), m), [r, a]),
      h = u.useCallback(() => s(!1), []),
      y = u.useCallback(() => s(!0), []);
    if (!i || i.disable)
      return n
        ? o.createElement(
            yr,
            {
              href: "https://storybook.js.org/docs/react/essentials/controls",
              target: "_blank",
              withArrow: !0,
            },
            "Setup controls"
          )
        : o.createElement(Ac, null);
    let f = {
        name: a,
        argType: e,
        value: c.value,
        onChange: p,
        onBlur: h,
        onFocus: y,
      },
      g = h9[i.type] || Ac;
    return o.createElement(g, { ...f, ...i, controlType: i.type });
  },
  v9 = O.span({ fontWeight: "bold" }),
  b9 = O.span(({ theme: e }) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: "help",
  })),
  E9 = O.div(({ theme: e }) => ({
    "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
    "code": {
      ...kt({ theme: e }),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono,
    },
    "& code": { margin: 0, display: "inline-block" },
    "& pre > code": { whiteSpace: "pre-wrap" },
  })),
  x9 = O.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === "light"
        ? ue(0.1, e.color.defaultText)
        : ue(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  })),
  w9 = O.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === "light"
        ? ue(0.1, e.color.defaultText)
        : ue(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  })),
  _9 = O.td(({ theme: e, expandable: t }) => ({
    paddingLeft: t ? "40px !important" : "20px !important",
  })),
  Ln = (e) => {
    var m;
    let [t, r] = u.useState(!1),
      {
        row: n,
        updateArgs: a,
        compact: i,
        expandable: l,
        initialExpandedArgs: s,
      } = e,
      { name: c, description: d } = n,
      p = n.table || {},
      h = p.type || n.type,
      y = p.defaultValue || n.defaultValue,
      f = (m = n.type) == null ? void 0 : m.required,
      g = d != null && d !== "";
    return o.createElement(
      "tr",
      { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
      o.createElement(
        _9,
        { expandable: l },
        o.createElement(v9, null, c),
        f ? o.createElement(b9, { title: "Required" }, "*") : null
      ),
      i
        ? null
        : o.createElement(
            "td",
            null,
            g && o.createElement(E9, null, o.createElement(Bd, null, d)),
            p.jsDocTags != null
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    w9,
                    { hasDescription: g },
                    o.createElement(yo, { value: h, initialExpandedArgs: s })
                  ),
                  o.createElement(eA, { tags: p.jsDocTags })
                )
              : o.createElement(
                  x9,
                  { hasDescription: g },
                  o.createElement(yo, { value: h, initialExpandedArgs: s })
                )
          ),
      i
        ? null
        : o.createElement(
            "td",
            null,
            o.createElement(yo, { value: y, initialExpandedArgs: s })
          ),
      a
        ? o.createElement(
            "td",
            null,
            o.createElement(y9, { ...e, isHovered: t })
          )
        : null
    );
  },
  A9 = O(Fe)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === "light"
        ? ue(0.25, e.color.defaultText)
        : ue(0.3, e.color.defaultText),
    border: "none",
    display: "inline-block",
  })),
  C9 = O.span(({ theme: e }) => ({
    display: "flex",
    lineHeight: "20px",
    alignItems: "center",
  })),
  S9 = O.td(({ theme: e }) => ({
    "position": "relative",
    "letterSpacing": "0.35em",
    "textTransform": "uppercase",
    "fontWeight": e.typography.weight.bold,
    "fontSize": e.typography.size.s1 - 1,
    "color":
      e.base === "light"
        ? ue(0.4, e.color.defaultText)
        : ue(0.6, e.color.defaultText),
    "background": `${e.background.app} !important`,
    "& ~ td": { background: `${e.background.app} !important` },
  })),
  R9 = O.td(({ theme: e }) => ({
    position: "relative",
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  })),
  T9 = O.td(() => ({ position: "relative" })),
  O9 = O.tr(({ theme: e }) => ({
    "&:hover > td": {
      backgroundColor: `${Wt(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: "row-resize",
    },
  })),
  Cc = O.button(() => ({
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    color: "transparent",
    cursor: "row-resize !important",
  })),
  bo = ({
    level: e = "section",
    label: t,
    children: r,
    initialExpanded: n = !0,
    colSpan: a = 3,
  }) => {
    let [i, l] = u.useState(n),
      s = e === "subsection" ? R9 : S9,
      c = (r == null ? void 0 : r.length) || 0,
      d = e === "subsection" ? `${c} item${c !== 1 ? "s" : ""}` : "",
      p = i ? "arrowdown" : "arrowright",
      h = `${i ? "Hide" : "Show"} ${e === "subsection" ? c : t} item${
        c !== 1 ? "s" : ""
      }`;
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(
        O9,
        { title: h },
        o.createElement(
          s,
          { colSpan: 1 },
          o.createElement(Cc, { onClick: (y) => l(!i), tabIndex: 0 }, h),
          o.createElement(C9, null, o.createElement(A9, { icon: p }), t)
        ),
        o.createElement(
          T9,
          { colSpan: a - 1 },
          o.createElement(
            Cc,
            { onClick: (y) => l(!i), tabIndex: -1, style: { outline: "none" } },
            h
          ),
          i ? null : d
        )
      ),
      i ? r : null
    );
  },
  $n = O.div(({ theme: e }) => ({
    "display": "flex",
    "gap": 16,
    "borderBottom": `1px solid ${e.appBorderColor}`,
    "&:last-child": { borderBottom: 0 },
  })),
  Ae = O.div(({ numColumn: e }) => ({
    display: "flex",
    flexDirection: "column",
    flex: e || 1,
    gap: 5,
    padding: "12px 20px",
  })),
  he = O.div(({ theme: e, width: t, height: r }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || "100%",
    height: r || 16,
    borderRadius: 3,
  })),
  Ce = [2, 4, 2, 2],
  k9 = () =>
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        $n,
        null,
        o.createElement(
          Ae,
          { numColumn: Ce[0] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[1] },
          o.createElement(he, { width: "30%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[2] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[3] },
          o.createElement(he, { width: "60%" })
        )
      ),
      o.createElement(
        $n,
        null,
        o.createElement(
          Ae,
          { numColumn: Ce[0] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[1] },
          o.createElement(he, { width: "80%" }),
          o.createElement(he, { width: "30%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[2] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[3] },
          o.createElement(he, { width: "60%" })
        )
      ),
      o.createElement(
        $n,
        null,
        o.createElement(
          Ae,
          { numColumn: Ce[0] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[1] },
          o.createElement(he, { width: "80%" }),
          o.createElement(he, { width: "30%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[2] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[3] },
          o.createElement(he, { width: "60%" })
        )
      ),
      o.createElement(
        $n,
        null,
        o.createElement(
          Ae,
          { numColumn: Ce[0] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[1] },
          o.createElement(he, { width: "80%" }),
          o.createElement(he, { width: "30%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[2] },
          o.createElement(he, { width: "60%" })
        ),
        o.createElement(
          Ae,
          { numColumn: Ce[3] },
          o.createElement(he, { width: "60%" })
        )
      )
    ),
  D9 = O.div(({ inAddonPanel: e, theme: t }) => ({
    height: e ? "100%" : "auto",
    display: "flex",
    border: e ? "none" : `1px solid ${t.appBorderColor}`,
    borderRadius: e ? 0 : t.appBorderRadius,
    padding: e ? 0 : 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 15,
    background: t.background.content,
    boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0",
  })),
  L9 = O.div({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    maxWidth: 415,
  }),
  $9 = O.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: "center",
    color: e.textColor,
  })),
  I9 = O.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: "center",
    color: e.textMutedColor,
  })),
  F9 = O.div({ display: "flex", gap: 25 }),
  P9 = O.div(({ theme: e }) => ({
    width: 1,
    height: 16,
    backgroundColor: e.appBorderColor,
  })),
  M9 = O.div(({ theme: e }) => ({
    width: 22,
    height: 16,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.color.secondary}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })),
  B9 = ({ inAddonPanel: e }) => {
    let [t, r] = u.useState(!0);
    return (
      u.useEffect(() => {
        let n = setTimeout(() => {
          r(!1);
        }, 100);
        return () => clearTimeout(n);
      }, []),
      t
        ? null
        : o.createElement(
            D9,
            { inAddonPanel: e },
            o.createElement(
              L9,
              null,
              o.createElement(
                $9,
                null,
                e
                  ? "Interactive story playground"
                  : "Args table with interactive controls couldn't be auto-generated"
              ),
              o.createElement(
                I9,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
              )
            ),
            o.createElement(
              F9,
              null,
              e &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    yr,
                    {
                      href: "https://youtu.be/0gOfS6K0x0E",
                      target: "_blank",
                      icon: o.createElement(
                        M9,
                        null,
                        o.createElement(N4, { size: 8 })
                      ),
                      withArrow: !0,
                    },
                    "Watch 5m video"
                  ),
                  o.createElement(P9, null),
                  o.createElement(
                    yr,
                    {
                      href: "https://storybook.js.org/docs/react/essentials/controls",
                      target: "_blank",
                      withArrow: !0,
                    },
                    "Read docs"
                  )
                ),
              !e &&
                o.createElement(
                  yr,
                  {
                    href: "https://storybook.js.org/docs/react/essentials/controls",
                    target: "_blank",
                    withArrow: !0,
                  },
                  "Learn how to set that up"
                )
            )
          )
    );
  },
  N9 = O.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
    "&&": {
      "borderSpacing": 0,
      "color": e.color.defaultText,
      "td, th": {
        padding: 0,
        border: "none",
        verticalAlign: "top",
        textOverflow: "ellipsis",
      },
      "fontSize": e.typography.size.s2 - 1,
      "lineHeight": "20px",
      "textAlign": "left",
      "width": "100%",
      "marginTop": r ? 0 : 25,
      "marginBottom": r ? 0 : 40,
      "thead th:first-of-type, td:first-of-type": { width: "25%" },
      "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
      "th:nth-of-type(2), td:nth-of-type(2)": {
        ...(t ? null : { width: "35%" }),
      },
      "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
      "th:last-of-type, td:last-of-type": {
        paddingRight: 20,
        ...(t ? null : { width: "25%" }),
      },
      "th": {
        color:
          e.base === "light"
            ? ue(0.25, e.color.defaultText)
            : ue(0.45, e.color.defaultText),
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      },
      "td": {
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
        "&:last-of-type": { paddingRight: 20 },
      },
      "marginLeft": r ? 0 : 1,
      "marginRight": r ? 0 : 1,
      "tbody": {
        ...(r
          ? null
          : {
              filter:
                e.base === "light"
                  ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                  : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
            }),
        "> tr > *": {
          background: e.background.content,
          borderTop: `1px solid ${e.appBorderColor}`,
        },
        ...(r
          ? null
          : {
              "> tr:first-of-type > *": {
                borderBlockStart: `1px solid ${e.appBorderColor}`,
              },
              "> tr:last-of-type > *": {
                borderBlockEnd: `1px solid ${e.appBorderColor}`,
              },
              "> tr > *:first-of-type": {
                borderInlineStart: `1px solid ${e.appBorderColor}`,
              },
              "> tr > *:last-of-type": {
                borderInlineEnd: `1px solid ${e.appBorderColor}`,
              },
              "> tr:first-of-type > td:first-of-type": {
                borderTopLeftRadius: e.appBorderRadius,
              },
              "> tr:first-of-type > td:last-of-type": {
                borderTopRightRadius: e.appBorderRadius,
              },
              "> tr:last-of-type > td:first-of-type": {
                borderBottomLeftRadius: e.appBorderRadius,
              },
              "> tr:last-of-type > td:last-of-type": {
                borderBottomRightRadius: e.appBorderRadius,
              },
            }),
      },
    },
  })),
  V9 = O(Xt)(({ theme: e }) => ({
    color: e.barTextColor,
    margin: "-4px -12px -4px 0",
  })),
  H9 = O.span({ display: "flex", justifyContent: "space-between" }),
  j9 = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, n;
      return (
        +!!((r = t.type) != null && r.required) -
          +!!((n = e.type) != null && n.required) ||
        e.name.localeCompare(t.name)
      );
    },
    none: void 0,
  },
  Z9 = (e, t) => {
    let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return r;
    Object.entries(e).forEach(([i, l]) => {
      let { category: s, subcategory: c } =
        (l == null ? void 0 : l.table) || {};
      if (s) {
        let d = r.sections[s] || { ungrouped: [], subsections: {} };
        if (!c) d.ungrouped.push({ key: i, ...l });
        else {
          let p = d.subsections[c] || [];
          p.push({ key: i, ...l }), (d.subsections[c] = p);
        }
        r.sections[s] = d;
      } else if (c) {
        let d = r.ungroupedSubsections[c] || [];
        d.push({ key: i, ...l }), (r.ungroupedSubsections[c] = d);
      } else r.ungrouped.push({ key: i, ...l });
    });
    let n = j9[t],
      a = (i) =>
        n
          ? Object.keys(i).reduce((l, s) => ({ ...l, [s]: i[s].sort(n) }), {})
          : i;
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: a(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (i, l) => ({
          ...i,
          [l]: {
            ungrouped: r.sections[l].ungrouped.sort(n),
            subsections: a(r.sections[l].subsections),
          },
        }),
        {}
      ),
    };
  },
  z9 = (e, t, r) => {
    try {
      return q1(e, t, r);
    } catch (n) {
      return x_.warn(n.message), !1;
    }
  },
  q9 = (e) => {
    let {
      updateArgs: t,
      resetArgs: r,
      compact: n,
      inAddonPanel: a,
      initialExpandedArgs: i,
      sort: l = "none",
      isLoading: s,
    } = e;
    if ("error" in e) {
      let { error: E } = e;
      return o.createElement(
        Zd,
        null,
        E,
        " ",
        o.createElement(
          yr,
          {
            href: "http://storybook.js.org/docs/",
            target: "_blank",
            withArrow: !0,
          },
          "Read the docs"
        )
      );
    }
    if (s) return o.createElement(k9, null);
    let { rows: c, args: d, globals: p } = "rows" in e && e,
      h = Z9(
        yE(c, (E) => {
          var b;
          return (
            !((b = E == null ? void 0 : E.table) != null && b.disable) &&
            z9(E, d || {}, p || {})
          );
        }),
        l
      ),
      y = h.ungrouped.length === 0,
      f = Object.entries(h.sections).length === 0,
      g = Object.entries(h.ungroupedSubsections).length === 0;
    if (y && f && g) return o.createElement(B9, { inAddonPanel: a });
    let m = 1;
    t && (m += 1), n || (m += 2);
    let x = Object.keys(h.sections).length > 0,
      v = {
        updateArgs: t,
        compact: n,
        inAddonPanel: a,
        initialExpandedArgs: i,
      };
    return o.createElement(
      Vi,
      null,
      o.createElement(
        N9,
        {
          compact: n,
          inAddonPanel: a,
          className: "docblock-argstable sb-unstyled",
        },
        o.createElement(
          "thead",
          { className: "docblock-argstable-head" },
          o.createElement(
            "tr",
            null,
            o.createElement("th", null, o.createElement("span", null, "Name")),
            n
              ? null
              : o.createElement(
                  "th",
                  null,
                  o.createElement("span", null, "Description")
                ),
            n
              ? null
              : o.createElement(
                  "th",
                  null,
                  o.createElement("span", null, "Default")
                ),
            t
              ? o.createElement(
                  "th",
                  null,
                  o.createElement(
                    H9,
                    null,
                    "Control",
                    " ",
                    !s &&
                      r &&
                      o.createElement(
                        V9,
                        { onClick: () => r(), title: "Reset controls" },
                        o.createElement(Fe, {
                          "icon": "undo",
                          "aria-hidden": !0,
                        })
                      )
                  )
                )
              : null
          )
        ),
        o.createElement(
          "tbody",
          { className: "docblock-argstable-body" },
          h.ungrouped.map((E) =>
            o.createElement(Ln, {
              key: E.key,
              row: E,
              arg: d && d[E.key],
              ...v,
            })
          ),
          Object.entries(h.ungroupedSubsections).map(([E, b]) =>
            o.createElement(
              bo,
              { key: E, label: E, level: "subsection", colSpan: m },
              b.map((w) =>
                o.createElement(Ln, {
                  key: w.key,
                  row: w,
                  arg: d && d[w.key],
                  expandable: x,
                  ...v,
                })
              )
            )
          ),
          Object.entries(h.sections).map(([E, b]) =>
            o.createElement(
              bo,
              { key: E, label: E, level: "section", colSpan: m },
              b.ungrouped.map((w) =>
                o.createElement(Ln, {
                  key: w.key,
                  row: w,
                  arg: d && d[w.key],
                  ...v,
                })
              ),
              Object.entries(b.subsections).map(([w, _]) =>
                o.createElement(
                  bo,
                  { key: w, label: w, level: "subsection", colSpan: m },
                  _.map((A) =>
                    o.createElement(Ln, {
                      key: A.key,
                      row: A,
                      arg: d && d[A.key],
                      expandable: x,
                      ...v,
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  };
O.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color:
    e.base === "light"
      ? ue(0.4, e.color.defaultText)
      : ue(0.6, e.color.defaultText),
}));
O.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
O.div({
  "display": "flex",
  "flexDirection": "row",
  "alignItems": "baseline",
  "&:not(:last-child)": { marginBottom: "1rem" },
});
O.div(de, ({ theme: e }) => ({
  ...$a(e),
  margin: "25px 0 40px",
  padding: "30px 20px",
}));
O.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
}));
O.div(({ theme: e }) => ({
  color:
    e.base === "light"
      ? ue(0.2, e.color.defaultText)
      : ue(0.6, e.color.defaultText),
}));
O.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
O.div(({ theme: e }) => ({
  "flex": 1,
  "textAlign": "center",
  "fontFamily": e.typography.fonts.mono,
  "fontSize": e.typography.size.s1,
  "lineHeight": 1,
  "overflow": "hidden",
  "color":
    e.base === "light"
      ? ue(0.4, e.color.defaultText)
      : ue(0.6, e.color.defaultText),
  "> div": {
    display: "inline-block",
    overflow: "hidden",
    maxWidth: "100%",
    textOverflow: "ellipsis",
  },
  "span": { display: "block", marginTop: 2 },
}));
O.div({ display: "flex", flexDirection: "row" });
O.div(({ background: e }) => ({
  "position": "relative",
  "flex": 1,
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: e,
    content: '""',
  },
}));
O.div(({ theme: e }) => ({
  ...$a(e),
  display: "flex",
  flexDirection: "row",
  height: 50,
  marginBottom: 5,
  overflow: "hidden",
  backgroundColor: "white",
  backgroundImage:
    "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
  backgroundClip: "padding-box",
}));
O.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  position: "relative",
  marginBottom: 30,
});
O.div({ flex: 1, display: "flex", flexDirection: "row" });
O.div({ display: "flex", alignItems: "flex-start" });
O.div({ flex: "0 0 30%" });
O.div({ flex: 1 });
O.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color:
    e.base === "light"
      ? ue(0.4, e.color.defaultText)
      : ue(0.6, e.color.defaultText),
}));
O.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  display: "flex",
  flexDirection: "column",
}));
O.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}));
O.div(({ theme: e }) => ({
  ...$a(e),
  "overflow": "hidden",
  "height": 40,
  "width": 40,
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "flex": "none",
  "> img, > svg": { width: 20, height: 20 },
}));
O.div({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "0 1 calc(20% - 10px)",
  minWidth: 120,
  margin: "0px 10px 30px 0",
});
O.div({ display: "flex", flexFlow: "row wrap" });
var U9 = (e) => `anchor--${e}`,
  W9 = ({ storyId: e, children: t }) =>
    o.createElement("div", { id: U9(e), className: "sb-anchor" }, t);
Oe &&
  Oe.__DOCS_CONTEXT__ === void 0 &&
  ((Oe.__DOCS_CONTEXT__ = u.createContext(null)),
  (Oe.__DOCS_CONTEXT__.displayName = "DocsContext"));
var ze = Oe ? Oe.__DOCS_CONTEXT__ : u.createContext(null),
  Fa = (e, t) => u.useContext(ze).resolveOf(e, t);
function G9(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function K9(e, t) {
  let r = fl([e], t);
  return r && r[0];
}
function fl(e, t) {
  let [r, n] = u.useState({});
  return (
    u.useEffect(() => {
      Promise.all(
        e.map(async (a) => {
          let i = await t.loadStory(a);
          n((l) => (l[a] === i ? l : { ...l, [a]: i }));
        })
      );
    }),
    e.map((a) => {
      if (r[a]) return r[a];
      try {
        return t.storyById(a);
      } catch {
        return null;
      }
    })
  );
}
function a1(e) {
  return f7(e);
}
var o1 = u.createContext({ sources: {} }),
  i1 = "--unknown--",
  Y9 = ({ children: e, channel: t }) => {
    let [r, n] = u.useState({});
    return (
      u.useEffect(() => {
        let a = (i, l = null, s = !1) => {
          let {
              id: c,
              args: d = void 0,
              source: p,
              format: h,
            } = typeof i == "string" ? { id: i, source: l, format: s } : i,
            y = d ? a1(d) : i1;
          n((f) => ({ ...f, [c]: { ...f[c], [y]: { code: p, format: h } } }));
        };
        return t.on(El, a), () => t.off(El, a);
      }, []),
      o.createElement(o1.Provider, { value: { sources: r } }, e)
    );
  },
  X9 = ((e) => (
    (e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e
  ))(X9 || {}),
  J9 = (e) => {
    let t = e
      .map((r) => {
        var n, a;
        return (a = (n = r.parameters.docs) == null ? void 0 : n.source) == null
          ? void 0
          : a.state;
      })
      .filter(Boolean);
    return t.length === 0 ? "closed" : t[0];
  },
  Q9 = (e, t, r) => {
    let { sources: n } = r,
      a = n == null ? void 0 : n[e];
    return (
      (a == null ? void 0 : a[a1(t)]) ||
      (a == null ? void 0 : a[i1]) || { code: "" }
    );
  },
  eC = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: n,
  }) => {
    var c, d, p, h, y, f;
    let { __isArgsStory: a } = t.parameters,
      i = ((c = t.parameters.docs) == null ? void 0 : c.source) || {},
      l = r || i.type || Ba.AUTO;
    if (i.code !== void 0) return i.code;
    let s =
      l === Ba.DYNAMIC || (l === Ba.AUTO && e && a)
        ? e
        : i.originalSource || "";
    return (
      i.transformSource &&
        xe(Le`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.docs) != null &&
        d.transformSource &&
        xe(Le`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (p = t.parameters.jsx) != null &&
        p.transformSource &&
        xe(Le`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((f =
        n ??
        i.transform ??
        i.transformSource ??
        ((h = t.parameters.docs) == null ? void 0 : h.transformSource) ??
        ((y = t.parameters.jsx) == null ? void 0 : y.transformSource)) == null
        ? void 0
        : f(s, t)) || s
    );
  },
  l1 = (e, t, r) => {
    var f, g, m;
    let n = e.ids || (e.id ? [e.id] : []),
      a = fl(n, t),
      i = a,
      { of: l } = e;
    if ("of" in e && l === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    if (l) i = [t.resolveOf(l, ["story"]).story];
    else if (i.length === 0)
      try {
        i = [t.storyById()];
      } catch {}
    if (!a.every(Boolean))
      return { error: "Oh no! The source is not available.", state: "none" };
    let s =
        ((m =
          (g = (f = i[0]) == null ? void 0 : f.parameters) == null
            ? void 0
            : g.docs) == null
          ? void 0
          : m.source) || {},
      { code: c } = e,
      d = e.format ?? s.format,
      p = e.language ?? s.language ?? "jsx",
      h = e.dark ?? s.dark ?? !1;
    c ||
      (c = i.map((x, v) => {
        var _, A;
        if (!x) return "";
        let E = t.getStoryContext(x),
          b = e.__forceInitialArgs ? E.initialArgs : E.unmappedArgs,
          w = Q9(x.id, b, r);
        return (
          v === 0 &&
            (d =
              w.format ??
              ((A = (_ = x.parameters.docs) == null ? void 0 : _.source) == null
                ? void 0
                : A.format) ??
              !1),
          eC({
            snippet: w.code,
            storyContext: { ...E, args: b },
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        );
      }).join(`

`));
    let y = J9(i);
    return c
      ? { code: c, format: d, language: p, dark: h, state: y }
      : { error: "Oh no! The source is not available.", state: y };
  },
  s1 = (e, t) => {
    let { id: r, of: n, meta: a, story: i } = e;
    if ("of" in e && n === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    if (r)
      return (
        xe(Le`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      );
    let { name: l } = e;
    return l
      ? (xe(Le`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(l))
      : (i &&
          xe(Le`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        a && t.referenceMeta(a, !1),
        t.resolveOf(n || i || "story", ["story"]).story.id);
  },
  tC = (e, t, r) => {
    let { parameters: n = {} } = t || {},
      { docs: a = {} } = n,
      i = a.story || {};
    if (a.disable) return null;
    let { inlineStories: l, iframeHeight: s } = a;
    typeof l < "u" &&
      xe(Le`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    let c = e.inline ?? i.inline ?? l ?? !1;
    if (
      (typeof s < "u" &&
        xe(Le`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      c)
    ) {
      let p = e.height ?? i.height,
        h = e.autoplay ?? i.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: p,
        autoplay: h,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      };
    }
    let d = e.height ?? i.height ?? i.iframeHeight ?? s ?? "100px";
    return { story: t, inline: !1, height: d, primary: !!e.__primary };
  },
  rC = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = u.useContext(ze),
      r = s1(e, t),
      n = K9(r, t);
    if (!n) return o.createElement(ul, null);
    let a = tC(e, n, t);
    return a ? o.createElement(z_, { ...a }) : null;
  },
  nC = (
    { withSource: e, mdxSource: t, children: r, layout: n, ...a },
    i,
    l
  ) => {
    let s = u.Children.toArray(r)
        .filter((y) => y.props && (y.props.id || y.props.name || y.props.of))
        .map((y) => s1(y.props, i)),
      c = fl(s, i),
      d = c.some((y) => !y),
      p = l1(
        {
          ...(t ? { code: decodeURI(t) } : { ids: s }),
          ...(a.of && { of: a.of }),
        },
        i,
        l
      );
    if (e === "none") return { isLoading: d, previewProps: a };
    let h = n;
    return (
      u.Children.forEach(r, (y) => {
        var f, g;
        h ||
          (h =
            (g =
              (f = y == null ? void 0 : y.props) == null
                ? void 0
                : f.parameters) == null
              ? void 0
              : g.layout);
      }),
      c.forEach((y) => {
        var f, g;
        h ||
          !y ||
          (h =
            (y == null ? void 0 : y.parameters.layout) ??
            ((g = (f = y.parameters.docs) == null ? void 0 : f.canvas) == null
              ? void 0
              : g.layout));
      }),
      {
        isLoading: d,
        previewProps: {
          ...a,
          layout: h ?? "padded",
          withSource: p,
          isExpanded: (e || p.state) === "open",
        },
      }
    );
  },
  aC = (e) => {
    var x, v, E, b, w, _, A, S, C, k;
    let t = u.useContext(ze),
      r = u.useContext(o1),
      { children: n, of: a, source: i } = e;
    if ("of" in e && a === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let { isLoading: l, previewProps: s } = nC(e, t, r),
      c,
      d,
      p;
    try {
      ({ story: c } = Fa(a || "story", ["story"]));
    } catch (D) {
      n || (p = D);
    }
    try {
      d = l1({ ...i, ...(a && { of: a }) }, t, r);
    } catch (D) {
      n || (p = D);
    }
    if (p) throw p;
    if (
      (e.withSource &&
        xe(Le`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        xe(Le`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        xe(Le`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      n)
    )
      return (
        xe(Le`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        l ? o.createElement(J_, null) : o.createElement(Go, { ...s }, n)
      );
    let h =
        e.layout ??
        c.parameters.layout ??
        ((v = (x = c.parameters.docs) == null ? void 0 : x.canvas) == null
          ? void 0
          : v.layout) ??
        "padded",
      y =
        e.withToolbar ??
        ((b = (E = c.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : b.withToolbar) ??
        !1,
      f =
        e.additionalActions ??
        ((_ = (w = c.parameters.docs) == null ? void 0 : w.canvas) == null
          ? void 0
          : _.additionalActions),
      g =
        e.sourceState ??
        ((S = (A = c.parameters.docs) == null ? void 0 : A.canvas) == null
          ? void 0
          : S.sourceState) ??
        "hidden",
      m =
        e.className ??
        ((k = (C = c.parameters.docs) == null ? void 0 : C.canvas) == null
          ? void 0
          : k.className);
    return o.createElement(
      Go,
      {
        withSource: g === "none" ? void 0 : d,
        isExpanded: g === "shown",
        withToolbar: y,
        additionalActions: f,
        className: m,
        layout: h,
      },
      o.createElement(rC, { of: a || c.moduleExport, meta: e.meta, ...e.story })
    );
  },
  oC = (e, t) => {
    let r = t.getStoryContext(e),
      [n, a] = u.useState(r.globals);
    return (
      u.useEffect(() => {
        let i = (l) => {
          a(l.globals);
        };
        return t.channel.on(fc, i), () => t.channel.off(fc, i);
      }, [t.channel]),
      [n]
    );
  },
  iC = (e, t) => {
    let r = lC(e, t);
    if (!r) throw new Error("No result when story was defined");
    return r;
  },
  lC = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: "none" },
      [a, i] = u.useState(r.args);
    u.useEffect(() => {
      let c = (d) => {
        d.storyId === n && i(d.args);
      };
      return t.channel.on(pc, c), () => t.channel.off(pc, c);
    }, [n, t.channel]);
    let l = u.useCallback(
        (c) => t.channel.emit(__, { storyId: n, updatedArgs: c }),
        [n, t.channel]
      ),
      s = u.useCallback(
        (c) => t.channel.emit(A_, { storyId: n, argNames: c }),
        [n, t.channel]
      );
    return e && [a, l, s];
  },
  sC = (e) => {
    var m;
    let { of: t } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let r = u.useContext(ze),
      { story: n } = r.resolveOf(t || "story", ["story"]),
      { parameters: a, argTypes: i } = n,
      l = ((m = a.docs) == null ? void 0 : m.controls) || {},
      s = e.include ?? l.include,
      c = e.exclude ?? l.exclude,
      d = e.sort ?? l.sort,
      [p, h, y] = iC(n, r),
      [f] = oC(n, r),
      g = w_(i, s, c);
    return o.createElement(q9, {
      rows: g,
      args: p,
      globals: f,
      updateArgs: h,
      resetArgs: y,
      sort: d,
    });
  },
  { document: c1 } = Oe,
  u1 = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
      return o.createElement(Mi, null, t);
    let n = e && e.split("-");
    return o.createElement(sl, {
      language: (n && n[1]) || "plaintext",
      format: !1,
      code: t,
      ...r,
    });
  };
function ml(e, t) {
  e.channel.emit(C_, t);
}
var Jo = F0.a,
  cC = ({ hash: e, children: t }) => {
    let r = u.useContext(ze);
    return o.createElement(
      Jo,
      {
        href: e,
        target: "_self",
        onClick: (n) => {
          let a = e.substring(1);
          c1.getElementById(a) && ml(r, e);
        },
      },
      t
    );
  },
  d1 = (e) => {
    let { href: t, target: r, children: n, ...a } = e,
      i = u.useContext(ze);
    if (t) {
      if (t.startsWith("#")) return o.createElement(cC, { hash: t }, n);
      if (r !== "_blank" && !t.startsWith("https://"))
        return o.createElement(
          Jo,
          {
            href: t,
            onClick: (l) => {
              l.button === 0 &&
                !l.altKey &&
                !l.ctrlKey &&
                !l.metaKey &&
                !l.shiftKey &&
                (l.preventDefault(),
                ml(i, l.currentTarget.getAttribute("href")));
            },
            target: r,
            ...a,
          },
          n
        );
    }
    return o.createElement(Jo, { ...e });
  },
  p1 = ["h1", "h2", "h3", "h4", "h5", "h6"],
  uC = p1.reduce(
    (e, t) => ({
      ...e,
      [t]: O(t)({
        "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
        "&:hover svg": { visibility: "visible" },
      }),
    }),
    {}
  ),
  dC = O.a(() => ({
    float: "left",
    lineHeight: "inherit",
    paddingRight: "10px",
    marginLeft: "-24px",
    color: "inherit",
  })),
  pC = ({ as: e, id: t, children: r, ...n }) => {
    let a = u.useContext(ze),
      i = uC[e],
      l = `#${t}`;
    return o.createElement(
      i,
      { id: t, ...n },
      o.createElement(
        dC,
        {
          "aria-hidden": "true",
          "href": l,
          "tabIndex": -1,
          "target": "_self",
          "onClick": (s) => {
            c1.getElementById(t) && ml(a, l);
          },
        },
        o.createElement(Fe, { icon: "link" })
      ),
      r
    );
  },
  gl = (e) => {
    let { as: t, id: r, children: n, ...a } = e;
    if (r) return o.createElement(pC, { as: t, id: r, ...a }, n);
    let i = t,
      { as: l, ...s } = e;
    return o.createElement(i, { ...ce(s, t) });
  },
  f1 = p1.reduce(
    (e, t) => ({ ...e, [t]: (r) => o.createElement(gl, { as: t, ...r }) }),
    {}
  ),
  fC = (e) => {
    var t;
    if (!e.children) return null;
    if (typeof e.children != "string")
      throw new Error(Le`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
    return o.createElement(Bd, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: {
          code: u1,
          a: d1,
          ...f1,
          ...((t = e == null ? void 0 : e.options) == null
            ? void 0
            : t.overrides),
        },
        ...(e == null ? void 0 : e.options),
      },
    });
  },
  mC = ((e) => (
    (e.INFO = "info"),
    (e.NOTES = "notes"),
    (e.DOCGEN = "docgen"),
    (e.AUTO = "auto"),
    e
  ))(mC || {}),
  Wn =
    "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo",
  gC = (e) => e && (typeof e == "string" ? e : Eo(e.markdown) || Eo(e.text)),
  hC = (e) => e && (typeof e == "string" ? e : Eo(e.text)),
  yC = (e) => null,
  vC = (e) => {
    var t, r, n, a, i, l, s, c;
    switch (e.type) {
      case "story":
        return (
          ((r =
            (t = e.story.parameters.docs) == null ? void 0 : t.description) ==
          null
            ? void 0
            : r.story) || null
        );
      case "meta": {
        let { parameters: d, component: p } = e.preparedMeta;
        return (
          ((a = (n = d.docs) == null ? void 0 : n.description) == null
            ? void 0
            : a.component) ||
          ((l =
            (i = d.docs) == null ? void 0 : i.extractComponentDescription) ==
          null
            ? void 0
            : l.call(i, p, { component: p, parameters: d })) ||
          null
        );
      }
      case "component": {
        let {
          component: d,
          projectAnnotations: { parameters: p },
        } = e;
        return (
          ((c =
            (s = p.docs) == null ? void 0 : s.extractComponentDescription) ==
          null
            ? void 0
            : c.call(s, d, { component: d, parameters: p })) || null
        );
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`
        );
    }
  },
  bC = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
    let { component: a, parameters: i } = n();
    if (r || t) return r || t;
    let { notes: l, info: s, docs: c } = i;
    (l || s) &&
      xe(
        `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${Wn}`
      );
    let { extractComponentDescription: d = yC, description: p } = c || {},
      h = p == null ? void 0 : p.component;
    if (h) return h;
    switch (e) {
      case "info":
        return hC(s);
      case "notes":
        return gC(l);
      case "docgen":
      case "auto":
      default:
        return d(a, { component: a, ...i });
    }
  },
  Qo = (e) => {
    let { of: t, type: r, markdown: n, children: a } = e;
    if ("of" in e && t === void 0)
      throw new Error(
        "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
      );
    let i = u.useContext(ze),
      l = Fa(t || "meta"),
      s;
    return (
      r || n || a ? (s = bC(e, i)) : (s = vC(l)),
      r && xe(`Manually specifying description type is deprecated. See ${Wn}`),
      n &&
        xe(
          `The 'markdown' prop on the Description block is deprecated. See ${Wn}`
        ),
      a &&
        xe(
          `The 'children' prop on the Description block is deprecated. See ${Wn}`
        ),
      s ? o.createElement(fC, null, s) : null
    );
  },
  EC = O.div(({ theme: e }) => ({
    "width": "10rem",
    "@media (max-width: 768px)": { display: "none" },
  })),
  xC = O.div(({ theme: e }) => ({
    "position": "fixed",
    "top": 0,
    "width": "10rem",
    "paddingTop": "4rem",
    "fontFamily": e.typography.fonts.base,
    "fontSize": e.typography.size.s2,
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
    "WebkitOverflowScrolling": "touch",
    "& *": { boxSizing: "border-box" },
    "& > .toc-wrapper > .toc-list": {
      "paddingLeft": 0,
      "borderLeft": `solid 2px ${e.color.mediumlight}`,
      ".toc-list": {
        "paddingLeft": 0,
        "borderLeft": `solid 2px ${e.color.mediumlight}`,
        ".toc-list": {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
        },
      },
    },
    "& .toc-list-item": {
      position: "relative",
      listStyleType: "none",
      marginLeft: 20,
      paddingTop: 3,
      paddingBottom: 3,
    },
    "& .toc-list-item::before": {
      content: '""',
      position: "absolute",
      height: "100%",
      top: 0,
      left: 0,
      transform: "translateX(calc(-2px - 20px))",
      borderLeft: `solid 2px ${e.color.mediumdark}`,
      opacity: 0,
      transition: "opacity 0.2s",
    },
    "& .toc-list-item.is-active-li::before": { opacity: 1 },
    "& .toc-list-item > a": {
      color: e.color.defaultText,
      textDecoration: "none",
    },
    "& .toc-list-item.is-active-li > a": {
      fontWeight: 600,
      color: e.color.secondary,
      textDecoration: "none",
    },
  })),
  wC = O.p(({ theme: e }) => ({
    fontWeight: 600,
    fontSize: "0.875em",
    color: e.textColor,
    textTransform: "uppercase",
    marginBottom: 10,
  })),
  _C = ({ title: e }) =>
    e === null ? null : typeof e == "string" ? o.createElement(wC, null, e) : e,
  AC = ({
    title: e,
    disable: t,
    headingSelector: r,
    contentsSelector: n,
    ignoreSelector: a,
    unsafeTocbotOptions: i,
  }) => (
    u.useEffect(() => {
      let l = {
          tocSelector: ".toc-wrapper",
          contentSelector: n ?? ".sbdocs-content",
          headingSelector: r ?? "h3",
          ignoreSelector: a ?? ".skip-toc",
          headingsOffset: 40,
          scrollSmoothOffset: -40,
          orderedList: !1,
          onClick: () => !1,
          ...i,
        },
        s = setTimeout(() => dc.init(l), 100);
      return () => {
        clearTimeout(s), dc.destroy();
      };
    }, [t]),
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        EC,
        null,
        t
          ? null
          : o.createElement(
              xC,
              null,
              o.createElement(_C, { title: e || null }),
              o.createElement("div", { className: "toc-wrapper" })
            )
      )
    )
  ),
  { document: CC, window: SC } = Oe,
  RC = ({ context: e, theme: t, children: r }) => {
    var a, i, l, s, c;
    let n;
    try {
      n =
        (i =
          (a = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null
            ? void 0
            : a.docs) == null
          ? void 0
          : i.toc;
    } catch {
      n =
        (c =
          (s =
            (l = e == null ? void 0 : e.projectAnnotations) == null
              ? void 0
              : l.parameters) == null
            ? void 0
            : s.docs) == null
          ? void 0
          : c.toc;
    }
    return (
      u.useEffect(() => {
        let d;
        try {
          if (((d = new URL(SC.parent.location.toString())), d.hash)) {
            let p = CC.getElementById(d.hash.substring(1));
            p &&
              setTimeout(() => {
                G9(p);
              }, 200);
          }
        } catch {}
      }),
      o.createElement(
        ze.Provider,
        { value: e },
        o.createElement(
          Y9,
          { channel: e.channel },
          o.createElement(
            hu,
            { theme: Vm(t) },
            o.createElement(
              I_,
              {
                toc: n
                  ? o.createElement(AC, {
                      className: "sbdocs sbdocs-toc--custom",
                      ...n,
                    })
                  : null,
              },
              r
            )
          )
        )
      )
    );
  },
  TC = /\s*\/\s*/,
  OC = (e) => {
    let t = e.trim().split(TC);
    return (t && t[t.length - 1]) || e;
  },
  kC = ({ children: e }) => {
    let t = u.useContext(ze),
      r = e || OC(t.storyById().title);
    return r
      ? o.createElement(k_, { className: "sbdocs-title sb-unstyled" }, r)
      : null;
  },
  DC = ({ children: e }) => {
    let t = u.useContext(ze),
      { parameters: r } = t.storyById(),
      n = e || (r == null ? void 0 : r.componentSubtitle);
    return n
      ? o.createElement(D_, { className: "sbdocs-subtitle sb-unstyled" }, n)
      : null;
  },
  LC = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != "string") return o.createElement(Ni, null, e);
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return o.createElement(gl, { as: "h3", id: r }, e);
  },
  m1 = ({
    of: e,
    expanded: t = !0,
    withToolbar: r = !1,
    __forceInitialArgs: n = !1,
    __primary: a = !1,
  }) => {
    var s, c;
    let { story: i } = Fa(e || "story", ["story"]),
      l =
        ((c = (s = i.parameters.docs) == null ? void 0 : s.canvas) == null
          ? void 0
          : c.withToolbar) ?? r;
    return o.createElement(
      W9,
      { storyId: i.id },
      t &&
        o.createElement(
          o.Fragment,
          null,
          o.createElement(LC, null, i.name),
          o.createElement(Qo, { of: e })
        ),
      o.createElement(aC, {
        of: e,
        withToolbar: l,
        story: { __forceInitialArgs: n, __primary: a },
        source: { __forceInitialArgs: n },
      })
    );
  },
  $C = ({ name: e }) => {
    let t = u.useContext(ze);
    e &&
      xe(Le`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
    let r = e && t.storyIdByName(e),
      n = t.storyById(r);
    return n
      ? o.createElement(m1, {
          of: n.moduleExport,
          expanded: !1,
          __primary: !0,
          withToolbar: !0,
        })
      : null;
  },
  IC = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e != "string") return o.createElement(Bi, null, e);
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return o.createElement(gl, { as: "h2", id: n, ...r }, e);
  },
  FC = O(IC)(({ theme: e }) => ({
    "fontSize": `${e.typography.size.s2 - 1}px`,
    "fontWeight": e.typography.weight.bold,
    "lineHeight": "16px",
    "letterSpacing": "0.35em",
    "textTransform": "uppercase",
    "color": e.textMutedColor,
    "border": 0,
    "marginBottom": "12px",
    "&:first-of-type": { marginTop: "56px" },
  })),
  g1 = ({ title: e, includePrimary: t = !0 }) => {
    let { componentStories: r } = u.useContext(ze),
      n = r().filter((a) => {
        var i, l;
        return !(
          (l = (i = a.parameters) == null ? void 0 : i.docs) != null &&
          l.disable
        );
      });
    return (
      t || (n = n.slice(1)),
      !n || n.length === 0
        ? null
        : o.createElement(
            o.Fragment,
            null,
            o.createElement(FC, null, e),
            n.map(
              (a) =>
                a &&
                o.createElement(m1, {
                  key: a.id,
                  of: a.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0,
                })
            )
          )
    );
  };
g1.defaultProps = { title: "Stories" };
var PC = () => {
  let e = Fa("meta", ["meta"]),
    { stories: t } = e.csfFile,
    r = Object.keys(t).length === 1;
  return o.createElement(
    o.Fragment,
    null,
    o.createElement(kC, null),
    o.createElement(DC, null),
    o.createElement(Qo, { of: "meta" }),
    r ? o.createElement(Qo, { of: "story" }) : null,
    o.createElement($C, null),
    o.createElement(sC, null),
    r ? null : o.createElement(g1, null)
  );
};
function MC({ context: e, docsParameter: t }) {
  let r = t.container || RC,
    n = t.page || PC;
  return o.createElement(
    r,
    { context: e, theme: t.theme },
    o.createElement(n, null)
  );
}
var h1 = { code: u1, a: d1, ...f1 },
  BC = class extends u.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(e) {
      let { showException: t } = this.props;
      t(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: t } = this.props;
      return e ? null : t;
    }
  },
  NC = class {
    constructor() {
      (this.render = async (e, t, r) => {
        let n = { ...h1, ...(t == null ? void 0 : t.components) },
          a = MC;
        return new Promise((i, l) => {
          R(
            () => import("./index-56502c4c.js"),
            [
              "./index-56502c4c.js",
              "./index-61bf1805.js",
              "./_commonjsHelpers-de833af9.js",
            ],
            import.meta.url
          )
            .then(({ MDXProvider: s }) =>
              V1(
                o.createElement(
                  BC,
                  { showException: l, key: Math.random() },
                  o.createElement(
                    s,
                    { components: n },
                    o.createElement(a, { context: e, docsParameter: t })
                  )
                ),
                r
              )
            )
            .then(() => i());
        });
      }),
        (this.unmount = (e) => {
          H1(e);
        });
    }
  };
const oS = Object.freeze(
  Object.defineProperty(
    { __proto__: null, DocsRenderer: NC, defaultComponents: h1 },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  oS as D,
  tt as F,
  um as G,
  Fe as I,
  Si as S,
  Dy as T,
  Xg as W,
  je as _,
  Ku as a,
  q as b,
  Pu as c,
  _y as d,
  nt as g,
  tr as m,
  O as n,
  KC as s,
};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-90e35a92.js.map
