const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors())
app.use(express.json()); //req.body

// routes
app.use('/api', routes);

module.exports = app;