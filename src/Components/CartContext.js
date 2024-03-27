import { createContext, useContext, useEffect, useState } from "react";

const CartContextController = createContext({});

export const CartFunction = () => {
  return useContext(CartContextController);
};

const CartContext = (prop) => {
  const ProductsData = [
    { id: 1, name: "Product-1", price: 100, quantity: 0 },
    { id: 2, name: "Product-2", price: 200, quantity: 0 },
    { id: 3, name: "Product-3", price: 300, quantity: 0 },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartedItem, setCartedItem] = useState([]);
  // function manageCartedItem(item, quantity) {

  function manageCartedItem(item, quantity) {

    setCartedItem((prevValue) => {
      const existingItem = prevValue.find((ele) => ele.id === item.id);
  
      if (existingItem) {
        const updatedCart = prevValue.filter((ele) => ele.id !== item.id);
       
        return [...updatedCart, { ...item, quantity }];
      } else {
        return [...prevValue, { ...item, quantity }];
      }

    });
  }
  function updateTotalPrice(){
    let priceSum = 0;
     cartedItem.map((ele)=>priceSum+=(ele.price * ele.quantity));
    return priceSum;
  }
  const functionObject = {
    totalPrice,
    setTotalPrice,
    ProductsData,
    cartedItem,
    setCartedItem,
    manageCartedItem,
    updateTotalPrice
  };
  return (
    <CartContextController.Provider value={functionObject}>
      {prop.children}
    </CartContextController.Provider>
  );
};

export default CartContext;