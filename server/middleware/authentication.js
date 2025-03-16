require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
    try {
        // throw new Error();
        const token = req.headers['authorization'].split(' ')[1];

        if (!token) {
            return res.status(401).send({ error: 'Authorization header missing' });
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.user = { email: decodedToken.email };

        next();
    } catch (error) {
        console.error('ERROR: ', error.message);
        return res.status(400).send({error: error.message});
    }
}

module.exports = authenticate;