"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var aws_proxy_1 = require("./aws-proxy");
var userConfig_1 = require("./userConfig");
/**
 * Creates AWS lamda request to send to Lamda mock server
 * @param payload Payload to include in request
 */
exports.lamdaRequestFrom = function (payload) {
    return {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        redirect: "follow",
        body: JSON.stringify({
            payload: JSON.stringify(payload),
            profile: null,
            region: "us-west-2"
        }),
        method: "POST"
    };
};
/**
 * Interfaces with AWS Lamda Mock Server function handler
 * @param params Parameters from Rest request
 */
exports.getLamdaResult = function (_a) {
    var body = _a.body, headers = _a.headers, method = _a.method, path = _a.path;
    return __awaiter(_this, void 0, void 0, function () {
        var userConfig, proxy, lamdaRequest, fetchResponse, responseJson, _b, _c, _d, _e, e_1;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    userConfig = userConfig_1.getUserConfig();
                    proxy = aws_proxy_1.awsProxyFrom(__assign({
                        body: body,
                        headers: headers,
                        method: method,
                        path: path.replace(/^\/+/, "")
                    }, userConfig));
                    lamdaRequest = exports.lamdaRequestFrom(proxy);
                    return [4 /*yield*/, node_fetch_1.default(userConfig.entryPoint, lamdaRequest)];
                case 1:
                    fetchResponse = _f.sent();
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 4, , 5]);
                    _c = (_b = JSON).parse;
                    _e = (_d = JSON).parse;
                    return [4 /*yield*/, fetchResponse.text()];
                case 3:
                    responseJson = _c.apply(_b, [_e.apply(_d, [_f.sent()])["response"]]);
                    return [2 /*return*/, {
                            response: responseJson,
                            isSuccess: true,
                            proxy: proxy
                        }];
                case 4:
                    e_1 = _f.sent();
                    return [2 /*return*/, {
                            error: e_1,
                            isSuccess: false,
                            proxy: proxy
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=aws-lamda.js.map