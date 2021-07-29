const http = require('http');

function siteWeb(req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('<h1>My <strong>first server</strong></h1>');
}

let server = http.createServer(siteWeb);
//server.listen(7000, "localhost");
server.listen(8080);

console.log('Server running in port 8080');
