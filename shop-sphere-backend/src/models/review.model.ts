import mongoose, {Types, Schema, model, Document} from "mongoose";


export interface IReview extends Document{
    user: Types.ObjectId;
    product: Types.ObjectId;
    rating: number;
    comment?: string;
    createdAt: Date;
    updatedAt: Date;
}

const reviewSchema = new Schema<IReview>(
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

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        comment: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

export const Review = model<IReview>("Review", reviewSchema);