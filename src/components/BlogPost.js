const BlogPost = ({ blogPost }) => {
    return ( 
        <div className="blogpost">
            <div>{blogPost.category.name}</div>
            <div>{blogPost.title}</div>
            <div>Published Date: {blogPost.publishedDate}</div>
            <div>{blogPost.author}</div>
            <div>{blogPost.minute_read} min read</div>
        </div>
     );
}
 
export default BlogPost;