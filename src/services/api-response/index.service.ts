import { HttpException } from '../http-exception/index.service';

export interface SuccessType<DataType> {
    success: boolean;
    data: DataType;
}

export interface ErrorType extends HttpException {}

export class ApiResponse {
    public error(statusCode: number, message: string) {
        return new HttpException(statusCode, message);
    }

    public success<D = Record<string, unknown>>(data: D) {
        return { success: true, data };
    }
}
