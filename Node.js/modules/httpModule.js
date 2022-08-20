const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/api/hello") {
    res.write("Hello World");
    res.end();
  }
  if (req.url == "/") {
    res.write("Home Page");
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("Listening :)");
  //   console.log(socket);
});

server.listen(3000);
