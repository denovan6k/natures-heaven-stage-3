import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [add,setAdd]=useState(0)
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
   
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
      setAdd(add + 1);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  const deleteFromCart = (item) => {
    // Remove the specified item from the cart
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const totalgetCartTotal = () => {
    return cartItems.reduce((total, item) => total + item?.current_price[0]?.NGN[0] * item.quantity + 225, 0);
  };
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item?.current_price[0]?.NGN[0] * item.quantity , 0);
  };
  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        totalgetCartTotal,
        deleteFromCart,
        add,
      }}
    >
      {children}
    </CartContext.Provider>
  );
 
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};