import express from 'express'
import { connectDB } from './utils/config.js'
import Users from './models/Register.js'
import dotenv from "dotenv";
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

const app = express()

app.use(express.json())

app.use(morgan('tiny'))

const PORT = 8000
dotenv.config();

connectDB()


app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)






console.log("====>> chal raha hun main")

app.listen(PORT, () => {
    console.log(PORT, "===>> server chal raha hai")
})