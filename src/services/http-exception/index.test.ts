import { HttpException } from './index.service';

describe('HttpException', () => {
    it('should return the correct error object', () => {
        expect(new HttpException(404, 'Resource not found')).toMatchObject({
            success: false,
            statusCode: 404,
            message: 'Resource not found',
        });
    });

    it('should return error object with a default empty details', () => {
        expect(new HttpException(404, 'Resource not found')).toMatchObject({
            success: false,
            statusCode: 404,
            message: 'Resource not found',
        });
    });
});
