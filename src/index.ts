import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/Product.model";

const app = express();
const port = 3000;
const uriMongoDB =
    "mongodb+srv://loinguyenlamthanh:9HVuiXXiTrZEsl7D@backenddb.49w86gg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

mongoose
    .connect(uriMongoDB)
    .then(() => {
        console.log("Connected!");
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(() => {
        console.log("Connected failed!");
    });

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node API!");
});

/* Start Product API */
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(500).json({ message: error?.message });
    }
});

app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error: any) {
        res.status(500).json({ message: error?.message });
    }
});

app.post("/api/products", async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error: any) {
        res.status(500).json({ message: error?.message });
    }
});
/* End Product Api */
