const express = require('express');
const middlewareController = require('../controllers/middlewareController');
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', middlewareController.veryfyToken, userController.getAllUser);

//delete user
router.delete('/:id', middlewareController.verifyTokenAdmin, userController.deleteUser);

//update user
router.put('/update/:id',middlewareController.verifyTokenAdmin, userController.updateUser);


module.exports = router
