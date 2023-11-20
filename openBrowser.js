const { exec } = require("child_process");
const platform = process.platform;

function open(url) {
  if(platform === "win32"){
    exec(`start chrome ${url}`, (error, stdout, stderr) => {
      if (error) {
        console.log("exec error:", error);
        return;
      }
      console.log("output:", stdout);
      console.error("standart error:", stderr);
    });
  }else if(platform === "linux"){
    exec(`firefox ${url}`, (error, stdout, stderr) => {
      if (error) {
        console.log("exec error:", error);
        return;
      }
      console.log("output:", stdout);
      console.error("standart error:", stderr);
    });
  }
}

module.exports = {
  open,
};
