

//  function apiResponse(results){
//     return JSON.stringify({"status":200, "response": results});
// }

 exports.videocompress = async (req, res) =>{
    var video = req.files;
    // res.send(apiResponse({message: ' video File uploaded successfully.', video}));
    res.status(200).json( { message: "video File uploaded successfully.", })
    //.catch(err => {
      res.status(500)
      .json({ error: 'err' }) 
       // })
                       

        }

 exports.fileupload = async (req, res) =>{
  var file = req.files;
  //res.send(apiResponse({message: ' File uploaded successfully.', file}));
  res.status(200).json( { message: "File uploaded successfully.", })
  //.catch(err => {
    res.status(500)
    .json({ error: 'err' }) 
     // })
 }

 exports.imagecompress = async (req, res) =>{
  var image = req.files; 
  // res.send(apiResponse({message: ' image File uploaded successfully.', image}));
    res.status(200).json( { message: "image File uploaded successfully", })
//.catch(err => {
  res.status(500)
  .json({ error: 'err' })
//})
 }

        

 
 