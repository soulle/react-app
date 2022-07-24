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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { id: Date.now(), title, body };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="app">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
