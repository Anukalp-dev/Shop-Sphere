import mongoose, { Types, Schema, model} from "mongoose"

export interface IProduct {
    // create a product model
    productId: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

const productSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        trim: true,
    },

    price: {
        type: Number,
        required: true,
        trim: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    stock: { 
        type: Number,
        trim: true
    }
    

    
},
{
    timestamps: true
})

export const Product = model<IProduct>("Product", productSchema);
