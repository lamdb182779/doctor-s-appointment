'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Roles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Roles.hasMany(models.Accounts, {
                foreignKey: 'role',
                sourceKey: 'role'
            })
        }
    }
    Roles.init({
        role: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        method: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    }, {
        sequelize,
        modelName: 'Roles',
    });
    return Roles;
};