import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://haljeby.wordpress.com?rest_route=/wp/v2/posts")
      .then((response) => {
        debugger;
        setBlogPosts(response);
      });
  });
  let displaysNews;
  if (blogPosts !== undefined) {
    displaysNews = blogPosts.map((post) => {
      return <div>{post}</div>;
    });
  }
  return <div>{displaysNews}</div>;
};

export default News;
