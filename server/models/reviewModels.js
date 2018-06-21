const { Review, db } = require("../../db/models");

const ReviewModel = {
  get: (query, callback) => {
    db.query(`
      SELECT * 
      FROM reviews
      WHERE "productId" = ${query.productId}
      ORDER BY helpful_count DESC;
    `)
    .then(data => {
      console.log('query successful');
      callback(null, data[0])
    })
    .catch(err => {
      console.log('error with query,', err);
      callback(err, null)
    });
  },


  post: () => {
    Review.create(query)
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
  }
}

module.exports = {
  ReviewModel: ReviewModel
}