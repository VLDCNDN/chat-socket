const Joi = require("joi");
const { User } = require("../models");

exports.signup = async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
    name: Joi.string(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send({error: error.details[0].message});
    return;
  }

  const resp = await User.create(value);

  if(resp.error !== "") {
    res.status(400).send(resp);
    return;
  }

  res.status(202).send(resp);
};

exports.signin = async (req, res) => {
  const schema = Joi.object({
    username: Joi.required(),
    password: Joi.required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send({error: error.details[0].message});
    return;
  }

  const resp = await User.getUser(value);

  if(resp.error !== "") {
    res.status(401).send(resp);
    return;
  }

  res.status(200).send(resp);
}