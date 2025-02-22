//import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";
import { removeFromCart, incremente, decremente } from "./cartSlice";
import { Link } from "react-router-dom";
import './cart.css' 




function Cart(){
    
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    // Calcul du total du panier
  const total = items.reduce((acc, item) => acc + item.cost * item.quantity, 0);
            
    return  (
        <>
        <Header/>
        
        <ul className="panier-container">
            <span className="total" style={{fontSize: 'larger', padding: '10px'}}>le total est : ${total}</span>
        {
            items.map((item, index) =>{
                const sousTotal = item.cost * item.quantity;
                return (
                <li key={index} className="panier-item">
                    <div className="img-container">
                        <img src={item.img} alt={item.name} className="product-img" style={{width: '100%', height: '95%'}} />
                    </div>
                    <div className="product-proprety-container">
                        <h3 className="product-name" >{item.name}</h3>
                        <span className= "product-cost"style={{marginBottom : '10px'}}>${item.cost} </span>
                        <div className="decrement-increment-quantity-container" style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <button className= "btn-decrement" onClick={() => dispatch(decremente(item.id))} style={{marginBottom : '10px'}}>-</button>
                            <span className= "quantity" style={{marginBottom : '10px'}}>{item.quantity}</span>
                            <button className= "btn-increment" onClick={() => dispatch(incremente(item.id))} style={{marginBottom : '10px'}}>+</button>
                        </div>
                        <span className="sous-total" style={{marginBottom : '10px'}}>${sousTotal}</span>
                        <button className= "btn-delete" onClick={() => dispatch(removeFromCart(item.id))} style={{marginBottom : '10px', backgroundColor: 'red', color: 'white', borderRadius: '10px', padding: '5px 10px'}}>Supprimer</button>
                    </div>

                </li>
            )})
        }
        <Link to="/products" style={{textDecoration: 'none', marginTop: '2rem' }}><button style={{padding: '10px 20px', backgroundColor: 'green', borderRadius: '10px', color: 'white', fontSize: 'large'}}>Checkout</button></Link>
        </ul>
        
        </>
    )
}

export default Cart;