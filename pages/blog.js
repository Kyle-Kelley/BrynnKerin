import React from "react";
import { useState, useEffect } from "react";
import * as Contentful from "contentful";
import PostList from "../components/PostList";

const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt",
      })
      .then((response) => {
        setPosts(response.items);
        console.log(response.items);
      });
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <PostList posts={posts} />
    </div>
  );
}

// the following: {JSON.stringify(posts)}
