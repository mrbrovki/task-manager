const sequelize = require("../config/database");
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id:{
    type: DataTypes.UUID,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "Users",
});

module.exports = User;