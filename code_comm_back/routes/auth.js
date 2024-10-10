
const db = require('../config/mysql.js');
const express = require("express");
const authService = require('../service/AuthService.js');
const tokenService = require('../service/TokenService.js');
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
    }finally{
        conn.end();
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
    const conn = db.init();
    db.connect(conn);
    const sql = "SELECT * FROM MEMBER WHERE email = '"+body.email+"'";
    conn.query(sql,function(err,result){
        if(err){
            console.log(err);
            res.status(500).send('서버에러');
        }else{  
            if(result[0].email === body.email && result[0].pw === body.password){
                const token = tokenService.generateToken({email:result[0].email});
                res.status(200).send(token);
            }else{
            
                res.status(401).send('로그인 실패!');
            }
        }
        
    });

    
    
});

module.exports = router;