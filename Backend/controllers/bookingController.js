const Booking = require("../models/booking");
const Customer = require("../models/customer");
const Service = require("../models/service");

exports.addBooking = (req, res) => {
  let booking = req.body;

  Customer.findById(
    req.body.cid,
    { _id: 0, password: 0, __v: 0 },
    (err, data) => {
      if (err) res.status(422).json({ message: "not found", err });
      else {
        booking.customer = data;

        Service.findById(req.body.sid, { _id: 0, __v: 0 }, (err, data) => {
          if (err) res.status(422).json({ message: "not found", err });
          else {
            booking.service = data;

            Booking.create(booking)
              .then((newBooking) => res.status(200).json(newBooking))
              .catch((err) => res.status(422).json({ error: err.message }));
          }
        });
      }
    }
  );
};

exports.cancelBooking = (req, res) => {
  Booking.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};

exports.getAllBookings = (req, res) => {
  Booking.find((err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};

exports.getBookings = (req, res) => {
  Booking.find({ cid: req.params.id }, (err, data) => {
    if (err) res.status(422).send(err);
    else res.status(200).send(data);
  });
};
