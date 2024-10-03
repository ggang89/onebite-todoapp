import { useState } from "react";

export default function TodoItem({
  id,
  isDone,
  isEditing,
  content,
  date,
  onUpdate,
  onDelete,
  onEdit,
  handleEditText,
}) {
  //const [input, setInput] = useState(content);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const deleteBtn = () => {
    onDelete(id);
  };
  const editBtn = () => {
    onEdit(id);
  };
  const handleEditInput = (e) => {
    handleEditText(e, id);
    // setInput(input);
  };
  return (
    <>
      {isEditing ? (
        <div className="EditTodoItem">
          <input onChange={handleEditInput} value={content} />
          <button onClick={editBtn}>저장</button>
        </div>
      ) : (
        <div className="TodoItem">
          <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
          <div className="content">
            {isDone ? <p className="checkTodo">{content}</p> : content}
          </div>
          <div className="date">{new Date(date).toLocaleDateString()}</div>
          <button onClick={editBtn}>수정</button>
          <button onClick={deleteBtn}>삭제</button>
        </div>
      )}
    </>
  );
}
