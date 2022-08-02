const fs = require("fs");
const path = require('path');
const multer = require('multer');
const express = require('express')
//const {upload} = require('../middleware/upload-video')
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const FFmpeg = require('fluent-ffmpeg');
FFmpeg.setFfmpegPath(ffmpeg.path);
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       var dir ="F:\\Test\\EduHap\\app\\src\\src-ip-video"
        cb(null, dir);
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }

 });
 
 var upload = multer({ storage: storage });
app.post('/video-upload', upload.single('video'),(req, res) => {
    // const video = req.video;
     const {filename: video} = req.file;
     if(req.file){
      FFmpeg(req.file.path)
                 .videoCodec('libx264')
                 //.noAudio()
                 .output(req.file.destination)
                 .on('error', function(err) {
                   console.log('An error occurred: ' + err.message);    
                 })	
                 .on('progress', function(progress) { 
                   console.log('... frames: ' +   progress.frames);
                   
                 })
                 .on('end', function() { 
                   console.log('Finished processing'); 
                   
                 })
                 .run();
                 // fs.unlinkSync(req.file.path)
                 // res.redirect('/')
 
     res.send(apiResponse({message: ' video File uploaded successfully.', video}));
             }
            })
 


function apiResponse(results){
    return JSON.stringify({"status":200, "response": results});
}


//exports.videocompress= async 

app.listen(3002,() =>{
  console.log('Server started on port 3002...');
});
