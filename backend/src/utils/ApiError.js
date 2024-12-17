export class ApiError extends Error {
    constructor(errorMessage, errorStatusCode){
        super(errorMessage);
        this.statusCode = errorStatusCode;
    }
}