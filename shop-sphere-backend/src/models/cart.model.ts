import mongoose, { Types, model, Schema, mongo } from "mongoose";

export interface ICart {
    user: Types.ObjectId;
    items: {
            product: Types.ObjectId;
            quantity: number;
            price: number
        }[];
    totalPrice: number
}

const cartSchema = new Schema<ICart>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        trim: true,
        required: true,
        unique: true
    },

    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        }

    }],

    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }

})

cartSchema.pre("save", function(next){
    this.totalPrice = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    next()
});

export const Cart = model<ICart>("Cart", cartSchema);