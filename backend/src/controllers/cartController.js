const pool = require("../config/db");

const addToCart = async (req, res) => {
  try {
    const { product_id, title, image, price } = req.body;

    const result = await pool.query(
      `INSERT INTO cart (product_id, title, image, price)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [product_id, title, image, price]
    );

    res.status(201).json({
      success: true,
      item: result.rows[0]
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const getCartItems = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM cart ORDER BY id DESC"
    );

    res.status(200).json({
      success: true,
      items: result.rows
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};
const increaseQuantity = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "UPDATE cart SET quantity = quantity + 1 WHERE id = $1",
      [id]
    );

    res.json({
      success: true,
      message: "Quantity Increased"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const decreaseQuantity = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      `
      UPDATE cart
      SET quantity =
      CASE
        WHEN quantity > 1 THEN quantity - 1
        ELSE 1
      END
      WHERE id = $1
      `,
      [id]
    );

    res.json({
      success: true,
      message: "Quantity Decreased"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM cart WHERE id = $1",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Product Removed"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity
};