module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929634, function(require, module, exports) {
module.exports = require('./dist/index.js').default

module.exports.default = module.exports
module.exports.Weapp = require('./dist/index.js').Weapp

}, function(modId) {var map = {"./dist/index.js":1680223929635}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929635, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

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

const _true = 'true';
const _false = 'false';
const _empty = '';
const _zero = '0';
const components = {
    // ======== 调整属性 ========
    Progress: {
        'border-radius': _zero,
        'font-size': '16',
        duration: '30',
        bindActiveEnd: _empty
    },
    RichText: {
        space: _empty,
        'user-select': _false
    },
    Text: {
        'user-select': _false
    },
    Map: {
        polygons: '[]',
        subkey: _empty,
        rotate: _zero,
        skew: _zero,
        'max-scale': '20',
        'min-scale': '3',
        'enable-3D': _false,
        'show-compass': _false,
        'show-scale': _false,
        'enable-overlooking': _false,
        'enable-zoom': _true,
        'enable-scroll': _true,
        'enable-rotate': _false,
        'enable-satellite': _false,
        'enable-traffic': _false,
        'enable-poi': _true,
        'enable-building': _true,
        setting: '[]',
        bindLabelTap: _empty,
        bindRegionChange: _empty,
        bindPoiTap: _empty,
        bindAnchorPointTap: _empty
    },
    Button: {
        lang: 'en',
        'session-from': _empty,
        'send-message-title': _empty,
        'send-message-path': _empty,
        'send-message-img': _empty,
        'app-parameter': _empty,
        'show-message-card': _false,
        'business-id': _empty,
        bindGetUserInfo: _empty,
        bindContact: _empty,
        bindGetPhoneNumber: _empty,
        bindChooseAvatar: _empty,
        bindError: _empty,
        bindOpenSetting: _empty,
        bindLaunchApp: _empty
    },
    Form: {
        'report-submit-timeout': _zero
    },
    Input: {
        'always-embed': _false,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'safe-password-cert-path': '',
        'safe-password-length': '',
        'safe-password-time-stamp': '',
        'safe-password-nonce': '',
        'safe-password-salt': '',
        'safe-password-custom-hash': '',
        'auto-fill': _empty,
        bindKeyboardHeightChange: _empty,
        bindNicknameReview: _empty
    },
    Picker: {
        'header-text': _empty
    },
    PickerView: {
        'immediate-change': _false,
        bindPickStart: _empty,
        bindPickEnd: _empty
    },
    Slider: {
        color: "'#e9e9e9'",
        'selected-color': "'#1aad19'"
    },
    Textarea: {
        'show-confirm-bar': _true,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'disable-default-padding': _false,
        'confirm-type': "'return'",
        'confirm-hold': _false,
        bindKeyboardHeightChange: _empty
    },
    ScrollView: {
        'enable-flex': _false,
        'scroll-anchoring': _false,
        'refresher-enabled': _false,
        'refresher-threshold': '45',
        'refresher-default-style': "'black'",
        'refresher-background': "'#FFF'",
        'refresher-triggered': _false,
        enhanced: _false,
        bounces: _true,
        'show-scrollbar': _true,
        'paging-enabled': _false,
        'fast-deceleration': _false,
        bindDragStart: _empty,
        bindDragging: _empty,
        bindDragEnd: _empty,
        bindRefresherPulling: _empty,
        bindRefresherRefresh: _empty,
        bindRefresherRestore: _empty,
        bindRefresherAbort: _empty
    },
    Swiper: {
        'snap-to-edge': _false,
        'easing-function': "'default'"
    },
    SwiperItem: {
        'skip-hidden-item-layout': _false
    },
    Navigator: {
        target: "'self'",
        'app-id': _empty,
        path: _empty,
        'extra-data': _empty,
        version: "'version'"
    },
    Camera: {
        mode: "'normal'",
        resolution: "'medium'",
        'frame-size': "'medium'",
        bindInitDone: _empty,
        bindScanCode: _empty
    },
    Image: {
        webp: _false,
        'show-menu-by-longpress': _false
    },
    LivePlayer: {
        mode: "'live'",
        'sound-mode': "'speaker'",
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'picture-in-picture-mode': '[]',
        bindstatechange: _empty,
        bindfullscreenchange: _empty,
        bindnetstatus: _empty,
        bindAudioVolumeNotify: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty
    },
    Video: {
        title: _empty,
        'play-btn-position': "'bottom'",
        'enable-play-gesture': _false,
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'vslide-gesture': _false,
        'vslide-gesture-in-fullscreen': _true,
        'ad-unit-id': _empty,
        'poster-for-crawler': _empty,
        'show-casting-button': _false,
        'picture-in-picture-mode': '[]',
        // picture-in-picture-show-progress 属性先注释掉的原因如下：
        // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
        // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
        // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
        // 'picture-in-picture-show-progress': 'false',
        'enable-auto-rotation': _false,
        'show-screen-lock-button': _false,
        'show-snapshot-button': _false,
        'show-background-playback-button': _false,
        'background-poster': _empty,
        bindProgress: _empty,
        bindLoadedMetadata: _empty,
        bindControlsToggle: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty,
        bindSeekComplete: _empty,
        bindAdLoad: _empty,
        bindAdError: _empty,
        bindAdClose: _empty,
        bindAdPlay: _empty
    },
    Canvas: {
        type: _empty
    },
    Ad: {
        'ad-type': "'banner'",
        'ad-theme': "'white'"
    },
    CoverView: {
        'marker-id': _empty,
        slot: _empty
    },
    // ======== 额外组件 ========
    Editor: {
        'read-only': _false,
        placeholder: _empty,
        'show-img-size': _false,
        'show-img-toolbar': _false,
        'show-img-resize': _false,
        focus: _false,
        bindReady: _empty,
        bindFocus: _empty,
        bindBlur: _empty,
        bindInput: _empty,
        bindStatusChange: _empty,
        name: _empty
    },
    MatchMedia: {
        'min-width': _empty,
        'max-width': _empty,
        width: _empty,
        'min-height': _empty,
        'max-height': _empty,
        height: _empty,
        orientation: _empty
    },
    FunctionalPageNavigator: {
        version: "'release'",
        name: _empty,
        args: _empty,
        bindSuccess: _empty,
        bindFail: _empty,
        bindCancel: _empty
    },
    LivePusher: {
        url: _empty,
        mode: "'RTC'",
        autopush: _false,
        muted: _false,
        'enable-camera': _true,
        'auto-focus': _true,
        orientation: "'vertical'",
        beauty: _zero,
        whiteness: _zero,
        aspect: "'9:16'",
        'min-bitrate': '200',
        'max-bitrate': '1000',
        'audio-quality': "'high'",
        'waiting-image': _empty,
        'waiting-image-hash': _empty,
        zoom: _false,
        'device-position': "'front'",
        'background-mute': _false,
        mirror: _false,
        'remote-mirror': _false,
        'local-mirror': _false,
        'audio-reverb-type': _zero,
        'enable-mic': _true,
        'enable-agc': _false,
        'enable-ans': _false,
        'audio-volume-type': "'voicecall'",
        'video-width': '360',
        'video-height': '640',
        'beauty-style': "'smooth'",
        filter: "'standard'",
        animation: _empty,
        bindStateChange: _empty,
        bindNetStatus: _empty,
        bindBgmStart: _empty,
        bindBgmProgress: _empty,
        bindBgmComplete: _empty,
        bindAudioVolumeNotify: _empty
    },
    OfficialAccount: {
        bindLoad: _empty,
        bindError: _empty
    },
    OpenData: {
        type: _empty,
        'open-gid': _empty,
        lang: "'en'",
        'default-text': _empty,
        'default-avatar': _empty,
        bindError: _empty
    },
    NavigationBar: {
        title: _empty,
        loading: _false,
        'front-color': _empty,
        'background-color': _empty,
        'color-animation-duration': _zero,
        'color-animation-timing-func': "'linear'"
    },
    PageMeta: {
        'background-text-style': _empty,
        'background-color': _empty,
        'background-color-top': _empty,
        'background-color-bottom': _empty,
        'scroll-top': "''",
        'scroll-duration': '300',
        'page-style': "''",
        'root-font-size': "''",
        bindResize: _empty,
        bindScroll: _empty,
        bindScrollDone: _empty
    },
    VoipRoom: {
        openid: _empty,
        mode: "'camera'",
        'device-position': "'front'",
        bindError: _empty
    },
    AdCustom: {
        'unit-id': _empty,
        'ad-intervals': _empty,
        bindLoad: _empty,
        bindError: _empty
    },
    PageContainer: {
        show: _false,
        duration: '300',
        'z-index': '100',
        overlay: _true,
        position: "'bottom'",
        round: _false,
        'close-on-slide-down': _false,
        'overlay-style': _empty,
        'custom-style': _empty,
        bindBeforeEnter: _empty,
        bindEnter: _empty,
        bindAfterEnter: _empty,
        bindBeforeLeave: _empty,
        bindLeave: _empty,
        bindAfterLeave: _empty,
        bindClickOverlay: _empty
    },
    ShareElement: {
        mapkey: _empty,
        transform: _false,
        duration: '300',
        'easing-function': "'ease-out'"
    },
    KeyboardAccessory: {},
    RootPortal: {},
    ChannelLive: {
        feedId: _empty,
        finderUserName: _empty
    },
    ChannelVideo: {
        feedId: _empty,
        finderUserName: _empty,
        autoPlay: _false,
        loop: _false,
        muted: _false,
        objectFit: "'contain'",
        bindError: _empty
    },
};

class Template extends template.UnRecursiveTemplate {
    constructor(pluginOptions) {
        super();
        this.supportXS = true;
        this.Adapter = {
            if: 'wx:if',
            else: 'wx:else',
            elseif: 'wx:elif',
            for: 'wx:for',
            forItem: 'wx:for-item',
            forIndex: 'wx:for-index',
            key: 'wx:key',
            xs: 'wxs',
            type: 'weapp'
        };
        this.modifyTemplateResult = (res, nodeName, _level, children) => {
            if (nodeName === 'keyboard-accessory')
                return '';
            if ((nodeName === 'textarea' || nodeName === 'input') && this.pluginOptions.enablekeyboardAccessory) {
                const list = res.split('</template>');
                const componentAlias = this.componentsAlias[nodeName];
                const nodeNameAlias = componentAlias._num;
                const target = `
    <keyboard-accessory style="{{i.cn[0].st}}" class="{{i.cn[0].cl}}" bindtap="eh"  id="{{i.cn[0].uid||i.cn[0].sid}}" data-sid="{{i.cn[0].sid}}">
      <block wx:for="{{i.cn[0].cn}}" wx:key="sid">
        <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
      </block>
    </keyboard-accessory>
  `;
                const templateFocus = list[1]
                    .replace(children, target)
                    .replace(`_${nodeNameAlias}_focus`, `_${nodeNameAlias}_focus_ka`);
                const templateBlur = list[2]
                    .replace(children, target)
                    .replace(`_${nodeNameAlias}_blur`, `_${nodeNameAlias}_blur_ka`);
                list.splice(3, 0, templateFocus, templateBlur);
                return list.join('</template>');
            }
            return res;
        };
        this.pluginOptions = pluginOptions || {};
    }
    buildXsTemplate() {
        return '<wxs module="xs" src="./utils.wxs" />';
    }
    replacePropName(name, value, componentName, componentAlias) {
        if (value === 'eh') {
            const nameLowerCase = name.toLowerCase();
            if (nameLowerCase === 'bindlongtap' && componentName !== 'canvas')
                return 'bindlongpress';
            return nameLowerCase;
        }
        if (componentName === 'share-element') {
            const mapKeyAlias = componentAlias.mapkey;
            if (value === `i.${mapKeyAlias}`)
                return 'key';
        }
        return name;
    }
    buildXSTepFocus(nn) {
        if (this.pluginOptions.enablekeyboardAccessory) {
            const textarea = this.componentsAlias.textarea._num;
            const input = this.componentsAlias.input._num;
            const ka = this.componentsAlias['keyboard-accessory']._num;
            return `function(i, prefix) {
      var s = i.focus !== undefined ? 'focus' : 'blur'
      var r = prefix + i.${nn} + '_' + s
      if ((i.nn === '${textarea}' || i.nn === '${input}') && i.cn[0] && i.cn[0].nn === '${ka}') {
        r = r + '_ka'
      }
      return r
    }`;
        }
        else {
            return super.buildXSTepFocus(nn);
        }
    }
}

const PACKAGE_NAME = '@tarojs/plugin-platform-weapp';
class Weapp extends service.TaroPlatformBase {
    /**
     * 1. setupTransaction - init
     * 2. setup
     * 3. setupTransaction - close
     * 4. buildTransaction - init
     * 5. build
     * 6. buildTransaction - close
     */
    constructor(ctx, config, pluginOptions) {
        super(ctx, config);
        this.platform = 'weapp';
        this.globalObject = 'wx';
        this.projectConfigJson = this.config.projectConfigName || 'project.config.json';
        this.runtimePath = `${PACKAGE_NAME}/dist/runtime`;
        this.taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
        this.fileType = {
            templ: '.wxml',
            style: '.wxss',
            config: '.json',
            script: '.js',
            xs: '.wxs'
        };
        this.template = new Template(pluginOptions);
        this.setupTransaction.addWrapper({
            close() {
                this.modifyTemplate(pluginOptions);
                this.modifyWebpackConfig();
            }
        });
    }
    /**
     * 增加组件或修改组件属性
     */
    modifyTemplate(pluginOptions) {
        const template = this.template;
        template.mergeComponents(this.ctx, components);
        template.voidElements.add('voip-room');
        template.focusComponents.add('editor');
        if (pluginOptions === null || pluginOptions === void 0 ? void 0 : pluginOptions.enablekeyboardAccessory) {
            template.voidElements.delete('input');
            template.voidElements.delete('textarea');
        }
    }
    /**
     * 修改 Webpack 配置
     */
    modifyWebpackConfig() {
        this.ctx.modifyWebpackChain(({ chain }) => {
            // 解决微信小程序 sourcemap 映射失败的问题，#9412
            chain.output.devtoolModuleFilenameTemplate((info) => {
                const resourcePath = info.resourcePath.replace(/[/\\]/g, '_');
                return `webpack://${info.namespace}/${resourcePath}`;
            });
        });
    }
}

var index = (ctx, options) => {
    ctx.registerPlatform({
        name: 'weapp',
        useConfigName: 'mini',
        fn({ config }) {
            return __awaiter(this, void 0, void 0, function* () {
                const program = new Weapp(ctx, config, options || {});
                yield program.start();
            });
        }
    });
};

exports.Weapp = Weapp;
exports["default"] = index;
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929634);
})()
//miniprogram-npm-outsideDeps=["@tarojs/service","@tarojs/shared/dist/template"]
//# sourceMappingURL=index.js.map