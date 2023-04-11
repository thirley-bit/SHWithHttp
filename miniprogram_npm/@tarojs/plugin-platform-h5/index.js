module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929624, function(require, module, exports) {
module.exports = require('./dist/index.js').default

module.exports.default = module.exports
module.exports.H5 = require('./dist/index.js').H5

}, function(modId) {var map = {"./dist/index.js":1680223929625}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929625, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var service = require('@tarojs/service');
var resolve = require('resolve');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var resolve__namespace = /*#__PURE__*/_interopNamespace(resolve);

function resolveSync(id, opts = {
    basedir: __dirname
}) {
    return resolve__namespace.sync(id, opts);
}

const compLibraryAlias = {
    'vue': 'vue2',
    'vue3': 'vue3'
};
const PACKAGE_NAME = '@tarojs/plugin-platform-h5';
class H5 extends service.TaroPlatformWeb {
    constructor(ctx, config) {
        super(ctx, config);
        this.platform = 'h5';
        this.runtimePath = `${PACKAGE_NAME}/dist/runtime`;
        this.setupTransaction.addWrapper({
            close() {
                this.modifyWebpackConfig();
            }
        });
    }
    get framework() {
        return this.ctx.initialConfig.framework || 'react';
    }
    get useHtmlComponents() {
        var _a;
        return !!((_a = this.ctx.initialConfig.h5) === null || _a === void 0 ? void 0 : _a.useHtmlComponents);
    }
    get componentLibrary() {
        if (this.useHtmlComponents && this.framework === 'react') {
            return './runtime/components';
        }
        else {
            return `@tarojs/components/lib/${compLibraryAlias[this.framework] || 'react'}`;
        }
    }
    /**
     * 修改 Webpack 配置
     */
    modifyWebpackConfig() {
        this.ctx.modifyWebpackChain(({ chain }) => {
            const rules = chain.module.rules;
            const script = rules.get('script');
            const babelLoader = script.uses.get('babelLoader');
            babelLoader.set('options', Object.assign(Object.assign({}, babelLoader.get('options')), { plugins: [
                    [require('babel-plugin-transform-taroapi'), {
                            packageName: '@tarojs/taro',
                            apis: require(resolveSync('./taroApis'))
                        }]
                ] }));
            const alias = chain.resolve.alias;
            // TODO 考虑集成到 taroComponentsPath 中，与小程序端对齐
            alias.set('@tarojs/components$', require.resolve(this.componentLibrary));
            alias.set('@tarojs/router$', require.resolve('@tarojs/router'));
            alias.set('@tarojs/taro', require.resolve('./runtime/apis'));
            chain.plugin('mainPlugin')
                .tap(args => {
                var _a;
                (_a = args[0]).loaderMeta || (_a.loaderMeta = {
                    extraImportForWeb: '',
                    execBeforeCreateWebApp: ''
                });
                switch (this.framework) {
                    case 'vue':
                        args[0].loaderMeta.extraImportForWeb += `import { initVue2Components } from '@tarojs/components'\n`;
                        args[0].loaderMeta.execBeforeCreateWebApp += `initVue2Components()\n`;
                        break;
                    case 'vue3':
                        args[0].loaderMeta.extraImportForWeb += `import { initVue3Components } from '@tarojs/components'\n`;
                        args[0].loaderMeta.execBeforeCreateWebApp += `initVue3Components(component)\n`;
                        break;
                    default:
                        if (this.useHtmlComponents) {
                            args[0].loaderMeta.extraImportForWeb += `import { PullDownRefresh } from '@tarojs/components'\n`;
                            args[0].loaderMeta.execBeforeCreateWebApp += `config.PullDownRefresh = PullDownRefresh\n`;
                        }
                }
                return args;
            });
            // Note: 本地调试 stencil 组件库时，如果启用 sourceMap 则需要相关配置
            chain.module.rule('map')
                .test(/\.map$/).type('json');
            // Note: 生产环境默认不加载 map 文件
            if (process.env.NODE_ENV === 'production') {
                alias.set('.map$', false);
            }
        });
    }
}

var index = (ctx) => {
    ctx.registerPlatform({
        name: 'h5',
        useConfigName: 'h5',
        fn({ config }) {
            return tslib.__awaiter(this, void 0, void 0, function* () {
                const program = new H5(ctx, config);
                yield program.start();
            });
        }
    });
    ctx.modifyRunnerOpts(({ opts }) => {
        opts.defineConstants || (opts.defineConstants = {});
        opts.defineConstants.USE_HTML_COMPONENTS = JSON.stringify(!!opts.useHtmlComponents);
        // TODO 为 postcss-html-transform 更新组件转换列表
    });
};

exports.H5 = H5;
exports["default"] = index;
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929624);
})()
//miniprogram-npm-outsideDeps=["tslib","@tarojs/service","resolve","babel-plugin-transform-taroapi"]
//# sourceMappingURL=index.js.map