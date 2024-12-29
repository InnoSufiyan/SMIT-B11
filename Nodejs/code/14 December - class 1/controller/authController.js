import Users from '../models/Register.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer';
import { sendEmailOTP } from '../utils/config.js';
import { v4 as uuidv4 } from 'uuid';

// @desc    SIGNUP
// @route   POST /signup
// @access  Public

export const signupHandler = async (req, res) => {
    console.log("==>>sadasdasd")
    try {
        const { userName, email, password } = req.body

        if (!userName || !email || !password) return res.json({
            status: false,
            message: "Missing Fields"
        })

        const isUserName = await Users.findOne({
            userName: userName
        })

        if (isUserName) return res.json({
            status: false,
            message: "UserName already exists"
        })

        const isUserEmail = await Users.findOne({
            userEmail: email
        })

        if (isUserEmail) return res.json({
            status: false,
            message: "User Email address already used"
        })

        if (password.length < 8) return res.json({
            status: false,
            message: "Password is less than 8"
        })

        console.log("====>> document check hoga")

        console.log("==>> password ka choora karna hai")

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword, "===>> hashedPassword")

        const doc = new Users({
            userName,
            email,
            password: hashedPassword
        })
        console.log("====>> document check hogaya")
        const otp = uuidv4().slice(0, 6);
        doc.otp = otp;
        doc.otpExpires = Date.now() + 600000; // OTP expires in 10 minutes
        doc.isVerified = false
        const responseAfterEmail = await sendEmailOTP(email, otp)
        await doc.save()
        console.log("====>> document save hogaya")
        res.json({
            status: true,
            message: "User Signed up successfully",
            responseAfterEmail
        })
    } catch (error) {
        console.log(error, "==>> error")
        res.json({
            status: false,
            message: "Phat gaya",
            error: error.message
        })
    }
}

// @desc    LOGIN
// @route   POST /login
// @access  Public

export const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body

        console.log(email, "==>> email")
        console.log(password, "==>> password")

        if (!email || !password) return res.json({
            status: false,
            message: "Missing Fields"
        })
        console.log("==>> DB main user check karney jaa raha hun")
        const isUserExists = await Users.findOne({
            email: email
        })

        console.log(isUserExists, "==>> db main se user aagaya")

        if (!isUserExists) return res.json({
            status: false,
            message: "This email is not registered, you can signup"
        })

        console.log("==>> password check karney jaa raha hun")

        console.log(password, "===> password")
        console.log(isUserExists.password, "===> isUserExists.password")

        const isPasswordAuthentic = await bcrypt.compare(password, isUserExists.password);

        if (isPasswordAuthentic) {
            console.log("==>> token bananey jaa raha hun")
            const token = jwt.sign({ userDetails: isUserExists }, 'cashew')

            console.log(token, "==>> token ban gayaF")

            res.json({
                status: true,
                message: "Login successfully",
                token
            })
        } else {
            res.json({
                status: false,
                message: "ٰIncorrect Credentials"
            })
        }





    } catch (error) {
        res.json({
            status: false,
            message: "Phat gaya",
            error: error.message
        })
    }
}

// @desc    LOGIN
// @route   POST /login
// @access  Public

export const verifyEmail = async (req, res) => {
};