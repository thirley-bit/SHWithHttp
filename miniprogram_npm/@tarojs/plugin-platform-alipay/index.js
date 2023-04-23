module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929622, function(require, module, exports) {
module.exports = require('./dist/index.js').default

module.exports.default = module.exports
module.exports.Alipay = require('./dist/index.js').Alipay

}, function(modId) {var map = {"./dist/index.js":1680223929623}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929623, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@tarojs/shared');
var service = require('@tarojs/service');
var template = require('@tarojs/shared/dist/template');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const components = {
    // ======== 调整属性 ========
    View: {
        'disable-scroll': 'false',
        hidden: 'false',
        bindAppear: '',
        bindDisappear: '',
        bindFirstAppear: ''
    },
    Text: {
        'number-of-lines': ''
    },
    Map: {
        skew: '0',
        rotate: '0',
        polygons: '[]',
        'include-padding': '',
        'ground-overlays': '[]',
        'tile-overlay': '',
        'custom-map-style': '',
        panels: '[]',
        setting: '{}',
        optimize: 'false',
        'show-compass': 'false',
        'show-scale': 'false',
        'enable-overlooking': 'false',
        'enable-zoom': 'true',
        'enable-scroll': 'true',
        'enable-rotate': 'false',
        'enable-traffic': 'false',
        'enable-poi': 'true',
        'enable-building': 'true',
        'enable-satellite': 'false',
        bindRegionChange: '',
        bindPanelTap: '',
        bindInitComplete: ''
    },
    Button: {
        scope: '',
        'public-id': '',
        bindGetAuthorize: '',
        bindError: '',
        bindGetUserInfo: '',
        bindGetPhoneNumber: ''
    },
    Checkbox: {
        bindChange: ''
    },
    Input: {
        'always-system': 'false',
        'random-number': 'false',
        controlled: 'false',
        enableNative: 'true',
        name: ''
    },
    Slider: {
        'track-size': '4',
        'handle-size': '22',
        'handle-color': shared.singleQuote('#ffffff')
    },
    Switch: {
        controlled: 'false'
    },
    Textarea: {
        'show-count': 'true',
        controlled: 'false',
        enableNative: 'false'
    },
    MovableView: {
        bindChangeEnd: ''
    },
    ScrollView: {
        'scroll-animation-duration': '',
        'trap-scroll': 'false'
    },
    Swiper: {
        'active-class': '',
        'changing-class': '',
        acceleration: 'false',
        'disable-programmatic-animation': 'false',
        'disable-touch': 'false',
        bindAnimationEnd: ''
    },
    Image: {
        'default-source': ''
    },
    Camera: {
        mode: shared.singleQuote('normal'),
        'output-dimension': shared.singleQuote('720P'),
        'frame-size': shared.singleQuote('medium'),
        bindScanCode: '',
        bindReady: '',
    },
    Canvas: {
        type: '',
        width: shared.singleQuote('300px'),
        height: shared.singleQuote('225px'),
        bindReady: ''
    },
    Video: {
        'poster-size': shared.singleQuote('contain'),
        'mobilenet-hint-type': '1',
        enableNative: 'true',
        bindLoading: '',
        bindUserAction: '',
        bindStop: '',
        bindRenderStart: ''
    },
    // ======== 额外组件 ========
    Lottie: {
        autoplay: 'false',
        path: '',
        speed: '1.0',
        'repeat-count': '0',
        'auto-reverse': 'false',
        'assets-path': '',
        placeholder: '',
        djangoId: '',
        md5: '',
        optimize: 'false',
        bindDataReady: '',
        bindDataFailed: '',
        bindAnimationStart: '',
        bindAnimationEnd: '',
        bindAnimationRepeat: '',
        bindAnimationCancel: '',
        bindDataLoadReady: ''
    },
    Lifestyle: {
        'public-id': '',
        memo: '',
        bindFollow: ''
    },
    LifeFollow: {
        sceneId: '',
        checkFollow: '',
        bindCheckFollow: '',
        bindClose: ''
    },
    ContactButton: {
        'tnt-inst-id': '',
        scene: '',
        size: '25',
        color: shared.singleQuote('#00A3FF'),
        icon: '',
        'alipay-card-no': '',
        'ext-info': ''
    },
    ArCamera: {
        devicePosition: shared.singleQuote('back'),
        marker: '',
        mode: shared.singleQuote('imageTracking'),
        useCapturedImage: 'false',
        bindInit: '',
        bindStop: '',
        bindError: '',
        bindARFrame: ''
    },
    PageContainer: {
        show: 'false',
        duration: '300',
        'z-index': '100',
        overlay: 'true',
        position: shared.singleQuote('bottom'),
        round: 'false',
        'close-on-slide-down': 'false',
        'overlay-style': '',
        'custom-style': '',
        bindBeforeEnter: '',
        bindEnter: '',
        bindEnterCancelled: '',
        bindAfterEnter: '',
        bindBeforeLeave: '',
        bindLeave: '',
        bindLeaveCancelled: '',
        bindAfterLeave: '',
        bindClickOverlay: '',
    },
    ShareElement: {
        name: '',
        transform: 'false',
        duration: '300',
        'easing-function': shared.singleQuote('ease-out'),
    },
};

class Template extends template.RecursiveTemplate {
    constructor() {
        super(...arguments);
        this.exportExpr = 'export default';
        this.supportXS = true;
        this.Adapter = {
            if: 'a:if',
            else: 'a:else',
            elseif: 'a:elif',
            for: 'a:for',
            forItem: 'a:for-item',
            forIndex: 'a:for-index',
            key: 'a:key',
            xs: 'sjs',
            type: 'alipay'
        };
        this.modifyLoopBody = (child, nodeName) => {
            if (nodeName === 'picker-view') {
                return `<picker-view-column class="{{item.cl}}" style="{{item.st}}">
        <view a:for="{{item.cn}}" a:key="sid">
          ${child}
        </view>
      </picker-view-column>`;
            }
            return child;
        };
        this.modifyLoopContainer = (children, nodeName) => {
            if (nodeName === 'picker') {
                return `
  <view>${children}</view>
  `;
            }
            if (nodeName === 'swiper') {
                return `
    <block a:for="{{xs.f(i.cn)}}" a:key="sid">
      <swiper-item class="{{item.cl}}" style="{{item.st}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
        <block a:for="{{item.cn}}" a:key="sid">
          <template is="{{xs.e(0)}}" data="{{i:item}}" />
        </block>
      </swiper-item>
    </block>
  `;
            }
            return children;
        };
        this.modifyTemplateResult = (res, nodeName) => {
            if (nodeName === 'picker-view-column' || nodeName === 'swiper-item')
                return '';
            return res;
        };
        this.modifyThirdPartyLoopBody = () => {
            // 兼容支付宝 2.0 构建
            const slot = this.componentsAlias.slot;
            const slotAlias = slot._num;
            const slotNamePropAlias = slot.name;
            return `<view a:if="{{item.nn==='${slotAlias}'}}" slot="{{item.${slotNamePropAlias}}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
        <block a:for="{{item.cn}}" a:key="sid">
          <template is="{{xs.e(0)}}" data="{{i:item}}" />
        </block>
      </view>
      <template a:else is="{{xs.e(0)}}" data="{{i:item}}" />`;
        };
    }
    buildXsTemplate() {
        return '<import-sjs name="xs" from="./utils.sjs" />';
    }
    replacePropName(name, value, compName, componentAlias) {
        if (value === 'eh')
            return name.replace('bind', 'on');
        if (compName === 'map') {
            const polygonsAlias = componentAlias.polygons;
            if (value.includes(polygonsAlias)) {
                name = 'polygon';
            }
        }
        return name;
    }
    getEvents() {
        return {
            onTap: 'eh',
            onTouchMove: 'eh',
            onTouchEnd: 'eh',
            onTouchCancel: 'eh',
            onLongTap: 'eh'
        };
    }
    buildThirdPartyAttr(attrs) {
        return [...attrs].reduce((str, attr) => {
            if (attr.startsWith('@')) {
                return str + `on${shared.capitalize(attr.slice(1))}="eh" `;
            }
            else if (attr.startsWith('bind')) {
                return str + `${attr}="eh" `;
            }
            else if (attr.startsWith('on')) {
                return str + `${attr}="eh" `;
            }
            return str + `${attr}="{{ i.${shared.toCamelCase(attr)} }}" `;
        }, '');
    }
    createMiniComponents(components) {
        const result = super.createMiniComponents(components);
        // 兼容支付宝 2.0 构建
        delete result.slot;
        delete result['slot-view'];
        delete result['native-slot'];
        return result;
    }
    buildXSTmpExtra() {
        const swiperItemAlias = this.componentsAlias['swiper-item']._num;
        return `f: function (l) {
    return l.filter(function (i) {return i.nn === '${swiperItemAlias}'})
  }`;
    }
}

const PACKAGE_NAME = '@tarojs/plugin-platform-alipay';
class Alipay extends service.TaroPlatformBase {
    /**
     * 1. setupTransaction - init
     * 2. setup
     * 3. setupTransaction - close
     * 4. buildTransaction - init
     * 5. build
     * 6. buildTransaction - close
     */
    constructor(ctx, config) {
        super(ctx, config);
        this.platform = 'alipay';
        this.globalObject = 'my';
        this.runtimePath = `${PACKAGE_NAME}/dist/runtime`;
        this.taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
        this.fileType = {
            templ: '.axml',
            style: '.acss',
            config: '.json',
            script: '.js',
            xs: '.sjs'
        };
        this.template = new Template();
        this.setupTransaction.addWrapper({
            close() {
                this.modifyMiniConfigs();
                this.modifyComponents();
                this.modifyWebpackConfig();
                this.generateProjectConfig('project.alipay.json', 'mini.project.json');
            }
        });
    }
    /**
     * 转换用户编写的配置（微信小程序标准）为支付宝小程序标准
     */
    modifyMiniConfigs() {
        this.ctx.modifyMiniConfigs(({ configMap }) => {
            const replaceKeyMap = {
                color: 'textColor',
                custom: 'customize',
                enablePullDownRefresh: 'pullRefresh',
                iconPath: 'icon',
                list: 'items',
                navigationBarTitleText: 'defaultTitle',
                navigationBarBackgroundColor: 'titleBarColor',
                selectedIconPath: 'activeIcon',
                subpackages: 'subPackages',
                text: 'name'
            };
            Object.keys(configMap).forEach(key => {
                const item = configMap[key];
                if (item.content) {
                    this.recursiveReplaceObjectKeys(item.content, replaceKeyMap);
                }
            });
        });
    }
    /**
     * 增加组件或修改组件属性
     */
    modifyComponents() {
        const { internalComponents } = this.template;
        this.template.mergeComponents(this.ctx, components);
        this.modifySlider(internalComponents.Slider);
        this.modifySwiper(internalComponents.Swiper);
    }
    /**
     * 修改 Slider 组件属性
     */
    modifySlider(slider) {
        delete slider['block-size'];
        delete slider['block-color'];
    }
    /**
     * 修改 Swiper 组件属性
     */
    modifySwiper(swiper) {
        delete swiper.bindAnimationFinish;
    }
    /**
     * 修改 Webpack 配置
     */
    modifyWebpackConfig() {
        this.ctx.modifyWebpackChain(({ chain }) => {
            // 支付宝系小程序全局就有 navigator 对象，不需要模拟
            chain.plugin('providerPlugin')
                .tap(args => {
                const newArgs = Object.assign({}, args[0]);
                delete newArgs.navigator;
                return [newArgs];
            });
            const { compiler, framework } = this.ctx.initialConfig;
            if (framework === 'react' &&
                compiler &&
                (compiler === 'webpack4' ||
                    typeof compiler === 'object' && compiler.type === 'webpack4')) {
                chain.node.set('setImmediate', false);
            }
        });
    }
}

let registeredModifyPageTemplate = false;
var index = (ctx) => {
    ctx.registerPlatform({
        name: 'alipay',
        useConfigName: 'mini',
        fn({ config }) {
            return __awaiter(this, void 0, void 0, function* () {
                !registeredModifyPageTemplate && modifyPageTemplate(ctx);
                const program = new Alipay(ctx, config);
                yield program.start();
            });
        }
    });
    ctx.modifyRunnerOpts(({ opts }) => {
        if (!(opts === null || opts === void 0 ? void 0 : opts.compiler))
            return;
        if (shared.isString(opts.compiler)) {
            opts.compiler = {
                type: opts.compiler
            };
        }
        const { compiler } = opts;
        if (compiler.type === 'webpack5') {
            compiler.prebundle || (compiler.prebundle = {});
            const prebundleOptions = compiler.prebundle;
            if (prebundleOptions.enable === false)
                return;
            prebundleOptions.swc || (prebundleOptions.swc = {
                jsc: {
                    target: 'es5'
                }
            });
            prebundleOptions.exclude || (prebundleOptions.exclude = []);
            prebundleOptions.exclude.push('@tarojs/plugin-platform-alipay/dist/runtime');
            prebundleOptions.include || (prebundleOptions.include = []);
            prebundleOptions.include.push('@tarojs/shared');
        }
    });
};
function getIsBuildPluginPath(filePath, isBuildPlugin) {
    return isBuildPlugin ? `plugin/${filePath}` : filePath;
}
// 支付宝小程序中，如果某个页面依赖了原生小程序组件，
// 那么这个页面不能使用公共模板 base.axml，
// 而需要把公共模板的内容在此页面的模板中复制一份, 。
function modifyPageTemplate(ctx) {
    registeredModifyPageTemplate = true;
    ctx.modifyBuildAssets(({ assets, miniPlugin }) => {
        const pages = [];
        // 筛选出使用了自定义组件的页面
        miniPlugin.pages.forEach(page => {
            const config = miniPlugin.filesConfig[miniPlugin.getConfigFilePath(page.name)].content;
            if (!page.isNative && (config === null || config === void 0 ? void 0 : config.hasOwnProperty('usingComponents')) && Object.keys(config.usingComponents).length) {
                pages.push(page.name);
            }
        });
        if (!pages.length)
            return;
        const baseXml = assets[getIsBuildPluginPath('base.axml', miniPlugin.options.isBuildPlugin)].source();
        pages.forEach(page => {
            const templateName = `${page}.axml`;
            const assetsItem = assets[templateName];
            const src = assetsItem._value ? assetsItem._value.toString() : assetsItem.source();
            let relativePath;
            const templateCaller = src.replace(/<import src="(.*)base\.axml"\/>/, function (_, $1) {
                relativePath = $1;
                return '';
            });
            const main = baseXml.replace(/<import-sjs name="xs" from="(.*)utils.sjs" \/>/, function () {
                return `<import-sjs name="xs" from="${relativePath}utils.sjs" />`;
            });
            const res = `${templateCaller}
${main}`;
            assets[templateName] = {
                size: () => res.length,
                source: () => res
            };
        });
        if (miniPlugin.options.isBuildPlugin) {
            const miniProjectJSONStr = JSON.stringify({
                miniprogramRoot: 'miniprogram',
                pluginRoot: 'plugin',
                compileType: 'plugin'
            }, null, 2);
            assets['mini.project.json'] = {
                size: () => miniProjectJSONStr.length,
                source: () => miniProjectJSONStr
            };
            const pluginJSON = JSON.parse(assets['/plugin/plugin.json'].source());
            pluginJSON.publicPages = pluginJSON.pages;
            pluginJSON.pages = Object.values(pluginJSON.publicPages);
            const pluginJSONStr = JSON.stringify(pluginJSON, null, 2);
            assets['/plugin/plugin.json'] = {
                size: () => pluginJSONStr.length,
                source: () => pluginJSONStr
            };
        }
    });
}

exports.Alipay = Alipay;
exports["default"] = index;
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929622);
})()
//miniprogram-npm-outsideDeps=["@tarojs/shared","@tarojs/service","@tarojs/shared/dist/template"]
//# sourceMappingURL=index.js.map