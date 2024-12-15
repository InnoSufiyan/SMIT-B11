import Users from '../models/Register.js'

// @desc    Get all Users
// @route   GET /api/users
// @access  Public

export const getAllUser = async (req, res) => {
    try {
        const allUsers = await Users.find()

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