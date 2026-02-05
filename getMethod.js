const url = require("url");

function getSum(req){
    const q = url.parse(req.url,true).query;
    if(q.a && q.b){
        return Number(q.a) + Number(q.b);
    }
    return "Use ?a=5&b=6 in address bar";
}
module.exports = getSum;
