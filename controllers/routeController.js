const User = require("../database/models/User");

module.exports = {
  // postNewUser: (req, res) => {
  //   console.log("user from frontend", req.body);
  //   let newUser = req.body;
  //   User.create({ email: newUser.email, password: newUser.password })
  //     .then(results => {
  //       res.send(results.dataValues); //sending to client (react)
  //     })
  //     .catch(error => console.error(`Couldn't save user: ${error.stack}`));
  // }
};
