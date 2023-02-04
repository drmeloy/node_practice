const Product = require('../models/product');

const getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', { 
      prods: products, 
      docTitle: 'All Products', 
      path: '/products' });
  });
}

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart',
    path: '/cart'
  })
}

const getOrders = (req, res, next) => {
  res.render('shop/orders', {
    docTitle: 'Orders',
    path: '/orders'
  })
}

const getShop = (req, res, next) => {
  res.render('shop/index', {
    docTitle: 'Shop',
    path: '/'
  })
}

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    docTitle: 'Checkout',
    path: '/checkout'
  })
}

module.exports = {
  getProducts,
  getCart,
  getShop,
  getCheckout,
  getOrders
}