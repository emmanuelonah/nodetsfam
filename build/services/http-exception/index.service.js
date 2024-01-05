"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(statusCode, message) {
        super(message);
        Object.assign(this, { success: false, statusCode, message });
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=index.service.js.map