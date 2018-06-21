const { ReviewModel } = require("../models/reviewModels.js")

const ReviewCtrl = {
  get: (req, res) => {
    let params = { productId: req.params.search };
    ReviewModel.get(params, (err, data) => {
      (err) && res.send(err).status(400);
      res.send(data).status(200);
    })
  },
  post: (req, res) => {
    let params = { 
      customer_name: req.params.customer_name || 'Amazon Customer',
      rating: Number(req.params.rating),
      title: req.params.title,
      review: req.params.review,
      helpful_count: Number(req.params.helpful_count),
      productId: Number(req.params.productId),
      verified:  req.params.verified === 'true' ? true : false
    };
    ReviewModel.post(params, (err, data) => {
      (err) && res.send(err).status(400);
      res.send(data).status(201);
    })
  }
};

module.exports = {
  ReviewCtrl: ReviewCtrl
};