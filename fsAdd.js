const fs = require("node:fs");

let a = 7;
let b = 3;
let sum = a + b;

fs.writeFileSync("result.txt","Sum = " + sum);

console.log("Result saved in file");
