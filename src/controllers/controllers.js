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
  if (!password) return res.status(501).json({ status: 'No he encontrado ninguna contraseña' });
  if (password !== password2) return res.status(501).json({ status: 'Contraseña incorrecta' });
  const id = v4();
  const hash = await encryptPassword(password);
  db.any('INSERT INTO users (user_id, full_name, nick_name, email, password) VALUES (${id}, ${name}, ${nickName}, ${email}, ${hash})', {
    id,
    name,
    nickName,
    email,
    hash,
  }).then(() => res.status(200).json({
    status: 'Usuario creado correctamente',
    usr: name,
    nickname: nickName,
    email,
  })).catch(() => res.status(500).json({ status: 'El usuario ya existente' }));
};

module.exports = {
  Register,
};
