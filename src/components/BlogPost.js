const { DateTime } = require("luxon");

const BlogPost = ({ blogPostDetail }) => {
    return (  
        <div className="blog-post">
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
 
export default BlogPost;