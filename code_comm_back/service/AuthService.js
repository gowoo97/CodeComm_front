
const {v4: uuidv4} = require("uuid");
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const redis = require('redis');

dotenv.config();

const redisClient = redis.createClient({legacyMode: true});
redisClient.on('connect', () => {
    console.info('RedisConnected!')
})

redisClient.connect().then();

redisClient.auth(1234);

const redisCli = redisClient.v4;

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:'gowoo97@gmail.com',
        pass: 'uviy ivbk dqvl cnvw'
    }
});

class AuthService{


     signup(params){
            const rst= memberRepository.signup(params);
           // console.log(typeof(rst));
            return rst;  
    }

    async getVerifyCode(to){
        const verificationCode = Math.floor(1000 + Math.random() * 9000);
        const uuid = uuidv4();
        const mailOptions = {
            from: '',
            to,
            subject: "",
            text: verificationCode.toString()
        };

        try{
            await transporter.sendMail(mailOptions);
            
            redisClient.set(uuid,verificationCode.toString());

            return {
               code:verificationCode.toString(),
               uuid:uuid
            }
        }catch(error){
            console.error('이메일 전송 오류:', error);
            throw new Error('이메일 전송에 실패했습니다.');
        }
    }

    async verify(code, uuid) {
        let redisCode = "";
        await new Promise((resolve) => {
            redisClient.get(uuid, (err, reply) => {
                redisCode = reply;
                resolve();
            });
        });
    
        console.log(redisCode);
        return redisCode == code;
    }

}







const authService = new AuthService();
module.exports = authService;