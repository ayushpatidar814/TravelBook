import { Stay } from "../models/stayModel.js";
import { User } from '../models/userModel.js'

const hostaStay = async (req, res) => {
    try {
        const { name, description, location, city, amenities } = req.body
        const hostUserId = req.user.id
        
        if(!req.user || !req.user.id) {
            return res.json({success: false, message: "Unauthorised"})
        }

        if(!name || !description || !location || !city ) {
            return res.json({success: false, message: "All Details are mandatory"})
        }

        const images = req.files ? req.files.map((file) => file.path) : [];

        const user = await User.findById(hostUserId).select("fullName email phone avatar");

        if(!user) {
            return res.json({success: false, message: "Host user not found"})
        }

        const hostUser = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            avatar: user.avatar
        }

        const randomRating = Math.floor((Math.random() * 5) + 1)

        const stay = await Stay.create({
            name,
            description,
            location,
            city,
            review: randomRating,
            images,
            hostUser,
            amenities
        });

        res.json({success: true, stay, message: "Hosted a stay successfully"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const listStay = async (req, res) => {
    try {
        const list = await Stay.find().populate()

        res.json({success: true, list, message: "All stays fetched successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { hostaStay, listStay}