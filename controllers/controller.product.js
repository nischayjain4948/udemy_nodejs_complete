const Product = require("../sqlModels/product");


exports.createProduct = async (req,res,next) =>{
    try{
    const {title, price, imageUrl, description} = req.body;
    const date = Date.now();
    console.log("date", date);
    await Product.create({title:title, price:price,imageUrl: imageUrl, description: description, createdAt: date, updatedAt: date});
     res.status(201).json({message:"product created successfully"})
    next();
    }
    catch(error){
      res.status(505).json({message:"unable to create product", error});
    }
}


exports.findAllProducts = async (req,res,next) =>{
    try{
        const result = await Product.findAll();
        res.status(200).json({result})
        next();
    }
    catch(error){
    res.status(404).json({message:"Unable to find the products"})
    }

}

exports.findSingleProduct = async (req,res,next) =>{
    try{
        const {prodId} = req.query;
        console.log("prodId : ", prodId);
        const product  = await  Product.findAll({where:{id:prodId}});
        if(!product){
            return res.status(200).json({product});
        }
         res.status(200).json({product});
         next();
    }
    catch(error){
        res.status(505).json({message:"unable to find products"});
    }


}


exports.updateSingleProduct = async (req,res,next) =>{
    try{
    const {id} = req.params;
    console.log("params is : ", id);
     const {title, description,price} = req.body;
    await Product.update( {title, price, description}, {where:{id:id}})
    return res.status(200).json({message:`record updated successfully -: ${id}`});
    }
    catch(error){
         console.log("Something went wrong", error);
        return res;
        
    }

}

exports.deleteProduct = async (req,res,next) =>{
    try{
    const {id} = req.params;
    await Product.destroy({where:{id:id}});
    return res.status(200).json({message:`Product deleted successfully -: ${id}`});

    }
    catch(error){
        return res.status(505).json({message:"Unable to delete product"});
    }
}