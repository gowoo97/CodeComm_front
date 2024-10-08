
const jwt  = require('jsonwebtoken');



const key = 'asdfhi325GHGKW35hwTH2h35hgkhgwihgweui23895hhkdf';

class TokenService{

    generateToken(data){
        return jwt.sign(data,key);
    }


}



const tokenService = new TokenService();
module.exports = tokenService;