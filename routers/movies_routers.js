// importo express
const express = require("express");

//Oggetto router
const router = express.Router();

//importare controller
const movieControllers = require("../controllers/movieController");

//Index
router.get("/", movieControllers.index);

//Show
router.get("/:id", movieControllers.show);

// Store
router.post("/:id/reviews", movieControllers.store);

module.exports = router;
