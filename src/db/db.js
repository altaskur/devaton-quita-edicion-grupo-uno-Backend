const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const isEmails = async (email) => {
  const db = pgp(cn);
  const emails = await db.query('SELECT email FROM pruebausers');
  console.log('Lista de emails', emails);
  await pgp.end();
  return emails.map((value) => value.email).includes(email);
};

const UsersName = async () => {
  const db = pgp(cn);
  const users = await db.query('SELECT first_name, last_name FROM pruebausers');
  console.log('Lista de usuarios', users);
  await pgp.end();
  return users;
};

const InsertUser = async (userName, email, hash) => {
  const db = pgp(cn);
  // eslint-disable-next-line no-template-curly-in-string
  const newUser = await db.query('INSERT INTO PetPal (name, email, password) values (${userName}, ${email}, ${hash})', { userName, email, hash });
  console.log(newUser);
  await pgp.end();
  return newUser;
};

module.exports = {
  isEmails,
  UsersName,
  InsertUser,
};
