import { Request, Response } from "express";
import { ModelStatic } from "sequelize";
import Products from "../database/models/products";

class ProductsService {
    private model: ModelStatic<Products> = Products;

    async create(request: Request, response: Response) {
        try {
            const { name, price, quantity_in_stock, category } = request.body;

            const createdProduct = await this.model.create({
                name, price, quantity_in_stock, category
            });

            return response.status(201).json(createdProduct);
            
        } catch (error) {
            console.error("Error creating product", error);
            return response.status(500).json({ error: "Error creating product." });
        }
    }
}

export default ProductsService;