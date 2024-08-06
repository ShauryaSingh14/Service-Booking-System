const Admin = require("../models/admin");

exports.login = (req, res) => {
  let newUser = new Admin(req.body);
  Admin.collection
    .findOne({ email: newUser.email }, { password: 1 })
    .then((attemptedUser) => {
      if (attemptedUser.password === newUser.password)
        res.status(200).send(attemptedUser);
      else res.status(422).json({ isAuthorizedUser: false });
    })
    .catch((err) => res.status(404).send(err));
};

exports.signup = (req, res) => {
  /*let newUser = new User(req.body);
    User.collection
      .insertOne(newUser)
      .then((newUser) => res.status(200).json(newUser))
      .catch((err) => res.status(422).json({ error: err })); */

  Admin.create(req.body)
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => res.status(422).json({ error: err.message }));
};
