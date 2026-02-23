const express = require("express");
const app = express();

app.use(express.json());


app.use((req, res, next) => {
  console.log(`Logging middleware is called: ${req.method} ${req.url}`);
  next();
});


const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name and Price are required." });
  }
  if (price === undefined) {
    return res.status(400).json({ error: "Name and Price are required." });
  }
  next();
};

let products = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/product", validateProduct, (req, res) => {
  const { name, price } = req.body;
  const product = { id: products.length + 1, name, price };
  products.push(product);
  res.status(201).json({ message: "Product added successfully", product });
});


app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
