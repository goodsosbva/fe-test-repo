import "./App.css";
import { useState, useRef } from "react";
import { kebabCasteToTitleCase } from "./helpers.js";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [isDisabled, setIsDisabled] = useState(false);
  // const originalColor = useRef("red");
  const newButtonColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleCase = kebabCasteToTitleCase(newButtonColor);
  const className = isDisabled ? 'gray' : buttonColor;

  function disabledHandler(e) {
      const chk = e.target.checked;
      setIsDisabled(chk);
      // if (chk) {
      //     originalColor.current = buttonColor;
      //     setButtonColor('gray');
      // } else {
      //     setButtonColor(originalColor.current);
      // }
  }

  return (
      <div
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
          }}
      >
      <button
        className={className}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {nextColorTitleCase}
      </button>
      <br />
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={isDisabled} onChange={disabledHandler} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
