const User = require("../models/users");
const sequelize = require("../config/database");

module.exports = {
    get: (req, res)=>{
        console.log("get users");
        res.end();
    },
    
    addUser: (req, res) => {
        const body = req.body;
        (async () => {
            await sequelize.sync();

            const user = User.build({
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: body.password,
              });
              
              await user.save();
          })();
        
        res.writeHead(200, {"Content-Type": "plain/text"});
        res.write("You sent: ");
        res.end(JSON.stringify(req.body));
    }
}