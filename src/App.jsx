import { useState, useRef, useReducer, useCallback } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    case "EDIT":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isEditing: !item.isEditing } //수정한 콘텐츠 안 보임
          : item
      );
    case "handleEditText":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, content: action.content }
          : item
      );

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockDate);
  const idRef = useRef(2);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback(() => {
    (targetId) => {
      dispatch({
        type: "DELETE",
        targetId: targetId,
      });
    };
  }, []);

  const onEdit = useCallback((targetId) => {
    dispatch({
      type: "EDIT",
      targetId: targetId,
    });
  },[]);

  const handleEditText = useCallback((e, targetId) => {
    dispatch({
      type: "handleEditText",
      targetId: targetId,
      event: e,
    });
  },[]);

  return (
    <div className="App">
      {/* <Exam/> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onEdit={onEdit}
        handleEditText={handleEditText}
      />
    </div>
  );
}

export default App;
