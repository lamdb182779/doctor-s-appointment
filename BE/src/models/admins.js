'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admins.belongsTo(models.Accounts, {
        foreignKey: 'username',
        targetKey: 'username',
      })
    }
  }
  Admins.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admins',
  });
  return Admins;
};