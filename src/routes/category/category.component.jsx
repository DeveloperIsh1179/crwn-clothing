import { useContext, useState, useEffect } from 'react';
import './category.styles.scss';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from 'contexts/categories.context';
// import ProductCard from 'component/product-card/product-card.component';

const Category = () => {
  const { category } = useParams;
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => console.log('this is the products', product))}
    </div>
  );
};

export default Category;