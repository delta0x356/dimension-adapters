"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_DAILY_FEES_FIELD = exports.DEFAULT_DAILY_FEES_FACTORY = exports.DEFAULT_TOTAL_FEES_FIELD = exports.DEFAULT_TOTAL_FEES_FACTORY = exports.DEFAULT_TOTAL_VOLUME_FIELD = exports.DEFAULT_TOTAL_VOLUME_FACTORY = exports.DEFAULT_DAILY_VOLUME_FIELD = exports.DEFAULT_DAILY_VOLUME_FACTORY = exports.getUniswapV3Fees = exports.getDexChainBreakdownFees = exports.getDexChainFeesRaw = exports.getDexChainFees = exports.getUniqStartOfTodayTimestamp = void 0;
var bignumber_js_1 = require("bignumber.js");
var graphql_request_1 = require("graphql-request");
var getBlock_1 = require("../helpers/getBlock");
var getUniSubgraphVolume_1 = require("../helpers/getUniSubgraphVolume");
Object.defineProperty(exports, "getUniqStartOfTodayTimestamp", { enumerable: true, get: function () { return getUniSubgraphVolume_1.getUniqStartOfTodayTimestamp; } });
Object.defineProperty(exports, "DEFAULT_TOTAL_VOLUME_FACTORY", { enumerable: true, get: function () { return getUniSubgraphVolume_1.DEFAULT_TOTAL_VOLUME_FACTORY; } });
Object.defineProperty(exports, "DEFAULT_TOTAL_VOLUME_FIELD", { enumerable: true, get: function () { return getUniSubgraphVolume_1.DEFAULT_TOTAL_VOLUME_FIELD; } });
Object.defineProperty(exports, "DEFAULT_DAILY_VOLUME_FACTORY", { enumerable: true, get: function () { return getUniSubgraphVolume_1.DEFAULT_DAILY_VOLUME_FACTORY; } });
Object.defineProperty(exports, "DEFAULT_DAILY_VOLUME_FIELD", { enumerable: true, get: function () { return getUniSubgraphVolume_1.DEFAULT_DAILY_VOLUME_FIELD; } });
// To get ID for daily data https://docs.uniswap.org/protocol/V2/reference/API/entities
var getUniswapDateId = function (date) { return (0, getUniSubgraphVolume_1.getUniqStartOfTodayTimestamp)(date) / 86400; };
var DEFAULT_TOTAL_FEES_FACTORY = "factories";
exports.DEFAULT_TOTAL_FEES_FACTORY = DEFAULT_TOTAL_FEES_FACTORY;
var DEFAULT_TOTAL_FEES_FIELD = "totalFeesUSD";
exports.DEFAULT_TOTAL_FEES_FIELD = DEFAULT_TOTAL_FEES_FIELD;
var DEFAULT_DAILY_FEES_FACTORY = "uniswapDayData";
exports.DEFAULT_DAILY_FEES_FACTORY = DEFAULT_DAILY_FEES_FACTORY;
var DEFAULT_DAILY_FEES_FIELD = "feesUSD";
exports.DEFAULT_DAILY_FEES_FIELD = DEFAULT_DAILY_FEES_FIELD;
var getUniswapV3Fees = function (graphUrls) {
    var graphQuery = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["query fees($dateId: Int!) {\n    ", "(id: $dateId) {\n      ", "\n    },\n    ", " {\n      ", "\n    }\n  }"], ["query fees($dateId: Int!) {\n    ", "(id: $dateId) {\n      ", "\n    },\n    ", " {\n      ", "\n    }\n  }"])), DEFAULT_DAILY_FEES_FACTORY, DEFAULT_DAILY_FEES_FIELD, DEFAULT_TOTAL_FEES_FACTORY, DEFAULT_TOTAL_FEES_FIELD);
    return function (chain) {
        return function (timestamp) { return __awaiter(void 0, void 0, void 0, function () {
            var dateId, graphRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateId = getUniswapDateId(new Date(timestamp * 1000));
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], graphQuery, {
                                dateId: dateId,
                            })];
                    case 1:
                        graphRes = _a.sent();
                        return [2 /*return*/, {
                                timestamp: timestamp,
                                totalFees: graphRes[DEFAULT_TOTAL_FEES_FACTORY][0][DEFAULT_TOTAL_FEES_FIELD],
                                dailyFees: graphRes[DEFAULT_DAILY_FEES_FACTORY][DEFAULT_DAILY_FEES_FIELD],
                                totalRevenue: "0", // uniswap has no rev yet
                                dailyRevenue: "0", // uniswap has no rev yet
                            }];
                }
            });
        }); };
    };
};
exports.getUniswapV3Fees = getUniswapV3Fees;
var getDexChainBreakdownFees = function (_a) {
    var volumeAdapter = _a.volumeAdapter, _b = _a.totalFees, totalFees = _b === void 0 ? 0 : _b, _c = _a.protocolFees, protocolFees = _c === void 0 ? 0 : _c;
    if ('breakdown' in volumeAdapter) {
        var breakdownAdapter = {};
        var volumeBreakdownAdapter = volumeAdapter.breakdown;
        var _loop_1 = function (version, adapterObj) {
            var _f;
            var volAdapter = adapterObj;
            var baseAdapters = Object.keys(volAdapter).map(function (chain) {
                var _a;
                var fetchFees = function (timestamp, chainBlocks, options) { return __awaiter(void 0, void 0, void 0, function () {
                    var fetchedResult, chainDailyVolume, chainTotalVolume;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, volAdapter[chain].fetch(timestamp, chainBlocks, options)];
                            case 1:
                                fetchedResult = _a.sent();
                                chainDailyVolume = fetchedResult.dailyVolume ? fetchedResult.dailyVolume : "0";
                                chainTotalVolume = fetchedResult.totalVolume ? fetchedResult.totalVolume : "0";
                                return [2 /*return*/, {
                                        timestamp: timestamp,
                                        totalFees: new bignumber_js_1.default(chainTotalVolume).multipliedBy(totalFees).toString(),
                                        dailyFees: chainDailyVolume ? new bignumber_js_1.default(chainDailyVolume).multipliedBy(totalFees).toString() : undefined,
                                        totalRevenue: new bignumber_js_1.default(chainTotalVolume).multipliedBy(protocolFees).toString(),
                                        dailyRevenue: chainDailyVolume ? new bignumber_js_1.default(chainDailyVolume).multipliedBy(protocolFees).toString() : undefined
                                    }];
                        }
                    });
                }); };
                var baseAdapter = (_a = {},
                    _a[chain] = __assign(__assign({}, volAdapter[chain]), { fetch: fetchFees, customBackfill: fetchFees }),
                    _a);
                return baseAdapter;
            });
            breakdownAdapter = __assign((_f = {}, _f[version] = baseAdapters[0], _f), breakdownAdapter);
        };
        for (var _i = 0, _d = Object.entries(volumeBreakdownAdapter); _i < _d.length; _i++) {
            var _e = _d[_i], version = _e[0], adapterObj = _e[1];
            _loop_1(version, adapterObj);
        }
        return breakdownAdapter;
    }
    else {
        console.log("Failed to grab dex volume data (volume adapter not include 'breakdown' props)");
        return {};
    }
};
exports.getDexChainBreakdownFees = getDexChainBreakdownFees;
var getDexChainFees = function (_a) {
    var volumeAdapter = _a.volumeAdapter, _b = _a.totalFees, totalFees = _b === void 0 ? 0 : _b, _c = _a.protocolFees, protocolFees = _c === void 0 ? 0 : _c, params = __rest(_a, ["volumeAdapter", "totalFees", "protocolFees"]);
    if ('adapter' in volumeAdapter) {
        var finalBaseAdapter_1 = {};
        var adapterObj_1 = volumeAdapter.adapter;
        Object.keys(adapterObj_1).map(function (chain) {
            var _a;
            var fetchFees = function (options) { return __awaiter(void 0, void 0, void 0, function () {
                var fetchedResult, chainDailyVolume, chainTotalVolume, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, adapterObj_1[chain].fetch(options)];
                        case 1:
                            fetchedResult = _a.sent();
                            chainDailyVolume = fetchedResult.dailyVolume;
                            chainTotalVolume = fetchedResult.totalVolume;
                            response = {};
                            if (chainDailyVolume !== undefined) {
                                if (totalFees)
                                    response["dailyFees"] = new bignumber_js_1.default(chainDailyVolume).multipliedBy(totalFees).toString();
                                if (params.userFees !== undefined)
                                    response["dailyUserFees"] = new bignumber_js_1.default(chainDailyVolume).multipliedBy(params.userFees).toString();
                                if (params.revenue !== undefined)
                                    response["dailyRevenue"] = new bignumber_js_1.default(chainDailyVolume).multipliedBy(params.revenue).toString();
                                if (params.holdersRevenue !== undefined)
                                    response["dailyHoldersRevenue"] = new bignumber_js_1.default(chainDailyVolume).multipliedBy(params.holdersRevenue).toString();
                                if (params.supplySideRevenue !== undefined)
                                    response["dailySupplySideRevenue"] = new bignumber_js_1.default(chainDailyVolume).multipliedBy(params.supplySideRevenue).toString();
                                if (protocolFees !== undefined)
                                    response["dailyProtocolRevenue"] = new bignumber_js_1.default(chainDailyVolume).multipliedBy(protocolFees).toString();
                            }
                            if (chainTotalVolume !== undefined) {
                                if (totalFees)
                                    response["totalFees"] = new bignumber_js_1.default(chainTotalVolume).multipliedBy(totalFees).toString();
                                if (params.userFees !== undefined)
                                    response["totalUserFees"] = new bignumber_js_1.default(chainTotalVolume).multipliedBy(params.userFees).toString();
                                if (params.revenue !== undefined)
                                    response["totalRevenue"] = new bignumber_js_1.default(chainTotalVolume).multipliedBy(params.revenue).toString();
                                if (params.holdersRevenue !== undefined)
                                    response["totalHoldersRevenue"] = new bignumber_js_1.default(chainTotalVolume).multipliedBy(params.holdersRevenue).toString();
                                if (params.supplySideRevenue !== undefined)
                                    response["totalSupplySideRevenue"] = new bignumber_js_1.default(chainTotalVolume).multipliedBy(params.supplySideRevenue).toString();
                                if (protocolFees !== undefined)
                                    response["totalProtocolRevenue"] = new bignumber_js_1.default(chainTotalVolume).multipliedBy(protocolFees).toString();
                            }
                            return [2 /*return*/, response];
                    }
                });
            }); };
            var baseAdapter = (_a = {},
                _a[chain] = __assign(__assign({}, adapterObj_1[chain]), { fetch: fetchFees, customBackfill: fetchFees, meta: params.meta }),
                _a);
            finalBaseAdapter_1 = __assign(__assign({}, baseAdapter), finalBaseAdapter_1);
            return baseAdapter;
        });
        return finalBaseAdapter_1;
    }
    else {
        console.log("Failed to grab dex volume data (volume adapter not include 'volume' props)", volumeAdapter);
        return {};
    }
};
exports.getDexChainFees = getDexChainFees;
// Raw method if we do not want to rely on dexVolumes
function getDexChainFeesRaw(_a) {
    var _this = this;
    var graphUrls = _a.graphUrls, _b = _a.totalFees, totalFees = _b === void 0 ? 0 : _b, _c = _a.protocolFees, protocolFees = _c === void 0 ? 0 : _c, _d = _a.totalVolume, totalVolume = _d === void 0 ? {
        factory: getUniSubgraphVolume_1.DEFAULT_TOTAL_VOLUME_FACTORY,
        field: getUniSubgraphVolume_1.DEFAULT_TOTAL_VOLUME_FIELD,
    } : _d, _e = _a.dailyVolume, dailyVolume = _e === void 0 ? {
        factory: getUniSubgraphVolume_1.DEFAULT_DAILY_VOLUME_FACTORY,
        field: getUniSubgraphVolume_1.DEFAULT_DAILY_VOLUME_FIELD,
    } : _e, _f = _a.customDailyVolume, customDailyVolume = _f === void 0 ? undefined : _f, _g = _a.hasDailyVolume, hasDailyVolume = _g === void 0 ? true : _g, _h = _a.hasTotalVolume, hasTotalVolume = _h === void 0 ? true : _h, _j = _a.getCustomBlock, getCustomBlock = _j === void 0 ? undefined : _j;
    var totalVolumeQuery = (0, graphql_request_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "(\n    block: { number: $block }\n  ) {\n    ", "\n  }\n  "], ["\n  ", "(\n    block: { number: $block }\n  ) {\n    ", "\n  }\n  "])), totalVolume.factory, totalVolume.field);
    var dailyVolumeQuery = customDailyVolume || (0, graphql_request_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", " (\n    id: $id\n  ) {\n    ", "\n  }\n  "], ["\n  ", " (\n    id: $id\n  ) {\n    ", "\n  }\n  "])), dailyVolume.factory, dailyVolume.field);
    var graphQuery = (0, graphql_request_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nquery get_volume($block: Int, $id: Int) {\n  ", "\n  ", "\n}\n"], ["\nquery get_volume($block: Int, $id: Int) {\n  ", "\n  ", "\n}\n"])), hasTotalVolume ? totalVolumeQuery : "", hasDailyVolume ? dailyVolumeQuery : "");
    return function (chain) {
        return function (timestamp, chainBlocks) { return __awaiter(_this, void 0, void 0, function () {
            var block, _a, _b, id, graphRes, chainTotalVolume, chainDailyVolume;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = getCustomBlock;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, getCustomBlock(timestamp)];
                    case 1:
                        _b = (_e.sent());
                        _e.label = 2;
                    case 2:
                        _a = (_b);
                        if (_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, getBlock_1.getBlock)(timestamp, chain, chainBlocks)];
                    case 3:
                        _a = (_e.sent());
                        _e.label = 4;
                    case 4:
                        block = _a;
                        id = getUniswapDateId(new Date(timestamp * 1000));
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], graphQuery, {
                                block: block,
                                id: id,
                            })];
                    case 5:
                        graphRes = _e.sent();
                        chainTotalVolume = graphRes[totalVolume.factory][0][totalVolume.field];
                        chainDailyVolume = hasDailyVolume ? ((_d = (_c = graphRes === null || graphRes === void 0 ? void 0 : graphRes[dailyVolume.factory]) === null || _c === void 0 ? void 0 : _c[dailyVolume.field]) !== null && _d !== void 0 ? _d : "0") : undefined;
                        return [2 /*return*/, {
                                timestamp: timestamp,
                                block: block,
                                totalFees: new bignumber_js_1.default(chainTotalVolume).multipliedBy(totalFees).toString(),
                                dailyFees: (hasDailyVolume && chainDailyVolume) ? new bignumber_js_1.default(chainDailyVolume).multipliedBy(totalFees).toString() : undefined,
                                totalRevenue: new bignumber_js_1.default(chainTotalVolume).multipliedBy(protocolFees).toString(),
                                dailyRevenue: (hasDailyVolume && chainDailyVolume) ? new bignumber_js_1.default(chainDailyVolume).multipliedBy(protocolFees).toString() : undefined
                            }];
                }
            });
        }); };
    };
}
exports.getDexChainFeesRaw = getDexChainFeesRaw;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
