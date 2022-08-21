const express = require("express");
const Joi = require("joi");
const router = express.Router();

router.post("/", (req, res) => {
  validation(req.body, res);
  let expression = req.body.expression.replace(/\s/g, "");

  // The pattern search cos(??) in any order there exist pattern (?:cos\((\d+)\)) expresses that the string can contain cos(??).
  // The same is for the rest. We search for each of the function in the string.
  // After that we check the result and if the string is identicall the one we selected, then we are good to go with the string.

  const pattern =
    /(?:cos\((\d+)\))|(?:sin\((\d+)\))|(?:tan\((\d+)\))|(?:cot\((\d+)\))|(?:\d+[.]?\d+)|(?:\+(?![\+\-\*\/]))|(?:\*(?![\+\-\*\/]))|(?:\-(?![\+\-\*\/]))|(?:\/(?![\+\-\*\/]))|(?:\^(?![\+\-\*\/]))$/g;

  let result = expression.match(pattern);
  if (result.join("") === expression) {
    console.log("String is valid");
    res.send(`You have send in a valid string hurray you! ${expression}`);
    return;
  }

  res.send(`Hello You send in invalid string :( ==> ${expression}`);
});

function validation(body, res) {
  const schema = Joi.object({ expression: Joi.string().min(3).required() });
  const { error } = schema.validate(body);
  // Validate for sin(), cos(), tan(), cot(), exp(), pow(), ln(), log(),
  // oparation order, (), /,*, -, +
  if (error) {
    res.status(400).send(error.details);
    return;
  }
}

module.exports = router;
