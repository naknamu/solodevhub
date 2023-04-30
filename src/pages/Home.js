import { useEffect, useState } from "react";

import BlogPost from "../components/BlogPost";

const Home = () => {

    const [blogPosts, setBlogPosts] = useState(null);

    useEffect(() => {
        const fetchBlogPost = async() => {
            try {
                const response = await fetch('/api/posts/published');
                const json = await response.json();

                setBlogPosts(json);
            } catch (err) {
                console.error(err)
            }
        }

        fetchBlogPost();
    }, [])

    return ( 
        <div className="home">

            {/**BLOG SECTION */}
            <div className="main">
                <div className="container">
                    <div className="blog">
                        <h2 className="h2">Latest Blog Posts</h2>
                        <div className="blogPosts-card">
                            {blogPosts && blogPosts.map(blogPost => (
                                <BlogPost blogPost={blogPost} key={blogPost._id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default Home;