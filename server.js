import express from "express";
import path from "path";
const app = express();
const port = 3000;
const __dirname = path.resolve();
app.use(express.static("SRC"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/SRC/HTML/Main.html");
});
app.get("/dkdlrhsks", (req, res) => {
  res.sendFile(__dirname + "/SRC/HTML/Difficulty.html");
});
app.get("/rpdla", (req, res) => {
  res.sendFile(__dirname + "/SRC/HTML/Game.html");
});
app.get("/hardrpdla", (req, res) => {
  res.sendFile(__dirname + "/SRC/HTML/GameHard.html");
});
app.listen(port, () => {
  console.log("server is listening at localhost: 3000");
});
