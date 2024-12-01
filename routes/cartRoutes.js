const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addProduct, getById, updateCart, deleteItem } = require('../controller.js/cart.controller');
const router = express.Router();


router.post('/addProduct', authMiddleware, addProduct)
router.get('/getById/:id', authMiddleware, getById)
router.patch('/patch/:id', authMiddleware, updateCart)
router.delete('/removeProduct/:id', authMiddleware, deleteItem)
module.exports = router;