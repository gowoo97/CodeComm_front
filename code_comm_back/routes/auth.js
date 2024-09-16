

const express = require("express");
const db = require("../config/mysql.js");

const router = express.Router();


router.post('/signup', function(req, res){
    const conn =db.init();
    const sql = "insert into MEMBER (email,pw,nickname) values(?,?,?)";
    const body = req.body;

    const params = [body.email,body.password,body.nickname];
    conn.query(sql, params ,function(err,result){
        conn.end();
        if(err) console.log("query is not excuted: "+ err);
        else{

            return res.sendStatus(200);
        }
    })
})



module.exports = router;