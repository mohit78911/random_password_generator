import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function RandomPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [includeUppercase, setIncludeUppercase] = useState(true);
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

  const getdatahandler = async () => {
    const options = {
      method: "GET",
      url: "https://ott-details.p.rapidapi.com/advancedsearch",
      params: {
        start_year: "1970",
        end_year: "2020",
        min_imdb: "6",
        max_imdb: "7.8",
        genre: "action",
        language: "english",
        type: "movie",
        sort: "latest",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key":
          "7a0b0ccac1msh682d91659ad1f84p1ab359jsn0979ccdd10ab",
        "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
        <button></button>
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
          <label>Length : </label>{" "}
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
