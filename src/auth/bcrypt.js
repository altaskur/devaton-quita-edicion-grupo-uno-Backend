const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPassword = async (psw) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const pswEncrypt = await bcrypt.hash(psw, salt);
  return pswEncrypt;
};

module.exports = encryptPassword;

/*
    try {
    const haltedPassword = await bcrypt.hashSync(contrasena, salt);
    req.body.contrasena = haltedPassword;
    next();
  } catch (error) {
    return res.status(501).json({ status: error });
  }
*/
