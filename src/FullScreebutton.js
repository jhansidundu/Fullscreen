import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const FullScreebutton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    function trackFullscreen() {
      const isFullscreen = document.fullscreenElement !== null;
      // Perform actions based on whether fullscreen is on or off
      if (!isFullscreen) {
        alert("please don't leave the fullscreen");
        setIsFullscreen(false);
      }
    }
    document.addEventListener("fullscreenchange", trackFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    if (!elementRef.current) {
      return;
    }

    if (isFullscreen) {
      await alert("you are leaving the screen");
      document.exitFullscreen();

      setIsFullscreen(false);
    } else {
      elementRef.current.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div>
      <button ref={elementRef} onClick={toggleFullscreen}>
        {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
      </button>
    </div>
  );
};

export default FullScreebutton;
