const apiModel   = require("../models/apiModel");
const bcrypt     = require("bcryptjs");

module.exports.register=(data)=>{
    return new Promise((resolve,reject)=>{
          try {
             bcrypt.genSalt(10,(err,salt)=>{
                 if(err){
                     reject(err);
                 }
                 else{
                     bcrypt.hash(data.password,salt,(err,hash)=>{
                       if(err){
                           reject(err);
                       }
                       else{
                          let udata = new apiModel({
                              name  : data.name,
                              email : data.email,
                            password: hash
                          })
                        udata.save((err,sdata)=>{
                              if(err){
                                  reject(err);
                              }
                              else{
                                  resolve(sdata);
                              }
                         });     
                        }
                     });
                 }
             });      
          } catch (error) {
              reject(error);
          }
    });
}

module.exports.checkEmail=(email)=>{
    return new Promise((resolve,reject)=>{
        try {
            // console.log("dat",data);
           apiModel.findOne({"email":email},(err,fdata)=>{
               if(err){
                   reject(err);
               }     
               else if(fdata){
                   resolve(fdata);
               }
               else{
                   reject({message:"no data found"});
               }
           });     
        } catch (error) {
            reject(error);
        }
    });
}

module.exports.checkPassword=(password,hash)=>{
    return new Promise((resolve,reject)=>{
        try {
             bcrypt.compare(password,hash,(err,match)=>{
                     if(err){
                         reject(err);
                     }
                     else if(match){

                         resolve(match);
                     }
                     else{
                         reject({message:"wrong email password"});
                     }
             });
        } catch (error) {
            reject(error);
        }
    });
}
