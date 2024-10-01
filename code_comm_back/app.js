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
    console.error('서버 오류 발생:', err);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    next(err);
});

// process.on('unhandleRejection', (err, result) => {
// 	err.message, err.code, err.stack
// })

// process.on('uncaughtException', (err, result) => {
// 	err.message, err.code, err.stack
// })

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})