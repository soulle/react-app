import React, { useState } from "react";
import { ClassCounter } from "./components/ClassCounter";
import { Counter } from "./components/Counter";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
