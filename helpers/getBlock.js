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
exports.getBlocks = exports.canGetBlock = exports.getBlock = void 0;
var general_1 = require("@defillama/sdk/build/general");
var chains_1 = require("./chains");
var sdk = require("@defillama/sdk");
var fetchURL_1 = require("../utils/fetchURL");
var retry = require("async-retry");
var blacklistedChains = [
    "tron",
    "juno",
    "cardano",
    "litecoin",
    "bitcoin",
    "tezos",
    "solana",
    "elrond",
    "defichain",
    "stacks",
    "KARURA",
    "hedera",
    "eos",
    "icon",
    "stellar",
    "algorand",
    "mixin",
    "thorchain",
    "flow",
    "aptos",
    "polkadex",
    "neo",
    "phantasma",
    "starknet",
    "carbon",
    "vechain",
    "wax",
    "injective",
    "ton",
    "obyte",
    "sora",
    "cosmos",
    "hydra",
    "icp",
    "hydradx",
    "osmosis",
    "ergo",
    "radixdlt",
    "near",
    "persistence",
    "sui",
    "neutron",
    "terra2"
];
function getBlock(timestamp, chain, chainBlocks) {
    if (chainBlocks === void 0) { chainBlocks = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var block, e_1, _a, _b, _c, _d, _e, _f, _g;
        var _this = this;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (chain === chains_1.CHAIN.DOGECHAIN)
                        throw new Error("DOGECHAIN not supported");
                    if (blacklistedChains.includes(chain)) {
                        return [2 /*return*/, null];
                    }
                    if (chainBlocks[chain] !== undefined)
                        return [2 /*return*/, chainBlocks[chain]];
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 3, , 4]);
                    if (chain === chains_1.CHAIN.WAVES)
                        timestamp = Math.floor(timestamp * 1000);
                    return [4 /*yield*/, sdk.blocks.getBlockNumber(chain, timestamp)];
                case 2:
                    block = _h.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _h.sent();
                    console.log('error fetching block', e_1);
                    if (chain === chains_1.CHAIN.SEI) {
                        return [2 /*return*/, null];
                    }
                    return [3 /*break*/, 4];
                case 4:
                    if (block) {
                        chainBlocks[chain] = block;
                        return [2 /*return*/, block];
                    }
                    if (!(chain === chains_1.CHAIN.CELO)) return [3 /*break*/, 6];
                    _a = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://explorer.celo.org/api?module=block&action=getblocknobytime&timestamp=" + timestamp + "&closest=before").catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.blockNumber];
                                }
                            });
                        }); })];
                case 5:
                    block = _a.apply(void 0, [(_h.sent())]);
                    return [3 /*break*/, 19];
                case 6:
                    if (!(chain === chains_1.CHAIN.KAVA)) return [3 /*break*/, 8];
                    _b = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://explorer.kava.io/api?module=block&action=getblocknobytime&timestamp=".concat(timestamp, "&closest=before")).catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.blockNumber];
                                }
                            });
                        }); })];
                case 7:
                    block = _b.apply(void 0, [(_h.sent())]);
                    return [3 /*break*/, 19];
                case 8:
                    if (!(chain === chains_1.CHAIN.ONUS)) return [3 /*break*/, 10];
                    _c = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://explorer.onuschain.io/api?module=block&action=getblocknobytime&timestamp=".concat(timestamp, "&closest=before")).catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.blockNumber];
                                }
                            });
                        }); })];
                case 9:
                    block = _c.apply(void 0, [(_h.sent())]);
                    return [3 /*break*/, 19];
                case 10:
                    if (!(chain === chains_1.CHAIN.POLYGON_ZKEVM || chain === chains_1.CHAIN.VISION || chain === chains_1.CHAIN.ERA)) return [3 /*break*/, 11];
                    return [2 /*return*/, sdk.api.util.lookupBlock(timestamp, { chain: chain }).then(function (blockData) { return blockData.block; })]; // TODO after get block support chain  polygon_zkevm then swith to use api https://coins.llama.fi/block
                case 11:
                    if (!(chain === chains_1.CHAIN.WAVES)) return [3 /*break*/, 13];
                    _d = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://nodes.wavesnodes.com/blocks/heightByTimestamp/".concat((timestamp * 1000))).catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.height];
                                }
                            });
                        }); }, { retries: 3 })];
                case 12:
                    block = _d.apply(void 0, [(_h.sent())]);
                    return [3 /*break*/, 19];
                case 13:
                    if (!(chain === chains_1.CHAIN.BASE)) return [3 /*break*/, 15];
                    _e = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://base.blockscout.com/api?module=block&action=getblocknobytime&timestamp=".concat(timestamp, "&closest=before")).catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.blockNumber];
                                }
                            });
                        }); })];
                case 14:
                    block = _e.apply(void 0, [(_h.sent())]);
                    return [3 /*break*/, 19];
                case 15:
                    if (!(chain === chains_1.CHAIN.SCROLL)) return [3 /*break*/, 17];
                    _f = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://blockscout.scroll.io/api?module=block&action=getblocknobytime&timestamp=".concat(timestamp, "&closest=before")).catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.blockNumber];
                                }
                            });
                        }); })];
                case 16:
                    block = _f.apply(void 0, [(_h.sent())]);
                    return [3 /*break*/, 19];
                case 17:
                    _g = Number;
                    return [4 /*yield*/, retry(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, (0, fetchURL_1.httpGet)("https://coins.llama.fi/block/".concat(chain, "/").concat(timestamp), { timeout: 10000 }).catch(function (e) {
                                            throw new Error("Error getting block: ".concat(chain, " ").concat(timestamp, " ").concat(e.message));
                                        })];
                                    case 1: return [2 /*return*/, (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.height];
                                }
                            });
                        }); }, { retries: 1 })];
                case 18:
                    block = _g.apply(void 0, [(_h.sent())]);
                    _h.label = 19;
                case 19:
                    if (block)
                        chainBlocks[chain] = block;
                    return [2 /*return*/, block
                        // https://base.blockscout.com
                        // https://explorer.kava.io
                        //return sdk.api.util.lookupBlock(timestamp, { chain }).then(blockData => blockData.block)
                    ];
            }
        });
    });
}
exports.getBlock = getBlock;
function getBlocks(chain, timestamps) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.all(timestamps.map(function (t) { return getBlock(t, chain, {}); }))];
        });
    });
}
exports.getBlocks = getBlocks;
var canGetBlock = function (chain) { return Object.keys(general_1.providers).includes(chain); };
exports.canGetBlock = canGetBlock;
