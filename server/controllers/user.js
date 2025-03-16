require('dotenv').config();

const pool = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRY } = process.env;

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking DB
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1', [email]
        );

        if (user.rows.length === 0) {
            return res.status(401).send({error: 'Email does not exist'});
        } else if (! await bcrypt.compare(password, user.rows[0].password)){
            return res.status(401).send({error: 'Password is invalid'});
        }

        // Password is valid so ...
        // We generate JWT and send it
        const token = jwt.sign({ email }, JWT_SECRET, {expiresIn: JWT_EXPIRY});
        res.send({ accessToken: `Bearer ${token}`});
    } catch (e) {
        console.error('Error logging in user:', e);
        res.status(500).send({error: 'Internal Server Error'}); // Status code indicates internal server error
    }
}

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Checking if email is already registered
        const existingUsers = await pool.query(
            'SELECT * FROM users WHERE email = $1;', [email]
        );
        if (existingUsers.rows.length > 0) {
            return res.status(409).send({ error: 'Email is already registered' });
            // Status code used for conflict
        }

        // Hashing the password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Adding User
        await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [name, email, hashedPassword]
        );

        // Sending JWT
        const token = jwt.sign({ email }, JWT_SECRET, {expiresIn: JWT_EXPIRY});
        res.send({ accessToken: `Bearer ${token}`});
    } catch (e) {
        console.error('Error registering user: \n', e);
        res.status(500).send({error: 'Internal Server Error'}); // Status code indicates internal server error
    }
}

exports.getUsersName = async (req, res) => {
    const email = req.user.email;
    console.log(email);
    try {
        const userName = await pool.query(
            'SELECT (name) FROM users WHERE email = $1', [email]
        );
        const name = userName.rows[0].name;
        res.send({name});
    } catch (e) {
        console.error(e);
        res.status(500).send({error: 'Internal Server Error'});
    }
}