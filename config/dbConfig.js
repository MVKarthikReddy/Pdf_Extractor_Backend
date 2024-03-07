const mangoose = require('mongoose')

const connectDb = async () => {
    try {
        // console.log(process.env.MONGO_URL)
        const connect = await mangoose.connect(process.env.MONGO_URL)
        console.log("Database connected : ",connect.connection.host,connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb