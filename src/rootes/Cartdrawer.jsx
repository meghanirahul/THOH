import React from "react";
import '../style/section/cartdrawer.css'

export default function Cartdrawer() {

   const removeover = () => { document.body.classList.remove('overlay_h');document.getElementById('on_cart').classList.remove('cart_block'); }
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
                  <div className="cart_body"></div>
                  <div className="cart_footer"></div>
               </div>
            </div>
         </div>
      </>
   )
}