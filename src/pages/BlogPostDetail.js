import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Comment from '../components/Comment';

const BlogPostDetail = () => {
    const { postid } = useParams();
    const [blogPostDetail, setBlogPostDetail] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {

        // Fetch data from blog api
        const fetchBlogDetail = async() => {
            try {
                const response = await fetch(`/api/posts/${postid}`);
                const data = await response.json();
                setBlogPostDetail(data);
            } catch (err) {
                console.error(err);
            }
        }

        // Fetch comments
        const fetchComments = async() => {
            try {
                const response = await fetch(`/api/posts/${postid}/comments`);
                const data = await response.json();
                setComments(data);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchBlogDetail();
        fetchComments();

    }, [postid]);

    return ( 
        <div className="blogPostDetail">
            <BlogPost blogPostDetail={blogPostDetail} />
            <Comment comments={comments}/>
        </div>
    );
}
 
export default BlogPostDetail;