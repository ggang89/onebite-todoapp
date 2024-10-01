import TodoItem from "./TodoItem";

export default function List() {
  
  return (
    <div className="List">
      <h4>Todo List 🍀</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="TodosWrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}