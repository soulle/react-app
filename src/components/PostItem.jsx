import React from "react";

export const PostItem = ({ post }) => {
  const { title, body } = post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>{title}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};
