

export default function Header() {
  
  return (
    <div className="Header">
      <h2>오늘은 📅</h2>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}