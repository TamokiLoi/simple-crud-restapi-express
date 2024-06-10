import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import ProductRoutes from "./routes/Product.route";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uriMongoDB = process.env.MONGODB_URI || "";

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
// app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", ProductRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Node API!");
});
