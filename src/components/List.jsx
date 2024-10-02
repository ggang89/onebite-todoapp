import TodoItem from "./TodoItem";
import { useState } from "react";

export default function List({ todos, onUpdate }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredTodos = getFilteredDate();
  return (
    <div className="List">
      <h4>Todo List 🍀</h4>
      <input
        value={search}
        onChange={handleSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="TodosWrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
}
