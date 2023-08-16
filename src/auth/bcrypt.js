const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPassword = async (psw) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const pswEncrypt = await bcrypt.hash(psw, salt);
  return pswEncrypt;
};

module.exports = encryptPassword;
