const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCartItems,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity
} = require("../controllers/cartController");

router.post("/add", addToCart);

router.get("/", getCartItems);

router.delete("/:id", removeCartItem);

router.put("/increase/:id", increaseQuantity);

router.put("/decrease/:id", decreaseQuantity);

module.exports = router;