const Sequelize = require("sequelize");
const sequelize = require("../utils/db.sequlize");


const Cart = sequelize.define("cart", {
    id:{
        type : Sequelize.INTEGER,
        autoIncremnt:true,
        allowNull : false,
        primaryKey: true

    }
});

module.exports = Cart;