import mongoose from "mongoose";
import nodemailer from 'nodemailer';


export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

async function sendEmailOTP(mail, otp) {
    const emailConfig = {
        service: 'gmail',
        auth: {
            user: process.env.PORTAL_EMAIL,
            pass: process.env.PORTAL_PASSWORD,
        },
    };
    console.log(emailConfig, "==>> email bhejney k function k ander hun")
    const transporter = nodemailer.createTransport(emailConfig);

    console.log(transporter, "==>> transporter")

    const mailOptions = {
        from: process.env.PORTAL_EMAIL,
        to: mail,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`,
    };

    console.log(mailOptions, "=>> mailOptions")

    try {
        await transporter.sendMail(mailOptions);
        console.log("==>> OTP sent successfully");
        return `OTP sent to ${mail} via email`;
    } catch (error) {
        throw `Error sending OTP to ${mail} via email: ${error}`;
    }
}

export { sendEmailOTP };