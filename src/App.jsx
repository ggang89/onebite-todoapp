import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";

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
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    //todos State 값 중에
    //targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    const newArr = todos.map((todo) => {
      if (targetId === todo.id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    //삼항연산자로 간략히
    //todos.map((todo)=>todo.id===targetId ?
    //{...todo, isDone: !todo.isDone }:todo)
    setTodos(newArr);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
