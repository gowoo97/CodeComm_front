const db = require("../config/mysql.js");

class MemberRepository{

    async signup(params){
        
        const sql = "insert into MEMBER (email,pw,nickname) values(?,?,?)";
        const conn =await db.init();
        try{
            
            // conn.query(sql, params ,function(err,result){
            
            //     if(err){
            //         console.log("query is not excuted: "+ err);
            //         throw new Error('member');
            //     }
            //     else{
            //         return result;
            //     }
            // });

            const [result] = await conn.execute(sql,params);
            return result;
        }catch(err){
            console.log('fffff');
            return err;
        }finally{
            await conn.end();
        }

       
    }


}




const memberRepository = new MemberRepository;

module.exports = memberRepository;