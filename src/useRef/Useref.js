// import React, { useState, useRef } from "react";

// function Useref() {
//   const [username, setUsername] = useState("");
//   const inputRef = useRef(null); // Create a ref to hold the input element

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Username:", inputRef.current.value); // Access the input value using the ref
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username:</label>
//       <input
//         type="text"
//         id="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         ref={inputRef} // Assign the ref to the input element
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Useref;
import React, { useEffect } from "react";

function Useref() {
  const handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";
    console.log("App is visible:", isVisible);
    // Perform actions based on the visibility state, like pausing timers, updating UI, etc.
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    handleVisibilityChange(); // Initial check

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // ... rest of your app components

  return <div>{/* Your app content */}"something</div>;
}

export default Useref;

// import React, { useEffect, useRef } from "react";

// function Useref() {
//   const inactivityTimeout = useRef(null);

//   useEffect(() => {
//     const handleInactivity = () => {
//       // Display notification here, e.g., using a modal or toast
//       console.log("User inactive for longer than 5 seconds!");
//     };

//     const handleMouseMove = () => {
//       clearTimeout(inactivityTimeout.current);
//       console.log(inactivityTimeout.current);
// inactivityTimeout.current = setTimeout(handleInactivity, 5000); // Adjust timeout as needed

//       console.log(inactivityTimeout.current);
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       console.log(
//         "the inactiviitytimeout after the removelistner",
//         inactivityTimeout.current
//       );
//       clearTimeout(inactivityTimeout.current);
//     };
//   }, []);

//   return <div>{/* Your app content */}</div>;
// }

// export default Useref;
