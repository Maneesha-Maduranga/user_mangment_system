const errorHandler = (err, req, res, next) => {
    let message = err.message;
    let code = res.statusCode ? res.statusCode : 500;
    res.status(code).json({
      sucess: false,
      message: message,
    });
  };
  
module.exports = {
      errorHandler
}