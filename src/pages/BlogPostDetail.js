import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail = () => {
    const { postid } = useParams();
    const [blogPostDetail, setBlogPostDetail] = useState(null);

    useEffect(() => {

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
            <div className="container">
                
                <div className="blog-title h1">
                    {blogPostDetail?.title}
                </div>
            </div>
        </div>
    );
}
 
export default BlogPostDetail;