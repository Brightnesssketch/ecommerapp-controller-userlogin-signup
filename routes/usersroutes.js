const express = require("express");
const controller = require("../controllers/userscontroller");
const router = express.Router();


router.post("/signin", controller.signin_post);
router.post("/signup", controller.signup_post)



module.exports = router;