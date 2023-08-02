const app = require('./app/app');

require('dotenv').config();

app.listen(process.env.APP_PORT, () => {
  console.log(`CORS-enabled web server listening on port ${process.env.APP_PORT}`);
});
