import React from "react";

import TrafficLight from "/workspaces/trafficlight1234/src/js/component/Trafficlight.js";

import "/workspaces/trafficlight1234/src/styles/index.css";

const trafficStates = {
  red: {
    backgroundColor: "red",
    duration: 4000,
    next: "green"
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 500,
    next: "red"
  },
  green: {
    backgroundColor: "green",
    duration: 3000,
    next: "yellow"
  }
};

export default function App() {
  return (
    <div className="wrapper">
      <TrafficLight trafficStates={trafficStates} />
    </div>
  );
}