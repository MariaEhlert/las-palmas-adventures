'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      comments.belongsTo(models.places, {
        onDelete: "CASCADE",
        foreignKey: "id_place",
        as: "places"
      })
      comments.belongsTo(models.users, {
        onDelete: "CASCADE",
        foreignKey: "id_user",
        as: "users"
      })
    }
  };
  comments.init({
    id_user: DataTypes.INTEGER,
    id_place: DataTypes.INTEGER,
    text: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'comments',
    timestamps: false,
    createAt: false,
    updateAt: false 
  });
  return comments;
};