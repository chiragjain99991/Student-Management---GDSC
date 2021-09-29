const TokenService = require("./services/token-service")
class TokenController{

    async generateToken(req, res){
        const accessToken = await TokenService.generateToken({});
        return res.status(200).json({token: accessToken})
    }

}
module.exports = new TokenController();
