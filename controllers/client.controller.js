const createError = require("http-errors");
const Client = require("../models/client.model");
// const { lookup } = require('geoip-lite');
const ipapi = require('ipapi.co');
// const requestIp = require('request-ip');




module.exports.doConnected = (req, res, next) => {
  const getIpapi = (query, r, n) => {
    const callback = function (res) {
      query.ipapi = res
      Client.create(query)
        .then((client) => {
          r.status(201).json({ id: client.id });
        })
        .catch(n);
    };

    ipapi.location(callback)
  }
  let query = req.body
  // const clientIp = requestIp.getClientIp(req)
  // query.requestip = clientIp

  getIpapi(query, res, next)

  // console.log(query);

  // Client.create(query)
  //   .then((client) => {
  //     res.status(201).json({ id: client.id });
  //   })
  //   .catch(next);

};



// module.exports.doUpConnected = (req, res, next) => {
//   let query = req.body;
//   if (req.body.ipify) {
//     const ip = req.body.ipify.ip
//     const geoip = lookup(ip);
//     query.geoip = geoip
//   }
//   const id = req.body.id;
//   Client.findByIdAndUpdate(id, { $set: query }, { new: true })
//     .then((p) => {
//       if (p === null) {
//         next(createError(404, "the client could not be updated"));
//       } else {
//         res.status(201).json('ok');
//       }
//     })
//     .catch((e) => {
//       next(e);
//     });
// };

// module.exports.doDisconnected = (req, res, next) => {
//   res.json('doDisconnected ok');
// };

