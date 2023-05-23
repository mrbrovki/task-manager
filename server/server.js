const express = require("express");
const path = require("path");
const app = express();

//custom modules
const sequelize = require("./config/database");

//routers
const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");

//associate sql models
require("./models/associate");

const port = 5000;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

//api
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", tasksRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
    console.log("listening on port " + port);
});
