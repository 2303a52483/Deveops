const fs = require("fs");

fs.writeFileSync("sample.txt","Node FS Module");
let data = fs.readFileSync("sample.txt","utf-8");

console.log(data);
