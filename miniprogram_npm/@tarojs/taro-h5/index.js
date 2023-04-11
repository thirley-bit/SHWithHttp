module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1680223929667, function(require, module, exports) {
var __TEMP__ = require('./api/taro.js');var taro = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/taro.js');Object.defineProperty(exports, 'Behavior', { enumerable: true, configurable: true, get: function() { return __TEMP__.Behavior; } });Object.defineProperty(exports, 'Current', { enumerable: true, configurable: true, get: function() { return __TEMP__.Current; } });Object.defineProperty(exports, 'ENV_TYPE', { enumerable: true, configurable: true, get: function() { return __TEMP__.ENV_TYPE; } });Object.defineProperty(exports, 'Events', { enumerable: true, configurable: true, get: function() { return __TEMP__.Events; } });Object.defineProperty(exports, 'Link', { enumerable: true, configurable: true, get: function() { return __TEMP__.Link; } });Object.defineProperty(exports, 'canIUseWebp', { enumerable: true, configurable: true, get: function() { return __TEMP__.canIUseWebp; } });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return __TEMP__.default; } });Object.defineProperty(exports, 'eventCenter', { enumerable: true, configurable: true, get: function() { return __TEMP__.eventCenter; } });Object.defineProperty(exports, 'getEnv', { enumerable: true, configurable: true, get: function() { return __TEMP__.getEnv; } });Object.defineProperty(exports, 'initPxTransform', { enumerable: true, configurable: true, get: function() { return __TEMP__.initPxTransform; } });Object.defineProperty(exports, 'interceptors', { enumerable: true, configurable: true, get: function() { return __TEMP__.interceptors; } });Object.defineProperty(exports, 'options', { enumerable: true, configurable: true, get: function() { return __TEMP__.options; } });Object.defineProperty(exports, 'preload', { enumerable: true, configurable: true, get: function() { return __TEMP__.preload; } });Object.defineProperty(exports, 'pxTransform', { enumerable: true, configurable: true, get: function() { return __TEMP__.pxTransform; } });Object.defineProperty(exports, 'requirePlugin', { enumerable: true, configurable: true, get: function() { return __TEMP__.requirePlugin; } });
var __TEMP__ = require('./api/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ad/index.js');Object.defineProperty(exports, 'createInterstitialAd', { enumerable: true, configurable: true, get: function() { return __TEMP__.createInterstitialAd; } });Object.defineProperty(exports, 'createRewardedVideoAd', { enumerable: true, configurable: true, get: function() { return __TEMP__.createRewardedVideoAd; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ai/facial.js');Object.defineProperty(exports, 'faceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.faceDetect; } });Object.defineProperty(exports, 'initFaceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.initFaceDetect; } });Object.defineProperty(exports, 'stopFaceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopFaceDetect; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ai/visual.js');Object.defineProperty(exports, 'createVKSession', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVKSession; } });Object.defineProperty(exports, 'isVKSupport', { enumerable: true, configurable: true, get: function() { return __TEMP__.isVKSupport; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/alipay/index.js');Object.defineProperty(exports, 'getOpenUserInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getOpenUserInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/crypto.js');Object.defineProperty(exports, 'getUserCryptoManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserCryptoManager; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/debug.js');Object.defineProperty(exports, 'getLogManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLogManager; } });Object.defineProperty(exports, 'getRealtimeLogManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRealtimeLogManager; } });Object.defineProperty(exports, 'setEnableDebug', { enumerable: true, configurable: true, get: function() { return __TEMP__.setEnableDebug; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/performance.js');Object.defineProperty(exports, 'getPerformance', { enumerable: true, configurable: true, get: function() { return __TEMP__.getPerformance; } });Object.defineProperty(exports, 'reportPerformance', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportPerformance; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/system.js');Object.defineProperty(exports, 'getAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAppAuthorizeSetting; } });Object.defineProperty(exports, 'getAppBaseInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAppBaseInfo; } });Object.defineProperty(exports, 'getDeviceInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getDeviceInfo; } });Object.defineProperty(exports, 'getSystemInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfo; } });Object.defineProperty(exports, 'getSystemInfoAsync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfoAsync; } });Object.defineProperty(exports, 'getSystemInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfoSync; } });Object.defineProperty(exports, 'getSystemSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemSetting; } });Object.defineProperty(exports, 'getWindowInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWindowInfo; } });Object.defineProperty(exports, 'openAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openAppAuthorizeSetting; } });Object.defineProperty(exports, 'openSystemBluetoothSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openSystemBluetoothSetting; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/update.js');Object.defineProperty(exports, 'getUpdateManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUpdateManager; } });Object.defineProperty(exports, 'updateWeChatApp', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateWeChatApp; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/weapp/app-event.js');Object.defineProperty(exports, 'offAppHide', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAppHide; } });Object.defineProperty(exports, 'offAppShow', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAppShow; } });Object.defineProperty(exports, 'offAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAudioInterruptionBegin; } });Object.defineProperty(exports, 'offAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAudioInterruptionEnd; } });Object.defineProperty(exports, 'offError', { enumerable: true, configurable: true, get: function() { return __TEMP__.offError; } });Object.defineProperty(exports, 'offPageNotFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offPageNotFound; } });Object.defineProperty(exports, 'offThemeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offThemeChange; } });Object.defineProperty(exports, 'offUnhandledRejection', { enumerable: true, configurable: true, get: function() { return __TEMP__.offUnhandledRejection; } });Object.defineProperty(exports, 'onAppHide', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAppHide; } });Object.defineProperty(exports, 'onAppShow', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAppShow; } });Object.defineProperty(exports, 'onAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAudioInterruptionBegin; } });Object.defineProperty(exports, 'onAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAudioInterruptionEnd; } });Object.defineProperty(exports, 'onError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onError; } });Object.defineProperty(exports, 'onPageNotFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onPageNotFound; } });Object.defineProperty(exports, 'onThemeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onThemeChange; } });Object.defineProperty(exports, 'onUnhandledRejection', { enumerable: true, configurable: true, get: function() { return __TEMP__.onUnhandledRejection; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/weapp/life-cycle.js');Object.defineProperty(exports, 'getEnterOptionsSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getEnterOptionsSync; } });Object.defineProperty(exports, 'getLaunchOptionsSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLaunchOptionsSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/base/index.js');Object.defineProperty(exports, 'arrayBufferToBase64', { enumerable: true, configurable: true, get: function() { return __TEMP__.arrayBufferToBase64; } });Object.defineProperty(exports, 'base64ToArrayBuffer', { enumerable: true, configurable: true, get: function() { return __TEMP__.base64ToArrayBuffer; } });Object.defineProperty(exports, 'canIUse', { enumerable: true, configurable: true, get: function() { return __TEMP__.canIUse; } });Object.defineProperty(exports, 'env', { enumerable: true, configurable: true, get: function() { return __TEMP__.env; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/canvas/createCanvasContext.js');Object.defineProperty(exports, 'createCanvasContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createCanvasContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/canvas/canvasToTempFilePath.js');Object.defineProperty(exports, 'canvasToTempFilePath', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasToTempFilePath; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/canvas/canvasPutImageData.js');Object.defineProperty(exports, 'canvasPutImageData', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasPutImageData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/canvas/canvasGetImageData.js');Object.defineProperty(exports, 'canvasGetImageData', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasGetImageData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/canvas/index.js');Object.defineProperty(exports, 'createOffscreenCanvas', { enumerable: true, configurable: true, get: function() { return __TEMP__.createOffscreenCanvas; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/cloud/index.js');Object.defineProperty(exports, 'cloud', { enumerable: true, configurable: true, get: function() { return __TEMP__.cloud; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/data-analysis/index.js');Object.defineProperty(exports, 'getExptInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getExptInfoSync; } });Object.defineProperty(exports, 'reportAnalytics', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportAnalytics; } });Object.defineProperty(exports, 'reportEvent', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportEvent; } });Object.defineProperty(exports, 'reportMonitor', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportMonitor; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/accelerometer.js');Object.defineProperty(exports, 'offAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAccelerometerChange; } });Object.defineProperty(exports, 'onAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAccelerometerChange; } });Object.defineProperty(exports, 'startAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.startAccelerometer; } });Object.defineProperty(exports, 'stopAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopAccelerometer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/accessibility.js');Object.defineProperty(exports, 'checkIsOpenAccessibility', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsOpenAccessibility; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/battery.js');Object.defineProperty(exports, 'getBatteryInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBatteryInfo; } });Object.defineProperty(exports, 'getBatteryInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBatteryInfoSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/bluetooth.js');Object.defineProperty(exports, 'closeBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeBluetoothAdapter; } });Object.defineProperty(exports, 'getBluetoothAdapterState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBluetoothAdapterState; } });Object.defineProperty(exports, 'getBluetoothDevices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBluetoothDevices; } });Object.defineProperty(exports, 'getConnectedBluetoothDevices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getConnectedBluetoothDevices; } });Object.defineProperty(exports, 'isBluetoothDevicePaired', { enumerable: true, configurable: true, get: function() { return __TEMP__.isBluetoothDevicePaired; } });Object.defineProperty(exports, 'makeBluetoothPair', { enumerable: true, configurable: true, get: function() { return __TEMP__.makeBluetoothPair; } });Object.defineProperty(exports, 'offBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'offBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBluetoothDeviceFound; } });Object.defineProperty(exports, 'onBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'onBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBluetoothDeviceFound; } });Object.defineProperty(exports, 'openBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.openBluetoothAdapter; } });Object.defineProperty(exports, 'startBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startBluetoothDevicesDiscovery; } });Object.defineProperty(exports, 'stopBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBluetoothDevicesDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/bluetooth-ble.js');Object.defineProperty(exports, 'closeBLEConnection', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeBLEConnection; } });Object.defineProperty(exports, 'createBLEConnection', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBLEConnection; } });Object.defineProperty(exports, 'getBLEDeviceCharacteristics', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceCharacteristics; } });Object.defineProperty(exports, 'getBLEDeviceRSSI', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceRSSI; } });Object.defineProperty(exports, 'getBLEDeviceServices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceServices; } });Object.defineProperty(exports, 'getBLEMTU', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEMTU; } });Object.defineProperty(exports, 'notifyBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.notifyBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEConnectionStateChange; } });Object.defineProperty(exports, 'offBLEMTUChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEMTUChange; } });Object.defineProperty(exports, 'onBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLECharacteristicValueChange; } });Object.defineProperty(exports, 'onBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEConnectionStateChange; } });Object.defineProperty(exports, 'onBLEMTUChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEMTUChange; } });Object.defineProperty(exports, 'readBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return __TEMP__.readBLECharacteristicValue; } });Object.defineProperty(exports, 'setBLEMTU', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBLEMTU; } });Object.defineProperty(exports, 'writeBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return __TEMP__.writeBLECharacteristicValue; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/bluetooth-peripheral.js');Object.defineProperty(exports, 'createBLEPeripheralServer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBLEPeripheralServer; } });Object.defineProperty(exports, 'offBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEPeripheralConnectionStateChanged; } });Object.defineProperty(exports, 'onBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEPeripheralConnectionStateChanged; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/calendar.js');Object.defineProperty(exports, 'addPhoneCalendar', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneCalendar; } });Object.defineProperty(exports, 'addPhoneRepeatCalendar', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneRepeatCalendar; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/clipboard.js');Object.defineProperty(exports, 'getClipboardData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getClipboardData; } });Object.defineProperty(exports, 'setClipboardData', { enumerable: true, configurable: true, get: function() { return __TEMP__.setClipboardData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/compass.js');Object.defineProperty(exports, 'offCompassChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offCompassChange; } });Object.defineProperty(exports, 'onCompassChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onCompassChange; } });Object.defineProperty(exports, 'startCompass', { enumerable: true, configurable: true, get: function() { return __TEMP__.startCompass; } });Object.defineProperty(exports, 'stopCompass', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopCompass; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/contact.js');Object.defineProperty(exports, 'addPhoneContact', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneContact; } });Object.defineProperty(exports, 'chooseContact', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseContact; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/crypto.js');Object.defineProperty(exports, 'getRandomValues', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRandomValues; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/gyroscope.js');Object.defineProperty(exports, 'offGyroscopeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offGyroscopeChange; } });Object.defineProperty(exports, 'onGyroscopeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onGyroscopeChange; } });Object.defineProperty(exports, 'startGyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.startGyroscope; } });Object.defineProperty(exports, 'stopGyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopGyroscope; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/iBeacon.js');Object.defineProperty(exports, 'getBeacons', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBeacons; } });Object.defineProperty(exports, 'offBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBeaconServiceChange; } });Object.defineProperty(exports, 'offBeaconUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBeaconUpdate; } });Object.defineProperty(exports, 'onBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBeaconServiceChange; } });Object.defineProperty(exports, 'onBeaconUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBeaconUpdate; } });Object.defineProperty(exports, 'startBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startBeaconDiscovery; } });Object.defineProperty(exports, 'stopBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBeaconDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/keyboard.js');Object.defineProperty(exports, 'getSelectedTextRange', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSelectedTextRange; } });Object.defineProperty(exports, 'hideKeyboard', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideKeyboard; } });Object.defineProperty(exports, 'offKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offKeyboardHeightChange; } });Object.defineProperty(exports, 'onKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onKeyboardHeightChange; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/memory.js');Object.defineProperty(exports, 'offMemoryWarning', { enumerable: true, configurable: true, get: function() { return __TEMP__.offMemoryWarning; } });Object.defineProperty(exports, 'onMemoryWarning', { enumerable: true, configurable: true, get: function() { return __TEMP__.onMemoryWarning; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/motion.js');Object.defineProperty(exports, 'offDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offDeviceMotionChange; } });Object.defineProperty(exports, 'onDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onDeviceMotionChange; } });Object.defineProperty(exports, 'startDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return __TEMP__.startDeviceMotionListening; } });Object.defineProperty(exports, 'stopDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopDeviceMotionListening; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/network.js');Object.defineProperty(exports, 'getLocalIPAddress', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLocalIPAddress; } });Object.defineProperty(exports, 'getNetworkType', { enumerable: true, configurable: true, get: function() { return __TEMP__.getNetworkType; } });Object.defineProperty(exports, 'offNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offNetworkStatusChange; } });Object.defineProperty(exports, 'offNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offNetworkWeakChange; } });Object.defineProperty(exports, 'onNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onNetworkStatusChange; } });Object.defineProperty(exports, 'onNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onNetworkWeakChange; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/nfc.js');Object.defineProperty(exports, 'getHCEState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getHCEState; } });Object.defineProperty(exports, 'getNFCAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.getNFCAdapter; } });Object.defineProperty(exports, 'offHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.offHCEMessage; } });Object.defineProperty(exports, 'onHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.onHCEMessage; } });Object.defineProperty(exports, 'sendHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.sendHCEMessage; } });Object.defineProperty(exports, 'startHCE', { enumerable: true, configurable: true, get: function() { return __TEMP__.startHCE; } });Object.defineProperty(exports, 'stopHCE', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopHCE; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/phone.js');Object.defineProperty(exports, 'makePhoneCall', { enumerable: true, configurable: true, get: function() { return __TEMP__.makePhoneCall; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/scan.js');Object.defineProperty(exports, 'scanCode', { enumerable: true, configurable: true, get: function() { return __TEMP__.scanCode; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/screen.js');Object.defineProperty(exports, 'getScreenBrightness', { enumerable: true, configurable: true, get: function() { return __TEMP__.getScreenBrightness; } });Object.defineProperty(exports, 'offUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return __TEMP__.offUserCaptureScreen; } });Object.defineProperty(exports, 'onUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return __TEMP__.onUserCaptureScreen; } });Object.defineProperty(exports, 'setKeepScreenOn', { enumerable: true, configurable: true, get: function() { return __TEMP__.setKeepScreenOn; } });Object.defineProperty(exports, 'setScreenBrightness', { enumerable: true, configurable: true, get: function() { return __TEMP__.setScreenBrightness; } });Object.defineProperty(exports, 'setVisualEffectOnCapture', { enumerable: true, configurable: true, get: function() { return __TEMP__.setVisualEffectOnCapture; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/vibrate.js');Object.defineProperty(exports, 'vibrateLong', { enumerable: true, configurable: true, get: function() { return __TEMP__.vibrateLong; } });Object.defineProperty(exports, 'vibrateShort', { enumerable: true, configurable: true, get: function() { return __TEMP__.vibrateShort; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/device/wifi.js');Object.defineProperty(exports, 'connectWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.connectWifi; } });Object.defineProperty(exports, 'getConnectedWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.getConnectedWifi; } });Object.defineProperty(exports, 'getWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWifiList; } });Object.defineProperty(exports, 'offGetWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.offGetWifiList; } });Object.defineProperty(exports, 'offWifiConnected', { enumerable: true, configurable: true, get: function() { return __TEMP__.offWifiConnected; } });Object.defineProperty(exports, 'onGetWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.onGetWifiList; } });Object.defineProperty(exports, 'onWifiConnected', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWifiConnected; } });Object.defineProperty(exports, 'onWifiConnectedWithPartialInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWifiConnectedWithPartialInfo; } });Object.defineProperty(exports, 'setWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.setWifiList; } });Object.defineProperty(exports, 'startWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.startWifi; } });Object.defineProperty(exports, 'stopWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopWifi; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ext/index.js');Object.defineProperty(exports, 'getExtConfig', { enumerable: true, configurable: true, get: function() { return __TEMP__.getExtConfig; } });Object.defineProperty(exports, 'getExtConfigSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getExtConfigSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/files/index.js');Object.defineProperty(exports, 'getFileInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getFileInfo; } });Object.defineProperty(exports, 'getFileSystemManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getFileSystemManager; } });Object.defineProperty(exports, 'getSavedFileInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSavedFileInfo; } });Object.defineProperty(exports, 'getSavedFileList', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSavedFileList; } });Object.defineProperty(exports, 'openDocument', { enumerable: true, configurable: true, get: function() { return __TEMP__.openDocument; } });Object.defineProperty(exports, 'removeSavedFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeSavedFile; } });Object.defineProperty(exports, 'saveFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveFile; } });Object.defineProperty(exports, 'saveFileToDisk', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveFileToDisk; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@tarojs/router');Object.defineProperty(exports, 'getCurrentPages', { enumerable: true, configurable: true, get: function() { return __TEMP__.getCurrentPages; } });Object.defineProperty(exports, 'history', { enumerable: true, configurable: true, get: function() { return __TEMP__.history; } });Object.defineProperty(exports, 'navigateBack', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBack; } });Object.defineProperty(exports, 'navigateTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateTo; } });Object.defineProperty(exports, 'reLaunch', { enumerable: true, configurable: true, get: function() { return __TEMP__.reLaunch; } });Object.defineProperty(exports, 'redirectTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.redirectTo; } });Object.defineProperty(exports, 'switchTab', { enumerable: true, configurable: true, get: function() { return __TEMP__.switchTab; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/framework/index.js');Object.defineProperty(exports, 'getApp', { enumerable: true, configurable: true, get: function() { return __TEMP__.getApp; } });Object.defineProperty(exports, 'getCurrentInstance', { enumerable: true, configurable: true, get: function() { return __TEMP__.getCurrentInstance; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/location/getLocation.js');Object.defineProperty(exports, 'getLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLocation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/location/chooseLocation.js');Object.defineProperty(exports, 'chooseLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseLocation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/location/index.js');Object.defineProperty(exports, 'choosePoi', { enumerable: true, configurable: true, get: function() { return __TEMP__.choosePoi; } });Object.defineProperty(exports, 'getFuzzyLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.getFuzzyLocation; } });Object.defineProperty(exports, 'offLocationChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocationChange; } });Object.defineProperty(exports, 'offLocationChangeError', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocationChangeError; } });Object.defineProperty(exports, 'onLocationChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocationChange; } });Object.defineProperty(exports, 'onLocationChangeError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocationChangeError; } });Object.defineProperty(exports, 'openLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.openLocation; } });Object.defineProperty(exports, 'startLocationUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocationUpdate; } });Object.defineProperty(exports, 'startLocationUpdateBackground', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocationUpdateBackground; } });Object.defineProperty(exports, 'stopLocationUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopLocationUpdate; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/audio/index.js');Object.defineProperty(exports, 'createAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createAudioContext; } });Object.defineProperty(exports, 'createInnerAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createInnerAudioContext; } });Object.defineProperty(exports, 'createMediaAudioPlayer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaAudioPlayer; } });Object.defineProperty(exports, 'createWebAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createWebAudioContext; } });Object.defineProperty(exports, 'getAvailableAudioSources', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAvailableAudioSources; } });Object.defineProperty(exports, 'pauseVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.pauseVoice; } });Object.defineProperty(exports, 'playVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.playVoice; } });Object.defineProperty(exports, 'setInnerAudioOption', { enumerable: true, configurable: true, get: function() { return __TEMP__.setInnerAudioOption; } });Object.defineProperty(exports, 'stopVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopVoice; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/background-audio/index.js');Object.defineProperty(exports, 'getBackgroundAudioManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundAudioManager; } });Object.defineProperty(exports, 'getBackgroundAudioPlayerState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundAudioPlayerState; } });Object.defineProperty(exports, 'onBackgroundAudioPause', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioPause; } });Object.defineProperty(exports, 'onBackgroundAudioPlay', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioPlay; } });Object.defineProperty(exports, 'onBackgroundAudioStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioStop; } });Object.defineProperty(exports, 'pauseBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.pauseBackgroundAudio; } });Object.defineProperty(exports, 'playBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.playBackgroundAudio; } });Object.defineProperty(exports, 'seekBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.seekBackgroundAudio; } });Object.defineProperty(exports, 'stopBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBackgroundAudio; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/camera.js');Object.defineProperty(exports, 'createCameraContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createCameraContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/image/getImageInfo.js');Object.defineProperty(exports, 'getImageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getImageInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/image/previewImage.js');Object.defineProperty(exports, 'previewImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewImage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/image/chooseImage.js');Object.defineProperty(exports, 'chooseImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseImage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/image/index.js');Object.defineProperty(exports, 'chooseMessageFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseMessageFile; } });Object.defineProperty(exports, 'compressImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.compressImage; } });Object.defineProperty(exports, 'previewMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewMedia; } });Object.defineProperty(exports, 'saveImageToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveImageToPhotosAlbum; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/live.js');Object.defineProperty(exports, 'createLivePlayerContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createLivePlayerContext; } });Object.defineProperty(exports, 'createLivePusherContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createLivePusherContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/map.js');Object.defineProperty(exports, 'createMapContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMapContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/media-recorder.js');Object.defineProperty(exports, 'createMediaRecorder', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaRecorder; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/recorder.js');Object.defineProperty(exports, 'getRecorderManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRecorderManager; } });Object.defineProperty(exports, 'startRecord', { enumerable: true, configurable: true, get: function() { return __TEMP__.startRecord; } });Object.defineProperty(exports, 'stopRecord', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopRecord; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/video/index.js');Object.defineProperty(exports, 'chooseMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseMedia; } });Object.defineProperty(exports, 'chooseVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseVideo; } });Object.defineProperty(exports, 'compressVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.compressVideo; } });Object.defineProperty(exports, 'createVideoContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoContext; } });Object.defineProperty(exports, 'getVideoInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getVideoInfo; } });Object.defineProperty(exports, 'openVideoEditor', { enumerable: true, configurable: true, get: function() { return __TEMP__.openVideoEditor; } });Object.defineProperty(exports, 'saveVideoToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveVideoToPhotosAlbum; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/video-decoder.js');Object.defineProperty(exports, 'createVideoDecoder', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoDecoder; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/video-processing.js');Object.defineProperty(exports, 'createMediaContainer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaContainer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/media/voip.js');Object.defineProperty(exports, 'exitVoIPChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.exitVoIPChat; } });Object.defineProperty(exports, 'joinVoIPChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.joinVoIPChat; } });Object.defineProperty(exports, 'offVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatInterrupted; } });Object.defineProperty(exports, 'offVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatMembersChanged; } });Object.defineProperty(exports, 'offVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatStateChanged; } });Object.defineProperty(exports, 'offVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatInterrupted; } });Object.defineProperty(exports, 'onVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatSpeakersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatSpeakersChanged; } });Object.defineProperty(exports, 'onVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatStateChanged; } });Object.defineProperty(exports, 'onVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'setEnable1v1Chat', { enumerable: true, configurable: true, get: function() { return __TEMP__.setEnable1v1Chat; } });Object.defineProperty(exports, 'subscribeVoIPVideoMembers', { enumerable: true, configurable: true, get: function() { return __TEMP__.subscribeVoIPVideoMembers; } });Object.defineProperty(exports, 'updateVoIPChatMuteConfig', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateVoIPChatMuteConfig; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/navigate/index.js');Object.defineProperty(exports, 'exitMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.exitMiniProgram; } });Object.defineProperty(exports, 'navigateBackMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBackMiniProgram; } });Object.defineProperty(exports, 'navigateToMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateToMiniProgram; } });Object.defineProperty(exports, 'openBusinessView', { enumerable: true, configurable: true, get: function() { return __TEMP__.openBusinessView; } });Object.defineProperty(exports, 'openEmbeddedMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.openEmbeddedMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/download.js');Object.defineProperty(exports, 'downloadFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.downloadFile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/mdns.js');Object.defineProperty(exports, 'offLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'offLocalServiceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceFound; } });Object.defineProperty(exports, 'offLocalServiceLost', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceLost; } });Object.defineProperty(exports, 'offLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceResolveFail; } });Object.defineProperty(exports, 'onLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'onLocalServiceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceFound; } });Object.defineProperty(exports, 'onLocalServiceLost', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceLost; } });Object.defineProperty(exports, 'onLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceResolveFail; } });Object.defineProperty(exports, 'startLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocalServiceDiscovery; } });Object.defineProperty(exports, 'stopLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopLocalServiceDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/request/index.js');Object.defineProperty(exports, 'addInterceptor', { enumerable: true, configurable: true, get: function() { return __TEMP__.addInterceptor; } });Object.defineProperty(exports, 'request', { enumerable: true, configurable: true, get: function() { return __TEMP__.request; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/tcp.js');Object.defineProperty(exports, 'createTCPSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.createTCPSocket; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/udp.js');Object.defineProperty(exports, 'createUDPSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.createUDPSocket; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/upload.js');Object.defineProperty(exports, 'uploadFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.uploadFile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/network/websocket/index.js');Object.defineProperty(exports, 'closeSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeSocket; } });Object.defineProperty(exports, 'connectSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.connectSocket; } });Object.defineProperty(exports, 'onSocketClose', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketClose; } });Object.defineProperty(exports, 'onSocketError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketError; } });Object.defineProperty(exports, 'onSocketMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketMessage; } });Object.defineProperty(exports, 'onSocketOpen', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketOpen; } });Object.defineProperty(exports, 'sendSocketMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.sendSocketMessage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/account.js');Object.defineProperty(exports, 'getAccountInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAccountInfoSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/address.js');Object.defineProperty(exports, 'chooseAddress', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseAddress; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/authorize.js');Object.defineProperty(exports, 'authorize', { enumerable: true, configurable: true, get: function() { return __TEMP__.authorize; } });Object.defineProperty(exports, 'authorizeForMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.authorizeForMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/card.js');Object.defineProperty(exports, 'addCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.addCard; } });Object.defineProperty(exports, 'openCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.openCard; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/channels-live.js');Object.defineProperty(exports, 'getChannelsLiveInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getChannelsLiveInfo; } });Object.defineProperty(exports, 'getChannelsLiveNoticeInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getChannelsLiveNoticeInfo; } });Object.defineProperty(exports, 'openChannelsActivity', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsActivity; } });Object.defineProperty(exports, 'openChannelsEvent', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsEvent; } });Object.defineProperty(exports, 'openChannelsLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsLive; } });Object.defineProperty(exports, 'reserveChannelsLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.reserveChannelsLive; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/customer-service.js');Object.defineProperty(exports, 'openCustomerServiceChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.openCustomerServiceChat; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/facial.js');Object.defineProperty(exports, 'checkIsSupportFacialRecognition', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSupportFacialRecognition; } });Object.defineProperty(exports, 'faceVerifyForPay', { enumerable: true, configurable: true, get: function() { return __TEMP__.faceVerifyForPay; } });Object.defineProperty(exports, 'startFacialRecognitionVerify', { enumerable: true, configurable: true, get: function() { return __TEMP__.startFacialRecognitionVerify; } });Object.defineProperty(exports, 'startFacialRecognitionVerifyAndUploadVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.startFacialRecognitionVerifyAndUploadVideo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/favorites.js');Object.defineProperty(exports, 'addFileToFavorites', { enumerable: true, configurable: true, get: function() { return __TEMP__.addFileToFavorites; } });Object.defineProperty(exports, 'addVideoToFavorites', { enumerable: true, configurable: true, get: function() { return __TEMP__.addVideoToFavorites; } });Object.defineProperty(exports, 'checkIsAddedToMyMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsAddedToMyMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/group.js');Object.defineProperty(exports, 'getGroupEnterInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getGroupEnterInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/invoice.js');Object.defineProperty(exports, 'chooseInvoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseInvoice; } });Object.defineProperty(exports, 'chooseInvoiceTitle', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseInvoiceTitle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/license-plate.js');Object.defineProperty(exports, 'chooseLicensePlate', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseLicensePlate; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/login.js');Object.defineProperty(exports, 'checkSession', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkSession; } });Object.defineProperty(exports, 'login', { enumerable: true, configurable: true, get: function() { return __TEMP__.login; } });Object.defineProperty(exports, 'pluginLogin', { enumerable: true, configurable: true, get: function() { return __TEMP__.pluginLogin; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/red-package.js');Object.defineProperty(exports, 'showRedPackage', { enumerable: true, configurable: true, get: function() { return __TEMP__.showRedPackage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/settings.js');Object.defineProperty(exports, 'getSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSetting; } });Object.defineProperty(exports, 'openSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openSetting; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/soter.js');Object.defineProperty(exports, 'checkIsSoterEnrolledInDevice', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSoterEnrolledInDevice; } });Object.defineProperty(exports, 'checkIsSupportSoterAuthentication', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSupportSoterAuthentication; } });Object.defineProperty(exports, 'startSoterAuthentication', { enumerable: true, configurable: true, get: function() { return __TEMP__.startSoterAuthentication; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/subscribe-message.js');Object.defineProperty(exports, 'requestSubscribeMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestSubscribeMessage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/user-info.js');Object.defineProperty(exports, 'getUserInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserInfo; } });Object.defineProperty(exports, 'getUserProfile', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserProfile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/open-api/werun.js');Object.defineProperty(exports, 'getWeRunData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWeRunData; } });Object.defineProperty(exports, 'shareToWeRun', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareToWeRun; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/payment/index.js');Object.defineProperty(exports, 'requestOrderPayment', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestOrderPayment; } });Object.defineProperty(exports, 'requestPayment', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestPayment; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/share/index.js');Object.defineProperty(exports, 'authPrivateMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.authPrivateMessage; } });Object.defineProperty(exports, 'getShareInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getShareInfo; } });Object.defineProperty(exports, 'hideShareMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideShareMenu; } });Object.defineProperty(exports, 'offCopyUrl', { enumerable: true, configurable: true, get: function() { return __TEMP__.offCopyUrl; } });Object.defineProperty(exports, 'onCopyUrl', { enumerable: true, configurable: true, get: function() { return __TEMP__.onCopyUrl; } });Object.defineProperty(exports, 'shareFileMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareFileMessage; } });Object.defineProperty(exports, 'shareVideoMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareVideoMessage; } });Object.defineProperty(exports, 'showShareImageMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.showShareImageMenu; } });Object.defineProperty(exports, 'showShareMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.showShareMenu; } });Object.defineProperty(exports, 'updateShareMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateShareMenu; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/storage/background-fetch.js');Object.defineProperty(exports, 'getBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundFetchData; } });Object.defineProperty(exports, 'getBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundFetchToken; } });Object.defineProperty(exports, 'onBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundFetchData; } });Object.defineProperty(exports, 'setBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundFetchToken; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/storage/index.js');Object.defineProperty(exports, 'clearStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.clearStorage; } });Object.defineProperty(exports, 'clearStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.clearStorageSync; } });Object.defineProperty(exports, 'createBufferURL', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBufferURL; } });Object.defineProperty(exports, 'getStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorage; } });Object.defineProperty(exports, 'getStorageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorageInfo; } });Object.defineProperty(exports, 'getStorageInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorageInfoSync; } });Object.defineProperty(exports, 'getStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorageSync; } });Object.defineProperty(exports, 'removeStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeStorage; } });Object.defineProperty(exports, 'removeStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeStorageSync; } });Object.defineProperty(exports, 'revokeBufferURL', { enumerable: true, configurable: true, get: function() { return __TEMP__.revokeBufferURL; } });Object.defineProperty(exports, 'setStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.setStorage; } });Object.defineProperty(exports, 'setStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.setStorageSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/swan/index.js');Object.defineProperty(exports, 'advancedGeneralIdentify', { enumerable: true, configurable: true, get: function() { return __TEMP__.advancedGeneralIdentify; } });Object.defineProperty(exports, 'animalClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.animalClassify; } });Object.defineProperty(exports, 'carClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.carClassify; } });Object.defineProperty(exports, 'dishClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.dishClassify; } });Object.defineProperty(exports, 'getSwanId', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSwanId; } });Object.defineProperty(exports, 'imageAudit', { enumerable: true, configurable: true, get: function() { return __TEMP__.imageAudit; } });Object.defineProperty(exports, 'logoClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.logoClassify; } });Object.defineProperty(exports, 'navigateBackSmartProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBackSmartProgram; } });Object.defineProperty(exports, 'navigateToSmartGameProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateToSmartGameProgram; } });Object.defineProperty(exports, 'navigateToSmartProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateToSmartProgram; } });Object.defineProperty(exports, 'objectDetectIdentify', { enumerable: true, configurable: true, get: function() { return __TEMP__.objectDetectIdentify; } });Object.defineProperty(exports, 'ocrBankCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrBankCard; } });Object.defineProperty(exports, 'ocrDrivingLicense', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrDrivingLicense; } });Object.defineProperty(exports, 'ocrIdCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrIdCard; } });Object.defineProperty(exports, 'ocrVehicleLicense', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrVehicleLicense; } });Object.defineProperty(exports, 'plantClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.plantClassify; } });Object.defineProperty(exports, 'preloadSubPackage', { enumerable: true, configurable: true, get: function() { return __TEMP__.preloadSubPackage; } });Object.defineProperty(exports, 'requestPolymerPayment', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestPolymerPayment; } });Object.defineProperty(exports, 'setPageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.setPageInfo; } });Object.defineProperty(exports, 'textReview', { enumerable: true, configurable: true, get: function() { return __TEMP__.textReview; } });Object.defineProperty(exports, 'textToAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.textToAudio; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/animation/index.js');Object.defineProperty(exports, 'createAnimation', { enumerable: true, configurable: true, get: function() { return __TEMP__.createAnimation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/background.js');Object.defineProperty(exports, 'setBackgroundColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundColor; } });Object.defineProperty(exports, 'setBackgroundTextStyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundTextStyle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/custom-component.js');Object.defineProperty(exports, 'nextTick', { enumerable: true, configurable: true, get: function() { return __TEMP__.nextTick; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/fonts.js');Object.defineProperty(exports, 'loadFontFace', { enumerable: true, configurable: true, get: function() { return __TEMP__.loadFontFace; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/interaction/index.js');Object.defineProperty(exports, 'disableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return __TEMP__.disableAlertBeforeUnload; } });Object.defineProperty(exports, 'enableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return __TEMP__.enableAlertBeforeUnload; } });Object.defineProperty(exports, 'hideLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideLoading; } });Object.defineProperty(exports, 'hideToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideToast; } });Object.defineProperty(exports, 'showActionSheet', { enumerable: true, configurable: true, get: function() { return __TEMP__.showActionSheet; } });Object.defineProperty(exports, 'showLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showLoading; } });Object.defineProperty(exports, 'showModal', { enumerable: true, configurable: true, get: function() { return __TEMP__.showModal; } });Object.defineProperty(exports, 'showToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.showToast; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/menu.js');Object.defineProperty(exports, 'getMenuButtonBoundingClientRect', { enumerable: true, configurable: true, get: function() { return __TEMP__.getMenuButtonBoundingClientRect; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/navigation-bar/index.js');Object.defineProperty(exports, 'hideHomeButton', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideHomeButton; } });Object.defineProperty(exports, 'hideNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideNavigationBarLoading; } });Object.defineProperty(exports, 'setNavigationBarColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.setNavigationBarColor; } });Object.defineProperty(exports, 'setNavigationBarTitle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setNavigationBarTitle; } });Object.defineProperty(exports, 'showNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showNavigationBarLoading; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/pull-down-refresh.js');Object.defineProperty(exports, 'startPullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.startPullDownRefresh; } });Object.defineProperty(exports, 'stopPullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopPullDownRefresh; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/scroll/index.js');Object.defineProperty(exports, 'pageScrollTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.pageScrollTo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/sticky.js');Object.defineProperty(exports, 'setTopBarText', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTopBarText; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/tab-bar.js');Object.defineProperty(exports, 'hideTabBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideTabBar; } });Object.defineProperty(exports, 'hideTabBarRedDot', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideTabBarRedDot; } });Object.defineProperty(exports, 'initTabBarApis', { enumerable: true, configurable: true, get: function() { return __TEMP__.initTabBarApis; } });Object.defineProperty(exports, 'removeTabBarBadge', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeTabBarBadge; } });Object.defineProperty(exports, 'setTabBarBadge', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarBadge; } });Object.defineProperty(exports, 'setTabBarItem', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarItem; } });Object.defineProperty(exports, 'setTabBarStyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarStyle; } });Object.defineProperty(exports, 'showTabBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.showTabBar; } });Object.defineProperty(exports, 'showTabBarRedDot', { enumerable: true, configurable: true, get: function() { return __TEMP__.showTabBarRedDot; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/ui/window.js');Object.defineProperty(exports, 'offWindowResize', { enumerable: true, configurable: true, get: function() { return __TEMP__.offWindowResize; } });Object.defineProperty(exports, 'onWindowResize', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWindowResize; } });Object.defineProperty(exports, 'setWindowSize', { enumerable: true, configurable: true, get: function() { return __TEMP__.setWindowSize; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/worker/index.js');Object.defineProperty(exports, 'createWorker', { enumerable: true, configurable: true, get: function() { return __TEMP__.createWorker; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./api/wxml/index.js');Object.defineProperty(exports, 'createIntersectionObserver', { enumerable: true, configurable: true, get: function() { return __TEMP__.createIntersectionObserver; } });Object.defineProperty(exports, 'createMediaQueryObserver', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaQueryObserver; } });Object.defineProperty(exports, 'createSelectorQuery', { enumerable: true, configurable: true, get: function() { return __TEMP__.createSelectorQuery; } });
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./api/taro.js":1680223929668,"./api/index.js":1680223929669,"./api/ad/index.js":1680223929670,"./api/ai/facial.js":1680223929677,"./api/ai/visual.js":1680223929678,"./api/alipay/index.js":1680223929679,"./api/base/crypto.js":1680223929681,"./api/base/debug.js":1680223929682,"./api/base/performance.js":1680223929683,"./api/base/system.js":1680223929684,"./api/base/update.js":1680223929686,"./api/base/weapp/app-event.js":1680223929687,"./api/base/weapp/life-cycle.js":1680223929688,"./api/base/index.js":1680223929680,"./api/canvas/createCanvasContext.js":1680223929690,"./api/canvas/canvasToTempFilePath.js":1680223929692,"./api/canvas/canvasPutImageData.js":1680223929693,"./api/canvas/canvasGetImageData.js":1680223929694,"./api/canvas/index.js":1680223929689,"./api/cloud/index.js":1680223929695,"./api/data-analysis/index.js":1680223929696,"./api/device/accelerometer.js":1680223929698,"./api/device/accessibility.js":1680223929699,"./api/device/battery.js":1680223929700,"./api/device/bluetooth.js":1680223929701,"./api/device/bluetooth-ble.js":1680223929702,"./api/device/bluetooth-peripheral.js":1680223929703,"./api/device/calendar.js":1680223929704,"./api/device/clipboard.js":1680223929705,"./api/device/compass.js":1680223929708,"./api/device/contact.js":1680223929709,"./api/device/crypto.js":1680223929710,"./api/device/gyroscope.js":1680223929711,"./api/device/iBeacon.js":1680223929712,"./api/device/keyboard.js":1680223929713,"./api/device/memory.js":1680223929714,"./api/device/motion.js":1680223929715,"./api/device/network.js":1680223929716,"./api/device/nfc.js":1680223929717,"./api/device/phone.js":1680223929718,"./api/device/scan.js":1680223929719,"./api/device/screen.js":1680223929720,"./api/device/vibrate.js":1680223929721,"./api/device/wifi.js":1680223929722,"./api/ext/index.js":1680223929723,"./api/files/index.js":1680223929724,"./api/framework/index.js":1680223929725,"./api/location/getLocation.js":1680223929727,"./api/location/chooseLocation.js":1680223929728,"./api/location/index.js":1680223929726,"./api/media/audio/index.js":1680223929732,"./api/media/background-audio/index.js":1680223929734,"./api/media/camera.js":1680223929736,"./api/media/image/getImageInfo.js":1680223929738,"./api/media/image/previewImage.js":1680223929739,"./api/media/image/chooseImage.js":1680223929740,"./api/media/image/index.js":1680223929737,"./api/media/live.js":1680223929741,"./api/media/map.js":1680223929742,"./api/media/media-recorder.js":1680223929743,"./api/media/recorder.js":1680223929744,"./api/media/video/index.js":1680223929745,"./api/media/video-decoder.js":1680223929746,"./api/media/video-processing.js":1680223929747,"./api/media/voip.js":1680223929748,"./api/navigate/index.js":1680223929749,"./api/network/download.js":1680223929751,"./api/network/mdns.js":1680223929753,"./api/network/request/index.js":1680223929754,"./api/network/tcp.js":1680223929755,"./api/network/udp.js":1680223929756,"./api/network/upload.js":1680223929757,"./api/network/websocket/index.js":1680223929758,"./api/open-api/account.js":1680223929761,"./api/open-api/address.js":1680223929762,"./api/open-api/authorize.js":1680223929763,"./api/open-api/card.js":1680223929764,"./api/open-api/channels-live.js":1680223929765,"./api/open-api/customer-service.js":1680223929766,"./api/open-api/facial.js":1680223929767,"./api/open-api/favorites.js":1680223929768,"./api/open-api/group.js":1680223929769,"./api/open-api/invoice.js":1680223929770,"./api/open-api/license-plate.js":1680223929771,"./api/open-api/login.js":1680223929772,"./api/open-api/red-package.js":1680223929773,"./api/open-api/settings.js":1680223929774,"./api/open-api/soter.js":1680223929775,"./api/open-api/subscribe-message.js":1680223929776,"./api/open-api/user-info.js":1680223929777,"./api/open-api/werun.js":1680223929778,"./api/payment/index.js":1680223929779,"./api/share/index.js":1680223929781,"./api/storage/background-fetch.js":1680223929707,"./api/storage/index.js":1680223929706,"./api/swan/index.js":1680223929782,"./api/ui/animation/index.js":1680223929784,"./api/ui/background.js":1680223929785,"./api/ui/custom-component.js":1680223929786,"./api/ui/fonts.js":1680223929787,"./api/ui/interaction/index.js":1680223929788,"./api/ui/menu.js":1680223929792,"./api/ui/navigation-bar/index.js":1680223929793,"./api/ui/pull-down-refresh.js":1680223929794,"./api/ui/scroll/index.js":1680223929795,"./api/ui/sticky.js":1680223929796,"./api/ui/tab-bar.js":1680223929797,"./api/ui/window.js":1680223929798,"./api/worker/index.js":1680223929799,"./api/wxml/index.js":1680223929800}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929668, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@tarojs/router');var history = __TEMP__['history'];var navigateBack = __TEMP__['navigateBack'];var navigateTo = __TEMP__['navigateTo'];var reLaunch = __TEMP__['reLaunch'];var redirectTo = __TEMP__['redirectTo'];var getCurrentPages = __TEMP__['getCurrentPages'];var switchTab = __TEMP__['switchTab'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@tarojs/router');Object.defineProperty(exports, 'history', { enumerable: true, configurable: true, get: function() { return __TEMP__.history; } });
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('./index.js');
var __TEMP__ = require('../utils/index.js');var permanentlyNotSupport = __TEMP__['permanentlyNotSupport'];
var __TEMP__ = require('./framework/index.js');var getCurrentInstance = __TEMP__['getCurrentInstance'];var getApp = __TEMP__['getApp'];
var __TEMP__ = require('./ui/custom-component.js');var nextTick = __TEMP__['nextTick'];

const { Behavior, getEnv, ENV_TYPE, Link, interceptors, getInitPxTransform, Current, options, eventCenter, Events, preload } = Taro;
const taro = {
    // @ts-ignore
    Behavior,
    getEnv,
    ENV_TYPE,
    Link,
    interceptors,
    Current,
    getCurrentInstance,
    options,
    nextTick,
    eventCenter,
    Events,
    preload,
    history,
    navigateBack,
    navigateTo,
    reLaunch,
    redirectTo,
    getCurrentPages,
    switchTab
};
const initPxTransform = getInitPxTransform(taro);
const requirePlugin = permanentlyNotSupport('requirePlugin');
const pxTransform = function (size) {
    const config = taro.config;
    const baseFontSize = config.baseFontSize || 20;
    const designWidth = (((input = 0) => isFunction(config.designWidth)
        ? config.designWidth(input)
        : config.designWidth))(size);
    const rootValue = baseFontSize / config.deviceRatio[designWidth] * 2;
    return Math.ceil((parseInt(size, 10) / rootValue) * 10000) / 10000 + 'rem';
};
const canIUseWebp = function () {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
taro.requirePlugin = requirePlugin;
taro.getApp = getApp;
taro.pxTransform = pxTransform;
taro.initPxTransform = initPxTransform;
// @ts-ignore
taro.canIUseWebp = canIUseWebp;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Behavior', { enumerable: true, configurable: true, get: function() { return Behavior; } });Object.defineProperty(exports, 'Current', { enumerable: true, configurable: true, get: function() { return Current; } });Object.defineProperty(exports, 'ENV_TYPE', { enumerable: true, configurable: true, get: function() { return ENV_TYPE; } });Object.defineProperty(exports, 'Events', { enumerable: true, configurable: true, get: function() { return Events; } });Object.defineProperty(exports, 'Link', { enumerable: true, configurable: true, get: function() { return Link; } });Object.defineProperty(exports, 'canIUseWebp', { enumerable: true, configurable: true, get: function() { return canIUseWebp; } });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return taro; } });Object.defineProperty(exports, 'eventCenter', { enumerable: true, configurable: true, get: function() { return eventCenter; } });Object.defineProperty(exports, 'getEnv', { enumerable: true, configurable: true, get: function() { return getEnv; } });Object.defineProperty(exports, 'initPxTransform', { enumerable: true, configurable: true, get: function() { return initPxTransform; } });Object.defineProperty(exports, 'interceptors', { enumerable: true, configurable: true, get: function() { return interceptors; } });Object.defineProperty(exports, 'options', { enumerable: true, configurable: true, get: function() { return options; } });Object.defineProperty(exports, 'preload', { enumerable: true, configurable: true, get: function() { return preload; } });Object.defineProperty(exports, 'pxTransform', { enumerable: true, configurable: true, get: function() { return pxTransform; } });Object.defineProperty(exports, 'requirePlugin', { enumerable: true, configurable: true, get: function() { return requirePlugin; } });
//# sourceMappingURL=taro.js.map

}, function(modId) { var map = {"./index.js":1680223929669,"../utils/index.js":1680223929671,"./framework/index.js":1680223929725,"./ui/custom-component.js":1680223929786}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929669, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ad/index.js');Object.defineProperty(exports, 'createInterstitialAd', { enumerable: true, configurable: true, get: function() { return __TEMP__.createInterstitialAd; } });Object.defineProperty(exports, 'createRewardedVideoAd', { enumerable: true, configurable: true, get: function() { return __TEMP__.createRewardedVideoAd; } });
var __TEMP__ = require('./ai/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./alipay/index.js');Object.defineProperty(exports, 'getOpenUserInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getOpenUserInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/index.js');Object.defineProperty(exports, 'arrayBufferToBase64', { enumerable: true, configurable: true, get: function() { return __TEMP__.arrayBufferToBase64; } });Object.defineProperty(exports, 'base64ToArrayBuffer', { enumerable: true, configurable: true, get: function() { return __TEMP__.base64ToArrayBuffer; } });Object.defineProperty(exports, 'canIUse', { enumerable: true, configurable: true, get: function() { return __TEMP__.canIUse; } });Object.defineProperty(exports, 'env', { enumerable: true, configurable: true, get: function() { return __TEMP__.env; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvas/index.js');Object.defineProperty(exports, 'createOffscreenCanvas', { enumerable: true, configurable: true, get: function() { return __TEMP__.createOffscreenCanvas; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./cloud/index.js');Object.defineProperty(exports, 'cloud', { enumerable: true, configurable: true, get: function() { return __TEMP__.cloud; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./data-analysis/index.js');Object.defineProperty(exports, 'getExptInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getExptInfoSync; } });Object.defineProperty(exports, 'reportAnalytics', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportAnalytics; } });Object.defineProperty(exports, 'reportEvent', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportEvent; } });Object.defineProperty(exports, 'reportMonitor', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportMonitor; } });
var __TEMP__ = require('./device/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ext/index.js');Object.defineProperty(exports, 'getExtConfig', { enumerable: true, configurable: true, get: function() { return __TEMP__.getExtConfig; } });Object.defineProperty(exports, 'getExtConfigSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getExtConfigSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./files/index.js');Object.defineProperty(exports, 'getFileInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getFileInfo; } });Object.defineProperty(exports, 'getFileSystemManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getFileSystemManager; } });Object.defineProperty(exports, 'getSavedFileInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSavedFileInfo; } });Object.defineProperty(exports, 'getSavedFileList', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSavedFileList; } });Object.defineProperty(exports, 'openDocument', { enumerable: true, configurable: true, get: function() { return __TEMP__.openDocument; } });Object.defineProperty(exports, 'removeSavedFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeSavedFile; } });Object.defineProperty(exports, 'saveFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveFile; } });Object.defineProperty(exports, 'saveFileToDisk', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveFileToDisk; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./framework/index.js');Object.defineProperty(exports, 'getApp', { enumerable: true, configurable: true, get: function() { return __TEMP__.getApp; } });Object.defineProperty(exports, 'getCurrentInstance', { enumerable: true, configurable: true, get: function() { return __TEMP__.getCurrentInstance; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./location/index.js');Object.defineProperty(exports, 'choosePoi', { enumerable: true, configurable: true, get: function() { return __TEMP__.choosePoi; } });Object.defineProperty(exports, 'getFuzzyLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.getFuzzyLocation; } });Object.defineProperty(exports, 'offLocationChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocationChange; } });Object.defineProperty(exports, 'offLocationChangeError', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocationChangeError; } });Object.defineProperty(exports, 'onLocationChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocationChange; } });Object.defineProperty(exports, 'onLocationChangeError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocationChangeError; } });Object.defineProperty(exports, 'openLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.openLocation; } });Object.defineProperty(exports, 'startLocationUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocationUpdate; } });Object.defineProperty(exports, 'startLocationUpdateBackground', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocationUpdateBackground; } });Object.defineProperty(exports, 'stopLocationUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopLocationUpdate; } });
var __TEMP__ = require('./media/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./navigate/index.js');Object.defineProperty(exports, 'exitMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.exitMiniProgram; } });Object.defineProperty(exports, 'navigateBackMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBackMiniProgram; } });Object.defineProperty(exports, 'navigateToMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateToMiniProgram; } });Object.defineProperty(exports, 'openBusinessView', { enumerable: true, configurable: true, get: function() { return __TEMP__.openBusinessView; } });Object.defineProperty(exports, 'openEmbeddedMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.openEmbeddedMiniProgram; } });
var __TEMP__ = require('./network/index.js');
var __TEMP__ = require('./open-api/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./payment/index.js');Object.defineProperty(exports, 'requestOrderPayment', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestOrderPayment; } });Object.defineProperty(exports, 'requestPayment', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestPayment; } });
var __TEMP__ = require('./route/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./share/index.js');Object.defineProperty(exports, 'authPrivateMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.authPrivateMessage; } });Object.defineProperty(exports, 'getShareInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getShareInfo; } });Object.defineProperty(exports, 'hideShareMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideShareMenu; } });Object.defineProperty(exports, 'offCopyUrl', { enumerable: true, configurable: true, get: function() { return __TEMP__.offCopyUrl; } });Object.defineProperty(exports, 'onCopyUrl', { enumerable: true, configurable: true, get: function() { return __TEMP__.onCopyUrl; } });Object.defineProperty(exports, 'shareFileMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareFileMessage; } });Object.defineProperty(exports, 'shareVideoMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareVideoMessage; } });Object.defineProperty(exports, 'showShareImageMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.showShareImageMenu; } });Object.defineProperty(exports, 'showShareMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.showShareMenu; } });Object.defineProperty(exports, 'updateShareMenu', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateShareMenu; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./storage/index.js');Object.defineProperty(exports, 'clearStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.clearStorage; } });Object.defineProperty(exports, 'clearStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.clearStorageSync; } });Object.defineProperty(exports, 'createBufferURL', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBufferURL; } });Object.defineProperty(exports, 'getStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorage; } });Object.defineProperty(exports, 'getStorageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorageInfo; } });Object.defineProperty(exports, 'getStorageInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorageInfoSync; } });Object.defineProperty(exports, 'getStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getStorageSync; } });Object.defineProperty(exports, 'removeStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeStorage; } });Object.defineProperty(exports, 'removeStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeStorageSync; } });Object.defineProperty(exports, 'revokeBufferURL', { enumerable: true, configurable: true, get: function() { return __TEMP__.revokeBufferURL; } });Object.defineProperty(exports, 'setStorage', { enumerable: true, configurable: true, get: function() { return __TEMP__.setStorage; } });Object.defineProperty(exports, 'setStorageSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.setStorageSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./swan/index.js');Object.defineProperty(exports, 'advancedGeneralIdentify', { enumerable: true, configurable: true, get: function() { return __TEMP__.advancedGeneralIdentify; } });Object.defineProperty(exports, 'animalClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.animalClassify; } });Object.defineProperty(exports, 'carClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.carClassify; } });Object.defineProperty(exports, 'dishClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.dishClassify; } });Object.defineProperty(exports, 'getSwanId', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSwanId; } });Object.defineProperty(exports, 'imageAudit', { enumerable: true, configurable: true, get: function() { return __TEMP__.imageAudit; } });Object.defineProperty(exports, 'logoClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.logoClassify; } });Object.defineProperty(exports, 'navigateBackSmartProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBackSmartProgram; } });Object.defineProperty(exports, 'navigateToSmartGameProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateToSmartGameProgram; } });Object.defineProperty(exports, 'navigateToSmartProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateToSmartProgram; } });Object.defineProperty(exports, 'objectDetectIdentify', { enumerable: true, configurable: true, get: function() { return __TEMP__.objectDetectIdentify; } });Object.defineProperty(exports, 'ocrBankCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrBankCard; } });Object.defineProperty(exports, 'ocrDrivingLicense', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrDrivingLicense; } });Object.defineProperty(exports, 'ocrIdCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrIdCard; } });Object.defineProperty(exports, 'ocrVehicleLicense', { enumerable: true, configurable: true, get: function() { return __TEMP__.ocrVehicleLicense; } });Object.defineProperty(exports, 'plantClassify', { enumerable: true, configurable: true, get: function() { return __TEMP__.plantClassify; } });Object.defineProperty(exports, 'preloadSubPackage', { enumerable: true, configurable: true, get: function() { return __TEMP__.preloadSubPackage; } });Object.defineProperty(exports, 'requestPolymerPayment', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestPolymerPayment; } });Object.defineProperty(exports, 'setPageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.setPageInfo; } });Object.defineProperty(exports, 'textReview', { enumerable: true, configurable: true, get: function() { return __TEMP__.textReview; } });Object.defineProperty(exports, 'textToAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.textToAudio; } });
var __TEMP__ = require('./ui/index.js');
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./worker/index.js');Object.defineProperty(exports, 'createWorker', { enumerable: true, configurable: true, get: function() { return __TEMP__.createWorker; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./wxml/index.js');Object.defineProperty(exports, 'createIntersectionObserver', { enumerable: true, configurable: true, get: function() { return __TEMP__.createIntersectionObserver; } });Object.defineProperty(exports, 'createMediaQueryObserver', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaQueryObserver; } });Object.defineProperty(exports, 'createSelectorQuery', { enumerable: true, configurable: true, get: function() { return __TEMP__.createSelectorQuery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ai/facial.js');Object.defineProperty(exports, 'faceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.faceDetect; } });Object.defineProperty(exports, 'initFaceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.initFaceDetect; } });Object.defineProperty(exports, 'stopFaceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopFaceDetect; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ai/visual.js');Object.defineProperty(exports, 'createVKSession', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVKSession; } });Object.defineProperty(exports, 'isVKSupport', { enumerable: true, configurable: true, get: function() { return __TEMP__.isVKSupport; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/crypto.js');Object.defineProperty(exports, 'getUserCryptoManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserCryptoManager; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/debug.js');Object.defineProperty(exports, 'getLogManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLogManager; } });Object.defineProperty(exports, 'getRealtimeLogManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRealtimeLogManager; } });Object.defineProperty(exports, 'setEnableDebug', { enumerable: true, configurable: true, get: function() { return __TEMP__.setEnableDebug; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/performance.js');Object.defineProperty(exports, 'getPerformance', { enumerable: true, configurable: true, get: function() { return __TEMP__.getPerformance; } });Object.defineProperty(exports, 'reportPerformance', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportPerformance; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/system.js');Object.defineProperty(exports, 'getAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAppAuthorizeSetting; } });Object.defineProperty(exports, 'getAppBaseInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAppBaseInfo; } });Object.defineProperty(exports, 'getDeviceInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getDeviceInfo; } });Object.defineProperty(exports, 'getSystemInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfo; } });Object.defineProperty(exports, 'getSystemInfoAsync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfoAsync; } });Object.defineProperty(exports, 'getSystemInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfoSync; } });Object.defineProperty(exports, 'getSystemSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemSetting; } });Object.defineProperty(exports, 'getWindowInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWindowInfo; } });Object.defineProperty(exports, 'openAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openAppAuthorizeSetting; } });Object.defineProperty(exports, 'openSystemBluetoothSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openSystemBluetoothSetting; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/update.js');Object.defineProperty(exports, 'getUpdateManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUpdateManager; } });Object.defineProperty(exports, 'updateWeChatApp', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateWeChatApp; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/weapp/app-event.js');Object.defineProperty(exports, 'offAppHide', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAppHide; } });Object.defineProperty(exports, 'offAppShow', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAppShow; } });Object.defineProperty(exports, 'offAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAudioInterruptionBegin; } });Object.defineProperty(exports, 'offAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAudioInterruptionEnd; } });Object.defineProperty(exports, 'offError', { enumerable: true, configurable: true, get: function() { return __TEMP__.offError; } });Object.defineProperty(exports, 'offPageNotFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offPageNotFound; } });Object.defineProperty(exports, 'offThemeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offThemeChange; } });Object.defineProperty(exports, 'offUnhandledRejection', { enumerable: true, configurable: true, get: function() { return __TEMP__.offUnhandledRejection; } });Object.defineProperty(exports, 'onAppHide', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAppHide; } });Object.defineProperty(exports, 'onAppShow', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAppShow; } });Object.defineProperty(exports, 'onAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAudioInterruptionBegin; } });Object.defineProperty(exports, 'onAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAudioInterruptionEnd; } });Object.defineProperty(exports, 'onError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onError; } });Object.defineProperty(exports, 'onPageNotFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onPageNotFound; } });Object.defineProperty(exports, 'onThemeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onThemeChange; } });Object.defineProperty(exports, 'onUnhandledRejection', { enumerable: true, configurable: true, get: function() { return __TEMP__.onUnhandledRejection; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./base/weapp/life-cycle.js');Object.defineProperty(exports, 'getEnterOptionsSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getEnterOptionsSync; } });Object.defineProperty(exports, 'getLaunchOptionsSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLaunchOptionsSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvas/createCanvasContext.js');Object.defineProperty(exports, 'createCanvasContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createCanvasContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvas/canvasToTempFilePath.js');Object.defineProperty(exports, 'canvasToTempFilePath', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasToTempFilePath; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvas/canvasPutImageData.js');Object.defineProperty(exports, 'canvasPutImageData', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasPutImageData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvas/canvasGetImageData.js');Object.defineProperty(exports, 'canvasGetImageData', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasGetImageData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/accelerometer.js');Object.defineProperty(exports, 'offAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAccelerometerChange; } });Object.defineProperty(exports, 'onAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAccelerometerChange; } });Object.defineProperty(exports, 'startAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.startAccelerometer; } });Object.defineProperty(exports, 'stopAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopAccelerometer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/accessibility.js');Object.defineProperty(exports, 'checkIsOpenAccessibility', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsOpenAccessibility; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/battery.js');Object.defineProperty(exports, 'getBatteryInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBatteryInfo; } });Object.defineProperty(exports, 'getBatteryInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBatteryInfoSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/bluetooth.js');Object.defineProperty(exports, 'closeBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeBluetoothAdapter; } });Object.defineProperty(exports, 'getBluetoothAdapterState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBluetoothAdapterState; } });Object.defineProperty(exports, 'getBluetoothDevices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBluetoothDevices; } });Object.defineProperty(exports, 'getConnectedBluetoothDevices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getConnectedBluetoothDevices; } });Object.defineProperty(exports, 'isBluetoothDevicePaired', { enumerable: true, configurable: true, get: function() { return __TEMP__.isBluetoothDevicePaired; } });Object.defineProperty(exports, 'makeBluetoothPair', { enumerable: true, configurable: true, get: function() { return __TEMP__.makeBluetoothPair; } });Object.defineProperty(exports, 'offBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'offBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBluetoothDeviceFound; } });Object.defineProperty(exports, 'onBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'onBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBluetoothDeviceFound; } });Object.defineProperty(exports, 'openBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.openBluetoothAdapter; } });Object.defineProperty(exports, 'startBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startBluetoothDevicesDiscovery; } });Object.defineProperty(exports, 'stopBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBluetoothDevicesDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/bluetooth-ble.js');Object.defineProperty(exports, 'closeBLEConnection', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeBLEConnection; } });Object.defineProperty(exports, 'createBLEConnection', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBLEConnection; } });Object.defineProperty(exports, 'getBLEDeviceCharacteristics', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceCharacteristics; } });Object.defineProperty(exports, 'getBLEDeviceRSSI', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceRSSI; } });Object.defineProperty(exports, 'getBLEDeviceServices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceServices; } });Object.defineProperty(exports, 'getBLEMTU', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEMTU; } });Object.defineProperty(exports, 'notifyBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.notifyBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEConnectionStateChange; } });Object.defineProperty(exports, 'offBLEMTUChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEMTUChange; } });Object.defineProperty(exports, 'onBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLECharacteristicValueChange; } });Object.defineProperty(exports, 'onBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEConnectionStateChange; } });Object.defineProperty(exports, 'onBLEMTUChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEMTUChange; } });Object.defineProperty(exports, 'readBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return __TEMP__.readBLECharacteristicValue; } });Object.defineProperty(exports, 'setBLEMTU', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBLEMTU; } });Object.defineProperty(exports, 'writeBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return __TEMP__.writeBLECharacteristicValue; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/bluetooth-peripheral.js');Object.defineProperty(exports, 'createBLEPeripheralServer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBLEPeripheralServer; } });Object.defineProperty(exports, 'offBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEPeripheralConnectionStateChanged; } });Object.defineProperty(exports, 'onBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEPeripheralConnectionStateChanged; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/calendar.js');Object.defineProperty(exports, 'addPhoneCalendar', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneCalendar; } });Object.defineProperty(exports, 'addPhoneRepeatCalendar', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneRepeatCalendar; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/clipboard.js');Object.defineProperty(exports, 'getClipboardData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getClipboardData; } });Object.defineProperty(exports, 'setClipboardData', { enumerable: true, configurable: true, get: function() { return __TEMP__.setClipboardData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/compass.js');Object.defineProperty(exports, 'offCompassChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offCompassChange; } });Object.defineProperty(exports, 'onCompassChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onCompassChange; } });Object.defineProperty(exports, 'startCompass', { enumerable: true, configurable: true, get: function() { return __TEMP__.startCompass; } });Object.defineProperty(exports, 'stopCompass', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopCompass; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/contact.js');Object.defineProperty(exports, 'addPhoneContact', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneContact; } });Object.defineProperty(exports, 'chooseContact', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseContact; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/crypto.js');Object.defineProperty(exports, 'getRandomValues', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRandomValues; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/gyroscope.js');Object.defineProperty(exports, 'offGyroscopeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offGyroscopeChange; } });Object.defineProperty(exports, 'onGyroscopeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onGyroscopeChange; } });Object.defineProperty(exports, 'startGyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.startGyroscope; } });Object.defineProperty(exports, 'stopGyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopGyroscope; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/iBeacon.js');Object.defineProperty(exports, 'getBeacons', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBeacons; } });Object.defineProperty(exports, 'offBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBeaconServiceChange; } });Object.defineProperty(exports, 'offBeaconUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBeaconUpdate; } });Object.defineProperty(exports, 'onBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBeaconServiceChange; } });Object.defineProperty(exports, 'onBeaconUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBeaconUpdate; } });Object.defineProperty(exports, 'startBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startBeaconDiscovery; } });Object.defineProperty(exports, 'stopBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBeaconDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/keyboard.js');Object.defineProperty(exports, 'getSelectedTextRange', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSelectedTextRange; } });Object.defineProperty(exports, 'hideKeyboard', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideKeyboard; } });Object.defineProperty(exports, 'offKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offKeyboardHeightChange; } });Object.defineProperty(exports, 'onKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onKeyboardHeightChange; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/memory.js');Object.defineProperty(exports, 'offMemoryWarning', { enumerable: true, configurable: true, get: function() { return __TEMP__.offMemoryWarning; } });Object.defineProperty(exports, 'onMemoryWarning', { enumerable: true, configurable: true, get: function() { return __TEMP__.onMemoryWarning; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/motion.js');Object.defineProperty(exports, 'offDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offDeviceMotionChange; } });Object.defineProperty(exports, 'onDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onDeviceMotionChange; } });Object.defineProperty(exports, 'startDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return __TEMP__.startDeviceMotionListening; } });Object.defineProperty(exports, 'stopDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopDeviceMotionListening; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/network.js');Object.defineProperty(exports, 'getLocalIPAddress', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLocalIPAddress; } });Object.defineProperty(exports, 'getNetworkType', { enumerable: true, configurable: true, get: function() { return __TEMP__.getNetworkType; } });Object.defineProperty(exports, 'offNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offNetworkStatusChange; } });Object.defineProperty(exports, 'offNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offNetworkWeakChange; } });Object.defineProperty(exports, 'onNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onNetworkStatusChange; } });Object.defineProperty(exports, 'onNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onNetworkWeakChange; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/nfc.js');Object.defineProperty(exports, 'getHCEState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getHCEState; } });Object.defineProperty(exports, 'getNFCAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.getNFCAdapter; } });Object.defineProperty(exports, 'offHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.offHCEMessage; } });Object.defineProperty(exports, 'onHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.onHCEMessage; } });Object.defineProperty(exports, 'sendHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.sendHCEMessage; } });Object.defineProperty(exports, 'startHCE', { enumerable: true, configurable: true, get: function() { return __TEMP__.startHCE; } });Object.defineProperty(exports, 'stopHCE', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopHCE; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/phone.js');Object.defineProperty(exports, 'makePhoneCall', { enumerable: true, configurable: true, get: function() { return __TEMP__.makePhoneCall; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/scan.js');Object.defineProperty(exports, 'scanCode', { enumerable: true, configurable: true, get: function() { return __TEMP__.scanCode; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/screen.js');Object.defineProperty(exports, 'getScreenBrightness', { enumerable: true, configurable: true, get: function() { return __TEMP__.getScreenBrightness; } });Object.defineProperty(exports, 'offUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return __TEMP__.offUserCaptureScreen; } });Object.defineProperty(exports, 'onUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return __TEMP__.onUserCaptureScreen; } });Object.defineProperty(exports, 'setKeepScreenOn', { enumerable: true, configurable: true, get: function() { return __TEMP__.setKeepScreenOn; } });Object.defineProperty(exports, 'setScreenBrightness', { enumerable: true, configurable: true, get: function() { return __TEMP__.setScreenBrightness; } });Object.defineProperty(exports, 'setVisualEffectOnCapture', { enumerable: true, configurable: true, get: function() { return __TEMP__.setVisualEffectOnCapture; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/vibrate.js');Object.defineProperty(exports, 'vibrateLong', { enumerable: true, configurable: true, get: function() { return __TEMP__.vibrateLong; } });Object.defineProperty(exports, 'vibrateShort', { enumerable: true, configurable: true, get: function() { return __TEMP__.vibrateShort; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./device/wifi.js');Object.defineProperty(exports, 'connectWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.connectWifi; } });Object.defineProperty(exports, 'getConnectedWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.getConnectedWifi; } });Object.defineProperty(exports, 'getWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWifiList; } });Object.defineProperty(exports, 'offGetWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.offGetWifiList; } });Object.defineProperty(exports, 'offWifiConnected', { enumerable: true, configurable: true, get: function() { return __TEMP__.offWifiConnected; } });Object.defineProperty(exports, 'onGetWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.onGetWifiList; } });Object.defineProperty(exports, 'onWifiConnected', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWifiConnected; } });Object.defineProperty(exports, 'onWifiConnectedWithPartialInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWifiConnectedWithPartialInfo; } });Object.defineProperty(exports, 'setWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.setWifiList; } });Object.defineProperty(exports, 'startWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.startWifi; } });Object.defineProperty(exports, 'stopWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopWifi; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@tarojs/router');Object.defineProperty(exports, 'getCurrentPages', { enumerable: true, configurable: true, get: function() { return __TEMP__.getCurrentPages; } });Object.defineProperty(exports, 'navigateBack', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBack; } });Object.defineProperty(exports, 'navigateTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateTo; } });Object.defineProperty(exports, 'reLaunch', { enumerable: true, configurable: true, get: function() { return __TEMP__.reLaunch; } });Object.defineProperty(exports, 'redirectTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.redirectTo; } });Object.defineProperty(exports, 'switchTab', { enumerable: true, configurable: true, get: function() { return __TEMP__.switchTab; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./location/getLocation.js');Object.defineProperty(exports, 'getLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLocation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./location/chooseLocation.js');Object.defineProperty(exports, 'chooseLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseLocation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/audio/index.js');Object.defineProperty(exports, 'createAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createAudioContext; } });Object.defineProperty(exports, 'createInnerAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createInnerAudioContext; } });Object.defineProperty(exports, 'createMediaAudioPlayer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaAudioPlayer; } });Object.defineProperty(exports, 'createWebAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createWebAudioContext; } });Object.defineProperty(exports, 'getAvailableAudioSources', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAvailableAudioSources; } });Object.defineProperty(exports, 'pauseVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.pauseVoice; } });Object.defineProperty(exports, 'playVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.playVoice; } });Object.defineProperty(exports, 'setInnerAudioOption', { enumerable: true, configurable: true, get: function() { return __TEMP__.setInnerAudioOption; } });Object.defineProperty(exports, 'stopVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopVoice; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/background-audio/index.js');Object.defineProperty(exports, 'getBackgroundAudioManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundAudioManager; } });Object.defineProperty(exports, 'getBackgroundAudioPlayerState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundAudioPlayerState; } });Object.defineProperty(exports, 'onBackgroundAudioPause', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioPause; } });Object.defineProperty(exports, 'onBackgroundAudioPlay', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioPlay; } });Object.defineProperty(exports, 'onBackgroundAudioStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioStop; } });Object.defineProperty(exports, 'pauseBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.pauseBackgroundAudio; } });Object.defineProperty(exports, 'playBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.playBackgroundAudio; } });Object.defineProperty(exports, 'seekBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.seekBackgroundAudio; } });Object.defineProperty(exports, 'stopBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBackgroundAudio; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/camera.js');Object.defineProperty(exports, 'createCameraContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createCameraContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/image/getImageInfo.js');Object.defineProperty(exports, 'getImageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getImageInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/image/previewImage.js');Object.defineProperty(exports, 'previewImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewImage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/image/chooseImage.js');Object.defineProperty(exports, 'chooseImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseImage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/image/index.js');Object.defineProperty(exports, 'chooseMessageFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseMessageFile; } });Object.defineProperty(exports, 'compressImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.compressImage; } });Object.defineProperty(exports, 'previewMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewMedia; } });Object.defineProperty(exports, 'saveImageToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveImageToPhotosAlbum; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/live.js');Object.defineProperty(exports, 'createLivePlayerContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createLivePlayerContext; } });Object.defineProperty(exports, 'createLivePusherContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createLivePusherContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/map.js');Object.defineProperty(exports, 'createMapContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMapContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/media-recorder.js');Object.defineProperty(exports, 'createMediaRecorder', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaRecorder; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/recorder.js');Object.defineProperty(exports, 'getRecorderManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRecorderManager; } });Object.defineProperty(exports, 'startRecord', { enumerable: true, configurable: true, get: function() { return __TEMP__.startRecord; } });Object.defineProperty(exports, 'stopRecord', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopRecord; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/video/index.js');Object.defineProperty(exports, 'chooseMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseMedia; } });Object.defineProperty(exports, 'chooseVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseVideo; } });Object.defineProperty(exports, 'compressVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.compressVideo; } });Object.defineProperty(exports, 'createVideoContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoContext; } });Object.defineProperty(exports, 'getVideoInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getVideoInfo; } });Object.defineProperty(exports, 'openVideoEditor', { enumerable: true, configurable: true, get: function() { return __TEMP__.openVideoEditor; } });Object.defineProperty(exports, 'saveVideoToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveVideoToPhotosAlbum; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/video-decoder.js');Object.defineProperty(exports, 'createVideoDecoder', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoDecoder; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/video-processing.js');Object.defineProperty(exports, 'createMediaContainer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaContainer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media/voip.js');Object.defineProperty(exports, 'exitVoIPChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.exitVoIPChat; } });Object.defineProperty(exports, 'joinVoIPChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.joinVoIPChat; } });Object.defineProperty(exports, 'offVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatInterrupted; } });Object.defineProperty(exports, 'offVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatMembersChanged; } });Object.defineProperty(exports, 'offVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatStateChanged; } });Object.defineProperty(exports, 'offVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatInterrupted; } });Object.defineProperty(exports, 'onVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatSpeakersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatSpeakersChanged; } });Object.defineProperty(exports, 'onVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatStateChanged; } });Object.defineProperty(exports, 'onVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'setEnable1v1Chat', { enumerable: true, configurable: true, get: function() { return __TEMP__.setEnable1v1Chat; } });Object.defineProperty(exports, 'subscribeVoIPVideoMembers', { enumerable: true, configurable: true, get: function() { return __TEMP__.subscribeVoIPVideoMembers; } });Object.defineProperty(exports, 'updateVoIPChatMuteConfig', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateVoIPChatMuteConfig; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/download.js');Object.defineProperty(exports, 'downloadFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.downloadFile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/mdns.js');Object.defineProperty(exports, 'offLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'offLocalServiceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceFound; } });Object.defineProperty(exports, 'offLocalServiceLost', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceLost; } });Object.defineProperty(exports, 'offLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceResolveFail; } });Object.defineProperty(exports, 'onLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'onLocalServiceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceFound; } });Object.defineProperty(exports, 'onLocalServiceLost', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceLost; } });Object.defineProperty(exports, 'onLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceResolveFail; } });Object.defineProperty(exports, 'startLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocalServiceDiscovery; } });Object.defineProperty(exports, 'stopLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopLocalServiceDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/request/index.js');Object.defineProperty(exports, 'addInterceptor', { enumerable: true, configurable: true, get: function() { return __TEMP__.addInterceptor; } });Object.defineProperty(exports, 'request', { enumerable: true, configurable: true, get: function() { return __TEMP__.request; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/tcp.js');Object.defineProperty(exports, 'createTCPSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.createTCPSocket; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/udp.js');Object.defineProperty(exports, 'createUDPSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.createUDPSocket; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/upload.js');Object.defineProperty(exports, 'uploadFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.uploadFile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network/websocket/index.js');Object.defineProperty(exports, 'closeSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeSocket; } });Object.defineProperty(exports, 'connectSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.connectSocket; } });Object.defineProperty(exports, 'onSocketClose', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketClose; } });Object.defineProperty(exports, 'onSocketError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketError; } });Object.defineProperty(exports, 'onSocketMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketMessage; } });Object.defineProperty(exports, 'onSocketOpen', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketOpen; } });Object.defineProperty(exports, 'sendSocketMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.sendSocketMessage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/account.js');Object.defineProperty(exports, 'getAccountInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAccountInfoSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/address.js');Object.defineProperty(exports, 'chooseAddress', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseAddress; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/authorize.js');Object.defineProperty(exports, 'authorize', { enumerable: true, configurable: true, get: function() { return __TEMP__.authorize; } });Object.defineProperty(exports, 'authorizeForMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.authorizeForMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/card.js');Object.defineProperty(exports, 'addCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.addCard; } });Object.defineProperty(exports, 'openCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.openCard; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/channels-live.js');Object.defineProperty(exports, 'getChannelsLiveInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getChannelsLiveInfo; } });Object.defineProperty(exports, 'getChannelsLiveNoticeInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getChannelsLiveNoticeInfo; } });Object.defineProperty(exports, 'openChannelsActivity', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsActivity; } });Object.defineProperty(exports, 'openChannelsEvent', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsEvent; } });Object.defineProperty(exports, 'openChannelsLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsLive; } });Object.defineProperty(exports, 'reserveChannelsLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.reserveChannelsLive; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/customer-service.js');Object.defineProperty(exports, 'openCustomerServiceChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.openCustomerServiceChat; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/facial.js');Object.defineProperty(exports, 'checkIsSupportFacialRecognition', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSupportFacialRecognition; } });Object.defineProperty(exports, 'faceVerifyForPay', { enumerable: true, configurable: true, get: function() { return __TEMP__.faceVerifyForPay; } });Object.defineProperty(exports, 'startFacialRecognitionVerify', { enumerable: true, configurable: true, get: function() { return __TEMP__.startFacialRecognitionVerify; } });Object.defineProperty(exports, 'startFacialRecognitionVerifyAndUploadVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.startFacialRecognitionVerifyAndUploadVideo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/favorites.js');Object.defineProperty(exports, 'addFileToFavorites', { enumerable: true, configurable: true, get: function() { return __TEMP__.addFileToFavorites; } });Object.defineProperty(exports, 'addVideoToFavorites', { enumerable: true, configurable: true, get: function() { return __TEMP__.addVideoToFavorites; } });Object.defineProperty(exports, 'checkIsAddedToMyMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsAddedToMyMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/group.js');Object.defineProperty(exports, 'getGroupEnterInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getGroupEnterInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/invoice.js');Object.defineProperty(exports, 'chooseInvoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseInvoice; } });Object.defineProperty(exports, 'chooseInvoiceTitle', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseInvoiceTitle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/license-plate.js');Object.defineProperty(exports, 'chooseLicensePlate', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseLicensePlate; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/login.js');Object.defineProperty(exports, 'checkSession', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkSession; } });Object.defineProperty(exports, 'login', { enumerable: true, configurable: true, get: function() { return __TEMP__.login; } });Object.defineProperty(exports, 'pluginLogin', { enumerable: true, configurable: true, get: function() { return __TEMP__.pluginLogin; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/red-package.js');Object.defineProperty(exports, 'showRedPackage', { enumerable: true, configurable: true, get: function() { return __TEMP__.showRedPackage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/settings.js');Object.defineProperty(exports, 'getSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSetting; } });Object.defineProperty(exports, 'openSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openSetting; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/soter.js');Object.defineProperty(exports, 'checkIsSoterEnrolledInDevice', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSoterEnrolledInDevice; } });Object.defineProperty(exports, 'checkIsSupportSoterAuthentication', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSupportSoterAuthentication; } });Object.defineProperty(exports, 'startSoterAuthentication', { enumerable: true, configurable: true, get: function() { return __TEMP__.startSoterAuthentication; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/subscribe-message.js');Object.defineProperty(exports, 'requestSubscribeMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestSubscribeMessage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/user-info.js');Object.defineProperty(exports, 'getUserInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserInfo; } });Object.defineProperty(exports, 'getUserProfile', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserProfile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./open-api/werun.js');Object.defineProperty(exports, 'getWeRunData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWeRunData; } });Object.defineProperty(exports, 'shareToWeRun', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareToWeRun; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./storage/background-fetch.js');Object.defineProperty(exports, 'getBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundFetchData; } });Object.defineProperty(exports, 'getBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundFetchToken; } });Object.defineProperty(exports, 'onBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundFetchData; } });Object.defineProperty(exports, 'setBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundFetchToken; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/animation/index.js');Object.defineProperty(exports, 'createAnimation', { enumerable: true, configurable: true, get: function() { return __TEMP__.createAnimation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/background.js');Object.defineProperty(exports, 'setBackgroundColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundColor; } });Object.defineProperty(exports, 'setBackgroundTextStyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundTextStyle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/custom-component.js');Object.defineProperty(exports, 'nextTick', { enumerable: true, configurable: true, get: function() { return __TEMP__.nextTick; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/fonts.js');Object.defineProperty(exports, 'loadFontFace', { enumerable: true, configurable: true, get: function() { return __TEMP__.loadFontFace; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/interaction/index.js');Object.defineProperty(exports, 'disableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return __TEMP__.disableAlertBeforeUnload; } });Object.defineProperty(exports, 'enableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return __TEMP__.enableAlertBeforeUnload; } });Object.defineProperty(exports, 'hideLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideLoading; } });Object.defineProperty(exports, 'hideToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideToast; } });Object.defineProperty(exports, 'showActionSheet', { enumerable: true, configurable: true, get: function() { return __TEMP__.showActionSheet; } });Object.defineProperty(exports, 'showLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showLoading; } });Object.defineProperty(exports, 'showModal', { enumerable: true, configurable: true, get: function() { return __TEMP__.showModal; } });Object.defineProperty(exports, 'showToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.showToast; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/menu.js');Object.defineProperty(exports, 'getMenuButtonBoundingClientRect', { enumerable: true, configurable: true, get: function() { return __TEMP__.getMenuButtonBoundingClientRect; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/navigation-bar/index.js');Object.defineProperty(exports, 'hideHomeButton', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideHomeButton; } });Object.defineProperty(exports, 'hideNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideNavigationBarLoading; } });Object.defineProperty(exports, 'setNavigationBarColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.setNavigationBarColor; } });Object.defineProperty(exports, 'setNavigationBarTitle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setNavigationBarTitle; } });Object.defineProperty(exports, 'showNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showNavigationBarLoading; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/pull-down-refresh.js');Object.defineProperty(exports, 'startPullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.startPullDownRefresh; } });Object.defineProperty(exports, 'stopPullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopPullDownRefresh; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/scroll/index.js');Object.defineProperty(exports, 'pageScrollTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.pageScrollTo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/sticky.js');Object.defineProperty(exports, 'setTopBarText', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTopBarText; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/tab-bar.js');Object.defineProperty(exports, 'hideTabBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideTabBar; } });Object.defineProperty(exports, 'hideTabBarRedDot', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideTabBarRedDot; } });Object.defineProperty(exports, 'initTabBarApis', { enumerable: true, configurable: true, get: function() { return __TEMP__.initTabBarApis; } });Object.defineProperty(exports, 'removeTabBarBadge', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeTabBarBadge; } });Object.defineProperty(exports, 'setTabBarBadge', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarBadge; } });Object.defineProperty(exports, 'setTabBarItem', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarItem; } });Object.defineProperty(exports, 'setTabBarStyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarStyle; } });Object.defineProperty(exports, 'showTabBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.showTabBar; } });Object.defineProperty(exports, 'showTabBarRedDot', { enumerable: true, configurable: true, get: function() { return __TEMP__.showTabBarRedDot; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./ui/window.js');Object.defineProperty(exports, 'offWindowResize', { enumerable: true, configurable: true, get: function() { return __TEMP__.offWindowResize; } });Object.defineProperty(exports, 'onWindowResize', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWindowResize; } });Object.defineProperty(exports, 'setWindowSize', { enumerable: true, configurable: true, get: function() { return __TEMP__.setWindowSize; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./ad/index.js":1680223929670,"./ai/index.js":1680223929676,"./alipay/index.js":1680223929679,"./base/index.js":1680223929680,"./canvas/index.js":1680223929689,"./cloud/index.js":1680223929695,"./data-analysis/index.js":1680223929696,"./device/index.js":1680223929697,"./ext/index.js":1680223929723,"./files/index.js":1680223929724,"./framework/index.js":1680223929725,"./location/index.js":1680223929726,"./media/index.js":1680223929731,"./navigate/index.js":1680223929749,"./network/index.js":1680223929750,"./open-api/index.js":1680223929760,"./payment/index.js":1680223929779,"./route/index.js":1680223929780,"./share/index.js":1680223929781,"./storage/index.js":1680223929706,"./swan/index.js":1680223929782,"./ui/index.js":1680223929783,"./worker/index.js":1680223929799,"./wxml/index.js":1680223929800,"./ai/facial.js":1680223929677,"./ai/visual.js":1680223929678,"./base/crypto.js":1680223929681,"./base/debug.js":1680223929682,"./base/performance.js":1680223929683,"./base/system.js":1680223929684,"./base/update.js":1680223929686,"./base/weapp/app-event.js":1680223929687,"./base/weapp/life-cycle.js":1680223929688,"./canvas/createCanvasContext.js":1680223929690,"./canvas/canvasToTempFilePath.js":1680223929692,"./canvas/canvasPutImageData.js":1680223929693,"./canvas/canvasGetImageData.js":1680223929694,"./device/accelerometer.js":1680223929698,"./device/accessibility.js":1680223929699,"./device/battery.js":1680223929700,"./device/bluetooth.js":1680223929701,"./device/bluetooth-ble.js":1680223929702,"./device/bluetooth-peripheral.js":1680223929703,"./device/calendar.js":1680223929704,"./device/clipboard.js":1680223929705,"./device/compass.js":1680223929708,"./device/contact.js":1680223929709,"./device/crypto.js":1680223929710,"./device/gyroscope.js":1680223929711,"./device/iBeacon.js":1680223929712,"./device/keyboard.js":1680223929713,"./device/memory.js":1680223929714,"./device/motion.js":1680223929715,"./device/network.js":1680223929716,"./device/nfc.js":1680223929717,"./device/phone.js":1680223929718,"./device/scan.js":1680223929719,"./device/screen.js":1680223929720,"./device/vibrate.js":1680223929721,"./device/wifi.js":1680223929722,"./location/getLocation.js":1680223929727,"./location/chooseLocation.js":1680223929728,"./media/audio/index.js":1680223929732,"./media/background-audio/index.js":1680223929734,"./media/camera.js":1680223929736,"./media/image/getImageInfo.js":1680223929738,"./media/image/previewImage.js":1680223929739,"./media/image/chooseImage.js":1680223929740,"./media/image/index.js":1680223929737,"./media/live.js":1680223929741,"./media/map.js":1680223929742,"./media/media-recorder.js":1680223929743,"./media/recorder.js":1680223929744,"./media/video/index.js":1680223929745,"./media/video-decoder.js":1680223929746,"./media/video-processing.js":1680223929747,"./media/voip.js":1680223929748,"./network/download.js":1680223929751,"./network/mdns.js":1680223929753,"./network/request/index.js":1680223929754,"./network/tcp.js":1680223929755,"./network/udp.js":1680223929756,"./network/upload.js":1680223929757,"./network/websocket/index.js":1680223929758,"./open-api/account.js":1680223929761,"./open-api/address.js":1680223929762,"./open-api/authorize.js":1680223929763,"./open-api/card.js":1680223929764,"./open-api/channels-live.js":1680223929765,"./open-api/customer-service.js":1680223929766,"./open-api/facial.js":1680223929767,"./open-api/favorites.js":1680223929768,"./open-api/group.js":1680223929769,"./open-api/invoice.js":1680223929770,"./open-api/license-plate.js":1680223929771,"./open-api/login.js":1680223929772,"./open-api/red-package.js":1680223929773,"./open-api/settings.js":1680223929774,"./open-api/soter.js":1680223929775,"./open-api/subscribe-message.js":1680223929776,"./open-api/user-info.js":1680223929777,"./open-api/werun.js":1680223929778,"./storage/background-fetch.js":1680223929707,"./ui/animation/index.js":1680223929784,"./ui/background.js":1680223929785,"./ui/custom-component.js":1680223929786,"./ui/fonts.js":1680223929787,"./ui/interaction/index.js":1680223929788,"./ui/menu.js":1680223929792,"./ui/navigation-bar/index.js":1680223929793,"./ui/pull-down-refresh.js":1680223929794,"./ui/scroll/index.js":1680223929795,"./ui/sticky.js":1680223929796,"./ui/tab-bar.js":1680223929797,"./ui/window.js":1680223929798}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929670, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 广告
const createRewardedVideoAd = temporarilyNotSupport('createRewardedVideoAd');
const createInterstitialAd = temporarilyNotSupport('createInterstitialAd');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createInterstitialAd', { enumerable: true, configurable: true, get: function() { return createInterstitialAd; } });Object.defineProperty(exports, 'createRewardedVideoAd', { enumerable: true, configurable: true, get: function() { return createRewardedVideoAd; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929671, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@tarojs/router/dist/utils');var getCurrentPage = __TEMP__['getCurrentPage'];var getHomePage = __TEMP__['getHomePage'];
var __TEMP__ = require('@tarojs/runtime');var hooks = __TEMP__['hooks'];var Current = __TEMP__['Current'];
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('./handler.js');var MethodHandler = __TEMP__['MethodHandler'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./animation.js');Object.defineProperty(exports, 'easeInOut', { enumerable: true, configurable: true, get: function() { return __TEMP__.easeInOut; } });Object.defineProperty(exports, 'getTimingFunc', { enumerable: true, configurable: true, get: function() { return __TEMP__.getTimingFunc; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./lodash.js');Object.defineProperty(exports, 'debounce', { enumerable: true, configurable: true, get: function() { return __TEMP__.debounce; } });Object.defineProperty(exports, 'throttle', { enumerable: true, configurable: true, get: function() { return __TEMP__.throttle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./valid.js');Object.defineProperty(exports, 'isValidColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.isValidColor; } });

/* eslint-disable prefer-promise-reject-errors */
function shouldBeObject(target) {
    if (target && typeof target === 'object')
        return { flag: true };
    return {
        flag: false,
        msg: getParameterError({
            correct: 'Object',
            wrong: target
        })
    };
}
function findDOM(inst) {
    if (inst && hooks.isExist('getDOMNode')) {
        return hooks.call('getDOMNode', inst);
    }
    const page = Current.page;
    const path = page === null || page === void 0 ? void 0 : page.path;
    const msg = '没有找到已经加载了的页面，请在页面加载完成后时候此 API。';
    if (path == null) {
        throw new Error(msg);
    }
    const el = document.getElementById(path);
    if (el == null) {
        throw new Error('在已加载页面中没有找到对应的容器元素。');
    }
    return el;
}
function getParameterError({ name = '', para, correct, wrong }) {
    const parameter = para ? `parameter.${para}` : 'parameter';
    const errorType = upperCaseFirstLetter(wrong === null ? 'Null' : typeof wrong);
    if (name) {
        return `${name}:fail parameter error: ${parameter} should be ${correct} instead of ${errorType}`;
    }
    else {
        return `parameter error: ${parameter} should be ${correct} instead of ${errorType}`;
    }
}
function upperCaseFirstLetter(string) {
    if (typeof string !== 'string')
        return string;
    string = string.replace(/^./, match => match.toUpperCase());
    return string;
}
const toKebabCase = function (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function inlineStyle(style) {
    let res = '';
    for (const attr in style)
        res += `${attr}: ${style[attr]};`;
    if (res.indexOf('display: flex;') >= 0)
        res += 'display: -webkit-box;display: -webkit-flex;';
    res = res.replace(/transform:(.+?);/g, (s, $1) => `${s}-webkit-transform:${$1};`);
    res = res.replace(/flex-direction:(.+?);/g, (s, $1) => `${s}-webkit-flex-direction:${$1};`);
    return res;
}
function setTransform(el, val) {
    el.style.webkitTransform = val;
    el.style.transform = val;
}
function serializeParams(params) {
    if (!params) {
        return '';
    }
    return Object.keys(params)
        .map(key => (`${encodeURIComponent(key)}=${typeof (params[key]) === 'object'
        ? encodeURIComponent(JSON.stringify(params[key]))
        : encodeURIComponent(params[key])}`))
        .join('&');
}
function temporarilyNotSupport(name = '') {
    return (option = {}, ...args) => {
        const { success, fail, complete } = option;
        const handle = new MethodHandler({ name, success, fail, complete });
        const errMsg = '暂时不支持 API';
        Taro.eventCenter.trigger('__taroNotSupport', {
            name,
            args: [option, ...args],
            type: 'method',
            category: 'temporarily',
        });
        if (process.env.NODE_ENV === 'production') {
            console.warn(errMsg);
            return handle.success({ errMsg });
        }
        else {
            return handle.fail({ errMsg });
        }
    };
}
function weixinCorpSupport(name) {
    return (option = {}, ...args) => {
        const { success, fail, complete } = option;
        const handle = new MethodHandler({ name, success, fail, complete });
        const errMsg = 'h5 端当前仅在微信公众号 JS-SDK 环境下支持此 API';
        Taro.eventCenter.trigger('__taroNotSupport', {
            name,
            args: [option, ...args],
            type: 'method',
            category: 'weixin_corp',
        });
        if (process.env.NODE_ENV === 'production') {
            console.warn(errMsg);
            return handle.success({ errMsg });
        }
        else {
            return handle.fail({ errMsg });
        }
    };
}
function permanentlyNotSupport(name = '') {
    return (option = {}, ...args) => {
        const { success, fail, complete } = option;
        const handle = new MethodHandler({ name, success, fail, complete });
        const errMsg = '不支持 API';
        Taro.eventCenter.trigger('__taroNotSupport', {
            name,
            args: [option, ...args],
            type: 'method',
            category: 'permanently',
        });
        if (process.env.NODE_ENV === 'production') {
            console.warn(errMsg);
            return handle.success({ errMsg });
        }
        else {
            return handle.fail({ errMsg });
        }
    };
}
function processOpenApi({ name, defaultOptions, standardMethod, formatOptions = options => options, formatResult = res => res }) {
    const notSupported = weixinCorpSupport(name);
    return (options = {}, ...args) => {
        var _a;
        // @ts-ignore
        const targetApi = (_a = window === null || window === void 0 ? void 0 : window.wx) === null || _a === void 0 ? void 0 : _a[name];
        const opts = formatOptions(Object.assign({}, defaultOptions, options));
        if (isFunction(targetApi)) {
            return new Promise((resolve, reject) => {
                ['fail', 'success', 'complete'].forEach(k => {
                    opts[k] = preRef => {
                        const res = formatResult(preRef);
                        options[k] && options[k](res);
                        if (k === 'success') {
                            resolve(res);
                        }
                        else if (k === 'fail') {
                            reject(res);
                        }
                    };
                    return targetApi(opts);
                });
            });
        }
        else if (isFunction(standardMethod)) {
            return standardMethod(opts);
        }
        else {
            return notSupported(options, ...args);
        }
    };
}
/**
 * 获取当前页面路径
 * @returns
 */
function getCurrentPath() {
    var _a, _b, _c, _d, _e, _f;
    const appConfig = window.__taroAppConfig || {};
    const routePath = getCurrentPage((_a = appConfig.router) === null || _a === void 0 ? void 0 : _a.mode, (_b = appConfig.router) === null || _b === void 0 ? void 0 : _b.basename);
    const homePath = getHomePage((_d = (_c = appConfig.routes) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.path, (_e = appConfig.router) === null || _e === void 0 ? void 0 : _e.basename, (_f = appConfig.router) === null || _f === void 0 ? void 0 : _f.customRoutes, appConfig.entryPagePath);
    /**
     * createPageConfig 时根据 stack 的长度来设置 stamp 以保证页面 path 的唯一，此函数是在 createPageConfig 之前调用，预先设置 stamp=1
     * url 上没有指定应用的启动页面时使用 homePath
     */
    return `${routePath === '/' ? homePath : routePath}?stamp=1`;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'findDOM', { enumerable: true, configurable: true, get: function() { return findDOM; } });Object.defineProperty(exports, 'getCurrentPath', { enumerable: true, configurable: true, get: function() { return getCurrentPath; } });Object.defineProperty(exports, 'getParameterError', { enumerable: true, configurable: true, get: function() { return getParameterError; } });Object.defineProperty(exports, 'inlineStyle', { enumerable: true, configurable: true, get: function() { return inlineStyle; } });Object.defineProperty(exports, 'permanentlyNotSupport', { enumerable: true, configurable: true, get: function() { return permanentlyNotSupport; } });Object.defineProperty(exports, 'processOpenApi', { enumerable: true, configurable: true, get: function() { return processOpenApi; } });Object.defineProperty(exports, 'serializeParams', { enumerable: true, configurable: true, get: function() { return serializeParams; } });Object.defineProperty(exports, 'setTransform', { enumerable: true, configurable: true, get: function() { return setTransform; } });Object.defineProperty(exports, 'shouldBeObject', { enumerable: true, configurable: true, get: function() { return shouldBeObject; } });Object.defineProperty(exports, 'temporarilyNotSupport', { enumerable: true, configurable: true, get: function() { return temporarilyNotSupport; } });Object.defineProperty(exports, 'toKebabCase', { enumerable: true, configurable: true, get: function() { return toKebabCase; } });Object.defineProperty(exports, 'weixinCorpSupport', { enumerable: true, configurable: true, get: function() { return weixinCorpSupport; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./handler.js":1680223929672,"./animation.js":1680223929673,"./lodash.js":1680223929674,"./valid.js":1680223929675}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929672, function(require, module, exports) {
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];

class MethodHandler {
    constructor({ name, success, fail, complete }) {
        this.isHandlerError = false;
        this.methodName = name;
        this.__success = success;
        this.__fail = fail;
        this.__complete = complete;
        this.isHandlerError = isFunction(this.__complete) || isFunction(this.__fail);
    }
    success(res = {}, promise = {}) {
        if (!res.errMsg) {
            res.errMsg = `${this.methodName}:ok`;
        }
        isFunction(this.__success) && this.__success(res);
        isFunction(this.__complete) && this.__complete(res);
        const { resolve = Promise.resolve.bind(Promise) } = promise;
        return resolve(res);
    }
    fail(res = {}, promise = {}) {
        if (!res.errMsg) {
            res.errMsg = `${this.methodName}:fail`;
        }
        else {
            res.errMsg = `${this.methodName}:fail ${res.errMsg}`;
        }
        if (process.env.NODE_ENV !== 'production') {
            console.error(res.errMsg);
        }
        isFunction(this.__fail) && this.__fail(res);
        isFunction(this.__complete) && this.__complete(res);
        const { resolve = Promise.resolve.bind(Promise), reject = Promise.reject.bind(Promise) } = promise;
        return this.isHandlerError
            ? resolve(res)
            : reject(res);
    }
}
class CallbackManager {
    constructor() {
        this.callbacks = [];
        /**
         * 添加回调
         * @param {{ callback: function, ctx: any } | function} opt
         */
        this.add = (opt) => {
            if (opt)
                this.callbacks.push(opt);
        };
        /**
         * 移除回调
         * @param {{ callback: function, ctx: any } | function} opt
         */
        this.remove = (opt) => {
            if (opt) {
                let pos = -1;
                this.callbacks.forEach((callback, k) => {
                    if (callback === opt) {
                        pos = k;
                    }
                });
                if (pos > -1) {
                    this.callbacks.splice(pos, 1);
                }
            }
        };
        /**
         * 获取回调函数数量
         * @return {number}
         */
        this.count = () => {
            return this.callbacks.length;
        };
        /**
         * 触发回调
         * @param  {...any} args 回调的调用参数
         */
        this.trigger = (...args) => {
            this.callbacks.forEach(opt => {
                if (isFunction(opt)) {
                    opt(...args);
                }
                else {
                    const { callback, ctx } = opt;
                    isFunction(callback) && callback.call(ctx, ...args);
                }
            });
        };
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'CallbackManager', { enumerable: true, configurable: true, get: function() { return CallbackManager; } });Object.defineProperty(exports, 'MethodHandler', { enumerable: true, configurable: true, get: function() { return MethodHandler; } });
//# sourceMappingURL=handler.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929673, function(require, module, exports) {
/**
 * ease-in-out的函数
 * @param t 0-1的数字
 */
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
const getTimingFunc = (easeFunc, frameCnt) => {
    return x => {
        if (frameCnt <= 1) {
            return easeFunc(1);
        }
        const t = x / (frameCnt - 1);
        return easeFunc(t);
    };
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'easeInOut', { enumerable: true, configurable: true, get: function() { return easeInOut; } });Object.defineProperty(exports, 'getTimingFunc', { enumerable: true, configurable: true, get: function() { return getTimingFunc; } });
//# sourceMappingURL=animation.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929674, function(require, module, exports) {
function throttle(fn, threshold = 250, scope) {
    let lastTime = 0;
    let deferTimer;
    return function (...args) {
        const context = scope || this;
        const now = Date.now();
        if (now - lastTime > threshold) {
            fn.apply(this, args);
            lastTime = now;
        }
        else {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(() => {
                lastTime = now;
                fn.apply(context, args);
            }, threshold);
        }
    };
}
function debounce(fn, ms = 250, scope) {
    let timer;
    return function (...args) {
        const context = scope || this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, ms);
    };
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'debounce', { enumerable: true, configurable: true, get: function() { return debounce; } });Object.defineProperty(exports, 'throttle', { enumerable: true, configurable: true, get: function() { return throttle; } });
//# sourceMappingURL=lodash.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929675, function(require, module, exports) {
const VALID_COLOR_REG = /^#[0-9a-fA-F]{6}$/;
const isValidColor = (color) => {
    return VALID_COLOR_REG.test(color);
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'isValidColor', { enumerable: true, configurable: true, get: function() { return isValidColor; } });
//# sourceMappingURL=valid.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929676, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./facial.js');Object.defineProperty(exports, 'faceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.faceDetect; } });Object.defineProperty(exports, 'initFaceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.initFaceDetect; } });Object.defineProperty(exports, 'stopFaceDetect', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopFaceDetect; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./visual.js');Object.defineProperty(exports, 'createVKSession', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVKSession; } });Object.defineProperty(exports, 'isVKSupport', { enumerable: true, configurable: true, get: function() { return __TEMP__.isVKSupport; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./facial.js":1680223929677,"./visual.js":1680223929678}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929677, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 人脸识别
const stopFaceDetect = temporarilyNotSupport('stopFaceDetect');
const initFaceDetect = temporarilyNotSupport('initFaceDetect');
const faceDetect = temporarilyNotSupport('faceDetect');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'faceDetect', { enumerable: true, configurable: true, get: function() { return faceDetect; } });Object.defineProperty(exports, 'initFaceDetect', { enumerable: true, configurable: true, get: function() { return initFaceDetect; } });Object.defineProperty(exports, 'stopFaceDetect', { enumerable: true, configurable: true, get: function() { return stopFaceDetect; } });
//# sourceMappingURL=facial.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929678, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 判断支持版本
const isVKSupport = temporarilyNotSupport('isVKSupport');
// 视觉算法
const createVKSession = temporarilyNotSupport('createVKSession');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createVKSession', { enumerable: true, configurable: true, get: function() { return createVKSession; } });Object.defineProperty(exports, 'isVKSupport', { enumerable: true, configurable: true, get: function() { return isVKSupport; } });
//# sourceMappingURL=visual.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929679, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// AliPay
const getOpenUserInfo = temporarilyNotSupport('getOpenUserInfo');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getOpenUserInfo', { enumerable: true, configurable: true, get: function() { return getOpenUserInfo; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929680, function(require, module, exports) {
var __TEMP__ = require('base64-js');var fromByteArray = __TEMP__['fromByteArray'];var toByteArray = __TEMP__['toByteArray'];
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./crypto.js');Object.defineProperty(exports, 'getUserCryptoManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserCryptoManager; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./debug.js');Object.defineProperty(exports, 'getLogManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLogManager; } });Object.defineProperty(exports, 'getRealtimeLogManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRealtimeLogManager; } });Object.defineProperty(exports, 'setEnableDebug', { enumerable: true, configurable: true, get: function() { return __TEMP__.setEnableDebug; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./performance.js');Object.defineProperty(exports, 'getPerformance', { enumerable: true, configurable: true, get: function() { return __TEMP__.getPerformance; } });Object.defineProperty(exports, 'reportPerformance', { enumerable: true, configurable: true, get: function() { return __TEMP__.reportPerformance; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./system.js');Object.defineProperty(exports, 'getAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAppAuthorizeSetting; } });Object.defineProperty(exports, 'getAppBaseInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAppBaseInfo; } });Object.defineProperty(exports, 'getDeviceInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getDeviceInfo; } });Object.defineProperty(exports, 'getSystemInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfo; } });Object.defineProperty(exports, 'getSystemInfoAsync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfoAsync; } });Object.defineProperty(exports, 'getSystemInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemInfoSync; } });Object.defineProperty(exports, 'getSystemSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSystemSetting; } });Object.defineProperty(exports, 'getWindowInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWindowInfo; } });Object.defineProperty(exports, 'openAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openAppAuthorizeSetting; } });Object.defineProperty(exports, 'openSystemBluetoothSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openSystemBluetoothSetting; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./update.js');Object.defineProperty(exports, 'getUpdateManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUpdateManager; } });Object.defineProperty(exports, 'updateWeChatApp', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateWeChatApp; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./weapp/app-event.js');Object.defineProperty(exports, 'offAppHide', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAppHide; } });Object.defineProperty(exports, 'offAppShow', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAppShow; } });Object.defineProperty(exports, 'offAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAudioInterruptionBegin; } });Object.defineProperty(exports, 'offAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAudioInterruptionEnd; } });Object.defineProperty(exports, 'offError', { enumerable: true, configurable: true, get: function() { return __TEMP__.offError; } });Object.defineProperty(exports, 'offPageNotFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offPageNotFound; } });Object.defineProperty(exports, 'offThemeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offThemeChange; } });Object.defineProperty(exports, 'offUnhandledRejection', { enumerable: true, configurable: true, get: function() { return __TEMP__.offUnhandledRejection; } });Object.defineProperty(exports, 'onAppHide', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAppHide; } });Object.defineProperty(exports, 'onAppShow', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAppShow; } });Object.defineProperty(exports, 'onAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAudioInterruptionBegin; } });Object.defineProperty(exports, 'onAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAudioInterruptionEnd; } });Object.defineProperty(exports, 'onError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onError; } });Object.defineProperty(exports, 'onPageNotFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onPageNotFound; } });Object.defineProperty(exports, 'onThemeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onThemeChange; } });Object.defineProperty(exports, 'onUnhandledRejection', { enumerable: true, configurable: true, get: function() { return __TEMP__.onUnhandledRejection; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./weapp/life-cycle.js');Object.defineProperty(exports, 'getEnterOptionsSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getEnterOptionsSync; } });Object.defineProperty(exports, 'getLaunchOptionsSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLaunchOptionsSync; } });

const env = {
    FRAMEWORK: process.env.FRAMEWORK,
    TARO_ENV: process.env.TARO_ENV,
    TARO_VERSION: process.env.TARO_VERSION,
};
const canIUse = temporarilyNotSupport('canIUse');
function arrayBufferToBase64(arrayBuffer) {
    return fromByteArray(arrayBuffer);
}
function base64ToArrayBuffer(base64) {
    return toByteArray(base64);
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'arrayBufferToBase64', { enumerable: true, configurable: true, get: function() { return arrayBufferToBase64; } });Object.defineProperty(exports, 'base64ToArrayBuffer', { enumerable: true, configurable: true, get: function() { return base64ToArrayBuffer; } });Object.defineProperty(exports, 'canIUse', { enumerable: true, configurable: true, get: function() { return canIUse; } });Object.defineProperty(exports, 'env', { enumerable: true, configurable: true, get: function() { return env; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"./crypto.js":1680223929681,"./debug.js":1680223929682,"./performance.js":1680223929683,"./system.js":1680223929684,"./update.js":1680223929686,"./weapp/app-event.js":1680223929687,"./weapp/life-cycle.js":1680223929688}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929681, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 加密
const getUserCryptoManager = temporarilyNotSupport('getUserCryptoManager');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getUserCryptoManager', { enumerable: true, configurable: true, get: function() { return getUserCryptoManager; } });
//# sourceMappingURL=crypto.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929682, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

const setEnableDebug = temporarilyNotSupport('setEnableDebug');
const getRealtimeLogManager = temporarilyNotSupport('getRealtimeLogManager');
const getLogManager = temporarilyNotSupport('getLogManager');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getLogManager', { enumerable: true, configurable: true, get: function() { return getLogManager; } });Object.defineProperty(exports, 'getRealtimeLogManager', { enumerable: true, configurable: true, get: function() { return getRealtimeLogManager; } });Object.defineProperty(exports, 'setEnableDebug', { enumerable: true, configurable: true, get: function() { return setEnableDebug; } });
//# sourceMappingURL=debug.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929683, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 性能
const reportPerformance = temporarilyNotSupport('reportPerformance');
const getPerformance = temporarilyNotSupport('getPerformance');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getPerformance', { enumerable: true, configurable: true, get: function() { return getPerformance; } });Object.defineProperty(exports, 'reportPerformance', { enumerable: true, configurable: true, get: function() { return reportPerformance; } });
//# sourceMappingURL=performance.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929684, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('@tarojs/router/dist/utils/navigate');var getMobileDetect = __TEMP__['getMobileDetect'];
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/** 跳转系统蓝牙设置页 */
const openSystemBluetoothSetting = temporarilyNotSupport('openSystemBluetoothSetting');
/** 跳转系统微信授权管理页 */
const openAppAuthorizeSetting = temporarilyNotSupport('openAppAuthorizeSetting');
/** 获取窗口信息 */
const getWindowInfo = () => {
    const info = {
        /** 设备像素比 */
        pixelRatio: window.devicePixelRatio,
        /** 屏幕宽度，单位px */
        screenWidth: window.screen.width,
        /** 屏幕高度，单位px */
        screenHeight: window.screen.height,
        /** 可使用窗口宽度，单位px */
        windowWidth: document.documentElement.clientWidth,
        /** 可使用窗口高度，单位px */
        windowHeight: document.documentElement.clientHeight,
        /** 状态栏的高度，单位px */
        statusBarHeight: NaN,
        /** 在竖屏正方向下的安全区域 */
        safeArea: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0
        }
    };
    return info;
};
/** 获取设备设置 */
const getSystemSetting = () => {
    const isLandscape = window.screen.width >= window.screen.height;
    const info = {
        /** 蓝牙的系统开关 */
        bluetoothEnabled: false,
        /** 地理位置的系统开关 */
        locationEnabled: false,
        /** Wi-Fi 的系统开关 */
        wifiEnabled: false,
        /** 设备方向 */
        deviceOrientation: isLandscape ? 'landscape' : 'portrait'
    };
    return info;
};
/** 获取设备设置 */
const getDeviceInfo = () => {
    const md = getMobileDetect();
    const info = {
        /** 应用二进制接口类型（仅 Android 支持） */
        abi: '',
        /** 设备二进制接口类型（仅 Android 支持） */
        deviceAbi: '',
        /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50） */
        benchmarkLevel: -1,
        /** 设备品牌 */
        brand: md.mobile() || '',
        /** 设备型号 */
        model: md.mobile() || '',
        /** 操作系统及版本 */
        system: md.os(),
        /** 客户端平台 */
        platform: navigator.platform,
        /** 设备二进制接口类型（仅 Android 支持） */
        CPUType: '',
    };
    return info;
};
/** 获取微信APP基础信息 */
const getAppBaseInfo = () => {
    var _a;
    let isDarkMode = false;
    if ((_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)').matches) {
        isDarkMode = true;
    }
    const info = {
        /** 客户端基础库版本 */
        SDKVersion: '',
        /** 是否已打开调试。可通过右上角菜单或 [Taro.setEnableDebug](/docs/apis/base/debug/setEnableDebug) 打开调试。 */
        enableDebug: process.env.NODE_ENV !== 'production',
        /** 当前小程序运行的宿主环境 */
        // host: { appId: '' },
        /** 微信设置的语言 */
        language: navigator.language,
        /** 微信版本号 */
        version: '',
        /** 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏） */
        theme: isDarkMode ? 'dark' : 'light'
    };
    return info;
};
/** 获取微信APP授权设置 */
const getAppAuthorizeSetting = () => {
    const info = {
        /** 允许微信使用相册的开关（仅 iOS 有效） */
        albumAuthorized: 'not determined',
        /** 允许微信使用蓝牙的开关（仅 iOS 有效） */
        bluetoothAuthorized: 'not determined',
        /** 允许微信使用摄像头的开关 */
        cameraAuthorized: 'not determined',
        /** 允许微信使用定位的开关 */
        locationAuthorized: 'not determined',
        /** 定位准确度。true 表示模糊定位，false 表示精确定位（仅 iOS 有效） */
        locationReducedAccuracy: false,
        /** 允许微信使用麦克风的开关 */
        microphoneAuthorized: 'not determined',
        /** 允许微信通知的开关 */
        notificationAuthorized: 'not determined',
        /** 允许微信通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized: 'not determined',
        /** 允许微信通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized: 'not determined',
        /** 允许微信通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized: 'not determined',
        /** 允许微信使用日历的开关 */
        phoneCalendarAuthorized: 'not determined'
    };
    return info;
};
/** 获取设备设置 */
const getSystemInfoSync = () => {
    const windowInfo = getWindowInfo();
    const systemSetting = getSystemSetting();
    const deviceInfo = getDeviceInfo();
    const appBaseInfo = getAppBaseInfo();
    const appAuthorizeSetting = getAppAuthorizeSetting();
    delete deviceInfo.abi;
    const info = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, windowInfo), systemSetting), deviceInfo), appBaseInfo), { 
        /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 */
        fontSizeSetting: NaN, 
        /** 允许微信使用相册的开关（仅 iOS 有效） */
        albumAuthorized: appAuthorizeSetting.albumAuthorized === 'authorized', 
        /** 允许微信使用摄像头的开关 */
        cameraAuthorized: appAuthorizeSetting.cameraAuthorized === 'authorized', 
        /** 允许微信使用定位的开关 */
        locationAuthorized: appAuthorizeSetting.locationAuthorized === 'authorized', 
        /** 允许微信使用麦克风的开关 */
        microphoneAuthorized: appAuthorizeSetting.microphoneAuthorized === 'authorized', 
        /** 允许微信通知的开关 */
        notificationAuthorized: appAuthorizeSetting.notificationAuthorized === 'authorized', 
        /** 允许微信通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized: appAuthorizeSetting.notificationAlertAuthorized === 'authorized', 
        /** 允许微信通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized: appAuthorizeSetting.notificationBadgeAuthorized === 'authorized', 
        /** 允许微信通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized: appAuthorizeSetting.notificationSoundAuthorized === 'authorized', 
        /** 允许微信使用日历的开关 */
        phoneCalendarAuthorized: appAuthorizeSetting.phoneCalendarAuthorized === 'authorized', 
        /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
        locationReducedAccuracy: appAuthorizeSetting.locationReducedAccuracy, 
        /** 小程序当前运行环境 */
        environment: '' });
    return info;
};
/** 获取系统信息 */
const getSystemInfoAsync = (options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getSystemInfoAsync', success, fail, complete });
    try {
        const info = yield getSystemInfoSync();
        return handle.success(info);
    }
    catch (error) {
        return handle.fail({
            errMsg: error
        });
    }
});
/** 获取系统信息 */
const getSystemInfo = (options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getSystemInfo', success, fail, complete });
    try {
        const info = yield getSystemInfoSync();
        return handle.success(info);
    }
    catch (error) {
        return handle.fail({
            errMsg: error
        });
    }
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return getAppAuthorizeSetting; } });Object.defineProperty(exports, 'getAppBaseInfo', { enumerable: true, configurable: true, get: function() { return getAppBaseInfo; } });Object.defineProperty(exports, 'getDeviceInfo', { enumerable: true, configurable: true, get: function() { return getDeviceInfo; } });Object.defineProperty(exports, 'getSystemInfo', { enumerable: true, configurable: true, get: function() { return getSystemInfo; } });Object.defineProperty(exports, 'getSystemInfoAsync', { enumerable: true, configurable: true, get: function() { return getSystemInfoAsync; } });Object.defineProperty(exports, 'getSystemInfoSync', { enumerable: true, configurable: true, get: function() { return getSystemInfoSync; } });Object.defineProperty(exports, 'getSystemSetting', { enumerable: true, configurable: true, get: function() { return getSystemSetting; } });Object.defineProperty(exports, 'getWindowInfo', { enumerable: true, configurable: true, get: function() { return getWindowInfo; } });Object.defineProperty(exports, 'openAppAuthorizeSetting', { enumerable: true, configurable: true, get: function() { return openAppAuthorizeSetting; } });Object.defineProperty(exports, 'openSystemBluetoothSetting', { enumerable: true, configurable: true, get: function() { return openSystemBluetoothSetting; } });
//# sourceMappingURL=system.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929685, function(require, module, exports) {
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, '__assign', { enumerable: true, configurable: true, get: function() { return __assign; } });Object.defineProperty(exports, '__asyncDelegator', { enumerable: true, configurable: true, get: function() { return __asyncDelegator; } });Object.defineProperty(exports, '__asyncGenerator', { enumerable: true, configurable: true, get: function() { return __asyncGenerator; } });Object.defineProperty(exports, '__asyncValues', { enumerable: true, configurable: true, get: function() { return __asyncValues; } });Object.defineProperty(exports, '__await', { enumerable: true, configurable: true, get: function() { return __await; } });Object.defineProperty(exports, '__awaiter', { enumerable: true, configurable: true, get: function() { return __awaiter; } });Object.defineProperty(exports, '__classPrivateFieldGet', { enumerable: true, configurable: true, get: function() { return __classPrivateFieldGet; } });Object.defineProperty(exports, '__classPrivateFieldSet', { enumerable: true, configurable: true, get: function() { return __classPrivateFieldSet; } });Object.defineProperty(exports, '__createBinding', { enumerable: true, configurable: true, get: function() { return __createBinding; } });Object.defineProperty(exports, '__decorate', { enumerable: true, configurable: true, get: function() { return __decorate; } });Object.defineProperty(exports, '__exportStar', { enumerable: true, configurable: true, get: function() { return __exportStar; } });Object.defineProperty(exports, '__extends', { enumerable: true, configurable: true, get: function() { return __extends; } });Object.defineProperty(exports, '__generator', { enumerable: true, configurable: true, get: function() { return __generator; } });Object.defineProperty(exports, '__importDefault', { enumerable: true, configurable: true, get: function() { return __importDefault; } });Object.defineProperty(exports, '__importStar', { enumerable: true, configurable: true, get: function() { return __importStar; } });Object.defineProperty(exports, '__makeTemplateObject', { enumerable: true, configurable: true, get: function() { return __makeTemplateObject; } });Object.defineProperty(exports, '__metadata', { enumerable: true, configurable: true, get: function() { return __metadata; } });Object.defineProperty(exports, '__param', { enumerable: true, configurable: true, get: function() { return __param; } });Object.defineProperty(exports, '__read', { enumerable: true, configurable: true, get: function() { return __read; } });Object.defineProperty(exports, '__rest', { enumerable: true, configurable: true, get: function() { return __rest; } });Object.defineProperty(exports, '__spread', { enumerable: true, configurable: true, get: function() { return __spread; } });Object.defineProperty(exports, '__spreadArrays', { enumerable: true, configurable: true, get: function() { return __spreadArrays; } });Object.defineProperty(exports, '__values', { enumerable: true, configurable: true, get: function() { return __values; } });
//# sourceMappingURL=tslib.es6.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929686, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 更新
const updateWeChatApp = temporarilyNotSupport('updateWeChatApp');
const getUpdateManager = temporarilyNotSupport('getUpdateManager');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getUpdateManager', { enumerable: true, configurable: true, get: function() { return getUpdateManager; } });Object.defineProperty(exports, 'updateWeChatApp', { enumerable: true, configurable: true, get: function() { return updateWeChatApp; } });
//# sourceMappingURL=update.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929687, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('query-string');var parse = __TEMP__['parse'];
var __TEMP__ = require('../../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];

const appShowCallbackManager = new CallbackManager();
const appHideCallbackManager = new CallbackManager();
const getApp = () => {
    var _a;
    const path = (_a = Taro.Current.page) === null || _a === void 0 ? void 0 : _a.path;
    return {
        /** 小程序切前台的路径 */
        path: path === null || path === void 0 ? void 0 : path.substring(0, path.indexOf('?')),
        /** 小程序切前台的 query 参数 */
        query: parse(location.search),
        /** 来源信息。 */
        referrerInfo: {},
        /** 小程序切前台的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) */
        scene: 0,
        /** shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
        shareTicket: ''
    };
};
const appShowListener = () => {
    if (document.visibilityState !== 'hidden') {
        appShowCallbackManager.trigger(getApp());
    }
};
const appHideListener = () => {
    if (document.visibilityState === 'hidden') {
        appHideCallbackManager.trigger(getApp());
    }
};
// 应用级事件
const onUnhandledRejection = temporarilyNotSupport('onUnhandledRejection');
const onThemeChange = temporarilyNotSupport('onThemeChange');
const onPageNotFound = temporarilyNotSupport('onPageNotFound');
const onError = temporarilyNotSupport('onError');
const onAudioInterruptionEnd = temporarilyNotSupport('onAudioInterruptionEnd');
const onAudioInterruptionBegin = temporarilyNotSupport('onAudioInterruptionBegin');
const onAppShow = callback => {
    appShowCallbackManager.add(callback);
    if (appShowCallbackManager.count() === 1) {
        window.addEventListener('visibilitychange', appShowListener);
    }
};
const onAppHide = callback => {
    appHideCallbackManager.add(callback);
    if (appHideCallbackManager.count() === 1) {
        window.addEventListener('visibilitychange', appHideListener);
    }
};
const offUnhandledRejection = temporarilyNotSupport('offUnhandledRejection');
const offThemeChange = temporarilyNotSupport('offThemeChange');
const offPageNotFound = temporarilyNotSupport('offPageNotFound');
const offError = temporarilyNotSupport('offError');
const offAudioInterruptionEnd = temporarilyNotSupport('offAudioInterruptionEnd');
const offAudioInterruptionBegin = temporarilyNotSupport('offAudioInterruptionBegin');
const offAppShow = callback => {
    appShowCallbackManager.remove(callback);
    if (appShowCallbackManager.count() === 0) {
        window.removeEventListener('visibilitychange', appShowListener);
    }
};
const offAppHide = callback => {
    appHideCallbackManager.remove(callback);
    if (appHideCallbackManager.count() === 0) {
        window.removeEventListener('visibilitychange', appHideListener);
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offAppHide', { enumerable: true, configurable: true, get: function() { return offAppHide; } });Object.defineProperty(exports, 'offAppShow', { enumerable: true, configurable: true, get: function() { return offAppShow; } });Object.defineProperty(exports, 'offAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return offAudioInterruptionBegin; } });Object.defineProperty(exports, 'offAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return offAudioInterruptionEnd; } });Object.defineProperty(exports, 'offError', { enumerable: true, configurable: true, get: function() { return offError; } });Object.defineProperty(exports, 'offPageNotFound', { enumerable: true, configurable: true, get: function() { return offPageNotFound; } });Object.defineProperty(exports, 'offThemeChange', { enumerable: true, configurable: true, get: function() { return offThemeChange; } });Object.defineProperty(exports, 'offUnhandledRejection', { enumerable: true, configurable: true, get: function() { return offUnhandledRejection; } });Object.defineProperty(exports, 'onAppHide', { enumerable: true, configurable: true, get: function() { return onAppHide; } });Object.defineProperty(exports, 'onAppShow', { enumerable: true, configurable: true, get: function() { return onAppShow; } });Object.defineProperty(exports, 'onAudioInterruptionBegin', { enumerable: true, configurable: true, get: function() { return onAudioInterruptionBegin; } });Object.defineProperty(exports, 'onAudioInterruptionEnd', { enumerable: true, configurable: true, get: function() { return onAudioInterruptionEnd; } });Object.defineProperty(exports, 'onError', { enumerable: true, configurable: true, get: function() { return onError; } });Object.defineProperty(exports, 'onPageNotFound', { enumerable: true, configurable: true, get: function() { return onPageNotFound; } });Object.defineProperty(exports, 'onThemeChange', { enumerable: true, configurable: true, get: function() { return onThemeChange; } });Object.defineProperty(exports, 'onUnhandledRejection', { enumerable: true, configurable: true, get: function() { return onUnhandledRejection; } });
//# sourceMappingURL=app-event.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929688, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);

const launchOptions = {
    path: '',
    query: {},
    scene: 0,
    shareTicket: '',
    referrerInfo: {}
};
function initLaunchOptions(options = {}) {
    Object.assign(launchOptions, options);
}
Taro.eventCenter.once('__taroRouterLaunch', initLaunchOptions);
// 生命周期
const getLaunchOptionsSync = () => launchOptions;
const getEnterOptionsSync = () => launchOptions;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getEnterOptionsSync', { enumerable: true, configurable: true, get: function() { return getEnterOptionsSync; } });Object.defineProperty(exports, 'getLaunchOptionsSync', { enumerable: true, configurable: true, get: function() { return getLaunchOptionsSync; } });
//# sourceMappingURL=life-cycle.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929689, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./createCanvasContext.js');Object.defineProperty(exports, 'createCanvasContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createCanvasContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvasToTempFilePath.js');Object.defineProperty(exports, 'canvasToTempFilePath', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasToTempFilePath; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvasPutImageData.js');Object.defineProperty(exports, 'canvasPutImageData', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasPutImageData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./canvasGetImageData.js');Object.defineProperty(exports, 'canvasGetImageData', { enumerable: true, configurable: true, get: function() { return __TEMP__.canvasGetImageData; } });

// 画布
/** 创建离屏 canvas 实例 */
const createOffscreenCanvas = temporarilyNotSupport('createOffscreenCanvas');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createOffscreenCanvas', { enumerable: true, configurable: true, get: function() { return createOffscreenCanvas; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"./createCanvasContext.js":1680223929690,"./canvasToTempFilePath.js":1680223929692,"./canvasPutImageData.js":1680223929693,"./canvasGetImageData.js":1680223929694}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929690, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var findDOM = __TEMP__['findDOM'];
var __TEMP__ = require('./CanvasContext.js');var CanvasContext = __TEMP__['CanvasContext'];

/**
 * 创建 canvas 的绘图上下文 CanvasContext 对象
 */
const createCanvasContext = (canvasId, inst) => {
    const el = findDOM(inst);
    const canvas = el === null || el === void 0 ? void 0 : el.querySelector(`canvas[canvas-id="${canvasId}"]`);
    const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    const context = new CanvasContext(canvas, ctx);
    if (!ctx)
        return context;
    context.canvas = canvas;
    context.ctx = ctx;
    return context;
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createCanvasContext', { enumerable: true, configurable: true, get: function() { return createCanvasContext; } });
//# sourceMappingURL=createCanvasContext.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"./CanvasContext.js":1680223929691}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929691, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];

const TextBaseLineMap = {
    top: 'top',
    bottom: 'bottom',
    middle: 'middle',
    normal: 'alphabetic'
};
class CanvasContext {
    constructor(canvas, ctx) {
        this.actions = [];
        this.canvas = canvas;
        this.ctx = ctx;
    }
    set ctx(e) {
        this.__raw__ = e;
    }
    get ctx() {
        return this.__raw__ || {};
    }
    emptyActions() {
        this.actions.length = 0;
    }
    enqueueActions(func, ...args) {
        this.actions.push({
            func,
            args
        });
    }
    set fillStyle(e) { this.enqueueActions(() => { this.ctx.fillStyle = e; }); }
    get fillStyle() { return this.ctx.fillStyle; }
    set font(e) { this.ctx.font = e; }
    get font() { return this.ctx.font; }
    set globalAlpha(e) { this.enqueueActions(() => { this.ctx.globalAlpha = e; }); }
    get globalAlpha() { return this.ctx.globalAlpha; }
    set globalCompositeOperation(e) { this.enqueueActions(() => { this.ctx.globalCompositeOperation = e; }); }
    get globalCompositeOperation() { return this.ctx.globalCompositeOperation; }
    set lineCap(e) { this.enqueueActions(() => { this.ctx.lineCap = e; }); }
    get lineCap() { return this.ctx.lineCap; }
    set lineDashOffset(e) { this.enqueueActions(() => { this.ctx.lineDashOffset = e; }); }
    get lineDashOffset() { return this.ctx.lineDashOffset; }
    set lineJoin(e) { this.enqueueActions(() => { this.ctx.lineJoin = e; }); }
    get lineJoin() { return this.ctx.lineJoin; }
    set lineWidth(e) { this.enqueueActions(() => { this.ctx.lineWidth = e; }); }
    get lineWidth() { return this.ctx.lineWidth; }
    set miterLimit(e) { this.enqueueActions(() => { this.ctx.miterLimit = e; }); }
    get miterLimit() { return this.ctx.miterLimit; }
    set shadowBlur(e) { this.enqueueActions(() => { this.ctx.shadowBlur = e; }); }
    get shadowBlur() { return this.ctx.shadowBlur; }
    set shadowColor(e) { this.enqueueActions(() => { this.ctx.shadowColor = e; }); }
    get shadowColor() { return this.ctx.shadowColor; }
    set shadowOffsetX(e) { this.enqueueActions(() => { this.ctx.shadowOffsetX = e; }); }
    get shadowOffsetX() { return this.ctx.shadowOffsetX; }
    set shadowOffsetY(e) { this.enqueueActions(() => { this.ctx.shadowOffsetY = e; }); }
    get shadowOffsetY() { return this.ctx.shadowOffsetY; }
    set strokeStyle(e) { this.enqueueActions(() => { this.ctx.strokeStyle = e; }); }
    get strokeStyle() { return this.ctx.strokeStyle; }
    /** 小程序文档中不包括 ↓↓↓ */
    set textAlign(e) { this.ctx.textAlign = e; }
    get textAlign() { return this.ctx.textAlign; }
    set textBaseline(e) { this.ctx.textBaseline = e; }
    get textBaseline() { return this.ctx.textBaseline; }
    set direction(e) { this.ctx.direction = e; }
    get direction() { return this.ctx.direction; }
    set imageSmoothingEnabled(e) { this.enqueueActions(() => { this.ctx.imageSmoothingEnabled = e; }); }
    get imageSmoothingEnabled() { return this.ctx.imageSmoothingEnabled; }
    set imageSmoothingQuality(e) { this.enqueueActions(() => { this.ctx.imageSmoothingQuality = e; }); }
    get imageSmoothingQuality() { return this.ctx.imageSmoothingQuality; }
    set filter(e) { this.enqueueActions(() => { this.ctx.filter = e; }); }
    get filter() { return this.ctx.filter; }
    /** 小程序文档中不包括 ↑↑↑ */
    arc(...args) { return this.enqueueActions(this.ctx.arc, ...args); }
    arcTo(...args) { return this.enqueueActions(this.ctx.arcTo, ...args); }
    beginPath(...args) { return this.enqueueActions(this.ctx.beginPath, ...args); }
    bezierCurveTo(...args) { return this.enqueueActions(this.ctx.bezierCurveTo, ...args); }
    clearRect(...args) { return this.enqueueActions(this.ctx.clearRect, ...args); }
    clip(...args) { return this.enqueueActions(this.ctx.clip, ...args); }
    closePath(...args) { return this.enqueueActions(this.ctx.closePath, ...args); }
    createPattern(image, repetition) {
        return this.createPattern(image, repetition);
    }
    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
     * @todo 每次 draw 都会读取 width 和 height
     */
    draw(reserve, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!reserve) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }
                // 部分 action 是异步的
                for (const { func, args } of this.actions) {
                    yield func.apply(this.ctx, args);
                }
                this.emptyActions();
                callback && callback();
            }
            catch (e) {
                /* eslint-disable no-throw-literal */
                throw {
                    errMsg: e.message
                };
            }
        });
    }
    drawImage(imageResource, ...extra) {
        this.enqueueActions(() => {
            // 需要转换为 Image
            if (typeof imageResource === 'string') {
                const img = new Image();
                img.src = imageResource;
                return new Promise((resolve, reject) => {
                    img.onload = () => {
                        this.ctx.drawImage(img, ...extra);
                        resolve();
                    };
                    img.onerror = reject;
                });
            }
            this.ctx.drawImage(imageResource, ...extra);
        });
    }
    fill(...args) { return this.enqueueActions(this.ctx.fill, ...args); }
    fillRect(...args) { return this.enqueueActions(this.ctx.fillRect, ...args); }
    fillText(...args) { return this.enqueueActions(this.ctx.fillText, ...args); }
    lineTo(...args) { return this.enqueueActions(this.ctx.lineTo, ...args); }
    moveTo(...args) { return this.enqueueActions(this.ctx.moveTo, ...args); }
    quadraticCurveTo(...args) { return this.enqueueActions(this.ctx.quadraticCurveTo, ...args); }
    rect(...args) { return this.enqueueActions(this.ctx.rect, ...args); }
    restore(...args) { return this.enqueueActions(this.ctx.restore, ...args); }
    rotate(...args) { return this.enqueueActions(this.ctx.rotate, ...args); }
    save(...args) { return this.enqueueActions(this.ctx.save, ...args); }
    scale(...args) { return this.enqueueActions(this.ctx.scale, ...args); }
    setFillStyle(color) {
        this.enqueueActions(() => { this.ctx.fillStyle = color; });
    }
    setFontSize(fontSize) {
        this.font = `${fontSize}px`;
    }
    setGlobalAlpha(alpha) {
        this.globalAlpha = alpha;
    }
    setLineCap(lineCap) {
        this.lineCap = lineCap;
    }
    setLineDash(pattern, offset) {
        this.enqueueActions(() => {
            this.ctx.setLineDash(pattern);
            this.ctx.lineDashOffset = offset;
        });
    }
    setLineJoin(lineJoin) {
        this.lineJoin = lineJoin;
    }
    setLineWidth(lineWidth) {
        this.lineWidth = lineWidth;
    }
    setMiterLimit(miterLimit) {
        this.miterLimit = miterLimit;
    }
    setShadow(offsetX, offsetY, blur, color) {
        this.enqueueActions(() => {
            this.ctx.shadowOffsetX = offsetX;
            this.ctx.shadowOffsetY = offsetY;
            this.ctx.shadowColor = color;
            this.ctx.shadowBlur = blur;
        });
    }
    setStrokeStyle(color) {
        this.enqueueActions(() => { this.ctx.strokeStyle = color; });
    }
    setTextAlign(align) {
        this.textAlign = align;
    }
    setTextBaseline(textBaseline) {
        this.textBaseline = TextBaseLineMap[textBaseline] || 'alphabetic';
    }
    setTransform(...args) { return this.enqueueActions(this.ctx.setTransform, ...args); }
    stroke(...args) { return this.enqueueActions(this.ctx.stroke, ...args); }
    strokeRect(...args) { return this.enqueueActions(this.ctx.strokeRect, ...args); }
    strokeText(...args) { return this.enqueueActions(this.ctx.strokeText, ...args); }
    transform(...args) { return this.enqueueActions(this.ctx.transform, ...args); }
    translate(...args) { return this.enqueueActions(this.ctx.translate, ...args); }
    measureText(text) {
        return this.ctx.measureText(text);
    }
    createCircularGradient(x, y, r) {
        const radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        return radialGradient;
    }
    createLinearGradient(x0, y0, x1, y1) {
        return this.ctx.createLinearGradient(x0, y0, x1, y1);
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'CanvasContext', { enumerable: true, configurable: true, get: function() { return CanvasContext; } });
//# sourceMappingURL=CanvasContext.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929692, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var findDOM = __TEMP__['findDOM'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * 把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功。
 * @todo 暂未支持尺寸相关功能
 */
const canvasToTempFilePath = ({ canvasId, fileType, quality, success, fail, complete }, inst) => {
    const handle = new MethodHandler({ name: 'canvasToTempFilePath', success, fail, complete });
    const el = findDOM(inst);
    const canvas = el === null || el === void 0 ? void 0 : el.querySelector(`canvas[canvas-id="${canvasId}"]`);
    try {
        const dataURL = canvas === null || canvas === void 0 ? void 0 : canvas.toDataURL(`image/${(fileType === 'jpg' ? 'jpeg' : fileType) || 'png'}`, quality);
        return handle.success({
            tempFilePath: dataURL
        });
    }
    catch (e) {
        return handle.fail({
            errMsg: e.message
        });
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'canvasToTempFilePath', { enumerable: true, configurable: true, get: function() { return canvasToTempFilePath; } });
//# sourceMappingURL=canvasToTempFilePath.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929693, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var findDOM = __TEMP__['findDOM'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
 * @todo 暂未支持尺寸相关功能
 */
const canvasPutImageData = ({ canvasId, data, x, y, success, fail, complete }, inst) => {
    const handle = new MethodHandler({ name: 'canvasPutImageData', success, fail, complete });
    const el = findDOM(inst);
    const canvas = el === null || el === void 0 ? void 0 : el.querySelector(`canvas[canvas-id="${canvasId}"]`);
    try {
        const ctx = canvas.getContext('2d');
        // TODO Uint8ClampedArray => ImageData
        ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(data, x, y);
        return handle.success();
    }
    catch (e) {
        return handle.fail({
            errMsg: e.message
        });
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'canvasPutImageData', { enumerable: true, configurable: true, get: function() { return canvasPutImageData; } });
//# sourceMappingURL=canvasPutImageData.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929694, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var findDOM = __TEMP__['findDOM'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * 获取 canvas 区域隐含的像素数据。
 */
const canvasGetImageData = ({ canvasId, success, fail, complete, x, y, width, height }, inst) => {
    const handle = new MethodHandler({ name: 'canvasGetImageData', success, fail, complete });
    const el = findDOM(inst);
    const canvas = el === null || el === void 0 ? void 0 : el.querySelector(`canvas[canvas-id="${canvasId}"]`);
    try {
        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        // TODO ImageData => Uint8ClampedArray
        const data = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(x, y, width, height);
        return handle.success({
            width,
            height,
            data
        });
    }
    catch (e) {
        return handle.fail({
            errMsg: e.message
        });
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'canvasGetImageData', { enumerable: true, configurable: true, get: function() { return canvasGetImageData; } });
//# sourceMappingURL=canvasGetImageData.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929695, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

class cloud {
    constructor() {
        this.init = temporarilyNotSupport('cloud.init');
        this.CloudID = temporarilyNotSupport('cloud.CloudID');
        // @ts-ignore
        this.callFunction = temporarilyNotSupport('cloud.callFunction');
        // @ts-ignore
        this.uploadFile = temporarilyNotSupport('cloud.uploadFile');
        // @ts-ignore
        this.downloadFile = temporarilyNotSupport('cloud.downloadFile');
        // @ts-ignore
        this.getTempFileURL = temporarilyNotSupport('cloud.getTempFileURL');
        // @ts-ignore
        this.deleteFile = temporarilyNotSupport('cloud.deleteFile');
        // @ts-ignore
        this.database = temporarilyNotSupport('cloud.database');
        // @ts-ignore
        this.callContainer = temporarilyNotSupport('cloud.callContainer');
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'cloud', { enumerable: true, configurable: true, get: function() { return cloud; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929696, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

const reportMonitor = temporarilyNotSupport('reportMonitor');
const reportAnalytics = temporarilyNotSupport('reportAnalytics');
const reportEvent = temporarilyNotSupport('reportEvent');
const getExptInfoSync = temporarilyNotSupport('getExptInfoSync');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getExptInfoSync', { enumerable: true, configurable: true, get: function() { return getExptInfoSync; } });Object.defineProperty(exports, 'reportAnalytics', { enumerable: true, configurable: true, get: function() { return reportAnalytics; } });Object.defineProperty(exports, 'reportEvent', { enumerable: true, configurable: true, get: function() { return reportEvent; } });Object.defineProperty(exports, 'reportMonitor', { enumerable: true, configurable: true, get: function() { return reportMonitor; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929697, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./accelerometer.js');Object.defineProperty(exports, 'offAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offAccelerometerChange; } });Object.defineProperty(exports, 'onAccelerometerChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onAccelerometerChange; } });Object.defineProperty(exports, 'startAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.startAccelerometer; } });Object.defineProperty(exports, 'stopAccelerometer', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopAccelerometer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./accessibility.js');Object.defineProperty(exports, 'checkIsOpenAccessibility', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsOpenAccessibility; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./battery.js');Object.defineProperty(exports, 'getBatteryInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBatteryInfo; } });Object.defineProperty(exports, 'getBatteryInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBatteryInfoSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./bluetooth.js');Object.defineProperty(exports, 'closeBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeBluetoothAdapter; } });Object.defineProperty(exports, 'getBluetoothAdapterState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBluetoothAdapterState; } });Object.defineProperty(exports, 'getBluetoothDevices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBluetoothDevices; } });Object.defineProperty(exports, 'getConnectedBluetoothDevices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getConnectedBluetoothDevices; } });Object.defineProperty(exports, 'isBluetoothDevicePaired', { enumerable: true, configurable: true, get: function() { return __TEMP__.isBluetoothDevicePaired; } });Object.defineProperty(exports, 'makeBluetoothPair', { enumerable: true, configurable: true, get: function() { return __TEMP__.makeBluetoothPair; } });Object.defineProperty(exports, 'offBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'offBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBluetoothDeviceFound; } });Object.defineProperty(exports, 'onBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'onBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBluetoothDeviceFound; } });Object.defineProperty(exports, 'openBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.openBluetoothAdapter; } });Object.defineProperty(exports, 'startBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startBluetoothDevicesDiscovery; } });Object.defineProperty(exports, 'stopBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBluetoothDevicesDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./bluetooth-ble.js');Object.defineProperty(exports, 'closeBLEConnection', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeBLEConnection; } });Object.defineProperty(exports, 'createBLEConnection', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBLEConnection; } });Object.defineProperty(exports, 'getBLEDeviceCharacteristics', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceCharacteristics; } });Object.defineProperty(exports, 'getBLEDeviceRSSI', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceRSSI; } });Object.defineProperty(exports, 'getBLEDeviceServices', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEDeviceServices; } });Object.defineProperty(exports, 'getBLEMTU', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBLEMTU; } });Object.defineProperty(exports, 'notifyBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.notifyBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEConnectionStateChange; } });Object.defineProperty(exports, 'offBLEMTUChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEMTUChange; } });Object.defineProperty(exports, 'onBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLECharacteristicValueChange; } });Object.defineProperty(exports, 'onBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEConnectionStateChange; } });Object.defineProperty(exports, 'onBLEMTUChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEMTUChange; } });Object.defineProperty(exports, 'readBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return __TEMP__.readBLECharacteristicValue; } });Object.defineProperty(exports, 'setBLEMTU', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBLEMTU; } });Object.defineProperty(exports, 'writeBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return __TEMP__.writeBLECharacteristicValue; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./bluetooth-peripheral.js');Object.defineProperty(exports, 'createBLEPeripheralServer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createBLEPeripheralServer; } });Object.defineProperty(exports, 'offBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBLEPeripheralConnectionStateChanged; } });Object.defineProperty(exports, 'onBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBLEPeripheralConnectionStateChanged; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./calendar.js');Object.defineProperty(exports, 'addPhoneCalendar', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneCalendar; } });Object.defineProperty(exports, 'addPhoneRepeatCalendar', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneRepeatCalendar; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./clipboard.js');Object.defineProperty(exports, 'getClipboardData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getClipboardData; } });Object.defineProperty(exports, 'setClipboardData', { enumerable: true, configurable: true, get: function() { return __TEMP__.setClipboardData; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./compass.js');Object.defineProperty(exports, 'offCompassChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offCompassChange; } });Object.defineProperty(exports, 'onCompassChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onCompassChange; } });Object.defineProperty(exports, 'startCompass', { enumerable: true, configurable: true, get: function() { return __TEMP__.startCompass; } });Object.defineProperty(exports, 'stopCompass', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopCompass; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./contact.js');Object.defineProperty(exports, 'addPhoneContact', { enumerable: true, configurable: true, get: function() { return __TEMP__.addPhoneContact; } });Object.defineProperty(exports, 'chooseContact', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseContact; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./crypto.js');Object.defineProperty(exports, 'getRandomValues', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRandomValues; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./gyroscope.js');Object.defineProperty(exports, 'offGyroscopeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offGyroscopeChange; } });Object.defineProperty(exports, 'onGyroscopeChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onGyroscopeChange; } });Object.defineProperty(exports, 'startGyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.startGyroscope; } });Object.defineProperty(exports, 'stopGyroscope', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopGyroscope; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./iBeacon.js');Object.defineProperty(exports, 'getBeacons', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBeacons; } });Object.defineProperty(exports, 'offBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBeaconServiceChange; } });Object.defineProperty(exports, 'offBeaconUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.offBeaconUpdate; } });Object.defineProperty(exports, 'onBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBeaconServiceChange; } });Object.defineProperty(exports, 'onBeaconUpdate', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBeaconUpdate; } });Object.defineProperty(exports, 'startBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startBeaconDiscovery; } });Object.defineProperty(exports, 'stopBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBeaconDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./keyboard.js');Object.defineProperty(exports, 'getSelectedTextRange', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSelectedTextRange; } });Object.defineProperty(exports, 'hideKeyboard', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideKeyboard; } });Object.defineProperty(exports, 'offKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offKeyboardHeightChange; } });Object.defineProperty(exports, 'onKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onKeyboardHeightChange; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./memory.js');Object.defineProperty(exports, 'offMemoryWarning', { enumerable: true, configurable: true, get: function() { return __TEMP__.offMemoryWarning; } });Object.defineProperty(exports, 'onMemoryWarning', { enumerable: true, configurable: true, get: function() { return __TEMP__.onMemoryWarning; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./motion.js');Object.defineProperty(exports, 'offDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offDeviceMotionChange; } });Object.defineProperty(exports, 'onDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onDeviceMotionChange; } });Object.defineProperty(exports, 'startDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return __TEMP__.startDeviceMotionListening; } });Object.defineProperty(exports, 'stopDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopDeviceMotionListening; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./network.js');Object.defineProperty(exports, 'getLocalIPAddress', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLocalIPAddress; } });Object.defineProperty(exports, 'getNetworkType', { enumerable: true, configurable: true, get: function() { return __TEMP__.getNetworkType; } });Object.defineProperty(exports, 'offNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offNetworkStatusChange; } });Object.defineProperty(exports, 'offNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.offNetworkWeakChange; } });Object.defineProperty(exports, 'onNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onNetworkStatusChange; } });Object.defineProperty(exports, 'onNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return __TEMP__.onNetworkWeakChange; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./nfc.js');Object.defineProperty(exports, 'getHCEState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getHCEState; } });Object.defineProperty(exports, 'getNFCAdapter', { enumerable: true, configurable: true, get: function() { return __TEMP__.getNFCAdapter; } });Object.defineProperty(exports, 'offHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.offHCEMessage; } });Object.defineProperty(exports, 'onHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.onHCEMessage; } });Object.defineProperty(exports, 'sendHCEMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.sendHCEMessage; } });Object.defineProperty(exports, 'startHCE', { enumerable: true, configurable: true, get: function() { return __TEMP__.startHCE; } });Object.defineProperty(exports, 'stopHCE', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopHCE; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./phone.js');Object.defineProperty(exports, 'makePhoneCall', { enumerable: true, configurable: true, get: function() { return __TEMP__.makePhoneCall; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./scan.js');Object.defineProperty(exports, 'scanCode', { enumerable: true, configurable: true, get: function() { return __TEMP__.scanCode; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./screen.js');Object.defineProperty(exports, 'getScreenBrightness', { enumerable: true, configurable: true, get: function() { return __TEMP__.getScreenBrightness; } });Object.defineProperty(exports, 'offUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return __TEMP__.offUserCaptureScreen; } });Object.defineProperty(exports, 'onUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return __TEMP__.onUserCaptureScreen; } });Object.defineProperty(exports, 'setKeepScreenOn', { enumerable: true, configurable: true, get: function() { return __TEMP__.setKeepScreenOn; } });Object.defineProperty(exports, 'setScreenBrightness', { enumerable: true, configurable: true, get: function() { return __TEMP__.setScreenBrightness; } });Object.defineProperty(exports, 'setVisualEffectOnCapture', { enumerable: true, configurable: true, get: function() { return __TEMP__.setVisualEffectOnCapture; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./vibrate.js');Object.defineProperty(exports, 'vibrateLong', { enumerable: true, configurable: true, get: function() { return __TEMP__.vibrateLong; } });Object.defineProperty(exports, 'vibrateShort', { enumerable: true, configurable: true, get: function() { return __TEMP__.vibrateShort; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./wifi.js');Object.defineProperty(exports, 'connectWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.connectWifi; } });Object.defineProperty(exports, 'getConnectedWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.getConnectedWifi; } });Object.defineProperty(exports, 'getWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWifiList; } });Object.defineProperty(exports, 'offGetWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.offGetWifiList; } });Object.defineProperty(exports, 'offWifiConnected', { enumerable: true, configurable: true, get: function() { return __TEMP__.offWifiConnected; } });Object.defineProperty(exports, 'onGetWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.onGetWifiList; } });Object.defineProperty(exports, 'onWifiConnected', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWifiConnected; } });Object.defineProperty(exports, 'onWifiConnectedWithPartialInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWifiConnectedWithPartialInfo; } });Object.defineProperty(exports, 'setWifiList', { enumerable: true, configurable: true, get: function() { return __TEMP__.setWifiList; } });Object.defineProperty(exports, 'startWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.startWifi; } });Object.defineProperty(exports, 'stopWifi', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopWifi; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./accelerometer.js":1680223929698,"./accessibility.js":1680223929699,"./battery.js":1680223929700,"./bluetooth.js":1680223929701,"./bluetooth-ble.js":1680223929702,"./bluetooth-peripheral.js":1680223929703,"./calendar.js":1680223929704,"./clipboard.js":1680223929705,"./compass.js":1680223929708,"./contact.js":1680223929709,"./crypto.js":1680223929710,"./gyroscope.js":1680223929711,"./iBeacon.js":1680223929712,"./keyboard.js":1680223929713,"./memory.js":1680223929714,"./motion.js":1680223929715,"./network.js":1680223929716,"./nfc.js":1680223929717,"./phone.js":1680223929718,"./scan.js":1680223929719,"./screen.js":1680223929720,"./vibrate.js":1680223929721,"./wifi.js":1680223929722}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929698, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');
var __TEMP__ = require('../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('../../utils/lodash.js');var throttle = __TEMP__['throttle'];

const callbackManager = new CallbackManager();
let devicemotionListener;
/**
 * 停止监听加速度数据。
 */
const stopAccelerometer = ({ success, fail, complete } = {}) => {
    const res = {};
    const handle = new MethodHandler({ name: 'stopAccelerometer', success, fail, complete });
    try {
        window.removeEventListener('devicemotion', devicemotionListener, true);
        return handle.success(res);
    }
    catch (e) {
        res.errMsg = e.message;
        return handle.fail(res);
    }
};
const INTERVAL_MAP = {
    game: {
        interval: 20,
        frequency: 50
    },
    ui: {
        interval: 60,
        frequency: 16.67
    },
    normal: {
        interval: 200,
        frequency: 5
    }
};
/**
 * 开始监听加速度数据。
 */
const startAccelerometer = ({ interval = 'normal', success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'startAccelerometer', success, fail, complete });
    try {
        if (window.DeviceMotionEvent) {
            const intervalObj = INTERVAL_MAP[interval];
            if (devicemotionListener) {
                stopAccelerometer();
            }
            devicemotionListener = throttle((evt) => {
                var _a, _b, _c;
                callbackManager.trigger({
                    x: ((_a = evt.acceleration) === null || _a === void 0 ? void 0 : _a.x) || 0,
                    y: ((_b = evt.acceleration) === null || _b === void 0 ? void 0 : _b.y) || 0,
                    z: ((_c = evt.acceleration) === null || _c === void 0 ? void 0 : _c.z) || 0
                });
            }, intervalObj.interval);
            window.addEventListener('devicemotion', devicemotionListener, true);
        }
        else {
            throw new Error('accelerometer is not supported');
        }
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
};
/**
 * 监听加速度数据事件。频率根据 Taro.startAccelerometer() 的 interval 参数。可使用 Taro.stopAccelerometer() 停止监听。
 */
const onAccelerometerChange = callback => {
    callbackManager.add(callback);
};
/**
 * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
 */
const offAccelerometerChange = callback => {
    callbackManager.remove(callback);
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offAccelerometerChange', { enumerable: true, configurable: true, get: function() { return offAccelerometerChange; } });Object.defineProperty(exports, 'onAccelerometerChange', { enumerable: true, configurable: true, get: function() { return onAccelerometerChange; } });Object.defineProperty(exports, 'startAccelerometer', { enumerable: true, configurable: true, get: function() { return startAccelerometer; } });Object.defineProperty(exports, 'stopAccelerometer', { enumerable: true, configurable: true, get: function() { return stopAccelerometer; } });
//# sourceMappingURL=accelerometer.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672,"../../utils/lodash.js":1680223929674}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929699, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 无障碍
const checkIsOpenAccessibility = temporarilyNotSupport('checkIsOpenAccessibility');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'checkIsOpenAccessibility', { enumerable: true, configurable: true, get: function() { return checkIsOpenAccessibility; } });
//# sourceMappingURL=accessibility.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929700, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

// 电量
const getBatteryInfoSync = temporarilyNotSupport('getBatteryInfoSync');
const getBatteryInfo = ({ success, fail, complete } = {}) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const handle = new MethodHandler({ name: 'getBatteryInfo', success, fail, complete });
    try {
        // @ts-ignore
        const battery = yield ((_a = navigator.getBattery) === null || _a === void 0 ? void 0 : _a.call(navigator));
        return handle.success({
            isCharging: battery.charging,
            level: Number(battery.level || 0) * 100
        });
    }
    catch (error) {
        return handle.fail({
            errMsg: (error === null || error === void 0 ? void 0 : error.message) || error
        });
    }
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getBatteryInfo', { enumerable: true, configurable: true, get: function() { return getBatteryInfo; } });Object.defineProperty(exports, 'getBatteryInfoSync', { enumerable: true, configurable: true, get: function() { return getBatteryInfoSync; } });
//# sourceMappingURL=battery.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929701, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 蓝牙-通用
const stopBluetoothDevicesDiscovery = temporarilyNotSupport('stopBluetoothDevicesDiscovery');
const startBluetoothDevicesDiscovery = temporarilyNotSupport('startBluetoothDevicesDiscovery');
const openBluetoothAdapter = temporarilyNotSupport('openBluetoothAdapter');
const onBluetoothDeviceFound = temporarilyNotSupport('onBluetoothDeviceFound');
const onBluetoothAdapterStateChange = temporarilyNotSupport('onBluetoothAdapterStateChange');
const offBluetoothDeviceFound = temporarilyNotSupport('offBluetoothDeviceFound');
const offBluetoothAdapterStateChange = temporarilyNotSupport('offBluetoothAdapterStateChange');
const makeBluetoothPair = temporarilyNotSupport('makeBluetoothPair');
const isBluetoothDevicePaired = temporarilyNotSupport('isBluetoothDevicePaired');
const getConnectedBluetoothDevices = temporarilyNotSupport('getConnectedBluetoothDevices');
const getBluetoothDevices = temporarilyNotSupport('getBluetoothDevices');
const getBluetoothAdapterState = temporarilyNotSupport('getBluetoothAdapterState');
const closeBluetoothAdapter = temporarilyNotSupport('closeBluetoothAdapter');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'closeBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return closeBluetoothAdapter; } });Object.defineProperty(exports, 'getBluetoothAdapterState', { enumerable: true, configurable: true, get: function() { return getBluetoothAdapterState; } });Object.defineProperty(exports, 'getBluetoothDevices', { enumerable: true, configurable: true, get: function() { return getBluetoothDevices; } });Object.defineProperty(exports, 'getConnectedBluetoothDevices', { enumerable: true, configurable: true, get: function() { return getConnectedBluetoothDevices; } });Object.defineProperty(exports, 'isBluetoothDevicePaired', { enumerable: true, configurable: true, get: function() { return isBluetoothDevicePaired; } });Object.defineProperty(exports, 'makeBluetoothPair', { enumerable: true, configurable: true, get: function() { return makeBluetoothPair; } });Object.defineProperty(exports, 'offBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return offBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'offBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return offBluetoothDeviceFound; } });Object.defineProperty(exports, 'onBluetoothAdapterStateChange', { enumerable: true, configurable: true, get: function() { return onBluetoothAdapterStateChange; } });Object.defineProperty(exports, 'onBluetoothDeviceFound', { enumerable: true, configurable: true, get: function() { return onBluetoothDeviceFound; } });Object.defineProperty(exports, 'openBluetoothAdapter', { enumerable: true, configurable: true, get: function() { return openBluetoothAdapter; } });Object.defineProperty(exports, 'startBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return startBluetoothDevicesDiscovery; } });Object.defineProperty(exports, 'stopBluetoothDevicesDiscovery', { enumerable: true, configurable: true, get: function() { return stopBluetoothDevicesDiscovery; } });
//# sourceMappingURL=bluetooth.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929702, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 蓝牙-低功耗中心设备
const writeBLECharacteristicValue = temporarilyNotSupport('writeBLECharacteristicValue');
const setBLEMTU = temporarilyNotSupport('setBLEMTU');
const readBLECharacteristicValue = temporarilyNotSupport('readBLECharacteristicValue');
const onBLEMTUChange = temporarilyNotSupport('onBLEMTUChange');
const onBLEConnectionStateChange = temporarilyNotSupport('onBLEConnectionStateChange');
const onBLECharacteristicValueChange = temporarilyNotSupport('onBLECharacteristicValueChange');
const offBLEMTUChange = temporarilyNotSupport('offBLEMTUChange');
const offBLEConnectionStateChange = temporarilyNotSupport('offBLEConnectionStateChange');
const offBLECharacteristicValueChange = temporarilyNotSupport('offBLECharacteristicValueChange');
const notifyBLECharacteristicValueChange = temporarilyNotSupport('notifyBLECharacteristicValueChange');
const getBLEMTU = temporarilyNotSupport('getBLEMTU');
const getBLEDeviceServices = temporarilyNotSupport('getBLEDeviceServices');
const getBLEDeviceRSSI = temporarilyNotSupport('getBLEDeviceRSSI');
const getBLEDeviceCharacteristics = temporarilyNotSupport('getBLEDeviceCharacteristics');
const createBLEConnection = temporarilyNotSupport('createBLEConnection');
const closeBLEConnection = temporarilyNotSupport('closeBLEConnection');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'closeBLEConnection', { enumerable: true, configurable: true, get: function() { return closeBLEConnection; } });Object.defineProperty(exports, 'createBLEConnection', { enumerable: true, configurable: true, get: function() { return createBLEConnection; } });Object.defineProperty(exports, 'getBLEDeviceCharacteristics', { enumerable: true, configurable: true, get: function() { return getBLEDeviceCharacteristics; } });Object.defineProperty(exports, 'getBLEDeviceRSSI', { enumerable: true, configurable: true, get: function() { return getBLEDeviceRSSI; } });Object.defineProperty(exports, 'getBLEDeviceServices', { enumerable: true, configurable: true, get: function() { return getBLEDeviceServices; } });Object.defineProperty(exports, 'getBLEMTU', { enumerable: true, configurable: true, get: function() { return getBLEMTU; } });Object.defineProperty(exports, 'notifyBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return notifyBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return offBLECharacteristicValueChange; } });Object.defineProperty(exports, 'offBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return offBLEConnectionStateChange; } });Object.defineProperty(exports, 'offBLEMTUChange', { enumerable: true, configurable: true, get: function() { return offBLEMTUChange; } });Object.defineProperty(exports, 'onBLECharacteristicValueChange', { enumerable: true, configurable: true, get: function() { return onBLECharacteristicValueChange; } });Object.defineProperty(exports, 'onBLEConnectionStateChange', { enumerable: true, configurable: true, get: function() { return onBLEConnectionStateChange; } });Object.defineProperty(exports, 'onBLEMTUChange', { enumerable: true, configurable: true, get: function() { return onBLEMTUChange; } });Object.defineProperty(exports, 'readBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return readBLECharacteristicValue; } });Object.defineProperty(exports, 'setBLEMTU', { enumerable: true, configurable: true, get: function() { return setBLEMTU; } });Object.defineProperty(exports, 'writeBLECharacteristicValue', { enumerable: true, configurable: true, get: function() { return writeBLECharacteristicValue; } });
//# sourceMappingURL=bluetooth-ble.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929703, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 蓝牙-低功耗外围设备
const onBLEPeripheralConnectionStateChanged = temporarilyNotSupport('onBLEPeripheralConnectionStateChanged');
const offBLEPeripheralConnectionStateChanged = temporarilyNotSupport('offBLEPeripheralConnectionStateChanged');
const createBLEPeripheralServer = temporarilyNotSupport('createBLEPeripheralServer');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createBLEPeripheralServer', { enumerable: true, configurable: true, get: function() { return createBLEPeripheralServer; } });Object.defineProperty(exports, 'offBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return offBLEPeripheralConnectionStateChanged; } });Object.defineProperty(exports, 'onBLEPeripheralConnectionStateChanged', { enumerable: true, configurable: true, get: function() { return onBLEPeripheralConnectionStateChanged; } });
//# sourceMappingURL=bluetooth-peripheral.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929704, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 日历
const addPhoneRepeatCalendar = temporarilyNotSupport('addPhoneRepeatCalendar');
const addPhoneCalendar = temporarilyNotSupport('addPhoneCalendar');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'addPhoneCalendar', { enumerable: true, configurable: true, get: function() { return addPhoneCalendar; } });Object.defineProperty(exports, 'addPhoneRepeatCalendar', { enumerable: true, configurable: true, get: function() { return addPhoneRepeatCalendar; } });
//# sourceMappingURL=calendar.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929705, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('../storage/index.js');var setStorage = __TEMP__['setStorage'];var setStorageSync = __TEMP__['setStorageSync'];var getStorageSync = __TEMP__['getStorageSync'];

/**
 * 剪贴板部分的api参考了Chameleon项目的实现：
 *
 * setClipboardData: https://github.com/chameleon-team/chameleon-api/tree/master/src/interfaces/setClipBoardData
 * getClipboardData: https://github.com/chameleon-team/chameleon-api/tree/master/src/interfaces/getClipBoardData
 */
const CLIPBOARD_STORAGE_NAME = 'taro_clipboard';
document.addEventListener('copy', () => {
    var _a;
    setStorage({
        key: CLIPBOARD_STORAGE_NAME,
        data: (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()
    }).catch(e => {
        console.error(e);
    });
});
/**
 * 设置系统剪贴板的内容
 */
const setClipboardData = ({ data, success, fail, complete }) => __awaiter(void 0, void 0, void 0, function* () {
    const handle = new MethodHandler({ name: 'setClipboardData', success, fail, complete });
    try {
        setStorageSync(CLIPBOARD_STORAGE_NAME, data);
        /**
         * 已于 iPhone 6s Plus iOS 13.1.3 上的 Safari 测试通过
         * iOS < 10 的系统可能无法使用编程方式访问剪贴板，参考：
         * https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios/34046084
         */
        if (isFunction(document.execCommand)) {
            const textarea = document.createElement('textarea');
            textarea.readOnly = true;
            textarea.value = data;
            textarea.style.position = 'absolute';
            textarea.style.width = '100px';
            textarea.style.left = '-10000px';
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
        else {
            throw new Error('Unsupported Function: \'document.execCommand\'.');
        }
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
});
/**
 * 获取系统剪贴板的内容
 */
const getClipboardData = ({ success, fail, complete } = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const handle = new MethodHandler({ name: 'getClipboardData', success, fail, complete });
    try {
        const data = getStorageSync(CLIPBOARD_STORAGE_NAME);
        return handle.success({ data });
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getClipboardData', { enumerable: true, configurable: true, get: function() { return getClipboardData; } });Object.defineProperty(exports, 'setClipboardData', { enumerable: true, configurable: true, get: function() { return setClipboardData; } });
//# sourceMappingURL=clipboard.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../utils/handler.js":1680223929672,"../storage/index.js":1680223929706}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929706, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var getParameterError = __TEMP__['getParameterError'];var shouldBeObject = __TEMP__['shouldBeObject'];var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./background-fetch.js');Object.defineProperty(exports, 'getBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundFetchData; } });Object.defineProperty(exports, 'getBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundFetchToken; } });Object.defineProperty(exports, 'onBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundFetchData; } });Object.defineProperty(exports, 'setBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundFetchToken; } });

function getItem(key) {
    let item;
    try {
        item = JSON.parse(localStorage.getItem(key) || '');
    }
    catch (e) { } // eslint-disable-line no-empty
    // 只返回使用 Taro.setStorage API 存储的数据
    if (item && typeof item === 'object' && item.hasOwnProperty('data')) {
        return { result: true, data: item.data };
    }
    else {
        return { result: false };
    }
}
// 数据缓存
const setStorageSync = (key, data = '') => {
    if (typeof key !== 'string') {
        console.error(getParameterError({
            name: 'setStorage',
            correct: 'String',
            wrong: key
        }));
        return;
    }
    const type = typeof data;
    let obj = {};
    if (type === 'symbol') {
        obj = { data: '' };
    }
    else {
        obj = { data };
    }
    localStorage.setItem(key, JSON.stringify(obj));
};
const setStorage = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `setStorage:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { key, data, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setStorage', success, fail, complete });
    if (typeof key !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'key',
                correct: 'String',
                wrong: key
            })
        });
    }
    setStorageSync(key, data);
    return handle.success();
};
const revokeBufferURL = temporarilyNotSupport('revokeBufferURL');
const removeStorageSync = (key) => {
    if (typeof key !== 'string') {
        console.error(getParameterError({
            name: 'removeStorage',
            correct: 'String',
            wrong: key
        }));
        return;
    }
    localStorage.removeItem(key);
};
const removeStorage = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `removeStorage:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { key, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'removeStorage', success, fail, complete });
    if (typeof key !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'key',
                correct: 'String',
                wrong: key
            })
        });
    }
    removeStorageSync(key);
    return handle.success();
};
const getStorageSync = (key) => {
    if (typeof key !== 'string') {
        console.error(getParameterError({
            name: 'getStorageSync',
            correct: 'String',
            wrong: key
        }));
        return;
    }
    const res = getItem(key);
    if (res.result)
        return res.data;
    return '';
};
const getStorageInfoSync = () => {
    const res = {
        keys: Object.keys(localStorage),
        limitSize: NaN,
        currentSize: NaN
    };
    return res;
};
const getStorageInfo = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'getStorageInfo', success, fail, complete });
    return handle.success(getStorageInfoSync());
};
const getStorage = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `getStorage:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { key, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getStorage', success, fail, complete });
    if (typeof key !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'key',
                correct: 'String',
                wrong: key
            })
        });
    }
    const { result, data } = getItem(key);
    if (result) {
        return handle.success({ data });
    }
    else {
        return handle.fail({
            errMsg: 'data not found'
        });
    }
};
const createBufferURL = temporarilyNotSupport('createBufferURL');
const clearStorageSync = () => {
    localStorage.clear();
};
const clearStorage = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'clearStorage', success, fail, complete });
    clearStorageSync();
    return handle.success();
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'clearStorage', { enumerable: true, configurable: true, get: function() { return clearStorage; } });Object.defineProperty(exports, 'clearStorageSync', { enumerable: true, configurable: true, get: function() { return clearStorageSync; } });Object.defineProperty(exports, 'createBufferURL', { enumerable: true, configurable: true, get: function() { return createBufferURL; } });Object.defineProperty(exports, 'getStorage', { enumerable: true, configurable: true, get: function() { return getStorage; } });Object.defineProperty(exports, 'getStorageInfo', { enumerable: true, configurable: true, get: function() { return getStorageInfo; } });Object.defineProperty(exports, 'getStorageInfoSync', { enumerable: true, configurable: true, get: function() { return getStorageInfoSync; } });Object.defineProperty(exports, 'getStorageSync', { enumerable: true, configurable: true, get: function() { return getStorageSync; } });Object.defineProperty(exports, 'removeStorage', { enumerable: true, configurable: true, get: function() { return removeStorage; } });Object.defineProperty(exports, 'removeStorageSync', { enumerable: true, configurable: true, get: function() { return removeStorageSync; } });Object.defineProperty(exports, 'revokeBufferURL', { enumerable: true, configurable: true, get: function() { return revokeBufferURL; } });Object.defineProperty(exports, 'setStorage', { enumerable: true, configurable: true, get: function() { return setStorage; } });Object.defineProperty(exports, 'setStorageSync', { enumerable: true, configurable: true, get: function() { return setStorageSync; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672,"./background-fetch.js":1680223929707}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929707, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 周期性更新
const setBackgroundFetchToken = temporarilyNotSupport('setBackgroundFetchToken');
const onBackgroundFetchData = temporarilyNotSupport('onBackgroundFetchData');
const getBackgroundFetchToken = temporarilyNotSupport('getBackgroundFetchToken');
const getBackgroundFetchData = temporarilyNotSupport('getBackgroundFetchData');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return getBackgroundFetchData; } });Object.defineProperty(exports, 'getBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return getBackgroundFetchToken; } });Object.defineProperty(exports, 'onBackgroundFetchData', { enumerable: true, configurable: true, get: function() { return onBackgroundFetchData; } });Object.defineProperty(exports, 'setBackgroundFetchToken', { enumerable: true, configurable: true, get: function() { return setBackgroundFetchToken; } });
//# sourceMappingURL=background-fetch.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929708, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');
var __TEMP__ = require('../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('../base/system.js');var getDeviceInfo = __TEMP__['getDeviceInfo'];
var __TEMP__ = require('../../utils/lodash.js');var throttle = __TEMP__['throttle'];

const callbackManager = new CallbackManager();
let compassListener;
/**
 * Note: 按系统类型获取对应绝对 orientation 事件名，因为安卓系统中直接监听 deviceorientation 事件得到的不是绝对 orientation
 */
const deviceorientationEventName = ['absolutedeviceorientation', 'deviceorientationabsolute', 'deviceorientation'].find(item => {
    if ('on' + item in window) {
        return item;
    }
}) || '';
/**
 * 停止监听罗盘数据
 */
const stopCompass = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'stopCompass', success, fail, complete });
    try {
        window.removeEventListener(deviceorientationEventName, compassListener, true);
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
};
let CompassChangeTrigger = false;
/**
 * 开始监听罗盘数据
 */
const startCompass = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'startCompass', success, fail, complete });
    try {
        if (deviceorientationEventName !== '') {
            if (compassListener) {
                stopCompass();
            }
            compassListener = throttle((evt) => {
                const isAndroid = getDeviceInfo().system === 'AndroidOS';
                if (isAndroid && !evt.absolute && !CompassChangeTrigger) {
                    CompassChangeTrigger = true;
                    console.warn('Warning: In \'onCompassChange\', your browser is not supported to get the orientation relative to the earth, the orientation data will be related to the initial orientation of the device .');
                }
                const alpha = evt.alpha || 0;
                /**
                 * 由于平台差异，accuracy 在 iOS/Android 的值不同。
                 * - iOS：accuracy 是一个 number 类型的值，表示相对于磁北极的偏差。0 表示设备指向磁北，90 表示指向东，180 表示指向南，依此类推。
                 * - Android：accuracy 是一个 string 类型的枚举值。
                 */
                const accuracy = isAndroid ? evt.absolute ? 'high' : 'medium' : alpha;
                callbackManager.trigger({
                    direction: 360 - alpha,
                    accuracy: accuracy
                });
            }, 5000);
            window.addEventListener(deviceorientationEventName, compassListener, true);
        }
        else {
            throw new Error('compass is not supported');
        }
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
};
/**
 * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
 */
const onCompassChange = callback => {
    callbackManager.add(callback);
};
/**
 * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
 */
const offCompassChange = callback => {
    callbackManager.remove(callback);
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offCompassChange', { enumerable: true, configurable: true, get: function() { return offCompassChange; } });Object.defineProperty(exports, 'onCompassChange', { enumerable: true, configurable: true, get: function() { return onCompassChange; } });Object.defineProperty(exports, 'startCompass', { enumerable: true, configurable: true, get: function() { return startCompass; } });Object.defineProperty(exports, 'stopCompass', { enumerable: true, configurable: true, get: function() { return stopCompass; } });
//# sourceMappingURL=compass.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672,"../base/system.js":1680223929684,"../../utils/lodash.js":1680223929674}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929709, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 联系人
const chooseContact = temporarilyNotSupport('chooseContact');
const addPhoneContact = temporarilyNotSupport('addPhoneContact');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'addPhoneContact', { enumerable: true, configurable: true, get: function() { return addPhoneContact; } });Object.defineProperty(exports, 'chooseContact', { enumerable: true, configurable: true, get: function() { return chooseContact; } });
//# sourceMappingURL=contact.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929710, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 加密
const getRandomValues = temporarilyNotSupport('getRandomValues');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getRandomValues', { enumerable: true, configurable: true, get: function() { return getRandomValues; } });
//# sourceMappingURL=crypto.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929711, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 陀螺仪
const stopGyroscope = temporarilyNotSupport('stopGyroscope');
const startGyroscope = temporarilyNotSupport('startGyroscope');
const onGyroscopeChange = temporarilyNotSupport('onGyroscopeChange');
const offGyroscopeChange = temporarilyNotSupport('offGyroscopeChange');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offGyroscopeChange', { enumerable: true, configurable: true, get: function() { return offGyroscopeChange; } });Object.defineProperty(exports, 'onGyroscopeChange', { enumerable: true, configurable: true, get: function() { return onGyroscopeChange; } });Object.defineProperty(exports, 'startGyroscope', { enumerable: true, configurable: true, get: function() { return startGyroscope; } });Object.defineProperty(exports, 'stopGyroscope', { enumerable: true, configurable: true, get: function() { return stopGyroscope; } });
//# sourceMappingURL=gyroscope.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929712, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 蓝牙-信标(Beacon)
const stopBeaconDiscovery = temporarilyNotSupport('stopBeaconDiscovery');
const startBeaconDiscovery = temporarilyNotSupport('startBeaconDiscovery');
const onBeaconUpdate = temporarilyNotSupport('onBeaconUpdate');
const onBeaconServiceChange = temporarilyNotSupport('onBeaconServiceChange');
const offBeaconUpdate = temporarilyNotSupport('offBeaconUpdate');
const offBeaconServiceChange = temporarilyNotSupport('offBeaconServiceChange');
const getBeacons = temporarilyNotSupport('getBeacons');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getBeacons', { enumerable: true, configurable: true, get: function() { return getBeacons; } });Object.defineProperty(exports, 'offBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return offBeaconServiceChange; } });Object.defineProperty(exports, 'offBeaconUpdate', { enumerable: true, configurable: true, get: function() { return offBeaconUpdate; } });Object.defineProperty(exports, 'onBeaconServiceChange', { enumerable: true, configurable: true, get: function() { return onBeaconServiceChange; } });Object.defineProperty(exports, 'onBeaconUpdate', { enumerable: true, configurable: true, get: function() { return onBeaconUpdate; } });Object.defineProperty(exports, 'startBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return startBeaconDiscovery; } });Object.defineProperty(exports, 'stopBeaconDiscovery', { enumerable: true, configurable: true, get: function() { return stopBeaconDiscovery; } });
//# sourceMappingURL=iBeacon.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929713, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 键盘
const onKeyboardHeightChange = temporarilyNotSupport('onKeyboardHeightChange');
const offKeyboardHeightChange = temporarilyNotSupport('offKeyboardHeightChange');
const hideKeyboard = temporarilyNotSupport('hideKeyboard');
const getSelectedTextRange = temporarilyNotSupport('getSelectedTextRange');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getSelectedTextRange', { enumerable: true, configurable: true, get: function() { return getSelectedTextRange; } });Object.defineProperty(exports, 'hideKeyboard', { enumerable: true, configurable: true, get: function() { return hideKeyboard; } });Object.defineProperty(exports, 'offKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return offKeyboardHeightChange; } });Object.defineProperty(exports, 'onKeyboardHeightChange', { enumerable: true, configurable: true, get: function() { return onKeyboardHeightChange; } });
//# sourceMappingURL=keyboard.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929714, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 内存
const onMemoryWarning = temporarilyNotSupport('onMemoryWarning');
const offMemoryWarning = temporarilyNotSupport('offMemoryWarning');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offMemoryWarning', { enumerable: true, configurable: true, get: function() { return offMemoryWarning; } });Object.defineProperty(exports, 'onMemoryWarning', { enumerable: true, configurable: true, get: function() { return onMemoryWarning; } });
//# sourceMappingURL=memory.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929715, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');
var __TEMP__ = require('../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('../../utils/lodash.js');var throttle = __TEMP__['throttle'];

const callbackManager = new CallbackManager();
let deviceMotionListener;
const INTERVAL_MAP = {
    game: {
        interval: 20,
        frequency: 50
    },
    ui: {
        interval: 60,
        frequency: 16.67
    },
    normal: {
        interval: 200,
        frequency: 5
    }
};
/**
 * 停止监听设备方向的变化。
 */
const stopDeviceMotionListening = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'stopDeviceMotionListening', success, fail, complete });
    try {
        window.removeEventListener('deviceorientation', deviceMotionListener, true);
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
};
/**
 * 开始监听设备方向的变化。
 */
const startDeviceMotionListening = ({ interval = 'normal', success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'startDeviceMotionListening', success, fail, complete });
    try {
        const intervalObj = INTERVAL_MAP[interval];
        if (window.DeviceOrientationEvent) {
            if (deviceMotionListener) {
                stopDeviceMotionListening();
            }
            deviceMotionListener = throttle((evt) => {
                callbackManager.trigger({
                    alpha: evt.alpha,
                    beta: evt.beta,
                    gamma: evt.gamma
                });
            }, intervalObj.interval);
            window.addEventListener('deviceorientation', deviceMotionListener, true);
        }
        else {
            throw new Error('deviceMotion is not supported');
        }
        return handle.success();
    }
    catch (e) {
        return handle.fail({ errMsg: e.message });
    }
};
/**
 * 监听设备方向变化事件。
 */
const onDeviceMotionChange = callback => {
    callbackManager.add(callback);
};
/**
 * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
 */
const offDeviceMotionChange = callback => {
    callbackManager.remove(callback);
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return offDeviceMotionChange; } });Object.defineProperty(exports, 'onDeviceMotionChange', { enumerable: true, configurable: true, get: function() { return onDeviceMotionChange; } });Object.defineProperty(exports, 'startDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return startDeviceMotionListening; } });Object.defineProperty(exports, 'stopDeviceMotionListening', { enumerable: true, configurable: true, get: function() { return stopDeviceMotionListening; } });
//# sourceMappingURL=motion.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672,"../../utils/lodash.js":1680223929674}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929716, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];var CallbackManager = __TEMP__['CallbackManager'];

function getConnection() {
    // @ts-ignore
    return navigator.connection || navigator.mozConnection || navigator.webkitConnection || navigator.msConnection;
}
const getNetworkType = (options = {}) => {
    const connection = getConnection();
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getNetworkType', success, fail, complete });
    let networkType = 'unknown';
    // 浏览器不支持获取网络状态
    if (!connection) {
        return handle.success({ networkType });
    }
    // Supports only the navigator.connection.type value which doesn't match the latest spec.
    // https://www.davidbcalhoun.com/2010/using-navigator-connection-android/
    if (!isNaN(Number(connection.type))) {
        switch (connection.type) {
            // @ts-ignore
            case connection.WIFI:
                networkType = 'wifi';
                break;
            // @ts-ignore
            case connection.CELL_3G:
                networkType = '3g';
                break;
            // @ts-ignore
            case connection.CELL_2G:
                networkType = '2g';
                break;
            default:
                // ETHERNET, UNKNOWN
                networkType = 'unknown';
        }
    }
    else if (connection.type) {
        // @ts-ignore
        networkType = connection.type; // Only supports the type value.
        // @ts-ignore
    }
    else if (connection.effectiveType) {
        // @ts-ignore
        networkType = connection.effectiveType;
    }
    return handle.success({ networkType });
};
const networkStatusManager = new CallbackManager();
const networkStatusListener = () => __awaiter(void 0, void 0, void 0, function* () {
    const { networkType } = yield getNetworkType();
    const isConnected = networkType !== 'none';
    const obj = { isConnected, networkType };
    networkStatusManager.trigger(obj);
});
/**
 * 在最近的八次网络请求中, 出现下列三个现象之一则判定弱网。
 * - 出现三次以上连接超时
 * - 出现三次 rtt 超过 400
 * - 出现三次以上的丢包
 * > 弱网事件通知规则是: 弱网状态变化时立即通知, 状态不变时 30s 内最多通知一次。
 */
const onNetworkWeakChange = temporarilyNotSupport('onNetworkWeakChange');
const onNetworkStatusChange = callback => {
    networkStatusManager.add(callback);
    const connection = getConnection();
    if (connection && networkStatusManager.count() === 1) {
        connection.addEventListener('change', networkStatusListener);
    }
};
const offNetworkWeakChange = temporarilyNotSupport('offNetworkStatusChange');
const offNetworkStatusChange = callback => {
    networkStatusManager.remove(callback);
    const connection = getConnection();
    if (connection && networkStatusManager.count() === 0) {
        connection.removeEventListener('change', networkStatusListener);
    }
};
const getLocalIPAddress = temporarilyNotSupport('getLocalIPAddress');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getLocalIPAddress', { enumerable: true, configurable: true, get: function() { return getLocalIPAddress; } });Object.defineProperty(exports, 'getNetworkType', { enumerable: true, configurable: true, get: function() { return getNetworkType; } });Object.defineProperty(exports, 'offNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return offNetworkStatusChange; } });Object.defineProperty(exports, 'offNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return offNetworkWeakChange; } });Object.defineProperty(exports, 'onNetworkStatusChange', { enumerable: true, configurable: true, get: function() { return onNetworkStatusChange; } });Object.defineProperty(exports, 'onNetworkWeakChange', { enumerable: true, configurable: true, get: function() { return onNetworkWeakChange; } });
//# sourceMappingURL=network.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929717, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// NFC
const stopHCE = temporarilyNotSupport('stopHCE');
const startHCE = temporarilyNotSupport('startHCE');
const sendHCEMessage = temporarilyNotSupport('sendHCEMessage');
const onHCEMessage = temporarilyNotSupport('onHCEMessage');
const offHCEMessage = temporarilyNotSupport('offHCEMessage');
const getNFCAdapter = temporarilyNotSupport('getNFCAdapter');
const getHCEState = temporarilyNotSupport('getHCEState');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getHCEState', { enumerable: true, configurable: true, get: function() { return getHCEState; } });Object.defineProperty(exports, 'getNFCAdapter', { enumerable: true, configurable: true, get: function() { return getNFCAdapter; } });Object.defineProperty(exports, 'offHCEMessage', { enumerable: true, configurable: true, get: function() { return offHCEMessage; } });Object.defineProperty(exports, 'onHCEMessage', { enumerable: true, configurable: true, get: function() { return onHCEMessage; } });Object.defineProperty(exports, 'sendHCEMessage', { enumerable: true, configurable: true, get: function() { return sendHCEMessage; } });Object.defineProperty(exports, 'startHCE', { enumerable: true, configurable: true, get: function() { return startHCE; } });Object.defineProperty(exports, 'stopHCE', { enumerable: true, configurable: true, get: function() { return stopHCE; } });
//# sourceMappingURL=nfc.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929718, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];var getParameterError = __TEMP__['getParameterError'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

const makePhoneCall = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `makePhoneCall:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { phoneNumber, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'makePhoneCall', success, fail, complete });
    if (typeof phoneNumber !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'phoneNumber',
                correct: 'String',
                wrong: phoneNumber
            })
        });
    }
    window.location.href = `tel:${phoneNumber}`;
    return handle.success();
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'makePhoneCall', { enumerable: true, configurable: true, get: function() { return makePhoneCall; } });
//# sourceMappingURL=phone.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929719, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var processOpenApi = __TEMP__['processOpenApi'];

// 扫码
const scanCode = processOpenApi({
    name: 'scanQRCode',
    defaultOptions: { needResult: 1 },
    formatResult: res => ({
        errMsg: res.errMsg === 'scanQRCode:ok' ? 'scanCode:ok' : res.errMsg,
        result: res.resultStr
    })
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'scanCode', { enumerable: true, configurable: true, get: function() { return scanCode; } });
//# sourceMappingURL=scan.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929720, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 屏幕
const setVisualEffectOnCapture = temporarilyNotSupport('setVisualEffectOnCapture');
const setScreenBrightness = temporarilyNotSupport('setScreenBrightness');
const setKeepScreenOn = temporarilyNotSupport('setKeepScreenOn');
const onUserCaptureScreen = temporarilyNotSupport('onUserCaptureScreen');
const offUserCaptureScreen = temporarilyNotSupport('offUserCaptureScreen');
const getScreenBrightness = temporarilyNotSupport('getScreenBrightness');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getScreenBrightness', { enumerable: true, configurable: true, get: function() { return getScreenBrightness; } });Object.defineProperty(exports, 'offUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return offUserCaptureScreen; } });Object.defineProperty(exports, 'onUserCaptureScreen', { enumerable: true, configurable: true, get: function() { return onUserCaptureScreen; } });Object.defineProperty(exports, 'setKeepScreenOn', { enumerable: true, configurable: true, get: function() { return setKeepScreenOn; } });Object.defineProperty(exports, 'setScreenBrightness', { enumerable: true, configurable: true, get: function() { return setScreenBrightness; } });Object.defineProperty(exports, 'setVisualEffectOnCapture', { enumerable: true, configurable: true, get: function() { return setVisualEffectOnCapture; } });
//# sourceMappingURL=screen.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929721, function(require, module, exports) {
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

const vibrator = function vibrator(mm) {
    try {
        return window.navigator.vibrate(mm);
    }
    catch (e) {
        console.warn('当前浏览器不支持 vibrate。');
    }
};
/**
 * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
 */
const vibrateShort = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'vibrateShort', success, fail, complete });
    if (vibrator(15)) {
        return handle.success();
    }
    else {
        return handle.fail({ errMsg: 'style is not support' });
    }
};
/**
 * 使手机发生较长时间的振动（400 ms)
 */
const vibrateLong = ({ success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'vibrateLong', success, fail, complete });
    if (vibrator(400)) {
        return handle.success();
    }
    else {
        return handle.fail({ errMsg: 'style is not support' });
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'vibrateLong', { enumerable: true, configurable: true, get: function() { return vibrateLong; } });Object.defineProperty(exports, 'vibrateShort', { enumerable: true, configurable: true, get: function() { return vibrateShort; } });
//# sourceMappingURL=vibrate.js.map

}, function(modId) { var map = {"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929722, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// Wi-Fi
const stopWifi = temporarilyNotSupport('stopWifi');
const startWifi = temporarilyNotSupport('startWifi');
const setWifiList = temporarilyNotSupport('setWifiList');
const onWifiConnectedWithPartialInfo = temporarilyNotSupport('onWifiConnectedWithPartialInfo');
const onWifiConnected = temporarilyNotSupport('onWifiConnected');
const onGetWifiList = temporarilyNotSupport('onGetWifiList');
const offWifiConnected = temporarilyNotSupport('offWifiConnected');
const offGetWifiList = temporarilyNotSupport('offGetWifiList');
const getWifiList = temporarilyNotSupport('getWifiList');
const getConnectedWifi = temporarilyNotSupport('getConnectedWifi');
const connectWifi = temporarilyNotSupport('connectWifi');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'connectWifi', { enumerable: true, configurable: true, get: function() { return connectWifi; } });Object.defineProperty(exports, 'getConnectedWifi', { enumerable: true, configurable: true, get: function() { return getConnectedWifi; } });Object.defineProperty(exports, 'getWifiList', { enumerable: true, configurable: true, get: function() { return getWifiList; } });Object.defineProperty(exports, 'offGetWifiList', { enumerable: true, configurable: true, get: function() { return offGetWifiList; } });Object.defineProperty(exports, 'offWifiConnected', { enumerable: true, configurable: true, get: function() { return offWifiConnected; } });Object.defineProperty(exports, 'onGetWifiList', { enumerable: true, configurable: true, get: function() { return onGetWifiList; } });Object.defineProperty(exports, 'onWifiConnected', { enumerable: true, configurable: true, get: function() { return onWifiConnected; } });Object.defineProperty(exports, 'onWifiConnectedWithPartialInfo', { enumerable: true, configurable: true, get: function() { return onWifiConnectedWithPartialInfo; } });Object.defineProperty(exports, 'setWifiList', { enumerable: true, configurable: true, get: function() { return setWifiList; } });Object.defineProperty(exports, 'startWifi', { enumerable: true, configurable: true, get: function() { return startWifi; } });Object.defineProperty(exports, 'stopWifi', { enumerable: true, configurable: true, get: function() { return stopWifi; } });
//# sourceMappingURL=wifi.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929723, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 第三方平台
const getExtConfigSync = temporarilyNotSupport('getExtConfigSync');
const getExtConfig = temporarilyNotSupport('getExtConfig');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getExtConfig', { enumerable: true, configurable: true, get: function() { return getExtConfig; } });Object.defineProperty(exports, 'getExtConfigSync', { enumerable: true, configurable: true, get: function() { return getExtConfigSync; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929724, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 文件
const saveFileToDisk = temporarilyNotSupport('saveFileToDisk');
const saveFile = temporarilyNotSupport('saveFile');
const removeSavedFile = temporarilyNotSupport('removeSavedFile');
const openDocument = temporarilyNotSupport('openDocument');
const getSavedFileList = temporarilyNotSupport('getSavedFileList');
const getSavedFileInfo = temporarilyNotSupport('getSavedFileInfo');
const getFileSystemManager = temporarilyNotSupport('getFileSystemManager');
const getFileInfo = temporarilyNotSupport('getFileInfo');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getFileInfo', { enumerable: true, configurable: true, get: function() { return getFileInfo; } });Object.defineProperty(exports, 'getFileSystemManager', { enumerable: true, configurable: true, get: function() { return getFileSystemManager; } });Object.defineProperty(exports, 'getSavedFileInfo', { enumerable: true, configurable: true, get: function() { return getSavedFileInfo; } });Object.defineProperty(exports, 'getSavedFileList', { enumerable: true, configurable: true, get: function() { return getSavedFileList; } });Object.defineProperty(exports, 'openDocument', { enumerable: true, configurable: true, get: function() { return openDocument; } });Object.defineProperty(exports, 'removeSavedFile', { enumerable: true, configurable: true, get: function() { return removeSavedFile; } });Object.defineProperty(exports, 'saveFile', { enumerable: true, configurable: true, get: function() { return saveFile; } });Object.defineProperty(exports, 'saveFileToDisk', { enumerable: true, configurable: true, get: function() { return saveFileToDisk; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929725, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@tarojs/router');Object.defineProperty(exports, 'getCurrentPages', { enumerable: true, configurable: true, get: function() { return __TEMP__.getCurrentPages; } });

const getApp = function () {
    return Taro.getCurrentInstance().app;
};
// 自定义组件
const getCurrentInstance = Taro.getCurrentInstance;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getApp', { enumerable: true, configurable: true, get: function() { return getApp; } });Object.defineProperty(exports, 'getCurrentInstance', { enumerable: true, configurable: true, get: function() { return getCurrentInstance; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929726, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];var processOpenApi = __TEMP__['processOpenApi'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./getLocation.js');Object.defineProperty(exports, 'getLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.getLocation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./chooseLocation.js');Object.defineProperty(exports, 'chooseLocation', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseLocation; } });

// 位置
const stopLocationUpdate = temporarilyNotSupport('stopLocationUpdate');
const startLocationUpdateBackground = temporarilyNotSupport('startLocationUpdateBackground');
const startLocationUpdate = temporarilyNotSupport('startLocationUpdate');
const openLocation = processOpenApi({
    name: 'openLocation',
    defaultOptions: { scale: 18 }
});
const onLocationChangeError = temporarilyNotSupport('onLocationChangeError');
const onLocationChange = temporarilyNotSupport('onLocationChange');
const offLocationChangeError = temporarilyNotSupport('offLocationChangeError');
const offLocationChange = temporarilyNotSupport('offLocationChange');
const choosePoi = temporarilyNotSupport('choosePoi');
const getFuzzyLocation = temporarilyNotSupport('getFuzzyLocation');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'choosePoi', { enumerable: true, configurable: true, get: function() { return choosePoi; } });Object.defineProperty(exports, 'getFuzzyLocation', { enumerable: true, configurable: true, get: function() { return getFuzzyLocation; } });Object.defineProperty(exports, 'offLocationChange', { enumerable: true, configurable: true, get: function() { return offLocationChange; } });Object.defineProperty(exports, 'offLocationChangeError', { enumerable: true, configurable: true, get: function() { return offLocationChangeError; } });Object.defineProperty(exports, 'onLocationChange', { enumerable: true, configurable: true, get: function() { return onLocationChange; } });Object.defineProperty(exports, 'onLocationChangeError', { enumerable: true, configurable: true, get: function() { return onLocationChangeError; } });Object.defineProperty(exports, 'openLocation', { enumerable: true, configurable: true, get: function() { return openLocation; } });Object.defineProperty(exports, 'startLocationUpdate', { enumerable: true, configurable: true, get: function() { return startLocationUpdate; } });Object.defineProperty(exports, 'startLocationUpdateBackground', { enumerable: true, configurable: true, get: function() { return startLocationUpdateBackground; } });Object.defineProperty(exports, 'stopLocationUpdate', { enumerable: true, configurable: true, get: function() { return stopLocationUpdate; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"./getLocation.js":1680223929727,"./chooseLocation.js":1680223929728}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929727, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];var processOpenApi = __TEMP__['processOpenApi'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

const getLocationByW3CApi = (options) => {
    var _a;
    // 断言 options 必须是 Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `getLocation:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    // 解构回调函数
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getLocation', success, fail, complete });
    // const defaultMaximumAge = 5 * 1000
    const positionOptions = {
        enableHighAccuracy: options.isHighAccuracy || (options.altitude != null),
        // maximumAge: defaultMaximumAge, // 允许取多久以内的缓存位置
        timeout: options.highAccuracyExpireTime // 高精度定位超时时间
    };
    // Web端API实现暂时仅支持GPS坐标系
    if (((_a = options.type) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== 'WGS84') {
        return handle.fail({
            errMsg: 'This coordinate system type is not temporarily supported'
        });
    }
    // 判断当前浏览器是否支持位置API
    const geolocationSupported = navigator.geolocation;
    if (!geolocationSupported) {
        return handle.fail({
            errMsg: 'The current browser does not support this feature'
        });
    }
    // 开始获取位置
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const result = {
                /** 位置的精确度 */
                accuracy: position.coords.accuracy,
                /** 高度，单位 m */
                altitude: position.coords.altitude,
                /** 水平精度，单位 m */
                horizontalAccuracy: position.coords.accuracy,
                /** 纬度，范围为 -90~90，负数表示南纬 */
                latitude: position.coords.latitude,
                /** 经度，范围为 -180~180，负数表示西经 */
                longitude: position.coords.longitude,
                /** 速度，单位 m/s */
                speed: position.coords.speed,
                /** 垂直精度，单位 m（Android 无法获取，返回 0） */
                verticalAccuracy: position.coords.altitudeAccuracy || 0,
                /** 调用结果,自动补充 */
                errMsg: ''
            };
            handle.success(result, { resolve, reject });
        }, (error) => {
            handle.fail({ errMsg: error.message }, { resolve, reject });
        }, positionOptions);
    });
};
const getLocation = processOpenApi({
    name: 'getLocation',
    standardMethod: getLocationByW3CApi
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getLocation', { enumerable: true, configurable: true, get: function() { return getLocation; } });
//# sourceMappingURL=getLocation.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929728, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __rest = __TEMP__['__rest'];
var __TEMP__ = require('./style.scss.js');
var __TEMP__ = require('query-string');var stringify = __TEMP__['stringify'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

function createLocationChooser(handler, key = LOCATION_APIKEY, mapOpt = {}) {
    var _a, _b, _c;
    const { latitude, longitude } = mapOpt, opts = __rest(mapOpt, ["latitude", "longitude"]);
    const query = Object.assign({ key, type: 1, coord: ((_a = mapOpt.coord) !== null && _a !== void 0 ? _a : [latitude, longitude].every(e => Number(e) >= 0)) ? `${latitude},${longitude}` : undefined, referer: 'myapp' }, opts);
    const html = `
<div class='taro_choose_location'>
  <div class='taro_choose_location_bar'>
    <div class='taro_choose_location_back'></div>
    <p class='taro_choose_location_title'>位置</p>
    <button class='taro_choose_location_submit'>完成</button>
  </div>
  <iframe class='taro_choose_location_frame' frameborder='0' src="https://apis.map.qq.com/tools/locpicker?${stringify(query, { arrayFormat: 'comma', skipNull: true })}" />
</div>
`;
    const container = document.createElement('div');
    container.innerHTML = html;
    const main = container.querySelector('.taro_choose_location');
    function show() {
        setTimeout(() => {
            main.style.top = '0';
        });
    }
    function hide() {
        main.style.top = '100%';
    }
    function back() {
        hide();
        handler({ errMsg: 'cancel' });
    }
    function submit() {
        hide();
        handler();
    }
    function remove() {
        container.remove();
        window.removeEventListener('popstate', back);
    }
    (_b = container.querySelector('.taro_choose_location_back')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', back);
    (_c = container.querySelector('.taro_choose_location_submit')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', submit);
    window.addEventListener('popstate', back);
    return {
        show,
        remove,
        container
    };
}
/**
 * 打开地图选择位置。
 */
const chooseLocation = ({ success, fail, complete, mapOpts } = {}) => {
    const key = LOCATION_APIKEY;
    const handle = new MethodHandler({ name: 'chooseLocation', success, fail, complete });
    return new Promise((resolve, reject) => {
        const chooseLocation = {};
        if (!key) {
            console.warn('chooseLocation api 依赖腾讯地图定位api，需要在 defineConstants 中配置 LOCATION_APIKEY');
            return handle.fail({
                errMsg: 'LOCATION_APIKEY needed'
            }, { resolve, reject });
        }
        const onMessage = event => {
            // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
            const loc = event.data;
            // 防止其他应用也会向该页面 post 信息，需判断 module 是否为'locationPicker'
            if (!loc || loc.module !== 'locationPicker')
                return;
            chooseLocation.name = loc.poiname;
            chooseLocation.address = loc.poiaddress;
            chooseLocation.latitude = loc.latlng.lat;
            chooseLocation.longitude = loc.latlng.lng;
        };
        const chooser = createLocationChooser(res => {
            window.removeEventListener('message', onMessage, false);
            setTimeout(() => {
                chooser.remove();
            }, 300);
            if (res) {
                return handle.fail(res, { resolve, reject });
            }
            else {
                if (chooseLocation.latitude && chooseLocation.longitude) {
                    return handle.success(chooseLocation, { resolve, reject });
                }
                else {
                    return handle.fail({}, { resolve, reject });
                }
            }
        }, key, mapOpts);
        document.body.appendChild(chooser.container);
        window.addEventListener('message', onMessage, false);
        chooser.show();
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseLocation', { enumerable: true, configurable: true, get: function() { return chooseLocation; } });
//# sourceMappingURL=chooseLocation.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"./style.scss.js":1680223929729,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929729, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_style-inject@0.3.0/node_modules/style-inject/dist/style-inject.es.js');var styleInject = __REQUIRE_DEFAULT__(__TEMP__);

var css_248z = ".taro_choose_location {\n  display: flex;\n  position: fixed;\n  top: 100%;\n  z-index: 1;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  transition: ease top 0.3s; }\n  .taro_choose_location_bar {\n    display: flex;\n    flex: 0 95px;\n    height: 95px;\n    background-color: #ededed;\n    color: #090909; }\n  .taro_choose_location_back {\n    position: relative;\n    flex: 0 45px;\n    margin-top: 30px;\n    width: 33px;\n    height: 30px; }\n    .taro_choose_location_back::before {\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border: solid 15px;\n      border-color: transparent #090909 transparent transparent;\n      width: 0;\n      height: 0;\n      content: \"\"; }\n    .taro_choose_location_back::after {\n      display: block;\n      position: absolute;\n      left: 3px;\n      top: 0;\n      border: solid 15px;\n      border-color: transparent #ededed transparent transparent;\n      width: 0;\n      height: 0;\n      content: \"\"; }\n  .taro_choose_location_title {\n    flex: 1;\n    padding-left: 30px;\n    line-height: 95px; }\n  .taro_choose_location_submit {\n    margin: 18px 30px 0 0;\n    padding: 0;\n    border: none;\n    width: 110px;\n    height: 60px;\n    background-color: #08bf62;\n    line-height: 60px;\n    font-size: 28px;\n    color: #fff; }\n  .taro_choose_location_frame {\n    flex: 1; }\n";
var stylesheet=".taro_choose_location {\n  display: flex;\n  position: fixed;\n  top: 100%;\n  z-index: 1;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  transition: ease top 0.3s; }\n  .taro_choose_location_bar {\n    display: flex;\n    flex: 0 95px;\n    height: 95px;\n    background-color: #ededed;\n    color: #090909; }\n  .taro_choose_location_back {\n    position: relative;\n    flex: 0 45px;\n    margin-top: 30px;\n    width: 33px;\n    height: 30px; }\n    .taro_choose_location_back::before {\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border: solid 15px;\n      border-color: transparent #090909 transparent transparent;\n      width: 0;\n      height: 0;\n      content: \"\"; }\n    .taro_choose_location_back::after {\n      display: block;\n      position: absolute;\n      left: 3px;\n      top: 0;\n      border: solid 15px;\n      border-color: transparent #ededed transparent transparent;\n      width: 0;\n      height: 0;\n      content: \"\"; }\n  .taro_choose_location_title {\n    flex: 1;\n    padding-left: 30px;\n    line-height: 95px; }\n  .taro_choose_location_submit {\n    margin: 18px 30px 0 0;\n    padding: 0;\n    border: none;\n    width: 110px;\n    height: 60px;\n    background-color: #08bf62;\n    line-height: 60px;\n    font-size: 28px;\n    color: #fff; }\n  .taro_choose_location_frame {\n    flex: 1; }\n";
styleInject(css_248z,{"insertAt":"top"});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return css_248z; } });Object.defineProperty(exports, 'stylesheet', { enumerable: true, configurable: true, get: function() { return stylesheet; } });
//# sourceMappingURL=style.scss.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_style-inject@0.3.0/node_modules/style-inject/dist/style-inject.es.js":1680223929730}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929730, function(require, module, exports) {
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return styleInject; } });
//# sourceMappingURL=style-inject.es.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929731, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./audio/index.js');Object.defineProperty(exports, 'createAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createAudioContext; } });Object.defineProperty(exports, 'createInnerAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createInnerAudioContext; } });Object.defineProperty(exports, 'createMediaAudioPlayer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaAudioPlayer; } });Object.defineProperty(exports, 'createWebAudioContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createWebAudioContext; } });Object.defineProperty(exports, 'getAvailableAudioSources', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAvailableAudioSources; } });Object.defineProperty(exports, 'pauseVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.pauseVoice; } });Object.defineProperty(exports, 'playVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.playVoice; } });Object.defineProperty(exports, 'setInnerAudioOption', { enumerable: true, configurable: true, get: function() { return __TEMP__.setInnerAudioOption; } });Object.defineProperty(exports, 'stopVoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopVoice; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./background-audio/index.js');Object.defineProperty(exports, 'getBackgroundAudioManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundAudioManager; } });Object.defineProperty(exports, 'getBackgroundAudioPlayerState', { enumerable: true, configurable: true, get: function() { return __TEMP__.getBackgroundAudioPlayerState; } });Object.defineProperty(exports, 'onBackgroundAudioPause', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioPause; } });Object.defineProperty(exports, 'onBackgroundAudioPlay', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioPlay; } });Object.defineProperty(exports, 'onBackgroundAudioStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.onBackgroundAudioStop; } });Object.defineProperty(exports, 'pauseBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.pauseBackgroundAudio; } });Object.defineProperty(exports, 'playBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.playBackgroundAudio; } });Object.defineProperty(exports, 'seekBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.seekBackgroundAudio; } });Object.defineProperty(exports, 'stopBackgroundAudio', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopBackgroundAudio; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./camera.js');Object.defineProperty(exports, 'createCameraContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createCameraContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./image/index.js');Object.defineProperty(exports, 'chooseMessageFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseMessageFile; } });Object.defineProperty(exports, 'compressImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.compressImage; } });Object.defineProperty(exports, 'previewMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewMedia; } });Object.defineProperty(exports, 'saveImageToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveImageToPhotosAlbum; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./live.js');Object.defineProperty(exports, 'createLivePlayerContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createLivePlayerContext; } });Object.defineProperty(exports, 'createLivePusherContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createLivePusherContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./map.js');Object.defineProperty(exports, 'createMapContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMapContext; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./media-recorder.js');Object.defineProperty(exports, 'createMediaRecorder', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaRecorder; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./recorder.js');Object.defineProperty(exports, 'getRecorderManager', { enumerable: true, configurable: true, get: function() { return __TEMP__.getRecorderManager; } });Object.defineProperty(exports, 'startRecord', { enumerable: true, configurable: true, get: function() { return __TEMP__.startRecord; } });Object.defineProperty(exports, 'stopRecord', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopRecord; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./video/index.js');Object.defineProperty(exports, 'chooseMedia', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseMedia; } });Object.defineProperty(exports, 'chooseVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseVideo; } });Object.defineProperty(exports, 'compressVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.compressVideo; } });Object.defineProperty(exports, 'createVideoContext', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoContext; } });Object.defineProperty(exports, 'getVideoInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getVideoInfo; } });Object.defineProperty(exports, 'openVideoEditor', { enumerable: true, configurable: true, get: function() { return __TEMP__.openVideoEditor; } });Object.defineProperty(exports, 'saveVideoToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return __TEMP__.saveVideoToPhotosAlbum; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./video-decoder.js');Object.defineProperty(exports, 'createVideoDecoder', { enumerable: true, configurable: true, get: function() { return __TEMP__.createVideoDecoder; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./video-processing.js');Object.defineProperty(exports, 'createMediaContainer', { enumerable: true, configurable: true, get: function() { return __TEMP__.createMediaContainer; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./voip.js');Object.defineProperty(exports, 'exitVoIPChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.exitVoIPChat; } });Object.defineProperty(exports, 'joinVoIPChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.joinVoIPChat; } });Object.defineProperty(exports, 'offVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatInterrupted; } });Object.defineProperty(exports, 'offVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatMembersChanged; } });Object.defineProperty(exports, 'offVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPChatStateChanged; } });Object.defineProperty(exports, 'offVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.offVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatInterrupted; } });Object.defineProperty(exports, 'onVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatSpeakersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatSpeakersChanged; } });Object.defineProperty(exports, 'onVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPChatStateChanged; } });Object.defineProperty(exports, 'onVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return __TEMP__.onVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'setEnable1v1Chat', { enumerable: true, configurable: true, get: function() { return __TEMP__.setEnable1v1Chat; } });Object.defineProperty(exports, 'subscribeVoIPVideoMembers', { enumerable: true, configurable: true, get: function() { return __TEMP__.subscribeVoIPVideoMembers; } });Object.defineProperty(exports, 'updateVoIPChatMuteConfig', { enumerable: true, configurable: true, get: function() { return __TEMP__.updateVoIPChatMuteConfig; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./audio/index.js":1680223929732,"./background-audio/index.js":1680223929734,"./camera.js":1680223929736,"./image/index.js":1680223929737,"./live.js":1680223929741,"./map.js":1680223929742,"./media-recorder.js":1680223929743,"./recorder.js":1680223929744,"./video/index.js":1680223929745,"./video-decoder.js":1680223929746,"./video-processing.js":1680223929747,"./voip.js":1680223929748}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929732, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('./InnerAudioContext.js');var InnerAudioContext = __TEMP__['InnerAudioContext'];

// 音频
const stopVoice = temporarilyNotSupport('stopVoice');
const setInnerAudioOption = temporarilyNotSupport('setInnerAudioOption');
const playVoice = temporarilyNotSupport('playVoice');
const pauseVoice = temporarilyNotSupport('pauseVoice');
const getAvailableAudioSources = temporarilyNotSupport('getAvailableAudioSources');
const createWebAudioContext = temporarilyNotSupport('createWebAudioContext');
const createMediaAudioPlayer = temporarilyNotSupport('createMediaAudioPlayer');
/**
 * 创建内部 audio 上下文 InnerAudioContext 对象。
 */
const createInnerAudioContext = () => new InnerAudioContext();
const createAudioContext = temporarilyNotSupport('createAudioContext');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createAudioContext', { enumerable: true, configurable: true, get: function() { return createAudioContext; } });Object.defineProperty(exports, 'createInnerAudioContext', { enumerable: true, configurable: true, get: function() { return createInnerAudioContext; } });Object.defineProperty(exports, 'createMediaAudioPlayer', { enumerable: true, configurable: true, get: function() { return createMediaAudioPlayer; } });Object.defineProperty(exports, 'createWebAudioContext', { enumerable: true, configurable: true, get: function() { return createWebAudioContext; } });Object.defineProperty(exports, 'getAvailableAudioSources', { enumerable: true, configurable: true, get: function() { return getAvailableAudioSources; } });Object.defineProperty(exports, 'pauseVoice', { enumerable: true, configurable: true, get: function() { return pauseVoice; } });Object.defineProperty(exports, 'playVoice', { enumerable: true, configurable: true, get: function() { return playVoice; } });Object.defineProperty(exports, 'setInnerAudioOption', { enumerable: true, configurable: true, get: function() { return setInnerAudioOption; } });Object.defineProperty(exports, 'stopVoice', { enumerable: true, configurable: true, get: function() { return stopVoice; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"./InnerAudioContext.js":1680223929733}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929733, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../../utils/index.js');var permanentlyNotSupport = __TEMP__['permanentlyNotSupport'];
var __TEMP__ = require('../../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];

class InnerAudioContext {
    constructor() {
        this.__startTime = 0;
        this.play = () => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.play(); };
        this.pause = () => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.pause(); };
        this.stop = () => {
            this.pause();
            this.seek(0);
            this.stopStack.trigger();
        };
        this.seek = (position) => {
            if (this.Instance) {
                this.Instance.currentTime = position;
            }
        };
        /**
         * @TODO destroy得并不干净
         */
        this.destroy = () => {
            this.stop();
            if (this.Instance) {
                document.body.removeChild(this.Instance);
                this.Instance = undefined;
            }
        };
        this.onCanplay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('canplay', callback); };
        this.onPlay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('play', callback); };
        this.onPause = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('pause', callback); };
        this.onStop = (callback = () => { }) => this.stopStack.add(callback);
        this.onEnded = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('ended', callback); };
        this.onTimeUpdate = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('timeupdate', callback); };
        this.onError = (callback) => this.errorStack.add(callback);
        this.onWaiting = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('waiting', callback); };
        this.onSeeking = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('seeking', callback); };
        this.onSeeked = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('seeked', callback); };
        this.offCanplay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('canplay', callback); };
        this.offPlay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('play', callback); };
        this.offPause = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('pause', callback); };
        this.offStop = (callback = () => { }) => this.stopStack.remove(callback);
        this.offEnded = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('ended', callback); };
        this.offTimeUpdate = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('timeupdate', callback); };
        this.offError = (callback = () => { }) => this.errorStack.remove(callback);
        this.offWaiting = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('waiting', callback); };
        this.offSeeking = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('seeking', callback); };
        this.offSeeked = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('seeked', callback); };
        this.Instance = new Audio();
        this.errorStack = new CallbackManager();
        this.stopStack = new CallbackManager();
        Taro.eventCenter.on('__taroRouterChange', () => { this.stop(); });
        this.onPlay(() => {
            if (this.currentTime !== this.startTime) {
                this.seek(this.startTime);
            }
        });
    }
    set autoplay(e) { this.setProperty('autoplay', e); }
    get autoplay() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.autoplay) || false; }
    get buffered() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.buffered.length) || 0; }
    get currentTime() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.currentTime) || 0; }
    get duration() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.duration) || 0; }
    set loop(e) { this.setProperty('loop', e); }
    get loop() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.loop) || false; }
    get paused() { var _a, _b; return (_b = (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.paused) !== null && _b !== void 0 ? _b : true; }
    set src(e) { this.setProperty('src', e); }
    get src() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.src) || ''; }
    set volume(e) { this.setProperty('volume', e); }
    get volume() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.volume) || 0; }
    set playbackRate(e) { this.setProperty('playbackRate', e); }
    get playbackRate() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.playbackRate) || 0; }
    set obeyMuteSwitch(_e) { permanentlyNotSupport('InnerAudioContext.obeyMuteSwitch')(); }
    get obeyMuteSwitch() { return true; }
    set startTime(e) { this.__startTime = e; }
    get startTime() { return this.__startTime || 0; }
    set referrerPolicy(e) { var _a; (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.setAttribute('referrerpolicy', e); }
    get referrerPolicy() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.getAttribute('referrerpolicy')) || 'origin'; }
    setProperty(key, value) {
        if (this.Instance) {
            this.Instance[key] = value;
        }
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'InnerAudioContext', { enumerable: true, configurable: true, get: function() { return InnerAudioContext; } });
//# sourceMappingURL=InnerAudioContext.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929734, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('./BackgroundAudioManager.js');var BackgroundAudioManager = __TEMP__['BackgroundAudioManager'];

// 背景音频
const stopBackgroundAudio = temporarilyNotSupport('stopBackgroundAudio');
const seekBackgroundAudio = temporarilyNotSupport('seekBackgroundAudio');
const playBackgroundAudio = temporarilyNotSupport('playBackgroundAudio');
const pauseBackgroundAudio = temporarilyNotSupport('pauseBackgroundAudio');
const onBackgroundAudioStop = temporarilyNotSupport('onBackgroundAudioStop');
const onBackgroundAudioPlay = temporarilyNotSupport('onBackgroundAudioPlay');
const onBackgroundAudioPause = temporarilyNotSupport('onBackgroundAudioPause');
const getBackgroundAudioPlayerState = temporarilyNotSupport('getBackgroundAudioPlayerState');
/**
 * 获取全局唯一的背景音频管理器
 */
const getBackgroundAudioManager = () => new BackgroundAudioManager();

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getBackgroundAudioManager', { enumerable: true, configurable: true, get: function() { return getBackgroundAudioManager; } });Object.defineProperty(exports, 'getBackgroundAudioPlayerState', { enumerable: true, configurable: true, get: function() { return getBackgroundAudioPlayerState; } });Object.defineProperty(exports, 'onBackgroundAudioPause', { enumerable: true, configurable: true, get: function() { return onBackgroundAudioPause; } });Object.defineProperty(exports, 'onBackgroundAudioPlay', { enumerable: true, configurable: true, get: function() { return onBackgroundAudioPlay; } });Object.defineProperty(exports, 'onBackgroundAudioStop', { enumerable: true, configurable: true, get: function() { return onBackgroundAudioStop; } });Object.defineProperty(exports, 'pauseBackgroundAudio', { enumerable: true, configurable: true, get: function() { return pauseBackgroundAudio; } });Object.defineProperty(exports, 'playBackgroundAudio', { enumerable: true, configurable: true, get: function() { return playBackgroundAudio; } });Object.defineProperty(exports, 'seekBackgroundAudio', { enumerable: true, configurable: true, get: function() { return seekBackgroundAudio; } });Object.defineProperty(exports, 'stopBackgroundAudio', { enumerable: true, configurable: true, get: function() { return stopBackgroundAudio; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"./BackgroundAudioManager.js":1680223929735}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929735, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var permanentlyNotSupport = __TEMP__['permanentlyNotSupport'];
var __TEMP__ = require('../../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];

class BackgroundAudioManager {
    constructor() {
        this.__startTime = 0;
        this.play = () => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.play(); };
        this.pause = () => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.pause(); };
        this.seek = (position) => {
            if (this.Instance) {
                this.Instance.currentTime = position;
            }
        };
        this.stop = () => {
            this.pause();
            this.seek(0);
            this.stopStack.trigger();
        };
        this.onCanplay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('canplay', callback); };
        this.onWaiting = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('waiting', callback); };
        this.onError = (callback) => this.errorStack.add(callback);
        this.onPlay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('play', callback); };
        this.onPause = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('pause', callback); };
        this.onSeeking = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('seeking', callback); };
        this.onSeeked = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('seeked', callback); };
        this.onEnded = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('ended', callback); };
        this.onStop = (callback = () => { }) => this.stopStack.add(callback);
        this.onTimeUpdate = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.addEventListener('timeupdate', callback); };
        this.onPrev = permanentlyNotSupport('BackgroundAudioManager.onPrev');
        this.onNext = permanentlyNotSupport('BackgroundAudioManager.onNext');
        this.offCanplay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('canplay', callback); };
        this.offWaiting = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('waiting', callback); };
        this.offError = (callback = () => { }) => this.errorStack.remove(callback);
        this.offPlay = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('play', callback); };
        this.offPause = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('pause', callback); };
        this.offSeeking = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('seeking', callback); };
        this.offSeeked = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('seeked', callback); };
        this.offEnded = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('ended', callback); };
        this.offStop = (callback = () => { }) => this.stopStack.remove(callback);
        this.offTimeUpdate = (callback = () => { }) => { var _a; return (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.removeEventListener('timeupdate', callback); };
        this.offPrev = permanentlyNotSupport('BackgroundAudioManager.offPrev');
        this.offNext = permanentlyNotSupport('BackgroundAudioManager.offNext');
        this.Instance = new Audio();
        this.errorStack = new CallbackManager();
        this.stopStack = new CallbackManager();
        this.Instance.autoplay = true;
        this.onPlay(() => {
            if (this.currentTime !== this.startTime) {
                this.seek(this.startTime);
            }
        });
    }
    set src(e) { this.setProperty('src', e); }
    get src() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.src) || ''; }
    set startTime(e) { this.__startTime = e; }
    get startTime() { return this.__startTime || 0; }
    set title(e) { this.dataset('title', e); }
    get title() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.dataset.title) || ''; }
    set epname(e) { this.dataset('epname', e); }
    get epname() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.dataset.epname) || ''; }
    set singer(e) { this.dataset('singer', e); }
    get singer() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.dataset.singer) || ''; }
    set coverImgUrl(e) { this.dataset('coverImgUrl', e); }
    get coverImgUrl() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.dataset.coverImgUrl) || ''; }
    set webUrl(e) { this.dataset('webUrl', e); }
    get webUrl() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.dataset.webUrl) || ''; }
    set protocol(e) { this.dataset('protocol', e); }
    get protocol() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.dataset.protocol) || ''; }
    set playbackRate(e) { this.setProperty('playbackRate', e); }
    get playbackRate() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.playbackRate) || 0; }
    get duration() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.duration) || 0; }
    get currentTime() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.currentTime) || 0; }
    get paused() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.paused) || false; }
    get buffered() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.buffered.length) || 0; }
    set referrerPolicy(e) { var _a; (_a = this.Instance) === null || _a === void 0 ? void 0 : _a.setAttribute('referrerpolicy', e); }
    get referrerPolicy() { var _a; return ((_a = this.Instance) === null || _a === void 0 ? void 0 : _a.getAttribute('referrerpolicy')) || 'origin'; }
    setProperty(key, value) {
        if (this.Instance) {
            this.Instance[key] = value;
        }
    }
    dataset(key, value) {
        if (this.Instance) {
            this.Instance.dataset[key] = value;
        }
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'BackgroundAudioManager', { enumerable: true, configurable: true, get: function() { return BackgroundAudioManager; } });
//# sourceMappingURL=BackgroundAudioManager.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929736, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 相机
const createCameraContext = temporarilyNotSupport('createCameraContext');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createCameraContext', { enumerable: true, configurable: true, get: function() { return createCameraContext; } });
//# sourceMappingURL=camera.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929737, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./getImageInfo.js');Object.defineProperty(exports, 'getImageInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getImageInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./previewImage.js');Object.defineProperty(exports, 'previewImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.previewImage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./chooseImage.js');Object.defineProperty(exports, 'chooseImage', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseImage; } });

// 图片
const saveImageToPhotosAlbum = temporarilyNotSupport('saveImageToPhotosAlbum');
const previewMedia = temporarilyNotSupport('previewMedia');
const compressImage = temporarilyNotSupport('compressImage');
const chooseMessageFile = temporarilyNotSupport('chooseMessageFile');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseMessageFile', { enumerable: true, configurable: true, get: function() { return chooseMessageFile; } });Object.defineProperty(exports, 'compressImage', { enumerable: true, configurable: true, get: function() { return compressImage; } });Object.defineProperty(exports, 'previewMedia', { enumerable: true, configurable: true, get: function() { return previewMedia; } });Object.defineProperty(exports, 'saveImageToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return saveImageToPhotosAlbum; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"./getImageInfo.js":1680223929738,"./previewImage.js":1680223929739,"./chooseImage.js":1680223929740}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929738, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * 获取图片信息。网络图片需先配置download域名才能生效。
 */
const getImageInfo = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `getImageInfo:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const getBase64Image = (image) => {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0, image.width, image.height);
            return canvas.toDataURL('image/png');
        }
        catch (e) {
            console.error('getImageInfo:get base64 fail', e);
        }
    };
    const { src, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'getImageInfo', success, fail, complete });
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = '';
        image.onload = () => {
            handle.success({
                width: image.naturalWidth,
                height: image.naturalHeight,
                path: getBase64Image(image) || src
            }, { resolve, reject });
        };
        image.onerror = (e) => {
            handle.fail({
                errMsg: e.message
            }, { resolve, reject });
        };
        image.src = src;
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getImageInfo', { enumerable: true, configurable: true, get: function() { return getImageInfo; } });
//# sourceMappingURL=getImageInfo.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929739, function(require, module, exports) {
var __TEMP__ = require('../../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-swiper-core');var defineCustomElement = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/components/dist/components/taro-swiper-item-core');var defineCustomElement$1 = __TEMP__['defineCustomElement'];
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('../../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * previewImage api基于开源的React组件[react-wx-images-viewer](https://github.com/react-ld/react-wx-images-viewer)开发，感谢！
 */
/**
 * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
 */
const previewImage = (options) => __awaiter(void 0, void 0, void 0, function* () {
    if (USE_HTML_COMPONENTS) {
        // TODO 改为通过 window.__taroAppConfig 获取配置的 Swiper 插件创建节点
        defineCustomElement();
        defineCustomElement$1();
    }
    function loadImage(url, loadFail) {
        return new Promise((resolve) => {
            const item = document.createElement('taro-swiper-item-core');
            item.style.cssText = 'display:flex;align-items:start;justify-content:center;overflow-y:scroll;';
            const image = new Image();
            image.style.maxWidth = '100%';
            image.src = url;
            const div = document.createElement('div');
            div.classList.add('swiper-zoom-container');
            div.style.cssText = 'display:flex;align-items:center;justify-content:center;max-width:100%;min-height:100%;';
            div.appendChild(image);
            item.appendChild(div);
            // Note: 等待图片加载完后返回，会导致轮播被卡住
            resolve(item);
            if (isFunction(loadFail)) {
                image.addEventListener('error', (err) => {
                    loadFail({ errMsg: err.message });
                });
            }
        });
    }
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `previewImage:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { urls = [], current = '', success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'previewImage', success, fail, complete });
    const container = document.createElement('div');
    container.classList.add('preview-image');
    container.style.cssText = 'position:fixed;top:0;left:0;z-index:1050;width:100%;height:100%;overflow:hidden;outline:0;background-color:#111;';
    container.addEventListener('click', () => {
        container.remove();
    });
    const swiper = document.createElement('taro-swiper-core');
    // @ts-ignore
    swiper.full = true;
    // @ts-ignore
    swiper.zoom = true;
    let children = [];
    try {
        children = yield Promise.all(urls.map(e => loadImage(e, fail)));
    }
    catch (error) {
        return handle.fail({
            errMsg: error
        });
    }
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        swiper.appendChild(child);
    }
    const currentIndex = urls.indexOf(current);
    // @ts-ignore
    swiper.current = currentIndex;
    container.appendChild(swiper);
    document.body.appendChild(container);
    return handle.success();
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'previewImage', { enumerable: true, configurable: true, get: function() { return previewImage; } });
//# sourceMappingURL=previewImage.js.map

}, function(modId) { var map = {"../../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929740, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];var getParameterError = __TEMP__['getParameterError'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * 从本地相册选择图片或使用相机拍照。
 */
const chooseImage = function (options) {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `chooseImage:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { count = 1, success, fail, complete, imageId = 'taroChooseImage', sourceType = ['album', 'camera'] } = options;
    const handle = new MethodHandler({ name: 'chooseImage', success, fail, complete });
    const res = {
        tempFilePaths: [],
        tempFiles: []
    };
    const sourceTypeString = sourceType && sourceType.toString();
    const acceptableSourceType = ['user', 'environment', 'camera'];
    if (count && typeof count !== 'number') {
        res.errMsg = getParameterError({
            para: 'count',
            correct: 'Number',
            wrong: count
        });
        return handle.fail(res);
    }
    let el = document.getElementById(imageId);
    if (!el) {
        const obj = document.createElement('input');
        obj.setAttribute('type', 'file');
        obj.setAttribute('id', imageId);
        if (count > 1) {
            obj.setAttribute('multiple', 'multiple');
        }
        if (acceptableSourceType.indexOf(sourceTypeString) > -1) {
            obj.setAttribute('capture', sourceTypeString);
        }
        obj.setAttribute('accept', 'image/*');
        obj.setAttribute('style', 'position: fixed; top: -4000px; left: -3000px; z-index: -300;');
        document.body.appendChild(obj);
        el = document.getElementById(imageId);
    }
    else {
        if (count > 1) {
            el.setAttribute('multiple', 'multiple');
        }
        else {
            el.removeAttribute('multiple');
        }
        if (acceptableSourceType.indexOf(sourceTypeString) > -1) {
            el.setAttribute('capture', sourceTypeString);
        }
        else {
            el.removeAttribute('capture');
        }
    }
    return new Promise((resolve, reject) => {
        const TaroMouseEvents = document.createEvent('MouseEvents');
        TaroMouseEvents.initEvent('click', true, true);
        if (el) {
            el.dispatchEvent(TaroMouseEvents);
            el.onchange = function (e) {
                const target = e.target;
                if (target) {
                    const files = target.files || [];
                    const arr = [...files];
                    arr && arr.forEach(item => {
                        var _a, _b;
                        const blob = new Blob([item], {
                            type: item.type
                        });
                        const url = URL.createObjectURL(blob);
                        (_a = res.tempFilePaths) === null || _a === void 0 ? void 0 : _a.push(url);
                        (_b = res.tempFiles) === null || _b === void 0 ? void 0 : _b.push({ path: url, size: item.size, type: item.type, originalFileObj: item });
                    });
                    handle.success(res, { resolve, reject });
                    target.value = '';
                }
            };
        }
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseImage', { enumerable: true, configurable: true, get: function() { return chooseImage; } });
//# sourceMappingURL=chooseImage.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929741, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 实时音视频
const createLivePusherContext = temporarilyNotSupport('createLivePusherContext');
const createLivePlayerContext = temporarilyNotSupport('createLivePlayerContext');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createLivePlayerContext', { enumerable: true, configurable: true, get: function() { return createLivePlayerContext; } });Object.defineProperty(exports, 'createLivePusherContext', { enumerable: true, configurable: true, get: function() { return createLivePusherContext; } });
//# sourceMappingURL=live.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929742, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 地图
const createMapContext = temporarilyNotSupport('createMapContext');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createMapContext', { enumerable: true, configurable: true, get: function() { return createMapContext; } });
//# sourceMappingURL=map.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929743, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 画面录制器
const createMediaRecorder = temporarilyNotSupport('createMediaRecorder');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createMediaRecorder', { enumerable: true, configurable: true, get: function() { return createMediaRecorder; } });
//# sourceMappingURL=media-recorder.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929744, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 录音
const stopRecord = temporarilyNotSupport('stopRecord');
const startRecord = temporarilyNotSupport('startRecord');
const getRecorderManager = temporarilyNotSupport('getRecorderManager');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getRecorderManager', { enumerable: true, configurable: true, get: function() { return getRecorderManager; } });Object.defineProperty(exports, 'startRecord', { enumerable: true, configurable: true, get: function() { return startRecord; } });Object.defineProperty(exports, 'stopRecord', { enumerable: true, configurable: true, get: function() { return stopRecord; } });
//# sourceMappingURL=recorder.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929745, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];var findDOM = __TEMP__['findDOM'];var shouldBeObject = __TEMP__['shouldBeObject'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

// 视频
const saveVideoToPhotosAlbum = temporarilyNotSupport('saveVideoToPhotosAlbum');
const openVideoEditor = temporarilyNotSupport('openVideoEditor');
const getVideoInfo = temporarilyNotSupport('getVideoInfo');
/**
 * 创建 video 上下文 VideoContext 对象。
 */
const createVideoContext = (id, inst) => {
    const el = findDOM(inst);
    // TODO HTMLVideoElement to VideoContext
    return el === null || el === void 0 ? void 0 : el.querySelector(`taro-video-core[id=${id}]`);
};
const compressVideo = temporarilyNotSupport('compressVideo');
/**
 * 拍摄视频或从手机相册中选视频。
 */
const chooseVideo = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `chooseVideo:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'chooseVideo', success, fail, complete });
    const res = {
        tempFilePath: '',
        duration: 0,
        size: 0,
        height: 0,
        width: 0
    };
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'file');
    inputEl.setAttribute('multiple', 'multiple');
    inputEl.setAttribute('accept', 'video/*');
    inputEl.setAttribute('style', 'position: fixed; top: -4000px; left: -3000px; z-index: -300;');
    document.body.appendChild(inputEl);
    return new Promise((resolve, reject) => {
        const TaroMouseEvents = document.createEvent('MouseEvents');
        TaroMouseEvents.initEvent('click', true, true);
        inputEl.dispatchEvent(TaroMouseEvents);
        inputEl.onchange = function (e) {
            var _a;
            const target = e.target;
            const file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
            const reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                const videoEl = document.createElement('video');
                const url = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                videoEl.preload = 'metadata';
                videoEl.src = url;
                videoEl.onloadedmetadata = () => {
                    res.tempFilePath = url;
                    res.duration = videoEl.duration;
                    res.size = event.total;
                    res.height = videoEl.videoHeight;
                    res.width = videoEl.videoHeight;
                    return handle.success(res, { resolve, reject });
                };
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        };
    }).finally(() => {
        document.body.removeChild(inputEl);
    });
};
const chooseMedia = temporarilyNotSupport('chooseMedia');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseMedia', { enumerable: true, configurable: true, get: function() { return chooseMedia; } });Object.defineProperty(exports, 'chooseVideo', { enumerable: true, configurable: true, get: function() { return chooseVideo; } });Object.defineProperty(exports, 'compressVideo', { enumerable: true, configurable: true, get: function() { return compressVideo; } });Object.defineProperty(exports, 'createVideoContext', { enumerable: true, configurable: true, get: function() { return createVideoContext; } });Object.defineProperty(exports, 'getVideoInfo', { enumerable: true, configurable: true, get: function() { return getVideoInfo; } });Object.defineProperty(exports, 'openVideoEditor', { enumerable: true, configurable: true, get: function() { return openVideoEditor; } });Object.defineProperty(exports, 'saveVideoToPhotosAlbum', { enumerable: true, configurable: true, get: function() { return saveVideoToPhotosAlbum; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929746, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 视频解码器
const createVideoDecoder = temporarilyNotSupport('createVideoDecoder');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createVideoDecoder', { enumerable: true, configurable: true, get: function() { return createVideoDecoder; } });
//# sourceMappingURL=video-decoder.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929747, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 音视频合成
const createMediaContainer = temporarilyNotSupport('createMediaContainer');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createMediaContainer', { enumerable: true, configurable: true, get: function() { return createMediaContainer; } });
//# sourceMappingURL=video-processing.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929748, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 实时语音
const updateVoIPChatMuteConfig = temporarilyNotSupport('updateVoIPChatMuteConfig');
const subscribeVoIPVideoMembers = temporarilyNotSupport('subscribeVoIPVideoMembers');
const setEnable1v1Chat = temporarilyNotSupport('setEnable1v1Chat');
const onVoIPVideoMembersChanged = temporarilyNotSupport('onVoIPVideoMembersChanged');
const onVoIPChatStateChanged = temporarilyNotSupport('onVoIPChatStateChanged');
const onVoIPChatSpeakersChanged = temporarilyNotSupport('onVoIPChatSpeakersChanged');
const onVoIPChatMembersChanged = temporarilyNotSupport('onVoIPChatMembersChanged');
const onVoIPChatInterrupted = temporarilyNotSupport('onVoIPChatInterrupted');
const offVoIPVideoMembersChanged = temporarilyNotSupport('offVoIPVideoMembersChanged');
const offVoIPChatStateChanged = temporarilyNotSupport('offVoIPChatStateChanged');
const offVoIPChatMembersChanged = temporarilyNotSupport('offVoIPChatMembersChanged');
const offVoIPChatInterrupted = temporarilyNotSupport('offVoIPChatInterrupted');
const joinVoIPChat = temporarilyNotSupport('joinVoIPChat');
const exitVoIPChat = temporarilyNotSupport('exitVoIPChat');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'exitVoIPChat', { enumerable: true, configurable: true, get: function() { return exitVoIPChat; } });Object.defineProperty(exports, 'joinVoIPChat', { enumerable: true, configurable: true, get: function() { return joinVoIPChat; } });Object.defineProperty(exports, 'offVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return offVoIPChatInterrupted; } });Object.defineProperty(exports, 'offVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return offVoIPChatMembersChanged; } });Object.defineProperty(exports, 'offVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return offVoIPChatStateChanged; } });Object.defineProperty(exports, 'offVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return offVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatInterrupted', { enumerable: true, configurable: true, get: function() { return onVoIPChatInterrupted; } });Object.defineProperty(exports, 'onVoIPChatMembersChanged', { enumerable: true, configurable: true, get: function() { return onVoIPChatMembersChanged; } });Object.defineProperty(exports, 'onVoIPChatSpeakersChanged', { enumerable: true, configurable: true, get: function() { return onVoIPChatSpeakersChanged; } });Object.defineProperty(exports, 'onVoIPChatStateChanged', { enumerable: true, configurable: true, get: function() { return onVoIPChatStateChanged; } });Object.defineProperty(exports, 'onVoIPVideoMembersChanged', { enumerable: true, configurable: true, get: function() { return onVoIPVideoMembersChanged; } });Object.defineProperty(exports, 'setEnable1v1Chat', { enumerable: true, configurable: true, get: function() { return setEnable1v1Chat; } });Object.defineProperty(exports, 'subscribeVoIPVideoMembers', { enumerable: true, configurable: true, get: function() { return subscribeVoIPVideoMembers; } });Object.defineProperty(exports, 'updateVoIPChatMuteConfig', { enumerable: true, configurable: true, get: function() { return updateVoIPChatMuteConfig; } });
//# sourceMappingURL=voip.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929749, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 跳转
const openEmbeddedMiniProgram = temporarilyNotSupport('openEmbeddedMiniProgram');
const navigateToMiniProgram = temporarilyNotSupport('navigateToMiniProgram');
const navigateBackMiniProgram = temporarilyNotSupport('navigateBackMiniProgram');
const exitMiniProgram = temporarilyNotSupport('exitMiniProgram');
const openBusinessView = temporarilyNotSupport('openBusinessView');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'exitMiniProgram', { enumerable: true, configurable: true, get: function() { return exitMiniProgram; } });Object.defineProperty(exports, 'navigateBackMiniProgram', { enumerable: true, configurable: true, get: function() { return navigateBackMiniProgram; } });Object.defineProperty(exports, 'navigateToMiniProgram', { enumerable: true, configurable: true, get: function() { return navigateToMiniProgram; } });Object.defineProperty(exports, 'openBusinessView', { enumerable: true, configurable: true, get: function() { return openBusinessView; } });Object.defineProperty(exports, 'openEmbeddedMiniProgram', { enumerable: true, configurable: true, get: function() { return openEmbeddedMiniProgram; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929750, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./download.js');Object.defineProperty(exports, 'downloadFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.downloadFile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./mdns.js');Object.defineProperty(exports, 'offLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'offLocalServiceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceFound; } });Object.defineProperty(exports, 'offLocalServiceLost', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceLost; } });Object.defineProperty(exports, 'offLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return __TEMP__.offLocalServiceResolveFail; } });Object.defineProperty(exports, 'onLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'onLocalServiceFound', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceFound; } });Object.defineProperty(exports, 'onLocalServiceLost', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceLost; } });Object.defineProperty(exports, 'onLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return __TEMP__.onLocalServiceResolveFail; } });Object.defineProperty(exports, 'startLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.startLocalServiceDiscovery; } });Object.defineProperty(exports, 'stopLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopLocalServiceDiscovery; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./request/index.js');Object.defineProperty(exports, 'addInterceptor', { enumerable: true, configurable: true, get: function() { return __TEMP__.addInterceptor; } });Object.defineProperty(exports, 'request', { enumerable: true, configurable: true, get: function() { return __TEMP__.request; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./tcp.js');Object.defineProperty(exports, 'createTCPSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.createTCPSocket; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./udp.js');Object.defineProperty(exports, 'createUDPSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.createUDPSocket; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./upload.js');Object.defineProperty(exports, 'uploadFile', { enumerable: true, configurable: true, get: function() { return __TEMP__.uploadFile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./websocket/index.js');Object.defineProperty(exports, 'closeSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.closeSocket; } });Object.defineProperty(exports, 'connectSocket', { enumerable: true, configurable: true, get: function() { return __TEMP__.connectSocket; } });Object.defineProperty(exports, 'onSocketClose', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketClose; } });Object.defineProperty(exports, 'onSocketError', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketError; } });Object.defineProperty(exports, 'onSocketMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketMessage; } });Object.defineProperty(exports, 'onSocketOpen', { enumerable: true, configurable: true, get: function() { return __TEMP__.onSocketOpen; } });Object.defineProperty(exports, 'sendSocketMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.sendSocketMessage; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./download.js":1680223929751,"./mdns.js":1680223929753,"./request/index.js":1680223929754,"./tcp.js":1680223929755,"./udp.js":1680223929756,"./upload.js":1680223929757,"./websocket/index.js":1680223929758}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929751, function(require, module, exports) {
var __TEMP__ = require('../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];
var __TEMP__ = require('./utils.js');var setHeader = __TEMP__['setHeader'];var XHR_STATS = __TEMP__['XHR_STATS'];var NETWORK_TIMEOUT = __TEMP__['NETWORK_TIMEOUT'];

const createDownloadTask = ({ url, header, withCredentials = true, timeout, success, error }) => {
    let timeoutInter;
    const apiName = 'downloadFile';
    const xhr = new XMLHttpRequest();
    const callbackManager = {
        headersReceived: new CallbackManager(),
        progressUpdate: new CallbackManager()
    };
    xhr.open('GET', url, true);
    xhr.withCredentials = !!withCredentials;
    xhr.responseType = 'blob';
    setHeader(xhr, header);
    xhr.onprogress = e => {
        const { loaded, total } = e;
        callbackManager.progressUpdate.trigger({
            progress: Math.round(loaded / total * 100),
            totalBytesWritten: loaded,
            totalBytesExpectedToWrite: total
        });
    };
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XHR_STATS.HEADERS_RECEIVED)
            return;
        callbackManager.headersReceived.trigger({
            header: xhr.getAllResponseHeaders()
        });
    };
    xhr.onload = () => {
        const response = xhr.response;
        const status = xhr.status;
        success({
            errMsg: `${apiName}:ok`,
            statusCode: status,
            tempFilePath: window.URL.createObjectURL(response)
        });
    };
    xhr.onabort = () => {
        clearTimeout(timeoutInter);
        error({
            errMsg: `${apiName}:fail abort`
        });
    };
    xhr.onerror = (e) => {
        error({
            errMsg: `${apiName}:fail ${e.message}`
        });
    };
    /**
     * 中断任务
     */
    const abort = () => {
        xhr.abort();
    };
    const send = () => {
        xhr.send();
        timeoutInter = setTimeout(() => {
            xhr.onabort = null;
            xhr.onload = null;
            xhr.onprogress = null;
            xhr.onreadystatechange = null;
            xhr.onerror = null;
            abort();
            error({
                errMsg: `${apiName}:fail timeout`
            });
        }, timeout || NETWORK_TIMEOUT);
    };
    send();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
     */
    const onHeadersReceived = callbackManager.headersReceived.add;
    /**
     * 取消监听 HTTP Response Header 事件
     * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
     */
    const offHeadersReceived = callbackManager.headersReceived.remove;
    /**
     * 监听进度变化事件
     * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
     */
    const onProgressUpdate = callbackManager.progressUpdate.add;
    /**
     * 取消监听进度变化事件
     * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
     */
    const offProgressUpdate = callbackManager.progressUpdate.remove;
    return {
        abort,
        onHeadersReceived,
        offHeadersReceived,
        onProgressUpdate,
        offProgressUpdate
    };
};
/**
 * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。使用前请注意阅读相关说明。
 * 注意：请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。
 */
const downloadFile = ({ url, header, withCredentials, timeout, success, fail, complete }) => {
    let task;
    const result = new Promise((resolve, reject) => {
        task = createDownloadTask({
            url,
            header,
            withCredentials,
            timeout,
            success: res => {
                success && success(res);
                complete && complete(res);
                resolve(res);
            },
            error: res => {
                fail && fail(res);
                complete && complete(res);
                reject(res);
            }
        });
    });
    result.headersReceive = task.onHeadersReceived;
    result.progress = task.onProgressUpdate;
    return new Proxy(result, {
        get(target, prop) {
            const object = prop in task ? task : target;
            const value = object[prop];
            return typeof value === 'function' ? value.bind(object) : value;
        },
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'downloadFile', { enumerable: true, configurable: true, get: function() { return downloadFile; } });
//# sourceMappingURL=download.js.map

}, function(modId) { var map = {"../../utils/handler.js":1680223929672,"./utils.js":1680223929752}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929752, function(require, module, exports) {
/**
 * HTTP Response Header 事件回调函数的参数
 * @typedef {Object} HeadersReceivedParam
 * @property {Object} header 开发者服务器返回的 HTTP Response Header
 */
/**
 * HTTP Response Header 事件的回调函数
 * @callback HeadersReceivedCallback
 * @param {HeadersReceivedParam} res 参数
 */
/**
 * 进度变化回调函数的参数
 * @typedef {Object} ProgressUpdateParam
 * @property {number} progress 进度百分比
 * @property {number} [totalBytesWritten] 已经下载的数据长度，单位 Bytes
 * @property {number} [totalBytesSent] 已经上传的数据长度，单位 Bytes
 * @property {number} [totalBytesExpectedToWrite] 预期需要下载的数据总长度，单位 Bytes
 * @property {number} [totalBytesExpectedToSend] 预期需要上传的数据总长度，单位 Bytes
 */
/**
 * 进度变化事件的回调函数
 * @callback ProgressUpdateCallback
 * @param {ProgressUpdateParam} res 参数
 */
const NETWORK_TIMEOUT = 60000;
const XHR_STATS = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4 // The operation is complete.
};
/**
 * 设置xhr的header
 * @param {XMLHttpRequest} xhr
 * @param {Object} header
 */
const setHeader = (xhr, header) => {
    let headerKey;
    for (headerKey in header) {
        xhr.setRequestHeader(headerKey, header[headerKey]);
    }
};
/**
 * 将 blob url 转化为文件
 * @param {string} url 要转换的 blob url
 * @returns {Promise<File>}
 */
const convertObjectUrlToBlob = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.withCredentials = true;
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            }
            else {
                /* eslint-disable prefer-promise-reject-errors */
                reject({ status: this.status });
            }
        };
        xhr.send();
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'NETWORK_TIMEOUT', { enumerable: true, configurable: true, get: function() { return NETWORK_TIMEOUT; } });Object.defineProperty(exports, 'XHR_STATS', { enumerable: true, configurable: true, get: function() { return XHR_STATS; } });Object.defineProperty(exports, 'convertObjectUrlToBlob', { enumerable: true, configurable: true, get: function() { return convertObjectUrlToBlob; } });Object.defineProperty(exports, 'setHeader', { enumerable: true, configurable: true, get: function() { return setHeader; } });
//# sourceMappingURL=utils.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929753, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// mDNS
const stopLocalServiceDiscovery = temporarilyNotSupport('stopLocalServiceDiscovery');
const startLocalServiceDiscovery = temporarilyNotSupport('startLocalServiceDiscovery');
const onLocalServiceResolveFail = temporarilyNotSupport('onLocalServiceResolveFail');
const onLocalServiceLost = temporarilyNotSupport('onLocalServiceLost');
const onLocalServiceFound = temporarilyNotSupport('onLocalServiceFound');
const onLocalServiceDiscoveryStop = temporarilyNotSupport('onLocalServiceDiscoveryStop');
const offLocalServiceResolveFail = temporarilyNotSupport('offLocalServiceResolveFail');
const offLocalServiceLost = temporarilyNotSupport('offLocalServiceLost');
const offLocalServiceFound = temporarilyNotSupport('offLocalServiceFound');
const offLocalServiceDiscoveryStop = temporarilyNotSupport('offLocalServiceDiscoveryStop');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return offLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'offLocalServiceFound', { enumerable: true, configurable: true, get: function() { return offLocalServiceFound; } });Object.defineProperty(exports, 'offLocalServiceLost', { enumerable: true, configurable: true, get: function() { return offLocalServiceLost; } });Object.defineProperty(exports, 'offLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return offLocalServiceResolveFail; } });Object.defineProperty(exports, 'onLocalServiceDiscoveryStop', { enumerable: true, configurable: true, get: function() { return onLocalServiceDiscoveryStop; } });Object.defineProperty(exports, 'onLocalServiceFound', { enumerable: true, configurable: true, get: function() { return onLocalServiceFound; } });Object.defineProperty(exports, 'onLocalServiceLost', { enumerable: true, configurable: true, get: function() { return onLocalServiceLost; } });Object.defineProperty(exports, 'onLocalServiceResolveFail', { enumerable: true, configurable: true, get: function() { return onLocalServiceResolveFail; } });Object.defineProperty(exports, 'startLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return startLocalServiceDiscovery; } });Object.defineProperty(exports, 'stopLocalServiceDiscovery', { enumerable: true, configurable: true, get: function() { return stopLocalServiceDiscovery; } });
//# sourceMappingURL=mdns.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929754, function(require, module, exports) {
var __TEMP__ = require('whatwg-fetch');
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('jsonp-retry');var jsonpRetry = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../../utils/index.js');var serializeParams = __TEMP__['serializeParams'];

// @ts-ignore
const { Link } = Taro;
function generateRequestUrlWithParams(url, params) {
    params = typeof params === 'string' ? params : serializeParams(params);
    if (params) {
        url += (~url.indexOf('?') ? '&' : '?') + params;
    }
    url = url.replace('?&', '?');
    return url;
}
// FIXME 移除 any 标注
function _request(options) {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            url: options
        };
    }
    const { success, complete, fail } = options;
    let url = options.url;
    const params = {};
    const res = {};
    if (options.jsonp) {
        Object.assign(params, options);
        params.params = options.data;
        params.cache = options.jsonpCache;
        if (typeof options.jsonp === 'string') {
            params.name = options.jsonp;
        }
        delete params.jsonp;
        return jsonpRetry(url, params)
            .then(data => {
            res.statusCode = 200;
            res.data = data;
            isFunction(success) && success(res);
            isFunction(complete) && complete(res);
            return res;
        })
            .catch(err => {
            isFunction(fail) && fail(err);
            isFunction(complete) && complete(res);
            return Promise.reject(err);
        });
    }
    params.method = options.method || 'GET';
    const methodUpper = params.method.toUpperCase();
    params.cache = options.cache || 'default';
    if (methodUpper === 'GET' || methodUpper === 'HEAD') {
        url = generateRequestUrlWithParams(url, options.data);
    }
    else if (Object.prototype.toString.call(options.data) === '[object Object]') {
        options.header = options.header || {};
        const keyOfContentType = Object.keys(options.header).find(item => item.toLowerCase() === 'content-type');
        if (!keyOfContentType) {
            options.header['Content-Type'] = 'application/json';
        }
        const contentType = options.header[keyOfContentType || 'Content-Type'];
        if (contentType.indexOf('application/json') >= 0) {
            params.body = JSON.stringify(options.data);
        }
        else if (contentType.indexOf('application/x-www-form-urlencoded') >= 0) {
            params.body = serializeParams(options.data);
        }
        else {
            params.body = options.data;
        }
    }
    else {
        params.body = options.data;
    }
    if (options.header) {
        params.headers = options.header;
    }
    if (options.mode) {
        params.mode = options.mode;
    }
    if (options.signal) {
        params.signal = options.signal;
    }
    params.credentials = options.credentials;
    return fetch(url, params)
        .then(response => {
        if (!response) {
            const errorResponse = { ok: false };
            throw errorResponse;
        }
        res.statusCode = response.status;
        res.header = {};
        for (const key of response.headers.keys()) {
            res.header[key] = response.headers.get(key);
        }
        if (options.responseType === 'arraybuffer') {
            return response.arrayBuffer();
        }
        if (res.statusCode !== 204) {
            if (options.dataType === 'json' || typeof options.dataType === 'undefined') {
                return response.json().catch(() => {
                    return null;
                });
            }
        }
        if (options.responseType === 'text' || options.dataType === 'text') {
            return response.text();
        }
        return Promise.resolve(null);
    })
        .then(data => {
        res.data = data;
        isFunction(success) && success(res);
        isFunction(complete) && complete(res);
        return res;
    })
        .catch(err => {
        isFunction(fail) && fail(err);
        isFunction(complete) && complete(res);
        err.statusCode = res.statusCode;
        err.errMsg = err.message;
        return Promise.reject(err);
    });
}
function taroInterceptor(chain) {
    return _request(chain.requestParams);
}
const link = new Link(taroInterceptor);
const request = link.request.bind(link);
const addInterceptor = link.addInterceptor.bind(link);

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'addInterceptor', { enumerable: true, configurable: true, get: function() { return addInterceptor; } });Object.defineProperty(exports, 'request', { enumerable: true, configurable: true, get: function() { return request; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929755, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// TCP 通信
const createTCPSocket = temporarilyNotSupport('createTCPSocket');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createTCPSocket', { enumerable: true, configurable: true, get: function() { return createTCPSocket; } });
//# sourceMappingURL=tcp.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929756, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// UDP 通信
const createUDPSocket = temporarilyNotSupport('createUDPSocket');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createUDPSocket', { enumerable: true, configurable: true, get: function() { return createUDPSocket; } });
//# sourceMappingURL=udp.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929757, function(require, module, exports) {
var __TEMP__ = require('../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];
var __TEMP__ = require('./utils.js');var setHeader = __TEMP__['setHeader'];var XHR_STATS = __TEMP__['XHR_STATS'];var NETWORK_TIMEOUT = __TEMP__['NETWORK_TIMEOUT'];var convertObjectUrlToBlob = __TEMP__['convertObjectUrlToBlob'];

const createUploadTask = ({ url, filePath, formData = {}, name, header, timeout, fileName, withCredentials = true, success, error }) => {
    let timeoutInter;
    let formKey;
    const apiName = 'uploadFile';
    const xhr = new XMLHttpRequest();
    const form = new FormData();
    const callbackManager = {
        headersReceived: new CallbackManager(),
        progressUpdate: new CallbackManager()
    };
    xhr.open('POST', url);
    xhr.withCredentials = !!withCredentials;
    setHeader(xhr, header);
    for (formKey in formData) {
        form.append(formKey, formData[formKey]);
    }
    xhr.upload.onprogress = e => {
        const { loaded, total } = e;
        callbackManager.progressUpdate.trigger({
            progress: Math.round(loaded / total * 100),
            totalBytesSent: loaded,
            totalBytesExpectedToSend: total
        });
    };
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XHR_STATS.HEADERS_RECEIVED)
            return;
        callbackManager.headersReceived.trigger({
            header: xhr.getAllResponseHeaders()
        });
    };
    xhr.onload = () => {
        const status = xhr.status;
        clearTimeout(timeoutInter);
        success({
            errMsg: `${apiName}:ok`,
            statusCode: status,
            data: xhr.responseText || xhr.response
        });
    };
    xhr.onabort = () => {
        clearTimeout(timeoutInter);
        error({
            errMsg: `${apiName}:fail abort`
        });
    };
    xhr.onerror = (e) => {
        clearTimeout(timeoutInter);
        error({
            errMsg: `${apiName}:fail ${e.message}`
        });
    };
    /**
     * 中断任务
     */
    const abort = () => {
        clearTimeout(timeoutInter);
        xhr.abort();
    };
    const send = () => {
        xhr.send(form);
        timeoutInter = setTimeout(() => {
            xhr.onabort = null;
            xhr.onload = null;
            xhr.upload.onprogress = null;
            xhr.onreadystatechange = null;
            xhr.onerror = null;
            abort();
            error({
                errMsg: `${apiName}:fail timeout`
            });
        }, timeout || NETWORK_TIMEOUT);
    };
    convertObjectUrlToBlob(filePath)
        .then((fileObj) => {
        if (!fileName) {
            fileName = typeof fileObj !== 'string' && fileObj.name;
        }
        form.append(name, fileObj, fileName || `file-${Date.now()}`);
        send();
    })
        .catch(e => {
        error({
            errMsg: `${apiName}:fail ${e.message}`
        });
    });
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
     */
    const onHeadersReceived = callbackManager.headersReceived.add;
    /**
     * 取消监听 HTTP Response Header 事件
     * @param {HeadersReceivedCallback} callback HTTP Response Header 事件的回调函数
     */
    const offHeadersReceived = callbackManager.headersReceived.remove;
    /**
     * 监听进度变化事件
     * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
     */
    const onProgressUpdate = callbackManager.progressUpdate.add;
    /**
     * 取消监听进度变化事件
     * @param {ProgressUpdateCallback} callback HTTP Response Header 事件的回调函数
     */
    const offProgressUpdate = callbackManager.progressUpdate.remove;
    return {
        abort,
        onHeadersReceived,
        offHeadersReceived,
        onProgressUpdate,
        offProgressUpdate
    };
};
/**
 * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。使用前请注意阅读相关说明。
 */
const uploadFile = ({ url, filePath, name, header, formData, timeout, fileName, withCredentials, success, fail, complete }) => {
    let task;
    const result = new Promise((resolve, reject) => {
        task = createUploadTask({
            url,
            header,
            name,
            filePath,
            formData,
            timeout,
            fileName,
            withCredentials,
            success: res => {
                success && success(res);
                complete && complete(res);
                resolve(res);
            },
            error: res => {
                fail && fail(res);
                complete && complete(res);
                reject(res);
            }
        });
    });
    result.headersReceive = task.onHeadersReceived;
    result.progress = task.onProgressUpdate;
    return new Proxy(result, {
        get(target, prop) {
            const object = prop in task ? task : target;
            const value = object[prop];
            return typeof value === 'function' ? value.bind(object) : value;
        },
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'uploadFile', { enumerable: true, configurable: true, get: function() { return uploadFile; } });
//# sourceMappingURL=upload.js.map

}, function(modId) { var map = {"../../utils/handler.js":1680223929672,"./utils.js":1680223929752}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929758, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];var getParameterError = __TEMP__['getParameterError'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('./socketTask.js');var SocketTask = __TEMP__['SocketTask'];

let socketTasks = [];
let socketsCounter = 1;
function sendSocketMessage() {
    console.warn('Deprecated.Please use socketTask.send instead.');
}
function onSocketOpen() {
    console.warn('Deprecated.Please use socketTask.onOpen instead.');
}
function onSocketMessage() {
    console.warn('Deprecated.Please use socketTask.onMessage instead.');
}
function onSocketError() {
    console.warn('Deprecated.Please use socketTask.onError instead.');
}
function onSocketClose() {
    console.warn('Deprecated.Please use socketTask.onClose instead.');
}
function connectSocket(options) {
    const name = 'connectSocket';
    return new Promise((resolve, reject) => {
        // options must be an Object
        const isObject = shouldBeObject(options);
        if (!isObject.flag) {
            const res = { errMsg: `${name}:fail ${isObject.msg}` };
            console.error(res.errMsg);
            return reject(res);
        }
        const { url, protocols, success, fail, complete } = options;
        const handle = new MethodHandler({ name, success, fail, complete });
        // options.url must be String
        if (typeof url !== 'string') {
            return handle.fail({
                errMsg: getParameterError({
                    para: 'url',
                    correct: 'String',
                    wrong: url
                })
            }, { resolve, reject });
        }
        // options.url must be invalid
        if (!url.startsWith('ws://') && !url.startsWith('wss://')) {
            return handle.fail({
                errMsg: `request:fail invalid url "${url}"`
            }, { resolve, reject });
        }
        // protocols must be array
        const _protocols = Array.isArray(protocols) ? protocols : null;
        // 2 connection at most
        if (socketTasks.length > 1) {
            return handle.fail({
                errMsg: '同时最多发起 2 个 socket 请求，更多请参考文档。'
            }, { resolve, reject });
        }
        const task = new SocketTask(url, _protocols);
        task._destroyWhenClose = function () {
            socketTasks = socketTasks.filter(socketTask => socketTask !== this);
        };
        socketTasks.push(task);
        handle.success({
            socketTaskId: socketsCounter++
        });
        return resolve(task);
    });
}
function closeSocket() {
    console.warn('Deprecated.Please use socketTask.close instead.');
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'closeSocket', { enumerable: true, configurable: true, get: function() { return closeSocket; } });Object.defineProperty(exports, 'connectSocket', { enumerable: true, configurable: true, get: function() { return connectSocket; } });Object.defineProperty(exports, 'onSocketClose', { enumerable: true, configurable: true, get: function() { return onSocketClose; } });Object.defineProperty(exports, 'onSocketError', { enumerable: true, configurable: true, get: function() { return onSocketError; } });Object.defineProperty(exports, 'onSocketMessage', { enumerable: true, configurable: true, get: function() { return onSocketMessage; } });Object.defineProperty(exports, 'onSocketOpen', { enumerable: true, configurable: true, get: function() { return onSocketOpen; } });Object.defineProperty(exports, 'sendSocketMessage', { enumerable: true, configurable: true, get: function() { return sendSocketMessage; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672,"./socketTask.js":1680223929759}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929759, function(require, module, exports) {
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];

class SocketTask {
    constructor(url, protocols) {
        if (protocols && protocols.length) {
            this.ws = new WebSocket(url, protocols);
        }
        else {
            this.ws = new WebSocket(url);
        }
        this.CONNECTING = 0;
        this.OPEN = 1;
        this.CLOSING = 2;
        this.CLOSED = 3;
    }
    get readyState() {
        return this.ws.readyState;
    }
    send(opts = {}) {
        if (typeof opts !== 'object' || !opts)
            opts = {};
        const { data = '', success, fail, complete } = opts;
        if (this.readyState !== 1) {
            const res = { errMsg: 'SocketTask.send:fail SocketTask.readState is not OPEN' };
            console.error(res.errMsg);
            isFunction(fail) && fail(res);
            isFunction(complete) && complete(res);
            return Promise.reject(res);
        }
        this.ws.send(data);
        const res = { errMsg: 'sendSocketMessage:ok' };
        isFunction(success) && success(res);
        isFunction(complete) && complete(res);
        return Promise.resolve(res);
    }
    close(opts = {}) {
        if (typeof opts !== 'object' || !opts)
            opts = {};
        const { code = 1000, reason = 'server complete,close', success, complete } = opts;
        this.closeDetail = { code, reason };
        // 主动断开时需要重置链接数
        this._destroyWhenClose && this._destroyWhenClose();
        this.ws.close();
        const res = { errMsg: 'closeSocket:ok' };
        isFunction(success) && success(res);
        isFunction(complete) && complete(res);
        return Promise.resolve(res);
    }
    onOpen(func) {
        this.ws.onopen = func;
    }
    onMessage(func) {
        this.ws.onmessage = func;
    }
    onClose(func) {
        this.ws.onclose = () => {
            // 若服务器方断掉也需要重置链接数
            this._destroyWhenClose && this._destroyWhenClose();
            func(this.closeDetail || { code: 1006, reason: 'abnormal closure' });
        };
    }
    onError(func) {
        this.ws.onerror = func;
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'SocketTask', { enumerable: true, configurable: true, get: function() { return SocketTask; } });
//# sourceMappingURL=socketTask.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929760, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./account.js');Object.defineProperty(exports, 'getAccountInfoSync', { enumerable: true, configurable: true, get: function() { return __TEMP__.getAccountInfoSync; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./address.js');Object.defineProperty(exports, 'chooseAddress', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseAddress; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./authorize.js');Object.defineProperty(exports, 'authorize', { enumerable: true, configurable: true, get: function() { return __TEMP__.authorize; } });Object.defineProperty(exports, 'authorizeForMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.authorizeForMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./card.js');Object.defineProperty(exports, 'addCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.addCard; } });Object.defineProperty(exports, 'openCard', { enumerable: true, configurable: true, get: function() { return __TEMP__.openCard; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./channels-live.js');Object.defineProperty(exports, 'getChannelsLiveInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getChannelsLiveInfo; } });Object.defineProperty(exports, 'getChannelsLiveNoticeInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getChannelsLiveNoticeInfo; } });Object.defineProperty(exports, 'openChannelsActivity', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsActivity; } });Object.defineProperty(exports, 'openChannelsEvent', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsEvent; } });Object.defineProperty(exports, 'openChannelsLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.openChannelsLive; } });Object.defineProperty(exports, 'reserveChannelsLive', { enumerable: true, configurable: true, get: function() { return __TEMP__.reserveChannelsLive; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./customer-service.js');Object.defineProperty(exports, 'openCustomerServiceChat', { enumerable: true, configurable: true, get: function() { return __TEMP__.openCustomerServiceChat; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./facial.js');Object.defineProperty(exports, 'checkIsSupportFacialRecognition', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSupportFacialRecognition; } });Object.defineProperty(exports, 'faceVerifyForPay', { enumerable: true, configurable: true, get: function() { return __TEMP__.faceVerifyForPay; } });Object.defineProperty(exports, 'startFacialRecognitionVerify', { enumerable: true, configurable: true, get: function() { return __TEMP__.startFacialRecognitionVerify; } });Object.defineProperty(exports, 'startFacialRecognitionVerifyAndUploadVideo', { enumerable: true, configurable: true, get: function() { return __TEMP__.startFacialRecognitionVerifyAndUploadVideo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./favorites.js');Object.defineProperty(exports, 'addFileToFavorites', { enumerable: true, configurable: true, get: function() { return __TEMP__.addFileToFavorites; } });Object.defineProperty(exports, 'addVideoToFavorites', { enumerable: true, configurable: true, get: function() { return __TEMP__.addVideoToFavorites; } });Object.defineProperty(exports, 'checkIsAddedToMyMiniProgram', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsAddedToMyMiniProgram; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./group.js');Object.defineProperty(exports, 'getGroupEnterInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getGroupEnterInfo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./invoice.js');Object.defineProperty(exports, 'chooseInvoice', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseInvoice; } });Object.defineProperty(exports, 'chooseInvoiceTitle', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseInvoiceTitle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./license-plate.js');Object.defineProperty(exports, 'chooseLicensePlate', { enumerable: true, configurable: true, get: function() { return __TEMP__.chooseLicensePlate; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./login.js');Object.defineProperty(exports, 'checkSession', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkSession; } });Object.defineProperty(exports, 'login', { enumerable: true, configurable: true, get: function() { return __TEMP__.login; } });Object.defineProperty(exports, 'pluginLogin', { enumerable: true, configurable: true, get: function() { return __TEMP__.pluginLogin; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./red-package.js');Object.defineProperty(exports, 'showRedPackage', { enumerable: true, configurable: true, get: function() { return __TEMP__.showRedPackage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./settings.js');Object.defineProperty(exports, 'getSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.getSetting; } });Object.defineProperty(exports, 'openSetting', { enumerable: true, configurable: true, get: function() { return __TEMP__.openSetting; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./soter.js');Object.defineProperty(exports, 'checkIsSoterEnrolledInDevice', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSoterEnrolledInDevice; } });Object.defineProperty(exports, 'checkIsSupportSoterAuthentication', { enumerable: true, configurable: true, get: function() { return __TEMP__.checkIsSupportSoterAuthentication; } });Object.defineProperty(exports, 'startSoterAuthentication', { enumerable: true, configurable: true, get: function() { return __TEMP__.startSoterAuthentication; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./subscribe-message.js');Object.defineProperty(exports, 'requestSubscribeMessage', { enumerable: true, configurable: true, get: function() { return __TEMP__.requestSubscribeMessage; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./user-info.js');Object.defineProperty(exports, 'getUserInfo', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserInfo; } });Object.defineProperty(exports, 'getUserProfile', { enumerable: true, configurable: true, get: function() { return __TEMP__.getUserProfile; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./werun.js');Object.defineProperty(exports, 'getWeRunData', { enumerable: true, configurable: true, get: function() { return __TEMP__.getWeRunData; } });Object.defineProperty(exports, 'shareToWeRun', { enumerable: true, configurable: true, get: function() { return __TEMP__.shareToWeRun; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./account.js":1680223929761,"./address.js":1680223929762,"./authorize.js":1680223929763,"./card.js":1680223929764,"./channels-live.js":1680223929765,"./customer-service.js":1680223929766,"./facial.js":1680223929767,"./favorites.js":1680223929768,"./group.js":1680223929769,"./invoice.js":1680223929770,"./license-plate.js":1680223929771,"./login.js":1680223929772,"./red-package.js":1680223929773,"./settings.js":1680223929774,"./soter.js":1680223929775,"./subscribe-message.js":1680223929776,"./user-info.js":1680223929777,"./werun.js":1680223929778}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929761, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 帐号信息
const getAccountInfoSync = temporarilyNotSupport('getAccountInfoSync');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getAccountInfoSync', { enumerable: true, configurable: true, get: function() { return getAccountInfoSync; } });
//# sourceMappingURL=account.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929762, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 收货地址
const chooseAddress = temporarilyNotSupport('chooseAddress');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseAddress', { enumerable: true, configurable: true, get: function() { return chooseAddress; } });
//# sourceMappingURL=address.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929763, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 授权
const authorizeForMiniProgram = temporarilyNotSupport('authorizeForMiniProgram');
const authorize = temporarilyNotSupport('authorize');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'authorize', { enumerable: true, configurable: true, get: function() { return authorize; } });Object.defineProperty(exports, 'authorizeForMiniProgram', { enumerable: true, configurable: true, get: function() { return authorizeForMiniProgram; } });
//# sourceMappingURL=authorize.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929764, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 卡券
const openCard = temporarilyNotSupport('openCard');
const addCard = temporarilyNotSupport('addCard');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'addCard', { enumerable: true, configurable: true, get: function() { return addCard; } });Object.defineProperty(exports, 'openCard', { enumerable: true, configurable: true, get: function() { return openCard; } });
//# sourceMappingURL=card.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929765, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 视频号
const reserveChannelsLive = temporarilyNotSupport('reserveChannelsLive');
const openChannelsLive = temporarilyNotSupport('openChannelsLive');
const openChannelsEvent = temporarilyNotSupport('openChannelsEvent');
const openChannelsActivity = temporarilyNotSupport('openChannelsActivity');
const getChannelsLiveNoticeInfo = temporarilyNotSupport('getChannelsLiveNoticeInfo');
const getChannelsLiveInfo = temporarilyNotSupport('getChannelsLiveInfo');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getChannelsLiveInfo', { enumerable: true, configurable: true, get: function() { return getChannelsLiveInfo; } });Object.defineProperty(exports, 'getChannelsLiveNoticeInfo', { enumerable: true, configurable: true, get: function() { return getChannelsLiveNoticeInfo; } });Object.defineProperty(exports, 'openChannelsActivity', { enumerable: true, configurable: true, get: function() { return openChannelsActivity; } });Object.defineProperty(exports, 'openChannelsEvent', { enumerable: true, configurable: true, get: function() { return openChannelsEvent; } });Object.defineProperty(exports, 'openChannelsLive', { enumerable: true, configurable: true, get: function() { return openChannelsLive; } });Object.defineProperty(exports, 'reserveChannelsLive', { enumerable: true, configurable: true, get: function() { return reserveChannelsLive; } });
//# sourceMappingURL=channels-live.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929766, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 微信客服
const openCustomerServiceChat = temporarilyNotSupport('openCustomerServiceChat');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'openCustomerServiceChat', { enumerable: true, configurable: true, get: function() { return openCustomerServiceChat; } });
//# sourceMappingURL=customer-service.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929767, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 过往接口
const checkIsSupportFacialRecognition = temporarilyNotSupport('checkIsSupportFacialRecognition');
const startFacialRecognitionVerify = temporarilyNotSupport('startFacialRecognitionVerify');
const startFacialRecognitionVerifyAndUploadVideo = temporarilyNotSupport('startFacialRecognitionVerifyAndUploadVideo');
const faceVerifyForPay = temporarilyNotSupport('faceVerifyForPay');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'checkIsSupportFacialRecognition', { enumerable: true, configurable: true, get: function() { return checkIsSupportFacialRecognition; } });Object.defineProperty(exports, 'faceVerifyForPay', { enumerable: true, configurable: true, get: function() { return faceVerifyForPay; } });Object.defineProperty(exports, 'startFacialRecognitionVerify', { enumerable: true, configurable: true, get: function() { return startFacialRecognitionVerify; } });Object.defineProperty(exports, 'startFacialRecognitionVerifyAndUploadVideo', { enumerable: true, configurable: true, get: function() { return startFacialRecognitionVerifyAndUploadVideo; } });
//# sourceMappingURL=facial.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929768, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 收藏
const addVideoToFavorites = temporarilyNotSupport('addVideoToFavorites');
const addFileToFavorites = temporarilyNotSupport('addFileToFavorites');
const checkIsAddedToMyMiniProgram = temporarilyNotSupport('checkIsAddedToMyMiniProgram');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'addFileToFavorites', { enumerable: true, configurable: true, get: function() { return addFileToFavorites; } });Object.defineProperty(exports, 'addVideoToFavorites', { enumerable: true, configurable: true, get: function() { return addVideoToFavorites; } });Object.defineProperty(exports, 'checkIsAddedToMyMiniProgram', { enumerable: true, configurable: true, get: function() { return checkIsAddedToMyMiniProgram; } });
//# sourceMappingURL=favorites.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929769, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 微信群
const getGroupEnterInfo = temporarilyNotSupport('getGroupEnterInfo');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getGroupEnterInfo', { enumerable: true, configurable: true, get: function() { return getGroupEnterInfo; } });
//# sourceMappingURL=group.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929770, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 发票
const chooseInvoiceTitle = temporarilyNotSupport('chooseInvoiceTitle');
const chooseInvoice = temporarilyNotSupport('chooseInvoice');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseInvoice', { enumerable: true, configurable: true, get: function() { return chooseInvoice; } });Object.defineProperty(exports, 'chooseInvoiceTitle', { enumerable: true, configurable: true, get: function() { return chooseInvoiceTitle; } });
//# sourceMappingURL=invoice.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929771, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 车牌
const chooseLicensePlate = temporarilyNotSupport('chooseLicensePlate');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'chooseLicensePlate', { enumerable: true, configurable: true, get: function() { return chooseLicensePlate; } });
//# sourceMappingURL=license-plate.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929772, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 帐号信息
const pluginLogin = temporarilyNotSupport('pluginLogin');
const login = temporarilyNotSupport('login');
const checkSession = temporarilyNotSupport('checkSession');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'checkSession', { enumerable: true, configurable: true, get: function() { return checkSession; } });Object.defineProperty(exports, 'login', { enumerable: true, configurable: true, get: function() { return login; } });Object.defineProperty(exports, 'pluginLogin', { enumerable: true, configurable: true, get: function() { return pluginLogin; } });
//# sourceMappingURL=login.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929773, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 微信红包
const showRedPackage = temporarilyNotSupport('showRedPackage');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'showRedPackage', { enumerable: true, configurable: true, get: function() { return showRedPackage; } });
//# sourceMappingURL=red-package.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929774, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 设置
const openSetting = temporarilyNotSupport('openSetting');
const getSetting = temporarilyNotSupport('getSetting');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getSetting', { enumerable: true, configurable: true, get: function() { return getSetting; } });Object.defineProperty(exports, 'openSetting', { enumerable: true, configurable: true, get: function() { return openSetting; } });
//# sourceMappingURL=settings.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929775, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 生物认证
const startSoterAuthentication = temporarilyNotSupport('startSoterAuthentication');
const checkIsSupportSoterAuthentication = temporarilyNotSupport('checkIsSupportSoterAuthentication');
const checkIsSoterEnrolledInDevice = temporarilyNotSupport('checkIsSoterEnrolledInDevice');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'checkIsSoterEnrolledInDevice', { enumerable: true, configurable: true, get: function() { return checkIsSoterEnrolledInDevice; } });Object.defineProperty(exports, 'checkIsSupportSoterAuthentication', { enumerable: true, configurable: true, get: function() { return checkIsSupportSoterAuthentication; } });Object.defineProperty(exports, 'startSoterAuthentication', { enumerable: true, configurable: true, get: function() { return startSoterAuthentication; } });
//# sourceMappingURL=soter.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929776, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 订阅消息
const requestSubscribeMessage = temporarilyNotSupport('requestSubscribeMessage');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'requestSubscribeMessage', { enumerable: true, configurable: true, get: function() { return requestSubscribeMessage; } });
//# sourceMappingURL=subscribe-message.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929777, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 用户信息
const getUserProfile = temporarilyNotSupport('getUserProfile');
const getUserInfo = temporarilyNotSupport('getUserInfo');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getUserInfo', { enumerable: true, configurable: true, get: function() { return getUserInfo; } });Object.defineProperty(exports, 'getUserProfile', { enumerable: true, configurable: true, get: function() { return getUserProfile; } });
//# sourceMappingURL=user-info.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929778, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 微信运动
const shareToWeRun = temporarilyNotSupport('shareToWeRun');
const getWeRunData = temporarilyNotSupport('getWeRunData');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getWeRunData', { enumerable: true, configurable: true, get: function() { return getWeRunData; } });Object.defineProperty(exports, 'shareToWeRun', { enumerable: true, configurable: true, get: function() { return shareToWeRun; } });
//# sourceMappingURL=werun.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929779, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 支付
const requestPayment = temporarilyNotSupport('requestPayment');
const requestOrderPayment = temporarilyNotSupport('requestOrderPayment');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'requestOrderPayment', { enumerable: true, configurable: true, get: function() { return requestOrderPayment; } });Object.defineProperty(exports, 'requestPayment', { enumerable: true, configurable: true, get: function() { return requestPayment; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929780, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('@tarojs/router');Object.defineProperty(exports, 'navigateBack', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateBack; } });Object.defineProperty(exports, 'navigateTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.navigateTo; } });Object.defineProperty(exports, 'reLaunch', { enumerable: true, configurable: true, get: function() { return __TEMP__.reLaunch; } });Object.defineProperty(exports, 'redirectTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.redirectTo; } });Object.defineProperty(exports, 'switchTab', { enumerable: true, configurable: true, get: function() { return __TEMP__.switchTab; } });

// 路由
// FIXME 方法导出类型未对齐，后续修复
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929781, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 转发
const updateShareMenu = temporarilyNotSupport('updateShareMenu');
const showShareMenu = temporarilyNotSupport('showShareMenu');
const showShareImageMenu = temporarilyNotSupport('showShareImageMenu');
const shareVideoMessage = temporarilyNotSupport('shareVideoMessage');
const shareFileMessage = temporarilyNotSupport('shareFileMessage');
const onCopyUrl = temporarilyNotSupport('onCopyUrl');
const offCopyUrl = temporarilyNotSupport('offCopyUrl');
const hideShareMenu = temporarilyNotSupport('hideShareMenu');
const getShareInfo = temporarilyNotSupport('getShareInfo');
const authPrivateMessage = temporarilyNotSupport('authPrivateMessage');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'authPrivateMessage', { enumerable: true, configurable: true, get: function() { return authPrivateMessage; } });Object.defineProperty(exports, 'getShareInfo', { enumerable: true, configurable: true, get: function() { return getShareInfo; } });Object.defineProperty(exports, 'hideShareMenu', { enumerable: true, configurable: true, get: function() { return hideShareMenu; } });Object.defineProperty(exports, 'offCopyUrl', { enumerable: true, configurable: true, get: function() { return offCopyUrl; } });Object.defineProperty(exports, 'onCopyUrl', { enumerable: true, configurable: true, get: function() { return onCopyUrl; } });Object.defineProperty(exports, 'shareFileMessage', { enumerable: true, configurable: true, get: function() { return shareFileMessage; } });Object.defineProperty(exports, 'shareVideoMessage', { enumerable: true, configurable: true, get: function() { return shareVideoMessage; } });Object.defineProperty(exports, 'showShareImageMenu', { enumerable: true, configurable: true, get: function() { return showShareImageMenu; } });Object.defineProperty(exports, 'showShareMenu', { enumerable: true, configurable: true, get: function() { return showShareMenu; } });Object.defineProperty(exports, 'updateShareMenu', { enumerable: true, configurable: true, get: function() { return updateShareMenu; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929782, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

const setPageInfo = temporarilyNotSupport('setPageInfo');
// 百度小程序 AI 相关
const ocrIdCard = temporarilyNotSupport('ocrIdCard');
const ocrBankCard = temporarilyNotSupport('ocrBankCard');
const ocrDrivingLicense = temporarilyNotSupport('ocrDrivingLicense');
const ocrVehicleLicense = temporarilyNotSupport('ocrVehicleLicense');
const textReview = temporarilyNotSupport('textReview');
const textToAudio = temporarilyNotSupport('textToAudio');
const imageAudit = temporarilyNotSupport('imageAudit');
const advancedGeneralIdentify = temporarilyNotSupport('advancedGeneralIdentify');
const objectDetectIdentify = temporarilyNotSupport('objectDetectIdentify');
const carClassify = temporarilyNotSupport('carClassify');
const dishClassify = temporarilyNotSupport('dishClassify');
const logoClassify = temporarilyNotSupport('logoClassify');
const animalClassify = temporarilyNotSupport('animalClassify');
const plantClassify = temporarilyNotSupport('plantClassify');
// 用户信息
const getSwanId = temporarilyNotSupport('getSwanId');
// 百度收银台支付
const requestPolymerPayment = temporarilyNotSupport('requestPolymerPayment');
// 打开小程序
const navigateToSmartGameProgram = temporarilyNotSupport('navigateToSmartGameProgram');
const navigateToSmartProgram = temporarilyNotSupport('navigateToSmartProgram');
const navigateBackSmartProgram = temporarilyNotSupport('navigateBackSmartProgram');
const preloadSubPackage = temporarilyNotSupport('preloadSubPackage');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'advancedGeneralIdentify', { enumerable: true, configurable: true, get: function() { return advancedGeneralIdentify; } });Object.defineProperty(exports, 'animalClassify', { enumerable: true, configurable: true, get: function() { return animalClassify; } });Object.defineProperty(exports, 'carClassify', { enumerable: true, configurable: true, get: function() { return carClassify; } });Object.defineProperty(exports, 'dishClassify', { enumerable: true, configurable: true, get: function() { return dishClassify; } });Object.defineProperty(exports, 'getSwanId', { enumerable: true, configurable: true, get: function() { return getSwanId; } });Object.defineProperty(exports, 'imageAudit', { enumerable: true, configurable: true, get: function() { return imageAudit; } });Object.defineProperty(exports, 'logoClassify', { enumerable: true, configurable: true, get: function() { return logoClassify; } });Object.defineProperty(exports, 'navigateBackSmartProgram', { enumerable: true, configurable: true, get: function() { return navigateBackSmartProgram; } });Object.defineProperty(exports, 'navigateToSmartGameProgram', { enumerable: true, configurable: true, get: function() { return navigateToSmartGameProgram; } });Object.defineProperty(exports, 'navigateToSmartProgram', { enumerable: true, configurable: true, get: function() { return navigateToSmartProgram; } });Object.defineProperty(exports, 'objectDetectIdentify', { enumerable: true, configurable: true, get: function() { return objectDetectIdentify; } });Object.defineProperty(exports, 'ocrBankCard', { enumerable: true, configurable: true, get: function() { return ocrBankCard; } });Object.defineProperty(exports, 'ocrDrivingLicense', { enumerable: true, configurable: true, get: function() { return ocrDrivingLicense; } });Object.defineProperty(exports, 'ocrIdCard', { enumerable: true, configurable: true, get: function() { return ocrIdCard; } });Object.defineProperty(exports, 'ocrVehicleLicense', { enumerable: true, configurable: true, get: function() { return ocrVehicleLicense; } });Object.defineProperty(exports, 'plantClassify', { enumerable: true, configurable: true, get: function() { return plantClassify; } });Object.defineProperty(exports, 'preloadSubPackage', { enumerable: true, configurable: true, get: function() { return preloadSubPackage; } });Object.defineProperty(exports, 'requestPolymerPayment', { enumerable: true, configurable: true, get: function() { return requestPolymerPayment; } });Object.defineProperty(exports, 'setPageInfo', { enumerable: true, configurable: true, get: function() { return setPageInfo; } });Object.defineProperty(exports, 'textReview', { enumerable: true, configurable: true, get: function() { return textReview; } });Object.defineProperty(exports, 'textToAudio', { enumerable: true, configurable: true, get: function() { return textToAudio; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929783, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./animation/index.js');Object.defineProperty(exports, 'createAnimation', { enumerable: true, configurable: true, get: function() { return __TEMP__.createAnimation; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./background.js');Object.defineProperty(exports, 'setBackgroundColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundColor; } });Object.defineProperty(exports, 'setBackgroundTextStyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setBackgroundTextStyle; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./custom-component.js');Object.defineProperty(exports, 'nextTick', { enumerable: true, configurable: true, get: function() { return __TEMP__.nextTick; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./fonts.js');Object.defineProperty(exports, 'loadFontFace', { enumerable: true, configurable: true, get: function() { return __TEMP__.loadFontFace; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./interaction/index.js');Object.defineProperty(exports, 'disableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return __TEMP__.disableAlertBeforeUnload; } });Object.defineProperty(exports, 'enableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return __TEMP__.enableAlertBeforeUnload; } });Object.defineProperty(exports, 'hideLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideLoading; } });Object.defineProperty(exports, 'hideToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideToast; } });Object.defineProperty(exports, 'showActionSheet', { enumerable: true, configurable: true, get: function() { return __TEMP__.showActionSheet; } });Object.defineProperty(exports, 'showLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showLoading; } });Object.defineProperty(exports, 'showModal', { enumerable: true, configurable: true, get: function() { return __TEMP__.showModal; } });Object.defineProperty(exports, 'showToast', { enumerable: true, configurable: true, get: function() { return __TEMP__.showToast; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./menu.js');Object.defineProperty(exports, 'getMenuButtonBoundingClientRect', { enumerable: true, configurable: true, get: function() { return __TEMP__.getMenuButtonBoundingClientRect; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./navigation-bar/index.js');Object.defineProperty(exports, 'hideHomeButton', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideHomeButton; } });Object.defineProperty(exports, 'hideNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideNavigationBarLoading; } });Object.defineProperty(exports, 'setNavigationBarColor', { enumerable: true, configurable: true, get: function() { return __TEMP__.setNavigationBarColor; } });Object.defineProperty(exports, 'setNavigationBarTitle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setNavigationBarTitle; } });Object.defineProperty(exports, 'showNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return __TEMP__.showNavigationBarLoading; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./pull-down-refresh.js');Object.defineProperty(exports, 'startPullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.startPullDownRefresh; } });Object.defineProperty(exports, 'stopPullDownRefresh', { enumerable: true, configurable: true, get: function() { return __TEMP__.stopPullDownRefresh; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./scroll/index.js');Object.defineProperty(exports, 'pageScrollTo', { enumerable: true, configurable: true, get: function() { return __TEMP__.pageScrollTo; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./sticky.js');Object.defineProperty(exports, 'setTopBarText', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTopBarText; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./tab-bar.js');Object.defineProperty(exports, 'hideTabBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideTabBar; } });Object.defineProperty(exports, 'hideTabBarRedDot', { enumerable: true, configurable: true, get: function() { return __TEMP__.hideTabBarRedDot; } });Object.defineProperty(exports, 'initTabBarApis', { enumerable: true, configurable: true, get: function() { return __TEMP__.initTabBarApis; } });Object.defineProperty(exports, 'removeTabBarBadge', { enumerable: true, configurable: true, get: function() { return __TEMP__.removeTabBarBadge; } });Object.defineProperty(exports, 'setTabBarBadge', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarBadge; } });Object.defineProperty(exports, 'setTabBarItem', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarItem; } });Object.defineProperty(exports, 'setTabBarStyle', { enumerable: true, configurable: true, get: function() { return __TEMP__.setTabBarStyle; } });Object.defineProperty(exports, 'showTabBar', { enumerable: true, configurable: true, get: function() { return __TEMP__.showTabBar; } });Object.defineProperty(exports, 'showTabBarRedDot', { enumerable: true, configurable: true, get: function() { return __TEMP__.showTabBarRedDot; } });
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var __TEMP__ = require('./window.js');Object.defineProperty(exports, 'offWindowResize', { enumerable: true, configurable: true, get: function() { return __TEMP__.offWindowResize; } });Object.defineProperty(exports, 'onWindowResize', { enumerable: true, configurable: true, get: function() { return __TEMP__.onWindowResize; } });Object.defineProperty(exports, 'setWindowSize', { enumerable: true, configurable: true, get: function() { return __TEMP__.setWindowSize; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./animation/index.js":1680223929784,"./background.js":1680223929785,"./custom-component.js":1680223929786,"./fonts.js":1680223929787,"./interaction/index.js":1680223929788,"./menu.js":1680223929792,"./navigation-bar/index.js":1680223929793,"./pull-down-refresh.js":1680223929794,"./scroll/index.js":1680223929795,"./sticky.js":1680223929796,"./tab-bar.js":1680223929797,"./window.js":1680223929798}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929784, function(require, module, exports) {
/**
 * H5 下的 styleSheet 操作
 * @author leeenx
 */
class StyleSheet {
    constructor() {
        this.$style = null;
        this.sheet = null;
        this.appendStyleSheet = () => {
            if (this.$style) {
                const head = document.getElementsByTagName('head')[0];
                this.$style.setAttribute('type', 'text/css');
                this.$style.setAttribute('data-type', 'Taro');
                head.appendChild(this.$style);
                this.sheet = this.$style.sheet;
            }
            if (this.sheet && !('insertRule' in this.sheet)) {
                console.warn('当前浏览器不支持 stylesheet.insertRule 接口');
            }
        };
        // 添加样式命令
        this.add = (cssText, index = 0) => {
            var _a;
            if (this.sheet === null) {
                // $style 未插入到 DOM
                this.appendStyleSheet();
            }
            (_a = this.sheet) === null || _a === void 0 ? void 0 : _a.insertRule(cssText, index);
        };
        this.$style = document.createElement('style');
    }
}
const styleSheet = new StyleSheet();
// 监听事件
let TRANSITION_END = 'transitionend';
let TRANSFORM = 'transform';
const $detect = document.createElement('div');
$detect.style.cssText = '-webkit-animation-name:webkit;-moz-animation-name:moz;-ms-animation-name:ms;animation-name:standard;';
if ($detect.style['animation-name'] === 'standard') {
    // 支持标准写法
    TRANSITION_END = 'transitionend';
    TRANSFORM = 'transform';
}
else if ($detect.style['-webkit-animation-name'] === 'webkit') {
    // webkit 前缀
    TRANSITION_END = 'webkitTransitionEnd';
    TRANSFORM = '-webkit-transform';
}
else if ($detect.style['-moz-animation-name'] === 'moz') {
    // moz 前缀
    TRANSITION_END = 'mozTransitionEnd';
    TRANSFORM = '-moz-transform';
}
else if ($detect.style['-ms-animation-name'] === 'ms') {
    // ms 前缀
    TRANSITION_END = 'msTransitionEnd';
    TRANSFORM = '-ms-transform';
}
let animId = 0;
class Animation {
    constructor({ duration = 400, delay = 0, timingFunction = 'linear', transformOrigin = '50% 50% 0', unit = 'px' } = {}) {
        // 属性组合
        this.rules = [];
        // transform 对象
        this.transform = [`${TRANSFORM}:`];
        // 组合动画
        this.steps = [];
        // 动画 map ----- 永久保留
        this.animationMap = {};
        // animationMap 的长度
        this.animationMapCount = 0;
        // 默认值
        this.setDefault(duration, delay, timingFunction, transformOrigin);
        this.unit = unit;
        // atom 环境下，animation 属性不会显示，所以要改成 data-animation
        let animAttr = 'animation';
        // 动画 id
        this.id = ++animId;
        // 监听事件
        document.body.addEventListener(TRANSITION_END, (e) => {
            const target = e.target;
            if (target.getAttribute(animAttr) === null) {
                animAttr = 'data-animation';
            }
            const animData = target.getAttribute(animAttr);
            // 没有动画存在
            if (animData === null)
                return;
            const [animName, animPath] = animData.split('__');
            if (animName === `taro-h5-poly-fill/${this.id}/create-animation`) {
                const [animIndex, __stepIndex = 0] = animPath.split('--');
                const stepIndex = Number(__stepIndex);
                // 动画总的关键帧
                const animStepsCount = this.animationMap[`${animName}__${animIndex}`];
                const animStepsMaxIndex = animStepsCount - 1;
                if (stepIndex < animStepsMaxIndex) {
                    // 播放下一个关键帧（因为 nerv 和 react 有差异所以 animation & data-animation 都需要写）
                    target.setAttribute(animAttr, `${animName}__${animIndex}--${stepIndex + 1}`);
                    if (animAttr === 'animation') {
                        // Nerv 环境，animation & data-animation 双重保险
                        target.setAttribute('data-animation', `${animName}__${animIndex}--${stepIndex + 1}`);
                    }
                }
            }
        });
    }
    transformUnit(...args) {
        const ret = [];
        args.forEach(each => {
            ret.push(isNaN(each) ? each : `${each}${this.unit}`);
        });
        return ret;
    }
    // 设置默认值
    setDefault(duration, delay, timingFunction, transformOrigin) {
        this.DEFAULT = { duration, delay, timingFunction, transformOrigin };
    }
    matrix(a, b, c, d, tx, ty) {
        this.transform.push(`matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`);
        return this;
    }
    matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
        this.transform.push(`matrix3d(${a1}, ${b1}, ${c1}, ${d1}, ${a2}, ${b2}, ${c2}, ${d2}, ${a3}, ${b3}, ${c3}, ${d3}, ${a4}, ${b4}, ${c4}, ${d4})`);
        return this;
    }
    rotate(angle) {
        this.transform.push(`rotate(${angle}deg)`);
        return this;
    }
    rotate3d(x, y, z, angle) {
        if (typeof y !== 'number') {
            this.transform.push(`rotate3d(${x})`);
        }
        else {
            this.transform.push(`rotate3d(${x}, ${y || 0}, ${z || 0}, ${angle || 0}deg)`);
        }
        return this;
    }
    rotateX(angle) {
        this.transform.push(`rotateX(${angle}deg)`);
        return this;
    }
    rotateY(angle) {
        this.transform.push(`rotateY(${angle}deg)`);
        return this;
    }
    rotateZ(angle) {
        this.transform.push(`rotateZ(${angle}deg)`);
        return this;
    }
    scale(x, y) {
        this.transform.push(`scale(${x}, ${y})`);
        return this;
    }
    scale3d(x, y, z) {
        this.transform.push(`scale3d(${x}, ${y}, ${z})`);
        return this;
    }
    scaleX(scale) {
        this.transform.push(`scaleX(${scale})`);
        return this;
    }
    scaleY(scale) {
        this.transform.push(`scaleY(${scale})`);
        return this;
    }
    scaleZ(scale) {
        this.transform.push(`scaleZ(${scale})`);
        return this;
    }
    skew(x, y) {
        this.transform.push(`skew(${x}, ${y})`);
        return this;
    }
    skewX(angle) {
        this.transform.push(`skewX(${angle})`);
        return this;
    }
    skewY(angle) {
        this.transform.push(`skewY(${angle})`);
        return this;
    }
    translate(x, y) {
        [x, y] = this.transformUnit(x, y);
        this.transform.push(`translate(${x}, ${y})`);
        return this;
    }
    translate3d(x, y, z) {
        [x, y, z] = this.transformUnit(x, y, z);
        this.transform.push(`translate3d(${x}, ${y}, ${z})`);
        return this;
    }
    translateX(translate) {
        [translate] = this.transformUnit(translate);
        this.transform.push(`translateX(${translate})`);
        return this;
    }
    translateY(translate) {
        [translate] = this.transformUnit(translate);
        this.transform.push(`translateY(${translate})`);
        return this;
    }
    translateZ(translate) {
        [translate] = this.transformUnit(translate);
        this.transform.push(`translateZ(${translate})`);
        return this;
    }
    opacity(value) {
        this.rules.push(`opacity: ${value}`);
        return this;
    }
    backgroundColor(value) {
        this.rules.push(`background-color: ${value}`);
        return this;
    }
    width(value) {
        [value] = this.transformUnit(value);
        this.rules.push(`width: ${value}`);
        return this;
    }
    height(value) {
        [value] = this.transformUnit(value);
        this.rules.push(`height: ${value}`);
        return this;
    }
    top(value) {
        [value] = this.transformUnit(value);
        this.rules.push(`top: ${value}`);
        return this;
    }
    right(value) {
        [value] = this.transformUnit(value);
        this.rules.push(`right: ${value}`);
        return this;
    }
    bottom(value) {
        [value] = this.transformUnit(value);
        this.rules.push(`bottom: ${value}`);
        return this;
    }
    left(value) {
        [value] = this.transformUnit(value);
        this.rules.push(`left: ${value}`);
        return this;
    }
    // 关键帧载入
    step(arg = {}) {
        const { DEFAULT } = this;
        const { duration = DEFAULT.duration, delay = DEFAULT.delay, timingFunction = DEFAULT.timingFunction, transformOrigin = DEFAULT.transformOrigin } = arg;
        // 生成一条 transition 动画
        this.steps.push([
            this.rules.map(rule => `${rule}!important`).join(';'),
            `${this.transform.join(' ')}!important`,
            `${TRANSFORM}-origin: ${transformOrigin}`,
            `transition: all ${duration}ms ${timingFunction} ${delay}ms`
        ]
            .filter(item => item !== '' && item !== `${TRANSFORM}:`)
            .join(';'));
        // 清空 rules 和 transform
        this.rules = [];
        this.transform = [`${TRANSFORM}:`];
        return this;
    }
    // 创建底层数据
    createAnimationData() {
        const animIndex = `taro-h5-poly-fill/${this.id}/create-animation__${this.animationMapCount++}`;
        // 记录动画分几个 step
        this.animationMap[animIndex] = this.steps.length;
        // 吐出 step
        this.steps.forEach((step, index) => {
            const selector = index === 0
                ? `[animation="${animIndex}"], [data-animation="${animIndex}"]`
                : `[animation="${animIndex}--${index}"], [data-animation="${animIndex}--${index}"]`;
            styleSheet.add(`${selector} { ${step} }`);
        });
        // 清空 steps
        this.steps = [];
        return animIndex;
    }
    // 动画数据产出
    export() {
        return this.createAnimationData();
    }
}
// h5 的 createAnimation
const createAnimation = (option) => {
    return new Animation(option);
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createAnimation', { enumerable: true, configurable: true, get: function() { return createAnimation; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929785, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 背景
const setBackgroundTextStyle = temporarilyNotSupport('setBackgroundTextStyle');
const setBackgroundColor = temporarilyNotSupport('setBackgroundColor');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'setBackgroundColor', { enumerable: true, configurable: true, get: function() { return setBackgroundColor; } });Object.defineProperty(exports, 'setBackgroundTextStyle', { enumerable: true, configurable: true, get: function() { return setBackgroundTextStyle; } });
//# sourceMappingURL=background.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929786, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);

// 自定义组件
const nextTick = Taro.nextTick;

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'nextTick', { enumerable: true, configurable: true, get: function() { return nextTick; } });
//# sourceMappingURL=custom-component.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929787, function(require, module, exports) {
var __TEMP__ = require('../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

// 字体
const loadFontFace = (options) => __awaiter(void 0, void 0, void 0, function* () {
    options = Object.assign({ global: false }, options);
    const { success, fail, complete, family, source, desc = {} } = options;
    const handle = new MethodHandler({ name: 'loadFontFace', success, fail, complete });
    // @ts-ignore
    const fonts = document.fonts;
    if (fonts) {
        // @ts-ignore
        const fontFace = new FontFace(family, source, desc);
        try {
            yield fontFace.load();
            fonts.add(fontFace);
            return handle.success({});
        }
        catch (error) {
            return handle.fail({
                errMsg: error.message || error
            });
        }
    }
    else {
        const style = document.createElement('style');
        let innerText = `font-family:"${family}";src:${source};font-style:${desc.style || 'normal'};font-weight:${desc.weight || 'normal'};font-variant:${desc.variant || 'normal'};`;
        if (desc.ascentOverride) {
            innerText += `ascent-override:${desc.ascentOverride};`;
        }
        if (desc.descentOverride) {
            innerText += `descent-override:${desc.descentOverride};`;
        }
        if (desc.featureSettings) {
            innerText += `font-feature-settings:${desc.featureSettings};`;
        }
        if (desc.lineGapOverride) {
            innerText += `line-gap-override:${desc.lineGapOverride};`;
        }
        if (desc.stretch) {
            innerText += `font-stretch:${desc.stretch};`;
        }
        if (desc.unicodeRange) {
            innerText += `unicode-range:${desc.unicodeRange};`;
        }
        if (desc.variationSettings) {
            innerText += `font-variation-settings:${desc.variationSettings};`;
        }
        style.innerText = `@font-face{${innerText}}`;
        document.head.appendChild(style);
        return handle.success();
    }
});

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'loadFontFace', { enumerable: true, configurable: true, get: function() { return loadFontFace; } });
//# sourceMappingURL=fonts.js.map

}, function(modId) { var map = {"../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929788, function(require, module, exports) {
var __TEMP__ = require('../../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js');var __awaiter = __TEMP__['__awaiter'];
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];
var __TEMP__ = require('../../../utils/index.js');var getParameterError = __TEMP__['getParameterError'];var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('./actionSheet.js');var ActionSheet = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./modal.js');var Modal = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./toast.js');var Toast = __REQUIRE_DEFAULT__(__TEMP__);

// 交互
let status = 'default';
// inject necessary style
function init(doc) {
    if (status === 'ready')
        return;
    const taroStyle = doc.createElement('style');
    taroStyle.textContent = '@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJWs0t/AAABfAAAAFZjbWFwqVgGvgAAAeAAAAGGZ2x5Zph7qG0AAANwAAAAdGhlYWQRFoGhAAAA4AAAADZoaGVhCCsD7AAAALwAAAAkaG10eAg0AAAAAAHUAAAADGxvY2EADAA6AAADaAAAAAhtYXhwAQ4AJAAAARgAAAAgbmFtZYrphEEAAAPkAAACVXBvc3S3shtSAAAGPAAAADUAAQAAA+gAAABaA+gAAAAAA+gAAQAAAAAAAAAAAAAAAAAAAAMAAQAAAAEAAADih+FfDzz1AAsD6AAAAADXB57LAAAAANcHnssAAP/sA+gDOgAAAAgAAgAAAAAAAAABAAAAAwAYAAEAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQK8AZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjqCAPoAAAAWgPoABQAAAABAAAAAAAAA+gAAABkAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAV4AAQAAAAAAWAADAAEAAAAsAAMACgAAAV4ABAAsAAAABgAEAAEAAgB46gj//wAAAHjqCP//AAAAAAABAAYABgAAAAEAAgAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAKAAAAAAAAAACAAAAeAAAAHgAAAABAADqCAAA6ggAAAACAAAAAAAAAAwAOgABAAD/7AAyABQAAgAANzMVFB4UKAAAAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAAAEgDeAAEAAAAAAAAAHQAAAAEAAAAAAAEABAAdAAEAAAAAAAIABwAhAAEAAAAAAAMABAAoAAEAAAAAAAQABAAsAAEAAAAAAAUACwAwAAEAAAAAAAYABAA7AAEAAAAAAAoAKwA/AAEAAAAAAAsAEwBqAAMAAQQJAAAAOgB9AAMAAQQJAAEACAC3AAMAAQQJAAIADgC/AAMAAQQJAAMACADNAAMAAQQJAAQACADVAAMAAQQJAAUAFgDdAAMAAQQJAAYACADzAAMAAQQJAAoAVgD7AAMAAQQJAAsAJgFRCiAgQ3JlYXRlZCBieSBmb250LWNhcnJpZXIKICB3ZXVpUmVndWxhcndldWl3ZXVpVmVyc2lvbiAxLjB3ZXVpR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgAgACAAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGYAbwBuAHQALQBjAGEAcgByAGkAZQByAAoAIAAgAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwECAQMBBAABeAd1bmlFQTA4AAAAAAA=") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}';
    doc.querySelector('head').appendChild(taroStyle);
    status = 'ready';
}
const toast = new Toast();
const modal = new Modal();
const actionSheet = new ActionSheet();
const showToast = (options = { title: '' }) => {
    init(document);
    options = Object.assign({
        title: '',
        icon: 'success',
        image: '',
        duration: 1500,
        mask: false
    }, options);
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'showToast', success, fail, complete });
    if (typeof options.title !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'title',
                correct: 'String',
                wrong: options.title
            })
        });
    }
    if (typeof options.duration !== 'number') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'duration',
                correct: 'Number',
                wrong: options.duration
            })
        });
    }
    if (options.image && typeof options.image !== 'string')
        options.image = '';
    options.mask = !!options.mask;
    let errMsg = '';
    if (!toast.el) {
        errMsg = toast.create(options, 'toast');
    }
    else {
        errMsg = toast.show(options, 'toast');
    }
    return handle.success({ errMsg });
};
const hideToast = ({ noConflict = false, success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'hideToast', success, fail, complete });
    if (!toast.el)
        return handle.success();
    toast.hide(0, noConflict ? 'toast' : '');
    return handle.success();
};
const showLoading = (options = { title: '' }) => {
    init(document);
    options = Object.assign({
        title: '',
        mask: false
    }, options);
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'showLoading', success, fail, complete });
    const config = {
        icon: 'loading',
        image: '',
        duration: -1
    };
    options = Object.assign({}, options, config);
    if (typeof options.title !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'title',
                correct: 'String',
                wrong: options.title
            })
        });
    }
    options.mask = !!options.mask;
    let errMsg = '';
    if (!toast.el) {
        errMsg = toast.create(options, 'loading');
    }
    else {
        errMsg = toast.show(options, 'loading');
    }
    return handle.success({ errMsg });
};
const hideLoading = ({ noConflict = false, success, fail, complete } = {}) => {
    const handle = new MethodHandler({ name: 'hideLoading', success, fail, complete });
    if (!toast.el)
        return handle.success();
    toast.hide(0, noConflict ? 'loading' : '');
    return handle.success();
};
const showModal = (options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    init(document);
    options = Object.assign({
        title: '',
        content: '',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F'
    }, options);
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'showModal', success, fail, complete });
    if (typeof options.title !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'title',
                correct: 'String',
                wrong: options.title
            })
        });
    }
    if (typeof options.content !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'content',
                correct: 'String',
                wrong: options.content
            })
        });
    }
    if (typeof options.cancelText !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'cancelText',
                correct: 'String',
                wrong: options.cancelText
            })
        });
    }
    if (options.cancelText.replace(/[\u0391-\uFFE5]/g, 'aa').length > 8) {
        return handle.fail({
            errMsg: 'cancelText length should not larger then 4 Chinese characters'
        });
    }
    if (typeof options.confirmText !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'confirmText',
                correct: 'String',
                wrong: options.confirmText
            })
        });
    }
    if (options.confirmText.replace(/[\u0391-\uFFE5]/g, 'aa').length > 8) {
        return handle.fail({
            errMsg: 'confirmText length should not larger then 4 Chinese characters'
        });
    }
    if (typeof options.cancelColor !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'cancelColor',
                correct: 'String',
                wrong: options.cancelColor
            })
        });
    }
    if (typeof options.confirmColor !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'confirmColor',
                correct: 'String',
                wrong: options.confirmColor
            })
        });
    }
    options.showCancel = !!options.showCancel;
    let result = '';
    if (!modal.el) {
        result = yield modal.create(options);
    }
    else {
        result = yield modal.show(options);
    }
    const res = { cancel: !1, confirm: !1 };
    res[result] = !0;
    return handle.success(res);
});
function hideModal() {
    if (!modal.el)
        return;
    modal.hide();
}
const showActionSheet = (options = { itemList: [] }) => __awaiter(void 0, void 0, void 0, function* () {
    init(document);
    options = Object.assign({
        itemColor: '#000000',
        itemList: []
    }, options);
    const { success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'showActionSheet', success, fail, complete });
    // list item String
    if (!Array.isArray(options.itemList)) {
        return handle.fail({
            errMsg: getParameterError({
                para: 'itemList',
                correct: 'Array',
                wrong: options.itemList
            })
        });
    }
    if (options.itemList.length < 1) {
        return handle.fail({ errMsg: 'parameter error: parameter.itemList should have at least 1 item' });
    }
    if (options.itemList.length > 6) {
        return handle.fail({ errMsg: 'parameter error: parameter.itemList should not be large than 6' });
    }
    for (let i = 0; i < options.itemList.length; i++) {
        if (typeof options.itemList[i] !== 'string') {
            return handle.fail({
                errMsg: getParameterError({
                    para: `itemList[${i}]`,
                    correct: 'String',
                    wrong: options.itemList[i]
                })
            });
        }
    }
    if (typeof options.itemColor !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'itemColor',
                correct: 'String',
                wrong: options.itemColor
            })
        });
    }
    let result = '';
    if (!actionSheet.el) {
        result = yield actionSheet.create(options);
    }
    else {
        result = yield actionSheet.show(options);
    }
    if (typeof result === 'string') {
        return handle.fail(({ errMsg: result }));
    }
    else {
        return handle.success(({ tapIndex: result }));
    }
});
Taro.eventCenter.on('__afterTaroRouterChange', () => {
    var _a, _b;
    if (toast.currentPath && toast.currentPath !== ((_a = Current.page) === null || _a === void 0 ? void 0 : _a.path)) {
        hideToast();
        hideLoading();
    }
    if (modal.currentPath && modal.currentPath !== ((_b = Current.page) === null || _b === void 0 ? void 0 : _b.path)) {
        hideModal();
    }
});
const enableAlertBeforeUnload = temporarilyNotSupport('enableAlertBeforeUnload');
const disableAlertBeforeUnload = temporarilyNotSupport('disableAlertBeforeUnload');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'disableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return disableAlertBeforeUnload; } });Object.defineProperty(exports, 'enableAlertBeforeUnload', { enumerable: true, configurable: true, get: function() { return enableAlertBeforeUnload; } });Object.defineProperty(exports, 'hideLoading', { enumerable: true, configurable: true, get: function() { return hideLoading; } });Object.defineProperty(exports, 'hideToast', { enumerable: true, configurable: true, get: function() { return hideToast; } });Object.defineProperty(exports, 'showActionSheet', { enumerable: true, configurable: true, get: function() { return showActionSheet; } });Object.defineProperty(exports, 'showLoading', { enumerable: true, configurable: true, get: function() { return showLoading; } });Object.defineProperty(exports, 'showModal', { enumerable: true, configurable: true, get: function() { return showModal; } });Object.defineProperty(exports, 'showToast', { enumerable: true, configurable: true, get: function() { return showToast; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../node_modules/.pnpm/registry.npmjs.org_tslib@1.14.1/node_modules/tslib/tslib.es6.js":1680223929685,"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672,"./actionSheet.js":1680223929789,"./modal.js":1680223929790,"./toast.js":1680223929791}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929789, function(require, module, exports) {
var __TEMP__ = require('../../../utils/index.js');var inlineStyle = __TEMP__['inlineStyle'];var setTransform = __TEMP__['setTransform'];

const noop = function () { };
class ActionSheet {
    constructor() {
        this.options = {
            itemList: [],
            itemColor: '#000000',
            success: noop,
            fail: noop,
            complete: noop
        };
        this.style = {
            maskStyle: {
                position: 'fixed',
                'z-index': '1000',
                top: '0',
                right: '0',
                left: '0',
                bottom: '0',
                background: 'rgba(0,0,0,0.6)'
            },
            actionSheetStyle: {
                'z-index': '4999',
                position: 'fixed',
                left: '0',
                bottom: '0',
                '-webkit-transform': 'translate(0, 100%)',
                transform: 'translate(0, 100%)',
                width: '100%',
                'line-height': '1.6',
                background: '#EFEFF4',
                '-webkit-transition': '-webkit-transform .3s',
                transition: 'transform .3s'
            },
            menuStyle: {
                'background-color': '#FCFCFD'
            },
            cellStyle: {
                position: 'relative',
                padding: '10px 0',
                'text-align': 'center',
                'font-size': '18px'
            },
            cancelStyle: {
                'margin-top': '6px',
                padding: '10px 0',
                'text-align': 'center',
                'font-size': '18px',
                color: '#000000',
                'background-color': '#FCFCFD'
            }
        };
        this.lastConfig = {};
    }
    create(options = {}) {
        return new Promise((resolve) => {
            // style
            const { maskStyle, actionSheetStyle, menuStyle, cellStyle, cancelStyle } = this.style;
            // configuration
            const config = Object.assign(Object.assign({}, this.options), options);
            this.lastConfig = config;
            // wrapper
            this.el = document.createElement('div');
            this.el.className = 'taro__actionSheet';
            this.el.style.opacity = '0';
            this.el.style.transition = 'opacity 0.2s linear';
            // mask
            this.mask = document.createElement('div');
            this.mask.setAttribute('style', inlineStyle(maskStyle));
            // actionSheet
            this.actionSheet = document.createElement('div');
            this.actionSheet.setAttribute('style', inlineStyle(actionSheetStyle));
            // menu
            this.menu = document.createElement('div');
            this.menu.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, menuStyle), { color: config.itemColor })));
            // cells
            this.cells = config.itemList.map((item, index) => {
                const cell = document.createElement('div');
                cell.className = 'taro-actionsheet__cell';
                cell.setAttribute('style', inlineStyle(cellStyle));
                cell.textContent = item;
                cell.dataset.tapIndex = `${index}`;
                cell.onclick = e => {
                    this.hide();
                    const target = e.currentTarget;
                    const index = Number(target === null || target === void 0 ? void 0 : target.dataset.tapIndex) || 0;
                    resolve(index);
                };
                return cell;
            });
            // cancel
            this.cancel = document.createElement('div');
            this.cancel.setAttribute('style', inlineStyle(cancelStyle));
            this.cancel.textContent = '取消';
            // result
            this.cells.forEach(item => this.menu.appendChild(item));
            this.actionSheet.appendChild(this.menu);
            this.actionSheet.appendChild(this.cancel);
            this.el.appendChild(this.mask);
            this.el.appendChild(this.actionSheet);
            // callbacks
            const cb = () => {
                this.hide();
                resolve('cancel');
            };
            this.mask.onclick = cb;
            this.cancel.onclick = cb;
            // show immediately
            document.body.appendChild(this.el);
            setTimeout(() => {
                this.el.style.opacity = '1';
                setTransform(this.actionSheet, 'translate(0, 0)');
            }, 0);
        });
    }
    show(options = {}) {
        return new Promise((resolve) => {
            const config = Object.assign(Object.assign({}, this.options), options);
            this.lastConfig = config;
            if (this.hideOpacityTimer)
                clearTimeout(this.hideOpacityTimer);
            if (this.hideDisplayTimer)
                clearTimeout(this.hideDisplayTimer);
            // itemColor
            if (config.itemColor)
                this.menu.style.color = config.itemColor;
            // cells
            const { cellStyle } = this.style;
            config.itemList.forEach((item, index) => {
                let cell;
                if (this.cells[index]) {
                    // assign new content
                    cell = this.cells[index];
                }
                else {
                    // create new cell
                    cell = document.createElement('div');
                    cell.className = 'taro-actionsheet__cell';
                    cell.setAttribute('style', inlineStyle(cellStyle));
                    cell.dataset.tapIndex = `${index}`;
                    this.cells.push(cell);
                    this.menu.appendChild(cell);
                }
                cell.textContent = item;
                cell.onclick = e => {
                    this.hide();
                    const target = e.currentTarget;
                    const index = Number(target === null || target === void 0 ? void 0 : target.dataset.tapIndex) || 0;
                    resolve(index);
                };
            });
            const cellsLen = this.cells.length;
            const itemListLen = config.itemList.length;
            if (cellsLen > itemListLen) {
                for (let i = itemListLen; i < cellsLen; i++) {
                    this.menu.removeChild(this.cells[i]);
                }
                this.cells.splice(itemListLen);
            }
            // callbacks
            const cb = () => {
                this.hide();
                resolve('cancel');
            };
            this.mask.onclick = cb;
            this.cancel.onclick = cb;
            // show
            this.el.style.display = 'block';
            setTimeout(() => {
                this.el.style.opacity = '1';
                setTransform(this.actionSheet, 'translate(0, 0)');
            }, 0);
        });
    }
    hide() {
        if (this.hideOpacityTimer)
            clearTimeout(this.hideOpacityTimer);
        if (this.hideDisplayTimer)
            clearTimeout(this.hideDisplayTimer);
        this.hideOpacityTimer = setTimeout(() => {
            this.el.style.opacity = '0';
            setTransform(this.actionSheet, 'translate(0, 100%)');
            this.hideDisplayTimer = setTimeout(() => { this.el.style.display = 'none'; }, 200);
        }, 0);
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return ActionSheet; } });
//# sourceMappingURL=actionSheet.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929790, function(require, module, exports) {
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];
var __TEMP__ = require('../../../utils/index.js');var inlineStyle = __TEMP__['inlineStyle'];var getCurrentPath = __TEMP__['getCurrentPath'];

class Modal {
    constructor() {
        this.options = {
            title: '',
            content: '',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F'
        };
        this.style = {
            maskStyle: {
                position: 'fixed',
                'z-index': '1000',
                top: '0',
                right: '0',
                left: '0',
                bottom: '0',
                background: 'rgba(0,0,0,0.6)'
            },
            modalStyle: {
                'z-index': '4999',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                'max-width': '300px',
                'border-radius': '3px',
                'text-align': 'center',
                'line-height': '1.6',
                overflow: 'hidden',
                background: '#FFFFFF'
            },
            titleStyle: {
                padding: '20px 24px 9px',
                'font-size': '18px'
            },
            textStyle: {
                padding: '0 24px 12px',
                'min-height': '40px',
                'font-size': '15px',
                'line-height': '1.3',
                color: '#808080'
            },
            footStyle: {
                position: 'relative',
                'line-height': '48px',
                'font-size': '18px',
                display: 'flex'
            },
            btnStyle: {
                position: 'relative',
                '-webkit-box-flex': '1',
                '-webkit-flex': '1',
                flex: '1'
            }
        };
    }
    create(options = {}) {
        return new Promise((resolve) => {
            var _a, _b;
            // style
            const { maskStyle, modalStyle, titleStyle, textStyle, footStyle, btnStyle } = this.style;
            // configuration
            const config = Object.assign(Object.assign({}, this.options), options);
            // wrapper
            this.el = document.createElement('div');
            this.el.className = 'taro__modal';
            this.el.style.opacity = '0';
            this.el.style.transition = 'opacity 0.2s linear';
            // mask
            const mask = document.createElement('div');
            mask.className = 'taro-modal__mask';
            mask.setAttribute('style', inlineStyle(maskStyle));
            // modal
            const modal = document.createElement('div');
            modal.className = 'taro-modal__content';
            modal.setAttribute('style', inlineStyle(modalStyle));
            // title
            const titleCSS = config.title ? titleStyle : Object.assign(Object.assign({}, titleStyle), { display: 'none' });
            this.title = document.createElement('div');
            this.title.className = 'taro-modal__title';
            this.title.setAttribute('style', inlineStyle(titleCSS));
            this.title.textContent = config.title;
            // text
            const textCSS = config.title ? textStyle : Object.assign(Object.assign({}, textStyle), { padding: '40px 20px 26px', color: '#353535' });
            this.text = document.createElement('div');
            this.text.className = 'taro-modal__text';
            this.text.setAttribute('style', inlineStyle(textCSS));
            this.text.textContent = config.content;
            // foot
            const foot = document.createElement('div');
            foot.className = 'taro-modal__foot';
            foot.setAttribute('style', inlineStyle(footStyle));
            // cancel button
            const cancelCSS = Object.assign(Object.assign({}, btnStyle), { color: config.cancelColor, display: config.showCancel ? 'block' : 'none' });
            this.cancel = document.createElement('div');
            this.cancel.className = 'taro-model__btn taro-model__cancel';
            this.cancel.setAttribute('style', inlineStyle(cancelCSS));
            this.cancel.textContent = config.cancelText;
            this.cancel.onclick = () => {
                this.hide();
                resolve('cancel');
            };
            // confirm button
            this.confirm = document.createElement('div');
            this.confirm.className = 'taro-model__btn taro-model__confirm';
            this.confirm.setAttribute('style', inlineStyle(btnStyle));
            this.confirm.style.color = config.confirmColor;
            this.confirm.textContent = config.confirmText;
            this.confirm.onclick = () => {
                this.hide();
                resolve('confirm');
            };
            // result
            foot.appendChild(this.cancel);
            foot.appendChild(this.confirm);
            modal.appendChild(this.title);
            modal.appendChild(this.text);
            modal.appendChild(foot);
            this.el.appendChild(mask);
            this.el.appendChild(modal);
            // show immediately
            document.body.appendChild(this.el);
            setTimeout(() => { this.el.style.opacity = '1'; }, 0);
            // Current.page不存在时说明路由还未挂载，此时需根据url来分配将要渲染的页面path
            this.currentPath = (_b = (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : getCurrentPath();
        });
    }
    show(options = {}) {
        return new Promise((resolve) => {
            var _a, _b;
            const config = Object.assign(Object.assign({}, this.options), options);
            if (this.hideOpacityTimer)
                clearTimeout(this.hideOpacityTimer);
            if (this.hideDisplayTimer)
                clearTimeout(this.hideDisplayTimer);
            // title & text
            const { textStyle } = this.style;
            if (config.title) {
                this.title.textContent = config.title;
                // none => block
                this.title.style.display = 'block';
                this.text.setAttribute('style', inlineStyle(textStyle));
            }
            else {
                this.title.textContent = '';
                // block => none
                this.title.style.display = 'none';
                const textCSS = Object.assign(Object.assign({}, textStyle), { padding: '40px 20px 26px', color: '#353535' });
                this.text.setAttribute('style', inlineStyle(textCSS));
            }
            this.text.textContent = config.content || '';
            // showCancel
            this.cancel.style.display = config.showCancel ? 'block' : 'none';
            // cancelText
            this.cancel.textContent = config.cancelText || '';
            // cancelColor
            this.cancel.style.color = config.cancelColor || '';
            // confirmText
            this.confirm.textContent = config.confirmText || '';
            // confirmColor
            this.confirm.style.color = config.confirmColor || '';
            // cbs
            this.cancel.onclick = () => {
                this.hide();
                resolve('cancel');
            };
            this.confirm.onclick = () => {
                this.hide();
                resolve('confirm');
            };
            // show
            this.el.style.display = 'block';
            setTimeout(() => { this.el.style.opacity = '1'; }, 0);
            // Current.page不存在时说明路由还未挂载，此时需根据url来分配将要渲染的页面path
            this.currentPath = (_b = (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : getCurrentPath();
        });
    }
    hide() {
        if (this.hideOpacityTimer)
            clearTimeout(this.hideOpacityTimer);
        if (this.hideDisplayTimer)
            clearTimeout(this.hideDisplayTimer);
        this.currentPath = null;
        this.hideOpacityTimer = setTimeout(() => {
            this.el.style.opacity = '0';
            this.hideDisplayTimer = setTimeout(() => { this.el.style.display = 'none'; }, 200);
        }, 0);
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return Modal; } });
//# sourceMappingURL=modal.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929791, function(require, module, exports) {
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];
var __TEMP__ = require('../../../utils/index.js');var inlineStyle = __TEMP__['inlineStyle'];var getCurrentPath = __TEMP__['getCurrentPath'];

class Toast {
    constructor() {
        this.options = {
            title: '',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false
        };
        this.style = {
            maskStyle: {
                position: 'fixed',
                'z-index': '1000',
                top: '0',
                right: '0',
                left: '0',
                bottom: '0'
            },
            toastStyle: {
                'z-index': '5000',
                'box-sizing': 'border-box',
                display: 'flex',
                'flex-direction': 'column',
                'justify-content': 'center',
                '-webkit-justify-content': 'center',
                position: 'fixed',
                top: '50%',
                left: '50%',
                'min-width': '120px',
                'max-width': '200px',
                'min-height': '120px',
                padding: '15px',
                transform: 'translate(-50%, -50%)',
                'border-radius': '5px',
                'text-align': 'center',
                'line-height': '1.6',
                color: '#FFFFFF',
                background: 'rgba(17, 17, 17, 0.7)'
            },
            successStyle: {
                margin: '6px auto',
                width: '38px',
                height: '38px',
                background: 'transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat',
                'background-size': '100%'
            },
            errrorStyle: {
                margin: '6px auto',
                width: '38px',
                height: '38px',
                background: 'transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat',
                'background-size': '100%'
            },
            loadingStyle: {
                margin: '6px auto',
                width: '38px',
                height: '38px',
                '-webkit-animation': 'taroLoading 1s steps(12, end) infinite',
                animation: 'taroLoading 1s steps(12, end) infinite',
                background: 'transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat',
                'background-size': '100%'
            },
            imageStyle: {
                margin: '6px auto',
                width: '40px',
                height: '40px',
                background: 'transparent no-repeat',
                'background-size': '100%'
            },
            textStyle: {
                margin: '0',
                'font-size': '16px'
            }
        };
    }
    create(options = {}, _type = 'toast') {
        var _a, _b;
        // style
        const { maskStyle, toastStyle, successStyle, errrorStyle, loadingStyle, imageStyle, textStyle } = this.style;
        // configuration
        const config = Object.assign(Object.assign(Object.assign({}, this.options), options), { _type });
        // wrapper
        this.el = document.createElement('div');
        this.el.className = 'taro__toast';
        this.el.style.opacity = '0';
        this.el.style.transition = 'opacity 0.1s linear';
        // mask
        this.mask = document.createElement('div');
        this.mask.setAttribute('style', inlineStyle(maskStyle));
        this.mask.style.display = config.mask ? 'block' : 'none';
        // icon
        this.icon = document.createElement('p');
        if (config.image) {
            this.icon.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, imageStyle), { 'background-image': `url(${config.image})` })));
        }
        else {
            const iconStyle = config.icon === 'loading' ? loadingStyle : config.icon === 'error' ? errrorStyle : successStyle;
            this.icon.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, iconStyle), (config.icon === 'none' ? { display: 'none' } : {}))));
        }
        // toast
        this.toast = document.createElement('div');
        this.toast.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, toastStyle), (config.icon === 'none' ? {
            'min-height': '0',
            padding: '10px 15px'
        } : {}))));
        // title
        this.title = document.createElement('p');
        this.title.setAttribute('style', inlineStyle(textStyle));
        this.title.textContent = config.title;
        // result
        this.toast.appendChild(this.icon);
        this.toast.appendChild(this.title);
        this.el.appendChild(this.mask);
        this.el.appendChild(this.toast);
        // show immediately
        document.body.appendChild(this.el);
        setTimeout(() => { this.el.style.opacity = '1'; }, 0);
        this.type = config._type;
        // disappear after duration
        config.duration >= 0 && this.hide(config.duration, this.type);
        // Current.page不存在时说明路由还未挂载，此时需根据url来分配将要渲染的页面path
        this.currentPath = (_b = (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : getCurrentPath();
        return '';
    }
    show(options = {}, _type = 'toast') {
        var _a, _b;
        const config = Object.assign(Object.assign(Object.assign({}, this.options), options), { _type });
        if (this.hideOpacityTimer)
            clearTimeout(this.hideOpacityTimer);
        if (this.hideDisplayTimer)
            clearTimeout(this.hideDisplayTimer);
        // title
        this.title.textContent = config.title || '';
        // mask
        this.mask.style.display = config.mask ? 'block' : 'none';
        // image
        const { toastStyle, successStyle, errrorStyle, loadingStyle, imageStyle } = this.style;
        if (config.image) {
            this.icon.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, imageStyle), { 'background-image': `url(${config.image})` })));
        }
        else {
            if (!config.image && config.icon) {
                const iconStyle = config.icon === 'loading' ? loadingStyle : config.icon === 'error' ? errrorStyle : successStyle;
                this.icon.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, iconStyle), (config.icon === 'none' ? { display: 'none' } : {}))));
            }
        }
        // toast
        this.toast.setAttribute('style', inlineStyle(Object.assign(Object.assign({}, toastStyle), (config.icon === 'none' ? {
            'min-height': '0',
            padding: '10px 15px'
        } : {}))));
        // show
        this.el.style.display = 'block';
        setTimeout(() => { this.el.style.opacity = '1'; }, 0);
        this.type = config._type;
        // disappear after duration
        config.duration >= 0 && this.hide(config.duration, this.type);
        // Current.page不存在时说明路由还未挂载，此时需根据url来分配将要渲染的页面path
        this.currentPath = (_b = (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : getCurrentPath();
        return '';
    }
    hide(duration = 0, type = '') {
        if (type && type !== this.type)
            return;
        if (this.hideOpacityTimer)
            clearTimeout(this.hideOpacityTimer);
        if (this.hideDisplayTimer)
            clearTimeout(this.hideDisplayTimer);
        this.currentPath = null;
        this.hideOpacityTimer = setTimeout(() => {
            this.el.style.opacity = '0';
            this.hideDisplayTimer = setTimeout(() => { this.el.style.display = 'none'; }, 100);
        }, duration);
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'default', { enumerable: true, configurable: true, get: function() { return Toast; } });
//# sourceMappingURL=toast.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929792, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 菜单
const getMenuButtonBoundingClientRect = temporarilyNotSupport('getMenuButtonBoundingClientRect');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getMenuButtonBoundingClientRect', { enumerable: true, configurable: true, get: function() { return getMenuButtonBoundingClientRect; } });
//# sourceMappingURL=menu.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929793, function(require, module, exports) {
var __TEMP__ = require('@tarojs/router/dist/utils/navigate');var setTitle = __TEMP__['setTitle'];
var __TEMP__ = require('../../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];var shouldBeObject = __TEMP__['shouldBeObject'];var getParameterError = __TEMP__['getParameterError'];
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

// 导航栏
const showNavigationBarLoading = temporarilyNotSupport('showNavigationBarLoading');
function setNavigationBarTitle(options) {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `setNavigationBarTitle:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { title, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setNavigationBarTitle', success, fail, complete });
    if (!title || typeof title !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'title',
                correct: 'String',
                wrong: title
            })
        });
    }
    setTitle(title);
    return handle.success();
}
/**
 * 设置页面导航条颜色
 */
const setNavigationBarColor = (options) => {
    const { backgroundColor, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setNavigationBarColor', success, fail, complete });
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    meta.setAttribute('content', backgroundColor);
    document.head.appendChild(meta);
    return handle.success();
};
const hideNavigationBarLoading = temporarilyNotSupport('hideNavigationBarLoading');
const hideHomeButton = temporarilyNotSupport('hideHomeButton');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'hideHomeButton', { enumerable: true, configurable: true, get: function() { return hideHomeButton; } });Object.defineProperty(exports, 'hideNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return hideNavigationBarLoading; } });Object.defineProperty(exports, 'setNavigationBarColor', { enumerable: true, configurable: true, get: function() { return setNavigationBarColor; } });Object.defineProperty(exports, 'setNavigationBarTitle', { enumerable: true, configurable: true, get: function() { return setNavigationBarTitle; } });Object.defineProperty(exports, 'showNavigationBarLoading', { enumerable: true, configurable: true, get: function() { return showNavigationBarLoading; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929794, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];

/**
 * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 */
const startPullDownRefresh = function ({ success, fail, complete } = {}) {
    const handle = new MethodHandler({ name: 'startPullDownRefresh', success, fail, complete });
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroStartPullDownRefresh', {
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 停止当前页面下拉刷新。
 */
const stopPullDownRefresh = function ({ success, fail, complete } = {}) {
    const handle = new MethodHandler({ name: 'stopPullDownRefresh', success, fail, complete });
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroStopPullDownRefresh', {
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'startPullDownRefresh', { enumerable: true, configurable: true, get: function() { return startPullDownRefresh; } });Object.defineProperty(exports, 'stopPullDownRefresh', { enumerable: true, configurable: true, get: function() { return stopPullDownRefresh; } });
//# sourceMappingURL=pull-down-refresh.js.map

}, function(modId) { var map = {"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929795, function(require, module, exports) {
var __TEMP__ = require('@tarojs/runtime');var Current = __TEMP__['Current'];
var __TEMP__ = require('../../../utils/index.js');
var __TEMP__ = require('../../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('../../../utils/animation.js');var getTimingFunc = __TEMP__['getTimingFunc'];var easeInOut = __TEMP__['easeInOut'];

let timer;
const FRAME_DURATION = 17;
/**
 * 将页面滚动到目标位置
 */
const pageScrollTo = ({ scrollTop, selector = '', offsetTop = 0, duration = 300, success, fail, complete }) => {
    let scrollFunc;
    const handle = new MethodHandler({ name: 'pageScrollTo', success, fail, complete });
    return new Promise((resolve, reject) => {
        var _a, _b;
        try {
            if (scrollTop === undefined && !selector) {
                return handle.fail({
                    errMsg: 'scrollTop" 或 "selector" 需要其之一'
                }, { resolve, reject });
            }
            const id = (_b = (_a = Current.page) === null || _a === void 0 ? void 0 : _a.path) === null || _b === void 0 ? void 0 : _b.replace(/([^a-z0-9\u00a0-\uffff_-])/ig, '\\$1');
            const el = (id
                ? document.querySelector(`.taro_page#${id}`)
                : document.querySelector('.taro_page') ||
                    document.querySelector('.taro_router'));
            if (!scrollFunc) {
                if (!el) {
                    scrollFunc = pos => {
                        if (pos === undefined) {
                            return window.pageYOffset;
                        }
                        else {
                            window.scrollTo(0, pos);
                        }
                    };
                }
                else {
                    scrollFunc = pos => {
                        if (pos === undefined) {
                            return el.scrollTop;
                        }
                        else {
                            el.scrollTop = pos;
                        }
                    };
                }
            }
            if (scrollTop && selector) {
                console.warn('"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector');
            }
            const from = scrollFunc();
            let to;
            if (selector) {
                const el = document.querySelector(selector);
                to = ((el === null || el === void 0 ? void 0 : el.offsetTop) || 0) + offsetTop;
            }
            else {
                to = typeof scrollTop === 'number' ? scrollTop : 0;
            }
            const delta = to - from;
            const frameCnt = duration / FRAME_DURATION;
            const easeFunc = getTimingFunc(easeInOut, frameCnt);
            const scroll = (frame = 0) => {
                const dest = from + delta * easeFunc(frame);
                scrollFunc(dest);
                if (frame < frameCnt) {
                    timer && clearTimeout(timer);
                    timer = setTimeout(() => {
                        scroll(frame + 1);
                    }, FRAME_DURATION);
                }
                else {
                    return handle.success({}, { resolve, reject });
                }
            };
            scroll();
        }
        catch (e) {
            return handle.fail({
                errMsg: e.message
            }, { resolve, reject });
        }
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'pageScrollTo', { enumerable: true, configurable: true, get: function() { return pageScrollTo; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../../utils/index.js":1680223929671,"../../../utils/handler.js":1680223929672,"../../../utils/animation.js":1680223929673}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929796, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// 置顶
const setTopBarText = temporarilyNotSupport('setTopBarText');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'setTopBarText', { enumerable: true, configurable: true, get: function() { return setTopBarText; } });
//# sourceMappingURL=sticky.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929797, function(require, module, exports) {
var __TEMP__ = require('@tarojs/api');var Taro = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('../../utils/index.js');var shouldBeObject = __TEMP__['shouldBeObject'];var getParameterError = __TEMP__['getParameterError'];
var __TEMP__ = require('../../utils/handler.js');var MethodHandler = __TEMP__['MethodHandler'];
var __TEMP__ = require('../../utils/valid.js');var isValidColor = __TEMP__['isValidColor'];

let tabConf;
function initTabBarApis(config = {}) {
    tabConf = config.tabBar;
}
/**
 * 显示 tabBar 某一项的右上角的红点
 */
const showTabBarRedDot = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `showTabBarRedDot:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { index, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'showTabBarRedDot', success, fail, complete });
    if (typeof index !== 'number') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'index',
                correct: 'Number',
                wrong: index
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroShowTabBarRedDotHandler', {
            index,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 显示 tabBar
 */
const showTabBar = (options = {}) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `showTabBar:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { animation, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'showTabBar', success, fail, complete });
    if (options.hasOwnProperty('animation') && typeof animation !== 'boolean') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'animation',
                correct: 'Boolean',
                wrong: animation
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroShowTabBar', {
            animation,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 动态设置 tabBar 的整体样式
 */
const setTabBarStyle = (options = {}) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `setTabBarStyle:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { color, selectedColor, backgroundColor, borderStyle, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setTabBarStyle', success, fail, complete });
    let errMsg;
    if (color && !isValidColor(color)) {
        errMsg = 'color';
    }
    else if (selectedColor && !isValidColor(selectedColor)) {
        errMsg = 'selectedColor';
    }
    else if (backgroundColor && !isValidColor(backgroundColor)) {
        errMsg = 'backgroundColor';
    }
    else if (borderStyle && !/^(black|white)$/.test(borderStyle)) {
        errMsg = 'borderStyle';
    }
    if (errMsg) {
        return handle.fail({ errMsg: `invalid ${errMsg}` });
    }
    if (!tabConf) {
        return handle.fail();
    }
    const obj = {};
    if (color)
        obj.color = color;
    if (selectedColor)
        obj.selectedColor = selectedColor;
    if (backgroundColor)
        obj.backgroundColor = backgroundColor;
    if (borderStyle)
        obj.borderStyle = borderStyle;
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroSetTabBarStyle', {
            color,
            selectedColor,
            backgroundColor,
            borderStyle,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 动态设置 tabBar 某一项的内容
 */
const setTabBarItem = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `setTabBarItem:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { index, text, iconPath, selectedIconPath, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setTabBarItem', success, fail, complete });
    if (typeof index !== 'number') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'index',
                correct: 'Number',
                wrong: index
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroSetTabBarItem', {
            index,
            text,
            iconPath,
            selectedIconPath,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 为 tabBar 某一项的右上角添加文本
 */
const setTabBarBadge = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `setTabBarBadge:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { index, text, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'setTabBarBadge', success, fail, complete });
    if (typeof index !== 'number') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'index',
                correct: 'Number',
                wrong: index
            })
        });
    }
    if (typeof text !== 'string') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'text',
                correct: 'String',
                wrong: text
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroSetTabBarBadge', {
            index,
            text,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 移除 tabBar 某一项右上角的文本
 */
const removeTabBarBadge = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `removeTabBarBadge:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { index, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'removeTabBarBadge', success, fail, complete });
    if (typeof index !== 'number') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'index',
                correct: 'Number',
                wrong: index
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroRemoveTabBarBadge', {
            index,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 隐藏 tabBar 某一项的右上角的红点
 */
const hideTabBarRedDot = (options) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `hideTabBarRedDot:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { index, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'hideTabBarRedDot', success, fail, complete });
    if (typeof index !== 'number') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'index',
                correct: 'Number',
                wrong: index
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroHideTabBarRedDotHandler', {
            index,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};
/**
 * 隐藏 tabBar
 */
const hideTabBar = (options = {}) => {
    // options must be an Object
    const isObject = shouldBeObject(options);
    if (!isObject.flag) {
        const res = { errMsg: `hideTabBar:fail ${isObject.msg}` };
        console.error(res.errMsg);
        return Promise.reject(res);
    }
    const { animation, success, fail, complete } = options;
    const handle = new MethodHandler({ name: 'hideTabBar', success, fail, complete });
    if (options.hasOwnProperty('animation') && typeof animation !== 'boolean') {
        return handle.fail({
            errMsg: getParameterError({
                para: 'animation',
                correct: 'Boolean',
                wrong: animation
            })
        });
    }
    return new Promise((resolve, reject) => {
        Taro.eventCenter.trigger('__taroHideTabBar', {
            animation,
            successHandler: (res = {}) => handle.success(res, { resolve, reject }),
            errorHandler: (res = {}) => handle.fail(res, { resolve, reject })
        });
    });
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'hideTabBar', { enumerable: true, configurable: true, get: function() { return hideTabBar; } });Object.defineProperty(exports, 'hideTabBarRedDot', { enumerable: true, configurable: true, get: function() { return hideTabBarRedDot; } });Object.defineProperty(exports, 'initTabBarApis', { enumerable: true, configurable: true, get: function() { return initTabBarApis; } });Object.defineProperty(exports, 'removeTabBarBadge', { enumerable: true, configurable: true, get: function() { return removeTabBarBadge; } });Object.defineProperty(exports, 'setTabBarBadge', { enumerable: true, configurable: true, get: function() { return setTabBarBadge; } });Object.defineProperty(exports, 'setTabBarItem', { enumerable: true, configurable: true, get: function() { return setTabBarItem; } });Object.defineProperty(exports, 'setTabBarStyle', { enumerable: true, configurable: true, get: function() { return setTabBarStyle; } });Object.defineProperty(exports, 'showTabBar', { enumerable: true, configurable: true, get: function() { return showTabBar; } });Object.defineProperty(exports, 'showTabBarRedDot', { enumerable: true, configurable: true, get: function() { return showTabBarRedDot; } });
//# sourceMappingURL=tab-bar.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672,"../../utils/valid.js":1680223929675}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929798, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];
var __TEMP__ = require('../../utils/handler.js');var CallbackManager = __TEMP__['CallbackManager'];

const callbackManager = new CallbackManager();
const resizeListener = () => {
    callbackManager.trigger({
        windowWidth: window.screen.width,
        windowHeight: window.screen.height
    });
};
/**
 * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
 */
const setWindowSize = temporarilyNotSupport('setWindowSize');
/**
 * 监听窗口尺寸变化事件
 */
const onWindowResize = callback => {
    callbackManager.add(callback);
    if (callbackManager.count() === 1) {
        window.addEventListener('resize', resizeListener);
    }
};
/**
 * 取消监听窗口尺寸变化事件
 */
const offWindowResize = callback => {
    callbackManager.remove(callback);
    if (callbackManager.count() === 0) {
        window.removeEventListener('resize', resizeListener);
    }
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'offWindowResize', { enumerable: true, configurable: true, get: function() { return offWindowResize; } });Object.defineProperty(exports, 'onWindowResize', { enumerable: true, configurable: true, get: function() { return onWindowResize; } });Object.defineProperty(exports, 'setWindowSize', { enumerable: true, configurable: true, get: function() { return setWindowSize; } });
//# sourceMappingURL=window.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../../utils/handler.js":1680223929672}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929799, function(require, module, exports) {
var __TEMP__ = require('../../utils/index.js');var temporarilyNotSupport = __TEMP__['temporarilyNotSupport'];

// Worker
const createWorker = temporarilyNotSupport('createWorker');

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createWorker', { enumerable: true, configurable: true, get: function() { return createWorker; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929800, function(require, module, exports) {
var __TEMP__ = require('./IntersectionObserver.js');var TaroH5IntersectionObserver = __TEMP__['TaroH5IntersectionObserver'];
var __TEMP__ = require('./MediaQueryObserver.js');var MediaQueryObserver = __TEMP__['MediaQueryObserver'];
var __TEMP__ = require('./selectorQuery.js');var SelectorQuery = __TEMP__['SelectorQuery'];

const createSelectorQuery = () => {
    return new SelectorQuery();
};
const createIntersectionObserver = (component, options) => {
    return new TaroH5IntersectionObserver(component, options);
};
const createMediaQueryObserver = () => {
    return new MediaQueryObserver();
};

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'createIntersectionObserver', { enumerable: true, configurable: true, get: function() { return createIntersectionObserver; } });Object.defineProperty(exports, 'createMediaQueryObserver', { enumerable: true, configurable: true, get: function() { return createMediaQueryObserver; } });Object.defineProperty(exports, 'createSelectorQuery', { enumerable: true, configurable: true, get: function() { return createSelectorQuery; } });
//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./MediaQueryObserver.js":1680223929802,"./selectorQuery.js":1680223929803}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929802, function(require, module, exports) {
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('../../utils/index.js');var toKebabCase = __TEMP__['toKebabCase'];

function generateMediaQueryStr(descriptor) {
    const mediaQueryArr = [];
    const descriptorMenu = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight', 'orientation'];
    for (const item of descriptorMenu) {
        if (item !== 'orientation' &&
            descriptor[item] &&
            Number(descriptor[item]) >= 0) {
            mediaQueryArr.push(`(${(toKebabCase(item))}: ${Number(descriptor[item])}px)`);
        }
        if (item === 'orientation' && descriptor[item]) {
            mediaQueryArr.push(`(${toKebabCase(item)}: ${descriptor[item]})`);
        }
    }
    return mediaQueryArr.join(' and ');
}
class MediaQueryObserver {
    // 监听页面媒体查询变化情况
    observe(descriptor, callback) {
        if (isFunction(callback)) {
            // 创建媒体查询对象
            this._mediaQueryObserver = window.matchMedia(generateMediaQueryStr(descriptor));
            // 监听器
            this._listener = (ev) => {
                callback({ matches: ev.matches });
            };
            callback({ matches: this._mediaQueryObserver.matches });
            // 兼容旧浏览器中 MediaQueryList 尚未继承于 EventTarget 导致不存在 'addEventListener'
            if ('addEventListener' in this._mediaQueryObserver) {
                this._mediaQueryObserver.addEventListener('change', this._listener);
            }
            else {
                this._mediaQueryObserver.addListener(this._listener);
            }
        }
    }
    // 停止监听，销毁媒体查询对象
    disconnect() {
        if (this._mediaQueryObserver && this._listener) {
            // 兼容旧浏览器中 MediaQueryList 尚未继承于 EventTarget 导致不存在 'removeEventListener'
            if ('removeEventListener' in this._mediaQueryObserver) {
                this._mediaQueryObserver.removeEventListener('change', this._listener);
            }
            else {
                this._mediaQueryObserver.removeListener(this._listener);
            }
        }
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'MediaQueryObserver', { enumerable: true, configurable: true, get: function() { return MediaQueryObserver; } });
//# sourceMappingURL=MediaQueryObserver.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929803, function(require, module, exports) {
var __TEMP__ = require('@tarojs/shared');var isFunction = __TEMP__['isFunction'];
var __TEMP__ = require('../../utils/index.js');var findDOM = __TEMP__['findDOM'];
var __TEMP__ = require('../canvas/CanvasContext.js');var CanvasContext = __TEMP__['CanvasContext'];
var __TEMP__ = require('./nodesRef.js');var NodesRef = __TEMP__['NodesRef'];

function filter(fields, dom, selector) {
    if (!dom)
        return null;
    const isViewport = selector === '.taro_page';
    const { id, dataset, rect, size, scrollOffset, properties = [], computedStyle = [], nodeCanvasType, node, context } = fields;
    const res = {};
    if (nodeCanvasType && node) {
        const tagName = dom.tagName;
        res.node = {
            id: dom.id,
            $taroElement: dom
        };
        if (/^taro-canvas-core/i.test(tagName)) {
            const type = dom.type || '';
            res.nodeCanvasType = type;
            const canvas = dom.getElementsByTagName('canvas')[0];
            if (/^(2d|webgl)/i.test(type) && canvas) {
                res.node = canvas;
            }
            else {
                res.node = null;
            }
        }
        else if (/^taro-scroll-view-core/i.test(tagName)) {
            // Note https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.html
            res.nodeCanvasType = '';
            res.node = dom;
            dom.scrollTo = dom.mpScrollToMethod;
            dom.scrollIntoView = dom.mpScrollIntoViewMethod;
        }
        else {
            res.nodeCanvasType = '';
            res.node = dom;
        }
        return res;
    }
    if (context) {
        const tagName = dom.tagName;
        if (/^taro-video-core/i.test(tagName)) {
            // TODO HTMLVideoElement to VideoContext
            return { context: dom };
        }
        else if (/^taro-canvas-core/i.test(tagName)) {
            const type = dom.type || '2d';
            const canvas = dom === null || dom === void 0 ? void 0 : dom.querySelector('canvas');
            const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext(type);
            return { context: new CanvasContext(canvas, ctx) };
        }
        else if (/^taro-live-player-core/i.test(tagName)) {
            console.error('暂时不支持通过 NodesRef.context 获取 LivePlayerContext');
        }
        else if (/^taro-editor-core/i.test(tagName)) {
            console.error('暂时不支持通过 NodesRef.context 获取 EditorContext');
        }
        else if (/^taro-map-core/i.test(tagName)) {
            console.error('暂时不支持通过 NodesRef.context 获取 MapContext');
        }
        return;
    }
    if (id)
        res.id = dom.id;
    if (dataset)
        res.dataset = Object.assign({}, dom.dataset);
    if (rect || size) {
        const { left, right, top, bottom, width, height } = dom.getBoundingClientRect();
        if (rect) {
            if (!isViewport) {
                res.left = left;
                res.right = right;
                res.top = top;
                res.bottom = bottom;
            }
            else {
                res.left = 0;
                res.right = 0;
                res.top = 0;
                res.bottom = 0;
            }
        }
        if (size) {
            if (!isViewport) {
                res.width = width;
                res.height = height;
            }
            else {
                res.width = dom.clientWidth;
                res.height = dom.clientHeight;
            }
        }
    }
    if (scrollOffset) {
        res.scrollLeft = dom.scrollLeft;
        res.scrollTop = dom.scrollTop;
    }
    if (properties.length) {
        properties.forEach(prop => {
            const attr = dom.getAttribute(prop);
            if (attr)
                res[prop] = attr;
        });
    }
    if (computedStyle.length) {
        const styles = window.getComputedStyle(dom);
        computedStyle.forEach(key => {
            const value = styles.getPropertyValue(key) || styles[key];
            if (value)
                res[key] = value;
        });
    }
    return res;
}
/**
 * WXML节点信息API
 * @return {Object} SelectorQuery 对象实例
 */
function queryBat(queue, cb) {
    const result = [];
    queue.forEach(item => {
        var _a;
        const { selector, single, fields, component } = item;
        // selector 的容器节点
        /* eslint-disable */
        const container = (component !== null ?
            (findDOM(component) || document) :
            document);
        /* eslint-enable */
        // 特殊处理 ---- 选自己
        let selectSelf = false;
        if (container !== document) {
            const $nodeList = (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector);
            if ($nodeList) {
                for (let i = 0, len = $nodeList.length; i < len; ++i) {
                    if (container === $nodeList[i]) {
                        selectSelf = true;
                        break;
                    }
                }
            }
        }
        if (single) {
            const el = selectSelf === true ? container : container.querySelector(selector);
            result.push(filter(fields, el, selector));
        }
        else {
            const $children = container.querySelectorAll(selector);
            const children = [];
            selectSelf === true && children.push(container);
            for (let i = 0, len = $children.length; i < len; ++i) {
                children.push($children[i]);
            }
            result.push(children.map(dom => filter(fields, dom)));
        }
    });
    cb(result);
}
class SelectorQuery {
    constructor() {
        this._defaultWebviewId = null;
        this._webviewId = null;
        this._queue = [];
        this._queueCb = [];
        this._component;
    }
    in(component) {
        this._component = component;
        return this;
    }
    select(selector) {
        // 小程序里跨自定义组件的后代选择器 '>>>' 在 h5 替换为普通后代选择器 '>'
        if (typeof selector === 'string')
            selector = selector.replace('>>>', '>');
        return new NodesRef(selector, this, true);
    }
    selectAll(selector) {
        // 小程序里跨自定义组件的后代选择器 '>>>' 在 h5 替换为普通后代选择器 '>'
        if (typeof selector === 'string')
            selector = selector.replace('>>>', '>');
        return new NodesRef(selector, this, false);
    }
    selectViewport() {
        return new NodesRef('.taro_page', this, true);
    }
    exec(cb) {
        queryBat(this._queue, res => {
            const _queueCb = this._queueCb;
            res.forEach((item, index) => {
                const cb = _queueCb[index];
                isFunction(cb) && cb.call(this, item);
            });
            isFunction(cb) && cb.call(this, res);
        });
        return this;
    }
    _push(selector, component, single, fields, callback = null) {
        this._queue.push({
            component,
            selector,
            single,
            fields
        });
        this._queueCb.push(callback);
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'SelectorQuery', { enumerable: true, configurable: true, get: function() { return SelectorQuery; } });
//# sourceMappingURL=selectorQuery.js.map

}, function(modId) { var map = {"../../utils/index.js":1680223929671,"../canvas/CanvasContext.js":1680223929691,"./nodesRef.js":1680223929804}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1680223929804, function(require, module, exports) {
class NodesRef {
    constructor(selector, querySelectorQuery, single) {
        this._component = querySelectorQuery._component;
        this._selector = selector;
        this._selectorQuery = querySelectorQuery;
        this._single = single;
    }
    context(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { context: !0 }, cb);
        return _selectorQuery;
    }
    node(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { nodeCanvasType: !0, node: !0 }, cb);
        return _selectorQuery;
    }
    boundingClientRect(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { id: !0, dataset: !0, rect: !0, size: !0 }, cb);
        return _selectorQuery;
    }
    scrollOffset(cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        _selectorQuery._push(_selector, _component, _single, { id: !0, dataset: !0, scrollOffset: !0 }, cb);
        return _selectorQuery;
    }
    fields(fields, cb) {
        const { _selector, _component, _single, _selectorQuery } = this;
        const { id, dataset, rect, size, scrollOffset, properties = [], computedStyle = [] } = fields;
        _selectorQuery._push(_selector, _component, _single, {
            id,
            dataset,
            rect,
            size,
            scrollOffset,
            properties,
            computedStyle
        }, cb);
        return _selectorQuery;
    }
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'NodesRef', { enumerable: true, configurable: true, get: function() { return NodesRef; } });
//# sourceMappingURL=nodesRef.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1680223929667);
})()
//miniprogram-npm-outsideDeps=["@tarojs/router","@tarojs/api","@tarojs/shared","@tarojs/router/dist/utils","@tarojs/runtime","base64-js","@tarojs/router/dist/utils/navigate","query-string","@tarojs/components/dist/components/taro-swiper-core","@tarojs/components/dist/components/taro-swiper-item-core","whatwg-fetch","jsonp-retry","./IntersectionObserver.js"]
//# sourceMappingURL=index.js.map