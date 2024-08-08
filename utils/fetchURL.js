"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpPost = exports.httpGet = exports.postURL = void 0;
var axios_1 = require("axios");
function fetchURL(url, retries) {
    if (retries === void 0) { retries = 3; }
    return __awaiter(this, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, httpGet(url)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    error_1 = _a.sent();
                    if (retries > 0)
                        return [2 /*return*/, fetchURL(url, retries - 1)];
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = fetchURL;
function postURL(url, data, retries, options) {
    if (retries === void 0) { retries = 3; }
    return __awaiter(this, void 0, void 0, function () {
        var res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, httpPost(url, data, options)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    error_2 = _a.sent();
                    if (retries > 0)
                        return [2 /*return*/, postURL(url, data, retries - 1, options)];
                    throw error_2;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.postURL = postURL;
function formAxiosError(url, error, options) {
    var _a, _b, _c, _d, _e, _f;
    var e = new Error(error === null || error === void 0 ? void 0 : error.message);
    var axiosError = ((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || ((_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.error) || ((_e = error === null || error === void 0 ? void 0 : error.response) === null || _e === void 0 ? void 0 : _e.statusText) || ((_f = error === null || error === void 0 ? void 0 : error.response) === null || _f === void 0 ? void 0 : _f.data);
    e.url = url;
    Object.keys(options || {}).forEach(function (key) { return e[key] = options[key]; });
    if (axiosError)
        e.axiosError = axiosError;
    delete e.stack;
    return e;
}
var successCodes = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
function httpGet(url, options, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.withMetadata, withMetadata = _c === void 0 ? false : _c;
    return __awaiter(this, void 0, void 0, function () {
        var res, error_3;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get(url, options)];
                case 1:
                    res = _d.sent();
                    if (!successCodes.includes(res.status))
                        throw new Error("Error fetching ".concat(url, ": ").concat(res.status, " ").concat(res.statusText));
                    if (!res.data)
                        throw new Error("Error fetching ".concat(url, ": no data"));
                    if (withMetadata)
                        return [2 /*return*/, res];
                    return [2 /*return*/, res.data];
                case 2:
                    error_3 = _d.sent();
                    throw formAxiosError(url, error_3, { method: 'GET' });
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.httpGet = httpGet;
function httpPost(url, data, options, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.withMetadata, withMetadata = _c === void 0 ? false : _c;
    return __awaiter(this, void 0, void 0, function () {
        var res, error_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post(url, data, options)];
                case 1:
                    res = _d.sent();
                    if (!successCodes.includes(res.status))
                        throw new Error("Error fetching ".concat(url, ": ").concat(res.status, " ").concat(res.statusText));
                    if (!res.data)
                        throw new Error("Error fetching ".concat(url, ": no data"));
                    return [2 /*return*/, res.data];
                case 2:
                    error_4 = _d.sent();
                    if (withMetadata)
                        throw error_4;
                    throw formAxiosError(url, error_4, { method: 'POST' });
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.httpPost = httpPost;
