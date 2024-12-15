import express from "express"
import { getAllUser, getUser } from "../controller/usersController.js"

const usersRoutes = express.Router()

usersRoutes.get("/", getAllUser)
usersRoutes.get("/:userid", getUser)

export default usersRoutes