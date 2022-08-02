const multer = require('multer');
const express = require('express');
const fs = require('fs')
const path = require('path');

const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const FFmpeg = require('fluent-ffmpeg');
FFmpeg.setFfmpegPath(ffmpeg.path);
//const multer = require('multer');
//const sharp = require('sharp')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // var dir ="F:\\Test\\EduHap\\app\\src\\src-ip-video"
      var dir = "./app/src/src-ip-video"
        cb(null, dir);
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }

 });
 
var upload = multer({ storage: storage });

const compressProductVideo = async(req,res,next)=>{
//async function compressedVideo() {
  try {
   FFmpeg("F:\\Test\\EduHap\\app\\src\\src-ip-video\\tst.mp4")

          //.output(`dir1+req.files[i].filename`)
          .videoCodec('libx264')
          //.noAudio()
          //.output("./src/resized-vedio/tst-resized.mp4")
          .output("F:\\Test\\EduHap\\app\\src\\resized-vedio\\tst-resized.mp4")
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
          next()
          } catch (error) {
            next()
            console.log(error);
          }
}
//compressedVideo();  
module.exports =  {upload,compressProductVideo}
