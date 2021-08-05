const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    startdate: Date,
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
