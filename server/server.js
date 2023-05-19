const express = require("express");
const sequelize = require("./config/database");

const path = require("path");
const app = express();

const port = 9999;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
    console.log("listening on port " + port);
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
