module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223931728, function(require, module, exports) {


var _values2 = require('lodash/values');

var _values3 = _interopRequireDefault(_values2);

var _unionWith2 = require('lodash/unionWith');

var _unionWith3 = _interopRequireDefault(_unionWith2);

var _mergeWith2 = require('lodash/mergeWith');

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _differenceWith2 = require('lodash/differenceWith');

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

var _joinArrays = require('./join-arrays');

var _joinArrays2 = _interopRequireDefault(_joinArrays);

var _joinArraysSmart = require('./join-arrays-smart');

var _unique = require('./unique');

var _unique2 = _interopRequireDefault(_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function merge() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  // This supports
  // merge([<object>] | ...<object>)
  // merge({ customizeArray: <fn>, customizeObject: <fn>})([<object>] | ...<object>)
  // where fn = (a, b, key)
  if (sources.length === 1) {
    if (Array.isArray(sources[0])) {
      return _mergeWith3.default.apply(undefined, [{}].concat(_toConsumableArray(sources[0]), [(0, _joinArrays2.default)(sources[0])]));
    }

    if (sources[0].customizeArray || sources[0].customizeObject) {
      return function () {
        for (var _len2 = arguments.length, structures = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          structures[_key2] = arguments[_key2];
        }

        if (Array.isArray(structures[0])) {
          return _mergeWith3.default.apply(undefined, [{}].concat(_toConsumableArray(structures[0]), [(0, _joinArrays2.default)(sources[0])]));
        }

        return _mergeWith3.default.apply(undefined, [{}].concat(structures, [(0, _joinArrays2.default)(sources[0])]));
      };
    }

    return sources[0];
  }

  return _mergeWith3.default.apply(undefined, [{}].concat(sources, [(0, _joinArrays2.default)()]));
}

var mergeSmart = merge({
  customizeArray: function customizeArray(a, b, key) {
    if (isRule(key.split('.').slice(-1)[0])) {
      return (0, _unionWith3.default)(a, b, _joinArraysSmart.uniteRules.bind(null, {}, key));
    }

    return null;
  }
});

var mergeMultiple = function mergeMultiple() {
  for (var _len3 = arguments.length, sources = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    sources[_key3] = arguments[_key3];
  }

  return (0, _values3.default)(merge(sources));
};

// rules: { <field>: <'append'|'prepend'|'replace'> }
// All default to append but you can override here
var mergeStrategy = function mergeStrategy() {
  var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return merge({
    customizeArray: _customizeArray(rules),
    customizeObject: customizeObject(rules)
  });
};
var mergeSmartStrategy = function mergeSmartStrategy() {
  var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return merge({
    customizeArray: function customizeArray(a, b, key) {
      var topKey = key.split('.').slice(-1)[0];

      if (isRule(topKey)) {
        switch (rules[key]) {
          case 'prepend':
            return [].concat(_toConsumableArray((0, _differenceWith3.default)(b, a, function (newRule, seenRule) {
              return (0, _joinArraysSmart.uniteRules)(rules, key, newRule, seenRule, 'prepend');
            })), _toConsumableArray(a));
          case 'replace':
            return b;
          default:
            // append
            return (0, _unionWith3.default)(a, b, _joinArraysSmart.uniteRules.bind(null, rules, key));
        }
      }

      return _customizeArray(rules)(a, b, key);
    },
    customizeObject: customizeObject(rules)
  });
};

function _customizeArray(rules) {
  return function (a, b, key) {
    switch (rules[key]) {
      case 'prepend':
        return [].concat(_toConsumableArray(b), _toConsumableArray(a));
      case 'replace':
        return b;
      default:
        // append
        return false;
    }
  };
}

function customizeObject(rules) {
  return function (a, b, key) {
    switch (rules[key]) {
      case 'prepend':
        return (0, _mergeWith3.default)({}, b, a, (0, _joinArrays2.default)());
      case 'replace':
        return b;
      default:
        // append
        return false;
    }
  };
}

function isRule(key) {
  return ['preLoaders', 'loaders', 'postLoaders', 'rules'].indexOf(key) >= 0;
}

module.exports = merge;
module.exports.multiple = mergeMultiple;
module.exports.smart = mergeSmart;
module.exports.strategy = mergeStrategy;
module.exports.smartStrategy = mergeSmartStrategy;
module.exports.unique = _unique2.default;
}, function(modId) {var map = {"./join-arrays":1680223931729,"./join-arrays-smart":1680223931730,"./unique":1680223931731}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223931729, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith2 = require('lodash/mergeWith');

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _cloneDeep2 = require('lodash/cloneDeep');

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

exports.default = joinArrays;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isArray = Array.isArray;

function joinArrays() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      customizeArray = _ref.customizeArray,
      customizeObject = _ref.customizeObject,
      key = _ref.key;

  return function _joinArrays(a, b, k) {
    var newKey = key ? key + '.' + k : k;

    if ((0, _isFunction3.default)(a) && (0, _isFunction3.default)(b)) {
      return function () {
        return _joinArrays(a.apply(undefined, arguments), b.apply(undefined, arguments), k);
      };
    }
    if (isArray(a) && isArray(b)) {
      var customResult = customizeArray && customizeArray(a, b, newKey);

      return customResult || [].concat(_toConsumableArray(a), _toConsumableArray(b));
    }

    if ((0, _isPlainObject3.default)(a) && (0, _isPlainObject3.default)(b)) {
      var _customResult = customizeObject && customizeObject(a, b, newKey);

      return _customResult || (0, _mergeWith3.default)({}, a, b, joinArrays({
        customizeArray: customizeArray,
        customizeObject: customizeObject,
        key: newKey
      }));
    }

    if ((0, _isPlainObject3.default)(b)) {
      return (0, _cloneDeep3.default)(b);
    }

    if (isArray(b)) {
      return [].concat(_toConsumableArray(b));
    }

    return b;
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223931730, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniteEntries = exports.uniteRules = undefined;

var _unionWith2 = require('lodash/unionWith');

var _unionWith3 = _interopRequireDefault(_unionWith2);

var _differenceWith2 = require('lodash/differenceWith');

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

var _mergeWith2 = require('lodash/mergeWith');

var _mergeWith3 = _interopRequireDefault(_mergeWith2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isArray = Array.isArray;

function uniteRules(rules, key, newRule, rule) {
  if (String(rule.test) !== String(newRule.test) || (newRule.enforce || rule.enforce) && rule.enforce !== newRule.enforce || newRule.include && !isSameValue(rule.include, newRule.include) || newRule.exclude && !isSameValue(rule.exclude, newRule.exclude)) {
    return false;
  } else if (!rule.test && !rule.include && !rule.exclude && (rule.loader && rule.loader.split('?')[0]) !== (newRule.loader && newRule.loader.split('?')[0])) {
    // Don't merge the rule if there isn't any identifying fields and the loaders don't match
    return false;
  } else if ((rule.include || rule.exclude) && !newRule.include && !newRule.exclude) {
    // Don't merge child without include/exclude to parent that has either
    return false;
  }

  // apply the same logic for oneOf
  if (rule.oneOf && newRule.oneOf) {
    rule.oneOf = (0, _unionWith3.default)(rule.oneOf, newRule.oneOf, uniteRules.bind(null, {}, 'oneOf'));

    return true;
  }

  // newRule.loader should always override use, loaders and oneOf
  if (newRule.loader) {
    var optionsKey = newRule.options ? 'options' : newRule.query && 'query';

    delete rule.use;
    delete rule.loaders;
    delete rule.oneOf;

    rule.loader = newRule.loader;

    if (optionsKey) {
      rule[optionsKey] = newRule[optionsKey];
    }
  } else if (newRule.oneOf) {
    delete rule.use;
    delete rule.loaders;
    delete rule.loader;

    rule.oneOf = newRule.oneOf;
  } else if ((rule.use || rule.loaders || rule.loader) && (newRule.use || newRule.loaders)) {
    var expandEntry = function expandEntry(loader) {
      return typeof loader === 'string' ? { loader: loader } : loader;
    };
    // this is only here to avoid breaking existing tests
    var unwrapEntry = function unwrapEntry(entry) {
      return !entry.options && !entry.query ? entry.loader : entry;
    };

    var entries = void 0;
    if (rule.loader) {
      var _optionsKey = rule.options ? 'options' : rule.query && 'query';
      entries = [{ loader: rule.loader }];

      if (_optionsKey) {
        entries[0][_optionsKey] = rule[_optionsKey];
      }

      delete rule.loader;

      if (_optionsKey) {
        delete rule[_optionsKey];
      }
    } else {
      entries = [].concat(rule.use || rule.loaders).map(expandEntry);
    }
    var newEntries = [].concat(newRule.use || newRule.loaders).map(expandEntry);

    var loadersKey = rule.use || newRule.use ? 'use' : 'loaders';
    var resolvedKey = key + '.' + loadersKey;

    switch (rules[resolvedKey]) {
      case 'prepend':
        rule[loadersKey] = [].concat(_toConsumableArray((0, _differenceWith3.default)(newEntries, entries, uniteEntries)), _toConsumableArray(entries)).map(unwrapEntry);
        break;
      case 'replace':
        rule[loadersKey] = newRule.use || newRule.loaders;
        break;
      default:
        rule[loadersKey] = combineEntries(newEntries, entries).map(unwrapEntry);
    }
  }

  if (newRule.include) {
    rule.include = newRule.include;
  }

  if (newRule.exclude) {
    rule.exclude = newRule.exclude;
  }

  return true;
}

/**
 * Check equality of two values using lodash's isEqual
 * Arrays need to be sorted for equality checking
 * but clone them first so as not to disrupt the sort order in tests
 */
function isSameValue(a, b) {
  var _map = [a, b].map(function (value) {
    return isArray(value) ? [].concat(_toConsumableArray(value)).sort() : value;
  }),
      _map2 = _slicedToArray(_map, 2),
      propA = _map2[0],
      propB = _map2[1];

  return (0, _isEqual3.default)(propA, propB);
}

function areEqualEntries(newEntry, entry) {
  var loaderNameRe = /^([^?]+)/ig;

  var _entry$loader$match = entry.loader.match(loaderNameRe),
      _entry$loader$match2 = _slicedToArray(_entry$loader$match, 1),
      loaderName = _entry$loader$match2[0];

  var _newEntry$loader$matc = newEntry.loader.match(loaderNameRe),
      _newEntry$loader$matc2 = _slicedToArray(_newEntry$loader$matc, 1),
      newLoaderName = _newEntry$loader$matc2[0];

  return loaderName === newLoaderName;
}

function uniteEntries(newEntry, entry) {
  if (areEqualEntries(newEntry, entry)) {
    // Replace query values with newer ones
    (0, _mergeWith3.default)(entry, newEntry);
    return true;
  }
  return false;
}

/* Combines entries and newEntries, while respecting the order of loaders in each.

Iterates through new entries. If the new entry also exists in existing entries,
we'll put in all of the loaders from existing entries that come before it (in case
those are pre-requisites). Any remaining existing entries are added at the end.

Since webpack processes right-to-left, we're working backwards through the arrays
*/
function combineEntries(newEntries, existingEntries) {
  var resultSet = [];

  // We're iterating through newEntries, this keeps track of where we are in the existingEntries
  var existingEntriesIteratorIndex = existingEntries.length - 1;

  for (var i = newEntries.length - 1; i >= 0; i -= 1) {
    var currentEntry = newEntries[i];
    var indexInExistingEntries = findLastIndexUsingComparinator(existingEntries, currentEntry, areEqualEntries, existingEntriesIteratorIndex);
    var hasEquivalentEntryInExistingEntries = indexInExistingEntries !== -1;

    if (hasEquivalentEntryInExistingEntries) {
      // If the same entry exists in existing entries, we should add all of the entries that
      // come before to maintain order
      for (var j = existingEntriesIteratorIndex; j > indexInExistingEntries; j -= 1) {
        var existingEntry = existingEntries[j];

        // If this entry also exists in new entries, we'll add as part of iterating through
        // new entries so that if there's a conflict between existing entries and new entries,
        // new entries order wins
        var hasMatchingEntryInNewEntries = findLastIndexUsingComparinator(newEntries, existingEntry, areEqualEntries, i) !== -1;

        if (!hasMatchingEntryInNewEntries) {
          resultSet.unshift(existingEntry);
        }
        existingEntriesIteratorIndex -= 1;
      }

      uniteEntries(currentEntry, existingEntries[existingEntriesIteratorIndex]);
      // uniteEntries mutates the second parameter to be a merged version, so that's what's pushed
      resultSet.unshift(existingEntries[existingEntriesIteratorIndex]);

      existingEntriesIteratorIndex -= 1;
    } else {
      var alreadyHasMatchingEntryInResultSet = findLastIndexUsingComparinator(resultSet, currentEntry, areEqualEntries) !== -1;

      if (!alreadyHasMatchingEntryInResultSet) {
        resultSet.unshift(currentEntry);
      }
    }
  }

  // Add remaining existing entries
  for (existingEntriesIteratorIndex; existingEntriesIteratorIndex >= 0; existingEntriesIteratorIndex -= 1) {

    var _existingEntry = existingEntries[existingEntriesIteratorIndex];
    var _alreadyHasMatchingEntryInResultSet = findLastIndexUsingComparinator(resultSet, _existingEntry, areEqualEntries) !== -1;

    if (!_alreadyHasMatchingEntryInResultSet) {
      resultSet.unshift(_existingEntry);
    }
  }

  return resultSet;
}

function findLastIndexUsingComparinator(entries, entryToFind, comparinator, startingIndex) {
  startingIndex = startingIndex || entries.length - 1;
  for (var i = startingIndex; i >= 0; i -= 1) {
    if (areEqualEntries(entryToFind, entries[i])) {
      return i;
    }
  }
  return -1;
}

exports.uniteRules = uniteRules;
exports.uniteEntries = uniteEntries;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223931731, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _differenceWith2 = require('lodash/differenceWith');

var _differenceWith3 = _interopRequireDefault(_differenceWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mergeUnique(key, uniques) {
  var getter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a) {
    return a;
  };

  return function (a, b, k) {
    return k === key && [].concat(_toConsumableArray(a), _toConsumableArray((0, _differenceWith3.default)(b, a, function (item) {
      return uniques.indexOf(getter(item)) >= 0;
    })));
  };
}

exports.default = mergeUnique;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223931728);
})()
//miniprogram-npm-outsideDeps=["lodash/values","lodash/unionWith","lodash/mergeWith","lodash/differenceWith","lodash/isPlainObject","lodash/isFunction","lodash/cloneDeep","lodash/isEqual"]
//# sourceMappingURL=index.js.map