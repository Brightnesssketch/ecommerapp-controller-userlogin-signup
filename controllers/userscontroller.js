const express = require("express");
const users = require("../model/users");
const bcrypt = require("bcrypt");


signup_post = async (req, res) => {const newuserid = Math.floor(Math.random()*1000+1);
    const newuseremail = req.body.email;
    const newusername = req.body.fullName;
    const newuserpword = req.body.password;
    const confirmpword = req.body.confirmpassword;

    if(confirmpword !== newuserpword) {
        res.send("Passwords did not match")};
    const verifyemail = users.find(user => newuseremail === user.email);

if(verifyemail){
    res.send("User with email already exists");
}

    const salt = await bcrypt.genSalt();
    const encryptedpword = await bcrypt.hash(newuserpword, salt);
    
    
    const newuser = {newuserid, newuseremail, newusername, encryptedpword };
    users.push(newuser);
    res.json(newuser);

};

signin_post = (req, res) => {
        const { email, password } = req.body;
      useremail = users.find(user => email === user.email);
      userpassword = users.find(user => password=== user.password);
        if (!useremail || !userpassword) {
          return res.status(400).json({
            error: "Invalid email or password",
            status: "failed",
            data: null,
          });
            

    }

        

    }   

    


module.exports = {signup_post, signin_post };