const express = require('express');

const path = require('path');
const { giveCollection } = require('./client')

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/products', async (req, res) => {

  try {

    const products = await giveCollection("Cloths_products")
    console.log(products);
    const data = await products.find().toArray()
    console.log(data);
    return res.json(data);

  } catch (error) {
    console.log(error)
  }
});


app.get('/', (req, res) => {
  res.send("Backend is running!");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
