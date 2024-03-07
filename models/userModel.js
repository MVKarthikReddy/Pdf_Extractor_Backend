const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the user name"]
        },
        email: {
            type: String,
            required: [true, "Please add the user email"],
            unique: [true, "Email address already taken"]
        },
        password: {
            type: String,
            required: [true, "Please add the user password"]
        },
        token: {
            type: String,
        },
    },
    {
        timestamp: true
    }
    
)

module.exports = mongoose.model("User", userSchema)