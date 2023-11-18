const { exec } = require("child_process");

function open(url) {
  exec(`start chrome ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.log("exec error:", error);
      return;
    }
    console.log("output:", stdout);
    console.error("standart error:", stderr);
  });
}

module.exports = {
  open,
};
