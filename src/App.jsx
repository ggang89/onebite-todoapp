import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";
import "./App.css";

const mockDate = [
  {
    id: 0,
    isDone: false,
    isEditing: false,
    content: "React Study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isEditing: false,
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
      isEditing: false,
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

  const onDelete = (targetId) => {
    const newArr = todos.filter((todo) => todo.id !== targetId);
    setTodos(newArr);
  };
  const onEdit = (targetId) => {
    const newArr = todos.map((todo) => {
      if (todo.id === targetId) {
        return { ...todo, isEditing: !todo.isEditing };
      } else {
        return todo;
      }
    });
    setTodos(newArr);
  };
  const handleEditText = (e, targetId) => {
    const newArr = todos.map((todo) => {
      if (todo.id === targetId) {
        return { ...todo, content: e.target.value };
      } else {
        return todo;
      }
    });
    setTodos(newArr);
  };

  return (
    <div className="App">
      <Exam/>
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onEdit={onEdit}
        handleEditText={handleEditText}
      /> */}
    </div>
  );
}

export default App;
