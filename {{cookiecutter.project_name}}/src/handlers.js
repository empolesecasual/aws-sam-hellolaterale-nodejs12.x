"use strict";

exports.helloLateraleHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from laterale.cloud!",
    }),
  };
};