import React, { useState } from "react";
import { PostList } from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Title 1", body: "Description 1" },
    { id: 2, title: "Title 2", body: "Description 2" },
    { id: 3, title: "Title 3", body: "Description 3" },
  ]);

  return (
    <div className="app">
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
