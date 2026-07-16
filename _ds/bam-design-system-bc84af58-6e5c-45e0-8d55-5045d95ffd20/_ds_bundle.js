/* @ds-bundle: {"format":4,"namespace":"BAMDesignSystem_bc84af","components":[{"name":"BlueprintFrame","sourcePath":"components/brand/BlueprintFrame.jsx"},{"name":"DotGrid","sourcePath":"components/brand/DotGrid.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProjectCard","sourcePath":"components/brand/ProjectCard.jsx"},{"name":"TitleBlock","sourcePath":"components/brand/TitleBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/BlueprintFrame.jsx":"7a8fb190e437","components/brand/DotGrid.jsx":"d3cca6a34f43","components/brand/Logo.jsx":"eb2154371b28","components/brand/ProjectCard.jsx":"56af5d16c049","components/brand/TitleBlock.jsx":"419c9360f3e5","components/core/Button.jsx":"e692aa17d21d","components/core/Input.jsx":"33b5e86ac0c0","components/core/Tag.jsx":"9d631ff6f310","ui_kits/aplicaciones/screens.jsx":"cf30e3705b26"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BAMDesignSystem_bc84af = window.BAMDesignSystem_bc84af || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BlueprintFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BlueprintFrame({
  dark = false,
  children,
  style,
  ...rest
}) {
  const line = dark ? 'rgba(227,225,222,.6)' : 'rgba(0,0,0,.55)';
  const h = dark ? 'var(--bam-stone)' : 'var(--bam-black)';
  const H = pos => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 5,
      height: 5,
      background: h,
      ...pos
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      border: '1px solid ' + line,
      ...style
    }
  }, rest), children, H({
    left: -3,
    top: -3
  }), H({
    right: -3,
    top: -3
  }), H({
    left: -3,
    bottom: -3
  }), H({
    right: -3,
    bottom: -3
  }), H({
    left: 'calc(50% - 3px)',
    top: -3
  }), H({
    left: 'calc(50% - 3px)',
    bottom: -3
  }));
}
Object.assign(__ds_scope, { BlueprintFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BlueprintFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/DotGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DotGrid({
  dark = false,
  module = 80,
  dot = 1.2,
  style,
  children,
  ...rest
}) {
  const c = dark ? 'var(--grid-dot-color-on-dark)' : 'var(--grid-dot-color)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      backgroundImage: `radial-gradient(${c} ${dot}px, transparent ${dot}px)`,
      backgroundSize: `${module}px ${module}px`,
      backgroundPosition: `${module / 3}px ${module / 3}px`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { DotGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DotGrid.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  black: 'BAM_Logo-000000.png',
  dark: 'BAM_Logo-373737.png',
  stone: 'BAM_Logo-E3E1DE.png',
  orange: 'BAM_Logo-F4643B.png',
  periwinkle: 'BAM_Logo-95ABE8.png'
};
function Logo({
  color = 'black',
  width = 160,
  root = '.',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: root + '/assets/logo/' + (FILES[color] || FILES.black),
    alt: "BAM",
    style: {
      width,
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  title = 'Larco 1035',
  bullets = ['Plantas abiertas', 'Materiales cálidos', 'Integración de espacios'],
  dark = true,
  width = 340,
  height = 430,
  style,
  ...rest
}) {
  const bg = dark ? 'var(--bam-dark)' : 'var(--bam-stone)';
  const ink = dark ? 'var(--bam-white)' : 'var(--bam-black)';
  return /*#__PURE__*/React.createElement(__ds_scope.DotGrid, _extends({
    dark: dark,
    module: 68,
    style: {
      background: bg,
      color: ink,
      width,
      height,
      boxSizing: 'border-box',
      padding: '28px 24px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.BlueprintFrame, {
    dark: dark,
    style: {
      display: 'inline-block',
      padding: '10px 20px',
      marginLeft: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      letterSpacing: 'var(--tracking-title)',
      whiteSpace: 'nowrap'
    }
  }, title)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '18px 0 0',
      padding: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      lineHeight: 1.6
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, b))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/TitleBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cell = {
  borderLeft: '1px solid currentColor',
  padding: '8px 10px',
  fontFamily: 'var(--font-mono)',
  fontSize: 10,
  textTransform: 'uppercase',
  lineHeight: 1.5
};
function TitleBlock({
  project = 'Larco 1036',
  address = 'Av. Larco 1036, Miraflores',
  code = 'A001',
  projectDate = '23.10.2026',
  planDate = '23.10.2025',
  floor = 'Piso 5',
  plan = 'Plano Elevación',
  scale = '1/7',
  notes = 'Este plano debe leerse en conjunto con todas las especialidades. Las cotas prevalecen sobre el dibujo.',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1.2fr 1fr 1fr .7fr 1fr .7fr 2.4fr 1fr',
      border: '1px solid currentColor',
      color: 'var(--bam-black)',
      background: 'var(--bam-white)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      borderLeft: 'none',
      display: 'flex',
      alignItems: 'flex-end',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      textTransform: 'none',
      letterSpacing: 'var(--tracking-title)'
    }
  }, project), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, code, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), address), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, "Fecha del proyecto ", projectDate), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, "Fecha del plano ", planDate), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, floor), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, plan), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, "Escala: ", scale, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "N \u2191 Norte"), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, notes), /*#__PURE__*/React.createElement("div", {
    style: cell
  }, "Revisiones:"));
}
Object.assign(__ds_scope, { TitleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TitleBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'solid',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 16px' : '12px 24px';
  const fs = size === 'sm' ? 11 : 13;
  const looks = {
    solid: {
      background: 'var(--bam-black)',
      color: 'var(--bam-white)',
      border: '1px solid var(--bam-black)'
    },
    outline: {
      background: 'transparent',
      color: 'currentColor',
      border: '1px solid currentColor'
    },
    inverse: {
      background: 'var(--bam-stone)',
      color: 'var(--bam-black)',
      border: '1px solid var(--bam-stone)'
    },
    accent: {
      background: 'var(--bam-orange)',
      color: 'var(--bam-black)',
      border: '1px solid var(--bam-orange)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hovers = {
    solid: {
      background: 'var(--bam-dark)'
    },
    outline: {
      background: 'var(--bam-black)',
      color: 'var(--bam-white)',
      borderColor: 'var(--bam-black)'
    },
    inverse: {
      background: 'var(--bam-white)'
    },
    accent: {
      background: 'var(--bam-black)',
      color: 'var(--bam-orange)',
      borderColor: 'var(--bam-black)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 0,
      fontSize: fs,
      padding: pad,
      borderRadius: 0,
      cursor: 'pointer',
      transition: 'background .12s,color .12s',
      ...looks[variant],
      ...(hover ? hovers[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  dark = false,
  style,
  inputStyle,
  ...rest
}) {
  const ink = dark ? 'var(--bam-stone)' : 'var(--bam-black)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      color: ink,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      opacity: .65
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      padding: '10px 12px',
      background: 'transparent',
      color: ink,
      border: '1px solid ' + (dark ? 'rgba(227,225,222,.5)' : 'var(--bam-black)'),
      borderRadius: 0,
      outline: 'none',
      ...inputStyle
    },
    onFocus: e => e.target.style.borderColor = 'var(--bam-orange)',
    onBlur: e => e.target.style.borderColor = dark ? 'rgba(227,225,222,.5)' : 'var(--bam-black)'
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = 'ink',
  style,
  ...rest
}) {
  const tones = {
    ink: {
      borderColor: 'var(--border-ink)',
      color: 'var(--bam-black)'
    },
    onDark: {
      borderColor: 'rgba(227,225,222,.6)',
      color: 'var(--bam-stone)'
    },
    accent: {
      borderColor: 'var(--bam-orange)',
      color: 'var(--bam-orange)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      border: '1px solid',
      padding: '6px 12px',
      display: 'inline-block',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aplicaciones/screens.jsx
try { (() => {
const {
  Logo,
  ProjectCard,
  TitleBlock,
  DotGrid,
  BlueprintFrame,
  Tag
} = window.BAMDesignSystem_bc84af;
const R = '../..';
function PosterScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bam-black)',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    title: "Larco 1035",
    dark: true,
    width: 360,
    height: 470
  }), /*#__PURE__*/React.createElement(DotGrid, {
    module: 68,
    style: {
      background: 'var(--bam-stone)',
      width: 360,
      height: 470,
      boxSizing: 'border-box',
      padding: '28px 24px',
      color: 'var(--bam-black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      textTransform: 'uppercase',
      lineHeight: 1.7
    }
  }, "Plantas abiertas", /*#__PURE__*/React.createElement("br", null), "Materiales c\xE1lidos", /*#__PURE__*/React.createElement("br", null), "Integraci\xF3n de espacios"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 24,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "B"), /*#__PURE__*/React.createElement("span", null, "A"), /*#__PURE__*/React.createElement("span", null, "M"))));
}
function PlanoScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bam-black)',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bam-white)',
      width: 900,
      color: 'var(--bam-black)',
      padding: '28px 32px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, "B"), /*#__PURE__*/React.createElement("span", null, "A"), /*#__PURE__*/React.createElement("span", null, "M")), /*#__PURE__*/React.createElement(DotGrid, {
    module: 90,
    style: {
      height: 330,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BlueprintFrame, {
    style: {
      padding: '40px 60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "[ Plano \u2014 Piso 5 \xB7 dibujo no provisto ]"))), /*#__PURE__*/React.createElement(TitleBlock, {
    style: {
      marginTop: 16
    }
  })));
}
function PapeleriaScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bam-black)',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bam-dark)',
      width: 380,
      height: 230,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    color: "dark",
    width: 230,
    root: R,
    style: {
      filter: 'brightness(1.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bam-periwinkle)',
      width: 380,
      height: 230,
      boxSizing: 'border-box',
      padding: '28px 30px',
      color: 'var(--bam-black)',
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      lineHeight: 1.35
    }
  }, "Sebasti\xE1n Bonilla", /*#__PURE__*/React.createElement("br", null), "Arquitecto", /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 8
    }
  }, "sebastian@hygge.pe", /*#__PURE__*/React.createElement("br", null), "+51 951 869 600"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Av. Emilio Cavenecia 151,", /*#__PURE__*/React.createElement("br", null), "Miraflores 15073"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 4
    }
  }, "hygge.pe/bam")));
}
function App() {
  const [tab, setTab] = React.useState('poster');
  const tabs = [['poster', 'Poster de proyecto'], ['plano', 'Lámina / Plano'], ['papeleria', 'Papelería']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      background: 'var(--bam-white)',
      borderBottom: '1px solid var(--border-ink)',
      padding: '12px 20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    color: "black",
    width: 72,
    root: R
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, tabs.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      padding: '8px 14px',
      cursor: 'pointer',
      borderRadius: 0,
      border: '1px solid var(--bam-black)',
      background: tab === k ? 'var(--bam-black)' : 'transparent',
      color: tab === k ? 'var(--bam-white)' : 'var(--bam-black)'
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Bonilla Arquitectura Metropolitana")), tab === 'poster' && /*#__PURE__*/React.createElement(PosterScreen, null), tab === 'plano' && /*#__PURE__*/React.createElement(PlanoScreen, null), tab === 'papeleria' && /*#__PURE__*/React.createElement(PapeleriaScreen, null));
}
window.BamAplicacionesApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aplicaciones/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BlueprintFrame = __ds_scope.BlueprintFrame;

__ds_ns.DotGrid = __ds_scope.DotGrid;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.TitleBlock = __ds_scope.TitleBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
