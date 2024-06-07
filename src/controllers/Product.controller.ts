import { Request, Response } from "express";
import { Product } from "../models/Product.model";
import { showError } from "../utils";

const getProductById = async (id: string, res: Response) => {
    const product = await Product.findById(id);
    return res.status(200).json(product);
};

const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error: unknown) {
        showError(error, res);
    }
};

const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        getProductById(id, res);
    } catch (error: unknown) {
        showError(error, res);
    }
};

const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error: unknown) {
        showError(error, res);
    }
};

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product need update not found!" });
        }
        getProductById(id, res);
    } catch (error: unknown) {
        showError(error, res);
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product need delete not found!" });
        }
        res.status(200).json({ success: true });
    } catch (error: any) {
        res.status(500).json({ message: error?.message });
    }
};

const ProductController = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };

export default ProductController;
