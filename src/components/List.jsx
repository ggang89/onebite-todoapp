import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";

export default function List() {
  const { todos } = useContext(TodoContext);
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🍀</h4>
      <div>total : {totalCount}</div>
      <div>done : {doneCount}</div>
      <div> notDont : {notDoneCount}</div>
      <input
        value={search}
        onChange={handleSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="TodosWrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}
