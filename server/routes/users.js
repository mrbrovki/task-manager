const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.use(express.json());

router.post("/create", controller.create);
router.get("/:id", controller.get);
router.put("/update", controller.update);
router.delete("/delete/:id", controller.delete);


router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;