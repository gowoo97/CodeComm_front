
const db = require('../config/mysql.js');
const express = require("express");
const router = express.Router();


router.post('/signup', function(req, res,next){ 
    try{
    const body = req.body;
    const params = [body.email,body.password,body.nickname];
    
    const conn = db.init();
    db.connect(conn);
    console.log('555555 ');
   const rst = conn.query("insert into MEMBER (email,pw,nickname) values(?,?,?)",params,(err,rows)=>{
        if(err){
            console.log('sdfsfsdfs');
           
            return res.status(404).send('eeeeeeee');;
        }
        else{
            return res.status(200).send('ok');
        }
    });

     
    }catch(err){  
        console.log('catch');  
        res.status(404).send("duplicated email address");
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


router.post('/signin', function(req,res){
    const body = req.body;

    const token = tokenService.generateToken({data2:'mannnnnnnnnn'});
    console.log(token);
    res.status(200).send(token);
});

module.exports = router;