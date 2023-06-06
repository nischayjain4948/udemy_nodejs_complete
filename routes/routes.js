const router = require("express").Router();
const productController = require("../controllers/controller.product");


router.post("/product", productController.createProduct)
router.get("/getproducts", productController.findAllProducts);
router.get("/getproduct", productController.findSingleProduct);
router.patch("/updateproduct/:id", productController.updateSingleProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);




module.exports = router;