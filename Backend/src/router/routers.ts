import { Router } from "express";
import ProductsCreate from "../controller/prodctsCreate";



const router: Router = Router();
const productsCreate = new ProductsCreate();

router.post("/products", (req, res) => {
    productsCreate.create(req, res);
});

export default router;