const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const authRouter = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.set('port',process.env.PORT || 8081);



app.use('/auth', authRouter);

app.get('/', (req,res) => {
    res.send('Hello, Express');
})



app.use((err, req, res, next) => {
    //console.error('서버 오류 발생:', err);
    res.status(400).send('서버 오류!');
    return;
});

// process.on('unhandleRejection', (err, result) => {
//     console.log('un');
// 	err.message, err.code, err.stack
// })

// process.on('uncaughtException', (err, result) => {
//     console.log('unc');
// 	err.message, err.code, err.stack
// })

app.listen(app.get('port'), (err) => {

    if(err){
        console.log(err);
        return;
    }

    console.log(app.get('port'), '번 포트에서 대기 중')
})