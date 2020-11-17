import React, { useRef } from "react";
import "./App.css";

import Intro from "./components/Intro";
import MainProjects from "./components/MainProjects";
import MiniProjects from "./components/MiniProjects";
import More from "./components/More";

function App() {
  return (
    <div>
      <Intro />
      <More />
      <MainProjects />
      <MiniProjects />
    </div>
  );
}

export default App;
