const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU:", os.cpus().length);
console.log("Home Dir:", os.homedir());
