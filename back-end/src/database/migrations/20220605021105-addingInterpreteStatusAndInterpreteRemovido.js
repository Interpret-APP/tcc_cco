'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Interpretes',
      'interpreteRemovido',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    );

    await queryInterface.addColumn(
      'Interpretes',
      'interpreteStatus',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
