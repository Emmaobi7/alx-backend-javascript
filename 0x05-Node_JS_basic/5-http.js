const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/')
    response.write('Hello Holberton school');
  if (request.url === '/students') {
    response.write('This is the list of our students\n')
    try {
      const data = await countStudents(process.argv[2])
        response.end(data)
      } catch (error) {
        response.end(error.message)
    }
  }
  response.end();
});
app.listen(port, hostname);
module.exports = app;
