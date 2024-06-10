require('dotenv').config();
import express from "express";
import mongoose from "mongoose";
import ProductRoutes from "./routes/Product.route";

const app = express();
const port = process.env.PORT || 3000;
const uriMongoDB =
    process.env.MONGODB_URI ||
    "mongodb+srv://loinguyenlamthanh:9HVuiXXiTrZEsl7D@backenddb.49w86gg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

mongoose
    .connect(uriMongoDB)
    .then(() => {
        console.log("Connected!", process.env.MONGODB_URI);
        console.log("dirname!", __filename);
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(() => {
        console.log("Connected failed!");
    });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", ProductRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Node API!");
});
