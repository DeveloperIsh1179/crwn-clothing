import './directory.styles.scss'
import CategoryItem from 'component/category-item/category-item.component'

const Directory = ({ categories }) => (
  <div className='directory-container'>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
)

export default Directory