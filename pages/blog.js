import React from "react";
import { useState, useEffect } from "react";
import Post from "../components/Post";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Blog() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <div>
      {posts.length > 0
        ? posts.map((p) => (
            <Post
              date={p.fields.publishedDate}
              key={p.fields.title}
              author={p.fields.author}
              title={p.fields.title}
              url={p.fields.slug}
            />
          ))
        : null}
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
