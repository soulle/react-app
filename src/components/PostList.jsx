import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title }) => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <ul>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
};
