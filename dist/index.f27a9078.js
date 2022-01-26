// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6kB8A":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "e7bed76cf27a9078";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1ksfB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _testPng = require("./test.png");
var _testPngDefault = parcelHelpers.interopDefault(_testPng);
var _index = require("../src/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _methodRotate = require("../src/method-rotate");
var _methodRotateDefault = parcelHelpers.interopDefault(_methodRotate);
var _methodContour = require("../src/method-contour");
var _methodContourDefault = parcelHelpers.interopDefault(_methodContour);
var _methodEffect = require("../src/method-effect");
var _methodEffectDefault = parcelHelpers.interopDefault(_methodEffect);
var _methodEffect2 = require("../src/method-effect2");
var _methodEffect2Default = parcelHelpers.interopDefault(_methodEffect2);
var _methodEffect3 = require("../src/method-effect3");
var _methodEffect3Default = parcelHelpers.interopDefault(_methodEffect3);
var _methodEffect4 = require("../src/method-effect4");
var _methodEffect4Default = parcelHelpers.interopDefault(_methodEffect4);
const $canvas = document.getElementById('canvas');
const $select = document.getElementById('select');
const $select1 = document.getElementById('select1');
const $thickness = document.getElementById('thickness');
const $color = document.getElementById('color');
const $file = document.getElementById('file');
const $time = document.getElementById('time');
const showPerf = ()=>{
    const startTime = performance.now();
    return ()=>{
        $time.innerText = Math.round(performance.now() - startTime) + 'ms';
    };
};
let targetImage;
const imageStroke = new _indexDefault.default(_methodRotateDefault.default);
const methodMap = {
    rotate: _methodRotateDefault.default,
    contour: _methodContourDefault.default,
    effect: _methodEffectDefault.default,
    effect2: _methodEffect2Default.default,
    effect3: _methodEffect3Default.default,
    effect4: _methodEffect4Default.default
};
const update = ()=>{
    const endPerf = showPerf();
    imageStroke.use(methodMap[$select.value]);
    const result = imageStroke.make(targetImage, {
        thickness: Number($thickness.value),
        color: $color.value
    });
    const ctx = $canvas.getContext('2d');
    $canvas.width = result.width;
    $canvas.height = result.height;
    $canvas.style.width = result.width + 'px';
    $canvas.style.height = result.height + 'px';
    ctx.drawImage(result, 0, 0);
    endPerf();
};
const useImage = (url)=>{
    const image = new Image();
    image.onload = ()=>{
        targetImage = image;
        update();
    };
    image.src = url;
};
useImage(_testPngDefault.default);
$select.addEventListener('input', update);
$thickness.addEventListener('input', update);
$color.addEventListener('input', update);
$file.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    useImage(URL.createObjectURL(file));
});

},{"./test.png":"4Z3iJ","../src/index":"seznJ","../src/method-rotate":"lcebB","../src/method-contour":"in8c0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../src/method-effect":"1cWzR","../src/method-effect2":"ennDl","../src/method-effect3":"8tLGH","../src/method-effect4":"8y7lc"}],"4Z3iJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('jTzH5') + "test.116ec453.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"seznJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
const createCanvas = ()=>document.createElement('canvas')
;
class ImageStroke {
    constructor(useMethod){
        this.canvas = null;
        this.glCanvas = null;
        this.useMethod = useMethod;
    }
    getCanvas(useMethod = this.useMethod) {
        if (useMethod.context === 'gl') {
            this.glCanvas = this.glCanvas || createCanvas();
            return this.glCanvas;
        } else {
            this.canvas = this.canvas || createCanvas();
            return this.canvas;
        }
    }
    initMethod(image = this.image, useMethod = this.useMethod) {
        if (this.image !== image || this.useMethod !== useMethod) this.method = useMethod.create(this.getContext(useMethod), image);
    }
    setImage(image) {
        this.initMethod(image);
    }
    use(useMethod) {
        this.initMethod(undefined, useMethod);
        this.useMethod = useMethod;
    }
    make(image, options) {
        this.initMethod(image);
        this.image = image;
        const canvas = this.getCanvas();
        const strokeSize = options.thickness * 2;
        const [resultWidth, resultHeight] = [
            this.image.width,
            this.image.height
        ].map((val)=>val + strokeSize
        );
        const context = this.getContext();
        if (resultWidth !== canvas.width || resultHeight !== canvas.height) {
            canvas.width = resultWidth;
            canvas.height = resultHeight;
        }
        _utils.utils.clear(context);
        this.method(options);
        return canvas;
    }
    getContext(useMethod = this.useMethod) {
        const canvas = this.getCanvas(useMethod);
        switch(useMethod.context){
            case 'gl':
                return canvas.getContext('webgl');
            case '2d':
                return canvas.getContext('2d');
        }
    }
}
exports.default = ImageStroke;

},{"./utils":"dwOw6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dwOw6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utils", ()=>utils
);
const utilsGl = {
    clear () {
    // nothing
    },
    drawImage () {
    // nothing
    }
};
const utils2d = {
    clear (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    drawImage (ctx, image, x, y) {
        ctx.drawImage(image, x, y);
    }
};
const utils = {
    clear (ctx) {
        if (ctx instanceof CanvasRenderingContext2D) utils2d.clear(ctx);
        else if (ctx instanceof WebGLRenderingContext) utilsGl.clear(ctx);
    },
    drawImage (ctx, image, x, y) {
        if (ctx instanceof CanvasRenderingContext2D) utils2d.drawImage(ctx, image, x, y);
        else if (ctx instanceof WebGLRenderingContext) utilsGl.drawImage(ctx, image, x, y);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lcebB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    context: '2d',
    create (ctx, image) {
        return (options)=>{
            ctx.save();
            for(let i = 0; i < 360; i++)ctx.drawImage(image, options.thickness * (1 + Math.cos(i)), options.thickness * (1 + Math.sin(i)));
            ctx.globalCompositeOperation = 'source-in';
            ctx.fillStyle = options.color;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"in8c0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContours", ()=>getContours
);
var _marchingSquares = require("marching-squares");
var _marchingSquaresDefault = parcelHelpers.interopDefault(_marchingSquares);
function getContours(ctx, opacityThreshold = 100) {
    const { width , height  } = ctx.canvas;
    const { data  } = ctx.getImageData(0, 0, width, height);
    const isInside = (x, y)=>{
        return x >= 0 && y >= 0 && x < width && y < height ? data[(y * width + x) * 4 - 1] > opacityThreshold : false;
    };
    let contours = [];
    let startPos = -1;
    for(let i = 3; i < data.length; i += 4)if (data[i] > opacityThreshold) {
        startPos = (i + 1) / 4;
        break;
    }
    if (startPos >= 0) contours = _marchingSquaresDefault.default(startPos % width, Math.floor(startPos / width), isInside);
    return contours;
}
const canvas4Image = document.createElement('canvas');
const ctx4Image = canvas4Image.getContext('2d');
exports.default = {
    context: '2d',
    create (ctx, image) {
        return (options)=>{
            ctx.save();
            canvas4Image.width = image.width;
            canvas4Image.height = image.height;
            ctx4Image.drawImage(image, 0, 0);
            const contours = getContours(ctx4Image);
            const x = options.thickness;
            const y = options.thickness;
            ctx.strokeStyle = options.color;
            ctx.lineWidth = options.thickness * 2;
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(x + contours[0].x, y + contours[1].y);
            for(let i = 1; i < contours.length; i++)ctx.lineTo(x + contours[i].x, y + contours[i].y);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

},{"marching-squares":"5UuUf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5UuUf":[function(require,module,exports) {
'use strict';
/**
 * @module marching-squares
 */ // [dx, dy, is-down-or-right?0:1]
var UP = [
    0,
    -1,
    1
], DOWN = [
    0,
    1,
    0
], LEFT = [
    -1,
    0,
    1
], RIGHT = [
    1,
    0,
    0
];
// There are 16 possible 2-by-2 square configurations.
// We number them by adding the shown value when the cell in the square is in the region.
//
// ----------------
// |x-1,y-1| x,y-1|
// |   1   |  2   |
// |---------------
// | x-1,y | x,y  |
// |   4   |  8   | 
// ----------------
//
// The transitions are designed to proceed in a clockwise direction around the region.
// Squares 6 and 9 are ambiguous cases where we need to see which direction the previous
// transition was to avoid getting caught looping around a sub-region forever.
var transitions = [
    null,
    // [direction-if-coming-from-down-or-right, direction-if-coming-from-up-or-left]
    [
        LEFT,
        LEFT
    ],
    [
        UP,
        UP
    ],
    [
        LEFT,
        LEFT
    ],
    [
        DOWN,
        DOWN
    ],
    [
        DOWN,
        DOWN
    ],
    [
        UP,
        DOWN
    ],
    [
        DOWN,
        DOWN
    ],
    [
        RIGHT,
        RIGHT
    ],
    [
        RIGHT,
        LEFT
    ],
    [
        UP,
        UP
    ],
    [
        LEFT,
        LEFT
    ],
    [
        RIGHT,
        RIGHT
    ],
    [
        RIGHT,
        RIGHT
    ],
    [
        UP,
        UP
    ] // 14
];
/**
 * @alias module:marching-squares.traceImageRegion
 * Trace a closed polygon around a region in a two-dimensional grid. The 
 * isInside function is called to determine if a given point is inside or 
 * outside the region. 
 * 
 * The starting point MUST be on the edge of the region. Specifically this
 * means that among these four calls
 * 1. isInside(x-1, y-1)
 * 2. isInside(x, y-1)
 * 3. isInside(x-1, y)
 * 4. isInside(x,y)
 * At least one must return falsy and at least one must return truthy. If
 * this is not the case, an Error is thrown.
 * 
 * An efficient marching-squares algorithm is used to trace the region,
 * using minimal memory and calling isInside() only as neccessary.
 * 
 * @param {int} x - starting x coordinate. 
 * @param {int} y - starting y coordinate.
 * @param {function} isInside - function with signature isInside(x,y) returning  
 *   truthy if the given point is inside the region to trace (for 
 *   example, it is an opaque pixel in a bitmap) and falsy if it is outside 
 *   (for example, it is transparent). The function should be able to handle 
 *   any x and y including negative values "outside the bitmap" (for which it
 *   should return false).
 * @returns {array[object]} array of point objects with x & y properties tracing
 *   a closed polygon around the region. The first point is NOT repeated 
 *   as the last point. The polygon consists entirely of one-unit-long 
 *   horizontal or vertical segments. Use a polygon simplification routine on 
 *   the results to simplify and/or smooth it.
 *  (Might I suggest https://www.npmjs.com/package/line-simplify-rdp ?)
 */ function traceRegion(x, y, isInside) {
    var startX = x, startY = y;
    var ret = [
        {
            x: x,
            y: y
        }
    ];
    var dir = DOWN; // arbitrary
    var square = (isInside(x - 1, y - 1) ? 1 : 0) + (isInside(x, y - 1) ? 2 : 0) + (isInside(x - 1, y) ? 4 : 0) + (isInside(x, y) ? 8 : 0);
    if (square === 0 || square === 15) throw new Error("Bad Starting point.");
    while(true){
        dir = transitions[square][dir[2]];
        x += dir[0];
        y += dir[1];
        if (x === startX && y === startY) return ret;
        ret.push({
            x: x,
            y: y
        });
        if (dir === DOWN) square = (square & 12) >> 2;
        else if (dir === UP) square = (square & 3) << 2;
        else if (dir === RIGHT) square = (square & 10) >> 1;
        else if (dir === LEFT) square = (square & 5) << 1;
        if (dir === DOWN || dir === LEFT) square += isInside(x - 1, y) ? 4 : 0;
        else square += isInside(x, y - 1) ? 2 : 0;
        if (dir === DOWN || dir === RIGHT) square += isInside(x, y) ? 8 : 0;
        else square += isInside(x - 1, y - 1) ? 1 : 0;
    }
}
module.exports = traceRegion;

},{}],"1cWzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    context: '2d',
    create (ctx, image) {
        return (options)=>{
            ctx.save();
            for(let i = 0; i < 360; i++)ctx.drawImage(image, 20, 20);
            ctx.globalCompositeOperation = 'source-in';
            // 设置canvas图形混合模式  详细说明 https://www.canvasapi.cn/CanvasRenderingContext2D/globalCompositeOperation#&introduction
            ctx.fillStyle = options.color;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ennDl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContours", ()=>getContours
);
var _marchingSquares = require("marching-squares");
var _marchingSquaresDefault = parcelHelpers.interopDefault(_marchingSquares);
function getContours(ctx, opacityThreshold = 100) {
    const { width , height  } = ctx.canvas;
    const { data  } = ctx.getImageData(0, 0, width, height);
    const isInside = (x, y)=>{
        return x >= 0 && y >= 0 && x < width && y < height ? data[(y * width + x) * 4 - 1] > opacityThreshold : false;
    };
    let contours = [];
    let startPos = -1;
    for(let i = 3; i < data.length; i += 4)if (data[i] > opacityThreshold) {
        startPos = (i + 1) / 4;
        break;
    }
    if (startPos >= 0) contours = _marchingSquaresDefault.default(startPos % width, Math.floor(startPos / width), isInside);
    return contours;
}
const canvas4Image = document.createElement('canvas');
const ctx4Image = canvas4Image.getContext('2d');
exports.default = {
    context: '2d',
    create (ctx, image) {
        return (options)=>{
            ctx.save();
            canvas4Image.width = image.width;
            canvas4Image.height = image.height;
            ctx4Image.drawImage(image, 0, 0);
            const contours = getContours(ctx4Image);
            const x = options.thickness;
            const y = options.thickness;
            ctx.shadowOffsetX = options.thickness - 50;
            // 偏移量Y
            ctx.shadowOffsetY = options.thickness / 2;
            // ctx.strokeStyle = options.color;
            ctx.shadowColor = options.color;
            ctx.shadowBlur = 40;
            // 填充个淡淡的颜色，以示尊敬
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'green'; // 设置描边颜色
            ctx.lineWidth = options.thickness; // 设置线条宽度
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(x + contours[0].x, y + contours[1].y);
            for(let i = 1; i < contours.length; i++)ctx.lineTo(x + contours[i].x, y + contours[i].y);
            ctx.closePath();
            ctx.fill('nonzero');
            ctx.stroke();
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

},{"marching-squares":"5UuUf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8tLGH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContours", ()=>getContours
);
var _marchingSquares = require("marching-squares");
var _marchingSquaresDefault = parcelHelpers.interopDefault(_marchingSquares);
function getContours(ctx, opacityThreshold = 100) {
    const { width , height  } = ctx.canvas;
    const { data  } = ctx.getImageData(0, 0, width, height);
    const isInside = (x, y)=>{
        return x >= 0 && y >= 0 && x < width && y < height ? data[(y * width + x) * 4 - 1] > opacityThreshold : false;
    };
    let contours = [];
    let startPos = -1;
    for(let i = 3; i < data.length; i += 4)if (data[i] > opacityThreshold) {
        startPos = (i + 1) / 4;
        break;
    }
    if (startPos >= 0) contours = _marchingSquaresDefault.default(startPos % width, Math.floor(startPos / width), isInside);
    return contours;
}
const canvas4Image = document.createElement('canvas');
const ctx4Image = canvas4Image.getContext('2d');
exports.default = {
    context: '2d',
    create (ctx, image) {
        return (options)=>{
            ctx.save();
            canvas4Image.width = image.width;
            canvas4Image.height = image.height;
            ctx4Image.drawImage(image, 0, 0);
            const contours = getContours(ctx4Image);
            const x = options.thickness;
            const y = options.thickness;
            ctx.strokeStyle = options.color;
            ctx.lineWidth = options.thickness;
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(-20 + contours[0].x, -20 + contours[1].y);
            for(let i = 1; i < contours.length; i++)ctx.lineTo(-20 + contours[i].x, -20 + contours[i].y);
            ctx.closePath();
            ctx.fillStyle = options.color;
            ctx.fill('nonzero');
            ctx.beginPath();
            ctx.moveTo(20 + contours[0].x, 20 + contours[1].y);
            for(let i1 = 1; i1 < contours.length; i1++)ctx.lineTo(20 + contours[i1].x, 20 + contours[i1].y);
            ctx.closePath();
            ctx.fillStyle = 'green';
            ctx.fill('nonzero');
            // 登录状态下不会出现这行文字，点击页面右上角一键登录');
            // 登录状态下不会出现这行文字，点击页面右上角一键登录
            // 登录状态下不会出现这行文字，点击页面右上角一键登录
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

},{"marching-squares":"5UuUf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8y7lc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContours", ()=>getContours
);
var _marchingSquares = require("marching-squares");
var _marchingSquaresDefault = parcelHelpers.interopDefault(_marchingSquares);
function getContours(ctx, opacityThreshold = 100) {
    const { width , height  } = ctx.canvas;
    const { data  } = ctx.getImageData(0, 0, width, height);
    const isInside = (x, y)=>{
        return x >= 0 && y >= 0 && x < width && y < height ? data[(y * width + x) * 4 - 1] > opacityThreshold : false;
    };
    let contours = [];
    let startPos = -1;
    for(let i = 3; i < data.length; i += 4)if (data[i] > opacityThreshold) {
        startPos = (i + 1) / 4;
        break;
    }
    if (startPos >= 0) contours = _marchingSquaresDefault.default(startPos % width, Math.floor(startPos / width), isInside);
    return contours;
}
const canvas4Image = document.createElement('canvas');
const ctx4Image = canvas4Image.getContext('2d');
exports.default = {
    context: '2d',
    create (ctx, image) {
        return (options)=>{
            ctx.save();
            canvas4Image.width = image.width;
            canvas4Image.height = image.height;
            ctx4Image.drawImage(image, 0, 0);
            const contours = getContours(ctx4Image);
            const x = options.thickness;
            const y = options.thickness;
            ctx.shadowOffsetX = options.thickness - 50;
            // 偏移量Y
            ctx.shadowOffsetY = options.thickness / 2;
            ctx.shadowColor = options.color;
            ctx.shadowBlur = 40;
            // 填充个淡淡的颜色，以示尊敬
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.beginPath();
            ctx.moveTo(x + contours[0].x, y + contours[1].y);
            for(let i = 1; i < contours.length; i++)ctx.lineTo(x + contours[i].x, y + contours[i].y);
            ctx.closePath();
            ctx.fill('nonzero');
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

},{"marching-squares":"5UuUf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["6kB8A","1ksfB"], "1ksfB", "parcelRequiree8cc")

//# sourceMappingURL=index.f27a9078.js.map
