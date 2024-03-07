
const constants = require('../constants')

const errorhandler  = (err, req, res, next) => {
    const statusCode = err.statusCode
    console.log(constants.VALIDATION)

    switch(statusCode)
    {
        case constants.VALIDATION : res.json({
            title : "VALIDATION ERROR",
            message : err.message,
            stackTrace : err.stack
        })

        case constants.UNAUTHORIZED : res.json({
            title : "UNAUTHORIZED",
            message : err.message,
            stackTrace : err.stack
        })

        case constants.FORBIDDEN : res.json({
            title : "FORBIDDEN ERROR",
            message : err.message,
            stackTrace : err.stack
        })

        case constants.NOT_FOUND : res.json({
            title : "NOT FOUND",
            message : err.message,
            stackTrace : err.stack
        })

        case constants.SERVER_ERROR : res.json({
            title : "SERVER ERROR",
            message : err.message,
            stackTrace : err.stack
        })

        default : res.json(
            {
                message : "Everything is going good"
            }
        )

    }
}

module.exports = errorhandler