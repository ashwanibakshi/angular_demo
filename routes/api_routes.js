const express       = require("express");
const router        = express.Router();
const apiController = require("../controller/api_controller");


router.post("/register",apiController.register);
router.post("/login",apiController.login);
router.get("/demo",(req,res)=>{
    console.log("working")
    let da = [{"name":'working'}];
        res.json({data:da,msg:"success"});
});


module.exports = router;