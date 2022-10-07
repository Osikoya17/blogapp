import "./singleP.css";
import React,{ useEffect ,useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import Sidebar from "../../components/sidebar";
import { useParams } from "react-router-dom";
import http from "../../api/http";
const SinglePost = () => {
  const [post,setPost] = useState({})
  const { uid } = useParams()
  let ignore = false
  useEffect(() => {
    const Post = async () => {
        try {
            const response = await http.get("/everything?domains=techcrunch.com,thenextweb.com&apiKey=7b2908ed854c4cb4ae883a95cf0c2b1b");
            setPost(response.data.articles[uid])
            console.log(response.data.articles[uid])
        } catch (error) {
            console.log(error);
        }
    }
    if (!ignore) Post()
    return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ignore = true
    }
}, [])
  return (
    <DefaultLayout>
      <div className="singlePost">
        <div className="singlePostitem">
          <img src={post.urlToImage} alt="" />
          <div className="singlePostinfo">
            <h1 className="singlePostTitle">
              {post.title}
              <div className="singlePostIcon">
              <i className="fa-regular fa-pen-to-square"></i>
              <i className="fa-regular fa-trash-can"></i>
              </div>
            </h1>
            <div className="singlePostdetails">
              <span>Author: <b>{post.author}</b></span>
            </div>
            <p className="singlePostDesc">{post.content}</p>
            <a href={post.url}>For more info {post.url}</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <Sidebar />
      </div>
    </DefaultLayout>
  );
};

export default SinglePost;
