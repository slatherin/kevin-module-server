const Sequelize = require("sequelize");
const { db } = require("../config");

const Product = db.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
);

const Review = db.define(
  "review",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customer_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    },
    review: {
      type: Sequelize.STRING,
      allowNull: false
    },
    helpful_count: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    verified: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  }
);

Product.hasMany(Review);
Review.belongsTo(Product);

db.sync({ force: false })
  .then(() => console.log("Successfully created tables"))
  .catch(err => console.log("Error creating tables", err));

module.exports = {
  db, 
  Product,
  Review
};