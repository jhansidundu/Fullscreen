import React, { useEffect } from "react";
import { useState } from "react";
function Fullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(
    document.fullscreenElement !== null
  ); // Initial state

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    // Add listeners for various fullscreen API events
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    // ... (for other prefixes based on browser support)

    // Cleanup on unmount
    return () => {
      document.removeEventListener(
        "fullscreenconschange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      // ... (remove other listeners)
    };
  }, []);

  // Use isFullscreen state in your app's logic
  // ...

  return (
    <div>
      <button>{isFullscreen ? "exitfullscreen" : "gotofullscreen"}</button>
    </div>
  );
}

export default Fullscreen;
