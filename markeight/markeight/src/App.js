import { useState } from "react";
import "./App.css";

var flagList = {
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",
  "🇹🇼": "Taiwan",
  "🇧🇭":"Bahrain",
  "🇧🇴":"Bolivia",
  "🇧🇹":"Bhutan",
  "🇨🇳":"China",
  "🇩🇲":"Dominica"
};
var flags = Object.keys(flagList);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var input = event.target.value;

    meaning = flagList[input];
    if (meaning === undefined) {
      meaning = "Symbol is not in database";
    }
    setMeaning(meaning);
  }

  function clickHandler(flag) {
    meaning = flagList[flag];
    if (meaning === undefined) {
      meaning = "Symbol is not in database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Flag Translator</h1>
      <input className="input-txt" onChange={inputHandler}></input>
      <div className="output-txt">{meaning}</div>
      <div style={{ fontSize: "larger" }}>Flags in the database are</div>
      {flags.map((flag) => {
        return (
          <span
            className="flag-list"
            key={flag}
            onClick={() => clickHandler(flag)}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
