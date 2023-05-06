import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import BlogPostDetail from "./pages/BlogPostDetail";
import CategoryDetail from "./pages/CategoryDetail";
import TagDetail from "./pages/TagDetail";
import Categories from "./pages/Categories";
import Tags from "./pages/Tags";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <ScrollToTop>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:postid" element={<BlogPostDetail />} />
            <Route
              path="/categories/:categoryid"
              element={<CategoryDetail />}
            />
            <Route path="/tags/:tagid" element={<TagDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </div>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
