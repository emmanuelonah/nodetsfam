"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_service_1 = require("./index.service");
describe('response', () => {
    it('should return response data-structure', () => {
        expect((0, index_service_1.response)({ name: 'Foo Bar Baz' })).toMatchObject({
            success: true,
            data: { name: 'Foo Bar Baz' },
        });
    });
});
//# sourceMappingURL=index.test.js.map