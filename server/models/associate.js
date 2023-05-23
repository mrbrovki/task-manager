const { DataTypes } = require("sequelize");
const Task = require("./tasks");
const User = require("./users");

User.hasMany(Task, {
    foreignKey: "userId",
    targetKey: "id",
    keyType: DataTypes.UUID,
})

Task.belongsTo(User, {
    foreignKey: "userId",
    targetKey: "id",
    keyType: DataTypes.UUID,
});