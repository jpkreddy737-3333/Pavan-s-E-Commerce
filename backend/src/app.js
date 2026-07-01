const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "BRO's Mart Backend Running",
  });
});

module.exports = app;