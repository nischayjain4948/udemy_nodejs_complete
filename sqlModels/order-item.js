const Sequelize = require("sequelize");
const sequelize = require("../utils/db.sequlize");

const OrderItem = sequelize.define('OrderItem', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey :true
    },
     quantity : Sequelize.INTEGER
});
module.exports = OrderItem;