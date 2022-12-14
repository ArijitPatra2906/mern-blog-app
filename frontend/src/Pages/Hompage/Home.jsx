import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
// import Sidebar from "../../component/Sidebar/Sidebar";
import Posts from "../../Posts/Posts";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </div>
  );
}
