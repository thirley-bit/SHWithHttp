module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929630, function(require, module, exports) {
module.exports = require('./dist/index.js').default

module.exports.default = module.exports
module.exports.Swan = require('./dist/index.js').Swan

}, function(modId) {var map = {"./dist/index.js":1680223929631}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929631, function(require, module, exports) {


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
    Progress: {
        'border-radius': '0',
        'font-size': '16',
        duration: '30'
    },
    RichText: {
        selectable: 'false',
        name: '',
        attrs: '',
        children: '[]',
        text: '',
        'image-menu-prevent': 'false',
        preview: ''
    },
    Map: {
        polygons: '[]',
        'enable-3D': 'false',
        'show-compass': 'false',
        'enable-overlooking': 'false',
        'enable-zoom': 'true',
        'enable-scroll': 'true',
        'enable-rotate': 'false',
        bindRegionChange: '',
        bindPoiTap: ''
    },
    Button: {
        bindGetPhoneNumber: '',
        bindGetUserInfo: '',
        bindOpenSetting: '',
        bindContact: '',
        bindChooseAddress: '',
        bindChooseInvoiceTitle: '',
        bindLogin: ''
    },
    Form: {
        'report-type': 'default',
        'template-id': '',
        'subscribe-id': '',
        'skip-subscribe-authorize': 'false'
    },
    Input: {
        'adjust-position': 'true'
    },
    Textarea: {
        'confirm-type': shared.singleQuote('default'),
        'confirm-hold': 'false',
        'show-confirm-bar': 'true',
        'adjust-position': 'true'
    },
    Navigator: {
        target: shared.singleQuote('self'),
        'app-id': '',
        path: '',
        'extra-data': '',
        version: shared.singleQuote('version')
    },
    Image: {
        webp: 'false',
        'image-menu-prevent': 'false',
        preview: '',
        'original-src': ''
    },
    Video: {
        title: '',
        'show-no-wifi-tip': 'true',
        'vslide-gesture': 'false',
        'vslide-gesture-in-fullscreen': 'true',
        'enable-play-gesture': 'false',
        'show-rate-btn': 'false',
        'show-vslide-btn-in-fullscreen': 'true',
        'silent-play': 'false',
        bindLoadedMetadata: ''
    },
    Ad: {
        appid: '',
        apid: '',
        type: shared.singleQuote('feed'),
        updatetime: '',
        bindStatus: ''
    },
    // ======== 额外组件 ========
    Tabs: {
        'tabs-background-color': shared.singleQuote('#fff'),
        'tabs-active-text-color': shared.singleQuote('#000'),
        'tabs-inactive-text-color': shared.singleQuote('#666'),
        'tabs-underline-color': shared.singleQuote('#333'),
        'active-name': '',
        'url-query-name': '',
        'max-tab-item-amount': '5',
        bindTabChange: ''
    },
    TabItem: {
        label: '',
        name: '',
        'badge-type': '',
        'badge-text': ''
    },
    AnimationVideo: {
        'resource-width': '800',
        'resource-height': '400',
        'canvas-style': shared.singleQuote('width:400px;height:400px'),
        path: '',
        loop: 'false',
        autoplay: 'false',
        'alpha-direction': shared.singleQuote('left'),
        bindStarted: '',
        bindEnded: ''
    },
    AnimationView: {
        path: '',
        loop: 'false',
        autoplay: 'true',
        action: shared.singleQuote('play'),
        hidden: 'true',
        bindEnded: ''
    },
    ArCamera: {
        key: '',
        type: '',
        flash: shared.singleQuote('off'),
        bindError: '',
        bindLoad: '',
        bindMessage: '',
        bindScanCode: ''
    },
    RtcRoom: {
        id: '',
        'enable-camera': 'true',
        'enable-auto-focus': 'true',
        'enable-zoom': 'false',
        'device-position': shared.singleQuote('front'),
        'enable-mic': 'true',
        'enable-agc': 'false',
        'enable-ans': 'false',
        bitrate: '900',
        'video-width': '360',
        'video-height': '640',
        'enable-remote-mirror': 'false',
        'local-mirror': shared.singleQuote('auto'),
        'sound-mode': shared.singleQuote('speaker'),
        bindStateChange: '',
        bindError: ''
    },
    RtcRoomItem: {
        id: '',
        type: '',
        'user-id': ''
    },
    OpenData: {
        type: ''
    },
    Login: {
        'button-class': '',
        'checked-color': shared.singleQuote('#3388FF'),
        'theme-color': shared.singleQuote('#3388FF'),
        bindGetPhoneNumber: '',
        bindLoadError: ''
    },
    Like: {
        'is-liked': 'false',
        mode: shared.singleQuote('icon'),
        'icon-type': shared.singleQuote('hand'),
        'like-text': shared.singleQuote('赞'),
        'like-num': '0',
        'like-type': '0',
        'animation-type': '1',
        'is-show-toast': 'false',
        'toast-text': "['已点赞', '已取消']",
        'like-param': '',
        bindError: '',
        bindSuccess: '',
        bindFail: '',
    },
    CommentList: {
        'comment-param': '',
        'toolbar-config': '',
        'is-page-scroll': 'true',
        'need-toolbar': 'true',
        'add-comment': 'false',
        'detail-path': '',
        'is-folded': 'false',
        'fold-num': '3',
        'view-more-path': '',
        'view-more-style': '',
        bindClickComment: '',
        bindViewMore: '',
    },
    CommentDetail: {
        'comment-param': '',
        srid: '',
        'is-page-scroll': 'true',
        'need-toolbar': 'true',
        'need-like-btn': 'true',
        'back-list-after-delete': 'true',
        'add-comment': 'false',
        bindDelete: '',
    },
    FollowSwan: {
        size: shared.singleQuote('default'),
        type: shared.singleQuote('primary'),
        bindFavorStatusChange: '',
    },
    InlinePaymentPanel: {
        'total-amount': '',
        'deal-id': '',
        'app-key': '',
        'promotion-tag': '',
        'enable-page-back-modal': '',
        'custom-style': '',
        'style-type': shared.singleQuote('default'),
        bindGetPaymentInfo: '',
        bindError: ''
    },
};

const REG_TRACKBY_REPLACEMENT = /s-for="{{([A-Za-z]+)\.cn}}" s-key="sid"/;
const swanSpecialAttrs = {
    'scroll-view': ['scroll-top', 'scroll-left', 'scroll-into-view'],
    'movable-view': ['x', 'y'],
    slider: ['value'],
    input: ['value'],
    textarea: ['value']
};
class Template extends template.RecursiveTemplate {
    constructor(options) {
        var _a, _b, _c;
        super();
        this.supportXS = true;
        this.Adapter = {
            if: 's-if',
            else: 's-else',
            elseif: 's-elif',
            for: 's-for',
            forItem: 's-for-item',
            forIndex: 's-for-index',
            key: 's-key',
            xs: 'sjs',
            type: 'swan'
        };
        this.buildFlattenView = (level = this.flattenViewLevel) => {
            if (level === 0) {
                return '<template is="{{xs.e(0)}}" data="{{{i:item}}}" />';
            }
            const child = this.buildFlattenView(level - 1);
            const componentsAlias = this.componentsAlias;
            const viewAlias = componentsAlias.view._num;
            const textAlias = componentsAlias.text._num;
            const staticTextAlias = componentsAlias['static-text']._num;
            const buttonAlias = componentsAlias.button._num;
            const inputAlias = componentsAlias.input._num;
            const swiperAlias = componentsAlias.swiper._num;
            const template = `<view s-if="{{item.nn==='${viewAlias}'&&(item.st||item.cl)}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('view')}>
  <block s-for="item.cn trackBy item.sid">
    ${shared.indent(child, 4)}
  </block>
</view>
<text s-elif="{{item.nn==='${textAlias}'&&(item.st||item.cl)}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('text')}>
  <block s-for="item.cn trackBy item.sid">
    <block>{{item.v}}</block>
  </block>
</text>
<text s-elif="{{item.nn==='${staticTextAlias}'&&(item.st||item.cl)}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('static-text')}>
  <block s-for="item.cn trackBy item.sid">
    <block>{{item.v}}</block>
  </block>
</text>
<button s-elif="{{item.nn==='${buttonAlias}'&&(item.st||item.cl)}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('button')}>
  <block s-for="item.cn trackBy item.sid">
    <template is="{{xs.e(0)}}" data="{{{ i:item }}}" />
  </block>
</button>
<input s-elif="{{item.nn==='${inputAlias}'&&(item.st||item.cl)}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('input')} />
<swiper s-elif="{{item.nn==='${swiperAlias}'&&(item.st||item.cl)}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('swiper')}>
  <block s-for="xs.f(item.cn) trackBy item.sid">
    <template is="{{xs.e(0)}}" data="{{{ i:item }}}" />
  </block>
</swiper>
<block s-else>
  <template is="{{xs.e(0)}}" data="{{{i:item}}}" />
</block>`;
            return template;
        };
        this.buildFlattenCover = (level = this.flattenCoverLevel) => {
            if (level === 0) {
                return '<template is="{{xs.e(0)}}" data="{{{i:item}}}" />';
            }
            const child = this.buildFlattenCover(level - 1);
            const componentsAlias = this.componentsAlias;
            const coverViewAlias = componentsAlias['cover-view']._num;
            const coverImageAlias = componentsAlias['cover-image']._num;
            const contentAlias = componentsAlias['#text']._num;
            const template = `<cover-view s-if="{{item.nn==='${coverViewAlias}'}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('cover-view')}>
  <block s-for="item.cn trackBy item.sid">
    ${shared.indent(child, 4)}
  </block>
</cover-view>
<cover-image s-elif="{{item.nn==='${coverImageAlias}'}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}"  ${this.buildFlattenNodeAttributes('cover-image')}></cover-image>
<block s-elif="{{item.nn==='${contentAlias}'}}">{{item.v}}</block>
<block s-else>
  <template is="{{xs.e(0)}}" data="{{{i:item}}}" />
</block>`;
            return template;
        };
        this.buildFlattenText = (level = this.flattenTextLevel) => {
            if (level === 0) {
                return `<block>{{i.${"cn" /* Shortcuts.Childnodes */}[index].${"v" /* Shortcuts.Text */}}}</block>`;
            }
            const child = this.buildFlattenText(level - 1);
            const componentsAlias = this.componentsAlias;
            const contentAlias = componentsAlias['#text']._num;
            const template = `<block s-if="item.nn === '${contentAlias}'">{{item.v}}</block>
<text s-else id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('text')}>
  <block s-for="item.cn trackBy item.sid">
    ${shared.indent(child, 4)}
  </block>
</text>`;
            return template;
        };
        this.modifyLoopBody = (child, nodeName) => {
            const componentsAlias = this.componentsAlias;
            const adAlias = componentsAlias.ad._num;
            switch (nodeName) {
                case 'view':
                    // fix issue #6015
                    return this.buildFlattenView();
                case 'cover-view':
                case 'canvas':
                case 'map':
                case 'animation-view':
                case 'camera':
                case 'live-player':
                    return this.buildFlattenCover();
                case 'video': {
                    const body = `<ad s-if={{item.nn==='${adAlias}'}} id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('ad')}></ad>
<block s-else>
  ${shared.indent(this.buildFlattenCover(), 2)}
</block>`;
                    return body;
                }
                case 'text':
                case 'static-text':
                    return this.buildFlattenText();
                case 'picker-view':
                    return `<picker-view-column id="{{item.uid||item.sid}}" data-sid="{{item.sid}}" ${this.buildFlattenNodeAttributes('picker-view-column')}>
          <block s-for="item.cn trackBy item.sid">
            ${child}
          </block>
        </picker-view-column>`;
                default:
                    return child;
            }
        };
        this.modifyLoopContainer = (children, nodeName) => {
            if (nodeName === 'swiper') {
                return children.replace(/s-for="{{i\.cn}}"/, 's-for="xs.f(i.cn) trackBy item.sid"');
            }
            return children.replace(REG_TRACKBY_REPLACEMENT, 's-for="$1.cn trackBy item.sid"');
        };
        this.modifyTemplateResult = (res, nodeName) => {
            if (nodeName === 'picker-view-column')
                return '';
            return res;
        };
        this.flattenViewLevel = (_a = options === null || options === void 0 ? void 0 : options.flattenViewLevel) !== null && _a !== void 0 ? _a : 8;
        this.flattenCoverLevel = (_b = options === null || options === void 0 ? void 0 : options.flattenCoverLevel) !== null && _b !== void 0 ? _b : 3;
        this.flattenTextLevel = (_c = options === null || options === void 0 ? void 0 : options.flattenTextLevel) !== null && _c !== void 0 ? _c : 3;
    }
    buildBaseTemplate() {
        const rootTmpl = super.buildBaseTemplate();
        return rootTmpl.replace(REG_TRACKBY_REPLACEMENT, 's-for="$1.cn trackBy item.sid"');
    }
    createMiniComponents(components) {
        const result = super.createMiniComponents(components);
        this.legacyMiniComponents = Object.assign({}, result);
        delete result['pure-view'];
        delete result['static-view'];
        return result;
    }
    buildXsTemplate() {
        return '<import-sjs module="xs" src="./utils.sjs" />';
    }
    dataKeymap(keymap) {
        return `{ ${keymap} }`;
    }
    getAttrValue(value, key, nodeName) {
        if (shared.isArray(swanSpecialAttrs[nodeName]) && swanSpecialAttrs[nodeName].includes(key)) {
            return `= ${value} =`;
        }
        return `{${value}}`;
    }
    buildFlattenNodeAttributes(nodeName) {
        const component = this.legacyMiniComponents[nodeName];
        return Object.keys(component)
            .map(k => `${k}="${k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? component[k] : `{{${component[k].replace('i.', 'item.')}}}`}"`)
            .join(' ');
    }
    buildXSTmpExtra() {
        const componentsAlias = this.componentsAlias;
        const swiperAlias = componentsAlias['swiper-item']._num;
        return `f: function (l) {
    return l.filter(function (i) {return i.nn === '${swiperAlias}'})
  }`;
    }
}

const PACKAGE_NAME = '@tarojs/plugin-platform-swan';
const PROJECT_JSON = 'project.swan.json';
class Swan extends service.TaroPlatformBase {
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
        this.platform = 'swan';
        this.globalObject = 'swan';
        this.runtimePath = `${PACKAGE_NAME}/dist/runtime`;
        this.taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
        this.fileType = {
            templ: '.swan',
            style: '.css',
            config: '.json',
            script: '.js',
            xs: '.sjs'
        };
        this.setupTransaction.addWrapper({
            close() {
                this.modifyComponents();
                ctx.generateFrameworkInfo();
                this.generateProjectConfig(PROJECT_JSON, PROJECT_JSON);
            }
        });
        this.template = new Template({
            flattenViewLevel: config.flattenViewLevel
        });
    }
    /**
     * 增加组件或修改组件属性
     */
    modifyComponents() {
        this.template.mergeComponents(this.ctx, components);
        delete this.template.internalComponents.Input.cursor;
        delete this.template.internalComponents.Input['selection-start'];
        delete this.template.internalComponents.Input['selection-end'];
    }
}

var index = (ctx) => {
    ctx.registerPlatform({
        name: 'swan',
        useConfigName: 'mini',
        fn({ config }) {
            return __awaiter(this, void 0, void 0, function* () {
                const program = new Swan(ctx, config);
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
                    // Note: 由于百度小程序不支持 ES2015，所以这里需要将 ES5 (模拟器环境可无该问题)
                    target: 'es5'
                }
            });
            prebundleOptions.exclude || (prebundleOptions.exclude = []);
            prebundleOptions.include || (prebundleOptions.include = []);
        }
    });
};

exports.Swan = Swan;
exports["default"] = index;
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929630);
})()
//miniprogram-npm-outsideDeps=["@tarojs/shared","@tarojs/service","@tarojs/shared/dist/template"]
//# sourceMappingURL=index.js.map