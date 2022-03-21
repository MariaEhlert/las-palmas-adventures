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
        foreignKey: "id_place",
        as: "places"
      })
      Comments.belongsTo(models.Users, {
        onDelete: "CASCADE",
        foreignKey: "id_user",
        as: "users"
      })
    }
  };
  Comments.init({
    id_user: DataTypes.INTEGER,
    id_place: DataTypes.INTEGER,
    text: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'comments',
  });
  return Comments;
};