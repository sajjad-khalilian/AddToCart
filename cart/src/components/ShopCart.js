import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CartContext } from '../context/CartContectProvider';
import Cart from './shared/Cart';
import styles from "./ShopCart.module.css"
const ShopCart = () => {


    const {state , dispatch} = useContext(CartContext)
    return (
        <div>
            {
                state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
            }
            {
                state.itemCounter > 0 &&
                 <div className={styles.shopCart}>
                     <p><span>total Items: </span>{state.itemCounter}</p>
                     <p><span>total Payments: </span>{state.total} $</p>
                     <div>
                         <button onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                         <button onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                     </div>
                 </div>
            }
            {
                state.checkOut && 
                <p className={styles.checkOut}>CheckOut Successfully</p>
            }
            {
                !state.checkOut && state.itemCounter === 0 && 
                <div className={styles.Clear}>
                    <p>Want to buy?</p>
                    <Link to="/products">Go To Shop</Link>
                </div>
                    
            }
        </div>
    );
};

export default ShopCart;