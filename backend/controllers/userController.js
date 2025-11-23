import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.json({success: false, message: "Please provide full-name, email and password"})
        }

        const existingUser = await User.findOne({ email })

        if(existingUser) {
            return res.json({success: false, message: "User already exist"})
        }

        const avatar = req.file ? req.file.path : null;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            avatar
        })

        const token = jwt.sign({ id: existingUser._id, email:existingUser.email }, process.env.JWT_SECRET, { expiresIn: "10d"});

        res.json({success: true, token, message: "User registered successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
} 

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.json({success: false, message: "Both email and password are required"})
        }

        const existingUser = await User.findOne({ email })
        if(!existingUser){
            return res.json({success: false, message: "User not found"}) 
        }

        const verify = await bcrypt.compare(password, existingUser.password)
        if(!verify) {
            return res.json({success: false, message: "Password did not matched"})
        }

        const token = jwt.sign({ id: existingUser._id, email:existingUser.email }, process.env.JWT_SECRET, { expiresIn: "10d"});

        res.json({success: true, token, message: "Login Successfull"})        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
} 

export { registerUser, getUser }