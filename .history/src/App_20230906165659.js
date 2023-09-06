import React from "react";
import Api from "./Api";
import PasswordGenerator from "./Components/PasswordGenerator";
import RandomPassword from "./Components/RandomPassword";
export default function App() {
  return (
    <div>
      <PasswordGenerator/>
      <RandomPassword />
      {/* <Api/> */}
    </div>
  );
}
