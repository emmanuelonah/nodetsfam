"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectMongoDb = exports.connectMongoDb = exports.initializeMongoDb = void 0;
require("colors");
const mongoose_1 = __importDefault(require("mongoose"));
const configs_1 = require("../../configs");
function initializeMongoDb() {
    mongoose_1.default.connection.on('open', () => {
        console.info(`🔑🔑🔑 Db connected on: ${configs_1.envVars.serverDbUri}`.green.underline);
    });
    mongoose_1.default.connection.on('error', (error) => {
        console.error(`🔒🔒🔒 Failed to connect to DB: ${error}`.red);
    });
    mongoose_1.default.connection.on('disconnected', () => {
        console.info(`🔐🔐🔐 Db disconnected`);
    });
}
exports.initializeMongoDb = initializeMongoDb;
async function connectMongoDb(onSuccess) {
    try {
        await mongoose_1.default.connect(configs_1.envVars.serverDbUri);
        onSuccess();
    }
    catch (error) {
        console.error(error);
    }
}
exports.connectMongoDb = connectMongoDb;
async function disconnectMongoDb() {
    try {
        await mongoose_1.default.disconnect();
        console.info('Successfully disconnected db');
    }
    catch (error) {
        console.error(error);
    }
}
exports.disconnectMongoDb = disconnectMongoDb;
//# sourceMappingURL=index.service.js.map