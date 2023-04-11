module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929543, function(require, module, exports) {
var __TEMP__ = require('./components/ad/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@tarojs/components/lib/react');Object.defineProperty(exports, 'Ad', { enumerable: true, configurable: true, get: function() { return __TEMP__.Ad; } });Object.defineProperty(exports, 'AdCustom', { enumerable: true, configurable: true, get: function() { return __TEMP__.AdCustom; } });Object.defineProperty(exports, 'AnimationVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.AnimationVideo; } });Object.defineProperty(exports, 'AnimationView', { enumerable: true, configurable: true, get: function() { return __TEMP__.AnimationView; } });Object.defineProperty(exports, 'ArCamera', { enumerable: true, configurable: true, get: function() { return __TEMP__.ArCamera; } });Object.defineProperty(exports, 'Audio', { enumerable: true, configurable: true, get: function() { return __TEMP__.Audio; } });Object.defineProperty(exports, 'AwemeData', { enumerable: true, configurable: true, get: function() { return __TEMP__.AwemeData; } });Object.defineProperty(exports, 'Block', { enumerable: true, configurable: true, get: function() { return __TEMP__.Block; } });Object.defineProperty(exports, 'Button', { enumerable: true, configurable: true, get: function() { return __TEMP__.Button; } });Object.defineProperty(exports, 'Camera', { enumerable: true, configurable: true, get: function() { return __TEMP__.Camera; } });Object.defineProperty(exports, 'Canvas', { enumerable: true, configurable: true, get: function() { return __TEMP__.Canvas; } });Object.defineProperty(exports, 'ChannelLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.ChannelLive; } });Object.defineProperty(exports, 'ChannelVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.ChannelVideo; } });Object.defineProperty(exports, 'Checkbox', { enumerable: true, configurable: true, get: function() { return __TEMP__.Checkbox; } });Object.defineProperty(exports, 'CheckboxGroup', { enumerable: true, configurable: true, get: function() { return __TEMP__.CheckboxGroup; } });Object.defineProperty(exports, 'CommentDetail', { enumerable: true, configurable: true, get: function() { return __TEMP__.CommentDetail; } });Object.defineProperty(exports, 'CommentList', { enumerable: true, configurable: true, get: function() { return __TEMP__.CommentList; } });Object.defineProperty(exports, 'ContactButton', { enumerable: true, configurable: true, get: function() { return __TEMP__.ContactButton; } });Object.defineProperty(exports, 'CoverImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.CoverImage; } });Object.defineProperty(exports, 'CoverView', { enumerable: true, configurable: true, get: function() { return __TEMP__.CoverView; } });Object.defineProperty(exports, 'CustomWrapper', { enumerable: true, configurable: true, get: function() { return __TEMP__.CustomWrapper; } });Object.defineProperty(exports, 'Editor', { enumerable: true, configurable: true, get: function() { return __TEMP__.Editor; } });Object.defineProperty(exports, 'FollowSwan', { enumerable: true, configurable: true, get: function() { return __TEMP__.FollowSwan; } });Object.defineProperty(exports, 'Form', { enumerable: true, configurable: true, get: function() { return __TEMP__.Form; } });Object.defineProperty(exports, 'FunctionalPageNavigator', { enumerable: true, configurable: true, get: function() { return __TEMP__.FunctionalPageNavigator; } });Object.defineProperty(exports, 'Icon', { enumerable: true, configurable: true, get: function() { return __TEMP__.Icon; } });Object.defineProperty(exports, 'InlinePaymentPanel', { enumerable: true, configurable: true, get: function() { return __TEMP__.InlinePaymentPanel; } });Object.defineProperty(exports, 'Input', { enumerable: true, configurable: true, get: function() { return __TEMP__.Input; } });Object.defineProperty(exports, 'KeyboardAccessory', { enumerable: true, configurable: true, get: function() { return __TEMP__.KeyboardAccessory; } });Object.defineProperty(exports, 'Label', { enumerable: true, configurable: true, get: function() { return __TEMP__.Label; } });Object.defineProperty(exports, 'Lifestyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.Lifestyle; } });Object.defineProperty(exports, 'Like', { enumerable: true, configurable: true, get: function() { return __TEMP__.Like; } });Object.defineProperty(exports, 'LivePlayer', { enumerable: true, configurable: true, get: function() { return __TEMP__.LivePlayer; } });Object.defineProperty(exports, 'LivePusher', { enumerable: true, configurable: true, get: function() { return __TEMP__.LivePusher; } });Object.defineProperty(exports, 'Login', { enumerable: true, configurable: true, get: function() { return __TEMP__.Login; } });Object.defineProperty(exports, 'Lottie', { enumerable: true, configurable: true, get: function() { return __TEMP__.Lottie; } });Object.defineProperty(exports, 'Map', { enumerable: true, configurable: true, get: function() { return __TEMP__.Map; } });Object.defineProperty(exports, 'MatchMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.MatchMedia; } });Object.defineProperty(exports, 'MovableArea', { enumerable: true, configurable: true, get: function() { return __TEMP__.MovableArea; } });Object.defineProperty(exports, 'MovableView', { enumerable: true, configurable: true, get: function() { return __TEMP__.MovableView; } });Object.defineProperty(exports, 'NativeSlot', { enumerable: true, configurable: true, get: function() { return __TEMP__.NativeSlot; } });Object.defineProperty(exports, 'NavigationBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.NavigationBar; } });Object.defineProperty(exports, 'Navigator', { enumerable: true, configurable: true, get: function() { return __TEMP__.Navigator; } });Object.defineProperty(exports, 'OfficialAccount', { enumerable: true, configurable: true, get: function() { return __TEMP__.OfficialAccount; } });Object.defineProperty(exports, 'OpenData', { enumerable: true, configurable: true, get: function() { return __TEMP__.OpenData; } });Object.defineProperty(exports, 'PageContainer', { enumerable: true, configurable: true, get: function() { return __TEMP__.PageContainer; } });Object.defineProperty(exports, 'PageMeta', { enumerable: true, configurable: true, get: function() { return __TEMP__.PageMeta; } });Object.defineProperty(exports, 'Picker', { enumerable: true, configurable: true, get: function() { return __TEMP__.Picker; } });Object.defineProperty(exports, 'PickerGroup', { enumerable: true, configurable: true, get: function() { return __TEMP__.PickerGroup; } });Object.defineProperty(exports, 'PickerView', { enumerable: true, configurable: true, get: function() { return __TEMP__.PickerView; } });Object.defineProperty(exports, 'PickerViewColumn', { enumerable: true, configurable: true, get: function() { return __TEMP__.PickerViewColumn; } });Object.defineProperty(exports, 'Progress', { enumerable: true, configurable: true, get: function() { return __TEMP__.Progress; } });Object.defineProperty(exports, 'Radio', { enumerable: true, configurable: true, get: function() { return __TEMP__.Radio; } });Object.defineProperty(exports, 'RadioGroup', { enumerable: true, configurable: true, get: function() { return __TEMP__.RadioGroup; } });Object.defineProperty(exports, 'RichText', { enumerable: true, configurable: true, get: function() { return __TEMP__.RichText; } });Object.defineProperty(exports, 'RootPortal', { enumerable: true, configurable: true, get: function() { return __TEMP__.RootPortal; } });Object.defineProperty(exports, 'RtcRoom', { enumerable: true, configurable: true, get: function() { return __TEMP__.RtcRoom; } });Object.defineProperty(exports, 'RtcRoomItem', { enumerable: true, configurable: true, get: function() { return __TEMP__.RtcRoomItem; } });Object.defineProperty(exports, 'ShareElement', { enumerable: true, configurable: true, get: function() { return __TEMP__.ShareElement; } });Object.defineProperty(exports, 'Slider', { enumerable: true, configurable: true, get: function() { return __TEMP__.Slider; } });Object.defineProperty(exports, 'Slot', { enumerable: true, configurable: true, get: function() { return __TEMP__.Slot; } });Object.defineProperty(exports, 'Switch', { enumerable: true, configurable: true, get: function() { return __TEMP__.Switch; } });Object.defineProperty(exports, 'TabItem', { enumerable: true, configurable: true, get: function() { return __TEMP__.TabItem; } });Object.defineProperty(exports, 'Tabbar', { enumerable: true, configurable: true, get: function() { return __TEMP__.Tabbar; } });Object.defineProperty(exports, 'Tabs', { enumerable: true, configurable: true, get: function() { return __TEMP__.Tabs; } });Object.defineProperty(exports, 'Textarea', { enumerable: true, configurable: true, get: function() { return __TEMP__.Textarea; } });Object.defineProperty(exports, 'Video', { enumerable: true, configurable: true, get: function() { return __TEMP__.Video; } });Object.defineProperty(exports, 'VideoControl', { enumerable: true, configurable: true, get: function() { return __TEMP__.VideoControl; } });Object.defineProperty(exports, 'VideoDanmu', { enumerable: true, configurable: true, get: function() { return __TEMP__.VideoDanmu; } });Object.defineProperty(exports, 'VoipRoom', { enumerable: true, configurable: true, get: function() { return __TEMP__.VoipRoom; } });Object.defineProperty(exports, 'WebView', { enumerable: true, configurable: true, get: function() { return __TEMP__.WebView; } });
var __TEMP__ = require('./components/ad-custom/loader.js');
var __TEMP__ = require('./components/animation-video/loader.js');
var __TEMP__ = require('./components/animation-view/loader.js');
var __TEMP__ = require('./components/ar-camera/loader.js');
var __TEMP__ = require('./components/audio/loader.js');
var __TEMP__ = require('./components/aweme-data/loader.js');
var __TEMP__ = require('./components/button/loader.js');
var __TEMP__ = require('./components/camera/loader.js');
var __TEMP__ = require('./components/canvas/loader.js');
var __TEMP__ = require('./components/channel-live/loader.js');
var __TEMP__ = require('./components/channel-video/loader.js');
var __TEMP__ = require('./components/checkbox/loader.js');
var __TEMP__ = require('./components/comment/loader.js');
var __TEMP__ = require('./components/contact-button/loader.js');
var __TEMP__ = require('./components/cover-image/loader.js');
var __TEMP__ = require('./components/cover-view/loader.js');
var __TEMP__ = require('./components/editor/loader.js');
var __TEMP__ = require('./components/follow-swan/loader.js');
var __TEMP__ = require('./components/form/loader.js');
var __TEMP__ = require('./components/functional-page-navigator/loader.js');
var __TEMP__ = require('./components/icon/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/image/index.js');Object.defineProperty(exports, 'Image', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
var __TEMP__ = require('./components/inline-payment-panel/loader.js');
var __TEMP__ = require('./components/input/loader.js');
var __TEMP__ = require('./components/keyboard-accessory/loader.js');
var __TEMP__ = require('./components/label/loader.js');
var __TEMP__ = require('./components/lifestyle/loader.js');
var __TEMP__ = require('./components/like/loader.js');
var __TEMP__ = require('./components/live-player/loader.js');
var __TEMP__ = require('./components/live-pusher/loader.js');
var __TEMP__ = require('./components/login/loader.js');
var __TEMP__ = require('./components/lottie/loader.js');
var __TEMP__ = require('./components/map/loader.js');
var __TEMP__ = require('./components/match-media/loader.js');
var __TEMP__ = require('./components/movable-area/loader.js');
var __TEMP__ = require('./components/navigation-bar/loader.js');
var __TEMP__ = require('./components/navigator/loader.js');
var __TEMP__ = require('./components/official-account/loader.js');
var __TEMP__ = require('./components/open-data/loader.js');
var __TEMP__ = require('./components/page-container/loader.js');
var __TEMP__ = require('./components/page-meta/loader.js');
var __TEMP__ = require('./components/picker/loader.js');
var __TEMP__ = require('./components/picker-view/loader.js');
var __TEMP__ = require('./components/progress/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/pull-down-refresh/index.js');Object.defineProperty(exports, 'PullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
var __TEMP__ = require('./components/radio/loader.js');
var __TEMP__ = require('./components/rich-text/loader.js');
var __TEMP__ = require('./components/root-portal/loader.js');
var __TEMP__ = require('./components/rtc-room/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/scroll-view/index.js');Object.defineProperty(exports, 'ScrollView', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
var __TEMP__ = require('./components/share-element/loader.js');
var __TEMP__ = require('./components/slider/loader.js');
var __TEMP__ = require('./components/slot/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/swiper/index.js');Object.defineProperty(exports, 'Swiper', { enumerable: true, configurable: true, get: function() { return __TEMP__.Swiper; } });Object.defineProperty(exports, 'SwiperItem', { enumerable: true, configurable: true, get: function() { return __TEMP__.SwiperItem; } });
var __TEMP__ = require('./components/switch/loader.js');
var __TEMP__ = require('./components/tabbar/loader.js');
var __TEMP__ = require('./components/tabs/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/text/index.js');Object.defineProperty(exports, 'Text', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
var __TEMP__ = require('./components/textarea/loader.js');
var __TEMP__ = require('./components/video/loader.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/view/index.js');Object.defineProperty(exports, 'View', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });
var __TEMP__ = require('./components/voip-room/loader.js');
var __TEMP__ = require('./components/web-view/loader.js');
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./components/ad/loader.js":1680223929544,"./components/ad-custom/loader.js":1680223929545,"./components/animation-video/loader.js":1680223929546,"./components/animation-view/loader.js":1680223929547,"./components/ar-camera/loader.js":1680223929548,"./components/audio/loader.js":1680223929549,"./components/aweme-data/loader.js":1680223929550,"./components/button/loader.js":1680223929551,"./components/camera/loader.js":1680223929552,"./components/canvas/loader.js":1680223929553,"./components/channel-live/loader.js":1680223929554,"./components/channel-video/loader.js":1680223929555,"./components/checkbox/loader.js":1680223929556,"./components/comment/loader.js":1680223929557,"./components/contact-button/loader.js":1680223929558,"./components/cover-image/loader.js":1680223929559,"./components/cover-view/loader.js":1680223929560,"./components/editor/loader.js":1680223929561,"./components/follow-swan/loader.js":1680223929562,"./components/form/loader.js":1680223929563,"./components/functional-page-navigator/loader.js":1680223929564,"./components/icon/loader.js":1680223929565,"./components/image/index.js":1680223929566,"./components/inline-payment-panel/loader.js":1680223929567,"./components/input/loader.js":1680223929568,"./components/keyboard-accessory/loader.js":1680223929569,"./components/label/loader.js":1680223929570,"./components/lifestyle/loader.js":1680223929571,"./components/like/loader.js":1680223929572,"./components/live-player/loader.js":1680223929573,"./components/live-pusher/loader.js":1680223929574,"./components/login/loader.js":1680223929575,"./components/lottie/loader.js":1680223929576,"./components/map/loader.js":1680223929577,"./components/match-media/loader.js":1680223929578,"./components/movable-area/loader.js":1680223929579,"./components/navigation-bar/loader.js":1680223929580,"./components/navigator/loader.js":1680223929581,"./components/official-account/loader.js":1680223929582,"./components/open-data/loader.js":1680223929583,"./components/page-container/loader.js":1680223929584,"./components/page-meta/loader.js":1680223929585,"./components/picker/loader.js":1680223929586,"./components/picker-view/loader.js":1680223929587,"./components/progress/loader.js":1680223929588,"./components/pull-down-refresh/index.js":1680223929589,"./components/radio/loader.js":1680223929590,"./components/rich-text/loader.js":1680223929591,"./components/root-portal/loader.js":1680223929592,"./components/rtc-room/loader.js":1680223929593,"./components/scroll-view/index.js":1680223929594,"./components/share-element/loader.js":1680223929596,"./components/slider/loader.js":1680223929597,"./components/slot/loader.js":1680223929598,"./components/swiper/index.js":1680223929599,"./components/switch/loader.js":1680223929600,"./components/tabbar/loader.js":1680223929601,"./components/tabs/loader.js":1680223929602,"./components/text/index.js":1680223929603,"./components/textarea/loader.js":1680223929604,"./components/video/loader.js":1680223929605,"./components/view/index.js":1680223929606,"./components/voip-room/loader.js":1680223929607,"./components/web-view/loader.js":1680223929608}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929544, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-ad-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929545, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-ad-custom-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929546, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-animation-video-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929547, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-animation-view-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929548, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-ar-camera-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929549, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-audio-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929550, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-aweme-data-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929551, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-button-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929552, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-camera-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929553, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-canvas-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929554, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-channel-live-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929555, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-channel-video-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929556, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-checkbox-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-checkbox-group-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929557, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-comment-detail-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-comment-list-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929558, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-contact-button-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929559, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-cover-image-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929560, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-cover-view-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929561, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-editor-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929562, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-follow-swan-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929563, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-form-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929564, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-functional-page-navigator-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929565, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-icon-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929566, function(require, module, exports) {
var __TEMP__ = require('@babel/runtime/helpers/classCallCheck');var _classCallCheck = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createClass');var _createClass = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/assertThisInitialized');var _assertThisInitialized = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/inherits');var _inherits = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createSuper');var _createSuper = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('weui');
var __TEMP__ = require('classnames');var classNames = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);

require('intersection-observer');

var Image = /*#__PURE__*/function (_React$Component) {
  _inherits(Image, _React$Component);

  var _super = _createSuper(Image);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _super.call(this, props);
    _this.observer = {};
    _this.imgRef = null;
    _this.state = {
      isLoaded: false
    };
    _this.imageOnLoad = _this.imageOnLoad.bind(_assertThisInitialized(_this)); // this.observer = {}

    return _this;
  }

  _createClass(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.lazyLoad) {
        this.observer = new IntersectionObserver(function (entries) {
          // 异步 api 关系
          if (entries[entries.length - 1].isIntersecting) {
            _this2.setState({
              isLoaded: true
            }, function () {
              // findDOMNode(this).children[0].src = this.props.src
              _this2.imgRef.src = _this2.props.src;
            });
          }
        }, {
          rootMargin: '300px 0px'
        });
        this.observer.observe(this.imgRef);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect && this.observer.disconnect();
    }
  }, {
    key: "imageOnLoad",
    value: function imageOnLoad(e) {
      var onLoad = this.props.onLoad;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        writable: true,
        value: {
          width: e.target.width,
          height: e.target.height
        }
      });
      onLoad && onLoad(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _a = this.props,
          className = _a.className,
          _a$style = _a.style,
          style = _a$style === void 0 ? {} : _a$style,
          src = _a.src,
          mode = _a.mode,
          onError = _a.onError,
          lazyLoad = _a.lazyLoad,
          imgProps = _a.imgProps,
          reset = __rest(_a, ["className", "style", "src", "mode", "onError", "lazyLoad", "imgProps"]);

      var cls = classNames('taro-img', {
        'taro-img__widthfix': mode === 'widthFix'
      }, className);
      var imgCls = classNames('taro-img__mode-' + (mode || 'scaleToFill').toLowerCase().replace(/\s/g, ''));
      return React.createElement("div", Object.assign({
        className: cls,
        style: style
      }, reset), lazyLoad ? React.createElement("img", Object.assign({
        ref: function ref(img) {
          return _this3.imgRef = img;
        },
        className: imgCls,
        "data-src": src,
        onLoad: this.imageOnLoad,
        onError: onError
      }, imgProps)) : React.createElement("img", Object.assign({
        ref: function ref(img) {
          return _this3.imgRef = img;
        },
        className: imgCls,
        src: src,
        onLoad: this.imageOnLoad,
        onError: onError
      }, imgProps)));
    }
  }]);

  return Image;
}(React.Component);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return Image; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929567, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-inline-payment-panel-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929568, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-input-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929569, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-keyboard-accessory-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929570, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-label-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929571, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-lifestyle-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929572, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-like-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929573, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-live-player-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929574, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-live-pusher-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929575, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-login-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929576, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-lottie-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929577, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-map-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929578, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-match-media-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929579, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-movable-area-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-movable-view-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929580, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-navigation-bar-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929581, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-navigator-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929582, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-official-account-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929583, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-open-data-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929584, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-page-container-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929585, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-page-meta-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929586, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-picker-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-picker-group');var defineCustomElement$1 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929587, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-picker-view-column-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-picker-view-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929588, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-progress-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929589, function(require, module, exports) {
var __TEMP__ = require('@babel/runtime/helpers/slicedToArray');var _slicedToArray = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/classCallCheck');var _classCallCheck = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createClass');var _createClass = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/assertThisInitialized');var _assertThisInitialized = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/inherits');var _inherits = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createSuper');var _createSuper = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('@tarojs/taro');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('classnames');var classNames = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);

function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}

var isWebView = typeof navigator !== 'undefined' && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var PullDownState;

(function (PullDownState) {
  PullDownState["activate"] = "activate";
  PullDownState["deactivate"] = "deactivate";
  PullDownState["release"] = "release";
  PullDownState["finish"] = "finish";
})(PullDownState || (PullDownState = {}));

var INDICATOR;

(function (INDICATOR) {
  INDICATOR["activate"] = "release";
  INDICATOR["deactivate"] = "pull";
  INDICATOR["release"] = "loading";
  INDICATOR["finish"] = "finish";
})(INDICATOR || (INDICATOR = {}));

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('cancel', function () {
    return {};
  }, opts);
} catch (e) {} // eslint-disable-line no-empty


var willPreventDefault = supportsPassive ? {
  passive: false
} : false;

var PullDownRefresh = /*#__PURE__*/function (_React$Component) {
  _inherits(PullDownRefresh, _React$Component);

  var _super = _createSuper(PullDownRefresh);

  function PullDownRefresh() {
    var _this;

    _classCallCheck(this, PullDownRefresh);

    _this = _super.apply(this, arguments); // https://github.com/yiminghe/zscroller/blob/2d97973287135745818a0537712235a39a6a62a1/src/Scroller.js#L355
    // currSt: `activate` / `deactivate` / `release` / `finish`

    _this.state = {
      currSt: PullDownState.deactivate,
      dragOnEdge: false
    };
    _this._ScreenY = 0;
    _this._startScreenY = 0;
    _this._lastScreenY = 0;
    _this._isMounted = false;
    _this.listeners = [];

    _this.triggerPullDownRefresh = function (flag) {
      // 在初始化时、用代码 自动 触发 pullDownRefresh
      // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
      if (!_this.state.dragOnEdge && _this._isMounted) {
        if (flag) {
          _this._lastScreenY = _this.props.distanceToRefresh + 1; // change dom need after setState

          _this.setState({
            currSt: PullDownState.release
          }, function () {
            return _this.setContentStyle(_this._lastScreenY);
          });
        } else {
          _this.setState({
            currSt: PullDownState.finish
          }, function () {
            return _this.reset();
          });
        }
      }
    };

    _this.init = function () {
      var ele = _this.scrollContainer;
      _this._to = {
        touchstart: _this.onTouchStart.bind(_assertThisInitialized(_this), ele),
        touchmove: _this.onTouchMove.bind(_assertThisInitialized(_this), ele),
        touchend: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele),
        touchcancel: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele)
      };
      Object.keys(_this._to).forEach(function (key) {
        ele.addEventListener(key, _this._to[key], willPreventDefault);
      });
    };

    _this.destroy = function () {
      var ele = _this.scrollContainer;
      Object.keys(_this._to).forEach(function (key) {
        ele.removeEventListener(key, _this._to[key]);
      });
    };

    _this.onTouchStart = function (_, e) {
      _this._ScreenY = _this._startScreenY = e.touches[0].screenY; // 一开始 refreshing 为 true 时 this._lastScreenY 有值

      _this._lastScreenY = _this._lastScreenY || 0;
    };

    _this.isEdge = function (ele) {
      var container = _this.scrollContainer;

      if (container && container === document.body) {
        // In chrome61 `document.body.scrollTop` is invalid
        var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
        return scrollNode.scrollTop <= 0;
      }

      return ele.scrollTop <= 0;
    };

    _this.damping = function (dy) {
      if (Math.abs(_this._lastScreenY) > _this.props.damping) {
        return 0;
      }

      var ratio = Math.abs(_this._ScreenY - _this._startScreenY) / window.screen.height;
      dy *= (1 - ratio) * 0.6;
      return dy;
    };

    _this.onTouchMove = function (ele, e) {
      // 使用 pageY 对比有问题
      var _screenY = e.touches[0].screenY; // 拖动方向不符合的不处理

      if (_this._startScreenY > _screenY) {
        return;
      }

      if (_this.isEdge(ele)) {
        if (!_this.state.dragOnEdge) {
          // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
          // 下面这行代码解决了上面这个问题
          _this._ScreenY = _this._startScreenY = e.touches[0].screenY;

          _this.setState({
            dragOnEdge: true
          });
        }

        if (e.cancelable) {
          e.preventDefault();
        } // add stopPropagation with fastclick will trigger content onClick event. why?
        // ref https://github.com/ant-design/ant-design-mobile/issues/2141
        // e.stopPropagation();


        var _diff = Math.round(_screenY - _this._ScreenY);

        _this._ScreenY = _screenY;
        _this._lastScreenY += _this.damping(_diff);

        _this.setContentStyle(_this._lastScreenY);

        if (Math.abs(_this._lastScreenY) < _this.props.distanceToRefresh) {
          if (_this.state.currSt !== PullDownState.deactivate) {
            // console.log('back to the distance');
            _this.setState({
              currSt: PullDownState.deactivate
            });
          }
        } else {
          if (_this.state.currSt === PullDownState.deactivate) {
            // console.log('reach to the distance');
            _this.setState({
              currSt: PullDownState.activate
            });
          }
        } // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
        // iOS UIWebView issue, It seems no problem in WKWebView


        if (isWebView && e.changedTouches[0].clientY < 0) {
          _this.onTouchEnd();
        }
      }
    };

    _this.onTouchEnd = function () {
      var _a, _b;

      if (_this.state.dragOnEdge) {
        _this.setState({
          dragOnEdge: false
        });
      }

      if (_this.state.currSt === PullDownState.activate) {
        _this.setState({
          currSt: PullDownState.release
        });

        (_b = (_a = _this.props).onRefresh) === null || _b === void 0 ? void 0 : _b.call(_a);
        _this._lastScreenY = _this.props.distanceToRefresh + 1;

        _this.setContentStyle(_this._lastScreenY);
      } else if (_this.state.currSt === 'release') {
        _this._lastScreenY = _this.props.distanceToRefresh + 1;

        _this.setContentStyle(_this._lastScreenY);
      } else {
        _this.reset();
      }
    };

    _this.reset = function () {
      _this._lastScreenY = 0;

      _this.setContentStyle(0);
    };

    _this.setContentStyle = function (ty) {
      // TODO: Why sometimes do not have `this.contentRef` ?
      if (_this.contentRef) {
        // translate3d 不清理 会影响内部元素定位
        if (ty) {
          setTransform(_this.contentRef.style, "translate3d(0px,".concat(ty, "px,0)"));
        } else {
          setTransform(_this.contentRef.style, '');
        }
      }
    };

    return _this;
  }

  _createClass(PullDownRefresh, [{
    key: "scrollContainer",
    get: function get() {
      var _a, _b;

      return ((_a = this.contentRef) === null || _a === void 0 ? void 0 : _a.parentElement) || ((_b = this.contentRef) === null || _b === void 0 ? void 0 : _b.closest('.taro_page_stationed')) || document.querySelector('.taro_page_stationed') || document.querySelector('.taro_page') || document.querySelector('.taro_router') || document.querySelector('.taro-tabbar__panel') || document.body;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.init();
      this._isMounted = true;
      this.listeners = [['__taroStartPullDownRefresh', function (_ref) {
        var successHandler = _ref.successHandler,
            errorHandler = _ref.errorHandler;

        try {
          _this2.triggerPullDownRefresh(true);

          successHandler({
            errMsg: 'startPullDownRefresh: ok'
          });
        } catch (e) {
          errorHandler({
            errMsg: 'startPullDownRefresh: fail'
          });
        }
      }], ['__taroStopPullDownRefresh', function (_ref2) {
        var successHandler = _ref2.successHandler,
            errorHandler = _ref2.errorHandler;

        try {
          _this2.triggerPullDownRefresh(false);

          successHandler({
            errMsg: 'stopPullDownRefresh: ok'
          });
        } catch (e) {
          errorHandler({
            errMsg: 'stopPullDownRefresh: fail'
          });
        }
      }]];
      this.listeners.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            evtName = _ref4[0],
            callback = _ref4[1];

        Taro.eventCenter.on(evtName, callback);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
      this.listeners.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            evtName = _ref6[0],
            callback = _ref6[1];

        Taro.eventCenter.off(evtName, callback);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _a, _b, _c, _d;

      if (prevState.currSt !== this.state.currSt) {
        var pageEl = this.scrollContainer;

        switch (this.state.currSt) {
          case PullDownState.release:
            (_b = (_a = pageEl === null || pageEl === void 0 ? void 0 : pageEl.__page) === null || _a === void 0 ? void 0 : _a.onPullDownRefresh) === null || _b === void 0 ? void 0 : _b.call(_a);
            break;

          case PullDownState.deactivate:
            (_d = (_c = pageEl === null || pageEl === void 0 ? void 0 : pageEl.__page) === null || _c === void 0 ? void 0 : _c.onPullIntercept) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = Object.assign({}, this.props);
      delete props.damping;
      delete props.indicator;
      delete props.distanceToRefresh;
      delete props.onRefresh;

      var className = props.className,
          prefixCls = props.prefixCls,
          children = props.children,
          restProps = __rest(props, ["className", "prefixCls", "children"]);

      var renderRefresh = function renderRefresh(cls) {
        var _this3$state = _this3.state,
            currSt = _this3$state.currSt,
            dragOnEdge = _this3$state.dragOnEdge;
        var cla = classNames(cls, !dragOnEdge && "".concat(prefixCls, "-transition"));
        var showIndicator = currSt === 'activate' || currSt === 'release';
        return React.createElement("div", {
          className: "".concat(prefixCls, "-content-wrapper")
        }, React.createElement("div", {
          className: cla,
          ref: function ref(el) {
            _this3.contentRef = el;
          }
        }, showIndicator && React.createElement("div", {
          className: "".concat(prefixCls, "-indicator")
        }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null)), children));
      };

      if (this.scrollContainer) {
        return renderRefresh("".concat(prefixCls, "-content ").concat(prefixCls, "-down"));
      }

      return React.createElement("pull-down-refresh", Object.assign({
        ref: function ref(el) {
          _this3.containerRef = el;
        },
        className: classNames(className, prefixCls, "".concat(prefixCls, "-down"))
      }, restProps), renderRefresh("".concat(prefixCls, "-content")));
    }
  }]);

  return PullDownRefresh;
}(React.Component);

PullDownRefresh.defaultProps = {
  prefixCls: 'rmc-pull-to-refresh',
  distanceToRefresh: 50,
  damping: 100,
  indicator: INDICATOR
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return PullDownRefresh; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929590, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-radio-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-radio-group-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929591, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-rich-text-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929592, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-root-portal-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929593, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-rtc-room-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-rtc-room-item-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929594, function(require, module, exports) {
var __TEMP__ = require('@babel/runtime/helpers/classCallCheck');var _classCallCheck = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createClass');var _createClass = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/inherits');var _inherits = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createSuper');var _createSuper = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('weui');
var __TEMP__ = require('classnames');var classNames = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../utils/index.js');var throttle = __TEMP__['throttle'];

function easeOutScroll() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var callback = arguments.length > 2 ? arguments[2] : undefined;

  if (from === to || typeof from !== 'number') {
    return;
  }

  var change = to - from;
  var dur = 500;
  var sTime = +new Date();

  function linear(t, b, c, d) {
    return c * t / d + b;
  }

  var isLarger = to >= from;

  function step() {
    from = linear(+new Date() - sTime, from, change, dur);

    if (isLarger && from >= to || !isLarger && to >= from) {
      callback(to);
      return;
    }

    callback(from);
    requestAnimationFrame(step);
  }

  step();
}

function scrollIntoView(id) {
  var _a;

  (_a = document.querySelector("#".concat(id))) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start'
  });
}

function scrollVertical(top, isAnimation) {
  var _this = this;

  if (isAnimation) {
    easeOutScroll(this._scrollTop, top, function (pos) {
      if (_this.container) _this.container.scrollTop = pos;
    });
  } else {
    if (this.container) this.container.scrollTop = top;
  }

  this._scrollTop = top;
}

function scrollHorizontal(left, isAnimation) {
  var _this2 = this;

  if (isAnimation) {
    easeOutScroll(this._scrollLeft, left, function (pos) {
      if (_this2.container) _this2.container.scrollLeft = pos;
    });
  } else {
    if (this.container) this.container.scrollLeft = left;
  }

  this._scrollLeft = left;
}

var ScrollView = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollView, _React$Component);

  var _super = _createSuper(ScrollView);

  function ScrollView() {
    var _this3;

    _classCallCheck(this, ScrollView);

    _this3 = _super.apply(this, arguments);
    _this3._scrollTop = null;
    _this3._scrollLeft = null;
    _this3.container = null;

    _this3.onTouchMove = function (e) {
      e.stopPropagation();
    };

    return _this3;
  }

  _createClass(ScrollView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll(this.props, true);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.handleScroll(nextProps);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(props) {
      var _this4 = this;

      var isInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // scrollIntoView
      if (props.scrollIntoView && typeof props.scrollIntoView === 'string' && document && document.querySelector && document.querySelector("#".concat(props.scrollIntoView))) {
        if (isInit) {
          setTimeout(function () {
            return scrollIntoView(props.scrollIntoView);
          }, 500);
        } else {
          scrollIntoView(props.scrollIntoView);
        }
      } else {
        var isAnimation = !!props.scrollWithAnimation; // Y 轴滚动

        if (props.scrollY && typeof props.scrollTop === 'number' && props.scrollTop !== this._scrollTop) {
          if (isInit) {
            setTimeout(function () {
              return scrollVertical.bind(_this4)(props.scrollTop, isAnimation);
            }, 10);
          } else {
            scrollVertical.bind(this)(props.scrollTop, isAnimation);
          }
        } // X 轴滚动


        if (props.scrollX && typeof props.scrollLeft === 'number' && props.scrollLeft !== this._scrollLeft) {
          if (isInit) {
            setTimeout(function () {
              return scrollHorizontal.bind(_this4)(props.scrollLeft, isAnimation);
            }, 10);
          } else {
            scrollHorizontal.bind(this)(props.scrollLeft, isAnimation);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          className = _this$props.className,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          onScroll = _this$props.onScroll,
          onScrollToUpper = _this$props.onScrollToUpper,
          onScrollToLower = _this$props.onScrollToLower,
          onTouchMove = _this$props.onTouchMove,
          scrollX = _this$props.scrollX,
          scrollY = _this$props.scrollY;
      var _this$props2 = this.props,
          _this$props2$upperThr = _this$props2.upperThreshold,
          upperThreshold = _this$props2$upperThr === void 0 ? 50 : _this$props2$upperThr,
          _this$props2$lowerThr = _this$props2.lowerThreshold,
          lowerThreshold = _this$props2$lowerThr === void 0 ? 50 : _this$props2$lowerThr;
      var cls = classNames('taro-scroll', {
        'taro-scroll-view__scroll-x': scrollX,
        'taro-scroll-view__scroll-y': scrollY
      }, className);
      upperThreshold = Number(upperThreshold);
      lowerThreshold = Number(lowerThreshold);

      var upperAndLower = function upperAndLower(e) {
        if (!_this5.container) return;
        var _this5$container = _this5.container,
            offsetWidth = _this5$container.offsetWidth,
            offsetHeight = _this5$container.offsetHeight,
            scrollLeft = _this5$container.scrollLeft,
            scrollTop = _this5$container.scrollTop,
            scrollHeight = _this5$container.scrollHeight,
            scrollWidth = _this5$container.scrollWidth;

        if (onScrollToLower && (_this5.props.scrollY && offsetHeight + scrollTop + lowerThreshold >= scrollHeight || _this5.props.scrollX && offsetWidth + scrollLeft + lowerThreshold >= scrollWidth)) {
          onScrollToLower(e);
        }

        if (onScrollToUpper && (_this5.props.scrollY && scrollTop <= upperThreshold || _this5.props.scrollX && scrollLeft <= upperThreshold)) {
          onScrollToUpper(e);
        }
      };

      var upperAndLowerThrottle = throttle(upperAndLower, 200);

      var _onScroll = function _onScroll(e) {
        var _this5$container2 = _this5.container,
            scrollLeft = _this5$container2.scrollLeft,
            scrollTop = _this5$container2.scrollTop,
            scrollHeight = _this5$container2.scrollHeight,
            scrollWidth = _this5$container2.scrollWidth;
        _this5._scrollLeft = scrollLeft;
        _this5._scrollTop = scrollTop;
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          writable: true,
          value: {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollHeight: scrollHeight,
            scrollWidth: scrollWidth
          }
        });
        upperAndLowerThrottle(e);
        onScroll && onScroll(e);
      };

      var _onTouchMove = function _onTouchMove(e) {
        onTouchMove ? onTouchMove(e) : _this5.onTouchMove(e);
      };

      return React.createElement("div", {
        ref: function ref(container) {
          _this5.container = container;
        },
        style: style,
        className: cls,
        onScroll: _onScroll,
        onTouchMove: _onTouchMove
      }, this.props.children);
    }
  }]);

  return ScrollView;
}(React.Component);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return ScrollView; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929595}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929595, function(require, module, exports) {
function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments.length > 2 ? arguments[2] : undefined;
  var lastTime = 0;
  var deferTimer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = scope || this;
    var now = Date.now();

    if (now - lastTime > threshold) {
      fn.apply(this, args);
      lastTime = now;
    } else {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        lastTime = now;
        fn.apply(context, args);
      }, threshold);
    }
  };
}
function debounce(fn) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments.length > 2 ? arguments[2] : undefined;
  var timer;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var context = scope || this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, ms);
  };
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'debounce', { enumerable: true, configurable: true, get: function() { return debounce; } });Object.defineProperty(exports, 'throttle', { enumerable: true, configurable: true, get: function() { return throttle; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929596, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-share-element-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929597, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-slider-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929598, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-native-slot-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-slot-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929599, function(require, module, exports) {
var __TEMP__ = require('@babel/runtime/helpers/typeof');var _typeof = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/classCallCheck');var _classCallCheck = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createClass');var _createClass = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/inherits');var _inherits = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createSuper');var _createSuper = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('swiper/swiper-bundle.min.css');
var __TEMP__ = require('weui');
var __TEMP__ = require('classnames');var classNames = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('swiper/swiper-bundle.esm.js');var Swipers = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../utils/index.js');var debounce = __TEMP__['debounce'];

var INSTANCE_ID = 0;

var createEvent = function createEvent(type) {
  var e;

  try {
    e = new TouchEvent(type);
  } catch (err) {
    e = document.createEvent('Event');
    e.initEvent(type, true, true);
  }

  return e;
};

var SwiperItem = /*#__PURE__*/function (_React$Component) {
  _inherits(SwiperItem, _React$Component);

  var _super = _createSuper(SwiperItem);

  function SwiperItem() {
    _classCallCheck(this, SwiperItem);

    return _super.apply(this, arguments);
  }

  _createClass(SwiperItem, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          style = _a.style,
          itemId = _a.itemId,
          children = _a.children,
          restProps = __rest(_a, ["className", "style", "itemId", "children"]);

      var cls = classNames('swiper-slide', className);
      return React.createElement("div", Object.assign({
        className: cls,
        style: style,
        "item-id": itemId
      }, restProps), children);
    }
  }]);

  return SwiperItem;
}(React.Component);

var Swiper = /*#__PURE__*/function (_React$Component2) {
  _inherits(Swiper, _React$Component2);

  var _super2 = _createSuper(Swiper);

  function Swiper() {
    var _this;

    _classCallCheck(this, Swiper);

    _this = _super2.apply(this, arguments);
    _this._id = 1 + INSTANCE_ID++;
    _this._$current = 0;
    _this._$width = 0;
    _this._$height = 0;

    _this.handleSwiperLoopListen = function () {
      var _a, _b, _c, _d;

      (_b = (_a = _this.observerFirst) === null || _a === void 0 ? void 0 : _a.disconnect) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = _this.observerLast) === null || _c === void 0 ? void 0 : _c.disconnect) === null || _d === void 0 ? void 0 : _d.call(_c);
      _this.observerFirst = new MutationObserver(_this.handleSwiperLoop);
      _this.observerLast = new MutationObserver(_this.handleSwiperLoop);
      var wrapper = _this.mySwiper.$wrapperEl[0];
      var list = wrapper.querySelectorAll('taro-swiper-item-core:not(.swiper-slide-duplicate)');

      if (list.length >= 1) {
        _this.observerFirst.observe(list[0], {
          characterData: true
        });
      } else if (list.length >= 2) {
        _this.observerLast.observe(list[list.length - 1], {
          characterData: true
        });
      }
    };

    _this.handleSwiperLoop = debounce(function () {
      if (_this.mySwiper && _this.mySwiper.$wrapperEl && _this.props.circular) {
        // @ts-ignore
        _this.mySwiper.loopDestroy(); // @ts-ignore


        _this.mySwiper.loopCreate();
      }
    }, 500);
    return _this;
  }

  _createClass(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$autoplay = _this$props.autoplay,
          autoplay = _this$props$autoplay === void 0 ? false : _this$props$autoplay,
          _this$props$circular = _this$props.circular,
          circular = _this$props$circular === void 0 ? true : _this$props$circular,
          _this$props$current = _this$props.current,
          current = _this$props$current === void 0 ? 0 : _this$props$current,
          _this$props$displayMu = _this$props.displayMultipleItems,
          displayMultipleItems = _this$props$displayMu === void 0 ? 1 : _this$props$displayMu,
          _this$props$duration = _this$props.duration,
          duration = _this$props$duration === void 0 ? 500 : _this$props$duration,
          _this$props$interval = _this$props.interval,
          interval = _this$props$interval === void 0 ? 5000 : _this$props$interval,
          spaceBetween = _this$props.spaceBetween,
          vertical = _this$props.vertical; // eslint-disable-next-line @typescript-eslint/no-this-alias

      var that = this;
      var opt = {
        // 指示器
        pagination: {
          el: ".taro-swiper-".concat(this._id, " > .swiper-container > .swiper-pagination")
        },
        direction: vertical ? 'vertical' : 'horizontal',
        loop: circular,
        slidesPerView: parseFloat(String(displayMultipleItems)),
        initialSlide: parseInt(String(current), 10),
        speed: parseInt(String(duration), 10),
        observer: true,
        observeParents: true,
        on: {
          slideChange: function slideChange() {
            var e = createEvent('touchend');

            try {
              Object.defineProperty(e, 'detail', {
                enumerable: true,
                value: {
                  current: this.realIndex
                }
              });
            } catch (err) {} // eslint-disable-line no-empty


            that._$current = this.realIndex;
            that.handleOnChange(e);
          },
          transitionEnd: function transitionEnd() {
            var e = createEvent('touchend');

            try {
              Object.defineProperty(e, 'detail', {
                enumerable: true,
                value: {
                  current: this.mySwiper.realIndex
                }
              });

              if (this.mySwiper.isBeginning) {
                this.mySwiper.slideToLoop(this.props.children.length - 1, 0);
              } else if (this.mySwiper.isEnd) {
                this.mySwiper.slideToLoop(0, 0);
              }
            } catch (err) {} // eslint-disable-line no-empty


            that.handleOnAnimationFinish(e);
          },
          observerUpdate: function observerUpdate(_swiper, e) {
            var target = e.target;
            var className = target && typeof target.className === 'string' ? target.className : '';

            if (className.includes('taro_page') && target.style.display !== 'none') {
              if (that.props.autoplay && target.contains(_swiper.$el[0])) {
                if (that.props.circular) {
                  _swiper.slideToLoop(this.realIndex, 0); // 更新下标

                } else {
                  _swiper.slideTo(this.realIndex);
                }
              }
            }
          }
        }
      }; // 自动播放

      if (autoplay) {
        opt.autoplay = {
          delay: parseInt(String(interval), 10),
          disableOnInteraction: false
        };
      } // 两端距离


      if (spaceBetween) {
        opt.spaceBetween = spaceBetween;
      }

      this.mySwiper = new Swipers(this.$el, opt);
      setTimeout(function () {
        _this2.mySwiper.update();
      }, 500);
      if (!this.mySwiper || !this.props.circular) return;
      var wrapper = this.mySwiper.$wrapperEl[0];
      this.observer = new MutationObserver(this.handleSwiperLoopListen);
      this.observer.observe(wrapper, {
        childList: true
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.mySwiper) {
        var nextCurrent = typeof nextProps.current === 'number' ? nextProps.current : this._$current || 0;
        this.handleSwiperLoop(); // 是否衔接滚动模式

        if (nextProps.circular) {
          if (!this.mySwiper.isBeginning && !this.mySwiper.isEnd) {
            this.mySwiper.slideToLoop(parseInt(nextCurrent, 10)); // 更新下标
          }
        } else {
          this.mySwiper.slideTo(parseInt(nextCurrent, 10) + 1); // 更新下标
        }

        var autoplay = this.mySwiper.autoplay; // 判断是否需要停止或开始自动轮播

        if (autoplay.running !== nextProps.autoplay) {
          if (nextProps.autoplay) {
            if (_typeof(this.mySwiper.params.autoplay) === 'object') {
              this.mySwiper.params.autoplay.disableOnInteraction = false;
              this.mySwiper.params.autoplay.delay = parseInt(String(this.props.interval) || '3000', 10);
            }

            autoplay.start();
          } else {
            autoplay.stop();
          }
        }

        this.mySwiper.update(); // 更新子元素
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      if (preProps.children.length === 0 && this.props.children.length > 0) {
        this.mySwiper.loopDestroy();
        this.mySwiper.loopCreate();
      }

      if (!this.mySwiper) return;

      if (this.props.autoplay) {
        if (this._$width !== this.mySwiper.width || this._$height !== this.mySwiper.height) {
          this.mySwiper.autoplay.start();
        }
      }

      this._$width = this.mySwiper.width;
      this._$height = this.mySwiper.height;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a, _b, _c, _d, _e, _f;

      this.$el = null;
      if (this.mySwiper) this.mySwiper.destroy();
      (_b = (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = this.observerFirst) === null || _c === void 0 ? void 0 : _c.disconnect) === null || _d === void 0 ? void 0 : _d.call(_c);
      (_f = (_e = this.observerLast) === null || _e === void 0 ? void 0 : _e.disconnect) === null || _f === void 0 ? void 0 : _f.call(_e);
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(e) {
      var func = this.props.onChange;
      typeof func === 'function' && func(e);
    }
  }, {
    key: "handleOnAnimationFinish",
    value: function handleOnAnimationFinish(e) {
      var func = this.props.onAnimationFinish;
      typeof func === 'function' && func(e);
    }
  }, {
    key: "parsePX",
    value: function parsePX() {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0px';
      return parseFloat(s.replace(/r*px/i, ''));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          vertical = _this$props2.vertical,
          previousMargin = _this$props2.previousMargin,
          nextMargin = _this$props2.nextMargin,
          indicatorColor = _this$props2.indicatorColor,
          indicatorActiveColor = _this$props2.indicatorActiveColor;
      var defaultIndicatorColor = indicatorColor || 'rgba(0, 0, 0, .3)';
      var defaultIndicatorActiveColor = indicatorActiveColor || '#000';
      var cls = classNames("taro-swiper-".concat(this._id), className);
      var sty = Object.assign({
        paddingTop: vertical ? this.parsePX(previousMargin) : 0,
        paddingRight: vertical ? 0 : this.parsePX(nextMargin),
        paddingBottom: vertical ? this.parsePX(nextMargin) : 0,
        paddingLeft: vertical ? 0 : this.parsePX(previousMargin),
        overflow: 'hidden'
      }, style);
      var paginationCls = classNames('swiper-pagination', {
        'swiper-pagination-hidden': !this.props.indicatorDots,
        'swiper-pagination-bullets': this.props.indicatorDots
      });
      return React.createElement("div", {
        className: "swiper-container-wrapper ".concat(cls),
        style: sty
      }, React.createElement("div", {
        className: 'swiper-container',
        style: {
          overflow: 'visible'
        },
        ref: function ref(el) {
          _this3.$el = el;
        }
      }, React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: "<style type='text/css'>\n              .taro-swiper-".concat(this._id, " > .swiper-container > .swiper-pagination > .swiper-pagination-bullet { background: ").concat(defaultIndicatorColor, " }\n              .taro-swiper-").concat(this._id, " > .swiper-container > .swiper-pagination > .swiper-pagination-bullet-active { background: ").concat(defaultIndicatorActiveColor, " }\n              </style>")
        }
      }), React.createElement("div", {
        className: 'swiper-wrapper'
      }, this.props.children), React.createElement("div", {
        className: paginationCls
      })));
    }
  }]);

  return Swiper;
}(React.Component);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Swiper', { enumerable: true, configurable: true, get: function() { return Swiper; } });Object.defineProperty(exports, 'SwiperItem', { enumerable: true, configurable: true, get: function() { return SwiperItem; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929595}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929600, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-switch-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929601, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-tab-item-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-tabbar');var defineCustomElement$1 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929602, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-tabs-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929603, function(require, module, exports) {
var __TEMP__ = require('@babel/runtime/helpers/classCallCheck');var _classCallCheck = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createClass');var _createClass = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/inherits');var _inherits = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createSuper');var _createSuper = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('weui');
var __TEMP__ = require('classnames');var classNames = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);

var Text = /*#__PURE__*/function (_React$Component) {
  _inherits(Text, _React$Component);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          _a$selectable = _a.selectable,
          selectable = _a$selectable === void 0 ? false : _a$selectable,
          restProps = __rest(_a, ["className", "selectable"]);

      var cls = classNames('taro-text', {
        'taro-text__selectable': selectable
      }, className);
      return React.createElement("span", Object.assign({}, restProps, {
        className: cls
      }), this.props.children);
    }
  }]);

  return Text;
}(React.Component);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return Text; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929604, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-textarea-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929605, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-video-control');var defineCustomElement$1 = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-video-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-video-danmu');var defineCustomElement$2 = __TEMP__['defineCustomElement'];

defineCustomElement();
defineCustomElement$1();
defineCustomElement$2();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929606, function(require, module, exports) {
var __TEMP__ = require('@babel/runtime/helpers/defineProperty');var _defineProperty = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/classCallCheck');var _classCallCheck = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createClass');var _createClass = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/inherits');var _inherits = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@babel/runtime/helpers/createSuper');var _createSuper = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('weui');
var __TEMP__ = require('classnames');var classNames = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);

var View = /*#__PURE__*/function (_React$Component) {
  _inherits(View, _React$Component);

  var _super = _createSuper(View);

  function View() {
    var _this;

    _classCallCheck(this, View);

    _this = _super.apply(this, arguments);
    _this.state = {
      hover: false,
      touch: false
    };
    _this.startTime = 0;
    return _this;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          className = _a.className,
          hoverClass = _a.hoverClass,
          onTouchStart = _a.onTouchStart,
          onTouchEnd = _a.onTouchEnd,
          onTouchMove = _a.onTouchMove,
          _a$hoverStartTime = _a.hoverStartTime,
          hoverStartTime = _a$hoverStartTime === void 0 ? 50 : _a$hoverStartTime,
          _a$hoverStayTime = _a.hoverStayTime,
          hoverStayTime = _a$hoverStayTime === void 0 ? 400 : _a$hoverStayTime,
          other = __rest(_a, ["className", "hoverClass", "onTouchStart", "onTouchEnd", "onTouchMove", "hoverStartTime", "hoverStayTime"]);

      var cls = classNames('', _defineProperty({}, "".concat(hoverClass), this.state.hover), className);

      var _onTouchStart = function _onTouchStart(e) {
        if (hoverClass) {
          _this2.setState(function () {
            return {
              touch: true
            };
          });

          setTimeout(function () {
            if (_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: true
                };
              });
            }
          }, hoverStartTime);
        }

        onTouchStart && onTouchStart(e);

        if (_this2.props.onLongPress) {
          _this2.timeoutEvent = setTimeout(function () {
            _this2.props.onLongPress();
          }, 350);
          _this2.startTime = new Date().getTime();
        }
      };

      var _onTouchMove = function _onTouchMove(e) {
        clearTimeout(_this2.timeoutEvent);
        onTouchMove && onTouchMove(e);
      };

      var _onTouchEnd = function _onTouchEnd(e) {
        var spanTime = new Date().getTime() - _this2.startTime;

        if (spanTime < 350) {
          clearTimeout(_this2.timeoutEvent);
        }

        if (hoverClass) {
          _this2.setState(function () {
            return {
              touch: false
            };
          });

          setTimeout(function () {
            if (!_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: false
                };
              });
            }
          }, hoverStayTime);
        }

        onTouchEnd && onTouchEnd(e);
      };

      return React.createElement("div", Object.assign({
        className: cls,
        onTouchStart: _onTouchStart,
        onTouchEnd: _onTouchEnd,
        onTouchMove: _onTouchMove
      }, other), this.props.children);
    }
  }]);

  return View;
}(React.Component);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return View; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929607, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-voip-room-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929608, function(require, module, exports) {
var __TEMP__ = require('@tarojs/components/dist/components/taro-web-view-core');var defineCustomElement = __TEMP__['defineCustomElement'];

defineCustomElement();
//# sourceMappingURL=loader.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929543);
})()
//miniprogram-npm-outsideDeps=["@tarojs/components/lib/react","@tarojs/components/dist/components/taro-ad-core","@tarojs/components/dist/components/taro-ad-custom-core","@tarojs/components/dist/components/taro-animation-video-core","@tarojs/components/dist/components/taro-animation-view-core","@tarojs/components/dist/components/taro-ar-camera-core","@tarojs/components/dist/components/taro-audio-core","@tarojs/components/dist/components/taro-aweme-data-core","@tarojs/components/dist/components/taro-button-core","@tarojs/components/dist/components/taro-camera-core","@tarojs/components/dist/components/taro-canvas-core","@tarojs/components/dist/components/taro-channel-live-core","@tarojs/components/dist/components/taro-channel-video-core","@tarojs/components/dist/components/taro-checkbox-core","@tarojs/components/dist/components/taro-checkbox-group-core","@tarojs/components/dist/components/taro-comment-detail-core","@tarojs/components/dist/components/taro-comment-list-core","@tarojs/components/dist/components/taro-contact-button-core","@tarojs/components/dist/components/taro-cover-image-core","@tarojs/components/dist/components/taro-cover-view-core","@tarojs/components/dist/components/taro-editor-core","@tarojs/components/dist/components/taro-follow-swan-core","@tarojs/components/dist/components/taro-form-core","@tarojs/components/dist/components/taro-functional-page-navigator-core","@tarojs/components/dist/components/taro-icon-core","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/assertThisInitialized","@babel/runtime/helpers/inherits","@babel/runtime/helpers/createSuper","tslib","weui","classnames","react","intersection-observer","@tarojs/components/dist/components/taro-inline-payment-panel-core","@tarojs/components/dist/components/taro-input-core","@tarojs/components/dist/components/taro-keyboard-accessory-core","@tarojs/components/dist/components/taro-label-core","@tarojs/components/dist/components/taro-lifestyle-core","@tarojs/components/dist/components/taro-like-core","@tarojs/components/dist/components/taro-live-player-core","@tarojs/components/dist/components/taro-live-pusher-core","@tarojs/components/dist/components/taro-login-core","@tarojs/components/dist/components/taro-lottie-core","@tarojs/components/dist/components/taro-map-core","@tarojs/components/dist/components/taro-match-media-core","@tarojs/components/dist/components/taro-movable-area-core","@tarojs/components/dist/components/taro-movable-view-core","@tarojs/components/dist/components/taro-navigation-bar-core","@tarojs/components/dist/components/taro-navigator-core","@tarojs/components/dist/components/taro-official-account-core","@tarojs/components/dist/components/taro-open-data-core","@tarojs/components/dist/components/taro-page-container-core","@tarojs/components/dist/components/taro-page-meta-core","@tarojs/components/dist/components/taro-picker-core","@tarojs/components/dist/components/taro-picker-group","@tarojs/components/dist/components/taro-picker-view-column-core","@tarojs/components/dist/components/taro-picker-view-core","@tarojs/components/dist/components/taro-progress-core","@babel/runtime/helpers/slicedToArray","@tarojs/taro","@tarojs/components/dist/components/taro-radio-core","@tarojs/components/dist/components/taro-radio-group-core","@tarojs/components/dist/components/taro-rich-text-core","@tarojs/components/dist/components/taro-root-portal-core","@tarojs/components/dist/components/taro-rtc-room-core","@tarojs/components/dist/components/taro-rtc-room-item-core","@tarojs/components/dist/components/taro-share-element-core","@tarojs/components/dist/components/taro-slider-core","@tarojs/components/dist/components/taro-native-slot-core","@tarojs/components/dist/components/taro-slot-core","@babel/runtime/helpers/typeof","swiper/swiper-bundle.min.css","swiper/swiper-bundle.esm.js","@tarojs/components/dist/components/taro-switch-core","@tarojs/components/dist/components/taro-tab-item-core","@tarojs/components/dist/components/taro-tabbar","@tarojs/components/dist/components/taro-tabs-core","@tarojs/components/dist/components/taro-textarea-core","@tarojs/components/dist/components/taro-video-control","@tarojs/components/dist/components/taro-video-core","@tarojs/components/dist/components/taro-video-danmu","@babel/runtime/helpers/defineProperty","@tarojs/components/dist/components/taro-voip-room-core","@tarojs/components/dist/components/taro-web-view-core"]
//# sourceMappingURL=index.js.map