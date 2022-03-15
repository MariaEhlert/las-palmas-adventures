const db = require("../models");
const User = require("../models/users");
const Place = require("../models/places");
const Comment = db.Comments;
const Op = db.Sequelize.Op;

// Create and Save a new Comment
exports.create = (req, res) => {
    //Validate request for comment text
    if (!req.body.idUser || !req.body.idPlace || !req.body.text) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Comment Model with request data
    let comment = {
        idUser: req.body.idUser,
        idPlace: req.body.idPlace,
        text: req.body.text,
        date: req.body.date
    };

    // Save new Comment in the database
    Comment.create(comment, { fields: ['idUser', "idPlace", "text", "date"] })
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

// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
    Comment.findAll({
        attributes: ['idUser', 'idPlace', 'text', 'date']
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving comments."
            });
        });
};

// Find a single Comment with it idPlace
exports.findByIdPlace = (req, res) => {
    const idPlace = req.params.idPlace;
    Comment.findOne({
        attributes: ['idUser', 'idPlace', 'text', 'date']
    }, { where: { idPlace: idPlace } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Comment with Place ID: " + idPlace
            });
        });
};

// Find a single Comment with it idUser
exports.findByIdUser = (req, res) => {
    const idUser = req.params.idUser;
    Comment.findOne({
        attributes: ['idUser', 'idPlace', 'text', 'date']
    }, { where: { idUser: idUser } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Comment with User ID:" + idUser
            });
        });
};

// Update a Comment
exports.updateComment = (req, res) => {
    const idUser = req.params.idUser;
    const idPlace = req.params.idPlace;
    // If there is no parameters -> num == 0 & cannot update place
    // If theres a req.body parameter then num==1 & place is updated
    Comment.update(req.body, { where: { idUser: idUser, idPlace: idPlace } }, { fields: ['idUser', "idPlace", "text", "date"] }).then(num => {
        if (num == 1) {
            res.send({
                message: "Comment was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Comment with idUser =${idUser} & idPlace =${idPlace} Maybe Place was not found or req.body is empty!`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Comment with idUser =" + idUser + " idPlace =" + idPlace
            });
        });
};

// Delete a Comment with the specified ids in the request
exports.delete = (req, res) => {
    const idUser = req.params.idUser;
    const idPlace = req.params.idPlace;

    Comment.destroy({
        where: { idUser: idUser, idPlace: idPlace }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Comment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Comment with idUser =${idUser} & idPlace =${idPlace}. Maybe Place was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Comment with idUser =" + idUser + " idPlace =" + idPlace
            });
        });
};