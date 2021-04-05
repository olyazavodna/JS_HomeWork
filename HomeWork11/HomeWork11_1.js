/////// task 1 /////// 

const http = require("http");
const os = require("os");
const path = require("path")

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>System information</h1>");
    response.write(`Current user name: ${os.userInfo().username}<br>`)
    response.write(`OS type: ${os.type()}<br>`)
    let uptime = (os.uptime() / 60).toFixed(1)
    response.write(`System work time ${uptime} minutes <br>`)
    response.write(`Current work directory: ${__dirname}<br>`)
    response.write(`Server file name: ${path.basename(__filename)}<br>`)
    response.end()
}).listen(5000);
console.log("server is running...")


