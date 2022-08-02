const express = require('express');
const path = require("path")
//const app = express();
const multer = require('multer');
const sharp = require('sharp');   


//const uploadPath = path.join(__dirname,'../','src','src-ip-image')
var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
       dir2= "F:\\Test\\EduHap\\app\\src\\src-ip-image"
       cb(null, dir2);
      // cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
       cb(null, file.originalname);
    }
 });
 var uploadimage = multer({ storage: storage2 });

 const compressedImg = async(req,res,next)=>{
//  async function compressedImg() {
    try {
      //let compressedVideoPath =path.join(__dirname,'../','src','resized-image')
     // console.log(compressedVideoPath)
     sharp("F:\\Test\\EduHap\\app\\src\\src-ip-image\\abcd.jpg")
      //sharp(req.file.path)
      .jpeg({quality:50,chromaSubsampling:'4:4:4',progressive:true})
        .resize({
          width: 150,
          height: 97
        })
      // .toFile("sammy-resized.png");
      .toFormat("jpeg", { mozjpeg: true })
      .toFile("F:\\Test\\EduHap\\app\\src\\resize-image\\abcd-resized.jpg")
 
      //.toFile(compressedVideoPath)
      //.run();
     // next()
  
    } catch (error) {
        next()
        console.log(error);
      }
  }
  
  //compressedImg();

 module.exports =  {uploadimage,compressedImg}