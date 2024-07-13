import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const url = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=6627688d8ad24703ba7df16ceeb331cd&reverse_sort=false&page=1&size=10&Appid=2BVWIREIL17DI36&Apikey=b341c378adc14231994284c269e1866c20240712133056847781';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    getData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate children prop
  };
export default ProductProvider;
