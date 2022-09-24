import { useState } from "react";
import "./App.css";

var emojiList = {
  "😀": "Grinning Face",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo"
};
var emojis = Object.keys(emojiList);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var input = event.target.value;

    meaning = emojiList[input];
    if (meaning === undefined) {
      meaning = "Symbol is not in database";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    meaning = emojiList[flag];
    if (meaning === undefined) {
      meaning = "Symbol is not in database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input className="input-txt" onChange={inputHandler}></input>
      <div className="output-txt">{meaning}</div>
      <div style={{ fontSize: "larger" }}>Emojis in the database are</div>
      {emojis.map((emoji) => {
        return (
          <span
            className="emoji-list"
            key={emoji}
            onClick={() => clickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
