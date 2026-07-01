import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { toast } from "react-toastify";
function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";
script.async = true;
document.body.appendChild(script);
    axios
      .get("https://bros-mart-backend.onrender.com/api/cart")
      .then((res) => {
        if (res.data.success) {
  setCarts(res.data.items);
} else {
          throw Error(res.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);
       const handleRemove = (id) => {
  axios
    .delete(`https://bros-mart-backend.onrender.com/api/cart/${id}`)
    .then((res) => {
      if (res.data.success) {
        setCarts((prev) =>
          prev.filter((item) => item.id !== id)
        );

        toast.success("Product Removed");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Unable to remove product");
    });
};

const handlePayment = async () => {
  try {
    const total = carts.reduce(
      (sum, item) =>
        sum + Number(item.price) * (item.quantity || 1),
      0
    );

    const { data } = await axios.post(
      "https://bros-mart-backend.onrender.com/api/payment/create-order",
      {
        amount: total,
      }
    );

    const options = {
      key: "rzp_test_T4t5Xr4w3aJ9Qx",
      amount: data.order.amount,
      currency: data.order.currency,
      name: "BRO's Mart",
      description: "Shopping Payment",
      order_id: data.order.id,

      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful");
      },

      theme: {
        color: "#ff7f50",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();

  } catch (error) {
    console.log(error);
    toast.error("Payment Failed");
  }
};

  return (
  <div className="cart-container">
    <div className="cart-content">
      <div className="cart-content-header">
        <h4>IMAGE</h4>
        <h4>PRODUCT</h4>
        <h4>PRICE</h4>
        <h4>QUANTITY</h4>
        <h4>ACTION</h4>
      </div>

      <div className="cart-content-body">
        {carts.length > 0 ? (
          carts.map((cart) => (
            <div className="cart-content-body-data" key={cart.id}>
              <div>
                <img
                  src={cart.image}
                  alt={cart.title}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "contain",
                    borderRadius: "10px"
                  }}
                />
              </div>

              <div>
                <h4>{cart.title}</h4>
              </div>

              <div>
                <h3 style={{ color: "green" }}>
                  ${cart.price}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center"
                }}
              >
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <div>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                  onClick={() => handleRemove(cart.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3
            style={{
              color: "red",
              fontSize: "42px",
              textAlign: "center",
              marginTop: "150px"
            }}
          >
            No Data To Display
          </h3>
        )}
      </div>
    </div>

    <div className="cart-order-summary">
      <h2 style={{ color: "white", textAlign: "center" }}>
        Order Summary
      </h2>

      <div
        style={{
          color: "white",
          padding: "20px"
        }}
      >
        <p>
          Items : <b>{carts.length}</b>
        </p>

        <p>
          Total : $
          <b>
            {carts.reduce(
              (sum, item) => sum + Number(item.price),
              0
            )}
          </b>
        </p>

       <button
  onClick={handlePayment}
  style={{
    width: "100%",
    padding: "12px",
    backgroundColor: "coral",
    color: "white",
    border: "none",
    marginTop: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }}
>
  Proceed To Checkout
</button>
        
      </div>
    </div>
  </div>
);
}

export default Cart;