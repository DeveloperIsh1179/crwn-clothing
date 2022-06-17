import { useContext, Fragment } from 'react';
import CategoryPreview from 'component/category-preview/category-preview.component';

import { CategoriesContext } from 'contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
