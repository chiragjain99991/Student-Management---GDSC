const jwt = require('jsonwebtoken');
class TokenService{
    generateToken(payload){
        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_TOKEN_SECRET,{
            expiresIn:'24h'
        })
       
        return accessToken
    }

}

module.exports = new TokenService();