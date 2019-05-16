const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const farms = require("./routes/api/farms");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json({limit: '50mb', extended: true}));

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;
mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/farms", farms);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
