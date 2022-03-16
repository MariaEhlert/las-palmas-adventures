var multer  = require('multer');

//Upload a image
var storage = multer.diskStorage({
    //Attribute for set the destination folder
    destination: (req, file, cb) => {
      cb(null, './public/images/Users');
    },
    //Attribute to set the filename and file type
    filename: (req, file, cb) => {
      console.log("Comprobando El Fichero Subido");
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var uploadUser = multer({storage: storage});


module.exports = uploadUser;