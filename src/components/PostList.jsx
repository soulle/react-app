import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title }) => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <ul>
        {posts.map((post, i) => (
          <PostItem number={i + 1} post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
};
