
const memberRepository = require("../repository/memberRepository");

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:'gowoo97@gmail.com',
        pass: ''
    }
});

class AuthService{


    async signup(params){
        await memberRepository.signup(params);
    }

    async getVerifyCode(to){
        const verificationCode = Math.floor(1000 + Math.random() * 9000);
        const mailOptions = {
            from: 'gowoo97@gmail.com',
            to,
            subject: "인증 코드가 도착했습니다.",
            text: verificationCode.toString()
        };

        try{
            await transporter.sendMail(mailOptions);
            return verificationCode.toString();
        }catch(error){
            console.error('이메일 전송 오류:', error);
            throw new Error('이메일 전송에 실패했습니다.');
        }
    }

}







const authService = new AuthService();
module.exports = authService;