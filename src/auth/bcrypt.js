const bcrypt = require('bcrypt');

const encryptPassword = async (psw) => {
  try {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hash(psw, salt);
  } catch (error) {
    throw new Error('Error to encrypt password');
  }
};

const comparePassword = async (userPassword, dbPassword) => {
  try {
    return await bcrypt.compare(userPassword, dbPassword);
  } catch (error) {
    console.log(error);
    throw new Error('Error to compare password');
  }
};

module.exports = { encryptPassword, comparePassword };
