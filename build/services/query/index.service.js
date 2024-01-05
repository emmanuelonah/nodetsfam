"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    static getQueryParam(url) {
        const queryParams = Object.fromEntries(new URLSearchParams(url));
        return (key) => {
            const value = queryParams[key];
            try {
                return JSON.parse(value);
            }
            catch (_) {
                return value;
            }
        };
    }
    static getRawQueryValue(value) {
        try {
            return JSON.parse(value);
        }
        catch (_) {
            return value;
        }
    }
    static getMongoQuery(arg) {
        const formattedPage = Number(arg === null || arg === void 0 ? void 0 : arg.page);
        const formattedLimit = Number(arg === null || arg === void 0 ? void 0 : arg.limit);
        const page = Math.floor(Math.abs(formattedPage >= 0 ? formattedPage : Query.DEFAULT_PAGE));
        const limit = Math.floor(Math.abs(formattedLimit >= 0 ? formattedLimit : Query.DEFAULT_LIMIT));
        const skip = limit * (page - 1);
        return { skip, limit };
    }
    static getPagination({ page, limit, total }) {
        const query = Query.getMongoQuery({ page, limit });
        const pages = Math.floor(total / query.limit);
        const formattedPage = Number(page) > 0 ? Number(page) : Query.DEFAULT_PAGE;
        const prevPage = formattedPage > 1 ? formattedPage - 1 : null;
        const nextPage = formattedPage === pages ? null : formattedPage + 1;
        return Object.assign(Object.assign({}, query), { page: formattedPage, pages,
            total,
            prevPage,
            nextPage, hasPrevPage: !!prevPage, hasNextPage: !!nextPage });
    }
}
exports.Query = Query;
Query.DEFAULT_PAGE = 1;
Query.DEFAULT_LIMIT = 0;
//# sourceMappingURL=index.service.js.map