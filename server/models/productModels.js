const { db } = require("../../db/models");

const ProductModel = {
  get: (params, callback) => {
    db.query(`
      SELECT * 
      FROM products
      WHERE name = '${params.name}';
    `)
    .then(data => callback(null, data[0]))
    .catch(err => callback(err, null));
  },

  post: (name, callback) => {
    db.query(`
      INSERT INTO	products
      (id, name, "createdAt", "updatedAt") 
      VALUES 
      (DEFAULT, '${name}', NOW(), NOW());
    `)
    .spread((data) => {
      console.log('insert product successful');
      callback(null, data[1]);
    })
    .catch(err => {
      console.log('error with insert product,', err);
      callback(err, null);
    });
  },

  put: (body, callback) => {
    db.query(`
      UPDATE products
      SET 
        name='${body.name}', 
        "updatedAt"=NOW()
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
  ProductModel: ProductModel
}