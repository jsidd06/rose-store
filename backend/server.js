import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routers/userRouters.js";
import productRouter from "./routers/productRoute.js";
import orderRouter from "./routers/orderRouters.js";
import path from "path";
import uploadRouter from "./routers/uploadRouters.js";

// DOTENV
dotenv.config();
// MONGOOSE DB CONNECTED
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
// CORS API ERROR
app.use(cors());
// JSON FORMATE DATA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/uploads", uploadRouter);
// USERS API
app.use("/api/users", userRouter);
// PRODUCTS API
app.use("/api/products", productRouter);
// ORDER API
app.use("/api/orders", orderRouter);
// PAYPAL API
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
const __dirname = path.resolve();
app.use(
  "/backend/uploads",
  express.static(path.join(__dirname, "/backend/uploads"))
);
// SERVER READY ROUTE
app.get("/", (req, res) => {
  res.send("server is ready");
});

// ERROR MESSAGE
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// PORT LOCALHOST
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server at http://localhost:${PORT}`);
});
