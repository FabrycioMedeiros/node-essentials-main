const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.post('/products', function(req, res) {
  const newProduct = { ...req.body, id: products.length + 1 }
  products = [ ...products, newProduct]
  res.json(newProduct);
});

app.put('/products', function (req, res) {
  // implement
});

app.delete('/products/:id', function (req, res) {
  // implement
});

app.get('/products', (req, res) => {
  res.json(products);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
  
