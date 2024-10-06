import { memo } from "react";

function TodoItem({
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

// 고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   //True => Props 바뀌지 않음 => 리렌더링 X
//   //False => Props 바뀜 => 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
