module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const auth = require("../controllers/auth.controller.js");
    var router = require("express").Router();
    var upload = require('../multer/uploadUsers');

    // Create a new User
    router.post("/", upload.single('photo'), users.create);

    // Retrieve all Users from database
    router.get("/", users.findAll);

    // Retrieve a single User using its name
    router.get("/:name", auth.isAuthenticated, users.findByName);

    // Update a User
    router.put("/:id", auth.isAuthenticated , upload.single('photo') , users.UpdateUser);

    // Delete a User
    router.delete("/:id", users.delete);

    //Login User
    router.post("/signin", auth.signin);

    // Basic backend route for the app to use
    app.use('/api/users', router);

    // TESTING GENERAR CONTRASEÑA
    // router.get("/test/getPas", users.generate);
};