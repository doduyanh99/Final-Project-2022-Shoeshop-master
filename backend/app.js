const express = require("express");
const app = express();
const errorMidleware = require("./middleware/error");
const cookieParaser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");


app.use(express.json());
app.use(cookieParaser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route import:
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

//Middleware for errors:
app.use(errorMidleware)

module.exports = app