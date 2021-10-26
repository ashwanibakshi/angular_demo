const apidb = require("../db/apiDb");


module.exports.register=(req,res)=>{
    apidb.register(req.body)
    .then((data)=>{
        res.json({data:data,msg:"success"})
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}

module.exports.login=(req,res)=>{
    apidb.checkEmail(req.body.email)
    .then((data)=>{
        return apidb.checkPassword(req.body.password,data.password)
    })
    .then((data)=>{
        res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}