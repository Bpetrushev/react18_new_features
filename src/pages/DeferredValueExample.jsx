import { useState, useDeferredValue } from 'react';

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 50000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
};

const ProductList = ({ products }) => {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
};

const dummyProducts = generateProducts();

const filterProducts = (filterTerm) => {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
};

const DeferredValueExample = () => {
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (event) => {
    setFilterTerm(event.target.value);
  };

  return (
    <div id='app'>
      <input type='text' onChange={updateFilterHandler} />
      <ProductList products={filteredProducts} />
    </div>
  );
};
export default DeferredValueExample;
