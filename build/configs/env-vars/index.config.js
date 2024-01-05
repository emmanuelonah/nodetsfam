"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const env_var_1 = __importDefault(require("env-var"));
dotenv_1.default.config();
exports.envVars = {
    appName: env_var_1.default.get('NODETSFAM_SERVER_PORT').required().asPortNumber(),
    serverPort: env_var_1.default.get('NODETSFAM_SERVER_PORT').required().asPortNumber(),
    serverUrl: env_var_1.default.get('NODETSFAM_SERVER_URL').required().asUrlString(),
    serverDbUri: env_var_1.default.get('NODETSFAM_SERVER_DB_URI').required().asUrlString(),
    clientPort: env_var_1.default.get('NODETSFAM_CLIENT_PORT').required().asPortNumber(),
    clientUrl: env_var_1.default.get('NODETSFAM_CLIENT_URL').required().asUrlString(),
};
//# sourceMappingURL=index.config.js.map