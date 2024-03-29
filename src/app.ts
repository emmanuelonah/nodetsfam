import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import rateLimit from 'express-rate-limit';

import { envVars } from './configs';
import { HttpException } from './services';
import { apiRouterV1, apiRouterV1Path } from './routes';
import { serveClient, errorHandler } from './middlewares';

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors({ origin: envVars.clientUrl }));
app.use(helmet());
app.use(
    rateLimit({
        limit: 50,
        message: new HttpException(429, 'Request limit reach. Retry later.'),
    })
);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(apiRouterV1Path, apiRouterV1);
app.use('/*', serveClient);
app.use(errorHandler);

export default app;
