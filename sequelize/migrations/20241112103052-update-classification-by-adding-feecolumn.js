"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("classifications", "fees", {
      type: Sequelize.JSON,
    });

  }, 
  async down(queryInterface, ) {
    await queryInterface.removeColumn("classifications", "fees");
  },  
};
