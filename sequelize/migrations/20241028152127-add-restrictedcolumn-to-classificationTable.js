"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("classifications", "restricted", {
      // gender: {
      type: Sequelize.BOOLEAN,
      // },
    });

 
  },
  async down(queryInterface,) {
    await queryInterface.removeColumn("classifications", "restricted");
  },
};
