const express = require("express");
const router = express.Router();
const userControllers = require("../Controllers/userControllers");
const auths = require("../Middlewares/auths");

router.route("/register").post(userControllers.register);
router.route("/login").post(userControllers.login);
router.route("/viewusers").get(userControllers.viewusers);
router.route("/verify").get(auths,userControllers.verify);
router.route("/generate").post(userControllers.generate);
//router.route("/getcontent").get(userControllers.getcontent);

module.exports = router;