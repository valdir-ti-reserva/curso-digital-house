'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      model: Sequelize.STRING,
      brand: Sequelize.STRING,
      year: Sequelize.STRING,
      price: Sequelize.DECIMAL(10, 2),
      rentAmount: Sequelize.DECIMAL(10, 2),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cars');
  },
};
