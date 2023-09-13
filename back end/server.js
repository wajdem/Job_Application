require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();


mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {

    app.listen(process.env.PORT, () => {
      console.log('Connected to the database & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
