import 'colors';
import mongoose from 'mongoose';

import { envVars } from '../../configs';

function initializeMongoDb() {
    mongoose.connection.on('open', () => {
        console.info(`🔑🔑🔑 Db connected on: ${envVars.serverDbUri}`.green.underline);
    });

    mongoose.connection.on('error', (error) => {
        console.error(`🔒🔒🔒 Failed to connect to DB: ${error}`.red);
    });

    mongoose.connection.on('disconnected', () => {
        console.info(`🔐🔐🔐 Db disconnected`);
    });
}

async function connectMongoDb(onSuccess: () => void) {
    try {
        await mongoose.connect(envVars.serverDbUri);
        onSuccess();
    } catch (error) {
        console.error(error);
    }
}

async function disconnectMongoDb() {
    try {
        await mongoose.disconnect();
        console.info('Successfully disconnected db');
    } catch (error) {
        console.error(error);
    }
}

export { initializeMongoDb, connectMongoDb, disconnectMongoDb };
