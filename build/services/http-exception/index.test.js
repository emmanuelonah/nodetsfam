"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_service_1 = require("./index.service");
describe('HttpException', () => {
    it('should return the correct error object', () => {
        expect(new index_service_1.HttpException(404, 'Resource not found')).toMatchObject({
            success: false,
            statusCode: 404,
            message: 'Resource not found',
        });
    });
    it('should return error object with a default empty details', () => {
        expect(new index_service_1.HttpException(404, 'Resource not found')).toMatchObject({
            success: false,
            statusCode: 404,
            message: 'Resource not found',
        });
    });
});
//# sourceMappingURL=index.test.js.map