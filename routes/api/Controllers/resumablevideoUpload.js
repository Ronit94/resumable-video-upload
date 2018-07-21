/*
    First routing function
*/
var resumableVideoUploadController={}

resumableVideoUploadController.uploadVideos=function(req,res){
    res.send({'status':0,'message':'Resumable video upload working'})
}

module.exports=resumableVideoUploadController
