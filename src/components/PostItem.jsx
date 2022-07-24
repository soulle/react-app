import React from "react";

export const PostItem = ({ post }) => {
  const { title, body } = post;

  return (
    <li className="post">
      <div className="post__content">
        <h4>
          <strong>{title}</strong>
        </h4>
        <p>{body}</p>
      </div>
      <button>Удалить</button>
    </li>
  );
};
