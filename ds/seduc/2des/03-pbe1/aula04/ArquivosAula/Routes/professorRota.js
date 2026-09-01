const express = require("express");

const professorController = require("../controller/professorController");

const router = express.Router();

router.get("/", professorController.listarProfessores);

module.exports = router;

