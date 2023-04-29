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
                console.log(json)
            } catch (err) {
                console.error(err)
            }
        }

        fetchBlogPost();
    }, [])

    return ( 
        <div className="home">
            <div className="blogPosts">
                {blogPosts && blogPosts.map(blogPost => (
                    <BlogPost blogPost={blogPost} key={blogPost._id}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;