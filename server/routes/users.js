const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.use(express.json());
router.post("/add-user", controller.addUser);

module.exports = router;