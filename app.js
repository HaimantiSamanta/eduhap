const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const FFmpeg = require('fluent-ffmpeg');
FFmpeg.setFfmpegPath(ffmpeg.path);
// const processVideo = require('./app/src/video-compress');
// const routine = require('./app/src/routine');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

const router = require('./app/routers/index');
app.use('/', router);

app.get('/', (req, res) => {
    res.json({"message": "This is for testing"});
});

app.listen(3002, () => {
    console.log("Server is listening on port 3002");
});