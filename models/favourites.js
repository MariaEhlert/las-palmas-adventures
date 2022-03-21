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
        foreignKey: "id_place",
        as: "places"
      })
      Favourites.belongsTo(models.Users, {
        onDelete: "CASCADE",
        foreignKey: "id_user",
        as: "users"
      })
    }
  }
  Favourites.init({
    id_user: DataTypes.INTEGER,
    id_place: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favourites',
  });
  return Favourites;
};