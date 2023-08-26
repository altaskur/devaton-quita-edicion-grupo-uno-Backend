const { db } = require('../db/db');

const test = async (req, res) => {
  try {
    const query = 'select * from users ';
    const data = await db.any(query);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error' });
  }
};

const testToken = async (req, res) => {
  try {
    const { user } = req;
    const { id, email, nickName } = user;
    return res.status(200).json({ id, email, nickName });
  } catch (error) {
    return res.status(500).json({ message: 'Error' });
  }
};

module.exports = { test, testToken };
