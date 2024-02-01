const express = require('express');
app = express();
port = 7865;

app.use(express.json())
app.get('/', function(req, res) {
  res.send('Welcome to the payment system')
})

app.get('/cart/:id(\\d+)', function(req, res) {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
})

app.get('/available_payments', function(req, res) {
  const obj = {
    payment_methods: {credit_cards: true, paypal: false}
  }
  res.json(obj)
})


app.post('/login', function(req, res) {
  const userName = req.body.userName
  res.send(`Welcome :${userName}`)
})



app.listen(port, function() {
  console.log(`API available on localhost port ${port}`)
})

module.exports = app;
