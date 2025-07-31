//importiamo i movie dal connection con il db

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

// destrutturo così perchè poi saranno molti moduli da esportare
module.exports = { index };
