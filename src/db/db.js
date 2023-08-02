const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const Emails = async () => {
  const db = pgp(cn);
  const emails = await db.query('SELECT email FROM PetPal');
  // console.log('Lista de emails', emails);
  pgp.end();
  return emails;
};

const UsersName = async () => {
  const db = pgp(cn);
  const users = await db.query('SELECT name FROM PetPal');
  console.log('Lista de usuarios', users);
  pgp.end();
  return users;
};

const InsertUser = async (userName, email, hash) => {
  const db = pgp(cn);
  // eslint-disable-next-line no-template-curly-in-string
  const newUser = await db.query('INSERT INTO PetPal (name, email, password) values (${userName}, ${email}, ${hash})', { userName, email, hash });
  console.log(newUser);
  pgp.end();
  return newUser;
};

module.exports = {
  Emails,
  UsersName,
  InsertUser,
};

/*
              PetPal
 id |   name   |      email       | password
----+----------+------------------+----------
  1 | Usuario1 | usr@email.com    | password
  2 | Usuario2 | email2@email.com | password
  3 | Usuario3 | email3@email.com | password
  4 | Usuario4 | email4@email.com | password
  5 | Usuario5 | email5@email.com | password
*/
