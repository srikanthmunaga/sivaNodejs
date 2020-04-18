var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');



router.post('/auth',(req,res)=>{
  var responses = require('../middlewares/responses.js')
  const config = require('../config/authCongif.json')
    console.log('>>>>>')
    const { email, password } = req.body;
  const user = config.users.find(user => user.email === email);

  if (!user) {
    res.json(
      responses.errorResponse({
        code: "404",
        message: "user not found",
        extendedMessage: "No user found with" + email
      })
    );
  }

  if (user.password !== password) {
    res.json(
      responses.errorResponse({
        code: "404",
        message: "No users found",
        extendedMessage: "Incorrect password"
      })
    );
  }

  const token = jwt.sign({ email, password }, config.jwtKey);

  res.json(
    responses.successResponse({
      username: user.username,
      email: user.email,
      token
    })
  );


});


module.exports = router;