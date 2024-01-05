import env from 'dotenv';
import envVar from 'env-var';

env.config();

export const envVars = {
    appName: envVar.get('NODETSFAM_SERVER_PORT').required().asPortNumber(),
    serverPort: envVar.get('NODETSFAM_SERVER_PORT').required().asPortNumber(),
    serverUrl: envVar.get('NODETSFAM_SERVER_URL').required().asUrlString(),
    serverDbUri: envVar.get('NODETSFAM_SERVER_DB_URI').required().asUrlString(),
    clientPort: envVar.get('NODETSFAM_CLIENT_PORT').required().asPortNumber(),
    clientUrl: envVar.get('NODETSFAM_CLIENT_URL').required().asUrlString(),
};
