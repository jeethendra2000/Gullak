import React, { useRef } from 'react';
import Piggy from './assets/piggy.webm';
import './App.css';
import './Gullak.css';

function App() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to beginning
      videoRef.current.play();
    }
  };

  return (
    <div>
      <h2>Start timer</h2>

      <video
        ref={videoRef}
        src={Piggy}
        muted
        playsInline
        controls={false}
        style={{ width: '200px', height: 'auto' }}
        onEnded={() => console.log('Animation ended')} // Optional
      />

      <br />

      <button onClick={handlePlay}>Play Animation</button>
    </div>
  );
}

export default App;
