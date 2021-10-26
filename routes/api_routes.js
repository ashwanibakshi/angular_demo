const express       = require("express");
const router        = express.Router();
const apiController = require("../controller/api_controller");


router.post("/register",apiController.register);
router.post("/login",apiController.login);

module.exports = router;