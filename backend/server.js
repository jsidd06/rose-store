import dotenv from "dotenv";
import express from "express";
import data from "./data.js";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routers/userRouters.js";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

// ERROR MESSAGE
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`server at http://localhost:${PORT}`);
});
