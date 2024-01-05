"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveClient = void 0;
const path_1 = __importDefault(require("path"));
function serveClient(_req, res, _next) {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'public', 'index.html'));
}
exports.serveClient = serveClient;
//# sourceMappingURL=index.middleware.js.map