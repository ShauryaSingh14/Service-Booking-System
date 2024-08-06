const Service = require("../models/service");

exports.addService = (req, res) => {
  Service.create(req.body)
    .then((newService) => res.status(200).json(newService))
    .catch((err) => res.status(422).json({ error: err.message }));
};

exports.updateService = (req, res) => {
  Service.updateOne({ _id: req.body.id }, req.body, (err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};

exports.deleteService = (req, res) => {
  Service.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};

exports.getAllServices = (req, res) => {
  Service.find((err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};

exports.getServices = (req, res) => {
  Service.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};
