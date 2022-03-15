module.exports = app => {
    const places = require("../controllers/place.controller.js");
    var router = require("express").Router();

    // Create a new Place
    router.post("/", places.create);

    // Retrieve all Places from database
    router.get("/", places.findAll);

     // Retrieve all Places by order name from database
     router.get("/order/name", places.findAllByOrderPlace);

    // Retrieve a single Place using its name
    router.get("/:name",  places.findByName);

    // Update a Place
    router.put("/:id", places.updatePlace);

    // Delete a Place
    router.delete("/:id", places.delete);

    // Basic backend route for the app to use
    app.use('/api/places', router);   
};