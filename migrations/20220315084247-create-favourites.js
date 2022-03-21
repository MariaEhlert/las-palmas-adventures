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
    await queryInterface.dropTable('favourites');
  }
};