import express from 'express';

const app = express();
const iRouter = require('./routes/index');

const port = 1245;

app.listen(port);
app.use('/', iRouter);
app.use('/students', iRouter);
app.use('/students/:major', iRouter);

export default app;
