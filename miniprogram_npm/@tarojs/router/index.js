module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929637, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api');Object.keys(__TEMP__).forEach(function(k) { if (k === "default" || k === "__esModule") return; Object.defineProperty(exports, k, { enumerable: true, configurable: true, get: function() { return __TEMP__[k]; } }); });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./history');Object.defineProperty(exports, 'history', { enumerable: true, configurable: true, get: function() { return __TEMP__.history; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./router/mpa');Object.defineProperty(exports, 'createMultiRouter', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMultiRouter; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./router/spa');Object.defineProperty(exports, 'createRouter', { enumerable: true, configurable: true, get: function() { return __TEMP__.createRouter; } });

}, function(modId) {var map = {"./api":1680223929638,"./history":1680223929639,"./router/mpa":1680223929643,"./router/spa":1680223929649}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929638, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('history');var parsePath = __TEMP__['parsePath'];
var __TEMP__ = require('./history');var history = __TEMP__['history'];var prependBasename = __TEMP__['prependBasename'];
var __TEMP__ = require('./router');var RouterConfig = __TEMP__['RouterConfig'];
var __TEMP__ = require('./router/stack');var stacks = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./utils');var addLeadingSlash = __TEMP__['addLeadingSlash'];var routesAlias = __TEMP__['routesAlias'];
function processNavigateUrl(option) {
    var _a;
    const pathPieces = parsePath(option.url);
    // 处理相对路径
    if ((_a = pathPieces.pathname) === null || _a === void 0 ? void 0 : _a.includes('./')) {
        const parts = routesAlias.getOrigin(history.location.pathname).split('/');
        parts.pop();
        pathPieces.pathname.split('/').forEach((item) => {
            if (item === '.') {
                return;
            }
            item === '..' ? parts.pop() : parts.push(item);
        });
        pathPieces.pathname = parts.join('/');
    }
    // 处理自定义路由
    pathPieces.pathname = routesAlias.getAlias(addLeadingSlash(pathPieces.pathname));
    // 处理 basename
    pathPieces.pathname = prependBasename(pathPieces.pathname);
    // hack fix history v5 bug: https://github.com/remix-run/history/issues/814
    if (!pathPieces.search)
        pathPieces.search = '';
    return pathPieces;
}
function navigate(option, method) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            stacks.method = method;
            const { success, complete, fail } = option;
            const unListen = history.listen(() => {
                const res = { errMsg: `${method}:ok` };
                success === null || success === void 0 ? void 0 : success(res);
                complete === null || complete === void 0 ? void 0 : complete(res);
                resolve(res);
                unListen();
            });
            try {
                if ('url' in option) {
                    const pathPieces = processNavigateUrl(option);
                    const state = { timestamp: Date.now() };
                    if (method === 'navigateTo') {
                        history.push(pathPieces, state);
                    }
                    else if (method === 'redirectTo' || method === 'switchTab') {
                        history.replace(pathPieces, state);
                    }
                    else if (method === 'reLaunch') {
                        stacks.delta = stacks.length;
                        history.replace(pathPieces, state);
                    }
                }
                else if (method === 'navigateBack') {
                    stacks.delta = option.delta;
                    history.go(-option.delta);
                }
            }
            catch (error) {
                const res = { errMsg: `${method}:fail ${error.message || error}` };
                fail === null || fail === void 0 ? void 0 : fail(res);
                complete === null || complete === void 0 ? void 0 : complete(res);
                reject(res);
            }
        });
    });
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function navigateTo(option) {
    return navigate(option, 'navigateTo');
};exports.navigateTo = navigateTo
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function redirectTo(option) {
    return navigate(option, 'redirectTo');
};exports.redirectTo = redirectTo
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function navigateBack(option = { delta: 1 }) {
    if (!option.delta || option.delta < 1) {
        option.delta = 1;
    }
    return navigate(option, 'navigateBack');
};exports.navigateBack = navigateBack
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function switchTab(option) {
    return navigate(option, 'switchTab');
};exports.switchTab = switchTab
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function reLaunch(option) {
    return navigate(option, 'reLaunch');
};exports.reLaunch = reLaunch
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function getCurrentPages() {
    if (process.env.NODE_ENV !== 'production' && RouterConfig.mode === 'multi') {
        console.warn('多页面路由模式不支持使用 getCurrentPages 方法！');
    }
    const pages = stacks.get();
    return pages.map(e => { var _a; return (Object.assign(Object.assign({}, e), { route: ((_a = e.path) === null || _a === void 0 ? void 0 : _a.replace(/\?.*/g, '')) || '' })); });
};exports.getCurrentPages = getCurrentPages

}, function(modId) { var map = {"history":1680223929639,"./history":1680223929639,"./router":1680223929640,"./router/stack":1680223929642,"./utils":1680223929641}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929639, function(require, module, exports) {
var __TEMP__ = require('history');var Action = __TEMP__['Action'];var createBrowserHistory = __TEMP__['createBrowserHistory'];var createHashHistory = __TEMP__['createHashHistory'];
var __TEMP__ = require('./router');var RouterConfig = __TEMP__['RouterConfig'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var history = exports.history = undefined;
let basename = '/';
class MpaHistory {
    constructor() {
        this.back = window.history.back;
        this.forward = window.history.forward;
        this.pushState = this.eventState('pushState');
        this.replaceState = this.eventState('replaceState');
    }
    get location() {
        return {
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
            key: `${window.history.length}`,
            state: window.history.state
        };
    }
    createHref(_to) {
        throw new Error('Method not implemented.');
    }
    parseUrl(to) {
        let url = to.pathname || '';
        if (RouterConfig.isPage(url)) {
            url += '.html';
        }
        if (to.search) {
            url += `?${to.search}`;
        }
        if (to.hash) {
            url += `#${to.hash}`;
        }
        return url;
    }
    push(to, _state = {}) {
        window.location.pathname = this.parseUrl(to);
        // this.pushState(_state, '', this.parseUrl(to))
    }
    replace(to, _state = {}) {
        window.location.replace(this.parseUrl(to));
        // this.replaceState(_state, '', this.parseUrl(to))
    }
    go(delta) {
        window.history.go(delta);
    }
    listen(listener) {
        function callback(e) {
            if (e.action === 'pushState') {
                listener({ action: Action.Push, location: this.location });
            }
            else if (e.action === 'replaceState') {
                listener({ action: Action.Replace, location: this.location });
            }
            else {
                // NOTE: 这里包括 back、forward、go 三种可能，并非是 POP 事件
                listener({ action: Action.Pop, location: this.location });
            }
        }
        window.addEventListener('popstate', callback);
        return () => {
            window.removeEventListener('popstate', callback);
        };
    }
    block(_blocker) {
        throw new Error('Method not implemented.');
    }
    eventState(action) {
        return (data, unused, url) => {
            const wrapper = window.history[action](data, unused, url);
            const evt = new Event(action);
            evt.action = action;
            evt.state = data;
            evt.unused = unused;
            evt.url = url;
            window.dispatchEvent(evt);
            return wrapper;
        };
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function setHistoryMode(mode, base = '/') {
    const options = {
        window
    };
    basename = base;
    if (mode === 'browser') {
        history = createBrowserHistory(options);
    }
    else if (mode === 'multi') {
        history = new MpaHistory();
    }
    else {
        // default is hash
        history = createHashHistory(options);
    }
};exports.setHistoryMode = setHistoryMode
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function prependBasename(url = '') {
    return basename.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
};exports.prependBasename = prependBasename

}, function(modId) { var map = {"history":1680223929639,"./router":1680223929640}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929640, function(require, module, exports) {
var __TEMP__ = require('../utils');var addLeadingSlash = __TEMP__['addLeadingSlash'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class RouterConfig {
    static set config(e) {
        this.__config = e;
    }
    static get config() {
        return this.__config;
    }
    static get pages() {
        return this.config.pages || [];
    }
    static get router() {
        return this.config.router || {};
    }
    static get mode() {
        return this.router.mode || 'hash';
    }
    static get customRoutes() { return this.router.customRoutes || {}; }
    static isPage(url = '') {
        return this.pages.findIndex(e => addLeadingSlash(e) === url) !== -1;
    }
};exports.RouterConfig = RouterConfig

}, function(modId) { var map = {"../utils":1680223929641}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929641, function(require, module, exports) {
// export const removeLeadingSlash = (str = '') => str.replace(/^\.?\//, '')
// export const removeTrailingSearch = (str = '') => str.replace(/\?[\s\S]*$/, '')
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var addLeadingSlash = exports.addLeadingSlash = (url = '') => (url.charAt(0) === '/' ? url : '/' + url);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var hasBasename = exports.hasBasename = (path = '', prefix = '') => new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path) || path === prefix;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var stripBasename = exports.stripBasename = (path = '', prefix = '') => hasBasename(path, prefix) ? path.substring(prefix.length) : path;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var stripTrailing = exports.stripTrailing = (str = '') => str.replace(/[?#][\s\S]*$/, '');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var stripSuffix = exports.stripSuffix = (path = '', suffix = '') => path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var getHomePage = exports.getHomePage = (path = '', basename = '', customRoutes = {}, entryPagePath = '') => {
    var _a;
    const routePath = addLeadingSlash(stripBasename(path, basename));
    const alias = ((_a = Object.entries(customRoutes).find(([key]) => key === routePath)) === null || _a === void 0 ? void 0 : _a[1]) || routePath;
    return entryPagePath || (typeof alias === 'string' ? alias : alias[0]) || basename;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var getCurrentPage = exports.getCurrentPage = (routerMode = 'hash', basename = '/') => {
    const pagePath = routerMode === 'hash'
        ? location.hash.slice(1).split('?')[0]
        : location.pathname;
    return addLeadingSlash(stripBasename(pagePath, basename));
};
class RoutesAlias {
    constructor() {
        this.conf = [];
        this.getConfig = (url = '') => {
            const customRoute = this.conf.filter((arr) => {
                return arr.includes(url);
            });
            return customRoute[0];
        };
        this.getOrigin = (url = '') => {
            var _a;
            return ((_a = this.getConfig(url)) === null || _a === void 0 ? void 0 : _a[0]) || url;
        };
        this.getAlias = (url = '') => {
            var _a;
            return ((_a = this.getConfig(url)) === null || _a === void 0 ? void 0 : _a[1]) || url;
        };
        this.getAll = (url = '') => {
            return this.conf
                .filter((arr) => arr.includes(url))
                .reduceRight((p, a) => {
                p.unshift(a[1]);
                return p;
            }, []);
        };
    }
    set(customRoutes = {}) {
        for (let key in customRoutes) {
            const path = customRoutes[key];
            key = addLeadingSlash(key);
            if (typeof path === 'string') {
                this.conf.push([key, addLeadingSlash(path)]);
            }
            else if ((path === null || path === void 0 ? void 0 : path.length) > 0) {
                this.conf.push(...path.map(p => [key, addLeadingSlash(p)]));
            }
        }
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var routesAlias = exports.routesAlias = new RoutesAlias();

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929642, function(require, module, exports) {
class Stacks {
    constructor() {
        this.stacks = [];
        this.backDelta = 0;
        this.tabs = {};
        this.methodName = '';
    }
    set delta(delta) {
        if (delta > 0) {
            this.backDelta = delta;
        }
        else if (this.backDelta > 0) {
            --this.backDelta;
        }
        else {
            this.backDelta = 0;
        }
    }
    get delta() {
        return this.backDelta;
    }
    set method(methodName) {
        this.methodName = methodName;
    }
    get method() {
        return this.methodName;
    }
    get length() {
        return this.stacks.length;
    }
    get last() {
        return this.stacks[this.length - 1];
    }
    get() {
        return this.stacks;
    }
    getItem(index) {
        return this.stacks[index];
    }
    getLastIndex(pathname, stateWith = 1) {
        const list = [...this.stacks].reverse();
        return list.findIndex((page, i) => { var _a; return i >= stateWith && ((_a = page.path) === null || _a === void 0 ? void 0 : _a.replace(/\?.*/g, '')) === pathname; });
    }
    getDelta(pathname) {
        if (this.backDelta >= 1) {
            return this.backDelta;
        }
        const index = this.getLastIndex(pathname);
        // NOTE: 此处为了修复浏览器后退多级页面，在大量重复路由状况下可能出现判断错误的情况 （增强判断能力只能考虑在 query 中新增参数来判断，暂时搁置）
        return index > 0 ? index : 1;
    }
    getPrevIndex(pathname, stateWith = 1) {
        const lastIndex = this.getLastIndex(pathname, stateWith);
        if (lastIndex < 0) {
            return -1;
        }
        return this.length - 1 - lastIndex;
    }
    pop() {
        return this.stacks.pop();
    }
    push(page) {
        return this.stacks.push(page);
    }
    getTabs() {
        return this.tabs;
    }
    pushTab(path) {
        this.tabs[path] = this.last;
        this.pop();
    }
    popTab(path) {
        this.push(this.tabs[path]);
        delete this.tabs[path];
    }
    removeTab(path) {
        delete this.tabs[path];
    }
}
const stacks = new Stacks();
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });exports.default = stacks;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929643, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable dot-notation */
var __TEMP__ = require('@tarojs/runtime');var createPageConfig = __TEMP__['createPageConfig'];var eventCenter = __TEMP__['eventCenter'];var hooks = __TEMP__['hooks'];var incrementId = __TEMP__['incrementId'];var stringify = __TEMP__['stringify'];
var __TEMP__ = require('../utils/navigate');var setTitle = __TEMP__['setTitle'];
var __TEMP__ = require('.');var RouterConfig = __TEMP__['RouterConfig'];
var __TEMP__ = require('./multi-page');var MultiPageHandler = __REQUIRE_DEFAULT__(__TEMP__);
const createStampId = incrementId();
const launchStampId = createStampId();
// TODO 支持多路由 (APP 生命周期仅触发一次)
/** Note: 关于多页面应用
 * - 需要配置路由映射（根目录跳转、404 页面……）
 * - app.onPageNotFound 事件不支持
 * - 应用生命周期可能多次触发
 * - TabBar 会多次加载
 * - 不支持路由动画
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function createMultiRouter(app, config, framework) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        RouterConfig.config = config;
        const handler = new MultiPageHandler(config);
        const launchParam = {
            path: config.pageName,
            query: handler.getQuery(launchStampId),
            scene: 0,
            shareTicket: '',
            referrerInfo: {}
        };
        eventCenter.trigger('__taroRouterLaunch', launchParam);
        (_a = app.onLaunch) === null || _a === void 0 ? void 0 : _a.call(app, launchParam);
        app.onError && window.addEventListener('error', e => { var _a; return (_a = app.onError) === null || _a === void 0 ? void 0 : _a.call(app, e.message); });
        const pathName = config.pageName;
        const pageConfig = handler.pageConfig;
        eventCenter.trigger('__taroRouterChange', {
            toLocation: {
                path: pathName
            }
        });
        let element;
        try {
            element = yield ((_b = pageConfig.load) === null || _b === void 0 ? void 0 : _b.call(pageConfig));
            if (element instanceof Array) {
                element = element[0];
            }
        }
        catch (error) {
            throw new Error(error);
        }
        if (!element)
            return;
        let enablePullDownRefresh = ((_c = config === null || config === void 0 ? void 0 : config.window) === null || _c === void 0 ? void 0 : _c.enablePullDownRefresh) || false;
        if (pageConfig) {
            setTitle((_d = pageConfig.navigationBarTitleText) !== null && _d !== void 0 ? _d : document.title);
            if (typeof pageConfig.enablePullDownRefresh === 'boolean') {
                enablePullDownRefresh = pageConfig.enablePullDownRefresh;
            }
        }
        const el = (_e = element.default) !== null && _e !== void 0 ? _e : element;
        const loadConfig = Object.assign({}, pageConfig);
        delete loadConfig['path'];
        delete loadConfig['load'];
        const page = createPageConfig(enablePullDownRefresh ? hooks.call('createPullDownComponent', el, location.pathname, framework, config.PullDownRefresh) : el, pathName + stringify(launchParam), {}, loadConfig);
        handler.load(page, pageConfig);
        (_f = app.onShow) === null || _f === void 0 ? void 0 : _f.call(app, launchParam);
    });
};exports.createMultiRouter = createMultiRouter

}, function(modId) { var map = {"../utils/navigate":1680223929644,".":1680223929640,"./multi-page":1680223929645}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929644, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __TEMP__ = require('mobile-detect');var MobileDetect = __REQUIRE_DEFAULT__(__TEMP__);
let md;
let preTitle = document.title;
let isLoadDdEntry = false;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function getMobileDetect() {
    if (!md) {
        md = new MobileDetect(navigator.userAgent);
    }
    return md;
};exports.getMobileDetect = getMobileDetect
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function setTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        if (preTitle === title)
            return title;
        document.title = title;
        preTitle = title;
        if (process.env.SUPPORT_DINGTALK_NAVIGATE !== 'disabled' && isDingTalk()) {
            if (!isLoadDdEntry) {
                isLoadDdEntry = true;
                require('dingtalk-jsapi/platform');
            }
            const setDingTitle = require('dingtalk-jsapi/api/biz/navigation/setTitle').default;
            setDingTitle({ title });
        }
        return title;
    });
};exports.setTitle = setTitle
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function isWeixin() {
    const md = getMobileDetect();
    return md.match(/MicroMessenger/ig);
};exports.isWeixin = isWeixin
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function isDingTalk() {
    const md = getMobileDetect();
    return md.match(/DingTalk/ig);
};exports.isDingTalk = isDingTalk

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929645, function(require, module, exports) {
/* eslint-disable dot-notation */
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];
var __TEMP__ = require('query-string');var queryString = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../events/resize');var bindPageResize = __TEMP__['bindPageResize'];
var __TEMP__ = require('../events/scroll');var bindPageScroll = __TEMP__['bindPageScroll'];
var __TEMP__ = require('../history');var setHistoryMode = __TEMP__['setHistoryMode'];
var __TEMP__ = require('../tabbar');var initTabbar = __TEMP__['initTabbar'];
var __TEMP__ = require('../utils');var addLeadingSlash = __TEMP__['addLeadingSlash'];var stripBasename = __TEMP__['stripBasename'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class MultiPageHandler {
    constructor(config) {
        this.config = config;
        this.mount();
    }
    get appId() { return this.config.appId || 'app'; }
    get router() { return this.config.router || {}; }
    get routerMode() { return this.router.mode || 'hash'; }
    get customRoutes() { return this.router.customRoutes || {}; }
    get tabBarList() { var _a; return ((_a = this.config.tabBar) === null || _a === void 0 ? void 0 : _a.list) || []; }
    get PullDownRefresh() { return this.config.PullDownRefresh; }
    set pathname(p) { this.router.pathname = p; }
    get pathname() { return this.router.pathname; }
    get basename() { return this.router.basename || ''; }
    get pageConfig() { return this.config.route; }
    get isTabBar() {
        var _a;
        const routePath = addLeadingSlash(stripBasename(this.pathname, this.basename));
        const pagePath = ((_a = Object.entries(this.customRoutes).find(([, target]) => {
            if (typeof target === 'string') {
                return target === routePath;
            }
            else if ((target === null || target === void 0 ? void 0 : target.length) > 0) {
                return target.includes(routePath);
            }
            return false;
        })) === null || _a === void 0 ? void 0 : _a[0]) || routePath;
        return !!pagePath && this.tabBarList.some(t => t.pagePath === pagePath);
    }
    get search() { return location.search.substr(1); }
    getQuery(search = '', options = {}) {
        search = search ? `${search}&${this.search}` : this.search;
        const query = search
            ? queryString.parse(search)
            : {};
        return Object.assign(Object.assign({}, query), options);
    }
    mount() {
        setHistoryMode(this.routerMode, this.router.basename);
        const appId = this.appId;
        let app = document.getElementById(appId);
        if (!app) {
            app = document.createElement('div');
            app.id = appId;
        }
        app.classList.add('taro_router');
        if (this.tabBarList.length > 1) {
            const container = document.createElement('div');
            container.classList.add('taro-tabbar__container');
            container.id = 'container';
            const panel = document.createElement('div');
            panel.classList.add('taro-tabbar__panel');
            panel.appendChild(app);
            container.appendChild(panel);
            document.body.appendChild(container);
            initTabbar(this.config);
        }
        else {
            document.body.appendChild(app);
        }
    }
    onReady(page, onLoad = true) {
        var _a;
        const pageEl = this.getPageContainer(page);
        if (pageEl && !(pageEl === null || pageEl === void 0 ? void 0 : pageEl['__isReady'])) {
            const el = pageEl.firstElementChild;
            (_a = el === null || el === void 0 ? void 0 : el['componentOnReady']) === null || _a === void 0 ? void 0 : _a.call(el);
            onLoad && (pageEl['__page'] = page);
        }
    }
    load(page, pageConfig = {}) {
        var _a;
        if (!page)
            return;
        (_a = page.onLoad) === null || _a === void 0 ? void 0 : _a.call(page, this.getQuery('', page.options), () => {
            var _a;
            const pageEl = this.getPageContainer(page);
            this.isTabBar && (pageEl === null || pageEl === void 0 ? void 0 : pageEl.classList.add('taro_tabbar_page'));
            this.onReady(page, true);
            (_a = page.onShow) === null || _a === void 0 ? void 0 : _a.call(page);
            this.bindPageEvents(page, pageEl, pageConfig);
        });
    }
    getPageContainer(page) {
        var _a;
        const path = page ? page === null || page === void 0 ? void 0 : page.path : (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path;
        const id = path === null || path === void 0 ? void 0 : path.replace(/([^a-z0-9\u00a0-\uffff_-])/ig, '\\$1');
        if (page) {
            return document.querySelector(`.taro_page#${id}`);
        }
        const el = (id
            ? document.querySelector(`.taro_page#${id}`)
            : document.querySelector('.taro_page') ||
                document.querySelector('.taro_router'));
        return el || window;
    }
    bindPageEvents(page, pageEl, config = {}) {
        var _a;
        if (!pageEl) {
            pageEl = this.getPageContainer();
        }
        const distance = config.onReachBottomDistance || ((_a = this.config.window) === null || _a === void 0 ? void 0 : _a.onReachBottomDistance) || 50;
        bindPageScroll(page, pageEl, distance);
        bindPageResize(page);
    }
};exports.default = MultiPageHandler

}, function(modId) { var map = {"../events/resize":1680223929646,"../events/scroll":1680223929647,"../history":1680223929639,"../tabbar":1680223929648,"../utils":1680223929641}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929646, function(require, module, exports) {
let pageResizeFn;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function bindPageResize(page) {
    pageResizeFn && window.removeEventListener('resize', pageResizeFn);
    pageResizeFn = function () {
        page.onResize && page.onResize({
            size: {
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth
            }
        });
    };
    window.addEventListener('resize', pageResizeFn, false);
};exports.bindPageResize = bindPageResize

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929647, function(require, module, exports) {
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];
const pageScrollFn = {};
let pageDOM = window;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function bindPageScroll(page, pageEl, distance = 50) {
    var _a;
    const pagePath = (page ? page === null || page === void 0 ? void 0 : page.path : (_a = Current.router) === null || _a === void 0 ? void 0 : _a.path);
    pageScrollFn[pagePath] && pageEl.removeEventListener('scroll', pageScrollFn[pagePath]);
    pageDOM = pageEl;
    let isReachBottom = false;
    pageScrollFn[pagePath] = function () {
        var _a;
        (_a = page.onPageScroll) === null || _a === void 0 ? void 0 : _a.call(page, {
            scrollTop: pageDOM instanceof Window ? window.scrollY : pageDOM.scrollTop
        });
        if (isReachBottom && getOffset() > distance) {
            isReachBottom = false;
        }
        if (page.onReachBottom &&
            !isReachBottom &&
            getOffset() < distance) {
            isReachBottom = true;
            page.onReachBottom();
        }
    };
    pageDOM.addEventListener('scroll', pageScrollFn[pagePath], false);
};exports.bindPageScroll = bindPageScroll
function getOffset() {
    if (pageDOM instanceof Window) {
        return document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
    }
    else {
        return pageDOM.scrollHeight - pageDOM.scrollTop - pageDOM.clientHeight;
    }
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929648, function(require, module, exports) {
// @ts-nocheck
var __TEMP__ = require('@tarojs/taro');var initTabBarApis = __TEMP__['initTabBarApis'];
var __TEMP__ = require('./history');var history = __TEMP__['history'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function initTabbar(config) {
    if (config.tabBar == null) {
        return;
    }
    // TODO: custom-tab-bar
    const tabbar = document.createElement('taro-tabbar');
    const homePage = config.entryPagePath || (config.pages ? config.pages[0] : '');
    tabbar.conf = config.tabBar;
    tabbar.conf.homePage = history.location.pathname === '/' ? homePage : history.location.pathname;
    const routerConfig = config.router;
    tabbar.conf.mode = routerConfig && routerConfig.mode ? routerConfig.mode : 'hash';
    if (routerConfig.customRoutes) {
        tabbar.conf.custom = true;
        tabbar.conf.customRoutes = routerConfig.customRoutes;
    }
    else {
        tabbar.conf.custom = false;
        tabbar.conf.customRoutes = {};
    }
    if (typeof routerConfig.basename !== 'undefined') {
        tabbar.conf.basename = routerConfig.basename;
    }
    const container = document.getElementById('container');
    container === null || container === void 0 ? void 0 : container.appendChild(tabbar);
    initTabBarApis(config);
};exports.initTabbar = initTabbar

}, function(modId) { var map = {"./history":1680223929639}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929649, function(require, module, exports) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable dot-notation */
var __TEMP__ = require('@tarojs/runtime');var createPageConfig = __TEMP__['createPageConfig'];var Current = __TEMP__['Current'];var eventCenter = __TEMP__['eventCenter'];var hooks = __TEMP__['hooks'];var incrementId = __TEMP__['incrementId'];var stringify = __TEMP__['stringify'];
var __TEMP__ = require('history');var LocationAction = __TEMP__['Action'];
var __TEMP__ = require('universal-router');var UniversalRouter = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../history');var history = __TEMP__['history'];var prependBasename = __TEMP__['prependBasename'];
var __TEMP__ = require('../utils');var addLeadingSlash = __TEMP__['addLeadingSlash'];var routesAlias = __TEMP__['routesAlias'];var stripBasename = __TEMP__['stripBasename'];
var __TEMP__ = require('../utils/navigate');var setTitle = __TEMP__['setTitle'];
var __TEMP__ = require('.');var RouterConfig = __TEMP__['RouterConfig'];
var __TEMP__ = require('./page');var PageHandler = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./stack');var stacks = __REQUIRE_DEFAULT__(__TEMP__);
const createStampId = incrementId();
let launchStampId = createStampId();
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function createRouter(app, config, framework) {
    var _a, _b;
    RouterConfig.config = config;
    const handler = new PageHandler(config);
    routesAlias.set(handler.router.customRoutes);
    const basename = handler.router.basename;
    const routes = handler.routes.map(route => {
        const routePath = addLeadingSlash(route.path);
        const paths = routesAlias.getAll(routePath);
        return {
            path: paths.length < 1 ? routePath : paths,
            action: route.load
        };
    });
    const router = new UniversalRouter(routes, { baseUrl: basename || '' });
    const launchParam = {
        path: handler.currentPage,
        query: handler.getQuery(launchStampId),
        scene: 0,
        shareTicket: '',
        referrerInfo: {}
    };
    eventCenter.trigger('__taroRouterLaunch', launchParam);
    (_a = app.onLaunch) === null || _a === void 0 ? void 0 : _a.call(app, launchParam);
    app.onError && window.addEventListener('error', e => { var _a; return (_a = app.onError) === null || _a === void 0 ? void 0 : _a.call(app, e.message); });
    const render = ({ location, action }) => __awaiter(this, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g;
        handler.pathname = decodeURI(location.pathname);
        eventCenter.trigger('__taroRouterChange', {
            toLocation: {
                path: handler.pathname
            }
        });
        let element, params;
        try {
            const result = yield router.resolve(handler.router.forcePath || handler.pathname);
            [element, , params] = yield Promise.all(result);
        }
        catch (error) {
            if (error.status === 404) {
                (_c = app.onPageNotFound) === null || _c === void 0 ? void 0 : _c.call(app, {
                    path: handler.pathname
                });
            }
            else if (/Loading hot update .* failed./.test(error.message)) {
                // NOTE: webpack5 与 prebundle 搭配使用时，开发环境下初次启动时偶发错误，由于 HMR 加载 chunk hash 错误，导致热更新失败
                window.location.reload();
            }
            else {
                throw new Error(error);
            }
        }
        if (!element)
            return;
        const pageConfig = handler.pageConfig;
        let enablePullDownRefresh = ((_d = config === null || config === void 0 ? void 0 : config.window) === null || _d === void 0 ? void 0 : _d.enablePullDownRefresh) || false;
        if (pageConfig) {
            setTitle((_e = pageConfig.navigationBarTitleText) !== null && _e !== void 0 ? _e : document.title);
            if (typeof pageConfig.enablePullDownRefresh === 'boolean') {
                enablePullDownRefresh = pageConfig.enablePullDownRefresh;
            }
        }
        const currentPage = Current.page;
        const pathname = handler.pathname;
        const methodName = (_f = stacks.method) !== null && _f !== void 0 ? _f : '';
        const cacheTabs = stacks.getTabs();
        let shouldLoad = false;
        stacks.method = '';
        if (methodName === 'reLaunch') {
            handler.unload(currentPage, stacks.length);
            // NOTE: 同时卸载缓存在tabs里面的页面实例
            for (const key in cacheTabs) {
                if (cacheTabs[key]) {
                    handler.unload(cacheTabs[key]);
                    stacks.removeTab(key);
                }
            }
            shouldLoad = true;
        }
        else if (currentPage && handler.isTabBar(handler.pathname)) {
            if (handler.isSamePage(currentPage))
                return;
            if (handler.isTabBar(currentPage.path)) {
                handler.hide(currentPage);
                stacks.pushTab(currentPage.path.split('?')[0]);
            }
            else if (stacks.length > 0) {
                const firstIns = stacks.getItem(0);
                if (handler.isTabBar(firstIns.path)) {
                    handler.unload(currentPage, stacks.length - 1);
                    stacks.pushTab(firstIns.path.split('?')[0]);
                }
                else {
                    handler.unload(currentPage, stacks.length);
                }
            }
            if (cacheTabs[handler.pathname]) {
                stacks.popTab(handler.pathname);
                return handler.show(stacks.getItem(0), pageConfig, 0);
            }
            shouldLoad = true;
        }
        else if (action === 'POP') {
            // NOTE: 浏览器事件退后多次时，该事件只会被触发一次
            const prevIndex = stacks.getPrevIndex(pathname);
            const delta = stacks.getDelta(pathname);
            // NOTE: Safari 内核浏览器在非应用页面返回上一页时，会触发额外的 POP 事件，此处需避免当前页面被错误卸载
            if (currentPage !== stacks.getItem(prevIndex)) {
                handler.unload(currentPage, delta, prevIndex > -1);
                if (prevIndex > -1) {
                    handler.show(stacks.getItem(prevIndex), pageConfig, prevIndex);
                }
                else {
                    shouldLoad = true;
                }
            }
        }
        else if (action === 'REPLACE') {
            const delta = stacks.getDelta(pathname);
            // NOTE: 页面路由记录并不会清空，只是移除掉缓存的 stack 以及页面
            handler.unload(currentPage, delta);
            shouldLoad = true;
        }
        else if (action === 'PUSH') {
            handler.hide(currentPage);
            shouldLoad = true;
        }
        if (shouldLoad || stacks.length < 1) {
            const el = (_g = element.default) !== null && _g !== void 0 ? _g : element;
            const loadConfig = Object.assign({}, pageConfig);
            const stacksIndex = stacks.length;
            delete loadConfig['path'];
            delete loadConfig['load'];
            let pageStampId = '';
            if (launchStampId) {
                pageStampId = launchStampId;
                launchStampId = '';
            }
            else {
                pageStampId = createStampId();
            }
            const page = createPageConfig(enablePullDownRefresh ? hooks.call('createPullDownComponent', el, location.pathname, framework, handler.PullDownRefresh) : el, pathname + stringify(handler.getQuery(pageStampId)), {}, loadConfig);
            if (params)
                page.options = params;
            handler.load(page, pageConfig, pageStampId, stacksIndex);
        }
        eventCenter.trigger('__afterTaroRouterChange', {
            toLocation: {
                path: handler.pathname
            }
        });
    });
    const routePath = addLeadingSlash(stripBasename(history.location.pathname, handler.basename));
    if (routePath === '/') {
        history.replace(prependBasename(handler.homePage + history.location.search));
    }
    render({ location: history.location, action: LocationAction.Push });
    (_b = app.onShow) === null || _b === void 0 ? void 0 : _b.call(app, launchParam);
    return history.listen(render);
};exports.createRouter = createRouter

}, function(modId) { var map = {"../history":1680223929639,"../utils":1680223929641,"../utils/navigate":1680223929644,".":1680223929640,"./page":1680223929650,"./stack":1680223929642}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929650, function(require, module, exports) {
/* eslint-disable dot-notation */
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];var requestAnimationFrame = __TEMP__['requestAnimationFrame'];
var __TEMP__ = require('query-string');var queryString = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../animation');var loadAnimateStyle = __TEMP__['loadAnimateStyle'];
var __TEMP__ = require('../events/resize');var bindPageResize = __TEMP__['bindPageResize'];
var __TEMP__ = require('../events/scroll');var bindPageScroll = __TEMP__['bindPageScroll'];
var __TEMP__ = require('../history');var setHistoryMode = __TEMP__['setHistoryMode'];
var __TEMP__ = require('../tabbar');var initTabbar = __TEMP__['initTabbar'];
var __TEMP__ = require('../utils');var addLeadingSlash = __TEMP__['addLeadingSlash'];var getCurrentPage = __TEMP__['getCurrentPage'];var getHomePage = __TEMP__['getHomePage'];var routesAlias = __TEMP__['routesAlias'];var stripBasename = __TEMP__['stripBasename'];var stripTrailing = __TEMP__['stripTrailing'];
var __TEMP__ = require('./stack');var stacks = __REQUIRE_DEFAULT__(__TEMP__);
function setDisplay(el, type = '') {
    if (el) {
        el.style.display = type;
    }
}
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class PageHandler {
    constructor(config) {
        this.defaultAnimation = { duration: 300, delay: 50 };
        this.config = config;
        this.homePage = getHomePage(this.routes[0].path, this.basename, this.customRoutes, this.config.entryPagePath);
        this.mount();
    }
    get currentPage() {
        const routePath = getCurrentPage(this.routerMode, this.basename);
        return routePath === '/' ? this.homePage : routePath;
    }
    get appId() { return this.config.appId || 'app'; }
    get router() { return this.config.router || {}; }
    get routerMode() { return this.router.mode || 'hash'; }
    get customRoutes() { return this.router.customRoutes || {}; }
    get routes() { return this.config.routes || []; }
    get tabBarList() { var _a; return ((_a = this.config.tabBar) === null || _a === void 0 ? void 0 : _a.list) || []; }
    get PullDownRefresh() { return this.config.PullDownRefresh; }
    get animation() { var _a, _b; return (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.animation) !== null && _b !== void 0 ? _b : this.defaultAnimation; }
    get animationDelay() {
        var _a;
        return (typeof this.animation === 'object'
            ? this.animation.delay
            : this.animation
                ? (_a = this.defaultAnimation) === null || _a === void 0 ? void 0 : _a.delay
                : 0) || 0;
    }
    get animationDuration() {
        var _a;
        return (typeof this.animation === 'object'
            ? this.animation.duration
            : this.animation
                ? (_a = this.defaultAnimation) === null || _a === void 0 ? void 0 : _a.duration
                : 0) || 0;
    }
    set pathname(p) { this.router.pathname = p; }
    get pathname() { return this.router.pathname; }
    get basename() { return this.router.basename || ''; }
    get pageConfig() {
        const routePath = addLeadingSlash(stripBasename(this.pathname, this.basename));
        const homePage = addLeadingSlash(this.homePage);
        return this.routes.find(r => {
            var _a;
            const pagePath = addLeadingSlash(r.path);
            return [pagePath, homePage].includes(routePath) || ((_a = routesAlias.getConfig(pagePath)) === null || _a === void 0 ? void 0 : _a.includes(routePath));
        });
    }
    isTabBar(pathname) {
        var _a;
        const routePath = addLeadingSlash(stripBasename(pathname, this.basename)).split('?')[0];
        const pagePath = ((_a = Object.entries(this.customRoutes).find(([, target]) => {
            if (typeof target === 'string') {
                return target === routePath;
            }
            else if ((target === null || target === void 0 ? void 0 : target.length) > 0) {
                return target.includes(routePath);
            }
            return false;
        })) === null || _a === void 0 ? void 0 : _a[0]) || routePath;
        return !!pagePath && this.tabBarList.some(t => stripTrailing(t.pagePath) === pagePath);
    }
    isSamePage(page) {
        const routePath = stripBasename(this.pathname, this.basename);
        const pagePath = stripBasename(page === null || page === void 0 ? void 0 : page.path, this.basename);
        return pagePath.startsWith(routePath + '?');
    }
    get search() {
        let search = '?';
        if (this.routerMode === 'hash') {
            const idx = location.hash.indexOf('?');
            if (idx > -1) {
                search = location.hash.slice(idx);
            }
        }
        else {
            search = location.search;
        }
        return search.substring(1);
    }
    getQuery(stamp = '', search = '', options = {}) {
        search = search ? `${search}&${this.search}` : this.search;
        const query = search
            ? queryString.parse(search, { decode: false })
            : {};
        query.stamp = stamp;
        return Object.assign(Object.assign({}, query), options);
    }
    mount() {
        setHistoryMode(this.routerMode, this.router.basename);
        this.animation && loadAnimateStyle(this.animationDuration);
        const appId = this.appId;
        let app = document.getElementById(appId);
        if (!app) {
            app = document.createElement('div');
            app.id = appId;
        }
        app.classList.add('taro_router');
        if (this.tabBarList.length > 1) {
            const container = document.createElement('div');
            container.classList.add('taro-tabbar__container');
            container.id = 'container';
            const panel = document.createElement('div');
            panel.classList.add('taro-tabbar__panel');
            panel.appendChild(app);
            container.appendChild(panel);
            document.body.appendChild(container);
            initTabbar(this.config);
        }
        else {
            document.body.appendChild(app);
        }
    }
    onReady(page, onLoad = true) {
        var _a, _b;
        const pageEl = this.getPageContainer(page);
        if (pageEl && !(pageEl === null || pageEl === void 0 ? void 0 : pageEl['__isReady'])) {
            const el = pageEl.firstElementChild;
            (_b = (_a = el === null || el === void 0 ? void 0 : el['componentOnReady']) === null || _a === void 0 ? void 0 : _a.call(el)) === null || _b === void 0 ? void 0 : _b.then(() => {
                requestAnimationFrame(() => {
                    var _a;
                    (_a = page.onReady) === null || _a === void 0 ? void 0 : _a.call(page);
                    pageEl['__isReady'] = true;
                });
            });
            onLoad && (pageEl['__page'] = page);
        }
    }
    load(page, pageConfig = {}, stampId, pageNo = 0) {
        var _a, _b;
        if (!page)
            return;
        // NOTE: 页面栈推入太晚可能导致 getCurrentPages 无法获取到当前页面实例
        stacks.push(page);
        const param = this.getQuery(stampId, '', page.options);
        let pageEl = this.getPageContainer(page);
        if (pageEl) {
            setDisplay(pageEl);
            this.isTabBar(this.pathname) && pageEl.classList.add('taro_tabbar_page');
            this.addAnimation(pageEl, pageNo === 0);
            (_a = page.onShow) === null || _a === void 0 ? void 0 : _a.call(page);
            this.bindPageEvents(page, pageEl, pageConfig);
        }
        else {
            (_b = page.onLoad) === null || _b === void 0 ? void 0 : _b.call(page, param, () => {
                var _a;
                pageEl = this.getPageContainer(page);
                this.isTabBar(this.pathname) && (pageEl === null || pageEl === void 0 ? void 0 : pageEl.classList.add('taro_tabbar_page'));
                this.addAnimation(pageEl, pageNo === 0);
                this.onReady(page, true);
                (_a = page.onShow) === null || _a === void 0 ? void 0 : _a.call(page);
                this.bindPageEvents(page, pageEl, pageConfig);
            });
        }
    }
    unload(page, delta = 1, top = false) {
        var _a, _b, _c;
        if (!page)
            return;
        stacks.delta = --delta;
        stacks.pop();
        if (this.animation && top) {
            if (this.unloadTimer) {
                clearTimeout(this.unloadTimer);
                (_b = (_a = this.lastUnloadPage) === null || _a === void 0 ? void 0 : _a.onUnload) === null || _b === void 0 ? void 0 : _b.call(_a);
                this.unloadTimer = null;
            }
            this.lastUnloadPage = page;
            const pageEl = this.getPageContainer(page);
            pageEl === null || pageEl === void 0 ? void 0 : pageEl.classList.remove('taro_page_stationed');
            pageEl === null || pageEl === void 0 ? void 0 : pageEl.classList.remove('taro_page_show');
            this.unloadTimer = setTimeout(() => {
                var _a, _b;
                this.unloadTimer = null;
                (_b = (_a = this.lastUnloadPage) === null || _a === void 0 ? void 0 : _a.onUnload) === null || _b === void 0 ? void 0 : _b.call(_a);
            }, this.animationDuration);
        }
        else {
            const pageEl = this.getPageContainer(page);
            pageEl === null || pageEl === void 0 ? void 0 : pageEl.classList.remove('taro_page_stationed');
            pageEl === null || pageEl === void 0 ? void 0 : pageEl.classList.remove('taro_page_show');
            (_c = page === null || page === void 0 ? void 0 : page.onUnload) === null || _c === void 0 ? void 0 : _c.call(page);
        }
        if (delta >= 1)
            this.unload(stacks.last, delta);
    }
    show(page, pageConfig = {}, pageNo = 0) {
        var _a, _b;
        if (!page)
            return;
        const param = this.getQuery(page['$taroParams']['stamp'], '', page.options);
        let pageEl = this.getPageContainer(page);
        if (pageEl) {
            setDisplay(pageEl);
            this.addAnimation(pageEl, pageNo === 0);
            (_a = page.onShow) === null || _a === void 0 ? void 0 : _a.call(page);
            this.bindPageEvents(page, pageEl, pageConfig);
        }
        else {
            (_b = page.onLoad) === null || _b === void 0 ? void 0 : _b.call(page, param, () => {
                var _a;
                pageEl = this.getPageContainer(page);
                this.addAnimation(pageEl, pageNo === 0);
                this.onReady(page, false);
                (_a = page.onShow) === null || _a === void 0 ? void 0 : _a.call(page);
                this.bindPageEvents(page, pageEl, pageConfig);
            });
        }
    }
    hide(page) {
        var _a;
        if (!page)
            return;
        // NOTE: 修复多页并发问题，此处可能因为路由跳转过快，执行时页面可能还没有创建成功
        const pageEl = this.getPageContainer(page);
        if (pageEl) {
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
                setDisplay(this.lastHidePage, 'none');
            }
            this.lastHidePage = pageEl;
            this.hideTimer = setTimeout(() => {
                this.hideTimer = null;
                setDisplay(this.lastHidePage, 'none');
            }, this.animationDuration + this.animationDelay);
            (_a = page.onHide) === null || _a === void 0 ? void 0 : _a.call(page);
        }
        else {
            setTimeout(() => this.hide(page), 0);
        }
    }
    addAnimation(pageEl, first = false) {
        if (!pageEl)
            return;
        if (this.animation && !first) {
            setTimeout(() => {
                pageEl.classList.add('taro_page_show');
                setTimeout(() => {
                    pageEl.classList.add('taro_page_stationed');
                }, this.animationDuration);
            }, this.animationDelay);
        }
        else {
            pageEl.classList.add('taro_page_show');
            pageEl.classList.add('taro_page_stationed');
        }
    }
    getPageContainer(page) {
        var _a;
        const path = page ? page === null || page === void 0 ? void 0 : page.path : (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path;
        const id = path === null || path === void 0 ? void 0 : path.replace(/([^a-z0-9\u00a0-\uffff_-])/ig, '\\$1');
        if (page) {
            return document.querySelector(`.taro_page#${id}`);
        }
        const el = (id
            ? document.querySelector(`.taro_page#${id}`)
            : document.querySelector('.taro_page') ||
                document.querySelector('.taro_router'));
        return el || window;
    }
    bindPageEvents(page, pageEl, config = {}) {
        var _a;
        if (!pageEl) {
            pageEl = this.getPageContainer();
        }
        const distance = config.onReachBottomDistance || ((_a = this.config.window) === null || _a === void 0 ? void 0 : _a.onReachBottomDistance) || 50;
        bindPageScroll(page, pageEl, distance);
        bindPageResize(page);
    }
};exports.default = PageHandler

}, function(modId) { var map = {"../animation":1680223929651,"../events/resize":1680223929646,"../events/scroll":1680223929647,"../history":1680223929639,"../tabbar":1680223929648,"../utils":1680223929641,"./stack":1680223929642}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929651, function(require, module, exports) {
/**
 * 插入页面动画需要的样式
 */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function loadAnimateStyle(ms = 300) {
    const css = `
.taro_router .taro_page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translate(100%, 0);
  transition: transform ${ms}ms;
  z-index: 0;
}

.taro_router .taro_page.taro_tabbar_page,
.taro_router .taro_page.taro_page_show.taro_page_stationed {
  transform: none;
}

.taro_router .taro_page.taro_page_show {
  transform: translate(0, 0);
}`;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.getElementsByTagName('head')[0].appendChild(style);
};exports.loadAnimateStyle = loadAnimateStyle

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929637);
})()
//miniprogram-npm-outsideDeps=["@tarojs/runtime","mobile-detect","dingtalk-jsapi/platform","dingtalk-jsapi/api/biz/navigation/setTitle","query-string","@tarojs/taro","history","universal-router"]
//# sourceMappingURL=index.js.map