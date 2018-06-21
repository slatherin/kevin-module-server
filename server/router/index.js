const Router = require('express').Router();
const { ReviewCtrl } = require('../controllers/reviewController.js');
const { ProductCtrl } = require('../controllers/productController.js');

Router.get('/reviews/:search', ReviewCtrl.get);
Router.get('/reviews/product/:name', ProductCtrl.get);  

Router.post('/reviews/:customer_name/:rating/:title/:review/:helpful_count/:productId/:verified', ReviewCtrl.post);
Router.post('/reviews/product/:name', ProductCtrl.post);

module.exports = {
  Router: Router
};
