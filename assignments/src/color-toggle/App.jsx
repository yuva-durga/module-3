import { useState } from "react";

export default function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: "200px",
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue"
        }}
      >
        Color Toggle Box
      </div>

      <br />

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}
