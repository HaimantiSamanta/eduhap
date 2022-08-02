const express = require('express')
const route = express.Router();

//const {upload,compressProductVideo} = require('../middleware/upload-video')
const {upload,compressProductVideo} = require('../middleware/upload-video')
const {uploadStorage} = require('../middleware/upload-file')
const {uploadimage,compressedImg} =require('../middleware/upload-image')

const registrationController = require('../controllers/registration')
const compressController = require('../controllers/compression')

route.post('/registration',registrationController.registration);
route.post('/loginViaOtp',registrationController.loginViaOtp);
route.post('/otpVerify',registrationController.otpVerify);

//route.post('/image-upload',[upload.single('image').compressProductVideo],compressController.imagecompress);
route.post('/video-upload', [upload.single('video'),compressProductVideo],compressController.videocompress);
route.post('/image-upload', [uploadimage.single('image'),compressedImg],compressController.imagecompress);

route.post("/upload/single", uploadStorage.single("file"),compressController.fileupload);

module.exports = route;