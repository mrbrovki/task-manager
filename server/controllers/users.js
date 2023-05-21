const User = require("../models/users");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const sequelize = require("../config/database");

const saltRounds = 10;

module.exports = {    
    create: async (req, res) => {
        await sequelize.sync();

        const body = req.body;
        const rawPassword = body.password;
        const hash = await bcrypt.hash(rawPassword, saltRounds);
            
        const user = User.build({
            id: uuidv4(),
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: hash,
        });
              
        await user.save();
        
        res.writeHead(200, {"Content-Type": "plain/text"});
        res.write("You sent: ");
        res.end(JSON.stringify(req.body));
    },

    get: async (req, res)=>{
        const id = req.params.id;
        await sequelize.sync();

        const user = await User.findOne({
            where: {id},
        });

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(user));
    },

    update: async (req, res) => {
        const body = req.body;
        await sequelize.sync();

        await User.update({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
        }, {where:{id: body.id}});

        res.writeHead(200, {"Content-Type": "plain/text"});
        res.write("You updated: ");
        res.end(JSON.stringify(req.body));
    },

    delete: async (req, res) => {
        const id = req.params.id;
        await sequelize.sync();

        await User.destroy({where: {id}});

        res.writeHead(200, {"Content-Type": "plain/text"});
        res.write("You deleted user with id: " + id);
        res.end();
    },
}