require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const db = require("./utils/db.mysql");
const sequelize = require("./utils/db.sequlize");
const productRoutes = require("./routes/routes");
const cors = require("cors");




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
sequelize.sync().then(res=>{
console.log("MySql Connected! ");
}).catch(err=>{
    console.log("Unable to connect!",err );
})


app.use(cors());
app.use(express.json());
app.use("/api", productRoutes);






app.listen(PORT, ()=>{
console.log(`Server is Listining on PORT ${PORT}`);
})

