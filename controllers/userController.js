const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @desc Register the user
// @route POST /api/users/register/
// @access public

const registerUser = asyncHandler(
    async (req,res) => {
        console.log(req.body)
        const {username, email, password} = req.body
        if(!username || !email || !password)
        {
            res.status(400);
            throw new Error("All fields are mandatory")
        }

        const userAvailable = await User.findOne({email})

        if(userAvailable)
        {
            res.status(400)
            throw new Error("User already registered")
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const user = await User.create({
            username,
            email,
            password:hashedPass,
            token:"",
        })
 
        if(user)
        {
            res.status(201).json({ message : "User registration successfully completed." })
        }
        else{

            res.status(400)
            throw new Error("User data is not valid")

        }

        // res.json({message: "User registration successful."})
    }
)


// @desc Login the user
// @route POST /api/users/login/
// @access public

const loginUser = asyncHandler(
    async (req,res) => {

        const {email,password} = req.body

        if(!email || !password)
        {
            res.status(400)
            throw new Error("Enter all the details")
        }

        const user = await User.findOne({email})
        if(!user)
        {
            res.status(200).json(
                {
                    msg:"User not registered yet."
                }
            )
        }
        if(user && bcrypt.compare(password,user.password))
        {
            const accessToken = jwt.sign(
                {
                    user:{
                        username: user.username,
                        email: user.email,
                        id: user.id
                    }
                },
                process.env.SECRET_TOKEN,
                {expiresIn:"3600m"}
            )

            const updateToken = await User.findByIdAndUpdate(
                user._id,
                {
                    token:accessToken,
                },
                { new: true }
            )

            res.status(200).json({accessToken})
        }
        else{
            res.status(200).json(
                {
                    msg:"Password doesn't matched"
                }
            )
        }
    }
)

// @desc Current user Information
// @route GET /api/users/current/
// @access private

const currentUser = asyncHandler(
    async (req,res) => {
        res.json(req.user)
    }
)

module.exports = {
    registerUser,
    loginUser,
    currentUser
}