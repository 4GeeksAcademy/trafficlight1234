import React, { useEffect, useState } from "react";

export default function TrafficLight({ trafficStates }) {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor, trafficStates]);  // Include currentColor in the dependency array

  return (
    <div className="traffic-light-container">
      {Object.keys(trafficStates).map((color) => (
        <div
          key={color}  // Add a unique key for each element in the map
          className="traffic-light"
          style={{
            backgroundColor:
              color === currentColor && trafficStates[color].backgroundColor
          }}
        />
      ))}
    </div>
  );
}
