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


  post: (body, callback) => {
    db.query(`
      INSERT INTO	reviews 
      (id, customer_name, rating, title, date, review, helpful_count, "productId", verified, "createdAt", "updatedAt") 
      VALUES 
      (DEFAULT, '${body.customer_name}', ${body.rating}, '${body.title}', trim(regexp_replace(to_char(NOW(), 'Month'), '\\s+', ' ', 'g')) || ' ' || to_char(NOW(), 'DD') || ', ' || to_char(NOW(), 'YYYY'), '${body.review}', '${body.helpful_count}', '${body.productId}', '${body.verified}', NOW(), NOW());
    `)
    .spread((data) => {
      console.log('insert review successful');
      callback(null, data[1]);
    })
    .catch(err => {
      console.log('error with inserting review,', err);
      callback(err, null);
    });
  },

  put: (body, callback) => {
    db.query(`
      UPDATE reviews
      SET 
        customer_name='${body.customer_name}', 
        rating=${body.rating}, 
        title='${body.title}', 
        date='${body.date}', 
        review='${body.review}', 
        helpful_count=${body.helpful_count}, 
        verified=${body.verified}, 
        "updatedAt"=NOW(), 
        "productId"=${body.productId}
      WHERE id=${body.id};
    `)    
    .spread((data) => {
      console.log('update review successful');
      callback(null, data[1]);
    })
    .catch(err => {
      console.log('error with updating review,', err);
      callback(err, null);
    });
  }

  
}

module.exports = {
  ReviewModel: ReviewModel
}