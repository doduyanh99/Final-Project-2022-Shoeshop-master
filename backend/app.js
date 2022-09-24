const express = require("express");
const app = express();
const errorMidleware = require("./middleware/error");
const cookieParaser = require("cookie-parser");

app.use(express.json());
app.use(cookieParaser());

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