import env from 'dotenv';
import envVar from 'env-var';

env.config();

export const envVars = {
    appName: envVar.get('NODETSFAM_APP_NAME').asString() || 'NodeTsFam',

    serverPort: envVar.get('NODETSFAM_SERVER_PORT').asPortNumber() || 8080,
    serverUrl: envVar.get('NODETSFAM_SERVER_URL').asUrlString() || 'http://localhost:8080',

    mongoDbUri: envVar.get('NODETSFAM_MONGO_DB_URI').asString(),

    clientPort: envVar.get('NODETSFAM_CLIENT_PORT').asPortNumber(),
    clientUrl: envVar.get('NODETSFAM_CLIENT_URL').asUrlString(),
};
