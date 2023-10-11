import { useState } from "react";
import ReactAwesomeTypewriter from "react-awesome-typewriter";

import "./App.css";

function App() {
  const [options] = useState([
    [
      { text: "Primary Text ", classNames: "text-primary text-big" },
      { text: "Secondary Text ", classNames: "text-secondary text-big" },
      { text: "Normal Text ", classNames: "text-big" },
    ],
    [
      { text: "Big Text ", classNames: "text-big" },
      { text: "Small Text", classNames: "text-small" },
    ],
  ]);

  return (
    <>
      <h1>
        <ReactAwesomeTypewriter
          options={[[{ text: "React Awesome Typewriter" }]]}
        />
      </h1>
      <div style={{ height: "200px" }}>
        <p>
          <ReactAwesomeTypewriter options={options} cursorGap="5px" />
        </p>
      </div>
    </>
  );
}

export default App;
