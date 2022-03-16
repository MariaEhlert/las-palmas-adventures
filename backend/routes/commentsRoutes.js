module.exports = app => {
    const comments = require("../controllers/comment.controller.js");
    var router = require("express").Router();

    // Create a new Comment
    router.post("/", comments.create);

    // Retrieve all Comment from database
    router.get("/", comments.findAll);

    // // Retrieve all Comment of the User from database
    router.get("/place/:idPlace", comments.findByIdPlace);

     // // Retrieve all Comment of the User from database
     router.get("/user/:idUser", comments.findByIdUser);

    // Update a Comment
    router.put("/:idPlace/:idUser", comments.updateComment);

    // Delete a Comment
    router.delete("/:idPlace/:idUser", comments.delete);

    // Basic backend route for the app to use
    app.use('/api/comments', router);   
};