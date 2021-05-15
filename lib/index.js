"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uni_sdk_1 = __importDefault(require("uni-sdk"));
class UniSMS {
    constructor(config) {
        this.client = new uni_sdk_1.default(config);
    }
    send(params) {
        return this.client.request('sms.message.send', params);
    }
}
exports.default = UniSMS;
//# sourceMappingURL=index.js.map