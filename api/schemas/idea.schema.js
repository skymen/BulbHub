/**
 * Created by Armaldio on 02/05/2018.
 */

const Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  vote_up: Joi.number().default(0),
  vote_down: Joi.number().default(0),
});
