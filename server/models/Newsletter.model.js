const mongoose = require("mongoose");
const newsletterSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: [true, "Name Required"],
    minLength: [3, "Name must contain at least 3 character"],
  },

});
const Newsletter = mongoose.model("Message", newsletterSchema);
module.exports = Message

