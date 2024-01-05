"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_config_1 = require("./index.config");
describe('envVars', () => {
    it('should return configuration object', () => {
        expect(typeof index_config_1.envVars.appName).toBe('NodeTsFam');
        expect(typeof index_config_1.envVars.serverDbUri).toBe('string');
        expect(typeof index_config_1.envVars.serverPort.toString).toBe('number');
        expect(index_config_1.envVars.serverUrl).toContain(index_config_1.envVars.serverPort);
        expect(typeof index_config_1.envVars.clientPort.toString).toBe('number');
        expect(index_config_1.envVars.clientUrl).toContain(index_config_1.envVars.clientPort);
    });
});
//# sourceMappingURL=index.test.js.map