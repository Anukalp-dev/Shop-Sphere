import mongoose, { Types, Schema, model} from "mongoose"

export interface IProduct {
    // create a product model
    productId: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    stock: number;
}
