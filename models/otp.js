const mongoose = require("mongoose");

const OTPSchema = mongoose.Schema({
  email: {type: String},
  code: { type: String },
  type: { type: String },
  otpExpiresAt: {type:Date}
});



module.exports = mongoose.model("OTP", OTPSchema);
