import Users from '../models/Register.js'

// @desc    SIGNUP
// @route   POST /signup
// @access  Public

export const signupHandler = async (req, res) => {
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
        const doc = new Users({
            userName,
            email,
            password
        })
        console.log("====>> document check hogaya")
        await doc.save()
        console.log("====>> document save hogaya")

        res.json({
            status: true,
            message: "User Signed up successfully"
        })
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

export const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) return res.json({
            status: false,
            message: "Missing Fields"
        })

        const isUserExists = await Users.findOne({
            email: email
        })

        console.log(isUserExists)

        if (!isUserExists) return res.json({
            status: false,
            message: "This email is not registered, you can signup"
        })

        if (isUserExists.password == password) {
            res.json({
                status: true,
                message: "Login successfully"
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