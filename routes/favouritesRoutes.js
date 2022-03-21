module.exports = app => {
    const favourites = require("../controllers/favourites.controller.js");
    var router = require("express").Router();

    // Create a new Favourites
    router.post("/", favourites.create);

    // Retrieve all Favourites from database
    router.get("/:id_user", favourites.findAllByUser);

    // Update a Favourites
    router.put("/:id_place/:id_user", favourites.updateFavourite);

    // Delete a Favourites
    router.delete("/:id_place/:id_user", favourites.delete);

    // Basic backend route for the app to use
    app.use('/api/favourites', router);   
};