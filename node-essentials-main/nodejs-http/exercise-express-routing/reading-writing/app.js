// const express = require('express')
// const app = express()
// const port = 3000

// let bodyParser = require('body-parser');
// app.use(bodyParser.json());

// let products = [];

// app.post('/products', function(req, res) {
//   const newProduct = { ...req.body, id: products.length + 1 }
//   products = [ ...products, newProduct]
//   res.json(newProduct);
// });
// // Saida: response {"name":"product","id":1}
// //        Closed connection
// // Após nova solicitação "node client-get.js" temos: 
// // Received data [{"name":"product","id":1}]
// // Connection closed

// app.put('/products', function(req, res) {
//   let updatedProduct;
//   products = products.map(p => {
//     if (p.id === req.body.id) {
//       updatedProduct = { ...p, ...req.body };
//       return updatedProduct;
//     }
//     return p;
//   })
//   res.json(updatedProduct);
// });
// // Saida: response {"name":"product-updated","id":1}
// //        Closed connection
// // Após atualização com "node client-get.js" temos:
// // Received data [{"name":"product-updated","id":1}]
// // Connection closed

// app.delete('/products/:id', function(req, res) {
//   const deletedProduct = products.find(p => p.id === +req.params.id);
//   products = products.filter(p => p.id !== +req.params.id);
//   res.json(deletedProduct);
// });
// // Saida: response {"name":"product","id":1}
// //        Closed connection
// // Após atualização com "node client-get.js" temos:
// //    Received data []
// // Connection closed    

// app.get('/products', (req, res) => {
//   res.json(products);
// })
// // Saída: Received data []
// //        Connection closed

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
  
//  # IMPLEMENTAÇÂO DO CRUD 

const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.route('/products')
 .get((req, res) => {
   res.json(products);
 })
 .post((req, res) => {
   const newProduct = { ...req.body, id: products.length + 1 }
   products = [...products, newProduct]
   res.json(newProduct);
 })
.put((req, res) => {
   let updatedProduct;
   products = products.map(p => {
     if (p.id === req.body.id) {
       updatedProduct = { ...p, ...req.body };
       return updatedProduct;
     }
     return p;
   })
   res.json(updatedProduct);
 })
 .delete((req, res) => {
   const deletedProduct = products.find(p => p.id === +req.body.id);
   products = products.filter(p => p.id !== +req.body.id);
   res.json(deletedProduct);
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Resposta: Received data []
//           Connection closed

// Usando client-delete-route.js em vez de client-delete.js no exercício anterior. A diferença está em como a rota é implementada. Na primeira versão de app.js, é necessário que as exclusões sejam feitas em uma rota como /products/<id>, com o identificador exclusivo sendo enviado como um parâmetro de rota.

// Quando você usa o método route(), ele implementa a rota de exclusão de maneira diferente. Ele quer que você envie o identificador exclusivo através do corpo em vez de como um parâmetro de rota. Não há uma forma correta ou errada de implementar uma rota de exclusão.