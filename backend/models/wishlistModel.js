import mongoose from 'mongoose'

const wishlistSchema = new mongoose.Schema({
    user: { 
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        fullName: String,
        email: String,
    },
    wishedStays: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Stay",
                required: true
            },
            name: {type: String, required: true},
            description: {type: String},
            location: {type: String},
            images: [String],
            review: { type: String }
        }
    ]
}, {timestamps: true})

export const Wishlist = mongoose.model("Wishlist", wishlistSchema)