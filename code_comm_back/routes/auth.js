

const express = require("express");
const authService = require("../service/AuthService.js");

const router = express.Router();


router.post('/signup', function(req, res){ 
    const body = req.body;
    const params = [body.email,body.password,body.nickname];
    authService.signup(params);
})


router.post('/verify', function(req,res){
    const body = req.body;
    
    const code = authService.getVerifyCode(body.to);

    console.log(code);

    res.sendStatus(200);
})



module.exports = router;