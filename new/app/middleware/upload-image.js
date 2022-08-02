const express = require('express');

//const app = express();
const multer = require('multer');
const sharp = require('sharp');   

var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        dir2= "F:\\Test\\EduHap\\app\\src\\src-ip-image"
       cb(null, dir2);
    },
    filename: function (req, file, cb) {
       cb(null, file.originalname);
    }
 });
 var uploadimage = multer({ storage: storage2 });

 const compressedImg = async(req,res,next)=>{
//  async function compressedImg() {
    try {
      await sharp("F:\\Test\\EduHap\\app\\src\\src-ip-image\\121.jpg")
        .resize({
          width: 150,
          height: 97
        })
      // .toFile("sammy-resized.png");
        .toFormat("jpeg", { mozjpeg: true })
        .toFile("F:\\Test\\EduHap\\app\\src\\resize-image\\121-resized.jpg");
       //.toFile("./resized-image/resized.jpg")
    } catch (error) {
        next()
        console.log(error);
      }
  }
  
  //compressedImg();

 module.exports =  {uploadimage,compressedImg}