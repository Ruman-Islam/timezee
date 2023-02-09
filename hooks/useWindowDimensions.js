import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 1536,
  });
  useEffect(() => {
    const { innerWidth: width } = window;
    function handleResize() {
      setWindowDimensions({
        width,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowDimensions;
}
