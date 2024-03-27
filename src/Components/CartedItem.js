import React, { useEffect, useState } from "react";
import { CartFunction } from "./CartContext";

const CartedItem = () => {
  const [uiCartedItem, setUiCartedItem] =useState(null);
  const cartCtx = CartFunction();

  useEffect(()=>{
    const newCartedItem = cartCtx.cartedItem.filter((ele) =>
   { if(ele.quantity >= 1){
      return ele;
    }}
    )

    setUiCartedItem(newCartedItem);

    if (newCartedItem.length === 0) {
      setUiCartedItem(null);
    }
  },[cartCtx.cartedItem])
  return (
    <>
      <div className="carted-item">
        <div className="carted-item">
          {
            uiCartedItem !== null ?  uiCartedItem.map((ele) => (
              <div key={ele.id} style={{display:"flex", gap:"1rem"}}>
                <p>{ele.name}</p>
                <p>{ele.price}</p>
                <p>{ele.quantity}</p>
              </div>
            )) : (<div> Add Product Please </div>) 
          }
        </div>
        <div className="totalPrice">
        <h3>Total:  {cartCtx.totalPrice}</h3> 
        </div>
      </div>
    </>
  );
};

export default CartedItem;