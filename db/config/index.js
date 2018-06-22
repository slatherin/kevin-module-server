const Sequelize = require('sequelize');

const db = new Sequelize('reviews_ratings', 'root', '', {
  host: 'localhost',
  dialect: 'postgres',
});

db.authenticate()
  .then(() => console.log('Successfully connected to database'))
  .catch(err => console.log('Unable to connect to the database', err))
  
module.exports = {
  db
}