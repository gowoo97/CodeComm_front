

const express = require("express");
const authService = require("../service/AuthService.js");

const router = express.Router();


router.post('/signup', function(req, res){ 
    const body = req.body;
    const params = [body.email,body.password,body.nickname];
    authService.signup(params);
})


router.post('/verify', async function(req,res){
    const body = req.body;
    
    const code = await authService.getVerifyCode(body.to);

    console.log(code);

    res.status(200).send({uuid: code.uuid});
})



module.exports = router;