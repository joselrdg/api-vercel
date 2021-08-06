const createError = require("http-errors");
const Client = require("../models/client.model");



module.exports.doConnected = (req, res, next) => {
  Client.create(req.body)
    .then((client) => {
      console.log("Created client");
      res.status(201).json({ id: client.id });
    })
    .catch(next);
};


module.exports.doUpConnected = (req, res, next) => {
  const id = req.body.id;
  Client.findByIdAndUpdate(id, { $set: req.body.data }, { new: true })
    .then((p) => {
      if (p === null) {
        console.log('null');
        next(createError(404, "the client could not be updated"));
      } else {
        console.log('updateclient');
      res.status(201).json('ok');
      }
    })
    .catch((e) => {
      console.log("error actualizar");
      next(e);
    });
};

module.exports.doUpIConnected = (req, res, next) => {
  
  const ip = req.body.data.join('');
  
  const query = { ip: { ip } } 
  console.log('doUpIConnected', query);
  const id = req.body.id;
  Client.findByIdAndUpdate(id, { $set: query }, { new: true })
    .then((p) => {
      if (p === null) {
        console.log('null');
        next(createError(404, "the client could not be updated"));
      } else {
        console.log('updateclient');
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

