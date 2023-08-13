import { r as Ti, R as Jc } from "./index-61bf1805.js";
import { g as Pr, c as Tn } from "./_commonjsHelpers-de833af9.js";
var ps = { exports: {} },
  Ne = {},
  ds = { exports: {} },
  Ds = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, $) {
    var I = k.length;
    k.push($);
    e: for (; 0 < I; ) {
      var U = (I - 1) >>> 1,
        Z = k[U];
      if (0 < r(Z, $)) (k[U] = $), (k[I] = Z), (I = U);
      else break e;
    }
  }
  function u(k) {
    return k.length === 0 ? null : k[0];
  }
  function n(k) {
    if (k.length === 0) return null;
    var $ = k[0],
      I = k.pop();
    if (I !== $) {
      k[0] = I;
      e: for (var U = 0, Z = k.length, ft = Z >>> 1; U < ft; ) {
        var H = 2 * (U + 1) - 1,
          te = k[H],
          d = H + 1,
          h = k[d];
        if (0 > r(te, I))
          d < Z && 0 > r(h, te)
            ? ((k[U] = h), (k[d] = I), (U = d))
            : ((k[U] = te), (k[H] = I), (U = H));
        else if (d < Z && 0 > r(h, I)) (k[U] = h), (k[d] = I), (U = d);
        else break e;
      }
    }
    return $;
  }
  function r(k, $) {
    var I = k.sortIndex - $.sortIndex;
    return I !== 0 ? I : k.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var o = [],
    s = [],
    E = 1,
    v = null,
    c = 3,
    F = !1,
    g = !1,
    m = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function D(k) {
    for (var $ = u(s); $ !== null; ) {
      if ($.callback === null) n(s);
      else if ($.startTime <= k)
        n(s), ($.sortIndex = $.expirationTime), t(o, $);
      else break;
      $ = u(s);
    }
  }
  function S(k) {
    if (((m = !1), D(k), !g))
      if (u(o) !== null) (g = !0), V(w);
      else {
        var $ = u(s);
        $ !== null && Lt(S, $.startTime - k);
      }
  }
  function w(k, $) {
    (g = !1), m && ((m = !1), p(B), (B = -1)), (F = !0);
    var I = c;
    try {
      for (
        D($), v = u(o);
        v !== null && (!(v.expirationTime > $) || (k && !O()));

      ) {
        var U = v.callback;
        if (typeof U == "function") {
          (v.callback = null), (c = v.priorityLevel);
          var Z = U(v.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof Z == "function" ? (v.callback = Z) : v === u(o) && n(o),
            D($);
        } else n(o);
        v = u(o);
      }
      if (v !== null) var ft = !0;
      else {
        var H = u(s);
        H !== null && Lt(S, H.startTime - $), (ft = !1);
      }
      return ft;
    } finally {
      (v = null), (c = I), (F = !1);
    }
  }
  var A = !1,
    T = null,
    B = -1,
    z = 5,
    M = -1;
  function O() {
    return !(e.unstable_now() - M < z);
  }
  function ze() {
    if (T !== null) {
      var k = e.unstable_now();
      M = k;
      var $ = !0;
      try {
        $ = T(!0, k);
      } finally {
        $ ? Ge() : ((A = !1), (T = null));
      }
    } else A = !1;
  }
  var Ge;
  if (typeof f == "function")
    Ge = function () {
      f(ze);
    };
  else if (typeof MessageChannel < "u") {
    var Ye = new MessageChannel(),
      Zt = Ye.port2;
    (Ye.port1.onmessage = ze),
      (Ge = function () {
        Zt.postMessage(null);
      });
  } else
    Ge = function () {
      _(ze, 0);
    };
  function V(k) {
    (T = k), A || ((A = !0), Ge());
  }
  function Lt(k, $) {
    B = _(function () {
      k(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || F || ((g = !0), V(w));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return u(o);
    }),
    (e.unstable_next = function (k) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = c;
      }
      var I = c;
      c = $;
      try {
        return k();
      } finally {
        c = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, $) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var I = c;
      c = k;
      try {
        return $();
      } finally {
        c = I;
      }
    }),
    (e.unstable_scheduleCallback = function (k, $, I) {
      var U = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? U + I : U))
          : (I = U),
        k)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = I + Z),
        (k = {
          id: E++,
          callback: $,
          priorityLevel: k,
          startTime: I,
          expirationTime: Z,
          sortIndex: -1,
        }),
        I > U
          ? ((k.sortIndex = I),
            t(s, k),
            u(o) === null &&
              k === u(s) &&
              (m ? (p(B), (B = -1)) : (m = !0), Lt(S, I - U)))
          : ((k.sortIndex = Z), t(o, k), g || F || ((g = !0), V(w))),
        k
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (k) {
      var $ = c;
      return function () {
        var I = c;
        c = $;
        try {
          return k.apply(this, arguments);
        } finally {
          c = I;
        }
      };
    });
})(Ds);
ds.exports = Ds;
var Zc = ds.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hs = Ti,
  ke = Zc;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, u = 1;
    u < arguments.length;
    u++
  )
    t += "&args[]=" + encodeURIComponent(arguments[u]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var As = new Set(),
  ln = {};
function Yt(e, t) {
  Cu(e, t), Cu(e + "Capture", t);
}
function Cu(e, t) {
  for (ln[e] = t, e = 0; e < t.length; e++) As.add(t[e]);
}
var it = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ki = Object.prototype.hasOwnProperty,
  qc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ta = {},
  ka = {};
function bc(e) {
  return ki.call(ka, e)
    ? !0
    : ki.call(Ta, e)
    ? !1
    : qc.test(e)
    ? (ka[e] = !0)
    : ((Ta[e] = !0), !1);
}
function ef(e, t, u, n) {
  if (u !== null && u.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : u !== null
        ? !u.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tf(e, t, u, n) {
  if (t === null || typeof t > "u" || ef(e, t, u, n)) return !0;
  if (n) return !1;
  if (u !== null)
    switch (u.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, u, n, r, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = r),
    (this.mustUseProperty = u),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _l = /[\-:]([a-z])/g;
function Tl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_l, Tl);
    De[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_l, Tl);
    De[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_l, Tl);
  De[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kl(e, t, u, n) {
  var r = De.hasOwnProperty(t) ? De[t] : null;
  (r !== null
    ? r.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tf(t, u, r, n) && (u = null),
    n || r === null
      ? bc(t) && (u === null ? e.removeAttribute(t) : e.setAttribute(t, "" + u))
      : r.mustUseProperty
      ? (e[r.propertyName] = u === null ? (r.type === 3 ? !1 : "") : u)
      : ((t = r.attributeName),
        (n = r.attributeNamespace),
        u === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (u = r === 3 || (r === 4 && u === !0) ? "" : "" + u),
            n ? e.setAttributeNS(n, t, u) : e.setAttribute(t, u))));
}
var st = hs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kn = Symbol.for("react.element"),
  bt = Symbol.for("react.portal"),
  eu = Symbol.for("react.fragment"),
  Nl = Symbol.for("react.strict_mode"),
  Ni = Symbol.for("react.profiler"),
  vs = Symbol.for("react.provider"),
  ms = Symbol.for("react.context"),
  Pl = Symbol.for("react.forward_ref"),
  Pi = Symbol.for("react.suspense"),
  Oi = Symbol.for("react.suspense_list"),
  Ol = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  Cs = Symbol.for("react.offscreen"),
  Na = Symbol.iterator;
function Ou(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Na && e[Na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  ti;
function Hu(e) {
  if (ti === void 0)
    try {
      throw Error();
    } catch (u) {
      var t = u.stack.trim().match(/\n( *(at )?)/);
      ti = (t && t[1]) || "";
    }
  return (
    `
` +
    ti +
    e
  );
}
var ui = !1;
function ni(e, t) {
  if (!e || ui) return "";
  ui = !0;
  var u = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          n = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (
        var r = s.stack.split(`
`),
          i = n.stack.split(`
`),
          l = r.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && r[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (r[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || r[l] !== i[a])) {
                var o =
                  `
` + r[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (ui = !1), (Error.prepareStackTrace = u);
  }
  return (e = e ? e.displayName || e.name : "") ? Hu(e) : "";
}
function uf(e) {
  switch (e.tag) {
    case 5:
      return Hu(e.type);
    case 16:
      return Hu("Lazy");
    case 13:
      return Hu("Suspense");
    case 19:
      return Hu("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ni(e.type, !1)), e;
    case 11:
      return (e = ni(e.type.render, !1)), e;
    case 1:
      return (e = ni(e.type, !0)), e;
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case eu:
      return "Fragment";
    case bt:
      return "Portal";
    case Ni:
      return "Profiler";
    case Nl:
      return "StrictMode";
    case Pi:
      return "Suspense";
    case Oi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ms:
        return (e.displayName || "Context") + ".Consumer";
      case vs:
        return (e._context.displayName || "Context") + ".Provider";
      case Pl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ol:
        return (
          (t = e.displayName || null), t !== null ? t : Li(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return Li(e(t));
        } catch {}
    }
  return null;
}
function nf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Li(t);
    case 8:
      return t === Nl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Es(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rf(e) {
  var t = Es(e) ? "checked" : "value",
    u = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof u < "u" &&
    typeof u.get == "function" &&
    typeof u.set == "function"
  ) {
    var r = u.get,
      i = u.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (l) {
          (n = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: u.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Nn(e) {
  e._valueTracker || (e._valueTracker = rf(e));
}
function ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var u = t.getValue(),
    n = "";
  return (
    e && (n = Es(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== u ? (t.setValue(e), !0) : !1
  );
}
function nr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $i(e, t) {
  var u = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: u ?? e._wrapperState.initialChecked,
  });
}
function Pa(e, t) {
  var u = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (u = _t(t.value != null ? t.value : u)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: u,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gs(e, t) {
  (t = t.checked), t != null && kl(e, "checked", t, !1);
}
function Ri(e, t) {
  gs(e, t);
  var u = _t(t.value),
    n = t.type;
  if (u != null)
    n === "number"
      ? ((u === 0 && e.value === "") || e.value != u) && (e.value = "" + u)
      : e.value !== "" + u && (e.value = "" + u);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ii(e, t.type, u)
    : t.hasOwnProperty("defaultValue") && Ii(e, t.type, _t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Oa(e, t, u) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      u || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (u = e.name),
    u !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    u !== "" && (e.name = u);
}
function Ii(e, t, u) {
  (t !== "number" || nr(e.ownerDocument) !== e) &&
    (u == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + u && (e.defaultValue = "" + u));
}
var Wu = Array.isArray;
function du(e, t, u, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < u.length; r++) t["$" + u[r]] = !0;
    for (u = 0; u < e.length; u++)
      (r = t.hasOwnProperty("$" + e[u].value)),
        e[u].selected !== r && (e[u].selected = r),
        r && n && (e[u].defaultSelected = !0);
  } else {
    for (u = "" + _t(u), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === u) {
        (e[r].selected = !0), n && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function La(e, t) {
  var u = t.value;
  if (u == null) {
    if (((u = t.children), (t = t.defaultValue), u != null)) {
      if (t != null) throw Error(x(92));
      if (Wu(u)) {
        if (1 < u.length) throw Error(x(93));
        u = u[0];
      }
      t = u;
    }
    t == null && (t = ""), (u = t);
  }
  e._wrapperState = { initialValue: _t(u) };
}
function Fs(e, t) {
  var u = _t(t.value),
    n = _t(t.defaultValue);
  u != null &&
    ((u = "" + u),
    u !== e.value && (e.value = u),
    t.defaultValue == null && e.defaultValue !== u && (e.defaultValue = u)),
    n != null && (e.defaultValue = "" + n);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Pn,
  Ss = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, u, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, u, n, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Pn = Pn || document.createElement("div"),
          Pn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pn.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function an(e, t) {
  if (t) {
    var u = e.firstChild;
    if (u && u === e.lastChild && u.nodeType === 3) {
      u.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yu = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  lf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yu).forEach(function (e) {
  lf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yu[t] = Yu[e]);
  });
});
function ws(e, t, u) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : u || typeof t != "number" || t === 0 || (Yu.hasOwnProperty(e) && Yu[e])
    ? ("" + t).trim()
    : t + "px";
}
function xs(e, t) {
  e = e.style;
  for (var u in t)
    if (t.hasOwnProperty(u)) {
      var n = u.indexOf("--") === 0,
        r = ws(u, t[u], n);
      u === "float" && (u = "cssFloat"), n ? e.setProperty(u, r) : (e[u] = r);
    }
}
var af = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ji(e, t) {
  if (t) {
    if (af[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Ui(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Hi = null;
function Ll(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wi = null,
  Du = null,
  hu = null;
function Ra(e) {
  if ((e = Sn(e))) {
    if (typeof Wi != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Ir(t)), Wi(e.stateNode, e.type, t));
  }
}
function _s(e) {
  Du ? (hu ? hu.push(e) : (hu = [e])) : (Du = e);
}
function Ts() {
  if (Du) {
    var e = Du,
      t = hu;
    if (((hu = Du = null), Ra(e), t)) for (e = 0; e < t.length; e++) Ra(t[e]);
  }
}
function ks(e, t) {
  return e(t);
}
function Ns() {}
var ri = !1;
function Ps(e, t, u) {
  if (ri) return e(t, u);
  ri = !0;
  try {
    return ks(e, t, u);
  } finally {
    (ri = !1), (Du !== null || hu !== null) && (Ns(), Ts());
  }
}
function on(e, t) {
  var u = e.stateNode;
  if (u === null) return null;
  var n = Ir(u);
  if (n === null) return null;
  u = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (u && typeof u != "function") throw Error(x(231, t, typeof u));
  return u;
}
var Vi = !1;
if (it)
  try {
    var Lu = {};
    Object.defineProperty(Lu, "passive", {
      get: function () {
        Vi = !0;
      },
    }),
      window.addEventListener("test", Lu, Lu),
      window.removeEventListener("test", Lu, Lu);
  } catch {
    Vi = !1;
  }
function of(e, t, u, n, r, i, l, a, o) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(u, s);
  } catch (E) {
    this.onError(E);
  }
}
var Xu = !1,
  rr = null,
  ir = !1,
  Ki = null,
  sf = {
    onError: function (e) {
      (Xu = !0), (rr = e);
    },
  };
function cf(e, t, u, n, r, i, l, a, o) {
  (Xu = !1), (rr = null), of.apply(sf, arguments);
}
function ff(e, t, u, n, r, i, l, a, o) {
  if ((cf.apply(this, arguments), Xu)) {
    if (Xu) {
      var s = rr;
      (Xu = !1), (rr = null);
    } else throw Error(x(198));
    ir || ((ir = !0), (Ki = s));
  }
}
function Xt(e) {
  var t = e,
    u = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (u = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? u : null;
}
function Os(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ia(e) {
  if (Xt(e) !== e) throw Error(x(188));
}
function pf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var u = e, n = t; ; ) {
    var r = u.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((n = r.return), n !== null)) {
        u = n;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === u) return Ia(r), e;
        if (i === n) return Ia(r), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (u.return !== n.return) (u = r), (n = i);
    else {
      for (var l = !1, a = r.child; a; ) {
        if (a === u) {
          (l = !0), (u = r), (n = i);
          break;
        }
        if (a === n) {
          (l = !0), (n = r), (u = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === u) {
            (l = !0), (u = i), (n = r);
            break;
          }
          if (a === n) {
            (l = !0), (n = i), (u = r);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (u.alternate !== n) throw Error(x(190));
  }
  if (u.tag !== 3) throw Error(x(188));
  return u.stateNode.current === u ? e : t;
}
function Ls(e) {
  return (e = pf(e)), e !== null ? $s(e) : null;
}
function $s(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $s(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rs = ke.unstable_scheduleCallback,
  Ma = ke.unstable_cancelCallback,
  df = ke.unstable_shouldYield,
  Df = ke.unstable_requestPaint,
  ne = ke.unstable_now,
  hf = ke.unstable_getCurrentPriorityLevel,
  $l = ke.unstable_ImmediatePriority,
  Is = ke.unstable_UserBlockingPriority,
  lr = ke.unstable_NormalPriority,
  Af = ke.unstable_LowPriority,
  Ms = ke.unstable_IdlePriority,
  Or = null,
  qe = null;
function vf(e) {
  if (qe && typeof qe.onCommitFiberRoot == "function")
    try {
      qe.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Ef,
  mf = Math.log,
  Cf = Math.LN2;
function Ef(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mf(e) / Cf) | 0)) | 0;
}
var On = 64,
  Ln = 4194304;
function Vu(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ar(e, t) {
  var u = e.pendingLanes;
  if (u === 0) return 0;
  var n = 0,
    r = e.suspendedLanes,
    i = e.pingedLanes,
    l = u & 268435455;
  if (l !== 0) {
    var a = l & ~r;
    a !== 0 ? (n = Vu(a)) : ((i &= l), i !== 0 && (n = Vu(i)));
  } else (l = u & ~r), l !== 0 ? (n = Vu(l)) : i !== 0 && (n = Vu(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & r) &&
    ((r = n & -n), (i = t & -t), r >= i || (r === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= u & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (u = 31 - Ve(t)), (r = 1 << u), (n |= e[u]), (t &= ~r);
  return n;
}
function yf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gf(e, t) {
  for (
    var u = e.suspendedLanes,
      n = e.pingedLanes,
      r = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Ve(i),
      a = 1 << l,
      o = r[l];
    o === -1
      ? (!(a & u) || a & n) && (r[l] = yf(a, t))
      : o <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Qi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zs() {
  var e = On;
  return (On <<= 1), !(On & 4194240) && (On = 64), e;
}
function ii(e) {
  for (var t = [], u = 0; 31 > u; u++) t.push(e);
  return t;
}
function Fn(e, t, u) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = u);
}
function Ff(e, t) {
  var u = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < u; ) {
    var r = 31 - Ve(u),
      i = 1 << r;
    (t[r] = 0), (n[r] = -1), (e[r] = -1), (u &= ~i);
  }
}
function Rl(e, t) {
  var u = (e.entangledLanes |= t);
  for (e = e.entanglements; u; ) {
    var n = 31 - Ve(u),
      r = 1 << n;
    (r & t) | (e[n] & t) && (e[n] |= t), (u &= ~r);
  }
}
var W = 0;
function js(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Us,
  Il,
  Hs,
  Ws,
  Vs,
  Gi = !1,
  $n = [],
  Et = null,
  yt = null,
  gt = null,
  sn = new Map(),
  cn = new Map(),
  At = [],
  Bf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function za(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      sn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cn.delete(t.pointerId);
  }
}
function $u(e, t, u, n, r, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: u,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [r],
      }),
      t !== null && ((t = Sn(t)), t !== null && Il(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Sf(e, t, u, n, r) {
  switch (t) {
    case "focusin":
      return (Et = $u(Et, e, t, u, n, r)), !0;
    case "dragenter":
      return (yt = $u(yt, e, t, u, n, r)), !0;
    case "mouseover":
      return (gt = $u(gt, e, t, u, n, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return sn.set(i, $u(sn.get(i) || null, e, t, u, n, r)), !0;
    case "gotpointercapture":
      return (
        (i = r.pointerId), cn.set(i, $u(cn.get(i) || null, e, t, u, n, r)), !0
      );
  }
  return !1;
}
function Ks(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var u = Xt(t);
    if (u !== null) {
      if (((t = u.tag), t === 13)) {
        if (((t = Os(u)), t !== null)) {
          (e.blockedOn = t),
            Vs(e.priority, function () {
              Hs(u);
            });
          return;
        }
      } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gn(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var u = Yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (u === null) {
      u = e.nativeEvent;
      var n = new u.constructor(u.type, u);
      (Hi = n), u.target.dispatchEvent(n), (Hi = null);
    } else return (t = Sn(u)), t !== null && Il(t), (e.blockedOn = u), !1;
    t.shift();
  }
  return !0;
}
function ja(e, t, u) {
  Gn(e) && u.delete(t);
}
function wf() {
  (Gi = !1),
    Et !== null && Gn(Et) && (Et = null),
    yt !== null && Gn(yt) && (yt = null),
    gt !== null && Gn(gt) && (gt = null),
    sn.forEach(ja),
    cn.forEach(ja);
}
function Ru(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gi ||
      ((Gi = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, wf)));
}
function fn(e) {
  function t(r) {
    return Ru(r, e);
  }
  if (0 < $n.length) {
    Ru($n[0], e);
    for (var u = 1; u < $n.length; u++) {
      var n = $n[u];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Et !== null && Ru(Et, e),
      yt !== null && Ru(yt, e),
      gt !== null && Ru(gt, e),
      sn.forEach(t),
      cn.forEach(t),
      u = 0;
    u < At.length;
    u++
  )
    (n = At[u]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < At.length && ((u = At[0]), u.blockedOn === null); )
    Ks(u), u.blockedOn === null && At.shift();
}
var Au = st.ReactCurrentBatchConfig,
  or = !0;
function xf(e, t, u, n) {
  var r = W,
    i = Au.transition;
  Au.transition = null;
  try {
    (W = 1), Ml(e, t, u, n);
  } finally {
    (W = r), (Au.transition = i);
  }
}
function _f(e, t, u, n) {
  var r = W,
    i = Au.transition;
  Au.transition = null;
  try {
    (W = 4), Ml(e, t, u, n);
  } finally {
    (W = r), (Au.transition = i);
  }
}
function Ml(e, t, u, n) {
  if (or) {
    var r = Yi(e, t, u, n);
    if (r === null) hi(e, t, n, sr, u), za(e, n);
    else if (Sf(r, e, t, u, n)) n.stopPropagation();
    else if ((za(e, n), t & 4 && -1 < Bf.indexOf(e))) {
      for (; r !== null; ) {
        var i = Sn(r);
        if (
          (i !== null && Us(i),
          (i = Yi(e, t, u, n)),
          i === null && hi(e, t, n, sr, u),
          i === r)
        )
          break;
        r = i;
      }
      r !== null && n.stopPropagation();
    } else hi(e, t, n, null, u);
  }
}
var sr = null;
function Yi(e, t, u, n) {
  if (((sr = null), (e = Ll(n)), (e = Mt(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((u = t.tag), u === 13)) {
      if (((e = Os(t)), e !== null)) return e;
      e = null;
    } else if (u === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (sr = e), null;
}
function Qs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hf()) {
        case $l:
          return 1;
        case Is:
          return 4;
        case lr:
        case Af:
          return 16;
        case Ms:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null,
  zl = null,
  Yn = null;
function Gs() {
  if (Yn) return Yn;
  var e,
    t = zl,
    u = t.length,
    n,
    r = "value" in mt ? mt.value : mt.textContent,
    i = r.length;
  for (e = 0; e < u && t[e] === r[e]; e++);
  var l = u - e;
  for (n = 1; n <= l && t[u - n] === r[i - n]; n++);
  return (Yn = r.slice(e, 1 < n ? 1 - n : void 0));
}
function Xn(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rn() {
  return !0;
}
function Ua() {
  return !1;
}
function Pe(e) {
  function t(u, n, r, i, l) {
    (this._reactName = u),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((u = e[a]), (this[a] = u ? u(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Rn
        : Ua),
      (this.isPropagationStopped = Ua),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u &&
          (u.preventDefault
            ? u.preventDefault()
            : typeof u.returnValue != "unknown" && (u.returnValue = !1),
          (this.isDefaultPrevented = Rn));
      },
      stopPropagation: function () {
        var u = this.nativeEvent;
        u &&
          (u.stopPropagation
            ? u.stopPropagation()
            : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
          (this.isPropagationStopped = Rn));
      },
      persist: function () {},
      isPersistent: Rn,
    }),
    t
  );
}
var wu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jl = Pe(wu),
  Bn = ee({}, wu, { view: 0, detail: 0 }),
  Tf = Pe(Bn),
  li,
  ai,
  Iu,
  Lr = ee({}, Bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ul,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Iu &&
            (Iu && e.type === "mousemove"
              ? ((li = e.screenX - Iu.screenX), (ai = e.screenY - Iu.screenY))
              : (ai = li = 0),
            (Iu = e)),
          li);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  Ha = Pe(Lr),
  kf = ee({}, Lr, { dataTransfer: 0 }),
  Nf = Pe(kf),
  Pf = ee({}, Bn, { relatedTarget: 0 }),
  oi = Pe(Pf),
  Of = ee({}, wu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = Pe(Of),
  $f = ee({}, wu, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Rf = Pe($f),
  If = ee({}, wu, { data: 0 }),
  Wa = Pe(If),
  Mf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Uf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jf[e]) ? !!t[e] : !1;
}
function Ul() {
  return Uf;
}
var Hf = ee({}, Bn, {
    key: function (e) {
      if (e.key) {
        var t = Mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xn(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ul,
    charCode: function (e) {
      return e.type === "keypress" ? Xn(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xn(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Wf = Pe(Hf),
  Vf = ee({}, Lr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Va = Pe(Vf),
  Kf = ee({}, Bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ul,
  }),
  Qf = Pe(Kf),
  Gf = ee({}, wu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yf = Pe(Gf),
  Xf = ee({}, Lr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jf = Pe(Xf),
  Zf = [9, 13, 27, 32],
  Hl = it && "CompositionEvent" in window,
  Ju = null;
it && "documentMode" in document && (Ju = document.documentMode);
var qf = it && "TextEvent" in window && !Ju,
  Ys = it && (!Hl || (Ju && 8 < Ju && 11 >= Ju)),
  Ka = String.fromCharCode(32),
  Qa = !1;
function Xs(e, t) {
  switch (e) {
    case "keyup":
      return Zf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Js(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var tu = !1;
function bf(e, t) {
  switch (e) {
    case "compositionend":
      return Js(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qa = !0), Ka);
    case "textInput":
      return (e = t.data), e === Ka && Qa ? null : e;
    default:
      return null;
  }
}
function ep(e, t) {
  if (tu)
    return e === "compositionend" || (!Hl && Xs(e, t))
      ? ((e = Gs()), (Yn = zl = mt = null), (tu = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tp = {
  "color": !0,
  "date": !0,
  "datetime": !0,
  "datetime-local": !0,
  "email": !0,
  "month": !0,
  "number": !0,
  "password": !0,
  "range": !0,
  "search": !0,
  "tel": !0,
  "text": !0,
  "time": !0,
  "url": !0,
  "week": !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tp[e.type] : t === "textarea";
}
function Zs(e, t, u, n) {
  _s(n),
    (t = cr(t, "onChange")),
    0 < t.length &&
      ((u = new jl("onChange", "change", null, u, n)),
      e.push({ event: u, listeners: t }));
}
var Zu = null,
  pn = null;
function up(e) {
  o0(e, 0);
}
function $r(e) {
  var t = ru(e);
  if (ys(t)) return e;
}
function np(e, t) {
  if (e === "change") return t;
}
var qs = !1;
if (it) {
  var si;
  if (it) {
    var ci = "oninput" in document;
    if (!ci) {
      var Ya = document.createElement("div");
      Ya.setAttribute("oninput", "return;"),
        (ci = typeof Ya.oninput == "function");
    }
    si = ci;
  } else si = !1;
  qs = si && (!document.documentMode || 9 < document.documentMode);
}
function Xa() {
  Zu && (Zu.detachEvent("onpropertychange", bs), (pn = Zu = null));
}
function bs(e) {
  if (e.propertyName === "value" && $r(pn)) {
    var t = [];
    Zs(t, pn, e, Ll(e)), Ps(up, t);
  }
}
function rp(e, t, u) {
  e === "focusin"
    ? (Xa(), (Zu = t), (pn = u), Zu.attachEvent("onpropertychange", bs))
    : e === "focusout" && Xa();
}
function ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $r(pn);
}
function lp(e, t) {
  if (e === "click") return $r(t);
}
function ap(e, t) {
  if (e === "input" || e === "change") return $r(t);
}
function op(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : op;
function dn(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var u = Object.keys(e),
    n = Object.keys(t);
  if (u.length !== n.length) return !1;
  for (n = 0; n < u.length; n++) {
    var r = u[n];
    if (!ki.call(t, r) || !Qe(e[r], t[r])) return !1;
  }
  return !0;
}
function Ja(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Za(e, t) {
  var u = Ja(e);
  e = 0;
  for (var n; u; ) {
    if (u.nodeType === 3) {
      if (((n = e + u.textContent.length), e <= t && n >= t))
        return { node: u, offset: t - e };
      e = n;
    }
    e: {
      for (; u; ) {
        if (u.nextSibling) {
          u = u.nextSibling;
          break e;
        }
        u = u.parentNode;
      }
      u = void 0;
    }
    u = Ja(u);
  }
}
function e0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? e0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function t0() {
  for (var e = window, t = nr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var u = typeof t.contentWindow.location.href == "string";
    } catch {
      u = !1;
    }
    if (u) e = t.contentWindow;
    else break;
    t = nr(e.document);
  }
  return t;
}
function Wl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sp(e) {
  var t = t0(),
    u = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== u &&
    u &&
    u.ownerDocument &&
    e0(u.ownerDocument.documentElement, u)
  ) {
    if (n !== null && Wl(u)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in u)
      )
        (u.selectionStart = t), (u.selectionEnd = Math.min(e, u.value.length));
      else if (
        ((e = ((t = u.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = u.textContent.length,
          i = Math.min(n.start, r);
        (n = n.end === void 0 ? i : Math.min(n.end, r)),
          !e.extend && i > n && ((r = n), (n = i), (i = r)),
          (r = Za(u, i));
        var l = Za(u, n);
        r &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = u; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof u.focus == "function" && u.focus(), u = 0; u < t.length; u++)
      (e = t[u]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var cp = it && "documentMode" in document && 11 >= document.documentMode,
  uu = null,
  Xi = null,
  qu = null,
  Ji = !1;
function qa(e, t, u) {
  var n = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
  Ji ||
    uu == null ||
    uu !== nr(n) ||
    ((n = uu),
    "selectionStart" in n && Wl(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (qu && dn(qu, n)) ||
      ((qu = n),
      (n = cr(Xi, "onSelect")),
      0 < n.length &&
        ((t = new jl("onSelect", "select", null, t, u)),
        e.push({ event: t, listeners: n }),
        (t.target = uu))));
}
function In(e, t) {
  var u = {};
  return (
    (u[e.toLowerCase()] = t.toLowerCase()),
    (u["Webkit" + e] = "webkit" + t),
    (u["Moz" + e] = "moz" + t),
    u
  );
}
var nu = {
    animationend: In("Animation", "AnimationEnd"),
    animationiteration: In("Animation", "AnimationIteration"),
    animationstart: In("Animation", "AnimationStart"),
    transitionend: In("Transition", "TransitionEnd"),
  },
  fi = {},
  u0 = {};
it &&
  ((u0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nu.animationend.animation,
    delete nu.animationiteration.animation,
    delete nu.animationstart.animation),
  "TransitionEvent" in window || delete nu.transitionend.transition);
function Rr(e) {
  if (fi[e]) return fi[e];
  if (!nu[e]) return e;
  var t = nu[e],
    u;
  for (u in t) if (t.hasOwnProperty(u) && u in u0) return (fi[e] = t[u]);
  return e;
}
var n0 = Rr("animationend"),
  r0 = Rr("animationiteration"),
  i0 = Rr("animationstart"),
  l0 = Rr("transitionend"),
  a0 = new Map(),
  ba =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  a0.set(e, t), Yt(t, [e]);
}
for (var pi = 0; pi < ba.length; pi++) {
  var di = ba[pi],
    fp = di.toLowerCase(),
    pp = di[0].toUpperCase() + di.slice(1);
  kt(fp, "on" + pp);
}
kt(n0, "onAnimationEnd");
kt(r0, "onAnimationIteration");
kt(i0, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(l0, "onTransitionEnd");
Cu("onMouseEnter", ["mouseout", "mouseover"]);
Cu("onMouseLeave", ["mouseout", "mouseover"]);
Cu("onPointerEnter", ["pointerout", "pointerover"]);
Cu("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ku =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ku));
function eo(e, t, u) {
  var n = e.type || "unknown-event";
  (e.currentTarget = u), ff(n, t, void 0, e), (e.currentTarget = null);
}
function o0(e, t) {
  t = (t & 4) !== 0;
  for (var u = 0; u < e.length; u++) {
    var n = e[u],
      r = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var a = n[l],
            o = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), o !== i && r.isPropagationStopped())) break e;
          eo(r, a, s), (i = o);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((a = n[l]),
            (o = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            o !== i && r.isPropagationStopped())
          )
            break e;
          eo(r, a, s), (i = o);
        }
    }
  }
  if (ir) throw ((e = Ki), (ir = !1), (Ki = null), e);
}
function G(e, t) {
  var u = t[tl];
  u === void 0 && (u = t[tl] = new Set());
  var n = e + "__bubble";
  u.has(n) || (s0(t, e, 2, !1), u.add(n));
}
function Di(e, t, u) {
  var n = 0;
  t && (n |= 4), s0(u, e, n, t);
}
var Mn = "_reactListening" + Math.random().toString(36).slice(2);
function Dn(e) {
  if (!e[Mn]) {
    (e[Mn] = !0),
      As.forEach(function (u) {
        u !== "selectionchange" && (dp.has(u) || Di(u, !1, e), Di(u, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mn] || ((t[Mn] = !0), Di("selectionchange", !1, t));
  }
}
function s0(e, t, u, n) {
  switch (Qs(t)) {
    case 1:
      var r = xf;
      break;
    case 4:
      r = _f;
      break;
    default:
      r = Ml;
  }
  (u = r.bind(null, t, u, e)),
    (r = void 0),
    !Vi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    n
      ? r !== void 0
        ? e.addEventListener(t, u, { capture: !0, passive: r })
        : e.addEventListener(t, u, !0)
      : r !== void 0
      ? e.addEventListener(t, u, { passive: r })
      : e.addEventListener(t, u, !1);
}
function hi(e, t, u, n, r) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var a = n.stateNode.containerInfo;
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var o = l.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = l.stateNode.containerInfo),
              o === r || (o.nodeType === 8 && o.parentNode === r))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Mt(a)), l === null)) return;
          if (((o = l.tag), o === 5 || o === 6)) {
            n = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Ps(function () {
    var s = i,
      E = Ll(u),
      v = [];
    e: {
      var c = a0.get(e);
      if (c !== void 0) {
        var F = jl,
          g = e;
        switch (e) {
          case "keypress":
            if (Xn(u) === 0) break e;
          case "keydown":
          case "keyup":
            F = Wf;
            break;
          case "focusin":
            (g = "focus"), (F = oi);
            break;
          case "focusout":
            (g = "blur"), (F = oi);
            break;
          case "beforeblur":
          case "afterblur":
            F = oi;
            break;
          case "click":
            if (u.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            F = Ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            F = Nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            F = Qf;
            break;
          case n0:
          case r0:
          case i0:
            F = Lf;
            break;
          case l0:
            F = Yf;
            break;
          case "scroll":
            F = Tf;
            break;
          case "wheel":
            F = Jf;
            break;
          case "copy":
          case "cut":
          case "paste":
            F = Rf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            F = Va;
        }
        var m = (t & 4) !== 0,
          _ = !m && e === "scroll",
          p = m ? (c !== null ? c + "Capture" : null) : c;
        m = [];
        for (var f = s, D; f !== null; ) {
          D = f;
          var S = D.stateNode;
          if (
            (D.tag === 5 &&
              S !== null &&
              ((D = S),
              p !== null && ((S = on(f, p)), S != null && m.push(hn(f, S, D)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < m.length &&
          ((c = new F(c, g, null, u, E)), v.push({ event: c, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (F = e === "mouseout" || e === "pointerout"),
          c &&
            u !== Hi &&
            (g = u.relatedTarget || u.fromElement) &&
            (Mt(g) || g[lt]))
        )
          break e;
        if (
          (F || c) &&
          ((c =
            E.window === E
              ? E
              : (c = E.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          F
            ? ((g = u.relatedTarget || u.toElement),
              (F = s),
              (g = g ? Mt(g) : null),
              g !== null &&
                ((_ = Xt(g)), g !== _ || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((F = null), (g = s)),
          F !== g)
        ) {
          if (
            ((m = Ha),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Va),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (_ = F == null ? c : ru(F)),
            (D = g == null ? c : ru(g)),
            (c = new m(S, f + "leave", F, u, E)),
            (c.target = _),
            (c.relatedTarget = D),
            (S = null),
            Mt(E) === s &&
              ((m = new m(p, f + "enter", g, u, E)),
              (m.target = D),
              (m.relatedTarget = _),
              (S = m)),
            (_ = S),
            F && g)
          )
            t: {
              for (m = F, p = g, f = 0, D = m; D; D = qt(D)) f++;
              for (D = 0, S = p; S; S = qt(S)) D++;
              for (; 0 < f - D; ) (m = qt(m)), f--;
              for (; 0 < D - f; ) (p = qt(p)), D--;
              for (; f--; ) {
                if (m === p || (p !== null && m === p.alternate)) break t;
                (m = qt(m)), (p = qt(p));
              }
              m = null;
            }
          else m = null;
          F !== null && to(v, c, F, m, !1),
            g !== null && _ !== null && to(v, _, g, m, !0);
        }
      }
      e: {
        if (
          ((c = s ? ru(s) : window),
          (F = c.nodeName && c.nodeName.toLowerCase()),
          F === "select" || (F === "input" && c.type === "file"))
        )
          var w = np;
        else if (Ga(c))
          if (qs) w = ap;
          else {
            w = ip;
            var A = rp;
          }
        else
          (F = c.nodeName) &&
            F.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (w = lp);
        if (w && (w = w(e, s))) {
          Zs(v, w, u, E);
          break e;
        }
        A && A(e, c, s),
          e === "focusout" &&
            (A = c._wrapperState) &&
            A.controlled &&
            c.type === "number" &&
            Ii(c, "number", c.value);
      }
      switch (((A = s ? ru(s) : window), e)) {
        case "focusin":
          (Ga(A) || A.contentEditable === "true") &&
            ((uu = A), (Xi = s), (qu = null));
          break;
        case "focusout":
          qu = Xi = uu = null;
          break;
        case "mousedown":
          Ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ji = !1), qa(v, u, E);
          break;
        case "selectionchange":
          if (cp) break;
        case "keydown":
        case "keyup":
          qa(v, u, E);
      }
      var T;
      if (Hl)
        e: {
          switch (e) {
            case "compositionstart":
              var B = "onCompositionStart";
              break e;
            case "compositionend":
              B = "onCompositionEnd";
              break e;
            case "compositionupdate":
              B = "onCompositionUpdate";
              break e;
          }
          B = void 0;
        }
      else
        tu
          ? Xs(e, u) && (B = "onCompositionEnd")
          : e === "keydown" && u.keyCode === 229 && (B = "onCompositionStart");
      B &&
        (Ys &&
          u.locale !== "ko" &&
          (tu || B !== "onCompositionStart"
            ? B === "onCompositionEnd" && tu && (T = Gs())
            : ((mt = E),
              (zl = "value" in mt ? mt.value : mt.textContent),
              (tu = !0))),
        (A = cr(s, B)),
        0 < A.length &&
          ((B = new Wa(B, e, null, u, E)),
          v.push({ event: B, listeners: A }),
          T ? (B.data = T) : ((T = Js(u)), T !== null && (B.data = T)))),
        (T = qf ? bf(e, u) : ep(e, u)) &&
          ((s = cr(s, "onBeforeInput")),
          0 < s.length &&
            ((E = new Wa("onBeforeInput", "beforeinput", null, u, E)),
            v.push({ event: E, listeners: s }),
            (E.data = T)));
    }
    o0(v, t);
  });
}
function hn(e, t, u) {
  return { instance: e, listener: t, currentTarget: u };
}
function cr(e, t) {
  for (var u = t + "Capture", n = []; e !== null; ) {
    var r = e,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i),
      (i = on(e, u)),
      i != null && n.unshift(hn(e, i, r)),
      (i = on(e, t)),
      i != null && n.push(hn(e, i, r))),
      (e = e.return);
  }
  return n;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function to(e, t, u, n, r) {
  for (var i = t._reactName, l = []; u !== null && u !== n; ) {
    var a = u,
      o = a.alternate,
      s = a.stateNode;
    if (o !== null && o === n) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      r
        ? ((o = on(u, i)), o != null && l.unshift(hn(u, o, a)))
        : r || ((o = on(u, i)), o != null && l.push(hn(u, o, a)))),
      (u = u.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Dp = /\r\n?/g,
  hp = /\u0000|\uFFFD/g;
function uo(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dp,
      `
`
    )
    .replace(hp, "");
}
function zn(e, t, u) {
  if (((t = uo(t)), uo(e) !== t && u)) throw Error(x(425));
}
function fr() {}
var Zi = null,
  qi = null;
function bi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var el = typeof setTimeout == "function" ? setTimeout : void 0,
  Ap = typeof clearTimeout == "function" ? clearTimeout : void 0,
  no = typeof Promise == "function" ? Promise : void 0,
  vp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof no < "u"
      ? function (e) {
          return no.resolve(null).then(e).catch(mp);
        }
      : el;
function mp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ai(e, t) {
  var u = t,
    n = 0;
  do {
    var r = u.nextSibling;
    if ((e.removeChild(u), r && r.nodeType === 8))
      if (((u = r.data), u === "/$")) {
        if (n === 0) {
          e.removeChild(r), fn(t);
          return;
        }
        n--;
      } else (u !== "$" && u !== "$?" && u !== "$!") || n++;
    u = r;
  } while (u);
  fn(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ro(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var u = e.data;
      if (u === "$" || u === "$!" || u === "$?") {
        if (t === 0) return e;
        t--;
      } else u === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xu = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + xu,
  An = "__reactProps$" + xu,
  lt = "__reactContainer$" + xu,
  tl = "__reactEvents$" + xu,
  Cp = "__reactListeners$" + xu,
  Ep = "__reactHandles$" + xu;
function Mt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var u = e.parentNode; u; ) {
    if ((t = u[lt] || u[Ze])) {
      if (
        ((u = t.alternate),
        t.child !== null || (u !== null && u.child !== null))
      )
        for (e = ro(e); e !== null; ) {
          if ((u = e[Ze])) return u;
          e = ro(e);
        }
      return t;
    }
    (e = u), (u = e.parentNode);
  }
  return null;
}
function Sn(e) {
  return (
    (e = e[Ze] || e[lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ru(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Ir(e) {
  return e[An] || null;
}
var ul = [],
  iu = -1;
function Nt(e) {
  return { current: e };
}
function X(e) {
  0 > iu || ((e.current = ul[iu]), (ul[iu] = null), iu--);
}
function Q(e, t) {
  iu++, (ul[iu] = e.current), (e.current = t);
}
var Tt = {},
  me = Nt(Tt),
  Be = Nt(!1),
  Wt = Tt;
function Eu(e, t) {
  var u = e.type.contextTypes;
  if (!u) return Tt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in u) r[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function pr() {
  X(Be), X(me);
}
function io(e, t, u) {
  if (me.current !== Tt) throw Error(x(168));
  Q(me, t), Q(Be, u);
}
function c0(e, t, u) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return u;
  n = n.getChildContext();
  for (var r in n) if (!(r in t)) throw Error(x(108, nf(e) || "Unknown", r));
  return ee({}, u, n);
}
function dr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (Wt = me.current),
    Q(me, e),
    Q(Be, Be.current),
    !0
  );
}
function lo(e, t, u) {
  var n = e.stateNode;
  if (!n) throw Error(x(169));
  u
    ? ((e = c0(e, t, Wt)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      X(Be),
      X(me),
      Q(me, e))
    : X(Be),
    Q(Be, u);
}
var tt = null,
  Mr = !1,
  vi = !1;
function f0(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function yp(e) {
  (Mr = !0), f0(e);
}
function Pt() {
  if (!vi && tt !== null) {
    vi = !0;
    var e = 0,
      t = W;
    try {
      var u = tt;
      for (W = 1; e < u.length; e++) {
        var n = u[e];
        do n = n(!0);
        while (n !== null);
      }
      (tt = null), (Mr = !1);
    } catch (r) {
      throw (tt !== null && (tt = tt.slice(e + 1)), Rs($l, Pt), r);
    } finally {
      (W = t), (vi = !1);
    }
  }
  return null;
}
var lu = [],
  au = 0,
  Dr = null,
  hr = 0,
  Oe = [],
  Le = 0,
  Vt = null,
  ut = 1,
  nt = "";
function $t(e, t) {
  (lu[au++] = hr), (lu[au++] = Dr), (Dr = e), (hr = t);
}
function p0(e, t, u) {
  (Oe[Le++] = ut), (Oe[Le++] = nt), (Oe[Le++] = Vt), (Vt = e);
  var n = ut;
  e = nt;
  var r = 32 - Ve(n) - 1;
  (n &= ~(1 << r)), (u += 1);
  var i = 32 - Ve(t) + r;
  if (30 < i) {
    var l = r - (r % 5);
    (i = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (r -= l),
      (ut = (1 << (32 - Ve(t) + r)) | (u << r) | n),
      (nt = i + e);
  } else (ut = (1 << i) | (u << r) | n), (nt = e);
}
function Vl(e) {
  e.return !== null && ($t(e, 1), p0(e, 1, 0));
}
function Kl(e) {
  for (; e === Dr; )
    (Dr = lu[--au]), (lu[au] = null), (hr = lu[--au]), (lu[au] = null);
  for (; e === Vt; )
    (Vt = Oe[--Le]),
      (Oe[Le] = null),
      (nt = Oe[--Le]),
      (Oe[Le] = null),
      (ut = Oe[--Le]),
      (Oe[Le] = null);
}
var Te = null,
  _e = null,
  J = !1,
  We = null;
function d0(e, t) {
  var u = $e(5, null, null, 0);
  (u.elementType = "DELETED"),
    (u.stateNode = t),
    (u.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [u]), (e.flags |= 16)) : t.push(u);
}
function ao(e, t) {
  switch (e.tag) {
    case 5:
      var u = e.type;
      return (
        (t =
          t.nodeType !== 1 || u.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (_e = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((u = Vt !== null ? { id: ut, overflow: nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: u,
              retryLane: 1073741824,
            }),
            (u = $e(18, null, null, 0)),
            (u.stateNode = t),
            (u.return = e),
            (e.child = u),
            (Te = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rl(e) {
  if (J) {
    var t = _e;
    if (t) {
      var u = t;
      if (!ao(e, t)) {
        if (nl(e)) throw Error(x(418));
        t = Ft(u.nextSibling);
        var n = Te;
        t && ao(e, t)
          ? d0(n, u)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Te = e));
      }
    } else {
      if (nl(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Te = e);
    }
  }
}
function oo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function jn(e) {
  if (e !== Te) return !1;
  if (!J) return oo(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (nl(e)) throw (D0(), Error(x(418)));
    for (; t; ) d0(e, t), (t = Ft(t.nextSibling));
  }
  if ((oo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var u = e.data;
          if (u === "/$") {
            if (t === 0) {
              _e = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (u !== "$" && u !== "$!" && u !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Te ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function D0() {
  for (var e = _e; e; ) e = Ft(e.nextSibling);
}
function yu() {
  (_e = Te = null), (J = !1);
}
function Ql(e) {
  We === null ? (We = [e]) : We.push(e);
}
var gp = st.ReactCurrentBatchConfig;
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var u in e) t[u] === void 0 && (t[u] = e[u]);
    return t;
  }
  return t;
}
var Ar = Nt(null),
  vr = null,
  ou = null,
  Gl = null;
function Yl() {
  Gl = ou = vr = null;
}
function Xl(e) {
  var t = Ar.current;
  X(Ar), (e._currentValue = t);
}
function il(e, t, u) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === u)
    )
      break;
    e = e.return;
  }
}
function vu(e, t) {
  (vr = e),
    (Gl = ou = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (Gl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ou === null)) {
      if (vr === null) throw Error(x(308));
      (ou = e), (vr.dependencies = { lanes: 0, firstContext: e });
    } else ou = ou.next = e;
  return t;
}
var zt = null;
function Jl(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function h0(e, t, u, n) {
  var r = t.interleaved;
  return (
    r === null ? ((u.next = u), Jl(t)) : ((u.next = r.next), (r.next = u)),
    (t.interleaved = u),
    at(e, n)
  );
}
function at(e, t) {
  e.lanes |= t;
  var u = e.alternate;
  for (u !== null && (u.lanes |= t), u = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (u = e.alternate),
      u !== null && (u.childLanes |= t),
      (u = e),
      (e = e.return);
  return u.tag === 3 ? u.stateNode : null;
}
var ht = !1;
function Zl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function A0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, u) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), j & 2)) {
    var r = n.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (n.pending = t),
      at(e, u)
    );
  }
  return (
    (r = n.interleaved),
    r === null ? ((t.next = t), Jl(n)) : ((t.next = r.next), (r.next = t)),
    (n.interleaved = t),
    at(e, u)
  );
}
function Jn(e, t, u) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (u |= n), (t.lanes = u), Rl(e, u);
  }
}
function so(e, t) {
  var u = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), u === n)) {
    var r = null,
      i = null;
    if (((u = u.firstBaseUpdate), u !== null)) {
      do {
        var l = {
          eventTime: u.eventTime,
          lane: u.lane,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        };
        i === null ? (r = i = l) : (i = i.next = l), (u = u.next);
      } while (u !== null);
      i === null ? (r = i = t) : (i = i.next = t);
    } else r = i = t;
    (u = {
      baseState: n.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = u);
    return;
  }
  (e = u.lastBaseUpdate),
    e === null ? (u.firstBaseUpdate = t) : (e.next = t),
    (u.lastBaseUpdate = t);
}
function mr(e, t, u, n) {
  var r = e.updateQueue;
  ht = !1;
  var i = r.firstBaseUpdate,
    l = r.lastBaseUpdate,
    a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var o = a,
      s = o.next;
    (o.next = null), l === null ? (i = s) : (l.next = s), (l = o);
    var E = e.alternate;
    E !== null &&
      ((E = E.updateQueue),
      (a = E.lastBaseUpdate),
      a !== l &&
        (a === null ? (E.firstBaseUpdate = s) : (a.next = s),
        (E.lastBaseUpdate = o)));
  }
  if (i !== null) {
    var v = r.baseState;
    (l = 0), (E = s = o = null), (a = i);
    do {
      var c = a.lane,
        F = a.eventTime;
      if ((n & c) === c) {
        E !== null &&
          (E = E.next =
            {
              eventTime: F,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            m = a;
          switch (((c = t), (F = u), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == "function")) {
                v = g.call(F, v, c);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = m.payload),
                (c = typeof g == "function" ? g.call(F, v, c) : g),
                c == null)
              )
                break e;
              v = ee({}, v, c);
              break e;
            case 2:
              ht = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = r.effects),
          c === null ? (r.effects = [a]) : c.push(a));
      } else
        (F = {
          eventTime: F,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          E === null ? ((s = E = F), (o = v)) : (E = E.next = F),
          (l |= c);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (r.lastBaseUpdate = c),
          (r.shared.pending = null);
      }
    } while (1);
    if (
      (E === null && (o = v),
      (r.baseState = o),
      (r.firstBaseUpdate = s),
      (r.lastBaseUpdate = E),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (l |= r.lane), (r = r.next);
      while (r !== t);
    } else i === null && (r.shared.lanes = 0);
    (Qt |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function co(e, t, u) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        r = n.callback;
      if (r !== null) {
        if (((n.callback = null), (n = u), typeof r != "function"))
          throw Error(x(191, r));
        r.call(n);
      }
    }
}
var v0 = new hs.Component().refs;
function ll(e, t, u, n) {
  (t = e.memoizedState),
    (u = u(n, t)),
    (u = u == null ? t : ee({}, t, u)),
    (e.memoizedState = u),
    e.lanes === 0 && (e.updateQueue.baseState = u);
}
var zr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, u) {
    e = e._reactInternals;
    var n = Ee(),
      r = wt(e),
      i = rt(n, r);
    (i.payload = t),
      u != null && (i.callback = u),
      (t = Bt(e, i, r)),
      t !== null && (Ke(t, e, r, n), Jn(t, e, r));
  },
  enqueueReplaceState: function (e, t, u) {
    e = e._reactInternals;
    var n = Ee(),
      r = wt(e),
      i = rt(n, r);
    (i.tag = 1),
      (i.payload = t),
      u != null && (i.callback = u),
      (t = Bt(e, i, r)),
      t !== null && (Ke(t, e, r, n), Jn(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var u = Ee(),
      n = wt(e),
      r = rt(u, n);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = Bt(e, r, n)),
      t !== null && (Ke(t, e, n, u), Jn(t, e, n));
  },
};
function fo(e, t, u, n, r, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !dn(u, n) || !dn(r, i)
      : !0
  );
}
function m0(e, t, u) {
  var n = !1,
    r = Tt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ie(i))
      : ((r = Se(t) ? Wt : me.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Eu(e, r) : Tt)),
    (t = new t(u, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zr),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function po(e, t, u, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(u, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(u, n),
    t.state !== e && zr.enqueueReplaceState(t, t.state, null);
}
function al(e, t, u, n) {
  var r = e.stateNode;
  (r.props = u), (r.state = e.memoizedState), (r.refs = v0), Zl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (r.context = Ie(i))
    : ((i = Se(t) ? Wt : me.current), (r.context = Eu(e, i))),
    (r.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ll(e, t, i, u), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && zr.enqueueReplaceState(r, r.state, null),
      mr(e, u, r, n),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mu(e, t, u) {
  if (
    ((e = u.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (u._owner) {
      if (((u = u._owner), u)) {
        if (u.tag !== 1) throw Error(x(309));
        var n = u.stateNode;
      }
      if (!n) throw Error(x(147, e));
      var r = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = r.refs;
            a === v0 && (a = r.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!u._owner) throw Error(x(290, e));
  }
  return e;
}
function Un(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Do(e) {
  var t = e._init;
  return t(e._payload);
}
function C0(e) {
  function t(p, f) {
    if (e) {
      var D = p.deletions;
      D === null ? ((p.deletions = [f]), (p.flags |= 16)) : D.push(f);
    }
  }
  function u(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function n(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function r(p, f) {
    return (p = xt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, D) {
    return (
      (p.index = D),
      e
        ? ((D = p.alternate),
          D !== null
            ? ((D = D.index), D < f ? ((p.flags |= 2), f) : D)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, D, S) {
    return f === null || f.tag !== 6
      ? ((f = Bi(D, p.mode, S)), (f.return = p), f)
      : ((f = r(f, D)), (f.return = p), f);
  }
  function o(p, f, D, S) {
    var w = D.type;
    return w === eu
      ? E(p, f, D.props.children, S, D.key)
      : f !== null &&
        (f.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Dt &&
            Do(w) === f.type))
      ? ((S = r(f, D.props)), (S.ref = Mu(p, f, D)), (S.return = p), S)
      : ((S = ur(D.type, D.key, D.props, null, p.mode, S)),
        (S.ref = Mu(p, f, D)),
        (S.return = p),
        S);
  }
  function s(p, f, D, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== D.containerInfo ||
      f.stateNode.implementation !== D.implementation
      ? ((f = Si(D, p.mode, S)), (f.return = p), f)
      : ((f = r(f, D.children || [])), (f.return = p), f);
  }
  function E(p, f, D, S, w) {
    return f === null || f.tag !== 7
      ? ((f = Ht(D, p.mode, S, w)), (f.return = p), f)
      : ((f = r(f, D)), (f.return = p), f);
  }
  function v(p, f, D) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Bi("" + f, p.mode, D)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kn:
          return (
            (D = ur(f.type, f.key, f.props, null, p.mode, D)),
            (D.ref = Mu(p, null, f)),
            (D.return = p),
            D
          );
        case bt:
          return (f = Si(f, p.mode, D)), (f.return = p), f;
        case Dt:
          var S = f._init;
          return v(p, S(f._payload), D);
      }
      if (Wu(f) || Ou(f))
        return (f = Ht(f, p.mode, D, null)), (f.return = p), f;
      Un(p, f);
    }
    return null;
  }
  function c(p, f, D, S) {
    var w = f !== null ? f.key : null;
    if ((typeof D == "string" && D !== "") || typeof D == "number")
      return w !== null ? null : a(p, f, "" + D, S);
    if (typeof D == "object" && D !== null) {
      switch (D.$$typeof) {
        case kn:
          return D.key === w ? o(p, f, D, S) : null;
        case bt:
          return D.key === w ? s(p, f, D, S) : null;
        case Dt:
          return (w = D._init), c(p, f, w(D._payload), S);
      }
      if (Wu(D) || Ou(D)) return w !== null ? null : E(p, f, D, S, null);
      Un(p, D);
    }
    return null;
  }
  function F(p, f, D, S, w) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(D) || null), a(f, p, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case kn:
          return (p = p.get(S.key === null ? D : S.key) || null), o(f, p, S, w);
        case bt:
          return (p = p.get(S.key === null ? D : S.key) || null), s(f, p, S, w);
        case Dt:
          var A = S._init;
          return F(p, f, D, A(S._payload), w);
      }
      if (Wu(S) || Ou(S)) return (p = p.get(D) || null), E(f, p, S, w, null);
      Un(f, S);
    }
    return null;
  }
  function g(p, f, D, S) {
    for (
      var w = null, A = null, T = f, B = (f = 0), z = null;
      T !== null && B < D.length;
      B++
    ) {
      T.index > B ? ((z = T), (T = null)) : (z = T.sibling);
      var M = c(p, T, D[B], S);
      if (M === null) {
        T === null && (T = z);
        break;
      }
      e && T && M.alternate === null && t(p, T),
        (f = i(M, f, B)),
        A === null ? (w = M) : (A.sibling = M),
        (A = M),
        (T = z);
    }
    if (B === D.length) return u(p, T), J && $t(p, B), w;
    if (T === null) {
      for (; B < D.length; B++)
        (T = v(p, D[B], S)),
          T !== null &&
            ((f = i(T, f, B)), A === null ? (w = T) : (A.sibling = T), (A = T));
      return J && $t(p, B), w;
    }
    for (T = n(p, T); B < D.length; B++)
      (z = F(T, p, B, D[B], S)),
        z !== null &&
          (e && z.alternate !== null && T.delete(z.key === null ? B : z.key),
          (f = i(z, f, B)),
          A === null ? (w = z) : (A.sibling = z),
          (A = z));
    return (
      e &&
        T.forEach(function (O) {
          return t(p, O);
        }),
      J && $t(p, B),
      w
    );
  }
  function m(p, f, D, S) {
    var w = Ou(D);
    if (typeof w != "function") throw Error(x(150));
    if (((D = w.call(D)), D == null)) throw Error(x(151));
    for (
      var A = (w = null), T = f, B = (f = 0), z = null, M = D.next();
      T !== null && !M.done;
      B++, M = D.next()
    ) {
      T.index > B ? ((z = T), (T = null)) : (z = T.sibling);
      var O = c(p, T, M.value, S);
      if (O === null) {
        T === null && (T = z);
        break;
      }
      e && T && O.alternate === null && t(p, T),
        (f = i(O, f, B)),
        A === null ? (w = O) : (A.sibling = O),
        (A = O),
        (T = z);
    }
    if (M.done) return u(p, T), J && $t(p, B), w;
    if (T === null) {
      for (; !M.done; B++, M = D.next())
        (M = v(p, M.value, S)),
          M !== null &&
            ((f = i(M, f, B)), A === null ? (w = M) : (A.sibling = M), (A = M));
      return J && $t(p, B), w;
    }
    for (T = n(p, T); !M.done; B++, M = D.next())
      (M = F(T, p, B, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? B : M.key),
          (f = i(M, f, B)),
          A === null ? (w = M) : (A.sibling = M),
          (A = M));
    return (
      e &&
        T.forEach(function (ze) {
          return t(p, ze);
        }),
      J && $t(p, B),
      w
    );
  }
  function _(p, f, D, S) {
    if (
      (typeof D == "object" &&
        D !== null &&
        D.type === eu &&
        D.key === null &&
        (D = D.props.children),
      typeof D == "object" && D !== null)
    ) {
      switch (D.$$typeof) {
        case kn:
          e: {
            for (var w = D.key, A = f; A !== null; ) {
              if (A.key === w) {
                if (((w = D.type), w === eu)) {
                  if (A.tag === 7) {
                    u(p, A.sibling),
                      (f = r(A, D.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  A.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Dt &&
                    Do(w) === A.type)
                ) {
                  u(p, A.sibling),
                    (f = r(A, D.props)),
                    (f.ref = Mu(p, A, D)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                u(p, A);
                break;
              } else t(p, A);
              A = A.sibling;
            }
            D.type === eu
              ? ((f = Ht(D.props.children, p.mode, S, D.key)),
                (f.return = p),
                (p = f))
              : ((S = ur(D.type, D.key, D.props, null, p.mode, S)),
                (S.ref = Mu(p, f, D)),
                (S.return = p),
                (p = S));
          }
          return l(p);
        case bt:
          e: {
            for (A = D.key; f !== null; ) {
              if (f.key === A)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === D.containerInfo &&
                  f.stateNode.implementation === D.implementation
                ) {
                  u(p, f.sibling),
                    (f = r(f, D.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  u(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Si(D, p.mode, S)), (f.return = p), (p = f);
          }
          return l(p);
        case Dt:
          return (A = D._init), _(p, f, A(D._payload), S);
      }
      if (Wu(D)) return g(p, f, D, S);
      if (Ou(D)) return m(p, f, D, S);
      Un(p, D);
    }
    return (typeof D == "string" && D !== "") || typeof D == "number"
      ? ((D = "" + D),
        f !== null && f.tag === 6
          ? (u(p, f.sibling), (f = r(f, D)), (f.return = p), (p = f))
          : (u(p, f), (f = Bi(D, p.mode, S)), (f.return = p), (p = f)),
        l(p))
      : u(p, f);
  }
  return _;
}
var gu = C0(!0),
  E0 = C0(!1),
  wn = {},
  be = Nt(wn),
  vn = Nt(wn),
  mn = Nt(wn);
function jt(e) {
  if (e === wn) throw Error(x(174));
  return e;
}
function ql(e, t) {
  switch ((Q(mn, t), Q(vn, e), Q(be, wn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zi(t, e));
  }
  X(be), Q(be, t);
}
function Fu() {
  X(be), X(vn), X(mn);
}
function y0(e) {
  jt(mn.current);
  var t = jt(be.current),
    u = zi(t, e.type);
  t !== u && (Q(vn, e), Q(be, u));
}
function bl(e) {
  vn.current === e && (X(be), X(vn));
}
var q = Nt(0);
function Cr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var u = t.memoizedState;
      if (
        u !== null &&
        ((u = u.dehydrated), u === null || u.data === "$?" || u.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var mi = [];
function ea() {
  for (var e = 0; e < mi.length; e++)
    mi[e]._workInProgressVersionPrimary = null;
  mi.length = 0;
}
var Zn = st.ReactCurrentDispatcher,
  Ci = st.ReactCurrentBatchConfig,
  Kt = 0,
  b = null,
  ie = null,
  se = null,
  Er = !1,
  bu = !1,
  Cn = 0,
  Fp = 0;
function he() {
  throw Error(x(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var u = 0; u < t.length && u < e.length; u++)
    if (!Qe(e[u], t[u])) return !1;
  return !0;
}
function ua(e, t, u, n, r, i) {
  if (
    ((Kt = i),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zn.current = e === null || e.memoizedState === null ? xp : _p),
    (e = u(n, r)),
    bu)
  ) {
    i = 0;
    do {
      if (((bu = !1), (Cn = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (se = ie = null),
        (t.updateQueue = null),
        (Zn.current = Tp),
        (e = u(n, r));
    } while (bu);
  }
  if (
    ((Zn.current = yr),
    (t = ie !== null && ie.next !== null),
    (Kt = 0),
    (se = ie = b = null),
    (Er = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function na() {
  var e = Cn !== 0;
  return (Cn = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (b.memoizedState = se = e) : (se = se.next = e), se;
}
function Me() {
  if (ie === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = se === null ? b.memoizedState : se.next;
  if (t !== null) (se = t), (ie = e);
  else {
    if (e === null) throw Error(x(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      se === null ? (b.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function En(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ei(e) {
  var t = Me(),
    u = t.queue;
  if (u === null) throw Error(x(311));
  u.lastRenderedReducer = e;
  var n = ie,
    r = n.baseQueue,
    i = u.pending;
  if (i !== null) {
    if (r !== null) {
      var l = r.next;
      (r.next = i.next), (i.next = l);
    }
    (n.baseQueue = r = i), (u.pending = null);
  }
  if (r !== null) {
    (i = r.next), (n = n.baseState);
    var a = (l = null),
      o = null,
      s = i;
    do {
      var E = s.lane;
      if ((Kt & E) === E)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.hasEagerState ? s.eagerState : e(n, s.action));
      else {
        var v = {
          lane: E,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        o === null ? ((a = o = v), (l = n)) : (o = o.next = v),
          (b.lanes |= E),
          (Qt |= E);
      }
      s = s.next;
    } while (s !== null && s !== i);
    o === null ? (l = n) : (o.next = a),
      Qe(n, t.memoizedState) || (Fe = !0),
      (t.memoizedState = n),
      (t.baseState = l),
      (t.baseQueue = o),
      (u.lastRenderedState = n);
  }
  if (((e = u.interleaved), e !== null)) {
    r = e;
    do (i = r.lane), (b.lanes |= i), (Qt |= i), (r = r.next);
    while (r !== e);
  } else r === null && (u.lanes = 0);
  return [t.memoizedState, u.dispatch];
}
function yi(e) {
  var t = Me(),
    u = t.queue;
  if (u === null) throw Error(x(311));
  u.lastRenderedReducer = e;
  var n = u.dispatch,
    r = u.pending,
    i = t.memoizedState;
  if (r !== null) {
    u.pending = null;
    var l = (r = r.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== r);
    Qe(i, t.memoizedState) || (Fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (u.lastRenderedState = i);
  }
  return [i, n];
}
function g0() {}
function F0(e, t) {
  var u = b,
    n = Me(),
    r = t(),
    i = !Qe(n.memoizedState, r);
  if (
    (i && ((n.memoizedState = r), (Fe = !0)),
    (n = n.queue),
    ra(w0.bind(null, u, n, e), [e]),
    n.getSnapshot !== t || i || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((u.flags |= 2048),
      yn(9, S0.bind(null, u, n, r, t), void 0, null),
      ce === null)
    )
      throw Error(x(349));
    Kt & 30 || B0(u, t, r);
  }
  return r;
}
function B0(e, t, u) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: u }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.stores = [e]))
      : ((u = t.stores), u === null ? (t.stores = [e]) : u.push(e));
}
function S0(e, t, u, n) {
  (t.value = u), (t.getSnapshot = n), x0(t) && _0(e);
}
function w0(e, t, u) {
  return u(function () {
    x0(t) && _0(e);
  });
}
function x0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var u = t();
    return !Qe(e, u);
  } catch {
    return !0;
  }
}
function _0(e) {
  var t = at(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function ho(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: En,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wp.bind(null, b, e)),
    [t.memoizedState, e]
  );
}
function yn(e, t, u, n) {
  return (
    (e = { tag: e, create: t, destroy: u, deps: n, next: null }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((u = t.lastEffect),
        u === null
          ? (t.lastEffect = e.next = e)
          : ((n = u.next), (u.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function T0() {
  return Me().memoizedState;
}
function qn(e, t, u, n) {
  var r = Je();
  (b.flags |= e),
    (r.memoizedState = yn(1 | t, u, void 0, n === void 0 ? null : n));
}
function jr(e, t, u, n) {
  var r = Me();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (((i = l.destroy), n !== null && ta(n, l.deps))) {
      r.memoizedState = yn(t, u, i, n);
      return;
    }
  }
  (b.flags |= e), (r.memoizedState = yn(1 | t, u, i, n));
}
function Ao(e, t) {
  return qn(8390656, 8, e, t);
}
function ra(e, t) {
  return jr(2048, 8, e, t);
}
function k0(e, t) {
  return jr(4, 2, e, t);
}
function N0(e, t) {
  return jr(4, 4, e, t);
}
function P0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function O0(e, t, u) {
  return (
    (u = u != null ? u.concat([e]) : null), jr(4, 4, P0.bind(null, t, e), u)
  );
}
function ia() {}
function L0(e, t) {
  var u = Me();
  t = t === void 0 ? null : t;
  var n = u.memoizedState;
  return n !== null && t !== null && ta(t, n[1])
    ? n[0]
    : ((u.memoizedState = [e, t]), e);
}
function $0(e, t) {
  var u = Me();
  t = t === void 0 ? null : t;
  var n = u.memoizedState;
  return n !== null && t !== null && ta(t, n[1])
    ? n[0]
    : ((e = e()), (u.memoizedState = [e, t]), e);
}
function R0(e, t, u) {
  return Kt & 21
    ? (Qe(u, t) || ((u = zs()), (b.lanes |= u), (Qt |= u), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = u));
}
function Bp(e, t) {
  var u = W;
  (W = u !== 0 && 4 > u ? u : 4), e(!0);
  var n = Ci.transition;
  Ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = u), (Ci.transition = n);
  }
}
function I0() {
  return Me().memoizedState;
}
function Sp(e, t, u) {
  var n = wt(e);
  if (
    ((u = {
      lane: n,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    M0(e))
  )
    z0(t, u);
  else if (((u = h0(e, t, u, n)), u !== null)) {
    var r = Ee();
    Ke(u, e, n, r), j0(u, t, n);
  }
}
function wp(e, t, u) {
  var n = wt(e),
    r = { lane: n, action: u, hasEagerState: !1, eagerState: null, next: null };
  if (M0(e)) z0(t, r);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, u);
        if (((r.hasEagerState = !0), (r.eagerState = a), Qe(a, l))) {
          var o = t.interleaved;
          o === null
            ? ((r.next = r), Jl(t))
            : ((r.next = o.next), (o.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (u = h0(e, t, r, n)),
      u !== null && ((r = Ee()), Ke(u, e, n, r), j0(u, t, n));
  }
}
function M0(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}
function z0(e, t) {
  bu = Er = !0;
  var u = e.pending;
  u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
    (e.pending = t);
}
function j0(e, t, u) {
  if (u & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (u |= n), (t.lanes = u), Rl(e, u);
  }
}
var yr = {
    readContext: Ie,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  xp = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: Ao,
    useImperativeHandle: function (e, t, u) {
      return (
        (u = u != null ? u.concat([e]) : null),
        qn(4194308, 4, P0.bind(null, t, e), u)
      );
    },
    useLayoutEffect: function (e, t) {
      return qn(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qn(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var u = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (u.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, u) {
      var n = Je();
      return (
        (t = u !== void 0 ? u(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Sp.bind(null, b, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ho,
    useDebugValue: ia,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = ho(!1),
        t = e[0];
      return (e = Bp.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, u) {
      var n = b,
        r = Je();
      if (J) {
        if (u === void 0) throw Error(x(407));
        u = u();
      } else {
        if (((u = t()), ce === null)) throw Error(x(349));
        Kt & 30 || B0(n, t, u);
      }
      r.memoizedState = u;
      var i = { value: u, getSnapshot: t };
      return (
        (r.queue = i),
        Ao(w0.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        yn(9, S0.bind(null, n, i, u, t), void 0, null),
        u
      );
    },
    useId: function () {
      var e = Je(),
        t = ce.identifierPrefix;
      if (J) {
        var u = nt,
          n = ut;
        (u = (n & ~(1 << (32 - Ve(n) - 1))).toString(32) + u),
          (t = ":" + t + "R" + u),
          (u = Cn++),
          0 < u && (t += "H" + u.toString(32)),
          (t += ":");
      } else (u = Fp++), (t = ":" + t + "r" + u.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _p = {
    readContext: Ie,
    useCallback: L0,
    useContext: Ie,
    useEffect: ra,
    useImperativeHandle: O0,
    useInsertionEffect: k0,
    useLayoutEffect: N0,
    useMemo: $0,
    useReducer: Ei,
    useRef: T0,
    useState: function () {
      return Ei(En);
    },
    useDebugValue: ia,
    useDeferredValue: function (e) {
      var t = Me();
      return R0(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Ei(En)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: g0,
    useSyncExternalStore: F0,
    useId: I0,
    unstable_isNewReconciler: !1,
  },
  Tp = {
    readContext: Ie,
    useCallback: L0,
    useContext: Ie,
    useEffect: ra,
    useImperativeHandle: O0,
    useInsertionEffect: k0,
    useLayoutEffect: N0,
    useMemo: $0,
    useReducer: yi,
    useRef: T0,
    useState: function () {
      return yi(En);
    },
    useDebugValue: ia,
    useDeferredValue: function (e) {
      var t = Me();
      return ie === null ? (t.memoizedState = e) : R0(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = yi(En)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: g0,
    useSyncExternalStore: F0,
    useId: I0,
    unstable_isNewReconciler: !1,
  };
function Bu(e, t) {
  try {
    var u = "",
      n = t;
    do (u += uf(n)), (n = n.return);
    while (n);
    var r = u;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function gi(e, t, u) {
  return { value: e, source: null, stack: u ?? null, digest: t ?? null };
}
function ol(e, t) {
  try {
    console.error(t.value);
  } catch (u) {
    setTimeout(function () {
      throw u;
    });
  }
}
var kp = typeof WeakMap == "function" ? WeakMap : Map;
function U0(e, t, u) {
  (u = rt(-1, u)), (u.tag = 3), (u.payload = { element: null });
  var n = t.value;
  return (
    (u.callback = function () {
      Fr || ((Fr = !0), (ml = n)), ol(e, t);
    }),
    u
  );
}
function H0(e, t, u) {
  (u = rt(-1, u)), (u.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var r = t.value;
    (u.payload = function () {
      return n(r);
    }),
      (u.callback = function () {
        ol(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (u.callback = function () {
        ol(e, t),
          typeof n != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    u
  );
}
function vo(e, t, u) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new kp();
    var r = new Set();
    n.set(t, r);
  } else (r = n.get(t)), r === void 0 && ((r = new Set()), n.set(t, r));
  r.has(u) || (r.add(u), (e = Vp.bind(null, e, t, u)), t.then(e, e));
}
function mo(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Co(e, t, u, n, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (u.flags |= 131072),
          (u.flags &= -52805),
          u.tag === 1 &&
            (u.alternate === null
              ? (u.tag = 17)
              : ((t = rt(-1, 1)), (t.tag = 2), Bt(u, t, 1))),
          (u.lanes |= 1)),
      e);
}
var Np = st.ReactCurrentOwner,
  Fe = !1;
function Ce(e, t, u, n) {
  t.child = e === null ? E0(t, null, u, n) : gu(t, e.child, u, n);
}
function Eo(e, t, u, n, r) {
  u = u.render;
  var i = t.ref;
  return (
    vu(t, r),
    (n = ua(e, t, u, n, i, r)),
    (u = na()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        ot(e, t, r))
      : (J && u && Vl(t), (t.flags |= 1), Ce(e, t, n, r), t.child)
  );
}
function yo(e, t, u, n, r) {
  if (e === null) {
    var i = u.type;
    return typeof i == "function" &&
      !da(i) &&
      i.defaultProps === void 0 &&
      u.compare === null &&
      u.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), W0(e, t, i, n, r))
      : ((e = ur(u.type, null, n, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & r))) {
    var l = i.memoizedProps;
    if (
      ((u = u.compare), (u = u !== null ? u : dn), u(l, n) && e.ref === t.ref)
    )
      return ot(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = xt(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function W0(e, t, u, n, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (dn(i, n) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = n = i), (e.lanes & r) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), ot(e, t, r);
  }
  return sl(e, t, u, n, r);
}
function V0(e, t, u) {
  var n = t.pendingProps,
    r = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(cu, xe),
        (xe |= u);
    else {
      if (!(u & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | u : u),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(cu, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : u),
        Q(cu, xe),
        (xe |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | u), (t.memoizedState = null)) : (n = u),
      Q(cu, xe),
      (xe |= n);
  return Ce(e, t, r, u), t.child;
}
function K0(e, t) {
  var u = t.ref;
  ((e === null && u !== null) || (e !== null && e.ref !== u)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function sl(e, t, u, n, r) {
  var i = Se(u) ? Wt : me.current;
  return (
    (i = Eu(t, i)),
    vu(t, r),
    (u = ua(e, t, u, n, i, r)),
    (n = na()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        ot(e, t, r))
      : (J && n && Vl(t), (t.flags |= 1), Ce(e, t, u, r), t.child)
  );
}
function go(e, t, u, n, r) {
  if (Se(u)) {
    var i = !0;
    dr(t);
  } else i = !1;
  if ((vu(t, r), t.stateNode === null))
    bn(e, t), m0(t, u, n), al(t, u, n, r), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var o = l.context,
      s = u.contextType;
    typeof s == "object" && s !== null
      ? (s = Ie(s))
      : ((s = Se(u) ? Wt : me.current), (s = Eu(t, s)));
    var E = u.getDerivedStateFromProps,
      v =
        typeof E == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== n || o !== s) && po(t, l, n, s)),
      (ht = !1);
    var c = t.memoizedState;
    (l.state = c),
      mr(t, n, l, r),
      (o = t.memoizedState),
      a !== n || c !== o || Be.current || ht
        ? (typeof E == "function" && (ll(t, u, E, n), (o = t.memoizedState)),
          (a = ht || fo(t, u, a, n, c, o, s))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = o)),
          (l.props = n),
          (l.state = o),
          (l.context = s),
          (n = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (l = t.stateNode),
      A0(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : Ue(t.type, a)),
      (l.props = s),
      (v = t.pendingProps),
      (c = l.context),
      (o = u.contextType),
      typeof o == "object" && o !== null
        ? (o = Ie(o))
        : ((o = Se(u) ? Wt : me.current), (o = Eu(t, o)));
    var F = u.getDerivedStateFromProps;
    (E =
      typeof F == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== v || c !== o) && po(t, l, n, o)),
      (ht = !1),
      (c = t.memoizedState),
      (l.state = c),
      mr(t, n, l, r);
    var g = t.memoizedState;
    a !== v || c !== g || Be.current || ht
      ? (typeof F == "function" && (ll(t, u, F, n), (g = t.memoizedState)),
        (s = ht || fo(t, u, s, n, c, g, o) || !1)
          ? (E ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, g, o),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, g, o)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = g)),
        (l.props = n),
        (l.state = g),
        (l.context = o),
        (n = s))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return cl(e, t, u, n, i, r);
}
function cl(e, t, u, n, r, i) {
  K0(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return r && lo(t, u, !1), ot(e, t, i);
  (n = t.stateNode), (Np.current = t);
  var a =
    l && typeof u.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = gu(t, e.child, null, i)), (t.child = gu(t, null, a, i)))
      : Ce(e, t, a, i),
    (t.memoizedState = n.state),
    r && lo(t, u, !0),
    t.child
  );
}
function Q0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? io(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && io(e, t.context, !1),
    ql(e, t.containerInfo);
}
function Fo(e, t, u, n, r) {
  return yu(), Ql(r), (t.flags |= 256), Ce(e, t, u, n), t.child;
}
var fl = { dehydrated: null, treeContext: null, retryLane: 0 };
function pl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function G0(e, t, u) {
  var n = t.pendingProps,
    r = q.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    Q(q, r & 1),
    e === null)
  )
    return (
      rl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Wr(l, n, 0, null)),
              (e = Ht(e, n, u, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = pl(u)),
              (t.memoizedState = fl),
              e)
            : la(t, l))
    );
  if (((r = e.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return Pp(e, t, l, n, a, r, u);
  if (i) {
    (i = n.fallback), (l = t.mode), (r = e.child), (a = r.sibling);
    var o = { mode: "hidden", children: n.children };
    return (
      !(l & 1) && t.child !== r
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = o),
          (t.deletions = null))
        : ((n = xt(r, o)), (n.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (i = xt(a, i)) : ((i = Ht(i, l, u, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? pl(u)
          : {
              baseLanes: l.baseLanes | u,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~u),
      (t.memoizedState = fl),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = xt(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = u),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((u = t.deletions),
      u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function la(e, t) {
  return (
    (t = Wr({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hn(e, t, u, n) {
  return (
    n !== null && Ql(n),
    gu(t, e.child, null, u),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pp(e, t, u, n, r, i, l) {
  if (u)
    return t.flags & 256
      ? ((t.flags &= -257), (n = gi(Error(x(422)))), Hn(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (r = t.mode),
        (n = Wr({ mode: "visible", children: n.children }, r, 0, null)),
        (i = Ht(i, r, l, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && gu(t, e.child, null, l),
        (t.child.memoizedState = pl(l)),
        (t.memoizedState = fl),
        i);
  if (!(t.mode & 1)) return Hn(e, t, l, null);
  if (r.data === "$!") {
    if (((n = r.nextSibling && r.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(x(419))), (n = gi(i, n, void 0)), Hn(e, t, l, n);
  }
  if (((a = (l & e.childLanes) !== 0), Fe || a)) {
    if (((n = ce), n !== null)) {
      switch (l & -l) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (n.suspendedLanes | l) ? 0 : r),
        r !== 0 &&
          r !== i.retryLane &&
          ((i.retryLane = r), at(e, r), Ke(n, e, r, -1));
    }
    return pa(), (n = gi(Error(x(421)))), Hn(e, t, l, n);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kp.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (_e = Ft(r.nextSibling)),
      (Te = t),
      (J = !0),
      (We = null),
      e !== null &&
        ((Oe[Le++] = ut),
        (Oe[Le++] = nt),
        (Oe[Le++] = Vt),
        (ut = e.id),
        (nt = e.overflow),
        (Vt = t)),
      (t = la(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Bo(e, t, u) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), il(e.return, t, u);
}
function Fi(e, t, u, n, r) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: u,
        tailMode: r,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = u),
      (i.tailMode = r));
}
function Y0(e, t, u) {
  var n = t.pendingProps,
    r = n.revealOrder,
    i = n.tail;
  if ((Ce(e, t, n.children, u), (n = q.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bo(e, u, t);
        else if (e.tag === 19) Bo(e, u, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Q(q, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (u = t.child, r = null; u !== null; )
          (e = u.alternate),
            e !== null && Cr(e) === null && (r = u),
            (u = u.sibling);
        (u = r),
          u === null
            ? ((r = t.child), (t.child = null))
            : ((r = u.sibling), (u.sibling = null)),
          Fi(t, !1, r, u, i);
        break;
      case "backwards":
        for (u = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Cr(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = u), (u = r), (r = e);
        }
        Fi(t, !0, u, null, i);
        break;
      case "together":
        Fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bn(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ot(e, t, u) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qt |= t.lanes),
    !(u & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, u = xt(e, e.pendingProps), t.child = u, u.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (u = u.sibling = xt(e, e.pendingProps)), (u.return = t);
    u.sibling = null;
  }
  return t.child;
}
function Op(e, t, u) {
  switch (t.tag) {
    case 3:
      Q0(t), yu();
      break;
    case 5:
      y0(t);
      break;
    case 1:
      Se(t.type) && dr(t);
      break;
    case 4:
      ql(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        r = t.memoizedProps.value;
      Q(Ar, n._currentValue), (n._currentValue = r);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Q(q, q.current & 1), (t.flags |= 128), null)
          : u & t.child.childLanes
          ? G0(e, t, u)
          : (Q(q, q.current & 1),
            (e = ot(e, t, u)),
            e !== null ? e.sibling : null);
      Q(q, q.current & 1);
      break;
    case 19:
      if (((n = (u & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Y0(e, t, u);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Q(q, q.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), V0(e, t, u);
  }
  return ot(e, t, u);
}
var X0, dl, J0, Z0;
X0 = function (e, t) {
  for (var u = t.child; u !== null; ) {
    if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
    else if (u.tag !== 4 && u.child !== null) {
      (u.child.return = u), (u = u.child);
      continue;
    }
    if (u === t) break;
    for (; u.sibling === null; ) {
      if (u.return === null || u.return === t) return;
      u = u.return;
    }
    (u.sibling.return = u.return), (u = u.sibling);
  }
};
dl = function () {};
J0 = function (e, t, u, n) {
  var r = e.memoizedProps;
  if (r !== n) {
    (e = t.stateNode), jt(be.current);
    var i = null;
    switch (u) {
      case "input":
        (r = $i(e, r)), (n = $i(e, n)), (i = []);
        break;
      case "select":
        (r = ee({}, r, { value: void 0 })),
          (n = ee({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (r = Mi(e, r)), (n = Mi(e, n)), (i = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = fr);
    }
    ji(u, n);
    var l;
    u = null;
    for (s in r)
      if (!n.hasOwnProperty(s) && r.hasOwnProperty(s) && r[s] != null)
        if (s === "style") {
          var a = r[s];
          for (l in a) a.hasOwnProperty(l) && (u || (u = {}), (u[l] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (ln.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in n) {
      var o = n[s];
      if (
        ((a = r != null ? r[s] : void 0),
        n.hasOwnProperty(s) && o !== a && (o != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (o && o.hasOwnProperty(l)) ||
                (u || (u = {}), (u[l] = ""));
            for (l in o)
              o.hasOwnProperty(l) &&
                a[l] !== o[l] &&
                (u || (u = {}), (u[l] = o[l]));
          } else u || (i || (i = []), i.push(s, u)), (u = o);
        else
          s === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (i = i || []).push(s, o))
            : s === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (i = i || []).push(s, "" + o)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (ln.hasOwnProperty(s)
                ? (o != null && s === "onScroll" && G("scroll", e),
                  i || a === o || (i = []))
                : (i = i || []).push(s, o));
    }
    u && (i = i || []).push("style", u);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Z0 = function (e, t, u, n) {
  u !== n && (t.flags |= 4);
};
function zu(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var u = null; t !== null; )
          t.alternate !== null && (u = t), (t = t.sibling);
        u === null ? (e.tail = null) : (u.sibling = null);
        break;
      case "collapsed":
        u = e.tail;
        for (var n = null; u !== null; )
          u.alternate !== null && (n = u), (u = u.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    u = 0,
    n = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (u |= r.lanes | r.childLanes),
        (n |= r.subtreeFlags & 14680064),
        (n |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (u |= r.lanes | r.childLanes),
        (n |= r.subtreeFlags),
        (n |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = u), t;
}
function Lp(e, t, u) {
  var n = t.pendingProps;
  switch ((Kl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ae(t), null;
    case 1:
      return Se(t.type) && pr(), Ae(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Fu(),
        X(Be),
        X(me),
        ea(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (jn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (yl(We), (We = null)))),
        dl(e, t),
        Ae(t),
        null
      );
    case 5:
      bl(t);
      var r = jt(mn.current);
      if (((u = t.type), e !== null && t.stateNode != null))
        J0(e, t, u, n, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(x(166));
          return Ae(t), null;
        }
        if (((e = jt(be.current)), jn(t))) {
          (n = t.stateNode), (u = t.type);
          var i = t.memoizedProps;
          switch (((n[Ze] = t), (n[An] = i), (e = (t.mode & 1) !== 0), u)) {
            case "dialog":
              G("cancel", n), G("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", n);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ku.length; r++) G(Ku[r], n);
              break;
            case "source":
              G("error", n);
              break;
            case "img":
            case "image":
            case "link":
              G("error", n), G("load", n);
              break;
            case "details":
              G("toggle", n);
              break;
            case "input":
              Pa(n, i), G("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                G("invalid", n);
              break;
            case "textarea":
              La(n, i), G("invalid", n);
          }
          ji(u, i), (r = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      zn(n.textContent, a, e),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      zn(n.textContent, a, e),
                    (r = ["children", "" + a]))
                : ln.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  G("scroll", n);
            }
          switch (u) {
            case "input":
              Nn(n), Oa(n, i, !0);
              break;
            case "textarea":
              Nn(n), $a(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = fr);
          }
          (n = r), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bs(u)),
            e === "http://www.w3.org/1999/xhtml"
              ? u === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(u, { is: n.is }))
                : ((e = l.createElement(u)),
                  u === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, u)),
            (e[Ze] = t),
            (e[An] = n),
            X0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ui(u, n)), u)) {
              case "dialog":
                G("cancel", e), G("close", e), (r = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (r = n);
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ku.length; r++) G(Ku[r], e);
                r = n;
                break;
              case "source":
                G("error", e), (r = n);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (r = n);
                break;
              case "details":
                G("toggle", e), (r = n);
                break;
              case "input":
                Pa(e, n), (r = $i(e, n)), G("invalid", e);
                break;
              case "option":
                r = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (r = ee({}, n, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                La(e, n), (r = Mi(e, n)), G("invalid", e);
                break;
              default:
                r = n;
            }
            ji(u, r), (a = r);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var o = a[i];
                i === "style"
                  ? xs(e, o)
                  : i === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && Ss(e, o))
                  : i === "children"
                  ? typeof o == "string"
                    ? (u !== "textarea" || o !== "") && an(e, o)
                    : typeof o == "number" && an(e, "" + o)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ln.hasOwnProperty(i)
                      ? o != null && i === "onScroll" && G("scroll", e)
                      : o != null && kl(e, i, o, l));
              }
            switch (u) {
              case "input":
                Nn(e), Oa(e, n, !1);
                break;
              case "textarea":
                Nn(e), $a(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + _t(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? du(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      du(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = fr);
            }
            switch (u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) Z0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(x(166));
        if (((u = jt(mn.current)), jt(be.current), jn(t))) {
          if (
            ((n = t.stateNode),
            (u = t.memoizedProps),
            (n[Ze] = t),
            (i = n.nodeValue !== u) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                zn(n.nodeValue, u, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zn(n.nodeValue, u, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(n)),
            (n[Ze] = t),
            (t.stateNode = n);
      }
      return Ae(t), null;
    case 13:
      if (
        (X(q),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && _e !== null && t.mode & 1 && !(t.flags & 128))
          D0(), yu(), (t.flags |= 98560), (i = !1);
        else if (((i = jn(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[Ze] = t;
          } else
            yu(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ae(t), (i = !1);
        } else We !== null && (yl(We), (We = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = u), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? le === 0 && (le = 3) : pa())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        Fu(), dl(e, t), e === null && Dn(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return Xl(t.type._context), Ae(t), null;
    case 17:
      return Se(t.type) && pr(), Ae(t), null;
    case 19:
      if ((X(q), (i = t.memoizedState), i === null)) return Ae(t), null;
      if (((n = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (n) zu(i, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Cr(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    zu(i, !1),
                    n = l.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = u,
                    u = t.child;
                  u !== null;

                )
                  (i = u),
                    (e = n),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (u = u.sibling);
                return Q(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > Su &&
            ((t.flags |= 128), (n = !0), zu(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Cr(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (u = e.updateQueue),
              u !== null && ((t.updateQueue = u), (t.flags |= 4)),
              zu(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !J)
            )
              return Ae(t), null;
          } else
            2 * ne() - i.renderingStartTime > Su &&
              u !== 1073741824 &&
              ((t.flags |= 128), (n = !0), zu(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((u = i.last),
            u !== null ? (u.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ne()),
          (t.sibling = null),
          (u = q.current),
          Q(q, n ? (u & 1) | 2 : u & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        fa(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? xe & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function $p(e, t) {
  switch ((Kl(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && pr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fu(),
        X(Be),
        X(me),
        ea(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bl(t), null;
    case 13:
      if ((X(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        yu();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(q), null;
    case 4:
      return Fu(), null;
    case 10:
      return Xl(t.type._context), null;
    case 22:
    case 23:
      return fa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wn = !1,
  ve = !1,
  Rp = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function su(e, t) {
  var u = e.ref;
  if (u !== null)
    if (typeof u == "function")
      try {
        u(null);
      } catch (n) {
        ue(e, t, n);
      }
    else u.current = null;
}
function Dl(e, t, u) {
  try {
    u();
  } catch (n) {
    ue(e, t, n);
  }
}
var So = !1;
function Ip(e, t) {
  if (((Zi = or), (e = t0()), Wl(e))) {
    if ("selectionStart" in e)
      var u = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        u = ((u = e.ownerDocument) && u.defaultView) || window;
        var n = u.getSelection && u.getSelection();
        if (n && n.rangeCount !== 0) {
          u = n.anchorNode;
          var r = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            u.nodeType, i.nodeType;
          } catch {
            u = null;
            break e;
          }
          var l = 0,
            a = -1,
            o = -1,
            s = 0,
            E = 0,
            v = e,
            c = null;
          t: for (;;) {
            for (
              var F;
              v !== u || (r !== 0 && v.nodeType !== 3) || (a = l + r),
                v !== i || (n !== 0 && v.nodeType !== 3) || (o = l + n),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (F = v.firstChild) !== null;

            )
              (c = v), (v = F);
            for (;;) {
              if (v === e) break t;
              if (
                (c === u && ++s === r && (a = l),
                c === i && ++E === n && (o = l),
                (F = v.nextSibling) !== null)
              )
                break;
              (v = c), (c = v.parentNode);
            }
            v = F;
          }
          u = a === -1 || o === -1 ? null : { start: a, end: o };
        } else u = null;
      }
    u = u || { start: 0, end: 0 };
  } else u = null;
  for (qi = { focusedElem: e, selectionRange: u }, or = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    _ = g.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Ue(t.type, m),
                      _
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var D = t.stateNode.containerInfo;
                D.nodeType === 1
                  ? (D.textContent = "")
                  : D.nodeType === 9 &&
                    D.documentElement &&
                    D.removeChild(D.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (S) {
          ue(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (g = So), (So = !1), g;
}
function en(e, t, u) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var r = (n = n.next);
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && Dl(t, u, i);
      }
      r = r.next;
    } while (r !== n);
  }
}
function Ur(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var u = (t = t.next);
    do {
      if ((u.tag & e) === e) {
        var n = u.create;
        u.destroy = n();
      }
      u = u.next;
    } while (u !== t);
  }
}
function hl(e) {
  var t = e.ref;
  if (t !== null) {
    var u = e.stateNode;
    switch (e.tag) {
      case 5:
        e = u;
        break;
      default:
        e = u;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function q0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), q0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[An], delete t[tl], delete t[Cp], delete t[Ep])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function b0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || b0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Al(e, t, u) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? u.nodeType === 8
          ? u.parentNode.insertBefore(e, t)
          : u.insertBefore(e, t)
        : (u.nodeType === 8
            ? ((t = u.parentNode), t.insertBefore(e, u))
            : ((t = u), t.appendChild(e)),
          (u = u._reactRootContainer),
          u != null || t.onclick !== null || (t.onclick = fr));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Al(e, t, u), e = e.sibling; e !== null; ) Al(e, t, u), (e = e.sibling);
}
function vl(e, t, u) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? u.insertBefore(e, t) : u.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (vl(e, t, u), e = e.sibling; e !== null; ) vl(e, t, u), (e = e.sibling);
}
var pe = null,
  He = !1;
function dt(e, t, u) {
  for (u = u.child; u !== null; ) ec(e, t, u), (u = u.sibling);
}
function ec(e, t, u) {
  if (qe && typeof qe.onCommitFiberUnmount == "function")
    try {
      qe.onCommitFiberUnmount(Or, u);
    } catch {}
  switch (u.tag) {
    case 5:
      ve || su(u, t);
    case 6:
      var n = pe,
        r = He;
      (pe = null),
        dt(e, t, u),
        (pe = n),
        (He = r),
        pe !== null &&
          (He
            ? ((e = pe),
              (u = u.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(u) : e.removeChild(u))
            : pe.removeChild(u.stateNode));
      break;
    case 18:
      pe !== null &&
        (He
          ? ((e = pe),
            (u = u.stateNode),
            e.nodeType === 8
              ? Ai(e.parentNode, u)
              : e.nodeType === 1 && Ai(e, u),
            fn(e))
          : Ai(pe, u.stateNode));
      break;
    case 4:
      (n = pe),
        (r = He),
        (pe = u.stateNode.containerInfo),
        (He = !0),
        dt(e, t, u),
        (pe = n),
        (He = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((n = u.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        r = n = n.next;
        do {
          var i = r,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Dl(u, t, l),
            (r = r.next);
        } while (r !== n);
      }
      dt(e, t, u);
      break;
    case 1:
      if (
        !ve &&
        (su(u, t),
        (n = u.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = u.memoizedProps),
            (n.state = u.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          ue(u, t, a);
        }
      dt(e, t, u);
      break;
    case 21:
      dt(e, t, u);
      break;
    case 22:
      u.mode & 1
        ? ((ve = (n = ve) || u.memoizedState !== null), dt(e, t, u), (ve = n))
        : dt(e, t, u);
      break;
    default:
      dt(e, t, u);
  }
}
function xo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var u = e.stateNode;
    u === null && (u = e.stateNode = new Rp()),
      t.forEach(function (n) {
        var r = Qp.bind(null, e, n);
        u.has(n) || (u.add(n), n.then(r, r));
      });
  }
}
function je(e, t) {
  var u = t.deletions;
  if (u !== null)
    for (var n = 0; n < u.length; n++) {
      var r = u[n];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (pe = a.stateNode), (He = !1);
              break e;
            case 3:
              (pe = a.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (pe = a.stateNode.containerInfo), (He = !0);
              break e;
          }
          a = a.return;
        }
        if (pe === null) throw Error(x(160));
        ec(i, l, r), (pe = null), (He = !1);
        var o = r.alternate;
        o !== null && (o.return = null), (r.return = null);
      } catch (s) {
        ue(r, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) tc(t, e), (t = t.sibling);
}
function tc(e, t) {
  var u = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Xe(e), n & 4)) {
        try {
          en(3, e, e.return), Ur(3, e);
        } catch (m) {
          ue(e, e.return, m);
        }
        try {
          en(5, e, e.return);
        } catch (m) {
          ue(e, e.return, m);
        }
      }
      break;
    case 1:
      je(t, e), Xe(e), n & 512 && u !== null && su(u, u.return);
      break;
    case 5:
      if (
        (je(t, e),
        Xe(e),
        n & 512 && u !== null && su(u, u.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          an(r, "");
        } catch (m) {
          ue(e, e.return, m);
        }
      }
      if (n & 4 && ((r = e.stateNode), r != null)) {
        var i = e.memoizedProps,
          l = u !== null ? u.memoizedProps : i,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && gs(r, i),
              Ui(a, l);
            var s = Ui(a, i);
            for (l = 0; l < o.length; l += 2) {
              var E = o[l],
                v = o[l + 1];
              E === "style"
                ? xs(r, v)
                : E === "dangerouslySetInnerHTML"
                ? Ss(r, v)
                : E === "children"
                ? an(r, v)
                : kl(r, E, v, s);
            }
            switch (a) {
              case "input":
                Ri(r, i);
                break;
              case "textarea":
                Fs(r, i);
                break;
              case "select":
                var c = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var F = i.value;
                F != null
                  ? du(r, !!i.multiple, F, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? du(r, !!i.multiple, i.defaultValue, !0)
                      : du(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[An] = i;
          } catch (m) {
            ue(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((je(t, e), Xe(e), n & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (r = e.stateNode), (i = e.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (m) {
          ue(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), Xe(e), n & 4 && u !== null && u.memoizedState.isDehydrated)
      )
        try {
          fn(t.containerInfo);
        } catch (m) {
          ue(e, e.return, m);
        }
      break;
    case 4:
      je(t, e), Xe(e);
      break;
    case 13:
      je(t, e),
        Xe(e),
        (r = e.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (sa = ne())),
        n & 4 && xo(e);
      break;
    case 22:
      if (
        ((E = u !== null && u.memoizedState !== null),
        e.mode & 1 ? ((ve = (s = ve) || E), je(t, e), (ve = s)) : je(t, e),
        Xe(e),
        n & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !E && e.mode & 1)
        )
          for (N = e, E = e.child; E !== null; ) {
            for (v = N = E; N !== null; ) {
              switch (((c = N), (F = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  en(4, c, c.return);
                  break;
                case 1:
                  su(c, c.return);
                  var g = c.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (n = c), (u = c.return);
                    try {
                      (t = n),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (m) {
                      ue(n, u, m);
                    }
                  }
                  break;
                case 5:
                  su(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    To(v);
                    continue;
                  }
              }
              F !== null ? ((F.return = c), (N = F)) : To(v);
            }
            E = E.sibling;
          }
        e: for (E = null, v = e; ; ) {
          if (v.tag === 5) {
            if (E === null) {
              E = v;
              try {
                (r = v.stateNode),
                  s
                    ? ((i = r.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = v.stateNode),
                      (o = v.memoizedProps.style),
                      (l =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = ws("display", l)));
              } catch (m) {
                ue(e, e.return, m);
              }
            }
          } else if (v.tag === 6) {
            if (E === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (m) {
                ue(e, e.return, m);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            E === v && (E = null), (v = v.return);
          }
          E === v && (E = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Xe(e), n & 4 && xo(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var u = e.return; u !== null; ) {
          if (b0(u)) {
            var n = u;
            break e;
          }
          u = u.return;
        }
        throw Error(x(160));
      }
      switch (n.tag) {
        case 5:
          var r = n.stateNode;
          n.flags & 32 && (an(r, ""), (n.flags &= -33));
          var i = wo(e);
          vl(e, i, r);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            a = wo(e);
          Al(e, a, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (o) {
      ue(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mp(e, t, u) {
  (N = e), uc(e);
}
function uc(e, t, u) {
  for (var n = (e.mode & 1) !== 0; N !== null; ) {
    var r = N,
      i = r.child;
    if (r.tag === 22 && n) {
      var l = r.memoizedState !== null || Wn;
      if (!l) {
        var a = r.alternate,
          o = (a !== null && a.memoizedState !== null) || ve;
        a = Wn;
        var s = ve;
        if (((Wn = l), (ve = o) && !s))
          for (N = r; N !== null; )
            (l = N),
              (o = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? ko(r)
                : o !== null
                ? ((o.return = l), (N = o))
                : ko(r);
        for (; i !== null; ) (N = i), uc(i), (i = i.sibling);
        (N = r), (Wn = a), (ve = s);
      }
      _o(e);
    } else
      r.subtreeFlags & 8772 && i !== null ? ((i.return = r), (N = i)) : _o(e);
  }
}
function _o(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var u = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Ur(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ve)
                if (u === null) n.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? u.memoizedProps
                      : Ue(t.type, u.memoizedProps);
                  n.componentDidUpdate(
                    r,
                    u.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && co(t, i, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((u = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      u = t.child.stateNode;
                      break;
                    case 1:
                      u = t.child.stateNode;
                  }
                co(t, l, u);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (u === null && t.flags & 4) {
                u = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && u.focus();
                    break;
                  case "img":
                    o.src && (u.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var E = s.memoizedState;
                  if (E !== null) {
                    var v = E.dehydrated;
                    v !== null && fn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ve || (t.flags & 512 && hl(t));
      } catch (c) {
        ue(t, t.return, c);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((u = t.sibling), u !== null)) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
function To(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
function ko(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var u = t.return;
          try {
            Ur(4, t);
          } catch (o) {
            ue(t, u, o);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var r = t.return;
            try {
              n.componentDidMount();
            } catch (o) {
              ue(t, r, o);
            }
          }
          var i = t.return;
          try {
            hl(t);
          } catch (o) {
            ue(t, i, o);
          }
          break;
        case 5:
          var l = t.return;
          try {
            hl(t);
          } catch (o) {
            ue(t, l, o);
          }
      }
    } catch (o) {
      ue(t, t.return, o);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var zp = Math.ceil,
  gr = st.ReactCurrentDispatcher,
  aa = st.ReactCurrentOwner,
  Re = st.ReactCurrentBatchConfig,
  j = 0,
  ce = null,
  re = null,
  de = 0,
  xe = 0,
  cu = Nt(0),
  le = 0,
  gn = null,
  Qt = 0,
  Hr = 0,
  oa = 0,
  tn = null,
  ge = null,
  sa = 0,
  Su = 1 / 0,
  et = null,
  Fr = !1,
  ml = null,
  St = null,
  Vn = !1,
  Ct = null,
  Br = 0,
  un = 0,
  Cl = null,
  er = -1,
  tr = 0;
function Ee() {
  return j & 6 ? ne() : er !== -1 ? er : (er = ne());
}
function wt(e) {
  return e.mode & 1
    ? j & 2 && de !== 0
      ? de & -de
      : gp.transition !== null
      ? (tr === 0 && (tr = zs()), tr)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qs(e.type))),
        e)
    : 1;
}
function Ke(e, t, u, n) {
  if (50 < un) throw ((un = 0), (Cl = null), Error(x(185)));
  Fn(e, u, n),
    (!(j & 2) || e !== ce) &&
      (e === ce && (!(j & 2) && (Hr |= u), le === 4 && vt(e, de)),
      we(e, n),
      u === 1 && j === 0 && !(t.mode & 1) && ((Su = ne() + 500), Mr && Pt()));
}
function we(e, t) {
  var u = e.callbackNode;
  gf(e, t);
  var n = ar(e, e === ce ? de : 0);
  if (n === 0)
    u !== null && Ma(u), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((u != null && Ma(u), t === 1))
      e.tag === 0 ? yp(No.bind(null, e)) : f0(No.bind(null, e)),
        vp(function () {
          !(j & 6) && Pt();
        }),
        (u = null);
    else {
      switch (js(n)) {
        case 1:
          u = $l;
          break;
        case 4:
          u = Is;
          break;
        case 16:
          u = lr;
          break;
        case 536870912:
          u = Ms;
          break;
        default:
          u = lr;
      }
      u = cc(u, nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = u);
  }
}
function nc(e, t) {
  if (((er = -1), (tr = 0), j & 6)) throw Error(x(327));
  var u = e.callbackNode;
  if (mu() && e.callbackNode !== u) return null;
  var n = ar(e, e === ce ? de : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Sr(e, n);
  else {
    t = n;
    var r = j;
    j |= 2;
    var i = ic();
    (ce !== e || de !== t) && ((et = null), (Su = ne() + 500), Ut(e, t));
    do
      try {
        Hp();
        break;
      } catch (a) {
        rc(e, a);
      }
    while (1);
    Yl(),
      (gr.current = i),
      (j = r),
      re !== null ? (t = 0) : ((ce = null), (de = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = Qi(e)), r !== 0 && ((n = r), (t = El(e, r)))), t === 1)
    )
      throw ((u = gn), Ut(e, 0), vt(e, n), we(e, ne()), u);
    if (t === 6) vt(e, n);
    else {
      if (
        ((r = e.current.alternate),
        !(n & 30) &&
          !jp(r) &&
          ((t = Sr(e, n)),
          t === 2 && ((i = Qi(e)), i !== 0 && ((n = i), (t = El(e, i)))),
          t === 1))
      )
        throw ((u = gn), Ut(e, 0), vt(e, n), we(e, ne()), u);
      switch (((e.finishedWork = r), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Rt(e, ge, et);
          break;
        case 3:
          if (
            (vt(e, n), (n & 130023424) === n && ((t = sa + 500 - ne()), 10 < t))
          ) {
            if (ar(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & n) !== n)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = el(Rt.bind(null, e, ge, et), t);
            break;
          }
          Rt(e, ge, et);
          break;
        case 4:
          if ((vt(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, r = -1; 0 < n; ) {
            var l = 31 - Ve(n);
            (i = 1 << l), (l = t[l]), l > r && (r = l), (n &= ~i);
          }
          if (
            ((n = r),
            (n = ne() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * zp(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = el(Rt.bind(null, e, ge, et), n);
            break;
          }
          Rt(e, ge, et);
          break;
        case 5:
          Rt(e, ge, et);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return we(e, ne()), e.callbackNode === u ? nc.bind(null, e) : null;
}
function El(e, t) {
  var u = tn;
  return (
    e.current.memoizedState.isDehydrated && (Ut(e, t).flags |= 256),
    (e = Sr(e, t)),
    e !== 2 && ((t = ge), (ge = u), t !== null && yl(t)),
    e
  );
}
function yl(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function jp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var u = t.updateQueue;
      if (u !== null && ((u = u.stores), u !== null))
        for (var n = 0; n < u.length; n++) {
          var r = u[n],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!Qe(i(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((u = t.child), t.subtreeFlags & 16384 && u !== null))
      (u.return = t), (t = u);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function vt(e, t) {
  for (
    t &= ~oa,
      t &= ~Hr,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var u = 31 - Ve(t),
      n = 1 << u;
    (e[u] = -1), (t &= ~n);
  }
}
function No(e) {
  if (j & 6) throw Error(x(327));
  mu();
  var t = ar(e, 0);
  if (!(t & 1)) return we(e, ne()), null;
  var u = Sr(e, t);
  if (e.tag !== 0 && u === 2) {
    var n = Qi(e);
    n !== 0 && ((t = n), (u = El(e, n)));
  }
  if (u === 1) throw ((u = gn), Ut(e, 0), vt(e, t), we(e, ne()), u);
  if (u === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, ge, et),
    we(e, ne()),
    null
  );
}
function ca(e, t) {
  var u = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = u), j === 0 && ((Su = ne() + 500), Mr && Pt());
  }
}
function Gt(e) {
  Ct !== null && Ct.tag === 0 && !(j & 6) && mu();
  var t = j;
  j |= 1;
  var u = Re.transition,
    n = W;
  try {
    if (((Re.transition = null), (W = 1), e)) return e();
  } finally {
    (W = n), (Re.transition = u), (j = t), !(j & 6) && Pt();
  }
}
function fa() {
  (xe = cu.current), X(cu);
}
function Ut(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var u = e.timeoutHandle;
  if ((u !== -1 && ((e.timeoutHandle = -1), Ap(u)), re !== null))
    for (u = re.return; u !== null; ) {
      var n = u;
      switch ((Kl(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && pr();
          break;
        case 3:
          Fu(), X(Be), X(me), ea();
          break;
        case 5:
          bl(n);
          break;
        case 4:
          Fu();
          break;
        case 13:
          X(q);
          break;
        case 19:
          X(q);
          break;
        case 10:
          Xl(n.type._context);
          break;
        case 22:
        case 23:
          fa();
      }
      u = u.return;
    }
  if (
    ((ce = e),
    (re = e = xt(e.current, null)),
    (de = xe = t),
    (le = 0),
    (gn = null),
    (oa = Hr = Qt = 0),
    (ge = tn = null),
    zt !== null)
  ) {
    for (t = 0; t < zt.length; t++)
      if (((u = zt[t]), (n = u.interleaved), n !== null)) {
        u.interleaved = null;
        var r = n.next,
          i = u.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = r), (n.next = l);
        }
        u.pending = n;
      }
    zt = null;
  }
  return e;
}
function rc(e, t) {
  do {
    var u = re;
    try {
      if ((Yl(), (Zn.current = yr), Er)) {
        for (var n = b.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), (n = n.next);
        }
        Er = !1;
      }
      if (
        ((Kt = 0),
        (se = ie = b = null),
        (bu = !1),
        (Cn = 0),
        (aa.current = null),
        u === null || u.return === null)
      ) {
        (le = 1), (gn = t), (re = null);
        break;
      }
      e: {
        var i = e,
          l = u.return,
          a = u,
          o = t;
        if (
          ((t = de),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var s = o,
            E = a,
            v = E.tag;
          if (!(E.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var c = E.alternate;
            c
              ? ((E.updateQueue = c.updateQueue),
                (E.memoizedState = c.memoizedState),
                (E.lanes = c.lanes))
              : ((E.updateQueue = null), (E.memoizedState = null));
          }
          var F = mo(l);
          if (F !== null) {
            (F.flags &= -257),
              Co(F, l, a, i, t),
              F.mode & 1 && vo(i, s, t),
              (t = F),
              (o = s);
            var g = t.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(o), (t.updateQueue = m);
            } else g.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              vo(i, s, t), pa();
              break e;
            }
            o = Error(x(426));
          }
        } else if (J && a.mode & 1) {
          var _ = mo(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Co(_, l, a, i, t),
              Ql(Bu(o, a));
            break e;
          }
        }
        (i = o = Bu(o, a)),
          le !== 4 && (le = 2),
          tn === null ? (tn = [i]) : tn.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = U0(i, o, t);
              so(i, p);
              break e;
            case 1:
              a = o;
              var f = i.type,
                D = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (D !== null &&
                    typeof D.componentDidCatch == "function" &&
                    (St === null || !St.has(D))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = H0(i, a, t);
                so(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ac(u);
    } catch (w) {
      (t = w), re === u && u !== null && (re = u = u.return);
      continue;
    }
    break;
  } while (1);
}
function ic() {
  var e = gr.current;
  return (gr.current = yr), e === null ? yr : e;
}
function pa() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ce === null || (!(Qt & 268435455) && !(Hr & 268435455)) || vt(ce, de);
}
function Sr(e, t) {
  var u = j;
  j |= 2;
  var n = ic();
  (ce !== e || de !== t) && ((et = null), Ut(e, t));
  do
    try {
      Up();
      break;
    } catch (r) {
      rc(e, r);
    }
  while (1);
  if ((Yl(), (j = u), (gr.current = n), re !== null)) throw Error(x(261));
  return (ce = null), (de = 0), le;
}
function Up() {
  for (; re !== null; ) lc(re);
}
function Hp() {
  for (; re !== null && !df(); ) lc(re);
}
function lc(e) {
  var t = sc(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? ac(e) : (re = t),
    (aa.current = null);
}
function ac(e) {
  var t = e;
  do {
    var u = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((u = $p(u, t)), u !== null)) {
        (u.flags &= 32767), (re = u);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (re = null);
        return;
      }
    } else if (((u = Lp(u, t, xe)), u !== null)) {
      re = u;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Rt(e, t, u) {
  var n = W,
    r = Re.transition;
  try {
    (Re.transition = null), (W = 1), Wp(e, t, u, n);
  } finally {
    (Re.transition = r), (W = n);
  }
  return null;
}
function Wp(e, t, u, n) {
  do mu();
  while (Ct !== null);
  if (j & 6) throw Error(x(327));
  u = e.finishedWork;
  var r = e.finishedLanes;
  if (u === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), u === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = u.lanes | u.childLanes;
  if (
    (Ff(e, i),
    e === ce && ((re = ce = null), (de = 0)),
    (!(u.subtreeFlags & 2064) && !(u.flags & 2064)) ||
      Vn ||
      ((Vn = !0),
      cc(lr, function () {
        return mu(), null;
      })),
    (i = (u.flags & 15990) !== 0),
    u.subtreeFlags & 15990 || i)
  ) {
    (i = Re.transition), (Re.transition = null);
    var l = W;
    W = 1;
    var a = j;
    (j |= 4),
      (aa.current = null),
      Ip(e, u),
      tc(u, e),
      sp(qi),
      (or = !!Zi),
      (qi = Zi = null),
      (e.current = u),
      Mp(u),
      Df(),
      (j = a),
      (W = l),
      (Re.transition = i);
  } else e.current = u;
  if (
    (Vn && ((Vn = !1), (Ct = e), (Br = r)),
    (i = e.pendingLanes),
    i === 0 && (St = null),
    vf(u.stateNode),
    we(e, ne()),
    t !== null)
  )
    for (n = e.onRecoverableError, u = 0; u < t.length; u++)
      (r = t[u]), n(r.value, { componentStack: r.stack, digest: r.digest });
  if (Fr) throw ((Fr = !1), (e = ml), (ml = null), e);
  return (
    Br & 1 && e.tag !== 0 && mu(),
    (i = e.pendingLanes),
    i & 1 ? (e === Cl ? un++ : ((un = 0), (Cl = e))) : (un = 0),
    Pt(),
    null
  );
}
function mu() {
  if (Ct !== null) {
    var e = js(Br),
      t = Re.transition,
      u = W;
    try {
      if (((Re.transition = null), (W = 16 > e ? 16 : e), Ct === null))
        var n = !1;
      else {
        if (((e = Ct), (Ct = null), (Br = 0), j & 6)) throw Error(x(331));
        var r = j;
        for (j |= 4, N = e.current; N !== null; ) {
          var i = N,
            l = i.child;
          if (N.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var s = a[o];
                for (N = s; N !== null; ) {
                  var E = N;
                  switch (E.tag) {
                    case 0:
                    case 11:
                    case 15:
                      en(8, E, i);
                  }
                  var v = E.child;
                  if (v !== null) (v.return = E), (N = v);
                  else
                    for (; N !== null; ) {
                      E = N;
                      var c = E.sibling,
                        F = E.return;
                      if ((q0(E), E === s)) {
                        N = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = F), (N = c);
                        break;
                      }
                      N = F;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var _ = m.sibling;
                    (m.sibling = null), (m = _);
                  } while (m !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (N = l);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    en(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (N = p);
                break e;
              }
              N = i.return;
            }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          l = N;
          var D = l.child;
          if (l.subtreeFlags & 2064 && D !== null) (D.return = l), (N = D);
          else
            e: for (l = f; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(9, a);
                  }
                } catch (w) {
                  ue(a, a.return, w);
                }
              if (a === l) {
                N = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (N = S);
                break e;
              }
              N = a.return;
            }
        }
        if (
          ((j = r), Pt(), qe && typeof qe.onPostCommitFiberRoot == "function")
        )
          try {
            qe.onPostCommitFiberRoot(Or, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (W = u), (Re.transition = t);
    }
  }
  return !1;
}
function Po(e, t, u) {
  (t = Bu(u, t)),
    (t = U0(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = Ee()),
    e !== null && (Fn(e, 1, t), we(e, t));
}
function ue(e, t, u) {
  if (e.tag === 3) Po(e, e, u);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Po(t, e, u);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (St === null || !St.has(n)))
        ) {
          (e = Bu(u, e)),
            (e = H0(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = Ee()),
            t !== null && (Fn(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Vp(e, t, u) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & u),
    ce === e &&
      (de & u) === u &&
      (le === 4 || (le === 3 && (de & 130023424) === de && 500 > ne() - sa)
        ? Ut(e, 0)
        : (oa |= u)),
    we(e, t);
}
function oc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ln), (Ln <<= 1), !(Ln & 130023424) && (Ln = 4194304))
      : (t = 1));
  var u = Ee();
  (e = at(e, t)), e !== null && (Fn(e, t, u), we(e, u));
}
function Kp(e) {
  var t = e.memoizedState,
    u = 0;
  t !== null && (u = t.retryLane), oc(e, u);
}
function Qp(e, t) {
  var u = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        r = e.memoizedState;
      r !== null && (u = r.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  n !== null && n.delete(t), oc(e, u);
}
var sc;
sc = function (e, t, u) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Fe = !0;
    else {
      if (!(e.lanes & u) && !(t.flags & 128)) return (Fe = !1), Op(e, t, u);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), J && t.flags & 1048576 && p0(t, hr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      bn(e, t), (e = t.pendingProps);
      var r = Eu(t, me.current);
      vu(t, u), (r = ua(null, t, n, e, r, u));
      var i = na();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(n) ? ((i = !0), dr(t)) : (i = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Zl(t),
            (r.updater = zr),
            (t.stateNode = r),
            (r._reactInternals = t),
            al(t, n, e, u),
            (t = cl(null, t, n, !0, i, u)))
          : ((t.tag = 0), J && i && Vl(t), Ce(null, t, r, u), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (bn(e, t),
          (e = t.pendingProps),
          (r = n._init),
          (n = r(n._payload)),
          (t.type = n),
          (r = t.tag = Yp(n)),
          (e = Ue(n, e)),
          r)
        ) {
          case 0:
            t = sl(null, t, n, e, u);
            break e;
          case 1:
            t = go(null, t, n, e, u);
            break e;
          case 11:
            t = Eo(null, t, n, e, u);
            break e;
          case 14:
            t = yo(null, t, n, Ue(n.type, e), u);
            break e;
        }
        throw Error(x(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (r = t.pendingProps),
        (r = t.elementType === n ? r : Ue(n, r)),
        sl(e, t, n, r, u)
      );
    case 1:
      return (
        (n = t.type),
        (r = t.pendingProps),
        (r = t.elementType === n ? r : Ue(n, r)),
        go(e, t, n, r, u)
      );
    case 3:
      e: {
        if ((Q0(t), e === null)) throw Error(x(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (r = i.element),
          A0(e, t),
          mr(t, n, null, u);
        var l = t.memoizedState;
        if (((n = l.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (r = Bu(Error(x(423)), t)), (t = Fo(e, t, n, u, r));
            break e;
          } else if (n !== r) {
            (r = Bu(Error(x(424)), t)), (t = Fo(e, t, n, u, r));
            break e;
          } else
            for (
              _e = Ft(t.stateNode.containerInfo.firstChild),
                Te = t,
                J = !0,
                We = null,
                u = E0(t, null, n, u),
                t.child = u;
              u;

            )
              (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
        else {
          if ((yu(), n === r)) {
            t = ot(e, t, u);
            break e;
          }
          Ce(e, t, n, u);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        y0(t),
        e === null && rl(t),
        (n = t.type),
        (r = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = r.children),
        bi(n, r) ? (l = null) : i !== null && bi(n, i) && (t.flags |= 32),
        K0(e, t),
        Ce(e, t, l, u),
        t.child
      );
    case 6:
      return e === null && rl(t), null;
    case 13:
      return G0(e, t, u);
    case 4:
      return (
        ql(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = gu(t, null, n, u)) : Ce(e, t, n, u),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (r = t.pendingProps),
        (r = t.elementType === n ? r : Ue(n, r)),
        Eo(e, t, n, r, u)
      );
    case 7:
      return Ce(e, t, t.pendingProps, u), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, u), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, u), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (r = t.pendingProps),
          (i = t.memoizedProps),
          (l = r.value),
          Q(Ar, n._currentValue),
          (n._currentValue = l),
          i !== null)
        )
          if (Qe(i.value, l)) {
            if (i.children === r.children && !Be.current) {
              t = ot(e, t, u);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === n) {
                    if (i.tag === 1) {
                      (o = rt(-1, u & -u)), (o.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var E = s.pending;
                        E === null
                          ? (o.next = o)
                          : ((o.next = E.next), (E.next = o)),
                          (s.pending = o);
                      }
                    }
                    (i.lanes |= u),
                      (o = i.alternate),
                      o !== null && (o.lanes |= u),
                      il(i.return, u, t),
                      (a.lanes |= u);
                    break;
                  }
                  o = o.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(x(341));
                (l.lanes |= u),
                  (a = l.alternate),
                  a !== null && (a.lanes |= u),
                  il(l, u, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ce(e, t, r.children, u), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (n = t.pendingProps.children),
        vu(t, u),
        (r = Ie(r)),
        (n = n(r)),
        (t.flags |= 1),
        Ce(e, t, n, u),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (r = Ue(n, t.pendingProps)),
        (r = Ue(n.type, r)),
        yo(e, t, n, r, u)
      );
    case 15:
      return W0(e, t, t.type, t.pendingProps, u);
    case 17:
      return (
        (n = t.type),
        (r = t.pendingProps),
        (r = t.elementType === n ? r : Ue(n, r)),
        bn(e, t),
        (t.tag = 1),
        Se(n) ? ((e = !0), dr(t)) : (e = !1),
        vu(t, u),
        m0(t, n, r),
        al(t, n, r, u),
        cl(null, t, n, !0, e, u)
      );
    case 19:
      return Y0(e, t, u);
    case 22:
      return V0(e, t, u);
  }
  throw Error(x(156, t.tag));
};
function cc(e, t) {
  return Rs(e, t);
}
function Gp(e, t, u, n) {
  (this.tag = e),
    (this.key = u),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, u, n) {
  return new Gp(e, t, u, n);
}
function da(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yp(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pl)) return 11;
    if (e === Ol) return 14;
  }
  return 2;
}
function xt(e, t) {
  var u = e.alternate;
  return (
    u === null
      ? ((u = $e(e.tag, t, e.key, e.mode)),
        (u.elementType = e.elementType),
        (u.type = e.type),
        (u.stateNode = e.stateNode),
        (u.alternate = e),
        (e.alternate = u))
      : ((u.pendingProps = t),
        (u.type = e.type),
        (u.flags = 0),
        (u.subtreeFlags = 0),
        (u.deletions = null)),
    (u.flags = e.flags & 14680064),
    (u.childLanes = e.childLanes),
    (u.lanes = e.lanes),
    (u.child = e.child),
    (u.memoizedProps = e.memoizedProps),
    (u.memoizedState = e.memoizedState),
    (u.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (u.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (u.sibling = e.sibling),
    (u.index = e.index),
    (u.ref = e.ref),
    u
  );
}
function ur(e, t, u, n, r, i) {
  var l = 2;
  if (((n = e), typeof e == "function")) da(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case eu:
        return Ht(u.children, r, i, t);
      case Nl:
        (l = 8), (r |= 8);
        break;
      case Ni:
        return (
          (e = $e(12, u, t, r | 2)), (e.elementType = Ni), (e.lanes = i), e
        );
      case Pi:
        return (e = $e(13, u, t, r)), (e.elementType = Pi), (e.lanes = i), e;
      case Oi:
        return (e = $e(19, u, t, r)), (e.elementType = Oi), (e.lanes = i), e;
      case Cs:
        return Wr(u, r, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vs:
              l = 10;
              break e;
            case ms:
              l = 9;
              break e;
            case Pl:
              l = 11;
              break e;
            case Ol:
              l = 14;
              break e;
            case Dt:
              (l = 16), (n = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $e(l, u, t, r)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function Ht(e, t, u, n) {
  return (e = $e(7, e, n, t)), (e.lanes = u), e;
}
function Wr(e, t, u, n) {
  return (
    (e = $e(22, e, n, t)),
    (e.elementType = Cs),
    (e.lanes = u),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bi(e, t, u) {
  return (e = $e(6, e, null, t)), (e.lanes = u), e;
}
function Si(e, t, u) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = u),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xp(e, t, u, n, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ii(0)),
    (this.expirationTimes = ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ii(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Da(e, t, u, n, r, i, l, a, o) {
  return (
    (e = new Xp(e, t, u, a, o)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = $e(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: u,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zl(i),
    e
  );
}
function Jp(e, t, u) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bt,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: u,
  };
}
function fc(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var u = e.type;
    if (Se(u)) return c0(e, u, t);
  }
  return t;
}
function pc(e, t, u, n, r, i, l, a, o) {
  return (
    (e = Da(u, n, !0, e, r, i, l, a, o)),
    (e.context = fc(null)),
    (u = e.current),
    (n = Ee()),
    (r = wt(u)),
    (i = rt(n, r)),
    (i.callback = t ?? null),
    Bt(u, i, r),
    (e.current.lanes = r),
    Fn(e, r, n),
    we(e, n),
    e
  );
}
function Vr(e, t, u, n) {
  var r = t.current,
    i = Ee(),
    l = wt(r);
  return (
    (u = fc(u)),
    t.context === null ? (t.context = u) : (t.pendingContext = u),
    (t = rt(i, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Bt(r, t, l)),
    e !== null && (Ke(e, r, l, i), Jn(e, r, l)),
    l
  );
}
function wr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var u = e.retryLane;
    e.retryLane = u !== 0 && u < t ? u : t;
  }
}
function ha(e, t) {
  Oo(e, t), (e = e.alternate) && Oo(e, t);
}
function Zp() {
  return null;
}
var dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Aa(e) {
  this._internalRoot = e;
}
Kr.prototype.render = Aa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Vr(e, t, null, null);
};
Kr.prototype.unmount = Aa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      Vr(null, e, null, null);
    }),
      (t[lt] = null);
  }
};
function Kr(e) {
  this._internalRoot = e;
}
Kr.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ws();
    e = { blockedOn: null, target: e, priority: t };
    for (var u = 0; u < At.length && t !== 0 && t < At[u].priority; u++);
    At.splice(u, 0, e), u === 0 && Ks(e);
  }
};
function va(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Lo() {}
function qp(e, t, u, n, r) {
  if (r) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var s = wr(l);
        i.call(s);
      };
    }
    var l = pc(t, n, e, 0, null, !1, !1, "", Lo);
    return (
      (e._reactRootContainer = l),
      (e[lt] = l.current),
      Dn(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      l
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var s = wr(o);
      a.call(s);
    };
  }
  var o = Da(e, 0, !1, null, null, !1, !1, "", Lo);
  return (
    (e._reactRootContainer = o),
    (e[lt] = o.current),
    Dn(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      Vr(t, o, u, n);
    }),
    o
  );
}
function Gr(e, t, u, n, r) {
  var i = u._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var o = wr(l);
        a.call(o);
      };
    }
    Vr(t, l, e, r);
  } else l = qp(u, t, e, r, n);
  return wr(l);
}
Us = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var u = Vu(t.pendingLanes);
        u !== 0 &&
          (Rl(t, u | 1), we(t, ne()), !(j & 6) && ((Su = ne() + 500), Pt()));
      }
      break;
    case 13:
      Gt(function () {
        var n = at(e, 1);
        if (n !== null) {
          var r = Ee();
          Ke(n, e, 1, r);
        }
      }),
        ha(e, 1);
  }
};
Il = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var u = Ee();
      Ke(t, e, 134217728, u);
    }
    ha(e, 134217728);
  }
};
Hs = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      u = at(e, t);
    if (u !== null) {
      var n = Ee();
      Ke(u, e, t, n);
    }
    ha(e, t);
  }
};
Ws = function () {
  return W;
};
Vs = function (e, t) {
  var u = W;
  try {
    return (W = e), t();
  } finally {
    W = u;
  }
};
Wi = function (e, t, u) {
  switch (t) {
    case "input":
      if ((Ri(e, u), (t = u.name), u.type === "radio" && t != null)) {
        for (u = e; u.parentNode; ) u = u.parentNode;
        for (
          u = u.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < u.length;
          t++
        ) {
          var n = u[t];
          if (n !== e && n.form === e.form) {
            var r = Ir(n);
            if (!r) throw Error(x(90));
            ys(n), Ri(n, r);
          }
        }
      }
      break;
    case "textarea":
      Fs(e, u);
      break;
    case "select":
      (t = u.value), t != null && du(e, !!u.multiple, t, !1);
  }
};
ks = ca;
Ns = Gt;
var bp = { usingClientEntryPoint: !1, Events: [Sn, ru, Ir, _s, Ts, ca] },
  ju = {
    findFiberByHostInstance: Mt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ed = {
    bundleType: ju.bundleType,
    version: ju.version,
    rendererPackageName: ju.rendererPackageName,
    rendererConfig: ju.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: st.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ls(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ju.findFiberByHostInstance || Zp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kn.isDisabled && Kn.supportsFiber)
    try {
      (Or = Kn.inject(ed)), (qe = Kn);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bp;
Ne.createPortal = function (e, t) {
  var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!va(t)) throw Error(x(200));
  return Jp(e, t, null, u);
};
Ne.createRoot = function (e, t) {
  if (!va(e)) throw Error(x(299));
  var u = !1,
    n = "",
    r = dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (u = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Da(e, 1, !1, null, null, u, !1, n, r)),
    (e[lt] = t.current),
    Dn(e.nodeType === 8 ? e.parentNode : e),
    new Aa(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Ls(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Gt(e);
};
Ne.hydrate = function (e, t, u) {
  if (!Qr(t)) throw Error(x(200));
  return Gr(null, e, t, !0, u);
};
Ne.hydrateRoot = function (e, t, u) {
  if (!va(e)) throw Error(x(405));
  var n = (u != null && u.hydratedSources) || null,
    r = !1,
    i = "",
    l = dc;
  if (
    (u != null &&
      (u.unstable_strictMode === !0 && (r = !0),
      u.identifierPrefix !== void 0 && (i = u.identifierPrefix),
      u.onRecoverableError !== void 0 && (l = u.onRecoverableError)),
    (t = pc(t, null, e, 1, u ?? null, r, !1, i, l)),
    (e[lt] = t.current),
    Dn(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (u = n[e]),
        (r = u._getVersion),
        (r = r(u._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [u, r])
          : t.mutableSourceEagerHydrationData.push(u, r);
  return new Kr(t);
};
Ne.render = function (e, t, u) {
  if (!Qr(t)) throw Error(x(200));
  return Gr(null, e, t, !1, u);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Qr(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Gt(function () {
        Gr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lt] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = ca;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, u, n) {
  if (!Qr(u)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Gr(e, t, u, !1, n);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Dc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc);
    } catch (e) {
      console.error(e);
    }
}
Dc(), (ps.exports = Ne);
var hc = ps.exports;
const ug = Pr(hc);
function td() {
  (this.__data__ = []), (this.size = 0);
}
var ud = td;
function nd(e, t) {
  return e === t || (e !== e && t !== t);
}
var Ac = nd,
  rd = Ac;
function id(e, t) {
  for (var u = e.length; u--; ) if (rd(e[u][0], t)) return u;
  return -1;
}
var Yr = id,
  ld = Yr,
  ad = Array.prototype,
  od = ad.splice;
function sd(e) {
  var t = this.__data__,
    u = ld(t, e);
  if (u < 0) return !1;
  var n = t.length - 1;
  return u == n ? t.pop() : od.call(t, u, 1), --this.size, !0;
}
var cd = sd,
  fd = Yr;
function pd(e) {
  var t = this.__data__,
    u = fd(t, e);
  return u < 0 ? void 0 : t[u][1];
}
var dd = pd,
  Dd = Yr;
function hd(e) {
  return Dd(this.__data__, e) > -1;
}
var Ad = hd,
  vd = Yr;
function md(e, t) {
  var u = this.__data__,
    n = vd(u, e);
  return n < 0 ? (++this.size, u.push([e, t])) : (u[n][1] = t), this;
}
var Cd = md,
  Ed = ud,
  yd = cd,
  gd = dd,
  Fd = Ad,
  Bd = Cd;
function _u(e) {
  var t = -1,
    u = e == null ? 0 : e.length;
  for (this.clear(); ++t < u; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_u.prototype.clear = Ed;
_u.prototype.delete = yd;
_u.prototype.get = gd;
_u.prototype.has = Fd;
_u.prototype.set = Bd;
var Xr = _u,
  Sd = Xr;
function wd() {
  (this.__data__ = new Sd()), (this.size = 0);
}
var xd = wd;
function _d(e) {
  var t = this.__data__,
    u = t.delete(e);
  return (this.size = t.size), u;
}
var Td = _d;
function kd(e) {
  return this.__data__.get(e);
}
var Nd = kd;
function Pd(e) {
  return this.__data__.has(e);
}
var Od = Pd,
  Ld = typeof Tn == "object" && Tn && Tn.Object === Object && Tn,
  vc = Ld,
  $d = vc,
  Rd = typeof self == "object" && self && self.Object === Object && self,
  Id = $d || Rd || Function("return this")(),
  ct = Id,
  Md = ct,
  zd = Md.Symbol,
  Jr = zd,
  $o = Jr,
  mc = Object.prototype,
  jd = mc.hasOwnProperty,
  Ud = mc.toString,
  Uu = $o ? $o.toStringTag : void 0;
function Hd(e) {
  var t = jd.call(e, Uu),
    u = e[Uu];
  try {
    e[Uu] = void 0;
    var n = !0;
  } catch {}
  var r = Ud.call(e);
  return n && (t ? (e[Uu] = u) : delete e[Uu]), r;
}
var Wd = Hd,
  Vd = Object.prototype,
  Kd = Vd.toString;
function Qd(e) {
  return Kd.call(e);
}
var Gd = Qd,
  Ro = Jr,
  Yd = Wd,
  Xd = Gd,
  Jd = "[object Null]",
  Zd = "[object Undefined]",
  Io = Ro ? Ro.toStringTag : void 0;
function qd(e) {
  return e == null
    ? e === void 0
      ? Zd
      : Jd
    : Io && Io in Object(e)
    ? Yd(e)
    : Xd(e);
}
var xn = qd;
function bd(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ma = bd,
  e1 = xn,
  t1 = ma,
  u1 = "[object AsyncFunction]",
  n1 = "[object Function]",
  r1 = "[object GeneratorFunction]",
  i1 = "[object Proxy]";
function l1(e) {
  if (!t1(e)) return !1;
  var t = e1(e);
  return t == n1 || t == r1 || t == u1 || t == i1;
}
var Ca = l1;
const ng = Pr(Ca);
var a1 = ct,
  o1 = a1["__core-js_shared__"],
  s1 = o1,
  wi = s1,
  Mo = (function () {
    var e = /[^.]+$/.exec((wi && wi.keys && wi.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function c1(e) {
  return !!Mo && Mo in e;
}
var f1 = c1,
  p1 = Function.prototype,
  d1 = p1.toString;
function D1(e) {
  if (e != null) {
    try {
      return d1.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Cc = D1,
  h1 = Ca,
  A1 = f1,
  v1 = ma,
  m1 = Cc,
  C1 = /[\\^$.*+?()[\]{}|]/g,
  E1 = /^\[object .+?Constructor\]$/,
  y1 = Function.prototype,
  g1 = Object.prototype,
  F1 = y1.toString,
  B1 = g1.hasOwnProperty,
  S1 = RegExp(
    "^" +
      F1.call(B1)
        .replace(C1, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function w1(e) {
  if (!v1(e) || A1(e)) return !1;
  var t = h1(e) ? S1 : E1;
  return t.test(m1(e));
}
var x1 = w1;
function _1(e, t) {
  return e == null ? void 0 : e[t];
}
var T1 = _1,
  k1 = x1,
  N1 = T1;
function P1(e, t) {
  var u = N1(e, t);
  return k1(u) ? u : void 0;
}
var Jt = P1,
  O1 = Jt,
  L1 = ct,
  $1 = O1(L1, "Map"),
  Ea = $1,
  R1 = Jt,
  I1 = R1(Object, "create"),
  Zr = I1,
  zo = Zr;
function M1() {
  (this.__data__ = zo ? zo(null) : {}), (this.size = 0);
}
var z1 = M1;
function j1(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var U1 = j1,
  H1 = Zr,
  W1 = "__lodash_hash_undefined__",
  V1 = Object.prototype,
  K1 = V1.hasOwnProperty;
function Q1(e) {
  var t = this.__data__;
  if (H1) {
    var u = t[e];
    return u === W1 ? void 0 : u;
  }
  return K1.call(t, e) ? t[e] : void 0;
}
var G1 = Q1,
  Y1 = Zr,
  X1 = Object.prototype,
  J1 = X1.hasOwnProperty;
function Z1(e) {
  var t = this.__data__;
  return Y1 ? t[e] !== void 0 : J1.call(t, e);
}
var q1 = Z1,
  b1 = Zr,
  eD = "__lodash_hash_undefined__";
function tD(e, t) {
  var u = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (u[e] = b1 && t === void 0 ? eD : t),
    this
  );
}
var uD = tD,
  nD = z1,
  rD = U1,
  iD = G1,
  lD = q1,
  aD = uD;
function Tu(e) {
  var t = -1,
    u = e == null ? 0 : e.length;
  for (this.clear(); ++t < u; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Tu.prototype.clear = nD;
Tu.prototype.delete = rD;
Tu.prototype.get = iD;
Tu.prototype.has = lD;
Tu.prototype.set = aD;
var oD = Tu,
  jo = oD,
  sD = Xr,
  cD = Ea;
function fD() {
  (this.size = 0),
    (this.__data__ = {
      hash: new jo(),
      map: new (cD || sD)(),
      string: new jo(),
    });
}
var pD = fD;
function dD(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var DD = dD,
  hD = DD;
function AD(e, t) {
  var u = e.__data__;
  return hD(t) ? u[typeof t == "string" ? "string" : "hash"] : u.map;
}
var qr = AD,
  vD = qr;
function mD(e) {
  var t = vD(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var CD = mD,
  ED = qr;
function yD(e) {
  return ED(this, e).get(e);
}
var gD = yD,
  FD = qr;
function BD(e) {
  return FD(this, e).has(e);
}
var SD = BD,
  wD = qr;
function xD(e, t) {
  var u = wD(this, e),
    n = u.size;
  return u.set(e, t), (this.size += u.size == n ? 0 : 1), this;
}
var _D = xD,
  TD = pD,
  kD = CD,
  ND = gD,
  PD = SD,
  OD = _D;
function ku(e) {
  var t = -1,
    u = e == null ? 0 : e.length;
  for (this.clear(); ++t < u; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ku.prototype.clear = TD;
ku.prototype.delete = kD;
ku.prototype.get = ND;
ku.prototype.has = PD;
ku.prototype.set = OD;
var ya = ku,
  LD = Xr,
  $D = Ea,
  RD = ya,
  ID = 200;
function MD(e, t) {
  var u = this.__data__;
  if (u instanceof LD) {
    var n = u.__data__;
    if (!$D || n.length < ID - 1)
      return n.push([e, t]), (this.size = ++u.size), this;
    u = this.__data__ = new RD(n);
  }
  return u.set(e, t), (this.size = u.size), this;
}
var zD = MD,
  jD = Xr,
  UD = xd,
  HD = Td,
  WD = Nd,
  VD = Od,
  KD = zD;
function Nu(e) {
  var t = (this.__data__ = new jD(e));
  this.size = t.size;
}
Nu.prototype.clear = UD;
Nu.prototype.delete = HD;
Nu.prototype.get = WD;
Nu.prototype.has = VD;
Nu.prototype.set = KD;
var Ec = Nu,
  QD = Jt,
  GD = (function () {
    try {
      var e = QD(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  YD = GD,
  Uo = YD;
function XD(e, t, u) {
  t == "__proto__" && Uo
    ? Uo(e, t, { configurable: !0, enumerable: !0, value: u, writable: !0 })
    : (e[t] = u);
}
var JD = XD;
function ZD(e) {
  return function (t, u, n) {
    for (var r = -1, i = Object(t), l = n(t), a = l.length; a--; ) {
      var o = l[e ? a : ++r];
      if (u(i[o], o, i) === !1) break;
    }
    return t;
  };
}
var qD = ZD,
  bD = qD,
  eh = bD(),
  th = eh,
  uh = ct,
  nh = uh.Uint8Array,
  rh = nh;
function ih(e, t) {
  return function (u) {
    return e(t(u));
  };
}
var yc = ih,
  lh = yc,
  ah = lh(Object.getPrototypeOf, Object),
  rg = ah,
  oh = Object.prototype;
function sh(e) {
  var t = e && e.constructor,
    u = (typeof t == "function" && t.prototype) || oh;
  return e === u;
}
var ch = sh;
function fh(e) {
  return e != null && typeof e == "object";
}
var _n = fh,
  ph = xn,
  dh = _n,
  Dh = "[object Arguments]";
function hh(e) {
  return dh(e) && ph(e) == Dh;
}
var Ah = hh,
  Ho = Ah,
  vh = _n,
  gc = Object.prototype,
  mh = gc.hasOwnProperty,
  Ch = gc.propertyIsEnumerable,
  Eh = Ho(
    (function () {
      return arguments;
    })()
  )
    ? Ho
    : function (e) {
        return vh(e) && mh.call(e, "callee") && !Ch.call(e, "callee");
      },
  Fc = Eh,
  yh = Array.isArray,
  Ot = yh,
  gh = 9007199254740991;
function Fh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gh;
}
var ga = Fh,
  Bh = Ca,
  Sh = ga;
function wh(e) {
  return e != null && Sh(e.length) && !Bh(e);
}
var xh = wh,
  xr = { exports: {} };
function _h() {
  return !1;
}
var Th = _h;
xr.exports;
(function (e, t) {
  var u = ct,
    n = Th,
    r = t && !t.nodeType && t,
    i = r && !0 && e && !e.nodeType && e,
    l = i && i.exports === r,
    a = l ? u.Buffer : void 0,
    o = a ? a.isBuffer : void 0,
    s = o || n;
  e.exports = s;
})(xr, xr.exports);
var Bc = xr.exports,
  kh = xn,
  Nh = ga,
  Ph = _n,
  Oh = "[object Arguments]",
  Lh = "[object Array]",
  $h = "[object Boolean]",
  Rh = "[object Date]",
  Ih = "[object Error]",
  Mh = "[object Function]",
  zh = "[object Map]",
  jh = "[object Number]",
  Uh = "[object Object]",
  Hh = "[object RegExp]",
  Wh = "[object Set]",
  Vh = "[object String]",
  Kh = "[object WeakMap]",
  Qh = "[object ArrayBuffer]",
  Gh = "[object DataView]",
  Yh = "[object Float32Array]",
  Xh = "[object Float64Array]",
  Jh = "[object Int8Array]",
  Zh = "[object Int16Array]",
  qh = "[object Int32Array]",
  bh = "[object Uint8Array]",
  eA = "[object Uint8ClampedArray]",
  tA = "[object Uint16Array]",
  uA = "[object Uint32Array]",
  Y = {};
Y[Yh] = Y[Xh] = Y[Jh] = Y[Zh] = Y[qh] = Y[bh] = Y[eA] = Y[tA] = Y[uA] = !0;
Y[Oh] =
  Y[Lh] =
  Y[Qh] =
  Y[$h] =
  Y[Gh] =
  Y[Rh] =
  Y[Ih] =
  Y[Mh] =
  Y[zh] =
  Y[jh] =
  Y[Uh] =
  Y[Hh] =
  Y[Wh] =
  Y[Vh] =
  Y[Kh] =
    !1;
function nA(e) {
  return Ph(e) && Nh(e.length) && !!Y[kh(e)];
}
var rA = nA;
function iA(e) {
  return function (t) {
    return e(t);
  };
}
var lA = iA,
  _r = { exports: {} };
_r.exports;
(function (e, t) {
  var u = vc,
    n = t && !t.nodeType && t,
    r = n && !0 && e && !e.nodeType && e,
    i = r && r.exports === n,
    l = i && u.process,
    a = (function () {
      try {
        var o = r && r.require && r.require("util").types;
        return o || (l && l.binding && l.binding("util"));
      } catch {}
    })();
  e.exports = a;
})(_r, _r.exports);
var aA = _r.exports,
  oA = rA,
  sA = lA,
  Wo = aA,
  Vo = Wo && Wo.isTypedArray,
  cA = Vo ? sA(Vo) : oA,
  Sc = cA;
function fA(e, t) {
  for (var u = -1, n = Array(e); ++u < e; ) n[u] = t(u);
  return n;
}
var pA = fA,
  dA = 9007199254740991,
  DA = /^(?:0|[1-9]\d*)$/;
function hA(e, t) {
  var u = typeof e;
  return (
    (t = t ?? dA),
    !!t &&
      (u == "number" || (u != "symbol" && DA.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var wc = hA,
  AA = pA,
  vA = Fc,
  mA = Ot,
  CA = Bc,
  EA = wc,
  yA = Sc,
  gA = Object.prototype,
  FA = gA.hasOwnProperty;
function BA(e, t) {
  var u = mA(e),
    n = !u && vA(e),
    r = !u && !n && CA(e),
    i = !u && !n && !r && yA(e),
    l = u || n || r || i,
    a = l ? AA(e.length, String) : [],
    o = a.length;
  for (var s in e)
    (t || FA.call(e, s)) &&
      !(
        l &&
        (s == "length" ||
          (r && (s == "offset" || s == "parent")) ||
          (i && (s == "buffer" || s == "byteLength" || s == "byteOffset")) ||
          EA(s, o))
      ) &&
      a.push(s);
  return a;
}
var SA = BA;
function wA(e) {
  return e;
}
var xA = wA,
  _A = "__lodash_hash_undefined__";
function TA(e) {
  return this.__data__.set(e, _A), this;
}
var kA = TA;
function NA(e) {
  return this.__data__.has(e);
}
var PA = NA,
  OA = ya,
  LA = kA,
  $A = PA;
function Tr(e) {
  var t = -1,
    u = e == null ? 0 : e.length;
  for (this.__data__ = new OA(); ++t < u; ) this.add(e[t]);
}
Tr.prototype.add = Tr.prototype.push = LA;
Tr.prototype.has = $A;
var RA = Tr;
function IA(e, t) {
  for (var u = -1, n = e == null ? 0 : e.length; ++u < n; )
    if (t(e[u], u, e)) return !0;
  return !1;
}
var MA = IA;
function zA(e, t) {
  return e.has(t);
}
var jA = zA,
  UA = RA,
  HA = MA,
  WA = jA,
  VA = 1,
  KA = 2;
function QA(e, t, u, n, r, i) {
  var l = u & VA,
    a = e.length,
    o = t.length;
  if (a != o && !(l && o > a)) return !1;
  var s = i.get(e),
    E = i.get(t);
  if (s && E) return s == t && E == e;
  var v = -1,
    c = !0,
    F = u & KA ? new UA() : void 0;
  for (i.set(e, t), i.set(t, e); ++v < a; ) {
    var g = e[v],
      m = t[v];
    if (n) var _ = l ? n(m, g, v, t, e, i) : n(g, m, v, e, t, i);
    if (_ !== void 0) {
      if (_) continue;
      c = !1;
      break;
    }
    if (F) {
      if (
        !HA(t, function (p, f) {
          if (!WA(F, f) && (g === p || r(g, p, u, n, i))) return F.push(f);
        })
      ) {
        c = !1;
        break;
      }
    } else if (!(g === m || r(g, m, u, n, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), c;
}
var xc = QA;
function GA(e) {
  var t = -1,
    u = Array(e.size);
  return (
    e.forEach(function (n, r) {
      u[++t] = [r, n];
    }),
    u
  );
}
var YA = GA;
function XA(e) {
  var t = -1,
    u = Array(e.size);
  return (
    e.forEach(function (n) {
      u[++t] = n;
    }),
    u
  );
}
var JA = XA,
  Ko = Jr,
  Qo = rh,
  ZA = Ac,
  qA = xc,
  bA = YA,
  ev = JA,
  tv = 1,
  uv = 2,
  nv = "[object Boolean]",
  rv = "[object Date]",
  iv = "[object Error]",
  lv = "[object Map]",
  av = "[object Number]",
  ov = "[object RegExp]",
  sv = "[object Set]",
  cv = "[object String]",
  fv = "[object Symbol]",
  pv = "[object ArrayBuffer]",
  dv = "[object DataView]",
  Go = Ko ? Ko.prototype : void 0,
  xi = Go ? Go.valueOf : void 0;
function Dv(e, t, u, n, r, i, l) {
  switch (u) {
    case dv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case pv:
      return !(e.byteLength != t.byteLength || !i(new Qo(e), new Qo(t)));
    case nv:
    case rv:
    case av:
      return ZA(+e, +t);
    case iv:
      return e.name == t.name && e.message == t.message;
    case ov:
    case cv:
      return e == t + "";
    case lv:
      var a = bA;
    case sv:
      var o = n & tv;
      if ((a || (a = ev), e.size != t.size && !o)) return !1;
      var s = l.get(e);
      if (s) return s == t;
      (n |= uv), l.set(e, t);
      var E = qA(a(e), a(t), n, r, i, l);
      return l.delete(e), E;
    case fv:
      if (xi) return xi.call(e) == xi.call(t);
  }
  return !1;
}
var hv = Dv;
function Av(e, t) {
  for (var u = -1, n = t.length, r = e.length; ++u < n; ) e[r + u] = t[u];
  return e;
}
var vv = Av,
  mv = vv,
  Cv = Ot;
function Ev(e, t, u) {
  var n = t(e);
  return Cv(e) ? n : mv(n, u(e));
}
var yv = Ev;
function gv(e, t) {
  for (var u = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++u < n; ) {
    var l = e[u];
    t(l, u, e) && (i[r++] = l);
  }
  return i;
}
var Fv = gv;
function Bv() {
  return [];
}
var Sv = Bv,
  wv = Fv,
  xv = Sv,
  _v = Object.prototype,
  Tv = _v.propertyIsEnumerable,
  Yo = Object.getOwnPropertySymbols,
  kv = Yo
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            wv(Yo(e), function (t) {
              return Tv.call(e, t);
            }));
      }
    : xv,
  Nv = kv,
  Pv = yc,
  Ov = Pv(Object.keys, Object),
  Lv = Ov,
  $v = ch,
  Rv = Lv,
  Iv = Object.prototype,
  Mv = Iv.hasOwnProperty;
function zv(e) {
  if (!$v(e)) return Rv(e);
  var t = [];
  for (var u in Object(e)) Mv.call(e, u) && u != "constructor" && t.push(u);
  return t;
}
var jv = zv,
  Uv = SA,
  Hv = jv,
  Wv = xh;
function Vv(e) {
  return Wv(e) ? Uv(e) : Hv(e);
}
var Fa = Vv,
  Kv = yv,
  Qv = Nv,
  Gv = Fa;
function Yv(e) {
  return Kv(e, Gv, Qv);
}
var Xv = Yv,
  Xo = Xv,
  Jv = 1,
  Zv = Object.prototype,
  qv = Zv.hasOwnProperty;
function bv(e, t, u, n, r, i) {
  var l = u & Jv,
    a = Xo(e),
    o = a.length,
    s = Xo(t),
    E = s.length;
  if (o != E && !l) return !1;
  for (var v = o; v--; ) {
    var c = a[v];
    if (!(l ? c in t : qv.call(t, c))) return !1;
  }
  var F = i.get(e),
    g = i.get(t);
  if (F && g) return F == t && g == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var _ = l; ++v < o; ) {
    c = a[v];
    var p = e[c],
      f = t[c];
    if (n) var D = l ? n(f, p, c, t, e, i) : n(p, f, c, e, t, i);
    if (!(D === void 0 ? p === f || r(p, f, u, n, i) : D)) {
      m = !1;
      break;
    }
    _ || (_ = c == "constructor");
  }
  if (m && !_) {
    var S = e.constructor,
      w = t.constructor;
    S != w &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof S == "function" &&
        S instanceof S &&
        typeof w == "function" &&
        w instanceof w
      ) &&
      (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var em = bv,
  tm = Jt,
  um = ct,
  nm = tm(um, "DataView"),
  rm = nm,
  im = Jt,
  lm = ct,
  am = im(lm, "Promise"),
  om = am,
  sm = Jt,
  cm = ct,
  fm = sm(cm, "Set"),
  pm = fm,
  dm = Jt,
  Dm = ct,
  hm = dm(Dm, "WeakMap"),
  Am = hm,
  gl = rm,
  Fl = Ea,
  Bl = om,
  Sl = pm,
  wl = Am,
  _c = xn,
  Pu = Cc,
  Jo = "[object Map]",
  vm = "[object Object]",
  Zo = "[object Promise]",
  qo = "[object Set]",
  bo = "[object WeakMap]",
  es = "[object DataView]",
  mm = Pu(gl),
  Cm = Pu(Fl),
  Em = Pu(Bl),
  ym = Pu(Sl),
  gm = Pu(wl),
  It = _c;
((gl && It(new gl(new ArrayBuffer(1))) != es) ||
  (Fl && It(new Fl()) != Jo) ||
  (Bl && It(Bl.resolve()) != Zo) ||
  (Sl && It(new Sl()) != qo) ||
  (wl && It(new wl()) != bo)) &&
  (It = function (e) {
    var t = _c(e),
      u = t == vm ? e.constructor : void 0,
      n = u ? Pu(u) : "";
    if (n)
      switch (n) {
        case mm:
          return es;
        case Cm:
          return Jo;
        case Em:
          return Zo;
        case ym:
          return qo;
        case gm:
          return bo;
      }
    return t;
  });
var Fm = It,
  _i = Ec,
  Bm = xc,
  Sm = hv,
  wm = em,
  ts = Fm,
  us = Ot,
  ns = Bc,
  xm = Sc,
  _m = 1,
  rs = "[object Arguments]",
  is = "[object Array]",
  Qn = "[object Object]",
  Tm = Object.prototype,
  ls = Tm.hasOwnProperty;
function km(e, t, u, n, r, i) {
  var l = us(e),
    a = us(t),
    o = l ? is : ts(e),
    s = a ? is : ts(t);
  (o = o == rs ? Qn : o), (s = s == rs ? Qn : s);
  var E = o == Qn,
    v = s == Qn,
    c = o == s;
  if (c && ns(e)) {
    if (!ns(t)) return !1;
    (l = !0), (E = !1);
  }
  if (c && !E)
    return (
      i || (i = new _i()),
      l || xm(e) ? Bm(e, t, u, n, r, i) : Sm(e, t, o, u, n, r, i)
    );
  if (!(u & _m)) {
    var F = E && ls.call(e, "__wrapped__"),
      g = v && ls.call(t, "__wrapped__");
    if (F || g) {
      var m = F ? e.value() : e,
        _ = g ? t.value() : t;
      return i || (i = new _i()), r(m, _, u, n, i);
    }
  }
  return c ? (i || (i = new _i()), wm(e, t, u, n, r, i)) : !1;
}
var Nm = km,
  Pm = Nm,
  as = _n;
function Tc(e, t, u, n, r) {
  return e === t
    ? !0
    : e == null || t == null || (!as(e) && !as(t))
    ? e !== e && t !== t
    : Pm(e, t, u, n, Tc, r);
}
var kc = Tc,
  Om = th,
  Lm = Fa;
function $m(e, t) {
  return e && Om(e, t, Lm);
}
var Rm = $m,
  Im = Ec,
  Mm = kc,
  zm = 1,
  jm = 2;
function Um(e, t, u, n) {
  var r = u.length,
    i = r,
    l = !n;
  if (e == null) return !i;
  for (e = Object(e); r--; ) {
    var a = u[r];
    if (l && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
  }
  for (; ++r < i; ) {
    a = u[r];
    var o = a[0],
      s = e[o],
      E = a[1];
    if (l && a[2]) {
      if (s === void 0 && !(o in e)) return !1;
    } else {
      var v = new Im();
      if (n) var c = n(s, E, o, e, t, v);
      if (!(c === void 0 ? Mm(E, s, zm | jm, n, v) : c)) return !1;
    }
  }
  return !0;
}
var Hm = Um,
  Wm = ma;
function Vm(e) {
  return e === e && !Wm(e);
}
var Nc = Vm,
  Km = Nc,
  Qm = Fa;
function Gm(e) {
  for (var t = Qm(e), u = t.length; u--; ) {
    var n = t[u],
      r = e[n];
    t[u] = [n, r, Km(r)];
  }
  return t;
}
var Ym = Gm;
function Xm(e, t) {
  return function (u) {
    return u == null ? !1 : u[e] === t && (t !== void 0 || e in Object(u));
  };
}
var Pc = Xm,
  Jm = Hm,
  Zm = Ym,
  qm = Pc;
function bm(e) {
  var t = Zm(e);
  return t.length == 1 && t[0][2]
    ? qm(t[0][0], t[0][1])
    : function (u) {
        return u === e || Jm(u, e, t);
      };
}
var eC = bm,
  tC = xn,
  uC = _n,
  nC = "[object Symbol]";
function rC(e) {
  return typeof e == "symbol" || (uC(e) && tC(e) == nC);
}
var Ba = rC,
  iC = Ot,
  lC = Ba,
  aC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  oC = /^\w*$/;
function sC(e, t) {
  if (iC(e)) return !1;
  var u = typeof e;
  return u == "number" || u == "symbol" || u == "boolean" || e == null || lC(e)
    ? !0
    : oC.test(e) || !aC.test(e) || (t != null && e in Object(t));
}
var Sa = sC,
  Oc = ya,
  cC = "Expected a function";
function wa(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(cC);
  var u = function () {
    var n = arguments,
      r = t ? t.apply(this, n) : n[0],
      i = u.cache;
    if (i.has(r)) return i.get(r);
    var l = e.apply(this, n);
    return (u.cache = i.set(r, l) || i), l;
  };
  return (u.cache = new (wa.Cache || Oc)()), u;
}
wa.Cache = Oc;
var fC = wa,
  pC = fC,
  dC = 500;
function DC(e) {
  var t = pC(e, function (n) {
      return u.size === dC && u.clear(), n;
    }),
    u = t.cache;
  return t;
}
var hC = DC,
  AC = hC,
  vC =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  mC = /\\(\\)?/g,
  CC = AC(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(vC, function (u, n, r, i) {
        t.push(r ? i.replace(mC, "$1") : n || u);
      }),
      t
    );
  }),
  EC = CC;
function yC(e, t) {
  for (var u = -1, n = e == null ? 0 : e.length, r = Array(n); ++u < n; )
    r[u] = t(e[u], u, e);
  return r;
}
var gC = yC,
  os = Jr,
  FC = gC,
  BC = Ot,
  SC = Ba,
  wC = 1 / 0,
  ss = os ? os.prototype : void 0,
  cs = ss ? ss.toString : void 0;
function Lc(e) {
  if (typeof e == "string") return e;
  if (BC(e)) return FC(e, Lc) + "";
  if (SC(e)) return cs ? cs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -wC ? "-0" : t;
}
var xC = Lc,
  _C = xC;
function TC(e) {
  return e == null ? "" : _C(e);
}
var kC = TC,
  NC = Ot,
  PC = Sa,
  OC = EC,
  LC = kC;
function $C(e, t) {
  return NC(e) ? e : PC(e, t) ? [e] : OC(LC(e));
}
var $c = $C,
  RC = Ba,
  IC = 1 / 0;
function MC(e) {
  if (typeof e == "string" || RC(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -IC ? "-0" : t;
}
var br = MC,
  zC = $c,
  jC = br;
function UC(e, t) {
  t = zC(t, e);
  for (var u = 0, n = t.length; e != null && u < n; ) e = e[jC(t[u++])];
  return u && u == n ? e : void 0;
}
var Rc = UC,
  HC = Rc;
function WC(e, t, u) {
  var n = e == null ? void 0 : HC(e, t);
  return n === void 0 ? u : n;
}
var VC = WC;
function KC(e, t) {
  return e != null && t in Object(e);
}
var QC = KC,
  GC = $c,
  YC = Fc,
  XC = Ot,
  JC = wc,
  ZC = ga,
  qC = br;
function bC(e, t, u) {
  t = GC(t, e);
  for (var n = -1, r = t.length, i = !1; ++n < r; ) {
    var l = qC(t[n]);
    if (!(i = e != null && u(e, l))) break;
    e = e[l];
  }
  return i || ++n != r
    ? i
    : ((r = e == null ? 0 : e.length),
      !!r && ZC(r) && JC(l, r) && (XC(e) || YC(e)));
}
var eE = bC,
  tE = QC,
  uE = eE;
function nE(e, t) {
  return e != null && uE(e, t, tE);
}
var rE = nE,
  iE = kc,
  lE = VC,
  aE = rE,
  oE = Sa,
  sE = Nc,
  cE = Pc,
  fE = br,
  pE = 1,
  dE = 2;
function DE(e, t) {
  return oE(e) && sE(t)
    ? cE(fE(e), t)
    : function (u) {
        var n = lE(u, e);
        return n === void 0 && n === t ? aE(u, e) : iE(t, n, pE | dE);
      };
}
var hE = DE;
function AE(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var vE = AE,
  mE = Rc;
function CE(e) {
  return function (t) {
    return mE(t, e);
  };
}
var EE = CE,
  yE = vE,
  gE = EE,
  FE = Sa,
  BE = br;
function SE(e) {
  return FE(e) ? yE(BE(e)) : gE(e);
}
var wE = SE,
  xE = eC,
  _E = hE,
  TE = xA,
  kE = Ot,
  NE = wE;
function PE(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? TE
    : typeof e == "object"
    ? kE(e)
      ? _E(e[0], e[1])
      : xE(e)
    : NE(e);
}
var OE = PE,
  LE = JD,
  $E = Rm,
  RE = OE;
function IE(e, t) {
  var u = {};
  return (
    (t = RE(t)),
    $E(e, function (n, r, i) {
      LE(u, r, t(n, r, i));
    }),
    u
  );
}
var ME = IE;
const zE = Pr(ME);
var xl = {},
  fs = hc;
(xl.createRoot = fs.createRoot), (xl.hydrateRoot = fs.hydrateRoot);
var kr = new Map(),
  jE = ({ callback: e, children: t }) => {
    let u = Ti.useRef();
    return (
      Ti.useLayoutEffect(() => {
        u.current !== e && ((u.current = e), e());
      }, [e]),
      t
    );
  },
  ig = async (e, t) => {
    let u = await UE(t);
    return new Promise((n) => {
      u.render(Jc.createElement(jE, { callback: () => n(null) }, e));
    });
  },
  lg = (e, t) => {
    let u = kr.get(e);
    u && (u.unmount(), kr.delete(e));
  },
  UE = async (e) => {
    let t = kr.get(e);
    return t || ((t = xl.createRoot(e)), kr.set(e, t)), t;
  },
  Ic = {},
  nn = {},
  Mc = { exports: {} };
(function () {
  function e(l) {
    if (l == null) return !1;
    switch (l.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function t(l) {
    if (l == null) return !1;
    switch (l.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function u(l) {
    if (l == null) return !1;
    switch (l.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function n(l) {
    return u(l) || (l != null && l.type === "FunctionDeclaration");
  }
  function r(l) {
    switch (l.type) {
      case "IfStatement":
        return l.alternate != null ? l.alternate : l.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return l.body;
    }
    return null;
  }
  function i(l) {
    var a;
    if (l.type !== "IfStatement" || l.alternate == null) return !1;
    a = l.consequent;
    do {
      if (a.type === "IfStatement" && a.alternate == null) return !0;
      a = r(a);
    } while (a);
    return !1;
  }
  Mc.exports = {
    isExpression: e,
    isStatement: u,
    isIterationStatement: t,
    isSourceElement: n,
    isProblematicIfStatement: i,
    trailingStatement: r,
  };
})();
var HE = Mc.exports,
  zc = { exports: {} };
(function () {
  var e, t, u, n, r, i;
  (t = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (e = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function l(_) {
    return 48 <= _ && _ <= 57;
  }
  function a(_) {
    return (
      (48 <= _ && _ <= 57) || (97 <= _ && _ <= 102) || (65 <= _ && _ <= 70)
    );
  }
  function o(_) {
    return _ >= 48 && _ <= 55;
  }
  u = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279,
  ];
  function s(_) {
    return (
      _ === 32 ||
      _ === 9 ||
      _ === 11 ||
      _ === 12 ||
      _ === 160 ||
      (_ >= 5760 && u.indexOf(_) >= 0)
    );
  }
  function E(_) {
    return _ === 10 || _ === 13 || _ === 8232 || _ === 8233;
  }
  function v(_) {
    if (_ <= 65535) return String.fromCharCode(_);
    var p = String.fromCharCode(Math.floor((_ - 65536) / 1024) + 55296),
      f = String.fromCharCode(((_ - 65536) % 1024) + 56320);
    return p + f;
  }
  for (n = new Array(128), i = 0; i < 128; ++i)
    n[i] =
      (i >= 97 && i <= 122) || (i >= 65 && i <= 90) || i === 36 || i === 95;
  for (r = new Array(128), i = 0; i < 128; ++i)
    r[i] =
      (i >= 97 && i <= 122) ||
      (i >= 65 && i <= 90) ||
      (i >= 48 && i <= 57) ||
      i === 36 ||
      i === 95;
  function c(_) {
    return _ < 128 ? n[_] : t.NonAsciiIdentifierStart.test(v(_));
  }
  function F(_) {
    return _ < 128 ? r[_] : t.NonAsciiIdentifierPart.test(v(_));
  }
  function g(_) {
    return _ < 128 ? n[_] : e.NonAsciiIdentifierStart.test(v(_));
  }
  function m(_) {
    return _ < 128 ? r[_] : e.NonAsciiIdentifierPart.test(v(_));
  }
  zc.exports = {
    isDecimalDigit: l,
    isHexDigit: a,
    isOctalDigit: o,
    isWhiteSpace: s,
    isLineTerminator: E,
    isIdentifierStartES5: c,
    isIdentifierPartES5: F,
    isIdentifierStartES6: g,
    isIdentifierPartES6: m,
  };
})();
var jc = zc.exports,
  Uc = { exports: {} };
(function () {
  var e = jc;
  function t(c) {
    switch (c) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function u(c, F) {
    return !F && c === "yield" ? !1 : n(c, F);
  }
  function n(c, F) {
    if (F && t(c)) return !0;
    switch (c.length) {
      case 2:
        return c === "if" || c === "in" || c === "do";
      case 3:
        return c === "var" || c === "for" || c === "new" || c === "try";
      case 4:
        return (
          c === "this" ||
          c === "else" ||
          c === "case" ||
          c === "void" ||
          c === "with" ||
          c === "enum"
        );
      case 5:
        return (
          c === "while" ||
          c === "break" ||
          c === "catch" ||
          c === "throw" ||
          c === "const" ||
          c === "yield" ||
          c === "class" ||
          c === "super"
        );
      case 6:
        return (
          c === "return" ||
          c === "typeof" ||
          c === "delete" ||
          c === "switch" ||
          c === "export" ||
          c === "import"
        );
      case 7:
        return c === "default" || c === "finally" || c === "extends";
      case 8:
        return c === "function" || c === "continue" || c === "debugger";
      case 10:
        return c === "instanceof";
      default:
        return !1;
    }
  }
  function r(c, F) {
    return c === "null" || c === "true" || c === "false" || u(c, F);
  }
  function i(c, F) {
    return c === "null" || c === "true" || c === "false" || n(c, F);
  }
  function l(c) {
    return c === "eval" || c === "arguments";
  }
  function a(c) {
    var F, g, m;
    if (c.length === 0 || ((m = c.charCodeAt(0)), !e.isIdentifierStartES5(m)))
      return !1;
    for (F = 1, g = c.length; F < g; ++F)
      if (((m = c.charCodeAt(F)), !e.isIdentifierPartES5(m))) return !1;
    return !0;
  }
  function o(c, F) {
    return (c - 55296) * 1024 + (F - 56320) + 65536;
  }
  function s(c) {
    var F, g, m, _, p;
    if (c.length === 0) return !1;
    for (p = e.isIdentifierStartES6, F = 0, g = c.length; F < g; ++F) {
      if (((m = c.charCodeAt(F)), 55296 <= m && m <= 56319)) {
        if (
          (++F, F >= g || ((_ = c.charCodeAt(F)), !(56320 <= _ && _ <= 57343)))
        )
          return !1;
        m = o(m, _);
      }
      if (!p(m)) return !1;
      p = e.isIdentifierPartES6;
    }
    return !0;
  }
  function E(c, F) {
    return a(c) && !r(c, F);
  }
  function v(c, F) {
    return s(c) && !i(c, F);
  }
  Uc.exports = {
    isKeywordES5: u,
    isKeywordES6: n,
    isReservedWordES5: r,
    isReservedWordES6: i,
    isRestrictedWord: l,
    isIdentifierNameES5: a,
    isIdentifierNameES6: s,
    isIdentifierES5: E,
    isIdentifierES6: v,
  };
})();
var WE = Uc.exports;
(function () {
  (nn.ast = HE), (nn.code = jc), (nn.keyword = WE);
})();
var Qu = {},
  fu = {};
const VE = "doctrine",
  KE = "JSDoc parser",
  QE = "https://github.com/eslint/doctrine",
  GE = "lib/doctrine.js",
  YE = "3.0.0",
  XE = { node: ">=6.0.0" },
  JE = { lib: "./lib" },
  ZE = ["lib"],
  qE = [
    {
      name: "Nicholas C. Zakas",
      email: "nicholas+npm@nczconsulting.com",
      web: "https://www.nczonline.net",
    },
    {
      name: "Yusuke Suzuki",
      email: "utatane.tea@gmail.com",
      web: "https://github.com/Constellation",
    },
  ],
  bE = "eslint/doctrine",
  ey = {
    "coveralls": "^3.0.1",
    "dateformat": "^1.0.11",
    "eslint": "^1.10.3",
    "eslint-release": "^1.0.0",
    "linefix": "^0.1.1",
    "mocha": "^3.4.2",
    "npm-license": "^0.3.1",
    "nyc": "^10.3.2",
    "semver": "^5.0.3",
    "shelljs": "^0.5.3",
    "shelljs-nodecli": "^0.1.1",
    "should": "^5.0.1",
  },
  ty = "Apache-2.0",
  uy = {
    "pretest": "npm run lint",
    "test": "nyc mocha",
    "coveralls": "nyc report --reporter=text-lcov | coveralls",
    "lint": "eslint lib/",
    "generate-release": "eslint-generate-release",
    "generate-alpharelease": "eslint-generate-prerelease alpha",
    "generate-betarelease": "eslint-generate-prerelease beta",
    "generate-rcrelease": "eslint-generate-prerelease rc",
    "publish-release": "eslint-publish-release",
  },
  ny = { esutils: "^2.0.2" },
  ry = {
    name: VE,
    description: KE,
    homepage: QE,
    main: GE,
    version: YE,
    engines: XE,
    directories: JE,
    files: ZE,
    maintainers: qE,
    repository: bE,
    devDependencies: ey,
    license: ty,
    scripts: uy,
    dependencies: ny,
  };
function iy(e, t) {
  if (!e) throw new Error(t || "unknown assertion error");
}
var ly = iy;
(function () {
  var e;
  (e = ry.version), (fu.VERSION = e);
  function t(n) {
    (this.name = "DoctrineError"), (this.message = n);
  }
  (t.prototype = (function () {
    var n = function () {};
    return (n.prototype = Error.prototype), new n();
  })()),
    (t.prototype.constructor = t),
    (fu.DoctrineError = t);
  function u(n) {
    throw new t(n);
  }
  (fu.throwError = u), (fu.assert = ly);
})();
(function () {
  var e, t, u, n, r, i, l, a, o, s, E, v;
  (o = nn),
    (s = fu),
    (e = {
      NullableLiteral: "NullableLiteral",
      AllLiteral: "AllLiteral",
      NullLiteral: "NullLiteral",
      UndefinedLiteral: "UndefinedLiteral",
      VoidLiteral: "VoidLiteral",
      UnionType: "UnionType",
      ArrayType: "ArrayType",
      RecordType: "RecordType",
      FieldType: "FieldType",
      FunctionType: "FunctionType",
      ParameterType: "ParameterType",
      RestType: "RestType",
      NonNullableType: "NonNullableType",
      OptionalType: "OptionalType",
      NullableType: "NullableType",
      NameExpression: "NameExpression",
      TypeApplication: "TypeApplication",
      StringLiteralType: "StringLiteralType",
      NumericLiteralType: "NumericLiteralType",
      BooleanLiteralType: "BooleanLiteralType",
    }),
    (t = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function c(d) {
    return (
      "><(){}[],:*|?!=".indexOf(String.fromCharCode(d)) === -1 &&
      !o.code.isWhiteSpace(d) &&
      !o.code.isLineTerminator(d)
    );
  }
  function F(d, h, L, y) {
    (this._previous = d),
      (this._index = h),
      (this._token = L),
      (this._value = y);
  }
  (F.prototype.restore = function () {
    (i = this._previous),
      (r = this._index),
      (l = this._token),
      (a = this._value);
  }),
    (F.save = function () {
      return new F(i, r, l, a);
    });
  function g(d, h) {
    return v && (d.range = [h[0] + E, h[1] + E]), d;
  }
  function m() {
    var d = u.charAt(r);
    return (r += 1), d;
  }
  function _(d) {
    var h,
      L,
      y,
      C = 0;
    for (L = d === "u" ? 4 : 2, h = 0; h < L; ++h)
      if (r < n && o.code.isHexDigit(u.charCodeAt(r)))
        (y = m()), (C = C * 16 + "0123456789abcdef".indexOf(y.toLowerCase()));
      else return "";
    return String.fromCharCode(C);
  }
  function p() {
    var d = "",
      h,
      L,
      y,
      C,
      P;
    for (h = u.charAt(r), ++r; r < n; )
      if (((L = m()), L === h)) {
        h = "";
        break;
      } else if (L === "\\")
        if (((L = m()), o.code.isLineTerminator(L.charCodeAt(0))))
          L === "\r" && u.charCodeAt(r) === 10 && ++r;
        else
          switch (L) {
            case "n":
              d += `
`;
              break;
            case "r":
              d += "\r";
              break;
            case "t":
              d += "	";
              break;
            case "u":
            case "x":
              (P = r), (C = _(L)), C ? (d += C) : ((r = P), (d += L));
              break;
            case "b":
              d += "\b";
              break;
            case "f":
              d += "\f";
              break;
            case "v":
              d += "\v";
              break;
            default:
              o.code.isOctalDigit(L.charCodeAt(0))
                ? ((y = "01234567".indexOf(L)),
                  r < n &&
                    o.code.isOctalDigit(u.charCodeAt(r)) &&
                    ((y = y * 8 + "01234567".indexOf(m())),
                    "0123".indexOf(L) >= 0 &&
                      r < n &&
                      o.code.isOctalDigit(u.charCodeAt(r)) &&
                      (y = y * 8 + "01234567".indexOf(m()))),
                  (d += String.fromCharCode(y)))
                : (d += L);
              break;
          }
      else {
        if (o.code.isLineTerminator(L.charCodeAt(0))) break;
        d += L;
      }
    return h !== "" && s.throwError("unexpected quote"), (a = d), t.STRING;
  }
  function f() {
    var d, h;
    if (((d = ""), (h = u.charCodeAt(r)), h !== 46)) {
      if (((d = m()), (h = u.charCodeAt(r)), d === "0")) {
        if (h === 120 || h === 88) {
          for (
            d += m();
            r < n && ((h = u.charCodeAt(r)), !!o.code.isHexDigit(h));

          )
            d += m();
          return (
            d.length <= 2 && s.throwError("unexpected token"),
            r < n &&
              ((h = u.charCodeAt(r)),
              o.code.isIdentifierStartES5(h) &&
                s.throwError("unexpected token")),
            (a = parseInt(d, 16)),
            t.NUMBER
          );
        }
        if (o.code.isOctalDigit(h)) {
          for (
            d += m();
            r < n && ((h = u.charCodeAt(r)), !!o.code.isOctalDigit(h));

          )
            d += m();
          return (
            r < n &&
              ((h = u.charCodeAt(r)),
              (o.code.isIdentifierStartES5(h) || o.code.isDecimalDigit(h)) &&
                s.throwError("unexpected token")),
            (a = parseInt(d, 8)),
            t.NUMBER
          );
        }
        o.code.isDecimalDigit(h) && s.throwError("unexpected token");
      }
      for (; r < n && ((h = u.charCodeAt(r)), !!o.code.isDecimalDigit(h)); )
        d += m();
    }
    if (h === 46)
      for (
        d += m();
        r < n && ((h = u.charCodeAt(r)), !!o.code.isDecimalDigit(h));

      )
        d += m();
    if (h === 101 || h === 69)
      if (
        ((d += m()),
        (h = u.charCodeAt(r)),
        (h === 43 || h === 45) && (d += m()),
        (h = u.charCodeAt(r)),
        o.code.isDecimalDigit(h))
      )
        for (
          d += m();
          r < n && ((h = u.charCodeAt(r)), !!o.code.isDecimalDigit(h));

        )
          d += m();
      else s.throwError("unexpected token");
    return (
      r < n &&
        ((h = u.charCodeAt(r)),
        o.code.isIdentifierStartES5(h) && s.throwError("unexpected token")),
      (a = parseFloat(d)),
      t.NUMBER
    );
  }
  function D() {
    var d, h;
    for (a = m(); r < n && c(u.charCodeAt(r)); ) {
      if (((d = u.charCodeAt(r)), d === 46)) {
        if (r + 1 >= n) return t.ILLEGAL;
        if (((h = u.charCodeAt(r + 1)), h === 60)) break;
      }
      a += m();
    }
    return t.NAME;
  }
  function S() {
    var d;
    for (i = r; r < n && o.code.isWhiteSpace(u.charCodeAt(r)); ) m();
    if (r >= n) return (l = t.EOF), l;
    switch (((d = u.charCodeAt(r)), d)) {
      case 39:
      case 34:
        return (l = p()), l;
      case 58:
        return m(), (l = t.COLON), l;
      case 44:
        return m(), (l = t.COMMA), l;
      case 40:
        return m(), (l = t.LPAREN), l;
      case 41:
        return m(), (l = t.RPAREN), l;
      case 91:
        return m(), (l = t.LBRACK), l;
      case 93:
        return m(), (l = t.RBRACK), l;
      case 123:
        return m(), (l = t.LBRACE), l;
      case 125:
        return m(), (l = t.RBRACE), l;
      case 46:
        if (r + 1 < n) {
          if (((d = u.charCodeAt(r + 1)), d === 60))
            return m(), m(), (l = t.DOT_LT), l;
          if (d === 46 && r + 2 < n && u.charCodeAt(r + 2) === 46)
            return m(), m(), m(), (l = t.REST), l;
          if (o.code.isDecimalDigit(d)) return (l = f()), l;
        }
        return (l = t.ILLEGAL), l;
      case 60:
        return m(), (l = t.LT), l;
      case 62:
        return m(), (l = t.GT), l;
      case 42:
        return m(), (l = t.STAR), l;
      case 124:
        return m(), (l = t.PIPE), l;
      case 63:
        return m(), (l = t.QUESTION), l;
      case 33:
        return m(), (l = t.BANG), l;
      case 61:
        return m(), (l = t.EQUAL), l;
      case 45:
        return (l = f()), l;
      default:
        return o.code.isDecimalDigit(d)
          ? ((l = f()), l)
          : (s.assert(c(d)), (l = D()), l);
    }
  }
  function w(d, h) {
    s.assert(l === d, h || "consumed token not matched"), S();
  }
  function A(d, h) {
    l !== d && s.throwError(h || "unexpected token"), S();
  }
  function T() {
    var d,
      h = r - 1;
    if (
      (w(t.LPAREN, "UnionType should start with ("), (d = []), l !== t.RPAREN)
    )
      for (; d.push($()), l !== t.RPAREN; ) A(t.PIPE);
    return (
      w(t.RPAREN, "UnionType should end with )"),
      g({ type: e.UnionType, elements: d }, [h, i])
    );
  }
  function B() {
    var d,
      h = r - 1,
      L;
    for (
      w(t.LBRACK, "ArrayType should start with ["), d = [];
      l !== t.RBRACK;

    ) {
      if (l === t.REST) {
        (L = r - 3),
          w(t.REST),
          d.push(g({ type: e.RestType, expression: $() }, [L, i]));
        break;
      } else d.push($());
      l !== t.RBRACK && A(t.COMMA);
    }
    return A(t.RBRACK), g({ type: e.ArrayType, elements: d }, [h, i]);
  }
  function z() {
    var d = a;
    if (l === t.NAME || l === t.STRING) return S(), d;
    if (l === t.NUMBER) return w(t.NUMBER), String(d);
    s.throwError("unexpected token");
  }
  function M() {
    var d,
      h = i;
    return (
      (d = z()),
      l === t.COLON
        ? (w(t.COLON), g({ type: e.FieldType, key: d, value: $() }, [h, i]))
        : g({ type: e.FieldType, key: d, value: null }, [h, i])
    );
  }
  function O() {
    var d,
      h = r - 1,
      L;
    if (
      (w(t.LBRACE, "RecordType should start with {"), (d = []), l === t.COMMA)
    )
      w(t.COMMA);
    else for (; l !== t.RBRACE; ) d.push(M()), l !== t.RBRACE && A(t.COMMA);
    return (L = r), A(t.RBRACE), g({ type: e.RecordType, fields: d }, [h, L]);
  }
  function ze() {
    var d = a,
      h = r - d.length;
    return (
      A(t.NAME),
      l === t.COLON &&
        (d === "module" || d === "external" || d === "event") &&
        (w(t.COLON), (d += ":" + a), A(t.NAME)),
      g({ type: e.NameExpression, name: d }, [h, i])
    );
  }
  function Ge() {
    var d = [];
    for (d.push(I()); l === t.COMMA; ) w(t.COMMA), d.push(I());
    return d;
  }
  function Ye() {
    var d,
      h,
      L = r - a.length;
    return (
      (d = ze()),
      l === t.DOT_LT || l === t.LT
        ? (S(),
          (h = Ge()),
          A(t.GT),
          g({ type: e.TypeApplication, expression: d, applications: h }, [
            L,
            i,
          ]))
        : d
    );
  }
  function Zt() {
    return (
      w(t.COLON, "ResultType should start with :"),
      l === t.NAME && a === "void" ? (w(t.NAME), { type: e.VoidLiteral }) : $()
    );
  }
  function V() {
    for (var d = [], h = !1, L, y = !1, C, P = r - 3, R; l !== t.RPAREN; )
      l === t.REST && (w(t.REST), (y = !0)),
        (C = i),
        (L = $()),
        L.type === e.NameExpression &&
          l === t.COLON &&
          ((R = i - L.name.length),
          w(t.COLON),
          (L = g({ type: e.ParameterType, name: L.name, expression: $() }, [
            R,
            i,
          ]))),
        l === t.EQUAL
          ? (w(t.EQUAL),
            (L = g({ type: e.OptionalType, expression: L }, [C, i])),
            (h = !0))
          : h && s.throwError("unexpected token"),
        y && (L = g({ type: e.RestType, expression: L }, [P, i])),
        d.push(L),
        l !== t.RPAREN && A(t.COMMA);
    return d;
  }
  function Lt() {
    var d,
      h,
      L,
      y,
      C,
      P = r - a.length;
    return (
      s.assert(
        l === t.NAME && a === "function",
        "FunctionType should start with 'function'"
      ),
      w(t.NAME),
      A(t.LPAREN),
      (d = !1),
      (L = []),
      (h = null),
      l !== t.RPAREN &&
        (l === t.NAME && (a === "this" || a === "new")
          ? ((d = a === "new"),
            w(t.NAME),
            A(t.COLON),
            (h = Ye()),
            l === t.COMMA && (w(t.COMMA), (L = V())))
          : (L = V())),
      A(t.RPAREN),
      (y = null),
      l === t.COLON && (y = Zt()),
      (C = g({ type: e.FunctionType, params: L, result: y }, [P, i])),
      h && ((C.this = h), d && (C.new = !0)),
      C
    );
  }
  function k() {
    var d, h;
    switch (l) {
      case t.STAR:
        return w(t.STAR), g({ type: e.AllLiteral }, [i - 1, i]);
      case t.LPAREN:
        return T();
      case t.LBRACK:
        return B();
      case t.LBRACE:
        return O();
      case t.NAME:
        if (((h = r - a.length), a === "null"))
          return w(t.NAME), g({ type: e.NullLiteral }, [h, i]);
        if (a === "undefined")
          return w(t.NAME), g({ type: e.UndefinedLiteral }, [h, i]);
        if (a === "true" || a === "false")
          return (
            w(t.NAME),
            g({ type: e.BooleanLiteralType, value: a === "true" }, [h, i])
          );
        if (((d = F.save()), a === "function"))
          try {
            return Lt();
          } catch {
            d.restore();
          }
        return Ye();
      case t.STRING:
        return (
          S(), g({ type: e.StringLiteralType, value: a }, [i - a.length - 2, i])
        );
      case t.NUMBER:
        return (
          S(),
          g({ type: e.NumericLiteralType, value: a }, [i - String(a).length, i])
        );
      default:
        s.throwError("unexpected token");
    }
  }
  function $() {
    var d, h;
    return l === t.QUESTION
      ? ((h = r - 1),
        w(t.QUESTION),
        l === t.COMMA ||
        l === t.EQUAL ||
        l === t.RBRACE ||
        l === t.RPAREN ||
        l === t.PIPE ||
        l === t.EOF ||
        l === t.RBRACK ||
        l === t.GT
          ? g({ type: e.NullableLiteral }, [h, i])
          : g({ type: e.NullableType, expression: k(), prefix: !0 }, [h, i]))
      : l === t.BANG
      ? ((h = r - 1),
        w(t.BANG),
        g({ type: e.NonNullableType, expression: k(), prefix: !0 }, [h, i]))
      : ((h = i),
        (d = k()),
        l === t.BANG
          ? (w(t.BANG),
            g({ type: e.NonNullableType, expression: d, prefix: !1 }, [h, i]))
          : l === t.QUESTION
          ? (w(t.QUESTION),
            g({ type: e.NullableType, expression: d, prefix: !1 }, [h, i]))
          : l === t.LBRACK
          ? (w(t.LBRACK),
            A(
              t.RBRACK,
              "expected an array-style type declaration (" + a + "[])"
            ),
            g(
              {
                type: e.TypeApplication,
                expression: g({ type: e.NameExpression, name: "Array" }, [
                  h,
                  i,
                ]),
                applications: [d],
              },
              [h, i]
            ))
          : d);
  }
  function I() {
    var d, h;
    if (((d = $()), l !== t.PIPE)) return d;
    for (h = [d], w(t.PIPE); h.push($()), l === t.PIPE; ) w(t.PIPE);
    return g({ type: e.UnionType, elements: h }, [0, r]);
  }
  function U() {
    var d;
    return l === t.REST
      ? (w(t.REST), g({ type: e.RestType, expression: I() }, [0, r]))
      : ((d = I()),
        l === t.EQUAL
          ? (w(t.EQUAL), g({ type: e.OptionalType, expression: d }, [0, r]))
          : d);
  }
  function Z(d, h) {
    var L;
    return (
      (u = d),
      (n = u.length),
      (r = 0),
      (i = 0),
      (v = h && h.range),
      (E = (h && h.startIndex) || 0),
      S(),
      (L = I()),
      h && h.midstream
        ? { expression: L, index: i }
        : (l !== t.EOF && s.throwError("not reach to EOF"), L)
    );
  }
  function ft(d, h) {
    var L;
    return (
      (u = d),
      (n = u.length),
      (r = 0),
      (i = 0),
      (v = h && h.range),
      (E = (h && h.startIndex) || 0),
      S(),
      (L = U()),
      h && h.midstream
        ? { expression: L, index: i }
        : (l !== t.EOF && s.throwError("not reach to EOF"), L)
    );
  }
  function H(d, h, L) {
    var y, C, P;
    switch (d.type) {
      case e.NullableLiteral:
        y = "?";
        break;
      case e.AllLiteral:
        y = "*";
        break;
      case e.NullLiteral:
        y = "null";
        break;
      case e.UndefinedLiteral:
        y = "undefined";
        break;
      case e.VoidLiteral:
        y = "void";
        break;
      case e.UnionType:
        for (L ? (y = "") : (y = "("), C = 0, P = d.elements.length; C < P; ++C)
          (y += H(d.elements[C], h)), C + 1 !== P && (y += h ? "|" : " | ");
        L || (y += ")");
        break;
      case e.ArrayType:
        for (y = "[", C = 0, P = d.elements.length; C < P; ++C)
          (y += H(d.elements[C], h)), C + 1 !== P && (y += h ? "," : ", ");
        y += "]";
        break;
      case e.RecordType:
        for (y = "{", C = 0, P = d.fields.length; C < P; ++C)
          (y += H(d.fields[C], h)), C + 1 !== P && (y += h ? "," : ", ");
        y += "}";
        break;
      case e.FieldType:
        d.value ? (y = d.key + (h ? ":" : ": ") + H(d.value, h)) : (y = d.key);
        break;
      case e.FunctionType:
        for (
          y = h ? "function(" : "function (",
            d.this &&
              (d.new
                ? (y += h ? "new:" : "new: ")
                : (y += h ? "this:" : "this: "),
              (y += H(d.this, h)),
              d.params.length !== 0 && (y += h ? "," : ", ")),
            C = 0,
            P = d.params.length;
          C < P;
          ++C
        )
          (y += H(d.params[C], h)), C + 1 !== P && (y += h ? "," : ", ");
        (y += ")"), d.result && (y += (h ? ":" : ": ") + H(d.result, h));
        break;
      case e.ParameterType:
        y = d.name + (h ? ":" : ": ") + H(d.expression, h);
        break;
      case e.RestType:
        (y = "..."), d.expression && (y += H(d.expression, h));
        break;
      case e.NonNullableType:
        d.prefix
          ? (y = "!" + H(d.expression, h))
          : (y = H(d.expression, h) + "!");
        break;
      case e.OptionalType:
        y = H(d.expression, h) + "=";
        break;
      case e.NullableType:
        d.prefix
          ? (y = "?" + H(d.expression, h))
          : (y = H(d.expression, h) + "?");
        break;
      case e.NameExpression:
        y = d.name;
        break;
      case e.TypeApplication:
        for (
          y = H(d.expression, h) + ".<", C = 0, P = d.applications.length;
          C < P;
          ++C
        )
          (y += H(d.applications[C], h)), C + 1 !== P && (y += h ? "," : ", ");
        y += ">";
        break;
      case e.StringLiteralType:
        y = '"' + d.value + '"';
        break;
      case e.NumericLiteralType:
        y = String(d.value);
        break;
      case e.BooleanLiteralType:
        y = String(d.value);
        break;
      default:
        s.throwError("Unknown type " + d.type);
    }
    return y;
  }
  function te(d, h) {
    return h == null && (h = {}), H(d, h.compact, h.topLevel);
  }
  (Qu.parseType = Z),
    (Qu.parseParamType = ft),
    (Qu.stringify = te),
    (Qu.Syntax = e);
})();
(function (e) {
  (function () {
    var t, u, n, r, i;
    (r = nn), (t = Qu), (u = fu);
    function l(A, T, B) {
      return A.slice(T, B);
    }
    i = (function () {
      var A = Object.prototype.hasOwnProperty;
      return function (B, z) {
        return A.call(B, z);
      };
    })();
    function a(A) {
      var T = {},
        B;
      for (B in A) A.hasOwnProperty(B) && (T[B] = A[B]);
      return T;
    }
    function o(A) {
      return (
        (A >= 97 && A <= 122) || (A >= 65 && A <= 90) || (A >= 48 && A <= 57)
      );
    }
    function s(A) {
      return A === "param" || A === "argument" || A === "arg";
    }
    function E(A) {
      return A === "return" || A === "returns";
    }
    function v(A) {
      return A === "property" || A === "prop";
    }
    function c(A) {
      return (
        s(A) ||
        v(A) ||
        A === "alias" ||
        A === "this" ||
        A === "mixes" ||
        A === "requires"
      );
    }
    function F(A) {
      return c(A) || A === "const" || A === "constant";
    }
    function g(A) {
      return v(A) || s(A);
    }
    function m(A) {
      return v(A) || s(A);
    }
    function _(A) {
      return (
        s(A) ||
        E(A) ||
        A === "define" ||
        A === "enum" ||
        A === "implements" ||
        A === "this" ||
        A === "type" ||
        A === "typedef" ||
        v(A)
      );
    }
    function p(A) {
      return (
        _(A) ||
        A === "throws" ||
        A === "const" ||
        A === "constant" ||
        A === "namespace" ||
        A === "member" ||
        A === "var" ||
        A === "module" ||
        A === "constructor" ||
        A === "class" ||
        A === "extends" ||
        A === "augments" ||
        A === "public" ||
        A === "private" ||
        A === "protected"
      );
    }
    var f =
        "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
      D =
        "(" +
        f +
        "*(?:\\*" +
        f +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function S(A) {
      return A.replace(/^\/\*\*?/, "")
        .replace(/\*\/$/, "")
        .replace(new RegExp(D, "g"), "$2")
        .replace(/\s*$/, "");
    }
    function w(A, T) {
      for (
        var B = A.replace(/^\/\*\*?/, ""), z = 0, M = new RegExp(D, "g"), O;
        (O = M.exec(B));

      )
        if (((z += O[1].length), O.index + O[0].length > T + z))
          return T + z + A.length - B.length;
      return A.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function (A) {
      var T, B, z, M, O, ze, Ge, Ye, Zt;
      function V() {
        var y = O.charCodeAt(B);
        return (
          (B += 1),
          r.code.isLineTerminator(y) &&
            !(y === 13 && O.charCodeAt(B) === 10) &&
            (z += 1),
          String.fromCharCode(y)
        );
      }
      function Lt() {
        var y = "";
        for (V(); B < M && o(O.charCodeAt(B)); ) y += V();
        return y;
      }
      function k() {
        var y,
          C,
          P = B;
        for (C = !1; P < M; ) {
          if (
            ((y = O.charCodeAt(P)),
            r.code.isLineTerminator(y) &&
              !(y === 13 && O.charCodeAt(P + 1) === 10))
          )
            C = !0;
          else if (C) {
            if (y === 64) break;
            r.code.isWhiteSpace(y) || (C = !1);
          }
          P += 1;
        }
        return P;
      }
      function $(y, C, P) {
        for (var R, oe, K, fe, pt = !1; B < C; )
          if (((R = O.charCodeAt(B)), r.code.isWhiteSpace(R))) V();
          else if (R === 123) {
            V();
            break;
          } else {
            pt = !0;
            break;
          }
        if (pt) return null;
        for (oe = 1, K = ""; B < C; )
          if (((R = O.charCodeAt(B)), r.code.isLineTerminator(R))) V();
          else {
            if (R === 125) {
              if (((oe -= 1), oe === 0)) {
                V();
                break;
              }
            } else R === 123 && (oe += 1);
            K === "" && (fe = B), (K += V());
          }
        return oe !== 0
          ? u.throwError("Braces are not balanced")
          : m(y)
          ? t.parseParamType(K, { startIndex: H(fe), range: P })
          : t.parseType(K, { startIndex: H(fe), range: P });
      }
      function I(y) {
        var C;
        if (
          !r.code.isIdentifierStartES5(O.charCodeAt(B)) &&
          !O[B].match(/[0-9]/)
        )
          return null;
        for (C = V(); B < y && r.code.isIdentifierPartES5(O.charCodeAt(B)); )
          C += V();
        return C;
      }
      function U(y) {
        for (
          ;
          B < y &&
          (r.code.isWhiteSpace(O.charCodeAt(B)) ||
            r.code.isLineTerminator(O.charCodeAt(B)));

        )
          V();
      }
      function Z(y, C, P) {
        var R = "",
          oe,
          K;
        if ((U(y), B >= y)) return null;
        if (O.charCodeAt(B) === 91)
          if (C) (oe = !0), (R = V());
          else return null;
        if (((R += I(y)), P))
          for (
            O.charCodeAt(B) === 58 &&
              (R === "module" || R === "external" || R === "event") &&
              ((R += V()), (R += I(y))),
              O.charCodeAt(B) === 91 &&
                O.charCodeAt(B + 1) === 93 &&
                ((R += V()), (R += V()));
            O.charCodeAt(B) === 46 ||
            O.charCodeAt(B) === 47 ||
            O.charCodeAt(B) === 35 ||
            O.charCodeAt(B) === 45 ||
            O.charCodeAt(B) === 126;

          )
            (R += V()), (R += I(y));
        if (oe) {
          if ((U(y), O.charCodeAt(B) === 61)) {
            (R += V()), U(y);
            for (var fe, pt = 1; B < y; ) {
              if (
                ((fe = O.charCodeAt(B)),
                r.code.isWhiteSpace(fe) &&
                  (K || (U(y), (fe = O.charCodeAt(B)))),
                fe === 39 && (K ? K === "'" && (K = "") : (K = "'")),
                fe === 34 && (K ? K === '"' && (K = "") : (K = '"')),
                fe === 91)
              )
                pt++;
              else if (fe === 93 && --pt === 0) break;
              R += V();
            }
          }
          if ((U(y), B >= y || O.charCodeAt(B) !== 93)) return null;
          R += V();
        }
        return R;
      }
      function ft() {
        for (; B < M && O.charCodeAt(B) !== 64; ) V();
        return B >= M ? !1 : (u.assert(O.charCodeAt(B) === 64), !0);
      }
      function H(y) {
        return O === ze ? y : w(ze, y);
      }
      function te(y, C) {
        (this._options = y),
          (this._title = C.toLowerCase()),
          (this._tag = { title: C, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = z),
          (this._first = B - C.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (te.prototype.addError = function (C) {
        var P = Array.prototype.slice.call(arguments, 1),
          R = C.replace(/%(\d)/g, function (oe, K) {
            return (
              u.assert(K < P.length, "Message reference must be in range"), P[K]
            );
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          Zt && u.throwError(R),
          this._tag.errors.push(R),
          Ge
        );
      }),
        (te.prototype.parseType = function () {
          if (_(this._title))
            try {
              if (
                ((this._tag.type = $(
                  this._title,
                  this._last,
                  this._options.range
                )),
                !this._tag.type &&
                  !s(this._title) &&
                  !E(this._title) &&
                  !this.addError("Missing or invalid tag type"))
              )
                return !1;
            } catch (y) {
              if (((this._tag.type = null), !this.addError(y.message)))
                return !1;
            }
          else if (p(this._title))
            try {
              this._tag.type = $(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (te.prototype._parseNamePath = function (y) {
          var C;
          return (
            (C = Z(this._last, Ye && m(this._title), !0)),
            !C && !y && !this.addError("Missing or invalid tag name")
              ? !1
              : ((this._tag.name = C), !0)
          );
        }),
        (te.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (te.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (te.prototype.parseName = function () {
          var y, C;
          if (F(this._title))
            if (
              ((this._tag.name = Z(
                this._last,
                Ye && m(this._title),
                g(this._title)
              )),
              this._tag.name)
            )
              (C = this._tag.name),
                C.charAt(0) === "[" &&
                  C.charAt(C.length - 1) === "]" &&
                  ((y = C.substring(1, C.length - 1).split("=")),
                  y.length > 1 && (this._tag.default = y.slice(1).join("=")),
                  (this._tag.name = y[0]),
                  this._tag.type &&
                    this._tag.type.type !== "OptionalType" &&
                    (this._tag.type = {
                      type: "OptionalType",
                      expression: this._tag.type,
                    }));
            else {
              if (!c(this._title)) return !0;
              if (s(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError("Missing or invalid tag name")) return !1;
            }
          return !0;
        }),
        (te.prototype.parseDescription = function () {
          var C = l(O, B, this._last).trim();
          return (
            C &&
              (/^-\s+/.test(C) && (C = C.substring(2)),
              (this._tag.description = C)),
            !0
          );
        }),
        (te.prototype.parseCaption = function () {
          var C = l(O, B, this._last).trim(),
            P = "<caption>",
            R = "</caption>",
            oe = C.indexOf(P),
            K = C.indexOf(R);
          return (
            oe >= 0 && K >= 0
              ? ((this._tag.caption = C.substring(oe + P.length, K).trim()),
                (this._tag.description = C.substring(K + R.length).trim()))
              : (this._tag.description = C),
            !0
          );
        }),
        (te.prototype.parseKind = function () {
          var C, P;
          return (
            (P = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (C = l(O, B, this._last).trim()),
            (this._tag.kind = C),
            !(!i(P, C) && !this.addError("Invalid kind name '%0'", C))
          );
        }),
        (te.prototype.parseAccess = function () {
          var C;
          return (
            (C = l(O, B, this._last).trim()),
            (this._tag.access = C),
            !(
              C !== "private" &&
              C !== "protected" &&
              C !== "public" &&
              !this.addError("Invalid access name '%0'", C)
            )
          );
        }),
        (te.prototype.parseThis = function () {
          var C = l(O, B, this._last).trim();
          if (C && C.charAt(0) === "{") {
            var P = this.parseType();
            return (P && this._tag.type.type === "NameExpression") ||
              this._tag.type.type === "UnionType"
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError("Invalid name for this");
          } else return this.parseNamePath();
        }),
        (te.prototype.parseVariation = function () {
          var C, P;
          return (
            (P = l(O, B, this._last).trim()),
            (C = parseFloat(P, 10)),
            (this._tag.variation = C),
            !(isNaN(C) && !this.addError("Invalid variation '%0'", P))
          );
        }),
        (te.prototype.ensureEnd = function () {
          var y = l(O, B, this._last).trim();
          return !(y && !this.addError("Unknown content '%0'", y));
        }),
        (te.prototype.epilogue = function () {
          var C;
          return (
            (C = this._tag.description),
            !(
              m(this._title) &&
              !this._tag.type &&
              C &&
              C.charAt(0) === "[" &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !Ye && !this.addError("Missing or invalid tag name"))
            )
          );
        }),
        (T = {
          access: ["parseAccess"],
          alias: ["parseNamePath", "ensureEnd"],
          augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
          constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
          class: ["parseType", "parseNamePathOptional", "ensureEnd"],
          extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
          example: ["parseCaption"],
          deprecated: ["parseDescription"],
          global: ["ensureEnd"],
          inner: ["ensureEnd"],
          instance: ["ensureEnd"],
          kind: ["parseKind"],
          mixes: ["parseNamePath", "ensureEnd"],
          mixin: ["parseNamePathOptional", "ensureEnd"],
          member: ["parseType", "parseNamePathOptional", "ensureEnd"],
          method: ["parseNamePathOptional", "ensureEnd"],
          module: ["parseType", "parseNamePathOptional", "ensureEnd"],
          func: ["parseNamePathOptional", "ensureEnd"],
          function: ["parseNamePathOptional", "ensureEnd"],
          var: ["parseType", "parseNamePathOptional", "ensureEnd"],
          name: ["parseNamePath", "ensureEnd"],
          namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
          private: ["parseType", "parseDescription"],
          protected: ["parseType", "parseDescription"],
          public: ["parseType", "parseDescription"],
          readonly: ["ensureEnd"],
          requires: ["parseNamePath", "ensureEnd"],
          since: ["parseDescription"],
          static: ["ensureEnd"],
          summary: ["parseDescription"],
          this: ["parseThis", "ensureEnd"],
          todo: ["parseDescription"],
          typedef: ["parseType", "parseNamePathOptional"],
          variation: ["parseVariation"],
          version: ["parseDescription"],
        }),
        (te.prototype.parse = function () {
          var C, P, R, oe;
          if (!this._title && !this.addError("Missing or invalid title"))
            return null;
          for (
            this._last = k(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  O.slice(0, this._last).replace(/\s*$/, "").length,
                ].map(H)),
              i(T, this._title)
                ? (R = T[this._title])
                : (R = [
                    "parseType",
                    "parseName",
                    "parseDescription",
                    "epilogue",
                  ]),
              C = 0,
              P = R.length;
            C < P;
            ++C
          )
            if (((oe = R[C]), !this[oe]())) return null;
          return this._tag;
        });
      function d(y) {
        var C, P, R;
        if (!ft()) return null;
        for (C = Lt(), P = new te(y, C), R = P.parse(); B < P._last; ) V();
        return R;
      }
      function h(y) {
        var C = "",
          P,
          R;
        for (R = !0; B < M && ((P = O.charCodeAt(B)), !(R && P === 64)); )
          r.code.isLineTerminator(P)
            ? (R = !0)
            : R && !r.code.isWhiteSpace(P) && (R = !1),
            (C += V());
        return y ? C : C.trim();
      }
      function L(y, C) {
        var P = [],
          R,
          oe,
          K,
          fe,
          pt;
        if (
          (C === void 0 && (C = {}),
          typeof C.unwrap == "boolean" && C.unwrap ? (O = S(y)) : (O = y),
          (ze = y),
          C.tags)
        )
          if (Array.isArray(C.tags))
            for (K = {}, fe = 0, pt = C.tags.length; fe < pt; fe++)
              typeof C.tags[fe] == "string"
                ? (K[C.tags[fe]] = !0)
                : u.throwError('Invalid "tags" parameter: ' + C.tags);
          else u.throwError('Invalid "tags" parameter: ' + C.tags);
        for (
          M = O.length,
            B = 0,
            z = 0,
            Ge = C.recoverable,
            Ye = C.sloppy,
            Zt = C.strict,
            oe = h(C.preserveWhitespace);
          (R = d(C)), !!R;

        )
          (!K || K.hasOwnProperty(R.title)) && P.push(R);
        return { description: oe, tags: P };
      }
      A.parse = L;
    })((n = {})),
      (e.version = u.VERSION),
      (e.parse = n.parse),
      (e.parseType = t.parseType),
      (e.parseParamType = t.parseParamType),
      (e.unwrapComment = S),
      (e.Syntax = a(t.Syntax)),
      (e.Error = u.DoctrineError),
      (e.type = {
        Syntax: e.Syntax,
        parseType: t.parseType,
        parseParamType: t.parseParamType,
        stringify: t.stringify,
      });
  })();
})(Ic);
const ay = Pr(Ic),
  { combineParameters: oy } = __STORYBOOK_MODULE_PREVIEW_API__;
var sy = (e) => {
    switch (e.type) {
      case "function":
        return { name: "function" };
      case "object":
        let t = {};
        return (
          e.signature.properties.forEach((u) => {
            t[u.key] = Nr(u.value);
          }),
          { name: "object", value: t }
        );
      default:
        throw new Error(`Unknown: ${e}`);
    }
  },
  Nr = (e) => {
    let { name: t, raw: u } = e,
      n = {};
    switch ((typeof u < "u" && (n.raw = u), e.name)) {
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...n, name: t };
      case "Array":
        return { ...n, name: "array", value: e.elements.map(Nr) };
      case "signature":
        return { ...n, ...sy(e) };
      case "union":
      case "intersection":
        return { ...n, name: t, value: e.elements.map(Nr) };
      default:
        return { ...n, name: "other", value: t };
    }
  },
  cy = (e) => e.name === "literal",
  fy = (e) => e.value.replace(/['|"]/g, ""),
  py = (e) => {
    switch (e.type) {
      case "function":
        return { name: "function" };
      case "object":
        let t = {};
        return (
          e.signature.properties.forEach((u) => {
            t[u.key] = rn(u.value);
          }),
          { name: "object", value: t }
        );
      default:
        throw new Error(`Unknown: ${e}`);
    }
  },
  rn = (e) => {
    let { name: t, raw: u } = e,
      n = {};
    switch ((typeof u < "u" && (n.raw = u), e.name)) {
      case "literal":
        return { ...n, name: "other", value: e.value };
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...n, name: t };
      case "Array":
        return { ...n, name: "array", value: e.elements.map(rn) };
      case "signature":
        return { ...n, ...py(e) };
      case "union":
        return e.elements.every(cy)
          ? { ...n, name: "enum", value: e.elements.map(fy) }
          : { ...n, name: t, value: e.elements.map(rn) };
      case "intersection":
        return { ...n, name: t, value: e.elements.map(rn) };
      default:
        return { ...n, name: "other", value: t };
    }
  },
  Hc = /^['"]|['"]$/g,
  dy = (e) => e.replace(Hc, ""),
  Dy = (e) => Hc.test(e),
  hy = /^\(.*\) => /,
  Gu = (e) => {
    let { name: t, raw: u, computed: n, value: r } = e,
      i = {};
    switch ((typeof u < "u" && (i.raw = u), t)) {
      case "enum": {
        let a = n
          ? r
          : r.map((o) => {
              let s = dy(o.value);
              return Dy(o.value) || Number.isNaN(Number(s)) ? s : Number(s);
            });
        return { ...i, name: t, value: a };
      }
      case "string":
      case "number":
      case "symbol":
        return { ...i, name: t };
      case "func":
        return { ...i, name: "function" };
      case "bool":
      case "boolean":
        return { ...i, name: "boolean" };
      case "arrayOf":
      case "array":
        return { ...i, name: "array", value: r && Gu(r) };
      case "object":
        return { ...i, name: t };
      case "objectOf":
        return { ...i, name: t, value: Gu(r) };
      case "shape":
      case "exact":
        let l = zE(r, (a) => Gu(a));
        return { ...i, name: "object", value: l };
      case "union":
        return { ...i, name: "union", value: r.map((a) => Gu(a)) };
      case "instanceOf":
      case "element":
      case "elementType":
      default: {
        if ((t == null ? void 0 : t.indexOf("|")) > 0)
          try {
            let s = t.split("|").map((E) => JSON.parse(E));
            return { ...i, name: "enum", value: s };
          } catch {}
        let a = r ? `${t}(${r})` : t,
          o = hy.test(t) ? "function" : "other";
        return { ...i, name: o, value: a };
      }
    }
  },
  xa = (e) => {
    let { type: t, tsType: u, flowType: n } = e;
    return t != null ? Gu(t) : u != null ? Nr(u) : n != null ? rn(n) : null;
  },
  Ay = ((e) => (
    (e.JAVASCRIPT = "JavaScript"),
    (e.FLOW = "Flow"),
    (e.TYPESCRIPT = "TypeScript"),
    (e.UNKNOWN = "Unknown"),
    e
  ))(Ay || {}),
  vy = ["null", "undefined"];
function _a(e) {
  return vy.some((t) => t === e);
}
var my = (e) => {
  if (!e) return "";
  if (typeof e == "string") return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
};
function Wc(e) {
  return !!e.__docgenInfo;
}
function Cy(e) {
  return e != null && Object.keys(e).length > 0;
}
function Ey(e, t) {
  return Wc(e) ? e.__docgenInfo[t] : null;
}
function yy(e) {
  return Wc(e) && my(e.__docgenInfo.description);
}
function gy(e) {
  return e != null && e.includes("@");
}
function Fy(e, t) {
  let u;
  try {
    u = ay.parse(e, { tags: t, sloppy: !0 });
  } catch (n) {
    throw (console.error(n), new Error("Cannot parse JSDoc tags."));
  }
  return u;
}
var By = {
    tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"],
  },
  Sy = (e, t = By) => {
    if (!gy(e)) return { includesJsDoc: !1, ignore: !1 };
    let u = Fy(e, t.tags),
      n = wy(u);
    return n.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: u.description,
          extractedTags: n,
        };
  };
function wy(e) {
  let t = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let u = 0; u < e.tags.length; u += 1) {
    let n = e.tags[u];
    if (n.title === "ignore") {
      t.ignore = !0;
      break;
    } else
      switch (n.title) {
        case "param":
        case "arg":
        case "argument": {
          let r = xy(n);
          r != null && (t.params == null && (t.params = []), t.params.push(r));
          break;
        }
        case "deprecated": {
          let r = _y(n);
          r != null && (t.deprecated = r);
          break;
        }
        case "returns": {
          let r = Ty(n);
          r != null && (t.returns = r);
          break;
        }
      }
  }
  return t;
}
function xy(e) {
  let t = e.name;
  return t != null && t !== "null-null"
    ? {
        name: e.name,
        type: e.type,
        description: e.description,
        getPrettyName: () =>
          t.includes("null")
            ? t.replace("-null", "").replace(".null", "")
            : e.name,
        getTypeName: () => (e.type != null ? pu(e.type) : null),
      }
    : null;
}
function _y(e) {
  return e.title != null ? e.description : null;
}
function Ty(e) {
  return e.type != null
    ? {
        type: e.type,
        description: e.description,
        getTypeName: () => pu(e.type),
      }
    : null;
}
function pu(e) {
  return e.type === "NameExpression"
    ? e.name
    : e.type === "RecordType"
    ? `({${e.fields
        .map((t) => {
          if (t.value != null) {
            let u = pu(t.value);
            return `${t.key}: ${u}`;
          }
          return t.key;
        })
        .join(", ")}})`
    : e.type === "UnionType"
    ? `(${e.elements.map(pu).join("|")})`
    : e.type === "ArrayType"
    ? "[]"
    : e.type === "TypeApplication" &&
      e.expression != null &&
      e.expression.name === "Array"
    ? `${pu(e.applications[0])}[]`
    : e.type === "NullableType" ||
      e.type === "NonNullableType" ||
      e.type === "OptionalType"
    ? pu(e.expression)
    : e.type === "AllLiteral"
    ? "any"
    : null;
}
function Vc(e) {
  return e.length > 90;
}
function ky(e) {
  return e.length > 50;
}
function ae(e, t) {
  return e === t ? { summary: e } : { summary: e, detail: t };
}
function Kc({ name: e, value: t, elements: u, raw: n }) {
  return t ?? (u != null ? u.map(Kc).join(" | ") : n ?? e);
}
function Ny({ name: e, raw: t, elements: u }) {
  return u != null
    ? ae(u.map(Kc).join(" | "))
    : t != null
    ? ae(t.replace(/^\|\s*/, ""))
    : ae(e);
}
function Py({ type: e, raw: t }) {
  return t != null ? ae(t) : ae(e);
}
function Oy({ type: e, raw: t }) {
  return t != null ? (Vc(t) ? ae(e, t) : ae(t)) : ae(e);
}
function Ly(e) {
  let { type: t } = e;
  return t === "object" ? Oy(e) : Py(e);
}
function $y({ name: e, raw: t }) {
  return t != null ? (Vc(t) ? ae(e, t) : ae(t)) : ae(e);
}
function Ry(e) {
  if (e == null) return null;
  switch (e.name) {
    case "union":
      return Ny(e);
    case "signature":
      return Ly(e);
    default:
      return $y(e);
  }
}
function Iy(e, t) {
  if (e != null) {
    let { value: u } = e;
    if (!_a(u)) return ky(u) ? ae(t.name, u) : ae(u);
  }
  return null;
}
var My = (e, t) => {
  let { flowType: u, description: n, required: r, defaultValue: i } = t;
  return {
    name: e,
    type: Ry(u),
    required: r,
    description: n,
    defaultValue: Iy(i, u),
  };
};
function zy({ tsType: e, required: t }) {
  return e == null ? null : ae(t ? e.name : e.name.replace(" | undefined", ""));
}
function jy({ defaultValue: e }) {
  if (e != null) {
    let { value: t } = e;
    if (!_a(t)) return ae(t);
  }
  return null;
}
var Uy = (e, t) => {
  let { description: u, required: n } = t;
  return {
    name: e,
    type: zy(t),
    required: n,
    description: u,
    defaultValue: jy(t),
  };
};
function Hy(e) {
  return e != null ? ae(e.name) : null;
}
function Wy(e) {
  let { computed: t, func: u } = e;
  return typeof t > "u" && typeof u > "u";
}
function Vy(e) {
  return e
    ? e.name === "string"
      ? !0
      : e.name === "enum"
      ? Array.isArray(e.value) &&
        e.value.every(
          ({ value: t }) =>
            typeof t == "string" && t[0] === '"' && t[t.length - 1] === '"'
        )
      : !1
    : !1;
}
function Ky(e, t) {
  if (e != null) {
    let { value: u } = e;
    if (!_a(u)) return Wy(e) && Vy(t) ? ae(JSON.stringify(u)) : ae(u);
  }
  return null;
}
function Qc(e, t, u) {
  let { description: n, required: r, defaultValue: i } = u;
  return {
    name: e,
    type: Hy(t),
    required: r,
    description: n,
    defaultValue: Ky(i, t),
  };
}
function ei(e, t) {
  var u;
  if (t.includesJsDoc) {
    let { description: n, extractedTags: r } = t;
    n != null && (e.description = t.description);
    let i = {
      ...r,
      params:
        (u = r == null ? void 0 : r.params) == null
          ? void 0
          : u.map((l) => ({
              name: l.getPrettyName(),
              description: l.description,
            })),
    };
    Object.values(i).filter(Boolean).length > 0 && (e.jsDocTags = i);
  }
  return e;
}
var Qy = (e, t, u) => {
    let n = Qc(e, t.type, t);
    return (n.sbType = xa(t)), ei(n, u);
  },
  Gy = (e, t, u) => {
    let n = Uy(e, t);
    return (n.sbType = xa(t)), ei(n, u);
  },
  Yy = (e, t, u) => {
    let n = My(e, t);
    return (n.sbType = xa(t)), ei(n, u);
  },
  Xy = (e, t, u) => {
    let n = Qc(e, { name: "unknown" }, t);
    return ei(n, u);
  },
  Gc = (e) => {
    switch (e) {
      case "JavaScript":
        return Qy;
      case "TypeScript":
        return Gy;
      case "Flow":
        return Yy;
      default:
        return Xy;
    }
  },
  Yc = (e) =>
    e.type != null
      ? "JavaScript"
      : e.flowType != null
      ? "Flow"
      : e.tsType != null
      ? "TypeScript"
      : "Unknown",
  Jy = (e) => {
    let t = Yc(e[0]),
      u = Gc(t);
    return e.map((n) => {
      var i;
      let r = n;
      return (
        (i = n.type) != null &&
          i.elements &&
          (r = { ...n, type: { ...n.type, value: n.type.elements } }),
        Xc(r.name, r, t, u)
      );
    });
  },
  Zy = (e) => {
    let t = Object.keys(e),
      u = Yc(e[t[0]]),
      n = Gc(u);
    return t
      .map((r) => {
        let i = e[r];
        return i != null ? Xc(r, i, u, n) : null;
      })
      .filter(Boolean);
  },
  ag = (e, t) => {
    let u = Ey(e, t);
    return Cy(u) ? (Array.isArray(u) ? Jy(u) : Zy(u)) : [];
  };
function Xc(e, t, u, n) {
  let r = Sy(t.description);
  return r.includesJsDoc && r.ignore
    ? null
    : {
        propDef: n(e, t, r),
        jsDocTags: r.extractedTags,
        docgenInfo: t,
        typeSystem: u,
      };
}
function og(e) {
  return e != null && yy(e);
}
var sg = (e) => {
    let {
        component: t,
        argTypes: u,
        parameters: { docs: n = {} },
      } = e,
      { extractArgTypes: r } = n,
      i = r && t ? r(t) : {};
    return i ? oy(i, u) : u;
  },
  qy = "storybook/docs",
  cg = `${qy}/snippet-rendered`,
  by = ((e) => (
    (e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e
  ))(by || {});
export {
  ug as $,
  $c as A,
  wc as B,
  br as C,
  Rc as D,
  vv as E,
  Nv as F,
  Sv as G,
  yv as H,
  gC as I,
  OE as J,
  pm as K,
  JA as L,
  RA as M,
  jA as N,
  Fa as O,
  Jr as P,
  Fm as Q,
  aA as R,
  cg as S,
  Ay as T,
  lA as U,
  Ec as V,
  Bc as W,
  Xv as X,
  my as Y,
  ct as _,
  Ba as a,
  xn as b,
  rg as c,
  _n as d,
  nn as e,
  Ot as f,
  sg as g,
  og as h,
  ma as i,
  ae as j,
  Ey as k,
  by as l,
  ng as m,
  ky as n,
  Wc as o,
  ag as p,
  Vc as q,
  ig as r,
  hc as s,
  rh as t,
  lg as u,
  ch as v,
  JD as w,
  Ac as x,
  SA as y,
  xh as z,
};
//# sourceMappingURL=index-46294899.js.map
