// importare mysql2
const mysql2 = require("mysql2");

//connessione con il db

const credentials = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.info("Connection sussect");
});
