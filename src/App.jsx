import { useRef } from "react";
import VideoPlayerMulti from "./VideoPlayerMulti";

function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Video Player using useRef</h2>

      <video
        ref={videoRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <div style={{ marginTop: "15px" }}>
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward 5s</button>
        <button onClick={rewindVideo}>⏪ Rewind 5s</button>
      </div>
    </div>
  );
}

export default App;
