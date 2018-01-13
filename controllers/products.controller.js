const Product = require('../models/product.model');

module.exports.index = (req, res, next) => {
  Product.find({}).then((products) => {
    res.render('products/index', {
      products: products
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('products/new');
};

module.exports.create = (req, res, next) => {
  const productData = req.body;

  const newProduct = new Product(productData);

  newProduct.save().then((product) => {
    res.redirect('/products');
  })
};
