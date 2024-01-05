"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const configs_1 = require("./configs");
const routes_1 = require("./routes");
const services_1 = require("./services");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: configs_1.envVars.clientUrl }));
app.use((0, helmet_1.default)());
app.use((0, express_rate_limit_1.default)({
    limit: 50,
    message: new services_1.HttpException(429, 'Request limit reach. Retry later.'),
}));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use('/api/v1', routes_1.apiRouterV1);
app.use('/*', middlewares_1.serveClient);
app.use(middlewares_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map