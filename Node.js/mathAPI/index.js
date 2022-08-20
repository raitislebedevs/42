// const debuger = require("debug");
const express = require("express");
const morgan = require("morgan");
const simpleMath = require("./api/simpleMath");

process.env["DEBUG"] = "*";
// console.log(process.env);
// Setting up Global API's and middleware functions
const app = express();
app.use(express.json());

//Adding imported routes

app.use("/api/simple", simpleMath);

// Using constants for the project
const PORT = process.env.PORT || 3000;
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan is enebled");
}

console.log("Api is starting up...");

app.listen(PORT, console.log(`Listening on port ${PORT}...`));
