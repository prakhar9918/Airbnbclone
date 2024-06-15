const express = require('express');
const {userSignup}  = require('../controllers/user_controllers');
const router = express.Router();

router.post("/registeruser",userSignup);

router.get("/usersignup" , (req,res)=>{
    res.render("../views/user/userSignup.ejs");
})

module.exports = router;