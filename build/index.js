"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const app_1 = __importDefault(require("./app"));
const index_db_1 = require("./db/index.db");
const configs_1 = require("./configs");
async function startServer() {
    await index_db_1.db.connect(() => {
        const httpServer = https_1.default.createServer({
            key: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'configs', 'key.pem')),
            cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'configs', 'cert.pem')),
        }, app_1.default);
        httpServer.listen(configs_1.envVars.serverPort, () => {
            console.log(`${configs_1.envVars.appName} SERVER STARTED`.blue.bold);
            console.log(`
      //\\
      |🤖|
    //____\\
      | P |
      | O |
      | W |
      | E |
      | R |
      | E |
      | D |
      |   |
      | B |
      | Y |
      |   |
      | A |
      | F |
      | R |
      | I |
      | C |
      | L |
      | I |
      | T |
      | E |
    //|   |\\
   // |   | \\
  //__|___|__\\
     //_\\/_\\
 `.green);
            console.log(`${configs_1.envVars.serverUrl}`.white.underline);
        });
    });
}
startServer();
//# sourceMappingURL=index.js.map