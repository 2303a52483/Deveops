const http = require("http");
const querystring = require("querystring");

const hello = require("./hello");
const fileOperation = require("./fileops");
const getDateTime = require("./datetime");

const server = http.createServer((req,res)=>{

    // ===== HANDLE FORM SUBMIT =====
    if(req.method === "POST"){
        let body="";
        req.on("data",chunk=> body += chunk);

        req.on("end",()=>{
            const data = querystring.parse(body);

            let a = Number(data.a);
            let b = Number(data.b);
            let num = Number(data.num);

            // arithmetic
            let add = a+b;
            let sub = a-b;
            let mul = a*b;
            let div = a/b;

            // factorial
            let fact = 1;
            for(let i=1;i<=num;i++){
                fact *= i;
            }

            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(`
            <h1>Results</h1>

            <h2>Arithmetic Result</h2>
            Add: ${add}<br>
            Sub: ${sub}<br>
            Mul: ${mul}<br>
            Div: ${div}<br>

            <h2>Factorial Result</h2>
            Factorial of ${num} = ${fact}<br><br>

            <a href="/">⬅ Back</a>
            `);
        });
        return;
    }

    // ===== MAIN WEBPAGE =====
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`
    <html>
    <head>
        <style>
            body{font-family:Arial;background:#f4f4f4;padding:20px}
            div{background:white;margin:10px;padding:15px;border-radius:10px}
            input{margin:5px;padding:5px}
        </style>
    </head>

    <body>

    <h1>Node.js Programs Webpage 🚀</h1>

    <div>
        <h2>Hello Program</h2>
        ${hello()}
    </div>

    <div>
        <h2>User Arithmetic Calculator</h2>
        <form method="POST">
            Enter A: <input name="a"><br>
            Enter B: <input name="b"><br><br>

            <h3>Factorial</h3>
            Enter Number: <input name="num"><br><br>

            <button type="submit">Calculate</button>
        </form>
    </div>

    <div>
        <h2>File Read Output</h2>
        ${fileOperation()}
    </div>

    <div>
        <h2>Date & Time</h2>
        ${getDateTime()}
    </div>

    </body>
    </html>
    `);

    res.end();
});

server.listen(3000);
console.log("Server running at http://localhost:3000");

