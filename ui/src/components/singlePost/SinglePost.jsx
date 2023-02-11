import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  // console.log(path);
  const[posts,setPosts]=useState({});
  
  useEffect(() => {
    const getPost = async ()=>{
      const res = await axios.get("/posts/" + path);
      // console.log(res);
      setPosts(res.data);
    };
    getPost()
  }, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {posts.photo && ( 
          <img
          className="singlePostImg"
          src={posts.photo}
          alt=""
        />
        )}
       
        <h1 className="singlePostTitle">
          {posts.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${posts.username}`} className="link">
            <b className="singlePostAuthor">
                {posts.username}
            </b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(posts.createdAt).toDateString( )}</span>
        </div>
        <p className="singlePostDesc">
          {posts.desc}
        </p>
      </div>
    </div>
  );
}
