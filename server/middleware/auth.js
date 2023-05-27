const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require('dotenv').config();

module.exports = async (req, res, next) => {
    const token = req.get("Authorization");
    if(!token){
        res.redirect("/login");
    }

    try{
        const {userId} = jwt.verify(token.slice(7), process.env.JWT_SECRET);
        req.userId = userId;
        next();
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
