'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favourites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favourites.belongsTo(models.places, {
        onDelete: "CASCADE",
        foreignKey: "id_place",
        as: "places"
      })
      favourites.belongsTo(models.users, {
        onDelete: "CASCADE",
        foreignKey: "id_user",
        as: "users"
      })
    }
  }
  favourites.init({
    id_user: DataTypes.INTEGER,
    id_place: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favourites',
    timestamps: false,
    createAt: false,
    updateAt: false
  });
  return favourites;
};