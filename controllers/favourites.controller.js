const db = require("../models");
const User = require("../models/users");
const Place = require("../models/places");
const Favourite = db.favourites;
const Op = db.Sequelize.Op;

// Create and Save a new Favourite
exports.create = (req, res) => {
    //Validate request for comment text
    if (!req.body.id_user || !req.body.id_place) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Favourite Model with request data
    let favourite = {
        id_user: req.body.id_user,
        id_place: req.body.id_place,
    };

    // Save new Favourite in the database
    Favourite.create(favourite, { fields: ['id_user', "id_place"],  returning: false })
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
    const iduser = req.params.id_user;
    Favourite.findAll({
        attributes: ['id_user', 'id_place']},
        {where: [id_user = iduser]})
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
// exports.updateFavourite = (req, res) => {
//     const idUser = req.params.id_user;
//     const idPlace = req.params.id_place;
//     // If there is no parameters -> num == 0 & cannot update place
//     // If theres a req.body parameter then num==1 & place is updated
//     Favourite.update(req.body, { where: { id_user: idUser, id_place: idPlace } }, { fields: ['id_user', "id_place"] }).then(num => {
//         if (num == 1) {
//             res.send({
//                 message: "Favourite was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Favourite with id_user =${idUser} & id_place =${idPlace} Maybe Place was not found or req.body is empty!`
//             });
//         }
//     })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Favourite with id_user =" + idUser + " id_place =" + idPlace
//             });
//         });
// };

// delete Favourites using their ids
exports.delete = (req, res) => {
    const idUser = req.params.id_user;
    const idPlace = req.params.id_place;

    Favourite.destroy({
        where: { id_user: idUser, id_place: idPlace }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Favourite was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Favourite with id_user =${idUser} & id_place =${idPlace}. Maybe Place was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Favourite with id_user =" + idUser + " id_place =" + idPlace
            });
        });
};