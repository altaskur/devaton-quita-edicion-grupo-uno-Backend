const { v4 } = require('uuid');
const { db } = require('../db/db');
const encryptPassword = require('../auth/bcrypt');

const Register = async (req, res) => {
  const {
    name,
    nickName,
    email,
    password,
    password2,
  } = req.body;
  if (!password) return res.status(501).json({ error: 'No he encontrado ninguna contraseña' });
  if (password !== password2) return res.status(501).json({ error: 'Contraseña incorrecta' });
  const id = v4();
  const hash = await encryptPassword(password);
  db.any('INSERT INTO users (user_id, full_name, nick_name, email, password) VALUES (${id}, ${name}, ${nickName}, ${email}, ${hash})', {
    id,
    name,
    nickName,
    email,
    hash,
  }).then(() => res.status(200).json({
    mesagge: 'Usuario creado correctamente',
    usr: name,
    nickname: nickName,
    email,
  })).catch(() => res.status(500).json({ error: 'El usuario ya existente' }));
};

const OrderServices = async (req, res) => {
  const { id } = req.body;
  const user = await db.any('SELECT title, description FROM serveice WHERE id IN (SELECT id FROM users WHERE city_id IN (SELECT city_id FROM users WHERE id=${id}))', {id});
  if (user.length === 0) return res.status(501).json({ error: 'Usuario inexistente' });
  console.log(user);
  res.json({ usuarios: user });
};

module.exports = {
  Register,
  OrderServices,
};
