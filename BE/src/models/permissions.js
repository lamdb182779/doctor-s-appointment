'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Permissions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Permissions.belongsTo(models.Roles, {
                foreignKey: 'roleId',
                targetKey: 'id'
            })
        }
    }
    Permissions.init({
        roleId: {
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
        modelName: 'Permissions',
    });
    return Permissions;
};