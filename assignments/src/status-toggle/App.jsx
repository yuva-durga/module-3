import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function App() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}
