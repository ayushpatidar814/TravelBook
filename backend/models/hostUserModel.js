import mongoose from 'mongoose'

const hostUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const HostUser = mongoose.model("HostUser", hostUserSchema)