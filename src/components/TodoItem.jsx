export default function TodoItem({ id, isDone, content, date }) {
  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>식제</button>
    </div>
  );
}
