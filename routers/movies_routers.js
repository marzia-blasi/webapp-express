// importo express
const express = require("express");

//Oggetto router
const router = express.Router();

//importare controller
const movieControllers = require("../controllers/movieController");

router.get("/", movieControllers.index);

module.exports = router;
