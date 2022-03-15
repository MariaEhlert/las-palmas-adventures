var multer  = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/Places');
    },
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

var upload = multer({storage: storage});


module.exports = uploadPlace;