import mongoose, { Schema, Types } from "mongoose";

export interface IWishlist {
    user: Types.ObjectId;
    product: Types.ObjectId
};

const wishlistSchema = new Schema<IWishlist>(
    {
         user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const Wishlist = mongoose.model<IWishlist>("Wishlist", wishlistSchema)