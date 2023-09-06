import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function RandomPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [darkMode, setDarkMode] = useState(false);

  //   const darkmodeHandler = () => {
  //     setDarkMode(!darkMode);
  //     if (darkMode) {
  //       document.body.style.background = "black";
  //       document.body.style.color = "white";
  //     } else {
  //       document.body.style.background = "gray";
  //       document.body.style.color = "black";
  //     }
  //   };

  //randompassword generate handler
  const generatePassword = () => {
    const charlist =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]|:;<>,.?/~`abcdefghijklmnopqrstuvwxyz0123456789";
    const lengthOfChar = charlist.length;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * lengthOfChar);
      newPassword = newPassword + charlist[randomIndex];
    }
    setPassword(newPassword);
  };

  //increament decreament handler
  const increamentHandler = () => {
    setLength(length + 1);
  };
  const decreamentHandler = () => {
    if (length === 0) {
      alert("Isse Chota Password Nhi Hai Mere Pass");
    } else {
      setLength(length - 1);
    }
  };

  //reset handler
  const resetAll = () => {
    let conf = window.confirm("Are You Sure ?");
    if (conf) {
      setPassword("");
      setLength(6);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
        Random Password Generator
      </h1>
      <div className="m-1 mainContainer">
        {/* <button
            className="btn btn-warning"
            onClick={() => {
            darkmodeHandler();
            }}
        >
            darkmode
        </button> */}
        <div className="text-center m-3 passGen">
        <label className="opacity-30">PASSW</label>
          <div className="lengthContain">
            <button
              className="btn btn-dark m-3"
              onClick={() => decreamentHandler()}
            >
              -
            </button>
            <span className="text-black text-4xl font-bold">{length}</span>
            <button
              className="btn btn-dark m-3"
              onClick={() => increamentHandler()}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-danger mt-2"
            onClick={() => generatePassword()}
          >
            Generate
          </button>
          <button
            onClick={() => resetAll()}
            className="btn btn-warning mt-2 ml-1"
          >
            RESET
          </button>
          <h4>
            Your Password is here :{" "}
            <span
              className="text-black font-bold text-2xl"
              style={{ wordWrap: "break-word" }}
            >
              {password}
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}
