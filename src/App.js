import React, { useRef, useState } from "react";
import { PostList } from "./components/PostList";
import { MyInput } from "./components/UI/button/input/MyInput";
import { MyButton } from "./components/UI/button/MyButton";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Title 1", body: "Description 1" },
    { id: 2, title: "Title 2", body: "Description 2" },
    { id: 3, title: "Title 3", body: "Description 3" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { id: Date.now(), title: post.title, body: post.body };
    setPosts([...posts, newPost]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="app">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
