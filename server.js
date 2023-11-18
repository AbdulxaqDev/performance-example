const express = require("express");
const { open } = require("./chromeOpen");
const PORT = 3000;

const app = express();

function delay(duration) {
  const startTime = Date.now(); // current time represented
  // in milliseconds

  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => {
  res.send("Performance example");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Ring ring ring");
});

app.listen(PORT, () => open(`http://localhost:${PORT}/`));
