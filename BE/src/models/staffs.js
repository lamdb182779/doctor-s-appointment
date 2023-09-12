"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Staffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Staffs.belongsTo(models.Accounts, {
        foreignKey: "username",
        targetKey: "username",
      })
    }
  }
  Staffs.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    doB: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    username: DataTypes.STRING,
    image: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    table: {
      type: DataTypes.VIRTUAL,
      get() {
        return "Staffs";
      }
    },
  }, {
    sequelize,
    modelName: "Staffs",
  });
  return Staffs;
};