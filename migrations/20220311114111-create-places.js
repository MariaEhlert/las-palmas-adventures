'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      creation: {
        allowNull: true,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "localhost:4000/images/Places/defaultPlace.png"
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      location_id_api: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      location_type_api: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('places');
  }
};