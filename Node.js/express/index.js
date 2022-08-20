//Debugging lines
const startupGlobalDebugger = require("debug")("app:main");
const dbDebugger = require("debug")("app:db");

const express = require("express");
const Joi = require("joi");
const middlewareLogger = require("./logger");
const app = express();
const morgan = require("morgan");

app.use(express.json()); // this looks if the request can be parsed to a json file and then parses it to req.body
app.use(middlewareLogger);

//environment varibles
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`Express app: ${app.get("env")}`);

dbDebugger("Database connection is not enabled");

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan is enebled");
}

const courses = [];
app.get("/api", (req, res) => {
  res.send("Hello Guy in this weird api!");
});

app.get("/api/courses/:id", (req, res) => {
  res.send(`You are asking for ${req.params.id}`);
});
// How to get queries from the url. Use URL something like: api/courses?stuff=Raitis&something=Lebedevs
app.get("/api/courses", (req, res) => {
  res.send(req.query);
});

app.post("/api/courses", (req, res) => {
  //starting from the latest version Joi.Object should be created insted of just a simple schema
  const schema = Joi.object({ name: Joi.string().min(3).required() });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details);
    return;
  }

  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(courses);
});

//Fixing port with port environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => startupGlobalDebugger("listening on port 3000...."));

// Some third party middleware functions, helmet, morgan etc...
