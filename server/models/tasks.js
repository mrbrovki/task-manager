const sequelize = require("../config/database");
const { DataTypes } = require('sequelize');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    due: {
        type: DataTypes.DATE,
        unique: false,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
}, {
    tableName: "Tasks",
});


module.exports = Task;