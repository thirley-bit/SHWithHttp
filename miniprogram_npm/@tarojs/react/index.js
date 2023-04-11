module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929636, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@tarojs/shared');
var runtime = require('@tarojs/runtime');
var Reconciler = require('react-reconciler');
var constants = require('react-reconciler/constants');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Reconciler__default = /*#__PURE__*/_interopDefaultLegacy(Reconciler);

function isEventName(s) {
    return s[0] === 'o' && s[1] === 'n';
}
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function updateProps(dom, oldProps, newProps) {
    var updatePayload = getUpdatePayload(dom, oldProps, newProps);
    if (updatePayload) {
        updatePropsByPayload(dom, oldProps, updatePayload);
    }
}
function updatePropsByPayload(dom, oldProps, updatePayload) {
    for (var i = 0; i < updatePayload.length; i += 2) { // key, value 成对出现
        var key = updatePayload[i];
        var newProp = updatePayload[i + 1];
        var oldProp = oldProps[key];
        setProperty(dom, key, newProp, oldProp);
    }
}
function getUpdatePayload(dom, oldProps, newProps) {
    var i;
    var updatePayload = null;
    for (i in oldProps) {
        if (!(i in newProps)) {
            (updatePayload = updatePayload || []).push(i, null);
        }
    }
    var isFormElement = dom instanceof runtime.FormElement;
    for (i in newProps) {
        if (oldProps[i] !== newProps[i] || (isFormElement && i === 'value')) {
            (updatePayload = updatePayload || []).push(i, newProps[i]);
        }
    }
    return updatePayload;
}
// function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }
function setEvent(dom, name, value, oldValue) {
    var isCapture = name.endsWith('Capture');
    var eventName = name.toLowerCase().slice(2);
    if (isCapture) {
        eventName = eventName.slice(0, -7);
    }
    var compName = shared.capitalize(shared.toCamelCase(dom.tagName.toLowerCase()));
    if (eventName === 'click' && compName in shared.internalComponents) {
        eventName = 'tap';
    }
    if (shared.isFunction(value)) {
        if (oldValue) {
            dom.removeEventListener(eventName, oldValue, false);
            dom.addEventListener(eventName, value, { isCapture: isCapture, sideEffect: false });
        }
        else {
            dom.addEventListener(eventName, value, isCapture);
        }
    }
    else {
        dom.removeEventListener(eventName, oldValue);
    }
}
function setStyle(style, key, value) {
    if (key[0] === '-') {
        style.setProperty(key, value.toString());
        // css variables need not further judgment
        return;
    }
    style[key] =
        shared.isNumber(value) && IS_NON_DIMENSIONAL.test(key) === false
            ? value + 'px'
            : value == null
                ? ''
                : value;
}
function setProperty(dom, name, value, oldValue) {
    var _a, _b;
    name = name === 'className' ? 'class' : name;
    if (name === 'key' ||
        name === 'children' ||
        name === 'ref') ;
    else if (name === 'style') {
        var style = dom.style;
        if (shared.isString(value)) {
            style.cssText = value;
        }
        else {
            if (shared.isString(oldValue)) {
                style.cssText = '';
                oldValue = null;
            }
            if (shared.isObject(oldValue)) {
                for (var i in oldValue) {
                    if (!(value && i in value)) {
                        setStyle(style, i, '');
                    }
                }
            }
            if (shared.isObject(value)) {
                for (var i$1 in value) {
                    if (!oldValue || value[i$1] !== oldValue[i$1]) {
                        setStyle(style, i$1, value[i$1]);
                    }
                }
            }
        }
    }
    else if (isEventName(name)) {
        setEvent(dom, name, value, oldValue);
    }
    else if (name === 'dangerouslySetInnerHTML') {
        var newHtml = (_a = value === null || value === void 0 ? void 0 : value.__html) !== null && _a !== void 0 ? _a : '';
        var oldHtml = (_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__html) !== null && _b !== void 0 ? _b : '';
        if (newHtml || oldHtml) {
            if (oldHtml !== newHtml) {
                dom.innerHTML = newHtml;
            }
        }
    }
    else if (!shared.isFunction(value)) {
        if (value == null) {
            dom.removeAttribute(name);
        }
        else {
            dom.setAttribute(name, value);
        }
    }
}

/* eslint-disable @typescript-eslint/indent */
var hostConfig = {
    // below keys order by {React ReactFiberHostConfig.custom.js}, convenient for comparing each other.
    // -------------------
    // required by @types/react-reconciler
    // -------------------
    getPublicInstance: function getPublicInstance(inst) {
        return inst;
    },
    getRootHostContext: function getRootHostContext() {
        return {};
    },
    getChildHostContext: function getChildHostContext(parentHostContext) {
        return parentHostContext;
    },
    prepareForCommit: function prepareForCommit() {

        return null;
    },
    resetAfterCommit: shared.noop,
    createInstance: function createInstance(type) {
        return runtime.document.createElement(type);
    },
    appendInitialChild: function appendInitialChild(parent, child) {
        parent.appendChild(child);
    },
    finalizeInitialChildren: function finalizeInitialChildren(dom, _, props) {
        updateProps(dom, {}, props); // 提前执行更新属性操作，Taro 在 Page 初始化后会立即从 dom 读取必要信息
        return false;
    },
    prepareUpdate: function prepareUpdate(instance, _, oldProps, newProps) {
        return getUpdatePayload(instance, oldProps, newProps);
    },
    shouldSetTextContent: function shouldSetTextContent() {
        return false;
    },
    createTextInstance: function createTextInstance(text) {
        return runtime.document.createTextNode(text);
    },
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    isPrimaryRenderer: true,
    warnsIfNotActing: true,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    getInstanceFromNode: function () { return null; },
    beforeActiveInstanceBlur: shared.noop,
    afterActiveInstanceBlur: shared.noop,
    preparePortalMount: shared.noop,
    prepareScopeUpdate: shared.noop,
    getInstanceFromScope: function () { return null; },
    getCurrentEventPriority: function getCurrentEventPriority() {
        return constants.DefaultEventPriority;
    },
    detachDeletedInstance: shared.noop,
    // -------------------
    //      Microtasks
    //     (optional)
    // -------------------
    supportsMicrotasks: true,
    scheduleMicrotask: shared.isUndefined(Promise)
        ? setTimeout
        : function (callback) { return Promise.resolve(null)
            .then(callback)
            .catch(function (error) {
            setTimeout(function () {
                throw error;
            });
        }); },
    // -------------------
    //      Mutation
    //     (required if supportsMutation is true)
    // -------------------
    appendChild: function appendChild(parent, child) {
        parent.appendChild(child);
    },
    appendChildToContainer: function appendChildToContainer(parent, child) {
        parent.appendChild(child);
    },
    commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
        textInst.nodeValue = newText;
    },
    commitMount: shared.noop,
    commitUpdate: function commitUpdate(dom, updatePayload, _, oldProps) {
        updatePropsByPayload(dom, oldProps, updatePayload);
    },
    insertBefore: function insertBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    removeChild: function removeChild(parent, child) {
        parent.removeChild(child);
    },
    removeChildFromContainer: function removeChildFromContainer(parent, child) {
        parent.removeChild(child);
    },
    resetTextContent: shared.noop,
    hideInstance: function hideInstance(instance) {
        var style = instance.style;
        style.setProperty('display', 'none');
    },
    hideTextInstance: function hideTextInstance(textInstance) {
        textInstance.nodeValue = '';
    },
    unhideInstance: function unhideInstance(instance, props) {
        var styleProp = props.style;
        var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
        display = display == null || shared.isBoolean(display) || display === '' ? '' : ('' + display).trim();
        // eslint-disable-next-line dot-notation
        instance.style['display'] = display;
    },
    unhideTextInstance: function unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
    },
    clearContainer: function clearContainer(element) {
        if (element.childNodes.length > 0) {
            element.textContent = '';
        }
    },
};
var TaroReconciler = Reconciler__default["default"](hostConfig);
if (process.env.NODE_ENV !== 'production') {
    var foundDevTools = TaroReconciler.injectIntoDevTools({
        bundleType: 1,
        version: '18.0.0',
        rendererPackageName: 'taro-react',
    });
    if (!foundDevTools) {
        // eslint-disable-next-line no-console
        console.info('%cDownload the React DevTools ' +
            'for a better development experience: ' +
            'https://reactjs.org/link/react-devtools', 'font-weight:bold');
    }
}

var ContainerMap = new WeakMap();
var Root = function Root(renderer, domContainer, options) {
    this.renderer = renderer;
    this.initInternalRoot(renderer, domContainer, options);
};
Root.prototype.initInternalRoot = function initInternalRoot (renderer, domContainer, options) {
    // Since react-reconciler v0.27, createContainer need more parameters
    // @see:https://github.com/facebook/react/blob/0b974418c9a56f6c560298560265dcf4b65784bc/packages/react-reconciler/src/ReactFiberReconciler.js#L248
    var containerInfo = domContainer;
    if (options) {
        var tag = 1; // ConcurrentRoot
        var concurrentUpdatesByDefaultOverride = false;
        var isStrictMode = false;
        var identifierPrefix = '';
        var onRecoverableError = function (error) { return console.error(error); };
        var transitionCallbacks = null;
        if (options.unstable_strictMode === true) {
            isStrictMode = true;
        }
        if (options.identifierPrefix !== undefined) {
            identifierPrefix = options.identifierPrefix;
        }
        if (options.onRecoverableError !== undefined) {
            onRecoverableError = options.onRecoverableError;
        }
        if (options.unstable_transitionCallbacks !== undefined) {
            transitionCallbacks = options.unstable_transitionCallbacks;
        }
        this.internalRoot = renderer.createContainer(containerInfo, tag, null, // hydrationCallbacks
        isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks);
    }
    else {
        var tag$1 = 0; // LegacyRoot
        this.internalRoot = renderer.createContainer(containerInfo, tag$1, null, // hydrationCallbacks
        false, // isStrictMode
        false, // concurrentUpdatesByDefaultOverride,
        '', // identifierPrefix
        function () { }, // onRecoverableError, this isn't reachable because onRecoverableError isn't called in the legacy API.
        null // transitionCallbacks
        );
    }
};
Root.prototype.render = function render (children, cb) {
    var ref = this;
        var renderer = ref.renderer;
        var internalRoot = ref.internalRoot;
    renderer.updateContainer(children, internalRoot, null, cb);
    return renderer.getPublicRootInstance(internalRoot);
};
Root.prototype.unmount = function unmount (cb) {
    this.renderer.updateContainer(null, this.internalRoot, null, cb);
};
function render(element, domContainer, cb) {
    var oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot.render(element, cb);
    }
    var root = new Root(TaroReconciler, domContainer);
    ContainerMap.set(domContainer, root);
    return root.render(element, cb);
}
function createRoot(domContainer, options) {
    if ( options === void 0 ) options = {};

    var oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot;
    }
    // options should be an object
    var root = new Root(TaroReconciler, domContainer, options);
    ContainerMap.set(domContainer, root);
    return root;
}

var unstable_batchedUpdates = TaroReconciler.batchedUpdates;
function unmountComponentAtNode(dom) {
    shared.ensure(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
    var root = ContainerMap.get(dom);
    if (!root)
        { return false; }
    unstable_batchedUpdates(function () {
        root.unmount(function () {
            ContainerMap.delete(dom);
        });
    }, null);
    return true;
}
function findDOMNode(comp) {
    if (comp == null) {
        return null;
    }
    var nodeType = comp.nodeType;
    if (nodeType === 1 || nodeType === 3) {
        return comp;
    }
    return TaroReconciler.findHostInstance(comp);
}
var portalType = shared.isFunction(Symbol) && Symbol.for
    ? Symbol.for('react.portal')
    : 0xeaca;
function createPortal(children, containerInfo, key) {
    return {
        $$typeof: portalType,
        key: key == null ? null : String(key),
        children: children,
        containerInfo: containerInfo,
        implementation: null
    };
}
var index = {
    render: render,
    createRoot: createRoot,
    unstable_batchedUpdates: unstable_batchedUpdates,
    unmountComponentAtNode: unmountComponentAtNode,
    findDOMNode: findDOMNode,
    createPortal: createPortal
};

exports.createPortal = createPortal;
exports.createRoot = createRoot;
exports["default"] = index;
exports.findDOMNode = findDOMNode;
exports.render = render;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.unstable_batchedUpdates = unstable_batchedUpdates;
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929636);
})()
//miniprogram-npm-outsideDeps=["@tarojs/shared","@tarojs/runtime","react-reconciler","react-reconciler/constants"]
//# sourceMappingURL=index.js.map