import React, {useReducer, useState} from 'react'
import Button from './Button'
import './ProductCartItem.css'
import { CartFunction } from './CartContext'
const ProductCartItem = (prop) => {
    const  cartCtx = CartFunction();
const [quantity, setQuantity] = useState(0);

function incQuan (item){
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    cartCtx.manageCartedItem(item, newQuantity);

}
function decQuan (item){
    let newQuantity = 0;
    if(quantity >= 1){ newQuantity = quantity - 1;}
    setQuantity((prevValue) => prevValue >= 1 ? prevValue - 1 : prevValue);
    cartCtx.manageCartedItem(item, newQuantity);
}

  return (
    <>
    <div className="product-cart-item">
        <div className="product-name">
            {
                prop.data.name
            }
        </div>
        <div className="product-price">
            {prop.data.price}
        </div>
        <div className="product-number-button">
            <Button cName="decBtn" sign="-" clickEvent={()=> decQuan(prop.data, quantity)}/>
                {quantity}
            <Button cName="incBtn" sign="+" clickEvent={()=>incQuan(prop.data, quantity)}/>
            
        </div>
    </div>
    </>
  )
}

export default ProductCartItem