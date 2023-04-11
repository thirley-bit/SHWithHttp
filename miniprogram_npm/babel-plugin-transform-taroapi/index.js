module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929824, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
const plugin = function (babel) {
    const t = babel.types;
    // 这些变量需要在每个 program 里重置
    const invokedApis = new Map();
    let taroName;
    let needDefault;
    let referTaro;
    return {
        name: 'babel-plugin-transform-taro-api',
        visitor: {
            ImportDeclaration(ast, state) {
                const packageName = state.opts.packageName;
                const apis = state.opts.apis;
                if (ast.node.source.value !== packageName)
                    return;
                ast.node.specifiers.forEach(node => {
                    if (t.isImportDefaultSpecifier(node)) {
                        needDefault = true;
                        taroName = node.local.name;
                    }
                    else if (t.isImportSpecifier(node)) {
                        const propertyName = node.imported.name;
                        if (apis.has(propertyName)) { // 记录api名字
                            ast.scope.rename(node.local.name);
                            invokedApis.set(propertyName, node.local.name);
                        }
                        else { // 如果是未实现的api 改成Taro.xxx
                            needDefault = true;
                            const localName = node.local.name;
                            const binding = ast.scope.getBinding(localName);
                            const idn = t.identifier(taroName);
                            referTaro.push(idn);
                            binding && binding.referencePaths.forEach(reference => {
                                reference.replaceWith(t.memberExpression(idn, t.identifier(propertyName)));
                            });
                        }
                    }
                });
            },
            MemberExpression(ast, state) {
                /* 处理Taro.xxx */
                const apis = state.opts.apis;
                const isTaro = t.isIdentifier(ast.node.object, { name: taroName });
                const property = ast.node.property;
                let propertyName = null;
                let propName = 'name';
                if (!isTaro)
                    return;
                // 兼容一下 Taro['xxx']
                if (t.isStringLiteral(property)) {
                    propName = 'value';
                }
                propertyName = property[propName];
                if (!propertyName)
                    return;
                // 同一api使用多次, 读取变量名
                if (apis.has(propertyName)) {
                    const parentNode = ast.parent;
                    const isAssignment = t.isAssignmentExpression(parentNode) && parentNode.left === ast.node;
                    if (!isAssignment) {
                        let identifier;
                        if (invokedApis.has(propertyName)) {
                            identifier = t.identifier(invokedApis.get(propertyName));
                        }
                        else {
                            const newPropertyName = ast.scope.generateUid(propertyName);
                            invokedApis.set(propertyName, newPropertyName);
                            /* 未绑定作用域 */
                            identifier = t.identifier(newPropertyName);
                        }
                        ast.replaceWith(identifier);
                    }
                }
                else {
                    needDefault = true;
                }
            },
            Program: {
                enter(ast) {
                    needDefault = false;
                    referTaro = [];
                    invokedApis.clear();
                    taroName = ast.scope.getBinding('Taro')
                        ? ast.scope.generateUid('Taro')
                        : 'Taro';
                },
                exit(ast, state) {
                    // 防止重复引入
                    let isTaroApiImported = false;
                    referTaro.forEach(node => {
                        node.name = taroName;
                    });
                    ast.traverse({
                        ImportDeclaration(ast) {
                            const packageName = state.opts.packageName;
                            const isImportingTaroApi = ast.node.source.value === packageName;
                            if (!isImportingTaroApi)
                                return;
                            if (isTaroApiImported)
                                return ast.remove();
                            isTaroApiImported = true;
                            const namedImports = Array.from(invokedApis.entries()).map(([imported, local]) => t.importSpecifier(t.identifier(local), t.identifier(imported)));
                            if (needDefault) {
                                const defaultImport = t.importDefaultSpecifier(t.identifier(taroName));
                                ast.node.specifiers = [
                                    defaultImport,
                                    ...namedImports
                                ];
                                needDefault = false;
                            }
                            else {
                                ast.node.specifiers = namedImports;
                            }
                        }
                    });
                }
            }
        }
    };
};
exports.default = plugin;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929824);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map