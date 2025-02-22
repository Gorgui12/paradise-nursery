//import React from "react";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import './header.css'






function Header(){
const items = useSelector((state) => state.cart.items);

    return(
        <div className="header-container">
            <div className="logo-and-title-container">
                <div className="logo-container">
                 <Link to= '/'> <img src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_640.png" alt="logo" className="logo-img"/></Link>
                </div>
                <div className="titlr-container">
                    <h2>Paradise Nursery</h2>
                    <p>Where green meet security</p>
                </div>
            </div>
            <div >
                <span style={{fontSize: '2rem'}}>Plant</span>
            </div>
            <div >
                <Link to= "/cart"><FaShoppingCart size={30} color="white"/><span style={{borderRadius: '50%'}} className="cart-quantity">{items.length}</span></Link>
            </div>
        </div>

    )
}
export default Header