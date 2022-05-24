const express = require("express");
const app = express();

// hello world api
app.get("/", (req, res) => {
  res.send({ message: "hello API Bleue shary" });
});

// export app express 
module.exports = app;
