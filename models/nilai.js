'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nilai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nilai.belongsTo(models.Mahasiswa, {foreignKey: 'MahasiswaId'})
      Nilai.belongsTo(models.Mata_kuliah, {foreignKey: 'Mata_kuliahId'})
    }
  }
  Nilai.init({
    MahasiswaId: DataTypes.INTEGER,
    Mata_kuliahId: DataTypes.INTEGER,
    Nilai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nilai',
  });
  return Nilai;
};