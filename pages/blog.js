import React from "react";
import { useState, useEffect } from "react";
// import Post from "../components/Post";
import * as Contentful from "contentful";
import PostList from "../components/PostList";

// const Contentful = require("contentful");

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

  // const myPosts = posts.map((post) => {
  //   <div className="post" key={post.sys.id}>
  //     <h1>{post.fields.title}</h1>
  //     {post.fields.description}
  //   </div>;
  // });

  // <p>
  //       {entry.map((post) => {
  //         <div className="post" key={post.sys.id}>
  //           <h1>{post.fields.title}</h1>
  //           {post.fields.description}
  //         </div>;
  //       })}
  //     </p>

  return (
    <div>
      <h1>Hello!</h1> the following: {JSON.stringify(posts)}
      <PostList posts={posts} />
    </div>
  );
}

// export async function getStaticProps() {
//   // Create an instance of the Contentful JavaScript SDK
//   const client = require("contentful").createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   // Fetch all entries of content_type `blogPost`
//   const posts = await client
//     .getEntries({ content_type: "blogPost" })
//     .then((response) => response.items);

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// import React from "react";
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Post from "../components/Post";

// const client = require("contentful").createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export default function Blog() {
//   async function fetchEntries() {
//     const entries = await client.getEntries();
//     if (entries.items) return entries.items;
//     console.log(`Error getting Entries for ${contentType.name}.`);
//   }

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function getPosts() {
//       const allPosts = await fetchEntries();
//       setPosts([...allPosts]);
//     }
//     getPosts();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Brynn Kerin's BLog</title>
//       </Head>
//       {posts.length > 0
//         ? posts.map((p) => (
//             <Post
//               title={p.fields.title}
//               description={p.fields.description}
//               body={p.fields.body}
//               pubDate={p.fields.publishedDate}
//             />
//           ))
//         : null}
//     </>
//   );
// }
