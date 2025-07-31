//importare express

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`SErver is listeing http://127.0.0.1:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello marzia e Davide ");
});
