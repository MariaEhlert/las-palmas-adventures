'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favourites.belongsTo(models.Places, {
        onDelete: "CASCADE",
        foreignKey: "idPlace",
        as: "places"
      })
      Favourites.belongsTo(models.Users, {
        onDelete: "CASCADE",
        foreignKey: "idUser",
        as: "users"
      })
    }
  }
  Favourites.init({
    idUser: DataTypes.INTEGER,
    idPlace: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourites',
  });
  return Favourites;
};