function jsonResponse(){
    const data = {
        name: "Node Server",
        status: "Running"
    };

    return JSON.stringify(data);
}
module.exports = jsonResponse;
