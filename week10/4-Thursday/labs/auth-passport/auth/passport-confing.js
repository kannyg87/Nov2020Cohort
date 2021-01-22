const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypts');
const db  = require('../models');


const init = (passport)=>{

    passport.use(new LocalStrategy((username, password,done)=>{
        db.user.findAll({where:{username:username}})
        .then(records =>{
            if (records != null){
                    let record = records[0];
                    bcrypt.campare(password, record.password, (err, respone)=>{
                        if(respone){
                            done(null, {id: record.id, username : record.username})

                        }else{
``
                            done(null,false)

                        }
                        )
                    })

            }
            else{

                done(null,false)
            }
        })

    }))



    passport.serializeUser((user, done)=>{


    })

passport.deserializeUser((id,done)=>{

})
}

module.export = init;
