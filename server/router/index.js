const Router = require('express').Router();
const { ReviewCtrl } = require('../controllers/reviewController.js');
const { ProductCtrl } = require('../controllers/productController.js');

Router.get('/reviews/:search', ReviewCtrl.get);
Router.get('/reviews/product/:name', ProductCtrl.get);  

Router.post('/reviews/', ReviewCtrl.post);
Router.post('/reviews/product/:name', ProductCtrl.post);

Router.put('/reviews/:id', ReviewCtrl.put);
Router.put('/reviews/product/:id', ProductCtrl.put);

Router.delete('/reviews/:id', ReviewCtrl.delete);
Router.delete('/reviews/product/:id', ProductCtrl.delete);

module.exports = {
  Router: Router
};
