import React, { useState } from "react";
import useCart from "./useCart";
import Header from "../components/Header";

const CartPage = () => {
  const { cartList, removeFromCart, increaseCartItem, decreaseCartItem } =
    useCart();
  const [orderMessage, setOrderMessage] = useState("");

  const handlePlaceOrder = () => {
    if (cartList.length === 0) return;
    setOrderMessage("✅ Order placed successfully!");
    setTimeout(() => {
      setOrderMessage("");
    }, 4000);

    // Remove all items from cart
    cartList.forEach((item) => removeFromCart(item.id));
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {orderMessage && (
          <div className="mb-4 text-green-600 font-semibold">{orderMessage}</div>
        )}
        {cartList.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartList.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseCartItem(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseCartItem(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <button
                onClick={handlePlaceOrder}
                className="px-5 py-2 bg-green-600 text-white font-semibold rounded hover:green-blue-700 transition"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
