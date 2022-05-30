'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('Interpretes', 'interpreteSenha', { type: Sequelize.DataTypes.STRING });
     await queryInterface.addColumn('Usuarios', 'usuarioSenha', { type: Sequelize.DataTypes.STRING });
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
