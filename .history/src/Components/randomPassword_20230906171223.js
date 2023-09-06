import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function RandomPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [darkMode, setDarkMode] = useState(false);

  const darkmodeHandler = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "gray";
      document.body.style.color = "black";
    }
  };

  const generatePassword = () => {
    const charlist =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]|:;<>,.?/~`abcdefghijklmnopqrstuvwxyz0123456789";
    const lengthOfChar = charlist.length;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * lengthOfChar);
      newPassword += charlist[randomIndex];
    }
    setPassword(newPassword);
  };
  return (
    <div className="m-1">
      <button
        className="btn btn-warning"
        onClick={() => {
          darkmodeHandler();
        }}
      >
        darkmode
      </button>
      <div className="text-center m-3">
        <div>
            <button>-</button>
          <label>Length : {length}</label>{" "}
          <input
            className="lengthInput"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generatePassword();
              }
            }}
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <button
          className="btn btn-danger m-3"
          onClick={() => generatePassword()}
        >
          Generate
        </button>
        <h4>
          Your Password is here :{" "}
          <span className="text-red-600 font-bold text-2xl">{password}</span>
        </h4>
      </div>
    </div>
  );
}
