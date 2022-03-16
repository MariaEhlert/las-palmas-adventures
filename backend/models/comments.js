'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Comments.belongsTo(models.Places, {
        onDelete: "CASCADE",
        foreignKey: "idPlace",
        as: "places"
      })
      Comments.belongsTo(models.Users, {
        onDelete: "CASCADE",
        foreignKey: "idUser",
        as: "users"
      })
    }
  };
  Comments.init({
    idUser: DataTypes.INTEGER,
    idPlace: DataTypes.INTEGER,
    text: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};