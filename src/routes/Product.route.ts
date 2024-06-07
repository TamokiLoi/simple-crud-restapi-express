import { Router } from "express";
import ProductController from "../controllers/Product.controller";

const ProductRoutes = Router();

ProductRoutes.get("/", ProductController.getProducts);
ProductRoutes.get("/:id", ProductController.getProduct);
ProductRoutes.post("/", ProductController.createProduct);
ProductRoutes.put("/", ProductController.updateProduct);
ProductRoutes.delete("/:id", ProductController.deleteProduct);

export default ProductRoutes;
