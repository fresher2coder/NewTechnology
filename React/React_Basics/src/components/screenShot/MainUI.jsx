import React, { useRef } from "react";
import ScreenshotHandler from "./ScreenshotHandler";

const MainUI = () => {
  const mainUIRef = useRef(null);

  return (
    <div ref={mainUIRef} style={{ padding: "20px", textAlign: "center" }}>
      <h1>React Screenshot Example</h1>
      <input type="text" placeholder="Type something" />
      <button>Click Me</button>

      {/* Include the ScreenshotHandler for this component */}
      <ScreenshotHandler targetRef={mainUIRef} />
    </div>
  );
};

export default MainUI;
