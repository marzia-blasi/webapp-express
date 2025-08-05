//importiamo i movie dal connection con il db

const { text } = require("express");
const connection = require("../db/connection.js");

// Index
const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    console.log(results);
    res.json(results);
  });
};

//Show
const show = (req, res) => {
  //conversione id in numero
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM movies WHERE id = ? ";

  connection.query(sql, [id], (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });

    if (!results.length > 0) {
      return res.status(404).json({
        error: true,
        message: "Film non trovato",
      });
    }

    const movie = results[0];
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";
    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err)
        return res.status(500).json({
          error: true,
          message: err.message,
        });

      movie.reviews = reviewsResults;
      res.json(movie);
    });
  });
};

//Store
const store = (req, res) => {
  const movieId = parseInt(req.params.id);
  const { text, name, vote } = req.body;

  if (!text || !name || !vote) {
    return res.status(400).json({
      error: true,
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO reviews (movie_id, text, name, vote ) VALUES (?, ?, ? , ?)";
  connection.query(sql, [movieId, text, name, vote], (err, results) => {
    if (err)
      return res.status(500).json({
        error: true,
        message: err.message,
      });

    res.status(201).json({
      error: false,
      message: "Review aggiunta!",
      reviewId: results.insertId,
    });
  });
};

// destrutturo così perchè poi saranno molti moduli da esportare
module.exports = { index, show, store };
