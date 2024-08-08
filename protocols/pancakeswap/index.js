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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../adapters/types");
var chains_1 = require("../../helpers/chains");
var disabledAdapter_1 = require("../../helpers/disabledAdapter");
var getUniSubgraph_1 = require("../../helpers/getUniSubgraph");
var sdk = require("@defillama/sdk");
var fetchURL_1 = require("../../utils/fetchURL");
var env_1 = require("../../helpers/env");
var endpoints = (_a = {},
    _a[chains_1.CHAIN.BSC] = "https://proxy-worker.pancake-swap.workers.dev/bsc-exchange",
    _a[chains_1.CHAIN.ETHEREUM] = sdk.graph.modifyEndpoint('9opY17WnEPD4REcC43yHycQthSeUMQE26wyoeMjZTLEx'),
    _a[chains_1.CHAIN.POLYGON_ZKEVM] = "https://api.studio.thegraph.com/query/45376/exchange-v2-polygon-zkevm/version/latest",
    _a[chains_1.CHAIN.ERA] = "https://api.studio.thegraph.com/query/45376/exchange-v2-zksync/version/latest",
    _a[chains_1.CHAIN.ARBITRUM] = sdk.graph.modifyEndpoint('EsL7geTRcA3LaLLM9EcMFzYbUgnvf8RixoEEGErrodB3'),
    _a[chains_1.CHAIN.LINEA] = "https://graph-query.linea.build/subgraphs/name/pancakeswap/exhange-v2",
    _a[chains_1.CHAIN.BASE] = "https://api.studio.thegraph.com/query/45376/exchange-v2-base/version/latest",
    _a[chains_1.CHAIN.OP_BNB] = "".concat((0, env_1.getEnv)('PANCAKESWAP_OPBNB_SUBGRAPH'), "/subgraphs/name/pancakeswap/exchange-v2"),
    _a);
var stablesSwapEndpoints = (_b = {},
    _b[chains_1.CHAIN.BSC] = sdk.graph.modifyEndpoint('C5EuiZwWkCge7edveeMcvDmdr7jjc1zG4vgn8uucLdfz'),
    _b[chains_1.CHAIN.ARBITRUM] = sdk.graph.modifyEndpoint('y7G5NUSq5ngsLH2jBGQajjxuLgW1bcqWiBqKmBk3MWM'),
    _b);
var v3Endpoint = (_c = {},
    _c[chains_1.CHAIN.BSC] = sdk.graph.modifyEndpoint('Hv1GncLY5docZoGtXjo4kwbTvxm3MAhVZqBZE4sUT9eZ'),
    _c[chains_1.CHAIN.ETHEREUM] = sdk.graph.modifyEndpoint('CJYGNhb7RvnhfBDjqpRnD3oxgyhibzc7fkAMa38YV3oS'),
    _c[chains_1.CHAIN.POLYGON_ZKEVM] = "https://api.studio.thegraph.com/query/45376/exchange-v3-polygon-zkevm/version/latest",
    _c[chains_1.CHAIN.ERA] = "https://api.studio.thegraph.com/query/45376/exchange-v3-zksync/version/latest",
    _c[chains_1.CHAIN.ARBITRUM] = sdk.graph.modifyEndpoint('251MHFNN1rwjErXD2efWMpNS73SANZN8Ua192zw6iXve'),
    _c[chains_1.CHAIN.LINEA] = "https://graph-query.linea.build/subgraphs/name/pancakeswap/exchange-v3-linea",
    _c[chains_1.CHAIN.BASE] = "https://api.studio.thegraph.com/query/45376/exchange-v3-base/version/latest",
    _c[chains_1.CHAIN.OP_BNB] = "".concat((0, env_1.getEnv)('PANCAKESWAP_OPBNB_SUBGRAPH'), "/subgraphs/name/pancakeswap/exchange-v3"),
    _c);
var VOLUME_USD = "volumeUSD";
var graphs = (0, getUniSubgraph_1.getGraphDimensions)({
    graphUrls: endpoints,
    graphRequestHeaders: (_d = {},
        _d[chains_1.CHAIN.BSC] = {
            "origin": "https://pancakeswap.finance",
        },
        _d),
    totalVolume: {
        factory: "pancakeFactories"
    },
    dailyVolume: {
        factory: "pancakeDayData"
    },
    feesPercent: {
        type: "volume",
        Fees: 0.25,
        ProtocolRevenue: 0.0225,
        HoldersRevenue: 0.0575,
        UserFees: 0.25,
        SupplySideRevenue: 0.17,
        Revenue: 0.08
    }
});
var graphsStableSwap = (0, getUniSubgraph_1.getGraphDimensions)({
    graphUrls: stablesSwapEndpoints,
    totalVolume: {
        factory: "factories"
    },
    dailyVolume: {
        factory: "pancakeDayData"
    },
    feesPercent: {
        type: "volume",
        Fees: 0.25, // 0.25% volume
        ProtocolRevenue: 0.025, // 10% fees
        HoldersRevenue: 0.1, // 40% fees
        UserFees: 0.25, // 25% volume
        SupplySideRevenue: 0.125, // 50% fees
        Revenue: 0.0225 // 50% fees
    }
});
var v3Graph = (0, getUniSubgraph_1.getGraphDimensions)({
    graphUrls: v3Endpoint,
    totalVolume: {
        factory: "factories",
    },
    dailyVolume: {
        factory: "pancakeDayData",
        field: VOLUME_USD
    },
    totalFees: {
        factory: "factories",
    },
    dailyFees: {
        factory: "pancakeDayData",
        field: "feesUSD"
    },
});
var startTimes = (_e = {},
    _e[chains_1.CHAIN.ETHEREUM] = 1664236800,
    _e[chains_1.CHAIN.BSC] = 1619136000,
    _e[chains_1.CHAIN.POLYGON_ZKEVM] = 1687910400,
    _e[chains_1.CHAIN.ERA] = 1690156800,
    _e[chains_1.CHAIN.ARBITRUM] = 1691452800,
    _e[chains_1.CHAIN.LINEA] = 1692835200,
    _e[chains_1.CHAIN.BASE] = 1693440000,
    _e[chains_1.CHAIN.OP_BNB] = 1695081600,
    _e);
var stableTimes = (_f = {},
    _f[chains_1.CHAIN.BSC] = 1663718400,
    _f[chains_1.CHAIN.ARBITRUM] = 1705363200,
    _f);
var v3StartTimes = (_g = {},
    _g[chains_1.CHAIN.BSC] = 1680307200,
    _g[chains_1.CHAIN.ETHEREUM] = 1680307200,
    _g[chains_1.CHAIN.POLYGON_ZKEVM] = 1686182400,
    _g[chains_1.CHAIN.ERA] = 1690156800,
    _g[chains_1.CHAIN.ARBITRUM] = 1691452800,
    _g[chains_1.CHAIN.LINEA] = 1692835200,
    _g[chains_1.CHAIN.BASE] = 1692576000,
    _g[chains_1.CHAIN.OP_BNB] = 1693440000,
    _g);
var methodology = {
    UserFees: "User pays 0.25% fees on each swap.",
    ProtocolRevenue: "Treasury receives 0.0225% of each swap.",
    SupplySideRevenue: "LPs receive 0.17% of the fees.",
    HoldersRevenue: "0.0575% is used to facilitate CAKE buyback and burn.",
    Revenue: "All revenue generated comes from user fees.",
    Fees: "All fees comes from the user."
};
var account = '0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa';
var getToken = function (i) { return i.split('<')[1].replace('>', '').split(', '); };
var APTOS_PRC = 'https://aptos-mainnet.pontem.network';
var getResources = function (account) { return __awaiter(void 0, void 0, void 0, function () {
    var data, lastData, cursor, url, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = [];
                _a.label = 1;
            case 1:
                url = "".concat(APTOS_PRC, "/v1/accounts/").concat(account, "/resources?limit=9999");
                if (cursor)
                    url += '&start=' + cursor;
                return [4 /*yield*/, (0, fetchURL_1.httpGet)(url, undefined, { withMetadata: true })];
            case 2:
                res = _a.sent();
                lastData = res.data;
                data.push.apply(data, lastData);
                cursor = res.headers['x-aptos-cursor'];
                _a.label = 3;
            case 3:
                if (lastData.length === 9999) return [3 /*break*/, 1];
                _a.label = 4;
            case 4: return [2 /*return*/, data];
        }
    });
}); };
var fetchVolume = function (_a) {
    var timestamp = _a.endTimestamp, createBalances = _a.createBalances;
    return __awaiter(void 0, void 0, void 0, function () {
        var fromTimestamp, toTimestamp, account_resource, pools, creation_num, logs_swap, numberOfTrade, balances;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    fromTimestamp = timestamp - 86400;
                    toTimestamp = timestamp;
                    return [4 /*yield*/, getResources(account)];
                case 1:
                    account_resource = (_c.sent());
                    pools = account_resource.filter(function (e) { var _a; return (_a = e.type) === null || _a === void 0 ? void 0 : _a.includes('swap::PairEventHolder'); })
                        .map(function (e) {
                        var _a = getToken(e.type), token0 = _a[0], token1 = _a[1];
                        return {
                            type: e.type,
                            token0: token0,
                            token1: token1,
                            swap_events: {
                                counter: e.data.swap.counter,
                                creation_num: e.data.swap.guid.id.creation_num,
                            },
                            timestamp: e.data.timestamp,
                            counter: Number(e.data.swap.counter),
                        };
                    }).sort(function (a, b) { return b.counter - a.counter; });
                    creation_num = [14, 767, 702, 12, 622, 757, 1077, 1092, 5708, 2, 712, 3196];
                    return [4 /*yield*/, Promise.all(pools
                            .filter(function (e) { return creation_num.includes(Number(e.swap_events.creation_num)); })
                            .map(function (p) { return getSwapEvent(p, fromTimestamp, toTimestamp); }))];
                case 2:
                    logs_swap = (_c.sent()).flat();
                    numberOfTrade = {};
                    // debugger
                    __spreadArray([], new Set(logs_swap.map(function (e) { return e.user; })), true).forEach(function (e) {
                        numberOfTrade[e] = {};
                        numberOfTrade[e]['user'] = e;
                        numberOfTrade[e]['count'] = 0;
                        numberOfTrade[e]['volume'] = 0;
                    });
                    balances = createBalances();
                    logs_swap.map(function (e) {
                        var _a = getToken(e.type), token0 = _a[0], token1 = _a[1];
                        balances.add(token0, e.amount_x_out);
                        balances.add(token1, e.amount_y_out);
                    });
                    _b = {};
                    return [4 /*yield*/, balances.getUSDString()];
                case 3: return [2 /*return*/, (_b.dailyVolume = _c.sent(),
                        _b.dailyFees = "0",
                        _b)];
            }
        });
    });
};
var getSwapEvent = function (pool, fromTimestamp, toTimestamp) { return __awaiter(void 0, void 0, void 0, function () {
    var limit, swap_events, start, _loop_1, state_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                limit = 100;
                swap_events = [];
                start = (pool.swap_events.counter - limit) < 0 ? 0 : pool.swap_events.counter - limit;
                _loop_1 = function () {
                    var getEventByCreation, event_1, listSequence, lastMin_1, lastVision, urlBlock, block, lastTimestamp, lastTimestampNumber, e_1;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (start < 0)
                                    return [2 /*return*/, "break"];
                                getEventByCreation = "".concat(APTOS_PRC, "/v1/accounts/").concat(account, "/events/").concat(pool.swap_events.creation_num, "?start=").concat(start, "&limit=").concat(limit);
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, (0, fetchURL_1.httpGet)(getEventByCreation)];
                            case 2:
                                event_1 = (_c.sent());
                                listSequence = event_1.map(function (e) { return Number(e.sequence_number); });
                                lastMin_1 = Math.min.apply(Math, listSequence);
                                if (lastMin_1 >= Infinity || lastMin_1 <= -Infinity)
                                    return [2 /*return*/, "break"];
                                lastVision = (_a = event_1.find(function (e) { return Number(e.sequence_number) === lastMin_1; })) === null || _a === void 0 ? void 0 : _a.version;
                                urlBlock = "".concat(APTOS_PRC, "/v1/blocks/by_version/").concat(lastVision);
                                return [4 /*yield*/, (0, fetchURL_1.httpGet)(urlBlock)];
                            case 3:
                                block = (_c.sent());
                                lastTimestamp = toUnixTime(block.block_timestamp);
                                lastTimestampNumber = lastTimestamp;
                                if (lastTimestampNumber >= fromTimestamp && lastTimestampNumber <= toTimestamp) {
                                    swap_events.push.apply(swap_events, event_1);
                                }
                                if (lastTimestampNumber < fromTimestamp) {
                                    return [2 /*return*/, "break"];
                                }
                                if (start === 0)
                                    return [2 /*return*/, "break"];
                                start = lastMin_1 - (limit + 1) > 0 ? lastMin_1 - (limit + 1) : 0;
                                return [3 /*break*/, 5];
                            case 4:
                                e_1 = _c.sent();
                                return [2 /*return*/, "break"];
                            case 5: return [2 /*return*/];
                        }
                    });
                };
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [5 /*yield**/, _loop_1()];
            case 2:
                state_1 = _b.sent();
                if (state_1 === "break")
                    return [3 /*break*/, 3];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/, swap_events.map(function (e) {
                    return __assign(__assign(__assign({}, e), { type: e.type }), e.data);
                })];
        }
    });
}); };
var toUnixTime = function (timestamp) { return Number((Number(timestamp) / 1e6).toString().split('.')[0]); };
var adapter = {
    version: 2,
    breakdown: {
        v1: (_h = {},
            _h[types_1.DISABLED_ADAPTER_KEY] = disabledAdapter_1.default,
            _h[chains_1.CHAIN.BSC] = {
                fetch: function (_a) {
                    var startTimestamp = _a.startTimestamp;
                    return __awaiter(void 0, void 0, void 0, function () {
                        var totalVolume;
                        return __generator(this, function (_b) {
                            totalVolume = 103394400000;
                            return [2 /*return*/, {
                                    totalVolume: "".concat(totalVolume),
                                    timestamp: startTimestamp
                                }];
                        });
                    });
                },
                start: 1680307200,
            },
            _h),
        v2: Object.keys(endpoints).reduce(function (acc, chain) {
            acc[chain] = {
                fetch: graphs(chain),
                start: startTimes[chain],
                meta: {
                    methodology: methodology
                }
            };
            return acc;
        }, {}),
        v3: Object.keys(v3Endpoint).reduce(function (acc, chain) {
            acc[chain] = {
                fetch: function (options) { return __awaiter(void 0, void 0, void 0, function () {
                    var v3stats;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, v3Graph(chain)(options)];
                            case 1:
                                v3stats = _a.sent();
                                if (chain === chains_1.CHAIN.ETHEREUM)
                                    v3stats.totalVolume = (Number(v3stats.totalVolume) - 7385565913).toString();
                                return [2 /*return*/, v3stats];
                        }
                    });
                }); },
                start: v3StartTimes[chain],
            };
            return acc;
        }, {}),
        stableswap: Object.keys(stablesSwapEndpoints).reduce(function (acc, chain) {
            acc[chain] = {
                fetch: graphsStableSwap(chain),
                start: stableTimes[chain],
                meta: {
                    methodology: {
                        UserFees: "User pays 0.25% fees on each swap.",
                        ProtocolRevenue: "Treasury receives 10% of the fees.",
                        SupplySideRevenue: "LPs receive 50% of the fees.",
                        HoldersRevenue: "A 40% of the fees is used to facilitate CAKE buyback and burn.",
                        Revenue: "Revenue is 50% of the fees paid by users.",
                        Fees: "All fees comes from the user fees, which is 025% of each trade."
                    }
                }
            };
            return acc;
        }, {}),
    },
};
adapter.breakdown.v2[chains_1.CHAIN.APTOS] = {
    fetch: fetchVolume,
    start: 1699488000,
    // runAtCurrTime: true,
};
exports.default = adapter;
// Add this at the end of the file, after the existing code
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var currentTimestamp, oneDayAgo, totalVolume, _i, _a, chain, result, _b, _c, chain, result, _d, _e, chain, result, aptosResult;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    currentTimestamp = Math.floor(Date.now() / 1000);
                    oneDayAgo = currentTimestamp - 86400;
                    console.log("Fetching PancakeSwap daily volume...");
                    totalVolume = 0;
                    _i = 0, _a = Object.keys(adapter.breakdown.v2);
                    _f.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    chain = _a[_i];
                    if (!(chain !== types_1.DISABLED_ADAPTER_KEY && chain !== chains_1.CHAIN.APTOS)) return [3 /*break*/, 3];
                    return [4 /*yield*/, adapter.breakdown.v2[chain].fetch({ endTimestamp: oneDayAgo })];
                case 2:
                    result = _f.sent();
                    if (result.dailyVolume) {
                        totalVolume += Number(result.dailyVolume);
                        console.log("V2 ".concat(chain, " daily volume: $").concat(Number(result.dailyVolume).toLocaleString()));
                    }
                    _f.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    _b = 0, _c = Object.keys(adapter.breakdown.v3);
                    _f.label = 5;
                case 5:
                    if (!(_b < _c.length)) return [3 /*break*/, 8];
                    chain = _c[_b];
                    return [4 /*yield*/, adapter.breakdown.v3[chain].fetch({ endTimestamp: oneDayAgo })];
                case 6:
                    result = _f.sent();
                    if (result.dailyVolume) {
                        totalVolume += Number(result.dailyVolume);
                        console.log("V3 ".concat(chain, " daily volume: $").concat(Number(result.dailyVolume).toLocaleString()));
                    }
                    _f.label = 7;
                case 7:
                    _b++;
                    return [3 /*break*/, 5];
                case 8:
                    _d = 0, _e = Object.keys(adapter.breakdown.stableswap);
                    _f.label = 9;
                case 9:
                    if (!(_d < _e.length)) return [3 /*break*/, 12];
                    chain = _e[_d];
                    return [4 /*yield*/, adapter.breakdown.stableswap[chain].fetch({ endTimestamp: oneDayAgo })];
                case 10:
                    result = _f.sent();
                    if (result.dailyVolume) {
                        totalVolume += Number(result.dailyVolume);
                        console.log("Stableswap ".concat(chain, " daily volume: $").concat(Number(result.dailyVolume).toLocaleString()));
                    }
                    _f.label = 11;
                case 11:
                    _d++;
                    return [3 /*break*/, 9];
                case 12: return [4 /*yield*/, adapter.breakdown.v2[chains_1.CHAIN.APTOS].fetch({ endTimestamp: oneDayAgo })];
                case 13:
                    aptosResult = _f.sent();
                    if (aptosResult.dailyVolume) {
                        totalVolume += Number(aptosResult.dailyVolume);
                        console.log("Aptos daily volume: $".concat(Number(aptosResult.dailyVolume).toLocaleString()));
                    }
                    console.log("\nTotal PancakeSwap daily volume: $".concat(totalVolume.toLocaleString()));
                    return [2 /*return*/];
            }
        });
    });
}
// Run the main function
main().catch(console.error);
