import React, { useState } from "react";
import "../App.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const charset =
      (includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
      (includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
      (includeNumbers ? "0123456789" : "") +
      (includeSpecialChars ? '!@#$%^&*()_+{}[]|:;"<>,.?/~`' : "");

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword = newPassword + charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ color: "white" }}>PASSWORD GENERATOR</h1>
      <div className="backTheame">
        <div>
          <label>PASSWORD LENGTH : </label>{" "}
          <input
          onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              
            }
          }}
            className="inputfield"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div>
          <label>INCLUDE UPPERCASE : </label>{" "}
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
        </div>
        <div>
          <label>INCLUDE LOWERCASE : </label>{" "}
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
        </div>
        <div>
          <label>INCLUDE NUMBER : </label>{" "}
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </div>
        <div>
          <label>INCLUDE SPECIAL CHARACTERS : </label>{" "}
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
        </div>
        <button className="btn btn-primary" onClick={generatePassword}>
          GENERATE PASSWORD
        </button>
        <div>
          <label>
            YOUR NEW PASSWORD IS :{" "}
            <span style={{ fontWeight: "bold", wordBreak: "break-word" }}>
              {password}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
