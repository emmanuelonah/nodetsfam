export interface ResponseType<DataType> {
    success: boolean;
    data: DataType;
}

export function response<D = Record<string, unknown>>(data: D) {
    return { success: true, data };
}
