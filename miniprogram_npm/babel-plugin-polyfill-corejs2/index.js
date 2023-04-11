module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929811, function(require, module, exports) {


exports.__esModule = true;
exports.default = void 0;

var _corejs2BuiltIns = _interopRequireDefault(require("@babel/compat-data/corejs2-built-ins"));

var _builtInDefinitions = require("./built-in-definitions");

var _addPlatformSpecificPolyfills = _interopRequireDefault(require("./add-platform-specific-polyfills"));

var _helpers = require("./helpers");

var _helperDefinePolyfillProvider = _interopRequireDefault(require("@babel/helper-define-polyfill-provider"));

var _babel = _interopRequireWildcard(require("@babel/core"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  types: t
} = _babel.default || _babel;
const presetEnvCompat = "#__secret_key__@babel/preset-env__compatibility";
const runtimeCompat = "#__secret_key__@babel/runtime__compatibility";
const has = Function.call.bind(Object.hasOwnProperty);

var _default = (0, _helperDefinePolyfillProvider.default)(function (api, {
  [presetEnvCompat]: {
    entryInjectRegenerator
  } = {
    entryInjectRegenerator: false
  },
  [runtimeCompat]: {
    useBabelRuntime,
    runtimeVersion,
    ext = ".js"
  } = {
    useBabelRuntime: "",
    runtimeVersion: ""
  }
}) {
  const resolve = api.createMetaResolver({
    global: _builtInDefinitions.BuiltIns,
    static: _builtInDefinitions.StaticProperties,
    instance: _builtInDefinitions.InstanceProperties
  });
  const {
    debug,
    shouldInjectPolyfill,
    method
  } = api;
  const polyfills = (0, _addPlatformSpecificPolyfills.default)(api.targets, method, _corejs2BuiltIns.default);
  const coreJSBase = useBabelRuntime ? `${useBabelRuntime}/core-js` : method === "usage-pure" ? "core-js/library/fn" : "core-js/modules";

  function inject(name, utils) {
    if (typeof name === "string") {
      // Some polyfills aren't always available, for example
      // web.dom.iterable when targeting node
      if (has(polyfills, name) && shouldInjectPolyfill(name)) {
        debug(name);
        utils.injectGlobalImport(`${coreJSBase}/${name}.js`);
      }

      return;
    }

    name.forEach(name => inject(name, utils));
  }

  function maybeInjectPure(desc, hint, utils) {
    const {
      pure,
      meta,
      name
    } = desc;
    if (!pure || !shouldInjectPolyfill(name)) return;

    if (runtimeVersion && meta && meta.minRuntimeVersion && !(0, _helpers.hasMinVersion)(meta && meta.minRuntimeVersion, runtimeVersion)) {
      return;
    }

    return utils.injectDefaultImport(`${coreJSBase}/${pure}${ext}`, hint);
  }

  return {
    name: "corejs2",
    polyfills,

    entryGlobal(meta, utils, path) {
      if (meta.kind === "import" && meta.source === "core-js") {
        debug(null);
        inject(Object.keys(polyfills), utils);

        if (entryInjectRegenerator) {
          utils.injectGlobalImport("regenerator-runtime/runtime.js");
        }

        path.remove();
      }
    },

    usageGlobal(meta, utils) {
      const resolved = resolve(meta);
      if (!resolved) return;
      let deps = resolved.desc.global;

      if (resolved.kind !== "global" && "object" in meta && meta.object && meta.placement === "prototype") {
        const low = meta.object.toLowerCase();
        deps = deps.filter(m => m.includes(low));
      }

      inject(deps, utils);
    },

    usagePure(meta, utils, path) {
      if (meta.kind === "in") {
        if (meta.key === "Symbol.iterator") {
          path.replaceWith(t.callExpression(utils.injectDefaultImport(`${coreJSBase}/is-iterable${ext}`, "isIterable"), [path.node.right] // meta.kind === "in" narrows this
          ));
        }

        return;
      }

      if (path.parentPath.isUnaryExpression({
        operator: "delete"
      })) return;

      if (meta.kind === "property") {
        // We can't compile destructuring.
        if (!path.isMemberExpression()) return;
        if (!path.isReferenced()) return;

        if (meta.key === "Symbol.iterator" && shouldInjectPolyfill("es6.symbol") && path.parentPath.isCallExpression({
          callee: path.node
        }) && path.parentPath.node.arguments.length === 0) {
          path.parentPath.replaceWith(t.callExpression(utils.injectDefaultImport(`${coreJSBase}/get-iterator${ext}`, "getIterator"), [path.node.object]));
          path.skip();
          return;
        }
      }

      const resolved = resolve(meta);
      if (!resolved) return;
      const id = maybeInjectPure(resolved.desc, resolved.name, utils);
      if (id) path.replaceWith(id);
    },

    visitor: method === "usage-global" && {
      // yield*
      YieldExpression(path) {
        if (path.node.delegate) {
          inject("web.dom.iterable", api.getUtils(path));
        }
      },

      // for-of, [a, b] = c
      "ForOfStatement|ArrayPattern"(path) {
        _builtInDefinitions.CommonIterators.forEach(name => inject(name, api.getUtils(path)));
      }

    }
  };
});

exports.default = _default;
}, function(modId) {var map = {"./built-in-definitions":1680223929812,"./add-platform-specific-polyfills":1680223929813,"./helpers":1680223929814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929812, function(require, module, exports) {


exports.__esModule = true;
exports.StaticProperties = exports.InstanceProperties = exports.CommonIterators = exports.BuiltIns = void 0;

var _corejs2BuiltIns = _interopRequireDefault(require("@babel/compat-data/corejs2-built-ins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const define = (name, pure, global = [], meta) => {
  return {
    name,
    pure,
    global,
    meta
  };
};

const pureAndGlobal = (pure, global, minRuntimeVersion = null) => define(global[0], pure, global, {
  minRuntimeVersion
});

const globalOnly = global => define(global[0], null, global);

const pureOnly = (pure, name) => define(name, pure, []);

const ArrayNatureIterators = ["es6.object.to-string", "es6.array.iterator", "web.dom.iterable"];
const CommonIterators = ["es6.string.iterator", ...ArrayNatureIterators];
exports.CommonIterators = CommonIterators;
const PromiseDependencies = ["es6.object.to-string", "es6.promise"];
const BuiltIns = {
  DataView: globalOnly(["es6.typed.data-view"]),
  Float32Array: globalOnly(["es6.typed.float32-array"]),
  Float64Array: globalOnly(["es6.typed.float64-array"]),
  Int8Array: globalOnly(["es6.typed.int8-array"]),
  Int16Array: globalOnly(["es6.typed.int16-array"]),
  Int32Array: globalOnly(["es6.typed.int32-array"]),
  Map: pureAndGlobal("map", ["es6.map", ...CommonIterators]),
  Number: globalOnly(["es6.number.constructor"]),
  Promise: pureAndGlobal("promise", PromiseDependencies),
  RegExp: globalOnly(["es6.regexp.constructor"]),
  Set: pureAndGlobal("set", ["es6.set", ...CommonIterators]),
  Symbol: pureAndGlobal("symbol", ["es6.symbol"]),
  Uint8Array: globalOnly(["es6.typed.uint8-array"]),
  Uint8ClampedArray: globalOnly(["es6.typed.uint8-clamped-array"]),
  Uint16Array: globalOnly(["es6.typed.uint16-array"]),
  Uint32Array: globalOnly(["es6.typed.uint32-array"]),
  WeakMap: pureAndGlobal("weak-map", ["es6.weak-map", ...CommonIterators]),
  WeakSet: pureAndGlobal("weak-set", ["es6.weak-set", ...CommonIterators]),
  setImmediate: pureOnly("set-immediate", "web.immediate"),
  clearImmediate: pureOnly("clear-immediate", "web.immediate"),
  parseFloat: pureOnly("parse-float", "es6.parse-float"),
  parseInt: pureOnly("parse-int", "es6.parse-int")
};
exports.BuiltIns = BuiltIns;
const InstanceProperties = {
  __defineGetter__: globalOnly(["es7.object.define-getter"]),
  __defineSetter__: globalOnly(["es7.object.define-setter"]),
  __lookupGetter__: globalOnly(["es7.object.lookup-getter"]),
  __lookupSetter__: globalOnly(["es7.object.lookup-setter"]),
  anchor: globalOnly(["es6.string.anchor"]),
  big: globalOnly(["es6.string.big"]),
  bind: globalOnly(["es6.function.bind"]),
  blink: globalOnly(["es6.string.blink"]),
  bold: globalOnly(["es6.string.bold"]),
  codePointAt: globalOnly(["es6.string.code-point-at"]),
  copyWithin: globalOnly(["es6.array.copy-within"]),
  endsWith: globalOnly(["es6.string.ends-with"]),
  entries: globalOnly(ArrayNatureIterators),
  every: globalOnly(["es6.array.every"]),
  fill: globalOnly(["es6.array.fill"]),
  filter: globalOnly(["es6.array.filter"]),
  finally: globalOnly(["es7.promise.finally", ...PromiseDependencies]),
  find: globalOnly(["es6.array.find"]),
  findIndex: globalOnly(["es6.array.find-index"]),
  fixed: globalOnly(["es6.string.fixed"]),
  flags: globalOnly(["es6.regexp.flags"]),
  flatMap: globalOnly(["es7.array.flat-map"]),
  fontcolor: globalOnly(["es6.string.fontcolor"]),
  fontsize: globalOnly(["es6.string.fontsize"]),
  forEach: globalOnly(["es6.array.for-each"]),
  includes: globalOnly(["es6.string.includes", "es7.array.includes"]),
  indexOf: globalOnly(["es6.array.index-of"]),
  italics: globalOnly(["es6.string.italics"]),
  keys: globalOnly(ArrayNatureIterators),
  lastIndexOf: globalOnly(["es6.array.last-index-of"]),
  link: globalOnly(["es6.string.link"]),
  map: globalOnly(["es6.array.map"]),
  match: globalOnly(["es6.regexp.match"]),
  name: globalOnly(["es6.function.name"]),
  padStart: globalOnly(["es7.string.pad-start"]),
  padEnd: globalOnly(["es7.string.pad-end"]),
  reduce: globalOnly(["es6.array.reduce"]),
  reduceRight: globalOnly(["es6.array.reduce-right"]),
  repeat: globalOnly(["es6.string.repeat"]),
  replace: globalOnly(["es6.regexp.replace"]),
  search: globalOnly(["es6.regexp.search"]),
  small: globalOnly(["es6.string.small"]),
  some: globalOnly(["es6.array.some"]),
  sort: globalOnly(["es6.array.sort"]),
  split: globalOnly(["es6.regexp.split"]),
  startsWith: globalOnly(["es6.string.starts-with"]),
  strike: globalOnly(["es6.string.strike"]),
  sub: globalOnly(["es6.string.sub"]),
  sup: globalOnly(["es6.string.sup"]),
  toISOString: globalOnly(["es6.date.to-iso-string"]),
  toJSON: globalOnly(["es6.date.to-json"]),
  toString: globalOnly(["es6.object.to-string", "es6.date.to-string", "es6.regexp.to-string"]),
  trim: globalOnly(["es6.string.trim"]),
  trimEnd: globalOnly(["es7.string.trim-right"]),
  trimLeft: globalOnly(["es7.string.trim-left"]),
  trimRight: globalOnly(["es7.string.trim-right"]),
  trimStart: globalOnly(["es7.string.trim-left"]),
  values: globalOnly(ArrayNatureIterators)
}; // This isn't present in older @babel/compat-data versions

exports.InstanceProperties = InstanceProperties;

if ("es6.array.slice" in _corejs2BuiltIns.default) {
  InstanceProperties.slice = globalOnly(["es6.array.slice"]);
}

const StaticProperties = {
  Array: {
    from: pureAndGlobal("array/from", ["es6.symbol", "es6.array.from", ...CommonIterators]),
    isArray: pureAndGlobal("array/is-array", ["es6.array.is-array"]),
    of: pureAndGlobal("array/of", ["es6.array.of"])
  },
  Date: {
    now: pureAndGlobal("date/now", ["es6.date.now"])
  },
  JSON: {
    stringify: pureOnly("json/stringify", "es6.symbol")
  },
  Math: {
    // 'Math' was not included in the 7.0.0
    // release of '@babel/runtime'. See issue https://github.com/babel/babel/pull/8616.
    acosh: pureAndGlobal("math/acosh", ["es6.math.acosh"], "7.0.1"),
    asinh: pureAndGlobal("math/asinh", ["es6.math.asinh"], "7.0.1"),
    atanh: pureAndGlobal("math/atanh", ["es6.math.atanh"], "7.0.1"),
    cbrt: pureAndGlobal("math/cbrt", ["es6.math.cbrt"], "7.0.1"),
    clz32: pureAndGlobal("math/clz32", ["es6.math.clz32"], "7.0.1"),
    cosh: pureAndGlobal("math/cosh", ["es6.math.cosh"], "7.0.1"),
    expm1: pureAndGlobal("math/expm1", ["es6.math.expm1"], "7.0.1"),
    fround: pureAndGlobal("math/fround", ["es6.math.fround"], "7.0.1"),
    hypot: pureAndGlobal("math/hypot", ["es6.math.hypot"], "7.0.1"),
    imul: pureAndGlobal("math/imul", ["es6.math.imul"], "7.0.1"),
    log1p: pureAndGlobal("math/log1p", ["es6.math.log1p"], "7.0.1"),
    log10: pureAndGlobal("math/log10", ["es6.math.log10"], "7.0.1"),
    log2: pureAndGlobal("math/log2", ["es6.math.log2"], "7.0.1"),
    sign: pureAndGlobal("math/sign", ["es6.math.sign"], "7.0.1"),
    sinh: pureAndGlobal("math/sinh", ["es6.math.sinh"], "7.0.1"),
    tanh: pureAndGlobal("math/tanh", ["es6.math.tanh"], "7.0.1"),
    trunc: pureAndGlobal("math/trunc", ["es6.math.trunc"], "7.0.1")
  },
  Number: {
    EPSILON: pureAndGlobal("number/epsilon", ["es6.number.epsilon"]),
    MIN_SAFE_INTEGER: pureAndGlobal("number/min-safe-integer", ["es6.number.min-safe-integer"]),
    MAX_SAFE_INTEGER: pureAndGlobal("number/max-safe-integer", ["es6.number.max-safe-integer"]),
    isFinite: pureAndGlobal("number/is-finite", ["es6.number.is-finite"]),
    isInteger: pureAndGlobal("number/is-integer", ["es6.number.is-integer"]),
    isSafeInteger: pureAndGlobal("number/is-safe-integer", ["es6.number.is-safe-integer"]),
    isNaN: pureAndGlobal("number/is-nan", ["es6.number.is-nan"]),
    parseFloat: pureAndGlobal("number/parse-float", ["es6.number.parse-float"]),
    parseInt: pureAndGlobal("number/parse-int", ["es6.number.parse-int"])
  },
  Object: {
    assign: pureAndGlobal("object/assign", ["es6.object.assign"]),
    create: pureAndGlobal("object/create", ["es6.object.create"]),
    defineProperties: pureAndGlobal("object/define-properties", ["es6.object.define-properties"]),
    defineProperty: pureAndGlobal("object/define-property", ["es6.object.define-property"]),
    entries: pureAndGlobal("object/entries", ["es7.object.entries"]),
    freeze: pureAndGlobal("object/freeze", ["es6.object.freeze"]),
    getOwnPropertyDescriptor: pureAndGlobal("object/get-own-property-descriptor", ["es6.object.get-own-property-descriptor"]),
    getOwnPropertyDescriptors: pureAndGlobal("object/get-own-property-descriptors", ["es7.object.get-own-property-descriptors"]),
    getOwnPropertyNames: pureAndGlobal("object/get-own-property-names", ["es6.object.get-own-property-names"]),
    getOwnPropertySymbols: pureAndGlobal("object/get-own-property-symbols", ["es6.symbol"]),
    getPrototypeOf: pureAndGlobal("object/get-prototype-of", ["es6.object.get-prototype-of"]),
    is: pureAndGlobal("object/is", ["es6.object.is"]),
    isExtensible: pureAndGlobal("object/is-extensible", ["es6.object.is-extensible"]),
    isFrozen: pureAndGlobal("object/is-frozen", ["es6.object.is-frozen"]),
    isSealed: pureAndGlobal("object/is-sealed", ["es6.object.is-sealed"]),
    keys: pureAndGlobal("object/keys", ["es6.object.keys"]),
    preventExtensions: pureAndGlobal("object/prevent-extensions", ["es6.object.prevent-extensions"]),
    seal: pureAndGlobal("object/seal", ["es6.object.seal"]),
    setPrototypeOf: pureAndGlobal("object/set-prototype-of", ["es6.object.set-prototype-of"]),
    values: pureAndGlobal("object/values", ["es7.object.values"])
  },
  Promise: {
    all: globalOnly(CommonIterators),
    race: globalOnly(CommonIterators)
  },
  Reflect: {
    apply: pureAndGlobal("reflect/apply", ["es6.reflect.apply"]),
    construct: pureAndGlobal("reflect/construct", ["es6.reflect.construct"]),
    defineProperty: pureAndGlobal("reflect/define-property", ["es6.reflect.define-property"]),
    deleteProperty: pureAndGlobal("reflect/delete-property", ["es6.reflect.delete-property"]),
    get: pureAndGlobal("reflect/get", ["es6.reflect.get"]),
    getOwnPropertyDescriptor: pureAndGlobal("reflect/get-own-property-descriptor", ["es6.reflect.get-own-property-descriptor"]),
    getPrototypeOf: pureAndGlobal("reflect/get-prototype-of", ["es6.reflect.get-prototype-of"]),
    has: pureAndGlobal("reflect/has", ["es6.reflect.has"]),
    isExtensible: pureAndGlobal("reflect/is-extensible", ["es6.reflect.is-extensible"]),
    ownKeys: pureAndGlobal("reflect/own-keys", ["es6.reflect.own-keys"]),
    preventExtensions: pureAndGlobal("reflect/prevent-extensions", ["es6.reflect.prevent-extensions"]),
    set: pureAndGlobal("reflect/set", ["es6.reflect.set"]),
    setPrototypeOf: pureAndGlobal("reflect/set-prototype-of", ["es6.reflect.set-prototype-of"])
  },
  String: {
    at: pureOnly("string/at", "es7.string.at"),
    fromCodePoint: pureAndGlobal("string/from-code-point", ["es6.string.from-code-point"]),
    raw: pureAndGlobal("string/raw", ["es6.string.raw"])
  },
  Symbol: {
    // FIXME: Pure disabled to work around zloirock/core-js#262.
    asyncIterator: globalOnly(["es6.symbol", "es7.symbol.async-iterator"]),
    for: pureOnly("symbol/for", "es6.symbol"),
    hasInstance: pureOnly("symbol/has-instance", "es6.symbol"),
    isConcatSpreadable: pureOnly("symbol/is-concat-spreadable", "es6.symbol"),
    iterator: define("es6.symbol", "symbol/iterator", CommonIterators),
    keyFor: pureOnly("symbol/key-for", "es6.symbol"),
    match: pureAndGlobal("symbol/match", ["es6.regexp.match"]),
    replace: pureOnly("symbol/replace", "es6.symbol"),
    search: pureOnly("symbol/search", "es6.symbol"),
    species: pureOnly("symbol/species", "es6.symbol"),
    split: pureOnly("symbol/split", "es6.symbol"),
    toPrimitive: pureOnly("symbol/to-primitive", "es6.symbol"),
    toStringTag: pureOnly("symbol/to-string-tag", "es6.symbol"),
    unscopables: pureOnly("symbol/unscopables", "es6.symbol")
  }
};
exports.StaticProperties = StaticProperties;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929813, function(require, module, exports) {


exports.__esModule = true;
exports.default = _default;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const webPolyfills = {
  "web.timers": {},
  "web.immediate": {},
  "web.dom.iterable": {}
};
const purePolyfills = {
  "es6.parse-float": {},
  "es6.parse-int": {},
  "es7.string.at": {}
};

function _default(targets, method, polyfills) {
  const targetNames = Object.keys(targets);
  const isAnyTarget = !targetNames.length;
  const isWebTarget = targetNames.some(name => name !== "node");
  return _extends({}, polyfills, method === "usage-pure" ? purePolyfills : null, isAnyTarget || isWebTarget ? webPolyfills : null);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929814, function(require, module, exports) {


exports.__esModule = true;
exports.hasMinVersion = hasMinVersion;

var _semver = _interopRequireDefault(require("semver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasMinVersion(minVersion, runtimeVersion) {
  // If the range is unavailable, we're running the script during Babel's
  // build process, and we want to assume that all versions are satisfied so
  // that the built output will include all definitions.
  if (!runtimeVersion || !minVersion) return true; // semver.intersects() has some surprising behavior with comparing ranges
  // with preprelease versions. We add '^' to ensure that we are always
  // comparing ranges with ranges, which sidesteps this logic.
  // For example:
  //
  //   semver.intersects(`<7.0.1`, "7.0.0-beta.0") // false - surprising
  //   semver.intersects(`<7.0.1`, "^7.0.0-beta.0") // true - expected
  //
  // This is because the first falls back to
  //
  //   semver.satisfies("7.0.0-beta.0", `<7.0.1`) // false - surprising
  //
  // and this fails because a prerelease version can only satisfy a range
  // if it is a prerelease within the same major/minor/patch range.
  //
  // Note: If this is found to have issues, please also revist the logic in
  // babel-core's availableHelper() API.

  if (_semver.default.valid(runtimeVersion)) runtimeVersion = `^${runtimeVersion}`;
  return !_semver.default.intersects(`<${minVersion}`, runtimeVersion) && !_semver.default.intersects(`>=8.0.0`, runtimeVersion);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929811);
})()
//miniprogram-npm-outsideDeps=["@babel/compat-data/corejs2-built-ins","@babel/helper-define-polyfill-provider","@babel/core","semver"]
//# sourceMappingURL=index.js.map