const { comparePassword } = require('../auth/bcrypt');
const { db } = require('../db/db');
const { generateToken } = require('../jwt/jwt');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

    const emailRegex = /\S+@\S+\.\S+/;
    const emailTrim = email.trim();
    const errorMessage = 'Invalid email or password';

    if (!emailRegex.test(emailTrim)) return res.status(400).json({ message: 'Invalid email format' });

    if (password.length < 4) return res.status(411).json({ message: 'Password must be at least 4 characters' });

    const query = 'select id, nick_name, email, password from users  WHERE email = $1';

    const user = await db.oneOrNone(query, [emailTrim]);
    if (!user) return res.status(404).json({ message: errorMessage });

    const isValid = await comparePassword(password, user.password);
    if (!isValid) return res.status(401).json({ message: errorMessage });

    const token = generateToken({ id: user.id, nickName: user.nick_name, email: user.email });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error on sing in user' });
  }
};

module.exports = { signIn };
