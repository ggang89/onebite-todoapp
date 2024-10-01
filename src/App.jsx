import { useState } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css"

const mockDate = [
  {
    id: 0,
    isDone: false,
    content: "React Study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: " Study",
    date: new Date().getTime(),
  },
];

function App() {
  
  const [todos, setTodos] = useState(mockDate);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
