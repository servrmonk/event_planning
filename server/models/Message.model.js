const mongoose = require("mongoose");
const validator = require("validator");
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required"],
    minLength: [3, "Name must contain at least 3 character"],
  },
  email: {
    type: String,
    required: [true, "Email Required"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  subject: {
    type: String,
    required: [true, "Subject Required"],
    milLength: [validator.isEmail, "Subject must contain at least 5 character"],
  },
  message: {
    type: String,
    required: [true, "Message Required"],
    milLength: [10, "Message  must contain at least 10 character"],
  },
});
const Message = mongoose.model("Message", messageSchema);
module.exports = Message

