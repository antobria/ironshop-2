const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.index);
router.get('/new', productsController.new);
router.post('/create', productsController.create);

module.exports = router;