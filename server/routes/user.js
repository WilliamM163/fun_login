const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authentication.js');
const userController = require('../controllers/user.js');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/info', authenticate, userController.getUsersName);

module.exports = router;