const { ReviewModel } = require("../models/reviewModels.js")

const ReviewCtrl = {
  get: (req, res) => {
    let query = { product_id: req.params.search };
    ReviewModel.get(query, (err, data) => {
      (err) && res.send(err).status(400);
      res.send(data).status(200);
    })
  },
  post: (req, res) => {
    let query = {};
    ReviewModel.post(query, (err, data) => {
      (err) && res.send(err).status(400);
      res.send(data).status(200);
    })
  }
};

module.exports = {
  ReviewCtrl: ReviewCtrl
};
