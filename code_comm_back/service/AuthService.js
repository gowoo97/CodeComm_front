
const memberRepository = require("../repository/memberRepository");



class AuthService{

    async signup(params){
        await memberRepository.signup(params);
    }

}







const authService = new AuthService();
module.exports = authService;