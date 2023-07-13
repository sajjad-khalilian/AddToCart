import React, { createContext, useEffect, useState } from 'react';
import { get_products } from '../services/api';




export const ProductContext = createContext()

const ProductcontextProvider = ({children}) => {

    const [products , setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts (await get_products())
        }
        fetchAPI()
    } , [])



    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductcontextProvider;