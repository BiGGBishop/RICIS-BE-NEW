"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("fees", "application_category", {
      type: Sequelize.ARRAY(Sequelize.STRING), // Define as an array of strings
      allowNull: true,
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("fees", "application_category", {
      type: Sequelize.ARRAY(Sequelize.STRING), // Define as an array of strings
      allowNull: true,
    });
 
  },
};
