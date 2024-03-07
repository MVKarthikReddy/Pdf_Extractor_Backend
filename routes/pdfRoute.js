const express = require('express')
const { uploadPdf,getPdfs } = require('../controllers/pdfController')
const validationToken = require('../middlewares/validationHandler')
const uploadStorage = require('../middlewares/uploadPdf')


const router = express.Router()

router.use(validationToken)

router.post("/upload", uploadStorage.single('pdf') ,uploadPdf)
router.get("/pdf", getPdfs)


module.exports = router