const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    startdate: Date,
    screen: {
      width: Number,
      height: Number
    },
    requestip: String,
    geolocation: {
      position: {
        latitude: Number,
        longitude: Number,
      },
      error: String,
    },
    ip: { ip: String },
    ipify: {
      ip: String,
      error: String
    },
    geoip: {
      range: [Number],
      country: String,
      region: String,
      eu: String,
      timezone: String,
      city: '',
      ll: [Number],
      metro: Number,
      area: Number
    },
    ipapi: {
      ip: String,
      version: String,
      city: String,
      region: String,
      region_code: String,
      country: String,
      country_name: String,
      country_code: String,
      country_code_iso3: String,
      country_capital: String,
      country_tld: String,
      continent_code: String,
      in_eu: Boolean,
      postal: String,
      latitude: Number,
      longitude: Number,
      timezone: String,
      utc_offset: String,
      country_calling_code: String,
      currency: String,
      currency_name: String,
      languages: String,
      country_area: Number,
      country_population: Number,
      asn: String,
      org: String
    }


  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
