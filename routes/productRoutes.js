const express = require('express');
const { addMissing } = require('../controller.js/cart.controller');
const router = express.Router();

router.post('/create', addMissing)
module.exports = router