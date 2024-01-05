"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const index_service_1 = require("./mongo/index.service");
class Db {
    constructor() {
        (0, index_service_1.initializeMongoDb)();
    }
    async connect(onSuccess) {
        await (0, index_service_1.connectMongoDb)(onSuccess);
    }
    async disconnect() {
        await (0, index_service_1.disconnectMongoDb)();
    }
}
exports.db = new Db();
//# sourceMappingURL=index.db.js.map