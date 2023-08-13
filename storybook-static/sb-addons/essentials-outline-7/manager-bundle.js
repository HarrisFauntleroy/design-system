try {
  var a = "storybook/outline",
    u = "outline";
  var n = __REACT__,
    {
      Children: L,
      Component: x,
      Fragment: M,
      Profiler: v,
      PureComponent: D,
      StrictMode: N,
      Suspense: H,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: F,
      cloneElement: K,
      createContext: Y,
      createElement: W,
      createFactory: G,
      createRef: w,
      forwardRef: U,
      isValidElement: V,
      lazy: q,
      memo: p,
      useCallback: m,
      useContext: z,
      useDebugValue: Z,
      useEffect: S,
      useImperativeHandle: $,
      useLayoutEffect: j,
      useMemo: J,
      useReducer: Q,
      useRef: X,
      useState: ee,
      version: te,
    } = __REACT__;
  var le = __STORYBOOKAPI__,
    {
      ActiveTabs: se,
      Consumer: ue,
      ManagerContext: ce,
      Provider: ie,
      addons: c,
      combineParameters: pe,
      controlOrMetaKey: me,
      controlOrMetaSymbol: Se,
      eventMatchesShortcut: _e,
      eventToShortcut: de,
      isMacLike: Oe,
      isShortcutTaken: Te,
      keyToSymbol: be,
      merge: ye,
      mockChannel: Ae,
      optionOrAltSymbol: Ce,
      shortcutMatchesShortcut: he,
      shortcutToHumanString: fe,
      types: _,
      useAddonState: Ee,
      useArgTypes: ge,
      useArgs: Re,
      useChannel: ke,
      useGlobalTypes: Ie,
      useGlobals: d,
      useParameter: Pe,
      useSharedState: Be,
      useStoryPrepared: Le,
      useStorybookApi: O,
      useStorybookState: xe,
    } = __STORYBOOKAPI__;
  var He = __STORYBOOKCOMPONENTS__,
    {
      A: Fe,
      ActionBar: Ke,
      AddonPanel: Ye,
      Badge: We,
      Bar: Ge,
      Blockquote: we,
      Button: Ue,
      ClipboardCode: Ve,
      Code: qe,
      DL: ze,
      Div: Ze,
      DocumentWrapper: $e,
      ErrorFormatter: je,
      FlexBar: Je,
      Form: Qe,
      H1: Xe,
      H2: et,
      H3: tt,
      H4: ot,
      H5: rt,
      H6: at,
      HR: nt,
      IconButton: T,
      IconButtonSkeleton: lt,
      Icons: b,
      Img: st,
      LI: ut,
      Link: ct,
      ListItem: it,
      Loader: pt,
      OL: mt,
      P: St,
      Placeholder: _t,
      Pre: dt,
      ResetWrapper: Ot,
      ScrollArea: Tt,
      Separator: bt,
      Spaced: yt,
      Span: At,
      StorybookIcon: Ct,
      StorybookLogo: ht,
      Symbols: ft,
      SyntaxHighlighter: Et,
      TT: gt,
      TabBar: Rt,
      TabButton: kt,
      TabWrapper: It,
      Table: Pt,
      Tabs: Bt,
      TabsState: Lt,
      TooltipLinkList: xt,
      TooltipMessage: Mt,
      TooltipNote: vt,
      UL: Dt,
      WithTooltip: Nt,
      WithTooltipPure: Ht,
      Zoom: Ft,
      codeCommon: Kt,
      components: Yt,
      createCopyToClipboardFunction: Wt,
      getStoryHref: Gt,
      icons: wt,
      interleaveSeparators: Ut,
      nameSpaceClassNames: Vt,
      resetComponents: qt,
      withReset: zt,
    } = __STORYBOOKCOMPONENTS__;
  var A = p(function () {
    let [r, y] = d(),
      i = O(),
      l = [!0, "true"].includes(r[u]),
      s = m(() => y({ [u]: !l }), [l]);
    return (
      S(() => {
        i.setAddonShortcut(a, {
          label: "Toggle Outline [O]",
          defaultShortcut: ["O"],
          actionName: "outline",
          showInMenu: !1,
          action: s,
        });
      }, [s, i]),
      n.createElement(
        T,
        {
          key: "outline",
          active: l,
          title: "Apply outlines to the preview",
          onClick: s,
        },
        n.createElement(b, { icon: "outline" })
      )
    );
  });
  c.register(a, () => {
    c.add(a, {
      title: "Outline",
      type: _.TOOL,
      match: ({ viewMode: r }) => !!(r && r.match(/^(story|docs)$/)),
      render: () => n.createElement(A, null),
    });
  });
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.js.map
