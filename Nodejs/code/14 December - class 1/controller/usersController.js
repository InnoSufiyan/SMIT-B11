import jwt from 'jsonwebtoken';
import Users from '../models/Register.js'
import { json } from 'express';


// @desc    Get all Users
// @route   GET /api/users
// @access  Public

export const getAllUser = async (req, res) => {

    console.log(req.query, "==>> req.query")



    const page = parseInt(req.query.page) || 1;  // Default page is 1
    const limit = parseInt(req.query.limit) || 10;  // Default limit is 10
    const sortBy = req.query.sortBy

    console.log(page, "==>> page")
    console.log(limit, "==>> limit")
    console.log(sortBy, "==>> sortBy")

    const excludingQueries = ['page', 'limit', 'sortBy'];

    excludingQueries.forEach((que) => delete req.query[que])

    console.log(req.query)

    try {
        let allUsers;
        if (req.query) {
            allUsers = await Users.find(req.query)
                .skip((page - 1) * limit)
                .limit(limit)  // Limit the number of results per page
                .sort(sortBy)
                .select('-__v -city')
        } else {
            allUsers = await Users.find()
                .skip((page - 1) * limit)
                .limit(limit)  // Limit the number of results per page
                .sort(sortBy)
                .select('-__v -city')
        }

        console.log(allUsers, "==>> allUsers")

        res.json({
            status: true,
            message: "All users found successfully",
            data: allUsers
        })
    } catch (error) {
        res.json({
            status: false,
            message: "Phat gaya",
            error: error.message
        })
    }
}
// @desc    Get User
// @route   GET /api/users/:id
// @access  Public

export const getUser = async (req, res) => {
    try {

        console.log(req.params.userid)

        const user = await Users.findById(req.params.userid)

        console.log(user, "==>> user")

        res.json({
            status: true,
            message: "user found successfully",
            data: user
        })
    } catch (error) {
        res.json({
            status: false,
            message: "Phat gaya",
            error: error.message
        })
    }
}
// @desc    Update User
// @route   PUT /api/users/:id
// @access  Public

export const updateUser = async (req, res) => {
    try {

        console.log(req.params.userid)
        console.log(req.body)
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) {
            return res.json({
                status: false,
                message: "No Token, please authenticate, Darwaza band hai"
            })
        }
        const bandaKonHai = jwt.verify(token, 'cashew')

        console.log(bandaKonHai, "==>>bandaKonHai")

        if (bandaKonHai.userDetails._id != req.params.userid) {
            return res.json({
                status: false,
                message: "You cannot access this request, Darwaza band hai"
            })
        }

        const updatingUser = await Users.findByIdAndUpdate(req.params.userid, req.body, { new: true })

        console.log(updatingUser, "==>> updatingUser")

        res.status(200).json({
            status: true,
            message: "Resource updated Successfully"
        })

    } catch (error) {
        res.json({
            status: false,
            message: "Phat gaya",
            error: error.message
        })
    }
}
