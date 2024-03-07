const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')


const validationToken = asyncHandler(async (req, res, next) => {
    let token
    let authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.SECRET_TOKEN, (err,decoded) => {
            if(err)
            {
                console.log(err)
                res.status(400)
                throw new Error("User is not authorused")
            }
            req.user = decoded.user
            next()
        })

        if(!token)
        {
            res.status(401)
            throw new Error("User not authorised or token not verified")
        }
    }
})

module.exports = validationToken