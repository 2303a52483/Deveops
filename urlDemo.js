const http = require("http");
const url = require("url");

http.createServer((req,res)=>{
    const q = url.parse(req.url,true).query;
    res.end("Name: " + q.name);
}).listen(3000);

console.log("Try: http://localhost:3000/?name=Navya");
