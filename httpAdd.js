const http = require("http");
const url = require("url");

http.createServer((req,res)=>{
    const q = url.parse(req.url,true).query;

    let a = Number(q.a);
    let b = Number(q.b);
    let sum = a + b;

    res.end("Sum = " + sum);

}).listen(3000);

console.log("Try: http://localhost:3000/?a=5&b=3");
