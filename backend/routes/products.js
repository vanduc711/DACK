const express = require('express');
const middlewareController = require('../controllers/middlewareController');
const router = express.Router()

const productsController = require('../controllers/productsController')

// get all products
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProducts);
// add products by admin
router.post('/addBook', middlewareController.verifyTokenAdmin, productsController.addProducts);
// delete products by admin
router.delete('/deleteBook/:id', middlewareController.verifyTokenAdmin, productsController.deleteBooks);
// delete products by admin
router.put('/updateBook/:id', middlewareController.verifyTokenAdmin, productsController.updateBooks);

module.exports = router
