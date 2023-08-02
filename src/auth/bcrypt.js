const bcrypt = require('bcrypt');

const saltRounds = 10;

const encriptarPassword = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(req, salt);
  } catch (error) {
    return res.status(501).json({ status: error });
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return res;
  }
};

module.exports = encriptarPassword;
