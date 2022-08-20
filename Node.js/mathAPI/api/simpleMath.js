const express = require("express");
const Joi = require("joi");
const router = express.Router();

router.post("/", (req, res) => {
  validation(req.body, res);
  let expression = req.body.expression.replace(/\s/g, "");
  res.send(`Hello you send in an expression as ${expression}`);
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
