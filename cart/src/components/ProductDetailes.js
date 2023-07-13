import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductcontextProvider';
import styles from "./ProductDetailes.module.css"
const ProductDetailes = (props) => {

    const id = props.match.params.id
    const data = useContext(ProductContext)
    const product = data[id - 1]
    const {image , description , title , price , category} = product;


    
    return (
        <div className={styles.Detailes}>
            <img src={image} alt="product"/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category : </span>{category}</p>
                <div>
                    <span>{price} $</span><br/>
                    <Link to="/products">Back To Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailes;