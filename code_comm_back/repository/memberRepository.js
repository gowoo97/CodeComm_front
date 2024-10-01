const db = require("../config/mysql.js");

class MemberRepository{

     signup(params){
        
        const sql = "insert into MEMBER (email,pw,nickname) values(?,?,?)";
        const conn =db.init();
       
            return conn.execute(sql,params,(err,rows) => {
                if(err){
                    throw err;
                    
                }
            });
        
        conn.end();
       
    }


}




const memberRepository = new MemberRepository;

module.exports = memberRepository;