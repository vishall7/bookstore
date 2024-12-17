export class ApiResponse {
    constructor(successMessage, data, successCode){
        this.message = successMessage;
        this.data = data;
        this.successCode = successCode;
    }
}