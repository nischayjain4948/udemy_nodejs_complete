require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const db = require("./utils/db.mysql");
const sequelize = require("./utils/db.sequlize");
const productRoutes = require("./routes/routes");
const cors = require("cors");
const Product = require("./sqlModels/product");
const User = require("./sqlModels/user");
const Cart = require("./sqlModels/cart");
const CartItem = require("./sqlModels/cart-item");
const Order = require("./sqlModels/order");
const OrderItem  = require("./sqlModels/order-item");


// require the mongoDB as a DataBase
require("./utils/db.mongo");







// Here we can Query the data with connection pool object (by writting a proper query). 
/* Normal Promise
app.get("/getBooks_NP", (req,res)=>{
db.execute("SELECT * from books").then((result)=>{
    console.log("Result", result);
    res.status(200).json({allBooks:result[0]})
}).catch((error)=>{
    console.log("Something Went Wrong!");
})
})
*/

/* async await!
app.get("/getBooks_AW",  async (req,res)=>{
    try{
    const allBooks = await db.execute("SELECT * from books");
    res.status(200).json({allBooks: allBooks[0]})
    }
    catch(error){
        console.log("Something Went Wrong ", error);
    }
})
*/

/* We use the Sequelize Package for query to the DB => it is an ORM (Object-Relational Mapping) Library gives many function for query 
// #offers
// Models
// Instance
// Queries
 Association
*/



// The below code is specify that, we have to associate the product with user model or schema
Product.belongsTo(User, {constraints:true, onDelete:'CASCADE'});  // this specify that, on delete of User the particular association of the product will also delete.
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through : CartItem}); //many to many relationships
Product.belongsToMany(Cart, {through : CartItem}); // many to many relationships
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(Product, {through: OrderItem});











/*
Sequlize is A ORM || ODM (Object Relational Mapping), used to connect the SQL DataBase successfully!
*/

// sequelize.sync({force:true}).then(res=>{
// console.log("MySql Connected! ");
// }).catch(err=>{
//     console.log("Unable to connect!",err );
// })












/*
// app.get("/docker", (req,res)=>{
//     return res.status(200).json({message:"Docker is running..."})
// })

// app.get("/nischay", (req,res)=>{
//       res.status(200).json({message:`You are nischay jain, your age is 23.`})
// })

*/



app.use(cors());
app.use(express.json());
app.use("/api", productRoutes);





app.listen(PORT, ()=>{
console.log(`Server is Listining on PORT ${PORT}`);
})

