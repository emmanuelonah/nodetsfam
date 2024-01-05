"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoHelpers = void 0;
class MongoHelpers {
    constructor() {
        this._idToId = (schema) => {
            schema.virtual('id').get(function () {
                return this._id.toHexString();
            });
            schema.set('toJSON', { virtuals: true });
        };
    }
}
exports.mongoHelpers = new MongoHelpers();
//# sourceMappingURL=index.helper.js.map