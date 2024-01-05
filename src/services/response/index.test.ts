import { response } from './index.service';

describe('response', () => {
    it('should return response data-structure', () => {
        expect(response({ name: 'Foo Bar Baz' })).toMatchObject({
            success: true,
            data: { name: 'Foo Bar Baz' },
        });
    });
});
