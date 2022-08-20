const Joi = require("joi");
const { User } = require("../models");

exports.signup = async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
    access_token: [Joi.string()],
    name: Joi.string(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send(error);
  }
  
  delete value.repeat_password;

  const resp = await User.create(value);

  res.send(resp);
};