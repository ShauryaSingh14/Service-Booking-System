const express = require("express");
const router = express.Router();

const customerController = require("./controllers/customerController");
const adminController = require("./controllers/adminController");
const serviceController = require("./controllers/serviceController");
const bookingController = require("./controllers/bookingController");

router.get("/", (req, res) => {
  res.json(`Hello From API`);
});

router.post("/customer/signup", customerController.signup);
router.post("/customer/login", customerController.login);
router.get("/customer/:id", customerController.getCustomer);

router.post("/admin/signup", adminController.signup);
router.post("/admin/login", adminController.login);

router.post("/service/add", serviceController.addService);
router.put("/service/update", serviceController.updateService);
router.delete("/service/delete/:id", serviceController.deleteService);
router.get("/service/all", serviceController.getAllServices);
router.get("/service/:id", serviceController.getServices);

router.post("/service/addBooking", bookingController.addBooking);
router.delete("/service/cancelBooking/:id", bookingController.cancelBooking);
router.get("/bookings", bookingController.getAllBookings);
router.get("/bookings/:id", bookingController.getBookings);

module.exports = router;
