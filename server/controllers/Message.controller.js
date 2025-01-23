const Message = require("../models/Message.model");

const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all fields are provided
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Create and save the message
    await Message.create({ name, email, subject, message });

    // Respond with success if message was sent
    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    // Mongoose validation error handling
    if (error.name === "ValidationError") {
      let errorMessage = "";
      Object.values(error.errors).forEach(({ message }) => {
        errorMessage += message + " ";
      });
      return res.status(400).json({
        success: false,
        message: errorMessage.trim(),
      });
    }

    // If the error is not validation-related
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = sendMessage;
