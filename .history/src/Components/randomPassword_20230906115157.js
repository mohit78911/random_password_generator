import React, { useState } from "react";

export default function RandomPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const charlist =
      (includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]|:;"<>,.?/~`" : "") +
      (includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
      (includeNumbers ? "0123456789" : "") +
      (includeSpecialChars ? '' : "");

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charlist.length);
      newPassword += charlist[randomIndex];
    }
    setPassword(newPassword);
  };
  return (
    <div>
      <div className="text-center m-3">
        <div>
        <label>Length : </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        </div>
        <div>
        <label>Include Uppercase : </label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        /></div>
        <div>
        <label>Include lowercase : </label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        /></div>
        <div>
        <label>Include Number : </label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        /></div>
        <div>
        <label>Include Number : </label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        /></div>
        <button className="btn btn-danger" onClick={()=>generatePassword()}>Generate</button>
        <h4>Your Password is here : {password}</h4>
      </div>
    </div>
  );
}
