import { ApiResponse } from './index.service';

describe('response', () => {
    const apiResponse = new ApiResponse();

    it('should return success response', () => {
        expect(apiResponse.success({ name: 'Foo Bar Baz' })).toMatchObject({
            success: true,
            data: { name: 'Foo Bar Baz' },
        });
    });

    it('should return error response', () => {
        expect(apiResponse.error(400, 'Invalid email')).toMatchObject({
            success: false,
            statusCode: 400,
            message: 'Invalid email',
        });
    });
});
