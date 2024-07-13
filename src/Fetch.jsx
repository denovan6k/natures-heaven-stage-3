import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const url = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=6627688d8ad24703ba7df16ceeb331cd&reverse_sort=false&page=1&size=10&Appid=2BVWIREIL17DI36&Apikey=b341c378adc14231994284c269e1866c20240712133056847781';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.items); // Access the 'items' array in the response data
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    getData();
  }, []); // The empty dependency array ensures this runs only once

  console.log(products, 'results');

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
