"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterType = exports.ProtocolType = exports.DISABLED_ADAPTER_KEY = void 0;
var sdk_1 = require("@defillama/sdk");
var getChainBlocks = sdk_1.util.blocks.getChainBlocks;
exports.DISABLED_ADAPTER_KEY = 'DISABLED_ADAPTER';
var ProtocolType;
(function (ProtocolType) {
    ProtocolType["CHAIN"] = "chain";
    ProtocolType["PROTOCOL"] = "protocol";
    ProtocolType["COLLECTION"] = "collection";
})(ProtocolType || (exports.ProtocolType = ProtocolType = {}));
var AdapterType;
(function (AdapterType) {
    AdapterType["FEES"] = "fees";
    AdapterType["DEXS"] = "dexs";
    AdapterType["INCENTIVES"] = "incentives";
    AdapterType["AGGREGATORS"] = "aggregators";
    AdapterType["DERIVATIVES"] = "derivatives";
    AdapterType["OPTIONS"] = "options";
    AdapterType["PROTOCOLS"] = "protocols";
    AdapterType["ROYALTIES"] = "royalties";
    AdapterType["AGGREGATOR_DERIVATIVES"] = "aggregator-derivatives";
})(AdapterType || (exports.AdapterType = AdapterType = {}));
