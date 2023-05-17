import { useNavigate } from "react-router-dom";

const CategoryButton = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const urlRegex = /\s/g;
    const url_title = category.name.toLowerCase().replace(urlRegex, '-');

    navigate(`/categories/${category._id}/what-is-${url_title}`);
  }

  return (
    <button className="blog-category text-tiny" onClick={handleClick}>
      {category.name}
    </button>
  );
};

export default CategoryButton;
