const express = require("express");
const path = require("path");
const app = express();
//custom modules
const sequelize = require("./config/database");
const usersRouter = require("./routes/users");

const port = 5000;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

//routes
app.use("/users", usersRouter);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
    console.log("listening on port " + port);
});
