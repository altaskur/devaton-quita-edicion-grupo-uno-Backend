const { db } = require('../db/db');

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      nickName,
      email,
      phone,
    } = req.body;

    if (!id) return res.status(404).json({ error: 'Id is required' });

    const query = 'UPDATE users SET name = $1, nickName = $2, email = $3, phone_number = $4  WHERE id = $5';
    await db.oneOrNone(query, [name, nickName, email, phone, id]);

    return res.status(200).json({ message: 'User updated' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to update the user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(404).json({ error: 'Id is required' });

    const query = 'DELETE FROM users WHERE id = $1';
    await db.one(query, [id]);

    return res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error to delete User' });
  }
};

module.exports = {
  updateUser,
  deleteUser,
};
