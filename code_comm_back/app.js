const express = require('express');
const db = require("./config/mysql.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const conn = db.init();

const authRouter = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.set('port',process.env.PORT || 8081);

app.use('/auth', authRouter);

app.get('/', (req,res) => {
    res.send('Hello, Express')
})


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})