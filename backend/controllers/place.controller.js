const db = require("../models");
const Place = db.Places;
const Op = db.Sequelize.Op;

// Create and Save a new Place
exports.create = (req, res) => {
    //Validate request for place name and type
    if (!req.body.name || !req.body.type) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Place Model with request data
    let place = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        creation: req.body.creation,
        locationIdApi: req.body.locationIdApi,
        locationTypeApi: req.body.locationTypeApi
    };

    try {
        place.photo = req.file.filename
      } catch (error) {
        console.log("No hay img")
      }

    // Save new Place in the database
    Place.create(place)
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Place."
            });
        });

};

// Retrieve all Places from the database.
exports.findAll = (req, res) => {
    Place.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving places."
            });
        });
};

// Retrieve all Places by order name 9from the database.
exports.findAllByOrderPlace = (req, res) => {
    Place.findAll({ order: ['name']})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving places."
            });
        });
};

// Find a single Place with its name
exports.findByName = (req, res) => {
    const name = req.params.name;
    Place.findOne({ where: { name: name } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Place with name=" + name
            });
        });
};

// Update a Place
exports.updatePlace = (req, res) => {
    const id = req.params.id;
    // If there is no parameters -> num == 0 & cannot update place
    // If theres a req.body parameter then num==1 & place is updated
    Place.update(req.body, { where: { id: id } }).then(num => {
        if (num == 1) {
            res.send({
                message: "Place was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Place with id=${id}. Maybe Place was not found or req.body is empty!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Place with id=" + id
            });
        });
};

// Delete a Place with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Place.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Place was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Place with id=${id}. Maybe Place was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Place with id=" + id
            });
        });
};