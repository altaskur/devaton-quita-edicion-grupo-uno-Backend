const express = require('express');
const cors = require('cors');
const router = require('../router/router');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(router);

module.exports = app;
