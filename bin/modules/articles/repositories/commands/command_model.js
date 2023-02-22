const joi = require('joi');
const data = joi.object({
  title: joi.string().required(),
  thumbnail: joi.string().required(),
  content: joi.string().required(),
  review: joi.string().required(),
});

module.exports = {
  data,
};
