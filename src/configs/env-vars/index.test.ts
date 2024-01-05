import { envVars } from './index.config';

describe('envVars', () => {
    it('should return configuration object', () => {
        expect(typeof envVars.appName).toBe('string');
        expect(typeof envVars.mongoDbUri).toBe('string');
        expect(typeof envVars.serverPort).toBe('number');
        expect(typeof envVars.serverUrl).toBe('string');
        expect(typeof envVars.clientPort).toBe('number');
        expect(typeof envVars.clientUrl).toBe('string');
    });
});
