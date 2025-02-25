import { Request, Response } from "express";
import Products from "../database/models/products";
import { ModelStatic } from "sequelize";


export default class ProductsCreate {
    private model: ModelStatic<Products> = Products;

    async create(request: Request, response: Response) {
        try {
            const { name, price, quantity_in_stock, category } = request.body;

            if (!name || !price || !quantity_in_stock || !category) {
                return response.status(400).json({ error: "fields null." })
            };

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

