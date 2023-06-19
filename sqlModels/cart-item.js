const Sequelize = require("sequelize");
const sequelize = require("../utils/db.sequlize");


const CartItem = sequelize.define("cartItem", {
    id:{
        type : Sequelize.INTEGER,
        autoIncremnt:true,
        allowNull : false,
        primaryKey: true

    },
    quantity: Sequelize.INTEGER
});

module.exports = CartItem;