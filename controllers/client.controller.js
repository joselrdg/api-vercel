const createError = require("http-errors");
const Client = require("../models/client.model");



module.exports.doConnected = (req, res, next) => {
  console.log('-- doConnected');
  console.log(req.body)
  // if (req.file) {
  //   req.body.file = req.file.path;
  // }
  Client.create(req.body)
    .then((client) => {
      console.log(client)
      console.log("Created client");
      res.status(201).json({id: client.id});
    })
    .catch(next);
};

module.exports.doDisconnected = (req, res, next) => {
    console.log('-- doDisconnected');
    console.log(req.body)
    res.json('doDisconnected ok');
  };

