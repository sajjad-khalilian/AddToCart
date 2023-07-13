import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContectProvider';
import shopicon from "../../image/shop.png"
import styles from "./Navbar.module.css"


const Navbar = () => {


    const {state} = useContext(CartContext)

    return (
        <div className={styles.navbarHeader}>
            <Link className={styles.product} to="/products">Products</Link>
            <div>
                <Link to="/Cart"><img src={shopicon} alt="shop" style={{width:"30px"}}/></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;