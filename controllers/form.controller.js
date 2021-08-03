const createError = require("http-errors");
const nodemailer = require("nodemailer");
// const { getMaxListeners } = require("../app");
const { sendActivationEmail } = require("../config/mailer.config")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.NM_USER ,
        pass: process.env.NM_PASSWORD
    }
})

module.exports.getAll = (req, res, next) => {
  res.json({message: 'ok'});
};

module.exports.doEmail = (req, res, next) => {
  console.log('-- getAll');
  console.log(req.body)
  console.log('-- getAll');

  sendActivationEmail(req.body)
  res.json('ok');
};

