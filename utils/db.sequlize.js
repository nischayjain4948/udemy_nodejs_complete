const Sequelize = require("sequelize");
const sequelize = new Sequelize('golang-bookstore', "root", "", {dialect:'mysql', host:"localhost"});

module.exports = sequelize;