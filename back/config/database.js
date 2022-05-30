const Sequelize = require('sequelize');
const db = new Sequelize('anotacao', 'root', '102030', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
