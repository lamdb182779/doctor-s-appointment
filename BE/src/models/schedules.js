"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedules.belongsTo(models.Doctors, {
        foreignKey: "doctorId",
        targetKey: "id",
      })
      Schedules.hasMany(models.Appointments, {
        foreignKey: "scheduleId",
        targetKey: "id",
      })
    }
  }
  Schedules.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    maxNumber: DataTypes.INTEGER,
    currentNumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    doctorId: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Schedules",
  });
  return Schedules;
};