
const http = require("http");
const static = require("node-static");

const staticServer = new static.Server(".")

http.createServer(function (request, response) {
    if (request.url == "/vote") {
        const date = new Date()
        response.end(`Your vote is accepted: ${date.toString()}`)
    } else {
        staticServer.serve(request, response)
    }
}).listen(8000);
console.log("server is running...")






