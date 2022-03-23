'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Places extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Places.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    creation: DataTypes.STRING,
    photo: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    locationIdApi: DataTypes.STRING,
    locationTypeApi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Places',
  });
  return Places;
};