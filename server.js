const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDb = require('./config/dbConfig');
const errorhandler = require('./middlewares/errorHandler');

// const { Wasabi } = require('wasabi-sdk');




const app = express()

app.use(cors())
app.use(express.json())

connectDb()

const port = process.env.PORT || 5000


app.use("/api/users/",require('./routes/userRoute'))
app.use("/api/",require('./routes/pdfRoute'))


app.use(errorhandler)

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})