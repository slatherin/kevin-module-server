const { Product } = require("../../db/models");

const ProductModel = {
  get: (query, callback) => {
    Product.findAll(
      { 
        where: query
      }
    )
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
  }
}

module.exports = {
  ProductModel: ProductModel
}