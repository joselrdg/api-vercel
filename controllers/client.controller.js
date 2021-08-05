const createError = require("http-errors");
const Client = require("../models/client.model");



module.exports.doConnected = (req, res, next) => {
  Client.create(req.body)
    .then((client) => {
      console.log(client)
      console.log("Created client");
      res.status(201).json({ id: client.id });
    })
    .catch(next);
};


module.exports.doUpConnected = (req, res, next) => {
  console.log('editPetUser', req.body);
  const id = req.body.id;
  Client.findByIdAndUpdate(id, req.body.data , { new: true })
    .then((p) => {
      console.log("Existe----------------------");
      if (p === null) {
        console.log('null');
        next(createError(404, "the client could not be updated"));
      } else {
        console.log('updateclient', p);
      }
    })
    .catch((e) => {
      console.log("error actualizar");
      next(e);
    });
};

module.exports.doDisconnected = (req, res, next) => {
  console.log('-- doDisconnected');
  console.log(req.body)
  res.json('doDisconnected ok');
};

