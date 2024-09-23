

const express = require("express");
const authService = require("../service/AuthService.js");

const router = express.Router();


router.post('/signup',async function(req, res,next){ 
    try{
        const body = req.body;
    const params = [body.email,body.password,body.nickname];
    authService.signup(params);
    res.status(200);
    }catch(err){
        console.log("rrrrr"+err);
        next(err);
        res.status(404).send("동일한 이메일 존재");
    }
    
})


router.post('/verifyCode', async function(req,res){
    const body = req.body;
    
    const code = await authService.getVerifyCode(body.to);

    console.log(code);

    res.status(200).send({uuid: code.uuid});
})

router.post('/verify',async function(req,res){
    const body = req.body;
    
    const result = await authService.verify(body.code, body.uuid);
    console.log(result);
    res.status(200).send(result);
})



module.exports = router;