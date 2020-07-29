import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const totalPrice = 5.99 * cartItems.length
    const totalPriceDisplay = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const [buttonDisplay, setButtonDisplay] = useState("Place Order")
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    function placeOrder(){
        setButtonDisplay("Ordering...")
        setTimeout(() =>{
            console.log("Order placed!")
            setButtonDisplay("Place Order")
            emptyCart()
        },3000)
       
        
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPriceDisplay} </p>
            <div className="order-button">
                {cartItems.length > 0  ? <button onClick={placeOrder}>{buttonDisplay}</button>:
                <h2>You have no items in your cart</h2> }
                
            </div>
        </main>
    )
}

export default Cart