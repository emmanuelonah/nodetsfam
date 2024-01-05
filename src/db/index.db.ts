import { initializeMongoDb, connectMongoDb, disconnectMongoDb } from './mongo/index.service';

class Db {
    constructor() {
        initializeMongoDb();
    }

    public async connect(onSuccess: () => void) {
        await connectMongoDb(onSuccess);
    }

    public async disconnect() {
        await disconnectMongoDb();
    }
}

export const db = new Db();
