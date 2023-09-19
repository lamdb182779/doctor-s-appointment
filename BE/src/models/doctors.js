"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctors.belongsTo(models.Accounts, {
        foreignKey: "username",
        targetKey: "username",
      })
      Doctors.belongsTo(models.Specialties, {
        foreignKey: "specialtyID",
        targetKey: "id",
      })
      Doctors.hasMany(models.Schedules, {
        foreignKey: "doctorId",
        targetKey: "id",
      })
    }
  }
  Doctors.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    specialtyID: DataTypes.INTEGER,
    clinicAddress: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    image: DataTypes.STRING,
    describe: DataTypes.TEXT,
    price: DataTypes.TEXT,
    content: DataTypes.TEXT,
    active: DataTypes.BOOLEAN,
    table: {
      type: DataTypes.VIRTUAL,
      get() {
        return "Doctors";
      }
    },
  }, {
    sequelize,
    modelName: "Doctors",
  });
  return Doctors;
};