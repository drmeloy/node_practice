const Product = require('../models/product');

const getAdminProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      docTitle: 'Admin products',
      path: '/admin/products'
    })
  });
}

const getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { 
    docTitle: 'Add product', 
    path: '/admin/add-product',
  });
}

const postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);
  product.save();
  res.redirect('/');
}

module.exports = {
  getAddProduct,
  getAdminProducts,
  postAddProduct,
}