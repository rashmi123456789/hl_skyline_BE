const jwt_decode = require("jwt-decode");

exports.validateToken = function(req, res) {

    const authHeader = req.headers["authorization"];

    if (authHeader) {

      const token = authHeader && authHeader.split(" ")[1];

      const decodeToken = jwt_decode(token);
      const userId = decodeToken.id;

      if (token === null) return res.status(401).send({success:false, message:'access token cannot be null.!'});

      return userId;

    } else {
      return res.status(401).send({success:false, message:'access token not found.!'});
    }
};