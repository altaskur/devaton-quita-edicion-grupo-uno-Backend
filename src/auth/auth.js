const bcrypt = require('bcrypt');

// eslint-disable-next-line consistent-return
const encriptPassword = async (req, res, next) => {
  const saltRounds = 10;
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ status: 'Missing password' });
    const salt = bcrypt.genSaltSync(saltRounds);
    const haltedPassword = await bcrypt.hashSync(password, salt);
    req.body.password = haltedPassword;
    next();
  } catch (error) {
    return res.status(501).json({ status: error });
  }
};

const comparePassword = async (password, haltedPassword) => {
  try {
    const result = await bcrypt.compare(password, haltedPassword);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { encriptPassword, comparePassword };
