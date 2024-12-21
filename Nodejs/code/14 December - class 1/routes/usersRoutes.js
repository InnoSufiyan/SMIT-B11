import express from "express"
import { getAllUser, getUser, updateUser } from "../controller/usersController.js"

const usersRoutes = express.Router()

usersRoutes.get("/", getAllUser)
usersRoutes.get("/:userid", getUser)
usersRoutes.put("/:userid", updateUser)

export default usersRoutes