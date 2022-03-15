const db = require("../models");
const User = require("../models/users");
const Place = require("../models/places");
const Favourite = db.Favourites;
const Op = db.Sequelize.Op;

// Create and Save a new Favourite
exports.create = (req, res) => {
    //Validate request for comment text
    if (!req.body.idUser || !req.body.idPlace) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Favourite Model with request data
    let favourite = {
        idUser: req.body.idUser,
        idPlace: req.body.idPlace,
    };

    // Save new Favourite in the database
    Favourite.create(favourite, { fields: ['idUser', "idPlace"] })
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Comment."
            });
        });
};

// Get Favourites using the idUser 
exports.findAllByUser = (req, res) => {
    const iduser = req.params.idUser;
    Favourite.findAll({
        attributes: ['idUser', 'idPlace']},
        {where: [idUser = iduser]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving favourites."
            });
        });
};

// Update Favourites using their ids
exports.updateFavourite = (req, res) => {
    const idUser = req.params.idUser;
    const idPlace = req.params.idPlace;
    // If there is no parameters -> num == 0 & cannot update place
    // If theres a req.body parameter then num==1 & place is updated
    Favourite.update(req.body, { where: { idUser: idUser, idPlace: idPlace } }, { fields: ['idUser', "idPlace"] }).then(num => {
        if (num == 1) {
            res.send({
                message: "Favourite was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Favourite with idUser =${idUser} & idPlace =${idPlace} Maybe Place was not found or req.body is empty!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Favourite with idUser =" + idUser + " idPlace =" + idPlace
            });
        });
};

// delete Favourites using their ids
exports.delete = (req, res) => {
    const idUser = req.params.idUser;
    const idPlace = req.params.idPlace;

    Favourite.destroy({
        where: { idUser: idUser, idPlace: idPlace }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Favourite was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Favourite with idUser =${idUser} & idPlace =${idPlace}. Maybe Place was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Favourite with idUser =" + idUser + " idPlace =" + idPlace
            });
        });
};