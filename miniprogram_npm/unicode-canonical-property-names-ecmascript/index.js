module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223931719, function(require, module, exports) {
module.exports = new Set([
	// Non-binary properties:
	'General_Category',
	'Script',
	'Script_Extensions',
	// Binary properties:
	'Alphabetic',
	'Any',
	'ASCII',
	'ASCII_Hex_Digit',
	'Assigned',
	'Bidi_Control',
	'Bidi_Mirrored',
	'Case_Ignorable',
	'Cased',
	'Changes_When_Casefolded',
	'Changes_When_Casemapped',
	'Changes_When_Lowercased',
	'Changes_When_NFKC_Casefolded',
	'Changes_When_Titlecased',
	'Changes_When_Uppercased',
	'Dash',
	'Default_Ignorable_Code_Point',
	'Deprecated',
	'Diacritic',
	'Emoji',
	'Emoji_Component',
	'Emoji_Modifier',
	'Emoji_Modifier_Base',
	'Emoji_Presentation',
	'Extended_Pictographic',
	'Extender',
	'Grapheme_Base',
	'Grapheme_Extend',
	'Hex_Digit',
	'ID_Continue',
	'ID_Start',
	'Ideographic',
	'IDS_Binary_Operator',
	'IDS_Trinary_Operator',
	'Join_Control',
	'Logical_Order_Exception',
	'Lowercase',
	'Math',
	'Noncharacter_Code_Point',
	'Pattern_Syntax',
	'Pattern_White_Space',
	'Quotation_Mark',
	'Radical',
	'Regional_Indicator',
	'Sentence_Terminal',
	'Soft_Dotted',
	'Terminal_Punctuation',
	'Unified_Ideograph',
	'Uppercase',
	'Variation_Selector',
	'White_Space',
	'XID_Continue',
	'XID_Start'
]);

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223931719);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map