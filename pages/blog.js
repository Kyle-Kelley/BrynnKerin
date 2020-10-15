import Layout from "../components/Layout";
import PostList from "../components/PostList";

export default function Index({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  // Create an instance of the Contentful JavaScript SDK
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch all entries of content_type `blogPost`
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}

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
