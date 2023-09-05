import React, { useState } from "react";
import '../App.css'

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
    <div className="container" style={{textAlign:'center'}}>
      <h1>Password Generator</h1>
      <div className="backTheame">
      <div>
        <label>PASS LENGTH:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>Include Uppercase:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div>
        <label>Include Lowercase:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </div>
      <div>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div>
        <label>Include Special Characters:</label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
      </div>
      <button className="btn btn-primary" onClick={generatePassword}>
        Generate Password
      </button>
      <div>
        <label>Generated Password:</label>
        <input type="text" readOnly value={password} />
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
