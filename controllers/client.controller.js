// const createError = require("http-errors");
const Client = require("../models/client.model");
const { lookup } = require('geoip-lite');
const ipapi = require('ipapi.co');
// const requestIp = require('request-ip');



const getIpapi = (id, ip, query, r, n) => {
  const callback = function (res) {
    query.ipapi = res

  Client.findByIdAndUpdate(id, { $set: query }, { new: true })
  .then((p) => {
    if (p === null) {
      next(createError(404, "the client could not be updated"));
    } else {
        r.status(201).json('ok');
      }
    })
    .catch((e) => {
      n(e);
    });



    // Client.create(query)
    //   .then((client) => {
    //     r.status(201).json({ id: client.id });
    //   })
    //   .catch(n);
  };

  ipapi.location(callback, ip);
}

module.exports.doConnected = (req, res, next) => {
  const query = req.body
  // const clientIp = requestIp.getClientIp(req)
  // query.requestip = clientIp

  
  // console.log(query);
  
  Client.create(query)
    .then((client) => {
        res.status(201).json({ id: client.id });
      })
      .catch(next);
    
  };
  
  
  
  module.exports.doUpConnected = (req, res, next) => {
    let query = req.body.data;
    if (query.ipify) {
      const ip = query.ipify.ip
      const geoip = lookup(ip);
      query.geoip = geoip
    }
    const ip = query.ipify.ip
    const id = req.body.id;
    getIpapi(id, ip, query, res, next)
    
  // Client.findByIdAndUpdate(id, { $set: query }, { new: true })
  // .then((p) => {
  //   if (p === null) {
  //     next(createError(404, "the client could not be updated"));
  //   } else {
  //       console.log(p);
  //       res.status(201).json('ok');
  //     }
  //   })
  //   .catch((e) => {
  //     next(e);
  //   });
};

// module.exports.doDisconnected = (req, res, next) => {
//   res.json('doDisconnected ok');
// };

