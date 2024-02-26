"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    default: function() {
        return vitePluginCdn;
    }
});
module.exports = __toCommonJS(src_exports);
// src/source.ts
function getCdnPath(cdn, pkgRef) {
    var refTxt = pkgRef.version ? "".concat(pkgRef.name, "@").concat(pkgRef.version) : pkgRef.name;
    switch(cdn){
        case "jsdelivr":
            return "https://cdn.jsdelivr.net/npm/".concat(refTxt, "/+esm");
        case "esm.sh":
            return "https://esm.sh/".concat(refTxt);
    }
}
// src/index.ts
var import_path = require("path");
var import_promises = __toESM(require("fs/promises"));
function getImportMap(conf, pkgs) {
    return {
        imports: Object.fromEntries(pkgs.map(function(p) {
            return [
                p.name,
                getCdnPath(conf, p)
            ];
        }))
    };
}
function vitePluginCdn() {
    var conf = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        source: "jsdelivr"
    };
    var pkgRefs = [];
    return {
        name: "vite-plugin-cdn",
        config: function config(conf2, env) {
            return _async_to_generator(function() {
                var projectPkg, content, _JSON_parse, deps;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            projectPkg = (0, import_path.join)(process.cwd(), "package.json");
                            return [
                                4,
                                import_promises.default.readFile(projectPkg, "utf8")
                            ];
                        case 1:
                            content = _state.sent();
                            _JSON_parse = JSON.parse(content), deps = _JSON_parse.dependencies;
                            console.log(deps);
                            pkgRefs = Object.entries(deps).map(function(d) {
                                return {
                                    name: String(d[0]),
                                    version: d[1] === "*" ? void 0 : String(d[1])
                                };
                            });
                            console.log("refs", pkgRefs);
                            console.log("config", conf2);
                            console.log("end", env);
                            return [
                                2,
                                {
                                    build: {
                                        rollupOptions: {
                                            external: pkgRefs.map(function(r) {
                                                return r.name;
                                            })
                                        }
                                    },
                                    optimizeDeps: {
                                        exclude: pkgRefs.map(function(r) {
                                            return r.name;
                                        })
                                    }
                                }
                            ];
                    }
                });
            })();
        },
        transformIndexHtml: {
            enforce: "pre",
            transform: function transform(html) {
                var importMap = getImportMap(conf.source, pkgRefs);
                console.log("transformHtml", conf, importMap);
                return {
                    html: html,
                    tags: [
                        {
                            tag: "script",
                            attrs: {
                                type: "importmap"
                            },
                            children: JSON.stringify(importMap, null, 2),
                            injectTo: "head-prepend"
                        }
                    ]
                };
            }
        }
    };
}
