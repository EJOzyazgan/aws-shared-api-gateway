"use strict";

module.exports.signUp = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Sign Up")
  };
};

module.exports.confirmEmail = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Confirm Email")
  };
};

module.exports.signIn = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Sign In")
  };
};