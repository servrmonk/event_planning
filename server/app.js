const express = require("express");
const dbConnection = require("./database/connection");
const cors = require("cors");
const messageRouter = require("./routes/Message.router");

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/message", messageRouter);
dbConnection();

module.exports = app;
