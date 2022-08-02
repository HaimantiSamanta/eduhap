

 function apiResponse(results){
    return JSON.stringify({"status":200, "response": results});
}

 exports.videocompress = async (req, res) =>{
     
    //const {filename: video} = req.file;
    var video = req.files;
    // if(req.file){
    //   FFmpeg(req.file.path)
    //   //console.log(file.path)
    //             .videoCodec('libx264')
    //             // .resize({
    //             //     width: 150,
    //             //     height: 97
    //             //   })
    //             //.noAudio()
    //             .output(req.file.destination)
               	
    //             .on('progress', function(progress) { 
    //             console.log('... frames: ' +   progress.frames);
                
    //             })
    //             .on('error', function(err) {
    //                 console.log('An error occurred: ' + err.message);    
    //                 })
    //             .on('end', function() { 
    //             console.log('Finished processing'); 
                
    //             })
    //             .run();
    //         res.send(apiResponse({message: ' video File uploaded successfully.', video}));
    //         }
////***************************************final *******************
            // if(req.files){
            //     console.log("req.files",req.files[0])
            //     var dir1 ="F:\\Test\\EduHap\\app\\src\\resized-video"
            //     for(let i=0;i<req.files.length;i++){
            //        await new FFmpeg(req.files[i].path)
            //      //FFmpeg("./src-ip-video/tst.mp4")
            //         .videoCodec('libx264')
            //         .on('progress', function(progress) { 
            //             console.log('... frames: ' +   progress.frames);
            //         })
            //         .on('error', function(err) {
            //                             console.log('An error occurred: ' + err.message);    
            //                             })
            //         .withMetadata()
            //         .output(dir1)
            //      // .output("./resized-vedio/tst-resized.mp4")

            //         // //.toFile(dir+req.files[i].filename)
            //         }
                  // .run()
                    res.send(apiResponse({message: ' video File uploaded successfully.', video}));
                       
                
////***********************************end****************************************** 

        }

 exports.fileupload = async (req, res) =>{
  var file = req.files;
  res.send(apiResponse({message: ' video File uploaded successfully.', file}));
 }

 exports.imagecompress = async (req, res) =>{
  var image = req.files;
  res.send(apiResponse({message: ' video File uploaded successfully.', image}));
 }

        

 
 