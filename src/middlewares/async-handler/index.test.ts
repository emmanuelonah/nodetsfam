import supertest from 'supertest';

import app from '../../app';

import { asyncHandler } from './index.middleware';

describe('asyncHandler', () => {
    app.get(
        '/test',
        asyncHandler((_req, _res, _next) => {
            throw new Error('Test error');
        })
    );

    it('should handle errors thrown by async handlers', async () => {
        const res = await supertest(app).get('/test');

        expect(res.statusCode).toBe(500);
    });
});
