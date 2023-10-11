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
    [
      {
        text: "Small Secondary Text ",
        classNames: "text-small text-secondary",
      },
      { text: "Big Primary Text ", classNames: "text-big text-primary" },
    ],
  ]);

  return (
    <>
      <a
        href="https://www.npmjs.com/package/react-awesome-typewriter"
        target="_blank"
      >
        <img src="https://img.shields.io/badge/package-npm-red?style=flat-square&logo=npm" />
      </a>
      <h1>
        <ReactAwesomeTypewriter
          options={[[{ text: "React Awesome Typewriter" }]]}
        />
      </h1>
      <div style={{ height: "80px" }}>
        <p>
          <ReactAwesomeTypewriter options={options} cursorGap="5px" />
        </p>
      </div>

      <p className="text-small">
        <a
          href="https://www.npmjs.com/package/react-awesome-typewriter"
          target="_blank"
        >
          Visit package
        </a>
      </p>

      <p style={{ display: "flex", justifyContent: "center" }}>
        Built by:{" "}
        <a
          href="https://www.divyaswormakai.com.np"
          target="_blank"
          style={{ paddingRight: "5px", paddingLeft: "5px" }}
        >
          Divyaswor Makai Shrestha
        </a>
        with ❤️
      </p>
    </>
  );
}

export default App;
