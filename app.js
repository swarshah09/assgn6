const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
let clothProducts = [
  { id: 1, name: 'Cotton T-Shirt', price: 20.99 },
  { id: 2, name: 'Denim Jeans', price: 34.99 },
  { id: 3, name: 'Silk Scarf', price: 15.49 },
];
// Route for handling GET requests (Get all cloth products)
app.get('/cloth-products', (req, res) => {
  res.json(clothProducts);
});
// Route for handling POST requests (Add a new cloth product)
app.post('/cloth-products', (req, res) => {
  const newProduct = req.body;
  clothProducts.push(newProduct);
  res.status(201).json(newProduct);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
