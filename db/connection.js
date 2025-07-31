// importare mysql2
const mysql2 = require("mysql2");

//connessione con il db  - oggetto con i dati di accesso

const credentials = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql2.createConnection(credentials);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.info("Connection success");
  //console.log(connection);
});

module.exports = connection;
