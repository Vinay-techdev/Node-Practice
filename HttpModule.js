const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello Everyone</h1>");
    res.end();
  }

  if (req.url === "/name") {
    res.write("<h1> I am VINAY. passionate about Fullstack Deveploment</h1>");
    res.end();
  }

  if (req.url === "/connect") {
    res.setHeader("Connect-Type", "text/html");
    res.write("<h1>Lets Connect and see what amazing things we can create together</h1>");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🔥 Listening on PORT ${PORT}`);
});