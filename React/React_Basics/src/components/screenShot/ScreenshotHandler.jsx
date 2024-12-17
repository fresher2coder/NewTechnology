import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const ScreenshotHandler = ({ targetRef }) => {
  const captureScreenshot = async () => {
    if (targetRef.current) {
      const canvas = await html2canvas(targetRef.current);
      const imgData = canvas.toDataURL("./image/png");

      // Save or handle the screenshot (e.g., log it)
      console.log("Screenshot captured:", imgData);
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      captureScreenshot();
    };

    // Attach event listeners for user interactions
    window.addEventListener("click", handleInteraction);
    window.addEventListener("input", handleInteraction);
    window.addEventListener("keypress", handleInteraction);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("input", handleInteraction);
      window.removeEventListener("keypress", handleInteraction);
    };
  }, [targetRef]);

  return null; // No UI; purely functional
};

export default ScreenshotHandler;
