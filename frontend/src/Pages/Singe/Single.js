import React from "react";
import "./Single.css";
// import Sidebar from "../../component/Sidebar/Sidebar";
import SinglePost from "../../component/SinglePost/SinglePost";
export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      {/* <Sidebar/> */}
    </div>
  );
}
