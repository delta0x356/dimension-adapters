"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = exports.ENV_KEYS = void 0;
var BOOL_KEYS = [
    'LLAMA_DEBUG_MODE',
];
var DEFAULTS = {
    ANKR_API_KEY: '79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01',
    ZETA_RPC: "https://zetachain-evm.blockpi.network/v1/rpc/public,https://zetachain-mainnet-archive.allthatnode.com:8545",
    SVM_RPC: "https://rpc.cosvm.net",
    XLAYER_RPC: "https://xlayerrpc.okx.com",
    BITLAYER_RPC: "https://rpc-bitlayer.rockx.com",
    PLANQ_RPC: "https://planq-rpc.nodies.app,https://jsonrpc.planq.nodestake.top",
};
exports.ENV_KEYS = new Set(__spreadArray(__spreadArray(__spreadArray([], BOOL_KEYS, true), Object.keys(DEFAULTS), true), [
    'PANCAKESWAP_OPBNB_SUBGRAPH',
    'INDEXA_DB',
    'FLIPSIDE_API_KEY',
    'DUNE_API_KEYS',
    'ALLIUM_API_KEY',
    'BIT_QUERY_API_KEY',
    'SMARDEX_SUBGRAPH_API_KEY',
    'PROD_VYBE_API_KEY',
    'PERENNIAL_V2_SUBGRAPH_API_KEY',
    'LEVANA_API_KEY',
    'ZEROx_API_KEY',
    'ZEROX_API_KEY',
    'AGGREGATOR_0X_API_KEY',
    'SUI_RPC'
], false));
// This is done to support both ZEROx_API_KEY and ZEROX_API_KEY
if (!process.env.ZEROX_API_KEY)
    process.env.ZEROX_API_KEY = process.env.ZEROx_API_KEY;
Object.keys(DEFAULTS).forEach(function (i) {
    if (!process.env[i])
        process.env[i] = DEFAULTS[i]; // this is done to set the chain RPC details in @defillama/sdk
});
function getEnv(key) {
    var _a;
    if (!exports.ENV_KEYS.has(key))
        throw new Error("Unknown env key: ".concat(key));
    var value = (_a = process.env[key]) !== null && _a !== void 0 ? _a : DEFAULTS[key];
    return BOOL_KEYS.includes(key) ? !!value : value;
}
exports.getEnv = getEnv;
