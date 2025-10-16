import React from "react";

const CartContext = React.createContext({
    cartList: [],
    addToCart: () => {},
    removeFromCart: () => {},
    increaseCartItem: () => {},
    decreaseCartItem: () => {}
});

export default CartContext