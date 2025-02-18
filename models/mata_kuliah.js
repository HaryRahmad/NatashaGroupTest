'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mata_kuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mata_kuliah.hasMany(models.Nilai, {foreignKey: 'Mata_kuliahId'})
    }
  }
  Mata_kuliah.init({
    nama_matkul: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mata_kuliah',
  });
  return Mata_kuliah;
};