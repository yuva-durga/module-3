export default function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
      <p><b>User:</b> {userId}</p>
      <p><b>Title:</b> {title}</p>
      <p><b>Completed:</b> {completed ? "Yes" : "No"}</p>
    </div>
  );
}
