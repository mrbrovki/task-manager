const sequelize = require("../config/database");
const auth = require("../middleware/auth");
const Task = require("../models/tasks");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    create: [auth, async (req, res) => {
        await sequelize.sync();
        const {body: {name, due, description}, userId} = req;

        const task = await Task.create({
            id: uuidv4(),
            name,
            due,
            description,
            userId,
        });       
        
        res.status(200).json(JSON.stringify(task));
    }],

    get: [auth, async (req, res) => {
        await sequelize.sync();
        const {userId} = req;

        const tasks = await Task.findAll({
            where: {userId}
        });

        res.status(200).json(JSON.stringify(tasks));
    }],
}