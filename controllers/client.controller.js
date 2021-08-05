const createError = require("http-errors");


module.exports.doConnected = (req, res, next) => {
  console.log('-- doConnected');
  console.log(req.body)
  res.json('doConnected ok');
};

module.exports.doDisconnected = (req, res, next) => {
    console.log('-- doDisconnected');
    console.log(req.body)
    res.json('doDisconnected ok');
  };

