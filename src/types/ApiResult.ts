export type ApiResult<T> = {
    data: T | null;
    status: boolean;
    msg: string;
};