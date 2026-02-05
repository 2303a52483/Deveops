const fs = require("fs");

function fileOperation(){
    fs.writeFileSync("sample.txt","This is Node.js file");
    return fs.readFileSync("sample.txt","utf-8");
}

module.exports = fileOperation;
