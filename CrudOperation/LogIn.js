const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
  
    const secretKey = process.env.SECRET_KEY;
    try {
        const { username, password } = req.body;
        // Check if username and password are provided
        if (username && password) {
            // Perform authentication (replace with your own logic)
            if (username === 'test@123' && password === '12345') {
                // Generate JWT token
                const token = jwt.sign({ username: username }, secretKey, { expiresIn: '30m' });
                res.json({ token: token });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } else {
            res.status(400).json({ message: 'Invalid request format' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};
module.exports = login;