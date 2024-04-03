export const errorHandler = (errorStatus, message) => {
    const error = new Error();
    error.status = errorStatus;
    error.message = message;
    return error;
};