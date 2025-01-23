const express = require("express");
const sendMessage = require("../controllers/Message.controller");

const router = express.Router();
router.post("/send", sendMessage);

module.exports = router;
