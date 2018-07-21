var express = require('express');
var router = express.Router();
var trimRequest=require('trim-request')
var resumableVideoUploadController=require('./Controllers/resumablevideoUpload')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
API end points
*/
router.use('/resumable-video-upload',trimRequest.all,resumableVideoUploadController.uploadVideos)


module.exports = router;
