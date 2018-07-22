/*
    First routing function
*/
const tus=require('tus-node-server')
const server=new tus.Server()

server.datastore = new tus.FileStore({
  directory: 'files/videos/user-uploads',
  path: '/api/files/resumable-upload'
});

var resumableVideoUploadController={}
resumableVideoUploadController.uploadVideos=function(req,res){
    console.log('req',req.filename)
    server.handle(req, res, {
       // filename: 'HelloRonitSarma',
        onSuccess (fileName, filePath, done) {
            console.log('fileName',fileName,'filePath',filePath)
          //Users.save({ user: req.user, uploads: [filePath] });
          done();
        }
      });
}

resumableVideoUploadController.patchController=function(req,res){
    server.handle(req, res, {
        onSuccess (fileName, filePath, done) {
          // Do stuff here
          console.log('fileName',fileName,'filePath',filePath)
          // ...and maybe some async stuff
        //   database.ping((err, res) => {
        //     if (err) console.error(err);
        //     else {
        //       console.log('Hey');
              done();
        //     }
        //   });
        }
      });
}

resumableVideoUploadController.requestAllController=function(req,res){
    server.handle(req, res, {
        onError (err, statusCode) {
          console.error(err);
    
          // The response must be ended if
          // using a custom error handler.
          // If a custom error handler is not
          // defined for a handler, tus-node-server
          // will end the response and take care
          // of the status codes consistent with
          // the protocol.
          res.sendStatus(statusCode);
          console.log('statusCode',statusCode)
        }
      });
}

module.exports=resumableVideoUploadController
