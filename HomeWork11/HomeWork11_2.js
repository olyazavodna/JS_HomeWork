/////// task 2 /////// 

const pm = require('./personalmodule')

const http = require("http");
const os = require("os");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    let date = new Date()
    response.write(`Date of request: ${date.toString()} <br>`)
    response.write(pm.greeting(os.userInfo().username));
    response.end()
}).listen(5000);
console.log("server is running...")






