"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("categories", "application_type", {
      type: Sequelize.STRING,
    });

  },
  async down(queryInterface, ) {
    await queryInterface.removeColumn("categories", "application_type");
  },
};
