import 'colors';
import path from 'path';

import { Sequelize } from 'sequelize';

async function connectSqlite3Db(onSuccess?: () => void) {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.join(__dirname, '.', 'database.sqlite3'),
    });

    try {
        await sequelize.authenticate();

        console.info(`🔑🔑🔑 Db connected `.green);
        onSuccess?.();
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

export { connectSqlite3Db };
