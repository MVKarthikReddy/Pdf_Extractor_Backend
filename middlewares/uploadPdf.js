const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname)
    },
  })
  
const uploadStorage = multer({ storage: storage, fileFilter: (req, file, cb) => {
    // Allow only PDF files
    if (file.mimetype !== 'application/pdf') {
      cb(new multer.MulterError('LIMIT_FILE_TYPE', 'Only PDFs are allowed!'));
    } else {
      cb(null, true);
    }
} });
  
module.exports = uploadStorage