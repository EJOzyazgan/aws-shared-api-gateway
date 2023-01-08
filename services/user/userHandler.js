"use strict";

module.exports.getUser = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Get User")
  };
};