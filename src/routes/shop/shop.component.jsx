import { useContext } from 'react';
import ProductCard from 'component/product-card/product-card.component';

import { ProductsContext } from 'contexts/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
