const { db } = require("../../db/models");

const ProductModel = {
  get: (query, callback) => {
    db.query(`
      SELECT * 
      FROM products
      WHERE name = '${query.name}';
    `)
    .then(data => callback(null, data[0]))
    .catch(err => callback(err, null));
  }
}

module.exports = {
  ProductModel: ProductModel
}