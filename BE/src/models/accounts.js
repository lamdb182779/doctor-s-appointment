'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accounts.hasOne(models.Staffs, {
        foreignKey: 'username',
        targetKey: 'username',
      })
      Accounts.hasOne(models.Doctors, {
        foreignKey: 'username',
        targetKey: 'username',
      })
      Accounts.hasOne(models.Admins, {
        foreignKey: 'username',
        targetKey: 'username',
      })
      Accounts.belongsTo(models.Roles, {
        foreignKey: 'roleId',
        targetKey: 'id',
      })
    }
  }
  Accounts.init({
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};