import { Router } from "express";
// Import the controller functions
import {getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductStats,} from "../controller/productController.js"
import validateProduct from "../middleware/validateProduct.js";

const router = Router();

// Public or protected GET routes
router.route('/').get(getProducts).post(validateProduct,createProduct);
router.get('/stats', getProductStats);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
 
export default router; 