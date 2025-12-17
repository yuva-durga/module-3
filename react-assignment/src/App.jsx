import MessageCard from "./messagecard/MessageCard";

function App() {
  return (
    <div>
      <h2>Message Cards</h2>

      <MessageCard title="Hello" message="Welcome to React" />
      <MessageCard title="Info" message="Props are reusable" />
      <MessageCard title="Note" message="Each card is different" />
    </div>
  );
}

export default App;




