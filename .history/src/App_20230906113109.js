import React from "react";
import PasswordGenerator from "./Components/PasswordGenerator";
import randomPassword from 'module'
export default function App() {
  return (
    <div>
      <PasswordGenerator/>
      <randomPassword/>
    </div>
  );
}
