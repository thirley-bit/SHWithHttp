module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929343, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var transformTypeScript = require('@babel/plugin-transform-typescript');
var helperValidatorOption = require('@babel/helper-validator-option');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var transformTypeScript__default = /*#__PURE__*/_interopDefaultLegacy(transformTypeScript);

const v = new helperValidatorOption.OptionValidator("@babel/preset-typescript");
function normalizeOptions(options = {}) {
  let {
    allowNamespaces = true,
    jsxPragma,
    onlyRemoveTypeImports
  } = options;
  const TopLevelOptions = {
    allExtensions: "allExtensions",
    allowNamespaces: "allowNamespaces",
    disallowAmbiguousJSXLike: "disallowAmbiguousJSXLike",
    isTSX: "isTSX",
    jsxPragma: "jsxPragma",
    jsxPragmaFrag: "jsxPragmaFrag",
    onlyRemoveTypeImports: "onlyRemoveTypeImports",
    optimizeConstEnums: "optimizeConstEnums"
  };
  const jsxPragmaFrag = v.validateStringOption(TopLevelOptions.jsxPragmaFrag, options.jsxPragmaFrag, "React.Fragment");
  const allExtensions = v.validateBooleanOption(TopLevelOptions.allExtensions, options.allExtensions, false);
  const isTSX = v.validateBooleanOption(TopLevelOptions.isTSX, options.isTSX, false);
  if (isTSX) {
    v.invariant(allExtensions, "isTSX:true requires allExtensions:true");
  }
  const disallowAmbiguousJSXLike = v.validateBooleanOption(TopLevelOptions.disallowAmbiguousJSXLike, options.disallowAmbiguousJSXLike, false);
  if (disallowAmbiguousJSXLike) {
    v.invariant(allExtensions, "disallowAmbiguousJSXLike:true requires allExtensions:true");
  }
  const optimizeConstEnums = v.validateBooleanOption(TopLevelOptions.optimizeConstEnums, options.optimizeConstEnums, false);
  return {
    allExtensions,
    allowNamespaces,
    disallowAmbiguousJSXLike,
    isTSX,
    jsxPragma,
    jsxPragmaFrag,
    onlyRemoveTypeImports,
    optimizeConstEnums
  };
}

var index = helperPluginUtils.declarePreset((api, opts) => {
  api.assertVersion(7);
  const {
    allExtensions,
    allowNamespaces,
    disallowAmbiguousJSXLike,
    isTSX,
    jsxPragma,
    jsxPragmaFrag,
    onlyRemoveTypeImports,
    optimizeConstEnums
  } = normalizeOptions(opts);
  const pluginOptions = (isTSX, disallowAmbiguousJSXLike) => ({
    allowDeclareFields: opts.allowDeclareFields,
    allowNamespaces,
    disallowAmbiguousJSXLike,
    isTSX,
    jsxPragma,
    jsxPragmaFrag,
    onlyRemoveTypeImports,
    optimizeConstEnums
  });
  return {
    overrides: allExtensions ? [{
      plugins: [[transformTypeScript__default["default"], pluginOptions(isTSX, disallowAmbiguousJSXLike)]]
    }] : [{
      test: /\.ts$/,
      plugins: [[transformTypeScript__default["default"], pluginOptions(false, false)]]
    }, {
      test: /\.mts$/,
      sourceType: "module",
      plugins: [[transformTypeScript__default["default"], pluginOptions(false, true)]]
    }, {
      test: /\.cts$/,
      sourceType: "script",
      plugins: [[transformTypeScript__default["default"], pluginOptions(false, true)]]
    }, {
      test: /\.tsx$/,
      plugins: [[transformTypeScript__default["default"], pluginOptions(true, false)]]
    }]
  };
});

exports["default"] = index;
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929343);
})()
//miniprogram-npm-outsideDeps=["@babel/helper-plugin-utils","@babel/plugin-transform-typescript","@babel/helper-validator-option"]
//# sourceMappingURL=index.js.map