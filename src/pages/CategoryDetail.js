import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const { DateTime } = require("luxon");

const CategoryDetail = () => {
    const { categoryid } = useParams();
    const [category, setCategory] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            const response = await fetch(`/api/categories/${categoryid}`);
            const data = await response.json();

            console.log(data);
            setCategory(data.category);

            // Filter only published posts
            const published_blogPost = data.blogPosts.filter(blogPost => blogPost.published === true)
            setBlogPosts(published_blogPost);
        }
        fetchCategoryDetails();
    }, [categoryid]);

    return ( 
        <div className="category-detail">
            <div className="container">
                <h1 className='category-title h1'>{category.name}</h1>
                <p>{category.detail}</p>
                <h2 className='h2'>Blog Posts</h2>
                <p>These are the blog posts under this category:</p>
                <ul className='blogList-wrapper'>
                    {blogPosts.map((blogPost) => (
                        <li className='blogList-card' key={blogPost._id}>
                            <div className="blogList-card-wrapper">
                                <Link to={`/posts/${blogPost._id}`} className="blogList-title">{blogPost.title}</Link>
                                <p className='blogList-date'>Published Date: {DateTime.fromJSDate(new Date(blogPost?.publishedDate)).toLocaleString(DateTime.DATE_MED)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default CategoryDetail;