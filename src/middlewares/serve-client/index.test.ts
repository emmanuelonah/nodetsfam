import supertest from 'supertest';

import app from '../../app';
import { serveClient } from './index.middleware';

app.use('/', serveClient);
describe('serveClient', () => {
    it('should send the client index.html file', async () => {
        const res = await supertest(app).get('/');

        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toBe('text/html; charset=UTF-8');
    });
});
