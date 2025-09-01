import mongoose, {Schema, model} from "mongoose";

export interface ICategory {
    name: string;
    description: string;
}

const categorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

export const Category = model<ICategory>("Category", categorySchema)