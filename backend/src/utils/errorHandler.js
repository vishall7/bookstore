export const errorHandler = (err, req, res, next) => {
    if(res.headersSent){
        console.log("You're already send a request before");
        return next();
    }
    return res
    .status(505)
    .json({
        error: err.message,
        code: err.statusCode
    })
}