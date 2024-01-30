const express = require('express');
const countStudents = require('./3-read_file_async.js')
const app = express();
const port = 1245

app.get('/', function(req, res) {
  res.send('Hello Holberton School');
})

app.get('/students', async function(req, res) {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${title}${data.join(`\n`)}`);
  } catch (error) {
    res.send(`${title}${error.message}`)
  }
})

app.listen(port)
module.exports = app;
