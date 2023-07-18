const express = require('express')
const router = express.Router()

const cartsController = require('../controllers/cartsController')

// get all carts
router.post('/add', cartsController.addCartsProducts);
router.get('/', cartsController.GetCartsProducts);
// update quality
router.put('/uquality/:id', cartsController.updateQuality);
//delete Carts
router.delete('/delete/:id', cartsController.deleteCarts);

module.exports = router
