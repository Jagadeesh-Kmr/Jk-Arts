import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem("cart");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => ({
      ...item,
      quantity:
        Number.isFinite(Number(item.quantity)) && Number(item.quantity) > 0
          ? Number(item.quantity)
          : 1,
    }));
  } catch {
    return [];
  }
}

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(loadCartFromStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const addToCart = (item) => {
    setCartList((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        const nextQty = (Number(existing.quantity) || 0) + 1;
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: nextQty }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartList((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  const increaseCartItem = (id) => {
    setCartList((prev) =>
      prev.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: (Number(cartItem.quantity) || 0) + 1 }
          : cartItem
      )
    );
  };

  const decreaseCartItem = (id) => {
    setCartList((prev) =>
      prev
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: (Number(cartItem.quantity) || 0) - 1 }
            : cartItem
        )
        .filter((cartItem) => (Number(cartItem.quantity) || 0) > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeFromCart, increaseCartItem, decreaseCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
