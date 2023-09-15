require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const jopRoutes = require("./routes/job");
const app = express();


app.use((req, res, next) => {
  console.log(req.path, req.method, req.body);
  next();
});

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/job", jopRoutes);



mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONG_URL)
.then(() =>{
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to  db & listening on port' , process.env.PORT);
    })
  })
.catch((error) => {
    console.log(error);
})
