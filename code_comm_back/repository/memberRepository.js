const db = require("../config/mysql.js");

class MemberRepository{

    async signup(){
        const conn =await db.init();
        const sql = "insert into MEMBER (email,pw,nickname) values(?,?,?)";
        
        conn.query(sql, params ,function(err,result){
            conn.end();
            if(err) console.log("query is not excuted: "+ err);
            else{
                return res.sendStatus(200);
            }
        });
    }


}




const memberRepository = new MemberRepository;

module.exports = memberRepository;