const express = require("express")
const multer = require("multer")

//const app = express()

const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        dir1 ="F:\\Test\\EduHap\\app\\src\\file-store"
      cb(null, dir1)
    },
    filename: (req, file, cb) => {
      cb(null , file.originalname);
    },
  })
  
  const uploadStorage = multer({ storage: storage1 })
  module.exports =  {uploadStorage}