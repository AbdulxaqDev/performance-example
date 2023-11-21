const express = require("express");

const {open} = require("./openBrowser");
const app = express();

const PORT = 3000;

function delay(duration) {
  const startTime = Date.now(); // current time represented in milliseconds

  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => {
  res.send(`Performance example, ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(7000);
  res.send(`Ring ring ring, ${process.pid}`);
});

app.listen(PORT, () => {
  //open(`http://localhost${PORT}`);
});
