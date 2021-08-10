const createError = require("http-errors");
const Client = require("../models/client.model");



module.exports.getAll = (req, res, next) => {
    Client.find()
      .then((clients) => {
        if (!clients) {
          next(createError(404, "Pet not found"));
        } else {
          res.json(clients);
        }
      })
      .catch(next);
  };