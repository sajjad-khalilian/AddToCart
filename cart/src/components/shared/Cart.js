import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContectProvider';
import { shorten } from '../helper/functions';
import styles from "./Cart.module.css"
import trashicon from "../../image/Trash.png"
import plusicon from "../../image/plus.png"
import minimize from "../../image/minimize.png"

const Cart = (props) => {


    const {dispatch} = useContext(CartContext)
    const {image , title , price , quantity} = props.data

    return (
        <div className={styles.Cart}>
            <img src={image} alt="cart"/>
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div className={styles.cartimage}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})}><img src={minimize} alt="minimize"/></button>:
                    <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}><img src={trashicon} alt="trash"/></button>
                }
                <button onClick={() => dispatch({type: "INCREASE" , payload: props.data})}><img src={plusicon} alt="plus"/></button>
            </div>
        </div>
    );
};

export default Cart;