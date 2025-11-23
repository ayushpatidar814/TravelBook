import { Stay } from "../models/stayModel.js";
import { User } from "../models/userModel.js";
import { Wishlist } from "../models/wishlistModel.js";

const addToWishlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { stayId } = req.body;

        if(!stayId) {
            return res.json({success: false, message: "Missing Product ID"})
        }

        const user = await User.findById(userId);
        const stay = await Stay.findById(stayId);

        if(!user || !stay) {
            return res.json({success: false, message: "User or Stay not found"})
        }

        let wishlist = await Wishlist.findOne({ "user._id": user._id });

        if(!wishlist) {
            wishlist = new Wishlist({
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email
                },
                wishedStays: [],
            });
        }

        const alreadyExists = wishlist.wishedStays.some((s) => s._id.toString() === stay._id.toString());

        if(alreadyExists) {
            return res.json({success: false, message: "Stay already on wishlist"})
        }

        wishlist.wishedStays.push({
            _id: stay._id,
            name: stay.name,
            description: stay.description,
            location: stay.location,
            images: stay.images,
            review: stay.review
        })
        await wishlist.save();

        res.json({success: true, wishlist, message: "Stay added to Wishlist"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const getWishlist = async (req, res) => {
    try {
        const userId = req.user.id;

        const wishlist = await Wishlist.findOne({"user._id": userId})
        
        if(!wishlist) {
            return res.json({success: false, message: "No wishlist found"})
        }

        res.json({success: true, wishlist, message: "Wishlist fetched successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const removeFromWishlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { stayId } = req.body;

        if(!stayId) {
            return res.json({success: false, message: "Stay details missing"})
        }

        const wishlist = await Wishlist.findOne({"user._id": userId})
        
        if(!wishlist) {
            return res.json({success: false, message: "Wishlist not found"})
        }

        wishlist.wishedStays = wishlist.wishedStays.filter((stay) => stay._id.toString() !== stayId)
        await wishlist.save();

        res.json({success: true, wishlist, message: "Stay removed from wishlist"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { addToWishlist, getWishlist, removeFromWishlist }