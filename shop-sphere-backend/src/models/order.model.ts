import mongoose, { Types, model, Schema} from "mongoose";
import { Product } from "./product.model";

export interface IOrder {
    user: Types.ObjectId;
    items: {
        product: Types.ObjectId;
        quantity: number;
        price: number
    }[];
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    paymentMethods: string;
    paymentResult?: {
        transactionId: string;
        status: string;
        updateTime: Date
    };
    totalprice: number;
    status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
    createdAt: Date;
    updatedAt: Date;

}

const orderSchema = new Schema<IOrder>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            require: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
    }],

    shippingAddress: {
        street: {
            type: String,
            required: true 
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalcode: {
            type: String,
            required: true
        },
        country: { 
            type: String,
            required: true
        }
    },

    paymentMethods: {
        type: String,
        required: true
    },

    paymentResult: {
        transactionId: { type: String},        
        status: { type: String},        
        updateTime: { type: Date}        
    },

    totalprice: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
        default: "pending"
    }
},
    {
        timestamps: true
    }
);


export const Order = mongoose.model<IOrder>("Order", orderSchema);