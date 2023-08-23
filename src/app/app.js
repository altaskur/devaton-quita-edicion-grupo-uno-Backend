const express = require('express');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const router = require('../router/router');

const app = express();

const loginRouter = require('../router/login');
const testRouter = require('../router/test');
const servicesRouter = require('../router/services');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(router);
app.use('/api/login', loginRouter);
app.use('/api/test', testRouter);
app.use('/api/services', servicesRouter);

module.exports = app;
