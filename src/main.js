const app = require('./app/app');

require('dotenv').config();

app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`CORS-enabled web server listening on port ${process.env.APP_PORT}`);
});
