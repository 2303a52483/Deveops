const http = require("http");

const htmlResponse = require("./htmlResponse");
const jsonResponse = require("./jsonResponse");
const readHTML = require("./readHtmlFile");
const getSum = require("./getMethod");
const getForm = require("./postMethod");

const server = http.createServer((req,res)=>{

    // POST handling
    if(req.method === "POST"){
        let body="";
        req.on("data",chunk=> body += chunk);
        req.on("end",()=>{
            res.end("Form Submitted: " + body);
        });
        return;
    }

    res.writeHead(200,{"Content-Type":"text/html"});

    res.write(`
    <html>
    <body style="font-family:Arial">

    <h1>Node.js Web Programs</h1>

    <div>${htmlResponse()}</div>
    <hr>

    <h2>JSON Response</h2>
    <pre>${jsonResponse()}</pre>
    <hr>

    <div>${readHTML()}</div>
    <hr>

    <h2>GET Method Example</h2>
    <p>Try this in address bar:</p>
    <p>http://localhost:3000/?a=5&b=6</p>
    <p>Sum: ${getSum(req)}</p>
    <hr>

    <div>${getForm()}</div>

    </body>
    </html>
    `);

    res.end();
});

server.listen(3000);
console.log("Server running at http://localhost:3000");
