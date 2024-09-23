import React from "react";
import { useState } from "react";

export default function CounterandCart(prop) {
    const [val, setVal] = useState(1);
    const plusquant = () => { if (typeof (val) == "string") { setVal(1) } else { setVal(val + 1) } }
    const minusquant = () => { if (val <= 1) { setVal(1) } else { setVal(val - 1) } }
    const changeval = (e) => {
        if (e.target.value.length > 0) {
            let temp = parseInt(e.target.value);
            let isNumber = /^\d*\.?\d*$/.test(temp);
            if (isNumber) { setVal(temp) } else { setVal(1) };
        } else { setVal('') }
    }
    const addToCart = async(e) => {
        e.preventDefault();
        console.log(prop.product.handle, val);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({handle: prop.product.handle, quantity: val}),
            })
            if(response.ok){
                const cartitems = await response.json();
                console.log(cartitems);
                prop.getCartdata(cartitems);
                document.getElementById('your_cart').dispatchEvent(new MouseEvent('click',{bubbles: true}))
            }
            else{
                console.log("error in fetch");
            }
        }catch(err){
            console.error(err);
        }
    }
    return (
        <>
            <div className="counter">
                <div className="qantity_counter">
                    <button className="decrement" type="button" name="minus" onClick={minusquant}>-</button>
                    <input id="quantity" className="quantity_input" type="number" name="quantity" onChange={changeval} value={val} max={400}></input>
                    <button className="increament" type="button" name="plus" onClick={plusquant}>+</button>
                </div>
            </div>
            <div className="add_to_cart">
                <div className="button">
                    <a href="#name" className="p-heading button-contain" onClick={addToCart}>ADD TO CART</a>
                </div>
            </div>
        </>
    )
}