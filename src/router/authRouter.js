
const express = require('express');
const router = express.Router();
const authControler = require('../controller/authController');

router.post('/login', authControler.AuthController);

module.exports = router;