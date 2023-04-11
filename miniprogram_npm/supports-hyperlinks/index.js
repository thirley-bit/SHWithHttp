module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223931611, function(require, module, exports) {

const supportsColor = require('supports-color');
const hasFlag = require('has-flag');

function parseVersion(versionString) {
	if (/^\d{3,4}$/.test(versionString)) {
		// Env var doesn't always use dots. example: 4601 => 46.1.0
		const m = /(\d{1,2})(\d{2})/.exec(versionString);
		return {
			major: 0,
			minor: parseInt(m[1], 10),
			patch: parseInt(m[2], 10)
		};
	}

	const versions = (versionString || '').split('.').map(n => parseInt(n, 10));
	return {
		major: versions[0],
		minor: versions[1],
		patch: versions[2]
	};
}

function supportsHyperlink(stream) {
	const {env} = process;

	if ('FORCE_HYPERLINK' in env) {
		return !(env.FORCE_HYPERLINK.length > 0 && parseInt(env.FORCE_HYPERLINK, 10) === 0);
	}

	if (hasFlag('no-hyperlink') || hasFlag('no-hyperlinks') || hasFlag('hyperlink=false') || hasFlag('hyperlink=never')) {
		return false;
	}

	if (hasFlag('hyperlink=true') || hasFlag('hyperlink=always')) {
		return true;
	}

	// Netlify does not run a TTY, it does not need `supportsColor` check
	if ('NETLIFY' in env) {
		return true;
	}

	// If they specify no colors, they probably don't want hyperlinks.
	if (!supportsColor.supportsColor(stream)) {
		return false;
	}

	if (stream && !stream.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return false;
	}

	if ('CI' in env) {
		return false;
	}

	if ('TEAMCITY_VERSION' in env) {
		return false;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseVersion(env.TERM_PROGRAM_VERSION);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				if (version.major === 3) {
					return version.minor >= 1;
				}

				return version.major > 3;
			case 'WezTerm':
				return version.major >= 20200620;
			case 'vscode':
				return version.major > 1 || version.major === 1 && version.minor >= 72;
			// No default
		}
	}

	if ('VTE_VERSION' in env) {
		// 0.50.0 was supposed to support hyperlinks, but throws a segfault
		if (env.VTE_VERSION === '0.50.0') {
			return false;
		}

		const version = parseVersion(env.VTE_VERSION);
		return version.major > 0 || version.minor >= 50;
	}

	return false;
}

module.exports = {
	supportsHyperlink,
	stdout: supportsHyperlink(process.stdout),
	stderr: supportsHyperlink(process.stderr)
};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223931611);
})()
//miniprogram-npm-outsideDeps=["supports-color","has-flag"]
//# sourceMappingURL=index.js.map