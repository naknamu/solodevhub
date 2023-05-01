import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const BlogPostDetail = () => {
    const { postid } = useParams();
    const [blogPostDetail, setBlogPostDetail] = useState(null);

    useEffect(() => {

        // Fetch data from blog api
        const fethBlogDetail = async() => {
            try {
                const response = await fetch(`/api/posts/${postid}`);
                const data = await response.json();
                setBlogPostDetail(data);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }

        fethBlogDetail()

    }, [postid]);

    return ( 
        <div className="blogPostDetail">
            <BlogPost blogPostDetail={blogPostDetail} />
        </div>
    );
}
 
export default BlogPostDetail;