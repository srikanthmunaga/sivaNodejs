 const jwt = require('jsonwebtoken');
 const passport = require('passport');
 const config = require('../config/authCongif.json')
 const {successResponse,errorResponse} = require('../middlewares/responses')
 
// function auth (email,password) {
//   console.log('>>>>>')
//   //const { email, password } = req.body;
//   const user = config.users.find(user => user.email === email);

//   if (!user) {
//     res.json(
//       errorResponse({
//         code: "404",
//         message: "user not found",
//         extendedMessage: "No user found with" + email
//       })
//     );
//   }

//   if (user.password !== password) {
//     res.json(
//       errorResponse({
//         code: "404",
//         message: "No users found",
//         extendedMessage: "Incorrect password"
//       })
//     );
//   }

//   const token = jwt.sign({ email, password }, config.jwtSecret);

//   res.json(
//     successResponse({
//       username: user.username,
//       email: user.email,
//       token
//     })
//   );
// };


function auth(){
console.log('/////')
}

// export const passportAuth = social => (req, res) => {
//   passport.authenticate(social, (err, user) => {
//     if (err) {
//       let error = failedAuth(social, err);
//       res.send({
//         message: error
//       });
//     }

//     res.json(
//       successResponse({
//         email: user.email,
//         username: user.displayName
//       })
//     );
//   })(req, res);
// };


module.exports = auth