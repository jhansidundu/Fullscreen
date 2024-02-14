import React, { useRef } from "react";
import { useEffect } from "react";
const FullScreebutton = () => {
  const myElementRef = useRef(null);
  const handleFullscreenClick = () => {
    const myElement = myElementRef.current;
    if (myElement) {
      if (myElement.requestFullscreen) {
        myElement.requestFullscreen();
      } else if (myElement.mozRequestFullScreen) {
        myElement.mozRequestFullScreen();
      } else if (myElement.webkitRequestFullscreen) {
        myElement.webkitRequestFullscreen();
      }
    } else {
      console.log('The element with ref "my-element" does not exist.');
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleExit);
    document.addEventListener("webkitfullscreenchange", handleExit);
    document.addEventListener("mozfullscreenchange", handleExit);

    return () => {
      document.removeEventListener("fullscreenchange", handleExit);
      document.removeEventListener("webkitfullscreenchange", handleExit);
      document.removeEventListener("mozfullscreenchange", handleExit);
    };
  }, []);

  const handleExit = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      console.log("User attempted to exit fullscreen.");
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      // Check if the page is currently hidden using the Page Visibility API.
      // If it is hidden, re-enter fullscreen mode.
      if (
        document.hidden ||
        document.webkitHidden ||
        document.mozHidden ||
        window.screen.width !== window.innerWidth ||
        window.screen.height !== window.innerHeight
      ) {
        handleFullscreenClick();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      handleFullscreenClick();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        ref={myElementRef}
        onClick={handleFullscreenClick}
        style={{ width: "500px", height: "300px", background: "lightblue" }}
      >
        Click me
      </div>{" "}
    </div>
  );
};

export default FullScreebutton;
