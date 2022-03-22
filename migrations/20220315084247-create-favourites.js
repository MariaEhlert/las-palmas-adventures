'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favourites', {
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
      },},
     id_place: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      references: {
           model: 'places',
           key: 'id'
      },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favourites');
  }
};