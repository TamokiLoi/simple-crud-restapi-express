import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document {
    name: string;
    quantity: number;
    price: number;
    image: string;
}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: [true, "Please enter product name"] },
        quantity: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        image: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
