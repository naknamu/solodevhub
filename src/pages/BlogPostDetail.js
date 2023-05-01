import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const { DateTime } = require("luxon");

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
            <div className="container">
                
                <div className="blog-head-wrapper">
                    <button className="blog-category text-tiny">
                        {blogPostDetail?.category.name}
                    </button>
                    <div className="blog-title">
                        {blogPostDetail?.title}
                    </div>
                    <div className="blog-subtitle">
                        <p className="author">
                            by {blogPostDetail?.author}
                        </p>
                        <span className="separator"></span>
                        <p className="date">
                            {DateTime.fromJSDate(new Date(blogPostDetail?.publishedDate)).toLocaleString(DateTime.DATETIME_MED)}
                        </p>
                        <span className="separator"></span>
                        <p>
                            {blogPostDetail?.minute_read} min read
                        </p>
                    </div>

                    <div className="tag-wrapper">                
                        {blogPostDetail?.tags.map(tag =>(
                            <button className="blog-tags text-tiny" key={tag._id}>#{tag.name}</button>
                        ))}
                    </div>

                    <div className="blog-content">
                        {blogPostDetail?.content}
                    </div>
                </div>

                
            </div>
        </div>
    );
}
 
export default BlogPostDetail;