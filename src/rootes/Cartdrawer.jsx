import React, { useEffect } from "react";
import { useState } from "react";
import '../style/section/cartdrawer.css'

export default function Cartdrawer(prop) {
   const removeover = () => { document.body.classList.remove('overlay_h'); document.getElementById('on_cart').classList.remove('cart_block'); }
   const [cartItem, setCartItem] = useState([]);
   const [fetchCart, setfetcart] = useState(null);
   const [cartval, cartsetVal] = useState([]);

   //for manually update
   const [chan, setchan] = useState(false);
   if (chan) {
      console.log("=======init======>", prop.passCartData)
      console.log(cartItem, cartval);
      setchan(false);
      let ismatchany = false;

      if (cartItem.length > 0) {
         const copycartitems = cartItem.map((val, index) => {
            if (val.handle === prop.passCartData.handle) {
               ismatchany = true;
               val.quantity += prop.passCartData.quantity;
               val.total += prop.passCartData.total;
               const setnewarr = cartval;
               setnewarr[index] = val.quantity;
               cartsetVal(setnewarr);
               return val;
            }
            return val;
         });
         if (ismatchany) {
            setCartItem(copycartitems);
         }
         else {
            setCartItem([...cartItem, prop.passCartData]);
         }
      }
      else {
         setCartItem([...cartItem, prop.passCartData]);
      }

   }







   useEffect(() => {
      if (prop.passCartData) {
         setchan(true);
         // setCartItem(prop.passCartData);
         // cartsetVal(prop.passCartData.map((val)=>{
         //    return val.quantity;
         // }))

         // console.log(cartItem, cartval);
      }
   }, [prop.passCartData])
   const plusquant = (e) => {
      const cartindex = parseInt(e.target.getAttribute('tabIndex'));
      cartsetVal(items => {
         return items.map((val, index) => {
            if (cartindex === index) {
               console.log(val)
               if (val < 400) {
                  val += 1;
               }
               else {
                  val = 400;
               }
               return val;
            }
            return val
         })
      })
      console.log("cartVal", cartval)
      updateCart(e.target.getAttribute('itemID'), (cartval[cartindex] + 1))
   }
   const minusquant = (e) => {
      const cartindex = parseInt(e.target.getAttribute('tabIndex'));
      cartsetVal(items => {
         return items.map((val, index) => {
            if (cartindex === index) {
               if (val > 0) {
                  val -= 1;
               }
               else {
                  val = 0;
               }
               return val;
            }
            return val
         })
      })
      updateCart(e.target.getAttribute('itemID'), (cartval[cartindex] - 1))
   }
   const changeval = (e) => {
      const cartindex = parseInt(e.target.getAttribute('tabIndex'));
      if (e.target.value > 0) {
         let temp = parseInt(e.target.value);
         if (temp > 0 && temp < 400) { }
         else if (temp < 1) { temp = 0; }
         else { temp = 400; }
         let isNumber = /^\d*\.?\d*$/.test(temp);
         if (isNumber) {
            cartsetVal(items => { return items.map((val, index) => { if (cartindex === index) { val = temp; updateCart(e.target.getAttribute('itemID'), val); return val; } return val }) })
         } else {
            cartsetVal(items => { return items.map((val, index) => { if (cartindex === index) { val = 1; updateCart(e.target.getAttribute('itemID'), val); return val; } return val }) })
         };
      } else { cartsetVal(items => { return items.map((val, index) => { if (cartindex === index) { val = 0; updateCart(e.target.getAttribute('itemID'), val); return val; } return val }) }) }
   }

   async function updateCart(handle, quantity) {
      async function fetchlatest() {
         //    const response = await fetch(`${process.env.REACT_APP_API_URL}/updatecart`,{
         //       method: 'POST',
         //       headers: {'Content-Type': 'application/json'},
         //       body: JSON.stringify({handle: handle, quantity: quantity}),
         //    })
         //    if(response.ok){
         //       const cartitems = await response.json();
         //       console.log(cartitems,cartval);
         //       setCartItem(cartitems);
         //       cartsetVal(cartitems.map((val)=>{
         //          return val.quantity;
         //       }))
         //   }
         //   else{
         //       console.log("error in fetch");
         //   }
         const updatedary = cartItem.map((val,index)=>{
            if(val.handle === handle){
               val.quantity = quantity;
               val.total = quantity * parseFloat(parseFloat(val.price).toFixed(2));
               const updatedquant = cartval;
               updatedquant[index] = val.quantity;
               cartsetVal(updatedquant);
               return val;
            }
            return val;
         });
         setCartItem(updatedary);
         setfetcart(null);
      }
      if (!fetchCart) {
         setfetcart(setTimeout(fetchlatest, 2000));
      }

      else {
         clearTimeout(fetchCart)
         setfetcart(setTimeout(fetchlatest, 2000));
         console.log('Timeout is already set, skipping...')
      }
      console.log(handle, quantity)
   }

   const deletitem = async (e) => {
      let handle = e.target.getAttribute('itemID');
      let index = e.target.getAttribute('tabIndex');
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/delete`, {
      //    method: 'POST',
      //    headers: { 'Content-Type': 'application/json' },
      //    body: JSON.stringify({ handle: handle, index: index }),
      // })
      // if (response.ok) {
      //    const cartitems = await response.json();
      //    console.log(cartitems, cartval);
      //    setCartItem(cartitems);
      //    cartsetVal(cartitems.map((val) => {
      //       return val.quantity;
      //    }))
      // }
      // else {
      //    console.log("error in fetch");
      // }
      const copyitemsarr = cartItem.filter((val,ind)=>{
         let deletind
         if(val.handle === handle){
            deletind = ind;
            const quantset = cartval;
            quantset.splice(index, 1)
            cartsetVal(quantset);
         }
         return ind !== deletind;
      });
      setCartItem(copyitemsarr);
   }

   return (
      <>
         <div id="on_cart" className="cart-drawer">
            <div className="cart_drawer-main">
               <div className="cart_overlay" onClick={removeover}></div>
               <div className="cart_content">
                  <div className="cart_header">
                     <h2 className="h2">Cart</h2>
                     <button type="button" className="drawer_close_button" aria-label="drawer-close" onClick={removeover}>
                        <svg aria-hidden="true" focusable="false" fill="none" width="14" className="icon icon-close" viewBox="0 0 16 16">
                           <path d="m1 1 14 14M1 15 15 1" stroke="currentColor" strokeWidth="1.5"></path>
                        </svg>
                     </button>
                  </div>
                  <div className="cart_body">

                     {(cartItem === null || cartItem === undefined || cartItem.length < 1) ? (
                        <p>Cart Is Empty</p>
                     ) : (
                        cartItem.map((val, index) => {
                           return <>
                              <div className="cart_items">
                                 <div className="pro_media">
                                    <img src={require(`../upload/${val.featureimg}`)} alt="cartImage" className="cart_image" />
                                 </div>
                                 <div className="pro_info">
                                    <p id={"title" + index}>{val.title}</p>
                                    <p>$ {val.price}</p>
                                    <div className="cart_counter">
                                       <div className="counter">
                                          <div className="qantity_counter">
                                             <button className="decrement" type="button" name="minus" onClick={minusquant} tabIndex={index} itemID={val.handle}>-</button>
                                             <input id={"quantity" + index} className="quantity_input" type="number" name="quantity" max={400} tabIndex={index} itemID={val.handle}
                                                onChange={changeval} value={(cartval.length !== cartItem.length) ? (val.quantity) : (cartval[index])}></input>
                                             <button className="increament" type="button" name="plus" onClick={plusquant} tabIndex={index} itemID={val.handle}>+</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="total">
                                    <p>$ {val.total}</p>
                                    <p className="light-text" onClick={deletitem} itemID={val.handle} tabIndex={index}>remove</p>
                                 </div>
                              </div>
                           </>
                        })
                     )}

                  </div>
                  <div className="cart_footer"></div>
               </div>
            </div>
         </div>
      </>
   )
}