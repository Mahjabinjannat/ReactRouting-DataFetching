import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Posts from "./component/Posts";
import SinglePost from "./component/SinglePost";
// import axios from "axios";
// import { useEffect, useState } from "react";

function App() {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const {
  //         data: { posts },
  //       } = await axios.get("https://dummyjson.com/posts");
  //       setData(posts);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about/:id" element={<About />}></Route>
          <Route exact path="/posts" element={<Posts />}></Route>
          <Route exact path="/posts/:postId" element={<SinglePost />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
