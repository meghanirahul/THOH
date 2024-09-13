import React from "react";
import { useState } from "react";

export default function Quantity() {
    const [val, setVal] = useState(1);
    const plusquant = () => {if(typeof(val)=="string"){setVal(1)}else{setVal(val + 1)} }
    const minusquant = () => {if (val <= 1) { setVal(1) } else { setVal(val - 1) } }
    const changeval = (e) => {
          if (e.target.value.length > 0) { let temp = parseInt(e.target.value); 
              let isNumber = /^\d*\.?\d*$/.test(temp); 
              if (isNumber) { setVal(temp) } else { setVal(1) }; } else { setVal('') } 
      }
    return (
        <>
            <div className="qantity_counter">
                <button className="decrement" type="button" name="minus" onClick={minusquant}>-</button>
                <input className="quantity_input" type="number" name="quantity" onChange={changeval} value={val}></input>
                <button className="increament" type="button" name="plus" onClick={plusquant}>+</button>
            </div>
        </>
    )
}