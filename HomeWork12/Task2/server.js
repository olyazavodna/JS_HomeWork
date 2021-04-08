
const http = require("http");
const static = require("node-static");

const staticServer = new static.Server(".")

http.createServer(function (request, response) {
        staticServer.serve(request, response)
}).listen(8000);
console.log("server is running...")






