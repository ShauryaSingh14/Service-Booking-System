const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  /* .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) */
  .connect("mongodb://localhost:27017/serviceBooking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB connected`))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", require("./appRoutes"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
