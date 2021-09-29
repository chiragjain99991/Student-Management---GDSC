const jwt = require("jsonwebtoken");
const requireAuth = async (req, res, next) => {
    const AuthHeader = req.headers.authorization;
  
    if (AuthHeader) {
      const token = AuthHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
        if (err) {
          return res.status(500).send({msg:"Incorrect token"});
        } else {
          next();
        }
      });
    } else {
      return res.status(401).send({msg:'Token is required for Authentication'});
    }
  };

  module.exports = { requireAuth }