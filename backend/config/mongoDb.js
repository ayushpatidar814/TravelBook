import mongoose from "mongoose";

const connectDb = () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Database connected!")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDb;