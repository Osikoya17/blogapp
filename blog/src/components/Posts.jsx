import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/http";
import "./Posts.css";
const Posts = () => {
  const [news, setNews] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true)
  let isMounted = true
  useEffect(() => {
    async function Fetch() {
        try {
            const response = await http.get("/everything?domains=techcrunch.com,thenextweb.com&apiKey=7b2908ed854c4cb4ae883a95cf0c2b1b")
            const first = await response.data.articles;
            setNews(first)
            console.log(first);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if (isMounted) Fetch()
    return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isMounted = false
    }
}, [])
  return (
    <div className="posts" >
      {news.map((value, index) => {
        return(
          <div className="post" key={index}>
          <img src={value.urlToImage} alt="" />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">Author: {value.author}</span>
            </div>
            <span className="postTitle">{value.title}</span>
            <hr />
            <span className="postTime">{value.publishedAt}</span>
          </div>
          <Link to={`./posts${index}`}>
          <p className="postDesc">{value.content}</p>
          </Link>
          </div>
        )
      })}
    </div>    
  );
};

export default Posts;
