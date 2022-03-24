module.exports = app => {
    const comments = require("../controllers/comment.controller.js");
    var router = require("express").Router();

    // Create a new Comment
    router.post("/", comments.create);

    // Retrieve all Comment from database
    router.get("/", comments.findAll);

    // // Retrieve all Comment of the User from database
    router.get("/place/:id_place", comments.findByIdPlace);

     // // Retrieve all Comment of the User from database
     router.get("/user/:id_user", comments.findByIdUser);

    // Update a Comment
    router.put("/:id_place/:id_user", comments.updateComment);

    // Delete a Comment
    router.delete("/:id_place/:id_user", comments.delete);

    // Basic backend route for the app to use
    app.use('/api/comments', router);   
};