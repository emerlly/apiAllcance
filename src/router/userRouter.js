const express = require('express');
const router = express.Router();
const userController = require('../controller/userControler');

router.post('/users', userController.CreateUser);
module.exports = router;

router.get('/users', userController.GetAllUsers);
router.get('/users/:id', userController.GetUserById);
router.put('/users/:id', userController.UpdateUser);
router.delete('/user/:id', userController.DeleteUser);