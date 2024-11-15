'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Rename the table from 'users' to 'Users'
    await queryInterface.renameColumn('users', 'role', 'userroleId');
  },

  async down(queryInterface) {
    // Revert the change: rename the table back to 'users'
    await queryInterface.renameColumn('users', 'role', 'userroleId');

  }
};
