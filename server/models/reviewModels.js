const { Review, db } = require("../../db/models");

const ReviewModel = {
  get: (params, callback) => {
    db.query(`
      SELECT * 
      FROM reviews
      WHERE "productId" = ${params.productId}
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


  post: (params, callback) => {
    db.query(`
      INSERT INTO	reviews 
      (id, customer_name, rating, title, date, review, helpful_count, "productId", verified, "createdAt", "updatedAt") 
      VALUES 
      (DEFAULT, '${params.customer_name}', ${params.rating}, '${params.title}', trim(regexp_replace(to_char(NOW(), 'Month'), '\\s+', ' ', 'g')) || ' ' || to_char(NOW(), 'DD') || ', ' || to_char(NOW(), 'YYYY'), '${params.review}', '${params.helpful_count}', '${params.productId}', '${params.verified}', NOW(), NOW());
    `)
    .spread((data) => {
      console.log('query successful');
      callback(null, data[1]);
    })
    .catch(err => {
      console.log('error with query,', err);
      callback(err, null);
    });
  }
}

module.exports = {
  ReviewModel: ReviewModel
}