const Sequelize = require("sequelize");
const sequelize = require("../utils/db.sequlize");


// We are now at this stage that we have to define the model so we can use the schema object and used the prototypes for query!
const Product = sequelize.define('product', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:Sequelize.STRING,
    price : {
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    imageUrl :{
        type :Sequelize.STRING,
        allowNull:false
    },
    description :{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports = Product;