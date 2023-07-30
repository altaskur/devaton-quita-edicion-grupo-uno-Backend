const bcrypt = require('bcrypt');

async function encriptPassword(req, res, next) {
  try {
    const { password } = req.body;

    if (!password) return res.status(401).json({ status: 'Not password provided' });
    const salt = bcrypt.genSaltSync(10);
    const haltedPassword = await bcrypt.hashSync(password, salt);
    req.body.password = haltedPassword;
    next();
  } catch (error) {
    return res.status(501).json({ status: 'Something ocurred generating the password' });
  }
  return true;
}

async function checkPassword(bbddPassword, userPassword) {
  try {
    const result = await bcrypt.compareSync(bbddPassword, userPassword);
    return result;
  } catch (error) {
    return false;
  }
}

module.exports = {
  encriptPassword,
  checkPassword,
};
