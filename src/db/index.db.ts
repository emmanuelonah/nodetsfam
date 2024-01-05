import { initializeMongoDb, connectMongoDb, disconnectMongoDb } from './mongo/index.service';

import { connectSqlite3Db } from './sqlite3/index.service';

/**
 * By default, we support mongodb and sqlite3.
 * But you can decide to plugin your desired db
 */
export class Db {
    public static readonly DB_TYPES = {
        mongo: 'mongo',
        sqlite3: 'sqlite3',
    };

    private onConnectDb: (_onSuccess?: () => void) => Promise<any>;

    constructor(dbType: keyof typeof Db.DB_TYPES) {
        if (dbType === 'mongo') {
            initializeMongoDb();
            this.onConnectDb = connectMongoDb;
        } else {
            this.onConnectDb = connectSqlite3Db;
        }
    }

    public async connect(onSuccess: () => void) {
        this.onConnectDb(onSuccess);
    }

    public async disconnect() {
        await disconnectMongoDb();
    }
}
