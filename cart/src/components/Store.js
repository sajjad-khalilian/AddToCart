import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductcontextProvider';
import Product from './shared/Product';
import styles from "./store.module.css"



const Store = () => {

    const products = useContext(ProductContext)


    return (
        <div className={styles.store}>
            {
                products.map(item => <Product key={item.id} itemData={item}/>)
            }
        </div>
    );
};

export default Store;