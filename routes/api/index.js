var express = require('express');
var router = express.Router();
var trimeRequest=require('trim-request')
var resumableVideoUploadController=require('./Controllers/resumablevideoUpload')
/* GET home page. */
router.get('/', function (req, res) {
      res.render('index',{'title':'Resumable Video upload'});
});
router.post('/api/files/resumable-upload',trimeRequest.all,resumableVideoUploadController.uploadVideos)
router.patch('/api/files/resumable-upload/:fileId',trimeRequest.all,resumableVideoUploadController.patchController)
router.all('/api/files/resumable-upload/*',trimeRequest.all,resumableVideoUploadController.requestAllController)
module.exports = router;
