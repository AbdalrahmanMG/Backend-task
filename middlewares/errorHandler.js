const CustomError = require("../errors/customError.js");

const errorHandler = (err, req, res, next) => {

    let statusCode = 500;
    let message = "Internal Server Error";

    if (err instanceof CustomError) {
        statusCode = err.statusCode
        message = err.message
    }
    console.log(err);
    res.status(statusCode).json({success: false, message})
};

module.exports = errorHandler;
