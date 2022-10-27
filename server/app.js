const http = require("http");
const data = require("./data");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server ok");
  res.setHeader("Content-type", "application/json");

  res.end(JSON.stringify(data));
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
