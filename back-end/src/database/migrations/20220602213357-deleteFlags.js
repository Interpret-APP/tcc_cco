'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Unidades',
      'unidadeRemovida',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    );

    await queryInterface.addColumn(
      'Audiencia',
      'audienciaCancelada',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    );

    await queryInterface.addColumn(
      'Postos',
      'postoCancelado',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
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
