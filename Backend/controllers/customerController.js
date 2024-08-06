const Customer = require("../models/customer");

exports.signup = (req, res) => {
  /*let newCustomer = new Customer(req.body);
  Customer.collection
    .insertOne(newCustomer)
    .then((newCustomer) => res.status(200).json(newCustomer))
    .catch((err) => res.status(422).json({ error: err })); */

  Customer.create(req.body)
    .then((newCustomer) => res.status(200).send(newCustomer))
    .catch((err) => res.status(422).json({ error: err.message }));
};

exports.login = (req, res) => {
  let newCustomer = new Customer(req.body);
  Customer.collection
    .findOne({ email: newCustomer.email }, { password: 1 })
    .then((attemptedCustomer) => {
      if (attemptedCustomer.password === newCustomer.password)
        res.status(200).send(attemptedCustomer);
      else res.status(422).json({ isAuthorizedCustomer: "0" });
    })
    .catch(() => res.status(404).json({ isAuthorizedCustomer: false }));
};

exports.getCustomer = (req, res) => {
  Customer.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(data);
  });
};
