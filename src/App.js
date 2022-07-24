import React, { useState } from "react";
import { PostItem } from "./components/PostItem";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <PostItem />
    </div>
  );
}

export default App;
