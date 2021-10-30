import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }
  function HandleMouseOver() {
    setButtonColor(true);
  }
  function HandleMouseOut() {
    setButtonColor(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={HandleMouseOut}
        style={{ backgroundColor: buttonColor ? "black" : "white" }}
        onMouseOver={HandleMouseOver}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
