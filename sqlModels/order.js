const Sequelize = require("sequelize");
const sequelize = require("../utils/db.sequlize");

const Order = sequelize.define('Order', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey :true
    },
     quantity : Sequelize.INTEGER
});
module.exports = Order;