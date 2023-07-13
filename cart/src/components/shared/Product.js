import React, { useContext } from 'react';
import { isInCart, quantityCount, shorten } from '../helper/functions';
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContectProvider';
import styles from "./Mainproduct.module.css"


const Product = ({itemData}) => {


    const {state , dispatch} = useContext(CartContext)


    return (
        <div className={styles.Main_product}>
            <img src={itemData.image} alt="itemData" />
            <div>
                <h3>{shorten(itemData.title)}</h3>
                <p>{itemData.price} $</p>
                <div className={styles.AddtoCart}>
                    <Link to={`/products/${itemData.id}`}>Detailes</Link>
                    <div>
                        {
                            isInCart(state , itemData.id)?
                            <button onClick={() => dispatch({type: "INCREASE" , payload: itemData})}>+</button>:
                            <button onClick={() => dispatch({type: "ADD_ITEM" , payload: itemData})}>Add To Cart</button>
                        }
                        {quantityCount(state, itemData.id) > 0 && <span className={styles.quantityCounter}>{quantityCount(state, itemData.id)}</span>}
                        {quantityCount(state , itemData.id) > 1 && <button className={styles.Negative} onClick={() => dispatch({type: "DECREASE" , payload: itemData})}>-</button>}
                        {quantityCount(state , itemData.id) === 1 && <button className={styles.RemoveItem} onClick={() => dispatch({type: "REMOVE_ITEM" , payload: itemData})}>Remove Item</button>}
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Product;