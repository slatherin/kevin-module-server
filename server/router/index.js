const Router = require('express').Router();
const { ReviewCtrl } = require('../controllers/reviewController.js');
const { ProductCtrl } = require('../controllers/productController.js');

Router.get('/reviews/:search', ReviewCtrl.get);
Router.get('/reviews/product/:name', ProductCtrl.get);  

Router.post('/reviews/:search', ReviewCtrl.post);

module.exports = {
  Router: Router
};
