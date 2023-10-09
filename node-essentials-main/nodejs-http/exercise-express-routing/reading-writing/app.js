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
// Saida: response {"name":"product","id":1}
//        Closed connection
// Após nova solicitação "node client-get.js" temos: 
// Received data [{"name":"product","id":1}]
// Connection closed

app.put('/products', function(req, res) {
  let updatedProduct;
  products = products.map(p => {
    if (p.id === req.body.id) {
      updatedProduct = { ...p, ...req.body };
      return updatedProduct;
    }
    return p;
  })
  res.json(updatedProduct);
});
// Saida: response {"name":"product-updated","id":1}
//        Closed connection
// Após atualização com "node client-get.js" temos:
// Received data [{"name":"product-updated","id":1}]
// Connection closed

app.delete('/products/:id', function (req, res) {
  // implement
});

app.get('/products', (req, res) => {
  res.json(products);
})
// Saída: Received data []
//        Connection closed

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
  
