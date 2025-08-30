import mongoose, { Types, model, Schema } from "mongoose";

export interface ICart {
    user: Types.ObjectId;
    items: [
        {
            product: Types.ObjectId;
            quantity: Number;
            price: Number
        }
    ];
    totalPrice: Number
}

const cartSchema = new Schema<ICart>({

})

export const Cart = model<ICart>("Cart", cartSchema)