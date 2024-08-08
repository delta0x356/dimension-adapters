"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniswapDateId = exports.handle200Errors = exports.getUniqStartOfTodayTimestamp = void 0;
var getUniqStartOfTodayTimestamp = function (date) {
    if (date === void 0) { date = new Date(); }
    var date_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    var startOfDay = new Date(date_utc);
    var timestamp = startOfDay.getTime() / 1000;
    return Math.floor(timestamp / 86400) * 86400;
};
exports.getUniqStartOfTodayTimestamp = getUniqStartOfTodayTimestamp;
// Some graphs return a non supported content-type by graphql so success responses are being thrown as errors
var handle200Errors = function (e) {
    var _a, _b, _c;
    var statusCode = (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status;
    if (statusCode >= 200 && statusCode < 300 && typeof ((_b = e === null || e === void 0 ? void 0 : e.response) === null || _b === void 0 ? void 0 : _b.error) === 'string') {
        return (_c = JSON.parse(e.response.error)) === null || _c === void 0 ? void 0 : _c.data;
    }
    throw e;
};
exports.handle200Errors = handle200Errors;
// To get ID for daily data https://docs.uniswap.org/protocol/V2/reference/API/entities
var getUniswapDateId = function (date) { return (0, exports.getUniqStartOfTodayTimestamp)(date) / 86400; };
exports.getUniswapDateId = getUniswapDateId;
