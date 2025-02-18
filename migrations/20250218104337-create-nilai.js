'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nilais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MahasiswaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mahasiswas',
          key: 'id'
        },
      },
      Mata_kuliahId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mata_kuliahs',
          key: 'id'
        },
      },
      Nilai: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nilais');
  }
};