import React, { useState, useEffect, useRef } from "react";

function CounterTest() {
  const [fontState, setFontState] = useState(5);
  const fontRef = useRef(5);

  useEffect(() => {
    setInterval(() => {
      setFontState((fontRef.current += 1));
    }, 1000);
  }, []);

  return (
    <div>
      <div style={{ fontSize: "15 px" }}>안녕 {fontState}</div>
    </div>
  );
}

export default CounterTest;