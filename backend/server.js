const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const bodyParser = require("body-parser");


//Handing uncaught exception:
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Sutting down server due to Unhandled promise rejection`);
    process.exit(1);
})


//Set up config:
dotenv.config({path:"backend/config/config.env"});

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,POST,PUT,DELETE,PATCH"
    );
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting database:
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server online at: http://localhost:${process.env.PORT}`)
});

//Unhandled promise rejection:

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Sutting down server due to Unhandled promise rejection`);

    server.close(() =>{
        process.exit(1);
    });
});