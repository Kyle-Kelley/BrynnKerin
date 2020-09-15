import Link from "next/link";
import { Headpost } from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <Headpost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more</a>
      </Link>
    </article>
  );
};
