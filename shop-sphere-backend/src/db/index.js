import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionHost = await mongoose.connect(`${process.env.MONGODB_URI}/ShopSphere`)
        console.log(`MongoDb connected succesfully at host: ${connectionHost}`)
    } catch (error) {
        console.log("error connecting DB")
        process.exit(1)
    }
}

export default connectDB