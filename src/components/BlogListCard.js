import { Link } from "react-router-dom";
const { DateTime } = require("luxon");

const BlogListCard = ({ blogPost }) => {
    return ( 
        <li className='blogList-card'>
            <div className="blogList-card-wrapper">
                <Link to={`/posts/${blogPost._id}`} className="blogList-title">{blogPost.title}</Link>
                <p className='blogList-date'>Published Date: {DateTime.fromJSDate(new Date(blogPost.publishedDate)).toLocaleString(DateTime.DATE_MED)}</p>
            </div>
        </li>
     );
}
 
export default BlogListCard;