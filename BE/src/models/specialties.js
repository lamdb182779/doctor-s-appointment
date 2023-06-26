'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialties.hasMany(models.Doctors, {
        foreignKey: 'specialtyID',
        targetKey: 'id',
      })
    }
  }
  Specialties.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'Specialties',
  });
  return Specialties;
};