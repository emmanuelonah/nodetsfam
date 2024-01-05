export type QueryType = {
    page?: string | number;
    limit?: string | number;
};

type PaginationType = QueryType & {
    total: number;
};

export class Query {
    private static DEFAULT_PAGE = 1;
    private static DEFAULT_LIMIT = 0;

    static getQueryParam<ReturnType = unknown>(url: string) {
        const queryParams = Object.fromEntries(new URLSearchParams(url));

        return (key: string): ReturnType => {
            const value = queryParams[key];
            try {
                return JSON.parse(value);
            } catch (_) {
                return value as ReturnType;
            }
        };
    }

    static getRawQueryValue<ReturnType = unknown>(value: string): ReturnType {
        try {
            return JSON.parse(value);
        } catch (_) {
            return value as ReturnType;
        }
    }

    static getMongoQuery(arg: QueryType) {
        const formattedPage = Number(arg?.page);
        const formattedLimit = Number(arg?.limit);
        const page = Math.floor(Math.abs(formattedPage >= 0 ? formattedPage : Query.DEFAULT_PAGE));
        const limit = Math.floor(
            Math.abs(formattedLimit >= 0 ? formattedLimit : Query.DEFAULT_LIMIT)
        );
        const skip = limit * (page - 1);

        return { skip, limit };
    }

    static getPagination({ page, limit, total }: PaginationType) {
        const query = Query.getMongoQuery({ page, limit });
        const pages = Math.floor(total / query.limit);
        const formattedPage = Number(page) > 0 ? Number(page) : Query.DEFAULT_PAGE;
        const prevPage = formattedPage > 1 ? formattedPage - 1 : null;
        const nextPage = formattedPage === pages ? null : formattedPage + 1;

        return {
            ...query,
            page: formattedPage,
            pages,
            total,
            prevPage,
            nextPage,
            hasPrevPage: !!prevPage,
            hasNextPage: !!nextPage,
        };
    }
}
