import express from 'express'
import { loginHandler, signupHandler } from '../controller/authController.js'

const authRoutes = express.Router()

authRoutes.post("/signup", signupHandler)
authRoutes.post("/login", loginHandler)

export default authRoutes