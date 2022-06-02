'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Audiencia',
      'unidadeId',
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Unidades'
          },
          key: 'unidadeId'
        },
        allowNull: false
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
