var express = require('express');
var router = express.Router();
var NodeTusServer=require('tus-node-server')
var fs=require('fs')
const server = new NodeTusServer.Server();

server.datastore = new NodeTusServer.FileStore({
  directory: 'files/videos/user-uploads',// this is a temporary folder to save files
  path: '/videos/tus-upload'// on success of file upload file will place to this directory
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({"status":1,"message":"Resumable video upload server running"});
});

module.exports = router;
