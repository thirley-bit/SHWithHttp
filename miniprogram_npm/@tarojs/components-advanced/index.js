module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929524, function(require, module, exports) {
var __TEMP__ = require('./components/index.js');
var __TEMP__ = require('./utils/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./components/virtual-list/index.js');Object.defineProperty(exports, 'VirtualList', { enumerable: true, configurable: true, get: function() { return __TEMP__.VirtualList; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./utils/convert.js');Object.defineProperty(exports, 'convertNumber2PX', { enumerable: true, configurable: true, get: function() { return __TEMP__.convertNumber2PX; } });Object.defineProperty(exports, 'convertPX2Int', { enumerable: true, configurable: true, get: function() { return __TEMP__.convertPX2Int; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./utils/lodash.js');Object.defineProperty(exports, 'omit', { enumerable: true, configurable: true, get: function() { return __TEMP__.omit; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./utils/math.js');Object.defineProperty(exports, 'getMiddleNumber', { enumerable: true, configurable: true, get: function() { return __TEMP__.getMiddleNumber; } });Object.defineProperty(exports, 'isCosDistributing', { enumerable: true, configurable: true, get: function() { return __TEMP__.isCosDistributing; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./utils/timer.js');Object.defineProperty(exports, 'cancelTimeout', { enumerable: true, configurable: true, get: function() { return __TEMP__.cancelTimeout; } });Object.defineProperty(exports, 'requestTimeout', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestTimeout; } });
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./components/index.js":1680223929525,"./utils/index.js":1680223929535,"./components/virtual-list/index.js":1680223929526,"./utils/convert.js":1680223929529,"./utils/lodash.js":1680223929530,"./utils/math.js":1680223929536,"./utils/timer.js":1680223929531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929525, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./virtual-list/index.js');Object.defineProperty(exports, 'VirtualList', { enumerable: true, configurable: true, get: function() { return __TEMP__.VirtualList; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./virtual-list/index.js":1680223929526}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929526, function(require, module, exports) {
const VirtualList = (process.env.FRAMEWORK === 'vue' || process.env.FRAMEWORK === 'vue3')
    ? require('./vue').default
    : require('./react').default;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'VirtualList', { enumerable: true, configurable: true, get: function() { return VirtualList; } });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return VirtualList; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./vue":1680223929527,"./react":1680223929540}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929527, function(require, module, exports) {
var __TEMP__ = require('./list.js');var List = __REQUIRE_DEFAULT__(__TEMP__);

const VirtualList = List;
function install(Vue) {
    Vue.component('virtual-list', VirtualList);
}
var index = {
    install
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'VirtualList', { enumerable: true, configurable: true, get: function() { return VirtualList; } });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return index; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./list.js":1680223929528}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929528, function(require, module, exports) {
var __TEMP__ = require('memoize-one');var memoizeOne = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../../utils/convert.js');var convertNumber2PX = __TEMP__['convertNumber2PX'];
var __TEMP__ = require('../../../utils/lodash.js');var omit = __TEMP__['omit'];
var __TEMP__ = require('../../../utils/timer.js');var cancelTimeout = __TEMP__['cancelTimeout'];var requestTimeout = __TEMP__['requestTimeout'];
var __TEMP__ = require('../constants.js');var IS_SCROLLING_DEBOUNCE_INTERVAL = __TEMP__['IS_SCROLLING_DEBOUNCE_INTERVAL'];
var __TEMP__ = require('../dom-helpers.js');var getRTLOffsetType = __TEMP__['getRTLOffsetType'];
var __TEMP__ = require('../preset.js');var Preset = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../utils.js');var getScrollViewContextNode = __TEMP__['getScrollViewContextNode'];var getRectSize = __TEMP__['getRectSize'];var defaultItemKey = __TEMP__['defaultItemKey'];
var __TEMP__ = require('./render.js');var render = __REQUIRE_DEFAULT__(__TEMP__);

var List = {
    props: {
        height: {
            type: [String, Number],
            required: true
        },
        width: {
            type: [String, Number],
            required: true
        },
        itemCount: {
            type: Number,
            required: true
        },
        itemData: {
            type: Array,
            required: true
        },
        itemSize: {
            type: [Number, Function],
            required: true
        },
        unlimitedSize: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'absolute'
        },
        initialScrollOffset: {
            type: Number,
            default: 0
        },
        innerElementType: {
            type: String,
            default: process.env.TARO_ENV === 'h5' ? 'taro-view-core' : 'view'
        },
        direction: {
            type: String,
            default: 'ltr'
        },
        layout: {
            type: String,
            default: 'vertical'
        },
        overscanCount: {
            type: Number,
            default: 1
        },
        placeholderCount: {
            type: Number
        },
        useIsScrolling: {
            type: Boolean,
            default: false
        },
        item: {
            required: true
        },
        itemKey: String,
        itemTagName: {
            type: String,
            default: process.env.TARO_ENV === 'h5' ? 'taro-view-core' : 'view'
        },
        innerTagName: {
            type: String,
            default: process.env.TARO_ENV === 'h5' ? 'taro-view-core' : 'view'
        },
        outerTagName: {
            type: String,
            default: process.env.TARO_ENV === 'h5' ? 'taro-scroll-view-core' : 'scroll-view'
        },
        itemElementType: String,
        outerElementType: String,
        innerRef: String,
        outerRef: String,
        onItemsRendered: Function,
        onScrollNative: Function,
        shouldResetStyleCacheOnItemSizeChange: {
            type: Boolean,
            default: true
        },
    },
    data() {
        const preset = new Preset(this.$props, this.refresh);
        return {
            itemList: preset.itemList,
            preset,
            id: this.$props.id || preset.id,
            instance: this,
            isScrolling: false,
            scrollDirection: 'forward',
            scrollOffset: typeof this.$props.initialScrollOffset === 'number'
                ? this.$props.initialScrollOffset
                : 0,
            scrollUpdateWasRequested: false,
            resetIsScrollingTimeoutId: null,
            refreshCount: 0
        };
    },
    methods: {
        refresh() {
            this.refreshCount = this.refreshCount + 1;
        },
        scrollTo(scrollOffset) {
            const { enhanced } = this.$props;
            scrollOffset = Math.max(0, scrollOffset);
            if (this.scrollOffset === scrollOffset)
                return;
            if (enhanced) {
                const isHorizontal = this.preset.isHorizontal;
                const option = {
                    animated: true,
                    duration: 500
                };
                if (isHorizontal) {
                    option.left = scrollOffset;
                }
                else {
                    option.top = scrollOffset;
                }
                return getScrollViewContextNode(`#${this.$data.id}`).then((node) => node.scrollTo(option));
            }
            this.scrollDirection = this.scrollOffset < scrollOffset ? 'forward' : 'backward';
            this.scrollOffset = scrollOffset;
            this.scrollUpdateWasRequested = true;
            this.$nextTick(this._resetIsScrollingDebounced);
        },
        scrollToItem(index, align = 'auto') {
            const { itemCount } = this.$props;
            const { scrollOffset } = this.$data;
            index = Math.max(0, Math.min(index, itemCount - 1));
            this.scrollTo(this.itemList.getOffsetForIndexAndAlignment(this.$props, index, align, scrollOffset));
        },
        _callOnItemsRendered: memoizeOne(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
            return this.$props.onItemsRendered({
                overscanStartIndex,
                overscanStopIndex,
                visibleStartIndex,
                visibleStopIndex
            });
        }),
        _callOnScroll: memoizeOne(function (scrollDirection, scrollOffset, scrollUpdateWasRequested, detail) {
            this.$emit('scroll', {
                scrollDirection,
                scrollOffset,
                scrollUpdateWasRequested,
                detail
            });
        }),
        _callPropsCallbacks() {
            if (typeof this.$props.onItemsRendered === 'function') {
                const { itemCount } = this.$props;
                if (itemCount > 0) {
                    const [overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex] = this._getRangeToRender();
                    this._callOnItemsRendered(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex);
                }
            }
            this._callOnScroll(this.scrollDirection, this.scrollOffset, this.scrollUpdateWasRequested, this.preset.field);
            setTimeout(() => {
                const [startIndex, stopIndex] = this._getRangeToRender();
                const isHorizontal = this.preset.isHorizontal;
                for (let index = startIndex; index <= stopIndex; index++) {
                    this._getSizeUploadSync(index, isHorizontal);
                }
            }, 0);
        },
        _getSizeUploadSync(index, isHorizontal) {
            const ID = `#${this.$data.id}-${index}`;
            return new Promise((resolve) => {
                const success = ({ width, height }) => {
                    const size = isHorizontal ? width : height;
                    if (!this.itemList.compareSize(index, size)) {
                        this.itemList.setSize(index, size);
                        resolve(this.itemList.getSize(index));
                    }
                };
                const fail = () => {
                    const [startIndex, stopIndex] = this._getRangeToRender();
                    if (index >= startIndex && index <= stopIndex) {
                        setTimeout(() => {
                            getRectSize(ID, success, fail);
                        }, 100);
                    }
                };
                getRectSize(ID, success, fail);
            });
        },
        _getRangeToRender() {
            return this.itemList.getRangeToRender(this.$data.scrollDirection, this.$data.scrollOffset, this.$data.isScrolling);
        },
        _onScrollHorizontal(event) {
            const { clientWidth, scrollTop, scrollLeft, scrollHeight, scrollWidth } = event.currentTarget;
            this.preset.field = {
                scrollHeight: scrollHeight,
                scrollWidth: this.itemList.getOffsetSize(),
                scrollTop: scrollTop,
                scrollLeft: scrollLeft,
                clientHeight: scrollHeight,
                clientWidth: scrollWidth
            };
            if (this.$props.onScrollNative) {
                this.$props.onScrollNative(event);
            }
            const diffOffset = this.preset.field.scrollLeft - scrollLeft;
            if (this.scrollOffset === scrollLeft || this.preset.isShaking(diffOffset)) {
                return;
            }
            let scrollOffset = scrollLeft;
            if (this.preset.isRtl) {
                // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
                // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
                switch (getRTLOffsetType()) {
                    case 'negative':
                        scrollOffset = -scrollLeft;
                        break;
                    case 'positive-descending':
                        scrollOffset = scrollWidth - clientWidth - scrollLeft;
                        break;
                }
            }
            // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
            scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
            this.preset.field = {
                scrollWidth: scrollOffset,
            };
            this.isScrolling = true;
            this.scrollDirection = this.scrollOffset < scrollLeft ? 'forward' : 'backward';
            this.scrollOffset = scrollOffset;
            this.scrollUpdateWasRequested = false;
            this.$nextTick(this._resetIsScrollingDebounced);
        },
        _onScrollVertical(event) {
            const { clientHeight, scrollHeight, scrollWidth, scrollTop, scrollLeft } = event.currentTarget;
            if (this.$props.onScrollNative) {
                this.$props.onScrollNative(event);
            }
            const diffOffset = this.preset.field.scrollTop - scrollTop;
            if (this.scrollOffset === scrollTop || this.preset.isShaking(diffOffset)) {
                return;
            }
            // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
            const scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
            this.preset.field = {
                scrollHeight: this.itemList.getOffsetSize(),
                scrollWidth: scrollWidth,
                scrollTop: scrollOffset,
                scrollLeft: scrollLeft,
                clientHeight: clientHeight,
                clientWidth: scrollWidth,
                diffOffset: this.preset.field.scrollTop - scrollOffset,
            };
            this.isScrolling = true;
            this.scrollDirection = this.scrollOffset < scrollOffset ? 'forward' : 'backward';
            this.scrollOffset = scrollOffset;
            this.scrollUpdateWasRequested = false;
            this.$nextTick(this._resetIsScrollingDebounced);
        },
        _outerRefSetter(ref) {
            const { outerRef } = this.$props;
            this._outerRef = ref;
            if (typeof outerRef === 'function') {
                outerRef(ref);
            }
            else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('value')) {
                outerRef.value = ref;
            }
        },
        _resetIsScrollingDebounced() {
            if (this.resetIsScrollingTimeoutId !== null) {
                cancelTimeout(this.resetIsScrollingTimeoutId);
            }
            this.resetIsScrollingTimeoutId = requestTimeout(this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
        },
        _resetIsScrolling() {
            this.resetIsScrollingTimeoutId = null;
            this.isScrolling = false;
            this.$nextTick(() => {
                this.preset.getItemStyleCache(-1, null);
            });
        }
    },
    mounted() {
        const { initialScrollOffset } = this.$props;
        if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
            const outerRef = this._outerRef;
            if (this.preset.isHorizontal) {
                outerRef.scrollLeft = initialScrollOffset;
            }
            else {
                outerRef.scrollTop = initialScrollOffset;
            }
        }
        this._callPropsCallbacks();
    },
    updated() {
        this.preset.update(this.$props);
        const { scrollOffset, scrollUpdateWasRequested } = this.$data;
        if (scrollUpdateWasRequested && this._outerRef != null) {
            const outerRef = this._outerRef;
            if (this.preset.isHorizontal) {
                if (this.preset.isRtl) {
                    // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                    // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                    // So we need to determine which browser behavior we're dealing with, and mimic it.
                    switch (getRTLOffsetType()) {
                        case 'negative':
                            outerRef.scrollLeft = -scrollOffset;
                            break;
                        case 'positive-ascending':
                            outerRef.scrollLeft = scrollOffset;
                            break;
                        default: {
                            const { clientWidth, scrollWidth } = outerRef;
                            outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                            break;
                        }
                    }
                }
                else {
                    outerRef.scrollLeft = scrollOffset;
                }
            }
            else {
                outerRef.scrollTop = scrollOffset;
            }
        }
        this._callPropsCallbacks();
    },
    beforeDestroy() {
        if (this.resetIsScrollingTimeoutId !== null) {
            cancelTimeout(this.resetIsScrollingTimeoutId);
        }
    },
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const { item, direction, height, innerRef, itemCount, itemData, itemKey = defaultItemKey, layout, useIsScrolling, width, enhanced = false } = omit(this.$props, ['innerElementType', 'innerTagName', 'itemElementType', 'itemTagName', 'outerElementType', 'outerTagName', 'position']);
        const { id, isScrolling, scrollOffset, scrollUpdateWasRequested } = this.$data;
        const isHorizontal = this.preset.isHorizontal;
        const placeholderCount = this.preset.placeholderCount;
        const onScroll = isHorizontal
            ? this._onScrollHorizontal
            : this._onScrollVertical;
        const [startIndex, stopIndex] = this._getRangeToRender();
        const items = [];
        if (itemCount > 0) {
            const prevPlaceholder = startIndex < placeholderCount ? startIndex : placeholderCount;
            items.push(new Array(prevPlaceholder).fill(-1).map((_, index) => render(this.preset.itemTagName, {
                key: itemKey(index + startIndex - prevPlaceholder, itemData),
                style: { display: 'none' }
            })));
            for (let index = startIndex; index <= stopIndex; index++) {
                const style = this.preset.getItemStyle(index);
                items.push(render(this.preset.itemTagName, {
                    key: itemKey(index, itemData),
                    style
                }, [
                    render(item, {
                        id: `${id}-${index}`,
                        props: {
                            id: `${id}-${index}`,
                            data: itemData,
                            index,
                            isScrolling: useIsScrolling ? isScrolling : undefined
                        }
                    })
                ]));
            }
            let restCount = itemCount - stopIndex;
            restCount = restCount > 0 ? restCount : 0;
            const postPlaceholder = restCount < placeholderCount ? restCount : placeholderCount;
            items.push(new Array(postPlaceholder).fill(-1).map((_, index) => render(this.preset.itemTagName, {
                key: itemKey(1 + index + stopIndex, itemData),
                style: { display: 'none' }
            })));
        }
        // Read this value AFTER items have been created,
        // So their actual sizes (if variable) are taken into consideration.
        const estimatedTotalSize = convertNumber2PX(this.itemList.getOffsetSize());
        const outerElementProps = {
            id,
            ref: this._outerRefSetter,
            layout,
            enhanced,
            style: {
                position: 'relative',
                height: convertNumber2PX(height),
                width: convertNumber2PX(width),
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                willChange: 'transform',
                direction
            },
            attrs: {
                scrollY: layout === 'vertical',
                scrollX: layout === 'horizontal'
            },
            on: {
                scroll: onScroll
            }
        };
        if (!enhanced) {
            if (isHorizontal) {
                outerElementProps.scrollLeft = scrollUpdateWasRequested ? scrollOffset : this.preset.field.scrollLeft;
            }
            else {
                outerElementProps.scrollTop = scrollUpdateWasRequested ? scrollOffset : this.preset.field.scrollTop;
            }
        }
        if (this.preset.isRelative) {
            const pre = convertNumber2PX(this.itemList.getOffsetSize(startIndex));
            return render(this.preset.outerTagName, outerElementProps, [
                process.env.FRAMEWORK === 'vue3' ? (_b = (_a = this.$slots).top) === null || _b === void 0 ? void 0 : _b.call(_a) : this.$slots.top,
                render(this.preset.itemTagName, {
                    key: `${id}-pre`,
                    id: `${id}-pre`,
                    style: {
                        height: isHorizontal ? '100%' : pre,
                        width: !isHorizontal ? '100%' : pre
                    }
                }),
                render(this.preset.innerTagName, {
                    ref: innerRef,
                    key: `${id}-inner`,
                    id: `${id}-inner`,
                    style: {
                        pointerEvents: isScrolling ? 'none' : 'auto',
                        position: 'relative',
                    }
                }, items),
                process.env.FRAMEWORK === 'vue3' ? (_d = (_c = this.$slots).bottom) === null || _d === void 0 ? void 0 : _d.call(_c) : this.$slots.bottom,
            ]);
        }
        else {
            return render(this.preset.outerTagName, outerElementProps, [
                process.env.FRAMEWORK === 'vue3' ? (_f = (_e = this.$slots).top) === null || _f === void 0 ? void 0 : _f.call(_e) : this.$slots.top,
                render(this.preset.innerTagName, {
                    ref: innerRef,
                    key: `${id}-inner`,
                    id: `${id}-inner`,
                    style: {
                        height: isHorizontal ? '100%' : estimatedTotalSize,
                        pointerEvents: isScrolling ? 'none' : 'auto',
                        position: 'relative',
                        width: !isHorizontal ? '100%' : estimatedTotalSize
                    }
                }, items),
                process.env.FRAMEWORK === 'vue3' ? (_h = (_g = this.$slots).bottom) === null || _h === void 0 ? void 0 : _h.call(_g) : this.$slots.bottom,
            ]);
        }
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return List; } });
//# sourceMappingURL=list.js.map

}, function(modId) { var map = {"../../../utils/convert.js":1680223929529,"../../../utils/lodash.js":1680223929530,"../../../utils/timer.js":1680223929531,"../constants.js":1680223929532,"../dom-helpers.js":1680223929533,"../preset.js":1680223929534,"../utils.js":1680223929538,"./render.js":1680223929539}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929529, function(require, module, exports) {
/** 将距离值根据单位转换为 Number 类型
 * TODO: 未来可以考虑支持更多单位
 */
function convertPX2Int(distance) {
    if (typeof distance === 'string') {
        const str = distance.toLowerCase();
        if (/px$/.test(str)) {
            return Number(str.replace(/px$/, ''));
        }
    }
    return distance;
}
function convertNumber2PX(styleValue) {
    if (!styleValue && styleValue !== 0)
        return '';
    return typeof styleValue === 'number' ? styleValue + 'px' : styleValue;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'convertNumber2PX', { enumerable: true, configurable: true, get: function() { return convertNumber2PX; } });Object.defineProperty(exports, 'convertPX2Int', { enumerable: true, configurable: true, get: function() { return convertPX2Int; } });
//# sourceMappingURL=convert.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929530, function(require, module, exports) {
function omit(obj = {}, fields = []) {
    const shallow = Object.assign({}, obj);
    fields.forEach((key) => {
        delete shallow[key];
    });
    return shallow;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'omit', { enumerable: true, configurable: true, get: function() { return omit; } });
//# sourceMappingURL=lodash.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929531, function(require, module, exports) {
var __TEMP__ = require('@tarojs/runtime');var cancelAnimationFrame = __TEMP__['cancelAnimationFrame'];var now = __TEMP__['now'];var requestAnimationFrame = __TEMP__['requestAnimationFrame'];

function cancelTimeout(timeoutID) {
    cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay = 0) {
    const start = now();
    const timeoutID = {
        id: requestAnimationFrame(tick)
    };
    function tick() {
        if (now() - start >= delay) {
            // eslint-disable-next-line no-useless-call
            callback.call(null);
        }
        else {
            timeoutID.id = requestAnimationFrame(tick);
        }
    }
    return timeoutID;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'cancelTimeout', { enumerable: true, configurable: true, get: function() { return cancelTimeout; } });Object.defineProperty(exports, 'requestTimeout', { enumerable: true, configurable: true, get: function() { return requestTimeout; } });
//# sourceMappingURL=timer.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929532, function(require, module, exports) {
const IS_SCROLLING_DEBOUNCE_INTERVAL = 200;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'IS_SCROLLING_DEBOUNCE_INTERVAL', { enumerable: true, configurable: true, get: function() { return IS_SCROLLING_DEBOUNCE_INTERVAL; } });
//# sourceMappingURL=constants.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929533, function(require, module, exports) {
// TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.
let cachedRTLResult = null;
function getRTLOffsetType(recalculate = false) {
    if (cachedRTLResult === null || recalculate) {
        const outerDiv = document.createElement('div');
        const outerStyle = outerDiv.style;
        outerStyle.width = '50px';
        outerStyle.height = '50px';
        outerStyle.overflow = 'scroll';
        outerStyle.direction = 'rtl';
        const innerDiv = document.createElement('div');
        const innerStyle = innerDiv.style;
        innerStyle.width = '100px';
        innerStyle.height = '100px';
        outerDiv.appendChild(innerDiv);
        document.body.appendChild(outerDiv);
        if (outerDiv.scrollLeft > 0) {
            cachedRTLResult = 'positive-descending';
        }
        else {
            outerDiv.scrollLeft = 1;
            if (outerDiv.scrollLeft === 0) {
                cachedRTLResult = 'negative';
            }
            else {
                cachedRTLResult = 'positive-ascending';
            }
        }
        document.body.removeChild(outerDiv);
        return cachedRTLResult;
    }
    return cachedRTLResult;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getRTLOffsetType', { enumerable: true, configurable: true, get: function() { return getRTLOffsetType; } });
//# sourceMappingURL=dom-helpers.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929534, function(require, module, exports) {
var __TEMP__ = require('memoize-one');var memoizeOne = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../utils/index.js');
var __TEMP__ = require('./list-set.js');var ListSet = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./utils.js');var isHorizontalFunc = __TEMP__['isHorizontalFunc'];var isRtlFunc = __TEMP__['isRtlFunc'];
var __TEMP__ = require('../../utils/math.js');var isCosDistributing = __TEMP__['isCosDistributing'];
var __TEMP__ = require('../../utils/convert.js');var convertNumber2PX = __TEMP__['convertNumber2PX'];

let INSTANCE_ID = 0;
class Preset {
    constructor(props, refresh) {
        this.props = props;
        this.refresh = refresh;
        this.wrapperField = {
            scrollLeft: 0,
            scrollTop: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            clientHeight: 0,
            clientWidth: 0,
            diffOffset: 0
        };
        this.diffList = [0, 0, 0];
        this.getItemStyleCache = memoizeOne((_itemSize, _layout, _direction) => {
            // TODO: Cache of item styles, keyed by item index.
            return {};
        });
        this.init(this.props);
        this.itemList = new ListSet(props, refresh);
    }
    init(props) {
        this.props = props;
    }
    update(props) {
        this.props = props;
        this.itemList.update(props);
    }
    get id() {
        return `virtual-list-${INSTANCE_ID++}`;
    }
    get isHorizontal() {
        return isHorizontalFunc(this.props);
    }
    get isRtl() {
        return isRtlFunc(this.props);
    }
    get isRelative() {
        return this.props.position === 'relative';
    }
    get placeholderCount() {
        return this.props.placeholderCount >= 0 ? this.props.placeholderCount : this.props.overscanCount;
    }
    get outerTagName() {
        return this.props.outerElementType || this.props.outerTagName || 'div';
    }
    get innerTagName() {
        return this.props.innerElementType || this.props.innerTagName || 'div';
    }
    get itemTagName() {
        return this.props.itemElementType || this.props.itemTagName || 'div';
    }
    get field() {
        return this.wrapperField;
    }
    set field(o) {
        Object.assign(this.wrapperField, o);
        // Object.keys(o).forEach(key => {
        //   if (typeof o[key] === 'number' && typeof this.wrapperField[key] === 'number') {
        //     this.wrapperField[key] = o[key]
        //   }
        // })
    }
    isShaking(diff) {
        const list = this.diffList.slice(-3);
        this.diffList.push(diff);
        return list.findIndex(e => Math.abs(e) === Math.abs(diff)) !== -1 || isCosDistributing(this.diffList.slice(-4));
    }
    getItemStyle(index) {
        const { direction, itemSize, layout, shouldResetStyleCacheOnItemSizeChange } = this.props;
        const itemStyleCache = this.getItemStyleCache(shouldResetStyleCacheOnItemSizeChange ? itemSize : false, shouldResetStyleCacheOnItemSizeChange ? layout : false, shouldResetStyleCacheOnItemSizeChange ? direction : false);
        let style;
        const offset = convertNumber2PX(this.itemList.getOffsetSize(index));
        const size = convertNumber2PX(this.itemList.getSize(index));
        const isHorizontal = this.isHorizontal;
        const isRtl = this.isRtl;
        if (itemStyleCache.hasOwnProperty(index)) {
            // Note: style is frozen.
            style = Object.assign({}, itemStyleCache[index]);
            if (isHorizontal) {
                style.width = size;
                if (!this.isRelative) {
                    if (isRtl) {
                        style.right = offset;
                    }
                    else {
                        style.left = offset;
                    }
                }
            }
            else {
                style.height = size;
                if (!this.isRelative) {
                    style.top = offset;
                }
            }
        }
        else {
            if (this.isRelative) {
                itemStyleCache[index] = style = {
                    height: !isHorizontal ? size : '100%',
                    width: isHorizontal ? size : '100%'
                };
            }
            else {
                const offsetHorizontal = isHorizontal ? offset : 0;
                itemStyleCache[index] = style = {
                    position: 'absolute',
                    left: !isRtl ? offsetHorizontal : undefined,
                    right: isRtl ? offsetHorizontal : undefined,
                    top: !isHorizontal ? offset : 0,
                    height: !isHorizontal ? size : '100%',
                    width: isHorizontal ? size : '100%'
                };
            }
        }
        for (const k in style) {
            if (style.hasOwnProperty(k)) {
                style[k] = convertNumber2PX(style[k]);
            }
        }
        return style;
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return Preset; } });
//# sourceMappingURL=preset.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929535,"./list-set.js":1680223929537,"./utils.js":1680223929538,"../../utils/math.js":1680223929536,"../../utils/convert.js":1680223929529}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929535, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./convert.js');Object.defineProperty(exports, 'convertNumber2PX', { enumerable: true, configurable: true, get: function() { return __TEMP__.convertNumber2PX; } });Object.defineProperty(exports, 'convertPX2Int', { enumerable: true, configurable: true, get: function() { return __TEMP__.convertPX2Int; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./lodash.js');Object.defineProperty(exports, 'omit', { enumerable: true, configurable: true, get: function() { return __TEMP__.omit; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./math.js');Object.defineProperty(exports, 'getMiddleNumber', { enumerable: true, configurable: true, get: function() { return __TEMP__.getMiddleNumber; } });Object.defineProperty(exports, 'isCosDistributing', { enumerable: true, configurable: true, get: function() { return __TEMP__.isCosDistributing; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./timer.js');Object.defineProperty(exports, 'cancelTimeout', { enumerable: true, configurable: true, get: function() { return __TEMP__.cancelTimeout; } });Object.defineProperty(exports, 'requestTimeout', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestTimeout; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./convert.js":1680223929529,"./lodash.js":1680223929530,"./math.js":1680223929536,"./timer.js":1680223929531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929536, function(require, module, exports) {
function getMiddleNumber(...list) {
    return list.sort((a, b) => a - b)[Math.floor(list.length / 2)];
}
function isCosDistributing(list, datum = 0) {
    let flags = 0;
    for (let i = 0; i < list.length - 1; i++) {
        if (getMiddleNumber(list[i], datum, list[i + 1]) === datum) {
            flags++;
        }
    }
    return flags === list.length - 1;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getMiddleNumber', { enumerable: true, configurable: true, get: function() { return getMiddleNumber; } });Object.defineProperty(exports, 'isCosDistributing', { enumerable: true, configurable: true, get: function() { return isCosDistributing; } });
//# sourceMappingURL=math.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929537, function(require, module, exports) {
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('./utils.js');var isHorizontalFunc = __TEMP__['isHorizontalFunc'];

class ListSet {
    constructor(props, refresh) {
        this.props = props;
        this.refresh = refresh;
        this.list = [];
        this.defaultSize = 1;
        this.update(props);
        // Note: 不考虑列表模式切换情况，可能会导致列表抖动体验过差
        if (this.props.unlimitedSize) {
            this.mode = 'unlimited';
        }
        else if (isFunction(this.props.itemSize)) {
            this.mode = 'function';
        }
        else {
            this.mode = 'normal';
        }
        this.defaultSize = (isFunction(this.props.itemSize) ? this.props.itemSize() : this.props.itemSize) || 1;
        if (!this.isNormalMode) {
            this.list = new Array(this.length).fill(-1);
        }
    }
    get isNormalMode() {
        return this.mode === 'normal';
    }
    get isFunctionMode() {
        return this.mode === 'function';
    }
    get isUnlimitedMode() {
        return this.mode === 'unlimited';
    }
    get length() {
        return this.props.itemCount || 100;
    }
    get overscan() {
        return this.props.overscanCount || 0;
    }
    get wrapperSize() {
        const { height, width } = this.props;
        const isHorizontal = isHorizontalFunc(this.props);
        const size = (isHorizontal ? width : height);
        if (process.env.NODE_ENV !== 'production' && typeof size !== 'number') {
            console.warn(`In mode ${isHorizontal ? 'horizontal, width' : 'vertical, height'} parameter should be a number, but got ${typeof size}.`);
        }
        return size;
    }
    update(props) {
        this.props = props;
        if (this.length > this.list.length) {
            const arr = new Array(this.length - this.list.length).fill(-1);
            this.list.push(...arr);
        }
        else if (this.length < this.list.length) {
            this.list.length = this.length;
        }
    }
    setSize(i = 0, size = this.defaultSize) {
        var _a;
        this.list[i] = size;
        (_a = this.refresh) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    getSize(i = 0) {
        const size = this.props.itemSize;
        const item = this.list[i];
        if (item >= 0)
            return item;
        if (this.isFunctionMode && isFunction(size)) {
            const itemSize = size(i, this.props.itemData);
            this.setSize(i, itemSize);
            return itemSize;
        }
        return this.defaultSize;
    }
    getOffsetSize(i = this.list.length) {
        if (this.isNormalMode)
            return i * this.defaultSize;
        return this.list.slice(0, i).reduce((sum, _, idx) => sum + this.getSize(idx), 0);
    }
    getSizeCount(offset = 0) {
        if (offset === 0) {
            return 0;
        }
        // if (this.isNormalMode) {
        //   return Math.min(this.length - 1, Math.floor(offset / this.length))
        // }
        let offsetSize = 0;
        const count = this.list.reduce((sum, _, idx) => {
            if (offsetSize < offset) {
                offsetSize += this.getSize(idx);
                return ++sum;
            }
            return sum;
        }, 0);
        return count - 1;
    }
    getStartIndex(scrollOffset = 0) {
        return Math.max(0, this.getSizeCount(scrollOffset) - 1);
    }
    getStopIndex(wrapperSize = 0, scrollOffset = 0, startIndex = 0) {
        // const visibleOffset = this.getOffsetSize(startIndex)
        // if (this.isNormalMode) {
        //   const numVisibleItems = Math.ceil((wrapperSize + scrollOffset - visibleOffset) / this.length)
        //   /** -1 is because stop index is inclusive */
        //   return Math.max(startIndex, Math.min(this.length - 1, startIndex + numVisibleItems - 1))
        // }
        return Math.max(startIndex, Math.min(this.length - 1, this.getSizeCount(wrapperSize + scrollOffset)));
    }
    getRangeToRender(direction, scrollOffset = 0, block = false) {
        if (this.length === 0) {
            return [0, 0, 0, 0];
        }
        const wrapperSize = this.wrapperSize;
        const startIndex = this.getStartIndex(scrollOffset);
        const stopIndex = this.getStopIndex(wrapperSize, scrollOffset, startIndex);
        // Overscan by one item in each direction so that tab/focus works. If there isn't at least one extra item, tab loops back around.
        const overscanBackward = !block || direction === 'backward' ? Math.max(1, this.overscan) : 1;
        const overscanForward = !block || direction === 'forward' ? Math.max(1, this.overscan) : 1;
        return [
            Math.max(0, startIndex - overscanBackward),
            Math.max(0, Math.min(this.length - 1, stopIndex + overscanForward)),
            startIndex,
            stopIndex
        ];
    }
    getOffsetForIndexAndAlignment(index, align, scrollOffset) {
        const wrapperSize = this.wrapperSize;
        const itemSize = this.getSize(index);
        const lastItemOffset = Math.max(0, this.getOffsetSize(this.props.itemCount) - wrapperSize);
        const maxOffset = Math.min(lastItemOffset, this.getOffsetSize(index));
        const minOffset = Math.max(0, this.getOffsetSize(index) - wrapperSize + itemSize);
        if (align === 'smart') {
            if (scrollOffset >= minOffset - wrapperSize && scrollOffset <= maxOffset + wrapperSize) {
                align = 'auto';
            }
            else {
                align = 'center';
            }
        }
        switch (align) {
            case 'start':
                return maxOffset;
            case 'end':
                return minOffset;
            case 'center':
                {
                    // "Centered" offset is usually the average of the min and max.
                    // But near the edges of the list, this doesn't hold true.
                    const middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
                    if (middleOffset < Math.ceil(wrapperSize / 2)) {
                        return 0; // near the beginning
                    }
                    else if (middleOffset > lastItemOffset + Math.floor(wrapperSize / 2)) {
                        return lastItemOffset; // near the end
                    }
                    else {
                        return middleOffset;
                    }
                }
            case 'auto':
            default:
                if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
                    return scrollOffset;
                }
                else if (scrollOffset < minOffset) {
                    return minOffset;
                }
                else {
                    return maxOffset;
                }
        }
    }
    compareSize(i = 0, size = 0) {
        if (this.isNormalMode)
            return true;
        return this.getSize(i) === size;
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return ListSet; } });
//# sourceMappingURL=list-set.js.map

}, function(modId) { var map = {"./utils.js":1680223929538}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929538, function(require, module, exports) {
var __TEMP__ = require('@tarojs/taro');var Taro = __REQUIRE_DEFAULT__(__TEMP__);

// In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.
const defaultItemKey = (index, _itemData) => index;
function isHorizontalFunc({ direction, layout }) {
    return direction === 'horizontal' || layout === 'horizontal';
}
function isRtlFunc({ direction }) {
    return direction === 'rtl';
}
function getRectSize(id, success, fail, retryMs = 500) {
    const query = Taro.createSelectorQuery();
    try {
        query.select(id).boundingClientRect((res) => {
            if (res) {
                success === null || success === void 0 ? void 0 : success(res);
            }
            else {
                fail === null || fail === void 0 ? void 0 : fail();
            }
        }).exec();
    }
    catch (err) {
        setTimeout(() => {
            getRectSize(id, success, fail, retryMs);
        }, retryMs);
    }
}
async function getScrollViewContextNode(id) {
    const query = Taro.createSelectorQuery();
    return new Promise((resolve) => query.select(id).node(({ node }) => resolve(node)).exec());
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'defaultItemKey', { enumerable: true, configurable: true, get: function() { return defaultItemKey; } });Object.defineProperty(exports, 'getRectSize', { enumerable: true, configurable: true, get: function() { return getRectSize; } });Object.defineProperty(exports, 'getScrollViewContextNode', { enumerable: true, configurable: true, get: function() { return getScrollViewContextNode; } });Object.defineProperty(exports, 'isHorizontalFunc', { enumerable: true, configurable: true, get: function() { return isHorizontalFunc; } });Object.defineProperty(exports, 'isRtlFunc', { enumerable: true, configurable: true, get: function() { return isRtlFunc; } });
//# sourceMappingURL=utils.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929539, function(require, module, exports) {
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('vue');var h = __TEMP__['h'];

function render (componentName, options, children) {
    const { attrs = {}, on = {}, props = {}, slots = {} } = options, el = __rest(options, ["attrs", "on", "props", "slots"]);
    if (process.env.FRAMEWORK === 'vue3') {
        // Events
        Object.keys(on).forEach(key => {
            const name = `on${key.charAt(0).toUpperCase()}${key.slice(1)}`;
            el[name] = on[key];
        });
        return h(componentName, Object.assign(Object.assign(Object.assign(Object.assign({}, attrs), props), slots), el), children);
    }
    return h(componentName, options, children);
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return render; } });
//# sourceMappingURL=render.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929540, function(require, module, exports) {
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('@tarojs/components');var ScrollView = __TEMP__['ScrollView'];var View = __TEMP__['View'];
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../../utils/convert.js');var convertPX2Int = __TEMP__['convertPX2Int'];
var __TEMP__ = require('./list.js');var List = __REQUIRE_DEFAULT__(__TEMP__);

const OuterScrollView = React.forwardRef(function OuterScrollView(props, ref) {
    const _a = props, { style, onScroll, onScrollNative, layout } = _a, rest = __rest(_a, ["style", "onScroll", "onScrollNative", "layout"]);
    const handleScroll = (event) => {
        onScroll(Object.assign(Object.assign({}, event), { currentTarget: Object.assign(Object.assign({}, event.detail), { clientWidth: convertPX2Int(style.width), clientHeight: convertPX2Int(style.height) }) }));
        if (typeof onScrollNative === 'function') {
            onScrollNative(event);
        }
    };
    return React.createElement(ScrollView, Object.assign({ ref,
        style, scrollY: layout === 'vertical', scrollX: layout === 'horizontal', onScroll: handleScroll }, rest));
});
const VirtualList = React.forwardRef(function VirtualList(props, ref) {
    const _a = props, { direction = 'ltr', innerElementType = View, itemElementType = View, initialScrollOffset = 0, overscanCount = 1 } = _a, rest = __rest(_a, ["direction", "innerElementType", "itemElementType", "initialScrollOffset", "overscanCount"]);
    if ('children' in rest) {
        console.warn('Taro(VirtualList): children props have been deprecated. ' + 'Please use the item props instead.');
        rest.item = rest.children;
    }
    if (rest.item instanceof Array) {
        console.warn('Taro(VirtualList): item should not be an array');
        rest.item = rest.item[0];
    }
    return React.createElement(List, Object.assign(Object.assign({ ref }, rest), { itemElementType,
        innerElementType, outerElementType: OuterScrollView, direction,
        initialScrollOffset,
        overscanCount }));
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return VirtualList; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/convert.js":1680223929529,"./list.js":1680223929541}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929541, function(require, module, exports) {
var __TEMP__ = require('tslib');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('memoize-one');var memoizeOne = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('react');var React = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../../utils/convert.js');var convertNumber2PX = __TEMP__['convertNumber2PX'];
var __TEMP__ = require('../../../utils/lodash.js');var omit = __TEMP__['omit'];
var __TEMP__ = require('../../../utils/timer.js');var cancelTimeout = __TEMP__['cancelTimeout'];var requestTimeout = __TEMP__['requestTimeout'];
var __TEMP__ = require('../constants.js');var IS_SCROLLING_DEBOUNCE_INTERVAL = __TEMP__['IS_SCROLLING_DEBOUNCE_INTERVAL'];
var __TEMP__ = require('../dom-helpers.js');var getRTLOffsetType = __TEMP__['getRTLOffsetType'];
var __TEMP__ = require('../preset.js');var Preset = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../utils.js');var getRectSize = __TEMP__['getRectSize'];var getScrollViewContextNode = __TEMP__['getScrollViewContextNode'];var defaultItemKey = __TEMP__['defaultItemKey'];
var __TEMP__ = require('./validate.js');var validateListProps = __TEMP__['validateListProps'];

class List extends React.PureComponent {
    constructor(props) {
        super(props);
        // FIXME Warning: Cannot update during an existing state transition (such as within `render`).
        this.refresh = () => {
            if (process.env.FRAMEWORK === 'preact') {
                this.forceUpdate();
            }
            else {
                this.setState(({ refreshCount }) => ({
                    refreshCount: ++refreshCount
                }));
            }
        };
        this._outerRef = undefined;
        this._resetIsScrollingTimeoutId = null;
        this._callOnItemsRendered = memoizeOne((overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) => this.props.onItemsRendered({
            overscanStartIndex,
            overscanStopIndex,
            visibleStartIndex,
            visibleStopIndex
        }));
        // FIXME 优化事件信息
        this._callOnScroll = memoizeOne((scrollDirection, scrollOffset, scrollUpdateWasRequested, detail) => this.props.onScroll({
            scrollDirection,
            scrollOffset,
            scrollUpdateWasRequested,
            detail
        }));
        this._getSizeUploadSync = (index, isHorizontal) => {
            const ID = `#${this.state.id}-${index}`;
            return new Promise((resolve) => {
                const success = ({ width, height }) => {
                    const size = isHorizontal ? width : height;
                    if (!this.itemList.compareSize(index, size)) {
                        this.itemList.setSize(index, size);
                        resolve(this.itemList.getSize(index));
                    }
                };
                const fail = () => {
                    const [startIndex, stopIndex] = this._getRangeToRender();
                    if (index >= startIndex && index <= stopIndex) {
                        setTimeout(() => {
                            getRectSize(ID, success, fail);
                        }, 100);
                    }
                };
                getRectSize(ID, success, fail);
            });
        };
        this._onScrollHorizontal = event => {
            const { clientWidth, scrollTop, scrollLeft, scrollHeight, scrollWidth } = event.currentTarget;
            this.preset.field = {
                scrollHeight: scrollHeight,
                scrollWidth: this.itemList.getOffsetSize(),
                scrollTop: scrollTop,
                scrollLeft: scrollLeft,
                clientHeight: scrollHeight,
                clientWidth: scrollWidth
            };
            this.setState((prevState) => {
                const diffOffset = this.preset.field.scrollLeft - scrollLeft;
                if (prevState.scrollOffset === scrollLeft || this.preset.isShaking(diffOffset)) {
                    // Scroll position may have been updated by cDM/cDU,
                    // In which case we don't need to trigger another render,
                    // And we don't want to update state.isScrolling.
                    return null;
                }
                let scrollOffset = scrollLeft;
                if (this.preset.isRtl) {
                    // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                    // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                    // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
                    // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
                    switch (getRTLOffsetType()) {
                        case 'negative':
                            scrollOffset = -scrollLeft;
                            break;
                        case 'positive-descending':
                            scrollOffset = scrollWidth - clientWidth - scrollLeft;
                            break;
                    }
                } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
                this.preset.field = {
                    scrollWidth: scrollOffset,
                };
                return {
                    isScrolling: true,
                    scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
                    scrollOffset,
                    scrollUpdateWasRequested: false
                };
            }, this._resetIsScrollingDebounced);
        };
        this._onScrollVertical = event => {
            const { clientHeight, scrollHeight, scrollWidth, scrollTop, scrollLeft } = event.currentTarget;
            this.setState((prevState) => {
                const diffOffset = this.preset.field.scrollTop - scrollTop;
                if (prevState.scrollOffset === scrollTop || this.preset.isShaking(diffOffset)) {
                    // Scroll position may have been updated by cDM/cDU,
                    // In which case we don't need to trigger another render,
                    // And we don't want to update state.isScrolling.
                    return null;
                }
                // FIXME preact 中使用时，该组件会出现触底滚动事件重复触发导致的抖动问题，后续修复
                // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.
                const scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
                this.preset.field = {
                    scrollHeight: this.itemList.getOffsetSize(),
                    scrollWidth: scrollWidth,
                    scrollTop: scrollOffset,
                    scrollLeft: scrollLeft,
                    clientHeight: clientHeight,
                    clientWidth: scrollWidth,
                    diffOffset: this.preset.field.scrollTop - scrollOffset,
                };
                return {
                    isScrolling: true,
                    scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
                    scrollOffset,
                    scrollUpdateWasRequested: false
                };
            }, this._resetIsScrollingDebounced);
        };
        this._outerRefSetter = ref => {
            const { outerRef } = this.props;
            this._outerRef = ref;
            if (typeof outerRef === 'function') {
                outerRef(ref);
            }
            else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
                // @ts-ignore
                outerRef.current = ref;
            }
        };
        this._resetIsScrollingDebounced = () => {
            if (this._resetIsScrollingTimeoutId !== null) {
                cancelTimeout(this._resetIsScrollingTimeoutId);
            }
            this._resetIsScrollingTimeoutId = requestTimeout(this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
        };
        this._resetIsScrolling = () => {
            this._resetIsScrollingTimeoutId = null;
            this.setState({
                isScrolling: false
            }, () => {
                // Clear style cache after state update has been committed.
                // This way we don't break pure sCU for items that don't use isScrolling param.
                this.preset.getItemStyleCache(-1, null);
            });
        };
        this.preset = new Preset(props, this.refresh);
        this.itemList = this.preset.itemList;
        this.state = {
            id: this.props.id || this.preset.id,
            instance: this,
            isScrolling: false,
            scrollDirection: 'forward',
            scrollOffset: typeof this.props.initialScrollOffset === 'number'
                ? this.props.initialScrollOffset
                : 0,
            scrollUpdateWasRequested: false,
            refreshCount: 0
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return validateListProps(nextProps, prevState);
    }
    _callPropsCallbacks(prevProps = {}, prevState = {}) {
        if (typeof this.props.onItemsRendered === 'function') {
            if (this.props.itemCount > 0) {
                if (prevProps && prevProps.itemCount !== this.props.itemCount) {
                    const [overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex] = this._getRangeToRender();
                    this._callOnItemsRendered(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex);
                }
            }
        }
        if (typeof this.props.onScroll === 'function') {
            if (!prevState ||
                prevState.scrollDirection !== this.state.scrollDirection ||
                prevState.scrollOffset !== this.state.scrollOffset ||
                prevState.scrollUpdateWasRequested !== this.state.scrollUpdateWasRequested) {
                this._callOnScroll(this.state.scrollDirection, this.state.scrollOffset, this.state.scrollUpdateWasRequested, this.preset.field);
            }
        }
        setTimeout(() => {
            const [startIndex, stopIndex] = this._getRangeToRender();
            const isHorizontal = this.preset.isHorizontal;
            for (let index = startIndex; index <= stopIndex; index++) {
                this._getSizeUploadSync(index, isHorizontal);
            }
        }, 0);
    }
    // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    _getRangeToRender() {
        return this.itemList.getRangeToRender(this.state.scrollDirection, this.state.scrollOffset, this.state.isScrolling);
    }
    scrollTo(scrollOffset = 0) {
        const { enhanced } = this.props;
        scrollOffset = Math.max(0, scrollOffset);
        if (this.state.scrollOffset === scrollOffset)
            return;
        if (enhanced) {
            const isHorizontal = this.preset.isHorizontal;
            const option = {
                animated: true,
                duration: 500
            };
            if (isHorizontal) {
                option.left = scrollOffset;
            }
            else {
                option.top = scrollOffset;
            }
            return getScrollViewContextNode(`#${this.state.id}`).then((node) => node.scrollTo(option));
        }
        this.setState((prevState) => {
            if (prevState.scrollOffset === scrollOffset) {
                return null;
            }
            return {
                scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
                scrollOffset: scrollOffset,
                scrollUpdateWasRequested: true
            };
        }, this._resetIsScrollingDebounced);
    }
    scrollToItem(index, align = 'auto') {
        const { itemCount } = this.props;
        const { scrollOffset } = this.state;
        index = Math.max(0, Math.min(index, itemCount - 1));
        this.scrollTo(this.itemList.getOffsetForIndexAndAlignment(index, align, scrollOffset));
    }
    componentDidMount() {
        const { initialScrollOffset } = this.props;
        if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
            const outerRef = this._outerRef;
            if (this.preset.isHorizontal) {
                outerRef.scrollLeft = initialScrollOffset;
            }
            else {
                outerRef.scrollTop = initialScrollOffset;
            }
        }
        this._callPropsCallbacks();
    }
    componentDidUpdate(prevProps, prevState) {
        const { scrollOffset, scrollUpdateWasRequested } = this.state;
        this.preset.update(this.props);
        if (scrollUpdateWasRequested && this._outerRef != null) {
            const outerRef = this._outerRef;
            if (this.preset.isHorizontal) {
                if (this.preset.isRtl) {
                    // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                    // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                    // So we need to determine which browser behavior we're dealing with, and mimic it.
                    switch (getRTLOffsetType()) {
                        case 'negative':
                            outerRef.scrollLeft = -scrollOffset;
                            break;
                        case 'positive-ascending':
                            outerRef.scrollLeft = scrollOffset;
                            break;
                        default:
                            outerRef.scrollLeft = outerRef.scrollWidth - outerRef.clientWidth - scrollOffset;
                            break;
                    }
                }
                else {
                    outerRef.scrollLeft = scrollOffset;
                }
            }
            else {
                outerRef.scrollTop = scrollOffset;
            }
        }
        this._callPropsCallbacks(prevProps, prevState);
    }
    componentWillUnmount() {
        if (this._resetIsScrollingTimeoutId !== null) {
            cancelTimeout(this._resetIsScrollingTimeoutId);
        }
    }
    render() {
        const _a = omit(this.props, ['innerElementType', 'innerTagName', 'itemElementType', 'itemTagName', 'outerElementType', 'outerTagName', 'position']), { className, direction, height, innerRef, item, itemCount, itemData, itemKey = defaultItemKey, layout, style, useIsScrolling, width, enhanced = false, renderTop, renderBottom } = _a, rest = __rest(_a, ["className", "direction", "height", "innerRef", "item", "itemCount", "itemData", "itemKey", "layout", "style", "useIsScrolling", "width", "enhanced", "renderTop", "renderBottom"]);
        const { id, isScrolling, scrollOffset, scrollUpdateWasRequested } = this.state;
        const isHorizontal = this.preset.isHorizontal;
        const placeholderCount = this.preset.placeholderCount;
        const onScroll = isHorizontal
            ? this._onScrollHorizontal
            : this._onScrollVertical;
        const [startIndex, stopIndex] = this._getRangeToRender();
        const items = [];
        if (itemCount > 0) {
            const prevPlaceholder = startIndex < placeholderCount ? startIndex : placeholderCount;
            items.push(new Array(prevPlaceholder).fill(-1).map((_, index) => React.createElement(this.preset.itemTagName, {
                key: itemKey(index + startIndex - prevPlaceholder, itemData),
                style: { display: 'none' }
            })));
            for (let index = startIndex; index <= stopIndex; index++) {
                const style = this.preset.getItemStyle(index);
                items.push(React.createElement(this.preset.itemTagName, {
                    key: itemKey(index, itemData),
                    style
                }, React.createElement(item, {
                    id: `${id}-${index}`,
                    data: itemData,
                    index,
                    isScrolling: useIsScrolling ? isScrolling : undefined
                })));
            }
            let restCount = itemCount - stopIndex;
            restCount = restCount > 0 ? restCount : 0;
            const postPlaceholder = restCount < placeholderCount ? restCount : placeholderCount;
            items.push(new Array(postPlaceholder).fill(-1).map((_, index) => React.createElement(this.preset.itemTagName, {
                key: itemKey(1 + index + stopIndex, itemData),
                style: { display: 'none' }
            })));
        }
        // Read this value AFTER items have been created,
        // So their actual sizes (if variable) are taken into consideration.
        const estimatedTotalSize = convertNumber2PX(this.itemList.getOffsetSize());
        const outerElementProps = Object.assign(Object.assign({}, rest), { id,
            className,
            onScroll, ref: this._outerRefSetter, layout,
            enhanced, style: Object.assign({ position: 'relative', height: convertNumber2PX(height), width: convertNumber2PX(width), overflow: 'auto', WebkitOverflowScrolling: 'touch', willChange: 'transform', direction }, style) });
        if (!enhanced) {
            if (isHorizontal) {
                outerElementProps.scrollLeft = scrollUpdateWasRequested ? scrollOffset : this.preset.field.scrollLeft;
            }
            else {
                outerElementProps.scrollTop = scrollUpdateWasRequested ? scrollOffset : this.preset.field.scrollTop;
            }
        }
        if (this.preset.isRelative) {
            const pre = convertNumber2PX(this.itemList.getOffsetSize(startIndex));
            return React.createElement(this.preset.outerTagName, outerElementProps, renderTop, React.createElement(this.preset.itemTagName, {
                key: `${id}-pre`,
                id: `${id}-pre`,
                style: {
                    height: isHorizontal ? '100%' : pre,
                    width: !isHorizontal ? '100%' : pre
                }
            }), React.createElement(this.preset.innerTagName, {
                ref: innerRef,
                key: `${id}-inner`,
                id: `${id}-inner`,
                style: {
                    pointerEvents: isScrolling ? 'none' : 'auto',
                    position: 'relative',
                }
            }, items), renderBottom);
        }
        else {
            return React.createElement(this.preset.outerTagName, outerElementProps, renderTop, React.createElement(this.preset.innerTagName, {
                ref: innerRef,
                key: `${id}-inner`,
                id: `${id}-inner`,
                style: {
                    height: isHorizontal ? '100%' : estimatedTotalSize,
                    pointerEvents: isScrolling ? 'none' : 'auto',
                    position: 'relative',
                    width: !isHorizontal ? '100%' : estimatedTotalSize
                }
            }, items), renderBottom);
        }
    }
}
List.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false,
    shouldResetStyleCacheOnItemSizeChange: true
};
// NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return List; } });
//# sourceMappingURL=list.js.map

}, function(modId) { var map = {"../../../utils/convert.js":1680223929529,"../../../utils/lodash.js":1680223929530,"../../../utils/timer.js":1680223929531,"../constants.js":1680223929532,"../dom-helpers.js":1680223929533,"../preset.js":1680223929534,"../utils.js":1680223929538,"./validate.js":1680223929542}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929542, function(require, module, exports) {
let devWarningsDirection = null;
let devWarningsTagName = null;
if (process.env.NODE_ENV !== 'production') {
    if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
        devWarningsDirection =
            /* #__PURE__ */
            new WeakSet();
        devWarningsTagName =
            /* #__PURE__ */
            new WeakSet();
    }
}
const validateListProps = ({ item, direction, height, layout, itemTagName, innerTagName, outerTagName, width, itemSize }, { instance, }) => {
    if (process.env.NODE_ENV !== 'production') {
        if (!['number', 'function'].includes(typeof itemSize)) {
            throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number or function. ' + `"${itemSize === null ? 'null' : typeof itemSize}" was specified.`);
        }
    }
    if (process.env.NODE_ENV !== 'production') {
        if (innerTagName != null || outerTagName != null || itemTagName != null) {
            if (devWarningsTagName && !devWarningsTagName.has(instance)) {
                devWarningsTagName.add(instance);
                console.warn('The itemTagName、innerTagName and outerTagName props have been deprecated. ' + 'Please use the itemElementType、innerElementType and outerElementType props instead.');
            }
        }
        const isHorizontal = direction === 'horizontal' || layout === 'horizontal';
        switch (direction) {
            case 'horizontal':
            case 'vertical':
                if (devWarningsDirection && !devWarningsDirection.has(instance)) {
                    devWarningsDirection.add(instance);
                    console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
                }
                break;
            case 'ltr':
            case 'rtl':
                // Valid values
                break;
            default:
                throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + `"${direction}" was specified.`);
        }
        switch (layout) {
            case 'horizontal':
            case 'vertical':
                // Valid values
                break;
            default:
                throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + `"${layout}" was specified.`);
        }
        if (item == null) {
            throw Error('An invalid "item" prop has been specified. ' + 'Value should be a React component. ' + `"${item === null ? 'null' : typeof item}" was specified.`);
        }
        if (isHorizontal && typeof width !== 'number') {
            throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + `"${width === null ? 'null' : typeof width}" was specified.`);
        }
        else if (!isHorizontal && typeof height !== 'number') {
            throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + `"${height === null ? 'null' : typeof height}" was specified.`);
        }
    }
    return null;
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'validateListProps', { enumerable: true, configurable: true, get: function() { return validateListProps; } });
//# sourceMappingURL=validate.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929524);
})()
//miniprogram-npm-outsideDeps=["memoize-one","@tarojs/runtime","@tarojs/shared","@tarojs/taro","tslib","vue","@tarojs/components","react"]
//# sourceMappingURL=index.js.map