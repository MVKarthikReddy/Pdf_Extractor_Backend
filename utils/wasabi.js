const AWS = require("aws-sdk");


AWS.config.update({
    accessKeyId: process.env.API_KEY,
    secretAccessKey: process.env.API_SECRET,
    region: process.env.REGION,
    endpoint: `https://s3.${process.env.REGION}.wasabisys.com`, // Replace with your Wasabi endpoint
  });
  
const s3 = new AWS.S3();


// const s3 = new aws.S3({
//     accessKeyId: "5DX0TE97FFW1M2TPPRKC",
//     secretAccessKey: process.env.API_SECRET,
//     endpoint: 'https://s3.us-west-1.wasabisys.com',
//   });


module.exports = s3;