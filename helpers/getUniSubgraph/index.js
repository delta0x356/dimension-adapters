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
exports.DEFAULT_DAILY_VOLUME_FIELD = exports.DEFAULT_DAILY_VOLUME_FACTORY = exports.DEFAULT_TOTAL_VOLUME_FIELD = exports.DEFAULT_TOTAL_VOLUME_FACTORY = exports.univ2DimensionAdapter = exports.getGraphDimensions = exports.wrapGraphError = void 0;
var graphql_request_1 = require("graphql-request");
var getUniSubgraphFees_1 = require("../getUniSubgraphFees");
var bignumber_js_1 = require("bignumber.js");
var utils_1 = require("./utils");
var getStartTimestamp_1 = require("../getStartTimestamp");
var DEFAULT_TOTAL_VOLUME_FACTORY = "uniswapFactories";
exports.DEFAULT_TOTAL_VOLUME_FACTORY = DEFAULT_TOTAL_VOLUME_FACTORY;
var DEFAULT_TOTAL_VOLUME_FIELD = "totalVolumeUSD";
exports.DEFAULT_TOTAL_VOLUME_FIELD = DEFAULT_TOTAL_VOLUME_FIELD;
var DEFAULT_DAILY_VOLUME_FACTORY = "uniswapDayData";
exports.DEFAULT_DAILY_VOLUME_FACTORY = DEFAULT_DAILY_VOLUME_FACTORY;
var DEFAULT_DAILY_VOLUME_FIELD = "dailyVolumeUSD";
exports.DEFAULT_DAILY_VOLUME_FIELD = DEFAULT_DAILY_VOLUME_FIELD;
var DEFAULT_DAILY_DATE_FIELD = "date";
var DEFAULT_DAILY_PAIR_FACTORY = "pairDayDatas";
var DEFAULT_ID_TYPE = 'ID!';
var DEFAULT_BLOCK_TYPE = 'Int';
function getGraphDimensions(_a) {
    var _this = this;
    var _b, _c, _d, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var graphUrls = _a.graphUrls, graphRequestHeaders = _a.graphRequestHeaders, _q = _a.totalVolume, totalVolume = _q === void 0 ? {
        factory: DEFAULT_TOTAL_VOLUME_FACTORY,
        field: DEFAULT_TOTAL_VOLUME_FIELD,
        blockGraphType: DEFAULT_BLOCK_TYPE
    } : _q, _r = _a.dailyVolume, dailyVolume = _r === void 0 ? {
        factory: DEFAULT_DAILY_VOLUME_FACTORY,
        field: DEFAULT_DAILY_VOLUME_FIELD,
        dateField: DEFAULT_DAILY_DATE_FIELD,
        pairs: DEFAULT_DAILY_PAIR_FACTORY,
        idGraphType: DEFAULT_ID_TYPE
    } : _r, _s = _a.totalFees, totalFees = _s === void 0 ? {
        factory: getUniSubgraphFees_1.DEFAULT_TOTAL_FEES_FACTORY,
        field: getUniSubgraphFees_1.DEFAULT_TOTAL_FEES_FIELD,
    } : _s, _t = _a.dailyFees, dailyFees = _t === void 0 ? {
        factory: getUniSubgraphFees_1.DEFAULT_DAILY_FEES_FACTORY,
        field: getUniSubgraphFees_1.DEFAULT_DAILY_FEES_FIELD,
    } : _t, getCustomBlock = _a.getCustomBlock, feesPercent = _a.feesPercent, _u = _a.blacklistTokens, blacklistTokens = _u === void 0 ? {} : _u;
    // DAILY VOLUME
    // Graph fields
    var graphFieldsDailyVolume = {
        factory: (_b = dailyVolume.factory) !== null && _b !== void 0 ? _b : DEFAULT_DAILY_VOLUME_FACTORY,
        field: (_c = dailyVolume.field) !== null && _c !== void 0 ? _c : DEFAULT_DAILY_VOLUME_FIELD,
        dateField: (_d = dailyVolume.dateField) !== null && _d !== void 0 ? _d : DEFAULT_DAILY_DATE_FIELD, // For alternative query
        pairs: (_f = dailyVolume.pairs) !== null && _f !== void 0 ? _f : DEFAULT_DAILY_PAIR_FACTORY,
        idGraphType: (_g = dailyVolume.idGraphType) !== null && _g !== void 0 ? _g : DEFAULT_ID_TYPE
    };
    // Queries
    var dailyVolumeQuery = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query daily_volume ($id: ", ") {\n      ", " (id: $id) {\n        ", "\n      }\n  }"], ["\n  query daily_volume ($id: ", ") {\n      ", " (id: $id) {\n        ", "\n      }\n  }"])), graphFieldsDailyVolume.idGraphType, graphFieldsDailyVolume.factory, graphFieldsDailyVolume.field);
    var alternativeDailyQuery = (0, graphql_request_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query daily_volume_alternative ($timestamp: Int) {\n    ", "s (where: {", ": $timestamp}) {\n      ", "\n      ", "\n    }\n  }"], ["\n  query daily_volume_alternative ($timestamp: Int) {\n    ", "s (where: {", ": $timestamp}) {\n      ", "\n      ", "\n    }\n  }"])), graphFieldsDailyVolume.factory, graphFieldsDailyVolume.dateField, graphFieldsDailyVolume.dateField, graphFieldsDailyVolume.field);
    // TOTAL VOLUME
    // Graph fields
    var graphFieldsTotalVolume = {
        factory: (_h = totalVolume.factory) !== null && _h !== void 0 ? _h : DEFAULT_TOTAL_VOLUME_FACTORY,
        field: (_j = totalVolume.field) !== null && _j !== void 0 ? _j : DEFAULT_TOTAL_VOLUME_FIELD,
        blockGraphType: (_k = totalVolume.blockGraphType) !== null && _k !== void 0 ? _k : DEFAULT_BLOCK_TYPE
    };
    // Queries
    var totalVolumeQuery = (0, graphql_request_1.gql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query total_volume ($block: ", ") {\n    ", "(block: { number: $block }) {\n      ", "\n    }\n  }"], ["\n  query total_volume ($block: ", ") {\n    ", "(block: { number: $block }) {\n      ", "\n    }\n  }"])), graphFieldsTotalVolume.blockGraphType, graphFieldsTotalVolume.factory, graphFieldsTotalVolume.field);
    // DAILY FEES
    // Graph fields
    var graphFieldsDailyFees = {
        factory: (_l = dailyFees.factory) !== null && _l !== void 0 ? _l : getUniSubgraphFees_1.DEFAULT_DAILY_FEES_FACTORY,
        field: (_m = dailyFees.field) !== null && _m !== void 0 ? _m : getUniSubgraphFees_1.DEFAULT_DAILY_FEES_FIELD
    };
    // Query
    var dailyFeesQuery = (0, graphql_request_1.gql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query daily_fees ($id: ID!) {\n    ", "(id: $id) {\n      ", "\n    }\n  }"], ["\n  query daily_fees ($id: ID!) {\n    ", "(id: $id) {\n      ", "\n    }\n  }"])), graphFieldsDailyFees.factory, graphFieldsDailyFees.field);
    // TOTAL FEES
    // Graph fields
    var graphFieldsTotalFees = {
        factory: (_o = totalFees.factory) !== null && _o !== void 0 ? _o : getUniSubgraphFees_1.DEFAULT_TOTAL_FEES_FACTORY,
        field: (_p = totalFees.field) !== null && _p !== void 0 ? _p : getUniSubgraphFees_1.DEFAULT_TOTAL_FEES_FIELD
    };
    // Query
    var totalFeesQuery = (0, graphql_request_1.gql)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query total_fees {\n    ", " {\n      ", "\n    }\n  }"], ["\n  query total_fees {\n    ", " {\n      ", "\n    }\n  }"])), graphFieldsTotalFees.factory, graphFieldsTotalFees.field);
    return function (chain) {
        var dailyVolumePairsQuery = blacklistTokens[chain] ? (0, graphql_request_1.gql)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query daily_volume_byPair ($timestamp_gt: Int, $timestamp_lte: Int) {\n      pairDayDatas(where:{", "_gt: $timestamp_gt, ", "_lte: $timestamp_lte, ", "_not: 0}, orderBy: ", ", orderDirection: desc, first: 1000){\n        date\n        token0{\n          symbol\n          id\n        }\n        token1{\n          symbol\n          id\n        }\n        ", "\n      }\n    }\n    "], ["\n    query daily_volume_byPair ($timestamp_gt: Int, $timestamp_lte: Int) {\n      pairDayDatas(where:{", "_gt: $timestamp_gt, ", "_lte: $timestamp_lte, ", "_not: 0}, orderBy: ", ", orderDirection: desc, first: 1000){\n        date\n        token0{\n          symbol\n          id\n        }\n        token1{\n          symbol\n          id\n        }\n        ", "\n      }\n    }\n    "])), graphFieldsDailyVolume.dateField, graphFieldsDailyVolume.dateField, graphFieldsDailyVolume.field, graphFieldsDailyVolume.field, graphFieldsDailyVolume.field) : undefined;
        return function (options) { return __awaiter(_this, void 0, void 0, function () {
            var endTimestamp, getEndBlock, customBlockFunc, block, id, graphResDailyVolume, dailyVolume, factory, graphResTotalVolume, totalVolume, graphResDailyFees, dailyFees, graphResTotalFees, totalFees, response, feeBase, dailyBase_1, totalBase_1;
            var _a, _b, _c, _d, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        endTimestamp = options.endTimestamp, getEndBlock = options.getEndBlock;
                        customBlockFunc = getCustomBlock ? getCustomBlock : getEndBlock;
                        return [4 /*yield*/, customBlockFunc(endTimestamp).catch(function (e) {
                                return console.log(wrapGraphError(e).message);
                            })];
                    case 1:
                        block = (_a = (_j.sent())) !== null && _a !== void 0 ? _a : undefined;
                        id = String((0, utils_1.getUniswapDateId)(new Date(endTimestamp * 1000)));
                        if (!dailyVolumePairsQuery) return [3 /*break*/, 3];
                        console.info("Calculating volume excluding blacklisted tokens...");
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], dailyVolumePairsQuery, {
                                timestamp_gt: endTimestamp - 3600 * 24,
                                timestamp_lte: endTimestamp,
                            }, graphRequestHeaders === null || graphRequestHeaders === void 0 ? void 0 : graphRequestHeaders[chain])
                                .catch(utils_1.handle200Errors)
                                .catch(function (e) {
                                return console.error("GraphFetchError: Failed to get daily volume on ".concat(chain, " with graph ").concat(graphUrls[chain], ": ").concat(wrapGraphError(e).message));
                            })];
                    case 2:
                        graphResDailyVolume = _j.sent();
                        dailyVolume = (_b = graphResDailyVolume === null || graphResDailyVolume === void 0 ? void 0 : graphResDailyVolume[graphFieldsDailyVolume.pairs]) === null || _b === void 0 ? void 0 : _b.reduce(function (acc, current) {
                            if (blacklistTokens[chain].includes(current.token0.id) ||
                                blacklistTokens[chain].includes(current.token1.id))
                                return acc;
                            if (current === null || current === void 0 ? void 0 : current[graphFieldsDailyVolume.field]) {
                                if (acc)
                                    return acc += +(current === null || current === void 0 ? void 0 : current[graphFieldsDailyVolume.field]);
                                return +(current === null || current === void 0 ? void 0 : current[graphFieldsDailyVolume.field]);
                            }
                            return acc;
                        }, undefined);
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], dailyVolumeQuery, { id: id }, graphRequestHeaders === null || graphRequestHeaders === void 0 ? void 0 : graphRequestHeaders[chain]).catch(utils_1.handle200Errors).catch(function (e) { return console.error("GraphFetchError: Failed to get daily volume on ".concat(chain, " with graph ").concat(graphUrls[chain], ": ").concat(wrapGraphError(e).message)); })];
                    case 4:
                        graphResDailyVolume = _j.sent();
                        dailyVolume = (_c = graphResDailyVolume === null || graphResDailyVolume === void 0 ? void 0 : graphResDailyVolume[graphFieldsDailyVolume.factory]) === null || _c === void 0 ? void 0 : _c[graphFieldsDailyVolume.field];
                        if (!(!graphResDailyVolume || !dailyVolume)) return [3 /*break*/, 6];
                        console.info("Attempting with alternative query...");
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], alternativeDailyQuery, { timestamp: (0, utils_1.getUniqStartOfTodayTimestamp)(new Date(endTimestamp * 1000)) }, graphRequestHeaders === null || graphRequestHeaders === void 0 ? void 0 : graphRequestHeaders[chain]).catch(utils_1.handle200Errors).catch(function (e) { return console.error("Failed to get alternative daily volume on ".concat(chain, " with graph ").concat(graphUrls[chain], ": ").concat(wrapGraphError(e).message)); })];
                    case 5:
                        graphResDailyVolume = _j.sent();
                        factory = graphFieldsDailyVolume.factory.toLowerCase().charAt(graphFieldsDailyVolume.factory.length - 1) === 's' ? graphFieldsDailyVolume.factory : "".concat(graphFieldsDailyVolume.factory, "s");
                        dailyVolume = graphResDailyVolume === null || graphResDailyVolume === void 0 ? void 0 : graphResDailyVolume[factory].reduce(function (p, c) { return p + Number(c[graphFieldsDailyVolume.field]); }, 0);
                        _j.label = 6;
                    case 6: return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], totalVolumeQuery, { block: block }, graphRequestHeaders === null || graphRequestHeaders === void 0 ? void 0 : graphRequestHeaders[chain]).catch(utils_1.handle200Errors).catch(function (e) { return console.error("GraphFetchError: Failed to get total volume on ".concat(chain, " with graph ").concat(graphUrls[chain], ": ").concat(wrapGraphError(e).message)); })];
                    case 7:
                        graphResTotalVolume = _j.sent();
                        totalVolume = (_f = (_d = graphResTotalVolume === null || graphResTotalVolume === void 0 ? void 0 : graphResTotalVolume[graphFieldsTotalVolume.factory]) === null || _d === void 0 ? void 0 : _d.reduce(function (total, factory) { return total + Number(factory[graphFieldsTotalVolume.field]); }, 0)) === null || _f === void 0 ? void 0 : _f.toString();
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], dailyFeesQuery, { id: id }, graphRequestHeaders === null || graphRequestHeaders === void 0 ? void 0 : graphRequestHeaders[chain]).catch(function (_e) {
                                if (dailyVolume === undefined || (feesPercent === null || feesPercent === void 0 ? void 0 : feesPercent.Fees) === undefined)
                                    console.error("Unable to get daily fees on ".concat(chain, " from graph."));
                            })];
                    case 8:
                        graphResDailyFees = _j.sent();
                        dailyFees = (_g = graphResDailyFees === null || graphResDailyFees === void 0 ? void 0 : graphResDailyFees[graphFieldsDailyFees.factory]) === null || _g === void 0 ? void 0 : _g[graphFieldsDailyFees.field];
                        return [4 /*yield*/, (0, graphql_request_1.request)(graphUrls[chain], totalFeesQuery, { id: id }, graphRequestHeaders === null || graphRequestHeaders === void 0 ? void 0 : graphRequestHeaders[chain]).catch(function (_e) {
                                if (totalVolume === undefined || (feesPercent === null || feesPercent === void 0 ? void 0 : feesPercent.Fees) === undefined)
                                    console.error("Unable to get total fees on ".concat(chain, " from graph."));
                            })];
                    case 9:
                        graphResTotalFees = _j.sent();
                        totalFees = (_h = graphResTotalFees === null || graphResTotalFees === void 0 ? void 0 : graphResTotalFees[graphFieldsTotalFees.factory]) === null || _h === void 0 ? void 0 : _h.reduce(function (total, factory) { return total + Number(factory[graphFieldsTotalFees.field]); }, 0);
                        response = {
                            timestamp: endTimestamp,
                            block: block,
                            totalVolume: totalVolume,
                            dailyVolume: dailyVolume,
                            dailyFees: dailyFees,
                            totalFees: totalFees
                        };
                        if (feesPercent) {
                            feeBase = feesPercent.type;
                            dailyBase_1 = feeBase === 'volume' ? dailyVolume : dailyFees;
                            totalBase_1 = feeBase === 'volume' ? totalVolume : totalFees;
                            Object.entries(feesPercent).forEach(function (_a) {
                                var feeType = _a[0], feePercentType = _a[1];
                                if (typeof feePercentType !== "number")
                                    return;
                                if (dailyBase_1 !== undefined && response["daily".concat(feeType)] === undefined)
                                    response["daily".concat(feeType)] = new bignumber_js_1.default(dailyBase_1).multipliedBy(feePercentType / 100).toString();
                                if (totalBase_1 && response["total".concat(feeType)] === undefined)
                                    response["total".concat(feeType)] = new bignumber_js_1.default(totalBase_1).multipliedBy(feePercentType / 100).toString();
                            });
                        }
                        return [2 /*return*/, response];
                }
            });
        }); };
    };
}
exports.getGraphDimensions = getGraphDimensions;
function univ2DimensionAdapter(params, meta) {
    var graphs = getGraphDimensions(params);
    var adapter = {
        adapter: Object.keys(params.graphUrls).reduce(function (acc, chain) {
            var _a;
            var _b, _c, _d;
            return __assign(__assign({}, acc), (_a = {}, _a[chain] = {
                fetch: graphs(chain),
                start: (0, getStartTimestamp_1.getStartTimestamp)({
                    endpoints: params.graphUrls,
                    chain: chain,
                    volumeField: (_b = params.dailyVolume) === null || _b === void 0 ? void 0 : _b.field,
                    dailyDataField: ((_c = params.dailyVolume) === null || _c === void 0 ? void 0 : _c.factory) + "s",
                    dateField: (_d = params.dailyVolume) === null || _d === void 0 ? void 0 : _d.dateField,
                }),
                meta: meta,
            }, _a));
        }, {}),
        version: 2
    };
    return adapter;
}
exports.univ2DimensionAdapter = univ2DimensionAdapter;
function wrapGraphError(e) {
    var _a, _b, _c, _d;
    var message = (_d = (_c = (_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message) !== null && _d !== void 0 ? _d : e.message;
    return new Error(shortenString(message));
    function shortenString(str, maxLength) {
        if (maxLength === void 0) { maxLength = 420; }
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    }
}
exports.wrapGraphError = wrapGraphError;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
