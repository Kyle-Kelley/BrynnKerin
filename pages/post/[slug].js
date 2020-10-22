import React from "react";
import Head from "next/head";
import Post from "../../components/Post";
import * as Contentful from "contentful";

export default function Slug({ post }) {
  return (
    <>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <Post post={post} />
    </>
  );
}

export async function getStaticProps(context) {
  const client = Contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const result = await client
    .getEntries({
      content_type: "blogPost",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items);

  const post = result.pop();

  if (!post) {
    return { props: {} };
  }
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const client = Contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items);

  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
