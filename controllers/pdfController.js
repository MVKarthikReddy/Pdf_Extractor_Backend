const asyncHandler = require('express-async-handler')
const Pdf = require("../models/fileModel")
const s3 = require("../utils/cloudinary")
const fs = require('fs')

// @desc upload a pdf
// @route POST /api/upload/
// @access private
const uploadPdf = asyncHandler(
    async (req,res) => {

        console.log("Hello ")
        const user_id = req.user.id
        console.log(req.body.title,req.file)

        try {
            // Check if file upload was successful
            if (!req.file) {
              return res.status(400).json({ message: 'No file uploaded!' });
            }

            const file = req.file;

            // Read the file from disk
            const fileContent = fs.readFileSync(file.path);

            // S3 parameters
            const params = {
                Bucket: 'uploadpdfs',
                Key: file.originalname,
                Body: fileContent,
                ContentType: 'application/pdf',
            };


            s3.upload(params, async (err, data) => {
                if (err) {
                console.error(err);
                return res.status(500).send('Error uploading file to Wasabi.');
                }

                function getPresignedUrl(bucketName, objectKey, expiration) {
                    const params = {
                      Bucket: bucketName,
                      Key: objectKey,
                      Expires: expiration, // Time in seconds until the URL expires
                    };
                  
                    return s3.getSignedUrl('getObject', params);
                }

                const presignedUrl = getPresignedUrl('uploadpdfs', file.originalname, 20000);
                console.log(presignedUrl);

                const title = req.body.title
                const pdf = presignedUrl

                const pdfs = await Pdf.create(
                    {
                        user_id,
                        title,
                        pdf,
                    }
                    
                )
                // File uploaded successfully
                res.status(200).send('File uploaded successfully.');
            })

            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Upload failed!' });
        }

    }
)

// @desc get all pdf
// @route GET /api/pdf/
// @access private

const getPdfs = asyncHandler(async(req,res) => {

    const pdfs = await Pdf.find({user_id: req.user.id})
    res.status(200).json({
        pdfs
    })

})
module.exports = {
    uploadPdf,
    getPdfs
}