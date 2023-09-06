import React, { useState } from "react";

export default function randomPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const charlist =
      (includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
      (includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "") +
      (includeNumbers ? "0123456789" : "") +
      (includeSpecialChars ? '!@#$%^&*()_+{}[]|:;"<>,.?/~`' : "");

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charlist.length);
      newPassword += charlist[randomIndex];
    }
    setPassword(newPassword);
  };
  return (
    <div>
      <div>
        <label>Length : </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Include Uppercase : </label>
        <input type='checkbox' checked={includeUppercase} onChange/>

      </div>
    </div>
  );
}