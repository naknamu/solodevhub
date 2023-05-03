import { Link } from "react-router-dom";

const CategoryButton = ({ category }) => {
    return ( 
        <button className="blog-category text-tiny">
            <Link to={`/categories/${category._id}`}>
                {category.name}
            </Link>
      </button>
     );
}
 
export default CategoryButton;