import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/product", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`server at http://localhost:${PORT}`);
});
