const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const utils = require("../utils");
const bcrypt = require('bcryptjs');

// Create and Save a new User
exports.create = (req, res) => {
    //Validate request for password and user name
    if (!req.body.password || !req.body.name || !req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User Model with request data
    let user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        photo: 'localhost:4000/images/User/image-' + Date.now() + '.' + req.file.filename
    };

    // Encrypts user password with bcrypt
    user.password = bcrypt.hashSync(req.body.password);

    // Save new User in the database
    User.create(user)
        .then(data => {
            console.log(user);
            // create new token
            const token = utils.generateToken(data);
            // get basic user details
            const userObj = utils.getCleanUser(data);
            console.log(userObj);
            // return the token along with user details
            return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single User with its name
exports.findByName = (req, res) => {
    const name = req.params.name;
    User.findOne({ where: { name: name } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with name=" + name
            });
        });
};

// Update a User
exports.UpdateUser = (req, res) => {
    const id = req.params.id;
    // If there´s no parameters -> num == 0 & cannot update user
    // If theres a req.body parameter then num==1 & user is updated
    User.update(req.body, { where: { id: id }}).then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
            
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };


// function generate = (req, res) => {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     res.send(retVal);
// }