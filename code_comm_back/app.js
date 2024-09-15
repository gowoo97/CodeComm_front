const express = require('express');
const db = require("./config/mysql.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const conn = db.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.set('port',process.env.PORT || 8081);

app.get('/', (req,res) => {
    res.send('Hello, Express')
})

app.post('/auth/signup', function(req, res){
    const sql = "insert into MEMBER (email,pw,nickname) values(?,?,?)";
    const body = req.body;

    const params = [body.email,body.password,body.nickname];
    conn.query(sql, params ,function(err,result){
        if(err) console.log("query is not excuted: "+ err);
        else{
            return res.sendStatus(200);
        }
    })
})




app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})