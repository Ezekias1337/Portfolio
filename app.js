const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];
const bodyParser = require("body-parser");
const { render } = require("ejs");
const methodOverride = require("method-override");
const { isBuffer } = require("lodash");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dbURI = require("./dbURI")

const app = express();
app.use(methodOverride("_method"));

mongoose
  .connect(dbURI.dbURI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware & static files
app.use(express.static("./images"));
app.use(express.static("./css"));
app.use(express.static("./node_modules"));
app.use(express.static("./public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/", (req, res) => {
  res.render("index.ejs", {title: "Home"})
})