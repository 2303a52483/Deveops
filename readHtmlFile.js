const fs = require("fs");

function readHTML(){
    return fs.readFileSync("menubar.html","utf-8");
}
module.exports = readHTML;
