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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_DAILY_VOLUME_FIELD = exports.DEFAULT_DAILY_VOLUME_FACTORY = exports.DEFAULT_TOTAL_VOLUME_FIELD = exports.DEFAULT_TOTAL_VOLUME_FACTORY = exports.univ2Adapter = exports.getChainVolumeWithGasToken = exports.getChainVolume = exports.getUniqStartOfTodayTimestamp = void 0;
var graphql_request_1 = require("graphql-request");
var getStartTimestamp_1 = require("./getStartTimestamp");
var sdk_1 = require("@defillama/sdk");
var getUniSubgraph_1 = require("./getUniSubgraph");
var getUniqStartOfTodayTimestamp = function (date) {
    if (date === void 0) { date = new Date(); }
    var date_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    var startOfDay = new Date(date_utc);
    var timestamp = startOfDay.getTime() / 1000;
    return Math.floor(timestamp / 86400) * 86400;
};
exports.getUniqStartOfTodayTimestamp = getUniqStartOfTodayTimestamp;
// To get ID for daily data https://docs.uniswap.org/protocol/V2/reference/API/entities
var getUniswapDateId = function (date) { return getUniqStartOfTodayTimestamp(date) / 86400; };
var DEFAULT_TOTAL_VOLUME_FACTORY = "uniswapFactories";
exports.DEFAULT_TOTAL_VOLUME_FACTORY = DEFAULT_TOTAL_VOLUME_FACTORY;
var DEFAULT_TOTAL_VOLUME_FIELD = "totalVolumeUSD";
exports.DEFAULT_TOTAL_VOLUME_FIELD = DEFAULT_TOTAL_VOLUME_FIELD;
var DEFAULT_DAILY_VOLUME_FACTORY = "uniswapDayData";
exports.DEFAULT_DAILY_VOLUME_FACTORY = DEFAULT_DAILY_VOLUME_FACTORY;
var DEFAULT_DAILY_VOLUME_FIELD = "dailyVolumeUSD";
exports.DEFAULT_DAILY_VOLUME_FIELD = DEFAULT_DAILY_VOLUME_FIELD;
var DEFAULT_DAILY_DATE_FIELD = "date";
// HERE
function getChainVolume(_a) {
    var _this = this;
    var graphUrls = _a.graphUrls, _b = _a.totalVolume, totalVolume = _b === void 0 ? {
        factory: DEFAULT_TOTAL_VOLUME_FACTORY,
        field: DEFAULT_TOTAL_VOLUME_FIELD,
    } : _b, _c = _a.dailyVolume, dailyVolume = _c === void 0 ? {
        factory: DEFAULT_DAILY_VOLUME_FACTORY,
        field: DEFAULT_DAILY_VOLUME_FIELD,
        dateField: DEFAULT_DAILY_DATE_FIELD
    } : _c, _d = _a.customDailyVolume, customDailyVolume = _d === void 0 ? undefined : _d, _e = _a.hasDailyVolume, hasDailyVolume = _e === void 0 ? false : _e, _f = _a.hasTotalVolume, hasTotalVolume = _f === void 0 ? true : _f, _g = _a.getCustomBlock, getCustomBlock = _g === void 0 ? undefined : _g;
    var totalVolumeQuery = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "(\n    block: { number: $block }\n    ) {\n      ", "\n    }\n    "], ["\n  ", "(\n    block: { number: $block }\n    ) {\n      ", "\n    }\n    "])), totalVolume.factory, totalVolume.field);
    var dailyVolumeQuery = customDailyVolume || (0, graphql_request_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", " (id: $id) {\n          ", "\n      }"], ["\n    ", " (id: $id) {\n          ", "\n      }"])), dailyVolume.factory, dailyVolume.field);
    var alternativeDaily = function (timestamp) { return (0, graphql_request_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["{\n      ", "s(where: {", ": ", "}) {\n          ", "\n          ", "\n      }\n  }"], ["{\n      ", "s(where: {", ": ", "}) {\n          ", "\n          ", "\n      }\n  }"])), dailyVolume.factory, dailyVolume.dateField, timestamp, dailyVolume.dateField, dailyVolume.field); };
    var graphQueryTotalVolume = (0, graphql_request_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", ""], ["", ""])), hasTotalVolume ? "query get_total_volume($block: Int) { ".concat(totalVolumeQuery, " }") : "");
    var graphQueryDailyVolume = (0, graphql_request_1.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", ""], ["", ""])), hasDailyVolume ? "query get_daily_volume($id: Int) { ".concat(dailyVolumeQuery, " }") : "");
    return function (chain) {
        return function (options) { return __awaiter(_this, void 0, void 0, function () {
            var endTimestamp, getEndBlock, getFromBlock, getToBlock, customBlockFunc, block, id, graphResTotal, _a, graphResDaily, _b, dailyVolumeValue, factory, fromBlock, toBlock, _c, yesterdayResult, todayResult, todayVolume, yesterdayVolume, volume24H, e_1;
            var _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        endTimestamp = options.endTimestamp, getEndBlock = options.getEndBlock, getFromBlock = options.getFromBlock, getToBlock = options.getToBlock;
                        customBlockFunc = getCustomBlock ? getCustomBlock : getEndBlock;
                        return [4 /*yield*/, customBlockFunc(endTimestamp).catch(function (e) {
                                return console.log((0, getUniSubgraph_1.wrapGraphError)(e).message);
                            })];
                    case 1:
                        block = (_d = (_g.sent())) !== null && _d !== void 0 ? _d : undefined;
                        id = getUniswapDateId(new Date(endTimestamp * 1000));
                        if (!hasTotalVolume) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], graphQueryTotalVolume, { block: block }).catch(function (e) {
                                try {
                                    return JSON.parse(e.response.error).data;
                                }
                                catch (error) {
                                    console.error("Failed to get total volume on ".concat(chain, " ").concat(graphUrls[chain], ": ").concat((0, getUniSubgraph_1.wrapGraphError)(e).message));
                                }
                            })];
                    case 2:
                        _a = _g.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = undefined;
                        _g.label = 4;
                    case 4:
                        graphResTotal = _a;
                        if (!hasDailyVolume) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], graphQueryDailyVolume, { id: id }).catch(function (e) {
                                try {
                                    return JSON.parse(e.response.error).data;
                                }
                                catch (error) {
                                    console.error("Failed to get daily volume on ".concat(chain, " ").concat(graphUrls[chain], ": ").concat((0, getUniSubgraph_1.wrapGraphError)(e).message));
                                }
                            })];
                    case 5:
                        _b = _g.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = undefined;
                        _g.label = 7;
                    case 7:
                        graphResDaily = _b;
                        dailyVolumeValue = graphResDaily ? (_e = graphResDaily[dailyVolume.factory]) === null || _e === void 0 ? void 0 : _e[dailyVolume.field] : undefined;
                        if (!(hasDailyVolume && !dailyVolumeValue)) return [3 /*break*/, 9];
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], alternativeDaily(getUniqStartOfTodayTimestamp(new Date(endTimestamp * 1000)))).catch(function (e) {
                                try {
                                    return JSON.parse(e.response.error).data;
                                }
                                catch (error) {
                                    console.error("Failed to get daily volume via alternative query on ".concat(graphUrls[chain], " ").concat(chain, ": ").concat((0, getUniSubgraph_1.wrapGraphError)(e).message));
                                }
                            })];
                    case 8:
                        graphResDaily = _g.sent();
                        factory = dailyVolume.factory.toLowerCase().charAt(dailyVolume.factory.length - 1) === 's' ? dailyVolume.factory : "".concat(dailyVolume.factory, "s");
                        dailyVolumeValue = graphResDaily ? graphResDaily["".concat(factory)].reduce(function (p, c) { return p + Number(c["".concat(dailyVolume.field)]); }, 0) : undefined;
                        _g.label = 9;
                    case 9:
                        if (!!hasDailyVolume) return [3 /*break*/, 15];
                        return [4 /*yield*/, getFromBlock()];
                    case 10:
                        fromBlock = _g.sent();
                        return [4 /*yield*/, getToBlock()];
                    case 11:
                        toBlock = _g.sent();
                        _g.label = 12;
                    case 12:
                        _g.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, Promise.all([(0, graphql_request_1.request)(graphUrls[chain], graphQueryTotalVolume, { block: fromBlock }), (0, graphql_request_1.request)(graphUrls[chain], graphQueryTotalVolume, { block: toBlock })])];
                    case 13:
                        _c = _g.sent(), yesterdayResult = _c[0], todayResult = _c[1];
                        todayVolume = todayResult[totalVolume.factory].reduce(function (p, c) { return p + Number(c["".concat(totalVolume.field)]); }, 0);
                        yesterdayVolume = yesterdayResult[totalVolume.factory].reduce(function (p, c) { return p + Number(c["".concat(totalVolume.field)]); }, 0);
                        volume24H = todayVolume - yesterdayVolume;
                        dailyVolumeValue = volume24H;
                        return [3 /*break*/, 15];
                    case 14:
                        e_1 = _g.sent();
                        console.error("Failed to get daily volume via alternative query on ".concat(graphUrls[chain], " ").concat(chain, ": ").concat((0, getUniSubgraph_1.wrapGraphError)(e_1).message));
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/, {
                            timestamp: endTimestamp,
                            block: block,
                            totalVolume: graphResTotal ? (_f = graphResTotal[totalVolume.factory]) === null || _f === void 0 ? void 0 : _f.reduce(function (total, factory) { return total + Number(factory[totalVolume.field]); }, 0) : undefined,
                            dailyVolume: dailyVolumeValue,
                        }];
                }
            });
        }); };
    };
}
exports.getChainVolume = getChainVolume;
function getChainVolumeWithGasToken(_a) {
    var _this = this;
    var graphUrls = _a.graphUrls, _b = _a.totalVolume, totalVolume = _b === void 0 ? {
        factory: DEFAULT_TOTAL_VOLUME_FACTORY,
        field: 'totalVolumeETH',
    } : _b, _c = _a.dailyVolume, dailyVolume = _c === void 0 ? {
        factory: DEFAULT_DAILY_VOLUME_FACTORY,
        field: 'dailyVolumeETH',
        dateField: DEFAULT_DAILY_DATE_FIELD
    } : _c, _d = _a.customDailyVolume, customDailyVolume = _d === void 0 ? undefined : _d, _e = _a.hasDailyVolume, hasDailyVolume = _e === void 0 ? true : _e, _f = _a.hasTotalVolume, hasTotalVolume = _f === void 0 ? true : _f, _g = _a.getCustomBlock, getCustomBlock = _g === void 0 ? undefined : _g, priceToken = _a.priceToken;
    var basic = getChainVolume({ graphUrls: graphUrls, totalVolume: totalVolume, dailyVolume: dailyVolume, customDailyVolume: customDailyVolume, hasDailyVolume: hasDailyVolume, hasTotalVolume: hasTotalVolume, getCustomBlock: getCustomBlock });
    return function (chain) {
        return function (options) { return __awaiter(_this, void 0, void 0, function () {
            var _a, block, totalVolume, dailyVolume, timestamp, balances;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, basic(chain)(options)];
                    case 1:
                        _a = _c.sent(), block = _a.block, totalVolume = _a.totalVolume, dailyVolume = _a.dailyVolume;
                        timestamp = options.endTimestamp;
                        balances = new sdk_1.Balances({ chain: chain, timestamp: timestamp });
                        balances.add(priceToken, Number(dailyVolume).toFixed(0), { skipChain: true });
                        _b = {
                            timestamp: timestamp,
                            block: block
                        };
                        return [4 /*yield*/, balances.getUSDString()];
                    case 2: return [2 /*return*/, (_b.dailyVolume = _c.sent(),
                            _b)];
                }
            });
        }); };
    };
}
exports.getChainVolumeWithGasToken = getChainVolumeWithGasToken;
function univ2Adapter(endpoints, _a) {
    var _b = _a.factoriesName, factoriesName = _b === void 0 ? DEFAULT_TOTAL_VOLUME_FACTORY : _b, _c = _a.dayData, dayData = _c === void 0 ? DEFAULT_DAILY_VOLUME_FACTORY : _c, _d = _a.totalVolume, totalVolume = _d === void 0 ? DEFAULT_TOTAL_VOLUME_FIELD : _d, _e = _a.dailyVolume, dailyVolume = _e === void 0 ? DEFAULT_DAILY_VOLUME_FIELD : _e, _f = _a.dailyVolumeTimestampField, dailyVolumeTimestampField = _f === void 0 ? getStartTimestamp_1.DEFAULT_DATE_FIELD : _f, _g = _a.hasTotalVolume, hasTotalVolume = _g === void 0 ? true : _g, _h = _a.gasToken, gasToken = _h === void 0 ? null : _h;
    var graphs = (gasToken === null ? getChainVolume : getChainVolumeWithGasToken)({
        graphUrls: endpoints,
        hasTotalVolume: hasTotalVolume,
        totalVolume: {
            factory: factoriesName,
            field: totalVolume
        },
        dailyVolume: {
            factory: dayData,
            field: dailyVolume,
            dateField: dailyVolumeTimestampField
        },
        priceToken: gasToken
    });
    var adapter = {
        adapter: Object.keys(endpoints).reduce(function (acc, chain) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[chain] = {
                fetch: graphs(chain),
                start: (0, getStartTimestamp_1.getStartTimestamp)({
                    endpoints: endpoints,
                    chain: chain,
                    volumeField: dailyVolume,
                    dailyDataField: dayData + "s",
                    dateField: dailyVolumeTimestampField
                }),
            }, _a));
        }, {}),
        version: 2
    };
    return adapter;
}
exports.univ2Adapter = univ2Adapter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
