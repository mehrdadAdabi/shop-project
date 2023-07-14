export interface ApiResponse<TData> {
    isSuccess: Boolean;
    data: TData;
    metaData: MetaData;
}

export interface MetaData {
    message: String;
    appStatusCode: AppStatusCode;
}

export enum AppStatusCode {
    Success = 1,
    NotFound = 2,
    BadRequest = 3,
    LogicError = 4,
    UnAuthorize = 5,
    serverError,
}


