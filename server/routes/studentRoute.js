const express = require("express");
const StudentController = require("../app/controllers/StudentController.js");
const router = express.Router();

router.get("/", StudentController.getList);

module.exports = router;
