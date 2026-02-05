const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello from HTTP module");
    res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000");
