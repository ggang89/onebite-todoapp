export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const deleteBtn = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">
        {isDone ? <p className="checkTodo">{content}</p> : content}
      </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={deleteBtn}>삭제</button>
    </div>
  );
}
