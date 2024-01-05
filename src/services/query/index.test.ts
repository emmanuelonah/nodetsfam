import { Query } from './index.service';

type QueryParamArg = { url: string; key: string };

describe('Query', () => {
    describe('Query.getQueryParam', () => {
        const url =
            '?name=Emmanuel+Onah&profession=Software+Engineer&include=["userRef","accountRef"]&date={"from":"10-10-2021","to":"10-10-2022"}';
        const primitiveCases = [
            [{ url, key: 'name' }, 'Emmanuel Onah'],
            [{ url, key: 'profession' }, 'Software Engineer'],
            [{ url, key: 'age' }, undefined],
        ];

        const referenceCases = [
            [{ url, key: 'include' }, ['userRef', 'accountRef']],
            [
                { url, key: 'date' },
                { from: '10-10-2021', to: '10-10-2022' },
            ],
        ];

        it.each(primitiveCases)(
            'should return primitive query param',
            // @ts-ignore
            (arg: QueryParamArg, expected) => {
                expect(Query.getQueryParam(arg.url)(arg.key)).toBe(expected);
            }
        );

        it.each(referenceCases)(
            'should return reference query param',
            // @ts-ignore
            (arg: QueryParamArg, expected) => {
                expect(Query.getQueryParam(arg.url)(arg.key)).toMatchObject(expected);
            }
        );
    });

    describe('Query.getRawQueryValue', () => {
        const primitiveCases = [
            ['Emmanuel Onah', 'Emmanuel Onah'],
            ['10', 10],
            ['null', null],
            ['undefined', 'undefined'] /*
            because undefined is a global variable on window and its
            type can be overwritten therefore, the JavaScript engine 
            doesn't reserve it type
            */,
        ];
        it.each(primitiveCases)(
            'should return primitive value',
            // @ts-ignore
            (arg: string, expected) => {
                expect(Query.getRawQueryValue(arg)).toBe(expected);
            }
        );

        const referenceCases = [
            ['["userRef","accountRef"]', ['userRef', 'accountRef']],
            ['{"from":"10-10-2021","to":"10-10-2022"}', { from: '10-10-2021', to: '10-10-2022' }],
        ];

        it.each(referenceCases)(
            'should return reference value',
            // @ts-ignore
            (arg: string, expected) => {
                expect(Query.getRawQueryValue(arg)).toMatchObject(expected);
            }
        );
    });

    describe('Query.getMongoQuery', () => {
        it('should return pagination-data which is computed from default value', () => {
            expect(Query.getMongoQuery({})).toMatchObject({ skip: 0, limit: 0 });
        });

        it('should return pagination-data which is computed from passed in argument', () => {
            expect(Query.getMongoQuery({ page: '2', limit: '10' })).toMatchObject({
                skip: 10,
                limit: 10,
            });
        });

        it('should return pagination-data which is computed from passed in argument of decimal values', () => {
            expect(Query.getMongoQuery({ page: '2.50', limit: '10.1929393' })).toMatchObject({
                skip: 10,
                limit: 10,
            });
        });

        it('should return pagination-data which is computed from passed in argument of negative values', () => {
            expect(Query.getMongoQuery({ page: '-2.50', limit: '-10.1929393' })).toMatchObject({
                skip: 0,
                limit: 0,
            });
        });
    });

    describe('Query.getPagination', () => {
        const cases = [
            [
                { page: 2, limit: 10, total: 100 },
                {
                    page: 2,
                    pages: 10,
                    limit: 10,
                    skip: 10,
                    total: 100,
                    prevPage: 1,
                    nextPage: 3,
                    hasPrevPage: true,
                    hasNextPage: true,
                },
            ],
            [
                { page: 2, limit: 10, total: 100 },
                {
                    page: 2,
                    pages: 10,
                    limit: 10,
                    skip: 10,
                    total: 100,
                    prevPage: 1,
                    nextPage: 3,
                    hasPrevPage: true,
                    hasNextPage: true,
                },
            ],
            [
                { page: -12, limit: 10, total: 89 },
                {
                    page: 1,
                    pages: 8,
                    limit: 10,
                    skip: 0,
                    total: 89,
                    prevPage: null,
                    nextPage: 2,
                    hasPrevPage: false,
                    hasNextPage: true,
                },
            ],
        ];

        // @ts-ignore
        it.each(cases)('should return pagination data', (arg, expected) => {
            expect(Query.getPagination(arg)).toMatchObject(expected);
        });
    });
});
