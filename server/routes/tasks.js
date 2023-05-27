const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks");

router.use(express.json());

router.post("/create", controller.create);
router.get("/get", controller.get);

module.exports = router;