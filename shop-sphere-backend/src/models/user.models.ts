import mongoose, { Types,  Schema, model } from "mongoose";

export interface IUser {
    username: string;
    email: string;
    mobileNumber: string;
    password: string;  
    address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    }[];
    orders: Types.ObjectId[];
    cart: Types.ObjectId[];
    wishlist: Types.ObjectId[];
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
       validate: {
            validator: function(this: IUser, value: string): boolean {return !! (this.mobileNumber || value);},
            message: "Either mobileNumber or email is required"
        }
    },

    mobileNumber: {
        type: String,
        unique: true,
        trim: true,
        validate: {
            validator: function(this: IUser, value: string): boolean {return !! (this.email || value);},
            message: "Either mobileNumber or email is required"
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    address: {
        street: {type: String },
        city: { type: String},
        state: { type: String},
        postalcode: { type: String},
        country: { type: String}
    },

    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }],

    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],

    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }

},
{
    timestamps: true
})

export const User = model<IUser>("User", userSchema)