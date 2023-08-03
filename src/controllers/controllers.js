const { isEmails, InsertUser } = require('../db/db');
const encriptarPassword = require('../auth/bcrypt');

const Register = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log({ userName, email, password });
  try {
    if (isEmails()) {
      res.status(409).json({ message: 'The user you are trying to register already exists.' });
    } else {
      const hash = await encriptarPassword(password);
      res.status(201).json({ message: 'User created successfully.' });
      InsertUser(userName, email, hash);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error. Failed to connect to the server.', status: error });
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return res;
  }
};

module.exports = {
  Register,
};

/*
    POR ALGUNA RAZON NO SE ESTAN RESOLVIENDO CORRECTAMENTE LAS PROMESAS
*/
