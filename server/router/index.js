const Router = require('express').Router();
const { ReviewCtrl } = require('../controllers/reviewController.js');
const { ProductCtrl } = require('../controllers/productController.js');

Router.get('/reviews/:search', ReviewCtrl.get);
Router.get('/product/:name', ProductCtrl.get);  

Router.post('/reviews/', ReviewCtrl.post);
Router.post('/product/:name', ProductCtrl.post);

Router.put('/reviews/:id', ReviewCtrl.put);
Router.put('/product/:id', ProductCtrl.put);

Router.delete('/reviews/:id', ReviewCtrl.delete);
Router.delete('/product/:id', ProductCtrl.delete);

module.exports = {
  Router: Router
};
