import mongoose from "mongoose";

const staySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    review: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    hostUser: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        fullName: String,
        email: String,
        phone: String,
        avatar: String
    },
    amenities: {
        type: [String],
        enum: ['Free Wi-Fi', "Smart TV", "Air Conditioning", "Swimming Pool", "Kitchen Access", "King/Queen Size Bed", "Free Parking", "Breakfast Included", "24/7 CCTV", "Fitness Center", "Pet Friendly", "Room Service", "Private Balcony", "SPA Access", "Mini Bar", "Heating", "Mountain View", "Sea/Lake View"]
    },

}, {timestamps: true})

export const Stay = mongoose.model("Stay", staySchema)