//importare express

const express = require("express");
const app = express();
const PORT = process.env.PORT;

//CORS
const cors = require("cors");
app.use(express.json());
app.use(cors());

//static asset
app.use(express.static("img"));

const moviesRouter = require("./routers/movies_routers.js");

app.use("/movie", moviesRouter);

/*
app.get("/", (req, res) => {
  res.send("Hello marzia e Davide ");
});
*/

app.listen(PORT, () => {
  console.log(`SErver is listeing http://127.0.0.1:${PORT}`);
});
