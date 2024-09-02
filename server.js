const express = require('express');
const path = require('path');
const { giveCollection } = require('./client');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve the API endpoint
app.get('/api/products', async (req, res) => {
  try {
    const products = await giveCollection("Cloths_products");
    const data = await products.find().toArray();
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching products");
  }
});

// Handle any other routes (if needed)
app.get('*', (req, res) => {
  res.status(404).send("API endpoint not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
