"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const index_service_1 = require("../../services/http-exception/index.service");
function errorHandler(err, _req, res, _next) {
    console.error(err);
    console.error(err.name);
    console.error(Object.keys(err));
    let error = Object.assign({}, err);
    error.message = err.message;
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((e) => e.message);
        error = new index_service_1.HttpException(400, message.toString().replace('Path', ''));
    }
    if (err.name === 'CastError') {
        const message = 'Invalid Parameter';
        error = new index_service_1.HttpException(400, message);
    }
    if (err.code === 11000) {
        const message = Object.keys(err.keyValue).map((e) => e);
        error = new index_service_1.HttpException(400, `${message.toString()} already exists`);
    }
    return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode,
        message: error.message || 'Server Error',
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=index.middleware.js.map