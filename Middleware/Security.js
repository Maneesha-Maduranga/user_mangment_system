const { verifyToken } = require("../Utils/Jwt");

const authentication = (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
        res.status(401)
        throw new Error("Unauthorized")
    }
    try {
        verifyToken(token);
        next();
    } catch (error) {
      res.status(401)
      throw new Error("Unauthorized")
    }

 
};

module.exports = {
    authentication
}