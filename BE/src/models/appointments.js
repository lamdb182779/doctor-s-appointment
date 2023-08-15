'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointments.belongsTo(models.Schedules, {
        foreignKey: 'scheduleId',
        targetKey: 'id',
      })
      Appointments.belongsTo(models.Doctors, {
        foreignKey: 'doctorId',
        targetKey: 'id',
      })
      Appointments.belongsTo(Appointments, {
        as: 'previous',
        foreignKey: 'preAppointmentId',
        targetKey: 'id',
      })
    }
  }
  Appointments.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING
    },
    status: DataTypes.INTEGER,
    doctorId: DataTypes.STRING,
    patientName: DataTypes.STRING,
    patientPhoneNumber: DataTypes.STRING,
    patientEmail: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    preAppointmentId: DataTypes.STRING,
    scheduleId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};