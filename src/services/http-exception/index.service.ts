export class HttpException extends Error {
    code: number;
    success: boolean;
    statusCode: number;
    errors: Record<string, unknown> | Error;
    keyValue: Record<string, string | number>;

    constructor(statusCode: number, message: string) {
        super(message);
        Object.assign(this, { success: false, statusCode, message });
    }
}
