import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import BlogPostDetail from "./pages/BlogPostDetail";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryDetail from "./pages/CategoryDetail";
import TagDetail from "./pages/TagDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:postid" element={<BlogPostDetail />} />
            <Route path="/categories/:categoryid" element={<CategoryDetail />} />
            <Route path="/tags/:tagid" element={<TagDetail />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
