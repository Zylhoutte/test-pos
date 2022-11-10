const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const mongoose = require('mongoose')






// @desc Register new user
// @route POST /api/users
// @access Public

const registerAdmin =  asyncHandler(async (req, res) => {
    const {username, email, password } = req.body 
        

    if ( !username || !email || !password ) {
        res.status(400)
        throw new Error('Please enter all fields')
    }    
    
    // Check if user exists
    const adminExist = await Admin.findOne({ email })

    if(adminExist) {
        throw new Error('admin already exists')
    }

    // Hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User

    const admin = await Admin.create({
        username,
        email,
        password: hashedPassword
    })

    if(admin) {
        res.status(201).json({
            _id: admin._id,
            username: admin.username,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Admin')
    }
})

// @desc  Authentication user
// @route POST /api/users/login 
// @access Public


const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password} = req.body

    // Check for email

    const admin = await Admin.findOne({email})

    if(admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin._id,
            username: admin.username,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }

})

// @desc Get user data
// @route GET /api/users/me
// @access Private


const LinkStart = asyncHandler(async (req, res) => {
   res.status(200).json(req.admin)
})

// Generate token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}





module.exports = {
    registerAdmin,
    loginAdmin,
    LinkStart,

}