import { HostUser } from "../models/hostUserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const hostregister = async (req, res) => {
    try {
        const { name, email, password, phone, location } = req.body;

        if( !name || !email || !phone || !location || !password ) {
            return res.json({success: false, message: "All fields are mendatory"})
        }

        const userExist = await HostUser.findOne({email})

        if(userExist) {
            return res.json({success: false, message: "User already exist"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const avatar = req.file?.path || "";

        const register = await HostUser.create({
            name,
            email,
            password: hashedPassword,
            phone,
            location,
            avatar
        })

        const token = jwt.sign({ id: existingHost._id, email:existingHost.email }, process.env.JWT_SECRET, { expiresIn: "10d"})

        res.json({success: true, token, message: "Registration Successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const hostLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if( !email || !password ) {
            return res.json({success: false, message: "Both email and password are required"})
        }

        const existingHost = await HostUser.findOne({email})
        if(!existingHost) {
            return res.json({success: false, message: "User not found"})
        }

        const verify = await bcrypt.compare(password, existingHost.password)

        if(!verify) {
            return res.json({success: false, message: "Password did not matched"})
        }

        const token = jwt.sign({ id: existingHost._id, email:existingHost.email }, process.env.JWT_SECRET, { expiresIn: "10d"})

        res.json({success: true, token, message: "Login successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { hostregister, hostLogin }