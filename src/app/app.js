const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const loginRouter = require('../router/login');
const registerRouter = require('../router/register');

app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

module.exports = app;
