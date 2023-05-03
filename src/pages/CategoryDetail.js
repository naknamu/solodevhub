import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogListCard from '../components/BlogListCard';

const CategoryDetail = () => {
    const { categoryid } = useParams();
    const [category, setCategory] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            const response = await fetch(`/api/categories/${categoryid}`);
            const data = await response.json();

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
                    {blogPosts && blogPosts.map((blogPost) => (
                        <BlogListCard blogPost={blogPost} key={blogPost._id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default CategoryDetail;