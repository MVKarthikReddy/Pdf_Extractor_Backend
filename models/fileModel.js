const mongoose = require('mongoose')

const pdfSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        title : {
            type: String,
            required: [true, "Please add the title"]
        },
        pdf : {
            type: String,
            required: [true, "Please add the pdf"]
        },
        
    },
    {
        timestamp: true
    }
    
)

module.exports = mongoose.model("Pdf",pdfSchema)