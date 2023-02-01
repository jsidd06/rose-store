import express from "express";
import data from "./data.js";
import cors from "cors";
const app = express();

app.use(cors());

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
