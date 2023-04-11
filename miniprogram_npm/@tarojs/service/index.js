module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929653, function(require, module, exports) {
module.exports = require('./dist/index.js').default

module.exports.default = module.exports

}, function(modId) {var map = {"./dist/index.js":1680223929654}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929654, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaroPlatformWeb = exports.TaroPlatformBase = exports.Kernel = void 0;
const Kernel_1 = require("./Kernel");
exports.Kernel = Kernel_1.default;
const platform_plugin_base_1 = require("./platform-plugin-base");
Object.defineProperty(exports, "TaroPlatformBase", { enumerable: true, get: function () { return platform_plugin_base_1.TaroPlatformBase; } });
Object.defineProperty(exports, "TaroPlatformWeb", { enumerable: true, get: function () { return platform_plugin_base_1.TaroPlatformWeb; } });
__exportStar(require("./utils/types"), exports);
exports.default = { Kernel: Kernel_1.default, TaroPlatformBase: platform_plugin_base_1.TaroPlatformBase, TaroPlatformWeb: platform_plugin_base_1.TaroPlatformWeb };
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./Kernel":1680223929655,"./platform-plugin-base":1680223929660,"./utils/types":1680223929665}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929655, function(require, module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("@tarojs/helper");
const helper = require("@tarojs/helper");
const events_1 = require("events");
const lodash_1 = require("lodash");
const path = require("path");
const tapable_1 = require("tapable");
const Config_1 = require("./Config");
const Plugin_1 = require("./Plugin");
const utils_1 = require("./utils");
const constants_1 = require("./utils/constants");
class Kernel extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.debugger = process.env.DEBUG === 'Taro:Kernel' ? (0, helper_1.createDebug)('Taro:Kernel') : function () { };
        this.appPath = options.appPath || process.cwd();
        this.optsPresets = options.presets;
        this.optsPlugins = options.plugins;
        this.hooks = new Map();
        this.methods = new Map();
        this.commands = new Map();
        this.platforms = new Map();
        this.initHelper();
        this.initConfig();
        this.initPaths();
    }
    initConfig() {
        this.config = new Config_1.default({
            appPath: this.appPath
        });
        this.initialConfig = this.config.initialConfig;
        this.debugger('initConfig', this.initialConfig);
    }
    initPaths() {
        this.paths = {
            appPath: this.appPath,
            nodeModulesPath: (0, helper_1.recursiveFindNodeModules)(path.join(this.appPath, helper_1.NODE_MODULES))
        };
        if (this.config.isInitSuccess) {
            Object.assign(this.paths, {
                configPath: this.config.configPath,
                sourcePath: path.join(this.appPath, this.initialConfig.sourceRoot),
                outputPath: path.resolve(this.appPath, this.initialConfig.outputRoot)
            });
        }
        this.debugger(`initPaths:${JSON.stringify(this.paths, null, 2)}`);
    }
    initHelper() {
        this.helper = helper;
        this.debugger('initHelper');
    }
    initPresetsAndPlugins() {
        const initialConfig = this.initialConfig;
        const allConfigPresets = (0, utils_1.mergePlugins)(this.optsPresets || [], initialConfig.presets || [])();
        const allConfigPlugins = (0, utils_1.mergePlugins)(this.optsPlugins || [], initialConfig.plugins || [])();
        this.debugger('initPresetsAndPlugins', allConfigPresets, allConfigPlugins);
        process.env.NODE_ENV !== 'test' &&
            (0, helper_1.createSwcRegister)({
                only: [...Object.keys(allConfigPresets), ...Object.keys(allConfigPlugins)]
            });
        this.plugins = new Map();
        this.extraPlugins = {};
        this.resolvePresets(allConfigPresets);
        this.resolvePlugins(allConfigPlugins);
    }
    resolvePresets(presets) {
        const allPresets = (0, utils_1.resolvePresetsOrPlugins)(this.appPath, presets, constants_1.PluginType.Preset);
        while (allPresets.length) {
            this.initPreset(allPresets.shift());
        }
    }
    resolvePlugins(plugins) {
        plugins = (0, lodash_1.merge)(this.extraPlugins, plugins);
        const allPlugins = (0, utils_1.resolvePresetsOrPlugins)(this.appPath, plugins, constants_1.PluginType.Plugin);
        while (allPlugins.length) {
            this.initPlugin(allPlugins.shift());
        }
        this.extraPlugins = {};
    }
    initPreset(preset) {
        this.debugger('initPreset', preset);
        const { id, path, opts, apply } = preset;
        const pluginCtx = this.initPluginCtx({ id, path, ctx: this });
        const { presets, plugins } = apply()(pluginCtx, opts) || {};
        this.registerPlugin(preset);
        if (Array.isArray(presets)) {
            const _presets = (0, utils_1.resolvePresetsOrPlugins)(this.appPath, (0, utils_1.convertPluginsToObject)(presets)(), constants_1.PluginType.Preset);
            while (_presets.length) {
                this.initPreset(_presets.shift());
            }
        }
        if (Array.isArray(plugins)) {
            this.extraPlugins = (0, lodash_1.merge)(this.extraPlugins, (0, utils_1.convertPluginsToObject)(plugins)());
        }
    }
    initPlugin(plugin) {
        const { id, path, opts, apply } = plugin;
        const pluginCtx = this.initPluginCtx({ id, path, ctx: this });
        this.debugger('initPlugin', plugin);
        this.registerPlugin(plugin);
        apply()(pluginCtx, opts);
        this.checkPluginOpts(pluginCtx, opts);
    }
    checkPluginOpts(pluginCtx, opts) {
        if (typeof pluginCtx.optsSchema !== 'function') {
            return;
        }
        this.debugger('checkPluginOpts', pluginCtx);
        const joi = require('joi');
        const schema = pluginCtx.optsSchema(joi);
        if (!joi.isSchema(schema)) {
            throw new Error(`插件${pluginCtx.id}中设置参数检查 schema 有误，请检查！`);
        }
        const { error } = schema.validate(opts);
        if (error) {
            error.message = `插件${pluginCtx.id}获得的参数不符合要求，请检查！`;
            throw error;
        }
    }
    registerPlugin(plugin) {
        this.debugger('registerPlugin', plugin);
        if (this.plugins.has(plugin.id)) {
            throw new Error(`插件 ${plugin.id} 已被注册`);
        }
        this.plugins.set(plugin.id, plugin);
    }
    initPluginCtx({ id, path, ctx }) {
        const pluginCtx = new Plugin_1.default({ id, path, ctx });
        const internalMethods = ['onReady', 'onStart'];
        const kernelApis = [
            'appPath',
            'plugins',
            'platforms',
            'paths',
            'helper',
            'runOpts',
            'initialConfig',
            'applyPlugins'
        ];
        internalMethods.forEach(name => {
            if (!this.methods.has(name)) {
                pluginCtx.registerMethod(name);
            }
        });
        return new Proxy(pluginCtx, {
            get: (target, name) => {
                if (this.methods.has(name)) {
                    const method = this.methods.get(name);
                    if (Array.isArray(method)) {
                        return (...arg) => {
                            method.forEach(item => {
                                item.apply(this, arg);
                            });
                        };
                    }
                    return method;
                }
                if (kernelApis.includes(name)) {
                    return typeof this[name] === 'function' ? this[name].bind(this) : this[name];
                }
                return target[name];
            }
        });
    }
    applyPlugins(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let name;
            let initialVal;
            let opts;
            if (typeof args === 'string') {
                name = args;
            }
            else {
                name = args.name;
                initialVal = args.initialVal;
                opts = args.opts;
            }
            this.debugger('applyPlugins');
            this.debugger(`applyPlugins:name:${name}`);
            this.debugger(`applyPlugins:initialVal:${initialVal}`);
            this.debugger(`applyPlugins:opts:${opts}`);
            if (typeof name !== 'string') {
                throw new Error('调用失败，未传入正确的名称！');
            }
            const hooks = this.hooks.get(name) || [];
            if (!hooks.length) {
                return yield initialVal;
            }
            const waterfall = new tapable_1.AsyncSeriesWaterfallHook(['arg']);
            if (hooks.length) {
                const resArr = [];
                for (const hook of hooks) {
                    waterfall.tapPromise({
                        name: hook.plugin,
                        stage: hook.stage || 0,
                        // @ts-ignore
                        before: hook.before
                    }, (arg) => __awaiter(this, void 0, void 0, function* () {
                        const res = yield hook.fn(opts, arg);
                        if (constants_1.IS_MODIFY_HOOK.test(name) && constants_1.IS_EVENT_HOOK.test(name)) {
                            return res;
                        }
                        if (constants_1.IS_ADD_HOOK.test(name)) {
                            resArr.push(res);
                            return resArr;
                        }
                        return null;
                    }));
                }
            }
            return yield waterfall.promise(initialVal);
        });
    }
    runWithPlatform(platform) {
        if (!this.platforms.has(platform)) {
            throw new Error(`不存在编译平台 ${platform}`);
        }
        const withNameConfig = this.config.getConfigWithNamed(platform, this.platforms.get(platform).useConfigName);
        return withNameConfig;
    }
    setRunOpts(opts) {
        this.runOpts = opts;
    }
    runHelp(name) {
        const command = this.commands.get(name);
        const defaultOptionsMap = new Map();
        defaultOptionsMap.set('-h, --help', 'output usage information');
        let customOptionsMap = new Map();
        if (command === null || command === void 0 ? void 0 : command.optionsMap) {
            customOptionsMap = new Map(Object.entries(command === null || command === void 0 ? void 0 : command.optionsMap));
        }
        const optionsMap = new Map([...customOptionsMap, ...defaultOptionsMap]);
        (0, utils_1.printHelpLog)(name, optionsMap, (command === null || command === void 0 ? void 0 : command.synopsisList) ? new Set(command === null || command === void 0 ? void 0 : command.synopsisList) : new Set());
    }
    run(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let name;
            let opts;
            if (typeof args === 'string') {
                name = args;
            }
            else {
                name = args.name;
                opts = args.opts;
            }
            this.debugger('command:run');
            this.debugger(`command:run:name:${name}`);
            this.debugger('command:runOpts');
            this.debugger(`command:runOpts:${JSON.stringify(opts, null, 2)}`);
            this.setRunOpts(opts);
            this.debugger('initPresetsAndPlugins');
            this.initPresetsAndPlugins();
            yield this.applyPlugins('onReady');
            this.debugger('command:onStart');
            yield this.applyPlugins('onStart');
            if (!this.commands.has(name)) {
                throw new Error(`${name} 命令不存在`);
            }
            if (opts === null || opts === void 0 ? void 0 : opts.isHelp) {
                return this.runHelp(name);
            }
            if ((_a = opts === null || opts === void 0 ? void 0 : opts.options) === null || _a === void 0 ? void 0 : _a.platform) {
                opts.config = this.runWithPlatform(opts.options.platform);
                yield this.applyPlugins({
                    name: 'modifyRunnerOpts',
                    opts: {
                        opts: opts === null || opts === void 0 ? void 0 : opts.config
                    }
                });
            }
            yield this.applyPlugins({
                name,
                opts
            });
        });
    }
}
exports.default = Kernel;
//# sourceMappingURL=Kernel.js.map
}, function(modId) { var map = {"./Config":1680223929656,"./Plugin":1680223929658,"./utils":1680223929659,"./utils/constants":1680223929657}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929656, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("@tarojs/helper");
const fs = require("fs-extra");
const path = require("path");
const merge = require("webpack-merge");
const constants_1 = require("./utils/constants");
class Config {
    constructor(opts) {
        this.appPath = opts.appPath;
        this.init();
    }
    init() {
        this.configPath = (0, helper_1.resolveScriptPath)(path.join(this.appPath, constants_1.CONFIG_DIR_NAME, constants_1.DEFAULT_CONFIG_FILE));
        if (!fs.existsSync(this.configPath)) {
            this.initialConfig = {};
            this.isInitSuccess = false;
        }
        else {
            (0, helper_1.createSwcRegister)({
                only: [
                    filePath => filePath.indexOf(path.join(this.appPath, constants_1.CONFIG_DIR_NAME)) >= 0
                ]
            });
            try {
                this.initialConfig = (0, helper_1.getModuleDefaultExport)(require(this.configPath))(merge);
                this.isInitSuccess = true;
            }
            catch (err) {
                this.initialConfig = {};
                this.isInitSuccess = false;
                console.log(err);
            }
        }
    }
    getConfigWithNamed(platform, useConfigName) {
        const initialConfig = this.initialConfig;
        const sourceDirName = initialConfig.sourceRoot || helper_1.SOURCE_DIR;
        const outputDirName = initialConfig.outputRoot || helper_1.OUTPUT_DIR;
        const sourceDir = path.join(this.appPath, sourceDirName);
        const entryName = helper_1.ENTRY;
        const entryFilePath = (0, helper_1.resolveScriptPath)(path.join(sourceDir, entryName));
        const entry = {
            [entryName]: [entryFilePath]
        };
        return Object.assign({ entry, alias: initialConfig.alias || {}, copy: initialConfig.copy, sourceRoot: sourceDirName, outputRoot: outputDirName, platform, framework: initialConfig.framework, compiler: initialConfig.compiler, cache: initialConfig.cache, logger: initialConfig.logger, baseLevel: initialConfig.baseLevel, csso: initialConfig.csso, sass: initialConfig.sass, uglify: initialConfig.uglify, plugins: initialConfig.plugins, projectName: initialConfig.projectName, env: initialConfig.env, defineConstants: initialConfig.defineConstants, designWidth: initialConfig.designWidth, deviceRatio: initialConfig.deviceRatio, projectConfigName: initialConfig.projectConfigName, jsMinimizer: initialConfig.jsMinimizer, cssMinimizer: initialConfig.cssMinimizer, terser: initialConfig.terser, esbuild: initialConfig.esbuild }, initialConfig[useConfigName]);
    }
}
exports.default = Config;
//# sourceMappingURL=Config.js.map
}, function(modId) { var map = {"./utils/constants":1680223929657}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929657, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginNamePrefix = exports.PluginType = exports.presetOrPluginPrefixReg = exports.IS_MODIFY_HOOK = exports.IS_ADD_HOOK = exports.IS_EVENT_HOOK = exports.PLUGIN_PREFIX = exports.PRESET_PREFIX = exports.DEFAULT_CONFIG_FILE = exports.CONFIG_DIR_NAME = void 0;
exports.CONFIG_DIR_NAME = 'config';
exports.DEFAULT_CONFIG_FILE = 'index';
exports.PRESET_PREFIX = '@tarojs/preset-';
exports.PLUGIN_PREFIX = '@tarojs/plugin-';
exports.IS_EVENT_HOOK = /^on/;
exports.IS_ADD_HOOK = /^add/;
exports.IS_MODIFY_HOOK = /^modify/;
exports.presetOrPluginPrefixReg = new RegExp(`^${exports.PRESET_PREFIX}|${exports.PLUGIN_PREFIX}`);
var PluginType;
(function (PluginType) {
    PluginType["Preset"] = "Preset";
    PluginType["Plugin"] = "Plugin";
})(PluginType = exports.PluginType || (exports.PluginType = {}));
exports.PluginNamePrefix = {
    [PluginType.Preset]: exports.PLUGIN_PREFIX,
    [PluginType.Plugin]: exports.PLUGIN_PREFIX
};
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929658, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("@tarojs/helper");
class Plugin {
    constructor(opts) {
        this.id = opts.id;
        this.path = opts.path;
        this.ctx = opts.ctx;
    }
    register(hook) {
        if (typeof hook.name !== 'string') {
            throw new Error(`插件 ${this.id} 中注册 hook 失败， hook.name 必须是 string 类型`);
        }
        if (typeof hook.fn !== 'function') {
            throw new Error(`插件 ${this.id} 中注册 hook 失败， hook.fn 必须是 function 类型`);
        }
        const hooks = this.ctx.hooks.get(hook.name) || [];
        hook.plugin = this.id;
        this.ctx.hooks.set(hook.name, hooks.concat(hook));
    }
    registerCommand(command) {
        if (this.ctx.commands.has(command.name)) {
            throw new Error(`命令 ${command.name} 已存在`);
        }
        this.ctx.commands.set(command.name, command);
        this.register(command);
    }
    registerPlatform(platform) {
        if (this.ctx.platforms.has(platform.name)) {
            throw new Error(`适配平台 ${platform.name} 已存在`);
        }
        (0, helper_1.addPlatforms)(platform.name);
        this.ctx.platforms.set(platform.name, platform);
        this.register(platform);
    }
    registerMethod(...args) {
        const { name, fn } = processArgs(args);
        const methods = this.ctx.methods.get(name) || [];
        methods.push(fn || function (fn) {
            this.register({
                name,
                fn
            });
        }.bind(this));
        this.ctx.methods.set(name, methods);
    }
    addPluginOptsSchema(schema) {
        this.optsSchema = schema;
    }
}
exports.default = Plugin;
function processArgs(args) {
    let name, fn;
    if (!args.length) {
        throw new Error('参数为空');
    }
    else if (args.length === 1) {
        if (typeof args[0] === 'string') {
            name = args[0];
        }
        else {
            name = args[0].name;
            fn = args[0].fn;
        }
    }
    else {
        name = args[0];
        fn = args[1];
    }
    return { name, fn };
}
//# sourceMappingURL=Plugin.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929659, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelpLog = exports.resolvePresetsOrPlugins = exports.mergePlugins = exports.convertPluginsToObject = exports.getPluginPath = exports.isNpmPkg = void 0;
const helper_1 = require("@tarojs/helper");
const lodash_1 = require("lodash");
const path = require("path");
const resolve = require("resolve");
const isNpmPkg = name => !(/^(\.|\/)/.test(name));
exports.isNpmPkg = isNpmPkg;
function getPluginPath(pluginPath) {
    if ((0, exports.isNpmPkg)(pluginPath) || path.isAbsolute(pluginPath))
        return pluginPath;
    throw new Error('plugin 和 preset 配置必须为绝对路径或者包名');
}
exports.getPluginPath = getPluginPath;
function convertPluginsToObject(items) {
    return () => {
        const obj = {};
        if (Array.isArray(items)) {
            items.forEach(item => {
                if (typeof item === 'string') {
                    const name = getPluginPath(item);
                    obj[name] = null;
                }
                else if (Array.isArray(item)) {
                    const name = getPluginPath(item[0]);
                    obj[name] = item[1];
                }
            });
        }
        return obj;
    };
}
exports.convertPluginsToObject = convertPluginsToObject;
function mergePlugins(dist, src) {
    return () => {
        const srcObj = convertPluginsToObject(src)();
        const distObj = convertPluginsToObject(dist)();
        return (0, lodash_1.merge)(distObj, srcObj);
    };
}
exports.mergePlugins = mergePlugins;
// getModuleDefaultExport
function resolvePresetsOrPlugins(root, args, type) {
    return Object.keys(args).map(item => {
        var _a;
        let fPath;
        try {
            fPath = resolve.sync(item, {
                basedir: root,
                extensions: ['.js', '.ts']
            });
        }
        catch (err) {
            if ((_a = args[item]) === null || _a === void 0 ? void 0 : _a.backup) {
                // 如果项目中没有，可以使用 CLI 中的插件
                fPath = args[item].backup;
            }
            else {
                console.log(helper_1.chalk.red(`找不到依赖 "${item}"，请先在项目中安装`));
                process.exit(1);
            }
        }
        return {
            id: fPath,
            path: fPath,
            type,
            opts: args[item] || {},
            apply() {
                try {
                    return (0, helper_1.getModuleDefaultExport)(require(fPath));
                }
                catch (error) {
                    console.error(error);
                    throw new Error(`插件依赖 "${item}" 加载失败，请检查插件配置`);
                }
            }
        };
    });
}
exports.resolvePresetsOrPlugins = resolvePresetsOrPlugins;
function supplementBlank(length) {
    return Array(length).map(() => '').join(' ');
}
function printHelpLog(command, optionsList, synopsisList) {
    console.log(`Usage: taro ${command} [options]`);
    console.log();
    console.log('Options:');
    const keys = Array.from(optionsList.keys());
    const maxLength = keys.reduce((v1, v2) => {
        return v1.length > v2.length ? v1 : v2;
    }).length + 3;
    optionsList.forEach((v, k) => {
        const supplementBlankLength = maxLength - k.length;
        console.log(`  ${k}${supplementBlank(supplementBlankLength)}${v}`);
    });
    if (synopsisList && synopsisList.size) {
        console.log();
        console.log('Synopsis:');
        synopsisList.forEach(item => {
            console.log(`  $ ${item}`);
        });
    }
}
exports.printHelpLog = printHelpLog;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929660, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./mini"), exports);
__exportStar(require("./web"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./mini":1680223929661,"./web":1680223929663}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929661, function(require, module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaroPlatformBase = void 0;
const platform_1 = require("./platform");
class TaroPlatformBase extends platform_1.default {
    /**
     * 1. 清空 dist 文件夹
     * 2. 输出编译提示
     * 3. 生成 project.config.json
     */
    setup() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setupTransaction.perform(this.setupImpl, this);
            (_b = (_a = this.ctx).onSetupClose) === null || _b === void 0 ? void 0 : _b.call(_a, this);
        });
    }
    setupImpl() {
        var _a;
        const { needClearOutput } = this.config;
        if (typeof needClearOutput === 'undefined' || !!needClearOutput) {
            this.emptyOutputDir();
        }
        this.printDevelopmentTip(this.platform);
        if (this.projectConfigJson) {
            this.generateProjectConfig(this.projectConfigJson);
        }
        if (((_a = this.ctx.initialConfig.logger) === null || _a === void 0 ? void 0 : _a.quiet) === false) {
            const { printLog, processTypeEnum } = this.ctx.helper;
            printLog("start" /* processTypeEnum.START */, '开发者工具-项目目录', `${this.ctx.paths.outputPath}`);
        }
    }
    printDevelopmentTip(platform) {
        var _a;
        const tips = [];
        const config = this.config;
        const { chalk } = this.helper;
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
            const { isWindows } = this.helper;
            const exampleCommand = isWindows
                ? `$ set NODE_ENV=production && taro build --type ${platform} --watch`
                : `$ NODE_ENV=production taro build --type ${platform} --watch`;
            tips.push(chalk.yellowBright(`预览模式生成的文件较大，设置 NODE_ENV 为 production 可以开启压缩。
Example:
${exampleCommand}`));
        }
        if (this.compiler === 'webpack5' && !((_a = config.cache) === null || _a === void 0 ? void 0 : _a.enable)) {
            tips.push(chalk.yellowBright('建议开启持久化缓存功能，能有效提升二次编译速度，详情请参考: https://docs.taro.zone/docs/config-detail#cache。'));
        }
        if (tips.length) {
            console.log(chalk.yellowBright('Tips:'));
            tips.forEach((item, index) => console.log(`${chalk.yellowBright(index + 1)}. ${item}`));
            console.log('\n');
        }
    }
    /**
     * 返回当前项目内的 @tarojs/mini-runner 包
     */
    getRunner() {
        return __awaiter(this, void 0, void 0, function* () {
            const { appPath } = this.ctx.paths;
            const { npm } = this.helper;
            let runnerPkg;
            switch (this.compiler) {
                case 'webpack5':
                    runnerPkg = '@tarojs/webpack5-runner';
                    break;
                default:
                    runnerPkg = '@tarojs/mini-runner';
            }
            const runner = yield npm.getNpmPkg(runnerPkg, appPath);
            return runner.bind(null, appPath);
        });
    }
    /**
     * 准备 mini-runner 参数
     * @param extraOptions 需要额外合入 Options 的配置项
     */
    getOptions(extraOptions = {}) {
        const { ctx, config, globalObject, fileType, template } = this;
        return Object.assign(Object.assign(Object.assign({}, config), { nodeModulesPath: ctx.paths.nodeModulesPath, buildAdapter: config.platform, globalObject,
            fileType,
            template }), extraOptions);
    }
    /**
     * 调用 mini-runner 开始编译
     * @param extraOptions 需要额外传入 @tarojs/mini-runner 的配置项
     */
    build(extraOptions = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            (_b = (_a = this.ctx).onBuildInit) === null || _b === void 0 ? void 0 : _b.call(_a, this);
            yield this.buildTransaction.perform(this.buildImpl, this, extraOptions);
        });
    }
    buildImpl(extraOptions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const runner = yield this.getRunner();
            const options = this.getOptions(Object.assign({
                runtimePath: this.runtimePath,
                taroComponentsPath: this.taroComponentsPath
            }, extraOptions));
            yield runner(options);
        });
    }
    /**
     * 生成 project.config.json
     * @param src 项目源码中配置文件的名称
     * @param dist 编译后配置文件的名称，默认为 'project.config.json'
     */
    generateProjectConfig(src, dist = 'project.config.json') {
        if (this.config.isBuildNativeComp)
            return;
        this.ctx.generateProjectConfig({
            srcConfigName: src,
            distConfigName: dist
        });
    }
    /**
     * 递归替换对象的 key 值
     */
    recursiveReplaceObjectKeys(obj, keyMap) {
        Object.keys(obj).forEach(key => {
            if (keyMap[key]) {
                obj[keyMap[key]] = obj[key];
                if (typeof obj[key] === 'object') {
                    this.recursiveReplaceObjectKeys(obj[keyMap[key]], keyMap);
                }
                delete obj[key];
            }
            else if (keyMap[key] === false) {
                delete obj[key];
            }
            else if (typeof obj[key] === 'object') {
                this.recursiveReplaceObjectKeys(obj[key], keyMap);
            }
        });
    }
    /**
     * 调用 mini-runner 开启编译
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setup();
            yield this.build();
        });
    }
}
exports.TaroPlatformBase = TaroPlatformBase;
//# sourceMappingURL=mini.js.map
}, function(modId) { var map = {"./platform":1680223929662}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929662, function(require, module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor() {
        this.wrappers = [];
    }
    perform(fn, scope, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            this.initAll(scope);
            yield fn.call(scope, ...args);
            this.closeAll(scope);
        });
    }
    initAll(scope) {
        const wrappers = this.wrappers;
        wrappers.forEach(wrapper => { var _a; return (_a = wrapper.init) === null || _a === void 0 ? void 0 : _a.call(scope); });
    }
    closeAll(scope) {
        const wrappers = this.wrappers;
        wrappers.forEach(wrapper => { var _a; return (_a = wrapper.close) === null || _a === void 0 ? void 0 : _a.call(scope); });
    }
    addWrapper(wrapper) {
        this.wrappers.push(wrapper);
    }
}
exports.Transaction = Transaction;
class TaroPlatform {
    constructor(ctx, config) {
        this.setupTransaction = new Transaction();
        this.buildTransaction = new Transaction();
        this.ctx = ctx;
        this.helper = ctx.helper;
        this.config = config;
        this.updateOutputPath(config);
        const _compiler = config.compiler;
        this.compiler = typeof _compiler === 'object' ? _compiler.type : _compiler;
    }
    emptyOutputDir() {
        const { outputPath } = this.ctx.paths;
        this.helper.emptyDirectory(outputPath);
    }
    /**
     * 如果分端编译详情 webpack 配置了 output 则需更新 outputPath 位置
     */
    updateOutputPath(config) {
        var _a;
        const platformPath = (_a = config.output) === null || _a === void 0 ? void 0 : _a.path;
        if (platformPath) {
            this.ctx.paths.outputPath = platformPath;
        }
    }
}
exports.default = TaroPlatform;
//# sourceMappingURL=platform.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929663, function(require, module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaroPlatformWeb = void 0;
const lodash_1 = require("lodash");
const path = require("path");
const package_1 = require("../utils/package");
const platform_1 = require("./platform");
class TaroPlatformWeb extends platform_1.default {
    /**
     * 1. 清空 dist 文件夹
     * 2. 输出编译提示
     */
    setup() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setupTransaction.perform(this.setupWebApp, this);
            (_b = (_a = this.ctx).onSetupClose) === null || _b === void 0 ? void 0 : _b.call(_a, this);
        });
    }
    setupWebApp() {
        const { needClearOutput } = this.config;
        if (typeof needClearOutput === 'undefined' || !!needClearOutput) {
            this.emptyOutputDir();
        }
        this.printDevelopmentTip();
    }
    printDevelopmentTip() {
        var _a;
        const tips = [];
        const config = this.config;
        const { chalk } = this.helper;
        if (this.compiler === 'webpack5' && !((_a = config.cache) === null || _a === void 0 ? void 0 : _a.enable)) {
            tips.push(chalk.yellowBright('建议开启持久化缓存功能，能有效提升二次编译速度，详情请参考: https://docs.taro.zone/docs/config-detail#cache。'));
        }
        if (tips.length) {
            console.log(chalk.yellowBright('Tips:'));
            tips.forEach((item, index) => console.log(`${chalk.yellowBright(index + 1)}. ${item}`));
            console.log('\n');
        }
    }
    /**
     * 返回当前项目内的 runner 包
     */
    getRunner() {
        return __awaiter(this, void 0, void 0, function* () {
            const { appPath } = this.ctx.paths;
            const { npm } = this.helper;
            let runnerPkg;
            switch (this.compiler) {
                case 'webpack5':
                    runnerPkg = '@tarojs/webpack5-runner';
                    break;
                default:
                    runnerPkg = '@tarojs/webpack-runner';
            }
            const runner = yield npm.getNpmPkg(runnerPkg, appPath);
            return runner.bind(null, appPath);
        });
    }
    /**
     * 准备 runner 参数
     * @param extraOptions 需要额外合入 Options 的配置项
     */
    getOptions(extraOptions = {}) {
        const { sourcePath } = this.ctx.paths;
        const { initialConfig } = this.ctx;
        const { port } = this.ctx.runOpts.options;
        const { recursiveMerge, ENTRY, SOURCE_DIR, OUTPUT_DIR } = this.ctx.helper;
        const entryFileName = `${ENTRY}.config`;
        const entryFile = path.basename(entryFileName);
        const defaultEntry = {
            [ENTRY]: [path.join(sourcePath, entryFile)]
        };
        const customEntry = (0, lodash_1.get)(initialConfig, 'h5.entry');
        const config = recursiveMerge(Object.assign({}, this.config), {
            entryFileName: ENTRY,
            env: {
                TARO_ENV: JSON.stringify('h5'),
                FRAMEWORK: JSON.stringify(this.config.framework),
                TARO_VERSION: JSON.stringify((0, package_1.getPkgVersion)())
            },
            devServer: { port },
            sourceRoot: this.config.sourceRoot || SOURCE_DIR,
            outputRoot: this.config.outputRoot || OUTPUT_DIR
        });
        config.entry = (0, lodash_1.merge)(defaultEntry, customEntry);
        return Object.assign(Object.assign({}, config), extraOptions);
    }
    /**
     * 调用 runner 开始编译
     * @param extraOptions 需要额外传入 runner 的配置项
     */
    build(extraOptions = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            (_b = (_a = this.ctx).onBuildInit) === null || _b === void 0 ? void 0 : _b.call(_a, this);
            yield this.buildTransaction.perform(this.buildWebApp, this, extraOptions);
        });
    }
    buildWebApp(extraOptions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const runner = yield this.getRunner();
            const options = this.getOptions(Object.assign({
                runtimePath: this.runtimePath,
            }, extraOptions));
            yield runner(options);
        });
    }
    /**
     * 调用 runner 开启编译
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setup();
            yield this.build();
        });
    }
}
exports.TaroPlatformWeb = TaroPlatformWeb;
//# sourceMappingURL=web.js.map
}, function(modId) { var map = {"../utils/package":1680223929664,"./platform":1680223929662}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929664, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.printPkgVersion = exports.getPkgVersion = exports.getRootPath = void 0;
/* eslint-disable no-console */
const path = require("path");
function getRootPath() {
    return path.resolve(__dirname, '../../');
}
exports.getRootPath = getRootPath;
function getPkgVersion() {
    return require(path.join(getRootPath(), 'package.json')).version;
}
exports.getPkgVersion = getPkgVersion;
function printPkgVersion() {
    console.log(`👽 Taro v${getPkgVersion()}`);
    console.log();
}
exports.printPkgVersion = printPkgVersion;
//# sourceMappingURL=package.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929665, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929653);
})()
//miniprogram-npm-outsideDeps=["@tarojs/helper","events","lodash","path","tapable","joi","fs-extra","webpack-merge","resolve"]
//# sourceMappingURL=index.js.map