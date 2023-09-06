import React, { useState } from "react";
import "../App.css";

export default function RandomPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);

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
      <div className="text-center m-3">
        <div >
          <label>Length : </label>{" "}
          <input
            className="lengthInput"
            onKeyDown={(e)=>{if(e.key === 'Enter'){
                
            }}}
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <button className="btn btn-danger" onClick={() => generatePassword()}>
          Generate
        </button>
        <h4>Your Password is here : {password}</h4>
      </div>
    </div>
  );
}
