const express = require("express");
const cluster = require("cluster");
const cpuLength = require("os").cpus().length;

const app = express();
const PORT = 3000;

function delay(duration) {
  const startTime = Date.now(); // current time represented in milliseconds

  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => {
  // blocking functions
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [1,2,3,4,5].sort()
  res.send(`Performance example, ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ring ring ring, ${process.pid}`);
});

console.log("Running server.js...");
if (cluster.isMaster) {
  console.log("Master has been started...");
  for (let i = 0; i < cpuLength; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started", process.pid);
  app.listen(PORT);
}
