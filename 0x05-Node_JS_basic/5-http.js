const http = require('http');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  console.log(url);
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write(process.argv[process.argv.length - 1]);
    res.end(' =>students here are');
  } else {
    res.end('Other');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;