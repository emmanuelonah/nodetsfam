import 'colors';

import fs from 'fs';
import path from 'path';
import https from 'https';

import app from './app';

import { db } from './db/index.db';
import { envVars } from './configs';

async function startServer() {
    await db.connect(() => {
        const httpServer = https.createServer(
            {
                key: fs.readFileSync(path.join(__dirname, '..', 'configs', 'key.pem')),
                cert: fs.readFileSync(path.join(__dirname, '..', 'configs', 'cert.pem')),
            },
            app
        );

        httpServer.listen(envVars.serverPort, () => {
            console.log(`${envVars.appName} SERVER STARTED`.blue.bold);
            console.log(
                `
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
 `.green
            );
            console.log(`${envVars.serverUrl}`.white.underline);
        });
    });
}

startServer();
