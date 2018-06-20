const { Review } = require("../../db/models");

const ReviewModel = {
  get: (query, callback) => {
    Review.findAll(
      { 
        where: query, 
        order: [["helpful_count", "DESC"]] 
      }
    )
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
  },
  post: () => {}
}

module.exports = {
  ReviewModel: ReviewModel
}