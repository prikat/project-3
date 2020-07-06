const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateSignUpInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.address = !isEmpty(data.address) ? data.address : "";

// Location checks
  if (Validator.isEmpty(data.address)) {
    errors.address = "In order to proceed, please press Get My Location button and confirm that the above inputs are populated";
  }
// Name checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};